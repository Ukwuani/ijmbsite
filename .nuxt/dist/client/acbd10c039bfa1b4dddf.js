(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(t,e,o){var content=o(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("28e08675",content,!0,{sourceMap:!1})},172:function(t,e,o){var content=o(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("1ecf291b",content,!0,{sourceMap:!1})},173:function(t,e,o){"use strict";var n={name:"alpha-title",props:{text:{type:String,required:!0}},data:function(){return{link:"https://alpha-alevels.com.ng/"}}},l=(o(180),o(19)),r=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.link}},[e("h1",{staticClass:"AlphaTitle h4 Fredoka"},[this._v("\n     "+this._s(this.text)+"\n ")])])},[],!1,null,"61eb9aa0",null).exports,c={name:"topbar",props:{content:{type:Array,required:!0},titleHeader:{type:String,required:!1}},components:{AlphaTitle:r},data:function(){return{active:!1}}},d=(o(182),Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"AlphaTopbar"},[o("div",[o("alpha-title",{attrs:{text:"IJMB & JUPEB Alevels"}}),t._v(" "),o("div",{staticClass:"AlphaTopbarLinks"},[o("ul",{staticClass:"desktop-nav"},t._l(t.content,function(link){return o("li",{key:link.link},[o("a",{attrs:{href:link.link},domProps:{textContent:t._s(link.name)}})])}),0),t._v(" "),o("button",{staticClass:"btn btn-action s-circle",on:{click:function(e){t.active=!0}}},[o("i",{staticClass:"icon icon-menu"})])]),t._v(" "),o("div",{staticClass:"modal modal-sm",class:{active:t.active}},[o("div",{staticClass:"modal-overlay",attrs:{"aria-label":"Close"},on:{click:function(e){t.active=!1}}}),t._v(" "),o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[o("button",{staticClass:"btn btn-clear float-right text-light",attrs:{"aria-label":"Close"},on:{click:function(e){t.active=!1}}}),t._v(" "),o("div",{staticClass:"modal-title h5 text-light"},[t._v("\n                        Menu\n                    ")])]),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"content"},[o("ul",{staticClass:"mobile-nav"},t._l(t.content,function(link){return o("li",{key:link.name},[o("a",{staticClass:"Fredoka text-light",attrs:{href:link.link},domProps:{textContent:t._s(link.name)},on:{click:function(e){t.active=!1}}})])}),0)])])])])],1)])},[],!1,null,"66e1006a",null));e.a=d.exports},174:function(t,e,o){"use strict";var n={name:"bottombar",data:function(){return{contacts:[{icon:"facebook",name:"@alpha_alevels",link:"https://fb.me/alpha-alevels"},{icon:"twitter",name:"@AlphaAlevels",link:"https://twitter.com/AlphaAlevels"},{icon:"whatsapp",name:"+234-701-313-7970",link:"https://api.whatsapp.com/send?phone=2347013137970&text=Hello%20ALPHA-ALEVELS%21%F0%9F%98%8A%20Please%20I%20would%20like%20to%20know%20more%20about%20IJMB%20and%20how%20to%20go%20about%20the%20registration%20process...%20Thanks&source=&data="},{icon:"email",name:"ijmbstudycenter@gmail.com",link:"mailto://ijmbstudycenter@gmail.com"},{icon:"phone",name:"+234-903-447-5096",link:"phone://+2349034475096"}]}}},l=(o(192),o(19)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"AlphaBottombar"},[o("div",{staticClass:"AlphaSocialIllustration"}),t._v(" "),o("div",{staticClass:"AlphaSocial bg-primary",attrs:{id:"get-in-touch"}},[o("p",{staticClass:"h4 Fredoka"},[t._v("Get in touch")]),t._v(" "),o("div",{staticClass:"columns"},t._l(t.contacts,function(e){return o("div",{key:e.icon,staticClass:"column col-3 col-sm-12 col-md-4"},[o("div",{staticClass:"text-center"},[o("i",{class:"mdi mdi-36px mdi-"+e.icon})]),t._v(" "),o("div",{staticClass:"text-center"},[o("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])])}),0)]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",[e("strong",[this._v("Alpha Alevel")]),this._v(" © 2019. All Rights Reserved\n    ")])}],!1,null,"17b0656c",null);e.a=component.exports},175:function(t,e,o){"use strict";var n={name:"back-to-top",mounted:function(){var t=this;window.addEventListener("scroll",function(){t.windowScrollHeight=window.scrollY,console.log("Scrolling",t.windowScrollHeight)},!1)},data:function(){return{windowScrollHeight:0}},methods:{scrollToTop:function(){window.scrollTo(0,0)}}},l=(o(194),o(19)),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"AlphaBackToTop btn s-circle btn-action btn-error",class:{show:this.windowScrollHeight>=180},on:{click:this.scrollToTop}},[e("i",{staticClass:"icon icon-upward"})])},[],!1,null,"66f5d528",null);e.a=component.exports},176:function(t,e,o){var content=o(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("513e9724",content,!0,{sourceMap:!1})},177:function(t,e,o){var content=o(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("193489b4",content,!0,{sourceMap:!1})},179:function(t,e,o){"use strict";var n={name:"testimonials",data:function(){return{testimonials:[{author:"Omotayo S. Omolayo",image:"/img/omotayo.jpg",comment:"I can proudly say that I'm one of the lucky people who enrolled for JUPEB, I'm now a 200 Level Student of Geophysics in the University of Ilorin! If you're seeking admission and you're here, then I think you're lucky too.",package:"JUPEB"},{author:"Okurame Zino-Gift",image:"/img/gift.jpg",comment:"The day i found out about IJMB is one of the best days of my life, aside for the fact that I have gained admission now the experienced gained will forever remain within me.{Now a nursing student of BOWEN University}",package:"IJMB"},{author:"Zeal Olayemi Blessing",image:"/img/zeal.jpg",comment:"I enrolled for IJMB A'level programme through IJMB & JUPEB Alevels last year after! After years of seeking admission. Completing the 9-months of IJMB, I was offered admission to study Economics in the University of Ilorin.",package:"IJMB"},{author:"Kuburat O. Olanrewaju",image:"/img/kuburat.jpg",comment:"It is interesting to note that IJMB & ALPHA ALEVLES are moving in the right direction to enhance academics performance by giving young people like myself the opportunity to further their edu! Keep up the good Job.",package:"IJMB"},{author:"Princess Udochi Moses",image:"/img/princess.jpg",comment:"I'm a proof of JUPEB admission, it took me less than seven months after I had wasted 3 years seeking university admission through JAMB;..I'm now a bonafide Veterinary Medicine student of Imo State University---{IMSU}.",package:"JUPEB"},{author:"Temitope A. Odukoya",image:"/img/temitope.jpg",comment:"I appreciate the opportunity JUPEB gave me and lots of people to realise our dreams. The program was fast and easy (I'm really grateful for the privilege) I'm now a final year Sociology student of University of Ilorin.",package:"JUPEB"}]}}},l=(o(208),o(19)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"AlphaTestimonials",attrs:{id:"testimonials"}},[o("h1",{staticClass:"h2 text-center my-1 Fredoka text-primary"},[t._v("Testimonials")]),t._v(" "),o("div",{staticClass:"AlphaTestimonial columns AlphaCategory"},t._l(t.testimonials,function(e){return o("div",{key:e.author,staticClass:"column col-4 col-sm-12 col-md-6"},[o("div",{staticClass:"AlphaTestimonialImage"},[e.image?o("img",{attrs:{src:e.image,alt:"Picture of "+e.author}}):o("i",{staticClass:"icon icon-people icon-2x"})]),t._v(" "),o("h6",{staticClass:"h5 text-bold"},[t._v(t._s(e.author))]),t._v(" "),o("h2",{staticClass:"h6"},[t._v(t._s(e.package))]),t._v(" "),o("p",[t._v("\n                "+t._s(e.comment)+"\n            ")])])}),0)])},[],!1,null,"70e87726",null);e.a=component.exports},180:function(t,e,o){"use strict";var n=o(171);o.n(n).a},181:function(t,e,o){(t.exports=o(69)(!1)).push([t.i,".AlphaTitle[data-v-61eb9aa0]{margin:0 0 0 10px;color:#fff}a[data-v-61eb9aa0]{-webkit-text-decoration-line:none;text-decoration-line:none}",""])},182:function(t,e,o){"use strict";var n=o(172);o.n(n).a},183:function(t,e,o){(t.exports=o(69)(!1)).push([t.i,".AlphaTopbar[data-v-66e1006a]{background-color:#5755d9;position:fixed;left:0;right:0;top:0;z-index:20000}.AlphaTopbarLinks[data-v-66e1006a]{display:flex;align-items:center;justify-content:flex-end}.AlphaTopbar>div[data-v-66e1006a]:first-child{display:flex;align-items:center;justify-content:space-between;padding:0 1em;height:4.5em;width:75%;margin:auto}.AlphaTopbar .desktop-nav li[data-v-66e1006a]{display:inline-block;margin-left:40px}.mobile-nav[data-v-66e1006a]{margin:0;padding:0;list-style:none inside}.mobile-nav li a[data-v-66e1006a]{display:block}.AlphaTopbar .desktop-nav a[data-v-66e1006a]{font-weight:700;font-size:15px;color:#fafafa}.AlphaTopbar button[data-v-66e1006a]{display:none}.AlphaTopbar .modal-container[data-v-66e1006a]{background:#4b48d6}@media screen and (max-width:640px){.AlphaTopbar[data-v-66e1006a]{background-color:#4b48d6}.AlphaTopbar>div[data-v-66e1006a]:first-child{width:95%}.AlphaTopbar .desktop-nav li[data-v-66e1006a]{display:none}.AlphaTopbar button[data-v-66e1006a]{display:block}}@media screen and (max-width:768px){.AlphaTopbar>div[data-v-66e1006a]:first-child{width:95%}}",""])},188:function(t,e,o){var content=o(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("1e270fb4",content,!0,{sourceMap:!1})},191:function(t,e,o){"use strict";var n={name:"back-to-top",mounted:function(){var t=this;window.addEventListener("scroll",function(){t.windowScrollHeight=window.scrollY,console.log("Scrolling",t.windowScrollHeight)},!1)},data:function(){return{windowScrollHeight:0,imgLink:"/img/twitter-icon.svg"}},methods:{scrollToTop:function(){window.scrollTo(0,0)}}},l=(o(237),o(19)),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"twitter-mention-button",attrs:{href:"https://twitter.com/intent/tweet?screen_name=AlphaAlevels&ref_src=twsrc%5Etfw","data-show-count":"false"}},[e("button",{staticClass:"AlphaBackToTop  btn AlphaWeb "},[this._v("Tweet to @AlphaAlevels\n        ")]),this._v(" "),e("button",{staticClass:"AlphaBackToTop btn-action btn AlphaMobile "},[e("img",{attrs:{src:this.imgLink}})])])},[],!1,null,"d9895f84",null);e.a=component.exports},192:function(t,e,o){"use strict";var n=o(176);o.n(n).a},193:function(t,e,o){(t.exports=o(69)(!1)).push([t.i,".AlphaBottombar[data-v-17b0656c]{position:relative}.AlphaBottombar .AlphaSocialIllustration[data-v-17b0656c]{background-image:url(/img/social.svg);background-repeat:no-repeat;background-size:100%;position:absolute;left:1%;bottom:30%;width:350px;height:350px}.AlphaBottombar .AlphaSocial[data-v-17b0656c]{display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff;padding:2.5em;transform:scale(1)}.AlphaBottombar .AlphaSocial .columns[data-v-17b0656c]{width:90%;margin:auto}.AlphaBottombar h6[data-v-17b0656c]{display:flex;align-items:center;justify-content:flex-end;margin:0;color:#fff;font-size:14px;background-color:#4b48d6;padding:1.3em}.AlphaBottombar a[data-v-17b0656c]{color:#f0f0f0}@media screen and (max-width:640px){.AlphaBottombar .AlphaSocial .columns[data-v-17b0656c]{width:100%}.AlphaBottombar .AlphaSocialIllustration[data-v-17b0656c]{left:30%;bottom:86%;width:200px;height:200px}}",""])},194:function(t,e,o){"use strict";var n=o(177);o.n(n).a},195:function(t,e,o){(t.exports=o(69)(!1)).push([t.i,".AlphaBackToTop[data-v-66f5d528]{position:fixed;right:0;bottom:0;margin:1em;display:none;transition:all .4s ease-in-out 0s}.show[data-v-66f5d528]{display:block}",""])},208:function(t,e,o){"use strict";var n=o(188);o.n(n).a},209:function(t,e,o){(t.exports=o(69)(!1)).push([t.i,".AlphaTestimonials[data-v-70e87726]{background:#f0f0f0;padding-top:3em}.AlphaTestimonials .AlphaTestimonial .column[data-v-70e87726]{display:flex;align-items:center;justify-content:center;flex-direction:column}.AlphaTestimonialImage[data-v-70e87726]{margin-bottom:1em;border-radius:100%;width:5em;height:5em;border:1px solid #f0f0f0;display:flex;align-items:center;justify-content:center}.AlphaTestimonialImage img[data-v-70e87726]{width:5em;height:5em;border-radius:100%}.AlphaTestimonial p[data-v-70e87726]{text-align:center;margin:auto;width:85%;color:#777}@media screen and (max-width:360px){.AlphaTestimonial p[data-v-70e87726]{font-size:14px}}",""])},210:function(t,e,o){var content=o(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("3b052916",content,!0,{sourceMap:!1})},237:function(t,e,o){"use strict";var n=o(210);o.n(n).a},238:function(t,e,o){(t.exports=o(69)(!1)).push([t.i,".AlphaBackToTop[data-v-d9895f84]{position:fixed;left:0;bottom:0;margin:1em;transition:all .4s ease-in-out 0s;color:#fafafa;border:24px #fff;border-radius:2em;background:#1da1f2}.AlphaBackToTop img[data-v-d9895f84]{margin:auto;-webkit-filter:invert(1);filter:invert(1)}.show[data-v-d9895f84]{display:block}.AlphaMobile[data-v-d9895f84]{display:none}@media screen and (max-width:640px){.AlphaMobile[data-v-d9895f84]{display:flex}.AlphaWeb[data-v-d9895f84]{display:none}}",""])}}]);