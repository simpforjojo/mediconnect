!function r(s,a,h){function u(e,t){if(!a[e]){if(!s[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(p)return p(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[e]={exports:{}};s[e][0].call(i.exports,function(t){return u(s[e][1][t]||t)},i,i.exports,r,s,a,h)}return a[e].exports}for(var p="function"==typeof require&&require,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,o){"use strict";function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=t("bounce.js"),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.loop=null,this.position="bottom-right",this.showChat=!1,this.headerTextColor="inherit",this.textNode=null,this.loopInterval=null,this.animationName="skew",this.fatButtonId="nf-chatbot--button",this.fatButtonSize=50,this.fatButtonPosition=25,this.iframe=document.createElement("iframe"),this.iframeContainer=document.createElement("DIV"),this.headerContainer=document.createElement("DIV"),this.fatButton=document.createElement("DIV"),this.imageIcon=document.createElement("IMG"),this.defaultIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHLP0r4IMtsvmhAG4k_dD8IN4ccXSGPSy6p3Mmc5e-kOBdZRq",this.headerContainer.innerHTML="Hola",this.headerContainer.style.height="40px",this.headerContainer.style.lineHeight="40px",this.headerContainer.style.position="relative",this.headerContainer.style.padding="0 20px",this.headerContainer.style.background="#8c8787",this.headerContainer.style.fontWeight="bold",this.iframe.style.width="100%",this.iframe.style.height="calc(100% - 40px)",this.iframe.style.border="none",this.iframeContainer.style.width="350px",this.iframeContainer.style.height="520px",this.iframeContainer.style.display="none",this.iframeContainer.style.position="absolute",this.iframeContainer.style.left="-300px",this.iframeContainer.style.top="-540px",this.iframeContainer.style.boxShadow="5px 5px 10px 3px #e2e2e2",this.iframeContainer.style.border="1px solid #e2e2e2",this.iframeContainer.style.background="#ffffff",this.imageIcon.src=this.defaultIcon,this.imageIcon.style.borderRadius="50%",this.imageIcon.style.display="block",this.imageIcon.style.margin="auto",this.imageIcon.style.width=this.fatButtonSize+"px",this.imageIcon.style.height=this.fatButtonSize+"px",this.imageIcon.onclick=this.popupHandler.bind(this),this.fatButton.id=this.fatButtonId,this.fatButton.style.display="inline-block",this.fatButton.style.zIndex="1",this.fatButton.style.position="absolute",this.fatButton.style.cursor="pointer",this.fatButton.style.right=this.fatButtonPosition+"px",this.fatButton.style.bottom=this.fatButtonPosition+"px"}return function(t,e,o){e&&n(t.prototype,e),o&&n(t,o)}(t,[{key:"getSvgClose",value:function(t){return'<svg onclick="window.NodrizaChatBot.popupHandler()" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="'.concat(t,'" style="position: absolute; top: 50%; transform: translateY(-50%); right: 20px;">\n    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>\n    <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>\n    </svg>')}},{key:"setAnimationName",value:function(t){this.animationName=t}},{key:"setPosition",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"bottom-right";this.position=t,this.fatButton.style.top="auto",this.fatButton.style.left="auto",this.fatButton.style.right="auto",this.fatButton.style.bottom="auto",/top/i.test(t)&&(this.fatButton.style.top=this.fatButtonPosition+"px"),/bottom/i.test(t)&&(this.fatButton.style.bottom=this.fatButtonPosition+"px"),/left/i.test(t)&&(this.fatButton.style.left=this.fatButtonPosition+"px"),/right/i.test(t)&&(this.fatButton.style.right=this.fatButtonPosition+"px"),this.reset()}},{key:"stopLoop",value:function(){clearInterval(this.loopInterval)}},{key:"startLoop",value:function(t){var e=this;this.stopLoop(),this.loop=t,this.loopInterval=setInterval(function(){return e.animate(e.animationName)},this.loop)}},{key:"popupHandler",value:function(){this.showChat=!this.showChat,this.showChat&&window.innerWidth<768?(this.iframeContainer.style.top="0",this.iframeContainer.style.left="0",this.iframeContainer.style.width="100vw",this.iframeContainer.style.height="100vh",this.iframeContainer.style.position="fixed",this.fatButton.style.top="0",this.fatButton.style.left="0"):(this.setPosition(this.position),this.iframeContainer.style.width="350px",this.iframeContainer.style.height="520px",this.iframeContainer.style.position="absolute",this.iframeContainer.style.left="-300px",this.iframeContainer.style.top="-540px"),this.iframeContainer.style.display=this.showChat?"inherit":"none",this.showChat&&this.loop&&this.stopLoop(),!this.showChat&&this.loop&&this.startLoop(this.loop),this.reset()}},{key:"existFatButton",value:function(){return!!document.querySelector("#"+this.fatButtonId)}},{key:"setIframe",value:function(t){this.iframe.src=t,this.reset()}},{key:"setIcon",value:function(t){this.imageIcon.src=t,this.reset()}},{key:"setZIndex",value:function(t){this.fatButton.style.zIndex=t,this.reset()}},{key:"setDisplayText",value:function(t){this.textNode=document.createTextNode(t),this.reset()}},{key:"setChatbotName",value:function(t){this.headerContainer.innerHTML=t+this.getSvgClose(this.headerTextColor),this.reset()}},{key:"setChatbotColor",value:function(t,e){e&&(this.headerTextColor=e,this.headerContainer.style.color=e),this.headerContainer.style.background=t,this.reset()}},{key:"clearDisplayText",value:function(){this.textNode=null,this.reset()}},{key:"reset",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.remove(),this.start(t)}},{key:"remove",value:function(){for(;this.fatButton.firstChild;)this.fatButton.removeChild(this.fatButton.firstChild);this.existFatButton()&&document.body.removeChild(this.fatButton)}},{key:"start",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.displayText,o=t.animationName,n=t.icon,i=t.position,r=t.chatbot,s=t.headerText,a=t.headerBackground,h=t.headerTextColor,u=t.loop,p=t.zIndex;n&&this.setIcon(n),i&&this.setPosition(i),r&&this.setIframe(r),o&&this.setAnimationName(o),e&&this.setDisplayText(e),a&&this.setChatbotColor(a,h),s&&this.setChatbotName(s),p&&this.setZIndex(p),this.iframeContainer.appendChild(this.headerContainer),this.iframeContainer.appendChild(this.iframe),this.iframeContainer&&this.fatButton.appendChild(this.iframeContainer),this.fatButton.appendChild(this.imageIcon),this.textNode&&this.fatButton.appendChild(this.textNode),document.body.appendChild(this.fatButton),this.animate(o),isFinite(u)&&this.startLoop(u)}},{key:"animate",value:function(t){var e=new i;t&&"hide"!==t&&this.setAnimationName(t),"hide"===t&&e.scale({from:{x:1,y:1},to:{x:0,y:0}}),"rotate"===this.animationName&&e.rotate({from:0,to:360}),"translate"===this.animationName&&e.translate({from:{x:-100,y:0},to:{x:0,y:0}}),"skew"===this.animationName&&e.translate({from:{x:-20,y:0},to:{x:0,y:0}}),"scale"!==this.animationName&&"default"!==this.animationName||e.scale({from:{x:.5,y:.5},to:{x:1,y:1}}),e.applyTo(this.fatButton)}},{key:"hide",value:function(){this.animate("hide")}},{key:"show",value:function(){this.animate("default")}}]),t}();window.NodrizaChatBot=new r},{"bounce.js":2}],2:[function(p,n,i){(function(o){!function(t){if("object"==typeof i)n.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;"undefined"!=typeof window?e=window:void 0!==o?e=o:"undefined"!=typeof self&&(e=self),e.Bounce=t()}}(function(){return function i(r,s,a){function h(o,t){if(!s[o]){if(!r[o]){var e="function"==typeof p&&p;if(!t&&e)return e(o,!0);if(u)return u(o,!0);throw new Error("Cannot find module '"+o+"'")}var n=s[o]={exports:{}};r[o][0].call(n.exports,function(t){var e=r[o][1][t];return h(e||t)},n,n.exports,i,r,s,a)}return s[o].exports}for(var u="function"==typeof p&&p,t=0;t<a.length;t++)h(a[t]);return h}({1:[function(t,e,o){var n,i,r;function s(t){t||(t={}),null!=t.easing&&(this.easing=t.easing),null!=t.duration&&(this.duration=t.duration),null!=t.delay&&(this.delay=t.delay),null!=t.from&&(this.from=t.from),null!=t.to&&(this.to=t.to),this.easingObject=new i[this.easing](t)}r=t("../math/matrix4d"),i={bounce:t("../easing/bounce"),sway:t("../easing/sway"),hardbounce:t("../easing/hardbounce"),hardsway:t("../easing/hardsway")},s.prototype.easing="bounce",s.prototype.duration=1e3,s.prototype.delay=0,s.prototype.from=null,s.prototype.to=null,s.prototype.calculateEase=function(t){return this.easingObject.calculate(t)},s.prototype.getMatrix=function(){return(new r).identity()},s.prototype.getEasedMatrix=function(t){return this.getMatrix()},s.prototype.serialize=function(){var t,e,o,n;for(t in e={type:this.constructor.name.toLowerCase(),easing:this.easing,duration:this.duration,delay:this.delay,from:this.from,to:this.to},n=this.easingObject.serialize())o=n[t],e[t]=o;return e},n=s,e.exports=n},{"../easing/bounce":6,"../easing/hardbounce":7,"../easing/hardsway":8,"../easing/sway":10,"../math/matrix4d":13}],2:[function(t,e,o){var i,n,r={}.hasOwnProperty;function s(){s.__super__.constructor.apply(this,arguments),this.diff=this.to-this.from}i=t("../math/matrix4d"),t("../math/vector2d"),function(t,e){for(var o in e)r.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(s,t("./index")),s.prototype.from=0,s.prototype.to=90,s.prototype.getMatrix=function(t){var e,o,n;return o=t/180*Math.PI,e=Math.cos(o),n=Math.sin(o),new i([e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1])},s.prototype.getEasedMatrix=function(t){var e,o;return o=this.calculateEase(t),e=this.from+this.diff*o,this.getMatrix(e)},n=s,e.exports=n},{"../math/matrix4d":13,"../math/vector2d":14,"./index":1}],3:[function(t,e,o){var n,i,r,s={}.hasOwnProperty;function a(){a.__super__.constructor.apply(this,arguments),this.fromVector=new r(this.from.x,this.from.y),this.toVector=new r(this.to.x,this.to.y),this.diff=this.toVector.clone().subtract(this.fromVector)}n=t("../math/matrix4d"),r=t("../math/vector2d"),function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(a,t("./index")),a.prototype.from={x:.5,y:.5},a.prototype.to={x:1,y:1},a.prototype.getMatrix=function(t,e){return new n([t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1])},a.prototype.getEasedMatrix=function(t){var e,o;return e=this.calculateEase(t),o=this.fromVector.clone().add(this.diff.clone().multiply(e)),this.getMatrix(o.x,o.y)},i=a,e.exports=i},{"../math/matrix4d":13,"../math/vector2d":14,"./index":1}],4:[function(t,e,o){var s,n,i,r={}.hasOwnProperty;function a(){a.__super__.constructor.apply(this,arguments),this.fromVector=new i(this.from.x,this.from.y),this.toVector=new i(this.to.x,this.to.y),this.diff=this.toVector.clone().subtract(this.fromVector)}s=t("../math/matrix4d"),i=t("../math/vector2d"),function(t,e){for(var o in e)r.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(a,t("./index")),a.prototype.from={x:0,y:0},a.prototype.to={x:20,y:0},a.prototype.getMatrix=function(t,e){var o,n,i,r;return o=t/180*Math.PI,n=e/180*Math.PI,i=Math.tan(o),r=Math.tan(n),new s([1,i,0,0,r,1,0,0,0,0,1,0,0,0,0,1])},a.prototype.getEasedMatrix=function(t){var e,o;return e=this.calculateEase(t),o=this.fromVector.clone().add(this.diff.clone().multiply(e)),this.getMatrix(o.x,o.y)},n=a,e.exports=n},{"../math/matrix4d":13,"../math/vector2d":14,"./index":1}],5:[function(t,e,o){var n,i,r,s={}.hasOwnProperty;function a(){a.__super__.constructor.apply(this,arguments),this.fromVector=new r(this.from.x,this.from.y),this.toVector=new r(this.to.x,this.to.y),this.diff=this.toVector.clone().subtract(this.fromVector)}n=t("../math/matrix4d"),r=t("../math/vector2d"),function(t,e){for(var o in e)s.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(a,t("./index")),a.prototype.from={x:0,y:0},a.prototype.to={x:0,y:0},a.prototype.getMatrix=function(t,e){return new n([1,0,0,t,0,1,0,e,0,0,1,0,0,0,0,1])},a.prototype.getEasedMatrix=function(t){var e,o;return e=this.calculateEase(t),o=this.fromVector.clone().add(this.diff.clone().multiply(e)),this.getMatrix(o.x,o.y)},i=a,e.exports=i},{"../math/matrix4d":13,"../math/vector2d":14,"./index":1}],6:[function(t,e,o){var n,i={}.hasOwnProperty;function r(t){var e;null==t&&(t={}),r.__super__.constructor.apply(this,arguments),null!=t.stiffness&&(this.stiffness=t.stiffness),null!=t.bounces&&(this.bounces=t.bounces),this.alpha=this.stiffness/100,e=.005/Math.pow(10,this.stiffness),this.limit=Math.floor(Math.log(e)/-this.alpha),this.omega=this.calculateOmega(this.bounces,this.limit)}(function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype})(r,t("./index")),r.prototype.bounces=4,r.prototype.stiffness=3,r.prototype.calculate=function(t){var e;return 1<=t?1:(e=t*this.limit,1-this.exponent(e)*this.oscillation(e))},r.prototype.calculateOmega=function(t,e){return(this.bounces+.5)*Math.PI/this.limit},r.prototype.exponent=function(t){return Math.pow(Math.E,-this.alpha*t)},r.prototype.oscillation=function(t){return Math.cos(this.omega*t)},r.prototype.serialize=function(){return{stiffness:this.stiffness,bounces:this.bounces}},n=r,e.exports=n},{"./index":9}],7:[function(t,e,o){var n,i={}.hasOwnProperty;function r(){return r.__super__.constructor.apply(this,arguments)}(function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype})(r,t("./bounce")),r.prototype.oscillation=function(t){return Math.abs(Math.cos(this.omega*t))},n=r,e.exports=n},{"./bounce":6}],8:[function(t,e,o){var n,i={}.hasOwnProperty;function r(){return r.__super__.constructor.apply(this,arguments)}(function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype})(r,t("./sway")),r.prototype.oscillation=function(t){return Math.abs(Math.sin(this.omega*t))},n=r,e.exports=n},{"./sway":10}],9:[function(t,e,o){var n,h;function i(){}h=t("../math/helpers"),i.prototype.calculate=function(t){return t},i.prototype.serialize=function(){return{}},i.prototype.findOptimalKeyPoints=function(t,n){var e,o,i,r,s,a;for(null==t&&(t=1),null==n&&(n=1e3),r=[0],a=function(){var t,e;for(e=[],o=t=0;0<=n?t<n:n<t;o=0<=n?++t:--t)e.push(this.calculate(o/n));return e}.call(this),(r=r.concat(h.findTurningPoints(a))).push(n-1),o=0,s=1e3;s--&&o!==r.length-1;)h.areaBetweenLineAndCurve(a,r[o],r[o+1])<=t?o++:(e=Math.round(r[o]+(r[o+1]-r[o])/2),r.splice(o+1,0,e));return 0===s?[]:function(){var t,e,o;for(o=[],t=0,e=r.length;t<e;t++)i=r[t],o.push(i/(n-1));return o}()},n=i,e.exports=n},{"../math/helpers":12}],10:[function(t,e,o){var n,i={}.hasOwnProperty;function r(){return r.__super__.constructor.apply(this,arguments)}(function(t,e){for(var o in e)i.call(e,o)&&(t[o]=e[o]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype})(r,t("./bounce")),r.prototype.calculate=function(t){var e;return 1<=t?0:(e=t*this.limit,this.exponent(e)*this.oscillation(e))},r.prototype.calculateOmega=function(t,e){return this.bounces*Math.PI/this.limit},r.prototype.oscillation=function(t){return Math.sin(this.omega*t)},n=r,e.exports=n},{"./bounce":6}],11:[function(t,e,o){var n,i,w;function C(){this.components=[]}w=t("./math/matrix4d"),i={scale:t("./components/scale"),rotate:t("./components/rotate"),translate:t("./components/translate"),skew:t("./components/skew")},C.FPS=30,C.counter=1,C.prototype.components=null,C.prototype.duration=0,C.prototype.scale=function(t){return this.addComponent(new i.scale(t))},C.prototype.rotate=function(t){return this.addComponent(new i.rotate(t))},C.prototype.translate=function(t){return this.addComponent(new i.translate(t))},C.prototype.skew=function(t){return this.addComponent(new i.skew(t))},C.prototype.addComponent=function(t){return this.components.push(t),this.updateDuration(),this},C.prototype.serialize=function(){var t,e,o,n,i;for(e=[],o=0,n=(i=this.components).length;o<n;o++)t=i[o],e.push(t.serialize());return e},C.prototype.deserialize=function(t){var e,o,n;for(o=0,n=t.length;o<n;o++)e=t[o],this.addComponent(new i[e.type](e));return this},C.prototype.updateDuration=function(){return this.duration=this.components.map(function(t){return t.duration+t.delay}).reduce(function(t,e){return Math.max(t,e)})},C.prototype.define=function(t){return this.name=t||C.generateName(),this.styleElement=document.createElement("style"),this.styleElement.innerHTML=this.getKeyframeCSS({name:this.name,prefix:!0}),document.body.appendChild(this.styleElement),this},C.prototype.applyTo=function(t,e){var o,n,i,r,s,a,h,u,p,l,c;for(null==e&&(e={}),this.define(),t.length||(t=[t]),s=this.getPrefixes(),n=null,window.jQuery&&window.jQuery.Deferred&&(n=new window.jQuery.Deferred),a=0,u=t.length;a<u;a++)for(i=t[a],h=0,p=(l=s.animation).length;h<p;h++)r=l[h],o=[this.name,this.duration+"ms","linear","both"],e.loop&&o.push("infinite"),i.style[r+"animation"]=o.join(" ");return e.loop||setTimeout((c=this,function(){if(e.remove&&c.remove(),"function"==typeof e.onComplete&&e.onComplete(),n)return n.resolve()}),this.duration),n},C.prototype.remove=function(){var t;if(this.styleElement)return this.styleElement.remove?this.styleElement.remove():null!=(t=this.styleElement.parentNode)?t.removeChild(this.styleElement):void 0},C.prototype.getPrefixes=function(t){var e,o;return e={transform:[""],animation:[""]},o=document.createElement("dummy").style,(t||!("transform"in o)&&"webkitTransform"in o)&&(e.transform=["-webkit-",""]),(t||!("animation"in o)&&"webkitAnimation"in o)&&(e.animation=["-webkit-",""]),e},C.prototype.getKeyframeCSS=function(t){var e,o,n,i,r,s,a,h,u,p,l,c,f,y,d,m,x;for(null==t&&(t={}),this.name=t.name||C.generateName(),s={transform:[""],animation:[""]},(t.prefix||t.forcePrefix)&&(s=this.getPrefixes(t.forcePrefix)),n=[],i=this.getKeyframes(t),u=0,c=(d=this.keys).length;u<c;u++){for(a="matrix3d"+i[o=d[u]],h=[],p=0,f=(m=s.transform).length;p<f;p++)r=m[p],h.push(r+"transform: "+a+";");n.push(Math.round(100*o*100)/100+"% { "+h.join(" ")+" }")}for(e=[],l=0,y=(x=s.animation).length;l<y;l++)r=x[l],e.push("@"+r+"keyframes "+this.name+" { \n  "+n.join("\n  ")+" \n}");return e.join("\n\n")},C.prototype.getKeyframes=function(t){var o,e,n,i,r,s,a,h,u,p,l,c,f,y,d,m,x,g,v;if(null==t&&(t={}),h=[0,1],t.optimized)for(l=0,d=(g=this.components).length;l<d;l++)e=(o=g[l]).easingObject.findOptimalKeyPoints().map(function(e){return function(t){return t*o.duration/e.duration+o.delay/e.duration}}(this)),o.delay&&e.push(o.delay/this.duration-.001),h=h.concat(e);else for(i=Math.round(this.duration/1e3*C.FPS),r=c=0;0<=i?c<=i:i<=c;r=0<=i?++c:--c)h.push(r/i);for(h=h.sort(function(t,e){return t-e}),this.keys=[],a={},f=0,m=h.length;f<m;f++)if(!a[s=h[f]]){for(u=(new w).identity(),y=0,x=(v=this.components).length;y<x;y++)o=v[y],n=s*this.duration,1e-8<o.delay-n||(p=(s-o.delay/this.duration)/(o.duration/this.duration),u.multiply(o.getEasedMatrix(p)));this.keys.push(s),a[s]=u.transpose().toFixed(3)}return a},C.generateName=function(){return"animation-"+C.counter++},C.isSupported=function(){var t,e,o,n,i,r,s,a,h;for(i=document.createElement("dummy").style,r=0,a=(n=[["transform","webkitTransform"],["animation","webkitAnimation"]]).length;r<a;r++){for(e=!1,s=0,h=(o=n[r]).length;s<h;s++)t=o[s],e||(e=t in i);if(!e)return!1}return!0},n=C,e.exports=n},{"./components/rotate":2,"./components/scale":3,"./components/skew":4,"./components/translate":5,"./math/matrix4d":13}],12:[function(t,e,o){var n;function i(){}i.prototype.sign=function(t){return t<0?-1:1},i.prototype.findTurningPoints=function(t){var e,o,n,i;for(o=[],e=n=1,i=t.length-1;1<=i?n<i:i<n;e=1<=i?++n:--n)this.sign(t[e]-t[e-1])!==this.sign(t[e+1]-t[e])&&o.push(e);return o},i.prototype.areaBetweenLineAndCurve=function(t,e,o){var n,i,r,s,a,h,u,p;for(s=o-e,u=t[e],h=t[o],r=p=n=0;0<=s?p<=s:s<=p;r=0<=s?++p:--p)i=t[e+r],a=u+r/s*(h-u),n+=Math.abs(a-i);return n},n=i,e.exports=new n},{}],13:[function(t,e,o){var n;function u(t){this._array=(null!=t?t.slice(0):void 0)||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}u.prototype._array=null,u.prototype.equals=function(t){return this.toString()===t.toString()},u.prototype.identity=function(){return this.setArray([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this},u.prototype.multiply=function(t){var e,o,n,i,r,s,a,h;for(i=new u,e=s=0;s<4;e=++s)for(o=a=0;a<4;o=++a)for(n=h=0;h<4;n=++h)r=i.get(e,o)+this.get(e,n)*t.get(n,o),i.set(e,o,r);return this.copy(i)},u.prototype.transpose=function(){var t;return t=this.getArray(),this.setArray([t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]]),this},u.prototype.get=function(t,e){return this.getArray()[4*t+e]},u.prototype.set=function(t,e,o){return this._array[4*t+e]=o},u.prototype.copy=function(t){return this._array=t.getArray(),this},u.prototype.clone=function(){return new u(this.getArray())},u.prototype.getArray=function(){return this._array.slice(0)},u.prototype.setArray=function(t){return this._array=t,this},u.prototype.toString=function(){return"("+this.getArray().join(", ")+")"},u.prototype.toFixed=function(i){var r;return this._array=function(){var t,e,o,n;for(n=[],t=0,e=(o=this._array).length;t<e;t++)r=o[t],n.push(parseFloat(r.toFixed(i)));return n}.call(this),this},n=u,e.exports=n},{}],14:[function(t,e,o){var n;function i(t,e){this.x=null!=t?t:0,this.y=null!=e?e:0}i.prototype.x=0,i.prototype.y=0,i.prototype.add=function(t){return i.isVector2D(t)?(this.x+=t.x,this.y+=t.y,this):this._addScalar(t)},i.prototype._addScalar=function(t){return this.x+=t,this.y+=t,this},i.prototype.subtract=function(t){return i.isVector2D(t)?(this.x-=t.x,this.y-=t.y,this):this._subtractScalar(t)},i.prototype._subtractScalar=function(t){return this._addScalar(-t)},i.prototype.multiply=function(t){return i.isVector2D(t)?(this.x*=t.x,this.y*=t.y,this):this._multiplyScalar(t)},i.prototype._multiplyScalar=function(t){return this.x*=t,this.y*=t,this},i.prototype.divide=function(t){return i.isVector2D(t)?(this.x/=t.x,this.y/=t.y,this):this._divideScalar(t)},i.prototype._divideScalar=function(t){return this._multiplyScalar(1/t)},i.prototype.clone=function(){return new i(this.x,this.y)},i.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},i.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},i.prototype.toString=function(){return"("+this.x+", "+this.y+")"},i.prototype.toFixed=function(t){return this.x=parseFloat(this.x.toFixed(t)),this.y=parseFloat(this.y.toFixed(t)),this},i.prototype.toArray=function(){return[this.x,this.y]},i.isVector2D=function(t){return t instanceof i},n=i,e.exports=n},{}]},{},[11])(11)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
//# sourceMappingURL=chatbot.js.map
