"use strict";(self.webpackChunkagency_website=self.webpackChunkagency_website||[]).push([[959],{5959:function(n,e,t){function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o,a,c=[],l=!0,s=!1;try{if(o=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(d){s=!0,i=d}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(e),t.d(e,{default:function(){return j}});var o,a,c,l,s,d,u=t(168),f=t(5331),h=t(1681),m=t(2791),p=t(6444),g=t(6043),b=t(184),x=p.ZP.header(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 5rem;\n  background-color: var(--nav);\n  color: var(--white);\n  position: relative;\n  height: 4.5rem;\n  z-index: 500;\n  @media only Screen and (max-width: 64em) {\n    padding: 0.5rem 3rem;\n  }\n  @media only Screen and (max-width: 40em) {\n    padding: 0.5rem 1.5rem;\n  }\n"]))),v=p.ZP.a(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 2rem;\n  height: auto;\n  cursor: pointer;\n  img {\n    margin-right: 0.5rem;\n  }\n"]))),w=(p.ZP.nav(c||(c=(0,u.Z)(['\n  width: 100%;\n  max-width: 55rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 3rem; /* Add space between elements */\n  @media only Screen and (max-width: 48em) {\n    max-width: 100%; /* Reduce the width for smaller screen sizes */\n    padding: 0 1.5rem;\n    overflow-x: auto;\n  }\n  a {\n    flex: 1; /* Make the anchor tags equally distribute the available space */\n    font-weight: 600;\n    line-height: 1.5;\n    color: var(--white);\n    &::after {\n      content: "";\n      display: block;\n      height: 3px;\n      width: 0;\n      background: transparent;\n      transition: width 0.5s;\n    }\n    &:not(:last-child):hover::after {\n      width: 100%;\n      background: var(--purple);\n    }\n  }\n']))),p.ZP.div(l||(l=(0,u.Z)(["\n  display: inline-block;\n  padding: 20px;\n"])))),y=p.ZP.button(s||(s=(0,u.Z)(['\n  display: inline-block;\n  position: relative;\n  background-color: transparent;\n  width: 2rem;\n  height: 2px;\n  margin-top: 0rem;\n  transition: all 0.3s;\n  cursor: pointer;\n  &::before,\n  &::after {\n    content: "";\n    background-color: var(--white);\n    width: 2.0rem;\n    height: 2.0px;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n\n    transition: all 0.3s;\n  }\n  &::before {\n    top: ',";\n    transform: ",";\n  }\n  &::after {\n    top: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.clicked?"0":"-0.5rem"}),(function(n){return n.clicked?"rotate(135deg)":"rotate(0)"}),(function(n){return n.clicked?"0":"0.5rem"}),(function(n){return n.clicked?"rotate(-135deg)":"rotate(0)"})),k=p.ZP.nav(d||(d=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  overflow-x: hidden;\n  position: absolute;\n  width: 10rem;\n  top: 50%;\n  right: 0;\n  opacity: ",";\n  visibility: ",";\n  transition: all 0.5s;\n  z-index: -10;\n  background-color: rgb(53 53 63 / 95%);\n  border-radius: 20px;\n  margin: 0.5rem;\n  a {\n    color: var(--white);\n    font-weight: 600;\n    font-size: 1rem;\n    margin: 1.5rem;\n    cursor: pointer;\n  }\n"])),(function(n){return n.clicked?"1":0}),(function(n){return n.clicked?"visible":"hidden"})),j=function(){var n=i((0,m.useState)(!1),2),e=n[0],t=n[1],r=(0,m.useRef)(null);f.p8.registerPlugin(h.i);var o=function(n,e){e.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})};return(0,m.useEffect)((function(){var n=r.current;window.matchMedia("(max-width: 40em)").matches?f.p8.to(n,{position:"fixed",top:"0",left:"0",right:"0",padding:"1rem 2.5rem",borderRadius:"0 0 50px 50px",border:"2px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=200 top",end:"+=100",scrub:!0}}):f.p8.to(n,{position:"fixed",top:"1rem",left:"3rem",right:"3rem",padding:"1.5rem 2rem",borderRadius:"50px",border:"3px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=300 top",end:"+=250",scrub:!0}})}),[]),(0,m.useEffect)((function(){var n=function(n){r.current&&!r.current.contains(n.target)&&t(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[]),(0,b.jsxs)(x,{ref:r,children:[(0,b.jsxs)(v,{children:[(0,b.jsx)("img",{src:g,alt:"Curio Logo"}),(0,b.jsx)("div",{children:(0,b.jsx)("a",{href:"#solution",onClick:function(n){return o("solution",n)},children:(0,b.jsx)("h3",{style:{color:"white"},children:"Team9A"})})})]}),(0,b.jsx)(w,{onClick:function(){return t(!e)},children:(0,b.jsx)(y,{clicked:e,onClick:function(){return t(!e)},children:(0,b.jsx)("span",{})})}),(0,b.jsxs)(k,{clicked:e,children:[(0,b.jsx)("a",{href:"#home",onClick:function(n){return o("home",n)},children:"Home"}),(0,b.jsx)("a",{href:"#problem",onClick:function(n){return o("problem",n)},children:"Challenge"}),(0,b.jsx)("a",{href:"#ideation",onClick:function(n){return o("ideation",n)},children:"Ideation"}),(0,b.jsx)("a",{href:"#reflections",onClick:function(n){return o("reflections",n)},children:"Reflections"}),(0,b.jsx)("a",{href:"#achievements",onClick:function(n){return o("achievements",n)},children:"Achievements"}),(0,b.jsx)("a",{href:"#constraints",onClick:function(n){return o("constraints",n)},children:"Constraints"}),(0,b.jsx)("a",{href:"#improvements",onClick:function(n){return o("improvements",n)},children:"Improvements"}),(0,b.jsx)("a",{href:"#us",onClick:function(n){return o("us",n)},children:"About Us"})]})]})}},6043:function(n,e,t){n.exports=t.p+"static/media/curiologo.d83f05a5e60c6246b62d.png"}}]);
//# sourceMappingURL=959.e3f3e574.chunk.js.map