(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{8090:function(e,l,r){Promise.resolve().then(r.t.bind(r,414,23)),Promise.resolve().then(r.bind(r,2409))},2580:function(e,l,r){"use strict";r.d(l,{M:function(){return s}});var t=r(226),i=r(9128);let s=()=>{t.p8.registerPlugin(i.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{t.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-scale");l.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",scale:l},{scale:r,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-parallax");r.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",y:l},{y:r,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-skill-prog");s.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");t.p8.fromTo(e,{width:l,ease:"sine"},{width:r,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let n=document.querySelectorAll(".mil-counter");n.forEach(e=>{var l=e,r={val:0},i=e.dataset.number,s=(i+"").split("."),n=s.length>1?s[1].length:0;t.p8.to(r,{val:i,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=r.val.toFixed(n)}})}),t.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let a=document.querySelector(".mil-top-panel");void 0!=a&&window.addEventListener("scroll",e=>{window.scrollY>10?a.classList.add("mil-active"):a.classList.remove("mil-active")})}},2409:function(e,l,r){"use strict";r.r(l);var t=r(9268),i=r(5846),s=r.n(i),n=r(6008),a=r(6006),o=r(2580);let c=e=>{let l,{pageTitle:r,breadTitle:i,bgImage:c,headerTitle:g}=e,m=(0,n.usePathname)();if(l=void 0!=i?i:r.replace(/(<([^>]+)>)/gi,""),"Search: %s"==r){let e=(0,n.useSearchParams)(),l=e.get("key");r="Search: "+l}return(0,a.useEffect)(()=>{(0,o.M)()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,t.jsx)("img",{src:c,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,t.jsx)("div",{className:"mil-overlay"}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,t.jsx)("div",{className:"mil-banner-content mil-center",children:(0,t.jsxs)("div",{className:"mil-mb-90",children:[g&&(0,t.jsx)("h3",{className:"mil-light mil-mb-30",dangerouslySetInnerHTML:{__html:g}}),(0,t.jsx)("h1",{className:"mil-light mil-mb-30",dangerouslySetInnerHTML:{__html:r}}),(0,t.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/",children:"Home"})}),-1!=m.indexOf("/blog/")&&-1==m.indexOf("/blog/page/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/blog",children:"Blog"})}),-1!=m.indexOf("/projects/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/projects",children:"Projects"})}),-1!=m.indexOf("/services/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/services",children:"Services"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{dangerouslySetInnerHTML:{__html:l}})})]})]})})]})]})})};l.default=c},5846:function(e,l,r){e.exports=r(414)},6008:function(e,l,r){e.exports=r(167)}},function(e){e.O(0,[968,710,77,667,139,744],function(){return e(e.s=8090)}),_N_E=e.O()}]);