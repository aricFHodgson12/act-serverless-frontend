(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{514:function(t,e,n){var content=n(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1313a329",content,!0,{sourceMap:!1})},515:function(t,e,n){"use strict";n.r(e);var o={name:"vertical-tabs",props:{items:Array},computed:{}},r=(n(518),n(20)),l=n(26),c=n.n(l),m=n(224),v=n(144),f=n(225),d=n(27),_=n(506),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"vertical-tab"},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action"),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)}),[],!1,null,"99fe41fa",null);e.default=component.exports;c()(component,{VList:m.a,VListItem:v.a,VListItemAction:f.a,VListItemContent:d.a,VListItemTitle:d.c,VNavigationDrawer:_.a})},518:function(t,e,n){"use strict";var o=n(514);n.n(o).a},519:function(t,e,n){(e=n(16)(!1)).push([t.i,".vertical-tab[data-v-99fe41fa]{background:#fafbfc!important}",""]),t.exports=e},913:function(t,e,n){"use strict";n.r(e);var o={name:"Setting",components:{Vtab:n(515).default},data:function(){return{tabs:[{name:"Name & Logo",to:"basic"},{name:"Preferences",to:"preferences"},{name:"Integrate Paypal",to:"paypal"},{name:"Email Settings",to:"email_setting"},{name:"Email Templates",to:"email_template"},{name:"Invoice Settings",to:"invoice"}],calls:[]}}},r=n(20),l=n(26),c=n.n(l),m=n(492),v=n(503),f=n(507),d=n(504),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"d-flex justify-space-between"},[n("h2",{staticClass:"primary--text"},[t._v(t._s(t.$t("setting.title")))]),t._v(" "),n("v-btn",{staticClass:"button white--text text-capitalize"},[t._v(t._s(t.$t("setting.header_btn")))])],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"2",md:"3",sm:"12"}},[n("Vtab",{attrs:{items:t.tabs}})],1),t._v(" "),n("v-col",{attrs:{lg:"10",md:"9",sm:"12"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Vtab:n(515).default}),c()(component,{VBtn:m.a,VCol:v.a,VContainer:f.a,VRow:d.a})}}]);