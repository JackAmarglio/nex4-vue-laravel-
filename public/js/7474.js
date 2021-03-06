"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7474],{7474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var o=a(629),s=a(1580);const i={data:function(){return{id:"",video_link:[],embedCodeList:[],presets:[{Name:"HLS - 16000Kilorate - 4K",Resolution:"4k",Container:"ts"},{Name:"HLS - 4000Kilorate - 1080P",Resolution:"1080",Container:"ts"},{Name:"HLS - 2500Kilorate - 720P",Resolution:"720",Container:"ts"},{Name:"HLS - 700Kilorate - 480P",Resolution:"480",Container:"ts"},{Name:"HLS - 400Kilorate - 320P",Resolution:"320",Container:"ts"},{Name:"Generic - 4K",Resolution:"4k",Container:"mp4"},{Name:"Generic - 1080P",Resolution:"1080",Container:"mp4"},{Name:"Generic - 720P",Resolution:"720",Container:"mp4"},{Name:"Generic - 480P",Resolution:"480",Container:"mp4"},{Name:"Generic - 320P",Resolution:"320",Container:"mp4"}],new_presets:[],age:null,upload_type_is:!1,disabled_button:!1,upload_data:{id:null,api:{show:!1,progress:0,success_message:null,error_message:null},upload:{show:!1,progress:0,success_message:null,error_message:null,message:null},subtitle:{progress:0,success_message:null,error_message:null}},uploadFormData:new FormData,apiFormData:new FormData,cloud_type:!1,category:null}},computed:(0,o.rn)({countUploadData:function(e){return e.event.data_count},uploadData:function(e){return e.event.upload_data},categories_list:function(e){return e.categories.data},ListProduction:function(e){return e.productions.ListProduction}}),created:function(){this.$store.dispatch("GET_CATEGORIES_BY_SORT","movie"),this.$store.dispatch("LIST_PRODUCTION")},mounted:function(){var e=this;Echo.channel("progress").listen("EventTrigger",(function(t){t.progress.progress<2&&(e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,id:t.progress.tmdb_id,parameter:"message",object:"upload",value:t.progress.message}),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]})),e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,id:t.progress.tmdb_id,parameter:"progress",object:"upload",value:t.progress.progress}),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]})}))},methods:{MOVIEDB_API:function(){var e=this;if(this.$store.commit("COUNT_UPLOAD_PROGRESS"),"transcoding"===this.upload_type_is){var t=document.querySelector("#video");this.uploadFormData.append("video",t.files[0]),this.uploadFormData.append("resolution",JSON.stringify(this.new_presets))}else"externalUrl"===this.upload_type_is?this.video_link.length>0?this.uploadFormData.append("video_link",JSON.stringify(this.video_link)):this.uploadFormData.append("video_link","empty"):this.uploadFormData.append("embed_code",JSON.stringify(this.embedCodeList));this.apiFormData.append("id",this.id),this.apiFormData.append("age",this.age),this.apiFormData.append("category",this.category),this.apiFormData.append("cloud_type",this.cloud_type),this.$validator.validateAll().then((function(t){t&&(e.disabled_button=!0,e.upload_data.api.show=!0,e.upload_data.id=e.id,e.$store.commit("SET_PROGRESS_DATA",e.upload_data),e.$store.commit("SET_UPLOAD_PROGRESS",e.uploadData[e.countUploadData]),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]}),axios.post("/api/admin/new/movie/movieapi",e.apiFormData).then((function(t){200===t.status&&(e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,parameter:"success_message",object:"api",value:t.data.message}),e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,parameter:"progress",object:"api",value:100}),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]}),e.MOVIEVIDEO_S3(t.data.id),e.$router.push({name:"movies-manage"}))}),(function(t){e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,parameter:"error_message",object:"api",value:t.response.data.message}),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]}),e.disabled_button=!1})))}))},MOVIEVIDEO_S3:function(e){var t=this;this.uploadFormData.append("id",e),this.uploadFormData.append("tmdb_id",this.id),this.uploadFormData.append("cloud_type",this.cloud_type),this.upload_data.upload.show=!0,this.$store.commit("UPDATE_PROGRESS_DATA",{key:this.countUploadData,parameter:"show",object:"upload",value:!0});var a={headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){t.upload_data.upload.progress=Math.round(100*e.loaded/e.total),t.$store.commit("UPDATE_PROGRESS_DATA",{key:t.countUploadData,parameter:"progress",object:"upload",value:t.upload_data.upload.progress}),t.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:t.countUploadData,data:t.uploadData[t.countUploadData]})}};axios.post("/api/admin/new/movie/movievideo",this.uploadFormData,a).then((function(e){200===e.status&&(t.$store.commit("UPDATE_PROGRESS_DATA",{key:t.countUploadData,parameter:"success_message",object:"upload",value:e.data.message}),t.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:t.countUploadData,data:t.uploadData[t.countUploadData]}),s.logPosition("top right"),s.success("Successful upload"),setTimeout((function(){t.showProgress=!1}),500))}),(function(e){t.$store.commit("UPDATE_PROGRESS_DATA",{key:t.countUploadData,parameter:"error_message",object:"upload",value:e.response.data.message}),t.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:t.countUploadData,data:t.uploadData[t.countUploadData]})}))},Embed_Code_Add:function(e){alert(e)},infoShow:function(e,t){var a=document.getElementById(e),o="";if("files"in a)for(var s=0;s<a.files.length;s++){o+="<br><strong>"+(s+1)+". file</strong><br>";var i=a.files[s];"name"in i&&(o+="name: "+i.name+"<br>"),"size"in i&&i.size<1048576&&(o+="size:"+(i.size/1024).toFixed(3)+"KB<br>")}document.getElementById(t).innerHTML=o}}};const r=(0,a(1900).Z)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"k1_manage_table"},[a("div",{staticClass:"title p-2"},[e._v("API Upload")]),e._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[e._m(0),e._v(" "),a("div",{staticClass:"col-12 cloud-upload"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 image",on:{click:function(t){e.cloud_type="local"}}},[a("div",{staticClass:"local-cloud-logo",class:{active:"local"===e.cloud_type}},[a("img",{attrs:{src:"/themes/default/img/local-cloud.svg",alt:"local-cloud",width:"90px"}})])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6 image",on:{click:function(t){e.cloud_type="aws"}}},[a("div",{staticClass:"aws-cloud-logo",class:{active:"aws"===e.cloud_type}},[a("img",{attrs:{src:"/themes/default/img/aws-cloud.svg",alt:"aws-cloud",width:"120px"}})])])])])]),e._v(" "),e.cloud_type?a("div",[a("div",{staticClass:"form-group"},[e._m(1),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",attrs:{name:"id",type:"text",placeholder:"Movie id"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("id"),expression:"errors.has('id')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("id")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"age"}},[e._v("Choose way of upload")]),e._v(" "),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.upload_type_is,expression:"upload_type_is"}],staticClass:"form-control",attrs:{name:"upload_type",id:"upload_type"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.upload_type_is=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"transcoding"}},[e._v("Upload & Transcoding")]),e._v(" "),a("option",{attrs:{value:"externalUrl"}},[e._v("Upload Using External Link")]),e._v(" "),a("option",{attrs:{value:"embedCode"}},[e._v(" Upload Using Embed Code")])]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("upload_type"),expression:"errors.has('upload_type')"}],staticClass:" is-danger"},[e._v(e._s(e.errors.first("upload_type")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(2),e._v(" "),a("div",{staticClass:"col-12"},[a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.category,expression:"category"}],staticClass:"form-control",attrs:{name:"category",id:"category"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.category=t.target.multiple?a:a[0]}}},e._l(e.categories_list.categories,(function(t,o){return a("option",{key:o,domProps:{value:t.id}},[e._v("\n                                        "+e._s(t.name)+"\n                                    ")])})),0),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("category"),expression:"errors.has('category')"}],staticClass:" is-danger"},[e._v(e._s(e.errors.first("category")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"age"}},[e._v("Rating system")]),e._v(" "),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"form-control",attrs:{name:"age",id:"age"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.age=t.target.multiple?a:a[0]}}},[a("option",[e._v("G")]),e._v(" "),a("option",[e._v("PG")]),e._v(" "),a("option",[e._v("PG-13")]),e._v(" "),a("option",[e._v("R")]),e._v(" "),a("option",[e._v("X")])]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("age"),expression:"errors.has('age')"}],staticClass:" is-danger"},[e._v(e._s(e.errors.first("age")))])])]),e._v(" "),a("transition",{attrs:{name:"menu-popover"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"transcoding"===e.upload_type_is,expression:"upload_type_is === 'transcoding' "}],staticClass:"transcoding-section"},["transcoding"===e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12 col-sm-2"},[a("label",[e._v("Movie")])]),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{staticClass:"inputfile",attrs:{type:"file",id:"video"},on:{change:function(t){return e.infoShow("video","videoFileDetails")}}}),e._v(" "),a("label",{attrs:{id:"videoLabel",for:"video"}},[e._v("Choose a movie video\n                                            "),a("br"),e._v(" "),a("p",{attrs:{id:"videoFileDetails"}})])])]):e._e(),e._v(" "),"transcoding"===e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"presets"}},[e._v("Select Presets")]),e._v(" "),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.new_presets,expression:"new_presets"}],staticClass:"form-control",staticStyle:{height:"200px"},attrs:{multiple:"",id:"presets"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.new_presets=t.target.multiple?a:a[0]}}},e._l(e.presets,(function(t,o){return a("option",{key:o,domProps:{value:t}},[e._v("\n                                                "+e._s(t.Name)+"\n                                            ")])})),0),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("presets"),expression:"errors.has('presets')"}],staticClass:" is-danger"},[e._v(e._s(e.errors.first("presets")))])])]):e._e()])]),e._v(" "),a("transition",{attrs:{name:"menu-popover"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"externalUrl"==e.upload_type_is,expression:"upload_type_is == 'externalUrl'"}],staticClass:"external-link"},["externalUrl"==e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",[e._v("Movie\n                                            "),a("small",{staticClass:"form-text text-muted"},[e._v("External Link (360p)")])])]),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.video_link[0],expression:"video_link[0]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"320P Movie"},domProps:{value:e.video_link[0]},on:{input:function(t){t.target.composing||e.$set(e.video_link,0,t.target.value)}}})])]):e._e(),e._v(" "),"externalUrl"==e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",[e._v("Movie\n                                            "),a("small",{staticClass:"form-text text-muted"},[e._v("External Link (480p)")])])]),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.video_link[1],expression:"video_link[1]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"480P Movie"},domProps:{value:e.video_link[1]},on:{input:function(t){t.target.composing||e.$set(e.video_link,1,t.target.value)}}})])]):e._e(),e._v(" "),"externalUrl"==e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",[e._v("Movie\n                                            "),a("small",{staticClass:"form-text text-muted"},[e._v("External Link (720p)")])])]),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.video_link[2],expression:"video_link[2]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"720P Movie"},domProps:{value:e.video_link[2]},on:{input:function(t){t.target.composing||e.$set(e.video_link,2,t.target.value)}}})])]):e._e(),e._v(" "),"externalUrl"==e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",[e._v("Movie\n                                            "),a("small",{staticClass:"form-text text-muted"},[e._v("External Link (1080p)")])])]),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.video_link[3],expression:"video_link[3]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"1080P Movie"},domProps:{value:e.video_link[3]},on:{input:function(t){t.target.composing||e.$set(e.video_link,3,t.target.value)}}})])]):e._e(),e._v(" "),"externalUrl"==e.upload_type_is?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",[e._v("Movie\n                                            "),a("small",{staticClass:"form-text text-muted"},[e._v("External Link (4k)")])])]),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.video_link[4],expression:"video_link[4]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"4k Movie"},domProps:{value:e.video_link[4]},on:{input:function(t){t.target.composing||e.$set(e.video_link,4,t.target.value)}}})])]):e._e()])]),e._v(" "),a("transition",{attrs:{name:"menu-popover"}},[a("div",{staticClass:"col-12"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"embedCode"===e.upload_type_is,expression:"upload_type_is === 'embedCode'"}],staticClass:"embed-code"},[a("div",{staticClass:"add float-right mb-3 mt-3"},[a("button",{staticClass:"btn btn-warning",on:{click:function(t){return e.embedCodeList.push({embed_provider:"",embed_code:""})}}},[a("i",{staticClass:"fa fa-plus"}),e._v(" Add\n                                        ")])]),e._v(" "),e._l(e.embedCodeList,(function(t,o){return a("div",{key:o,staticClass:"embed-list"},[a("hr"),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"production"}},[e._v("Embed Provider")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.embed_provider,expression:"item.embed_provider"}],staticClass:"form-control",attrs:{name:"productions",id:"production"},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"embed_provider",a.target.multiple?o:o[0])}}},e._l(e.ListProduction,(function(t,o){return a("option",{key:o,domProps:{value:t.id}},[e._v("\n                                                    "+e._s(t.name)+"\n                                                ")])})),0),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("production"),expression:"errors.has('production')"}],staticClass:"c-danger-text"},[e._v(e._s(e.errors.first("production")))])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"embed-code"}},[e._v("Movie\n                                                "),a("small",{staticClass:"form-text text-muted"},[e._v("Embed Code")])]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.embed_code,expression:"item.embed_code"}],staticClass:"form-control",attrs:{type:"text",id:"embed-code",placeholder:"Embed code"},domProps:{value:t.embed_code},on:{input:function(a){a.target.composing||e.$set(t,"embed_code",a.target.value)}}})])])}))],2)])])],1):e._e()])]),e._v(" "),e.cloud_type?a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[e.disabled_button?e._e():a("button",{staticClass:"btn btn-md btn-warning",on:{click:function(t){return e.MOVIEDB_API(e.id)}}},[e._v("Upload\n                    ")]),e._v(" "),e.disabled_button?a("button",{staticClass:"btn btn-md btn-warning",attrs:{disabled:""}},[e._v("Loading")]):e._e()])]):e._e()])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("label",[e._v("Choose Cloud ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("label",[e._v("Movie ID ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"category"}},[e._v("Category")])])}],!1,null,null,null).exports}}]);