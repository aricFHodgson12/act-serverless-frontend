(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{528:function(t,e,n){"use strict";n.r(e);var o={name:"AutoDialerActions",props:{item:Object},data:function(){return{src:""}},computed:{getSrc:function(){}},methods:{deleteConfoirm:function(){this.$emit("deleteConfirm")}}},l=n(20),c=n(26),r=n.n(c),d=n(492),v=n(503),_=n(179),m=n(504),h=n(711),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"d-flex space-around call-table",attrs:{align:"center"}},[n("v-col",{staticClass:"text-center"},[n("v-tooltip",{attrs:{top:"","nudge-bottom":"10"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-pencil")])],1)]}}])},[t._v(" "),n("span",[t._v("Edit")])]),t._v(" "),n("v-tooltip",{attrs:{top:"","nudge-bottom":"10"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-resistor")])],1)]}}])},[t._v(" "),n("span",[t._v("Show Logs")])]),t._v(" "),n("v-tooltip",{attrs:{top:"","nudge-bottom":"10"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[n("v-icon",{staticClass:"mr-2",on:{click:t.deleteConfoirm}},[t._v("mdi-delete")])],1)]}}])},[t._v(" "),n("span",[t._v("Delete")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:d.a,VCol:v.a,VIcon:_.a,VRow:m.a,VTooltip:h.a})},530:function(t,e,n){var content=n(718);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("93c215ce",content,!0,{sourceMap:!1})},531:function(t,e,n){var content=n(720);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("74959ca0",content,!0,{sourceMap:!1})},532:function(t,e,n){var content=n(722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2d885958",content,!0,{sourceMap:!1})},710:function(t,e,n){"use strict";n.r(e);var o={name:"AudioTab",data:function(){return{speech:!0,upload_audio:!1,audio_url:!1,record_url:!1}},methods:{activeTab:function(param){switch(param){case"speech":this.speech=!0,this.upload_audio=!1,this.audio_url=!1,this.record_url=!1;break;case"upload_audio":this.speech=!1,this.upload_audio=!0,this.audio_url=!1,this.record_url=!1;break;case"audio_url":this.audio_url=!1,this.speech=!1,this.upload_audio=!1,this.audio_url=!0,this.record_url=!1;break;case"record_url":this.record_url=!0,this.speech=!1,this.upload_audio=!1,this.audio_url=!1,this.record_url=!0}}}},l=n(20),c=n(26),r=n.n(c),d=n(492),v=n(917),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio_tab"},[n("v-btn-toggle",{staticClass:"greeting_tab mt-2"},[n("v-btn",{staticClass:"text-capitalize",class:{"v-btn--active":t.speech},on:{click:function(e){return t.activeTab("speech")}}},[t._v("\n      Text to Speech\n    ")]),t._v(" "),n("v-btn",{staticClass:"text-capitalize",class:{"v-btn--active":t.upload_audio},on:{click:function(e){return t.activeTab("upload_audio")}}},[t._v("\n      Upload Audio\n    ")]),t._v(" "),n("v-btn",{staticClass:"text-capitalize",class:{"v-btn--active":t.audio_url},on:{click:function(e){return t.activeTab("audio_url")}}},[t._v("\n      Enter Audio URL\n    ")]),t._v(" "),n("v-btn",{staticClass:"text-capitalize",class:{"v-btn--active":t.record_url},on:{click:function(e){return t.activeTab("record_url")}}},[t._v("\n      Record Audio\n    ")])],1),t._v(" "),1==t.speech?n("div",{staticClass:"panel_content"},[n("CallFlowGreetingSpeech")],1):t._e(),t._v(" "),1==t.upload_audio?n("div",{staticClass:"panel_content"},[n("AudioFileUpload")],1):t._e(),t._v(" "),1==t.audio_url?n("div",{staticClass:"panel_content"},[n("EnterAudioUrl")],1):t._e(),t._v(" "),1==t.record_url?n("div",{staticClass:"panel_content"},[n("RecordAudio")],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{CallFlowGreetingSpeech:n(753).default,AudioFileUpload:n(750).default,EnterAudioUrl:n(749).default,RecordAudio:n(748).default}),r()(component,{VBtn:d.a,VBtnToggle:v.a})},717:function(t,e,n){"use strict";var o=n(530);n.n(o).a},718:function(t,e,n){(e=n(16)(!1)).push([t.i,".file_upload_area{position:relative}.uploader-note{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);width:100%;text-align:center}",""]),t.exports=e},719:function(t,e,n){"use strict";var o=n(531);n.n(o).a},720:function(t,e,n){(e=n(16)(!1)).push([t.i,".file_upload_area{position:relative}.uploader-note{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);width:100%;text-align:center}",""]),t.exports=e},721:function(t,e,n){"use strict";var o=n(532);n.n(o).a},722:function(t,e,n){(e=n(16)(!1)).push([t.i,".file_upload_area{position:relative}.uploader-note{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);width:100%;text-align:center}",""]),t.exports=e},748:function(t,e,n){"use strict";n.r(e);var o={name:"RecordAudio",props:{},data:function(){return{calls:[{value:0,text:"Select Number"}],callStep:1,number:"",call:0}},computed:{},methods:{}},l=(n(721),n(20)),c=n(26),r=n.n(c),d=n(492),v=n(503),_=n(504),m=n(60),h=n(88),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"pt-0 pb-0"},[n("div",[n("h5",{staticClass:"mt-0 primary--text text-14 font-weight-medium"},[t._v("Let systel call you and record your voice:")]),t._v(" "),n("v-row",{staticClass:"mt-3",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pr-3"},[n("p",{staticClass:"primary--text font-weight-medium text-14 mb-3"},[t._v("Call from:")]),t._v(" "),n("v-select",{staticClass:"custom_select_option",attrs:{items:t.calls,dense:!0,outlined:"",hegiht:"10"},model:{value:t.call,callback:function(e){t.call=e},expression:"call"}})],1),t._v(" "),n("v-col",{staticClass:"pr-3"},[n("p",{staticClass:"primary--text font-weight-medium text-14 mb-3"},[t._v("Your Phone Number:")]),t._v(" "),n("v-text-field",{staticClass:"primary--text blue_hover custom-input",attrs:{outlined:"","hide-details":"",height:"40px",elevation:"2"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),t._v(" "),n("v-col",{staticClass:"d-flex align-center justify-start"},[1==t.callStep?n("v-btn",{staticClass:"white--text text-capitalize text-14 mt-1 pl-8 pr-8",attrs:{color:"grey_shades_5"},on:{click:function(e){t.callStep=2}}},[t._v("\n                Call Me\n                ")]):2==t.callStep?n("v-btn",{staticClass:"white--text text-capitalize text-14 mt-1 pl-8 pr-8",attrs:{color:"success"},on:{click:function(e){t.callStep=3}}},[t._v("\n                Calling...\n                ")]):n("v-btn",{staticClass:"white--text text-capitalize text-14 mt-1 pl-8 pr-8",attrs:{color:"error"}},[t._v("\n                Stop\n                ")])],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:d.a,VCol:v.a,VRow:_.a,VSelect:m.a,VTextField:h.a})},749:function(t,e,n){"use strict";n.r(e);var o={name:"EnterAudioUrl",props:{},data:function(){return{audio_url:"http://dropbox.com/oiwerjbvsd/audio_greetings.mp3"}},computed:{},methods:{}},l=(n(719),n(20)),c=n(26),r=n.n(c),d=n(492),v=n(503),_=n(179),m=n(504),h=n(88),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"pt-0 pb-0"},[n("div",[n("h5",{staticClass:"mt-0 primary--text text-14 font-weight-medium"},[t._v("Enter the URL to an MP3 file:")]),t._v(" "),n("div",{staticClass:"mt-3"},[n("v-text-field",{staticClass:"primary--text blue_hover custom-input mb-5",attrs:{outlined:"","hide-details":"",height:"40px",elevation:"2"},model:{value:t.audio_url,callback:function(e){t.audio_url=e},expression:"audio_url"}}),t._v(" "),n("v-btn",{staticClass:"white--text text-capitalize text-14",attrs:{color:"button"}},[n("v-icon",{attrs:{left:""}},[t._v("\n                    mdi-volume-high\n                  ")]),t._v("\n                  Test\n                ")],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:d.a,VCol:v.a,VIcon:_.a,VRow:m.a,VTextField:h.a})},750:function(t,e,n){"use strict";n.r(e);var o={name:"AudioFileUpload",props:{},data:function(){return{src:""}},computed:{},methods:{}},l=(n(717),n(20)),c=n(26),r=n.n(c),d=n(492),v=n(503),_=n(504),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"pt-0"},[e("div",[e("h5",{staticClass:"mt-0 primary--text text-14 font-weight-medium"},[this._v("Play the following recording to the caller:")]),this._v(" "),e("div",[e("div",{staticClass:"text-center mt-10"},[e("p",{staticClass:"text-subtitle-2 mb-2 button--text"},[this._v(" No file chosen...")]),this._v(" "),e("v-btn",{staticClass:"button white--text text-body-2 text-capitalize"},[this._v("Select an MP3 File")]),this._v(" "),e("input",{attrs:{id:"file_uploader",type:"file",hidden:""}})],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:d.a,VCol:v.a,VRow:_.a})},753:function(t,e,n){"use strict";n.r(e);var o={name:"CallFlowGreetingSpeech",props:{},data:function(){return{voices:[{value:1,text:"Main"}],dialects:[{value:1,text:"Enlish"}],voice:1,dialect:1}},mounted:function(){},watch:{},methods:{},computed:{}},l=n(20),c=n(26),r=n.n(c),d=n(492),v=n(179),_=n(60),m=n(756),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font-weight-medium primary--text mb-2 text-14"},[t._v("Read the following text with a robot-like voice:")]),t._v(" "),n("v-textarea",{staticClass:"custom-text-area",attrs:{solo:"",value:"This call will be recorded for quality assurance"}}),t._v(" "),n("div",{staticClass:"greet_call_actions"},[n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"d-flex"},[n("label",{staticClass:"primary--text"},[t._v("Voice:")]),t._v(" "),n("v-select",{staticClass:"custom_select_option",attrs:{items:t.voices,dense:!0,outlined:"",hegiht:"10","hide-details":""},model:{value:t.voice,callback:function(e){t.voice=e},expression:"voice"}})],1),t._v(" "),n("div",{staticClass:"d-flex ml-8"},[n("label",{staticClass:"primary--text"},[t._v("Dialect:")]),t._v(" "),n("v-select",{staticClass:"custom_select_option",attrs:{items:t.dialects,dense:!0,outlined:"",hegiht:"10","hide-details":""},model:{value:t.dialect,callback:function(e){t.dialect=e},expression:"dialect"}})],1)]),t._v(" "),n("div",{staticClass:"sound_action"},[n("v-btn",{staticClass:"custom_button custom_border text-capitalize button--text"},[n("v-icon",{staticClass:"grey_shades_6--text",attrs:{medium:""}},[t._v("\n          mdi-volume-high\n        ")]),t._v("\n        Test\n      ")],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:d.a,VIcon:v.a,VSelect:_.a,VTextarea:m.a})},757:function(t,e,n){"use strict";n(8),n(11),n(76),n(6),n(35),n(13),n(14),n(12),n(239),n(52),n(7),n(32);var o=n(2),l=n(5),c=n(96),r=n(114);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,Object(r.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},851:function(t,e,n){"use strict";n.r(e);n(18);var o=n(528),l=n(51),c={name:"AutoDialerList",components:{API:l.a,Actions:o.default},data:function(){return{confirm:!1,newCampaign:!1,isLoading:!1,search:"",pagination:!1,headers:[{text:"Name",value:"name"},{text:"Tracking Number",value:"tracking_number"},{text:"Contact List",value:"contact_list"},{text:"Status",value:"status"},{text:"Progress",value:"progress"},{text:"Last Run",value:"last_run"},{text:"Actions",value:"actions",align:"center",sortable:!1,order:10,class:"custom-class"}],campaigns:[]}},methods:{hideDeleteModal:function(){this.confirm=!1},deleteConfirm:function(){this.confirm=!0},getCampaigns:function(){var t=this;this.isLoading=!0;var e=this;return l.a.autodialer.all().then((function(t){e.campaigns=t,t.length<=5&&(e.pagination=!0)})).finally((function(){return t.isLoading=!1}))},edit:function(t){console.log("Edit: ",t)},hideModal:function(){this.newCampaign=!1}},mounted:function(){this.getCampaigns()}},r=n(20),d=n(26),v=n.n(d),_=n(492),m=n(221),h=n(123),f=n(503),x=n(885),C=n(222),w=n(504),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex align-center justify-space-between"},[n("h2",{staticClass:"primary--text"},[t._v(t._s(t.$t("auto_dialer.title")))]),t._v(" "),t.campaigns.length>0?n("v-col",{staticClass:"d-flex justify-end pr-0 pt-4 pb-4",attrs:{xs:"12",md:"2","offset-md":"4"}},[n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--default",on:{click:function(e){t.newCampaign=!0}}},[t._v("+ Add New Campaign")])],1):t._e()],1)]),t._v(" "),t.campaigns.length>0?n("v-col",[n("v-card",{staticClass:"custom_border"},[n("v-card-title",{staticClass:"primary--text font-weight-bold"},[t._v(t._s(t.campaigns.length||"0")+" Campaigns")]),t._v(" "),n("v-card-text",{staticClass:"pa-6"},[n("v-data-table",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}],attrs:{loading:t.isLoading,headers:t.headers,items:t.campaigns,search:t.search,"items-per-page":20,"fixed-header":"","item-class":"fixed_col","hide-default-footer":t.pagination},scopedSlots:t._u([{key:"item.name",fn:function(e){var o=e.item;return[n("nuxt-link",{staticClass:"blue--text font-weight-medium text-decoration-none",attrs:{to:"/auto-dialer/create"}},[t._v(t._s(o.name))])]}},{key:"item.contact_list",fn:function(e){var o=e.item;return[n("nuxt-link",{staticClass:"blue--text font-weight-medium text-decoration-none",attrs:{to:"/auto-dialer/create"}},[t._v(t._s(o.contact_list))])]}},{key:"item.actions",fn:function(e){var o=e.item;return[n("AutoDialerActions",{attrs:{item:o},on:{deleteConfirm:t.deleteConfirm}})]}}],null,!1,1471707571)},[n("v-progress-linear",{attrs:{slot:"progress",color:"primary",height:"3",indeterminate:""},slot:"progress"})],1)],1)],1)],1):n("div",{staticClass:"no_list"},[n("h2",[t._v("No Auto Dialer Campaigns... Yet")]),t._v(" "),n("h3",{staticClass:"mt-3"},[t._v("Make calls automatically to every person in your contact list."),n("br"),t._v("Use call scripts, pre-recorded messages, call tagging, notes and"),n("br"),t._v("live update of contact details")]),t._v(" "),n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--defaul mt-5",on:{click:function(e){t.newCampaign=!0}}},[t._v("+ Add New Campaign")])],1),t._v(" "),t.newCampaign?n("div",[n("AutoDialerCampaignModal",{on:{hideModal:t.hideModal}})],1):t._e()],1),t._v(" "),t.confirm?n("ConfirmModal",{attrs:{title:"Delete This Campaign?"},on:{hideDeleteModal:t.hideDeleteModal}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{AutoDialerActions:n(528).default,AutoDialerCampaignModal:n(862).default,ConfirmModal:n(864).default}),v()(component,{VBtn:_.a,VCard:m.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VDataTable:x.a,VProgressLinear:C.a,VRow:w.a})},862:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{token:0,tracking_numbers:[{}],tokens:[{value:1,text:"First Name"},{value:2,text:"Last Name"},{value:3,text:"Email"},{value:4,text:"Phone Number"},{value:5,text:"Address"},{value:6,text:"City"},{value:7,text:"State"},{value:8,text:"Zip"},{value:9,text:"Website"}],active_tab:1,ongoing:!1,call_numbers:[{id:1,name:"206-123-4567(Primary)"}],contact_list:[{id:1,name:"Contact 1"}],contact:1,number:1,dialog:!0,valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},watch:{dialog:function(){this.$emit("hideModal")}},methods:{createNewCampaign:function(){this.$router.push("/auto-dialer/create")},addtrackingNumber:function(){this.tracking_numbers.push({})},setActiveTab:function(t){this.active_tab=t},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},l=n(20),c=n(26),r=n.n(c),d=n(492),v=n(221),_=n(123),m=n(705),h=n(779),f=n(223),x=n(757),C=n(179),w=n(60),y=n(88),k=n(756),V=n(711),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"650","content-class":"custom_modal_body","overlay-color":"#4A5263","overlay-opacity":"0.9"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"custom_modal"},[n("v-card-title",{staticClass:"custom_modal__title"},[n("span",[t._v("\n          Create New Auto Dialer Campaign\n        ")]),t._v(" "),n("v-icon",{on:{click:function(e){t.dialog=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"custom_modal__tab"},[n("div",{staticClass:"custom_modal__tab__item ",class:{custom_modal__tab__active:1==t.active_tab},on:{click:function(e){return t.setActiveTab(1)}}},[t._v("\n            1. Basic Settings\n          ")]),t._v(" "),n("div",{staticClass:"custom_modal__tab__item",class:{custom_modal__tab__active:2==t.active_tab},on:{click:function(e){return t.setActiveTab(2)}}},[t._v("\n            2. Voicemail Message\n          ")]),t._v(" "),n("div",{staticClass:"custom_modal__tab__item",class:{custom_modal__tab__active:3==t.active_tab},on:{click:function(e){return t.setActiveTab(3)}}},[t._v("\n            3. Call Script\n          ")])]),t._v(" "),n("div",{staticClass:"custom_modal__content"},[1==t.active_tab?n("div",{staticClass:"custom_modal__step_first"},[n("h3",{staticClass:"custom_modal__content__step"},[t._v("Step 1")]),t._v(" "),n("h2",{staticClass:"custom_modal__content__title"},[t._v("Basic Settings")]),t._v(" "),n("div",{staticClass:"custom_modal__content__item"},[n("div",[[n("v-form",{ref:"form",staticClass:"custom_modal__content__half_form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("label",{staticClass:"custom_modal__content__label"},[t._v("Campaign Name:")]),t._v(" "),n("v-text-field",{staticClass:"custom-input primary--text custom-input mt-3",attrs:{rules:t.nameRules,label:"E.g. Free Giveaway",required:"",outlined:"",height:"40px",elevation:"2","single-line":""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("label",{staticClass:"custom_modal__content__label"},[t._v("Use this number for calling:")]),t._v(" "),t._l(t.tracking_numbers,(function(e,i){return n("div",{key:i},[n("v-select",{staticClass:"mt-3",attrs:{outlined:"",dense:"","hide-details":"",items:t.call_numbers,"item-text":"name","item-value":"id",lac:""},model:{value:t.tracking_numbers[i],callback:function(e){t.$set(t.tracking_numbers,i,e)},expression:"tracking_numbers[i]"}})],1)})),t._v(" "),n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 mt-5",on:{click:function(e){return t.tracking_numbers.push({})}}},[t._v("+ Add New Tracking Number")]),t._v(" "),n("div",{staticClass:"mt-5"},[n("label",{staticClass:"custom_modal__content__label"},[t._v("Choose campaign's contact list:")]),t._v(" "),n("v-tooltip",{attrs:{top:"",color:"white primary--text","content-class":"custom_tooltip"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[n("v-icon",{staticClass:"button--text ml-1"},[t._v("mdi-18px mdi-help-circle-outline")])],1)]}}],null,!1,2909686298)},[t._v(" "),n("span",[t._v("The contact list contains all participants "),n("br"),t._v("of this campaign. Please, select contact"),n("br"),t._v(" list that is not empty.")])]),t._v(" "),n("v-select",{staticClass:"mt-3",attrs:{outlined:"",dense:"","hide-details":"",items:t.contact_list,placeholder:"Select Contact List","item-text":"name","item-value":"id"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}})],1),t._v(" "),n("div",[n("div",{staticClass:"d-flex align-center justify-start button--text"},[n("v-checkbox",{attrs:{color:"primary"},model:{value:t.ongoing,callback:function(e){t.ongoing=e},expression:"ongoing"}}),t._v(" "),n("label",{staticClass:"font-weight-medium text-subtitle-1"},[t._v("Ongoing campaign")]),t._v(" "),n("v-tooltip",{attrs:{top:"",color:"white primary--text","content-class":"custom_tooltip"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[n("v-icon",{staticClass:"button--text ml-1"},[t._v("mdi-18px mdi-help-circle-outline")])],1)]}}],null,!1,2909686298)},[t._v(" "),n("span",[t._v("In ongoing campaign new contacts"),n("br"),t._v(" that will have been added to a contact "),n("br"),t._v(" list will appear in the call queue.")])])],1)])],2),t._v(" "),n("div",{staticClass:"text-right"},[n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 mt-5",on:{click:function(e){return t.setActiveTab(2)}}},[t._v("Next:Voicemail Message >")])],1)]],2)])]):t._e(),t._v(" "),2==t.active_tab?n("div",{staticClass:"custom_modal__step_second"},[n("h3",{staticClass:"custom_modal__content__step"},[t._v("Step 2")]),t._v(" "),n("h2",{staticClass:"custom_modal__content__title"},[t._v("Voicemail Message")]),t._v(" "),n("p",{staticClass:"button--text mt-3 font-weight-medium"},[t._v("Play this message to the customer when you're proposed to leave a voicemail.")]),t._v(" "),n("AudioTab"),t._v(" "),n("p",[t._v("You can skip this step")]),t._v(" "),n("div",{staticClass:"d-flex justify-space-between align-center"},[n("v-btn",{staticClass:"custom_button custom_border text-capitalize button--text text-subtitle-2 mt-5",on:{click:function(e){return t.setActiveTab(1)}}},[t._v("Back")]),t._v(" "),n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 mt-5",on:{click:function(e){return t.setActiveTab(3)}}},[t._v("Next: Call Script >")])],1)],1):t._e(),t._v(" "),3==t.active_tab?n("div",{staticClass:"custom_modal__step_third"},[n("h3",{staticClass:"custom_modal__content__step"},[t._v("Step 3")]),t._v(" "),n("h2",{staticClass:"custom_modal__content__title"},[t._v("Call Script")]),t._v(" "),n("p",{staticClass:"button--text mt-3 font-weight-medium"},[t._v("Write down what to tell to the customer in this campaign:")]),t._v(" "),n("div",{staticClass:"custom_modal__content__item"},[n("div",[n("v-textarea",{staticClass:"custom-text-area",attrs:{solo:"",placeholder:"Type your message here..."}})],1),t._v(" "),n("div",[n("div",{staticClass:"d-flex align-center",staticStyle:{width:"60%"}},[n("h3",{staticClass:"primary--text mr-2 font-weight-medium"},[t._v("Insert:")]),t._v(" "),n("v-select",{staticClass:"custom_select_option button--text",attrs:{items:t.tokens,dense:!0,outlined:"",hegiht:"10",color:"success",placeholder:"Choose Token","hide-details":""},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}}),t._v(" "),n("v-tooltip",{attrs:{top:"",color:"white primary--text","content-class":"custom_tooltip"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[n("v-icon",{staticClass:"button--text ml-1"},[t._v("mdi-18px mdi-help-circle-outline")])],1)]}}],null,!1,2909686298)},[t._v(" "),n("span",[t._v("Tokens will be replaced with a "),n("br"),t._v(" data from a contact list")])])],1)]),t._v(" "),n("div",{staticClass:"d-flex justify-space-between align-center"},[n("v-btn",{staticClass:"custom_button custom_border text-capitalize button--text text-subtitle-2 mt-5",on:{click:function(e){return t.setActiveTab(2)}}},[t._v("Back")]),t._v(" "),n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 mt-5",on:{click:t.createNewCampaign}},[t._v("Create Campaign")])],1)])]):t._e()])]),t._v(" "),n("v-divider")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{AudioTab:n(710).default}),r()(component,{VBtn:d.a,VCard:v.a,VCardText:_.c,VCardTitle:_.d,VCheckbox:m.a,VDialog:h.a,VDivider:f.a,VForm:x.a,VIcon:C.a,VSelect:w.a,VTextField:y.a,VTextarea:k.a,VTooltip:V.a})},864:function(t,e,n){"use strict";n.r(e);var o={props:{title:String},data:function(){return{modal:!0}},methods:{hideModal:function(){this.$emit("hideDeleteModal")}}},l=n(20),c=n(26),r=n.n(c),d=n(492),v=n(779),_=n(179),m=n(711),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"400","content-class":"custom_modal"},on:{"click:outside":t.hideModal},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("div",{staticClass:"error delete_panel"},[n("div",{staticClass:"text-right"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("span",t._g(t._b({staticClass:"cancel"},"span",l,!1),o),[n("v-icon",{attrs:{color:"grey_shades_4"},on:{click:function(e){t.modal=!1}}},[t._v("\n              mdi-close\n            ")])],1)]}}])},[t._v(" "),n("span",[t._v("Delete")])])],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-icon",{staticClass:"mt-8 alert_icon",attrs:{color:"white",large:""}},[t._v("\n        mdi-alert\n      ")]),t._v(" "),n("h2",{staticClass:"white--text text-h6 mt-4 font-weight-medium"},[t._v(t._s(t.title))]),t._v(" "),n("div",[n("v-btn",{staticClass:"error--text text-capitalize text-14 mt-10 mb-6",on:{click:t.hideModal}},[t._v("Yes, "+t._s(t.title))])],1),t._v(" "),n("p",[n("a",{staticClass:"white--text",on:{click:t.hideModal}},[t._v("Cancel")])])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:d.a,VDialog:v.a,VIcon:_.a,VTooltip:m.a})},900:function(t,e,n){"use strict";n.r(e);var o={name:"AutoDialer"},l=n(20),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-5 pb-5 pl-10 pr-10"},[e("AutoDialerList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AutoDialerList:n(851).default})}}]);