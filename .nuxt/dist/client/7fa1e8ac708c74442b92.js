(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("28e08675",content,!0,{sourceMap:!1})},172:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("1ecf291b",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var o={name:"alpha-title",props:{text:{type:String,required:!0}},data:function(){return{link:"https://alpha-alevels.com.ng/"}}},l=(n(180),n(19)),r=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.link}},[e("h1",{staticClass:"AlphaTitle h4 Fredoka"},[this._v("\n     "+this._s(this.text)+"\n ")])])},[],!1,null,"61eb9aa0",null).exports,c={name:"topbar",props:{content:{type:Array,required:!0},titleHeader:{type:String,required:!1}},components:{AlphaTitle:r},data:function(){return{active:!1}}},d=(n(182),Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"AlphaTopbar"},[n("div",[n("alpha-title",{attrs:{text:"IJMB & JUPEB Alevels"}}),t._v(" "),n("div",{staticClass:"AlphaTopbarLinks"},[n("ul",{staticClass:"desktop-nav"},t._l(t.content,function(link){return n("li",{key:link.link},[n("a",{attrs:{href:link.link},domProps:{textContent:t._s(link.name)}})])}),0),t._v(" "),n("button",{staticClass:"btn btn-action s-circle",on:{click:function(e){t.active=!0}}},[n("i",{staticClass:"icon icon-menu"})])]),t._v(" "),n("div",{staticClass:"modal modal-sm",class:{active:t.active}},[n("div",{staticClass:"modal-overlay",attrs:{"aria-label":"Close"},on:{click:function(e){t.active=!1}}}),t._v(" "),n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"btn btn-clear float-right text-light",attrs:{"aria-label":"Close"},on:{click:function(e){t.active=!1}}}),t._v(" "),n("div",{staticClass:"modal-title h5 text-light"},[t._v("\n                        Menu\n                    ")])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"content"},[n("ul",{staticClass:"mobile-nav"},t._l(t.content,function(link){return n("li",{key:link.name},[n("a",{staticClass:"Fredoka text-light",attrs:{href:link.link},domProps:{textContent:t._s(link.name)},on:{click:function(e){t.active=!1}}})])}),0)])])])])],1)])},[],!1,null,"66e1006a",null));e.a=d.exports},180:function(t,e,n){"use strict";var o=n(171);n.n(o).a},181:function(t,e,n){(t.exports=n(69)(!1)).push([t.i,".AlphaTitle[data-v-61eb9aa0]{margin:0 0 0 10px;color:#fff}a[data-v-61eb9aa0]{-webkit-text-decoration-line:none;text-decoration-line:none}",""])},182:function(t,e,n){"use strict";var o=n(172);n.n(o).a},183:function(t,e,n){(t.exports=n(69)(!1)).push([t.i,".AlphaTopbar[data-v-66e1006a]{background-color:#5755d9;position:fixed;left:0;right:0;top:0;z-index:20000}.AlphaTopbarLinks[data-v-66e1006a]{display:flex;align-items:center;justify-content:flex-end}.AlphaTopbar>div[data-v-66e1006a]:first-child{display:flex;align-items:center;justify-content:space-between;padding:0 1em;height:4.5em;width:75%;margin:auto}.AlphaTopbar .desktop-nav li[data-v-66e1006a]{display:inline-block;margin-left:40px}.mobile-nav[data-v-66e1006a]{margin:0;padding:0;list-style:none inside}.mobile-nav li a[data-v-66e1006a]{display:block}.AlphaTopbar .desktop-nav a[data-v-66e1006a]{font-weight:700;font-size:15px;color:#fafafa}.AlphaTopbar button[data-v-66e1006a]{display:none}.AlphaTopbar .modal-container[data-v-66e1006a]{background:#4b48d6}@media screen and (max-width:640px){.AlphaTopbar[data-v-66e1006a]{background-color:#4b48d6}.AlphaTopbar>div[data-v-66e1006a]:first-child{width:95%}.AlphaTopbar .desktop-nav li[data-v-66e1006a]{display:none}.AlphaTopbar button[data-v-66e1006a]{display:block}}@media screen and (max-width:768px){.AlphaTopbar>div[data-v-66e1006a]:first-child{width:95%}}",""])},199:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("25260cbe",content,!0,{sourceMap:!1})},234:function(t,e,n){t.exports=function(){"use strict";var t,script={props:{images:{type:Array,required:!0},index:{type:Number,required:!1,default:null}},data:function(){return{imgIndex:this.index,image:null,galleryXPos:0,thumbnailWidth:120}},computed:{imageUrl:function(){return this.images[this.imgIndex]},isMultiple:function(){return this.images.length>1}},watch:{index:function(t){this.imgIndex=t}},mounted:function(){var t=this;window.addEventListener("keydown",function(e){37===e.keyCode?t.onPrev():39===e.keyCode?t.onNext():27===e.keyCode&&t.close()})},methods:{close:function(){this.imgIndex=null,this.$emit("close")},onPrev:function(){null!==this.imgIndex&&(this.imgIndex>0?this.imgIndex--:this.imgIndex=this.images.length-1,this.updateThumbails())},onNext:function(){null!==this.imgIndex&&(this.imgIndex<this.images.length-1?this.imgIndex++:this.imgIndex=0,this.updateThumbails())},onClickThumb:function(image,t){this.imgIndex=t,this.updateThumbails()},updateThumbails:function(){if(this.$refs.gallery){var t=this.$refs.gallery.clientWidth,e=this.imgIndex*this.thumbnailWidth,n=this.images.length*this.thumbnailWidth,o=Math.floor(t/(2*this.thumbnailWidth))*this.thumbnailWidth;n<t||(e<o?this.galleryXPos=0:e>this.images.length*this.thumbnailWidth-t+o?this.galleryXPos=-(this.images.length*this.thumbnailWidth-t-20):this.galleryXPos=-this.imgIndex*this.thumbnailWidth+o)}}}},e=function(template,style,script,t,e,n,o,l,r,c){"boolean"!=typeof o&&(r=l,l=o,o=!1);var d,h="function"==typeof script?script.options:script;if(template&&template.render&&(h.render=template.render,h.staticRenderFns=template.staticRenderFns,h._compiled=!0,e&&(h.functional=!0)),t&&(h._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=d):style&&(d=o?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(t){style.call(this,l(t))}),d)if(h.functional){var m=h.render;h.render=function(t,e){return d.call(e),m(t,e)}}else{var v=h.beforeCreate;h.beforeCreate=v?[].concat(v,d):[d]}return script},n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),o={};return e({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[null!==t.imgIndex?n("div",{staticClass:"vgs",on:{click:t.close}},[n("button",{staticClass:"vgs__close",attrs:{type:"button"},on:{click:t.close}},[t._v("\n      ×\n    ")]),t._v(" "),t.isMultiple?n("button",{staticClass:"vgs__prev",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.onPrev(e)}}},[t._v("\n      ‹\n    ")]):t._e(),t._v(" "),t.images?n("div",{staticClass:"vgs__container",on:{click:function(e){return e.stopPropagation(),t.onNext(e)}}},[n("img",{staticClass:"vgs__container__img",attrs:{src:t.imageUrl},on:{click:function(e){return e.stopPropagation(),t.onNext(e)}}})]):t._e(),t._v(" "),t.isMultiple?n("button",{staticClass:"vgs__next",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.onNext(e)}}},[t._v("\n      ›\n    ")]):t._e(),t._v(" "),t.isMultiple?n("div",{ref:"gallery",staticClass:"vgs__gallery"},[t.images?n("div",{staticClass:"vgs__gallery__title"},[t._v("\n        "+t._s(t.imgIndex+1)+" / "+t._s(t.images.length)+"\n      ")]):t._e(),t._v(" "),t.images?n("div",{staticClass:"vgs__gallery__container",style:{transform:"translate("+t.galleryXPos+"px, 0)"}},t._l(t.images,function(img,i){return n("img",{key:i,staticClass:"vgs__gallery__container__img",class:{"vgs__gallery__container__img--active":i===t.imgIndex},attrs:{src:img},on:{click:function(e){return e.stopPropagation(),t.onClickThumb(img,i)}}})}),0):t._e()]):t._e()]):t._e()])},staticRenderFns:[]},function(t){t&&t("data-v-15d0b1ac_0",{source:".vgs{transition:opacity .2s ease;position:fixed;z-index:9998;top:0;left:0;width:100%;min-height:100%;height:100vh;background-color:rgba(0,0,0,.8);display:table}.vgs__close{color:#fff;position:absolute;top:0;right:0;background-color:transparent;border:none;font-size:25px;width:50px;height:50px;cursor:pointer;z-index:999}.vgs__close:focus{outline:0}.vgs__next,.vgs__prev{position:absolute;top:50%;margin-top:-25px;width:50px;height:50px;z-index:999;cursor:pointer;font-size:40px;color:#fff;background-color:transparent;border:none}.vgs__next:focus,.vgs__prev:focus{outline:0}.vgs__prev{left:0}.vgs__next{right:0}.vgs__container{position:absolute;overflow:hidden;cursor:pointer;overflow:hidden;max-width:100vh;margin:.5rem auto 0;left:.5rem;right:.5rem;height:60vh;border-radius:12px;background-color:#000}@media (max-width:767px){.vgs__container{width:100%;max-width:100%;top:50%;margin-top:-140px;left:0;right:0;border-radius:0;height:280px}}.vgs__container__img{width:100%;height:100%;object-fit:contain}.vgs__gallery{overflow-x:hidden;overflow-y:hidden;position:absolute;bottom:10px;margin:auto;max-width:100vh;white-space:nowrap;left:.5rem;right:.5rem}@media (max-width:767px){.vgs__gallery{display:none}}.vgs__gallery__title{color:#fff;margin-bottom:.5rem}.vgs__gallery__container{overflow:visible;display:block;height:100px;white-space:nowrap;transition:all .2s ease-in-out;width:100%}.vgs__gallery__container__img{width:100px;height:100px;object-fit:cover;display:inline-block;float:none;margin-right:20px;cursor:pointer;opacity:.6;border-radius:8px}.vgs__gallery__container__img--active{width:100px;display:inline-block;float:none;opacity:1}.modal-enter{opacity:0}.modal-leave-active{opacity:0}",map:void 0,media:void 0})},script,void 0,!1,void 0,function(e){return function(e,style){return function(e,l){var r=n?l.media||"default":e,style=o[r]||(o[r]={ids:new Set,styles:[]});if(!style.ids.has(e)){style.ids.add(e);var code=l.source;if(l.map&&(code+="\n/*# sourceURL="+l.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",l.media&&style.element.setAttribute("media",l.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{var c=style.ids.size-1,d=document.createTextNode(code),h=style.element.childNodes;h[c]&&style.element.removeChild(h[c]),h.length?style.element.insertBefore(d,h[c]):style.element.appendChild(d)}}}(e,style)}},void 0)}()},235:function(t,e,n){"use strict";var o=n(199);n.n(o).a},236:function(t,e,n){(t.exports=n(69)(!1)).push([t.i,".AlphaTopbar[data-v-d367b1a6]{background-color:#ff5722}",""])},265:function(t,e,n){"use strict";n.r(e);var o=n(173),l=(n(234),{name:"ijmb-accomodation",components:{Topbar:o.a},data:function(){return{images:["img/hos1.png","img/hos2.png","img/hos3.jpg","img/hos4.jpg","img/hos5.jpg","img/hos6.jpg","img/hos7.jpg","img/hos8.jpg"],index:null}}}),r=(n(235),n(19)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("topbar",{attrs:{content:t.$store.getters.ijmb}}),t._v(" "),n("h1",[t._v("Accomodation")]),t._v(" "),n("section",[n("vue-gallery-slideshow",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}})],1)],1)},[],!1,null,"d367b1a6",null);e.default=component.exports}}]);