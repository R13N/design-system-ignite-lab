var p=Object.defineProperty;var i=(n,r)=>p(n,"name",{value:r,configurable:!0});import{r as c}from"./index.dee9d0ff.js";import{I as h,r as f}from"./IconBase.esm.4b1ba351.js";import{a as s,F as o,j as e}from"./jsx-runtime.fe05e958.js";import{c as x,$ as L}from"./clsx.m.bf792f9d.js";var t=new Map;t.set("bold",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});t.set("duotone",function(n){return s(o,{children:[e("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});t.set("fill",function(){return e(o,{children:e("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});t.set("light",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});t.set("thin",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});t.set("regular",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var y=i(function(r,l){return f(r,l,t)},"renderPath"),a=c.exports.forwardRef(function(n,r){return e(h,{...Object.assign({ref:r},n,{renderPath:y})})});a.displayName="Envelope";const V=a;function d({children:n}){return e("div",{className:x("flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"),children:n})}i(d,"TextInputRoot");function k({children:n}){return e(L,{className:"w-6 h-6 text-gray-400",children:n})}i(k,"TextInputIcon");function u(n){return e("input",{className:"bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none",...n})}i(u,"TextInputInput");d.displayName="TextInput.Root";k.displayName="TextInput.Icon";u.displayName="TextInput.Input";const H={Root:d,Input:u,Icon:k};export{V as E,H as T};
//# sourceMappingURL=TextInput.204870d1.js.map
