"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3663],{7214:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(3645),r=s.n(a)()((function(t){return t[1]}));r.push([t.id,"svg[data-v-3e43005c]{display:inline-block;height:80px;position:absolute;right:0;top:0;width:80px}",""]);const i=r},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,a){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var n=this[i][0];null!=n&&(r[n]=!0)}for(var o=0;o<t.length;o++){var l=[].concat(t[o]);a&&r[l[0]]||(s&&(l[2]?l[2]="".concat(s," and ").concat(l[2]):l[2]=s),e.push(l))}},e}},3379:(t,e,s)=>{var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),n=[];function o(t){for(var e=-1,s=0;s<n.length;s++)if(n[s].identifier===t){e=s;break}return e}function l(t,e){for(var s={},a=[],r=0;r<t.length;r++){var i=t[r],l=e.base?i[0]+e.base:i[0],c=s[l]||0,d="".concat(l," ").concat(c);s[l]=c+1;var u=o(d),v={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(n[u].references++,n[u].updater(v)):n.push({identifier:d,updater:_(v,e),references:1}),a.push(d)}return a}function c(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var r=s.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var n=i(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function v(t,e,s,a){var r=s?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(i,n[e]):t.appendChild(i)}}function p(t,e,s){var a=s.css,r=s.media,i=s.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var f=null,m=0;function _(t,e){var s,a,r;if(e.singleton){var i=m++;s=f||(f=c(e)),a=v.bind(null,s,i,!1),r=v.bind(null,s,i,!0)}else s=c(e),a=p.bind(null,s,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var s=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<s.length;a++){var r=o(s[a]);n[r].references--}for(var i=l(t,e),c=0;c<s.length;c++){var d=o(s[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=i}}}},75:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(3379),r=s.n(a),i=s(7214),n={insert:"head",singleton:!1};r()(i.Z,n);i.Z.locals;const o=(0,s(1900).Z)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-svg"},[e("svg",{attrs:{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[e("path",{attrs:{fill:"rgb(130, 138, 159)",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"}},[e("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1)])])}),[],!1,null,"3e43005c",null).exports},3663:(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});var a=s(629);const r={data:function(){return{subject:"",details:"",reply:""}},components:{Loader:s(75).Z},computed:(0,a.rn)({spinner_loading:function(t){return t.support.spinner_loading},button_loading:function(t){return t.support.button_loading},request_data:function(t){return t.support.support_request}}),mounted:function(){this.$store.dispatch("GET_SUPPORT_REQUEST",{id:this.$route.params.id})},methods:{SUBMIT_REPLY:function(){var t=this;this.$validator.validateAll().then((function(e){e&&t.$store.dispatch("SUBMIT_SUPPORT_REPLY",{reply:t.reply,id:t.$route.params.id})}))},UPDATE_STATUS:function(){this.$store.dispatch("UPDATE_SUPPORT_STATUS",{id:this.$route.params.id})}}};const i=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"support-request"},[t.spinner_loading?s("div",{staticClass:"spinner-load"},[s("Loader")],1):t._e(),t._v(" "),t.spinner_loading?t._e():s("div",{staticClass:"support-request"},[s("div",{staticClass:"row"},[t.request_data.data?s("div",{staticClass:"col-12"},[s("router-link",{staticClass:"exit-button",attrs:{to:{name:"support-manage"}}},[s("svg",{staticClass:"sm-exit-svg",staticStyle:{"enable-background":"new 0 0 511.999 511.999"},attrs:{version:"1.1",width:"100%",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.999 511.999","xml:space":"preserve"}},[s("circle",{staticStyle:{fill:"#E21B1B"},attrs:{cx:"255.999",cy:"255.999",r:"255.999"}}),t._v(" "),s("g",[s("rect",{staticStyle:{fill:"#FFFFFF"},attrs:{x:"244.002",y:"120.008",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)",width:"24",height:"271.988"}}),t._v(" "),s("rect",{staticStyle:{fill:"#FFFFFF"},attrs:{x:"120.008",y:"244.007",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)",width:"271.988",height:"24"}})])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-8 col-lg-8 offset-sm-2 p-sm-3 mt-5 profile-edit h-100"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 text-left"},[s("h4",[t._v(t._s(t.request_data.data.request.subject)+" ")]),t._v(" "),s("small",[t._v(t._s(t.request_data.data.request.request_id)+" ")])]),t._v(" "),s("div",{staticClass:"col-4 text-right"},[1!==t.request_data.data.request.status||t.button_loading?t._e():s("span",{staticClass:"re-open",on:{click:t.UPDATE_STATUS}},[t._v("Open")]),t._v(" "),0!==t.request_data.data.request.status||t.button_loading?t._e():s("span",{staticClass:"re-close",on:{click:t.UPDATE_STATUS}},[t._v("Close")]),t._v(" "),"status"===t.button_loading?s("span",{staticClass:"re-close"},[t._v("Loading")]):t._e()])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"settings__message-box"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"col-12 mt-5 user"},[t._m(0),t._v(" "),s("div",{staticClass:"col-10 col-md-8"},[s("div",{staticClass:"user-message"},[s("p",{staticClass:"mt-1"},[t._v(t._s(t.request_data.data.request.details))])]),t._v(" "),s("div",{staticClass:"date"},[s("p",{staticClass:"mt-1"},[t._v(t._s(t.request_data.data.request.created_at))])])])])]),t._v(" "),t._l(t.request_data.data.reply,(function(e,a){return s("div",{key:a,staticClass:"col-12 mt-5"},["client"===e.from?s("div",{staticClass:"col-12 mt-5 user"},[t._m(1,!0),t._v(" "),s("div",{staticClass:"col-10 col-md-8"},[s("div",{staticClass:"user-message"},[s("p",{staticClass:"mt-1"},[t._v(t._s(e.reply))])]),t._v(" "),s("div",{staticClass:"date"},[s("p",[t._v(t._s(e.created_at))])])])]):s("div",{staticClass:"support col-12 mt-5"},[s("div",{staticClass:"float-left profile-image text-center"},[s("img",{attrs:{src:"/themes/default/img/support.png",alt:"profile",width:"50px"}}),t._v(" "),s("p",{staticClass:"mt-1"},[t._v(t._s(e.from))])]),t._v(" "),s("div",{staticClass:"col-10 col-md-8"},[s("div",{staticClass:"support-message"},[s("p",{staticClass:"mt-1"},[t._v(t._s(e.reply))])]),t._v(" "),s("div",{staticClass:"date"},[s("p",[t._v(t._s(e.created_at))])])])])])}))],2),t._v(" "),0!==t.request_data.data.request.status?s("div",{staticClass:"col-12 mt-5 reply-box"},[s("hr"),t._v(" "),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:2000",expression:"'required|max:2000'"},{name:"model",rawName:"v-model",value:t.reply,expression:"reply"}],staticClass:"form-control",class:{input:!0,"text-danger":t.errors.has("details")},attrs:{name:"details",spellcheck:"false",cols:"50",rows:"10",placeholder:"Provide a detailed description"},domProps:{value:t.reply},on:{input:function(e){e.target.composing||(t.reply=e.target.value)}}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("details"),expression:"errors.has('details')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("details")))])]),t._v(" "),s("div",{staticClass:"form-group"},[t.button_loading?t._e():s("button",{staticClass:"btn btn-md btn-warning",on:{click:t.SUBMIT_REPLY}},[t._v("SEND REPLY")]),t._v(" "),"reply"===t.button_loading?s("button",{staticClass:"btn btn-md btn-warning",attrs:{disabled:""},on:{click:t.SUBMIT_REPLY}},[t._v("LOADING")]):t._e()])]):t._e()])],1):t._e()])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"float-left profile-image text-center"},[s("img",{attrs:{src:"/themes/default/img/user.svg",alt:"profile",width:"50px"}}),t._v(" "),s("p",[t._v("Customer")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"float-left profile-image text-center"},[s("img",{attrs:{src:"/themes/default/img/user.svg",alt:"profile",width:"50px"}}),t._v(" "),s("p",[t._v("Customer")])])}],!1,null,null,null).exports}}]);