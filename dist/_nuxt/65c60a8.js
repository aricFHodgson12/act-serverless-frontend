(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{845:function(t,e,n){"use strict";n.r(e);n(18);var o=n(528),c=n(51),l={name:"ContactLists",components:{API:c.a,Actions:o.default},data:function(){return{newContactList:!1,modalType:"",isLoading:!1,search:"",pagination:!1,headers:[{text:"Name",value:"name"},{text:"Contacts",value:"contacts"},{text:"broadcast Campaign",value:"broadcast_campaign"},{text:"Last Updated",value:"updated_at"},{text:"Created by",value:"created_by"},{text:"Actions",value:"actions",align:"center",sortable:!1,order:10,class:"custom-class"}],contactlists:[]}},methods:{getContactList:function(){var t=this;this.isLoading=!0;var e=this;return c.a.contactlists.all().then((function(t){e.contactlists=t,t.length<=5&&(e.pagination=!0)})).finally((function(){return t.isLoading=!1}))},edit:function(t){console.log("Edit: ",t)},hideModal:function(){this.newContactList=!1},editContactList:function(){this.modalType="edit",this.newContactList=!0}},mounted:function(){this.getContactList()}},r=n(20),d=n(26),m=n.n(d),v=n(492),C=n(221),f=n(123),h=n(503),_=n(885),x=n(222),L=n(504),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex align-center justify-space-between"},[n("h2",{staticClass:"primary--text"},[t._v("Manage Contact Lists")]),t._v(" "),t.contactlists.length>0?n("v-col",{staticClass:"d-flex justify-end pr-0 pt-4 pb-4",attrs:{xs:"12",md:"2","offset-md":"4"}},[n("v-btn",{staticClass:"white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--default",on:{click:function(e){t.newContactList=!0,t.modalType="create"}}},[t._v("+ Create New Contact List")])],1):t._e()],1)]),t._v(" "),t.contactlists.length>0?n("v-col",[n("v-card",{staticClass:"custom_border"},[n("v-card-title",{staticClass:"primary--text font-weight-bold"},[t._v(t._s(t.contactlists.length||"0")+" Constact Lists")]),t._v(" "),n("v-card-text",{staticClass:"pa-6"},[n("v-data-table",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}],attrs:{loading:t.isLoading,headers:t.headers,items:t.contactlists,search:t.search,"items-per-page":20,"fixed-header":"","item-class":"fixed_col","hide-default-footer":t.pagination},scopedSlots:t._u([{key:"item.name",fn:function(e){var o=e.item;return[n("nuxt-link",{staticClass:"blue--text font-weight-regular text-decoration-none",attrs:{to:"/setting/company/contact_lists/"+o.id}},[t._v(t._s(o.name))])]}},{key:"item.broadcast_campaign",fn:function(e){var o=e.item;return[n("a",{staticClass:"blue--text"},[t._v(t._s(o.broadcast_campaign))])]}},{key:"item.actions",fn:function(e){var o=e.item;return[n("ContactListsActions",{attrs:{item:o},on:{editContactList:t.editContactList}})]}}],null,!1,1264766030)},[n("v-progress-linear",{attrs:{slot:"progress",color:"primary",height:"3",indeterminate:""},slot:"progress"})],1)],1)],1)],1):n("div",{staticClass:"no_list"},[n("div",{staticClass:"d-flex align-center justify-center mt-16",staticStyle:{margin:"0 auto"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"grey_shades_6--text font-weight-medium text-h6 mb-1"},[t._v("No Contact Lists... Yet")]),t._v(" "),n("h3",{staticClass:"grey_shades_6--text font-weight-regular text-17 mb-6"},[t._v("Create lists of your customers for auto dialer and broadcast campaigns.")]),t._v(" "),n("v-btn",{staticClass:"button white--text text-capitalize font-weight-regular"},[t._v("+ Create New Contact List")])],1)])]),t._v(" "),t.newContactList?n("div",[n("ContactListsCreateModal",{attrs:{type:t.modalType},on:{hideModal:t.hideModal}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{ContactListsActions:n(773).default,ContactListsCreateModal:n(772).default}),m()(component,{VBtn:v.a,VCard:C.a,VCardText:f.c,VCardTitle:f.d,VCol:h.a,VDataTable:_.a,VProgressLinear:x.a,VRow:L.a})},897:function(t,e,n){"use strict";n.r(e);var o={name:"Setting-Contact-List",layout:"setting-companys",components:{},data:function(){return{newCallFlow:!1}}},c=n(20),l=n(26),r=n.n(l),d=n(503),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{attrs:{lg:"10",md:"9",sm:"12"}},[e("div",[e("ContactLists")],1)])}),[],!1,null,null,null);e.default=component.exports;r()(component,{ContactLists:n(845).default}),r()(component,{VCol:d.a})}}]);