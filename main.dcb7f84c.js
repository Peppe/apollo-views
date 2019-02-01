!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=47)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(7),i=n(18);t.exports=n(3)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(14)("wks"),i=n(6),r=n(0).Symbol,s="function"==typeof r;(t.exports=function(t){return o[t]||(o[t]=s&&r[t]||(s?r:i)("Symbol."+t))}).store=o},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(8),i=n(28),r=n(29),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(9);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var o=n(31),i=n(19);t.exports=function(t){return o(i(t))}},function(t,e,n){var o=n(0),i=n(1),r=n(4),s=n(6)("src"),a=Function.toString,l=(""+a).split("toString");n(5).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(r(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(r(n,s)||i(n,s,t[e]?""+t[e]:l.join(String(e)))),t===o?t[e]=n:a?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},function(t,e,n){var o=n(14)("keys"),i=n(6);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var o=n(5),i=n(0),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(9),i=n(0).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(40),i=n(22);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(7).f,i=n(4),r=n(2)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},function(t,e,n){},function(t,e,n){for(var o=n(26),i=n(20),r=n(12),s=n(0),a=n(1),l=n(10),c=n(2),d=c("iterator"),u=c("toStringTag"),h=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(p),f=0;f<m.length;f++){var _,y=m[f],v=p[y],b=s[y],g=b&&b.prototype;if(g&&(g[d]||a(g,d,h),g[u]||a(g,u,y),l[y]=h,v))for(_ in o)g[_]||r(g,_,o[_],!0)}},function(t,e,n){"use strict";var o=n(27),i=n(30),r=n(10),s=n(11);t.exports=n(33)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var o=n(2)("unscopables"),i=Array.prototype;null==i[o]&&n(1)(i,o,{}),t.exports=function(t){i[o][t]=!0}},function(t,e,n){t.exports=!n(3)&&!n(16)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(9);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";var o=n(15),i=n(34),r=n(12),s=n(1),a=n(10),l=n(37),c=n(23),d=n(45),u=n(2)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,m,f,_,y){l(n,e,m);var v,b,g,w=function(t){if(!h&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",A="values"==f,S=!1,P=t.prototype,C=P[u]||P["@@iterator"]||f&&P[f],k=C||w(f),E=f?A?w("entries"):k:void 0,T="Array"==e&&P.entries||C;if(T&&(g=d(T.call(new t)))!==Object.prototype&&g.next&&(c(g,x,!0),o||"function"==typeof g[u]||s(g,u,p)),A&&C&&"values"!==C.name&&(S=!0,k=function(){return C.call(this)}),o&&!y||!h&&!S&&P[u]||s(P,u,k),a[e]=k,a[x]=p,f)if(v={values:A?k:w("values"),keys:_?k:w("keys"),entries:E},y)for(b in v)b in P||r(P,b,v[b]);else i(i.P+i.F*(h||S),e,v);return v}},function(t,e,n){var o=n(0),i=n(5),r=n(1),s=n(12),a=n(35),l=function(t,e,n){var c,d,u,h,p=t&l.F,m=t&l.G,f=t&l.S,_=t&l.P,y=t&l.B,v=m?o:f?o[e]||(o[e]={}):(o[e]||{}).prototype,b=m?i:i[e]||(i[e]={}),g=b.prototype||(b.prototype={});for(c in m&&(n=e),n)u=((d=!p&&v&&void 0!==v[c])?v:n)[c],h=y&&d?a(u,o):_&&"function"==typeof u?a(Function.call,u):u,v&&s(v,c,u,t&l.U),b[c]!=u&&r(b,c,h),_&&g[c]!=u&&(g[c]=u)};o.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e,n){var o=n(36);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var o=n(38),i=n(18),r=n(23),s={};n(1)(s,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:i(1,n)}),r(t,e+" Iterator")}},function(t,e,n){var o=n(8),i=n(39),r=n(22),s=n(13)("IE_PROTO"),a=function(){},l=function(){var t,e=n(17)("iframe"),o=r.length;for(e.style.display="none",n(44).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;o--;)delete l.prototype[r[o]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=o(t),n=new a,a.prototype=null,n[s]=t):n=l(),void 0===e?n:i(n,e)}},function(t,e,n){var o=n(7),i=n(8),r=n(20);t.exports=n(3)?Object.defineProperties:function(t,e){i(t);for(var n,s=r(e),a=s.length,l=0;a>l;)o.f(t,n=s[l++],e[n]);return t}},function(t,e,n){var o=n(4),i=n(11),r=n(41)(!1),s=n(13)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),l=0,c=[];for(n in a)n!=s&&o(a,n)&&c.push(n);for(;e.length>l;)o(a,n=e[l++])&&(~r(c,n)||c.push(n));return c}},function(t,e,n){var o=n(11),i=n(42),r=n(43);t.exports=function(t){return function(e,n,s){var a,l=o(e),c=i(l.length),d=r(s,c);if(t&&n!=n){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((t||d in l)&&l[d]===n)return t||d||0;return!t&&-1}}},function(t,e,n){var o=n(21),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(21),i=Math.max,r=Math.min;t.exports=function(t,e){return(t=o(t))<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(0).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(4),i=n(46),r=n(13)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var o=n(19);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";n.r(e);n(24);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const o=new WeakMap,i=t=>"function"==typeof t&&o.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null)=>{let o=e;for(;o!==n;){const e=o.nextSibling;t.removeChild(o),o=e}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,u=new RegExp(`${c}|${d}`),h="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;let n=-1,o=0;const i=[],r=e=>{const s=e.content,a=document.createTreeWalker(s,133,null,!1);let l=0;for(;a.nextNode();){n++;const e=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const i=e.attributes;let r=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=t.strings[o],r=_.exec(i)[2],s=r.toLowerCase()+h,a=e.getAttribute(s).split(u);this.parts.push({type:"attribute",index:n,name:r,strings:a}),e.removeAttribute(s),o+=a.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const r=e.parentNode,s=t.split(u),a=s.length-1;for(let t=0;t<a;t++)r.insertBefore(""===s[t]?f():document.createTextNode(s[t]),e),this.parts.push({type:"node",index:++n});""===s[a]?(r.insertBefore(f(),e),i.push(e)):e.data=s[a],o+=a}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&n!==l||(n++,t.insertBefore(f(),e)),l=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(i.push(e),n--),o++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of i)t.parentNode.removeChild(t)}}const m=t=>-1!==t.index,f=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,o=0;const i=t=>{const r=document.createTreeWalker(t,133,null,!1);let s=r.nextNode();for(;n<e.length&&null!==s;){const t=e[n];if(m(t))if(o===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options));n++}else o++,"TEMPLATE"===s.nodeName&&i(s.content),s=r.nextNode();else this._parts.push(void 0),n++}};return i(t),r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class v{constructor(t,e,n,o){this.strings=t,this.values=e,this.type=n,this.processor=o}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],o=_.exec(t);e+=o?t.substr(0,o.index)+o[1]+o[2]+h+o[3]+c:t+d}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=t=>null===t||!("object"==typeof t||"function"==typeof t);class g{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let o=0;o<e;o++){n+=t[o];const e=this.parts[o];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||b(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(b(t)?t!==this.value&&this._commitText(t):t instanceof v?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),o=n._clone();n.update(t.values),this._commitNode(o),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,o=0;for(const i of t)void 0===(n=e[o])&&(n=new x(this.options),e.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(e[o-1])),n.setValue(i),n.commit(),o++;o<e.length&&(e.length=o,this.clear(n&&n.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class S extends g{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends w{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class k{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),o&&(this._options=E(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(t,e,n,o){const i=e[0];return"."===i?new S(t,e.slice(1),n).parts:"@"===i?[new k(t,e.slice(1),o.eventContext)]:"?"===i?[new A(t,e.slice(1),n)]:new g(t,e,n).parts}handleTextExpression(t){return new x(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(c);return void 0===(n=e.keyString.get(o))&&(n=new p(t,t.getTemplateElement()),e.keyString.set(o,n)),e.stringsArray.set(t.strings,n),n}const N=new Map,L=new WeakMap,I=(t,...e)=>new v(t,e,"html",T),z=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function M(t,e){const{element:{content:n},parts:o}=t,i=document.createTreeWalker(n,z,null,!1);let r=F(o),s=o[r],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=o[r=F(o,r)]}c.forEach(t=>t.parentNode.removeChild(t))}const B=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,z,null,!1);for(;n.nextNode();)e++;return e},F=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(m(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const R=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),D=!1);const j=t=>e=>{const n=R(e.type,t);let o=N.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},N.set(n,o));let i=o.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(c);if(void 0===(i=o.keyString.get(r))){const n=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(n,t),i=new p(e,n),o.keyString.set(r,i)}return o.stringsArray.set(e.strings,i),i},V=["html","svg"],H=new Set,q=(t,e,n)=>{H.add(n);const o=t.querySelectorAll("style");if(0===o.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const i=document.createElement("style");for(let t=0;t<o.length;t++){const e=o[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if((t=>{V.forEach(e=>{const n=N.get(R(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),M(t,n)})})})(n),function(t,e,n=null){const{element:{content:o},parts:i}=t;if(null==n)return void o.appendChild(e);const r=document.createTreeWalker(o,z,null,!1);let s=F(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=B(e),n.parentNode.insertBefore(e,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=F(i,s);return}s=F(i,s)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),M(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const U={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:W},G=Promise.resolve(!0),J=1,X=4,K=8,Z=16,Q=32;class $ extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const o=this._attributeNameForProperty(n,e);void 0!==o&&(this._attributeToPropertyMap.set(o,n),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const o=this[t];this[n]=e,this.requestUpdate(t,o)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=W){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,o=e.converter||U,i="function"==typeof o?o:o.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,o=e.converter;return(o&&o.toAttribute||U.toAttribute)(t,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Y){const o=this.constructor,i=o._attributeNameForProperty(t,n);if(void 0!==i){const t=o._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|K,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~K}}_attributeToProperty(t,e){if(this._updateState&K)return;const n=this.constructor,o=n._attributeToPropertyMap.get(t);if(void 0!==o){const t=n._classProperties.get(o)||Y;this._updateState=this._updateState|Z,this[o]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Z}}requestUpdate(t,e){let n=!0;if(void 0!==t&&!this._changedProperties.has(t)){const o=this.constructor,i=o._classProperties.get(t)||Y;o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|X;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}$.finalized=!0;nt((t,e)=>t.querySelector(e)),nt((t,e)=>t.querySelectorAll(e));const tt=(t,e,n)=>{Object.defineProperty(e,n,t)},et=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function nt(t){return e=>(n,o)=>{const i={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==o?tt(i,n,o):et(i,n)}}const ot="adoptedStyleSheets"in Document.prototype;Symbol();const it=t=>t.flat?t.flat(1/0):
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function t(e,n=[]){for(let o=0,i=e.length;o<i;o++){const i=e[o];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class rt extends ${static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){it(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}rt.finalized=!0,rt.render=((t,e,n)=>{const o=n.scopeName,i=L.has(e),r=e instanceof ShadowRoot&&D&&t instanceof v,a=r&&!H.has(o),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let o=L.get(e);void 0===o&&(s(e,e.firstChild),L.set(e,o=new x(Object.assign({templateFactory:O},n))),o.appendInto(e)),o.setValue(t),o.commit()})(t,l,Object.assign({templateFactory:j(o)},n)),a){const t=L.get(l);L.delete(l),t.value instanceof y&&q(l,t.value.template,o),s(e,e.firstChild),e.appendChild(l),L.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)});n(25);customElements.define("vaadin-lumo-styles",class extends HTMLElement{static get version(){return"1.4.1"}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let st,at=null,lt=window.HTMLImports&&window.HTMLImports.whenReady||null;function ct(t){requestAnimationFrame(function(){lt?lt(t):(at||(at=new Promise(t=>{st=t}),"complete"===document.readyState?st():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&st()})),at.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const dt="__seenByShadyCSS",ut="__shadyCSSCachedStyle";let ht=null,pt=null;class mt{constructor(){this.customStyles=[],this.enqueued=!1,ct(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&pt&&(this.enqueued=!0,ct(pt))}addCustomStyle(t){t[dt]||(t[dt]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[ut])return t[ut];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[ut])continue;const o=this.getStyleForCustomStyle(n);if(o){const t=o.__appliedElement||o;ht&&ht(t),n[ut]=t}}return t}}mt.prototype.addCustomStyle=mt.prototype.addCustomStyle,mt.prototype.getStyleForCustomStyle=mt.prototype.getStyleForCustomStyle,mt.prototype.processStyles=mt.prototype.processStyles,Object.defineProperties(mt.prototype,{transformCallback:{get:()=>ht,set(t){ht=t}},validateCallback:{get:()=>pt,set(t){let e=!1;pt||(e=!0),pt=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ft(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _t=!(window.ShadyDOM&&window.ShadyDOM.inUse);let yt,vt;function bt(t){yt=(!t||!t.shimcssproperties)&&(_t||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(vt=window.ShadyCSS.cssBuild);const gt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?yt=window.ShadyCSS.nativeCss:window.ShadyCSS?(bt(window.ShadyCSS),window.ShadyCSS=void 0):bt(window.WebComponents&&window.WebComponents.flags);const wt=yt,xt=new mt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){xt.processStyles(),ft(t,e)},styleElement(t){xt.processStyles()},styleDocument(t){xt.processStyles(),ft(document.body,t)},getComputedStyleValue:(t,e)=>(function(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""})(t,e),flushCustomStyles(){},nativeCss:wt,nativeShadow:_t,cssBuild:vt,disableRuntime:gt}),window.ShadyCSS.CustomStyleInterface=xt,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let At,St,Pt=/(url\()([^)]*)(\))/g,Ct=/(^\/)|(^#)|(^[\w-\d]*:)/;function kt(t,e){if(t&&Ct.test(t))return t;if(void 0===At){At=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",At="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),At?new URL(t,e).href:(St||((St=document.implementation.createHTMLDocument("temp")).base=St.createElement("base"),St.head.appendChild(St.base),St.anchor=St.createElement("a"),St.body.appendChild(St.anchor)),St.base.href=e,St.anchor.href=t,St.anchor.href||t)}function Et(t,e){return t.replace(Pt,function(t,n,o,i){return n+"'"+kt(o.replace(/["']/g,""),e)+"'"+i})}function Tt(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let Ot=Tt(document.baseURI||window.location.href);let Nt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let Lt=!1;let It=!1;let zt=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Mt={},Bt={};function Ft(t,e){Mt[t]=Bt[t.toLowerCase()]=e}function Rt(t){return Mt[t]||Bt[t.toLowerCase()]}class Dt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=Rt(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,o){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=kt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Tt(e)}return this.__assetpath}register(t){if(t=t||this.id){if(It&&void 0!==Rt(t))throw Ft(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ft(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Dt.prototype.modules=Mt,customElements.define("dom-module",Dt);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const jt="link[rel=import][type~=css]",Vt="include",Ht="shady-unscoped";function qt(t){return Dt.import(t)}function Ut(t){const e=Et((t.body?t.body:t).textContent,t.baseURI),n=document.createElement("style");return n.textContent=e,n}function Wt(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...Yt(e[t]));return n}function Yt(t){const e=qt(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Jt(e));const n=e.querySelector("template");n&&t.push(...Gt(n,e.assetpath)),e._styles=t}return e._styles}function Gt(t,e){if(!t._styles){const n=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let i=o[t],r=i.getAttribute(Vt);r&&n.push(...Wt(r).filter(function(t,e,n){return n.indexOf(t)===e})),e&&(i.textContent=Et(i.textContent,e)),n.push(i)}t._styles=n}return t._styles}function Jt(t){const e=[],n=t.querySelectorAll(jt);for(let t=0;t<n.length;t++){let o=n[t];if(o.import){const t=o.import,n=o.hasAttribute(Ht);if(n&&!t._unscopedStyle){const e=Ut(t);e.setAttribute(Ht,""),t._unscopedStyle=e}else t._style||(t._style=Ut(t));e.push(n?t._unscopedStyle:t._style)}}return e}function Xt(t){let e=qt(t);if(e&&void 0===e._cssText){let t=Kt(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const o=Gt(t,e);for(let t=0;t<o.length;t++){let e=o[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Kt(t){let e="",n=Jt(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zt="include",Qt=window.ShadyCSS.CustomStyleInterface;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,Qt.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(Zt);return e&&(t.removeAttribute(Zt),t.textContent=function(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=Xt(e[t]);return n}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}});const $t=document.createElement("template");$t.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($t.content);const te=document.createElement("template");te.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(te.content);const ee=document.createElement("template");ee.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(ee.content);const ne=document.createElement("template");ne.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(ne.content);const oe=document.createElement("template");oe.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(oe.content);const ie=document.createElement("template");ie.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ie.content);const re=document.createElement("template");re.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(re.content);const se=document.createElement("template");se.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(se.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ae{constructor(t){this.value=t.toString()}toString(){return this.value}}function le(t){if(t instanceof ae)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const ce=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof ae)return le(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(n)+t[o+1],t[0]),n},de=ce`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(de.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ue=0;function he(){}he.prototype.__mixinApplications,he.prototype.__mixinSet;const pe=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=ue++;return function(o){let i=o.__mixinSet;if(i&&i[n])return o;let r=e,s=r.get(o);s||(s=t(o),r.set(o,s));let a=Object.create(s.__mixinSet||i||null);return a[n]=!0,s.__mixinSet=a,s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function me(t){return t.indexOf(".")>=0}function fe(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function _e(t,e){return 0===t.indexOf(e+".")}function ye(t,e){return 0===e.indexOf(t+".")}function ve(t,e,n){return e+n.slice(t.length)}function be(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let o=t[n].toString().split(".");for(let t=0;t<o.length;t++)e.push(o[t])}return e.join(".")}return t}function ge(t){return Array.isArray(t)?be(t).split("."):t.toString().split(".")}function we(t,e,n){let o=t,i=ge(e);for(let t=0;t<i.length;t++){if(!o)return;o=o[i[t]]}return n&&(n.path=i.join(".")),o}function xe(t,e,n){let o=t,i=ge(e),r=i[i.length-1];if(i.length>1){for(let t=0;t<i.length-1;t++){if(!(o=o[i[t]]))return}o[r]=n}else o[e]=n;return i.join(".")}const Ae={},Se=/-[a-z]/g,Pe=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ce(t){return Ae[t]||(Ae[t]=t.indexOf("-")<0?t:t.replace(Se,t=>t[1].toUpperCase()))}function ke(t){return Ae[t]||(Ae[t]=t.replace(Pe,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ee=0,Te=0,Oe=[],Ne=0,Le=document.createTextNode("");new window.MutationObserver(function(){const t=Oe.length;for(let e=0;e<t;e++){let t=Oe[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Oe.splice(0,t),Te+=t}).observe(Le,{characterData:!0});const Ie={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},ze={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Me={run:t=>(Le.textContent=Ne++,Oe.push(t),Ee++),cancel(t){const e=t-Te;if(e>=0){if(!Oe[e])throw new Error("invalid async handle: "+t);Oe[e]=null}}},Be=Me,Fe=pe(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let o=this.__data[t],i=this._shouldPropertyChange(t,e,o);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=o),this.__data[t]=e,this.__dataPending[t]=e),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Be.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,o){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,o)}_attributeToProperty(t,e,n){if(!this.__serializing){const o=this.__dataAttributes,i=o&&o[t]||t;this[i]=this._deserializeValue(e,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const o=this._serializeValue(e);void 0===o?t.removeAttribute(n):t.setAttribute(n,o)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}}),Re={};let De=HTMLElement.prototype;for(;De;){let t=Object.getOwnPropertyNames(De);for(let e=0;e<t.length;e++)Re[t[e]]=!0;De=Object.getPrototypeOf(De)}const je=pe(t=>{const e=Fe(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Ce(t[e]))}static attributeNameForProperty(t){return ke(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!Re[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),Ve={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function He(t){let e=t.getAttribute("is");if(e&&Ve[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function qe(t,e){let n=e.parentInfo&&qe(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,o=0;t;t=t.nextSibling)if(e.parentIndex===o++)return t}function Ue(t,e,n,o){o.id&&(e[o.id]=n)}function We(t,e,n){if(n.events&&n.events.length)for(let o,i=0,r=n.events;i<r.length&&(o=r[i]);i++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function Ye(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const Ge=pe(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let o,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(i,e,n)||o,i.firstChild&&(o=this._parseTemplateChildNodes(i,e,n)||o),i.hasAttributes&&i.hasAttributes()&&(o=this._parseTemplateNodeAttributes(i,e,n)||o),o}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let o,i=t.firstChild,r=0;i;i=o){if("template"==i.localName&&(i=He(i)),o=i.nextSibling,i.nodeType===Node.TEXT_NODE){let n=o;for(;n&&n.nodeType===Node.TEXT_NODE;)i.textContent+=n.textContent,o=n.nextSibling,t.removeChild(n),n=o;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let s={parentIndex:r,parentInfo:n};this._parseTemplateNode(i,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),i.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,n){let o=this._parseTemplate(t,e);return(o.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),n.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,n){let o=!1,i=Array.from(t.attributes);for(let r,s=i.length-1;r=i[s];s--)o=this._parseTemplateNodeAttribute(t,e,n,r.name,r.value)||o;return o}static _parseTemplateNodeAttribute(t,e,n,o,i){return"on-"===o.slice(0,3)?(t.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:i}),!0):"id"===o&&(n.id=i,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,o=e.content||t.content,i=document.importNode(o,!0);i.__noInsertionPoint=!e.hasInsertionPoint;let r=i.nodeList=new Array(n.length);i.$={};for(let t,e=0,o=n.length;e<o&&(t=n[e]);e++){let n=r[e]=qe(i,t);Ue(0,i.$,n,t),Ye(0,n,t),We(this,n,t)}return i=i}_addMethodEventListenerToNode(t,e,n,o){let i=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(o=o||t,0,n);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Je=0;const Xe={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ke=/[A-Z]/;let Ze;function Qe(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],o=n[t]=Array(e.length);for(let t=0;t<e.length;t++)o[t]=e[t]}}}else n=t[e]={};return n}function $e(t,e,n,o,i,r){if(e){let s=!1,a=Je++;for(let l in n)tn(t,e,a,l,n,o,i,r)&&(s=!0);return s}return!1}function tn(t,e,n,o,i,r,s,a){let l=!1,c=e[s?fe(o):o];if(c)for(let e,d=0,u=c.length;d<u&&(e=c[d]);d++)e.info&&e.info.lastRun===n||s&&!en(o,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,o,i,r,e.info,s,a),l=!0);return l}function en(t,e){if(e){let n=e.name;return n==t||e.structured&&_e(n,t)||e.wildcard&&ye(n,t)}return!0}function nn(t,e,n,o,i){let r="string"==typeof i.method?t[i.method]:i.method,s=i.property;r?r.call(t,t.__data[s],o[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function on(t,e,n){let o=fe(e);if(o!==e){return rn(t,ke(o)+"-changed",n[e],e),!0}return!1}function rn(t,e,n,o){let i={value:n,queueProperty:!0};o&&(i.path=o),t.dispatchEvent(new CustomEvent(e,{detail:i}))}function sn(t,e,n,o,i,r){let s=(r?fe(e):e)!=e?e:null,a=s?we(t,s):t.__data[e];s&&void 0===a&&(a=n[e]),rn(t,i.eventName,a,s)}function an(t,e,n,o,i){let r=t.__data[e];Nt&&(r=Nt(r,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,r)}function ln(t,e,n,o,i){let r=fn(t,e,n,o,i),s=i.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,r,!0):t[s]=r}function cn(t,e,n,o,i,r,s){n.bindings=n.bindings||[];let a={kind:o,target:i,parts:r,literal:s,isCompound:1!==r.length};if(n.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||ke(i)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let o=a.parts[n];o.compoundIndex=n,dn(t,e,a,o,l)}}function dn(t,e,n,o,i){if(!o.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let r=o.dependencies,s={index:i,binding:n,part:o,evaluator:t};for(let n=0;n<r.length;n++){let o=r[n];"string"==typeof o&&((o=gn(o)).wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:un,info:s,trigger:o})}}}function un(t,e,n,o,i,r,s){let a=s[i.index],l=i.binding,c=i.part;if(r&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let o=n[e];e=ve(c.source,l.target,e),a._setPendingPropertyOrPath(e,o,!1,!0)&&t._enqueueClient(a)}else{!function(t,e,n,o,i){i=function(t,e,n,o){if(n.isCompound){let i=t.__dataCompoundStorage[n.target];i[o.compoundIndex]=e,e=i.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,i,n,o),Nt&&(i=Nt(i,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,i,n.target);else{let o=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[Xe.READ_ONLY]&&e[Xe.READ_ONLY][o]||e._setPendingProperty(o,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,i)}}(t,a,l,c,i.evaluator._evaluateBinding(t,c,e,n,o,r))}}function hn(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,i=new Array(o.length);for(let t=0;t<o.length;t++)i[t]=o[t].literal;let r=e.target;n[r]=i,e.literal&&"property"==e.kind&&(t[r]=e.literal)}}function pn(t,e,n){if(n.listenerEvent){let o=n.parts[0];t.addEventListener(n.listenerEvent,function(t){!function(t,e,n,o,i){let r,s=t.detail,a=s&&s.path;a?(o=ve(n,o,a),r=s&&s.value):r=t.currentTarget[n],r=i?!r:r,e[Xe.READ_ONLY]&&e[Xe.READ_ONLY][o]||!e._setPendingPropertyOrPath(o,r,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,n.target,o.source,o.negate)})}}function mn(t,e,n,o,i,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:r};for(let i,r=0;r<e.args.length&&(i=e.args[r]);r++)i.literal||t._addPropertyEffect(i.rootProperty,n,{fn:o,info:s,trigger:i});r&&t._addPropertyEffect(e.methodName,n,{fn:o,info:s})}function fn(t,e,n,o,i){let r=t._methodHost||t,s=r[i.methodName];if(s){let o=t._marshalArgs(i.args,e,n);return s.apply(r,o)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const _n=[],yn=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function vn(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function bn(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:_n};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let n=gn(t);return n.literal||(e.static=!1),n},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function gn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},o=e[0];switch("-"===o&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=fe(e),n.structured=me(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function wn(t,e,n,o){let i=n+".splices";t.notifyPath(i,{indexSplices:o}),t.notifyPath(n+".length",e.length),t.__data[i]={indexSplices:null}}function xn(t,e,n,o,i,r){wn(t,e,n,[{index:o,addedCount:i,removed:r,object:e,type:"splice"}])}const An=pe(t=>{const e=Ge(je(t));class n extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return Xe}_initializeProperties(){super._initializeProperties(),Sn.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Xe.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==Xe.READ_ONLY);let o=Qe(this,e)[t];o||(o=this[e][t]=[]),o.push(n)}_removePropertyEffect(t,e,n){let o=Qe(this,e)[t],i=o.indexOf(n);i>=0&&o.splice(i,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Xe.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Xe.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Xe.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Xe.COMPUTE)}_setPendingPropertyOrPath(t,e,n,o){if(o||fe(Array.isArray(t)?t[0]:t)!==t){if(!o){let n=we(this,t);if(!(t=xe(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let o=t.__dataLinkedPaths;if(o){let i;for(let r in o){let s=o[r];ye(r,e)?(i=ve(r,s,e),t._setPendingPropertyOrPath(i,n,!0,!0)):ye(s,e)&&(i=ve(s,r,e),t._setPendingPropertyOrPath(i,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||(t[e]=n)}_setPendingProperty(t,e,n){let o=this.__dataHasPaths&&me(t),i=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,i[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),o?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(o||this[Xe.NOTIFY]&&this[Xe.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[Xe.READ_ONLY]&&this[Xe.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let o=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,o){let i=t[Xe.COMPUTE];if(i){let r=e;for(;$e(t,i,r,n,o);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}(this,e,n,o);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,o),this._flushClients(),$e(this,this[Xe.REFLECT],e,n,o),$e(this,this[Xe.OBSERVE],e,n,o),i&&function(t,e,n,o,i){let r,s,a=t[Xe.NOTIFY],l=Je++;for(let s in e)e[s]&&(a&&tn(t,a,l,s,n,o,i)?r=!0:i&&on(t,s,n)&&(r=!0));r&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,i,e,n,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[Xe.PROPAGATE]&&$e(this,this[Xe.PROPAGATE],t,e,n);let o=this.__templateInfo;for(;o;)$e(this,o.propertyEffects,t,e,n,o.nodeList),o=o.nextTemplateInfo}linkPaths(t,e){t=be(t),e=be(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=be(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};wn(this,we(this,t,n),n.path,e)}get(t,e){return we(e||this,t)}set(t,e,n){n?xe(n,t,e):this[Xe.READ_ONLY]&&this[Xe.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},o=we(this,t,n),i=o.length,r=o.push(...e);return e.length&&xn(this,o,n.path,i,e.length,[]),r}pop(t){let e={path:""},n=we(this,t,e),o=Boolean(n.length),i=n.pop();return o&&xn(this,n,e.path,n.length,0,[i]),i}splice(t,e,n,...o){let i,r={path:""},s=we(this,t,r);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),i=2===arguments.length?s.splice(e):s.splice(e,n,...o),(o.length||i.length)&&xn(this,s,r.path,e,o.length,i),i}shift(t){let e={path:""},n=we(this,t,e),o=Boolean(n.length),i=n.shift();return o&&xn(this,n,e.path,0,0,[i]),i}unshift(t,...e){let n={path:""},o=we(this,t,n),i=o.unshift(...e);return e.length&&xn(this,o,n.path,0,e.length,[]),i}notifyPath(t,e){let n;if(1==arguments.length){let o={path:""};e=we(this,t,o),n=o.path}else n=Array.isArray(t)?be(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,Xe.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let o={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,Xe.OBSERVE,{fn:nn,info:o,trigger:{name:t}}),n&&this._addPropertyEffect(e,Xe.OBSERVE,{fn:nn,info:o,trigger:{name:e}})}_createMethodObserver(t,e){let n=bn(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");mn(this,n,Xe.OBSERVE,fn,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Xe.NOTIFY,{fn:sn,info:{eventName:ke(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Xe.REFLECT,{fn:an,info:{attrName:e}})}_createComputedProperty(t,e,n){let o=bn(e);if(!o)throw new Error("Malformed computed expression '"+e+"'");mn(this,o,Xe.COMPUTE,ln,t,n)}_marshalArgs(t,e,n){const o=this.__data;let i=[];for(let r=0,s=t.length;r<s;r++){let s,a=t[r],l=a.name;if(a.literal?s=a.value:a.structured?void 0===(s=we(o,l))&&(s=n[l]):s=o[l],a.wildcard){let t=0===l.indexOf(e+"."),o=0===e.indexOf(l)&&!t;i[r]={path:o?e:l,value:o?n[e]:s,base:s}}else i[r]=s}return i}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),o=this.__templateInfo==n;if(!o)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&((n=Object.create(n)).wasPreBound=o,!o&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let o=t.propertyEffects=t.propertyEffects||{};(o[e]=o[e]||[]).push(n)}_stampTemplate(t){Sn.beginHosting(this);let e=super._stampTemplate(t);Sn.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:o}=e;if(o.length)for(let e=0;e<o.length;e++){let i=o[e],r=n[e],s=i.bindings;if(s)for(let e=0;e<s.length;e++){let n=s[e];hn(r,n),pn(r,t,n)}r.__dataHost=t}}(this,n),this.__dataReady&&$e(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,n){let o=super._parseTemplateNode(t,e,n);if(t.nodeType===Node.TEXT_NODE){let i=this._parseBindings(t.textContent,e);i&&(t.textContent=vn(i)||" ",cn(this,e,n,"text","textContent",i),o=!0)}return o}static _parseTemplateNodeAttribute(t,e,n,o,i){let r=this._parseBindings(i,e);if(r){let i=o,s="property";Ke.test(o)?s="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),s="attribute");let a=vn(r);return a&&"attribute"==s&&t.setAttribute(o,a),"input"===t.localName&&"value"===i&&t.setAttribute(i,""),t.removeAttribute(i),"property"===s&&(o=Ce(o)),cn(this,e,n,s,o,r,a),!0}return super._parseTemplateNodeAttribute(t,e,n,o,i)}static _parseTemplateNestedTemplate(t,e,n){let o=super._parseTemplateNestedTemplate(t,e,n),i=n.templateInfo.hostProps;for(let t in i){cn(this,e,n,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return o}static _parseBindings(t,e){let n,o=[],i=0;for(;null!==(n=yn.exec(t));){n.index>i&&o.push({literal:t.slice(i,n.index)});let r=n[1][0],s=Boolean(n[2]),a=n[3].trim(),l=!1,c="",d=-1;"{"==r&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let u=bn(a),h=[];if(u){let{args:t,methodName:n}=u;for(let e=0;e<t.length;e++){let n=t[e];n.literal||h.push(n)}let o=e.dynamicFns;(o&&o[n]||u.static)&&(h.push(n),u.dynamicFn=!0)}else h.push(a);o.push({source:a,mode:r,negate:s,customEvent:l,signature:u,dependencies:h,event:c}),i=yn.lastIndex}if(i&&i<t.length){let e=t.substring(i);e&&o.push({literal:e})}return o.length?o:null}static _evaluateBinding(t,e,n,o,i,r){let s;return s=e.signature?fn(t,n,o,0,e.signature):n!=e.source?we(t,e.source):r&&me(n)?we(t,n):t.__data[n],e.negate&&(s=!s),s}}return Ze=n,n});const Sn=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pn=pe(t=>{const e=Fe(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function o(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=function(t){const e={};for(let n in t){const o=t[n];e[n]="function"==typeof o?{type:o}:o}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){const t=this._properties;return t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=o(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,o(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i}),Cn="3.0.5",kn=pe(t=>{const e=Pn(An(t));function n(t,e,n,o){const i=e.content.querySelectorAll("style"),r=Gt(e),s=function(t){let e=qt(t);return e?Jt(e):[]}(n),a=e.content.firstElementChild;for(let n=0;n<s.length;n++){let i=s[n];i.textContent=t._processStyleText(i.textContent,o),e.content.insertBefore(i,a)}let l=0;for(let e=0;e<r.length;e++){let n=r[e],s=i[l];s!==n?(n=n.cloneNode(!0),s.parentNode.insertBefore(n,s)):l++,n.textContent=t._processStyleText(n.textContent,o)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}return class extends e{static get polymerElementVersion(){return Cn}static _finalizeClass(){var t;super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&(t=this.prototype,En.push(t));const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties);let o=this.template;o&&("string"==typeof o?(console.error("template getter must return HTMLTemplateElement"),o=null):o=o.cloneNode(!0)),this.prototype._template=o}static createProperties(t){for(let r in t)e=this.prototype,n=r,o=t[r],i=t,o.computed&&(o.readOnly=!0),o.computed&&!e._hasReadOnlyEffect(n)&&e._createComputedProperty(n,o.computed,i),o.readOnly&&!e._hasReadOnlyEffect(n)&&e._createReadOnlyProperty(n,!o.computed),o.reflectToAttribute&&!e._hasReflectEffect(n)&&e._createReflectedProperty(n),o.notify&&!e._hasNotifyEffect(n)&&e._createNotifyingProperty(n),o.observer&&e._createPropertyObserver(n,o.observer,i[o.observer]),e._addPropertyToAttributeMap(n);var e,n,o,i}static createObservers(t,e){const n=this.prototype;for(let o=0;o<t.length;o++)n._createMethodObserver(t[o],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!It||zt)&&(e=Dt.import(t,"template"),It&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Tt(t.url);else{const t=Dt.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){0,this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ot,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let o=e[n];"value"in o&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=o)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Et(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const o=this.importPath;n(this,e,t,o?kt(o):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){if(this.attachShadow)return t?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=kt(this.importPath)),kt(t,e)}static _parseTemplateContent(t,e,n){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,n)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const En=[];const Tn=kn(HTMLElement),On=t=>(class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),"theme"===t&&this._setTheme(n)}}),Nn=t=>(class extends(On(t)){static finalize(){super.finalize();const t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!e&&Array.from(n.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=Dt.prototype.modules;let n=!1;const o=this.is+"-default-theme";Object.keys(e).forEach(i=>{if(i!==o){const o=e[i].getAttribute("theme-for");o&&o.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(i,t))})}}),!n&&e[o]&&this._includeStyle(o,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const n=document.createElement("style");n.setAttribute("include",t),e.content.appendChild(n)}}}),Ln=t=>(class extends((t=>(class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}}))(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this._focus(t):-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{!t.defaultPrevented&&t.shiftKey&&9===t.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0))}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(t){this._tabPressed=9===t.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(t){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class In{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof In?t.cancel():t=new In,t.setConfig(e,n),t}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const zn=document.createElement("template");zn.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(zn.content);const Mn={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},Bn={DEFAULT:"default",ACCESSIBLE:"accessible"},Fn=t=>(class extends(Ln(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:{type:String},_errorId:{type:String}}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+Mn.default.join(", ")+")","_hostAccessiblePropsChanged("+Mn.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId)"]}get focusElement(){if(!this.shadowRoot)return;const t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return t||this.shadowRoot.querySelector('[part="value"]')}get _slottedTagName(){return"input"}_onInput(t){if(this.preventInvalidInput){const t=this.focusElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=In.debounce(this._inputDebouncer,Ie.after(200),()=>{this.removeAttribute("input-prevented")}))}this.__userInput=!0,this.value=t.target.value}_stateChanged(t,e,n,o){!t&&!e&&n&&o?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(t){if(this._valueClearing)return;const e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}_valueChanged(t,e){""===t&&void 0===e||(this.hasValue=""!==t&&null!=t,this.__userInput?this.__userInput=!1:(void 0!==t?this.focusElement.value=t:this.value="",this.invalid&&this.validate()))}_labelChanged(t){""!==t&&null!=t?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.focusElement.value=this.value,this.validate()),t&&!this._slottedInput?(this._validateSlottedValue(t),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput=t):!t&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(Bn).map(t=>Bn[t]).forEach(t=>this._propagateHostAttributes(Mn[t].map(t=>this[t]),t))}_hostPropsChanged(...t){this._propagateHostAttributes(t,Bn.DEFAULT)}_hostAccessiblePropsChanged(...t){this._propagateHostAttributes(t,Bn.ACCESSIBLE)}_validateSlottedValue(t){t.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),t.value="")}_propagateHostAttributes(t,e){const n=this.focusElement,o=Mn[e];"accessible"===e?o.forEach((e,o)=>{this._setOrToggleAttribute(e,t[o],n),this._setOrToggleAttribute(`aria-${e}`,t[o],n)}):o.forEach((e,o)=>{this._setOrToggleAttribute(e,t[o],n)})}_setOrToggleAttribute(t,e,n){t&&n&&n.hasAttribute(t)===!e&&(e?n.setAttribute(t,"boolean"==typeof e?"":e):n.removeAttribute(t))}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.focusElement.checkValidity():!this.invalid}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange),t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange),t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this.validate.bind(this),this._boundOnFocus=this._onFocus.bind(this);const t=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var e=Fn._uniqueId=1+Fn._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._labelId=`${this.constructor.is}-label-${e}`}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onFocus(){this.autoselect&&(this.focusElement.select(),setTimeout(()=>{this.focusElement.setSelectionRange(0,9999)}))}_onClearButtonClick(t){this.focusElement.focus(),this.clear(),this._valueClearing=!1,this.focusElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}_onKeyDown(t){27===t.keyCode&&this.clearButtonVisible&&this.clear()}_addIEListeners(t){navigator.userAgent.match(/Trident/)&&(this._prevent=(t=>{t.stopImmediatePropagation(),this.focusElement.removeEventListener("input",this._prevent)}),this._shouldPreventInput=(()=>this.placeholder&&t.addEventListener("input",this._prevent)),t.addEventListener("focusin",this._shouldPreventInput),t.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(t){navigator.userAgent.match(/Trident/)&&(t.removeEventListener("focusin",this._shouldPreventInput),t.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(t,e,n){this._setOrToggleAttribute("aria-describedby",e&&t?n:void 0,this.focusElement)}_getActiveLabelId(t,e){this._setOrToggleAttribute("aria-labelledby",t?e:void 0,this.focusElement)}_getErrorMessageAriaHidden(t,e,n){return(!(e&&t?n:void 0)).toString()}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(t)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const t="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(e=>{e.style[t]="visible",e.style[t]=""})}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Rn=[];const Dn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function jn(t,e){if("function"!=typeof t)return;const n=Dn.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Vn=function(t,e){if(window.Vaadin.developmentMode)return jn(t,e)};function Hn(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&!jn(function(){return!0})&&!function(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const t=Object.keys(window.Vaadin.Flow.clients).map(t=>window.Vaadin.Flow.clients[t]).filter(t=>t.productionMode);if(t.length>0)return!0}return!1}()}catch(t){return!1}}());const qn=function(){return Vn(Hn)};let Un;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){qn&&qn()};const Wn=t=>(class extends t{static _finalizeClass(){var t;super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(Un=In.debounce(Un,ze,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),t=Un,Rn.push(t)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class Yn extends(Wn(Fn(Nn(Tn)))){static get template(){return ce`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label="Clear"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.3.0-beta1"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(Yn.is,Yn);const Gn=ce`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--lumo-primary-text-color);
        background-color: var(--lumo-contrast-5pct);
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Gn.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Jn="string"==typeof document.head.style.touchAction,Xn="__polymerGestures",Kn="__polymerGesturesHandled",Zn="__polymerGesturesTouchAction",Qn=25,$n=5,to=2500,eo=["mousedown","mousemove","mouseup","click"],no=[0,1,4,2],oo=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function io(t){return eo.indexOf(t)>-1}let ro=!1;function so(t){if(!io(t)&&"touchend"!==t)return Jn&&ro&&Lt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){ro=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let ao=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const lo=[],co={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},uo={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function ho(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let o=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<o.length;t++)e.push(o[t])}}return e}let po=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[Kn]={skip:!0},"click"===t.type)){let e=!1,o=t.composedPath&&t.composedPath();if(o)for(let t=0;t<o.length;t++){if(o[t].nodeType===Node.ELEMENT_NODE)if("label"===o[t].localName)lo.push(o[t]);else if(n=o[t],co[n.localName]){let n=ho(o[t]);for(let t=0;t<n.length;t++)e=e||lo.indexOf(n[t])>-1}if(o[t]===_o.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function mo(t){let e=ao?["click"]:eo;for(let n,o=0;o<e.length;o++)n=e[o],t?(lo.length=0,document.addEventListener(n,po,!0)):document.removeEventListener(n,po,!0)}function fo(t){let e=t.type;if(!io(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!oo&&(e=no[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let _o={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function yo(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function vo(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){_o.mouse.mouseIgnoreJob||mo(!0),_o.mouse.target=t.composedPath()[0],_o.mouse.mouseIgnoreJob=In.debounce(_o.mouse.mouseIgnoreJob,Ie.after(to),function(){mo(),_o.mouse.target=null,_o.mouse.mouseIgnoreJob=null})},!!ro&&{passive:!0});const bo={},go=[];function wo(t){if(t.composedPath){const e=t.composedPath();return e.length>0?e[0]:t.target}return t.target}function xo(t){let e,n=t.type,o=t.currentTarget[Xn];if(!o)return;let i=o[n];if(i){if(!t[Kn]&&(t[Kn]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(_o.touch.id=e.identifier),_o.touch.id!==e.identifier)return;Jn||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)_o.touch.x=e.clientX,_o.touch.y=e.clientY,_o.touch.scrollDecided=!1;else if("touchmove"===n){if(_o.touch.scrollDecided)return;_o.touch.scrollDecided=!0;let n=function(t){let e="auto",n=t.composedPath&&t.composedPath();if(n)for(let t,o=0;o<n.length;o++)if((t=n[o])[Zn]){e=t[Zn];break}return e}(t),o=!1,i=Math.abs(_o.touch.x-e.clientX),r=Math.abs(_o.touch.y-e.clientY);t.cancelable&&("none"===n?o=!0:"pan-x"===n?o=r>i:"pan-y"===n&&(o=i>r)),o?t.preventDefault():ko("track")}}(t)}if(!(e=t[Kn]).skip){for(let n,o=0;o<go.length;o++)i[(n=go[o]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let o,r=0;r<go.length;r++)i[(o=go[r]).name]&&!e[o.name]&&(e[o.name]=!0,o[n](t))}}}function Ao(t,e,n){return!!bo[e]&&(function(t,e,n){let o=bo[e],i=o.deps,r=o.name,s=t[Xn];s||(t[Xn]=s={});for(let e,n,o=0;o<i.length;o++)e=i[o],ao&&io(e)&&"click"!==e||((n=s[e])||(s[e]=n={_count:0}),0===n._count&&t.addEventListener(e,xo,so(e)),n[r]=(n[r]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),o.touchAction&&function(t,e){Jn&&t instanceof HTMLElement&&Me.run(()=>{t.style.touchAction=e});t[Zn]=e}(t,o.touchAction)}(t,e,n),!0)}function So(t,e,n){return!!bo[e]&&(function(t,e,n){let o=bo[e],i=o.deps,r=o.name,s=t[Xn];if(s)for(let e,n,o=0;o<i.length;o++)e=i[o],(n=s[e])&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,xo,so(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function Po(t){go.push(t);for(let e=0;e<t.emits.length;e++)bo[t.emits[e]]=t}function Co(t,e,n){let o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,t.dispatchEvent(o),o.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function ko(t){let e=function(t){for(let e,n=0;n<go.length;n++){e=go[n];for(let n,o=0;o<e.emits.length;o++)if((n=e.emits[o])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Eo(t,e,n,o){e&&Co(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(t){return ko(t)}})}function To(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let o=Math.abs(t.x-e),i=Math.abs(t.y-n);return o>=$n||i>=$n}function Oo(t,e,n){if(!e)return;let o,i=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],s=r.x-t.x,a=r.y-t.y,l=0;i&&(o=r.x-i.x,l=r.y-i.y),Co(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM&&o!==(o=o.shadowRoot.elementFromPoint(t,e));)o&&(n=o);return n}(n.clientX,n.clientY)}})}function No(t,e,n){let o=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),r=wo(n||e);!r||uo[r.localName]&&r.hasAttribute("disabled")||(isNaN(o)||isNaN(i)||o<=Qn&&i<=Qn||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=wo(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),o=t.pageX,i=t.pageY;return!(o>=n.left&&o<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(e))&&(t.prevent||Co(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}Po({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){vo(this.info)},mousedown:function(t){if(!fo(t))return;let e=wo(t),n=this;yo(this.info,function(t){fo(t)||(Eo("up",e,t),vo(n.info))},function(t){fo(t)&&Eo("up",e,t),vo(n.info)}),Eo("down",e,t)},touchstart:function(t){Eo("down",wo(t),t.changedTouches[0],t)},touchend:function(t){Eo("up",wo(t),t.changedTouches[0],t)}}),Po({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,vo(this.info)},mousedown:function(t){if(!fo(t))return;let e=wo(t),n=this,o=function(t){let o=t.clientX,i=t.clientY;To(n.info,o,i)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&ko("tap"),n.info.addMove({x:o,y:i}),fo(t)||(n.info.state="end",vo(n.info)),e&&Oo(n.info,e,t),n.info.started=!0)};yo(this.info,o,function(t){n.info.started&&o(t),vo(n.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=wo(t),n=t.changedTouches[0],o=n.clientX,i=n.clientY;To(this.info,o,i)&&("start"===this.info.state&&ko("tap"),this.info.addMove({x:o,y:i}),Oo(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=wo(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Oo(this.info,e,n))}}),Po({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){fo(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){fo(t)&&No(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){No(this.info,t.changedTouches[0],t)}});const Lo=pe(t=>{return class extends t{_addEventListenerToNode(t,e,n){Ao(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){So(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Io extends(Wn(Ln(Nn(Lo(Tn))))){static get template(){return ce`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.1.2"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Ao(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Ao(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(Io.is,Io);const zo=ce`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(zo.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Mo extends(Wn(Ln(Nn(Lo(Tn))))){static get template(){return ce`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.6"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(t){this._storedName=t}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const t=this.getAttribute("name");t&&(this.name=t),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const t=this.shadowRoot.querySelector('[part~="label"]'),e=t.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(e)?t.setAttribute("empty",""):t.removeAttribute("empty")}_isAssignedNodesEmpty(t){return 0===t.length||1==t.length&&t[0].nodeType==Node.TEXT_NODE&&""===t[0].textContent.trim()}_checkedChanged(t){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",t)}_indeterminateChanged(t){t?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",t=>{this.__interactionsAllowed(t)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>{this.__interactionsAllowed(t)&&32===t.keyCode&&(t.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",t=>{this.__interactionsAllowed(t)&&32===t.keyCode&&(t.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(t){return!this.disabled&&"a"!==t.target.localName}_handleClick(t){this.__interactionsAllowed(t)&&(this.indeterminate?(this.indeterminate=!1,t.preventDefault(),this._toggleChecked()):t.composedPath()[0]!==this._nativeCheckbox&&(t.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!0,bubbles:!0}))}}customElements.define(Mo.is,Mo);const Bo=ce`<dom-module id="lumo-radio-button" theme-for="vaadin-radio-button">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="radio"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: 50%;
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        will-change: transform;
        line-height: 1.2;
        transform: translateZ(0); /* Workaround IE11 jumpiness */
      }

      /* Used for activation "halo" */
      [part="radio"]::before {
        /* Needed to align the radio-button nicely on the baseline */
        content: "\\2003";
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
        will-change: transform, opacity;
      }

      /* Used for the dot */
      [part="radio"]::after {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid var(--lumo-primary-contrast-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: 0.25s transform;
        will-change: transform;
        background-clip: content-box;
      }

      :host([checked]) [part="radio"] {
        background-color: var(--lumo-primary-color);
      }

      :host([checked]) [part="radio"]::after {
        transform: translate(-50%, -50%) scale(1);
      }

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="radio"] {
        background-color: var(--lumo-contrast-30pct);
      }

      :host([active]) [part="radio"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="radio"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="radio"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }

      :host([focus-ring]) [part="radio"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="radio"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="radio"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      /* IE11 only */
      ::-ms-backdrop,
      [part="radio"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Bo.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Fo extends(Wn(Ln(Nn(Lo(Tn))))){static get template(){return ce`
    <style>
      :host {
        display: inline-block;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="radio"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="radio"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label on-click="_preventDefault">
      <span part="radio">
        <input type="radio" checked="{{checked::change}}" disabled\$="[[disabled]]" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-radio-button"}static get version(){return"1.1.5"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},value:{type:String,value:"on"}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(t){this._storedName=t}ready(){super.ready(),this.setAttribute("role","radio"),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const t=this.getAttribute("name");t&&(this.name=t),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const t=this.shadowRoot.querySelector('[part~="label"]'),e=t.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(e)?t.setAttribute("empty",""):t.removeAttribute("empty")}_isAssignedNodesEmpty(t){return 0===t.length||1==t.length&&t[0].nodeType==Node.TEXT_NODE&&""===t[0].textContent.trim()}_checkedChanged(t){this.setAttribute("aria-checked",t)}_addActiveListeners(){this._addEventListenerToNode(this,"down",t=>{this.disabled||this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",t=>{this.removeAttribute("active"),this.checked||this.disabled||(this.checked=!0)}),this.addEventListener("keydown",t=>{this.disabled||32!==t.keyCode||(t.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",t=>{this.disabled||32!==t.keyCode||(t.preventDefault(),this.setAttribute("checked",""),this.removeAttribute("active"))})}_handleClick(t){this.disabled||(t.preventDefault(),this.checked=!0)}get focusElement(){return this.shadowRoot.querySelector("input")}_preventDefault(t){t.preventDefault()}}customElements.define(Fo.is,Fo);const Ro=ce`<dom-module id="lumo-radio-group" theme-for="vaadin-radio-group">
  <template>
    <style include="lumo-required-field">
      :host {
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-size-m);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([theme~="vertical"]) [part="group-field"] {
        display: flex;
        flex-direction: column;
      }

      [part="label"] {
        padding-bottom: 0.7em;
      }
    </style>
  </template>
</dom-module>`;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Do(t,e,n){return{index:t,removed:e,addedCount:n}}document.head.appendChild(Ro.content);const jo=0,Vo=1,Ho=2,qo=3;function Uo(t,e,n,o,i,r){let s,a=0,l=0,c=Math.min(n-e,r-i);if(0==e&&0==i&&(a=function(t,e,n){for(let o=0;o<n;o++)if(!Wo(t[o],e[o]))return o;return n}(t,o,c)),n==t.length&&r==o.length&&(l=function(t,e,n){let o=t.length,i=e.length,r=0;for(;r<n&&Wo(t[--o],e[--i]);)r++;return r}(t,o,c-a)),i+=a,r-=l,(n-=l)-(e+=a)==0&&r-i==0)return[];if(e==n){for(s=Do(e,[],0);i<r;)s.removed.push(o[i++]);return[s]}if(i==r)return[Do(e,[],n-e)];let d=function(t){let e=t.length-1,n=t[0].length-1,o=t[e][n],i=[];for(;e>0||n>0;){if(0==e){i.push(Ho),n--;continue}if(0==n){i.push(qo),e--;continue}let r,s=t[e-1][n-1],a=t[e-1][n],l=t[e][n-1];(r=a<l?a<s?a:s:l<s?l:s)==s?(s==o?i.push(jo):(i.push(Vo),o=s),e--,n--):r==a?(i.push(qo),e--,o=a):(i.push(Ho),n--,o=l)}return i.reverse(),i}(function(t,e,n,o,i,r){let s=r-i+1,a=n-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let n=1;n<s;n++)for(let r=1;r<a;r++)if(Wo(t[e+r-1],o[i+n-1]))l[n][r]=l[n-1][r-1];else{let t=l[n-1][r]+1,e=l[n][r-1]+1;l[n][r]=t<e?t:e}return l}(t,e,n,o,i,r));s=void 0;let u=[],h=e,p=i;for(let t=0;t<d.length;t++)switch(d[t]){case jo:s&&(u.push(s),s=void 0),h++,p++;break;case Vo:s||(s=Do(h,[],0)),s.addedCount++,h++,s.removed.push(o[p]),p++;break;case Ho:s||(s=Do(h,[],0)),s.addedCount++,h++;break;case qo:s||(s=Do(h,[],0)),s.removed.push(o[p]),p++}return s&&u.push(s),u}function Wo(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Yo(t){return"slot"===t.localName}class Go{static getFlattenedNodes(t){return Yo(t)?(t=t).assignedNodes({flatten:!0}):Array.from(t.childNodes).map(t=>Yo(t)?(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=(()=>{this._schedule()}),this.connect(),this._schedule()}connect(){Yo(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Yo(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Me.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=(o=e,i=this._effectiveNodes,Uo(o,0,o.length,i,0,i.length));var o,i;for(let e,o=0;o<n.length&&(e=n[o]);o++)for(let n,o=0;o<e.removed.length&&(n=e.removed[o]);o++)t.removedNodes.push(n);for(let o,i=0;i<n.length&&(o=n[i]);i++)for(let n=o.index;n<o.index+o.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];Yo(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];Yo(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class Jo extends(Nn(Tn)){static get template(){return ce`
    <style>
      :host {
        display: inline-flex;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-group-field-container {
        display: flex;
        flex-direction: column;
      }

      [part="label"]:empty {
        display: none;
      }
    </style>

    <div class="vaadin-group-field-container">
      <label part="label">[[label]]</label>

      <div part="group-field">
        <slot id="slot"></slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-radio-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},readonly:{type:Boolean,reflectToAttribute:!0,observer:"_readonlyChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0},errorMessage:{type:String,value:""},_errorId:{type:String},_checkedButton:{type:Object,observer:"_checkedButtonChanged"},label:{type:String,value:"",observer:"_labelChanged"},value:{type:String,notify:!0,observer:"_valueChanged"}}}ready(){super.ready(),this._addActiveListeners(),this._observer=new Go(this,t=>{const e=t=>{t.target.checked&&this._changeSelectedButton(t.target)};this._filterRadioButtons(t.addedNodes).reverse().forEach(t=>{t.addEventListener("checked-changed",e),this.disabled&&(t.disabled=!0),t.checked&&this._changeSelectedButton(t)}),this._filterRadioButtons(t.removedNodes).forEach(t=>{t.removeEventListener("checked-changed",e),t.checked&&(this.value=void 0)})}),this._radioButtons.length&&this._setFocusable(0),this.setAttribute("role","radiogroup"),this.addEventListener("focusout",t=>t.composed&&this.validate());const t=Jo._uniqueId=1+Jo._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`}get _radioButtons(){return this._filterRadioButtons(this.querySelectorAll("*"))}_filterRadioButtons(t){return Array.from(t).filter(t=>t instanceof Fo)}_disabledChanged(t){this.setAttribute("aria-disabled",t),this._updateDisableButtons()}_updateDisableButtons(){this._radioButtons.forEach(t=>{this.disabled?t.disabled=!0:this.readonly?t.disabled=t!==this._checkedButton&&this.readonly:t.disabled=!1})}_readonlyChanged(t,e){(t||e)&&this._updateDisableButtons()}_addActiveListeners(){this.addEventListener("keydown",t=>{var e=t.target==this?this._checkedButton:t.target;37!==t.keyCode&&38!==t.keyCode||(t.preventDefault(),this._selectPreviousButton(e)),39!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),this._selectNextButton(e))})}_selectButton(t,e){this._containsFocus()&&(t.focus(),e&&t.setAttribute("focus-ring","")),this._changeSelectedButton(t)}_containsFocus(){const t=this.getRootNode(),e=void 0!==t._activeElement?t._activeElement:t.activeElement;return this.contains(e)}_hasEnabledButtons(){return!this._radioButtons.every(t=>t.disabled)}_selectNextButton(t){if(this._hasEnabledButtons()){var e=t.nextElementSibling||this.firstElementChild;e.disabled?this._selectNextButton(e):this._selectButton(e,!0)}}_selectPreviousButton(t){if(this._hasEnabledButtons()){var e=t.previousElementSibling||this.lastElementChild;e.disabled?this._selectPreviousButton(e):this._selectButton(e,!0)}}_changeSelectedButton(t){this._checkedButton=t,this.readonly&&this._updateDisableButtons(),t&&this._setFocusable(this._radioButtons.indexOf(t))}_checkedButtonChanged(t){this._radioButtons.forEach(e=>e.checked=e===t),t&&(this.value=t.value),this.validate()}_valueChanged(t,e){if(e&&(""===t||null==t))return this._changeSelectedButton(null),void this.removeAttribute("has-value");if(!this._checkedButton||t!=this._checkedButton.value){const e=this._radioButtons.filter(e=>e.value==t)[0];e?(this._selectButton(e),this.setAttribute("has-value","")):console.warn(`No <vaadin-radio-button> with value ${t} found.`)}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}_setFocusable(t){const e=this._radioButtons;e.forEach(n=>n.tabindex=n===e[t]?0:-1)}_labelChanged(t){t?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_getActiveErrorId(t,e,n){return e&&t?n:void 0}_getErrorMessageAriaHidden(t,e,n){return(!this._getActiveErrorId(t,e,n)).toString()}}function Xo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}customElements.define(Jo.is,Jo);const Ko={SHOW_ALL:"All",SHOW_ACTIVE:"Active",SHOW_COMPLETED:"Completed"};customElements.define("todo-view",class extends rt{static get properties(){return{todos:{type:Array},filter:{type:String},task:{type:String}}}constructor(){super(),this.todos=[],this.filter=Ko.SHOW_ALL,this.task=""}render(){return I`
      <style>
        todo-view { 
          display: block;
          max-width: 800px;
          margin: 0 auto;
        }
        todo-view .input-layout {
          width: 100%;
          display: flex;
        }
        todo-view .input-layout vaadin-text-field {
          flex: 1;
          margin-right: var(--spacing); 
        }
        todo-view .todos-list {
          margin-top: var(--spacing);
        }
        todo-view .visibility-filters {
          margin-top: calc(4 * var(--spacing));
        }
      </style>
      <div class="input-layout"
        @keyup="${this.shortcutListener}"> 

        <vaadin-text-field
          placeholder="Task"
          value="${this.task}" 
          @change="${this.updateTask}"> 
        </vaadin-text-field>

        <vaadin-button
          theme="primary"
          @click="${this.addTodo}"> 
            Add Todo
        </vaadin-button>
      </div>
      <div class="todos-list">
        ${this.applyFilter(this.todos).map(t=>I` 
            <div class="todo-item">
              <vaadin-checkbox
                ?checked="${t.complete}" 
                @change="${e=>this.updateTodoStatus(t,e.target.checked)}"> 
                ${t.task}
              </vaadin-checkbox>
            </div>
          `)}
      </div>
      <vaadin-radio-group
        class="visibility-filters"
        value="${this.filter}"
        @value-changed="${this.filterChanged}"> 

        ${Object.values(Ko).map(t=>I`
            <vaadin-radio-button value="${t}">
              ${t}
            </vaadin-radio-button>`)}
      </vaadin-radio-group>
      <vaadin-button
        @click="${this.clearCompleted}"> 
          Clear completed
      </vaadin-button>
    `}addTodo(){this.task&&(this.todos=[...this.todos,{task:this.task,complete:!1}],this.task="")}shortcutListener(t){"Enter"===t.key&&this.addTodo()}updateTask(t){this.task=t.target.value}updateTodoStatus(t,e){this.todos=this.todos.map(n=>t===n?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Xo(t,e,n[e])})}return t}({},t,{complete:e}):n)}filterChanged(t){this.filter=t.target.value}clearCompleted(){this.todos=this.todos.filter(t=>!t.complete)}applyFilter(t){switch(this.filter){case Ko.SHOW_ACTIVE:return t.filter(t=>!t.complete);case Ko.SHOW_COMPLETED:return t.filter(t=>t.complete);default:return t}}createRenderRoot(){return this}});customElements.define("apollo-views-app",class extends rt{render(){return I` 
      <p>My app</p>
      <todo-view></todo-view>
    `}})}]);