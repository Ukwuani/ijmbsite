exports.ids=[12],exports.modules={117:function(t,e,o){"use strict";o.r(e);var n=o(31),l=o(36),r=o(37),c={name:"ijmb-home",components:{Topbar:n.a,Bottombar:l.a,BackToTop:r.a},head:()=>({meta:[{name:"description",content:"ijmb"}],title:"IJMB & JUPEB Alevels | IJMB"}),data:()=>({auto:3e3,catchPhrases:["REGISTRATION FOR THE 2021/2022 IJMB SESSION HAS OFFICIALLY COMMENCED; THE ONGOING REGISTRATION CLOSES ON FRIDAY 16TH AUGUST, 2019. ","We're creating new routes for alternative university admission","No Jamb Required! Low Fees! Approved By NUC! Government Approved!"],links:[{name:"Home",link:"/ijmb"},{name:"About IJMB",link:"/ijmb/about"},{name:"Testimonials",link:"#testimonials"},{name:"Get in Touch",link:"#get-in-touch"},{name:"Register",link:"#register"}],linkRegister:"ijmb/register"})},d=o(1);var component=Object(d.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"AlphaHomePage"},[t._ssrNode('<div class="AlphaBackdrop" data-v-8dee0fbc>',"</div>",[t._ssrNode('<div class="AlphaOverlay" data-v-8dee0fbc>',"</div>",[o("topbar",{attrs:{content:t.links}}),t._ssrNode(' <div class="AlphaCatchPhrases" data-v-8dee0fbc><h1 class="h1 Fredoka" data-v-8dee0fbc>'+t._ssrEscape("\n          "+t._s(t.catchPhrases[0])+"\n        ")+'</h1> <div class="mt-1 mb-1" data-v-8dee0fbc><a'+t._ssrAttr("href",t.linkRegister)+' data-v-8dee0fbc><button data-v-8dee0fbc>\n            REGISTER NOW\n          </button></a></div> <i class="AlphaCatchPhrasesPointer icon icon-2x icon-arrow-down" data-v-8dee0fbc></i></div>')],2)]),t._ssrNode(" "),o("bottombar"),t._ssrNode(" "),o("back-to-top")],2)},[],!1,function(t){var e=o(94);e.__inject__&&e.__inject__(t)},"8dee0fbc","75d5f55f");e.default=component.exports},21:function(t,e,o){var content=o(28);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(7).default;t.exports.__inject__=function(t){n("28e08675",content,!0,t)}},22:function(t,e,o){var content=o(30);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(7).default;t.exports.__inject__=function(t){n("1ecf291b",content,!0,t)}},23:function(t,e,o){var content=o(33);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(7).default;t.exports.__inject__=function(t){n("513e9724",content,!0,t)}},24:function(t,e,o){var content=o(35);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(7).default;t.exports.__inject__=function(t){n("193489b4",content,!0,t)}},27:function(t,e,o){"use strict";o.r(e);var n=o(21),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},28:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".AlphaTitle[data-v-61eb9aa0]{margin:0 0 0 10px;color:#fff}a[data-v-61eb9aa0]{-webkit-text-decoration-line:none;text-decoration-line:none}",""])},29:function(t,e,o){"use strict";o.r(e);var n=o(22),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},30:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".AlphaTopbar[data-v-66e1006a]{background-color:#5755d9;position:fixed;left:0;right:0;top:0;z-index:20000}.AlphaTopbarLinks[data-v-66e1006a]{display:flex;align-items:center;justify-content:flex-end}.AlphaTopbar>div[data-v-66e1006a]:first-child{display:flex;align-items:center;justify-content:space-between;padding:0 1em;height:4.5em;width:75%;margin:auto}.AlphaTopbar .desktop-nav li[data-v-66e1006a]{display:inline-block;margin-left:40px}.mobile-nav[data-v-66e1006a]{margin:0;padding:0;list-style:none inside}.mobile-nav li a[data-v-66e1006a]{display:block}.AlphaTopbar .desktop-nav a[data-v-66e1006a]{font-weight:700;font-size:15px;color:#fafafa}.AlphaTopbar button[data-v-66e1006a]{display:none}.AlphaTopbar .modal-container[data-v-66e1006a]{background:#4b48d6}@media screen and (max-width:640px){.AlphaTopbar[data-v-66e1006a]{background-color:#4b48d6}.AlphaTopbar>div[data-v-66e1006a]:first-child{width:95%}.AlphaTopbar .desktop-nav li[data-v-66e1006a]{display:none}.AlphaTopbar button[data-v-66e1006a]{display:block}}@media screen and (max-width:768px){.AlphaTopbar>div[data-v-66e1006a]:first-child{width:95%}}",""])},31:function(t,e,o){"use strict";var n={name:"alpha-title",props:{text:{type:String,required:!0}},data:()=>({link:"https://alpha-alevels.com.ng/"})},l=o(1);var r=Object(l.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("a",{attrs:{href:this.link}},[this._ssrNode('<h1 class="AlphaTitle h4 Fredoka" data-v-61eb9aa0>'+this._ssrEscape("\n     "+this._s(this.text)+"\n ")+"</h1>")])},[],!1,function(t){var e=o(27);e.__inject__&&e.__inject__(t)},"61eb9aa0","39604df8").exports,c={name:"topbar",props:{content:{type:Array,required:!0},titleHeader:{type:String,required:!1}},components:{AlphaTitle:r},data:()=>({active:!1})};var d=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"AlphaTopbar"},[t._ssrNode("<div data-v-66e1006a>","</div>",[o("alpha-title",{attrs:{text:"IJMB & JUPEB Alevels"}}),t._ssrNode(' <div class="AlphaTopbarLinks" data-v-66e1006a><ul class="desktop-nav" data-v-66e1006a>'+t._ssrList(t.content,function(link){return"<li data-v-66e1006a><a"+t._ssrAttr("href",link.link)+" data-v-66e1006a>"+t._ssrEscape(t._s(link.name))+"</a></li>"})+'</ul> <button class="btn btn-action s-circle" data-v-66e1006a><i class="icon icon-menu" data-v-66e1006a></i></button></div> <div'+t._ssrClass("modal modal-sm",{active:t.active})+' data-v-66e1006a><div aria-label="Close" class="modal-overlay" data-v-66e1006a></div> <div class="modal-container" data-v-66e1006a><div class="modal-header" data-v-66e1006a><button aria-label="Close" class="btn btn-clear float-right text-light" data-v-66e1006a></button> <div class="modal-title h5 text-light" data-v-66e1006a>\n                        Menu\n                    </div></div> <div class="modal-body" data-v-66e1006a><div class="content" data-v-66e1006a><ul class="mobile-nav" data-v-66e1006a>'+t._ssrList(t.content,function(link){return"<li data-v-66e1006a><a"+t._ssrAttr("href",link.link)+' class="Fredoka text-light" data-v-66e1006a>'+t._ssrEscape(t._s(link.name))+"</a></li>"})+"</ul></div></div></div></div>")],2)])},[],!1,function(t){var e=o(29);e.__inject__&&e.__inject__(t)},"66e1006a","4c8d04a2");e.a=d.exports},32:function(t,e,o){"use strict";o.r(e);var n=o(23),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},33:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".AlphaBottombar[data-v-17b0656c]{position:relative}.AlphaBottombar .AlphaSocialIllustration[data-v-17b0656c]{background-image:url(/img/social.svg);background-repeat:no-repeat;background-size:100%;position:absolute;left:1%;bottom:30%;width:350px;height:350px}.AlphaBottombar .AlphaSocial[data-v-17b0656c]{display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff;padding:2.5em;transform:scale(1)}.AlphaBottombar .AlphaSocial .columns[data-v-17b0656c]{width:90%;margin:auto}.AlphaBottombar h6[data-v-17b0656c]{display:flex;align-items:center;justify-content:flex-end;margin:0;color:#fff;font-size:14px;background-color:#4b48d6;padding:1.3em}.AlphaBottombar a[data-v-17b0656c]{color:#f0f0f0}@media screen and (max-width:640px){.AlphaBottombar .AlphaSocial .columns[data-v-17b0656c]{width:100%}.AlphaBottombar .AlphaSocialIllustration[data-v-17b0656c]{left:30%;bottom:86%;width:200px;height:200px}}",""])},34:function(t,e,o){"use strict";o.r(e);var n=o(24),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},35:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".AlphaBackToTop[data-v-66f5d528]{position:fixed;right:0;bottom:0;margin:1em;display:none;transition:all .4s ease-in-out 0s}.show[data-v-66f5d528]{display:block}",""])},36:function(t,e,o){"use strict";var n={name:"bottombar",data:()=>({contacts:[{icon:"facebook",name:"@alpha_alevels",link:"https://fb.me/alpha-alevels"},{icon:"twitter",name:"@AlphaAlevels",link:"https://twitter.com/AlphaAlevels"},{icon:"whatsapp",name:"+234-701-313-7970",link:"https://api.whatsapp.com/send?phone=2347013137970&text=Hello%20ALPHA-ALEVELS%21%F0%9F%98%8A%20Please%20I%20would%20like%20to%20know%20more%20about%20IJMB%20and%20how%20to%20go%20about%20the%20registration%20process...%20Thanks&source=&data="},{icon:"email",name:"ijmbstudycenter@gmail.com",link:"mailto://ijmbstudycenter@gmail.com"},{icon:"phone",name:"+234-903-447-5096",link:"phone://+2349034475096"}]})},l=o(1);var component=Object(l.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"AlphaBottombar"},[t._ssrNode('<div class="AlphaSocialIllustration" data-v-17b0656c></div> <div id="get-in-touch" class="AlphaSocial bg-primary" data-v-17b0656c><p class="h4 Fredoka" data-v-17b0656c>Get in touch</p> <div class="columns" data-v-17b0656c>'+t._ssrList(t.contacts,function(e){return'<div class="column col-3 col-sm-12 col-md-4" data-v-17b0656c><div class="text-center" data-v-17b0656c><i'+t._ssrClass(null,"mdi mdi-36px mdi-"+e.icon)+' data-v-17b0656c></i></div> <div class="text-center" data-v-17b0656c><a'+t._ssrAttr("href",e.link)+" data-v-17b0656c>"+t._ssrEscape(t._s(e.name))+"</a></div></div>"})+"</div></div> <h6 data-v-17b0656c><strong data-v-17b0656c>Alpha Alevel</strong> © 2019. All Rights Reserved\n    </h6>")])},[],!1,function(t){var e=o(32);e.__inject__&&e.__inject__(t)},"17b0656c","8e0d3a98");e.a=component.exports},37:function(t,e,o){"use strict";var n={name:"back-to-top",mounted(){window.addEventListener("scroll",()=>{this.windowScrollHeight=window.scrollY,console.log("Scrolling",this.windowScrollHeight)},!1)},data:()=>({windowScrollHeight:0}),methods:{scrollToTop(){window.scrollTo(0,0)}}},l=o(1);var component=Object(l.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"AlphaBackToTop btn s-circle btn-action btn-error",class:{show:this.windowScrollHeight>=180},on:{click:this.scrollToTop}},[this._ssrNode('<i class="icon icon-upward" data-v-66f5d528></i>')])},[],!1,function(t){var e=o(34);e.__inject__&&e.__inject__(t)},"66f5d528","33388f5f");e.a=component.exports},66:function(t,e,o){var content=o(95);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(7).default;t.exports.__inject__=function(t){n("4cbd2aaa",content,!0,t)}},94:function(t,e,o){"use strict";o.r(e);var n=o(66),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},95:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".AlphaTopbar[data-v-8dee0fbc]{background-color:#ff5722;position:fixed;left:0;right:0;top:0;z-index:20000}.AlphaOverlay[data-v-8dee0fbc]{background-color:rgba(249,88,56,.8)}.AlphaCatchPhrases button[data-v-8dee0fbc]{color:#fff;border:1.5px solid #fff}.AlphaCatchPhrases button[data-v-8dee0fbc]:hover{color:#fafafa;background:#ff5722}",""])}};
//# sourceMappingURL=ab06e0d064367729826a.js.map