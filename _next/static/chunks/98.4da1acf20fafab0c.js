(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{4098:function(t,e){var r,o="undefined"!=typeof self?self:this,n=function(){function t(){this.fetch=!1,this.DOMException=o.DOMException}return t.prototype=o,new t}();r=n,function(t){var e={searchParams:"URLSearchParams"in r,iterable:"Symbol"in r&&"iterator"in Symbol,blob:"FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in r,arrayBuffer:"ArrayBuffer"in r};if(e.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function a(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function h(t){this.map={},t instanceof h?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=u(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t){if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else{var r;e.arrayBuffer&&e.blob&&(r=t)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):e.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||n(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t)}}else this._bodyText="";!this.headers.get("content-type")&&("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t,e,r,o=f(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=u(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},e.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=i(t),e=s(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[i(t)]},h.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},h.prototype.set=function(t,e){this.map[i(t)]=s(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),a(t)},h.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),a(t)},h.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),a(t)},e.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(t,e){var r,o,n=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",(e.headers||!this.headers)&&(this.headers=new h(e.headers)),this.method=(o=(r=e.method||this.method||"GET").toUpperCase(),l.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function m(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},p.call(y.prototype),p.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];m.redirect=function(t,e){if(-1===w.indexOf(e))throw RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.DOMException=r.DOMException;try{new t.DOMException}catch(E){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function v(r,o){return new Promise(function(n,i){var s=new y(r,o);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function f(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new m(o,r))},a.onerror=function(){i(TypeError("Network request failed"))},a.ontimeout=function(){i(TypeError("Network request failed"))},a.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&e.blob&&(a.responseType="blob"),s.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",f),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",f)}),a.send(void 0===s._bodyInit?null:s._bodyInit)})}v.polyfill=!0,r.fetch||(r.fetch=v,r.Headers=h,r.Request=y,r.Response=m),t.Headers=h,t.Request=y,t.Response=m,t.fetch=v,Object.defineProperty(t,"__esModule",{value:!0})}({}),n.fetch.ponyfill=!0,delete n.fetch.polyfill,(e=n.fetch).default=n.fetch,e.fetch=n.fetch,e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response,t.exports=e}}]);