import{j as e}from"./jsx-runtime.CLpGMVip.js";import{g as o,B as n,h as l,c as i,i as m}from"./createLucideIcon.BfCszgA1.js";import{r}from"./index.D15Q2Owl.js";import"./iconBase.FQPqCX9B.js";import"./index.BztePVNi.js";/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],h=o("Moon",d);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],k=o("Sun",u);function x(){const[t,s]=r.useState("theme-light"),c=()=>{const a=t==="dark"?"theme-light":"dark";s(a),localStorage.setItem("theme",a)};return r.useEffect(()=>{const a=document.documentElement.classList.contains("dark");s(a?"dark":"theme-light")},[]),r.useEffect(()=>{const a=t==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList[a?"add":"remove"]("dark")},[t]),e.jsx(n,{variant:"outline",size:"icon",className:"rounded-full",onClick:c,children:t==="theme-light"?e.jsx(h,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}):e.jsx(k,{className:"h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})})}const p=[{name:"Github",url:"https://github.com/newish0",icon:i},{name:"DEV",url:"https://newish0.github.io",icon:m}],v=()=>e.jsx("nav",{className:"z-40 fixed top-5 left-0 right-0 my-0 mx-auto max-w-max px-5 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-md",children:e.jsxs("ul",{className:"flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl",children:[e.jsx("li",{className:"hover:scale-90 duration-150",children:e.jsx("a",{href:"/",children:e.jsx(l,{})})}),p.map((t,s)=>e.jsx("li",{className:"hover:scale-90 duration-150",children:e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:e.jsx(t.icon,{})})},s)),e.jsx("li",{children:e.jsx(x,{})})]})});export{v as default};
