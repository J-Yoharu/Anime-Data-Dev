!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return i}));var i={search:function(){return o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("https://api.jikan.moe/v3/search/anime?q=".concat(document.getElementById("inputAnime").value));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},top:function(){return o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("https://api.jikan.moe/v3/top/anime/1/tv");case 3:return t=e.sent,e.abrupt("return",t.data.top);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},week:function(){return o(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(t=s()).toLowerCase(),e.next=5,c(a(s()));case 5:return n=e.sent,e.abrupt("return",n.data[t]);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},data:function(e){return o(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("https://api.jikan.moe/v3/anime/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},gender:function(){return o(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={mode:"no-cors"},e.next=4,c("https://api.jikan.moe/v3/genre/anime/1/",t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}};function a(e){return"https://api.jikan.moe/v3/schedule/".concat(e)}function c(e){return u.apply(this,arguments)}function u(){return(u=o(regeneratorRuntime.mark((function e(t){var n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",axios.get(t,n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){var e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],t=new Date;return t=t.getDay(),[1,2,3,4,5,6,0].filter((function(n,r){t==n&&(e=e[r])})),e}},function(e,t,n){n(2),n(3),e.exports=n(4)},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n,r){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function l(){}function d(){}function p(){}var m={};m[o]=function(){return this};var f=Object.getPrototypeOf,h=f&&f(f(A([])));h&&h!==t&&n.call(h,o)&&(m=h);var g=p.prototype=l.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function A(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return d.prototype=g.constructor=p,p.constructor=d,p[a]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new y(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";n.r(t),n.d(t,"toggleSearchBar",(function(){return f})),n.d(t,"setSearchArea",(function(){return h}));var r=n(0);window.tooltipCopy=function(e){$(".card-title").attr("title","Copiado!").tooltip("_fixTitle"),$("#"+e.id).tooltip("show"),$(".card-title").attr("title","Clique para copiar o título").tooltip("_fixTitle")};var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];try{e.forEach((function(e,r){var o=document.createElement("div");if(o.setAttribute("class","item card d-inline-flex m-2 rounded shadow-lg border"),o.setAttribute("style","width:13rem;height:16rem;"),"Carregando..."==e.title){var i=document.createElement("div");i.setAttribute("class","card-img-top d-flex align-items-center"),i.setAttribute("style","height:13rem");var a=document.createElement("div");a.setAttribute("class","loader"),i.append(a),o.append(i)}else{var c=document.createElement("img");c.setAttribute("class","card-img-top"),c.setAttribute("src",e.image_url),c.setAttribute("style","height:13rem");var u=document.createElement("a");u.setAttribute("id",e.mal_id),u.setAttribute("target","_blank"),u.setAttribute("href","info.html"),u.setAttribute("onclick","releaseMal(this)"),u.append(c),o.append(u)}if("triangle"==t){var s=document.createElement("span");s.setAttribute("class","position-absolute"),s.setAttribute("style","right:0px;top:0px; width: 0;height: 0;border-top: 30px solid #007bff;border-right: 30px solid #007bff;border-bottom:30px solid transparent;border-left: 30px solid transparent;"),o.append(s);var l=document.createElement("span");l.setAttribute("class","position-absolute text-white h1"),l.setAttribute("style","right:5px;top:-10px;font-family: 'Tangerine', serif;"),l.innerHTML=r+1,o.append(l)}if(null!=e.score&&"triangle"!=t){var d=document.createElement("span");d.setAttribute("class","badge badge-primary position-absolute p-1 rounded"),d.innerHTML="Score: "+e.score,o.append(d)}var p=document.createElement("div");p.setAttribute("class","card-body p-0"),p.setAttribute("style","");var m=document.createElement("p");m.setAttribute("class","card-title mt-2 text-center m-0"),m.setAttribute("data-toggle","tooltip"),m.setAttribute("style","text-overflow:ellipsis;overflow:hidden;white-space:nowrap"),m.setAttribute("data-placement","bottom"),m.setAttribute("data-original-title","Clique para copiar o título"),m.setAttribute("onclick","tooltipCopy(this)"),m.setAttribute("id","t"+e.mal_id),m.setAttribute("data-clipboard-text",e.title),m.innerHTML=e.title,p.append(m),o.append(p),n[r]=o}))}catch(e){console.log("Provavelmente não foi passado o array como parâmetro, revise seu código com o erro: "+e)}return n},i=0;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loader",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Loader",r=arguments.length>3?arguments[3]:void 0;document.getElementById(e)&&(document.getElementById(e).innerHTML=""),"loader"==t&&(t=[{score:"...",title:"Carregando...",mal_id:"",image_url:""},{score:"...",title:"Carregando...",mal_id:"",image_url:""},{score:"...",title:"Carregando...",mal_id:"",image_url:""},{score:"...",title:"Carregando...",mal_id:"",image_url:""},{score:"...",title:"Carregando...",mal_id:"",image_url:""}]),$((function(){$('[data-toggle="tooltip"]').tooltip()})),i+=1;var a=document.createElement("div");a.setAttribute("class","row");var c=document.createElement("div");c.setAttribute("class","col"),c.setAttribute("id","title"+i);var u=document.createElement("h3");u.setAttribute("class","p-0 mb-0"),u.setAttribute("style","color:#001829;"),u.innerHTML=n,a.append(c),c.append(u),document.getElementById(e).append(c);var s=document.createElement("div");s.setAttribute("class","carousel"+i+" owl-carousel owl-theme text-center");var l=document.createElement("div");l.setAttribute("class","btnCarousel next position-absolute d-flex align-items-center mt-4"),l.setAttribute("style","right:0;top:0;height:16rem;width:3rem;"),l.setAttribute("id","Next"+i);var d=document.createElement("span");d.setAttribute("class","fa fa-3x fa-arrow-circle-right p-1"),d.setAttribute("style","opacity: 0.8;"),l.append(d);var p=document.createElement("div");p.setAttribute("class","btnCarousel prev position-absolute d-flex align-items-center mt-4"),p.setAttribute("style","left:0;top:0;height:16rem;width:3rem;"),p.setAttribute("id","Prev"+i);var m=document.createElement("span");m.setAttribute("class","fa fa-3x fa-arrow-circle-left p-1"),m.setAttribute("style","opacity: 0.8;"),p.append(m),"Animes mais assistidos"==n&&(ranker=!0),document.getElementById("title"+i).append(s);try{o(t,r).forEach((function(e,t){s.append(e)}))}catch(e){console.log("Parece que seu array está sem valor algum!")}var f=$(".carousel"+i);f.owlCarousel({loop:!0,items:7,nav:!1,dots:!1,dotsEach:!1,dotsData:!1,animateIn:!0,navElement:"span",itemElement:"span",responsive:{0:{items:1},600:{items:2},800:{items:3},1e3:{items:4},1100:{items:4},1200:{items:5},1400:{items:5}}}),s.append(p),s.append(l),$("#Next"+i).click((function(){f.trigger("next.owl.carousel")})),$("#Prev"+i).click((function(){f.trigger("prev.owl.carousel")}))}window.createCarousel=a;function c(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){c(i,r,o,a,u,"next",e)}function u(e){c(i,r,o,a,u,"throw",e)}a(void 0)}))}}localStorage.sco=10;var s=[];function l(){return(l=u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return createCarousel("containerCarousel1","loader"),createCarousel("containerCarousel2","loader"),e.next=4,r.a.week();case 4:t=e.sent,createCarousel("containerCarousel1",t,"Animes da semana"),setTimeout(u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.top();case 2:t=e.sent,createCarousel("containerCarousel2",t,"Animes top");case 4:case"end":return e.stop()}}),e)}))),4e3);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=u(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!=event.key){e.next=12;break}if(!(document.getElementById("inputAnime").value.length<=2)){e.next=6;break}alert("insira pelo menos 3 caracteres!"),e.next=12;break;case 6:return t=document.getElementById("inputAnime").value,e.next=9,r.a.search();case 9:n=e.sent,f(""),h(n,"searchContainer","Sua pesquisa: "+t);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=u(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(document.getElementById("inputAnime").value.length<=2)){e.next=4;break}alert("insira pelo menos 3 caracteres!"),e.next=10;break;case 4:return t=document.getElementById("inputAnime").value,e.next=7,r.a.search();case 7:n=e.sent,f(""),h(n,"searchContainer","Sua pesquisa: "+t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=document.getElementById(e),n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","inputAnime"),n.setAttribute("class","form-control"),n.setAttribute("placeholder","Pesquisar"),n.setAttribute("onkeypress","homeSearch()");var r=document.createElement("div");r.setAttribute("class","input-group-prepend");var o=document.createElement("span");o.setAttribute("class","input-group-text fa fa-search"),o.setAttribute("onclick","homeSearchClick()"),r.append(o),t.append(n),t.append(r)}function f(e){"btnHome"==e.id?(localStorage.sco=60,document.getElementById("searchNav").innerHTML="",document.getElementById("content").style.display="block",!document.getElementById("searchDefault").children.length>=1&&m("searchDefault"),document.getElementById("searchContainer").innerHTML=""):document.getElementById("searchDefault").children.length>=1&&(document.getElementById("searchDefault").innerHTML="",document.getElementById("content").style.display="none",m("searchNav"))}function h(e,t,n){window.scrollTo(0,0),document.getElementById(t).innerHTML="";var r=document.createElement("div");r.setAttribute("class","row");var i=document.createElement("div");i.setAttribute("class","col");var a=document.createElement("h3");a.setAttribute("class","p-0 mb-0"),a.innerHTML=n,i.append(a),r.append(i),document.getElementById(t).append(r);var c=document.createElement("div");c.setAttribute("class","row mt-2 d-flex justify-content-center"),c.setAttribute("id","cardAppend"),document.getElementById(t).append(c),o(e.splice(0,15),!1).forEach((function(e,t){document.getElementById("cardAppend").append(e)})),s=e}window.loadHome=function(){return l.apply(this,arguments)},window.homeSearch=function(){return d.apply(this,arguments)},window.homeSearchClick=function(){return p.apply(this,arguments)},window.toggleSearchBar=f,window.releaseMal=function(e){localStorage.mal_id=e.id},window.updatePage=function(){document.getElementById("cardAppend")&&document.documentElement.scrollTop>localStorage.sco&&(0==s.length?console.log("Fim do array da pesquisa!"):(alert("Cards inseridos"),o(s.splice(0,10),!1).forEach((function(e,t){document.getElementById("cardAppend").append(e)})),localStorage.sco=document.getElementById("cardAppend").clientHeight-window.innerHeight))}},function(e,t,n){"use strict";n.r(t),n.d(t,"loadVideo",(function(){return g}));var r=n(0);function o(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}setTimeout((function(){l()}),1e3);var i=function(e){return(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e;try{gapi.client.youtube.search.list({q:n,part:"snippet"}).execute((function(e){JSON.stringify(e.result);var t=e.result;g(e.result.items[0].id.videoId,t)}))}catch(e){console.error("Erro API Youtube "+e)}case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(e){o(a,r,i,c,u,"next",e)}function u(e){o(a,r,i,c,u,"throw",e)}c(void 0)}))})();var t},a="1098583120763-11iq7mlnh2thb8baijcm9is0arc4tb3m.apps.googleusercontent.com",c=["https://www.googleapis.com/auth/youtube"];try{googleApiClientReady=function(){gapi.auth.init((function(){window.setTimeout(u,1)}))}}catch(e){console.error("Erro API Youtube: "+e)}function u(){gapi.auth.authorize({client_id:a,scope:c,immediate:!0},s)}function s(e){e&&!e.error?($(".pre-auth").hide(),$(".post-auth").show(),gapi.client.load("youtube","v3",(function(){handleAPILoaded()}))):$("#login-link").click((function(){gapi.auth.authorize({client_id:a,scope:c,immediate:!1},s)}))}function l(){try{gapi.client.setApiKey("AIzaSyCgP4-lfkaUghOpfbR4wTBIrtz_i0Z9TpY"),gapi.client.load("youtube","v3")}catch(e){console.error("erro API Youtube ao fazer login: ".concat(e))}}function d(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,c,"next",e)}function c(e){d(i,r,o,a,c,"throw",e)}a(void 0)}))}}var m=document.getElementById("animeTitle"),f=document.getElementById("videoTitle");document.getElementById("youtubeVideo"),document.getElementById("info"),document.getElementById("opening");function h(){return(h=p(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(),e.next=3,r.a.data(localStorage.mal_id);case 3:t=e.sent,m.innerHTML="<h2>"+t.title+"</h2>",f.innerHTML="<h2>"+t.title+" - Trailer</h2>",n="",t.opening_themes.forEach((function(e,r){n+="<tr><td onclick='trigger(this)' id='".concat(t.title," opening ").concat(r+1,"' style='cursor:pointer'> Op. ").concat(r+1," ").concat(e,"} </td></tr>")})),document.getElementById("openings").innerHTML=n,n="",t.ending_themes.forEach((function(e,t){n+="<tr><td onclick='trigger(this)' style='cursor:pointer'>"+e+"</td></tr>"})),document.getElementById("endings").innerHTML=n,document.getElementById("synopsis").innerHTML=t.synopsis,document.getElementById("episodes").innerHTML=t.episodes+" episodios, "+t.duration,setTimeout((function(){i(t.title+" Official Trailer")}),800);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){var n="<iframe id='YoutubeVideo' class='w-100' style='height:26rem' src='https://www.youtube.com/embed/"+e+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";document.getElementById("colVideo").innerHTML=n,document.getElementById("videoTitle").innerHTML="<h3>"+t.items[0].snippet.title+"</h3>"}window.loadOpening=function(e){document.getElementById("btnEnding").style.borderBottom="none",document.getElementById("ending").classList.add("d-none"),document.getElementById("opening").classList.remove("d-none"),document.getElementById("btnOpening").style.borderBottom="3px solid #007bff"},window.loadEnding=function(){document.getElementById("btnOpening").style.borderBottom="none",document.getElementById("ending").classList.remove("d-none"),document.getElementById("opening").classList.add("d-none"),document.getElementById("btnEnding").style.borderBottom="3px solid #007bff"},window.loadInfo=function(){return h.apply(this,arguments)},window.loadVideo=g,window.trigger=function(e){i(e.id)}}]);
//# sourceMappingURL=main.js.map