(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{534:function(t,e,n){var content=n(730);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("457a0249",content,!0,{sourceMap:!1})},535:function(t,e,n){var content=n(732);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("538b5e92",content,!0,{sourceMap:!1})},536:function(t,e,n){var content=n(734);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e726e76",content,!0,{sourceMap:!1})},537:function(t,e,n){var content=n(736);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1ffa20c7",content,!0,{sourceMap:!1})},706:function(t,e,n){"use strict";n.r(e);var r={name:"AudioFile",props:{file:String},components:{VuetifyAudio:function(){return n(745)}}},l=(n(729),n(20)),o=n(26),c=n.n(o),d=n(503),v=n(179),f=n(504),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"text-center call-table"},[e("v-icon",[this._v("mdi-play")]),this._v(" "),e("vuetify-audio",{staticClass:"player",class:{disabled:!this.file},attrs:{file:this.file,color:"blue",flat:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VIcon:v.a,VRow:f.a})},707:function(t,e,n){"use strict";n.r(e);var r={name:"Actions",props:{item:Object},data:function(){return{src:""}},computed:{getSrc:function(){}},methods:{}},l=(n(735),n(20)),o=n(26),c=n.n(o),d=n(503),v=n(179),f=n(504),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{staticClass:"d-flex space-around call-table",attrs:{align:"center"}},[e("v-col",{staticClass:"text-center"},[e("nuxt-link",{staticClass:"links--text font-weight-medium text-decoration-none",attrs:{to:"/calls/"+this.item.id}},[e("v-icon",[this._v("mdi-magnify-plus-outline")])],1),this._v(" "),e("v-icon",[this._v("mdi-message-bulleted")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VIcon:v.a,VRow:f.a})},708:function(t,e,n){"use strict";n.r(e);var r={name:"Tags",props:{item:Object},data:function(){return{src:""}},computed:{getSrc:function(){}},methods:{}},l=n(20),o=n(26),c=n.n(o),d=n(492),v=n(504),f=n(711),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"d-flex space-around call-table",attrs:{align:"center"}},[n("v-tooltip",{attrs:{top:"","content-class":"white_tooltip"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"hover_blue",attrs:{color:"button",small:""}},"v-btn",l,!1),r),[t._v("\n            billable\n          ")])]}}])},[t._v(" "),n("span",[t._v("This call is marked as billable. Currently"),n("br"),t._v(" it is under review. All calls with"),n("br"),t._v(' "billable" tag will be billed at the end of'),n("br"),t._v(" your paying period.")])]),t._v(" "),n("v-tooltip",{attrs:{top:"","content-class":"white_tooltip"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"hover_blue",attrs:{color:"button",small:""}},"v-btn",l,!1),r),[t._v("\n            new lead\n          ")])]}}])},[t._v(" "),n("span",[t._v("This call is marked as billable. Currently"),n("br"),t._v(" it is under review. All calls with"),n("br"),t._v(' "billable" tag will be billed at the end of'),n("br"),t._v(" your paying period.")])]),t._v(" "),n("v-tooltip",{attrs:{top:"","content-class":"white_tooltip"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"hover_blue",attrs:{color:"button",small:""}},"v-btn",l,!1),r),[t._v("\n            sale\n          ")])]}}])},[t._v(" "),n("span",[t._v("This call is marked as billable. Currently"),n("br"),t._v(" it is under review. All calls with"),n("br"),t._v(' "billable" tag will be billed at the end of'),n("br"),t._v(" your paying period.")])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VRow:v.a,VTooltip:f.a})},709:function(t,e,n){"use strict";n.r(e);var r={name:"Arrows",props:{item:Object},data:function(){return{src:""}},computed:{getSrc:function(){return"5f7f5f6d07813fc79ff92af5"===this.item?"mdi-arrow-bottom-left":"mdi-arrow-top-right"}},methods:{}},l=(n(733),n(20)),o=n(26),c=n.n(o),d=n(503),v=n(179),f=n(711),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{top:"","nudge-right":"45"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-col",t._g(t._b({},"v-col",l,!1),r),[n("div",[n("v-icon",{staticClass:"green-icon",attrs:{medium:""}},[t._v(" "+t._s(t.getSrc)+" ")])],1)])]}}])},[t._v(" "),n("span",[t._v("Incoming Call Answered")])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VIcon:v.a,VTooltip:f.a})},715:function(t,e,n){"use strict";n.r(e);n(731);var r=n(20),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 7410 3900"}},[n("rect",{attrs:{width:"7410",height:"3900",fill:"#b22234"}}),t._v(" "),n("path",{attrs:{d:"M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0",stroke:"#fff","stroke-width":"300"}}),t._v(" "),n("rect",{attrs:{width:"2964",height:"2100",fill:"#3c3b6e"}}),t._v(" "),n("g",{attrs:{fill:"#fff"}},[n("g",{attrs:{id:"s18"}},[n("g",{attrs:{id:"s9"}},[n("g",{attrs:{id:"s5"}},[n("g",{attrs:{id:"s4"}},[n("path",{attrs:{id:"s",d:"M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#s",y:"420"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#s",y:"840"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#s",y:"1260"}})]),t._v(" "),n("use",{attrs:{"xlink:href":"#s",y:"1680"}})]),t._v(" "),n("use",{attrs:{"xlink:href":"#s4",x:"247",y:"210"}})]),t._v(" "),n("use",{attrs:{"xlink:href":"#s9",x:"494"}})]),t._v(" "),n("use",{attrs:{"xlink:href":"#s18",x:"988"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#s9",x:"1976"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#s5",x:"2470"}})])])}),[],!1,null,"4abfd336",null);e.default=component.exports},729:function(t,e,n){"use strict";var r=n(534);n.n(r).a},730:function(t,e,n){(e=n(16)(!1)).push([t.i,".player{background-color:transparent!important;padding:0!important}.player .v-btn--icon.v-size--default{height:22px!important;width:22px!important}.player .v-btn .v-icon{font-size:16px!important}.player .v-btn:nth-child(4){display:none!important}.player .v-progress-linear{margin-top:0!important;margin-bottom:0!important}.player p{display:none}.player.disabled .v-progress-linear__background{background-color:rgba(0,0,0,.4)!important}",""]),t.exports=e},731:function(t,e,n){"use strict";var r=n(535);n.n(r).a},732:function(t,e,n){(e=n(16)(!1)).push([t.i,"svg[data-v-4abfd336]{height:auto;width:19px}",""]),t.exports=e},733:function(t,e,n){"use strict";var r=n(536);n.n(r).a},734:function(t,e,n){(e=n(16)(!1)).push([t.i,".highcharts-credits{display:none}",""]),t.exports=e},735:function(t,e,n){"use strict";var r=n(537);n.n(r).a},736:function(t,e,n){(e=n(16)(!1)).push([t.i,"table{width:calc(100% + 10rem)!important}table>tbody>tr>td:last-child,table>thead>tr>th:last-child{position:sticky!important;position:-webkit-sticky!important;right:0;z-index:1;background:#fff;width:10rem}table>thead>tr>th:first-child{z-index:8}",""]),t.exports=e},737:function(t,e,n){var content=n(806);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("275af737",content,!0,{sourceMap:!1})},745:function(t,e,n){"use strict";n.r(e),n.d(e,"VuetifyAudio",(function(){return y}));var r=function(t){return new Date(1e3*t).toISOString().substr(11,8)},l={name:"vuetify-audio",props:{flat:{type:Boolean,default:!1},file:{type:String,default:null},autoPlay:{type:Boolean,default:!1},ended:{type:Function,default:function(){}},canPlay:{type:Function,default:function(){}},color:{type:String,default:null},downloadable:{type:Boolean,default:!1}},computed:{duration:function(){return this.audio?r(this.totalDuration):""}},data:function(){return{firstPlay:!0,isMuted:!1,loaded:!1,playing:!1,paused:!1,percentage:0,currentTime:"00:00:00",audio:void 0,totalDuration:0}},methods:{setPosition:function(){this.audio.currentTime=parseInt(this.audio.duration/100*this.percentage)},stop:function(){this.audio.pause(),this.paused=!0,this.playing=!1,this.audio.currentTime=0},play:function(){var t=this;this.playing||(this.audio.play().then((function(e){return t.playing=!0})),this.paused=!1)},pause:function(){this.paused=!this.paused,this.paused?this.audio.pause():this.audio.play()},download:function(){this.audio.pause(),window.open(this.file,"download")},mute:function(){this.isMuted=!this.isMuted,this.audio.muted=this.isMuted,this.volumeValue=this.isMuted?0:75},reload:function(){this.audio.load()},_handleLoaded:function(){var t=this;if(!(this.audio.readyState>=2))throw new Error("Failed to load sound file");this.audio.duration===1/0?(this.audio.currentTime=1e101,this.audio.ontimeupdate=function(){t.audio.ontimeupdate=function(){},t.audio.currentTime=0,t.totalDuration=parseInt(t.audio.duration),t.loaded=!0}):(this.totalDuration=parseInt(this.audio.duration),this.loaded=!0),this.autoPlay&&this.audio.play()},_handlePlayingUI:function(t){this.percentage=this.audio.currentTime/this.audio.duration*100,this.currentTime=r(this.audio.currentTime),this.playing=!0},_handlePlayPause:function(t){"play"===t.type&&this.firstPlay&&(this.audio.currentTime=0,this.firstPlay&&(this.firstPlay=!1)),"pause"===t.type&&!1===this.paused&&!1===this.playing&&(this.currentTime="00:00:00")},_handleEnded:function(){this.paused=this.playing=!1},init:function(){this.audio.addEventListener("timeupdate",this._handlePlayingUI),this.audio.addEventListener("loadeddata",this._handleLoaded),this.audio.addEventListener("pause",this._handlePlayPause),this.audio.addEventListener("play",this._handlePlayPause),this.audio.addEventListener("ended",this._handleEnded)}},mounted:function(){this.audio=this.$refs.player,this.init()},beforeDestroy:function(){this.audio.removeEventListener("timeupdate",this._handlePlayingUI),this.audio.removeEventListener("loadeddata",this._handleLoaded),this.audio.removeEventListener("pause",this._handlePlayPause),this.audio.removeEventListener("play",this._handlePlayPause),this.audio.removeEventListener("ended",this._handleEnded)}},o=n(20),c=n(26),d=n.n(c),v=n(492),f=n(221),h=n(123),m=n(179),_=n(222),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticStyle:{"text-align":"center"},attrs:{flat:null!=t.flat&&0!=t.flat}},[n("v-card-text",[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",icon:"",color:t.color,disabled:!t.loaded},nativeOn:{click:function(e){t.playing?t.pause():t.play()}}},[!t.playing||t.paused?n("v-icon",[t._v("mdi-play")]):n("v-icon",[t._v("mdi-pause")])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",icon:"",color:t.color,disabled:!t.loaded},nativeOn:{click:function(e){return t.stop()}}},[n("v-icon",[t._v("mdi-stop")])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",icon:"",color:t.color,disabled:!t.loaded},nativeOn:{click:function(e){return t.mute()}}},[t.isMuted?n("v-icon",[t._v("mdi-volume-mute")]):n("v-icon",[t._v("mdi-volume-high")])],1),t._v(" "),t.loaded?t._e():n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",icon:"",color:t.color},nativeOn:{click:function(e){t.loaded?t.download():t.reload()}}},[n("v-icon",[t._v("mdi-refresh")])],1),t._v(" "),t.loaded&&t.downloadable?n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",icon:"",color:t.color},nativeOn:{click:function(e){t.loaded?t.download():t.reload()}}},[n("v-icon",[t._v("mdi-download")])],1):t._e(),t._v(" "),n("v-progress-linear",{staticStyle:{"margin-top":"15px","margin-bottom":"15px"},attrs:{height:"5",disabled:!t.loaded},nativeOn:{click:function(e){return t.setPosition()}},model:{value:t.percentage,callback:function(e){t.percentage=e},expression:"percentage"}}),t._v(" "),n("p",[t._v(t._s(t.currentTime)+" / "+t._s(t.duration))])],1),t._v(" "),n("audio",{ref:"player",attrs:{id:"player",src:t.file},on:{ended:t.ended,canplay:t.canPlay}})],1)}),[],!1,null,null,null),y=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardText:h.c,VIcon:m.a,VProgressLinear:_.a});e.default=y},770:function(t,e,n){"use strict";n.r(e);n(8),n(11),n(6),n(13),n(14),n(12),n(18),n(7),n(32);var r=n(2),l=n(712),o=n(51);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"CallStats",components:{LineChart:l.default,API:o.a},data:function(){return{isLoading:!1,campaign:1,interval:4,rejectedCalls:!0,anIncreasingNumber:0,campaigns:[],intervals:[{id:1,name:"Today"},{id:2,name:"Yesterday"},{id:3,name:"Last 7 Days"},{id:4,name:"Last 7 Days + Today"},{id:5,name:"Last 30 Days"},{id:6,name:"Last Month"}]}},directives:{"sortable-table":{inserted:function(t,e){t.querySelectorAll("th").forEach((function(t){watchClass(t,"sortHandle"),t.classList.add("sortHandle")})),Sortable.create(t.querySelector("tr"),e.value?d(d({},e.value),{},{handle:".sortHandle"}):{})}}},methods:{getCampaigns:function(){var t=this;return this.isLoading=!0,o.a.campaigns.all().then((function(e){return t.campaigns=e})).finally((function(){return t.isLoading=!1}))},getCampaign:function(){var t=this;1===this.campaign?this.getCampaigns():(this.isLoading=!0,setTimeout((function(){return t.isLoading=!1}),800))}},mounted:function(){this.getCampaigns()}},f=n(20),h=n(26),m=n.n(h),_=n(221),y=n(123),x=n(705),C=n(503),w=n(804),k=n(60),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex align-center justify-space-between"},[n("h2",{staticClass:"primary--text"},[t._v(t._s(t.$t("calls.title")))]),t._v(" "),n("v-col",{staticClass:"d-flex justify-end pr-0 pt-4 pb-4",attrs:{xs:"12",md:"2","offset-md":"4"}},[n("SelectDates"),t._v(" "),n("AdvFilter")],1)],1),t._v(" "),n("v-card",{staticClass:"custom_border",attrs:{loading:t.isLoading}},[n("v-card-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("calls.timeline.title")))]),t._v(" "),n("v-card-text",[n("div",{staticClass:"actions"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-col",{staticClass:"d-none",attrs:{cols:"12",sm:"6",md:"3"}},[n("v-select",{attrs:{outlined:"",dense:"","hide-details":"",items:t.campaigns,disabled:t.isLoading,"item-text":"name","item-value":"id"},on:{change:t.getCampaign},model:{value:t.campaign,callback:function(e){t.campaign=e},expression:"campaign"}})],1),t._v(" "),n("v-col",{staticClass:"d-none",attrs:{cols:"12",sm:"6",md:"3"}},[n("v-checkbox",{staticClass:"mt-2",attrs:{color:"accent","hide-details":"",disabled:t.isLoading,label:"Exclude Rejected Calls"},model:{value:t.rejectedCalls,callback:function(e){t.rejectedCalls=e},expression:"rejectedCalls"}})],1)],1)],1),t._v(" "),n("LineChart",{attrs:{series:t.campaigns,id:t.campaign}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{SelectDates:n(713).default,AdvFilter:n(714).default,LineChart:n(712).default}),m()(component,{VCard:_.a,VCardText:y.c,VCardTitle:y.d,VCheckbox:x.a,VCol:C.a,VLayout:w.a,VSelect:k.a})},771:function(t,e,n){"use strict";n.r(e);n(76),n(6),n(91),n(185),n(18),n(7);var r=n(706),l=n(715),o=(n(709),n(708),n(707),n(51)),c=n(297),d=n.n(c),v={name:"Calls",components:{AudioFile:r.default,Flag:l.default,API:o.a,draggable:d.a},data:function(){return{headerCheckBox:!0,closeStatus:!1,isLoading:!1,search:"",header_selected:["id","date","source","call_details","city","duration","status","recording","tags","actions"],headers:[],headerData:[{text:"Direction",fixed:!0,width:"120px",value:"id",order:1},{text:"Date",value:"date",order:2},{text:"Source",value:"source",order:3},{text:"Call Detail",value:"call_details",sortable:!1,order:4},{text:"Location",value:"city",order:5},{text:"Duration",value:"duration",order:6},{text:"Status",value:"status",order:7},{text:"Recording",value:"recording",sortable:!1,order:8},{text:"Tags",value:"tags",order:9},{text:"Actions",value:"actions",align:"center",sortable:!1,order:10,class:"custom-class"}],calls:[]}},methods:{collapseAll:function(){this.$refs.expandableTable.collapseAll()},expandAll:function(){this.$refs.expandableTable.expandAll()},getCalls:function(){var t=this;return this.isLoading=!0,o.a.calls.all().then((function(e){return t.calls=e})).finally((function(){return t.isLoading=!1}))},edit:function(t){console.log("Edit: ",t)},comments:function(t){console.log("Comments: ",t)},sortTheHeadersAndUpdateTheKey:function(t){var e=this.headers,n=t.oldIndex,r=t.newIndex;if(r>=e.length)for(var l=r-e.length+1;l--;)e.push(void 0);e.splice(r,0,e.splice(n,1)[0]),this.table=e,this.anIncreasingNumber+=1}},mounted:function(){this.getCalls(),this.headers=this.headerData},watch:{headerData:function(){var t=this,e=[];_(this.headerData).forEach((function(n){_.find(t.headers,(function(t){return n.value==t.value}))&&e.push(n)}));this.headers=e},header_selected:function(){var t=this,e=[];_(this.headerData).forEach((function(n){_.indexOf(t.header_selected,n.value)>-1&&e.push(n)}));this.headers=e}}},f=(n(805),n(20)),h=n(26),m=n.n(h),y=n(492),x=n(221),C=n(123),w=n(705),k=n(885),V=n(179),S=n(226),L=n(222),T=n(88),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"custom_border"},[n("v-card-title",{staticClass:"primary--text"},[t._v(t._s(t.calls.length||"0")+" Calls")]),t._v(" "),n("v-card-text",[n("v-data-table",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}],attrs:{loading:t.isLoading,headers:t.headers,items:t.calls,search:t.search,"items-per-page":20,"fixed-header":"",height:"500","item-class":"fixed_col"},scopedSlots:t._u([{key:"top",fn:function(){return[n("div",{staticClass:"d-flex align-center table_actions"},[n("div",{staticClass:"table_actions__filters",attrs:{lg:"4"}},[n("v-text-field",{staticClass:"primary--text custom-input mr-2",attrs:{"hide-details":"",outlined:"",solo:"",height:"40px",flat:"",label:"Search Calls",dense:"",color:"light","prepend-inner-icon":"mdi-magnify",elevation:"0"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"scale-transition","close-on-content-click":t.closeStatus,"max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"custom_white text-capitalize button--text custom_border pl-2 pr-2",attrs:{"close-on-content-click":"false","close-on-click":"false",height:"40px"}},"v-btn",l,!1),r),[t._v("\n                                  Select Columns\n                                  "),n("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),n("draggable",{staticClass:"white draggable_list",model:{value:t.headerData,callback:function(e){t.headerData=e},expression:"headerData"}},[n("transition-group",t._l(t.headerData,(function(element){return n("div",{key:element.value},[n("v-checkbox",{attrs:{label:""+element.text,value:element.value,color:"blue"},model:{value:t.header_selected,callback:function(e){t.header_selected=e},expression:"header_selected"}})],1)})),0)],1)],1),t._v(" "),n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 ml-3"},[n("v-icon",[t._v("mdi-download")]),t._v("Download CSV")],1)],1)])]},proxy:!0},{key:"item.id",fn:function(t){var e=t.item;return[n("Arrows",{attrs:{item:e}})]}},{key:"item.date",fn:function(e){var r=e.item;return[n("nuxt-link",{staticClass:"links--text font-weight-medium text-decoration-none",attrs:{to:"/calls/"+r.id}},[t._v(t._s(r.date))])]}},{key:"item.source",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.source)+"\n            ")]}},{key:"item.call_details",fn:function(e){var r=e.item;return[n("table",[n("tr",[n("td",[t._v("From:")]),t._v(" "),n("td",[n("Flag")],1),t._v(" "),n("td",[t._v(t._s(r.call_details.from))])]),t._v(" "),n("tr",[n("td",[t._v("To:")]),t._v(" "),n("td",[n("Flag")],1),t._v(" "),n("td",[t._v(t._s(r.call_details.to))])]),t._v(" "),n("tr",[n("td",[t._v("Rang:")]),t._v(" "),n("td",[n("Flag")],1),t._v(" "),n("td",[t._v(t._s(r.call_details.rang))])]),t._v(" "),n("tr",[n("td",[t._v("Caller ID:")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v(t._s(r.call_details.caller_id))])]),t._v(" "),n("tr",[n("td",[t._v("Label:")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v(t._s(r.call_details.label))])])])]}},{key:"item.city",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.city)+"\n            ")]}},{key:"item.duration",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.duration)+"\n            ")]}},{key:"item.status",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.status)+"\n            ")]}},{key:"item.recording",fn:function(t){var e=t.item;return[n("AudioFile",{attrs:{file:e.recording,color:"success"}})]}},{key:"item.tags",fn:function(t){var e=t.item;return[n("Tags",{attrs:{item:e}})]}},{key:"item.actions",fn:function(t){var e=t.item;return[n("Actions",{attrs:{item:e}})]}}])},[n("v-progress-linear",{attrs:{slot:"progress",color:"primary",height:"3",indeterminate:""},slot:"progress"})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Arrows:n(709).default,Flag:n(715).default,AudioFile:n(706).default,Tags:n(708).default,Actions:n(707).default}),m()(component,{VBtn:y.a,VCard:x.a,VCardText:C.c,VCardTitle:C.d,VCheckbox:w.a,VDataTable:k.a,VIcon:V.a,VMenu:S.a,VProgressLinear:L.a,VTextField:T.a})},805:function(t,e,n){"use strict";var r=n(737);n.n(r).a},806:function(t,e,n){(e=n(16)(!1)).push([t.i,"table{width:120%!important}table>tbody>tr>td:last-child,table>thead>tr>th:last-child{position:sticky!important;position:-webkit-sticky!important;right:0;z-index:1;background:#fff}table>thead>tr>th:first-child{z-index:9999}",""]),t.exports=e},887:function(t,e,n){"use strict";n.r(e);var r=n(770),l=n(771),o=(n(18),n(51)),c={name:"SMSInbox",components:{API:o.a},data:function(){return{isLoading:!1,headers:[{text:"Date",value:"date"},{text:"Label/Source",value:"source"},{text:"Campaign",value:"campaign"},{text:"Client(s)",value:"clients"},{text:"From",value:"from"},{text:"To",value:"to"},{text:"Contents",value:"contents"},{text:"Call Caching",value:"call_caching",align:"center"},{text:"Actions",value:"actions",align:"center",sortable:!1}],sms:[]}},methods:{getCalls:function(){var t=this;return this.isLoading=!0,o.a.sms.all().then((function(e){return t.sms=e})).finally((function(){return t.isLoading=!1}))},edit:function(t){console.log("Edit: ",t)},comments:function(t){console.log("Comments: ",t)}},mounted:function(){this.getCalls()}},d=n(20),v=n(26),f=n.n(v),h=n(492),m=n(221),_=n(123),y=n(885),x=n(179),C=n(222),w=n(711),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"custom_border"},[n("v-card-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("calls.sms.title")))]),t._v(" "),n("v-card-text",[n("v-data-table",{attrs:{loading:t.isLoading,headers:t.headers,items:t.sms,"items-per-page":5},scopedSlots:t._u([{key:"item.date",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.date)+"\n            ")]}},{key:"item.source",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.source)+"\n            ")]}},{key:"item.campaign",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.campaign||"-")+"\n            ")]}},{key:"item.clients",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.clients||"-")+"\n            ")]}},{key:"item.from",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.to)+"\n            ")]}},{key:"item.contents",fn:function(e){var r=e.item;return[n("span",{staticClass:"primary--text"},[t._v(t._s(r.contents))])]}},{key:"item.call_caching",fn:function(e){var n=e.item;return[t._v("\n                "+t._s(n.call_caching?"Yes":"No")+"\n            ")]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"red",icon:""},on:{click:function(e){return t.edit(r)}}},"v-btn",o,!1),l),[n("v-icon",{attrs:{size:"medium"}},[t._v("far fa-times")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"blue",icon:""},on:{click:function(e){return t.comments(r)}}},"v-btn",o,!1),l),[n("v-icon",{attrs:{size:"medium"}},[t._v("far fa-comments")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Comments")])])]}}])},[n("v-progress-linear",{attrs:{slot:"progress",color:"primary",height:"3",indeterminate:""},slot:"progress"})],1)],1)],1)}),[],!1,null,null,null),k=component.exports;f()(component,{VBtn:h.a,VCard:m.a,VCardText:_.c,VCardTitle:_.d,VDataTable:y.a,VIcon:x.a,VProgressLinear:C.a,VTooltip:w.a});var V={name:"Dashboard",components:{Calls:l.default,CallStats:r.default,SMSInbox:k}},S=n(503),L=n(504),T=Object(d.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pa-5"},[e("v-row",[e("v-col",{attrs:{cols:"12 pt-0"}},[e("CallStats")],1),this._v(" "),e("v-col",{attrs:{cols:"12"}},[e("Calls")],1),this._v(" "),e("v-col",{attrs:{cols:"12"}},[e("SMSInbox")],1)],1)],1)}),[],!1,null,null,null);e.default=T.exports;f()(T,{CallStats:n(770).default,Calls:n(771).default}),f()(T,{VCol:S.a,VRow:L.a})}}]);