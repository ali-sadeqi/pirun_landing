(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{3943:function(e,l,r){Promise.resolve().then(r.t.bind(r,2666,23)),Promise.resolve().then(r.t.bind(r,414,23)),Promise.resolve().then(r.bind(r,5892)),Promise.resolve().then(r.bind(r,2409))},2580:function(e,l,r){"use strict";r.d(l,{M:function(){return s}});var t=r(226),i=r(9128);let s=()=>{t.p8.registerPlugin(i.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{t.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-scale");l.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",scale:l},{scale:r,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-parallax");r.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",y:l},{y:r,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-skill-prog");s.forEach(e=>{var l=e.getAttribute("data-value-1"),r=e.getAttribute("data-value-2");t.p8.fromTo(e,{width:l,ease:"sine"},{width:r,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let a=document.querySelectorAll(".mil-counter");a.forEach(e=>{var l=e,r={val:0},i=e.dataset.number,s=(i+"").split("."),a=s.length>1?s[1].length:0;t.p8.to(r,{val:i,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=r.val.toFixed(a)}})}),t.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let n=document.querySelector(".mil-top-panel");void 0!=n&&window.addEventListener("scroll",e=>{window.scrollY>10?n.classList.add("mil-active"):n.classList.remove("mil-active")})}},2409:function(e,l,r){"use strict";r.r(l);var t=r(9268),i=r(5846),s=r.n(i),a=r(6008),n=r(6006),c=r(2580);let o=e=>{let l,{pageTitle:r,breadTitle:i,bgImage:o,headerTitle:m}=e,d=(0,a.usePathname)();if(l=void 0!=i?i:r.replace(/(<([^>]+)>)/gi,""),"Search: %s"==r){let e=(0,a.useSearchParams)(),l=e.get("key");r="Search: "+l}return(0,n.useEffect)(()=>{(0,c.M)()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,t.jsx)("img",{src:o,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,t.jsx)("div",{className:"mil-overlay"}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,t.jsx)("div",{className:"mil-banner-content mil-center",children:(0,t.jsxs)("div",{className:"mil-mb-90",children:[m&&(0,t.jsx)("h3",{className:"mil-light mil-mb-30",dangerouslySetInnerHTML:{__html:m}}),(0,t.jsx)("h1",{className:"mil-light mil-mb-30",dangerouslySetInnerHTML:{__html:r}}),(0,t.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/",children:"Home"})}),-1!=d.indexOf("/blog/")&&-1==d.indexOf("/blog/page/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/blog",children:"Blog"})}),-1!=d.indexOf("/projects/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/projects",children:"Projects"})}),-1!=d.indexOf("/services/")&&(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/services",children:"Services"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{dangerouslySetInnerHTML:{__html:l}})})]})]})})]})]})})};l.default=o},5892:function(e,l,r){"use strict";r.r(l);var t=r(9268),i=r(6671),s=r.n(i),a=r(6006),n=r(5846),c=r.n(n);let o=e=>{let{team:l,categories:r}=e,i=(0,a.useRef)(),[n,o]=(0,a.useState)("*");(0,a.useEffect)(()=>{i.current=new(s())(".mil-team-grid",{itemSelector:".mil-grid-item",percentPosition:!0,masonry:{columnWidth:".mil-grid-item"},transitionDuration:"0.5s"})},[]),(0,a.useEffect)(()=>{i.current&&("*"===n?i.current.arrange({filter:"*"}):i.current.arrange({filter:".".concat(n)}))},[n]);let m=(e,l)=>{l.preventDefault(),o(e);let r=document.querySelectorAll(".mil-filter a");r.forEach(l=>{let r=l.getAttribute("data-filter");r==e?l.classList.add("mil-current"):l.classList.remove("mil-current")})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"mil-filter mil-up mil-mb-90",children:(0,t.jsxs)("div",{className:"mil-filter-links",children:[(0,t.jsx)("a",{href:"#","data-filter":"*",className:"mil-current",onClick:e=>m("*",e),children:"All"}),r.map((e,l)=>(0,t.jsx)("a",{href:"#","data-filter":"".concat(e.slug),onClick:l=>m(e.slug,l),children:e.name},"team-filter-item-".concat(l)))]})}),(0,t.jsx)("div",{className:"row mil-team-grid",children:l.map((e,l)=>(0,t.jsx)("div",{className:"col-sm-6 col-lg-3 mil-grid-item mil-up ".concat(e.category_slug),children:(0,t.jsxs)(c(),{href:"/team/".concat(e.id),className:"mil-team-member",children:[(0,t.jsx)("div",{className:"mil-avatar mil-mb-30",children:(0,t.jsx)("img",{src:e.image,alt:e.name})}),(0,t.jsx)("h6",{className:"mil-upper mil-mb-10",children:e.name}),(0,t.jsx)("p",{className:"mil-dark-soft",children:e.role})]})},"team-item-".concat(l)))})]})};l.default=o}},function(e){e.O(0,[968,710,77,910,667,139,744],function(){return e(e.s=3943)}),_N_E=e.O()}]);