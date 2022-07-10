// force HTTPS
// Source: https://stackoverflow.com/questions/4723213/
if (location.protocol == 'http:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

const COLOR_NAMES = [];

async function fetchColorNames() {
    let resp = await fetch("data/colornames.min.json");
    let data = await resp.json();
    for (let color in data) {
        COLOR_NAMES.push({
            color: hexToRgb(color),
            name: data[color]
        });
    }
}


// fetch database first
fetchColorNames();


window.addEventListener("DOMContentLoaded", main);


async function main() {

    const FPS = 30;
    const CALCULATION_CYCLE_MULT = 0.5; // value b/w 0 - 1
    const DEFAULT_RESOLUTIONS = [240, 360, 480, 540, 720, 1080, 1440, 2560];
    let curStream = null;
    let video = document.querySelector("#out-vid-container video");
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");

    let cameraSettings = {
        width: 720,
        height: 720,
        camID: undefined
    }

    let sampleSize = 64;
    let isPuased = false;

    let nextCalTime = 0;


    // init video element
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');


    // init sample size input 
    document.querySelector("#sample-size-input").addEventListener("input", (evt) => {
        sampleSize = evt.target.value;
        document.querySelector("#controls #sample-size .text-data").innerText = sampleSize + "x" + sampleSize;
    });

    //init pause button
    document.querySelector("#pause-sampling").addEventListener(("click"), togglePause);

    // check camera
    let cameraPermissionStat = null;

    try {
        cameraPermissionStat = await navigator.permissions.query({ name: 'camera' });
    } catch (error) {
        console.log("Cannot check camera permission.");
    }

    // only run if cameraPermissionStat is available
    if (cameraPermissionStat) {
        if (cameraPermissionStat.state === "granted") {
            // init camera list selector
            initCameraList();
        } else {
            prompCameraRequired();
        }

        cameraPermissionStat.onchange = ((e) => {
            // detecting if the event is a change
            if (e.type === 'change') {
                // checking what the new permissionStatus state is
                const newState = e.target.state
                if (newState === 'denied') {
                    prompCameraRequired();
                } else if (newState === 'granted') {
                    initCameraList();
                } else {
                    prompCameraRequired();
                }
            }
        });
    }


    // init camera select input listener
    document.querySelector("#camera-options").addEventListener("change", (evt) => {

        cameraSettings.camID = evt.target.value;


        initCamera(cameraSettings).then(stream => curStream = stream);
        // initCamera(cameraSettings);

        if (isPuased) togglePause();
    });

    // init resolution select input listener 
    document.querySelector("#res-options").addEventListener("change", (evt) => {


        cameraSettings.width = evt.target.value;
        cameraSettings.height = evt.target.value;

        initCamera(cameraSettings).then(stream => curStream = stream);
        // initCamera(cameraSettings);

        if (isPuased) togglePause();
    });


    curStream = await initCamera(cameraSettings);

    initCanvas();

    function togglePause() {
        togglePauseIcon();

        if (isPuased) {
            initCamera(cameraSettings);
        } else {
            curStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }


        isPuased = !isPuased;
    }

    function togglePauseIcon() {
        document.querySelector("#pause-sampling").querySelector("i").className = isPuased ? "fa-solid fa-pause" : "fa-solid fa-play";
    }

    function initCanvas() {

        video.addEventListener('play', function () {
            var cache = this; //cache
            (function loop() {
                if (!cache.paused && !cache.ended) {
                    ctx.drawImage(cache, 0, 0);

                    let curTime = performance.now();
                    if (curTime > nextCalTime) {
                        let avgColor = getAverageRGB(ctx, canvas.width / 2 - sampleSize / 2, canvas.height / 2 - sampleSize / 2, sampleSize, sampleSize);
                        updateInfoPanel(avgColor);
                        nextCalTime = curTime + 1000 / FPS / CALCULATION_CYCLE_MULT;
                    } // if
                    // draw GUI element after getAverageRGB calculation
                    ctx.strokeStyle = '#0f0';
                    ctx.lineWidth = canvas.width * 0.0025;
                    ctx.strokeRect(canvas.width / 2 - sampleSize / 2, canvas.height / 2 - sampleSize / 2, sampleSize, sampleSize);

                    setTimeout(loop, 1000 / FPS);
                }
            })();
        }, 0);

        // ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // NOTE: Feature not supported in iOS

        // let curTime = performance.now();
        // if (curTime > nextCalTime) {
        //     let avgColor = getAverageRGB(ctx, canvas.width / 2 - sampleSize / 2, canvas.height / 2 - sampleSize / 2, sampleSize, sampleSize);
        //     updateInfoPanel(avgColor);
        //     nextCalTime = curTime + 1000 / FPS / CALCULATION_CYCLE_MULT;
        // } // if

        // // draw GUI element after getAverageRGB calculation
        // ctx.strokeStyle = '#0f0';
        // ctx.lineWidth = canvas.width * 0.0025;
        // ctx.strokeRect(canvas.width / 2 - sampleSize / 2, canvas.height / 2 - sampleSize / 2, sampleSize, sampleSize);

        // setTimeout(loop, 1000 / FPS);
    }


    function prompCameraRequired() {
        console.log("Camera is required!");
    }

    function quickRefresh() {
        frameCache.update();
        isPuased = !isPuased;

        setTimeout(() => {
            frameCache.update();
            isPuased = !isPuased;
        }, 10000 / FPS)
    }

    async function initCameraList() {
        let devices = await navigator.mediaDevices.enumerateDevices();
        let cameraOptions = document.querySelector("#camera-options");

        for (const device of devices) {
            if (device.kind == "videoinput") {
                let camOption = document.createElement("option");

                camOption.value = device.deviceId;
                camOption.innerText = device.label;

                cameraOptions.appendChild(camOption);
            } // if
        }
    }

    function initResolutionInput(res) {
        let resOptions = document.querySelector("#res-options");
        let allowedCount = 0;

        while (resOptions.firstChild != null) {
            resOptions.removeChild(resOptions.firstChild);
        }

        for (let x in DEFAULT_RESOLUTIONS) {

            if (res.height >= DEFAULT_RESOLUTIONS[x] && res.width >= DEFAULT_RESOLUTIONS[x]) {
                let option = document.createElement("option");
                option.value = DEFAULT_RESOLUTIONS[x];
                option.innerText = DEFAULT_RESOLUTIONS[x] + "p";

                resOptions.appendChild(option);
                allowedCount++;
            } else {
                break;
            }
        }

        return DEFAULT_RESOLUTIONS[parseInt(allowedCount / 2)];
    }



    async function initCamera(cameraSettings) {
        let videoParam = null;

        // Close existing stream if defined
        if (curStream) {
            curStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }




        videoParam = {
            width: cameraSettings.width,
            height: cameraSettings.height,
            facingMode: 'environment',
            deviceId: { exact: cameraSettings.camID }
        }

        let stream = await navigator.mediaDevices.getUserMedia({
            video: videoParam,
            audio: false
        });


        video.srcObject = stream;
        video.play();

        let streamSettings = stream.getVideoTracks()[0].getSettings();



        video.addEventListener("loadedmetadata", function (e) {
            initResolutionInput({
                width: 800,
                height: 800
            });

        }, false);

        document.querySelectorAll("#camera-options option").forEach((n) => {
            if (streamSettings.deviceId == n.value) {
                n.selected = true;
            } // if
        });

        document.querySelectorAll("#res-options option").forEach((n) => {
            if (streamSettings.height == n.value) {
                n.selected = true;
            } // if
        });

        // set canvas size = video size when known
        video.addEventListener('loadedmetadata', function () {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        });

        return stream;
    } // initCamera

    function getClosestColor(colorHex) {
        let last = COLOR_NAMES[0];

        let target = hexToRgb(colorHex);
        let minDelta = 100000;

        for (let i in COLOR_NAMES) {
            let cur = COLOR_NAMES[i].color;

            let dr = cur.r - target.r;
            let dg = cur.g - target.g;
            let db = cur.b - target.b;

            let delta = Math.sqrt(dr * dr + dg * dg + db * db);

            if (delta < minDelta) {
                minDelta = delta;
                last = COLOR_NAMES[i];
            }
        }

        return last;
    }

    function updateInfoPanel(avgColor) {
        let rgb = document.querySelector("#rgb");
        let hsv = document.querySelector("#hsv");
        let colorName = document.querySelector("#color-name");

        let avgColorHSV = rgb2hsv(avgColor.r, avgColor.g, avgColor.b);

        document.querySelectorAll(".sample-color-preview").forEach((n) => {
            n.style.backgroundColor = "rgb(" + avgColor.r + ", " + avgColor.g + ", " + avgColor.b + ")";
        })

        rgb.querySelector(".text-data").innerText = avgColor.r + ", " + avgColor.g + ", " + avgColor.b;
        hsv.querySelector(".text-data").innerText = avgColorHSV.h + ", " + avgColorHSV.s + ", " + avgColorHSV.v;

        let closestColor = getClosestColor(rgbToHex(avgColor.r, avgColor.g, avgColor.b));

        if (closestColor != undefined) {

            colorName.querySelector(".text-data").innerText = closestColor.name;

            document.querySelectorAll(".name-color-preview").forEach((n) => {
                n.style.backgroundColor = "#" + closestColor.color;
            })
        }

    }

    https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
    function getAverageRGB(ctx, sx, sy, sw, sh, blockSize) {
        let data,
            i = -4,
            length,
            rgb = { r: 0, g: 0, b: 0 },
            count = 0;

        data = ctx.getImageData(sx, sy, sw, sh);

        length = data.data.length;



        for (let i = 0; i < length; i += 4) {
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];

            count++;
        }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        return rgb;

    }


}


// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
function rgb2hsv(r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
        diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}