!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,c=i.length;s<c;s++,o++)r[o]=i[s];return r},o=function(){function e(e,t){this.prefixText="",this.prefixStyle="background: grey; color: white",this.debug=!1,this.prefixText="%c"+e,this.debug=void 0===t||t}return e.prototype.group=function(){return this.debug&&console.group(),this},e.prototype.groupEnd=function(){return this.debug&&console.groupEnd(),this},e.prototype.table=function(e){return this.debug&&console.table(e),this},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.debug&&console.log.apply(console,r([this.prefixText,this.prefixStyle],e)),this},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.debug&&console.warn.apply(console,r([this.prefixText,this.prefixStyle],e)),this},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.debug&&console.error.apply(console,r([this.prefixText,this.prefixStyle],e)),this},e}(),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c="http://localhost:3000",a=new o("Service Worker",!0),u=function(){function e(){this.STATIC_CACHE_KEY=null,this.DYNAMIC_CACHE_KEY=null,this.staticPaths=[c+"/_nuxt/commons.app.js",c+"/_nuxt/vendors.app.js",c+"/_nuxt/app.js",c+"/_nuxt/pages_index.js",c+"/icon-192.png",c+"/fonts/IndieFlower-Regular.ttf",c+"/favicon.ico","https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap","https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css","https://unpkg.com/wired-elements@2.0.5/lib/wired-elements-bundled.js"],this.excludePaths=["chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/inject.js","chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/build/backend.js"],this.STATIC_CACHE_KEY="static-"+Math.floor(1048575*(1+Math.random())).toString(16).substring(1),this.DYNAMIC_CACHE_KEY="dynamic"}return Object.defineProperty(e.prototype,"cacheToKeep",{get:function(){return[this.STATIC_CACHE_KEY,this.DYNAMIC_CACHE_KEY]},enumerable:!0,configurable:!0}),e.prototype.fetchAndUpdateCache=function(e,t){return i(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),[4,fetch(e)];case 1:return n=r.sent(),t?[4,caches.open(t)]:[3,3];case 2:r.sent().put(e,n.clone()),a.log("成功更新cache: "+t+"，url: "+e.url),r.label=3;case 3:return[2,n];case 4:throw r.sent(),a.log("無法fetch並更新cache: "+t+"，url: "+e.url),new Error;case 5:return[2]}}))}))},e.prototype.cacheStatic=function(){return i(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,caches.open(this.STATIC_CACHE_KEY)];case 1:return e.sent().addAll(this.staticPaths),a.log("成功新增static cache"),[2]}}))}))},e.prototype.clearOldCache=function(){return i(this,void 0,void 0,(function(){var e,t=this;return s(this,(function(n){switch(n.label){case 0:return[4,caches.keys()];case 1:return e=n.sent(),[2,Promise.all(e.map((function(e){if(!t.cacheToKeep.includes(e))return a.log("成功刪除cache: "+e),caches.delete(e)})))]}}))}))},e.prototype.respondWithCacheOrFetch=function(e){return i(this,void 0,void 0,(function(){var t,n,r,o,i;return s(this,(function(s){switch(s.label){case 0:switch(t=null,!0,!0){case this.staticPaths.includes(e.url):return[3,1];case this.excludePaths.includes(e.url):return[3,3]}return[3,7];case 1:return t=this.STATIC_CACHE_KEY,[4,caches.match(e)];case 2:return n=s.sent(),this.fetchAndUpdateCache(e,t),a.log("req.url為static名單，使用cache respond",e.url),[2,n];case 3:t=null,s.label=4;case 4:return s.trys.push([4,6,,7]),[4,this.fetchAndUpdateCache(e,t)];case 5:return o=s.sent(),a.log("req.url為exclude名單，使用fetch respond",e.url),[2,o];case 6:return r=s.sent(),a.log("req.url為exclude名單，無法使用fetch respond。url: "+e.url,e,r),[2,new Response];case 7:t=this.DYNAMIC_CACHE_KEY,s.label=8;case 8:return s.trys.push([8,10,,12]),[4,this.fetchAndUpdateCache(e,t)];case 9:return o=s.sent(),a.log("req.url為dynamic名單，使用fetch respond",e.url),[2,o];case 10:return s.sent(),[4,caches.match(e)];case 11:return i=s.sent(),a.log("req.url為dynamic名單，使用cache respond",e.url),[2,i];case 12:return[2]}}))}))},e}();let l,f;const h=new WeakMap,p=new WeakMap,d=new WeakMap,b=new WeakMap,y=new WeakMap;let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return p.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(f||(f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(x(this),t),m(h.get(this))}:function(...t){return m(e.apply(x(this),t))}:function(t,...n){const r=e.call(x(this),t,...n);return d.set(r,t.sort?t.sort():[t]),m(r)}}function w(e){return"function"==typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(p.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});p.set(e,t)}(e),t=e,(l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,v):e);var t}function m(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(m(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),y.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=w(e);return t!==e&&(b.set(e,t),y.set(t,e)),t}const x=e=>y.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),c=m(s);return r&&s.addEventListener("upgradeneeded",e=>{r(m(s.result),e.oldVersion,e.newVersion,m(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),c.then(e=>{i&&e.addEventListener("close",()=>i()),o&&e.addEventListener("versionchange",()=>o())}).catch(()=>{}),c}const E=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],_=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_.get(t))return _.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!E.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;r&&(s=s.index(t.shift()));const c=s[n](...t);return o&&await i.done,c};return _.set(t,i),i}v=(e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)}))(v);var B=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},I=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},j=new o("IDB",!1),T=function(){function e(){this.BG_SYNC="bg-sync",this.idb=null}return e.prototype.initIDB=function(){return B(this,void 0,void 0,(function(){var e,t=this;return I(this,(function(n){switch(n.label){case 0:return e=this,[4,S(this.BG_SYNC,1,{upgrade:function(e){e.createObjectStore(t.BG_SYNC,{keyPath:"id",autoIncrement:!0})}})];case 1:return e.idb=n.sent(),j.log("IDB成功init"),[2]}}))}))},e.prototype.registerBgSync=function(e){return B(this,void 0,void 0,(function(){var t,n,r,o,i,s;return I(this,(function(c){switch(c.label){case 0:return this.idb?[3,2]:[4,this.initIDB()];case 1:c.sent(),c.label=2;case 2:return t=e.method,n=e.url,r=e.headers,[4,e.text()];case 3:return o=c.sent(),i=o?JSON.parse(o):null,(s=this.idb.transaction(this.BG_SYNC,"readwrite")).store.add({method:t,url:n,headers:{"content-type":r.get("content-type")},body:i}),[4,s.done];case 4:return c.sent(),self.registration.sync.register("START_BG_SYNC"),j.log("成功註冊背景同步作業").table({method:t,url:n,body:i}),[2,new Response(JSON.stringify({ok:!1,statusKey:"REGISTER_BG_SYNC",message:"應用離線中，將請求暫存到IDB等待網路重新連接"}))]}}))}))},e.prototype.fetchOrRegisterBgSync=function(e){return B(this,void 0,void 0,(function(){return I(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,fetch(e.clone())];case 1:return[2,t.sent()];case 2:return t.sent(),[4,this.registerBgSync(e.clone())];case 3:return[2,t.sent()];case 4:return[2]}}))}))},e.prototype.startBgSync=function(){return B(this,void 0,void 0,(function(){var e,t=this;return I(this,(function(n){switch(n.label){case 0:return[4,this.idb.getAll(this.BG_SYNC)];case 1:return e=n.sent(),[4,Promise.all(e.map((function(e){return B(t,void 0,void 0,(function(){var t,n,r,o,i,s,c,a,u,l;return I(this,(function(f){switch(f.label){case 0:t=e.id,n=e.method,r=e.url,o=e.headers,i=e.body,f.label=1;case 1:return f.trys.push([1,5,,6]),s={method:n,headers:o},i&&(s.body=JSON.stringify(i)),[4,fetch(r,s)];case 2:return[4,f.sent().json()];case 3:if(c=f.sent(),a=c.error,u=c.message,a)throw new Error(u);return[4,this.idb.delete(this.BG_SYNC,t)];case 4:return f.sent(),j.log("成功執行背景同步作業").table({method:n,url:r,body:i}),[3,6];case 5:return l=f.sent(),j.error("背景同步作業執行失敗",l).table({method:n,url:r,body:i}),[3,6];case 6:return[2]}}))}))})))];case 2:return n.sent(),[2]}}))}))},e}(),A=function(){return(A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},D=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},P=new o("Notification",!1),O=function(){function e(){}return e.prototype.show=function(e){var t=e.title,n=e.body,r=e.image,o=e.data,i=void 0===o?{}:o;self.registration.showNotification(t,{body:n,image:r,data:A({},i),icon:"/assets/favicon.ico",badge:"/assets/icon-96.png",vibrate:[100,500,100,500,100,100,500],actions:[{action:"confirm",title:"打開看看"},{action:"cancel",title:"取消"}],tag:"test"}),P.log("通知內容:").table({title:t,body:n,image:r,data:i})},e.prototype.handleClick=function(e){return D(this,void 0,void 0,(function(){var t,n,r,o;return N(this,(function(i){switch(i.label){case 0:return t=e.action,P.log("使用者點擊: "+t),"cancel"===t?[2]:(n=e.notification.data.url,[4,self.clients.matchAll()]);case 1:return r=i.sent(),(o=r.find((function(e){return"visible"===e.visibilityState})))?(o.navigate(n),o.focus()):self.clients.openWindow(n),[2]}}))}))},e}(),Y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},M=(new u,new T),K=new O;new o("Service Worker").log("Service worker 註冊完畢"),self.addEventListener("install",(function(e){})),self.addEventListener("activate",(function(e){})),self.addEventListener("fetch",(function(e){e.respondWith(fetch(e.request))})),self.addEventListener("sync",(function(e){"START_BG_SYNC"===e.tag&&M.startBgSync()})),self.addEventListener("push",(function(e){var t=JSON.parse(e.data.text());K.show(t)})),self.addEventListener("notificationclick",(function(e){return Y(void 0,void 0,void 0,(function(){return L(this,(function(t){return e.waitUntil(K.handleClick(e)),[2]}))}))}))}]);