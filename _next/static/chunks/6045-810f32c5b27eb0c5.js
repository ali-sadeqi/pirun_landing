"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6045],{2580:function(e,i,l){l.d(i,{M:function(){return s}});var a=l(226),t=l(9128);let s=()=>{a.p8.registerPlugin(t.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{a.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-scale");i.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");a.p8.fromTo(e,{ease:"sine",scale:i},{scale:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-parallax");l.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");a.p8.fromTo(e,{ease:"sine",y:i},{y:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-skill-prog");s.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");a.p8.fromTo(e,{width:i,ease:"sine"},{width:l,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-counter");r.forEach(e=>{var i=e,l={val:0},t=e.dataset.number,s=(t+"").split("."),r=s.length>1?s[1].length:0;a.p8.to(l,{val:t,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){i.innerHTML=l.val.toFixed(r)}})}),a.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let n=document.querySelector(".mil-top-panel");void 0!=n&&window.addEventListener("scroll",e=>{window.scrollY>10?n.classList.add("mil-active"):n.classList.remove("mil-active")})}},2953:function(e,i,l){l.d(i,{M:function(){return t}});var a=l(9682);l(6888),l(2803),l(103),a.ZP.use([a.Gk,a.tl,a.W_,a.xW,a.pt,a.rj,a.gI,a.oM,a.kr,a.Ay,a.o3,a.LW,a.N1,a.s5,a.VS,a.Rv]);let t={milInfiniteSlider:{slidesPerView:1,spaceBetween:0,speed:4e3,autoplay:!0,autoplay:{delay:0},loop:!0,freeMode:!0,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:4}}},milBannerSlider:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milBannerSlider2:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milProcessSlider:{slidesPerView:1,spaceBetween:30,speed:800,parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milReviewsSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milIllustrationSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-illustration-prev",nextEl:".mil-illustration-next"}}}},2932:function(e,i,l){l.r(i),l.d(i,{default:function(){return c}});var a=l(9268),t=JSON.parse('{"TN":"Architecture Awards","WL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum gravida.","LI":{"p":"/blog","P":"See All"},"BH":{"H":"/img/photo/2.jpg","w":"image"},"ev":[{"title":"Designs of the Year","year":"2022","image":"/img/photo/1.jpg"},{"title":"Firms of the Year","year":"2019","image":"/img/photo/2.jpg"},{"title":"Product Winners","year":"2014","image":"/img/photo/5.jpg"},{"title":"Photography Winners","year":"2008","image":"/img/photo/4.jpg"}]}'),s=l(6006),r=l(226);let n=()=>{let e=r.p8.utils.toArray(".mil-hover-item"),i=document.querySelector(".mil-img-wrapper"),l=document.querySelector(".mil-img-wrapper img");function a(e){e.clientX,e.clientY,r.p8.timeline()}function t(e){if("mouseenter"===e.type){let a=e.target.dataset.src;r.p8.timeline().set(l,{attr:{src:a}}).to(i,{autoAlpha:1,scale:1})}else"mouseleave"===e.type&&r.p8.timeline().to(i,{autoAlpha:0,scale:.3})}e.forEach(e=>{e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",t),e.addEventListener("mousemove",a)})},o=()=>((0,s.useEffect)(()=>{n()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"container mil-p-120-90",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"mil-mb-90",children:[(0,a.jsx)("h2",{className:"mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.TN}}),(0,a.jsx)("p",{className:"mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.WL}}),(0,a.jsxs)("a",{href:t.LI.p,className:"mil-link mil-upper mil-up",children:[t.LI.P,(0,a.jsx)("span",{className:"mil-arrow",children:(0,a.jsx)("img",{src:"/img/icons/1.svg",alt:"arrow"})})]})]})}),(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsxs)("div",{className:"mil-hover-images mil-up",children:[(0,a.jsx)("ul",{children:t.ev.map((e,i)=>(0,a.jsx)("li",{className:"mil-up",children:(0,a.jsxs)("a",{className:"mil-hover-item",href:"#.",onClick:e=>{e.preventDefault()},"data-src":e.image,children:[(0,a.jsx)("p",{children:e.year}),(0,a.jsx)("span",{className:"mil-h4",children:e.title})]})},"awards-item-".concat(i)))}),(0,a.jsx)("div",{className:"mil-img-wrapper mil-mb-30",children:(0,a.jsx)("img",{src:t.BH.H,alt:t.BH.w})})]})})]})]})})}));var c=o},2442:function(e,i,l){l.r(i);var a=l(9268),t=l(2953),s=l(9321),r=l(3821);let n=e=>{let{bgStyle:i}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mil-".concat(i,"-bg mil-partners mil-relative"),children:["soft"==i&&(0,a.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,a.jsxs)("div",{className:"container mil-p-120-120",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,a.jsx)(s.tq,{...t.M.milInfiniteSlider,className:"swiper-container mil-infinite-show mil-up",children:r.e.map((e,i)=>(0,a.jsx)(s.o5,{className:"swiper-slide",children:(0,a.jsx)("a",{href:e.link,target:"_blank",className:"mil-partner-frame",style:{width:"60px"},children:(0,a.jsx)("img",{src:e.image,alt:e.alt,style:{width:"100px",height:"100px"}})})},"partners-slider-item-".concat(i)))})]})]})})};i.default=n},9406:function(e,i,l){l.r(i),l.d(i,{default:function(){return o}});var a=l(9268),t=l(2953),s=l(9321),r=JSON.parse('{"TN":"Why Choose Pirun?","QK":[[{"title":"Innovation","text":"We\'re committed to staying at the forefront of AI technology and investing in research and development."},{"title":"Expertise","text":"Our team has deep expertise in various AI fields, ensuring that we deliver high-quality solutions."},{"title":"Customization","text":"We tailor our solutions to meet the unique needs of each client, providing personalized service."}],[{"title":"Community Engagement","text":"We actively contribute to the open-source community and collaborate with developers worldwide."},{"title":"Customer Focus","text":"We prioritize customer satisfaction and are dedicated to providing excellent support."}]]}');let n=e=>{let{bgStyle:i="default",paddingTop:l="120"}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"mil-".concat(i,"-bg mil-relative"),children:["soft"==i&&(0,a.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,a.jsxs)("div",{className:"container mil-p-".concat(l,"-60"),children:[(0,a.jsxs)("div",{className:"row align-items-end",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"mil-mb-90",children:(0,a.jsx)("h2",{className:"mil-upper mil-up",dangerouslySetInnerHTML:{__html:r.TN}})})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"mil-adaptive-right mil-up mil-mb-90",children:(0,a.jsxs)("div",{className:"mil-nav-buttons",children:[(0,a.jsx)("div",{className:"mil-slider-button mil-process-prev",children:"Prev"}),(0,a.jsx)("div",{className:"mil-slider-button mil-process-next",children:"Next"})]})})})]}),(0,a.jsx)(s.tq,{...t.M.milProcessSlider,className:"swiper-container mil-process-slider",children:(0,a.jsx)("div",{className:"swiper-wrapper",children:r.QK.map((e,i)=>(0,a.jsx)(s.o5,{className:"swiper-slide",children:(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsx)("div",{className:"row",children:e.map((e,l)=>(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"mil-process-box mil-icon-box mil-up mil-mb-60","data-swiper-parallax-duration":"400","data-swiper-parallax":"-900","data-swiper-parallax-scale":".8","data-swiper-parallax-opacity":"0",children:[(0,a.jsx)("div",{className:"mil-icon mil-icon-border mil-mb-30",children:(0,a.jsx)("img",{src:"/img/icons/11.svg",alt:"icon"})}),(0,a.jsx)("h4",{className:"mil-mb-30",children:e.title}),(0,a.jsx)("p",{children:e.text})]})},"process-slider-item-".concat(i,"-step-").concat(l)))})})},"process-slider-item-".concat(i)))})})]})]})})};var o=n},3821:function(e){e.exports=JSON.parse('{"e":[{"image":"/img/partners/aws.svg","alt":"logo"},{"image":"/img/partners/google-cloud.svg","alt":"logo"},{"image":"/img/partners/swift.svg","alt":"logo"},{"image":"/img/partners/laravel.svg","alt":"logo"},{"image":"/img/partners/tensorflow.svg","alt":"logo"},{"image":"/img/partners/react.svg","alt":"logo"},{"image":"/img/partners/pytorch.svg","alt":"logo"},{"image":"/img/partners/django.svg","alt":"logo"}]}')}}]);