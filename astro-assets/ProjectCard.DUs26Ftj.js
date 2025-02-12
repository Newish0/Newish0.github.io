import{G as Kt}from"./iconBase.UTGYQer2.js";import{j as E}from"./jsx-runtime.CLpGMVip.js";import{r as j}from"./index.9yPe82QC.js";import{f as pe,g as Ut,B as At}from"./createLucideIcon.tmfxZQBD.js";import{c as it}from"./index.CV7eGglT.js";function cn(t){return Kt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z"},child:[]}]})(t)}function an(t){return Kt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"},child:[]}]})(t)}const me=pe("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ge({className:t,variant:e,...r}){return E.jsx("div",{className:it(me({variant:e}),t),...r})}const he=({children:t})=>{const e=j.useRef(null),[r,s]=j.useState(.5);return j.useEffect(()=>{const i=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting?(n.target.classList.add("animate-fade-in-up"),n.target.classList.remove("opacity-0"),n.target.classList.remove("animate-fade-out-down"),s(.3)):(n.target.classList.remove("animate-fade-in-up"),n.target.classList.add("animate-fade-out-down"),n.target.classList.add("opacity-0"),s(.5))})},{threshold:r,rootMargin:"0px"});return e.current&&i.observe(e.current),()=>{e.current&&i.unobserve(e.current)}},[r]),E.jsx("div",{className:"opacity-0",ref:e,children:t})};function xe(t){return Object.prototype.toString.call(t)==="[object Object]"}function Gt(t){return xe(t)||Array.isArray(t)}function be(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function jt(t,e){const r=Object.keys(t),s=Object.keys(e);if(r.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==o?!1:r.every(n=>{const u=t[n],c=e[n];return typeof u=="function"?`${u}`==`${c}`:!Gt(u)||!Gt(c)?u===c:jt(u,c)})}function qt(t){return t.concat().sort((e,r)=>e.name>r.name?1:-1).map(e=>e.options)}function ye(t,e){if(t.length!==e.length)return!1;const r=qt(t),s=qt(e);return r.every((i,o)=>{const n=s[o];return jt(i,n)})}function Tt(t){return typeof t=="number"}function Nt(t){return typeof t=="string"}function yt(t){return typeof t=="boolean"}function Zt(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function Pt(t){return Math.sign(t)}function dt(t,e){return M(t-e)}function Se(t,e){if(t===0||e===0||M(t)<=M(e))return 0;const r=dt(M(t),M(e));return M(r/t)}function ve(t){return Math.round(t*100)/100}function pt(t){return mt(t).map(Number)}function V(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Mt(t,e){return e===ht(t)}function $t(t,e=0){return Array.from(Array(t),(r,s)=>e+s)}function mt(t){return Object.keys(t)}function _t(t,e){return[t,e].reduce((r,s)=>(mt(s).forEach(i=>{const o=r[i],n=s[i],u=Zt(o)&&Zt(n);r[i]=u?_t(o,n):n}),r),{})}function It(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Le(t,e){const r={start:s,center:i,end:o};function s(){return 0}function i(c){return o(c)/2}function o(c){return e-c}function n(c,a){return Nt(t)?r[t](c):t(e,c,a)}return{measure:n}}function gt(){let t=[];function e(i,o,n,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,n,u),c=()=>i.removeEventListener(o,n,u);else{const a=i;a.addListener(n),c=()=>a.removeListener(n)}return t.push(c),s}function r(){t=t.filter(i=>i())}const s={add:e,clear:r};return s}function Ee(t,e,r,s){const i=gt(),o=1e3/60;let n=null,u=0,c=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){y(),i.clear()}function d(h){if(!c)return;n||(n=h,r(),r());const f=h-n;for(n=h,u+=f;u>=o;)r(),u-=o;const g=u/o;s(g),c&&(c=e.requestAnimationFrame(d))}function p(){c||(c=e.requestAnimationFrame(d))}function y(){e.cancelAnimationFrame(c),n=null,u=0,c=0}function l(){n=null,u=0}return{init:a,destroy:x,start:p,stop:y,update:r,render:s}}function we(t,e){const r=e==="rtl",s=t==="y",i=s?"y":"x",o=s?"x":"y",n=!s&&r?-1:1,u=x(),c=d();function a(l){const{height:m,width:h}=l;return s?m:h}function x(){return s?"top":r?"right":"left"}function d(){return s?"bottom":r?"left":"right"}function p(l){return l*n}return{scroll:i,cross:o,startEdge:u,endEdge:c,measureSize:a,direction:p}}function nt(t=0,e=0){const r=M(t-e);function s(a){return a<t}function i(a){return a>e}function o(a){return s(a)||i(a)}function n(a){return o(a)?s(a)?t:e:a}function u(a){return r?a-r*Math.ceil((a-e)/r):a}return{length:r,max:e,min:t,constrain:n,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function Qt(t,e,r){const{constrain:s}=nt(0,t),i=t+1;let o=n(e);function n(p){return r?M((i+p)%i):s(p)}function u(){return o}function c(p){return o=n(p),d}function a(p){return x().set(u()+p)}function x(){return Qt(t,u(),r)}const d={get:u,set:c,add:a,clone:x};return d}function Ce(t,e,r,s,i,o,n,u,c,a,x,d,p,y,l,m,h,f,g){const{cross:S,direction:w}=t,T=["INPUT","SELECT","TEXTAREA"],C={passive:!1},v=gt(),L=gt(),N=nt(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},I={mouse:500,touch:600},z=l?43:25;let H=!1,G=0,q=0,W=!1,X=!1,K=!1,U=!1;function ct(b){if(!g)return;function A(F){(yt(g)||g(b,F))&&ut(F)}const O=e;v.add(O,"dragstart",F=>F.preventDefault(),C).add(O,"touchmove",()=>{},C).add(O,"touchend",()=>{}).add(O,"touchstart",A).add(O,"mousedown",A).add(O,"touchcancel",k).add(O,"contextmenu",k).add(O,"click",Q,!0)}function Z(){v.clear(),L.clear()}function rt(){const b=U?r:e;L.add(b,"touchmove",B,C).add(b,"touchend",k).add(b,"mousemove",B,C).add(b,"mouseup",k)}function ot(b){const A=b.nodeName||"";return T.includes(A)}function _(){return(l?I:D)[U?"mouse":"touch"]}function at(b,A){const O=d.add(Pt(b)*-1),F=x.byDistance(b,!l).distance;return l||M(b)<N?F:h&&A?F*.5:x.byIndex(O.get(),0).distance}function ut(b){const A=It(b,s);U=A,K=l&&A&&!b.buttons&&H,H=dt(i.get(),n.get())>=2,!(A&&b.button!==0)&&(ot(b.target)||(W=!0,o.pointerDown(b),a.useFriction(0).useDuration(0),i.set(n),rt(),G=o.readPoint(b),q=o.readPoint(b,S),p.emit("pointerDown")))}function B(b){if(!It(b,s)&&b.touches.length>=2)return k(b);const O=o.readPoint(b),F=o.readPoint(b,S),$=dt(O,G),J=dt(F,q);if(!X&&!U&&(!b.cancelable||(X=$>J,!X)))return k(b);const tt=o.pointerMove(b);$>m&&(K=!0),a.useFriction(.3).useDuration(.75),u.start(),i.add(w(tt)),b.preventDefault()}function k(b){const O=x.byDistance(0,!1).index!==d.get(),F=o.pointerUp(b)*_(),$=at(w(F),O),J=Se(F,$),tt=z-10*J,Y=f+J/50;X=!1,W=!1,L.clear(),a.useDuration(tt).useFriction(Y),c.distance($,!l),U=!1,p.emit("pointerUp")}function Q(b){K&&(b.stopPropagation(),b.preventDefault(),K=!1)}function R(){return W}return{init:ct,destroy:Z,pointerDown:R}}function Ne(t,e){let s,i;function o(d){return d.timeStamp}function n(d,p){const l=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(It(d,e)?d:d.touches[0])[l]}function u(d){return s=d,i=d,n(d)}function c(d){const p=n(d)-n(i),y=o(d)-o(s)>170;return i=d,y&&(s=d),p}function a(d){if(!s||!i)return 0;const p=n(i)-n(s),y=o(d)-o(s),l=o(d)-o(i)>170,m=p/y;return y&&!l&&M(m)>.1?m:0}return{pointerDown:u,pointerMove:c,pointerUp:a,readPoint:n}}function Ie(){function t(r){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:n}=r;return{top:s,right:i+o,bottom:s+n,left:i,width:o,height:n}}return{measure:t}}function Ae(t){function e(s){return t*(s/100)}return{measure:e}}function je(t,e,r,s,i,o,n){const u=[t].concat(s);let c,a,x=[],d=!1;function p(h){return i.measureSize(n.measure(h))}function y(h){if(!o)return;a=p(t),x=s.map(p);function f(g){for(const S of g){if(d)return;const w=S.target===t,T=s.indexOf(S.target),C=w?a:x[T],v=p(w?t:s[T]);if(M(v-C)>=.5){h.reInit(),e.emit("resize");break}}}c=new ResizeObserver(g=>{(yt(o)||o(h,g))&&f(g)}),r.requestAnimationFrame(()=>{u.forEach(g=>c.observe(g))})}function l(){d=!0,c&&c.disconnect()}return{init:y,destroy:l}}function Te(t,e,r,s,i,o){let n=0,u=0,c=i,a=o,x=t.get(),d=0;function p(){const C=s.get()-t.get(),v=!c;let L=0;return v?(n=0,r.set(s),t.set(s),L=C):(r.set(t),n+=C/c,n*=a,x+=n,t.add(n),L=x-d),u=Pt(L),d=x,T}function y(){const C=s.get()-e.get();return M(C)<.001}function l(){return c}function m(){return u}function h(){return n}function f(){return S(i)}function g(){return w(o)}function S(C){return c=C,T}function w(C){return a=C,T}const T={direction:m,duration:l,velocity:h,seek:p,settled:y,useBaseFriction:g,useBaseDuration:f,useFriction:w,useDuration:S};return T}function Pe(t,e,r,s,i){const o=i.measure(10),n=i.measure(50),u=nt(.1,.99);let c=!1;function a(){return!(c||!t.reachedAny(r.get())||!t.reachedAny(e.get()))}function x(y){if(!a())return;const l=t.reachedMin(e.get())?"min":"max",m=M(t[l]-e.get()),h=r.get()-e.get(),f=u.constrain(m/n);r.subtract(h*f),!y&&M(h)<o&&(r.set(t.constrain(r.get())),s.useDuration(25).useBaseFriction())}function d(y){c=!y}return{shouldConstrain:a,constrain:x,toggleActive:d}}function Me(t,e,r,s,i){const o=nt(-e+t,0),n=d(),u=x(),c=p();function a(l,m){return dt(l,m)<=1}function x(){const l=n[0],m=V(n),h=n.lastIndexOf(l),f=n.indexOf(m)+1;return nt(h,f)}function d(){return r.map((l,m)=>{const{min:h,max:f}=o,g=o.constrain(l),S=!m,w=Mt(r,m);return S?f:w||a(h,g)?h:a(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function p(){if(e<=t+i)return[o.max];if(s==="keepSnaps")return n;const{min:l,max:m}=u;return n.slice(l,m)}return{snapsContained:c,scrollContainLimit:u}}function De(t,e,r){const s=e[0],i=r?s-t:V(e);return{limit:nt(i,s)}}function Oe(t,e,r,s){const o=e.min+.1,n=e.max+.1,{reachedMin:u,reachedMax:c}=nt(o,n);function a(p){return p===1?c(r.get()):p===-1?u(r.get()):!1}function x(p){if(!a(p))return;const y=t*(p*-1);s.forEach(l=>l.add(y))}return{loop:x}}function ke(t){const{max:e,length:r}=t;function s(o){const n=o-e;return r?n/-r:0}return{get:s}}function Fe(t,e,r,s,i){const{startEdge:o,endEdge:n}=t,{groupSlides:u}=i,c=d().map(e.measure),a=p(),x=y();function d(){return u(s).map(m=>V(m)[n]-m[0][o]).map(M)}function p(){return s.map(m=>r[o]-m[o]).map(m=>-M(m))}function y(){return u(a).map(m=>m[0]).map((m,h)=>m+c[h])}return{snaps:a,snapsAligned:x}}function ze(t,e,r,s,i,o){const{groupSlides:n}=i,{min:u,max:c}=s,a=x();function x(){const p=n(o),y=!t||e==="keepSnaps";return r.length===1?[o]:y?p:p.slice(u,c).map((l,m,h)=>{const f=!m,g=Mt(h,m);if(f){const S=V(h[0])+1;return $t(S)}if(g){const S=ht(o)-V(h)[0]+1;return $t(S,V(h)[0])}return l})}return{slideRegistry:a}}function Be(t,e,r,s,i){const{reachedAny:o,removeOffset:n,constrain:u}=s;function c(l){return l.concat().sort((m,h)=>M(m)-M(h))[0]}function a(l){const m=t?n(l):u(l),h=e.map((g,S)=>({diff:x(g-m,0),index:S})).sort((g,S)=>M(g.diff)-M(S.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+r,l-r];if(!t)return l;if(!m)return c(h);const f=h.filter(g=>Pt(g)===m);return f.length?c(f):V(h)-r}function d(l,m){const h=e[l]-i.get(),f=x(h,m);return{index:l,distance:f}}function p(l,m){const h=i.get()+l,{index:f,distance:g}=a(h),S=!t&&o(h);if(!m||S)return{index:f,distance:l};const w=e[f]-g,T=l+x(w,0);return{index:f,distance:T}}return{byDistance:p,byIndex:d,shortcut:x}}function Re(t,e,r,s,i,o,n){function u(d){const p=d.distance,y=d.index!==e.get();o.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),y&&(r.set(e.get()),e.set(d.index),n.emit("select"))}function c(d,p){const y=i.byDistance(d,p);u(y)}function a(d,p){const y=e.clone().set(d),l=i.byIndex(y.get(),p);u(l)}return{distance:c,index:a}}function Ve(t,e,r,s,i,o,n,u){const c={passive:!0,capture:!0};let a=0;function x(y){if(!u)return;function l(m){if(new Date().getTime()-a>10)return;n.emit("slideFocusStart"),t.scrollLeft=0;const g=r.findIndex(S=>S.includes(m));Tt(g)&&(i.useDuration(0),s.index(g,0),n.emit("slideFocus"))}o.add(document,"keydown",d,!1),e.forEach((m,h)=>{o.add(m,"focus",f=>{(yt(u)||u(y,f))&&l(h)},c)})}function d(y){y.code==="Tab"&&(a=new Date().getTime())}return{init:x}}function ft(t){let e=t;function r(){return e}function s(c){e=n(c)}function i(c){e+=n(c)}function o(c){e-=n(c)}function n(c){return Tt(c)?c:c.get()}return{get:r,set:s,add:i,subtract:o}}function Jt(t,e){const r=t.scroll==="x"?n:u,s=e.style;let i=null,o=!1;function n(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function c(p){if(o)return;const y=ve(t.direction(p));y!==i&&(s.transform=r(y),i=y)}function a(p){o=!p}function x(){o||(s.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:x,to:c,toggleActive:a}}function He(t,e,r,s,i,o,n,u,c){const x=pt(i),d=pt(i).reverse(),p=f().concat(g());function y(v,L){return v.reduce((N,D)=>N-i[D],L)}function l(v,L){return v.reduce((N,D)=>y(N,L)>0?N.concat([D]):N,[])}function m(v){return o.map((L,N)=>({start:L-s[N]+.5+v,end:L+e-.5+v}))}function h(v,L,N){const D=m(L);return v.map(I=>{const z=N?0:-r,H=N?r:0,G=N?"end":"start",q=D[I][G];return{index:I,loopPoint:q,slideLocation:ft(-1),translate:Jt(t,c[I]),target:()=>u.get()>q?z:H}})}function f(){const v=n[0],L=l(d,v);return h(L,r,!1)}function g(){const v=e-n[0]-1,L=l(x,v);return h(L,-r,!0)}function S(){return p.every(({index:v})=>{const L=x.filter(N=>N!==v);return y(L,e)<=.1})}function w(){p.forEach(v=>{const{target:L,translate:N,slideLocation:D}=v,I=L();I!==D.get()&&(N.to(I),D.set(I))})}function T(){p.forEach(v=>v.translate.clear())}return{canLoop:S,clear:T,loop:w,loopPoints:p}}function Ge(t,e,r){let s,i=!1;function o(c){if(!r)return;function a(x){for(const d of x)if(d.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(x=>{i||(yt(r)||r(c,x))&&a(x)}),s.observe(t,{childList:!0})}function n(){s&&s.disconnect(),i=!0}return{init:o,destroy:n}}function qe(t,e,r,s){const i={};let o=null,n=null,u,c=!1;function a(){u=new IntersectionObserver(l=>{c||(l.forEach(m=>{const h=e.indexOf(m.target);i[h]=m}),o=null,n=null,r.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),c=!0}function d(l){return mt(i).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:g}=i[f];return(l&&g||!l&&!g)&&m.push(f),m},[])}function p(l=!0){if(l&&o)return o;if(!l&&n)return n;const m=d(l);return l&&(o=m),l||(n=m),m}return{init:a,destroy:x,get:p}}function Ze(t,e,r,s,i,o){const{measureSize:n,startEdge:u,endEdge:c}=t,a=r[0]&&i,x=l(),d=m(),p=r.map(n),y=h();function l(){if(!a)return 0;const g=r[0];return M(e[u]-g[u])}function m(){if(!a)return 0;const g=o.getComputedStyle(V(s));return parseFloat(g.getPropertyValue(`margin-${c}`))}function h(){return r.map((g,S,w)=>{const T=!S,C=Mt(w,S);return T?p[S]+x:C?p[S]+d:w[S+1][u]-g[u]}).map(M)}return{slideSizes:p,slideSizesWithGaps:y,startGap:x,endGap:d}}function $e(t,e,r,s,i,o,n,u,c){const{startEdge:a,endEdge:x,direction:d}=t,p=Tt(r);function y(f,g){return pt(f).filter(S=>S%g===0).map(S=>f.slice(S,S+g))}function l(f){return f.length?pt(f).reduce((g,S,w)=>{const T=V(g)||0,C=T===0,v=S===ht(f),L=i[a]-o[T][a],N=i[a]-o[S][x],D=!s&&C?d(n):0,I=!s&&v?d(u):0,z=M(N-I-(L+D));return w&&z>e+c&&g.push(S),v&&g.push(f.length),g},[]).map((g,S,w)=>{const T=Math.max(w[S-1]||0);return f.slice(T,g)}):[]}function m(f){return p?y(f,r):l(f)}return{groupSlides:m}}function Ke(t,e,r,s,i,o,n){const{align:u,axis:c,direction:a,startIndex:x,loop:d,duration:p,dragFree:y,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:S,watchSlides:w,watchDrag:T,watchFocus:C}=o,v=2,L=Ie(),N=L.measure(e),D=r.map(L.measure),I=we(c,a),z=I.measureSize(N),H=Ae(z),G=Le(u,z),q=!d&&!!g,W=d||!!g,{slideSizes:X,slideSizesWithGaps:K,startGap:U,endGap:ct}=Ze(I,N,D,r,W,i),Z=$e(I,z,h,d,N,D,U,ct,v),{snaps:rt,snapsAligned:ot}=Fe(I,G,N,D,Z),_=-V(rt)+V(K),{snapsContained:at,scrollContainLimit:ut}=Me(z,_,ot,g,v),B=q?at:ot,{limit:k}=De(_,B,d),Q=Qt(ht(B),x,d),R=Q.clone(),P=pt(r),b=({dragHandler:st,scrollBody:wt,scrollBounds:Ct,options:{loop:xt}})=>{xt||Ct.constrain(st.pointerDown()),wt.seek()},A=({scrollBody:st,translate:wt,location:Ct,offsetLocation:xt,previousLocation:se,scrollLooper:ie,slideLooper:ce,dragHandler:ae,animation:ue,eventHandler:zt,scrollBounds:le,options:{loop:Bt}},Rt)=>{const Vt=st.settled(),fe=!le.shouldConstrain(),Ht=Bt?Vt:Vt&&fe;Ht&&!ae.pointerDown()&&(ue.stop(),zt.emit("settle")),Ht||zt.emit("scroll");const de=Ct.get()*Rt+se.get()*(1-Rt);xt.set(de),Bt&&(ie.loop(st.direction()),ce.loop()),wt.to(xt.get())},O=Ee(s,i,()=>b(Et),st=>A(Et,st)),F=.68,$=B[Q.get()],J=ft($),tt=ft($),Y=ft($),et=ft($),lt=Te(J,Y,tt,et,p,F),vt=Be(d,B,_,k,et),Lt=Re(O,Q,R,lt,vt,et,n),Ot=ke(k),kt=gt(),re=qe(e,r,n,m),{slideRegistry:Ft}=ze(q,g,B,ut,Z,P),oe=Ve(t,r,Ft,Lt,lt,kt,n,C),Et={ownerDocument:s,ownerWindow:i,eventHandler:n,containerRect:N,slideRects:D,animation:O,axis:I,dragHandler:Ce(I,t,s,i,et,Ne(I,i),J,O,Lt,lt,vt,Q,n,H,y,l,f,F,T),eventStore:kt,percentOfView:H,index:Q,indexPrevious:R,limit:k,location:J,offsetLocation:Y,previousLocation:tt,options:o,resizeHandler:je(e,n,i,r,I,S,L),scrollBody:lt,scrollBounds:Pe(k,Y,et,lt,H),scrollLooper:Oe(_,k,Y,[J,Y,tt,et]),scrollProgress:Ot,scrollSnapList:B.map(Ot.get),scrollSnaps:B,scrollTarget:vt,scrollTo:Lt,slideLooper:He(I,z,_,X,K,rt,B,Y,r),slideFocus:oe,slidesHandler:Ge(e,n,w),slidesInView:re,slideIndexes:P,slideRegistry:Ft,slidesToScroll:Z,target:et,translate:Jt(I,e)};return Et}function Ue(){let t={},e;function r(a){e=a}function s(a){return t[a]||[]}function i(a){return s(a).forEach(x=>x(e,a)),c}function o(a,x){return t[a]=s(a).concat([x]),c}function n(a,x){return t[a]=s(a).filter(d=>d!==x),c}function u(){t={}}const c={init:r,emit:i,off:n,on:o,clear:u};return c}const _e={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Qe(t){function e(o,n){return _t(o,n||{})}function r(o){const n=o.breakpoints||{},u=mt(n).filter(c=>t.matchMedia(c).matches).map(c=>n[c]).reduce((c,a)=>e(c,a),{});return e(o,u)}function s(o){return o.map(n=>mt(n.breakpoints||{})).reduce((n,u)=>n.concat(u),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:r,optionsMediaQueries:s}}function Je(t){let e=[];function r(o,n){return e=n.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),e.forEach(u=>u.init(o,t)),n.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function s(){e=e.filter(o=>o.destroy())}return{init:r,destroy:s}}function bt(t,e,r){const s=t.ownerDocument,i=s.defaultView,o=Qe(i),n=Je(o),u=gt(),c=Ue(),{mergeOptions:a,optionsAtMedia:x,optionsMediaQueries:d}=o,{on:p,off:y,emit:l}=c,m=I;let h=!1,f,g=a(_e,bt.globalOptions),S=a(g),w=[],T,C,v;function L(){const{container:P,slides:b}=S;C=(Nt(P)?t.querySelector(P):P)||t.children[0];const O=Nt(b)?C.querySelectorAll(b):b;v=[].slice.call(O||C.children)}function N(P){const b=Ke(t,C,v,s,i,P,c);if(P.loop&&!b.slideLooper.canLoop()){const A=Object.assign({},P,{loop:!1});return N(A)}return b}function D(P,b){h||(g=a(g,P),S=x(g),w=b||w,L(),f=N(S),d([g,...w.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",I)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),C.offsetParent&&v.length&&f.dragHandler.init(R),T=n.init(R,w)))}function I(P,b){const A=Z();z(),D(a({startIndex:A},P),b),c.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),n.destroy(),u.clear()}function H(){h||(h=!0,u.clear(),z(),c.emit("destroy"),c.clear())}function G(P,b,A){!S.active||h||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:S.duration),f.scrollTo.index(P,A||0))}function q(P){const b=f.index.add(1).get();G(b,P,-1)}function W(P){const b=f.index.add(-1).get();G(b,P,1)}function X(){return f.index.add(1).get()!==Z()}function K(){return f.index.add(-1).get()!==Z()}function U(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function Z(){return f.index.get()}function rt(){return f.indexPrevious.get()}function ot(){return f.slidesInView.get()}function _(){return f.slidesInView.get(!1)}function at(){return T}function ut(){return f}function B(){return t}function k(){return C}function Q(){return v}const R={canScrollNext:X,canScrollPrev:K,containerNode:k,internalEngine:ut,destroy:H,off:y,on:p,emit:l,plugins:at,previousScrollSnap:rt,reInit:m,rootNode:B,scrollNext:q,scrollPrev:W,scrollProgress:ct,scrollSnapList:U,scrollTo:G,selectedScrollSnap:Z,slideNodes:Q,slidesInView:ot,slidesNotInView:_};return D(e,r),setTimeout(()=>c.emit("init"),0),R}bt.globalOptions=void 0;function Dt(t={},e=[]){const r=j.useRef(t),s=j.useRef(e),[i,o]=j.useState(),[n,u]=j.useState(),c=j.useCallback(()=>{i&&i.reInit(r.current,s.current)},[i]);return j.useEffect(()=>{jt(r.current,t)||(r.current=t,c())},[t,c]),j.useEffect(()=>{ye(s.current,e)||(s.current=e,c())},[e,c]),j.useEffect(()=>{if(be()&&n){bt.globalOptions=Dt.globalOptions;const a=bt(n,r.current,s.current);return o(a),()=>a.destroy()}else o(void 0)},[n,o]),[u,i]}Dt.globalOptions=void 0;/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ye=Ut("ArrowLeft",Xe);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],tn=Ut("ArrowRight",We),Xt=j.createContext(null);function St(){const t=j.useContext(Xt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Yt=j.forwardRef(({orientation:t="horizontal",opts:e,setApi:r,plugins:s,className:i,children:o,...n},u)=>{const[c,a]=Dt({...e,axis:t==="horizontal"?"x":"y"},s),[x,d]=j.useState(!1),[p,y]=j.useState(!1),l=j.useCallback(g=>{g&&(d(g.canScrollPrev()),y(g.canScrollNext()))},[]),m=j.useCallback(()=>{a?.scrollPrev()},[a]),h=j.useCallback(()=>{a?.scrollNext()},[a]),f=j.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),m()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[m,h]);return j.useEffect(()=>{!a||!r||r(a)},[a,r]),j.useEffect(()=>{if(a)return l(a),a.on("reInit",l),a.on("select",l),()=>{a?.off("select",l)}},[a,l]),E.jsx(Xt.Provider,{value:{carouselRef:c,api:a,opts:e,orientation:t||(e?.axis==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:p},children:E.jsx("div",{ref:u,onKeyDownCapture:f,className:it("relative",i),role:"region","aria-roledescription":"carousel",...n,children:o})})});Yt.displayName="Carousel";const Wt=j.forwardRef(({className:t,...e},r)=>{const{carouselRef:s,orientation:i}=St();return E.jsx("div",{ref:s,className:"overflow-hidden",children:E.jsx("div",{ref:r,className:it("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});Wt.displayName="CarouselContent";const te=j.forwardRef(({className:t,...e},r)=>{const{orientation:s}=St();return E.jsx("div",{ref:r,role:"group","aria-roledescription":"slide",className:it("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-4":"pt-4",t),...e})});te.displayName="CarouselItem";const ee=j.forwardRef(({className:t,variant:e="outline",size:r="icon",...s},i)=>{const{orientation:o,scrollPrev:n,canScrollPrev:u}=St();return E.jsxs(At,{ref:i,variant:e,size:r,className:it("absolute  h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:n,...s,children:[E.jsx(Ye,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Previous slide"})]})});ee.displayName="CarouselPrevious";const ne=j.forwardRef(({className:t,variant:e="outline",size:r="icon",...s},i)=>{const{orientation:o,scrollNext:n,canScrollNext:u}=St();return E.jsxs(At,{ref:i,variant:e,size:r,className:it("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:n,...s,children:[E.jsx(tn,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Next slide"})]})});ne.displayName="CarouselNext";const un=({image:t,title:e,description:r,tags:s,links:i})=>E.jsx(he,{children:E.jsxs("article",{className:"flex flex-col gap-8",children:[Array.isArray(t)?E.jsxs(Yt,{className:"w-[800px] rounded-3xl border border-slate-200 dark:border-slate-700",children:[E.jsx(ee,{}),E.jsx(Wt,{children:t.map((o,n)=>E.jsx(te,{children:E.jsx("img",{src:o,alt:e,className:"w-[800px]"})},n))}),E.jsx(ne,{})]}):E.jsx("img",{src:t,alt:e,className:"w-[800px] rounded-3xl border border-slate-200 dark:border-slate-700",hidden:!t}),E.jsxs("div",{className:"w-[800px] flex flex-col justify-between gap-4",children:[E.jsx("h3",{className:"font-bold text-2xl",children:e}),E.jsx("div",{className:"flex gap-4",children:s.map((o,n)=>E.jsx(ge,{className:"bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200",children:o},n))}),E.jsx("p",{className:"max-w-[800px] text-lg",children:r}),E.jsx("div",{className:"flex gap-4",children:i.map((o,n)=>E.jsx("a",{href:o.url,target:"_blank",rel:"noreferrer",children:E.jsxs(At,{variant:"secondary",children:[E.jsx(o.icon,{}),o.name]})},n))})]})]})});export{an as P,he as S,un as a,cn as b};
