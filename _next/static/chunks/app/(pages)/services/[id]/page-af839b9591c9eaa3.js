(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{2653:function(e,l,i){Promise.resolve().then(i.t.bind(i,2666,23)),Promise.resolve().then(i.t.bind(i,6996,23)),Promise.resolve().then(i.t.bind(i,9297,23)),Promise.resolve().then(i.t.bind(i,190,23)),Promise.resolve().then(i.t.bind(i,414,23)),Promise.resolve().then(i.bind(i,1221)),Promise.resolve().then(i.bind(i,2656)),Promise.resolve().then(i.bind(i,2409))},2580:function(e,l,i){"use strict";i.d(l,{M:function(){return r}});var a=i(226),s=i(9128);let r=()=>{a.p8.registerPlugin(s.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{a.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-scale");l.forEach(e=>{var l=e.getAttribute("data-value-1"),i=e.getAttribute("data-value-2");a.p8.fromTo(e,{ease:"sine",scale:l},{scale:i,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-parallax");i.forEach(e=>{var l=e.getAttribute("data-value-1"),i=e.getAttribute("data-value-2");a.p8.fromTo(e,{ease:"sine",y:l},{y:i,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-skill-prog");r.forEach(e=>{var l=e.getAttribute("data-value-1"),i=e.getAttribute("data-value-2");a.p8.fromTo(e,{width:l,ease:"sine"},{width:i,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let n=document.querySelectorAll(".mil-counter");n.forEach(e=>{var l=e,i={val:0},s=e.dataset.number,r=(s+"").split("."),n=r.length>1?r[1].length:0;a.p8.to(i,{val:s,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=i.val.toFixed(n)}})}),a.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let t=document.querySelector(".mil-top-panel");void 0!=t&&window.addEventListener("scroll",e=>{window.scrollY>10?t.classList.add("mil-active"):t.classList.remove("mil-active")})}},2953:function(e,l,i){"use strict";i.d(l,{M:function(){return s}});var a=i(9682);i(6888),i(2803),i(103),a.ZP.use([a.Gk,a.tl,a.W_,a.xW,a.pt,a.rj,a.gI,a.oM,a.kr,a.Ay,a.o3,a.LW,a.N1,a.s5,a.VS,a.Rv]);let s={milInfiniteSlider:{slidesPerView:1,spaceBetween:0,speed:4e3,autoplay:!0,autoplay:{delay:0},loop:!0,freeMode:!0,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:4}}},milBannerSlider:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milBannerSlider2:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milProcessSlider:{slidesPerView:1,spaceBetween:30,speed:800,parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milReviewsSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milIllustrationSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-illustration-prev",nextEl:".mil-illustration-next"}}}},1221:function(e,l,i){"use strict";i.r(l);var a=i(9268),s=i(8852),r=i(8520);let n=e=>{let{subtitleOffset:l}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.J9,{initialValues:{email:"",name:"",tel:"",budget:"",message:""},validate:e=>{let l={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(l.email="Invalid email address"):l.email="Required",l},onSubmit:(e,l)=>{let{setSubmitting:i}=l,a=document.getElementById("contactForm"),s=document.getElementById("contactFormStatus"),r=new FormData;r.append("name",e.name),r.append("email",e.email),r.append("tel",e.tel),r.append("budget",e.budget),r.append("message",e.message),fetch(a.action,{method:"POST",body:r,headers:{Accept:"application/json"}}).then(e=>{e.ok?(s.innerHTML="<h5>Thanks, your message is sent successfully.</h5>",a.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?s.innerHTML=e.errors.map(e=>e.message).join(", "):s.innerHTML="<h5>Oops! There was a problem submitting your form</h5>"})}).catch(e=>{s.innerHTML="<h5>Oops! There was a problem submitting your form</h5>"}),i(!1)},children:e=>{let{values:i,errors:s,touched:n,handleChange:t,handleBlur:c,handleSubmit:o,isSubmitting:m}=e;return(0,a.jsxs)("form",{onSubmit:o,id:"contactForm",action:r.Xd.Tb,className:l?"mil-mt-suptitle-offset mil-mb-90 cform":"mil-mb-90 cform",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,a.jsxs)("label",{className:"mil-upper",children:[(0,a.jsx)("span",{children:"Full Name"}),(0,a.jsx)("span",{className:"mil-required",children:"*"})]}),(0,a.jsx)("input",{type:"text",placeholder:"Enter Your Name Here",name:"name",required:"required",onChange:t,onBlur:c,value:i.name})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,a.jsxs)("label",{className:"mil-upper",children:[(0,a.jsx)("span",{children:"Email address"}),(0,a.jsx)("span",{className:"mil-required",children:"*"})]}),(0,a.jsx)("input",{type:"email",placeholder:"Enter Your Email Here",name:"email",required:"required",onChange:t,onBlur:c,value:i.email})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,a.jsxs)("label",{className:"mil-upper",children:[(0,a.jsx)("span",{children:"Phone"}),(0,a.jsx)("span",{className:"mil-required",children:"*"})]}),(0,a.jsx)("input",{type:"tel",placeholder:"Enter Your Phone Here",name:"tel",required:"required",onChange:t,onBlur:c,value:i.tel})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,a.jsxs)("label",{className:"mil-upper",children:[(0,a.jsx)("span",{children:"Budget"}),(0,a.jsx)("span",{className:"mil-required",children:"*"})]}),(0,a.jsx)("input",{type:"text",placeholder:"Enter Your Budget Here",name:"budget",required:"required",onChange:t,onBlur:c,value:i.budget})]})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,a.jsxs)("label",{className:"mil-upper",children:[(0,a.jsx)("span",{children:"Message"}),(0,a.jsx)("span",{className:"mil-required",children:"*"})]}),(0,a.jsx)("textarea",{placeholder:"Enter Your Name Here",name:"message",required:"required",onChange:t,onBlur:c,value:i.message})]})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"mil-checbox-frame mil-dark-input mil-up mil-mb-30",children:[(0,a.jsx)("input",{defaultChecked:!0,className:"mil-checkbox",id:"checkbox-1",type:"checkbox",value:"value",namge:"agree",required:!0}),(0,a.jsx)("label",{htmlFor:"checkbox-1",className:"mil-text-sm",children:"Accept the terms and conditions of personal data."})]})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("button",{type:"submit",className:"mil-button mil-up",children:"Send Now"})})]}),(0,a.jsx)("div",{className:"form-status alert-success mil-mb-90",id:"contactFormStatus",style:{display:"none"}})]})}})})};l.default=n},2409:function(e,l,i){"use strict";i.r(l);var a=i(9268),s=i(5846),r=i.n(s),n=i(6008),t=i(6006),c=i(2580);let o=e=>{let l,{pageTitle:i,breadTitle:s,bgImage:o,headerTitle:m}=e,d=(0,n.usePathname)();if(l=void 0!=s?s:i.replace(/(<([^>]+)>)/gi,""),"Search: %s"==i){let e=(0,n.useSearchParams)(),l=e.get("key");i="Search: "+l}return(0,t.useEffect)(()=>{(0,c.M)()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,a.jsx)("img",{src:o,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,a.jsx)("div",{className:"mil-overlay"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,a.jsx)("div",{className:"mil-banner-content mil-center",children:(0,a.jsxs)("div",{className:"mil-mb-90",children:[m&&(0,a.jsx)("h3",{className:"mil-light mil-mb-30",dangerouslySetInnerHTML:{__html:m}}),(0,a.jsx)("h1",{className:"mil-light mil-mb-30",dangerouslySetInnerHTML:{__html:i}}),(0,a.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/",children:"Home"})}),-1!=d.indexOf("/blog/")&&-1==d.indexOf("/blog/page/")&&(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/blog",children:"Blog"})}),-1!=d.indexOf("/projects/")&&(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/projects",children:"Projects"})}),-1!=d.indexOf("/services/")&&(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/services",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{dangerouslySetInnerHTML:{__html:l}})})]})]})})]})]})})};l.default=o},2656:function(e,l,i){"use strict";i.r(l);var a=i(9268),s=i(2953),r=i(9321);let n=e=>{let{items:l}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mil-illustration-slider-frame mil-up",children:[(0,a.jsx)(r.tq,{...s.M.milIllustrationSlider,className:"swiper-container mil-illustration-slider",children:l.map((e,l)=>(0,a.jsx)(r.o5,{className:"swiper-slide",children:(0,a.jsx)("div",{className:"mil-illustration mil-fw-item","data-swiper-parallax-x":"50","data-swiper-parallax-scale":"1.3",children:(0,a.jsx)("div",{className:"mil-image-frame",children:(0,a.jsx)("img",{src:e.image,alt:e.alt})})})},"full-image-slider-item-".concat(l)))}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"mil-illustration-slider-nav mil-up",children:(0,a.jsxs)("div",{className:"mil-nav-buttons",children:[(0,a.jsx)("div",{className:"mil-slider-button mil-illustration-prev",children:"Prev"}),(0,a.jsx)("div",{className:"mil-slider-button mil-illustration-next",children:"Next"})]})})})]})})};l.default=n},6008:function(e,l,i){e.exports=i(167)},8520:function(e){"use strict";e.exports=JSON.parse('{"Xd":{"Tb":"https://formspree.io/f/your_api_key"},"Fs":{"j":{"B":"/img/logo/logo-light.png","w":"Logo"},"G":[{"label":"Home","link":"/","children":0},{"label":"Services","link":"/services","children":[{"label":"Services List","link":"/services"},{"label":"Single Service","link":"/services/service-1"}]},{"label":"Blog","link":"/blog","children":[{"label":"Blog list","link":"/blog"},{"label":"Publication","link":"/blog/the-infrastructure-that-powers-the-world"}]},{"label":"Contact Us","link":"/contact","children":0},{"label":"About","link":"/about","children":0}]},"Mv":{"jY":{"B":"/img/logo/logo-light.png","w":"Logo"},"JG":"\xa9 2024 Pirun. All rights reserved.","GI":[{"label":"About","link":"/about"},{"label":"Services","link":"/services"},{"label":"Projects","link":"/projects"},{"label":"Blog","link":"/blog"},{"label":"Contact","link":"/contact"}]},"xs":[]}')}},function(e){e.O(0,[968,710,77,671,181,667,139,744],function(){return e(e.s=2653)}),_N_E=e.O()}]);