(function(t){function e(e){for(var o,i,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/evstegney/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1771:function(t,e,a){var o={"./404-page-not-found.png":"59a1"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="1771"},"31f2":function(t,e,a){"use strict";var o=a("b278"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=a("2877"),c={},l=Object(i["a"])(c,n,r,!1,null,null,null),s=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{staticStyle:{"text-align":"center"}},[a("v-layout",[a("v-flex",[a("v-toolbar",{staticStyle:{"border-bottom-right-radius":"25px","border-bottom-left-radius":"25px"}},[a("v-spacer",[t._v("Кака-я то фигня от Евстегнюгера Чачлыка")])],1),a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{fixed:"",fab:"",bottom:"",right:"",color:"#597da3"},on:{click:t.getAllPhotos}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-refresh")])],1),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),a("v-speed-dial",{attrs:{left:"",bottom:"",fixed:"",direction:"top","open-on-hover":!1,transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{fab:"",color:"#597da3"},model:{value:t.setting_fab,callback:function(e){t.setting_fab=e},expression:"setting_fab"}},[a("v-icon",{attrs:{color:"white"}},[t._v("fa-bars")])],1)]},proxy:!0}]),model:{value:t.setting_fab,callback:function(e){t.setting_fab=e},expression:"setting_fab"}},[a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{fab:"",small:"",color:"success"},on:{click:t.triggerFileUploads}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-plus")])],1),a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{fab:"",small:"",color:"info"},on:{click:function(e){t.dialog_profile=!0}}},[a("v-icon",[t._v("mdi-account")])],1),a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{fab:"",small:"",color:"grey"},on:{click:function(e){t.dialog_settings=!0}}},[a("v-icon",[t._v("fa-cog")])],1)],1),a("div",{staticClass:"bg-light",staticStyle:{"border-radius":"25px",display:"inline-flex","flex-wrap":"wrap"}},t._l(t.photos,(function(e,o){return a("v-col",{key:o},[a("v-card",t._g({staticClass:"center-pic",staticStyle:{"border-radius":"25px","padding-bottom":"5px","padding-top":"5px"},attrs:{"max-width":"150"}},t.on),[a("v-img",{staticClass:"center-pic",staticStyle:{"border-radius":"25px"},attrs:{width:"150px",height:"150px",src:t.photos.length>1?t.getImgUrl(e.url):e.url},on:{mouseover:function(a){return t.setModalInfo(e.url,e.text)},click:function(e){t.dialog=!0}}})],1),a("div",{staticStyle:{"justify-content":"center","border-radius":"25px","padding-top":"2px"}},[a("v-btn",{staticStyle:{"font-size":"1rem",right:"2px"},attrs:{rounded:""},on:{click:function(a){t.isNull(e.like)&&t.setLikeOnPhoto_null(e,o)}}},[a("v-icon",{attrs:{color:t.isNull(e.like)?"grey":e.like?"pink":"grey"}},[t._v("mdi-heart")]),t._v(" "+t._s(t.abbreviateNumber(e.count_like))+" ")],1),a("v-btn",{staticStyle:{"font-size":"1rem",left:"2px"},attrs:{rounded:""},on:{click:function(a){t.isNull(e.like)&&t.setDisOnPhoto_null(e,o)}}},[a("v-icon",{attrs:{color:t.isNull(e.like)?"grey":e.like?"grey":"#4FC3F7"}},[t._v("mdi-heart-broken")]),t._v(" "+t._s(t.abbreviateNumber(e.count_dis))+" ")],1)],1)],1)})),1)],1)],1),a("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog_profile,callback:function(e){t.dialog_profile=e},expression:"dialog_profile"}},[a("v-card",[a("v-toolbar",{staticStyle:{"border-bottom-right-radius":"25px","border-bottom-left-radius":"25px"}},[a("v-card-actions",[a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{depressed:"",fab:"",small:"",left:"",color:this.$vuetify.theme.dark?"white":"#c0c0c0"},on:{click:function(e){t.dialog_profile=!1}}},[a("v-icon",{attrs:{color:this.$vuetify.theme.dark?"black":"white"}},[t._v("mdi-arrow-left")])],1)],1),a("v-toolbar-title",[t._v("Профиль")])],1),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{staticStyle:{"border-radius":"100%"},attrs:{src:this.menu_photo,width:"150",height:"150"}})],1),a("v-col",{attrs:{cols:"auto"}},[a("v-row",{staticClass:"flex-column"},[a("v-card-text",{staticStyle:{"font-size":"2rem"}},[t._v(" "+t._s(this.name)+" ")]),a("v-subheader",[t._v("АРАБ ПРИВЕТ")])],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog_settings,callback:function(e){t.dialog_settings=e},expression:"dialog_settings"}},[a("v-card",[a("v-toolbar",{staticStyle:{"border-bottom-right-radius":"25px","border-bottom-left-radius":"25px"}},[a("v-card-actions",[a("v-btn",{staticStyle:{opacity:"0.9"},attrs:{depressed:"",fab:"",small:"",left:"",color:this.$vuetify.theme.dark?"white":"#c0c0c0"},on:{click:function(e){t.dialog_settings=!1}}},[a("v-icon",{attrs:{color:this.$vuetify.theme.dark?"black":"white"}},[t._v("mdi-arrow-left")])],1)],1),a("v-toolbar-title",[t._v("Настройки")])],1),a("v-container",[a("v-subheader",{staticClass:"pl-0"},[t._v("Количество загружаемых фотографий: "+t._s(t.count))]),a("v-slider",{attrs:{min:"10",max:"35"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),a("v-switch",{attrs:{label:"Случайные фотографии"},model:{value:t.getRandomPhotos,callback:function(e){t.getRandomPhotos=e},expression:"getRandomPhotos"}}),a("v-switch",{attrs:{value:this.$vuetify.theme.dark,label:"Ночноый режим","append-icon":"fa-moon-o"},on:{change:t.SetNightMode}}),a("v-switch",{attrs:{label:"жопа"}}),a("v-spacer",[a("v-img",{staticClass:"center-pic",attrs:{src:"https://vk.com/sticker/1-15597-128",width:"150",height:"150"}}),a("v-btn",{staticStyle:{"border-radius":"10px"},attrs:{color:"#c0c0c0"}},[t._v("Сохранить")])],1)],1)],1)],1),a("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{staticStyle:{"border-bottom-right-radius":"25px","border-bottom-left-radius":"25px"}},[a("v-card-actions",[a("v-btn",{staticStyle:{opacity:"0.8"},attrs:{depressed:"",fab:"",small:"",left:"",color:this.$vuetify.theme.dark?"white":"#c0c0c0"},on:{click:function(e){t.dialog=!1}}},[a("v-icon",{attrs:{color:this.$vuetify.theme.dark?"black":"white"}},[t._v("mdi-arrow-left")])],1)],1),a("v-toolbar-title",[t._v("Фотография")])],1),a("v-container",[a("v-img",{staticClass:"center-pic",staticStyle:{"border-radius":"5px",width:"85%"},attrs:{src:t.photos.length>1?t.getImgUrl(t.image):t.image,contain:""}}),a("br"),a("p",[t._v(t._s(t.text_modal))])],1)],1)],1),a("v-snackbar",{attrs:{bottom:"",timeout:3e3},model:{value:t.alert_upload,callback:function(e){t.alert_upload=e},expression:"alert_upload"}},[t._v(" "+t._s(t.alert_upload_text)+" "),a("v-btn",{attrs:{text:"",color:"pink"},on:{click:function(e){t.alert_upload=!1}}},[t._v(" Закрыть ")])],1)],1)],1)},p=[],f=(a("99af"),a("b0c0"),a("b680"),a("542d"),a("d3b7"),a("acd8"),a("ac1f"),a("5319"),a("841c"),a("96cf"),a("89ba")),v=a("bc3a"),h=a.n(v),b=a("c45e"),g=a.n(b),m="http://127.0.0.1:5000",_=h.a.create({baseURL:"".concat(m,"/api")}),y=window.location.search,x={name:"app",data:function(){return{setting_fab:!1,token:"",name:"",current_id:null,menu_photo:"",image:"photo-1.jpg",text_modal:1,count:20,photos:[],dialog:!1,dialog_settings:!1,dialog_profile:!1,msg:null,loading_service:!0,alert_upload:!1,getRandomPhotos:!0,alert_upload_text:"Успешно"}},methods:{isNull:function(t){return null===t},getImgUrl:function(t){return m+t},setModalInfo:function(t,e){this.image=t,this.text_modal=e},setLikeOnPhoto_null:function(t,e){this.photos[e].count_like+=1,this.photos[e].like=!0,this.setLikeDisApi(t.id,"like")},setDisOnPhoto_null:function(t,e){this.photos[e].count_dis+=1,this.photos[e].like=!1,this.setLikeDisApi(t.id,"dis")},SetNightMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},getAllPhotos:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.get("/getPhoto".concat(y).concat(y?"&":"?","count=").concat(this.count)).then((function(t){e.photos=t.data}));case 3:t.next=10;break;case 5:t.prev=5,t.t0=t["catch"](0),this.photos=[{url:a("59a1"),id:null,like:!0,count_like:-1,count_dis:-1,uuid:123,text:"Если ты это видишь, значит возникли технические шоколадки"}],this.alert_upload_text="Ошибка при обновлении.",this.alert_upload=!0;case 10:case"end":return t.stop()}}),t,this,[[0,5]])})));function e(){return t.apply(this,arguments)}return e}(),setLikeDisApi:function(t,e){var a=this;_.get("/setPhotoLikeDis".concat(y).concat(y?"&":"?","id=").concat(t,"&").concat(e,"=1")).then((function(t){a.msg=t})).catch((function(){}))},abbreviateNumber:function(t){var e=t;if(t>=1e3){for(var a=["","k","m","b","t"],o=Math.floor((""+t).length/3),n="",r=2;r>=1;r--){n=parseFloat((0!=o?t/Math.pow(1e3,o):t).toPrecision(r));var i=(n+"").replace(/[^a-zA-Z 0-9]+/g,"");if(i.length<=2)break}n%1!=0&&(n=n.toFixed(1)),e=n+a[o]}return e},triggerFileUploads:function(){this.$refs.fileInput.click()},onFileChange:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.target.files[0],o=new FormData,o.append("photo",a),t.prev=3,t.next=6,fetch("".concat(m,"/api/UploadImage").concat(y),{method:"POST",body:o});case 6:this.alert_upload_text="Фотография загруженаю.",t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),this.alert_upload_text="Ошибка при загрузке.";case 12:return t.prev=12,this.alert_upload=!0,t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[3,9,12,15]])})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;g.a.sendPromise("VKWebAppGetUserInfo",{}).then((function(e){t.name=e.first_name+" "+e.last_name,t.current_id=e.id,t.menu_photo=e.photo_max_orig}))},created:function(){this.getAllPhotos()}},k=x,w=(a("31f2"),a("6544")),S=a.n(w),V=a("7496"),O=a("8336"),P=a("b0af"),C=a("99d9"),j=a("62ad"),$=a("a523"),I=a("169a"),N=a("0e8f"),A=a("132d"),U=a("adda"),D=a("a722"),F=a("0fd9"),M=a("ba0d"),R=a("2db4"),L=a("2fa4"),T=a("c73b"),E=a("e0c7"),z=a("b73d"),B=a("71d9"),J=a("2a7f"),K=Object(i["a"])(k,d,p,!1,null,null,null),W=K.exports;S()(K,{VApp:V["a"],VBtn:O["a"],VCard:P["a"],VCardActions:C["a"],VCardText:C["b"],VCol:j["a"],VContainer:$["a"],VDialog:I["a"],VFlex:N["a"],VIcon:A["a"],VImg:U["a"],VLayout:D["a"],VRow:F["a"],VSlider:M["a"],VSnackbar:R["a"],VSpacer:L["a"],VSpeedDial:T["a"],VSubheader:E["a"],VSwitch:z["a"],VToolbar:B["a"],VToolbarTitle:J["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"border border-white rounded",staticStyle:{padding:"10px","text-align":"center"}},[a("v-content",[a("v-btn",{attrs:{rounded:"",block:""}},[t._v("КАКАЯ ТО ФИГНЯ ОТ ЕВСТЕГНЕЯ ЧАЧЛЫКА")]),a("br"),a("v-card",{staticStyle:{padding:"10px","border-radius":"25px"}},[a("v-btn",{staticClass:"text-light",attrs:{small:"",rounded:"",color:"grey",dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" Меню ")])],1),a("br"),a("div",{staticClass:"bg-light",staticStyle:{"border-radius":"25px"}})],1)],1)},Z=[],q=(h.a.create({baseURL:"http://127.0.0.1:5000/api"}),{name:"app",data:function(){return{token:"",name:""}},methods:{isNull:function(t){return null===t},getImgUrl:function(t){return a("1771")("./"+t)}},mounted:function(){}}),H=q,Q=a("a75b"),X=Object(i["a"])(H,G,Z,!1,null,null,null),Y=X.exports;S()(X,{VApp:V["a"],VBtn:O["a"],VCard:P["a"],VContent:Q["a"]}),o["a"].use(u["a"]);var tt=[{path:"/",name:"home",component:W},{path:"/settings",name:"Settings",component:Y}],et=new u["a"]({routes:tt}),at=et,ot=a("f309");a("bf40"),a("95ed");o["a"].use(ot["a"]);var nt=new ot["a"]({icons:{iconfont:"fa"}});g.a.send("VKWebAppInit",{}),o["a"].config.productionTip=!1,new o["a"]({router:at,vuetify:nt,render:function(t){return t(s)}}).$mount("#app")},"59a1":function(t,e,a){t.exports=a.p+"img/404-page-not-found.e1855ec5.png"},b278:function(t,e,a){}});
//# sourceMappingURL=app.7f9531a2.js.map