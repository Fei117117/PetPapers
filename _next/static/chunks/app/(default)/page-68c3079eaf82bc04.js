(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{5560:function(e,t,a){Promise.resolve().then(a.bind(a,1803)),Promise.resolve().then(a.bind(a,8851))},1803:function(e,t,a){"use strict";a.d(t,{default:function(){return n}});var s=a(7437),r=a(2265);let o="/PetPapers";function n(){let e=(0,r.useRef)(null);return(0,s.jsx)("section",{className:"relative mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center",children:(0,s.jsx)("div",{className:"mx-auto max-w-3xl","data-aos":"zoom-y-out","data-aos-delay":600,children:(0,s.jsxs)("div",{className:"relative rounded-2xl bg-orange-100 px-5 py-8 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.orange.300),transparent)1]",children:[(0,s.jsx)("div",{className:"relative mb-8",children:(0,s.jsx)("span",{className:"text-[20px] font-semibold text-orange-800",children:"How to Use This Website"})}),(0,s.jsx)("button",{className:"absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-300 text-white rounded-full p-1 shadow-md hover:bg-orange-400 lg:hidden",onClick:()=>{e.current&&e.current.scrollBy({left:-270,behavior:"smooth"})},children:"<"}),(0,s.jsx)("div",{className:"font-mono text-gray-700",children:(0,s.jsxs)("div",{className:"flex flex-nowrap justify-around items-center space-x-8 overflow-x-auto scrollbar-hide",ref:e,children:[(0,s.jsxs)("div",{className:"text-center min-w-[250px]",children:[(0,s.jsx)("img",{src:"".concat(o,"/images/one.png"),alt:"Number One Icon",style:{width:"40px",height:"40px"},className:"mx-auto"}),(0,s.jsx)("span",{className:"block mt-5 text-orange-800",children:"Tell your pet’s marvelous life story and upload your favorite photos with our simple, easy-to-use online tool!"})]}),(0,s.jsxs)("div",{className:"text-center min-w-[250px]",children:[(0,s.jsx)("img",{src:"".concat(o,"/images/two.png"),alt:"Number Two Icon",style:{width:"40px",height:"40px"},className:"mx-auto"}),(0,s.jsx)("span",{className:"block mt-5 text-orange-800",children:"Heal at your own pace, with full flexibility. Simply let us know when you’re finished."})]}),(0,s.jsxs)("div",{className:"text-center min-w-[250px]",children:[(0,s.jsx)("img",{src:"".concat(o,"/images/three.png"),alt:"Number Three Icon",style:{width:"40px",height:"40px"},className:"mx-auto"}),(0,s.jsx)("span",{className:"block mt-5 text-orange-800",children:"Sit back while we deliver a beautiful keepsake book full of your stories and photos to cherish forever."})]}),(0,s.jsx)("button",{className:"absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-300 text-white rounded-full p-1 shadow-md hover:bg-orange-400 lg:hidden",onClick:()=>{e.current&&e.current.scrollBy({left:270,behavior:"smooth"})},children:">"})]})})]})})})}},8851:function(e,t,a){"use strict";a.d(t,{default:function(){return m}});var s=a(7437);function r(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"pointer-events-none absolute -top-32 left-1/2 ml-[580px] -translate-x-1/2","aria-hidden":"true",children:(0,s.jsx)("div",{className:"h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 opacity-50 blur-[160px]"})}),(0,s.jsx)("div",{className:"pointer-events-none absolute left-1/2 top-[420px] ml-[380px] -translate-x-1/2","aria-hidden":"true",children:(0,s.jsx)("div",{className:"h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 to-gray-900 opacity-50 blur-[160px]"})}),(0,s.jsx)("div",{className:"pointer-events-none absolute left-1/2 top-[640px] -ml-[300px] -translate-x-1/2","aria-hidden":"true",children:(0,s.jsx)("div",{className:"h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500 to-gray-900 opacity-50 blur-[160px]"})})]})}var o=a(2265);let n={_origin:"https://api.emailjs.com"},l=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}let d=(e,t,a={})=>new Promise((s,r)=>{let o=new XMLHttpRequest;o.addEventListener("load",({target:e})=>{let t=new i(e);200===t.status||"OK"===t.text?s(t):r(t)}),o.addEventListener("error",({target:e})=>{r(new i(e))}),o.open("POST",n._origin+e,!0),Object.keys(a).forEach(e=>{o.setRequestHeader(e,a[e])}),o.send(t)});var c={send:(e,t,a,s)=>{let r=s||n._userID;return l(r,e,t),d("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})}};function m(){let[e,t]=(0,o.useState)(""),[a,n]=(0,o.useState)("");return(0,s.jsxs)("section",{className:"relative",children:[(0,s.jsx)(r,{}),(0,s.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:(0,s.jsx)("div",{className:"pb-12 pt-32 md:pb-20 md:pt-40",children:(0,s.jsxs)("div",{className:"pb-12 text-center md:pb-16",children:[(0,s.jsx)("div",{"data-aos":"zoom-y-out"}),(0,s.jsxs)("h1",{className:"mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl","data-aos":"zoom-y-out","data-aos-delay":150,children:["It's hard to cope with pet loss ",(0,s.jsx)("br",{className:"max-lg:hidden"})]}),(0,s.jsxs)("div",{className:"mx-auto max-w-3xl",children:[(0,s.jsxs)("p",{className:"mb-8 text-lg text-gray-700","data-aos":"zoom-y-out","data-aos-delay":300,children:["And it's tough to remember the small things."," ",(0,s.jsx)("br",{className:"max-lg:hidden"}),"PetPapers helps you heal by keeping your stories together, forever."]}),(0,s.jsxs)("div",{className:"relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.8),transparent)1]",children:[(0,s.jsxs)("form",{className:"mx-auto max-w-lg sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4","data-aos":"zoom-y-out","data-aos-delay":450,onSubmit:t=>{t.preventDefault(),e&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?c.send("service_s1zycp3","template_54o2e5v",{user_email:e},"JlpmbJo_CxRsT0bcV").then(e=>{console.log("Email successfully sent!",e.status,e.text),n("Email sent successfully!")},e=>{console.log("Failed to send email. Error: ",e),n("Failed to send email. Please try again.")}):alert("Please enter a valid email address.")},children:[(0,s.jsx)("input",{type:"email",placeholder:"Enter your email",value:e,onChange:e=>{t(e.target.value)},className:"w-full sm:w-auto px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-300 shadow-lg",required:!0}),(0,s.jsx)("button",{type:"submit",className:"btn group w-full sm:w-auto bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-600",children:"Notify Me"})]}),(0,s.jsx)("p",{className:"text-center mt-4 text-gray-600",children:a})]})]})]})})})]})}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=5560)}),_N_E=e.O()}]);