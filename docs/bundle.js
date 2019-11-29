!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){(function(t){/* Riot v3.13.2, @license MIT */
!function(e){"use strict";function n(t,e){return(e||document).querySelector(t)}var r,i,o=[],a={},u="yield",s="__global_mixin",c="riot-",l=["ref","data-ref"],f="data-is",p="if",h="each",d="no-reorder",g="show",v="hide",m="key",y="__riot-events__",b="string",_="object",w="undefined",x="function",k="http://www.w3.org/1999/xlink",C="http://www.w3.org/2000/svg",A=/^xlink:(\w+)/,N=typeof window===w?void 0:window,O=/^on/,E=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,j={viewbox:"viewBox",preserveaspectratio:"preserveAspectRatio"},T=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,q=0|(N&&N.document||{}).documentMode;function z(t){return"svg"===t?document.createElementNS(C,t):document.createElement(t)}function S(t,e,n){var r=A.exec(e);r&&r[1]?t.setAttributeNS(k,r[1],n):t.setAttribute(e,n)}var L,M,P={},I=!1;N&&(L=z("style"),M=n("style[type=riot]"),S(L,"type","text/css"),M?(M.id&&(L.id=M.id),M.parentNode.replaceChild(L,M)):document.head.appendChild(L),i=(r=L).styleSheet);var R={styleNode:r,add:function(t,e){P[e]=t,I=!0},inject:function(){if(N&&I){I=!1;var t=Object.keys(P).map((function(t){return P[t]})).join("\n");i?i.cssText=t:r.innerHTML=t}},remove:function(t){delete P[t],I=!0}},V=function(){var t="[{(,;:?=|&!^~>%*/",e=["case","default","do","else","in","instanceof","prefix","return","typeof","void","yield"],n=e.reduce((function(t,e){return t+e.slice(-1)}),""),r=/^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/,i=/[$\w]/;function o(t,e){for(;--e>=0&&/\s/.test(t[e]););return e}return function(a,u){var s=/.*/g,c=s.lastIndex=u++,l=s.exec(a)[0].match(r);if(l){var f=c+l[0].length,p=a[c=o(a,c)];if(c<0||~t.indexOf(p))return f;if("."===p)"."===a[c-1]&&(u=f);else if("+"===p||"-"===p)(a[--c]!==p||(c=o(a,c))<0||!i.test(a[c]))&&(u=f);else if(~n.indexOf(p)){for(var h=c+1;--c>=0&&i.test(a[c]););~e.indexOf(a.slice(c+1,h))&&(u=f)}}return u}}(),$=function(e){var n,r,i="g",o=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,a=o.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,u=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),s=/(?=[[\]()*+?.^$|])/g,c=o.source+"|"+/(\/)(?![*\/])/.source,l={"(":RegExp("([()])|"+c,i),"[":RegExp("([[\\]])|"+c,i),"{":RegExp("([{}])|"+c,i)},f="{ }",p=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+c,i),f,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],h=void 0,d=[];function g(t){return t}function v(t,e){return e||(e=d),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?i:"")}function m(t){if(t===f)return p;var e=t.split(" ");if(2!==e.length||u.test(t))throw new Error('Unsupported brackets "'+t+'"');return(e=e.concat(t.replace(s,"\\").split(" ")))[4]=v(e[1].length>1?/{[\S\s]*?}/:p[4],e),e[5]=v(t.length>3?/\\({|})/g:p[5],e),e[6]=v(p[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+c,i),e[8]=t,e}function y(t){return t instanceof RegExp?n(t):d[t]}function b(t){(t||(t=f))!==d[8]&&(d=m(t),n=t===f?g:v,d[9]=n(p[9])),h=t}return y.split=function(t,e,n){n||(n=d);var r,i,o,a,u,s,c=[],f=n[6],p=[],h="";for(i=o=f.lastIndex=0;r=f.exec(t);){if(s=f.lastIndex,a=r.index,i){if(r[2]){var g=r[2],v=l[g],m=1;for(v.lastIndex=s;r=v.exec(t);)if(r[1]){if(r[1]===g)++m;else if(!--m)break}else v.lastIndex=b(r.index,v.lastIndex,r[2]);f.lastIndex=m?t.length:v.lastIndex;continue}if(!r[3]){f.lastIndex=b(a,s,r[4]);continue}}r[1]||(y(t.slice(o,a)),o=f.lastIndex,(f=n[6+(i^=1)]).lastIndex=o)}return t&&o<t.length&&y(t.slice(o)),c.qblocks=p,c;function y(t){h&&(t=h+t,h=""),e||i?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function b(n,r,i){return i&&(r=V(t,n)),e&&r>n+2&&(u="⁗"+p.length+"~",p.push(t.slice(n,r)),h+=t.slice(o,n)+u,o=r),r}},y.hasExpr=function(t){return d[4].test(t)},y.loopKeys=function(t){var e=t.match(d[9]);return e?{key:e[1],pos:e[2],val:d[0]+e[3].trim()+d[1]}:{val:t.trim()}},y.array=function(t){return t?m(t):d},Object.defineProperty(y,"settings",{set:function(t){var e;e=(t=t||{}).brackets,Object.defineProperty(t,"brackets",{set:b,get:function(){return h},enumerable:!0}),r=t,b(e)},get:function(){return r}}),y.settings=void 0!==t&&t.settings||{},y.set=b,y.skipRegex=V,y.R_STRINGS=o,y.R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,y.S_QBLOCKS=a,y.S_QBLOCK2=c,y}(),B=function(){var t={};function e(e,o){return e?(t[e]||(t[e]=function(t){var e=function(t){var e,n=$.split(t.replace(r,'"'),1),o=n.qblocks;if(n.length>2||n[0]){var a,s,c=[];for(a=s=0;a<n.length;++a)(e=n[a])&&(e=1&a?u(e,1,o):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(c[s++]=e);e=s<2?c[0]:"["+c.join(",")+'].join("")'}else e=u(n[1],0,o);return o.length&&(e=e.replace(i,(function(t,e){return o[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")}))),e}(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}(e))).call(o,n.bind({data:o,tmpl:e})):e}function n(t,n){t.riotData={tagName:n&&n.__&&n.__.tagName,_riot_id:n&&n._riot_id},e.errorHandler?e.errorHandler(t):"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(t.message),console.log("<%s> %s",t.riotData.tagName||"Unknown tag",this.tmpl),console.log(this.data))}e.hasExpr=$.hasExpr,e.loopKeys=$.loopKeys,e.clearCache=function(){t={}},e.errorHandler=null;var r=/\u2057/g,i=/\u2057(\d+)~/g,o=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,a={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g};function u(t,e,n){if(t=t.replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var r,i=[],u=0;t&&(r=t.match(o))&&!r.index;){var s,c,l=/,|([[{(])|$/g;for(t=RegExp.rightContext,s=r[2]?n[r[2]].slice(1,-1).trim().replace(/\s+/g," "):r[1];c=(r=l.exec(t))[1];)p(c,l);c=t.slice(0,r.index),t=RegExp.rightContext,i[u++]=f(c,1,s)}t=u?u>1?"["+i.join(",")+'].join(" ").trim()':i[0]:f(t,e)}return t;function p(e,n){var r,i=1,o=a[e];for(o.lastIndex=n.lastIndex;r=o.exec(t);)if(r[0]===e)++i;else if(!--i)break;n.lastIndex=i?t.length:o.lastIndex}}var s='"in this?this:'+("object"!=typeof window?"global":"window")+").",c=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,l=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function f(t,e,n){var r;return t=t.replace(c,(function(t,e,n,i,o){return n&&(i=r?0:i+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+s+n,i&&(r="."===(o=o[i])||"("===o||"["===o)):i&&(r=!l.test(o.slice(i)))),t})),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}return e.version=$.version="v3.0.8",e}(),H=function(t){t=t||{};var e={},n=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(n,r){return"function"==typeof r&&(e[n]=e[n]||[]).push(r),t},enumerable:!1,writable:!1,configurable:!1},off:{value:function(n,r){if("*"!=n||r)if(r)for(var i,o=e[n],a=0;i=o&&o[a];++a)i==r&&o.splice(a--,1);else delete e[n];else e={};return t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){return t.on(e,(function r(){t.off(e,r),n.apply(t,arguments)}))},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(r){var i,o,a,u=arguments,s=arguments.length-1,c=new Array(s);for(a=0;a<s;a++)c[a]=u[a+1];for(i=n.call(e[r]||[],0),a=0;o=i[a];++a)o.apply(t,c);return e["*"]&&"*"!=r&&t.trigger.apply(t,["*",r].concat(c)),t},enumerable:!1,writable:!1,configurable:!1}}),t};function U(t,e){return Object.getOwnPropertyDescriptor(t,e)}function Q(t){return typeof t===w}function D(t,e){var n=U(t,e);return Q(t[e])||n&&n.writable}function F(t){for(var e,n=1,r=arguments,i=r.length;n<i;n++)if(e=r[n])for(var o in e)D(t,o)&&(t[o]=e[o]);return t}function G(t){return Object.create(t)}var K=F(G($.settings),{skipAnonymousTags:!0,keepValueAttributes:!1,autoUpdate:!0});function J(t,e){return[].slice.call((e||document).querySelectorAll(t))}function Z(){return document.createTextNode("")}function W(t,e){t.style.display=e?"":"none",t.hidden=!e}function X(t,e){return t.getAttribute(e)}function Y(t,e){t.removeAttribute(e)}function tt(t,e,n){if(n){var r=t.ownerDocument.importNode((new DOMParser).parseFromString('<svg xmlns="'+C+'">'+e+"</svg>","application/xml").documentElement,!0);t.appendChild(r)}else t.innerHTML=e}function et(t,e){if(t)for(var n;n=E.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function nt(){return document.createDocumentFragment()}function rt(t,e,n){t.insertBefore(e,n.parentNode&&n)}function it(t){return Object.keys(t).reduce((function(e,n){return e+" "+n+": "+t[n]+";"}),"")}function ot(t,e,n){if(t){var r,i=e(t,n);if(!1===i)return;for(t=t.firstChild;t;)r=t.nextSibling,ot(t,e,i),t=r}}var at=Object.freeze({$$:J,$:n,createDOMPlaceholder:Z,mkEl:z,setAttr:S,toggleVisibility:W,getAttr:X,remAttr:Y,setInnerHTML:tt,walkAttrs:et,createFrag:nt,safeInsert:rt,styleObjectToString:it,walkNodes:ot});function ut(t){return Q(t)||null===t}function st(t){return ut(t)||""===t}function ct(t){return typeof t===x}function lt(t){return t&&typeof t===_}function ft(t){var e=t.ownerSVGElement;return!!e||null===e}function pt(t){return Array.isArray(t)||t instanceof Array}function ht(t){return T.test(t)}function dt(t){return typeof t===b}var gt=Object.freeze({isBlank:st,isFunction:ct,isObject:lt,isSvg:ft,isWritable:D,isArray:pt,isBoolAttr:ht,isNil:ut,isString:dt,isUndefined:Q});function vt(t,e){return-1!==t.indexOf(e)}function mt(t,e){for(var n=t?t.length:0,r=0;r<n;r++)e(t[r],r);return t}function yt(t,e){return t.slice(0,e.length)===e}var bt,_t=(bt=-1,function(){return++bt});function wt(t,e,n,r){return Object.defineProperty(t,e,F({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function xt(t){return t.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}))}function kt(t){console&&console.warn&&console.warn(t)}var Ct=Object.freeze({contains:vt,each:mt,getPropDescriptor:U,startsWith:yt,uid:_t,defineProperty:wt,objectCreate:G,extend:F,toCamel:xt,warn:kt});function At(t,e,n,r,i){var o=t[e],a=pt(o),u=!Q(i);if(!o||o!==n)if(!o&&r)t[e]=[n];else if(o)if(a){var s=o.indexOf(n);if(s===i)return;-1!==s&&o.splice(s,1),u?o.splice(i,0,n):o.push(n)}else t[e]=[o,n];else t[e]=n}function Nt(t){return t.tagName&&a[X(t,f)||X(t,f)||t.tagName.toLowerCase()]}function Ot(t,e){var n=Nt(t),r=!e&&X(t,f);return r&&!B.hasExpr(r)?r:n?n.name:t.tagName.toLowerCase()}function Et(){return this.parent?F(G(this),this.parent):this}var jt=/<yield\b/i,Tt=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,qt=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,zt=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,St={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},Lt=q&&q<10?/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,Mt="div",Pt="svg";function It(t,e,r){var i=t&&t.match(/^\s*<([-\w]+)/),o=i&&i[1].toLowerCase(),a=z(r?Pt:Mt);return t=function(t,e){if(!jt.test(t))return t;var n={};return e=e&&e.replace(qt,(function(t,e,r){return n[e]=n[e]||r,""})).trim(),t.replace(zt,(function(t,e,r){return n[e]||r||""})).replace(Tt,(function(t,n){return e||n||""}))}(t,e),Lt.test(o)?a=function(t,e,r){var i="o"===r[0],o=i?"select>":"table>";if(t.innerHTML="<"+o+e.trim()+"</"+o,o=t.firstChild,i)o.selectedIndex=-1;else{var a=St[r];a&&1===o.childElementCount&&(o=n(a,o))}return o}(a,t,o):tt(a,t,r),a}var Rt=/^on/;function Vt(t){for(var e=t;e.__.isAnonymous&&e.parent;)e=e.parent;return e}function $t(t,e,n){var r=this.__.parent,i=this.__.item;if(!i)for(;r&&!i;)i=r.__.item,r=r.__.parent;if(D(n,"currentTarget")&&(n.currentTarget=t),D(n,"target")&&(n.target=n.srcElement),D(n,"which")&&(n.which=n.charCode||n.keyCode),n.item=i,e.call(this,n),K.autoUpdate&&!n.preventUpdate){var o=Vt(this);o.isMounted&&o.update()}}function Bt(t,e,n,r){var i,o=$t.bind(r,n,e);n[t]=null,i=t.replace(O,""),vt(r.__.listeners,n)||r.__.listeners.push(n),n[y]||(n[y]={}),n[y][t]&&n.removeEventListener(i,n[y][t]),n[y][t]=o,n.addEventListener(i,o,!1)}function Ht(t,e,n,r){var i=Ae(t,e,n),o=e.tagName||Ot(e.root,!0),a=Vt(r);return wt(i,"parent",a),i.__.parent=r,At(a.tags,o,i),a!==r&&At(r.tags,o,i),i}function Ut(t,e,n,r){if(pt(t[e])){var i=t[e].indexOf(n);-1!==i&&t[e].splice(i,1),t[e].length?1!==t[e].length||r||(t[e]=t[e][0]):delete t[e]}else t[e]===n&&delete t[e]}function Qt(t,e){var n,r,i=Z(),o=Z(),a=nt();for(this.root.insertBefore(i,this.root.firstChild),this.root.appendChild(o),this.__.head=r=i,this.__.tail=o;r;)n=r.nextSibling,a.appendChild(r),this.__.virts.push(r),r=n;e?t.insertBefore(a,e.__.head):t.appendChild(a)}function Dt(t,e){if(e.parentNode){var n=nt();Qt.call(t,n),e.parentNode.replaceChild(n,e)}}function Ft(t){if(!this.root||!X(this.root,"virtualized")){var e,n=t.dom,r=function(t){return t?(t=t.replace(c,""),j[t]&&(t=j[t]),t):null}(t.attr),i=vt([g,v],r),o=t.root&&"VIRTUAL"===t.root.tagName,u=this.__.isAnonymous,s=n&&(t.parent||n.parentNode),l=K.keepValueAttributes,f="style"===r,p="class"===r,h="value"===r;if(t._riot_id)t.__.wasCreated?t.update():(t.mount(),o&&Dt(t,t.root));else{if(t.update)return t.update();var d=i&&!u?Et.call(this):this,m=!st(e=B(t.expr,d)),y=lt(e);if(y&&(p?e=B(JSON.stringify(e),this):f&&(e=it(e))),!t.attr||t.wasParsedOnce&&!1!==e&&(m||h&&(!h||l))||Y(n,X(n,t.attr)?t.attr:r),t.bool&&(e=!!e&&r),t.isRtag)return function(t,e,n){var r,i=t.tag||t.dom._tag,o=(i?i.__:{}).head,u="VIRTUAL"===t.dom.tagName;i&&t.tagName===n?i.update():(i&&(u&&(r=Z(),o.parentNode.insertBefore(r,o)),i.unmount(!0)),dt(n)&&(t.impl=a[n],t.impl&&(t.tag=i=Ht(t.impl,{root:t.dom,parent:e,tagName:n},t.dom.innerHTML,e),mt(t.attrs,(function(t){return S(i.root,t.name,t.value)})),t.tagName=n,i.mount(),u&&Dt(i,r||i.root),e.__.onUnmount=function(){var t=i.opts.dataIs;Ut(i.parent.tags,t,i),Ut(i.__.parent.tags,t,i),i.unmount()})))}(t,this,e);if((!t.wasParsedOnce||t.value!==e)&&(t.value=e,t.wasParsedOnce=!0,!y||p||f||i)){if(m||(e=""),!r)return e+="",void(s&&(t.parent=s,"TEXTAREA"===s.tagName?(s.value=e,q||(n.nodeValue=e)):n.nodeValue=e));switch(!0){case ct(e):b=r,Rt.test(b)&&Bt(r,e,n,this);break;case i:W(n,r===v?!e:e);break;default:t.bool&&(n[r]=e),h&&n.value!==e?n.value=e:m&&!1!==e&&S(n,r,e),f&&n.hidden&&W(n,!1)}var b}}}}function Gt(t){mt(t,Ft.bind(this))}function Kt(t,e,n,r,i){if(!t||!n){var o=t?Et.call(this):e||this;mt(i,(function(t){t.expr&&Ft.call(o,t.expr),r[xt(t.name).replace(c,"")]=t.expr?t.expr.value:t.value}))}}function Jt(t){if(!t){var e=Object.keys(a);return e+Jt(e)}return t.filter((function(t){return!/[^-\w]/.test(t)})).reduce((function(t,e){var n=e.trim().toLowerCase();return t+",["+f+'="'+n+'"]'}),"")}function Zt(t,e){var n=this.name,r=this.tmpl,i=this.css,o=this.attrs,u=this.onCreate;return a[n]||(Wt(n,r,i,o,u),a[n].class=this.constructor),Ne(t,n,e,this),i&&R.inject(),this}function Wt(t,e,n,r,i){return ct(r)&&(i=r,/^[\w-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(ct(n)?i=n:R.add(n,t)),t=t.toLowerCase(),a[t]={name:t,tmpl:e,attrs:r,fn:i},t}function Xt(t,e,n,r,i){return n&&R.add(n,t),a[t]={name:t,tmpl:e,attrs:r,fn:i},t}function Yt(t,e,n){var r,i,o=[];if(R.inject(),(lt(e)||ct(e))&&(n=e,e=0),r=dt(t)?(t="*"===t?i=Jt():t+Jt(t.split(/, */)))?J(t):[]:t,"*"===e){if(e=i||Jt(),r.tagName)r=J(e,r);else{var a=[];mt(r,(function(t){return a.push(J(e,t))})),r=a}e=0}return function t(r){if(r.tagName){var i,a=X(r,f);e&&a!==e&&(a=e,S(r,f,e)),(i=Ne(r,a||r.tagName.toLowerCase(),ct(n)?n():n))&&o.push(i)}else r.length&&mt(r,t)}(r),o}var te={},ee=te[s]={},ne=0;function re(t,e,n){if(lt(t))re("__"+ne+++"__",t,!0);else{var r=n?ee:te;if(!e){if(Q(r[t]))throw new Error("Unregistered mixin: "+t);return r[t]}r[t]=ct(e)?F(e.prototype,r[t]||{})&&e:F(r[t]||{},e)}}function ie(){return mt(o,(function(t){return t.update()}))}function oe(t){return R.remove(t),delete a[t]}var ae=Object.freeze({Tag:Zt,tag:Wt,tag2:Xt,mount:Yt,mixin:re,update:ie,unregister:oe,version:"v3.13.2"});function ue(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return mt(e,(function(e){var n,r,i=[],o=["init","__proto__"];e=dt(e)?re(e):e,n=ct(e)?new e:e;var a=Object.getPrototypeOf(n);do{i=i.concat(Object.getOwnPropertyNames(r||n))}while(r=Object.getPrototypeOf(r||n));mt(i,(function(e){if(!vt(o,e)){var r=U(n,e)||U(a,e),i=r&&(r.get||r.set);!t.hasOwnProperty(e)&&i?Object.defineProperty(t,e,r):t[e]=ct(n[e])?n[e].bind(t):n[e]}})),n.init&&n.init.bind(t)(t.opts)})),t}function se(t,e){var n,r=this.parent;r&&(pt(n=r.tags[t])?n.splice(e,0,n.splice(n.indexOf(this),1)[0]):At(r.tags,t,this))}function ce(t,e){for(var n,r=this.__.head,i=nt();r;)if(n=r.nextSibling,i.appendChild(r),(r=n)===this.__.tail){i.appendChild(r),t.insertBefore(i,e.__.head);break}}function le(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function fe(t,e){t.splice(e,1),this.unmount(),Ut(this.parent,this,this.__.tagName,!0)}function pe(t){var e=this;mt(Object.keys(this.tags),(function(n){se.apply(e.tags[n],[n,t])}))}function he(t,e,n){n?ce.apply(this,[t,e]):rt(t,this.root,e.root)}function de(t,e,n){n?Qt.apply(this,[t,e]):rt(t,this.root,e.root)}function ge(t,e){e?Qt.call(this,t):t.appendChild(this.root)}function ve(t,e,n){var r=typeof X(t,d)!==b||Y(t,d),i=X(t,m),o=!!i&&B.hasExpr(i),u=Ot(t),s=a[u],c=t.parentNode,l=Z(),f=Nt(t),g=X(t,p),v=[],y=t.innerHTML,w=!a[u],x="VIRTUAL"===t.tagName,k=[];return Y(t,h),Y(t,m),(n=B.loopKeys(n)).isLoop=!0,g&&Y(t,p),c.insertBefore(l,t),c.removeChild(t),n.update=function(){n.value=B(n.val,e);var a=n.value,c=nt(),p=!pt(a)&&!dt(a),h=l.parentNode,d=[],m=p&&!!a;if(h){p&&(a=a?Object.keys(a).map((function(t){return le(n,a[t],t)})):[]);var b=0;mt(a,(function(l,C){var A=C-b,N=!m&&n.key?le(n,l,C):l;if(!g||B(g,F(G(e),N))){var O=function(t,e,n,r){return t?r?B(t,n):e[t]:e}(i,l,N,o),E=!p&&r&&typeof l===_||i,j=k.indexOf(O),T=-1===j,q=!T&&E?j:A,z=v[q],S=A>=k.length,L=E&&T||!E&&!z||!v[A];L?((z=Ae(s,{parent:e,isLoop:!0,isAnonymous:w,tagName:u,root:t.cloneNode(w),item:N,index:A},y)).mount(),S?ge.apply(z,[c||h,x]):de.apply(z,[h,v[A],x]),S||k.splice(A,0,N),v.splice(A,0,z),f&&At(e.tags,u,z,!0)):q!==A&&E&&((i||vt(a,k[q]))&&(he.apply(z,[h,v[A],x]),v.splice(A,0,v.splice(q,1)[0]),k.splice(A,0,k.splice(q,1)[0])),n.pos&&(z[n.pos]=A),!f&&z.tags&&pe.call(z,A)),F(z.__,{item:N,index:A,parent:e}),d[A]=O,L||z.update(N)}else b++})),function(t,e,n){for(var r=e.length,i=t.length-n;r>i;)r--,fe.apply(e[r],[e,r])}(a,v,b),k=d.slice(),h.insertBefore(c,l)}},n.unmount=function(){mt(v,(function(t){t.unmount()}))},n}var me={init:function(t,e,n,r){return this.dom=t,this.attr=n,this.rawValue=r,this.parent=e,this.hasExp=B.hasExpr(r),this},update:function(){var t=this.value,e=this.parent&&Vt(this.parent),n=this.dom.__ref||this.tag||this.dom;this.value=this.hasExp?B(this.rawValue,this.parent):this.rawValue,!st(t)&&e&&Ut(e.refs,t,n),!st(this.value)&&dt(this.value)?(e&&At(e.refs,this.value,n,null,this.parent.__.index),this.value!==t&&S(this.dom,this.attr,this.value)):Y(this.dom,this.attr),this.dom.__ref||(this.dom.__ref=n)},unmount:function(){var t=this.tag||this.dom,e=this.parent&&Vt(this.parent);!st(this.value)&&e&&Ut(e.refs,this.value,t)}};function ye(t,e,n,r){return G(me).init(t,e,n,r)}function be(t){mt(t,(function(t){t.unmount?t.unmount(!0):t.tagName?t.tag.unmount(!0):t.unmount&&t.unmount()}))}var _e={init:function(t,e,n){Y(t,p),F(this,{tag:e,expr:n,stub:Z(),pristine:t});var r=t.parentNode;return r.insertBefore(this.stub,t),r.removeChild(t),this},update:function(){this.value=B(this.expr,this.tag),this.stub.parentNode&&(this.value&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=xe.apply(this.tag,[this.current,!0])):!this.value&&this.current&&(this.unmount(),this.current=null,this.expressions=[]),this.value&&Gt.call(this.tag,this.expressions))},unmount:function(){this.current&&(this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current)),be(this.expressions||[])}};function we(t,e,n){return G(_e).init(t,e,n)}function xe(t,e){var n=this,r=[];return ot(t,(function(i){var o,a,u=i.nodeType;if((e||i!==t)&&(3===u&&"STYLE"!==i.parentNode.tagName&&B.hasExpr(i.nodeValue)&&r.push({dom:i,expr:i.nodeValue}),1===u)){var s="VIRTUAL"===i.tagName;if(o=X(i,h))return s&&S(i,"loopVirtual",!0),r.push(ve(i,n,o)),!1;if(o=X(i,p))return r.push(we(i,n,o)),!1;if((o=X(i,f))&&B.hasExpr(o))return r.push({isRtag:!0,expr:o,dom:i,attrs:[].slice.call(i.attributes)}),!1;if(a=Nt(i),s&&(X(i,"virtualized")&&i.parentElement.removeChild(i),a||X(i,"virtualized")||X(i,"loopVirtual")||(a={tmpl:i.outerHTML})),a&&(i!==t||e)){var c=X(i,f);if(!s||c)return c&&s&&kt("Virtual tags shouldn't be used together with the \""+f+'" attribute - https://github.com/riot/riot/issues/2511'),r.push(Ht(a,{root:i,parent:n},i.innerHTML,n)),!1;S(i,"virtualized",!0);var l=Ae({tmpl:i.outerHTML},{root:i,parent:n},i.innerHTML);r.push(l)}ke.apply(n,[i,i.attributes,function(t,e){e&&r.push(e)}])}})),r}function ke(t,e,n){var r=this;mt(e,(function(e){if(!e)return!1;var i,o=e.name,a=ht(o);vt(l,o)&&t.tagName.toLowerCase()!==u?i=ye(t,r,o,e.value):B.hasExpr(e.value)&&(i={dom:t,expr:e.value,attr:o,bool:a}),n(e,i)}))}function Ce(t){var e=this.__,n=e.isAnonymous,r=e.skipAnonymous;wt(this,"isMounted",t),n&&r||(t?this.trigger("mount"):(this.trigger("unmount"),this.off("*"),this.__.wasCreated=!1))}function Ae(t,e,n){void 0===t&&(t={}),void 0===e&&(e={});var r,i=e.context||{},a=e.opts||{},u=e.parent,l=e.isLoop,f=!!e.isAnonymous,p=K.skipAnonymousTags&&f,h=e.item,d=e.index,g=t.tmpl,v=[],m=e.root,b=e.tagName||Ot(m),_="virtual"===b,w=!_&&!g;return w||l&&f?r=m:(_||(m.innerHTML=""),r=It(g,n,ft(m))),p||H(i),t.name&&m._tag&&m._tag.unmount(!0),wt(i,"__",{impl:t,root:m,skipAnonymous:p,implAttrs:[],isAnonymous:f,instAttrs:[],innerHTML:n,tagName:b,index:d,isLoop:l,isInline:w,item:h,parent:u,listeners:[],virts:[],wasCreated:!1,tail:null,head:null}),[["isMounted",!1],["_riot_id",_t()],["root",m],["opts",a,{writable:!0,enumerable:!0}],["parent",u||null],["tags",{}],["refs",{}],["update",function(t){return function(t,e,n){var r=t.__,i={},o=t.isMounted&&!r.skipAnonymous;return r.isAnonymous&&r.parent&&F(t,r.parent),F(t,e),Kt.apply(t,[r.isLoop,r.parent,r.isAnonymous,i,r.instAttrs]),o&&t.isMounted&&ct(t.shouldUpdate)&&!t.shouldUpdate(e,i)?t:(F(t.opts,i),o&&t.trigger("update",e),Gt.call(t,n),o&&t.trigger("updated"),t)}(i,t,v)}],["mixin",function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return ue.apply(void 0,[i].concat(t))}],["mount",function(){return function(t,e,n,r){var i=t.__,o=i.root;o._tag=t,ke.apply(i.parent,[o,o.attributes,function(e,n){!i.isAnonymous&&me.isPrototypeOf(n)&&(n.tag=t),e.expr=n,i.instAttrs.push(e)}]),et(i.impl.attrs,(function(t,e){i.implAttrs.push({name:t,value:e})})),ke.apply(t,[o,i.implAttrs,function(t,e){e?n.push(e):S(o,t.name,t.value)}]),Kt.apply(t,[i.isLoop,i.parent,i.isAnonymous,r,i.instAttrs]);var a=re(s);if(a&&!i.skipAnonymous)for(var u in a)a.hasOwnProperty(u)&&t.mixin(a[u]);if(i.impl.fn&&i.impl.fn.call(t,r),i.skipAnonymous||t.trigger("before-mount"),mt(xe.apply(t,[e,i.isAnonymous]),(function(t){return n.push(t)})),t.update(i.item),!i.isAnonymous&&!i.isInline)for(;e.firstChild;)o.appendChild(e.firstChild);if(wt(t,"root",o),!i.skipAnonymous&&t.parent){var c=Vt(t.parent);c.one(c.isMounted?"updated":"mount",(function(){Ce.call(t,!0)}))}else Ce.call(t,!0);return t.__.wasCreated=!0,t}(i,r,v,a)}],["unmount",function(t){return function(t,e,n){var r=t.__,i=r.root,a=o.indexOf(t),u=i.parentNode;if(r.skipAnonymous||t.trigger("before-unmount"),et(r.impl.attrs,(function(t){yt(t,c)&&(t=t.slice(c.length)),Y(i,t)})),t.__.listeners.forEach((function(t){Object.keys(t[y]).forEach((function(e){t.removeEventListener(e,t[y][e])}))})),-1!==a&&o.splice(a,1),r.parent&&!r.isAnonymous){var s=Vt(r.parent);r.isVirtual?Object.keys(t.tags).forEach((function(e){return Ut(s.tags,e,t.tags[e])})):Ut(s.tags,r.tagName,t)}return t.__.virts&&mt(t.__.virts,(function(t){t.parentNode&&t.parentNode.removeChild(t)})),be(n),mt(r.instAttrs,(function(t){return t.expr&&t.expr.unmount&&t.expr.unmount()})),e?tt(i,""):u&&u.removeChild(i),r.onUnmount&&r.onUnmount(),t.isMounted||Ce.call(t,!0),Ce.call(t,!1),delete i._tag,t}(i,t,v)}]].reduce((function(t,e){var n=e[0],r=e[1],o=e[2];return wt(i,n,r,o),t}),F(i,h))}function Ne(t,e,n,r){var i,u=a[e],s=a[e].class,c=r||(s?G(s.prototype):{}),l=t._innerHTML=t._innerHTML||t.innerHTML,f=F({root:t,opts:n,context:c},{parent:n?n.parent:null});return u&&t&&(i=Ae(u,f,l)),i&&i.mount&&(i.mount(!0),vt(o,i)||o.push(i)),i}var Oe=Object.freeze({arrayishAdd:At,getTagName:Ot,inheritParentProps:Et,mountTo:Ne,selectTags:Jt,arrayishRemove:Ut,getTag:Nt,initChildTag:Ht,moveChildTag:se,makeReplaceVirtual:Dt,getImmediateCustomParentTag:Vt,makeVirtual:Qt,moveVirtual:ce,unmountAll:be,createIfDirective:we,createRefDirective:ye}),Ee=K,je={tmpl:B,brackets:$,styleManager:R,vdom:o,styleNode:R.styleNode,dom:at,check:gt,misc:Ct,tags:Oe},Te=Zt,qe=Wt,ze=Xt,Se=Yt,Le=re,Me=ie,Pe=oe,Ie=H,Re=F({},ae,{observable:H,settings:Ee,util:je});e.settings=Ee,e.util=je,e.Tag=Te,e.tag=qe,e.tag2=ze,e.mount=Se,e.mixin=Le,e.update=Me,e.unregister=Pe,e.version="v3.13.2",e.observable=Ie,e.default=Re,Object.defineProperty(e,"__esModule",{value:!0})}(e)}).call(this,n(0))},function(t){t.exports=JSON.parse('{"anime":{"name":"アニメ","quiz":[{"question_statement":"問題文1","answer":0,"choices":["1","2","3","4"]},{"question_statement":"問題文2","answer":1,"choices":["1","2","3","4"]},{"question_statement":"問題文3","answer":2,"choices":["1","2","3","4"]},{"question_statement":"問題文4","answer":3,"choices":["1","2","3","4"]}]}}')},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"名無しさん";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.correct_answer_count=0}var e,n,i;return e=t,(n=[{key:"answer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Questioner,e=arguments.length>1?arguments[1]:void 0,n=t.judgeQuiz(e);return this.correct_answer_count+=n?1:0,n}},{key:"getCollectAnswerCount",value:function(){return this.correct_answer_count}}])&&r(e.prototype,n),i&&r(e,i),t}(),o=i=i;var a=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.getQuestionStatement=function(){return e.question_statement},this.getChoices=function(){return e.choices},this.getAnswer=function(){return e.answer}},u=a=a,s=n(1);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!s[e])throw Error("そのジャンルの問題はありません");this.questions=JSON.parse(JSON.stringify(s[e])),this.current_quiz=null}var e,n,r;return e=t,(n=[{key:"giveQuiz",value:function(){var t=this.questions.quiz.splice(Math.floor(Math.random()*this.questions.quiz.length),1)[0];if(!t)throw Error("クイズが空です");return this.current_quiz=new u(t),this.current_quiz}},{key:"judgeQuiz",value:function(t){return this.current_quiz.getAnswer()===t}}])&&c(e.prototype,n),r&&c(e,r),t}(),f=l=l;function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.question_max=0,this.player=null,this.questioner=null,this.current_number=0}var e,n,r;return e=t,(n=[{key:"getGenre",value:function(){return Object.keys(s).map((function(t){return{id:t,name:s[t].name}}))}},{key:"isGameEnd",value:function(){return this.question_max===this.current_number}},{key:"getCurrentNumber",value:function(){return this.current_number}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return!(!t||!e)&&(this.player=new o(t),this.questioner=new f(e),this.question_max=n,this)}},{key:"getQuestion",value:function(){if(this.question_max===this.current_number)return!1;try{var t=this.questioner.giveQuiz();return this.current_number++,t}catch(t){return console.log(t),!1}}},{key:"answer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=Number(t),this.player.answer(this.questioner,t)}},{key:"end",value:function(){var t=this.player.name,e=this.player.getCollectAnswerCount(),n=this.current_number;return this.player=null,this.questioner=null,this.current_number=0,{player_name:t,collect_count:e,current_number:n}}}])&&p(e.prototype,n),r&&p(e,r),t}();e.a=h=h},function(t,e,n){"use strict";n.r(e),function(t){var e=n(2);n(4),t.mount("app",{QuizApp:e.a,obs:t.observable()})}.call(this,n(0))},function(t,e,n){"use strict";n.r(e),function(t){n(5),n(6),n(7),n(8);t.tag2("app",'<div ref="container" data-is="{view}" app="{app}" view="{view}" opt="{opt}" obs="{obs}"></div>',"","",(function(t){var e=this;this.obs=t.obs,this.app=new t.QuizApp,this.view="quiztop",this.opt={},this.obs.on("page",(function(t,n){e.view=t,e.opt=n||e.opt,e.update()}))}))}.call(this,n(0))},function(t,e,n){(function(t){t.tag2("quiztop",'名前:<input type="text" id="name" ref="name" value="test"><br> ジャンル: <select name="genre" ref="genre"> <option each="{genres}" riot-value="{id}">{name}</option> </select><br> <input type="button" onclick="{onQuizStartClick}" value="クイズを始める">',"","",(function(t){var e=this,n=t.app,r=t.obs;this.genres=n.getGenre(),this.onQuizStartClick=function(){if(!e.refs.name.value)return alert("名前を入力してください");n.initialize(e.refs.name.value,e.refs.genre.value,3)&&r.trigger("page","quizquestion")}}))}).call(this,n(0))},function(t,e,n){(function(t){t.tag2("quizquestion",'<p>第{count}問</p> <p>{statement}</p> <virtual each="{choice,i in choices}"> <input type="radio" name="choice" riot-value="{i}" onchange="{onAnswerChange}">{choice}<br> </virtual> <input onclick="{onAnswerClick}" type="button" value="回答する">',"","",(function(t){var e=this,n=t.app,r=t.obs;this.quiz=n.getQuestion(),this.statement=this.quiz.getQuestionStatement(),this.choices=this.quiz.getChoices(),this.count=n.getCurrentNumber(),this.answer=null,this.onAnswerChange=function(t){e.answer=t.target.value},this.onAnswerClick=function(){if(!e.answer)return alert("回答を選択してください");r.trigger("page","quizresult",{result:n.answer(e.answer)})}}))}).call(this,n(0))},function(t,e,n){(function(t){t.tag2("quizresult",'<p>第{count}問は…{(result) ? ⁗正解⁗ : ⁗不正解⁗}でした！</p> <input type="button" onclick="{onNextButtonClick}" value="次へ">',"","",(function(t){var e=t.app,n=t.obs;this.result=t.opt.result,this.count=e.getCurrentNumber(),this.isGameEnd=e.isGameEnd(),this.onNextButtonClick=function(){e.isGameEnd()?n.trigger("page","quizend"):n.trigger("page","quizquestion")}}))}).call(this,n(0))},function(t,e,n){(function(t){t.tag2("quizend",'<p>クイズ終了</p> <p>成績は{result.collect_count} / {result.current_number}でした！</p> <p><input type="button" onclick="{onMoreGameButtonClick}" value="もう一回やる">',"","",(function(t){var e=t.app,n=t.obs;this.result=e.end(),this.onMoreGameButtonClick=function(){n.trigger("page","quiztop")}}))}).call(this,n(0))}]);