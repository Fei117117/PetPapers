(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{386:function(e,t,s){Promise.resolve().then(s.bind(s,8851)),Promise.resolve().then(s.t.bind(s,5878,23))},8851:function(e,t,s){"use strict";s.d(t,{default:function(){return m}});var a=s(7437);function r(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"pointer-events-none absolute -top-32 left-1/2 ml-[580px] -translate-x-1/2","aria-hidden":"true",children:(0,a.jsx)("div",{className:"h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 opacity-50 blur-[160px]"})}),(0,a.jsx)("div",{className:"pointer-events-none absolute left-1/2 top-[420px] ml-[380px] -translate-x-1/2","aria-hidden":"true",children:(0,a.jsx)("div",{className:"h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 to-gray-900 opacity-50 blur-[160px]"})}),(0,a.jsx)("div",{className:"pointer-events-none absolute left-1/2 top-[640px] -ml-[300px] -translate-x-1/2","aria-hidden":"true",children:(0,a.jsx)("div",{className:"h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 to-gray-900 opacity-50 blur-[160px]"})})]})}var n=s(2265);let o={_origin:"https://api.emailjs.com"},i=(e,t,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}let d=(e,t,s={})=>new Promise((a,r)=>{let n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{let t=new l(e);200===t.status||"OK"===t.text?a(t):r(t)}),n.addEventListener("error",({target:e})=>{r(new l(e))}),n.open("POST",o._origin+e,!0),Object.keys(s).forEach(e=>{n.setRequestHeader(e,s[e])}),n.send(t)});var c={send:(e,t,s,a)=>{let r=a||o._userID;return i(r,e,t),d("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})}};function m(){let[e,t]=(0,n.useState)(""),[s,o]=(0,n.useState)("");return(0,a.jsxs)("section",{className:"relative",children:[(0,a.jsx)(r,{}),(0,a.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"pb-12 pt-32 md:pb-20 md:pt-40",children:[(0,a.jsxs)("div",{className:"pb-12 text-center md:pb-16",children:[(0,a.jsx)("div",{"data-aos":"zoom-y-out"}),(0,a.jsxs)("h1",{className:"mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl","data-aos":"zoom-y-out","data-aos-delay":150,children:["It's hard to cope with pet loss ",(0,a.jsx)("br",{className:"max-lg:hidden"})]}),(0,a.jsxs)("div",{className:"mx-auto max-w-3xl",children:[(0,a.jsxs)("p",{className:"mb-8 text-lg text-gray-700","data-aos":"zoom-y-out","data-aos-delay":300,children:["And it's tough to remember the small things."," ",(0,a.jsx)("br",{className:"max-lg:hidden"}),"PetPapers helps you heal by keeping your stories together, forever."]}),(0,a.jsxs)("div",{className:"relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.8),transparent)1]",children:[(0,a.jsxs)("form",{className:"mx-auto max-w-lg sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4","data-aos":"zoom-y-out","data-aos-delay":450,onSubmit:t=>{t.preventDefault(),e&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?c.send("service_s1zycp3","template_54o2e5v",{user_email:e},"JlpmbJo_CxRsT0bcV").then(e=>{console.log("Email successfully sent!",e.status,e.text),o("Email sent successfully!")},e=>{console.log("Failed to send email. Error: ",e),o("Failed to send email. Please try again.")}):alert("Please enter a valid email address.")},children:[(0,a.jsx)("input",{type:"email",placeholder:"Enter your email",value:e,onChange:e=>{t(e.target.value)},className:"w-full sm:w-auto px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-300 shadow-lg",required:!0}),(0,a.jsx)("button",{type:"submit",className:"btn group w-full sm:w-auto bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-600",children:"Notify Me"})]}),(0,a.jsx)("p",{className:"text-center mt-4 text-gray-600",children:s})]})]})]}),(0,a.jsx)("div",{className:"mx-auto max-w-3xl","data-aos":"zoom-y-out","data-aos-delay":600,children:(0,a.jsxs)("div",{className:"relative aspect-video rounded-2xl bg-orange-100 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.orange.300),transparent)1]",children:[(0,a.jsx)("div",{className:"relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.orange.200)_4.5px,_transparent_0)] after:w-[41px]",children:(0,a.jsx)("span",{className:"text-[20px] font-semibold text-orange-800",children:"How to Use This Website"})}),(0,a.jsxs)("div",{className:"font-mono text-gray-700",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("span",{className:"text-orange-600 font-bold",children:"Step 1:"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"animate-[code-1_10s_infinite] text-orange-800",children:"register"})," ",(0,a.jsx)("span",{className:"animate-[code-2_10s_infinite]"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-gray-600",children:"Log in to access all features."})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("span",{className:"text-orange-600 font-bold",children:"Step 2:"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"animate-[code-5_10s_infinite] text-orange-800",children:"subscribe and pay"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-gray-600"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("span",{className:"text-orange-600 font-bold",children:"Step 3:"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"animate-[code-5_10s_infinite] text-orange-800",children:"Answer questions"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-gray-600"})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)("span",{className:"text-[16px] font-medium text-orange-800",children:"Follow these steps to successfully use the features of this website!"})})]})]})})]})})]})}},5523:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return a}});let a=s(7043)._(s(2265)).default.createContext(null)}},function(e){e.O(0,[878,971,117,744],function(){return e(e.s=386)}),_N_E=e.O()}]);