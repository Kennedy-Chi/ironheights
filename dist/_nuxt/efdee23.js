(window.webpackJsonp=window.webpackJsonp||[]).push([[12,17,20],{358:function(t,e,n){t.exports=n.p+"img/delete.5760122.svg"},362:function(t,e,n){t.exports=n.p+"img/edit.cb34748.svg"},383:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIzIiBoZWlnaHQ9Ijg5IiB2aWV3Qm94PSIwIDAgMTIzIDg5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNTA3NV80KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuMzMgMTYuODNDOTguMzIgNyAxMTcuMjUgMTguNDYgMTE3LjI1IDMwLjQ2QzExNy4yNSAzOC4yMSAxMTQuMjggNDEuMjUgMTA5LjY4IDQ0LjQ5QzEzMi44OCA1Ni45IDEyMi4zOCA4NC4zNSAxMDIuMTQgODguOThIMzEuNDVDLTEuNzQ5OTkgODguOTggLTE0LjAzIDQzLjk5IDIxLjMyIDMzLjA5QzE0LjY5IDYuNjYgNjYuNSAtMTcuMiA4NS4zMyAxNi44M1pNNTMuMzcgNjkuNTRWNTMuNjZIMzkuMTZMNjEuNDUgMjYuODRMODMuNzQgNTMuNjZINjkuNTNWNjkuNTRINTMuMzdWNjkuNTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUwNzVfNCI+CjxyZWN0IHdpZHRoPSIxMjIuODgiIGhlaWdodD0iODguOTgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},393:function(t,e,n){"use strict";n.d(e,"i",(function(){return V})),n.d(e,"a",(function(){return c})),n.d(e,"m",(function(){return o})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"j",(function(){return d})),n.d(e,"d",(function(){return y})),n.d(e,"h",(function(){return k})),n.d(e,"b",(function(){return w})),n.d(e,"k",(function(){return C})),n.d(e,"l",(function(){return _}));var l=n(155),r=n(156),c=(n(33),n(30),n(157),n(62),function(){function t(){Object(l.a)(this,t),this.titleValue=!1,this.introValue=!1,this.bannerValue=!1}return Object(r.a)(t,[{key:"checkTitle",value:function(t){return this.titleValue=""!=t&&null!=t,this}},{key:"checkDescription",value:function(t){return this.descriptionValue=""!=t&&null!=t,this}},{key:"checkBanner",value:function(t){return this.bannerValue=""!=t&&null!=t,this}},{key:"checkErrors",value:function(){return this.titleValue?this.descriptionValue?this.bannerValue?"success":"Please select image for this banner":"Please write the description of this banner":"Please write the title of this banner"}}]),t}()),o=function(){function t(){Object(l.a)(this,t),this.thumbnailValue=!1,this.descriptionValue=!1,this.thumbExtension=!1,this.videoExtension=!1,this.videoValue=!1}return Object(r.a)(t,[{key:"checkThumbnail",value:function(t){if(""==t||null==t)this.thumbnailValue=!1;else{var e,n;e=t.name?t.name.split("."):t.filename.split("."),n=e[e.length-1].toLowerCase(),["jpg","jpeg","png"].includes(n)?this.thumbExtension=!0:this.thumbExtension=!1,this.thumbnailValue=!0}return this}},{key:"checkDescription",value:function(t){return this.descriptionValue=""!=t&&null!=t,this}},{key:"checkVideo",value:function(t){if(""==t||null==t)this.videoValue=!1;else{var e,n;e=t.name?t.name.split("."):t.filename.split("."),n=e[e.length-1].toLowerCase();["mp4","mov","wmv"].includes(n)?this.videoExtension=!0:this.videoExtension=!1,this.videoValue=!0}return this}},{key:"checkErrors",value:function(){return this.thumbnailValue?this.thumbExtension?this.videoValue?this.videoExtension?this.descriptionValue?"success":"Please write the description of this video":"Sorry! only video format(mp4, mov) for video is allowed":"Please select a video":"Sorry! only image format(jpg, jpeg, png) for thumbnail is allowed":"Please choose a thumbnail"}}]),t}(),h=function(){function t(){Object(l.a)(this,t),this.typeValue=!1,this.titleValue=!1,this.msgValue=!1,this.wwdValue=!1,this.listValue=!1,this.galleryExtension=!0,this.galleryValue=!0,this.galleryState=!1}return Object(r.a)(t,[{key:"checkType",value:function(t){return this.typeValue="Gallery Type"!=t&&null!=t,this}},{key:"checkTitle",value:function(t){return this.titleValue=""!=t&&null!=t,this}},{key:"checkMSG",value:function(t){return this.msgValue=""!=t&&null!=t,this}},{key:"checkGallery",value:function(t,e){if(e)return this;if(this.galleryState=e,""==t||null==t)this.galleryValue=!1;else{for(var n,l,i=0,r=["jpg","jpeg","png"];i<t.length;){if(l=(n=t[i].name?t[i].name.split("."):t[i].filename.split("."))[n.length-1].toLowerCase(),!r.includes(l)){this.galleryExtension=!1;break}this.galleryExtension=!0,i++}this.galleryValue=!0}return this}},{key:"checkWWD",value:function(t){return this.wwdValue=""!=t&&null!=t,this}},{key:"checkList",value:function(t){return this.listValue=""!=t&&null!=t,this}},{key:"checkErrors",value:function(){return this.typeValue?this.titleValue?this.msgValue?this.wwdValue?this.listValue?this.galleryValue?this.galleryExtension?"success":"Sorry! only image format format(jpg, jpeg or png) is allowed":"Please insert images for this gallery":"Please write the list of things you do":"Please write about what  you do":"Please write brief message of this gallery":"Plese write the title of this gallery":"Please select the type of gallery"}}]),t}(),d=function(){function t(){Object(l.a)(this,t),this.questionValue=!1,this.answerValue=!1}return Object(r.a)(t,[{key:"checkQuestion",value:function(t){return this.questionValue=""!=t&&null!=t,this}},{key:"checkAnswer",value:function(t){return this.answerValue=""!=t&&null!=t,this}},{key:"checkErrors",value:function(){return this.questionValue?this.answerValue?"success":"Please write the answer":"Please write the question"}}]),t}(),v=function(){function t(){Object(l.a)(this,t),this.historyValue=!1,this.listValue=!1}return Object(r.a)(t,[{key:"checkHistory",value:function(t){return this.historyValue=""!=t&&null!=t,this}},{key:"checkList",value:function(t){return 0==t.length?(console.log("error"),this.listValue=!1):this.listValue=!0,this}},{key:"checkErrors",value:function(){return this.historyValue?this.listValue?"success":"Please write the list of things you do":"Please write the history"}}]),t}(),f=function(){function t(){Object(l.a)(this,t),this.galleryExtension=!1,this.lengthValue=!1,this.galleryValue=!1}return Object(r.a)(t,[{key:"checkGallery",value:function(t){if(""==t||null==t)this.galleryValue=!1;else{for(var e,n,i=0,l=["jpg","jpeg","png"];i<t.length;){if(n=(e=t[i].name?t[i].name.split("."):t[i].filename.split("."))[e.length-1].toLowerCase(),!l.includes(n)){this.galleryExtension=!1;break}this.galleryExtension=!0,i++}6!=t.length?this.lengthValue=!1:this.lengthValue=!0,this.galleryValue=!0}return this}},{key:"checkErrors",value:function(){return this.lengthValue?this.galleryValue?this.galleryExtension?"success":"Sorry! only image format format(jpg, jpeg or png) is allowed":"Please insert images for this gallery":"Please insert six images for this work"}}]),t}(),m=function(){function t(){Object(l.a)(this,t),this.nameValue=!1,this.imageValue=!1,this.imageExtension=!1,this.typeValue=!1,this.detailValue=!1,this.listValue=!1,this.rateValue=!1,this.priceValue=!1}return Object(r.a)(t,[{key:"checkName",value:function(t){return this.nameValue=""!=t&&null!=t,this}},{key:"checkType",value:function(t){return this.typeValue=""!=t&&null!=t,this}},{key:"checkRate",value:function(t){return this.rateValue=""!=t&&null!=t,this}},{key:"checkPrice",value:function(t,e){return this.priceValue=""!=t&&null!=t&&""!=e&&null!=e,this}},{key:"checkSubType",value:function(t){return""==t.length?this.listValue=!1:this.listValue=!0,this}},{key:"checkDetail",value:function(t){return this.detailValue=""!=t&&null!=t,this}},{key:"checkImage",value:function(t){if(""==t||null==t)this.imageValue=!1;else{var e,n;n=(e=t.filename?t.filename.split("."):t.name.split("."))[e.length-1].toLowerCase(),["jpg","jpeg","png"].includes(n)?this.imageExtension=!0:this.imageExtension=!1,this.imageValue=!0}return this}},{key:"checkErrors",value:function(){return this.nameValue?this.typeValue?this.listValue?this.rateValue?this.priceValue?this.detailValue?this.imageValue?this.imageExtension?"success":"Sorry! Only image format(jpg, jpeg, png) are allowed":"Please select image for this goods":"Please write the details of this goods":"Please write the prices of this goods":"Please write the rate of this goods":"Please write the sub-type of this goods":"Please select the type of this goods":"Please write the name of this goods"}}]),t}(),y=function(){function t(){Object(l.a)(this,t),this.titleValue=!1,this.descriptionValue=!1,this.bannerValue=!1,this.categoryValue=!1}return Object(r.a)(t,[{key:"checkTitle",value:function(t){return this.titleValue=""!=t&&null!=t,this}},{key:"checkDescription",value:function(t){return this.descriptionValue=""!=t&&null!=t,this}},{key:"checkBanner",value:function(t){return this.bannerValue=""!=t&&null!=t,this}},{key:"checkCategory",value:function(t){return this.categoryValue="Select category"!=t,this}},{key:"checkErrors",value:function(){return this.titleValue?this.descriptionValue?this.categoryValue?this.bannerValue?"success":"Please select image for this banner":"Please select category for this banner":"Please write the description of this banner":"Please write the title of this banner"}}]),t}(),k=function(){function t(){Object(l.a)(this,t),this.titleValue=!1,this.introValue=!1,this.listValue=!1,this.categoryValue=!1}return Object(r.a)(t,[{key:"checkTitle",value:function(t){return this.titleValue=""!=t&&null!=t,this}},{key:"checkIntro",value:function(t){return this.introValue=""!=t&&null!=t,this}},{key:"checkListing",value:function(t){return 0==t.length?this.listValue=!1:this.listValue=!0,this}},{key:"checkCategory",value:function(t){return this.categoryValue="Select category"!=t,this}},{key:"checkErrors",value:function(){return this.titleValue?this.introValue?this.categoryValue?this.listValue?"success":"Please insert the Lists for this page":"Please select category for this Page":"Please write the introduction of this Page":"Please write the title of this Page"}}]),t}(),w=function(){function t(){Object(l.a)(this,t),this.phoneValue=!1,this.emailValue=!1,this.facebookValue=!1,this.instaValue=!1,this.whatsappValue=!1,this.youtubeValue=!1,this.addressValue=!1}return Object(r.a)(t,[{key:"checkPhone",value:function(t){return this.phoneValue=""!=t&&null!=t,this}},{key:"checkEmail",value:function(t){return this.emailValue=""!=t&&null!=t,this}},{key:"checkFace",value:function(t){return this.facebookValue=""!=t&&null!=t,this}},{key:"checkInsta",value:function(t){return this.instaValue=""!=t&&null!=t,this}},{key:"checkWhatsapp",value:function(t){return this.whatsappValue=""!=t&&null!=t,this}},{key:"checkYoutube",value:function(t){return this.youtubeValue=""!=t&&null!=t,this}},{key:"checkAddress",value:function(t){return this.addressValue=""!=t&&null!=t,this}},{key:"checkErrors",value:function(){return this.phoneValue?this.emailValue?this.facebookValue?this.instaValue?this.whatsappValue?this.youtubeValue?this.addressValue?"success":"Please write the address of this company":"Please write the youtube URL of this company":"Please write the whatsapp number of this company":"Please write the instagram URL of this company":"Please insert the facebook URL of this company":"Please write the email of this company":"Please write the phone number of this company"}}]),t}(),V=function(){function t(){Object(l.a)(this,t),this.nameValue=!1,this.wattValue=!1}return Object(r.a)(t,[{key:"checkName",value:function(t){return this.nameValue=""!=t&&null!=t,this}},{key:"checkWatt",value:function(t){return this.wattValue=""!=t&&null!=t,this}},{key:"checkErrors",value:function(){return this.nameValue?this.wattValue?"success":"Please write the wattage of this load":"Please write the name of this load"}}]),t}(),C=function(){function t(){Object(l.a)(this,t),this.ratingValue=!1,this.materialValue=!1,this.quantityValue=!1}return Object(r.a)(t,[{key:"checkKVA",value:function(t){return this.kvaValue=""!=t&&null!=t,this}},{key:"checkMaterial",value:function(t){return Array.isArray(t)?0==t.length?this.materialValue=!1:this.materialValue=!0:this.materialValue=!1,this}},{key:"checkErrors",value:function(){return this.kvaValue?this.materialValue?"success":"Please write the material for this quotation":"Please write the KVA for this quotation"}}]),t}(),_=function(){function t(){Object(l.a)(this,t),this.materialValue=!1,this.quantityValue=!1}return Object(r.a)(t,[{key:"checkQuantity",value:function(t){return this.quantityValue=""!=t&&null!=t,this}},{key:"checkMaterial",value:function(t){return this.materialValue=""!=t&&null!=t,this}},{key:"checkErrors",value:function(){return this.materialValue?this.quantityValue?"success":"Please write the quantity for this quotation":"Please write the material for this quotation"}}]),t}()},415:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("d42b163a",content,!0,{sourceMap:!1})},438:function(t,e,n){"use strict";n(415)},439:function(t,e,n){var l=n(125)(!1);l.push([t.i,".div-block-95.wide{width:100%}",""]),t.exports=l},463:function(t,e,n){"use strict";n.r(e);n(34),n(46);var l=n(10),r=(n(43),n(75),n(45),n(393)),c={data:function(){return{id:"",token:"",banners:[],bannerImage:null,bannerTitle:"",bannerDescription:"",error:"",success:"",errorShow:!1,successShow:!1,editState:!1,editId:"",galleryList:[],galleryArray:[],galleryError:"",gallerySuccess:"",galleryErrorShow:!1,gallerySuccessShow:!1,galleryState:!1}},methods:{clearGalleryState:function(){this.galleryList=[],this.editGalleryState=!1,this.editGalleryId=""},showGallerySuccess:function(t){var e=this;this.gallerySuccess=t,this.gallerySuccessShow=!0,setTimeout((function(){e.gallerySuccessShow=!1}),5e3)},showGalleryError:function(t){var e=this;this.galleryError=t,this.galleryErrorShow=!0,setTimeout((function(){e.galleryErrorShow=!1}),5e3)},setGalleryFiles:function(t){this.galleryList=t.target.files},processGalleryData:function(){var t=(new r.g).checkGallery(this.galleryList);if("success"!=t.checkErrors())this.showGalleryError(t.checkErrors());else{for(var e=new FormData,n=0,l=Object.keys(this.galleryList);n<l.length;n++){var i=l[n];e.append("gallery",this.galleryList[i])}this.createGallery(e)}},createGallery:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$post("/settings/solar/gallery",t,{headers:{authorization:"Bearer ".concat(e.token)}});case 3:n.sent,e.getGallery(),e.showGallerySuccess("Gallery has been uploaded successfully"),e.clearGalleryState(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.response);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},getGallery:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/settings/solar/gallery",{headers:{authorization:"Bearer ".concat(t.token)}});case 3:n=e.sent,t.galleryArray=n.data.gallery,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteGallery:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$delete("/settings/solar/gallery/".concat(t),{headers:{authorization:"Bearer ".concat(e.token)}});case 3:e.getGallery(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0.response);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},setBanner:function(t){this.bannerImage=t.target.files[0]},toggleHome:function(){this.homeState=!this.homeState},setEditBanner:function(t){this.bannerTitle=t.title,this.bannerDescription=t.description,this.bannerImage=t.image,this.editState=!0,this.editId=t._id},clearState:function(){this.bannerImage=null,this.bannerTitle="",this.bannerDescription="",this.editState=!1,this.editId=""},showSuccess:function(t){var e=this;this.success=t,this.successShow=!0,setTimeout((function(){e.successShow=!1}),5e3)},showError:function(t){var e=this;this.error=t,this.errorShow=!0,setTimeout((function(){e.errorShow=!1}),5e3)},processData:function(){var t=(new r.a).checkTitle(this.bannerTitle).checkDescription(this.bannerDescription).checkBanner(this.bannerImage);if("success"!=t.checkErrors())this.showError(t.checkErrors());else{var e=new FormData;e.append("title",this.bannerTitle),e.append("description",this.bannerDescription),e.append("banner",this.bannerImage),1==this.editState?this.updateBanner(e):this.createBanner(e)}},getUserDetails:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("user"),e.next=4,JSON.parse(n);case 4:return l=e.sent,e.next=7,l.token;case 7:return t.token=e.sent,e.next=10,l.data.user._id;case 10:t.id=e.sent,t.getBanners(),t.getGallery();case 13:case"end":return e.stop()}}),e)})))()},bannerStatus:function(t,e){var n=this;return Object(l.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,n.$axios.$patch("/settings/solar/bannerStatus/".concat(t),{status:e},{headers:{authorization:"Bearer ".concat(n.token)}});case 3:l.sent,n.getBanners(),l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),console.log(l.t0.response);case 10:case"end":return l.stop()}}),l,null,[[0,7]])})))()},updateBanner:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$patch("/settings/solar/banner/".concat(e.editId),t,{headers:{authorization:"Bearer ".concat(e.token)}});case 3:n.sent,e.clearState(),e.getBanners(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},createBanner:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$post("/settings/solar/banner",t,{headers:{authorization:"Bearer ".concat(e.token)}});case 3:n.sent,e.getBanners(),e.clearState(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},getBanners:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/settings/solar/banner",{headers:{authorization:"Bearer ".concat(t.token)}});case 3:n=e.sent,t.banners=n.data.banners,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteBanner:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$delete("/settings/solar/banner/".concat(t),{headers:{authorization:"Bearer ".concat(e.token)}});case 3:e.getBanners(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0.response);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}},mounted:function(){this.getUserDetails()}},o=(n(438),n(61)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-dropdown solar-set w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"5461f1b7-bfbc-cb00-e20d-bdf154e679a5"}},[e("div",{staticClass:"dropdown-toggle-3 w-dropdown-toggle",on:{click:function(e){t.galleryState=!t.galleryState}}},[e("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),e("div",{staticClass:"subheading gray tin"},[t._v("CCTV Page Settings")])]),t._v(" "),t.galleryState?e("nav",{staticClass:"dropdown-list-3 w-dropdown-list"},[e("div",{staticClass:"admin-section"},[t._m(0),t._v(" "),e("div",{staticClass:"admin-section-body"},[e("div",{staticClass:"overflow"},[e("div",{staticClass:"tb-holder"},[e("table",{staticClass:"user-tb"},[t._m(1),t._v(" "),e("tbody",t._l(t.banners,(function(l,r){return e("tr",{key:l._id,staticClass:"flex-tb"},[e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"custom-txt-sm gray"},[t._v(t._s(r+1))])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.image.filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"custom-txt-sm gray"},[t._v("\n                      "+t._s(l.title)+"\n                    ")])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"custom-txt-sm gray"},[t._v("\n                      "+t._s(l.description)+"\n                    ")])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"custom-txt-sm gray"},[l.status?e("span",{staticClass:"draft app w-button",on:{click:function(e){return t.bannerStatus(l._id,!1)}}},[t._v("Approved")]):e("span",{staticClass:"draft w-button",on:{click:function(e){return t.bannerStatus(l._id,!0)}}},[t._v("Draft")])])]),t._v(" "),e("td",{staticClass:"all noPoint act"},[e("img",{staticClass:"sm del",attrs:{src:n(362),loading:"lazy",alt:""},on:{click:function(e){return t.setEditBanner(l)}}}),e("img",{staticClass:"sm",attrs:{src:n(358),loading:"lazy",alt:""},on:{click:function(e){return t.deleteBanner(l._id)}}})])])})),0)])])]),t._v(" "),e("div",{staticClass:"banner-form-wrapper w-form"},[e("div",{staticClass:"error-holder"},[e("transition",{attrs:{name:"fade"}},[t.errorShow?e("div",{staticClass:"w-form-fail"},[e("div",[t._v("\n                  "+t._s(t.error)+"\n                ")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.successShow?e("div",{staticClass:"w-form-done"},[e("div",[t._v(t._s(t.success))])]):t._e()])],1),t._v(" "),e("div",{staticClass:"banner-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bannerTitle,expression:"bannerTitle"}],staticClass:"banner-inp w-input",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.bannerTitle},on:{input:function(e){e.target.composing||(t.bannerTitle=e.target.value)}}}),t._v(" "),e("div",{staticClass:"div-block-95"},[e("label",{staticClass:"upload"},[e("div",{staticClass:"text-block-3"},[t._v("Upload Banner")]),t._v(" "),e("img",{staticClass:"upload-icon",attrs:{src:n(383),loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"hideInput",attrs:{id:"receipt",type:"file"},on:{change:function(e){return t.setBanner(e)}}})])]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bannerDescription,expression:"bannerDescription"}],staticClass:"textarea-4 w-input",attrs:{placeholder:"Banner description",maxlength:"5000",required:""},domProps:{value:t.bannerDescription},on:{input:function(e){e.target.composing||(t.bannerDescription=e.target.value)}}}),t._v(" "),e("div",{staticClass:"btn-holder"},[e("input",{staticClass:"custom-btn blue w-button",attrs:{type:"submit",value:"Save","data-wait":"Please wait..."},on:{click:t.processData}}),t._v(" "),e("input",{staticClass:"custom-btn blue w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."},on:{click:t.clearState}})])])])])]),t._v(" "),e("div",{staticClass:"admin-section"},[t._m(2),t._v(" "),e("div",{staticClass:"admin-section-body"},[e("div",{staticClass:"overflow"},[e("div",{staticClass:"tb-holder"},[e("table",{staticClass:"user-tb"},[t._m(3),t._v(" "),e("tbody",t._l(t.galleryArray,(function(l){return e("tr",{key:l._id,staticClass:"flex-tb"},[e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.gallery[0].filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.gallery[1].filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.gallery[2].filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.gallery[3].filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.gallery[4].filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint"},[e("div",{staticClass:"banner-sm"},[e("img",{staticClass:"responsiveImg",attrs:{src:"http://localhost:5000/uploads/".concat(l.gallery[5].filename),alt:""}})])]),t._v(" "),e("td",{staticClass:"all noPoint act"},[e("img",{staticClass:"sm",attrs:{src:n(358),loading:"lazy",alt:""},on:{click:function(e){return t.deleteGallery(l._id)}}})])])})),0)])])]),t._v(" "),e("div",{staticClass:"banner-form-wrapper w-form"},[e("div",{staticClass:"error-holder"},[e("transition",{attrs:{name:"fade"}},[t.galleryErrorShow?e("div",{staticClass:"w-form-fail"},[e("div",[t._v("\n                  "+t._s(t.galleryError)+"\n                ")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.gallerySuccessShow?e("div",{staticClass:"w-form-done"},[e("div",[t._v(t._s(t.gallerySuccess))])]):t._e()])],1),t._v(" "),e("div",{staticClass:"banner-form"},[e("div",{staticClass:"div-block-95 wide"},[e("label",{staticClass:"upload"},[e("div",{staticClass:"text-block-3"},[t._v("Select 6 Images")]),t._v(" "),e("img",{staticClass:"upload-icon",attrs:{src:n(383),loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"hideInput",attrs:{id:"receipt",type:"file",multiple:""},on:{change:function(e){return t.setGalleryFiles(e)}}})])]),t._v(" "),e("div",{staticClass:"btn-holder"},[e("input",{staticClass:"custom-btn blue w-button",attrs:{type:"submit",value:"Save","data-wait":"Please wait..."},on:{click:t.processGalleryData}}),t._v(" "),e("input",{staticClass:"custom-btn blue w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."},on:{click:t.clearGalleryState}})])])])])])]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"admin-section-head"},[t("h2",{staticClass:"open-title small"},[this._v("BANNER SETTINGS")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("S/N")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Banner")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Title")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Description")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Status")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Action")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"admin-section-head"},[t("h2",{staticClass:"open-title small"},[this._v("LATEST WORK")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Image 1")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Image 2")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Image 3")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Image 4")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Image 5")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Image 6")])]),t._v(" "),e("th",{staticClass:"all"},[e("div",{staticClass:"subheading small"},[t._v("Action")])])])])}],!1,null,null,null);e.default=component.exports}}]);