function t(t){return t&&t.__esModule?t.default:t}/*!
 * excalibur - 0.28.0 - 2023-8-10
 * https://github.com/excaliburjs/Excalibur
 * Copyright (c) 2023 Excalibur.js <https://github.com/excaliburjs/Excalibur/graphs/contributors>
 * Licensed BSD-2-Clause
 * @preserve
 *//******/var e,i={/***/4662:/***/(t,e,i)=>{i(3430);var s=i(8791);t.exports=s("Array","sort");/***/},/***/8343:/***/(t,e,i)=>{i(4769);var s=i(9276);t.exports=s.Object.keys;/***/},/***/7111:/***/(t,e,i)=>{var s=i(6733),r=i(9821),n=TypeError;// `Assert: IsCallable(argument) is true`
t.exports=function(t){if(s(t))return t;throw n(r(t)+" is not a function")};/***/},/***/1176:/***/(t,e,i)=>{var s=i(5052),r=String,n=TypeError;// `Assert: Type(argument) is Object`
t.exports=function(t){if(s(t))return t;throw n(r(t)+" is not an object")};/***/},/***/9540:/***/(t,e,i)=>{var s=i(905),r=i(3231),n=i(9646),o=function(t){return function(e,i,o){var a,h=s(e),l=n(h),d=r(o,l);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&i!=i){for(;l>d;)// eslint-disable-next-line no-self-compare -- NaN check
if((a=h[d++])!=a)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;l>d;d++)if((t||d in h)&&h[d]===i)return t||d||0;return!t&&-1}};t.exports={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:o(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:o(!1)};/***/},/***/6038:/***/(t,e,i)=>{var s=i(4229);t.exports=function(t,e){var i=[][t];return!!i&&s(function(){// eslint-disable-next-line no-useless-call -- required for testing
i.call(null,e||function(){return 1},1)})};/***/},/***/9794:/***/(t,e,i)=>{var s=i(3231),r=i(9646),n=i(2324),o=Array,a=Math.max;t.exports=function(t,e,i){for(var h=r(t),l=s(e,h),d=s(void 0===i?h:i,h),c=o(a(d-l,0)),u=0;l<d;l++,u++)n(c,u,t[l]);return c.length=u,c};/***/},/***/3867:/***/(t,e,i)=>{var s=i(9794),r=Math.floor,n=function(t,e){var i=t.length,h=r(i/2);return i<8?o(t,e):a(t,n(s(t,0,h),e),n(s(t,h),e),e)},o=function(t,e){for(var i,s,r=t.length,n=1;n<r;){for(s=n,i=t[n];s&&e(t[s-1],i)>0;)t[s]=t[--s];s!==n++&&(t[s]=i)}return t},a=function(t,e,i,s){for(var r=e.length,n=i.length,o=0,a=0;o<r||a<n;)t[o+a]=o<r&&a<n?0>=s(e[o],i[a])?e[o++]:i[a++]:o<r?e[o++]:i[a++];return t};t.exports=n;/***/},/***/7079:/***/(t,e,i)=>{var s=i(5968),r=s({}.toString),n=s("".slice);t.exports=function(t){return n(r(t),8,-1)};/***/},/***/1589:/***/(t,e,i)=>{var s=i(1601),r=i(6733),n=i(7079),o=i(95)("toStringTag"),a=Object,h="Arguments"==n(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
t.exports=s?n:function(t){var e,i,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=l(e=a(t),o))?i:h?n(e):"Object"==(s=n(e))&&r(e.callee)?"Arguments":s};/***/},/***/7081:/***/(t,e,i)=>{var s=i(8270),r=i(4826),n=i(7933),o=i(1787);t.exports=function(t,e,i){for(var a=r(e),h=o.f,l=n.f,d=0;d<a.length;d++){var c=a[d];s(t,c)||i&&s(i,c)||h(t,c,l(e,c))}};/***/},/***/5762:/***/(t,e,i)=>{var s=i(7400),r=i(1787),n=i(5358);t.exports=s?function(t,e,i){return r.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t};/***/},/***/5358:/***/t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};/***/},/***/2324:/***/(t,e,i)=>{var s=i(9310),r=i(1787),n=i(5358);t.exports=function(t,e,i){var o=s(e);o in t?r.f(t,o,n(0,i)):t[o]=i};/***/},/***/4768:/***/(t,e,i)=>{var s=i(6733),r=i(1787),n=i(6039),o=i(8400);t.exports=function(t,e,i,a){a||(a={});var h=a.enumerable,l=void 0!==a.name?a.name:e;if(s(i)&&n(i,l,a),a.global)h?t[e]=i:o(e,i);else{try{a.unsafe?t[e]&&(h=!0):delete t[e]}catch(t){}h?t[e]=i:r.f(t,e,{value:i,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t};/***/},/***/8400:/***/(t,e,i)=>{var s=i(9859),r=Object.defineProperty;t.exports=function(t,e){try{r(s,t,{value:e,configurable:!0,writable:!0})}catch(i){s[t]=e}return e};/***/},/***/9563:/***/(t,e,i)=>{var s=i(9821),r=TypeError;t.exports=function(t,e){if(!delete t[e])throw r("Cannot delete property "+s(e)+" of "+s(t))};/***/},/***/7400:/***/(t,e,i)=>{var s=i(4229);// Detect IE8's incomplete defineProperty implementation
t.exports=!s(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});/***/},/***/3777:/***/t=>{var e="object"==typeof document&&document.all;t.exports={all:e,IS_HTMLDDA:void 0===e&&void 0!==e};/***/},/***/2635:/***/(t,e,i)=>{var s=i(9859),r=i(5052),n=s.document,o=r(n)&&r(n.createElement);t.exports=function(t){return o?n.createElement(t):{}};/***/},/***/2671:/***/(t,e,i)=>{var s=i(598).match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1];/***/},/***/8506:/***/(t,e,i)=>{var s=i(598);t.exports=/MSIE|Trident/.test(s);/***/},/***/598:/***/t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||"";/***/},/***/5884:/***/(t,e,i)=>{var s,r,n=i(9859),o=i(598),a=n.process,h=n.Deno,l=a&&a.versions||h&&h.version,d=l&&l.v8;d&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(r=(s=d.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!r&&o&&(!(s=o.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=o.match(/Chrome\/(\d+)/))&&(r=+s[1]),t.exports=r;/***/},/***/9811:/***/(t,e,i)=>{var s=i(598).match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1];/***/},/***/8791:/***/(t,e,i)=>{var s=i(9859),r=i(5968);t.exports=function(t,e){return r(s[t].prototype[e])};/***/},/***/3837:/***/t=>{// IE8- don't enum bug keys
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];/***/},/***/3103:/***/(t,e,i)=>{var s=i(9859),r=i(7933).f,n=i(5762),o=i(4768),a=i(8400),h=i(7081),l=i(6541);/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/t.exports=function(t,e){var i,d,c,u,p,_=t.target,g=t.global,m=t.stat;if(i=g?s:m?s[_]||a(_,{}):(s[_]||{}).prototype)for(d in e){// contained in target
if(u=e[d],c=t.dontCallGetSet?(p=r(i,d))&&p.value:i[d],!l(g?d:_+(m?".":"#")+d,t.forced)&&void 0!==c){if(typeof u==typeof c)continue;h(u,c)}(t.sham||c&&c.sham)&&n(u,"sham",!0),o(i,d,u,t)}};/***/},/***/4229:/***/t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}};/***/},/***/7188:/***/(t,e,i)=>{var s=i(4229);t.exports=!s(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});/***/},/***/266:/***/(t,e,i)=>{var s=i(7188),r=Function.prototype.call;t.exports=s?r.bind(r):function(){return r.apply(r,arguments)};/***/},/***/1805:/***/(t,e,i)=>{var s=i(7400),r=i(8270),n=Function.prototype,o=s&&Object.getOwnPropertyDescriptor,a=r(n,"name"),h=a&&(!s||s&&o(n,"name").configurable);t.exports={EXISTS:a,PROPER:a&&"something"===(function(){}).name,CONFIGURABLE:h};/***/},/***/5968:/***/(t,e,i)=>{var s=i(7188),r=Function.prototype,n=r.call,o=s&&r.bind.bind(n,n);t.exports=s?o:function(t){return function(){return n.apply(t,arguments)}};/***/},/***/1333:/***/(t,e,i)=>{var s=i(9859),r=i(6733);t.exports=function(t,e){var i;return arguments.length<2?r(i=s[t])?i:void 0:s[t]&&s[t][e]};/***/},/***/5300:/***/(t,e,i)=>{var s=i(7111),r=i(9650);// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
t.exports=function(t,e){var i=t[e];return r(i)?void 0:s(i)};/***/},/***/9859:/***/function(t,e,i){var s=function(t){return t&&t.Math==Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
t.exports=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
s("object"==typeof self&&self)||s("object"==typeof i.g&&i.g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||this||Function("return this")();/***/},/***/8270:/***/(t,e,i)=>{var s=i(5968),r=i(2991),n=s({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
t.exports=Object.hasOwn||function(t,e){return n(r(t),e)};/***/},/***/5977:/***/t=>{t.exports={};/***/},/***/4394:/***/(t,e,i)=>{var s=i(7400),r=i(4229),n=i(2635);// Thanks to IE8 for its funny defineProperty
t.exports=!s&&!r(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a});/***/},/***/9337:/***/(t,e,i)=>{var s=i(5968),r=i(4229),n=i(7079),o=Object,a=s("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
t.exports=r(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!o("z").propertyIsEnumerable(0)})?function(t){return"String"==n(t)?a(t,""):o(t)}:o;/***/},/***/8511:/***/(t,e,i)=>{var s=i(5968),r=i(6733),n=i(5353),o=s(Function.toString);r(n.inspectSource)||(n.inspectSource=function(t){return o(t)}),t.exports=n.inspectSource;/***/},/***/6407:/***/(t,e,i)=>{var s,r,n,o=i(1180),a=i(9859),h=i(5052),l=i(5762),d=i(8270),c=i(5353),u=i(4399),p=i(5977),_="Object already initialized",g=a.TypeError,m=a.WeakMap;if(o||c.state){var f=c.state||(c.state=new m);/* eslint-disable no-self-assign -- prototype methods protection */f.get=f.get,f.has=f.has,f.set=f.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(t,e){if(f.has(t))throw g(_);return e.facade=t,f.set(t,e),e},r=function(t){return f.get(t)||{}},n=function(t){return f.has(t)}}else{var v=u("state");p[v]=!0,s=function(t,e){if(d(t,v))throw g(_);return e.facade=t,l(t,v,e),e},r=function(t){return d(t,v)?t[v]:{}},n=function(t){return d(t,v)}}t.exports={set:s,get:r,has:n,enforce:function(t){return n(t)?r(t):s(t,{})},getterFor:function(t){return function(e){var i;if(!h(e)||(i=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return i}}};/***/},/***/6733:/***/(t,e,i)=>{var s=i(3777),r=s.all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
t.exports=s.IS_HTMLDDA?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t};/***/},/***/6541:/***/(t,e,i)=>{var s=i(4229),r=i(6733),n=/#|\.prototype\./,o=function(t,e){var i=h[a(t)];return i==d||i!=l&&(r(e)?s(e):!!e)},a=o.normalize=function(t){return String(t).replace(n,".").toLowerCase()},h=o.data={},l=o.NATIVE="N",d=o.POLYFILL="P";t.exports=o;/***/},/***/9650:/***/t=>{// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
t.exports=function(t){return null==t};/***/},/***/5052:/***/(t,e,i)=>{var s=i(6733),r=i(3777),n=r.all;t.exports=r.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:s(t)||t===n}:function(t){return"object"==typeof t?null!==t:s(t)};/***/},/***/4231:/***/t=>{t.exports=!1;/***/},/***/9395:/***/(t,e,i)=>{var s=i(1333),r=i(6733),n=i(1321),o=i(6969),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=s("Symbol");return r(e)&&n(e.prototype,a(t))};/***/},/***/9646:/***/(t,e,i)=>{var s=i(4237);// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t.exports=function(t){return s(t.length)};/***/},/***/6039:/***/(t,e,i)=>{var s=i(5968),r=i(4229),n=i(6733),o=i(8270),a=i(7400),h=i(1805).CONFIGURABLE,l=i(8511),d=i(6407),c=d.enforce,u=d.get,p=String,_=Object.defineProperty,g=s("".slice),m=s("".replace),f=s([].join),v=a&&!r(function(){return 8!==_(function(){},"length",{value:8}).length}),y=String(String).split("String"),x=t.exports=function(t,e,i){"Symbol("===g(p(e),0,7)&&(e="["+m(p(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),i&&i.getter&&(e="get "+e),i&&i.setter&&(e="set "+e),(!o(t,"name")||h&&t.name!==e)&&(a?_(t,"name",{value:e,configurable:!0}):t.name=e),v&&i&&o(i,"arity")&&t.length!==i.arity&&_(t,"length",{value:i.arity});try{i&&o(i,"constructor")&&i.constructor?a&&_(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var s=c(t);return o(s,"source")||(s.source=f(y,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=x(function(){return n(this)&&u(this).source||l(this)},"toString");/***/},/***/917:/***/t=>{var e=Math.ceil,i=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t.exports=Math.trunc||function(t){var s=+t;return(s>0?i:e)(s)};/***/},/***/1787:/***/(t,e,i)=>{var s=i(7400),r=i(4394),n=i(7137),o=i(1176),a=i(9310),h=TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,c="enumerable",u="configurable",p="writable";// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
e.f=s?n?function(t,e,i){if(o(t),e=a(e),o(i),"function"==typeof t&&"prototype"===e&&"value"in i&&p in i&&!i[p]){var s=d(t,e);s&&s[p]&&(t[e]=i.value,i={configurable:u in i?i[u]:s[u],enumerable:c in i?i[c]:s[c],writable:!1})}return l(t,e,i)}:l:function(t,e,i){if(o(t),e=a(e),o(i),r)try{return l(t,e,i)}catch(t){}if("get"in i||"set"in i)throw h("Accessors not supported");return"value"in i&&(t[e]=i.value),t};/***/},/***/7933:/***/(t,e,i)=>{var s=i(7400),r=i(266),n=i(9195),o=i(5358),a=i(905),h=i(9310),l=i(8270),d=i(4394),c=Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
e.f=s?c:function(t,e){if(t=a(t),e=h(e),d)try{return c(t,e)}catch(t){}if(l(t,e))return o(!r(n.f,t,e),t[e])};/***/},/***/8151:/***/(t,e,i)=>{var s=i(140),r=i(3837).concat("length","prototype");// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
e.f=Object.getOwnPropertyNames||function(t){return s(t,r)};/***/},/***/894:/***/(t,e)=>{// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
e.f=Object.getOwnPropertySymbols;/***/},/***/1321:/***/(t,e,i)=>{var s=i(5968);t.exports=s({}.isPrototypeOf);/***/},/***/140:/***/(t,e,i)=>{var s=i(5968),r=i(8270),n=i(905),o=i(9540).indexOf,a=i(5977),h=s([].push);t.exports=function(t,e){var i,s=n(t),l=0,d=[];for(i in s)!r(a,i)&&r(s,i)&&h(d,i);// Don't enum bug & hidden keys
for(;e.length>l;)r(s,i=e[l++])&&(~o(d,i)||h(d,i));return d};/***/},/***/5632:/***/(t,e,i)=>{var s=i(140),r=i(3837);// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
t.exports=Object.keys||function(t){return s(t,r)};/***/},/***/9195:/***/(t,e)=>{var i={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,r=s&&!i.call({1:2},1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
e.f=r?function(t){var e=s(this,t);return!!e&&e.enumerable}:i;/***/},/***/2914:/***/(t,e,i)=>{var s=i(266),r=i(6733),n=i(5052),o=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
t.exports=function(t,e){var i,a;if("string"===e&&r(i=t.toString)&&!n(a=s(i,t))||r(i=t.valueOf)&&!n(a=s(i,t))||"string"!==e&&r(i=t.toString)&&!n(a=s(i,t)))return a;throw o("Can't convert object to primitive value")};/***/},/***/4826:/***/(t,e,i)=>{var s=i(1333),r=i(5968),n=i(8151),o=i(894),a=i(1176),h=r([].concat);// all object keys, includes non-enumerable and symbols
t.exports=s("Reflect","ownKeys")||function(t){var e=n.f(a(t)),i=o.f;return i?h(e,i(t)):e};/***/},/***/9276:/***/(t,e,i)=>{var s=i(9859);t.exports=s;/***/},/***/8885:/***/(t,e,i)=>{var s=i(9650),r=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
t.exports=function(t){if(s(t))throw r("Can't call method on "+t);return t};/***/},/***/4399:/***/(t,e,i)=>{var s=i(3036),r=i(1441),n=s("keys");t.exports=function(t){return n[t]||(n[t]=r(t))};/***/},/***/5353:/***/(t,e,i)=>{var s=i(9859),r=i(8400),n="__core-js_shared__",o=s[n]||r(n,{});t.exports=o;/***/},/***/3036:/***/(t,e,i)=>{var s=i(4231),r=i(5353);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.0",mode:s?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"});/***/},/***/4860:/***/(t,e,i)=>{/* eslint-disable es/no-symbol -- required for testing */var s=i(5884),r=i(4229),n=i(9859).String;// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
t.exports=!!Object.getOwnPropertySymbols&&!r(function(){var t=Symbol();// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!n(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&s&&s<41});/***/},/***/3231:/***/(t,e,i)=>{var s=i(3329),r=Math.max,n=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t.exports=function(t,e){var i=s(t);return i<0?r(i+e,0):n(i,e)};/***/},/***/905:/***/(t,e,i)=>{// toObject with fallback for non-array-like ES3 strings
var s=i(9337),r=i(8885);t.exports=function(t){return s(r(t))};/***/},/***/3329:/***/(t,e,i)=>{var s=i(917);// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t.exports=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:s(e)};/***/},/***/4237:/***/(t,e,i)=>{var s=i(3329),r=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t.exports=function(t){return t>0?r(s(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
};/***/},/***/2991:/***/(t,e,i)=>{var s=i(8885),r=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
t.exports=function(t){return r(s(t))};/***/},/***/2066:/***/(t,e,i)=>{var s=i(266),r=i(5052),n=i(9395),o=i(5300),a=i(2914),h=i(95),l=TypeError,d=h("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
t.exports=function(t,e){if(!r(t)||n(t))return t;var i,h=o(t,d);if(h){if(void 0===e&&(e="default"),!r(i=s(h,t,e))||n(i))return i;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)};/***/},/***/9310:/***/(t,e,i)=>{var s=i(2066),r=i(9395);// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
t.exports=function(t){var e=s(t,"string");return r(e)?e:e+""};/***/},/***/1601:/***/(t,e,i)=>{var s=i(95)("toStringTag"),r={};r[s]="z",t.exports="[object z]"===String(r);/***/},/***/3326:/***/(t,e,i)=>{var s=i(1589),r=String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)};/***/},/***/9821:/***/t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}};/***/},/***/1441:/***/(t,e,i)=>{var s=i(5968),r=0,n=Math.random(),o=s(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+n,36)};/***/},/***/6969:/***/(t,e,i)=>{/* eslint-disable es/no-symbol -- required for testing */var s=i(4860);t.exports=s&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;/***/},/***/7137:/***/(t,e,i)=>{var s=i(7400),r=i(4229);// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t.exports=s&&r(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});/***/},/***/1180:/***/(t,e,i)=>{var s=i(9859),r=i(6733),n=s.WeakMap;t.exports=r(n)&&/native code/.test(String(n));/***/},/***/95:/***/(t,e,i)=>{var s=i(9859),r=i(3036),n=i(8270),o=i(1441),a=i(4860),h=i(6969),l=s.Symbol,d=r("wks"),c=h?l.for||l:l&&l.withoutSetter||o;t.exports=function(t){return n(d,t)||(d[t]=a&&n(l,t)?l[t]:c("Symbol."+t)),d[t]};/***/},/***/3430:/***/(t,e,i)=>{var s=i(3103),r=i(5968),n=i(7111),o=i(2991),a=i(9646),h=i(9563),l=i(3326),d=i(4229),c=i(3867),u=i(6038),p=i(2671),_=i(8506),g=i(5884),m=i(9811),f=[],v=r(f.sort),y=r(f.push),x=d(function(){f.sort(void 0)}),w=d(function(){f.sort(null)}),b=u("sort"),C=!d(function(){// feature detection can be too slow, so check engines versions
if(g)return g<70;if(!p||!(p>3)){if(_)return!0;if(m)return m<603;var t,e,i,s,r="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(s=0;s<47;s++)f.push({k:e+s,v:i})}for(f.sort(function(t,e){return e.v-t.v}),s=0;s<f.length;s++)e=f[s].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
s({target:"Array",proto:!0,forced:x||!w||!b||!C},{sort:function(t){void 0!==t&&n(t);var e,i,s=o(this);if(C)return void 0===t?v(s):v(s,t);var r=[],d=a(s);for(i=0;i<d;i++)i in s&&y(r,s[i]);for(c(r,function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:l(e)>l(i)?1:-1}),e=a(r),i=0;i<e;)s[i]=r[i++];for(;i<d;)h(s,i++);return s}});/***/},/***/4769:/***/(t,e,i)=>{var s=i(3103),r=i(2991),n=i(5632);// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
s({target:"Object",stat:!0,forced:i(4229)(function(){n(1)})},{keys:function(t){return n(r(t))}});/***/},/***/1388:/***/(t,e,i)=>{/* harmony export */i.d(e,{/* harmony export */Z:()=>a});/* harmony import */var s=i(272),r=/*#__PURE__*/i.n(s),n=i(2609),o=/*#__PURE__*/i.n(n)()(r());// Module
o.push([t.id,`/* Buttons styles start */

button#excalibur-play {
  display: inline-block;
  position: relative;
  z-index: 999;
  border-radius: 6px;
  border: none;
  /*border: 3px solid;
    border-color: white;
    box-shadow: 0 0 10px #ccc;*/
  padding: 1rem 1.5rem 1rem 4rem;
  margin: 0;
  text-decoration: none;
  background: #00b233;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 2rem;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */
  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */
  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */
  animation: excalibur-button-fadein 200ms;
}

/*
button#excalibur-play {
  display: none;
}*/

button#excalibur-play:after {
  position: absolute;
  content: '';
  border: 8px solid;
  border-color: transparent transparent transparent white;
  left: 35px;
  top: 24px;
  width: 0;
  height: 0;
}

button#excalibur-play:before {
  position: absolute;
  content: '';
  border: 3px solid;
  left: 19px;
  top: 14px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
}

button#excalibur-play:hover,
button#excalibur-play:focus {
  background: #00982c;
}

button#excalibur-play:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

button#excalibur-play:active {
  transform: scale(0.99);
}

@keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,"",{version:3,sources:["webpack://./Loader.css"],names:[],mappings:"AAAA,yBAAyB;;AAEzB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ;;+BAE6B;EAC7B,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,8DAA8D;EAC9D,wBAAwB;EACxB,qBAAqB;;EAErB,gDAAgD,EAAE,oCAAoC;EACtF,6CAA6C,EAAE,iBAAiB;EAChE,4CAA4C,EAAE,sBAAsB;EACpE,2CAA2C,EAAE,iBAAiB;EAC9D,wCAAwC;AAC1C;;AAEA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",sourcesContent:["/* Buttons styles start */\r\n\r\nbutton#excalibur-play {\r\n  display: inline-block;\r\n  position: relative;\r\n  z-index: 999;\r\n  border-radius: 6px;\r\n  border: none;\r\n  /*border: 3px solid;\r\n    border-color: white;\r\n    box-shadow: 0 0 10px #ccc;*/\r\n  padding: 1rem 1.5rem 1rem 4rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  background: #00b233;\r\n  color: #ffffff;\r\n  font-family: sans-serif;\r\n  font-size: 2rem;\r\n  white-space: nowrap;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  transition: background 250ms ease-in-out, transform 150ms ease;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\r\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\r\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\r\n  animation: excalibur-button-fadein 200ms;\r\n}\r\n\r\n/*\r\nbutton#excalibur-play {\r\n  display: none;\r\n}*/\r\n\r\nbutton#excalibur-play:after {\r\n  position: absolute;\r\n  content: '';\r\n  border: 8px solid;\r\n  border-color: transparent transparent transparent white;\r\n  left: 35px;\r\n  top: 24px;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nbutton#excalibur-play:before {\r\n  position: absolute;\r\n  content: '';\r\n  border: 3px solid;\r\n  left: 19px;\r\n  top: 14px;\r\n  border-radius: 20px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\nbutton#excalibur-play:hover,\r\nbutton#excalibur-play:focus {\r\n  background: #00982c;\r\n}\r\n\r\nbutton#excalibur-play:focus {\r\n  outline: 1px solid #fff;\r\n  outline-offset: -4px;\r\n}\r\n\r\nbutton#excalibur-play:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n@keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Firefox < 16 */\r\n@-moz-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Internet Explorer */\r\n@-ms-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Opera < 12.1 */\r\n@-o-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],sourceRoot:""}]);// Exports
/* harmony default export */let a=o;/***/},/***/7379:/***/(t,e,i)=>{/* harmony export */i.d(e,{/* harmony export */Z:()=>a});/* harmony import */var s=i(272),r=/*#__PURE__*/i.n(s),n=i(2609),o=/*#__PURE__*/i.n(n)()(r());// Module
o.push([t.id,`
#ex-toast-container {
  position: absolute;
  height: 0;
  min-width: 50%;
  left: 50%;
  top: 0;
}

.ex-toast-message {
  left: -50%;
  position: relative;
  display: flex;
  justify-content: space-between;


  padding: 10px;
  margin-top: 5px;
  font-size: 18px;
  font-family: sans-serif;
  border-radius: 6px;
  border: 3px solid #b7b779;
  background-color: rgb(253, 253, 192);
}


.ex-toast-message button {
  align-self: flex-start;
}`,"",{version:3,sources:["webpack://./Util/Toaster.css"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,SAAS;EACT,MAAM;AACR;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,8BAA8B;;;EAG9B,aAAa;EACb,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;AACtC;;;AAGA;EACE,sBAAsB;AACxB",sourcesContent:["\r\n#ex-toast-container {\r\n  position: absolute;\r\n  height: 0;\r\n  min-width: 50%;\r\n  left: 50%;\r\n  top: 0;\r\n}\r\n\r\n.ex-toast-message {\r\n  left: -50%;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n\r\n  padding: 10px;\r\n  margin-top: 5px;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  border-radius: 6px;\r\n  border: 3px solid #b7b779;\r\n  background-color: rgb(253, 253, 192);\r\n}\r\n\r\n\r\n.ex-toast-message button {\r\n  align-self: flex-start;\r\n}"],sourceRoot:""}]);// Exports
/* harmony default export */let a=o;/***/},/***/2609:/***/t=>{/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/t.exports=function(t){var e=[];return(// return the list of modules as css string
e.toString=function(){return this.map(function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},// import a list of modules into the list
e.i=function(t,i,s,r,n){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(o[h]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);s&&o[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),i&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e)};/***/},/***/272:/***/t=>{t.exports=function(t){var e=t[1],i=t[3];if(!i)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i))));return[e].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)," */")]).join("\n")}return[e].join("\n")};/***/}},s={};/******//******/// The require function
/******/function r(t){/******/// Check if module is in cache
/******/var e=s[t];/******/if(void 0!==e)/******/return e.exports;/******/// Create a new module (and put it into the cache)
/******/var n=s[t]={/******/id:t,/******/// no module.loaded needed
/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/i[t].call(n.exports,n,n.exports,r),n.exports);/******/}/******/// getDefaultExport function for compatibility with non-harmony modules
/******/r.n=t=>{/******/var e=t&&t.__esModule?/******/()=>t.default:/******/()=>t;/******/return /******/r.d(e,{a:e}),e;/******/},/******/// define getter functions for harmony exports
/******/r.d=(t,e)=>{/******/for(var i in e)/******/r.o(e,i)&&!r.o(t,i)&&/******/Object.defineProperty(t,i,{enumerable:!0,get:e[i]});/******/},/******/r.g=function(){/******/if("object"==typeof globalThis)return globalThis;/******/try{/******/return this||Function("return this")();/******/}catch(t){/******/if("object"==typeof window)return window;/******/}/******/}(),/******/r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),/******/// define __esModule on exports
/******/r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(t,"__esModule",{value:!0});/******/};/******//************************************************************************/var n={};// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(()=>{// EXPORTS
r.d(n,{fWn:()=>/* reexport */sR,Ia8:()=>/* reexport */s_,rqv:()=>/* reexport */rY,hLI:()=>/* reexport */sD,yyv:()=>/* reexport */ry,tX5:()=>/* reexport */t1,vtX:()=>/* reexport */sL,r7K:()=>/* reexport */st,lCh:()=>/* reexport */s3,cE4:()=>/* reexport */eP,fwF:()=>/* reexport */Animation,sce:()=>/* reexport */ta,AQ6:()=>/* reexport */rd,_c7:()=>/* reexport */th,KUs:()=>/* reexport */ro,Ajp:()=>/* reexport */io,dkO:()=>/* reexport */O,RDh:()=>/* reexport */tn,_H9:()=>/* reexport */ti,mxs:()=>/* reexport */sT,OmD:()=>/* reexport */i8,kBf:()=>/* reexport */ey,C4F:()=>/* reexport */K,NQt:()=>/* reexport */rR,JjN:()=>/* reexport */rD,EK_:()=>/* reexport */z,V1s:()=>/* reexport */sJ,xHm:()=>/* reexport */sQ,Xz7:()=>/* reexport */ig,Cdc:()=>/* reexport */sc,FKn:()=>/* reexport */i1,SUY:()=>/* reexport */rz,ab2:()=>/* reexport */iJ,GfZ:()=>/* reexport */i0,YMS:()=>/* reexport */iY,oyv:()=>/* reexport */i7,aUb:()=>/* reexport */i2,SdD:()=>/* reexport */tJ,JUv:()=>/* reexport */iW,jEj:()=>/* reexport */rQ,TFq:()=>/* reexport */i3,HDU:()=>/* reexport */tj,R_y:()=>/* reexport */tY,ydN:()=>/* reexport */Z,t50:()=>/* reexport */tQ,s$$:()=>/* reexport */rl,v2G:()=>/* reexport */X,Ilk:()=>/* reexport */ef,s9i:()=>/* reexport */rP,dxL:()=>/* reexport */tc,LLX:()=>/* reexport */rE,wA2:()=>/* reexport */iz,R_p:()=>/* reexport */ij,IQ$:()=>/* reexport */ru,I5F:()=>/* reexport */t8,X8$:()=>/* reexport */ra,FR6:()=>/* reexport */tK,U8o:()=>/* reexport */tZ,kbG:()=>/* reexport */j,iS_:()=>/* reexport */t2,cGG:()=>/* reexport */rI,RPN:()=>/* reexport */s$,skb:()=>/* reexport */rf,SLU:()=>/* reexport */eN,RdJ:()=>/* reexport */Q,cNu:()=>/* reexport */sP,gU7:()=>/* reexport */iP,LSk:()=>/* reexport */sI,Nmp:()=>/* reexport */tr,d1Y:()=>/* reexport */q,xrL:()=>/* reexport */iX,sRW:()=>/* reexport */iK,cmV:()=>/* binding */na,qWz:()=>/* reexport */sS,N0Q:()=>/* reexport */sA,q8b:()=>/* reexport */sp,ynB:()=>/* reexport */i4,jT9:()=>/* reexport */sK,wAz:()=>/* reexport */tl,D4V:()=>/* reexport */rG,NLr:()=>/* reexport */rV,N6H:()=>/* reexport */t4,W1A:()=>/* reexport */t3,JHW:()=>/* reexport */sn,ZZ$:()=>/* reexport */sr,v2K:()=>/* reexport */s7,pBf:()=>/* reexport */rq,vpe:()=>/* reexport */tS,GMl:()=>/* reexport */L,zW2:()=>/* reexport */tf,B0K:()=>/* reexport */im,Nv7:()=>/* reexport */is,C_p:()=>/* reexport */ie,MUA:()=>/* reexport */t9,xqU:()=>/* reexport */t5,pTp:()=>/* reexport */sE,vUK:()=>/* reexport */tC,j9l:()=>/* reexport */sM,Zxw:()=>/* reexport */sU,v51:()=>/* reexport */sF,Hdx:()=>/* reexport */ts,Z$d:()=>/* reexport */tt,iqV:()=>/* reexport */rL,o$7:()=>/* reexport */rM,olM:()=>/* reexport */ex,Zm$:()=>/* reexport */tT,$QH:()=>/* reexport */tM,i78:()=>/* reexport */tk,nJg:()=>/* reexport */Gamepad,h6u:()=>/* reexport */tW,hts:()=>/* reexport */t$,j88:()=>/* reexport */tH,VME:()=>/* reexport */tN,fy2:()=>/* reexport */t6,nt:()=>/* reexport */r6,Ukr:()=>/* reexport */rB,zsu:()=>/* reexport */eF,oA6:()=>/* reexport */sl,TVh:()=>/* reexport */rc,TwZ:()=>/* reexport */sa,GTT:()=>/* reexport */sh,xxj:()=>/* reexport */rm,XdK:()=>/* reexport */tG,Jmb:()=>/* reexport */G,cXo:()=>/* reexport */ez,Dm5:()=>/* reexport */t0,IIB:()=>/* reexport */tx,ebW:()=>/* reexport */rW,zI0:()=>/* reexport */Y,LYD:()=>/* reexport */rx,cEG:()=>/* reexport */rw,SEl:()=>/* reexport */rK,t9V:()=>/* reexport */rZ,ez5:()=>/* reexport */ei,N1d:()=>/* reexport */es,R8U:()=>/* reexport */N,SKZ:()=>/* reexport */tE,__J:()=>/* reexport */rX,RI$:()=>/* reexport */sj,x12:()=>/* reexport */ns,ccz:()=>/* reexport */iQ,aNw:()=>/* reexport */iT,XrL:()=>/* reexport */iS,xwn:()=>/* reexport */sZ,dNK:()=>/* reexport */sX,ini:()=>/* reexport */H,YdH:()=>/* reexport */t7,F5T:()=>/* reexport */e6,y3G:()=>/* reexport */eE,l57:()=>/* reexport */V,xn0:()=>/* reexport */ix,t2V:()=>/* reexport */sk,uxB:()=>/* reexport */i$,cpd:()=>/* reexport */rn,fiy:()=>/* reexport */sf,$XZ:()=>/* reexport */sv,UG6:()=>/* reexport */tp,uqK:()=>/* reexport */iw,STE:()=>/* reexport */ib,y$z:()=>/* reexport */iH,mAD:()=>/* reexport */rb,sOq:()=>/* reexport */iV,hUw:()=>/* reexport */sN,_0G:()=>/* reexport */rj,Sqs:()=>/* reexport */ni,hpZ:()=>/* reexport */r_,Vol:()=>/* reexport */rg,vYX:()=>/* reexport */td,wIZ:()=>/* reexport */iB,cBi:()=>/* reexport */rk,c30:()=>/* reexport */rC,MPV:()=>/* reexport */t_,RFv:()=>/* reexport */su,Ux6:()=>/* reexport */PointerEvent,rxy:()=>/* reexport */rU,I$c:()=>/* reexport */$,kfC:()=>/* reexport */rv,VjY:()=>/* reexport */tg,mgq:()=>/* reexport */nr,YVA:()=>/* reexport */i9,Kgp:()=>/* reexport */e3,HH$:()=>/* reexport */tX,M_d:()=>/* reexport */tF,rgh:()=>/* reexport */tD,Ra6:()=>/* reexport */tO,KhR:()=>/* reexport */tI,BS5:()=>/* reexport */tL,xhz:()=>/* reexport */tq,xOq:()=>/* reexport */tB,a9j:()=>/* reexport */tR,bHk:()=>/* reexport */tz,CgK:()=>/* reexport */tP,cuY:()=>/* reexport */tU,kvE:()=>/* reexport */iG,SBu:()=>/* reexport */e0,AE_:()=>/* reexport */rt,ctO:()=>/* reexport */re,OLH:()=>/* reexport */sY,kky:()=>/* reexport */er,nSF:()=>/* reexport */i_,zHn:()=>/* reexport */iZ,zwx:()=>/* reexport */rh,AeJ:()=>/* reexport */sd,hLz:()=>/* reexport */si,D9g:()=>/* reexport */s9,wA:()=>/* reexport */sg,jhr:()=>/* reexport */sm,GVs:()=>/* reexport */ir,_zO:()=>/* reexport */eR,LXZ:()=>/* reexport */ek,w6$:()=>/* reexport */sx,mhV:()=>/* reexport */sy,MOD:()=>/* reexport */J,kwd:()=>/* reexport */sb,Lmr:()=>/* reexport */sw,xsS:()=>/* reexport */rS,K5l:()=>/* reexport */rA,lLr:()=>/* reexport */Screen,Z$r:()=>/* reexport */et,IXb:()=>/* reexport */sO,SGH:()=>/* reexport */rT,SMj:()=>/* reexport */tm,L34:()=>/* reexport */no,exe:()=>/* reexport */eX,bnF:()=>/* reexport */i6,MFA:()=>/* reexport */W,$uU:()=>/* reexport */iA,Sap:()=>/* reexport */iC,jyi:()=>/* reexport */eU,E03:()=>/* reexport */eH,V6q:()=>/* reexport */eO,rg2:()=>/* reexport */rO,DVW:()=>/* reexport */iv,nVo:()=>/* reexport */sq,F6N:()=>/* reexport */nt,xP7:()=>/* reexport */s5,Odq:()=>/* reexport */ri,Zif:()=>/* reexport */to,ZGJ:()=>/* reexport */iO,MJk:()=>/* reexport */rH,xvT:()=>/* reexport */Text,PHM:()=>/* reexport */te,dpR:()=>/* reexport */eL,n9L:()=>/* reexport */sG,KwO:()=>/* reexport */sV,SxM:()=>/* reexport */sW,B7y:()=>/* reexport */sH,x7r:()=>/* reexport */r$,wx7:()=>/* reexport */iL,Uvn:()=>/* reexport */iN,OFT:()=>/* reexport */iq,xzN:()=>/* reexport */s2,CcZ:()=>/* reexport */s0,M5Z:()=>/* reexport */en,ZrN:()=>/* reexport */tw,OWs:()=>/* reexport */eg,dF9:()=>/* reexport */iF,oZy:()=>/* reexport */eZ,rD2:()=>/* reexport */eK,VHo:()=>/* reexport */tV,ohE:()=>/* reexport */ia,R$E:()=>/* reexport */iy,xQN:()=>/* reexport */tu,AdJ:()=>/* reexport */WheelEvent,q3I:()=>/* reexport */rs,Pab:()=>/* reexport */el,uZ5:()=>/* reexport */eh,McK:()=>/* reexport */tA,F9c:()=>/* reexport */eo,k0b:()=>/* reexport */so,hnT:()=>/* reexport */r0,RSJ:()=>/* reexport */r3,Mku:()=>/* reexport */r2,h90:()=>/* reexport */r9,rms:()=>/* reexport */r4,ErP:()=>/* reexport */rJ,aVg:()=>/* reexport */r5,lPc:()=>/* reexport */r1,Z8E:()=>/* reexport */se,_N2:()=>/* reexport */s4,yFn:()=>/* reexport */s6,lNv:()=>/* reexport */ss,cu9:()=>/* reexport */sz,MZQ:()=>/* reexport */iI,FUM:()=>/* reexport */iD,BxR:()=>/* reexport */e8,vdf:()=>/* reexport */ep,iaL:()=>/* reexport */e_,w6H:()=>/* reexport */eu,Q4c:()=>/* reexport */ik,Xxe:()=>/* reexport */ea,Uxb:()=>/* reexport */ed,Yr5:()=>/* reexport */ec,Bhw:()=>/* reexport */em,yOA:()=>/* reexport */tv});// NAMESPACE OBJECT: ./Events.ts
var t,e,i,s,o,a,h,l,d,c,u,p,_,g,m,f,v,y,x,w,b,C,A,S,T,E,P,I,M,k,R,D,B,F,U,L,z,O,H,N,$,W,V,G,q,X,Z,K,Y,j,Q,J,tt,te,ti,ts,tr,tn,to,ta,th,tl,td,tc,tu,tp,t_,tg,tm,tf={};r.r(tf),r.d(tf,{ActivateEvent:()=>t1,CollisionEndEvent:()=>tJ,CollisionPostSolveEvent:()=>tj,CollisionPreSolveEvent:()=>tY,CollisionStartEvent:()=>tQ,ContactEndEvent:()=>tK,ContactStartEvent:()=>tZ,DeactivateEvent:()=>t2,EnterTriggerEvent:()=>t4,EnterViewPortEvent:()=>t3,EventTypes:()=>L,ExitTriggerEvent:()=>t9,ExitViewPortEvent:()=>t5,GameEvent:()=>tT,GameStartEvent:()=>tM,GameStopEvent:()=>tk,GamepadAxisEvent:()=>tW,GamepadButtonEvent:()=>t$,GamepadConnectEvent:()=>tH,GamepadDisconnectEvent:()=>tN,HiddenEvent:()=>tG,InitializeEvent:()=>t0,KillEvent:()=>tE,PostCollisionEvent:()=>tX,PostDebugDrawEvent:()=>tF,PostDrawEvent:()=>tD,PostFrameEvent:()=>tO,PostKillEvent:()=>tI,PostUpdateEvent:()=>tL,PreCollisionEvent:()=>tq,PreDebugDrawEvent:()=>tB,PreDrawEvent:()=>tR,PreFrameEvent:()=>tz,PreKillEvent:()=>tP,PreUpdateEvent:()=>tU,VisibleEvent:()=>tV});// NAMESPACE OBJECT: ./Graphics/Context/webgl-util.ts
var tv={};r.r(tv),r.d(tv,{getAttributeComponentSize:()=>eG,getAttributePointerType:()=>eq,getGlTypeSizeBytes:()=>eV});// NAMESPACE OBJECT: ./Util/DrawUtil.ts
var ty={};r.r(ty),r.d(ty,{circle:()=>iu,line:()=>ih,point:()=>il,roundRect:()=>ic,vector:()=>id});// NAMESPACE OBJECT: ./Input/Index.ts
var tx={};r.r(tx),r.d(tx,{Axes:()=>O,Buttons:()=>z,Gamepad:()=>Gamepad,Gamepads:()=>t6,KeyEvent:()=>ei,Keyboard:()=>es,Keys:()=>N,NativePointerButton:()=>tp,PointerButton:()=>t_,PointerComponent:()=>su,PointerEvent:()=>PointerEvent,PointerEventReceiver:()=>rU,PointerScope:()=>$,PointerSystem:()=>rv,PointerType:()=>tg,WheelDeltaMode:()=>tu,WheelEvent:()=>WheelEvent});// NAMESPACE OBJECT: ./Util/Index.ts
var tw={};/**
 * Polyfill adding function
 */function tb(){/* istanbul ignore next */if("undefined"==typeof window&&(window={audioContext:function(){}}),"undefined"==typeof window||window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setInterval(t,1e3/60)}),"undefined"==typeof window||window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(){}),"undefined"!=typeof window&&!window.AudioContext){if(window.webkitAudioContext){let t=window.webkitAudioContext,e=t.prototype.decodeAudioData;window.webkitAudioContext.prototype.decodeAudioData=function(t){return new Promise((i,s)=>{e.call(this,t,i,s)})}}window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext||window.oAudioContext}"undefined"==typeof window||window.devicePixelRatio||(window.devicePixelRatio=window.devicePixelRatio||1)}r.r(tw),r.d(tw,{ConsoleAppender:()=>t8,DrawUtil:()=>ty,EasingFunctions:()=>sp,LogLevel:()=>H,Logger:()=>t7,Observable:()=>iH,ScreenAppender:()=>et,addItemToArray:()=>eb,contains:()=>eA,delay:()=>eT,fail:()=>eS,getPosition:()=>ew,removeItemFromArray:()=>eC}),r(4662),r(8343);/**
 * Flags is a feature flag implementation for Excalibur. They can only be operated **before [[Engine]] construction**
 * after which they are frozen and are read-only.
 *
 * Flags are used to enable experimental or preview features in Excalibur.
 */class tC{/**
     * Force excalibur to load the Canvas 2D graphics context fallback
     *
     * @warning not all features of excalibur are supported in the Canvas 2D fallback
     */static useCanvasGraphicsContext(){tC.enable("use-canvas-context")}/**
     * Freeze all flag modifications making them readonly
     */static freeze(){tC._FROZEN=!0}/**
     * Resets internal flag state, not meant to be called by users. Only used for testing.
     *
     * Calling this in your game is UNSUPPORTED
     * @internal
     */static _reset(){tC._FROZEN=!1,tC._FLAGS={}}/**
     * Enable a specific feature flag by name. **Note: can only be set before [[Engine]] constructor time**
     * @param flagName
     */static enable(t){if(this._FROZEN)throw Error("Feature flags can only be enabled before Engine constructor time");tC._FLAGS[t]=!0}/**
     * Disable a specific feature flag by name. **Note: can only be set before [[Engine]] constructor time**
     * @param flagName
     */static disable(t){if(this._FROZEN)throw Error("Feature flags can only be disabled before Engine constructor time");tC._FLAGS[t]=!1}/**
     * Check if a flag is enabled. If the flag is disabled or does not exist `false` is returned
     * @param flagName
     */static isEnabled(t){return!!tC._FLAGS[t]}/**
     * Show a list of currently known flags
     */static show(){return Object.keys(tC._FLAGS)}}/**
 * Create a branded ID type from a number
 */function tA(t,e){return{type:t,value:e}}tC._FROZEN=!1,tC._FLAGS={};/**
 * Excalibur's typed event emitter, this allows events to be sent with any string to Type mapping
 */class tS{constructor(){this._paused=!1,this._listeners={},this._listenersOnce={},this._pipes=[]}clear(){this._listeners={},this._listenersOnce={},this._pipes.length=0}on(t,e){var i;return this._listeners[t]=null!==(i=this._listeners[t])&&void 0!==i?i:[],this._listeners[t].push(e),{close:()=>this.off(t,e)}}once(t,e){var i;return this._listenersOnce[t]=null!==(i=this._listenersOnce[t])&&void 0!==i?i:[],this._listenersOnce[t].push(e),{close:()=>this.off(t,e)}}off(t,e){var i,s,r,n;if(e){let o=null===(i=this._listeners[t])||void 0===i?void 0:i.indexOf(e);o>-1&&(null===(s=this._listeners[t])||void 0===s||s.splice(o,1));let a=null===(r=this._listenersOnce[t])||void 0===r?void 0:r.indexOf(e);a>-1&&(null===(n=this._listenersOnce[t])||void 0===n||n.splice(a,1))}else delete this._listeners[t]}emit(t,e){var i;if(this._paused)return;null===(i=this._listeners[t])||void 0===i||i.forEach(t=>t(e));let s=this._listenersOnce[t];this._listenersOnce[t]=[],s&&s.forEach(t=>t(e)),this._pipes.forEach(i=>{i.emit(t,e)})}pipe(t){if(this===t)throw Error("Cannot pipe to self");return this._pipes.push(t),{close:()=>{let e=this._pipes.indexOf(t);e>-1&&this._pipes.splice(e,1)}}}unpipe(t){let e=this._pipes.indexOf(t);e>-1&&this._pipes.splice(e,1)}pause(){this._paused=!0}unpause(){this._paused=!1}}(t=L||(L={})).Kill="kill",t.PreKill="prekill",t.PostKill="postkill",t.PreDraw="predraw",t.PostDraw="postdraw",t.PreDebugDraw="predebugdraw",t.PostDebugDraw="postdebugdraw",t.PreUpdate="preupdate",t.PostUpdate="postupdate",t.PreFrame="preframe",t.PostFrame="postframe",t.PreCollision="precollision",t.CollisionStart="collisionstart",t.CollisionEnd="collisionend",t.PostCollision="postcollision",t.Initialize="initialize",t.Activate="activate",t.Deactivate="deactivate",t.ExitViewport="exitviewport",t.EnterViewport="enterviewport",t.ExitTrigger="exit",t.EnterTrigger="enter",t.Connect="connect",t.Disconnect="disconnect",t.Button="button",t.Axis="axis",t.Visible="visible",t.Hidden="hidden",t.Start="start",t.Stop="stop",t.PointerUp="pointerup",t.PointerDown="pointerdown",t.PointerMove="pointermove",t.PointerEnter="pointerenter",t.PointerLeave="pointerleave",t.PointerCancel="pointercancel",t.PointerWheel="pointerwheel",t.Up="up",t.Down="down",t.Move="move",t.Enter="enter",t.Leave="leave",t.Cancel="cancel",t.Wheel="wheel",t.Press="press",t.Release="release",t.Hold="hold",t.PointerDragStart="pointerdragstart",t.PointerDragEnd="pointerdragend",t.PointerDragEnter="pointerdragenter",t.PointerDragLeave="pointerdragleave",t.PointerDragMove="pointerdragmove";/**
 * Base event type in Excalibur that all other event types derive from. Not all event types are thrown on all Excalibur game objects,
 * some events are unique to a type, others are not.
 *
 */class tT{constructor(){this._bubbles=!0}/**
     * If set to false, prevents event from propagating to other actors. If true it will be propagated
     * to all actors that apply.
     */get bubbles(){return this._bubbles}set bubbles(t){this._bubbles=t}/**
     * Prevents event from bubbling
     */stopPropagation(){this.bubbles=!1}}/**
 * The 'kill' event is emitted on actors when it is killed. The target is the actor that was killed.
 */class tE extends tT{constructor(t){super(),this.target=t}}/**
 * The 'prekill' event is emitted directly before an actor is killed.
 */class tP extends tT{constructor(t){super(),this.target=t}}/**
 * The 'postkill' event is emitted directly after the actor is killed.
 */class tI extends tT{constructor(t){super(),this.target=t}}/**
 * The 'start' event is emitted on engine when has started and is ready for interaction.
 */class tM extends tT{constructor(t){super(),this.target=t}}/**
 * The 'stop' event is emitted on engine when has been stopped and will no longer take input, update or draw.
 */class tk extends tT{constructor(t){super(),this.target=t}}/**
 * The 'predraw' event is emitted on actors, scenes, and engine before drawing starts. Actors' predraw happens inside their graphics
 * transform so that all drawing takes place with the actor as the origin.
 *
 */class tR extends tT{constructor(t,e,i){super(),this.ctx=t,this.delta=e,this.target=i}}/**
 * The 'postdraw' event is emitted on actors, scenes, and engine after drawing finishes. Actors' postdraw happens inside their graphics
 * transform so that all drawing takes place with the actor as the origin.
 *
 */class tD extends tT{constructor(t,e,i){super(),this.ctx=t,this.delta=e,this.target=i}}/**
 * The 'predebugdraw' event is emitted on actors, scenes, and engine before debug drawing starts.
 */class tB extends tT{constructor(t,e){super(),this.ctx=t,this.target=e}}/**
 * The 'postdebugdraw' event is emitted on actors, scenes, and engine after debug drawing starts.
 */class tF extends tT{constructor(t,e){super(),this.ctx=t,this.target=e}}/**
 * The 'preupdate' event is emitted on actors, scenes, camera, and engine before the update starts.
 */class tU extends tT{constructor(t,e,i){super(),this.engine=t,this.delta=e,this.target=i}}/**
 * The 'postupdate' event is emitted on actors, scenes, camera, and engine after the update ends.
 */class tL extends tT{constructor(t,e,i){super(),this.engine=t,this.delta=e,this.target=i}}/**
 * The 'preframe' event is emitted on the engine, before the frame begins.
 */class tz extends tT{constructor(t,e){super(),this.engine=t,this.prevStats=e,this.target=t}}/**
 * The 'postframe' event is emitted on the engine, after a frame ends.
 */class tO extends tT{constructor(t,e){super(),this.engine=t,this.stats=e,this.target=t}}/**
 * Event received when a gamepad is connected to Excalibur. [[Gamepads]] receives this event.
 */class tH extends tT{constructor(t,e){super(),this.index=t,this.gamepad=e,this.target=e}}/**
 * Event received when a gamepad is disconnected from Excalibur. [[Gamepads]] receives this event.
 */class tN extends tT{constructor(t,e){super(),this.index=t,this.gamepad=e,this.target=e}}/**
 * Gamepad button event. See [[Gamepads]] for information on responding to controller input. [[Gamepad]] instances receive this event;
 */class t$ extends tT{/**
     * @param button  The Gamepad button
     * @param value   A numeric value between 0 and 1
     */constructor(t,e,i){super(),this.button=t,this.value=e,this.target=i}}/**
 * Gamepad axis event. See [[Gamepads]] for information on responding to controller input. [[Gamepad]] instances receive this event;
 */class tW extends tT{/**
     * @param axis  The Gamepad axis
     * @param value A numeric value between -1 and 1
     */constructor(t,e,i){super(),this.axis=t,this.value=e,this.target=i}}/**
 * Event received by the [[Engine]] when the browser window is visible on a screen.
 */class tV extends tT{constructor(t){super(),this.target=t}}/**
 * Event received by the [[Engine]] when the browser window is hidden from all screens.
 */class tG extends tT{constructor(t){super(),this.target=t}}/**
 * Event thrown on an [[Actor|actor]] when a collision will occur this frame if it resolves
 */class tq extends tT{/**
     * @param actor         The actor the event was thrown on
     * @param other         The actor that will collided with the current actor
     * @param side          The side that will be collided with the current actor
     * @param intersection  Intersection vector
     */constructor(t,e,i,s){super(),this.other=e,this.side=i,this.intersection=s,this.target=t}}/**
 * Event thrown on an [[Actor|actor]] when a collision has been resolved (body reacted) this frame
 */class tX extends tT{/**
     * @param actor         The actor the event was thrown on
     * @param other         The actor that did collide with the current actor
     * @param side          The side that did collide with the current actor
     * @param intersection  Intersection vector
     */constructor(t,e,i,s){super(),this.other=e,this.side=i,this.intersection=s,this.target=t}get actor(){return this.target}set actor(t){this.target=t}}class tZ{constructor(t,e,i){this.target=t,this.other=e,this.contact=i}}class tK{constructor(t,e){this.target=t,this.other=e}}class tY{constructor(t,e,i,s,r){this.target=t,this.other=e,this.side=i,this.intersection=s,this.contact=r}}class tj{constructor(t,e,i,s,r){this.target=t,this.other=e,this.side=i,this.intersection=s,this.contact=r}}/**
 * Event thrown the first time an [[Actor|actor]] collides with another, after an actor is in contact normal collision events are fired.
 */class tQ extends tT{/**
     *
     * @param actor
     * @param other
     * @param contact
     */constructor(t,e,i){super(),this.other=e,this.contact=i,this.target=t}get actor(){return this.target}set actor(t){this.target=t}}/**
 * Event thrown when the [[Actor|actor]] is no longer colliding with another
 */class tJ extends tT{/**
     *
     */constructor(t,e){super(),this.other=e,this.target=t}get actor(){return this.target}set actor(t){this.target=t}}/**
 * Event thrown on an [[Actor]], [[Scene]], and [[Engine]] only once before the first update call
 */class t0 extends tT{/**
     * @param engine  The reference to the current engine
     */constructor(t,e){super(),this.engine=t,this.target=e}}/**
 * Event thrown on a [[Scene]] on activation
 */class t1 extends tT{/**
     * @param context  The context for the scene activation
     */constructor(t,e){super(),this.context=t,this.target=e}}/**
 * Event thrown on a [[Scene]] on deactivation
 */class t2 extends tT{/**
     * @param context  The context for the scene deactivation
     */constructor(t,e){super(),this.context=t,this.target=e}}/**
 * Event thrown on an [[Actor]] when it completely leaves the screen.
 */class t5 extends tT{constructor(t){super(),this.target=t}}/**
 * Event thrown on an [[Actor]] when it completely leaves the screen.
 */class t3 extends tT{constructor(t){super(),this.target=t}}class t4 extends tT{constructor(t,e){super(),this.target=t,this.actor=e}}class t9 extends tT{constructor(t,e){super(),this.target=t,this.actor=e}}/**
 * Excalibur leverages the HTML5 Gamepad API [where it is supported](http://caniuse.com/#feat=gamepad)
 * to provide controller support for your games.
 */class t6{constructor(){this.events=new tS,/**
         * Whether or not to poll for Gamepad input (default: `false`)
         */this.enabled=!1,/**
         * Whether or not Gamepad API is supported
         */this.supported=!!navigator.getGamepads,this._gamePadTimeStamps=[0,0,0,0],this._oldPads=[],this._pads=[],this._initSuccess=!1,this._navigator=navigator,this._minimumConfiguration=null}init(){this.supported&&!this._initSuccess&&(// In Chrome, this will return 4 undefined items until a button is pressed
// In FF, this will not return any items until a button is pressed
this._oldPads=this._clonePads(this._navigator.getGamepads()),this._oldPads.length&&this._oldPads[0]&&(this._initSuccess=!0))}/**
     * Sets the minimum gamepad configuration, for example {axis: 4, buttons: 4} means
     * this game requires at minimum 4 axis inputs and 4 buttons, this is not restrictive
     * all other controllers with more axis or buttons are valid as well. If no minimum
     * configuration is set all pads are valid.
     */setMinimumGamepadConfiguration(t){this._enableAndUpdate(),this._minimumConfiguration=t}/**
     * When implicitly enabled, set the enabled flag and run an update so information is updated
     */_enableAndUpdate(){this.enabled||(this.enabled=!0,this.update())}/**
     * Checks a navigator gamepad against the minimum configuration if present.
     */_isGamepadValid(t){if(!this._minimumConfiguration)return!0;if(!t)return!1;let e=t.axes.filter(t=>!0).length,i=t.buttons.filter(t=>!0).length;return e>=this._minimumConfiguration.axis&&i>=this._minimumConfiguration.buttons&&t.connected}emit(t,e){this.events.emit(t,e)}on(t,e){return this._enableAndUpdate(),this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this._enableAndUpdate(),this.events.off(t,e)}/**
     * Updates Gamepad state and publishes Gamepad events
     */update(){if(!this.enabled||!this.supported)return;this.init();let t=this._navigator.getGamepads();for(let e=0;e<t.length;e++){let i,s,r,n,o;if(t[e])!this.at(e).connected&&this._isGamepadValid(t[e])&&this.events.emit("connect",new tH(e,this.at(e))),// Set connection status
this.at(e).connected=!0;else{let t=this.at(e);t.connected&&this.events.emit("disconnect",new tN(e,t)),// Reset connection status
t.connected=!1;continue}// Only supported in Chrome
if(this.at(e).update(),!t[e].timestamp||t[e].timestamp!==this._gamePadTimeStamps[e]){for(i in this._gamePadTimeStamps[e]=t[e].timestamp,// Add reference to navigator gamepad
this.at(e).navigatorGamepad=t[e],z)"number"==typeof(s=z[i])&&t[e].buttons[s]&&(o=t[e].buttons[s].value)!==this._oldPads[e].getButton(s)&&(t[e].buttons[s].pressed?(this.at(e).updateButton(s,o),this.at(e).events.emit("button",new t$(s,o,this.at(e)))):this.at(e).updateButton(s,0));// Axes
for(r in O)"number"==typeof(n=O[r])&&(o=t[e].axes[n])!==this._oldPads[e].getAxes(n)&&(this.at(e).updateAxes(n,o),this.at(e).events.emit("axis",new tW(n,o,this.at(e))));this._oldPads[e]=this._clonePad(t[e])}}}/**
     * Safely retrieves a Gamepad at a specific index and creates one if it doesn't yet exist
     */at(t){if(this._enableAndUpdate(),t>=this._pads.length)for(let e=this._pads.length-1;e<t;e++)this._pads.push(new Gamepad),this._oldPads.push(new Gamepad);return this._pads[t]}/**
     * Returns a list of all valid gamepads that meet the minimum configuration requirement.
     */getValidGamepads(){this._enableAndUpdate();let t=[];for(let e=0;e<this._pads.length;e++)this._isGamepadValid(this.at(e).navigatorGamepad)&&this.at(e).connected&&t.push(this.at(e));return t}/**
     * Gets the number of connected gamepads
     */count(){return this._pads.filter(t=>t.connected).length}_clonePads(t){let e=[];for(let i=0,s=t.length;i<s;i++)e.push(this._clonePad(t[i]));return e}/**
     * Fastest way to clone a known object is to do it yourself
     */_clonePad(t){let e,i;let s=new Gamepad;if(!t)return s;for(e=0,i=t.buttons.length;e<i;e++)t.buttons[e]&&s.updateButton(e,t.buttons[e].value);for(e=0,i=t.axes.length;e<i;e++)s.updateAxes(e,t.axes[e]);return s}}/**
 * The minimum value an axis has to move before considering it a change
 */t6.MinAxisMoveThreshold=.05;/**
 * Gamepad holds state information for a connected controller. See [[Gamepads]]
 * for more information on handling controller input.
 */class Gamepad{constructor(){this.events=new tS,this.connected=!1,this._axes=[,,,,],this._buttons=Array(16),this._buttonsUp=Array(16),this._buttonsDown=Array(16);for(let t=0;t<this._buttons.length;t++)this._buttons[t]=0;for(let t=0;t<this._axes.length;t++)this._axes[t]=0}update(){// Reset buttonsDown and buttonsUp after update is complete
this._buttonsDown=Array(16),this._buttonsUp=Array(16)}/**
     * Whether or not the given button is pressed
     *
     * @deprecated will be removed in v0.28.0. Use isButtonHeld instead
     * @param button     The button to query
     * @param threshold  The threshold over which the button is considered to be pressed
     */isButtonPressed(t,e=1){return this._buttons[t]>=e}/**
     * Tests if a certain button is held down. This is persisted between frames.
     *
     * @param button     The button to query
     * @param threshold  The threshold over which the button is considered to be pressed
     */isButtonHeld(t,e=1){return this._buttons[t]>=e}/**
     * Tests if a certain button was just pressed this frame. This is cleared at the end of the update frame.
     *
     * @param button Test whether a button was just pressed
     * @param threshold  The threshold over which the button is considered to be pressed
     */wasButtonPressed(t,e=1){return this._buttonsDown[t]>=e}/**
     * Tests if a certain button was just released this frame. This is cleared at the end of the update frame.
     *
     * @param button  Test whether a button was just released
     */wasButtonReleased(t){return!!this._buttonsUp[t]}/**
     * Gets the given button value between 0 and 1
     */getButton(t){return this._buttons[t]}/**
     * Gets the given axis value between -1 and 1. Values below
     * [[MinAxisMoveThreshold]] are considered 0.
     */getAxes(t){let e=this._axes[t];return Math.abs(e)<t6.MinAxisMoveThreshold?0:e}updateButton(t,e){0===e&&this._buttons[t]?this._buttonsUp[t]=1:this._buttonsDown[t]=e,this._buttons[t]=e}updateAxes(t,e){this._axes[t]=e}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}/**
     * Face 1 button (e.g. A)
     */(e=z||(z={}))[e.Face1=0]="Face1",/**
     * Face 2 button (e.g. B)
     */e[e.Face2=1]="Face2",/**
     * Face 3 button (e.g. X)
     */e[e.Face3=2]="Face3",/**
     * Face 4 button (e.g. Y)
     */e[e.Face4=3]="Face4",/**
     * Left bumper button
     */e[e.LeftBumper=4]="LeftBumper",/**
     * Right bumper button
     */e[e.RightBumper=5]="RightBumper",/**
     * Left trigger button
     */e[e.LeftTrigger=6]="LeftTrigger",/**
     * Right trigger button
     */e[e.RightTrigger=7]="RightTrigger",/**
     * Select button
     */e[e.Select=8]="Select",/**
     * Start button
     */e[e.Start=9]="Start",/**
     * Left analog stick press (e.g. L3)
     */e[e.LeftStick=10]="LeftStick",/**
     * Right analog stick press (e.g. R3)
     */e[e.RightStick=11]="RightStick",/**
     * D-pad up
     */e[e.DpadUp=12]="DpadUp",/**
     * D-pad down
     */e[e.DpadDown=13]="DpadDown",/**
     * D-pad left
     */e[e.DpadLeft=14]="DpadLeft",/**
     * D-pad right
     */e[e.DpadRight=15]="DpadRight",/**
     * Left analogue stick X direction
     */(i=O||(O={}))[i.LeftStickX=0]="LeftStickX",/**
     * Left analogue stick Y direction
     */i[i.LeftStickY=1]="LeftStickY",/**
     * Right analogue stick X direction
     */i[i.RightStickX=2]="RightStickX",/**
     * Right analogue stick Y direction
     */i[i.RightStickY=3]="RightStickY",(s=H||(H={}))[s.Debug=0]="Debug",s[s.Info=1]="Info",s[s.Warn=2]="Warn",s[s.Error=3]="Error",s[s.Fatal=4]="Fatal";/**
 * Static singleton that represents the logging facility for Excalibur.
 * Excalibur comes built-in with a [[ConsoleAppender]] and [[ScreenAppender]].
 * Derive from [[Appender]] to create your own logging appenders.
 */class t7{constructor(){if(this._appenders=[],/**
         * Gets or sets the default logging level. Excalibur will only log
         * messages if equal to or above this level. Default: [[LogLevel.Info]]
         */this.defaultLevel=H.Info,t7._INSTANCE)throw Error("Logger is a singleton");return t7._INSTANCE=this,// Default console appender
t7._INSTANCE.addAppender(new t8),t7._INSTANCE}/**
     * Gets the current static instance of Logger
     */static getInstance(){return null==t7._INSTANCE&&(t7._INSTANCE=new t7),t7._INSTANCE}/**
     * Adds a new [[Appender]] to the list of appenders to write to
     */addAppender(t){this._appenders.push(t)}/**
     * Clears all appenders from the logger
     */clearAppenders(){this._appenders.length=0}/**
     * Logs a message at a given LogLevel
     * @param level  The LogLevel`to log the message at
     * @param args   An array of arguments to write to an appender
     */_log(t,e){null==t&&(t=this.defaultLevel);let i=this._appenders.length;for(let s=0;s<i;s++)t>=this.defaultLevel&&this._appenders[s].log(t,e)}/**
     * Writes a log message at the [[LogLevel.Debug]] level
     * @param args  Accepts any number of arguments
     */debug(...t){this._log(H.Debug,t)}/**
     * Writes a log message at the [[LogLevel.Info]] level
     * @param args  Accepts any number of arguments
     */info(...t){this._log(H.Info,t)}/**
     * Writes a log message at the [[LogLevel.Warn]] level
     * @param args  Accepts any number of arguments
     */warn(...t){this._log(H.Warn,t)}/**
     * Writes a log message at the [[LogLevel.Error]] level
     * @param args  Accepts any number of arguments
     */error(...t){this._log(H.Error,t)}/**
     * Writes a log message at the [[LogLevel.Fatal]] level
     * @param args  Accepts any number of arguments
     */fatal(...t){this._log(H.Fatal,t)}}t7._INSTANCE=null;/**
 * Console appender for browsers (i.e. `console.log`)
 */class t8{/**
     * Logs a message at the given [[LogLevel]]
     * @param level  Level to log at
     * @param args   Arguments to log
     */log(t,e){// Check for console support
if(!console&&!console.log&&console.warn&&console.error)return;// Create a new console args array
let i=[];i.unshift.apply(i,e),i.unshift("["+H[t]+"] : "),t<H.Warn?console.log.apply?console.log.apply(console,i):console.log(i.join(" ")):t<H.Error?console.warn.apply?console.warn.apply(console,i):console.warn(i.join(" ")):console.error.apply?console.error.apply(console,i):console.error(i.join(" "))}}/**
 * On-screen (canvas) appender
 */class et{/**
     * @param width   Width of the screen appender in pixels
     * @param height  Height of the screen appender in pixels
     */constructor(t,e){// @todo Clean this up
this._messages=[],this._canvas=document.createElement("canvas"),this._canvas.width=t||window.innerWidth,this._canvas.height=e||window.innerHeight,this._canvas.style.position="absolute",// eslint-disable-next-line
this._ctx=this._canvas.getContext("2d"),document.body.appendChild(this._canvas)}/**
     * Logs a message at the given [[LogLevel]]
     * @param level  Level to log at
     * @param args   Arguments to log
     */log(t,e){let i=e.join(",");this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._messages.unshift("["+H[t]+"] : "+i);let s=10,r=1;for(let t=0;t<this._messages.length;t++)this._ctx.fillStyle="rgba(255,255,255,"+r.toFixed(2)+")",this._ctx.fillText(this._messages[t],200,s),s+=10,r=r>0?r-.05:0}}/**
 * Checks if excalibur is in a x-origin iframe
 */function ee(){try{// Try and listen to events on top window frame if within an iframe.
//
// See https://github.com/excaliburjs/Excalibur/issues/1294
//
// Attempt to add an event listener, which triggers a DOMException on
// cross-origin iframes
let t=()=>{};window.top.addEventListener("blur",t),window.top.removeEventListener("blur",t)}catch(t){return!0}return!1}// NUMPAD
(o=N||(N={})).Num0="Numpad0",o.Num1="Numpad1",o.Num2="Numpad2",o.Num3="Numpad3",o.Num4="Numpad4",o.Num5="Numpad5",o.Num6="Numpad6",o.Num7="Numpad7",o.Num8="Numpad8",o.Num9="Numpad9",o.NumAdd="NumpadAdd",o.NumSubtract="NumpadSubtract",o.NumMultiply="NumpadMultiply",o.NumDivide="NumpadDivide",// NumComma = 'NumpadComma', // not x-browser
o.NumDecimal="NumpadDecimal",o.Numpad0="Numpad0",o.Numpad1="Numpad1",o.Numpad2="Numpad2",o.Numpad3="Numpad3",o.Numpad4="Numpad4",o.Numpad5="Numpad5",o.Numpad6="Numpad6",o.Numpad7="Numpad7",o.Numpad8="Numpad8",o.Numpad9="Numpad9",o.NumpadAdd="NumpadAdd",o.NumpadSubtract="NumpadSubtract",o.NumpadMultiply="NumpadMultiply",o.NumpadDivide="NumpadDivide",// NumpadComma = 'NumpadComma', // not x-browser
o.NumpadDecimal="NumpadDecimal",// MODIFIERS
o.NumLock="NumLock",o.ShiftLeft="ShiftLeft",o.ShiftRight="ShiftRight",o.AltLeft="AltLeft",o.AltRight="AltRight",o.ControlLeft="ControlLeft",o.ControlRight="ControlRight",o.MetaLeft="MetaLeft",o.MetaRight="MetaRight",// NUMBERS
o.Key0="Digit0",o.Key1="Digit1",o.Key2="Digit2",o.Key3="Digit3",o.Key4="Digit4",o.Key5="Digit5",o.Key6="Digit6",o.Key7="Digit7",o.Key8="Digit8",o.Key9="Digit9",o.Digit0="Digit0",o.Digit1="Digit1",o.Digit2="Digit2",o.Digit3="Digit3",o.Digit4="Digit4",o.Digit5="Digit5",o.Digit6="Digit6",o.Digit7="Digit7",o.Digit8="Digit8",o.Digit9="Digit9",// FUNCTION KEYS
o.F1="F1",o.F2="F2",o.F3="F3",o.F4="F4",o.F5="F5",o.F6="F6",o.F7="F7",o.F8="F8",o.F9="F9",o.F10="F10",o.F11="F11",o.F12="F12",// LETTERS
o.A="KeyA",o.B="KeyB",o.C="KeyC",o.D="KeyD",o.E="KeyE",o.F="KeyF",o.G="KeyG",o.H="KeyH",o.I="KeyI",o.J="KeyJ",o.K="KeyK",o.L="KeyL",o.M="KeyM",o.N="KeyN",o.O="KeyO",o.P="KeyP",o.Q="KeyQ",o.R="KeyR",o.S="KeyS",o.T="KeyT",o.U="KeyU",o.V="KeyV",o.W="KeyW",o.X="KeyX",o.Y="KeyY",o.Z="KeyZ",o.KeyA="KeyA",o.KeyB="KeyB",o.KeyC="KeyC",o.KeyD="KeyD",o.KeyE="KeyE",o.KeyF="KeyF",o.KeyG="KeyG",o.KeyH="KeyH",o.KeyI="KeyI",o.KeyJ="KeyJ",o.KeyK="KeyK",o.KeyL="KeyL",o.KeyM="KeyM",o.KeyN="KeyN",o.KeyO="KeyO",o.KeyP="KeyP",o.KeyQ="KeyQ",o.KeyR="KeyR",o.KeyS="KeyS",o.KeyT="KeyT",o.KeyU="KeyU",o.KeyV="KeyV",o.KeyW="KeyW",o.KeyX="KeyX",o.KeyY="KeyY",o.KeyZ="KeyZ",// SYMBOLS
o.Semicolon="Semicolon",o.Quote="Quote",o.Comma="Comma",o.Minus="Minus",o.Period="Period",o.Slash="Slash",o.Equal="Equal",o.BracketLeft="BracketLeft",o.Backslash="Backslash",o.BracketRight="BracketRight",o.Backquote="Backquote",// DIRECTIONS
o.Up="ArrowUp",o.Down="ArrowDown",o.Left="ArrowLeft",o.Right="ArrowRight",o.ArrowUp="ArrowUp",o.ArrowDown="ArrowDown",o.ArrowLeft="ArrowLeft",o.ArrowRight="ArrowRight",// OTHER
o.Space="Space",o.Backspace="Backspace",o.Delete="Delete",o.Esc="Escape",o.Escape="Escape",o.Enter="Enter",o.NumpadEnter="NumpadEnter",o.ContextMenu="ContextMenu";/**
 * Event thrown on a game object for a key event
 */class ei extends tT{/**
     * @param key  The key responsible for throwing the event
     * @param value The key's typed value the browser detected
     * @param originalEvent The original keyboard event that Excalibur handled
     */constructor(t,e,i){super(),this.key=t,this.value=e,this.originalEvent=i}}/**
 * Provides keyboard support for Excalibur.
 */class es{constructor(){this.events=new tS,/**
         * Keys that are currently held down
         */this._keys=[],/**
         * Keys up in the current frame
         */this._keysUp=[],/**
         * Keys down in the current frame
         */this._keysDown=[],this._releaseAllKeys=t=>{for(let e of this._keys){let i=new ei(e,t.key,t);this.events.emit("up",i),this.events.emit("release",i)}this._keysUp=Array.from(new Set(this._keys.concat(this._keysUp))),this._keys.length=0},this._handleKeyDown=t=>{// handle macos meta key issue
// https://github.com/excaliburjs/Excalibur/issues/2608
!t.metaKey&&(this._keys.includes(N.MetaLeft)||this._keys.includes(N.MetaRight))&&this._releaseAllKeys(t);let e=t.code;if(-1===this._keys.indexOf(e)){this._keys.push(e),this._keysDown.push(e);let i=new ei(e,t.key,t);this.events.emit("down",i),this.events.emit("press",i)}},this._handleKeyUp=t=>{let e=t.code,i=this._keys.indexOf(e);this._keys.splice(i,1),this._keysUp.push(e);let s=new ei(e,t.key,t);// alias the old api, we may want to deprecate this in the future
this.events.emit("up",s),this.events.emit("release",s),"Meta"===t.key&&this._releaseAllKeys(t)}}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * Initialize Keyboard event listeners
     */init(t){let{global:e}=t,{grabWindowFocus:i}=t;e||(ee()?(e=window,i&&window.focus(),t7.getInstance().warn("Excalibur might be in a cross-origin iframe, in order to receive keyboard events it must be in focus")):e=window.top),e.addEventListener("blur",()=>{this._keys.length=0;// empties array efficiently
}),// key up is on window because canvas cannot have focus
e.addEventListener("keyup",this._handleKeyUp),// key down is on window because canvas cannot have focus
e.addEventListener("keydown",this._handleKeyDown)}update(){// Reset keysDown and keysUp after update is complete
this._keysDown.length=0,this._keysUp.length=0;// Emit synthetic "hold" event
for(let t=0;t<this._keys.length;t++)this.events.emit("hold",new ei(this._keys[t]))}/**
     * Gets list of keys being pressed down
     */getKeys(){return this._keys}/**
     * Tests if a certain key was just pressed this frame. This is cleared at the end of the update frame.
     * @param key Test whether a key was just pressed
     */wasPressed(t){return this._keysDown.indexOf(t)>-1}/**
     * Tests if a certain key is held down. This is persisted between frames.
     * @param key  Test whether a key is held down
     */isHeld(t){return this._keys.indexOf(t)>-1}/**
     * Tests if a certain key was just released this frame. This is cleared at the end of the update frame.
     * @param key  Test whether a key was just released
     */wasReleased(t){return this._keysUp.indexOf(t)>-1}/**
     * Trigger a manual key event
     * @param type
     * @param key
     * @param character
     */triggerEvent(t,e,i){"down"===t&&this._handleKeyDown(new KeyboardEvent("keydown",{code:e,key:null!=i?i:null})),"up"===t&&this._handleKeyUp(new KeyboardEvent("keyup",{code:e,key:null!=i?i:null}))}}/**
     * Handle events on the `canvas` element only. Events originating outside the
     * `canvas` will not be handled.
     */(a=$||($={})).Canvas="Canvas",/**
     * Handles events on the entire document. All events will be handled by Excalibur.
     */a.Document="Document";/**
 * Pseudo-random number generator following the Mersenne_Twister algorithm. Given a seed this generator will produce the same sequence
 * of numbers each time it is called.
 * See https://en.wikipedia.org/wiki/Mersenne_Twister for more details.
 * Uses the MT19937-32 (2002) implementation documented here http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/emt19937ar.html
 *
 * Api inspired by http://chancejs.com/# https://github.com/chancejs/chancejs
 */class er{/**
     * If no seed is specified, the Date.now() is used
     */constructor(t){this.seed=t,// Separation point of one one word, the number of bits in the lower bitmask 0 <= r <= w-1
this._lowerMask=2147483647,this._upperMask=2147483648,// Word size, 64 bits
this._w=32,// Degree of recurrence
this._n=624,// Middle word, an offset used in the recurrence defining the series x, 1<=m<n
this._m=397,// coefficients of teh rational normal form twist matrix
this._a=2567483615,// tempering bit shifts and masks
this._u=11,this._s=7,this._b=2636928640,this._t=15,this._c=4022730752,this._l=18,this._f=1812433253,this._mt=Array(this._n),// need to mask to support higher bit machines
this._mt[0]=(t||Date.now())>>>0;for(let t=1;t<this._n;t++){let e=this._mt[t-1]^this._mt[t-1]>>>this._w-2;// numbers are bigger than the JS max safe int, add in 16-bit chunks to prevent IEEE rounding errors on high bits
this._mt[t]=(this._f*((4294901760&e)>>>16)<<16)+this._f*(65535&e)+t>>>0}this._index=this._n}/**
     * Apply the twist
     */_twist(){let t=[0,this._a],e=0,i=0;for(;i<this._n-this._m;i++)e=this._mt[i]&this._upperMask|this._mt[i+1]&this._lowerMask,this._mt[i]=this._mt[i+this._m]^e>>>1^4294967295&t[1&e];for(;i<this._n-1;i++)e=this._mt[i]&this._upperMask|this._mt[i+1]&this._lowerMask,this._mt[i]=this._mt[i+(this._m-this._n)]^e>>>1^4294967295&t[1&e];e=this._mt[this._n-1]&this._upperMask|this._mt[0]&this._lowerMask,this._mt[this._n-1]=this._mt[this._m-1]^e>>>1^4294967295&t[1&e],this._index=0}/**
     * Return next 32 bit integer number in sequence
     */nextInt(){this._index>=this._n&&this._twist();let t=this._mt[this._index++];return t^=t>>>this._u,t^=t<<this._s&this._b,t^=t<<this._t&this._c,(t^=t>>>this._l)>>>0}/**
     * Return a random floating point number between [0, 1)
     */next(){return this.nextInt()*(1/4294967296);// divided by 2^32
}/**
     * Return a random floating point in range [min, max) min is included, max is not included
     */floating(t,e){return(e-t)*this.next()+t}/**
     * Return a random integer in range [min, max] min is included, max is included.
     * Implemented with rejection sampling, see https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.i13tdiu5a
     */integer(t,e){return Math.floor((e-t+1)*this.next()+t)}/**
     * Returns true or false randomly with 50/50 odds by default.
     * By default the likelihood of returning a true is .5 (50%).
     * @param likelihood takes values between [0, 1]
     */bool(t=.5){return this.next()<=t}/**
     * Returns one element from an array at random
     */pickOne(t){return t[this.integer(0,t.length-1)]}/**
     * Returns a new array random picking elements from the original
     * @param array Original array to pick from
     * @param numPicks can be any positive number
     * @param allowDuplicates indicates whether the returned set is allowed duplicates (it does not mean there will always be duplicates
     * just that it is possible)
     */pickSet(t,e,i=!1){return i?this._pickSetWithDuplicates(t,e):this._pickSetWithoutDuplicates(t,e)}/**
     * Returns a new array randomly picking elements in the original (not reused)
     * @param array Array to pick elements out of
     * @param numPicks must be less than or equal to the number of elements in the array.
     */_pickSetWithoutDuplicates(t,e){if(e>t.length||e<0)throw Error("Invalid number of elements to pick, must pick a value 0 < n <= length");if(e===t.length)return t;let i=Array(e),s=0,r=t.slice(0);for(;s<e;){let t=this.integer(0,r.length-1);i[s++]=r[t],r.splice(t,1)}return i}/**
     * Returns a new array random picking elements from the original allowing duplicates
     * @param array Array to pick elements out of
     * @param numPicks can be any positive number
     */_pickSetWithDuplicates(t,e){// Typescript numbers are all floating point, so do we add check for int? (or floor the input?)
if(e<0)throw Error("Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT");let i=Array(e);for(let s=0;s<e;s++)i[s]=this.pickOne(t);return i}/**
     * Returns a new array that has its elements shuffled. Using the Fisher/Yates method
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */shuffle(t){let e=t.slice(0),i=null;for(let t=0;t<e.length-2;t++){let s=this.integer(t,e.length-1);i=e[t],e[t]=e[s],e[s]=i}return e}/**
     * Generate a list of random integer numbers
     * @param length the length of the final array
     * @param min the minimum integer number to generate inclusive
     * @param max the maximum integer number to generate inclusive
     */range(t,e,i){let s=Array(t);for(let r=0;r<t;r++)s[r]=this.integer(e,i);return s}/**
     * Returns the result of a d4 dice roll
     */d4(){return this.integer(1,4)}/**
     * Returns the result of a d6 dice roll
     */d6(){return this.integer(1,6)}/**
     * Returns the result of a d8 dice roll
     */d8(){return this.integer(1,8)}/**
     * Returns the result of a d10 dice roll
     */d10(){return this.integer(1,10)}/**
     * Returns the result of a d12 dice roll
     */d12(){return this.integer(1,12)}/**
     * Returns the result of a d20 dice roll
     */d20(){return this.integer(1,20)}}/**
 * Two PI constant
 */let en=2*Math.PI;/**
 * Returns the fractional part of a number
 * @param x
 */function eo(t){return t>=0?t-Math.floor(t):t-Math.ceil(t)}/**
 * Returns the sign of a number, if 0 returns 0
 */function ea(t){return 0===t?0:t<0?-1:1}/**
 * Clamps a value between a min and max inclusive
 */function eh(t,e,i){return Math.min(Math.max(e,t),i)}/**
 * Convert an angle to be the equivalent in the range [0, 2PI]
 */function el(t){let e=t;if(t>en)for(;e>en;)e-=en;if(t<0)for(;e<0;)e+=en;return e}/**
 * Convert radians to degrees
 */function ed(t){return 180/Math.PI*t}/**
 * Convert degrees to radians
 */function ec(t){return t/180*Math.PI}/**
 * Generate a range of numbers
 * For example: range(0, 5) -> [0, 1, 2, 3, 4, 5]
 * @param from inclusive
 * @param to inclusive
 */let eu=(t,e)=>Array.from(Array(e-t+1),(e,i)=>i+t);/**
 * Find a random floating point number in range
 */function ep(t,e,i=new er){return i?i.floating(t,e):t+Math.random()*(e-t)}/**
 * Find a random integer in a range
 */function e_(t,e,i=new er){return i?i.integer(t,e):Math.round(ep(t,e))}/**
 * A 2D vector on a plane.
 */class eg{/**
     * A (0, 0) vector
     */static get Zero(){return new eg(0,0)}/**
     * A (1, 1) vector
     */static get One(){return new eg(1,1)}/**
     * A (0.5, 0.5) vector
     */static get Half(){return new eg(.5,.5)}/**
     * A unit vector pointing up (0, -1)
     */static get Up(){return new eg(0,-1)}/**
     * A unit vector pointing down (0, 1)
     */static get Down(){return new eg(0,1)}/**
     * A unit vector pointing left (-1, 0)
     */static get Left(){return new eg(-1,0)}/**
     * A unit vector pointing right (1, 0)
     */static get Right(){return new eg(1,0)}/**
     * Returns a vector of unit length in the direction of the specified angle in Radians.
     * @param angle The angle to generate the vector
     */static fromAngle(t){return new eg(Math.cos(t),Math.sin(t))}/**
     * Checks if vector is not null, undefined, or if any of its components are NaN or Infinity.
     */static isValid(t){return!(null==t||isNaN(t.x)||isNaN(t.y))&&t.x!==1/0&&t.y!==1/0&&t.x!==-1/0&&t.y!==-1/0}/**
     * Calculates distance between two Vectors
     * @param vec1
     * @param vec2
     */static distance(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}static min(t,e){return new eg(Math.min(t.x,e.x),Math.min(t.y,e.y))}static max(t,e){return new eg(Math.max(t.x,e.x),Math.max(t.y,e.y))}/**
     * @param x  X component of the Vector
     * @param y  Y component of the Vector
     */constructor(t,e){this._x=0,this._y=0,this._x=t,this._y=e}/**
     * Get the x component of the vector
     */get x(){return this._x}/**
     * Set the x component, THIS MUTATES the current vector. It is usually better to create a new vector.
     * @warning **Be very careful setting components on shared vectors, mutating shared vectors can cause hard to find bugs**
     */set x(t){this._x=t}/**
     * Get the y component of the vector
     */get y(){return this._y}/**
     * Set the y component, THIS MUTATES the current vector. It is usually better to create a new vector.
     * @warning **Be very careful setting components on shared vectors, mutating shared vectors can cause hard to find bugs**
     */set y(t){this._y=t}/**
     * Sets the x and y components at once, THIS MUTATES the current vector. It is usually better to create a new vector.
     *
     * @warning **Be very careful using this, mutating vectors can cause hard to find bugs**
     */setTo(t,e){this.x=t,this.y=e}/**
     * Compares this point against another and tests for equality
     * @param vector The other point to compare to
     * @param tolerance Amount of euclidean distance off we are willing to tolerate
     */equals(t,e=.001){return Math.abs(this.x-t.x)<=e&&Math.abs(this.y-t.y)<=e}/**
     * The distance to another vector. If no other Vector is specified, this will return the [[magnitude]].
     * @param v  The other vector. Leave blank to use origin vector.
     */distance(t){if(!t)return Math.sqrt(this.x*this.x+this.y*this.y);let e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}squareDistance(t){t||(t=eg.Zero);let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}/**
     * Clamps the current vector's magnitude mutating it
     * @param magnitude
     */clampMagnitude(t){let e=this.size,i=eh(e,0,t);return this.size=i,this}/**
     * The size (magnitude) of the Vector
     */get size(){return this.distance()}/**
     * Setting the size mutates the current vector
     *
     * @warning Can be used to set the size of the vector, **be very careful using this, mutating vectors can cause hard to find bugs**
     */set size(t){let e=this.normalize().scale(t);this.setTo(e.x,e.y)}/**
     * Normalizes a vector to have a magnitude of 1.
     */normalize(){let t=this.distance();return t>0?new eg(this.x/t,this.y/t):new eg(0,1)}/**
     * Returns the average (midpoint) between the current point and the specified
     */average(t){return this.add(t).scale(.5)}scale(t,e){let i=e||new eg(0,0);return t instanceof eg?(i.x=this.x*t.x,i.y=this.y*t.y):(i.x=this.x*t,i.y=this.y*t),i}/**
     * Adds one vector to another
     * @param v The vector to add
     * @param dest Optionally copy the result into a provided vector
     */add(t,e){return e?(e.x=this.x+t.x,e.y=this.y+t.y,e):new eg(this.x+t.x,this.y+t.y)}/**
     * Subtracts a vector from another, if you subtract vector `B.sub(A)` the resulting vector points from A -> B
     * @param v The vector to subtract
     */sub(t){return new eg(this.x-t.x,this.y-t.y)}/**
     * Adds one vector to this one modifying the original
     * @param v The vector to add
     * @warning Be very careful using this, mutating vectors can cause hard to find bugs
     */addEqual(t){return this.setTo(this.x+t.x,this.y+t.y),this}/**
     * Subtracts a vector from this one modifying the original
     * @param v The vector to subtract
     * @warning Be very careful using this, mutating vectors can cause hard to find bugs
     */subEqual(t){return this.setTo(this.x-t.x,this.y-t.y),this}/**
     * Scales this vector by a factor of size and modifies the original
     * @warning Be very careful using this, mutating vectors can cause hard to find bugs
     */scaleEqual(t){return this.setTo(this.x*t,this.y*t),this}/**
     * Performs a dot product with another vector
     * @param v  The vector to dot
     */dot(t){return this.x*t.x+this.y*t.y}cross(t){return t instanceof eg?this.x*t.y-this.y*t.x:"number"==typeof t?new eg(t*this.y,-t*this.x):void 0}static cross(t,e){return new eg(-t*e.y,t*e.x)}/**
     * Returns the perpendicular vector to this one
     */perpendicular(){return new eg(this.y,-this.x)}/**
     * Returns the normal vector to this one, same as the perpendicular of length 1
     */normal(){return this.perpendicular().normalize()}/**
     * Negate the current vector
     */negate(){return this.scale(-1)}/**
     * Returns the angle of this vector.
     */toAngle(){return Math.atan2(this.y,this.x)}/**
     * Rotates the current vector around a point by a certain number of
     * degrees in radians
     */rotate(t,e){e||(e=new eg(0,0));let i=Math.sin(t),s=Math.cos(t),r=s*(this.x-e.x)-i*(this.y-e.y)+e.x,n=i*(this.x-e.x)+s*(this.y-e.y)+e.y;return new eg(r,n)}/**
     * Creates new vector that has the same values as the previous.
     */clone(t){let e=null!=t?t:new eg(0,0);return e.x=this.x,e.y=this.y,e}/**
     * Returns a string representation of the vector.
     */toString(t){return t?`(${this.x.toFixed(t)}, ${this.y.toFixed(t)})`:`(${this.x}, ${this.y})`}}/**
 * Shorthand for creating new Vectors - returns a new Vector instance with the
 * provided X and Y components.
 *
 * @param x  X component of the Vector
 * @param y  Y component of the Vector
 */function em(t,e){return new eg(t,e)}/**
 * Provides standard colors (e.g. [[Color.Black]])
 * but you can also create custom colors using RGB, HSL, or Hex. Also provides
 * useful color operations like [[Color.lighten]], [[Color.darken]], and more.
 */class ef{/**
     * Creates a new instance of Color from an r, g, b, a
     *
     * @param r  The red component of color (0-255)
     * @param g  The green component of color (0-255)
     * @param b  The blue component of color (0-255)
     * @param a  The alpha component of color (0-1.0)
     */constructor(t,e,i,s){this.r=t,this.g=e,this.b=i,this.a=null!=s?s:1}/**
     * Creates a new instance of Color from an r, g, b, a
     *
     * @param r  The red component of color (0-255)
     * @param g  The green component of color (0-255)
     * @param b  The blue component of color (0-255)
     * @param a  The alpha component of color (0-1.0)
     */static fromRGB(t,e,i,s){return new ef(t,e,i,s)}/**
     * Creates a new instance of Color from a rgb string
     *
     * @param string  CSS color string of the form rgba(255, 255, 255, 1) or rgb(255, 255, 255)
     */static fromRGBString(t){let e=null;if(e=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/i)){let t=parseInt(e[1],10),i=parseInt(e[2],10),s=parseInt(e[3],10),r=1;return e[4]&&(r=parseFloat(e[4])),new ef(t,i,s,r)}throw Error("Invalid rgb/a string: "+t)}/**
     * Creates a new instance of Color from a hex string
     *
     * @param hex  CSS color string of the form #ffffff, the alpha component is optional
     */static fromHex(t){let e=null;if(e=t.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i)){let t=parseInt(e[1],16),i=parseInt(e[2],16),s=parseInt(e[3],16),r=1;return e[4]&&(r=parseInt(e[4],16)/255),new ef(t,i,s,r)}throw Error("Invalid hex string: "+t)}/**
     * Creates a new instance of Color from hsla values
     *
     * @param h  Hue is represented [0-1]
     * @param s  Saturation is represented [0-1]
     * @param l  Luminance is represented [0-1]
     * @param a  Alpha is represented [0-1]
     */static fromHSL(t,e,i,s=1){let r=new ev(t,e,i,s);return r.toRGBA()}/**
     * Lightens the current color by a specified amount
     *
     * @param factor  The amount to lighten by [0-1]
     */lighten(t=.1){let e=ev.fromRGBA(this.r,this.g,this.b,this.a);return e.l+=(1-e.l)*t,e.toRGBA()}/**
     * Darkens the current color by a specified amount
     *
     * @param factor  The amount to darken by [0-1]
     */darken(t=.1){let e=ev.fromRGBA(this.r,this.g,this.b,this.a);return e.l-=e.l*t,e.toRGBA()}/**
     * Saturates the current color by a specified amount
     *
     * @param factor  The amount to saturate by [0-1]
     */saturate(t=.1){let e=ev.fromRGBA(this.r,this.g,this.b,this.a);return e.s+=e.s*t,e.toRGBA()}/**
     * Desaturates the current color by a specified amount
     *
     * @param factor  The amount to desaturate by [0-1]
     */desaturate(t=.1){let e=ev.fromRGBA(this.r,this.g,this.b,this.a);return e.s-=e.s*t,e.toRGBA()}/**
     * Multiplies a color by another, results in a darker color
     *
     * @param color  The other color
     */multiply(t){let e=t.r/255*this.r/255*255,i=t.g/255*this.g/255*255,s=t.b/255*this.b/255*255,r=t.a*this.a;return new ef(e,i,s,r)}/**
     * Screens a color by another, results in a lighter color
     *
     * @param color  The other color
     */screen(t){let e=t.invert(),i=t.invert();return e.multiply(i).invert()}/**
     * Inverts the current color
     */invert(){return new ef(255-this.r,255-this.g,255-this.b,1-this.a)}/**
     * Averages the current color with another
     *
     * @param color  The other color
     */average(t){let e=(t.r+this.r)/2,i=(t.g+this.g)/2,s=(t.b+this.b)/2,r=(t.a+this.a)/2;return new ef(e,i,s,r)}equal(t){return this.toString()===t.toString()}/**
     * Returns a CSS string representation of a color.
     *
     * @param format Color representation, accepts: rgb, hsl, or hex
     */toString(t="rgb"){switch(t){case"rgb":return this.toRGBA();case"hsl":return this.toHSLA();case"hex":return this.toHex();default:throw Error("Invalid Color format")}}/**
     * Returns Hex Value of a color component
     * @param c color component
     * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     */_componentToHex(t){let e=t.toString(16);return 1===e.length?"0"+e:e}/**
     * Return Hex representation of a color.
     */toHex(){return"#"+this._componentToHex(this.r)+this._componentToHex(this.g)+this._componentToHex(this.b)}/**
     * Return RGBA representation of a color.
     */toRGBA(){let t=String(this.r.toFixed(0))+", "+String(this.g.toFixed(0))+", "+String(this.b.toFixed(0));return void 0!==this.a||null!==this.a?"rgba("+t+", "+String(this.a)+")":"rgb("+t+")"}/**
     * Return HSLA representation of a color.
     */toHSLA(){return ev.fromRGBA(this.r,this.g,this.b,this.a).toString()}/**
     * Returns a CSS string representation of a color.
     */fillStyle(){return this.toString()}/**
     * Returns a clone of the current color.
     */clone(){return new ef(this.r,this.g,this.b,this.a)}/**
     * Black (#000000)
     */static get Black(){return ef.fromHex("#000000")}/**
     * White (#FFFFFF)
     */static get White(){return ef.fromHex("#FFFFFF")}/**
     * Gray (#808080)
     */static get Gray(){return ef.fromHex("#808080")}/**
     * Light gray (#D3D3D3)
     */static get LightGray(){return ef.fromHex("#D3D3D3")}/**
     * Dark gray (#A9A9A9)
     */static get DarkGray(){return ef.fromHex("#A9A9A9")}/**
     * Yellow (#FFFF00)
     */static get Yellow(){return ef.fromHex("#FFFF00")}/**
     * Orange (#FFA500)
     */static get Orange(){return ef.fromHex("#FFA500")}/**
     * Red (#FF0000)
     */static get Red(){return ef.fromHex("#FF0000")}/**
     * Vermilion (#FF5B31)
     */static get Vermilion(){return ef.fromHex("#FF5B31")}/**
     * Rose (#FF007F)
     */static get Rose(){return ef.fromHex("#FF007F")}/**
     * Magenta (#FF00FF)
     */static get Magenta(){return ef.fromHex("#FF00FF")}/**
     * Violet (#7F00FF)
     */static get Violet(){return ef.fromHex("#7F00FF")}/**
     * Blue (#0000FF)
     */static get Blue(){return ef.fromHex("#0000FF")}/**
     * Azure (#007FFF)
     */static get Azure(){return ef.fromHex("#007FFF")}/**
     * Cyan (#00FFFF)
     */static get Cyan(){return ef.fromHex("#00FFFF")}/**
     * Viridian (#59978F)
     */static get Viridian(){return ef.fromHex("#59978F")}/**
     * Green (#00FF00)
     */static get Green(){return ef.fromHex("#00FF00")}/**
     * Chartreuse (#7FFF00)
     */static get Chartreuse(){return ef.fromHex("#7FFF00")}/**
     * Transparent (#FFFFFF00)
     */static get Transparent(){return ef.fromHex("#FFFFFF00")}/**
     * ExcaliburBlue (#176BAA)
     */static get ExcaliburBlue(){return ef.fromHex("#176BAA")}}/**
 * Internal HSL Color representation
 *
 * http://en.wikipedia.org/wiki/HSL_and_HSV
 * http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */class ev{constructor(t,e,i,s){this.h=t,this.s=e,this.l=i,this.a=s}static hue2rgb(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}static fromRGBA(t,e,i,s){let r,n;t/=255,e/=255,i/=255;let o=Math.max(t,e,i),a=Math.min(t,e,i),h=(o+a)/2;if(o===a)r=n=0;// achromatic
else{let s=o-a;switch(n=h>.5?s/(2-o-a):s/(o+a),o){case t:r=(e-i)/s+(e<i?6:0);break;case e:r=(i-t)/s+2;break;case i:r=(t-e)/s+4}r/=6}return new ev(r,n,h,s)}toRGBA(){let t,e,i;if(0===this.s)t=e=i=this.l;// achromatic
else{let s=this.l<.5?this.l*(1+this.s):this.l+this.s-this.l*this.s,r=2*this.l-s;t=ev.hue2rgb(r,s,this.h+1/3),e=ev.hue2rgb(r,s,this.h),i=ev.hue2rgb(r,s,this.h-1/3)}return new ef(255*t,255*e,255*i,this.a)}toString(){let t=this.h.toFixed(0),e=this.s.toFixed(0),i=this.l.toFixed(0),s=this.a.toFixed(0);return`hsla(${t}, ${e}, ${i}, ${s})`}}(h=W||(W={})).None="None",h.Top="Top",h.Bottom="Bottom",h.Left="Left",h.Right="Right",(l=W||(W={})).getOpposite=/**
     * Returns the opposite side from the current
     */function(t){return t===l.Top?l.Bottom:t===l.Bottom?l.Top:t===l.Left?l.Right:t===l.Right?l.Left:l.None},l.fromDirection=/**
     * Given a vector, return the Side most in that direction (via dot product)
     */function(t){let e=[eg.Left,eg.Right,eg.Up,eg.Down],i=[l.Left,l.Right,l.Top,l.Bottom],s=-Number.MAX_VALUE,r=-1;for(let i=0;i<e.length;i++)e[i].dot(t)>s&&(s=e[i].dot(t),r=i);return i[r]};/**
 * Axis Aligned collision primitive for Excalibur.
 */class ey{/**
     * Constructor allows passing of either an object with all coordinate components,
     * or the coordinate components passed separately.
     * @param leftOrOptions    Either x coordinate of the left edge or an options object
     * containing the four coordinate components.
     * @param top     y coordinate of the top edge
     * @param right   x coordinate of the right edge
     * @param bottom  y coordinate of the bottom edge
     */constructor(t=0,e=0,i=0,s=0){"object"==typeof t?(this.left=t.left,this.top=t.top,this.right=t.right,this.bottom=t.bottom):"number"==typeof t&&(this.left=t,this.top=e,this.right=i,this.bottom=s)}/**
     * Returns a new instance of [[BoundingBox]] that is a copy of the current instance
     */clone(){return new ey(this.left,this.top,this.right,this.bottom)}/**
     * Given bounding box A & B, returns the side relative to A when intersection is performed.
     * @param intersection Intersection vector between 2 bounding boxes
     */static getSideFromIntersection(t){return t?t?Math.abs(t.x)>Math.abs(t.y)?t.x<0?W.Right:W.Left:t.y<0?W.Bottom:W.Top:W.None:W.None}static fromPoints(t){let e=1/0,i=1/0,s=-1/0,r=-1/0;for(let n=0;n<t.length;n++)t[n].x<e&&(e=t[n].x),t[n].x>s&&(s=t[n].x),t[n].y<i&&(i=t[n].y),t[n].y>r&&(r=t[n].y);return new ey(e,i,s,r)}static fromDimension(t,e,i=eg.Half,s=eg.Zero){return new ey(-t*i.x+s.x,-e*i.y+s.y,t-t*i.x+s.x,e-e*i.y+s.y)}/**
     * Returns the calculated width of the bounding box
     */get width(){return this.right-this.left}/**
     * Returns the calculated height of the bounding box
     */get height(){return this.bottom-this.top}/**
     * Return whether the bounding box has zero dimensions in height,width or both
     */hasZeroDimensions(){return 0===this.width||0===this.height}/**
     * Returns the center of the bounding box
     */get center(){return new eg((this.left+this.right)/2,(this.top+this.bottom)/2)}translate(t){return new ey(this.left+t.x,this.top+t.y,this.right+t.x,this.bottom+t.y)}/**
     * Rotates a bounding box by and angle and around a point, if no point is specified (0, 0) is used by default. The resulting bounding
     * box is also axis-align. This is useful when a new axis-aligned bounding box is needed for rotated geometry.
     */rotate(t,e=eg.Zero){let i=this.getPoints().map(i=>i.rotate(t,e));return ey.fromPoints(i)}/**
     * Scale a bounding box by a scale factor, optionally provide a point
     * @param scale
     * @param point
     */scale(t,e=eg.Zero){let i=this.translate(e);return new ey(i.left*t.x,i.top*t.y,i.right*t.x,i.bottom*t.y)}/**
     * Transform the axis aligned bounding box by a [[Matrix]], producing a new axis aligned bounding box
     * @param matrix
     */transform(t){// inlined these calculations to not use vectors would speed it up slightly
// const matFirstColumn = vec(matrix.data[0], matrix.data[1]);
// const xa = matFirstColumn.scale(this.left);
let e=t.data[0]*this.left,i=t.data[1]*this.left,s=t.data[0]*this.right,r=t.data[1]*this.right,n=t.data[2]*this.top,o=t.data[3]*this.top,a=t.data[2]*this.bottom,h=t.data[3]*this.bottom,l=t.getPosition(),d=Math.min(e,s)+Math.min(n,a)+l.x,c=Math.min(i,r)+Math.min(o,h)+l.y,u=Math.max(e,s)+Math.max(n,a)+l.x,p=Math.max(i,r)+Math.max(o,h)+l.y;return new ey({left:d,top:c,right:u,bottom:p//: bottomRight.y
})}/**
     * Returns the perimeter of the bounding box
     */getPerimeter(){let t=this.width,e=this.height;return 2*(t+e)}getPoints(){let t=[];return t.push(new eg(this.left,this.top)),t.push(new eg(this.right,this.top)),t.push(new eg(this.right,this.bottom)),t.push(new eg(this.left,this.bottom)),t}/**
     * Determines whether a ray intersects with a bounding box
     */rayCast(t,e=1/0){// algorithm from https://tavianator.com/fast-branchless-raybounding-box-intersections/
let i=-1/0,s=1/0,r=0===t.dir.x?Number.MAX_VALUE:1/t.dir.x,n=0===t.dir.y?Number.MAX_VALUE:1/t.dir.y,o=(this.left-t.pos.x)*r,a=(this.right-t.pos.x)*r;i=Math.min(o,a),s=Math.max(o,a);let h=(this.top-t.pos.y)*n,l=(this.bottom-t.pos.y)*n;return i=Math.max(i,Math.min(h,l)),(s=Math.min(s,Math.max(h,l)))>=Math.max(0,i)&&i<e}rayCastTime(t,e=1/0){// algorithm from https://tavianator.com/fast-branchless-raybounding-box-intersections/
let i=-1/0,s=1/0,r=0===t.dir.x?Number.MAX_VALUE:1/t.dir.x,n=0===t.dir.y?Number.MAX_VALUE:1/t.dir.y,o=(this.left-t.pos.x)*r,a=(this.right-t.pos.x)*r;i=Math.min(o,a),s=Math.max(o,a);let h=(this.top-t.pos.y)*n,l=(this.bottom-t.pos.y)*n;return(i=Math.max(i,Math.min(h,l)),(s=Math.min(s,Math.max(h,l)))>=Math.max(0,i)&&i<e)?i:-1}contains(t){return t instanceof eg?this.left<=t.x&&this.top<=t.y&&this.bottom>=t.y&&this.right>=t.x:t instanceof ey&&this.left<=t.left&&this.top<=t.top&&t.bottom<=this.bottom&&t.right<=this.right}/**
     * Combines this bounding box and another together returning a new bounding box
     * @param other  The bounding box to combine
     */combine(t){let e=new ey(Math.min(this.left,t.left),Math.min(this.top,t.top),Math.max(this.right,t.right),Math.max(this.bottom,t.bottom));return e}get dimensions(){return new eg(this.width,this.height)}/**
     * Returns true if the bounding boxes overlap.
     * @param other
     * @param epsilon Optionally specify a small epsilon (default 0) as amount of overlap to ignore as overlap.
     * This epsilon is useful in stable collision simulations.
     */overlaps(t,e){let i=e||0;if(t.hasZeroDimensions())return this.contains(t);if(this.hasZeroDimensions())return t.contains(this);let s=this.combine(t);return s.width+i<t.width+this.width&&s.height+i<t.height+this.height}/**
     * Test wether this bounding box intersects with another returning
     * the intersection vector that can be used to resolve the collision. If there
     * is no intersection null is returned.
     *
     * @param other  Other [[BoundingBox]] to test intersection with
     * @returns A Vector in the direction of the current BoundingBox, this <- other
     */intersect(t){let e=this.combine(t);// If the total bounding box is less than or equal the sum of the 2 bounds then there is collision
if(e.width<t.width+this.width&&e.height<t.height+this.height&&!e.dimensions.equals(t.dimensions)&&!e.dimensions.equals(this.dimensions)){// collision
let e=0;// right edge is between the other's left and right edge
/**
             *     +-this-+
             *     |      |
             *     |    +-other-+
             *     +----|-+     |
             *          |       |
             *          +-------+
             *         <---
             *          ^ overlap
             */e=this.right>=t.left&&this.right<=t.right?t.left-this.right:t.right-this.left;let i=0;return Math.abs(e)<Math.abs(i=this.top<=t.bottom&&this.top>=t.top?t.bottom-this.top:t.top-this.bottom)?new eg(e,0):new eg(0,i);// Case of total containment of one bounding box by another
}if(!(e.dimensions.equals(t.dimensions)||e.dimensions.equals(this.dimensions)))return null;{let e=0;// this is wider than the other
e=this.width-t.width>=0?this.right-t.right<=t.left-this.left?t.left-this.right:t.right-this.left:t.right-this.right<=this.left-t.left?this.left-t.right:this.right-t.left;let i=0;return Math.abs(e)<Math.abs(i=this.height-t.height>=0?this.bottom-t.bottom<=t.top-this.top?t.top-this.bottom:t.bottom-this.top:t.bottom-this.bottom<=this.top-t.top?this.top-t.bottom:this.bottom-t.top)?new eg(e,0):new eg(0,i)}}/**
     * Test whether the bounding box has intersected with another bounding box, returns the side of the current bb that intersected.
     * @param bb The other actor to test
     */intersectWithSide(t){let e=this.intersect(t);return ey.getSideFromIntersection(e)}/**
     * Draw a debug bounding box
     * @param ex
     * @param color
     */draw(t,e=ef.Yellow){t.debug.drawRect(this.left,this.top,this.width,this.height,{color:e})}}/**
 * Future is a wrapper around a native browser Promise to allow resolving/rejecting at any time
 */class ex{constructor(){this._isCompleted=!1,this.promise=new Promise((t,e)=>{this._resolver=t,this._rejecter=e})}get isCompleted(){return this._isCompleted}resolve(t){this._isCompleted||(this._isCompleted=!0,this._resolver(t))}reject(t){this._isCompleted||(this._isCompleted=!0,this._rejecter(t))}}/**
 * Find the screen position of an HTML element
 */function ew(t){let e=0,i=0,s=t=>{e+=t.offsetLeft,t.offsetParent&&s(t.offsetParent)},r=t=>{i+=t.offsetTop,t.offsetParent&&r(t.offsetParent)};return s(t),r(t),new eg(e,i)}/**
 * Add an item to an array list if it doesn't already exist. Returns true if added, false if not and already exists in the array.
 * @deprecated Will be removed in v0.26.0
 */function eb(t,e){return -1===e.indexOf(t)&&(e.push(t),!0)}/**
 * Remove an item from an list
 * @deprecated Will be removed in v0.26.0
 */function eC(t,e){let i=-1;return(i=e.indexOf(t))>-1&&(e.splice(i,1),!0)}/**
 * See if an array contains something
 */function eA(t,e){for(let i=0;i<t.length;i++)if(t[i]===e)return!0;return!1}/**
 * Used for exhaustive checks at compile time
 */function eS(t){throw Error(t)}/**
 * Create a promise that resolves after a certain number of milliseconds
 *
 * It is strongly recommended you pass the excalibur clock so delays are bound to the
 * excalibur clock which would be unaffected by stop/pause.
 * @param milliseconds
 * @param clock
 */function eT(t,e){var i;let s=new ex,r=null!==(i=null==e?void 0:e.schedule.bind(e))&&void 0!==i?i:setTimeout;return r(()=>{s.resolve()},t),s.promise}(d=V||(V={}))[d.X=12]="X",d[d.Y=13]="Y";/**
 * Excalibur Matrix helper for 4x4 matrices
 *
 * Useful for webgl 4x4 matrices
 */class eE{constructor(){/**
         *  4x4 matrix in column major order
         *
         * |         |         |          |          |
         * | ------- | ------- | -------- | -------- |
         * | data[0] | data[4] | data[8]  | data[12] |
         * | data[1] | data[5] | data[9]  | data[13] |
         * | data[2] | data[6] | data[10] | data[14] |
         * | data[3] | data[7] | data[11] | data[15] |
         *
         */this.data=new Float32Array(16),this._scaleX=1,this._scaleSignX=1,this._scaleY=1,this._scaleSignY=1}/**
     * Creates an orthographic (flat non-perspective) projection
     * https://en.wikipedia.org/wiki/Orthographic_projection
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */static ortho(t,e,i,s,r,n){let o=new eE;return o.data[0]=2/(e-t),o.data[1]=0,o.data[2]=0,o.data[3]=0,o.data[4]=0,o.data[5]=2/(s-i),o.data[6]=0,o.data[7]=0,o.data[8]=0,o.data[9]=0,o.data[10]=-2/(n-r),o.data[11]=0,o.data[12]=-(e+t)/(e-t),o.data[13]=-(s+i)/(s-i),o.data[14]=-(n+r)/(n-r),o.data[15]=1,o}/**
     * Creates a new Matrix with the same data as the current 4x4
     */clone(t){let e=t||new eE;return e.data[0]=this.data[0],e.data[1]=this.data[1],e.data[2]=this.data[2],e.data[3]=this.data[3],e.data[4]=this.data[4],e.data[5]=this.data[5],e.data[6]=this.data[6],e.data[7]=this.data[7],e.data[8]=this.data[8],e.data[9]=this.data[9],e.data[10]=this.data[10],e.data[11]=this.data[11],e.data[12]=this.data[12],e.data[13]=this.data[13],e.data[14]=this.data[14],e.data[15]=this.data[15],e}/**
     * Converts the current matrix into a DOMMatrix
     *
     * This is useful when working with the browser Canvas context
     * @returns {DOMMatrix} DOMMatrix
     */toDOMMatrix(){return new DOMMatrix([...this.data])}static fromFloat32Array(t){let e=new eE;return e.data=t,e}/**
     * Creates a new identity matrix (a matrix that when applied does nothing)
     */static identity(){let t=new eE;return t.data[0]=1,t.data[1]=0,t.data[2]=0,t.data[3]=0,t.data[4]=0,t.data[5]=1,t.data[6]=0,t.data[7]=0,t.data[8]=0,t.data[9]=0,t.data[10]=1,t.data[11]=0,t.data[12]=0,t.data[13]=0,t.data[14]=0,t.data[15]=1,t}/**
     * Resets the current matrix to the identity matrix, mutating it
     * @returns {Matrix} Current matrix as identity
     */reset(){return this.data[0]=1,this.data[1]=0,this.data[2]=0,this.data[3]=0,this.data[4]=0,this.data[5]=1,this.data[6]=0,this.data[7]=0,this.data[8]=0,this.data[9]=0,this.data[10]=1,this.data[11]=0,this.data[12]=0,this.data[13]=0,this.data[14]=0,this.data[15]=1,this}/**
     * Creates a brand new translation matrix at the specified 3d point
     * @param x
     * @param y
     */static translation(t,e){let i=eE.identity();return i.data[12]=t,i.data[13]=e,i}/**
     * Creates a brand new scaling matrix with the specified scaling factor
     * @param sx
     * @param sy
     */static scale(t,e){let i=eE.identity();return i.data[0]=t,i.data[5]=e,i.data[10]=1,i.data[15]=1,i}/**
     * Creates a brand new rotation matrix with the specified angle
     * @param angleRadians
     */static rotation(t){let e=eE.identity();return e.data[0]=Math.cos(t),e.data[4]=-Math.sin(t),e.data[1]=Math.sin(t),e.data[5]=Math.cos(t),e}multiply(t,e){if(t instanceof eg){let i=e||new eg(0,0),s=t.x*this.data[0]+t.y*this.data[4]+this.data[12],r=t.x*this.data[1]+t.y*this.data[5]+this.data[13];return i.x=s,i.y=r,i}{let i=e||new eE,s=this.data[0],r=this.data[1],n=this.data[2],o=this.data[3],a=this.data[4],h=this.data[5],l=this.data[6],d=this.data[7],c=this.data[8],u=this.data[9],p=this.data[10],_=this.data[11],g=this.data[12],m=this.data[13],f=this.data[14],v=this.data[15],y=t.data[0],x=t.data[1],w=t.data[2],b=t.data[3],C=t.data[4],A=t.data[5],S=t.data[6],T=t.data[7],E=t.data[8],P=t.data[9],I=t.data[10],M=t.data[11],k=t.data[12],R=t.data[13],D=t.data[14],B=t.data[15];i.data[0]=s*y+a*x+c*w+g*b,i.data[1]=r*y+h*x+u*w+m*b,i.data[2]=n*y+l*x+p*w+f*b,i.data[3]=o*y+d*x+_*w+v*b,i.data[4]=s*C+a*A+c*S+g*T,i.data[5]=r*C+h*A+u*S+m*T,i.data[6]=n*C+l*A+p*S+f*T,i.data[7]=o*C+d*A+_*S+v*T,i.data[8]=s*E+a*P+c*I+g*M,i.data[9]=r*E+h*P+u*I+m*M,i.data[10]=n*E+l*P+p*I+f*M,i.data[11]=o*E+d*P+_*I+v*M,i.data[12]=s*k+a*R+c*D+g*B,i.data[13]=r*k+h*R+u*D+m*B,i.data[14]=n*k+l*R+p*D+f*B,i.data[15]=o*k+d*R+_*D+v*B;let F=this.getScale();return i._scaleSignX=ea(F.x)*ea(i._scaleSignX),i._scaleSignY=ea(F.y)*ea(i._scaleSignY),i}}/**
     * Applies translation to the current matrix mutating it
     * @param x
     * @param y
     */translate(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3],o=this.data[4],a=this.data[5],h=this.data[6],l=this.data[7],d=this.data[8],c=this.data[9],u=this.data[10],p=this.data[11],_=this.data[12],g=this.data[13],m=this.data[14],f=this.data[15];return this.data[12]=i*t+o*e+0*d+1*_,this.data[13]=s*t+a*e+0*c+1*g,this.data[14]=r*t+h*e+0*u+1*m,this.data[15]=n*t+l*e+0*p+1*f,this}setPosition(t,e){this.data[12]=t,this.data[13]=e}getPosition(){return em(this.data[12],this.data[13])}/**
     * Applies rotation to the current matrix mutating it
     * @param angle in Radians
     */rotate(t){let e=this.data[0],i=this.data[1],s=this.data[2],r=this.data[3],n=this.data[4],o=this.data[5],a=this.data[6],h=this.data[7],l=Math.sin(t),d=Math.cos(t);return this.data[0]=d*e+l*n,this.data[1]=d*i+l*o,this.data[2]=d*s+l*a,this.data[3]=d*r+l*h,this.data[4]=d*n-l*e,this.data[5]=d*o-l*i,this.data[6]=d*a-l*s,this.data[7]=d*h-l*r,this}/**
     * Applies scaling to the current matrix mutating it
     * @param x
     * @param y
     */scale(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3],o=this.data[4],a=this.data[5],h=this.data[6],l=this.data[7];return this.data[0]=i*t,this.data[1]=s*t,this.data[2]=r*t,this.data[3]=n*t,this.data[4]=o*e,this.data[5]=a*e,this.data[6]=h*e,this.data[7]=l*e,this}setRotation(t){let e=this.getScale(),i=Math.sin(t),s=Math.cos(t);this.data[0]=s*e.x,this.data[1]=i*e.y,this.data[4]=-i*e.x,this.data[5]=s*e.y}getRotation(){let t=Math.atan2(this.data[1]/this.getScaleY(),this.data[0]/this.getScaleX());return el(t)}getScaleX(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=em(this.data[0],this.data[4]).size;return this._scaleSignX*t}getScaleY(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=em(this.data[1],this.data[5]).size;return this._scaleSignY*t}/**
     * Get the scale of the matrix
     */getScale(){return em(this.getScaleX(),this.getScaleY())}setScaleX(t){if(this._scaleX===t)return;this._scaleSignX=ea(t);// negative scale acts like a 180 rotation, so flip
let e=em(this.data[0]*this._scaleSignX,this.data[4]*this._scaleSignX).normalize();this.data[0]=e.x*t,this.data[4]=e.y*t,this._scaleX=t}setScaleY(t){if(this._scaleY===t)return;this._scaleSignY=ea(t);// negative scale acts like a 180 rotation, so flip
let e=em(this.data[1]*this._scaleSignY,this.data[5]*this._scaleSignY).normalize();this.data[1]=e.x*t,this.data[5]=e.y*t,this._scaleY=t}setScale(t){this.setScaleX(t.x),this.setScaleY(t.y)}/**
     * Determinant of the upper left 2x2 matrix
     */getBasisDeterminant(){return this.data[0]*this.data[5]-this.data[1]*this.data[4]}/**
     * Return the affine inverse, optionally store it in a target matrix.
     *
     * It's recommended you call .reset() the target unless you know what you're doing
     * @param target
     */getAffineInverse(t){// See http://negativeprobability.blogspot.com/2011/11/affine-transformations-and-their.html
// See https://www.mathsisfun.com/algebra/matrix-inverse.html
// Since we are actually only doing 2D transformations we can use this hack
// We don't actually use the 3rd or 4th dimension
let e=this.getBasisDeterminant(),i=1/e,s=this.data[0],r=this.data[4],n=this.data[1],o=this.data[5],a=t||eE.identity();// inverts rotation and scale
a.data[0]=o*i,a.data[1]=-n*i,a.data[4]=-r*i,a.data[5]=s*i;let h=this.data[12],l=this.data[13];return(// invert translation
// transform translation into the matrix basis created by rot/scale
a.data[12]=-(h*a.data[0]+l*a.data[4]),a.data[13]=-(h*a.data[1]+l*a.data[5]),a)}isIdentity(){return 1===this.data[0]&&0===this.data[1]&&0===this.data[2]&&0===this.data[3]&&0===this.data[4]&&1===this.data[5]&&0===this.data[6]&&0===this.data[7]&&0===this.data[8]&&0===this.data[9]&&1===this.data[10]&&0===this.data[11]&&0===this.data[12]&&0===this.data[13]&&0===this.data[14]&&1===this.data[15]}toString(){return`
[${this.data[0]} ${this.data[4]} ${this.data[8]} ${this.data[12]}]
[${this.data[1]} ${this.data[5]} ${this.data[9]} ${this.data[13]}]
[${this.data[2]} ${this.data[6]} ${this.data[10]} ${this.data[14]}]
[${this.data[3]} ${this.data[7]} ${this.data[11]} ${this.data[15]}]
`}}class eP{constructor(){/**
         * |         |         |          |
         * | ------- | ------- | -------- |
         * | data[0] | data[2] | data[4]  |
         * | data[1] | data[3] | data[5]  |
         * |   0     |    0    |    1     |
         */this.data=new Float64Array(6),this._scale=new Float64Array([1,1]),this._scaleSignX=1,this._scaleSignY=1}/**
     * Converts the current matrix into a DOMMatrix
     *
     * This is useful when working with the browser Canvas context
     * @returns {DOMMatrix} DOMMatrix
     */toDOMMatrix(){return new DOMMatrix([...this.data])}static identity(){let t=new eP;return t.data[0]=1,t.data[1]=0,t.data[2]=0,t.data[3]=1,t.data[4]=0,t.data[5]=0,t}/**
     * Creates a brand new translation matrix at the specified 3d point
     * @param x
     * @param y
     */static translation(t,e){let i=eP.identity();return i.data[4]=t,i.data[5]=e,i}/**
     * Creates a brand new scaling matrix with the specified scaling factor
     * @param sx
     * @param sy
     */static scale(t,e){let i=eP.identity();return i.data[0]=t,i.data[3]=e,i._scale[0]=t,i._scale[1]=e,i}/**
     * Creates a brand new rotation matrix with the specified angle
     * @param angleRadians
     */static rotation(t){let e=eP.identity();return e.data[0]=Math.cos(t),e.data[1]=Math.sin(t),e.data[2]=-Math.sin(t),e.data[3]=Math.cos(t),e}setPosition(t,e){this.data[4]=t,this.data[5]=e}getPosition(){return em(this.data[4],this.data[5])}/**
     * Applies rotation to the current matrix mutating it
     * @param angle in Radians
     */rotate(t){let e=this.data[0],i=this.data[1],s=this.data[2],r=this.data[3],n=Math.sin(t),o=Math.cos(t);return this.data[0]=o*e+n*s,this.data[1]=o*i+n*r,this.data[2]=o*s-n*e,this.data[3]=o*r-n*i,this}/**
     * Applies translation to the current matrix mutating it
     * @param x
     * @param y
     */translate(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3],o=this.data[4],a=this.data[5];return(// const a33 = 1;
// Doesn't change z
this.data[4]=i*t+r*e+o,this.data[5]=s*t+n*e+a,this)}/**
     * Applies scaling to the current matrix mutating it
     * @param x
     * @param y
     */scale(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3];return this.data[0]=i*t,this.data[1]=s*t,this.data[2]=r*e,this.data[3]=n*e,this._scale[0]=t,this._scale[1]=e,this}determinant(){return this.data[0]*this.data[3]-this.data[1]*this.data[2]}/**
     * Return the affine inverse, optionally store it in a target matrix.
     *
     * It's recommended you call .reset() the target unless you know what you're doing
     * @param target
     */inverse(t){// See http://negativeprobability.blogspot.com/2011/11/affine-transformations-and-their.html
// See https://www.mathsisfun.com/algebra/matrix-inverse.html
// Since we are actually only doing 2D transformations we can use this hack
// We don't actually use the 3rd or 4th dimension
let e=this.determinant(),i=1/e,s=this.data[0],r=this.data[2],n=this.data[1],o=this.data[3],a=t||eP.identity();// inverts rotation and scale
a.data[0]=o*i,a.data[1]=-n*i,a.data[2]=-r*i,a.data[3]=s*i;let h=this.data[4],l=this.data[5];return(// invert translation
// transform translation into the matrix basis created by rot/scale
a.data[4]=-(h*a.data[0]+l*a.data[2]),a.data[5]=-(h*a.data[1]+l*a.data[3]),a)}multiply(t,e){if(t instanceof eg){let i=e||new eg(0,0),s=t.x*this.data[0]+t.y*this.data[2]+this.data[4],r=t.x*this.data[1]+t.y*this.data[3]+this.data[5];return i.x=s,i.y=r,i}{let i=e||new eP,s=this.data[0],r=this.data[1],n=this.data[2],o=this.data[3],a=this.data[4],h=this.data[5],l=t.data[0],d=t.data[1],c=t.data[2],u=t.data[3],p=t.data[4],_=t.data[5];//  const b33 = 1;
i.data[0]=s*l+n*d,i.data[1]=r*l+o*d,i.data[2]=s*c+n*u,i.data[3]=r*c+o*u,i.data[4]=s*p+n*_+a,i.data[5]=r*p+o*_+h;let g=this.getScale();return i._scaleSignX=ea(g.x)*ea(i._scaleSignX),i._scaleSignY=ea(g.y)*ea(i._scaleSignY),i}}to4x4(){let t=new eE;return t.data[0]=this.data[0],t.data[1]=this.data[1],t.data[2]=0,t.data[3]=0,t.data[4]=this.data[2],t.data[5]=this.data[3],t.data[6]=0,t.data[7]=0,t.data[8]=0,t.data[9]=0,t.data[10]=1,t.data[11]=0,t.data[12]=this.data[4],t.data[13]=this.data[5],t.data[14]=0,t.data[15]=1,t}setRotation(t){let e=this.getScale(),i=Math.sin(t),s=Math.cos(t);this.data[0]=s*e.x,this.data[1]=i*e.y,this.data[2]=-i*e.x,this.data[3]=s*e.y}getRotation(){let t=Math.atan2(this.data[1]/this.getScaleY(),this.data[0]/this.getScaleX());return el(t)}getScaleX(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=em(this.data[0],this.data[2]).distance();return this._scaleSignX*t}getScaleY(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=em(this.data[1],this.data[3]).distance();return this._scaleSignY*t}/**
     * Get the scale of the matrix
     */getScale(){return em(this.getScaleX(),this.getScaleY())}setScaleX(t){if(t===this._scale[0])return;this._scaleSignX=ea(t);// negative scale acts like a 180 rotation, so flip
let e=em(this.data[0]*this._scaleSignX,this.data[2]*this._scaleSignX).normalize();this.data[0]=e.x*t,this.data[2]=e.y*t,this._scale[0]=t}setScaleY(t){if(t===this._scale[1])return;this._scaleSignY=ea(t);// negative scale acts like a 180 rotation, so flip
let e=em(this.data[1]*this._scaleSignY,this.data[3]*this._scaleSignY).normalize();this.data[1]=e.x*t,this.data[3]=e.y*t,this._scale[1]=t}setScale(t){this.setScaleX(t.x),this.setScaleY(t.y)}isIdentity(){return 1===this.data[0]&&0===this.data[1]&&0===this.data[2]&&1===this.data[3]&&0===this.data[4]&&0===this.data[5]}/**
     * Resets the current matrix to the identity matrix, mutating it
     * @returns {AffineMatrix} Current matrix as identity
     */reset(){return this.data[0]=1,this.data[1]=0,this.data[2]=0,this.data[3]=1,this.data[4]=0,this.data[5]=0,this}/**
     * Creates a new Matrix with the same data as the current 4x4
     */clone(t){let e=t||new eP;return e.data[0]=this.data[0],e.data[1]=this.data[1],e.data[2]=this.data[2],e.data[3]=this.data[3],e.data[4]=this.data[4],e.data[5]=this.data[5],e}toString(){return`
[${this.data[0]} ${this.data[2]} ${this.data[4]}]
[${this.data[1]} ${this.data[3]} ${this.data[5]}]
[0 0 1]
`}}class eI{constructor(){this._transforms=[],this._currentTransform=eP.identity()}save(){this._transforms.push(this._currentTransform),this._currentTransform=this._currentTransform.clone()}restore(){this._currentTransform=this._transforms.pop()}translate(t,e){return this._currentTransform.translate(t,e)}rotate(t){return this._currentTransform.rotate(t)}scale(t,e){return this._currentTransform.scale(t,e)}set current(t){this._currentTransform=t}get current(){return this._currentTransform}}class eM{constructor(){this._states=[],this._currentState=this._getDefaultState()}_getDefaultState(){return{opacity:1,z:0,tint:ef.White,material:null}}_cloneState(){return{opacity:this._currentState.opacity,z:this._currentState.z,tint:this._currentState.tint.clone(),material:this._currentState.material// TODO is this going to cause problems when cloning
}}save(){this._states.push(this._currentState),this._currentState=this._cloneState()}restore(){this._currentState=this._states.pop()}get current(){return this._currentState}set current(t){this._currentState=t}}let ek={Complete:"complete",Load:"load",LoadStart:"loadstart",Progress:"progress",Error:"error"};/**
 * The [[Resource]] type allows games built in Excalibur to load generic resources.
 * For any type of remote resource it is recommended to use [[Resource]] for preloading.
 */class eR{/**
     * @param path          Path to the remote resource
     * @param responseType  The type to expect as a response: "" | "arraybuffer" | "blob" | "document" | "json" | "text";
     * @param bustCache     Whether or not to cache-bust requests
     */constructor(t,e,i=!1){this.path=t,this.responseType=e,this.bustCache=i,this.data=null,this.logger=t7.getInstance(),this.events=new tS}/**
     * Returns true if the Resource is completely loaded and is ready
     * to be drawn.
     */isLoaded(){return null!==this.data}_cacheBust(t){return/\?\w*=\w*/.test(t)?t+="&__="+Date.now():t+="?__="+Date.now(),t}/**
     * Begin loading the resource and returns a promise to be resolved on completion
     */load(){return new Promise((t,e)=>{// Exit early if we already have data
if(null!==this.data){this.logger.debug("Already have data for resource",this.path),this.events.emit("complete",this.data),t(this.data);return}let i=new XMLHttpRequest;i.open("GET",this.bustCache?this._cacheBust(this.path):this.path,!0),i.responseType=this.responseType,i.addEventListener("loadstart",t=>this.events.emit("loadstart",t)),i.addEventListener("progress",t=>this.events.emit("progress",t)),i.addEventListener("error",t=>this.events.emit("error",t)),i.addEventListener("load",t=>this.events.emit("load",t)),i.addEventListener("load",()=>{// XHR on file:// success status is 0, such as with PhantomJS
if(0!==i.status&&200!==i.status){this.logger.error("Failed to load resource ",this.path," server responded with error code",i.status),this.events.emit("error",i.response),e(Error(i.statusText));return}this.data=i.response,this.events.emit("complete",this.data),this.logger.debug("Completed loading resource",this.path),t(this.data)}),i.send()})}}/**
 * Watch an object with a proxy, only fires if property value is different
 */function eD(t,e){return t&&void 0===t.__isProxy?new Proxy(t,{set:(t,i,s)=>(t[i]!==s&&(t[i]=s,"string"==typeof i&&"_"!==i[0]&&e(t)),!0),get:(t,e)=>"__isProxy"===e||t[e]}):t}/**
 * Watch an object with a proxy, fires change on any property value change
 */function eB(t,e){return t&&void 0===t.__isProxy?new Proxy(t,{set:(t,i,s)=>(// The default behavior to store the value
    t[i]=s,"string"==typeof i&&"_"!==i[0]&&e(t),!0),get:(t,e)=>"__isProxy"===e||t[e]}):t}/**
 * A Graphic is the base Excalibur primitive for something that can be drawn to the [[ExcaliburGraphicsContext]].
 * [[Sprite]], [[Animation]], [[GraphicsGroup]], [[Canvas]], [[Rectangle]], [[Circle]], and [[Polygon]] all derive from the
 * [[Graphic]] abstract class.
 *
 * Implementors of a Graphic must override the abstract [[Graphic._drawImage]] method to render an image to the graphics context. Graphic
 * handles all the position, rotation, and scale transformations in [[Graphic._preDraw]] and [[Graphic._postDraw]]
 */class eF{isStale(){return this._transformStale}/**
     * Gets or sets the flipHorizontal, which will flip the graphic horizontally (across the y axis)
     */get flipHorizontal(){return this._flipHorizontal}set flipHorizontal(t){this._flipHorizontal=t,this._transformStale=!0}/**
     * Gets or sets the flipVertical, which will flip the graphic vertically (across the x axis)
     */get flipVertical(){return this._flipVertical}set flipVertical(t){this._flipVertical=t,this._transformStale=!0}/**
     * Gets or sets the rotation of the graphic
     */get rotation(){return this._rotation}set rotation(t){this._rotation=t,this._transformStale=!0}/**
     * Gets or sets the scale of the graphic, this affects the width and
     */get scale(){return this._scale}set scale(t){this._scale=eD(t,()=>{this._transformStale=!0}),this._transformStale=!0}/**
     * Gets or sets the origin of the graphic, if not set the center of the graphic is the origin
     */get origin(){return this._origin}set origin(t){this._origin=eD(t,()=>{this._transformStale=!0}),this._transformStale=!0}constructor(t){var e,i,s,r,n,o;this.id=eF._ID++,this.transform=eP.identity(),this.tint=null,this._transformStale=!0,/**
         * Gets or sets wether to show debug information about the graphic
         */this.showDebug=!1,this._flipHorizontal=!1,this._flipVertical=!1,this._rotation=0,/**
         * Gets or sets the opacity of the graphic, 0 is transparent, 1 is solid (opaque).
         */this.opacity=1,this._scale=eg.One,this._origin=null,this._width=0,this._height=0,t&&(this.origin=null!==(e=t.origin)&&void 0!==e?e:this.origin,this.flipHorizontal=null!==(i=t.flipHorizontal)&&void 0!==i?i:this.flipHorizontal,this.flipVertical=null!==(s=t.flipVertical)&&void 0!==s?s:this.flipVertical,this.rotation=null!==(r=t.rotation)&&void 0!==r?r:this.rotation,this.opacity=null!==(n=t.opacity)&&void 0!==n?n:this.opacity,this.scale=null!==(o=t.scale)&&void 0!==o?o:this.scale)}cloneGraphicOptions(){return{origin:this.origin?this.origin.clone():null,flipHorizontal:this.flipHorizontal,flipVertical:this.flipVertical,rotation:this.rotation,opacity:this.opacity,scale:this.scale?this.scale.clone():null}}/**
     * Gets or sets the width of the graphic (always positive)
     */get width(){return Math.abs(this._width*this.scale.x)}/**
     * Gets or sets the height of the graphic (always positive)
     */get height(){return Math.abs(this._height*this.scale.y)}set width(t){this._width=t,this._transformStale=!0}set height(t){this._height=t,this._transformStale=!0}/**
     * Gets a copy of the bounds in pixels occupied by the graphic on the the screen. This includes scale.
     */get localBounds(){return ey.fromDimension(this.width,this.height,eg.Zero)}/**
     * Draw the whole graphic to the context including transform
     * @param ex The excalibur graphics context
     * @param x
     * @param y
     */draw(t,e,i){this._preDraw(t,e,i),this._drawImage(t,0,0),this._postDraw(t)}/**
     * Apply affine transformations to the graphics context to manipulate the graphic before [[Graphic._drawImage]]
     * @param ex
     * @param x
     * @param y
     */_preDraw(t,e,i){t.save(),t.translate(e,i),this._transformStale&&(this.transform.reset(),this.transform.scale(Math.abs(this.scale.x),Math.abs(this.scale.y)),this._rotate(this.transform),this._flip(this.transform),this._transformStale=!1),t.multiply(this.transform),// it is important to multiply alphas so graphics respect the current context
t.opacity=t.opacity*this.opacity,this.tint&&(t.tint=this.tint)}_rotate(t){var e;let i=this.scale.x>0?1:-1,s=this.scale.y>0?1:-1,r=null!==(e=this.origin)&&void 0!==e?e:em(this.width/2,this.height/2);t.translate(r.x,r.y),t.rotate(this.rotation),// This is for handling direction changes 1 or -1, that way we don't have mismatched translates()
t.scale(i,s),t.translate(-r.x,-r.y)}_flip(t){this.flipHorizontal&&(t.translate(this.width/this.scale.x,0),t.scale(-1,1)),this.flipVertical&&(t.translate(0,this.height/this.scale.y),t.scale(1,-1))}/**
     * Apply any additional work after [[Graphic._drawImage]] and restore the context state.
     * @param ex
     */_postDraw(t){this.showDebug&&t.debug.drawRect(0,0,this.width,this.height),t.restore()}}eF._ID=0;class eU extends eF{static from(t){return new eU({image:t})}constructor(t){var e,i;super(t),this._logger=t7.getInstance(),this._dirty=!0,this._logNotLoadedWarning=!1,this.image=t.image;let{width:s,height:r}=t;this.sourceView=null!==(e=t.sourceView)&&void 0!==e?e:{x:0,y:0,width:null!=s?s:0,height:null!=r?r:0},this.destSize=null!==(i=t.destSize)&&void 0!==i?i:{width:null!=s?s:0,height:null!=r?r:0},this._updateSpriteDimensions(),this.image.ready.then(()=>{this._updateSpriteDimensions()})}get width(){return Math.abs(this.destSize.width*this.scale.x)}get height(){return Math.abs(this.destSize.height*this.scale.y)}set width(t){t/=Math.abs(this.scale.x),this.destSize.width=t,super.width=Math.ceil(this.destSize.width)}set height(t){t/=Math.abs(this.scale.y),this.destSize.height=t,super.height=Math.ceil(this.destSize.height)}_updateSpriteDimensions(){var t,e,i,s,r,n;let{width:o,height:a}=this.image;// This code uses || to avoid 0's
// If the source is not specified, use the native dimension
this.sourceView.width=(null===(t=this.sourceView)||void 0===t?void 0:t.width)||o,this.sourceView.height=(null===(e=this.sourceView)||void 0===e?void 0:e.height)||a,// If the destination is not specified, use the source if specified, then native
this.destSize.width=(null===(i=this.destSize)||void 0===i?void 0:i.width)||(null===(s=this.sourceView)||void 0===s?void 0:s.width)||o,this.destSize.height=(null===(r=this.destSize)||void 0===r?void 0:r.height)||(null===(n=this.sourceView)||void 0===n?void 0:n.height)||a,this.width=Math.ceil(this.destSize.width)*this.scale.x,this.height=Math.ceil(this.destSize.height)*this.scale.y}_preDraw(t,e,i){this.image.isLoaded()&&this._dirty&&(this._dirty=!1,this._updateSpriteDimensions()),super._preDraw(t,e,i)}_drawImage(t,e,i){this.image.isLoaded()?t.drawImage(this.image.image,this.sourceView.x,this.sourceView.y,this.sourceView.width,this.sourceView.height,e,i,this.destSize.width,this.destSize.height):(this._logNotLoadedWarning||this._logger.warn(`ImageSource ${this.image.path} is not yet loaded and won't be drawn. Please call .load() or include in a Loader.

Read https://excaliburjs.com/docs/imagesource for more information.`),this._logNotLoadedWarning=!0)}clone(){return new eU({image:this.image,sourceView:{...this.sourceView},destSize:{...this.destSize},...this.cloneGraphicOptions()})}}/**
     * Pixel is useful when you do not want smoothing aka antialiasing applied to your graphics.
     *
     * Useful for Pixel art aesthetics.
     */(c=G||(G={})).Pixel="Pixel",/**
     * Blended is useful when you have high resolution artwork and would like it blended and smoothed
     */c.Blended="Blended";/**
 * Manages loading image sources into webgl textures, a unique id is associated with all sources
 */class eL{constructor(t){this._textureMap=new Map,this._gl=t,eL._MAX_TEXTURE_SIZE=t.getParameter(t.MAX_TEXTURE_SIZE)}/**
     * Get the WebGL Texture from a source image
     * @param image
     */get(t){return this._textureMap.get(t)}/**
     * Returns whether a source image has been loaded as a texture
     * @param image
     */has(t){return this._textureMap.has(t)}/**
     * Loads a graphic into webgl and returns it's texture info, a webgl context must be previously registered
     * @param image Source graphic
     * @param filtering {ImageFiltering} The ImageFiltering mode to apply to the loaded texture
     * @param forceUpdate Optionally force a texture to be reloaded, useful if the source graphic has changed
     */load(t,e,i=!1){// Ignore loading if webgl is not registered
let s=this._gl;if(!s)return null;let r=null;// Update existing webgl texture and return early
if(this.has(t)&&(r=this.get(t)),r)return i&&(s.bindTexture(s.TEXTURE_2D,r),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,t)),r;// No texture exists create a new one
r=s.createTexture(),eL.checkImageSizeSupportedAndLog(t),s.bindTexture(s.TEXTURE_2D,r),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);// NEAREST for pixel art, LINEAR for hi-res
let n=null!=e?e:eL.filtering;return s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,n===G.Pixel?s.NEAREST:s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,n===G.Pixel?s.NEAREST:s.LINEAR),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,t),this._textureMap.set(t,r),r}delete(t){// Ignore loading if webgl is not registered
let e=this._gl;if(!e)return null;let i=null;this.has(t)&&(i=this.get(t),e.deleteTexture(i))}/**
     * Takes an image and returns if it meets size criteria for hardware
     * @param image
     * @returns if the image will be supported at runtime
     */static checkImageSizeSupportedAndLog(t){var e;let i=null!==(e=t.dataset.originalSrc)&&void 0!==e?e:"internal canvas bitmap";return t.width>eL._MAX_TEXTURE_SIZE||t.height>eL._MAX_TEXTURE_SIZE?(eL._LOGGER.error(`The image [${i}] provided to Excalibur is too large for the device's maximum texture size of (${eL._MAX_TEXTURE_SIZE}x${eL._MAX_TEXTURE_SIZE}) please resize to an image for excalibur to render properly.

Images will likely render as black rectangles.

Read more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`),!1):((t.width>4096||t.height>4096)&&eL._LOGGER.warn(`The image [${i}] provided to excalibur is too large may not work on all mobile devices, it is recommended you resize images to a maximum (4096x4096).

Images will likely render as black rectangles on some mobile platforms.

Read more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`),!0)}}eL._LOGGER=t7.getInstance(),/**
 * Sets the default filtering for the Excalibur texture loader, default [[ImageFiltering.Blended]]
 */eL.filtering=G.Blended,eL._MAX_TEXTURE_SIZE=4096;class ez{/**
     * The original size of the source image in pixels
     */get width(){return this.image.naturalWidth}/**
     * The original height of the source image in pixels
     */get height(){return this.image.naturalHeight}/**
     * Returns true if the Texture is completely loaded and is ready
     * to be drawn.
     */isLoaded(){return this._src||(this._src=this.data.src),!!this._src}get image(){return this.data}/**
     * The path to the image, can also be a data url like 'data:image/'
     * @param path {string} Path to the image resource relative from the HTML document hosting the game, or absolute
     * @param bustCache {boolean} Should excalibur add a cache busting querystring?
     * @param filtering {ImageFiltering} Optionally override the image filtering set by [[EngineOptions.antialiasing]]
     */constructor(t,e=!1,i){this.path=t,this._logger=t7.getInstance(),/**
         * Access to the underlying html image element
         */this.data=new Image,this._readyFuture=new ex,/**
         * Promise the resolves when the image is loaded and ready for use, does not initiate loading
         */this.ready=this._readyFuture.promise,this._resource=new eR(t,"blob",e),this.filtering=i,(t.endsWith(".svg")||t.endsWith(".gif"))&&this._logger.warn(`Image type is not fully supported, you may have mixed results ${t}. Fully supported: jpg, bmp, and png`)}/**
     * Should excalibur add a cache busting querystring? By default false.
     * Must be set before loading
     */get bustCache(){return this._resource.bustCache}set bustCache(t){this._resource.bustCache=t}/**
     * Begins loading the image and returns a promise that resolves when the image is loaded
     */async load(){if(this.isLoaded())return this.data;try{let t;if(this.path.includes("data:image/"))t=this.path;else{let e=await this._resource.load();t=URL.createObjectURL(e)}// Decode the image
let e=new Image,i=new ex;e.onload=()=>i.resolve(),e.src=t,e.setAttribute("data-original-src",this.path),await i.promise,// Set results
// We defer loading the texture into webgl until the first draw that way we avoid a singleton
// and for the multi-engine case the texture needs to be created in EACH webgl context to work
// See image-renderer.ts draw()
this.data=e,// emit warning if potentially too big
eL.checkImageSizeSupportedAndLog(this.data)}catch(t){throw`Error loading ImageSource from path '${this.path}' with error [${t.message}]`}return(// Do a bad thing to pass the filtering as an attribute
this.data.setAttribute("filtering",this.filtering),// todo emit complete
this._readyFuture.resolve(this.data),this.data)}/**
     * Build a sprite from this ImageSource
     */toSprite(){return eU.from(this)}/**
     * Unload images from memory
     */unload(){this.data=new Image}}/**
 * Represents a collection of sprites from a source image with some organization in a grid
 */class eO{/**
     * Build a new sprite sheet from a list of sprites
     *
     * Use [[SpriteSheet.fromImageSource]] to create a SpriteSheet from an [[ImageSource]] organized in a grid
     * @param options
     */constructor(t){this._logger=t7.getInstance(),this.sprites=[];let{sprites:e,rows:i,columns:s}=t;this.sprites=e,this.rows=null!=i?i:1,this.columns=null!=s?s:this.sprites.length}/**
     * Find a sprite by their x/y position in the SpriteSheet, for example `getSprite(0, 0)` is the [[Sprite]] in the top-left
     * @param x
     * @param y
     */getSprite(t,e){if(t>=this.columns||t<0)return this._logger.warn(`No sprite exists in the SpriteSheet at (${t}, ${e}), x: ${t} should be between 0 and ${this.columns-1}`),null;if(e>=this.rows||e<0)return this._logger.warn(`No sprite exists in the SpriteSheet at (${t}, ${e}), y: ${e} should be between 0 and ${this.rows-1}`),null;let i=t+e*this.columns;return this.sprites[i]}/**
     * Create a sprite sheet from a sparse set of [[SourceView]] rectangles
     * @param options
     */static fromImageSourceWithSourceViews(t){let e=t.sourceViews.map(e=>new eU({image:t.image,sourceView:e}));return new eO({sprites:e})}/**
     * Create a SpriteSheet from an [[ImageSource]] organized in a grid
     *
     * Example:
     * ```
     * const spriteSheet = SpriteSheet.fromImageSource({
     *   image: imageSource,
     *   grid: {
     *     rows: 5,
     *     columns: 2,
     *     spriteWidth: 32, // pixels
     *     spriteHeight: 32 // pixels
     *   },
     *   // Optionally specify spacing
     *   spacing: {
     *     // pixels from the top left to start the sprite parsing
     *     originOffset: {
     *       x: 5,
     *       y: 5
     *     },
     *     // pixels between each sprite while parsing
     *     margin: {
     *       x: 1,
     *       y: 1
     *     }
     *   }
     * })
     * ```
     *
     * @param options
     */static fromImageSource(t){var e;let i=[];t.spacing=null!==(e=t.spacing)&&void 0!==e?e:{};let{image:s,grid:{rows:r,columns:n,spriteWidth:o,spriteHeight:a},spacing:{originOffset:h,margin:l}}=t,d={x:0,y:0,...h},c={x:0,y:0,...l};for(let t=0;t<n;t++)for(let e=0;e<r;e++)i[t+e*n]=new eU({image:s,sourceView:{x:t*o+c.x*t+d.x,y:e*a+c.y*e+d.y,width:o,height:a},destSize:{height:a,width:o}});return new eO({sprites:i,rows:r,columns:n})}clone(){return new eO({sprites:this.sprites.map(t=>t.clone()),rows:this.rows,columns:this.columns})}}class eH extends eF{constructor(t){super(t),this._text="",this.alphabet="",this.shadow=null,this.caseInsensitive=!1,this.spacing=0,this._logger=t7.getInstance(),this._alreadyWarnedAlphabet=!1,this._alreadyWarnedSpriteSheet=!1;let{alphabet:e,spriteSheet:i,caseInsensitive:s,spacing:r,shadow:n}=t;this.alphabet=e,this.spriteSheet=i,this.caseInsensitive=null!=s?s:this.caseInsensitive,this.spacing=null!=r?r:this.spacing,this.shadow=null!=n?n:this.shadow}_getCharacterSprites(t){let e=[],i=this.caseInsensitive?t.toLocaleLowerCase():t,s=this.caseInsensitive?this.alphabet.toLocaleLowerCase():this.alphabet;// for each letter in text
for(let t=0;t<i.length;t++){// find the sprite index in alphabet , if there is an error pick the first
let r=i[t],n=s.indexOf(r);-1!==n||(n=0,this._alreadyWarnedAlphabet||(this._logger.warn(`SpriteFont - Cannot find letter '${r}' in configured alphabet '${s}'.`),this._logger.warn("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged."),this._alreadyWarnedAlphabet=!0));let o=this.spriteSheet.sprites[n];o?e.push(o):this._alreadyWarnedSpriteSheet||(this._logger.warn(`SpriteFont - Cannot find sprite for '${r}' at index '${n}' in configured SpriteSheet`),this._logger.warn("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged."),this._alreadyWarnedSpriteSheet=!0)}return e}measureText(t,e){let i=this._getLinesFromText(t,e),s=i.reduce((t,e)=>t.length>e.length?t:e),r=this._getCharacterSprites(s),n=0,o=0;for(let t of r)n+=t.width+this.spacing,o=Math.max(o,t.height);return ey.fromDimension(n,o*i.length,eg.Zero)}_drawImage(t,e,i,s){let r=0,n=0,o=0,a=this._getLinesFromText(this._text,s);for(let s of a){for(let a of this._getCharacterSprites(s))// draw it in the right spot and increase the cursor by sprite width
a.draw(t,e+r,i+n),r+=a.width+this.spacing,o=Math.max(o,a.height);r=0,n+=o}}render(t,e,i,s,r,n){// SpriteFont doesn't support _color, yet...
this._text=e;let o=this.measureText(e,n);this.width=o.width,this.height=o.height,this.shadow&&(t.save(),t.translate(this.shadow.offset.x,this.shadow.offset.y),this._preDraw(t,s,r),this._drawImage(t,0,0,n),this._postDraw(t),t.restore()),this._preDraw(t,s,r),this._drawImage(t,0,0,n),this._postDraw(t)}clone(){return new eH({alphabet:this.alphabet,spriteSheet:this.spriteSheet,spacing:this.spacing})}_getLinesFromText(t,e){if(this._cachedText===t&&this._cachedRenderWidth===e)return this._cachedLines;let i=t.split("\n");if(null==e)return i;// If the current line goes past the maxWidth, append a new line without modifying the underlying text.
for(let t=0;t<i.length;t++){let s=i[t],r="";// Note: we subtract the spacing to counter the initial padding on the left side.
if(this.measureText(s).width>e){for(;this.measureText(s).width>e;)r=s[s.length-1]+r,s=s.slice(0,-1);// Update the array with our new values
i[t]=s,i[t+1]=r}}return this._cachedText=t,this._cachedLines=i,this._cachedRenderWidth=e,i}}/**
 * Internal debugtext helper
 */class eN{constructor(){/**
         * base64 font
         */this.fontSheet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAwCAYAAAD+f6R/AAAAAXNSR0IArs4c6QAABcJJREFUeJztnemu7CgMhGE07//KmT9NhrAFVzkQndQntXRP3/bCZkwCSQhCCCGEEEIIIYQQQog/TRz953Ecx/nDGIe/vdNhlc9tIz605Fk/ZmWfsO1hn9Gxuv1KHbvb3iL/VN+d1WORbyr7yR/5b9M4vjNeqko6jPJHq5wGHU151o9J2Udse9hndCxuv0rH7rY3yD/Wdyf13MrnQeDfkZIUSGKM4ff3cWN82pEZuTyQGX2IxeyR63va//8VNCYCq+1yEkLtWyagXv1P1r1H+110gP3PzT4gT8uW/mdQ8mUG8E9DqOz4MS9ICKGbXpS2BpnIrRzYeS96cll08INlCMl2/glzdcfazuuPqQO03lmqrBHsf272Q6NODXj6zzZIJd/LAHYTg3Mays5gBi7ZR27fOgs0yj8rm36DLMFiPgkAdXHKOwUQeMCQ/adSh/qBQrT/tPxbAwA9+DOZEILPAATSuHMgTv7+Auk/df2lHPCZLvMSLJe34LkEQ9PwXF1SRTllMYgvIaflqyVAjLGbsiCDcOK76jflxZ+sINPyROc5071yKWK5CJTV3dMp6+tBlyCtNlhAq/+XbWoBDcRNXYBMzD4VvQygSuPYC2jGGaSSOxXfy3dTUEsanIvNeepm38N/hssSALTPZnAXfwIYRJn2b7UBcw0FKX+nDdAMpm2j9WVnxrUa7TXaVAca/B+TgaAVh6R/rH0P/5m01dt/RLYViJn+w/bhVX2P7f/duqom5qb02pRLCLGIMgBU1wCEEN9BAUCID6MAIMSHUQAQ4sMoAAjxYRQAhPgwd1uB0fuZ7H3cnn2P+9mr/Pe4B8/eB/fwP4eRtci/0f6OfTCPt/9oHwC6G6y19RHZDumxmwzR4eE/s/2Tte/q/+XLdc9DeJ19diesQc/j7Z8fCe4tAS4CxZ7sp7eiJi7HiZmjmOTGJs+93CbS3nP0XIPH3vW8/qz6QPnX2QdsV/1uw/iZYvg8ACeHd28rpPzfNfhL+7vkw/4Ou9s+Onhbv91elpKZ48Dl6bzpwwibHigRArf+Ptk9+L3Y1Q5OB4LgCeSBw1iuB3GeJh1/HrX/zF0A9Mk+u45zMkc3r4rWPomma5+p/514LB+Zo93MErJ1JHxXPzByGa/licRYVKbpeQCoQ6Q8yxuCwJF9IPsoDkHAo/3Tx26cvA4EtJ/n04w8QOq/mrR7ddfLAC5BYFNlVI/0CnOVUflOpvJUQMx9AIMIW/nWDM67/qw0+95v9goBqD9j+72u/KD9U89IbnQbMIR2Zbneh5zUY7Hdk7XIP3UffVb+r+wDYAZLq+1n1+C7y3/ny2r7p5yeByDEh9HzAIQQJwoAQnwYBQAhPowCgBBjoNu3hNxSFACE6INuKvPajPZ4EFEAEKINcybGYzOd247WEd3TgA2jlmjEyrd+j9hvfVbD2PWQ3ZmGlu2HyO8og8eBuNUvNYWoDgMVpwHTJoLWdz1Y+ZYOy5uF7t6PPruZxANrud1lQXkP0jsGz/Yz+vGGMuygFyhSPcJnc1pMnQZElc+cRnoAlxdTvoDuK7puqF7uCQy+3fyFMiA02/vJQHh7DQDogMPTSGFNA56HTzbZ9yAfBOb1Zyo3qGM3MfMZ3f76huXf6xlmAHknMlLNXsBBBvbljIz9Uyz5Y5TzIBLR/qy/rNyrZ8+L/0BZ0m+tgXD0OK5XZxC/9P7I/g4hVFvzXf1/6i5A7+3AlijMPBLMZfCvuAp7A9rY56ApHitmLQc7c8bOv6ftAxlM9Xp35nkEK7nJetBsaMhtAAAuOLQGXwhh2dXQnn1rZ/a42BI3dL7L+jkFAbQddwdA9Ah35yMKhgEgVT46EFh5D4jz+OgavNKxeBCd1wDSJ/97oR8eoJkLi9t9/BDgDHTJ5NE7Dnzechh914OVv9M1K9PCqsfqb88XVg9qN9lm6nG176UPu+zn17GOxuO0vOWEEC/j+LFKTgghlvEfYJaLS+SA2O0AAAAASUVORK5CYII=",this.size=16,this.load()}load(){return this._imageSource=new ez(this.fontSheet),this._imageSource.load().then(()=>{this._spriteSheet=eO.fromImageSource({image:this._imageSource,grid:{rows:3,columns:16,spriteWidth:16,spriteHeight:16}}),this._spriteFont=new eH({alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,!'&.\"?-()+ ",caseInsensitive:!0,spriteSheet:this._spriteSheet,spacing:-6})})}/**
     * Writes debug text using the built in sprint font
     * @param ctx
     * @param text
     * @param pos
     */write(t,e,i){this._imageSource.isLoaded()&&this._spriteFont.render(t,e,null,i.x,i.y)}}class e${constructor(t,e){this._gl=t,this._texture=e}use(){let t=this._gl;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this._texture)}disable(){let t=this._gl;t.bindTexture(t.TEXTURE_2D,null)}}class eW{constructor(t){this.width=t.width,this.height=t.height,this._gl=t.gl,this._setupFramebuffer()}setResolution(t,e){let i=this._gl;this.width=t,this.height=e,i.bindTexture(i.TEXTURE_2D,this._frameTexture),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null)}get frameBuffer(){return this._frameBuffer}get frameTexture(){return this._frameTexture}_setupFramebuffer(){// Allocates frame buffer
let t=this._gl;this._frameTexture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this._frameTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,null),// set the filtering so we don't need mips
t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);// attach the texture as the first color attachment
let e=t.COLOR_ATTACHMENT0;// After this bind all draw calls will draw to this framebuffer texture
this._frameBuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this._frameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,this._frameTexture,0),// Reset after initialized
this.disable()}toRenderSource(){let t=new e$(this._gl,this._frameTexture);return t}/**
     * When called, all drawing gets redirected to this render target
     */use(){let t=this._gl;t.bindFramebuffer(t.FRAMEBUFFER,this._frameBuffer),// very important to set the viewport to the size of the framebuffer texture
t.viewport(0,0,this.width,this.height)}/**
     * When called, all drawing is sent back to the canvas
     */disable(){let t=this._gl;// passing null switches rendering back to the canvas
t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}}/**
 * Return the size of the GlType in bytes
 * @param gl
 * @param type
 */function eV(t,e){switch(e){case t.FLOAT:return 4;case t.SHORT:case t.UNSIGNED_SHORT:return 2;case t.BYTE:case t.UNSIGNED_BYTE:default:return 1}}/**
 * Based on the type return the number of attribute components
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
 * @param gl
 * @param type
 */function eG(t,e){switch(e){case t.LOW_FLOAT:case t.HIGH_FLOAT:case t.FLOAT:return 1;case t.FLOAT_VEC2:return 2;case t.FLOAT_VEC3:return 3;case t.FLOAT_VEC4:return 4;case t.BYTE:case t.UNSIGNED_BYTE:case t.UNSIGNED_SHORT:case t.SHORT:default:return 1}}/**
 * Based on the attribute return the corresponding supported attrib pointer type
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
 *
 * @param gl
 * @param type
 */function eq(t,e){switch(e){case t.LOW_FLOAT:case t.HIGH_FLOAT:case t.FLOAT:case t.FLOAT_VEC2:case t.FLOAT_VEC3:case t.FLOAT_VEC4:return t.FLOAT;case t.BYTE:return t.BYTE;case t.UNSIGNED_BYTE:return t.UNSIGNED_BYTE;case t.SHORT:return t.SHORT;case t.UNSIGNED_SHORT:return t.UNSIGNED_SHORT;default:return t.FLOAT}}class eX{get compiled(){return this._compiled}/**
     * Create a shader program in excalibur
     * @param options specify shader vertex and fragment source
     */constructor(t){this._logger=t7.getInstance(),this.uniforms={},this.attributes={},this._compiled=!1;let{gl:e,vertexSource:i,fragmentSource:s}=t;this._gl=e,this.vertexSource=i,this.fragmentSource=s}/**
     * Binds the shader program
     */use(){let t=this._gl;t.useProgram(this.program),eX._ACTIVE_SHADER_INSTANCE=this}isCurrentlyBound(){return eX._ACTIVE_SHADER_INSTANCE===this}/**
     * Compile the current shader against a webgl context
     */compile(){let t=this._gl,e=this._compileShader(t,this.vertexSource,t.VERTEX_SHADER),i=this._compileShader(t,this.fragmentSource,t.FRAGMENT_SHADER);this.program=this._createProgram(t,e,i);let s=this.getAttributes();for(let t of s)this.attributes[t.name]=t;let r=this.getUniforms();for(let t of r)this.uniforms[t.name]=t;return this._compiled=!0,this.program}getUniforms(){let t=this._gl,e=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS),i=[];for(let s=0;s<e;s++){let e=t.getActiveUniform(this.program,s),r=t.getUniformLocation(this.program,e.name);i.push({name:e.name,glType:e.type,location:r})}return i}getAttributes(){let t=this._gl,e=t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES),i=[];for(let s=0;s<e;s++){let e=t.getActiveAttrib(this.program,s),r=t.getAttribLocation(this.program,e.name);i.push({name:e.name,glType:eq(t,e.type),size:eG(t,e.type),location:r,normalized:!1})}return i}/**
     * Set a texture in a gpu texture slot
     * @param slotNumber
     * @param texture
     */setTexture(t,e){let i=this._gl;i.activeTexture(i.TEXTURE0+t),i.bindTexture(i.TEXTURE_2D,e)}/**
     * Set an integer uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformInt(t,e){this.setUniform("uniform1i",t,~~e)}/**
     * Set an integer uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformInt(t,e){return this.trySetUniform("uniform1i",t,~~e)}/**
     * Set an integer array uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformIntArray(t,e){this.setUniform("uniform1iv",t,e)}/**
     * Set an integer array uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformIntArray(t,e){return this.trySetUniform("uniform1iv",t,e)}/**
     * Set a boolean uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformBoolean(t,e){this.setUniform("uniform1i",t,e?1:0)}/**
     * Set a boolean uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformBoolean(t,e){return this.trySetUniform("uniform1i",t,e?1:0)}/**
     * Set a float uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloat(t,e){this.setUniform("uniform1f",t,e)}/**
     * Set a float uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloat(t,e){return this.trySetUniform("uniform1f",t,e)}/**
     * Set a float array uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloatArray(t,e){this.setUniform("uniform1fv",t,e)}/**
     * Set a float array uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloatArray(t,e){return this.trySetUniform("uniform1fv",t,e)}/**
     * Set a [[Vector]] uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloatVector(t,e){this.setUniform("uniform2f",t,e.x,e.y)}/**
     * Set a [[Vector]] uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloatVector(t,e){return this.trySetUniform("uniform2f",t,e.x,e.y)}/**
     * Set a [[Color]] uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloatColor(t,e){this.setUniform("uniform4f",t,e.r/255,e.g/255,e.b/255,e.a)}/**
     * Set a [[Color]] uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloatColor(t,e){return this.trySetUniform("uniform4f",t,e.r/255,e.g/255,e.b/255,e.a)}/**
     * Set an [[Matrix]] uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformMatrix(t,e){this.setUniform("uniformMatrix4fv",t,!1,e.data)}/**
     * Set an [[Matrix]] uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformMatrix(t,e){return this.trySetUniform("uniformMatrix4fv",t,!1,e.data)}/**
     * Set any available uniform type in webgl
     *
     * For example setUniform('uniformMatrix2fv', 'u_my2x2_mat`, ...);
     */setUniform(t,e,...i){if(!this._compiled)throw Error(`Must compile shader before setting a uniform ${t}:${e}`);if(!this.isCurrentlyBound())throw Error("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms");let s=this._gl,r=s.getUniformLocation(this.program,e);if(r){let e=[r,...i];this._gl[t].apply(this._gl,e)}else throw Error(`Uniform ${t}:${e} doesn't exist or is not used in the shader source code, unused uniforms are optimized away by most browsers`)}/**
     * Set any available uniform type in webgl. Will try to set the uniform, will return false if the uniform didn't exist,
     * true if it was set.
     *
     * WILL NOT THROW on error
     *
     * For example setUniform('uniformMatrix2fv', 'u_my2x2_mat`, ...);
     *
     */trySetUniform(t,e,...i){if(!this._compiled)return this._logger.warn(`Must compile shader before setting a uniform ${t}:${e}`),!1;if(!this.isCurrentlyBound())return this._logger.warn("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms"),!1;let s=this._gl,r=s.getUniformLocation(this.program,e);if(!r)return!1;{let e=[r,...i];this._gl[t].apply(this._gl,e)}return!0}_createProgram(t,e,i){let s=t.createProgram();if(null===s)throw Error("Could not create graphics shader program");// attach the shaders.
t.attachShader(s,e),t.attachShader(s,i),// link the program.
t.linkProgram(s);let r=t.getProgramParameter(s,t.LINK_STATUS);if(!r)throw Error(`Could not link the program: [${t.getProgramInfoLog(s)}]`);return s}_compileShader(t,e,i){let s=t.VERTEX_SHADER===i?"vertex":"fragment",r=t.createShader(i);if(null===r)throw Error(`Could not build shader: [${e}]`);t.shaderSource(r,e),t.compileShader(r);let n=t.getShaderParameter(r,t.COMPILE_STATUS);if(!n){let i=t.getShaderInfoLog(r);throw Error(`Could not compile ${s} shader:

${i}${this._processSourceForError(e,i)}`)}return r}_processSourceForError(t,e){let i=t.split("\n"),s=e.search(/\d:\d/),r=e.indexOf(" ",s),[n,o]=e.slice(s,r).split(":").map(t=>Number(t));for(let t=0;t<i.length;t++)i[t]=`${t+1}: ${i[t]}${o===t+1?" <----- ERROR!":""}`;return"\n\nSource:\n"+i.join("\n")}}eX._ACTIVE_SHADER_INSTANCE=null;/**
 * Helper around vertex buffer to simplify creating and uploading geometry
 *
 * Under the hood uses Float32Array
 */class eZ{constructor(t){/**
         * If the vertices never change switching 'static' can be more efficient on the gpu
         *
         * Default is 'dynamic'
         */this.type="dynamic";let{gl:e,size:i,type:s,data:r}=t;if(this._gl=e,this.buffer=this._gl.createBuffer(),!r&&!i)throw Error("Must either provide data or a size to the VertexBuffer");r?this.bufferData=r:this.bufferData=new Float32Array(i),this.type=null!=s?s:this.type,// Allocate buffer
e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,this.bufferData,"static"===this.type?e.STATIC_DRAW:e.DYNAMIC_DRAW)}/**
     * Bind this vertex buffer
     */bind(){let t=this._gl;t.bindBuffer(t.ARRAY_BUFFER,this.buffer)}/**
     * Upload vertex buffer geometry to the GPU
     */upload(t){let e=this._gl;e.bindBuffer(e.ARRAY_BUFFER,this.buffer),t?e.bufferSubData(e.ARRAY_BUFFER,0,this.bufferData,0,t):e.bufferData(e.ARRAY_BUFFER,this.bufferData,"static"===this.type?e.STATIC_DRAW:e.DYNAMIC_DRAW)}}/**
 * Helper around creating vertex attributes in a given [[VertexBuffer]], this is useful for describing
 * the memory layout for your vertices inside a particular buffer
 *
 * Note: This helper assumes interleaved attributes in one [[VertexBuffer]], not many.
 *
 * Working with `gl.vertexAttribPointer` can be tricky, and this attempts to double check you
 */class eK{get vertexBuffer(){return this._vertexBuffer}get attributes(){return this._attributes}constructor(t){this._logger=t7.getInstance(),this._layout=[],this._attributes=[],this._vertexTotalSizeBytes=0;let{gl:e,shader:i,vertexBuffer:s,attributes:r}=t;this._gl=e,this._vertexBuffer=s,this._attributes=r,this._shader=i,i&&this.initialize()}/**
     * Total number of bytes that the vertex will take up
     */get totalVertexSizeBytes(){return this._vertexTotalSizeBytes}set shader(t){t&&this._shader!==t&&(this._shader=t,this.initialize())}get shader(){return this._shader}/**
     * Layouts need shader locations and must be bound to a shader
     */initialize(){if(!this._shader)return;if(!this._shader.compiled)throw Error("Shader not compiled, shader must be compiled before defining a vertex layout");this._layout.length=0;let t=this._shader.attributes;for(let e of this._attributes){let i=t[e[0]];if(!i)throw Error(`The attribute named: ${e[0]} size ${e[1]} not found in the shader source code:
 ${this._shader.vertexSource}`);if(i.size!==e[1])throw Error(`VertexLayout size definition for attribute: [${e[0]}, ${e[1]}], doesnt match shader source size ${i.size}:
 ${this._shader.vertexSource}`);this._layout.push(i)}// calc size
let e=0;for(let t of this._layout){let i=eV(this._gl,t.glType);this._vertexTotalSizeBytes+=i*t.size,e+=t.size}this._vertexBuffer.bufferData.length%e!=0&&this._logger.warn(`The vertex component size (${e})  does divide evenly into the specified vertex buffer (${this._vertexBuffer.bufferData.length})`)}/**
     * Bind this layout with it's associated vertex buffer
     *
     * @param uploadBuffer Optionally indicate you wish to upload the buffer to the GPU associated with this layout
     */use(t=!1,e){if(!this._shader)throw Error("No shader is associated with this vertex layout, a shader must be set");let i=this._gl;if(!this._shader.isCurrentlyBound())throw Error("Shader associated with this vertex layout is not active! Call shader.use() before layout.use()");this._vertexBuffer.bind(),t&&this._vertexBuffer.upload(e);let s=0;// TODO switch to VAOs if the extension is
for(let t of this._layout)i.vertexAttribPointer(t.location,t.size,t.glType,t.normalized,this.totalVertexSizeBytes,s),i.enableVertexAttribArray(t.location),s+=eV(i,t.glType)*t.size}}class eY{static clear(){eY.DrawCallCount=0,eY.DrawnImagesCount=0}}eY.DrawCallCount=0,eY.DrawnImagesCount=0;class ej{constructor(){this.type="ex.line",this.priority=0,this._maxLines=10922,this._vertexIndex=0,this._lineCount=0}initialize(t,e){this._gl=t,this._context=e,this._shader=new eX({gl:t,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\nin vec4 a_color;\r\n\r\nout lowp vec4 v_color;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Passthrough the color\r\n   v_color = a_color;\r\n}",fragmentSource:"#version 300 es\r\nprecision mediump float;\r\n\r\n// Color\r\nin lowp vec4 v_color;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  fragColor = v_color;\r\n}"}),this._shader.compile(),this._shader.use(),this._shader.setUniformMatrix("u_matrix",this._context.ortho),this._vertexBuffer=new eZ({gl:t,size:12*this._maxLines,type:"dynamic"}),this._layout=new eK({gl:t,vertexBuffer:this._vertexBuffer,shader:this._shader,attributes:[["a_position",2],["a_color",4]]})}draw(t,e,i){this._isFull()&&this.flush(),this._lineCount++;let s=this._context.getTransform(),r=s.multiply(t),n=s.multiply(e),o=this._vertexBuffer.bufferData;// Start
o[this._vertexIndex++]=r.x,o[this._vertexIndex++]=r.y,o[this._vertexIndex++]=i.r/255,o[this._vertexIndex++]=i.g/255,o[this._vertexIndex++]=i.b/255,o[this._vertexIndex++]=i.a,// End
o[this._vertexIndex++]=n.x,o[this._vertexIndex++]=n.y,o[this._vertexIndex++]=i.r/255,o[this._vertexIndex++]=i.g/255,o[this._vertexIndex++]=i.b/255,o[this._vertexIndex++]=i.a}_isFull(){return this._lineCount>=this._maxLines}hasPendingDraws(){return 0!==this._lineCount}flush(){// nothing to draw early exit
if(0===this._lineCount)return;let t=this._gl;this._shader.use(),this._layout.use(!0),this._shader.setUniformMatrix("u_matrix",this._context.ortho),t.drawArrays(t.LINES,0,2*this._lineCount),eY.DrawnImagesCount+=this._lineCount,eY.DrawCallCount++,// reset
this._vertexIndex=0,this._lineCount=0}}class eQ{constructor(){this.type="ex.point",this.priority=0,this._maxPoints=10922,this._pointCount=0,this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,this._shader=new eX({gl:t,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\nin vec4 a_color;\r\nin float a_size;\r\nout lowp vec4 v_color;\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n  gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n  gl_PointSize = a_size * 2.0;\r\n  v_color = a_color;\r\n}",fragmentSource:'#version 300 es\r\n\r\nprecision mediump float;\r\nin lowp vec4 v_color;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  float r = 0.0, delta = 0.0, alpha = 1.0;\r\n  vec2 cxy = 2.0 * gl_PointCoord - 1.0;\r\n  r = dot(cxy, cxy);\r\n\r\n  delta = fwidth(r);\r\n  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);\r\n  // "premultiply" the color by alpha\r\n  vec4 color = v_color;\r\n  color.a = color.a * alpha;\r\n  color.rgb = color.rgb * color.a;\r\n  fragColor = color;\r\n}'}),this._shader.compile(),this._shader.use(),this._shader.setUniformMatrix("u_matrix",this._context.ortho),this._buffer=new eZ({gl:t,size:7*this._maxPoints,type:"dynamic"}),this._layout=new eK({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_color",4],["a_size",1]]})}draw(t,e,i){this._isFull()&&this.flush(),this._pointCount++;let s=this._context.getTransform(),r=this._context.opacity,n=this._context.snapToPixel,o=s.multiply(t);n&&(o.x=~~(o.x+e8),o.y=~~(o.y+e8));let a=this._buffer.bufferData;a[this._vertexIndex++]=o.x,a[this._vertexIndex++]=o.y,a[this._vertexIndex++]=e.r/255,a[this._vertexIndex++]=e.g/255,a[this._vertexIndex++]=e.b/255,a[this._vertexIndex++]=e.a*r,a[this._vertexIndex++]=i*Math.max(s.getScaleX(),s.getScaleY())}_isFull(){return this._pointCount>=this._maxPoints}hasPendingDraws(){return 0!==this._pointCount}flush(){// nothing to draw early exit
if(0===this._pointCount)return;let t=this._gl;this._shader.use(),this._layout.use(!0),this._shader.setUniformMatrix("u_matrix",this._context.ortho),t.drawArrays(t.POINTS,0,this._pointCount),eY.DrawnImagesCount+=this._pointCount,eY.DrawCallCount++,this._pointCount=0,this._vertexIndex=0}}/**
 * This is responsible for painting the entire screen during the render passes
 */class eJ{constructor(t){this._gl=t,this._shader=new eX({gl:t,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\nin vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\nvoid main() {\r\n  gl_Position = vec4(a_position, 0.0, 1.0);\r\n\r\n  // Pass the texcoord to the fragment shader.\r\n  v_texcoord = a_texcoord;\r\n}",fragmentSource:"#version 300 es\r\nprecision mediump float;\r\n\r\n// Passed in from the vertex shader.\r\nin vec2 v_texcoord;\r\n\r\n// The texture.\r\nuniform sampler2D u_texture;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n   fragColor = texture(u_texture, v_texcoord);\r\n}"}),this._shader.compile(),// Setup memory layout
this._buffer=new eZ({gl:t,type:"static",// clip space quad + uv since we don't need a camera
data:new Float32Array([-1,-1,0,0,-1,1,0,1,1,-1,1,0,1,-1,1,0,-1,1,0,1,1,1,1,1])}),this._layout=new eK({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_texcoord",2]]}),this._buffer.upload()}renderWithPostProcessor(t){let e=this._gl;t.getShader().use(),t.getLayout().use(),e.drawArrays(e.TRIANGLES,0,6)}renderToScreen(){let t=this._gl;this._shader.use(),this._layout.use(),t.drawArrays(t.TRIANGLES,0,6)}}/**
 * Helper that defines and index buffer for quad geometry
 *
 * Index buffers allow you to save space in vertex buffers when you share vertices in geometry
 * it is almost always worth it in terms of performance to use an index buffer.
 */class e0{/**
     * @param gl WebGL2RenderingContext this layout will be attached to, these cannot be reused across contexts.
     * @param numberOfQuads Specify the max number of quads you want to draw
     * @param useUint16 Optionally force a uint16 buffer
     */constructor(t,e,i){this._logger=t7.getInstance(),this._gl=t,this.buffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.buffer);let s=6*e;if(i){let i=Math.floor(16383.5);// max quads
this.bufferGlType=t.UNSIGNED_SHORT,this.bufferData=new Uint16Array(s),e>i&&this._logger.warn(`Total quads exceeds hardware index buffer limit (uint16), max(${i}) requested quads(${e})`)}else this.bufferData=new Uint32Array(s);let r=0;for(let t=0;t<s;t+=6)// first triangle
this.bufferData[t+0]=r+0,this.bufferData[t+1]=r+1,this.bufferData[t+2]=r+2,// second triangle
this.bufferData[t+3]=r+2,this.bufferData[t+4]=r+1,this.bufferData[t+5]=r+3,r+=4;t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.bufferData,t.STATIC_DRAW)}get size(){return this.bufferData.length}/**
     * Upload data to the GPU
     */upload(){let t=this._gl;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.buffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.bufferData,t.STATIC_DRAW)}/**
     * Bind this index buffer
     */bind(){let t=this._gl;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.buffer)}}class e1{constructor(){this.type="ex.image",this.priority=0,this._maxImages=10922,this._maxTextures=0,// Per flush vars
this._imageCount=0,this._textures=[],this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,// Transform shader source
// FIXME: PIXEL 6 complains `ERROR: Expression too complex.` if we use it's reported max texture units, 125 seems to work for now...
this._maxTextures=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),125);let i=this._transformFragmentSource("#version 300 es\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_texcoord;\r\n\r\n// Texture index\r\nin lowp float v_textureIndex;\r\n\r\n// Textures in the current draw\r\nuniform sampler2D u_textures[%%count%%];\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nin vec4 v_tint;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n   // In order to support the most efficient sprite batching, we have multiple\r\n   // textures loaded into the gpu (usually 8) this picker logic skips over textures\r\n   // that do not apply to a particular sprite.\r\n\r\n   vec4 color = vec4(1.0, 0, 0, 1.0);\r\n\r\n   // GLSL is templated out to pick the right texture and set the vec4 color\r\n   %%texture_picker%%\r\n\r\n   color.rgb = color.rgb * v_opacity;\r\n   color.a = color.a * v_opacity;\r\n   fragColor = color * v_tint;\r\n}",this._maxTextures);// Compile shader
this._shader=new eX({gl:t,fragmentSource:i,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\n// UV coordinate\r\nin vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\n// Texture number\r\nin lowp float a_textureIndex;\r\nout lowp float v_textureIndex;\r\n\r\nin vec4 a_tint;\r\nout vec4 v_tint;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the UV coord to the fragment shader\r\n   v_texcoord = a_texcoord;\r\n   // Pass through the texture number to the fragment shader\r\n   v_textureIndex = a_textureIndex;\r\n   // Pass through the tint\r\n   v_tint = a_tint;\r\n}"}),this._shader.compile(),// setup uniforms
this._shader.use(),this._shader.setUniformMatrix("u_matrix",e.ortho),// Initialize texture slots to [0, 1, 2, 3, 4, .... maxGPUTextures]
this._shader.setUniformIntArray("u_textures",[...Array(this._maxTextures)].map((t,e)=>e)),// Setup memory layout
this._buffer=new eZ({gl:t,size:40*this._maxImages,type:"dynamic"}),this._layout=new eK({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_opacity",1],["a_texcoord",2],["a_textureIndex",1],["a_tint",4]]}),// Setup index buffer
this._quads=new e0(t,this._maxImages,!0)}_transformFragmentSource(t,e){let i=t.replace("%%count%%",e.toString()),s="";for(let t=0;t<e;t++)0===t?s+=`if (v_textureIndex <= ${t}.5) {
`:s+=`   else if (v_textureIndex <= ${t}.5) {
`,s+=`      color = texture(u_textures[${t}], v_texcoord);
   }
`;return i.replace("%%texture_picker%%",s)}_addImageAsTexture(t){let e=t.getAttribute("filtering"),i=null;(e===G.Blended||e===G.Pixel)&&(i=e);let s="true"===t.getAttribute("forceUpload"),r=this._context.textureLoader.load(t,i,s);// remove force attribute after upload
t.removeAttribute("forceUpload"),-1===this._textures.indexOf(r)&&this._textures.push(r)}_bindTextures(t){// Bind textures in the correct order
for(let e=0;e<this._maxTextures;e++)t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this._textures[e]||this._textures[0])}_getTextureIdForImage(t){if(t){let e=this._context.textureLoader.get(t);return this._textures.indexOf(e)}return -1}_isFull(){return this._imageCount>=this._maxImages||this._textures.length>=this._maxTextures}draw(t,e,i,s,r,n,o,a,h){var l,d,c,u;this._isFull()&&this.flush(),this._imageCount++,// This creates and uploads the texture if not already done
this._addImageAsTexture(t);let p=(null==t?void 0:t.width)||s||0,_=(null==t?void 0:t.height)||r||0,g=[0,0,null!==(l=null!=s?s:null==t?void 0:t.width)&&void 0!==l?l:0,null!==(d=null!=r?r:null==t?void 0:t.height)&&void 0!==d?d:0],m=[null!=e?e:1,null!=i?i:1];void 0!==n&&void 0!==o&&void 0!==a&&void 0!==h&&(g=[null!=e?e:1,null!=i?i:1,null!==(c=null!=s?s:null==t?void 0:t.width)&&void 0!==c?c:0,null!==(u=null!=r?r:null==t?void 0:t.height)&&void 0!==u?u:0],m=[n,o],p=a,_=h),e=g[0],i=g[1];let f=g[2],v=g[3],y=this._context.getTransform(),x=this._context.opacity,w=this._context.snapToPixel,b=em(m[0],m[1]),C=em(m[0]+p,m[1]),A=em(m[0],m[1]+_),S=em(m[0]+p,m[1]+_);b=y.multiply(b),C=y.multiply(C),A=y.multiply(A),S=y.multiply(S),w&&(b.x=~~(b.x+e8),b.y=~~(b.y+e8),C.x=~~(C.x+e8),C.y=~~(C.y+e8),A.x=~~(A.x+e8),A.y=~~(A.y+e8),S.x=~~(S.x+e8),S.y=~~(S.y+e8));let T=this._context.tint,E=this._getTextureIdForImage(t),P=t.width||p,I=t.height||_,M=e/P,k=i/I,R=(e+f-.01)/P,D=(i+v-.01)/I,B=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
B[this._vertexIndex++]=b.x,B[this._vertexIndex++]=b.y,B[this._vertexIndex++]=x,B[this._vertexIndex++]=M,B[this._vertexIndex++]=k,B[this._vertexIndex++]=E,B[this._vertexIndex++]=T.r/255,B[this._vertexIndex++]=T.g/255,B[this._vertexIndex++]=T.b/255,B[this._vertexIndex++]=T.a,// (0, 1) - 1
B[this._vertexIndex++]=A.x,B[this._vertexIndex++]=A.y,B[this._vertexIndex++]=x,B[this._vertexIndex++]=M,B[this._vertexIndex++]=D,B[this._vertexIndex++]=E,B[this._vertexIndex++]=T.r/255,B[this._vertexIndex++]=T.g/255,B[this._vertexIndex++]=T.b/255,B[this._vertexIndex++]=T.a,// (1, 0) - 2
B[this._vertexIndex++]=C.x,B[this._vertexIndex++]=C.y,B[this._vertexIndex++]=x,B[this._vertexIndex++]=R,B[this._vertexIndex++]=k,B[this._vertexIndex++]=E,B[this._vertexIndex++]=T.r/255,B[this._vertexIndex++]=T.g/255,B[this._vertexIndex++]=T.b/255,B[this._vertexIndex++]=T.a,// (1, 1) - 3
B[this._vertexIndex++]=S.x,B[this._vertexIndex++]=S.y,B[this._vertexIndex++]=x,B[this._vertexIndex++]=R,B[this._vertexIndex++]=D,B[this._vertexIndex++]=E,B[this._vertexIndex++]=T.r/255,B[this._vertexIndex++]=T.g/255,B[this._vertexIndex++]=T.b/255,B[this._vertexIndex++]=T.a}hasPendingDraws(){return 0!==this._imageCount}flush(){// nothing to draw early exit
if(0===this._imageCount)return;let t=this._gl;// Bind the shader
this._shader.use(),// Bind the memory layout and upload data
this._layout.use(!0,40*this._imageCount),// Update ortho matrix uniform
this._shader.setUniformMatrix("u_matrix",this._context.ortho),// Bind textures to
this._bindTextures(t),// Bind index buffer
this._quads.bind(),// Draw all the quads
t.drawElements(t.TRIANGLES,6*this._imageCount,this._quads.bufferGlType,0),eY.DrawnImagesCount+=this._imageCount,eY.DrawCallCount++,// Reset
this._imageCount=0,this._vertexIndex=0,this._textures.length=0}}class e2{constructor(){this.type="ex.rectangle",this.priority=0,this._maxRectangles=10922,this._rectangleCount=0,this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,// https://stackoverflow.com/questions/59197671/glsl-rounded-rectangle-with-variable-border
this._shader=new eX({gl:t,fragmentSource:"#version 300 es\r\n\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_uv;\r\n\r\nin vec2 v_size; // in pixels\r\n\r\n// Color coord to blend with image\r\nin lowp vec4 v_color;\r\n\r\n// Stroke color if used\r\nin lowp vec4 v_strokeColor;\r\n\r\n// Stroke thickness if used\r\nin lowp float v_strokeThickness; // in pixels\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n    // modified from https://stackoverflow.com/questions/59197671/glsl-rounded-rectangle-with-variable-border\r\n    vec2 uv = v_uv;\r\n    vec2 fragCoord = uv * v_size;\r\n    float maxX = v_size.x - v_strokeThickness;\r\n    float minX = v_strokeThickness;\r\n    float maxY = v_size.y - v_strokeThickness;\r\n    float minY = v_strokeThickness;\r\n\r\n    if (fragCoord.x < maxX && fragCoord.x > minX &&\r\n        fragCoord.y < maxY && fragCoord.y > minY) {\r\n      fragColor = v_color;\r\n    } else {\r\n      fragColor = v_strokeColor;\r\n    }\r\n    fragColor.a *= v_opacity;\r\n    fragColor.rgb *= fragColor.a;\r\n\r\n    // vec2 v2CenteredPos     = abs(fragCoord - v_size.xy / 2.0);\r\n    // vec2 v2HalfShapeSizePx = v_size.xy/2.0 - v_strokeThickness/2.0;\r\n\r\n    // float fHalfBorderDist      = 0.0;\r\n    // float fHalfBorderThickness = 0.0;\r\n\r\n    // if (fragCoord.x > max(v_radius, v_strokeThickness) && \r\n    //     fragCoord.x < v_size.x - max(v_radius, v_strokeThickness))\r\n    // {\r\n    //     fHalfBorderDist      = v2CenteredPos.y - v2HalfShapeSizePx.y;\r\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\r\n    // }\r\n    // else if (fragCoord.y > max(v_radius, v_strokeThickness) && \r\n    //          fragCoord.y < v_size.y - max(v_radius, v_strokeThickness))\r\n    // {\r\n    //     fHalfBorderDist      = v2CenteredPos.x - v2HalfShapeSizePx.x;\r\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\r\n    // }\r\n    // else\r\n    // {\r\n    //     vec2 edgeVec = max(vec2(0.0), v_radius - vec2(\r\n    //         uv.x > 0.5 ? v_size.x - fragCoord.x : fragCoord.x,\r\n    //         uv.y > 0.5 ? v_size.y - fragCoord.y : fragCoord.y));\r\n        \r\n    //     float ellipse_ab    = v_radius-v_strokeThickness;\r\n    //     vec2 ellipse_isect = (v_strokeThickness > v_radius || v_strokeThickness > v_radius) ? vec2(0.0) :\r\n    //                             edgeVec.xy * ellipse_ab*ellipse_ab / length(ellipse_ab*edgeVec.yx); \r\n            \r\n    //     fHalfBorderThickness = (v_radius - length(ellipse_isect)) / 2.0;\r\n    //     fHalfBorderDist      = length(edgeVec) - (v_radius - fHalfBorderThickness);\r\n    // }\r\n\r\n    // vec4 v4FromColor = v_strokeColor;\r\n    // v4FromColor.rgb *= v4FromColor.a;\r\n    // vec4 v4ToColor   = vec4(0.0); // background color is transparent\r\n    // if (fHalfBorderDist < 0.0) {\r\n    //     v4ToColor = v_color;\r\n    //     v4ToColor.rgb *= v4ToColor.a;\r\n    // }\r\n\r\n    // float mixPct = abs(fHalfBorderDist) - fHalfBorderThickness;\r\n\r\n    // vec4 finalColor = mix(v4FromColor, v4ToColor, mixPct);\r\n    // gl_FragColor = finalColor;\r\n}",vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\n// UV coordinate\r\nin vec2 a_uv;\r\nout vec2 v_uv;\r\n\r\nin vec2 a_size;\r\nout vec2 v_size;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\nin vec4 a_color;\r\nout vec4 v_color;\r\n\r\nin vec4 a_strokeColor;\r\nout vec4 v_strokeColor;\r\n\r\nin float a_strokeThickness;\r\nout float v_strokeThickness;\r\n\r\nuniform mat4 u_matrix;\r\n\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through UV coords\r\n   v_uv = a_uv;\r\n   // Pass through size\r\n   v_size = a_size;\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the color to the fragment shader\r\n   v_color = a_color;\r\n   // Pass through the stroke color to the fragment shader\r\n   v_strokeColor = a_strokeColor;\r\n   // Pass through the stroke thickenss to the fragment shader\r\n   v_strokeThickness = a_strokeThickness;\r\n}"}),this._shader.compile(),// setup uniforms
this._shader.use(),this._shader.setUniformMatrix("u_matrix",e.ortho),this._buffer=new eZ({gl:t,size:64*this._maxRectangles,type:"dynamic"}),this._layout=new eK({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_uv",2],["a_size",2],["a_opacity",1],["a_color",4],["a_strokeColor",4],["a_strokeThickness",1]]}),this._quads=new e0(t,this._maxRectangles,!0)}_isFull(){return this._rectangleCount>=this._maxRectangles}draw(...t){t[0]instanceof eg&&t[1]instanceof eg?this.drawLine.apply(this,t):this.drawRectangle.apply(this,t)}drawLine(t,e,i,s=1){this._isFull()&&this.flush(),this._rectangleCount++;// transform based on current context
let r=this._context.getTransform(),n=this._context.opacity,o=this._context.snapToPixel,a=e.sub(t),h=a.size,l=a.normalize().perpendicular(),d=s/2,c=r.multiply(l.scale(d).add(t)),u=r.multiply(l.scale(-d).add(t)),p=r.multiply(l.scale(d).add(e)),_=r.multiply(l.scale(-d).add(e));o&&(c.x=~~(c.x+e8),c.y=~~(c.y+e8),p.x=~~(p.x+e8),p.y=~~(p.y+e8),u.x=~~(u.x+e8),u.y=~~(u.y+e8),_.x=~~(_.x+e8),_.y=~~(_.y+e8));let g=ef.Transparent,m=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
m[this._vertexIndex++]=c.x,m[this._vertexIndex++]=c.y,m[this._vertexIndex++]=0,m[this._vertexIndex++]=0,m[this._vertexIndex++]=h,m[this._vertexIndex++]=s,m[this._vertexIndex++]=n,m[this._vertexIndex++]=i.r/255,m[this._vertexIndex++]=i.g/255,m[this._vertexIndex++]=i.b/255,m[this._vertexIndex++]=i.a,m[this._vertexIndex++]=g.r/255,m[this._vertexIndex++]=g.g/255,m[this._vertexIndex++]=g.b/255,m[this._vertexIndex++]=g.a,m[this._vertexIndex++]=0,// (0, 1) - 1
m[this._vertexIndex++]=u.x,m[this._vertexIndex++]=u.y,m[this._vertexIndex++]=0,m[this._vertexIndex++]=1,m[this._vertexIndex++]=h,m[this._vertexIndex++]=s,m[this._vertexIndex++]=n,m[this._vertexIndex++]=i.r/255,m[this._vertexIndex++]=i.g/255,m[this._vertexIndex++]=i.b/255,m[this._vertexIndex++]=i.a,m[this._vertexIndex++]=g.r/255,m[this._vertexIndex++]=g.g/255,m[this._vertexIndex++]=g.b/255,m[this._vertexIndex++]=g.a,m[this._vertexIndex++]=0,// (1, 0) - 2
m[this._vertexIndex++]=p.x,m[this._vertexIndex++]=p.y,m[this._vertexIndex++]=1,m[this._vertexIndex++]=0,m[this._vertexIndex++]=h,m[this._vertexIndex++]=s,m[this._vertexIndex++]=n,m[this._vertexIndex++]=i.r/255,m[this._vertexIndex++]=i.g/255,m[this._vertexIndex++]=i.b/255,m[this._vertexIndex++]=i.a,m[this._vertexIndex++]=g.r/255,m[this._vertexIndex++]=g.g/255,m[this._vertexIndex++]=g.b/255,m[this._vertexIndex++]=g.a,m[this._vertexIndex++]=0,// (1, 1) - 3
m[this._vertexIndex++]=_.x,m[this._vertexIndex++]=_.y,m[this._vertexIndex++]=1,m[this._vertexIndex++]=1,m[this._vertexIndex++]=h,m[this._vertexIndex++]=s,m[this._vertexIndex++]=n,m[this._vertexIndex++]=i.r/255,m[this._vertexIndex++]=i.g/255,m[this._vertexIndex++]=i.b/255,m[this._vertexIndex++]=i.a,m[this._vertexIndex++]=g.r/255,m[this._vertexIndex++]=g.g/255,m[this._vertexIndex++]=g.b/255,m[this._vertexIndex++]=g.a,m[this._vertexIndex++]=0}drawRectangle(t,e,i,s,r=ef.Transparent,n=0){this._isFull()&&this.flush(),this._rectangleCount++;// transform based on current context
let o=this._context.getTransform(),a=this._context.opacity,h=this._context.snapToPixel,l=o.multiply(t.add(em(0,0))),d=o.multiply(t.add(em(e,0))),c=o.multiply(t.add(em(e,i))),u=o.multiply(t.add(em(0,i)));h&&(l.x=~~(l.x+e8),l.y=~~(l.y+e8),d.x=~~(d.x+e8),d.y=~~(d.y+e8),u.x=~~(u.x+e8),u.y=~~(u.y+e8),c.x=~~(c.x+e8),c.y=~~(c.y+e8));// update data
let p=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
p[this._vertexIndex++]=l.x,p[this._vertexIndex++]=l.y,p[this._vertexIndex++]=0,p[this._vertexIndex++]=0,p[this._vertexIndex++]=e,p[this._vertexIndex++]=i,p[this._vertexIndex++]=a,p[this._vertexIndex++]=s.r/255,p[this._vertexIndex++]=s.g/255,p[this._vertexIndex++]=s.b/255,p[this._vertexIndex++]=s.a,p[this._vertexIndex++]=r.r/255,p[this._vertexIndex++]=r.g/255,p[this._vertexIndex++]=r.b/255,p[this._vertexIndex++]=r.a,p[this._vertexIndex++]=n,// (0, 1) - 1
p[this._vertexIndex++]=u.x,p[this._vertexIndex++]=u.y,p[this._vertexIndex++]=0,p[this._vertexIndex++]=1,p[this._vertexIndex++]=e,p[this._vertexIndex++]=i,p[this._vertexIndex++]=a,p[this._vertexIndex++]=s.r/255,p[this._vertexIndex++]=s.g/255,p[this._vertexIndex++]=s.b/255,p[this._vertexIndex++]=s.a,p[this._vertexIndex++]=r.r/255,p[this._vertexIndex++]=r.g/255,p[this._vertexIndex++]=r.b/255,p[this._vertexIndex++]=r.a,p[this._vertexIndex++]=n,// (1, 0) - 2
p[this._vertexIndex++]=d.x,p[this._vertexIndex++]=d.y,p[this._vertexIndex++]=1,p[this._vertexIndex++]=0,p[this._vertexIndex++]=e,p[this._vertexIndex++]=i,p[this._vertexIndex++]=a,p[this._vertexIndex++]=s.r/255,p[this._vertexIndex++]=s.g/255,p[this._vertexIndex++]=s.b/255,p[this._vertexIndex++]=s.a,p[this._vertexIndex++]=r.r/255,p[this._vertexIndex++]=r.g/255,p[this._vertexIndex++]=r.b/255,p[this._vertexIndex++]=r.a,p[this._vertexIndex++]=n,// (1, 1) - 3
p[this._vertexIndex++]=c.x,p[this._vertexIndex++]=c.y,p[this._vertexIndex++]=1,p[this._vertexIndex++]=1,p[this._vertexIndex++]=e,p[this._vertexIndex++]=i,p[this._vertexIndex++]=a,p[this._vertexIndex++]=s.r/255,p[this._vertexIndex++]=s.g/255,p[this._vertexIndex++]=s.b/255,p[this._vertexIndex++]=s.a,p[this._vertexIndex++]=r.r/255,p[this._vertexIndex++]=r.g/255,p[this._vertexIndex++]=r.b/255,p[this._vertexIndex++]=r.a,p[this._vertexIndex++]=n}hasPendingDraws(){return 0!==this._rectangleCount}flush(){// nothing to draw early exit
if(0===this._rectangleCount)return;let t=this._gl;// Bind the shader
this._shader.use(),// Bind the memory layout and upload data
this._layout.use(!0),// Update ortho matrix uniform
this._shader.setUniformMatrix("u_matrix",this._context.ortho),// Bind index buffer
this._quads.bind(),// Draw all the quads
t.drawElements(t.TRIANGLES,6*this._rectangleCount,this._quads.bufferGlType,0),eY.DrawnImagesCount+=this._rectangleCount,eY.DrawCallCount++,// Reset
this._rectangleCount=0,this._vertexIndex=0}}class e5{constructor(){this.type="ex.circle",this.priority=0,this._maxCircles=10922,this._circleCount=0,this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,this._shader=new eX({gl:t,fragmentSource:"#version 300 es\r\nprecision highp float;\r\n\r\n// UV coord\r\nin vec2 v_uv;\r\n\r\n// Color coord to blend with image\r\nin lowp vec4 v_color;\r\n\r\n// Stroke color if used\r\nin lowp vec4 v_strokeColor;\r\n\r\n// Stroke thickness if used\r\nin lowp float v_strokeThickness;\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  // make (0, 0) the center the uv \r\n  vec2 uv = v_uv * 2.0 - 1.0;\r\n\r\n  vec4 color = v_color;\r\n  vec4 strokeColor = v_strokeColor;\r\n\r\n  // circle border is at radius 1.0 \r\n  // dist is > 0 when inside the circle \r\n  float d = length(uv);\r\n  float dist = 1.0 - length(uv);\r\n\r\n  // Fade based on fwidth\r\n  float fade = fwidth(dot(uv, uv));\r\n\r\n  // if dist is greater than 0 step to 1;\r\n  // when we cross this 0 threshold add a smooth fade\r\n  float fill = smoothstep(-fade/2.0, fade/2.0, dist);\r\n\r\n  // if dist is greater than the stroke thickness step to 1\r\n  float stroke = 1.0 - smoothstep(v_strokeThickness, v_strokeThickness + fade, dist);\r\n\r\n  strokeColor.a *= fill * stroke;\r\n  strokeColor.rgb *= strokeColor.a;\r\n\r\n  color.a *= fill * (1.0 - stroke);\r\n  color.rgb *= color.a;\r\n\r\n  vec4 finalColor = mix(vec4(0.0), (color + strokeColor), fill);\r\n  finalColor.rgb = finalColor.rgb * v_opacity;\r\n  finalColor.a = finalColor.a * v_opacity;\r\n  fragColor = finalColor;\r\n}",vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\n// UV coordinate\r\nin vec2 a_uv;\r\nout vec2 v_uv;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\nin vec4 a_color;\r\nout vec4 v_color;\r\n\r\nin vec4 a_strokeColor;\r\nout vec4 v_strokeColor;\r\n\r\nin float a_strokeThickness;\r\nout float v_strokeThickness;\r\n\r\nuniform mat4 u_matrix;\r\n\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through UV coords\r\n   v_uv = a_uv;\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the color to the fragment shader\r\n   v_color = a_color;\r\n   // Pass through the stroke color to the fragment shader\r\n   v_strokeColor = a_strokeColor;\r\n   // Pass through the stroke thickenss to the fragment shader\r\n   v_strokeThickness = a_strokeThickness;\r\n}"}),this._shader.compile(),// setup uniforms
this._shader.use(),this._shader.setUniformMatrix("u_matrix",e.ortho),this._buffer=new eZ({gl:t,size:56*this._maxCircles,type:"dynamic"}),this._layout=new eK({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_uv",2],["a_opacity",1],["a_color",4],["a_strokeColor",4],["a_strokeThickness",1]]}),this._quads=new e0(t,this._maxCircles,!0)}_isFull(){return this._circleCount>=this._maxCircles}draw(t,e,i,s=ef.Transparent,r=0){this._isFull()&&this.flush(),this._circleCount++;// transform based on current context
let n=this._context.getTransform(),o=this._context.opacity,a=this._context.snapToPixel,h=n.multiply(t.add(em(-e,-e))),l=n.multiply(t.add(em(e,-e))),d=n.multiply(t.add(em(e,e))),c=n.multiply(t.add(em(-e,e)));a&&(h.x=~~(h.x+e8),h.y=~~(h.y+e8),l.x=~~(l.x+e8),l.y=~~(l.y+e8),c.x=~~(c.x+e8),c.y=~~(c.y+e8),d.x=~~(d.x+e8),d.y=~~(d.y+e8));// update data
let u=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
u[this._vertexIndex++]=h.x,u[this._vertexIndex++]=h.y,u[this._vertexIndex++]=0,u[this._vertexIndex++]=0,u[this._vertexIndex++]=o,u[this._vertexIndex++]=i.r/255,u[this._vertexIndex++]=i.g/255,u[this._vertexIndex++]=i.b/255,u[this._vertexIndex++]=i.a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r/e,// (0, 1) - 1
u[this._vertexIndex++]=c.x,u[this._vertexIndex++]=c.y,u[this._vertexIndex++]=0,u[this._vertexIndex++]=1,u[this._vertexIndex++]=o,u[this._vertexIndex++]=i.r/255,u[this._vertexIndex++]=i.g/255,u[this._vertexIndex++]=i.b/255,u[this._vertexIndex++]=i.a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r/e,// (1, 0) - 2
u[this._vertexIndex++]=l.x,u[this._vertexIndex++]=l.y,u[this._vertexIndex++]=1,u[this._vertexIndex++]=0,u[this._vertexIndex++]=o,u[this._vertexIndex++]=i.r/255,u[this._vertexIndex++]=i.g/255,u[this._vertexIndex++]=i.b/255,u[this._vertexIndex++]=i.a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r/e,// (1, 1) - 3
u[this._vertexIndex++]=d.x,u[this._vertexIndex++]=d.y,u[this._vertexIndex++]=1,u[this._vertexIndex++]=1,u[this._vertexIndex++]=o,u[this._vertexIndex++]=i.r/255,u[this._vertexIndex++]=i.g/255,u[this._vertexIndex++]=i.b/255,u[this._vertexIndex++]=i.a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r/e}hasPendingDraws(){return 0!==this._circleCount}flush(){// nothing to draw early exit
if(0===this._circleCount)return;let t=this._gl;// Bind the shader
this._shader.use(),// Bind the memory layout and upload data
this._layout.use(!0),// Update ortho matrix uniform
this._shader.setUniformMatrix("u_matrix",this._context.ortho),// Bind index buffer
this._quads.bind(),// Draw all the quads
t.drawElements(t.TRIANGLES,6*this._circleCount,this._quads.bufferGlType,0),eY.DrawnImagesCount+=this._circleCount,eY.DrawCallCount++,// Reset
this._circleCount=0,this._vertexIndex=0}}class e3{constructor(t,e,i=100){this.builder=t,this.recycler=e,this.maxObjects=i,this.totalAllocations=0,this.index=0,this.objects=[],this.disableWarnings=!1,this._logger=t7.getInstance()}preallocate(){for(let t=0;t<this.maxObjects;t++)this.objects[t]=this.builder()}/**
     * Use many instances out of the in the context and return all to the pool.
     *
     * By returning values out of the context they will be un-hooked from the pool and are free to be passed to consumers
     * @param context
     */using(t){let e=t(this);return e?this.done(...e):this.done()}/**
     * Use a single instance out of th pool and immediately return it to the pool
     * @param context
     */borrow(t){let e=this.get();t(e),this.index--}/**
     * Retrieve a value from the pool, will allocate a new instance if necessary or recycle from the pool
     * @param args
     */get(...t){if(this.index===this.maxObjects&&(this.disableWarnings||this._logger.warn("Max pooled objects reached, possible memory leak? Doubling"),this.maxObjects=2*this.maxObjects),this.objects[this.index])return this.recycler(this.objects[this.index++],...t);{// New allocation
this.totalAllocations++;let e=this.objects[this.index++]=this.builder(...t);return e}}done(...t){for(let e of(// All objects in pool now considered "free"
this.index=0,t)){let t=this.objects.indexOf(e);// Build a new object to take the pool place
this.objects[t]=this.builder(),this.totalAllocations++}return t}}class e4{constructor(){this.z=0,this.priority=0,this.transform=eP.identity(),this.state={z:0,opacity:1,tint:ef.White,material:null}}}let e9=`#version 300 es
in vec2 a_position;

in vec2 a_uv;
out vec2 v_uv;

uniform mat4 u_matrix;
uniform mat4 u_transform;

void main() {
  // Set the vertex position using the ortho & transform matrix
  gl_Position = u_matrix * u_transform * vec4(a_position, 0.0, 1.0);

  // Pass through the UV coord to the fragment shader
  v_uv = a_uv;
}
`;class e6{constructor(t){this._color=ef.Transparent,this._initialized=!1;let{color:e,name:i,vertexSource:s,fragmentSource:r}=t;this._name=i,this._vertexSource=null!=s?s:e9,this._fragmentSource=r,this._color=null!=e?e:this._color}initialize(t,e){this._initialized||(this._shader=e.createShader({vertexSource:this._vertexSource,fragmentSource:this._fragmentSource}),this._shader.compile(),this._initialized=!0)}get name(){var t;return null!==(t=this._name)&&void 0!==t?t:"anonymous material"}getShader(){return this._shader}use(){if(this._initialized)// bind the shader
this._shader.use(),// Apply standard uniforms
this._shader.trySetUniformFloatColor("u_color",this._color);else throw Error(`Material ${this.name} not yet initialized, use the ExcaliburGraphicsContext.createMaterial() to work around this.`)}}class e7{constructor(){this.type="ex.material",this.priority=0,this._textures=[]}initialize(t,e){this._gl=t,this._context=e,// Setup memory layout
this._buffer=new eZ({gl:t,size:16,type:"dynamic"}),// Setup a vertex layout/buffer to the material
this._layout=new eK({gl:t,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_uv",2]]}),// Setup index buffer
this._quads=new e0(t,1,!0)}draw(t,e,i,s,r,n,o,a,h){var l,d,c,u;let p=this._gl,_=this._context.material;_.initialize(p,this._context);let g=this._context.getTransform(),m=this._context.opacity,f=_.getShader(),v=this._layout.vertexBuffer.bufferData,y=0,x=(null==t?void 0:t.width)||s||0,w=(null==t?void 0:t.height)||r||0,b=[0,0,null!==(l=null!=s?s:null==t?void 0:t.width)&&void 0!==l?l:0,null!==(d=null!=r?r:null==t?void 0:t.height)&&void 0!==d?d:0],C=[null!=e?e:1,null!=i?i:1];void 0!==n&&void 0!==o&&void 0!==a&&void 0!==h&&(b=[null!=e?e:1,null!=i?i:1,null!==(c=null!=s?s:null==t?void 0:t.width)&&void 0!==c?c:0,null!==(u=null!=r?r:null==t?void 0:t.height)&&void 0!==u?u:0],C=[n,o],x=a,w=h),e=b[0],i=b[1];let A=b[2],S=b[3],T=em(C[0],C[1]),E=em(C[0]+x,C[1]),P=em(C[0],C[1]+w),I=em(C[0]+x,C[1]+w),M=t.width||x,k=t.height||w,R=e/M,D=i/k,B=(e+A-.01)/M,F=(i+S-.01)/k;// (0, 0) - 0
v[y++]=T.x,v[y++]=T.y,v[y++]=R,v[y++]=D,// (0, 1) - 1
v[y++]=P.x,v[y++]=P.y,v[y++]=R,v[y++]=F,// (1, 0) - 2
v[y++]=E.x,v[y++]=E.y,v[y++]=B,v[y++]=D,// (1, 1) - 3
v[y++]=I.x,v[y++]=I.y,v[y++]=B,v[y++]=F;// This creates and uploads the texture if not already done
let U=this._addImageAsTexture(t);// apply material
_.use(),this._layout.shader=f,// apply layout and geometry
this._layout.use(!0),// apply opacity
f.trySetUniformFloat("u_opacity",m),// apply resolution
f.trySetUniformFloatVector("u_resolution",em(this._context.width,this._context.height)),// apply size
f.trySetUniformFloatVector("u_size",em(A,S)),// apply orthographic projection
f.trySetUniformMatrix("u_matrix",this._context.ortho),// apply geometry transform
f.trySetUniformMatrix("u_transform",g.to4x4()),// bind graphic image texture 'uniform sampler2D u_graphic;'
p.activeTexture(p.TEXTURE0+0),p.bindTexture(p.TEXTURE_2D,U),f.trySetUniformInt("u_graphic",0),// bind quad index buffer
this._quads.bind(),// Draw a single quad
p.drawElements(p.TRIANGLES,6,this._quads.bufferGlType,0)}_addImageAsTexture(t){let e=t.getAttribute("filtering"),i=null;(e===G.Blended||e===G.Pixel)&&(i=e);let s="true"===t.getAttribute("forceUpload"),r=this._context.textureLoader.load(t,i,s);return(// remove force attribute after upload
t.removeAttribute("forceUpload"),-1===this._textures.indexOf(r)&&this._textures.push(r),r)}hasPendingDraws(){return!1}flush(){// flush does not do anything, material renderer renders immediately per draw
}}// renderers
let e8=1e-4;class it{constructor(t){this._webglCtx=t,this._debugText=new eN}/**
     * Draw a debugging rectangle to the context
     * @param x
     * @param y
     * @param width
     * @param height
     */drawRect(t,e,i,s,r={color:ef.Black}){this.drawLine(em(t,e),em(t+i,e),{...r}),this.drawLine(em(t+i,e),em(t+i,e+s),{...r}),this.drawLine(em(t+i,e+s),em(t,e+s),{...r}),this.drawLine(em(t,e+s),em(t,e),{...r})}/**
     * Draw a debugging line to the context
     * @param start
     * @param end
     * @param lineOptions
     */drawLine(t,e,i={color:ef.Black}){this._webglCtx.draw("ex.line",t,e,i.color)}/**
     * Draw a debugging point to the context
     * @param point
     * @param pointOptions
     */drawPoint(t,e={color:ef.Black,size:5}){this._webglCtx.draw("ex.point",t,e.color,e.size)}drawText(t,e){this._debugText.write(this._webglCtx,t,e)}}class ie{get z(){return this._state.current.z}set z(t){this._state.current.z=t}get opacity(){return this._state.current.opacity}set opacity(t){this._state.current.opacity=t}get tint(){return this._state.current.tint}set tint(t){this._state.current.tint=t}get width(){return this.__gl.canvas.width}get height(){return this.__gl.canvas.height}get ortho(){return this._ortho}/**
     * Checks the underlying webgl implementation if the requested internal resolution is supported
     * @param dim
     */checkIfResolutionSupported(t){// Slight hack based on this thread https://groups.google.com/g/webgl-dev-list/c/AHONvz3oQTo
let e=!0;return(t.width>4096||t.height>4096)&&(e=!1),e}constructor(t){this._logger=t7.getInstance(),this._renderers=new Map,this._isDrawLifecycle=!1,this.useDrawSorting=!0,this._drawCallPool=new e3(()=>new e4,t=>(t.priority=0,t.z=0,t.renderer=void 0,t.args=void 0,t),4e3),this._drawCalls=[],// Postprocessing is a tuple with 2 render targets, these are flip-flopped during the postprocessing process
this._postProcessTargets=[],this._postprocessors=[],this._transform=new eI,this._state=new eM,this.snapToPixel=!1,this.smoothing=!1,this.backgroundColor=ef.ExcaliburBlue,this._alreadyWarnedDrawLifecycle=!1,this.debug=new it(this),this._totalPostProcessorTime=0;let{canvasElement:e,enableTransparency:i,smoothing:s,snapToPixel:r,backgroundColor:n,useDrawSorting:o}=t;if(this.__gl=e.getContext("webgl2",{antialias:null!=s?s:this.smoothing,premultipliedAlpha:!1,alpha:null==i||i,depth:!0,powerPreference:"high-performance"}),!this.__gl)throw Error("Failed to retrieve webgl context from browser");this.textureLoader=new eL(this.__gl),this.snapToPixel=null!=r?r:this.snapToPixel,this.smoothing=null!=s?s:this.smoothing,this.backgroundColor=null!=n?n:this.backgroundColor,this.useDrawSorting=null!=o?o:this.useDrawSorting,this._drawCallPool.disableWarnings=!0,this._drawCallPool.preallocate(),this._init()}_init(){let t=this.__gl;// Setup viewport and view matrix
this._ortho=eE.ortho(0,t.canvas.width,t.canvas.height,0,400,-400),t.viewport(0,0,t.canvas.width,t.canvas.height),// Clear background
t.clearColor(this.backgroundColor.r/255,this.backgroundColor.g/255,this.backgroundColor.b/255,this.backgroundColor.a),t.clear(t.COLOR_BUFFER_BIT),// Enable alpha blending
// https://www.realtimerendering.com/blog/gpus-prefer-premultiplication/
t.enable(t.BLEND),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),// Setup builtin renderers
this.register(new e1),this.register(new e7),this.register(new e2),this.register(new e5),this.register(new eQ),this.register(new ej),this._screenRenderer=new eJ(t),this._renderTarget=new eW({gl:t,width:t.canvas.width,height:t.canvas.height}),this._postProcessTargets=[new eW({gl:t,width:t.canvas.width,height:t.canvas.height}),new eW({gl:t,width:t.canvas.width,height:t.canvas.height})]}register(t){this._renderers.set(t.type,t),t.initialize(this.__gl,this)}get(t){return this._renderers.get(t)}_isCurrentRenderer(t){return!this._currentRenderer||this._currentRenderer===t}beginDrawLifecycle(){this._isDrawLifecycle=!0}endDrawLifecycle(){this._isDrawLifecycle=!1}draw(t,...e){this._isDrawLifecycle||this._alreadyWarnedDrawLifecycle||(this._logger.warn(`Attempting to draw outside the the drawing lifecycle (preDraw/postDraw) is not supported and is a source of bugs/errors.
If you want to do custom drawing, use Actor.graphics, or any onPreDraw or onPostDraw handler.`),this._alreadyWarnedDrawLifecycle=!0);let i=this._renderers.get(t);if(i){if(this.useDrawSorting){let s=this._drawCallPool.get();s.z=this._state.current.z,s.priority=i.priority,s.renderer=t,this.getTransform().clone(s.transform),s.state.z=this._state.current.z,s.state.opacity=this._state.current.opacity,s.state.tint=this._state.current.tint,s.state.material=this._state.current.material,s.args=e,this._drawCalls.push(s)}else this._currentRenderer||(this._currentRenderer=i),this._isCurrentRenderer(i)||this._currentRenderer.flush(),// If we are still using the same renderer we can add to the current batch
i.draw(...e),this._currentRenderer=i}else throw Error(`No renderer with name ${t} has been registered`)}resetTransform(){this._transform.current=eP.identity()}updateViewport(t){let e=this.__gl;this._ortho=this._ortho=eE.ortho(0,t.width,t.height,0,400,-400),this._renderTarget.setResolution(e.canvas.width,e.canvas.height),this._postProcessTargets[0].setResolution(e.canvas.width,e.canvas.height),this._postProcessTargets[1].setResolution(e.canvas.width,e.canvas.height)}drawImage(t,e,i,s,r,n,o,a,h){if(0!==s&&0!==r&&0!==a&&0!==h&&0!==t.width&&0!==t.height){if(!t){t7.getInstance().warn("Cannot draw a null or undefined image"),console.trace&&console.trace();return}this._state.current.material?this.draw("ex.material",t,e,i,s,r,n,o,a,h):this.draw("ex.image",t,e,i,s,r,n,o,a,h)}// zero dimension source exit early
}drawLine(t,e,i,s=1){this.draw("ex.rectangle",t,e,i,s)}drawRectangle(t,e,i,s,r,n){this.draw("ex.rectangle",t,e,i,s,r,n)}drawCircle(t,e,i,s,r){this.draw("ex.circle",t,e,i,s,r)}save(){this._transform.save(),this._state.save()}restore(){this._transform.restore(),this._state.restore()}translate(t,e){this._transform.translate(this.snapToPixel?~~(t+e8):t,this.snapToPixel?~~(e+e8):e)}rotate(t){this._transform.rotate(t)}scale(t,e){this._transform.scale(t,e)}transform(t){this._transform.current=t}getTransform(){return this._transform.current}multiply(t){this._transform.current.multiply(t,this._transform.current)}addPostProcessor(t){this._postprocessors.push(t),t.initialize(this.__gl)}removePostProcessor(t){let e=this._postprocessors.indexOf(t);-1!==e&&this._postprocessors.splice(e,1)}clearPostProcessors(){this._postprocessors.length=0}updatePostProcessors(t){for(let e of this._postprocessors){let i=e.getShader();i.use();let s=i.getUniforms();this._totalPostProcessorTime+=t,s.find(t=>"u_time_ms"===t.name)&&i.setUniformFloat("u_time_ms",this._totalPostProcessorTime),s.find(t=>"u_elapsed_ms"===t.name)&&i.setUniformFloat("u_elapsed_ms",t),s.find(t=>"u_resolution"===t.name)&&i.setUniformFloatVector("u_resolution",em(this.width,this.height)),e.onUpdate&&e.onUpdate(t)}}set material(t){this._state.current.material=t}get material(){return this._state.current.material}/**
     * Creates and initializes the material which compiles the internal shader
     * @param options
     * @returns Material
     */createMaterial(t){let e=new e6(t);return e.initialize(this.__gl,this),e}createShader(t){let e=this.__gl,{vertexSource:i,fragmentSource:s}=t,r=new eX({gl:e,vertexSource:i,fragmentSource:s});return r.compile(),r}clear(){let t=this.__gl;this._renderTarget.use(),t.clearColor(this.backgroundColor.r/255,this.backgroundColor.g/255,this.backgroundColor.b/255,this.backgroundColor.a),// Clear the context with the newly set color. This is
// the function call that actually does the drawing.
t.clear(t.COLOR_BUFFER_BIT)}/**
     * Flushes all batched rendering to the screen
     */flush(){let t=this.__gl;if(// render target captures all draws and redirects to the render target
this._renderTarget.use(),this.useDrawSorting){// sort draw calls
// Find the original order of the first instance of the draw call
let t=new Map;for(let[e]of this._renderers){let i=this._drawCalls.findIndex(t=>t.renderer===e);t.set(e,i)}this._drawCalls.sort((e,i)=>{let s=e.z-i.z,r=t.get(e.renderer)-t.get(i.renderer),n=e.priority-i.priority;return 0===s?0===n?r:n// use the original order to inform draw call packing to maximally preserve painter order
:s});let e=this._transform.current,i=this._state.current;if(this._drawCalls.length){let t=this._drawCalls[0].renderer,e=this._renderers.get(t);for(let i=0;i<this._drawCalls.length;i++)// hydrate the state for renderers
this._transform.current=this._drawCalls[i].transform,this._state.current=this._drawCalls[i].state,this._drawCalls[i].renderer!==t&&(// switching graphics renderer means we must flush the previous
e.flush(),t=this._drawCalls[i].renderer,e=this._renderers.get(t)),// If we are still using the same renderer we can add to the current batch
e.draw(...this._drawCalls[i].args);e.hasPendingDraws()&&e.flush()}// reset state
this._transform.current=e,this._state.current=i,// reclaim draw calls
this._drawCallPool.done(),this._drawCalls.length=0}else // This is the final flush at the moment to draw any leftover pending draw
for(let t of this._renderers.values())t.hasPendingDraws()&&t.flush();this._renderTarget.disable();// post process step
let e=this._renderTarget.toRenderSource();e.use();// flip flop render targets
for(let t=0;t<this._postprocessors.length;t++)this._postProcessTargets[t%2].use(),this._screenRenderer.renderWithPostProcessor(this._postprocessors[t]),this._postProcessTargets[t%2].toRenderSource().use();// passing null switches rendering back to the canvas
t.bindFramebuffer(t.FRAMEBUFFER,null),this._screenRenderer.renderToScreen()}}class ii{constructor(t){this._ex=t,this._debugText=new eN}/**
     * Draw a debug rectangle to the context
     * @param x
     * @param y
     * @param width
     * @param height
     */drawRect(t,e,i,s){this._ex.__ctx.save(),this._ex.__ctx.strokeStyle="red",this._ex.__ctx.strokeRect(this._ex.snapToPixel?~~(t+1e-4):t,this._ex.snapToPixel?~~(e+1e-4):e,this._ex.snapToPixel?~~(i+1e-4):i,this._ex.snapToPixel?~~(s+1e-4):s),this._ex.__ctx.restore()}drawLine(t,e,i={color:ef.Black}){this._ex.__ctx.save(),this._ex.__ctx.beginPath(),this._ex.__ctx.strokeStyle=i.color.toString(),this._ex.__ctx.moveTo(this._ex.snapToPixel?~~(t.x+1e-4):t.x,this._ex.snapToPixel?~~(t.y+1e-4):t.y),this._ex.__ctx.lineTo(this._ex.snapToPixel?~~(e.x+1e-4):e.x,this._ex.snapToPixel?~~(e.y+1e-4):e.y),this._ex.__ctx.lineWidth=2,this._ex.__ctx.stroke(),this._ex.__ctx.closePath(),this._ex.__ctx.restore()}drawPoint(t,e={color:ef.Black,size:5}){this._ex.__ctx.save(),this._ex.__ctx.beginPath(),this._ex.__ctx.fillStyle=e.color.toString(),this._ex.__ctx.arc(this._ex.snapToPixel?~~(t.x+1e-4):t.x,this._ex.snapToPixel?~~(t.y+1e-4):t.y,e.size,0,2*Math.PI),this._ex.__ctx.fill(),this._ex.__ctx.closePath(),this._ex.__ctx.restore()}drawText(t,e){this._debugText.write(this._ex,t,e)}}class is{get width(){return this.__ctx.canvas.width}get height(){return this.__ctx.canvas.height}get opacity(){return this._state.current.opacity}set opacity(t){this._state.current.opacity=t}get tint(){return this._state.current.tint}set tint(t){this._state.current.tint=t}get smoothing(){return this.__ctx.imageSmoothingEnabled}set smoothing(t){this.__ctx.imageSmoothingEnabled=t}constructor(t){/**
         * Unused in Canvas implementation
         */this.useDrawSorting=!1,/**
         * Unused in Canvas implementation
         */this.z=0,this.backgroundColor=ef.ExcaliburBlue,this._state=new eM,this.snapToPixel=!1,this.debug=new ii(this);let{canvasElement:e,enableTransparency:i,snapToPixel:s,smoothing:r,backgroundColor:n}=t;this.__ctx=e.getContext("2d",{alpha:null==i||i}),this.backgroundColor=null!=n?n:this.backgroundColor,this.snapToPixel=null!=s?s:this.snapToPixel,this.smoothing=null!=r?r:this.smoothing}resetTransform(){this.__ctx.resetTransform()}updateViewport(t){// pass
}drawImage(t,e,i,s,r,n,o,a,h){if(0===s||0===r||0===a||0===h||0===t.width||0===t.height)return;// zero dimension dest exit early
// zero dimension source exit early
this.__ctx.globalAlpha=this.opacity;let l=[t,e,i,s,r,n,o,a,h].filter(t=>void 0!==t).map(t=>"number"==typeof t&&this.snapToPixel?~~t:t);this.__ctx.drawImage.apply(this.__ctx,l),eY.DrawCallCount++,eY.DrawnImagesCount=1}drawLine(t,e,i,s=1){this.__ctx.save(),this.__ctx.beginPath(),this.__ctx.strokeStyle=i.toString(),this.__ctx.moveTo(this.snapToPixel?~~(t.x+1e-4):t.x,this.snapToPixel?~~(t.y+1e-4):t.y),this.__ctx.lineTo(this.snapToPixel?~~(e.x+1e-4):e.x,this.snapToPixel?~~(e.y+1e-4):e.y),this.__ctx.lineWidth=s,this.__ctx.stroke(),this.__ctx.closePath(),this.__ctx.restore()}drawRectangle(t,e,i,s){this.__ctx.save(),this.__ctx.fillStyle=s.toString(),this.__ctx.fillRect(this.snapToPixel?~~(t.x+1e-4):t.x,this.snapToPixel?~~(t.y+1e-4):t.y,this.snapToPixel?~~(e+1e-4):e,this.snapToPixel?~~(i+1e-4):i),this.__ctx.restore()}drawCircle(t,e,i,s,r){this.__ctx.save(),this.__ctx.beginPath(),s&&(this.__ctx.strokeStyle=s.toString()),r&&(this.__ctx.lineWidth=r),this.__ctx.fillStyle=i.toString(),this.__ctx.arc(this.snapToPixel?~~(t.x+1e-4):t.x,this.snapToPixel?~~(t.y+1e-4):t.y,e,0,2*Math.PI),this.__ctx.fill(),s&&this.__ctx.stroke(),this.__ctx.closePath(),this.__ctx.restore()}/**
     * Save the current state of the canvas to the stack (transforms and opacity)
     */save(){this.__ctx.save()}/**
     * Restore the state of the canvas from the stack
     */restore(){this.__ctx.restore()}/**
     * Translate the origin of the context by an x and y
     * @param x
     * @param y
     */translate(t,e){this.__ctx.translate(this.snapToPixel?~~(t+1e-4):t,this.snapToPixel?~~(e+1e-4):e)}/**
     * Rotate the context about the current origin
     */rotate(t){this.__ctx.rotate(t)}/**
     * Scale the context by an x and y factor
     * @param x
     * @param y
     */scale(t,e){this.__ctx.scale(t,e)}getTransform(){throw Error("Not implemented")}multiply(t){this.__ctx.setTransform(this.__ctx.getTransform().multiply(t.toDOMMatrix()))}addPostProcessor(t){// pass
}removePostProcessor(t){// pass
}clearPostProcessors(){// pass
}updatePostProcessors(t){// pass
}beginDrawLifecycle(){// pass
}endDrawLifecycle(){// pass
}set material(t){this._state.current.material=t}get material(){return this._state.current.material}createMaterial(t){// pass
return null}clear(){// Clear frame
this.__ctx.clearRect(0,0,this.width,this.height),this.__ctx.fillStyle=this.backgroundColor.toString(),this.__ctx.fillRect(0,0,this.width,this.height),eY.clear()}/**
     * Flushes the batched draw calls to the screen
     */flush(){// pass
}}/**
     * Default, use a specified resolution for the game. Like 800x600 pixels for example.
     */(u=q||(q={})).Fixed="Fixed",/**
     * Fit the aspect ratio given by the game resolution within the container at all times will fill any gaps with canvas.
     * The displayed area outside the aspect ratio is not guaranteed to be on the screen, only the [[Screen.contentArea]]
     * is guaranteed to be on screen.
     */u.FitContainerAndFill="FitContainerAndFill",/**
     * Fit the aspect ratio given by the game resolution the screen at all times will fill the screen.
     * This displayed area outside the aspect ratio is not guaranteed to be on the screen, only the [[Screen.contentArea]]
     * is guaranteed to be on screen.
     */u.FitScreenAndFill="FitScreenAndFill",/**
     * Fit the viewport to the parent element maintaining aspect ratio given by the game resolution, but zooms in to avoid the black bars
     * (letterbox) that would otherwise be present in [[FitContainer]].
     *
     * **warning** This will clip some drawable area from the user because of the zoom,
     * use [[Screen.contentArea]] to know the safe to draw area.
     */u.FitContainerAndZoom="FitContainerAndZoom",/**
     * Fit the viewport to the device screen maintaining aspect ratio given by the game resolution, but zooms in to avoid the black bars
     * (letterbox) that would otherwise be present in [[FitScreen]].
     *
     * **warning** This will clip some drawable area from the user because of the zoom,
     * use [[Screen.contentArea]] to know the safe to draw area.
     */u.FitScreenAndZoom="FitScreenAndZoom",/**
     * Fit to screen using as much space as possible while maintaining aspect ratio and resolution.
     * This is not the same as [[Screen.goFullScreen]] but behaves in a similar way maintaining aspect ratio.
     *
     * You may want to center your game here is an example
     * ```html
     * <!-- html -->
     * <body>
     * <main>
     *   <canvas id="game"></canvas>
     * </main>
     * </body>
     * ```
     *
     * ```css
     * // css
     * main {
     *   display: flex;
     *   align-items: center;
     *   justify-content: center;
     *   height: 100%;
     *   width: 100%;
     * }
     * ```
     */u.FitScreen="FitScreen",/**
     * Fill the entire screen's css width/height for the game resolution dynamically. This means the resolution of the game will
     * change dynamically as the window is resized. This is not the same as [[Screen.goFullScreen]]
     */u.FillScreen="FillScreen",/**
     * Fit to parent element width/height using as much space as possible while maintaining aspect ratio and resolution.
     */u.FitContainer="FitContainer",/**
     * Use the parent DOM container's css width/height for the game resolution dynamically
     */u.FillContainer="FillContainer";/**
 * Convenience class for quick resolutions
 * Mostly sourced from https://emulation.gametechwiki.com/index.php/Resolution
 */class ir{/* istanbul ignore next */static get SVGA(){return{width:800,height:600}}/* istanbul ignore next */static get Standard(){return{width:1920,height:1080}}/* istanbul ignore next */static get Atari2600(){return{width:160,height:192}}/* istanbul ignore next */static get GameBoy(){return{width:160,height:144}}/* istanbul ignore next */static get GameBoyAdvance(){return{width:240,height:160}}/* istanbul ignore next */static get NintendoDS(){return{width:256,height:192}}/* istanbul ignore next */static get NES(){return{width:256,height:224}}/* istanbul ignore next */static get SNES(){return{width:256,height:244}}}/**
 * The Screen handles all aspects of interacting with the screen for Excalibur.
 */class Screen{constructor(t){var e,i,s;this._antialiasing=!0,this._resolutionStack=[],this._viewportStack=[],this._pixelRatioOverride=null,this._isFullScreen=!1,this._isDisposed=!1,this._logger=t7.getInstance(),this._fullscreenChangeHandler=()=>{this._isFullScreen=!this._isFullScreen,this._logger.debug("Fullscreen Change",this._isFullScreen)},this._pixelRatioChangeHandler=()=>{this._logger.debug("Pixel Ratio Change",window.devicePixelRatio),this._listenForPixelRatio(),this._devicePixelRatio=this._calculateDevicePixelRatio(),this.applyResolutionAndViewport()},this._resizeHandler=()=>{let t=this.parent;this._logger.debug("View port resized"),this._setResolutionAndViewportByDisplayMode(t),this.applyResolutionAndViewport()},// Asking the window.devicePixelRatio is expensive we do it once
this._devicePixelRatio=this._calculateDevicePixelRatio(),this._alreadyWarned=!1,this._contentArea=new ey,this.viewport=t.viewport,this.resolution=null!==(e=t.resolution)&&void 0!==e?e:{...this.viewport},this._contentResolution=this.resolution,this._displayMode=null!==(i=t.displayMode)&&void 0!==i?i:q.Fixed,this._canvas=t.canvas,this.graphicsContext=t.context,this._antialiasing=null!==(s=t.antialiasing)&&void 0!==s?s:this._antialiasing,this._browser=t.browser,this._pixelRatioOverride=t.pixelRatio,this._applyDisplayMode(),this._listenForPixelRatio(),this._canvas.addEventListener("fullscreenchange",this._fullscreenChangeHandler),this.applyResolutionAndViewport()}_listenForPixelRatio(){this._mediaQueryList&&!this._mediaQueryList.addEventListener&&this._mediaQueryList.removeListener(this._pixelRatioChangeHandler),this._mediaQueryList=this._browser.window.nativeComponent.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._mediaQueryList.addEventListener?this._mediaQueryList.addEventListener("change",this._pixelRatioChangeHandler,{once:!0}):this._mediaQueryList.addListener(this._pixelRatioChangeHandler)}dispose(){this._isDisposed||(// Clean up handlers
this._isDisposed=!0,this._browser.window.off("resize",this._resizeHandler),this._resizeObserver&&this._resizeObserver.disconnect(),this.parent.removeEventListener("resize",this._resizeHandler),this._mediaQueryList.removeEventListener?this._mediaQueryList.removeEventListener("change",this._pixelRatioChangeHandler):this._mediaQueryList.removeListener(this._pixelRatioChangeHandler),this._canvas.removeEventListener("fullscreenchange",this._fullscreenChangeHandler))}_calculateDevicePixelRatio(){if(window.devicePixelRatio<1)return 1;let t=window.devicePixelRatio||1;return t}get pixelRatio(){return this._pixelRatioOverride?this._pixelRatioOverride:this._devicePixelRatio}get isHiDpi(){return 1!==this.pixelRatio}get displayMode(){return this._displayMode}get canvas(){return this._canvas}get parent(){switch(this.displayMode){case q.FillContainer:case q.FitContainer:case q.FitContainerAndFill:case q.FitContainerAndZoom:return this.canvas.parentElement||document.body;default:return window}}get resolution(){return this._resolution}set resolution(t){this._resolution=t}get viewport(){return this._viewport?this._viewport:this._resolution}set viewport(t){this._viewport=t}get aspectRatio(){return this._resolution.width/this._resolution.height}get scaledWidth(){return this._resolution.width*this.pixelRatio}get scaledHeight(){return this._resolution.height*this.pixelRatio}setCurrentCamera(t){this._camera=t}pushResolutionAndViewport(){this._resolutionStack.push(this.resolution),this._viewportStack.push(this.viewport),this.resolution={...this.resolution},this.viewport={...this.viewport}}peekViewport(){return this._viewportStack[this._viewportStack.length-1]}peekResolution(){return this._resolutionStack[this._resolutionStack.length-1]}popResolutionAndViewport(){this.resolution=this._resolutionStack.pop(),this.viewport=this._viewportStack.pop()}applyResolutionAndViewport(){if(this._canvas.width=this.scaledWidth,this._canvas.height=this.scaledHeight,this.graphicsContext instanceof ie){let t=this.graphicsContext.checkIfResolutionSupported({width:this.scaledWidth,height:this.scaledHeight});t||this._alreadyWarned||(this._alreadyWarned=!0,this._logger.warn(`The currently configured resolution (${this.resolution.width}x${this.resolution.height}) and pixel ratio (${this.pixelRatio}) are too large for the platform WebGL implementation, this may work but cause WebGL rendering to behave oddly. Try reducing the resolution or disabling Hi DPI scaling to avoid this (read more here https://excaliburjs.com/docs/screens#understanding-viewport--resolution).`))}this._antialiasing?this._canvas.style.imageRendering="auto":(this._canvas.style.imageRendering="pixelated",""===this._canvas.style.imageRendering&&(this._canvas.style.imageRendering="crisp-edges")),this._canvas.style.width=this.viewport.width+"px",this._canvas.style.height=this.viewport.height+"px",// After messing with the canvas width/height the graphics context is invalidated and needs to have some properties reset
this.graphicsContext.updateViewport(this.resolution),this.graphicsContext.resetTransform(),this.graphicsContext.smoothing=this._antialiasing,this.graphicsContext instanceof is&&this.graphicsContext.scale(this.pixelRatio,this.pixelRatio)}get antialiasing(){return this._antialiasing}set antialiasing(t){this._antialiasing=t,this.graphicsContext.smoothing=this._antialiasing}/**
     * Returns true if excalibur is fullscreen using the browser fullscreen api
     */get isFullScreen(){return this._isFullScreen}/**
     * Requests to go fullscreen using the browser fullscreen api, requires user interaction to be successful.
     * For example, wire this to a user click handler.
     *
     * Optionally specify a target element id to go fullscreen, by default the game canvas is used
     * @param elementId
     */goFullScreen(t){if(t){let e=document.getElementById(t);if(e)return e.requestFullscreen()}return this._canvas.requestFullscreen()}/**
     * Requests to exit fullscreen using the browser fullscreen api
     */exitFullScreen(){return document.exitFullscreen()}/**
     * Takes a coordinate in normal html page space, for example from a pointer move event, and translates it to
     * Excalibur screen space.
     *
     * Excalibur screen space starts at the top left (0, 0) corner of the viewport, and extends to the
     * bottom right corner (resolutionX, resolutionY)
     * @param point
     */pageToScreenCoordinates(t){let e=t.x,i=t.y;// if fullscreen api on it centers with black bars
// we need to adjust the screen to world coordinates in this case
if(this._isFullScreen||(e-=ew(this._canvas).x,i-=ew(this._canvas).y),this._isFullScreen){if(window.innerWidth/this.aspectRatio<window.innerHeight){let t=window.innerWidth/this.aspectRatio,s=(window.innerHeight-t)/2;i=(i-s)/t*this.viewport.height,e=e/window.innerWidth*this.viewport.width}else{let t=window.innerHeight*this.aspectRatio,s=(window.innerWidth-t)/2;e=(e-s)/t*this.viewport.width,i=i/window.innerHeight*this.viewport.height}}return new eg(e=e/this.viewport.width*this.resolution.width,i=i/this.viewport.height*this.resolution.height)}/**
     * Takes a coordinate in Excalibur screen space, and translates it to normal html page space. For example,
     * this is where html elements might live if you want to position them relative to Excalibur.
     *
     * Excalibur screen space starts at the top left (0, 0) corner of the viewport, and extends to the
     * bottom right corner (resolutionX, resolutionY)
     * @param point
     */screenToPageCoordinates(t){let e=t.x,i=t.y;if(e=e/this.resolution.width*this.viewport.width,i=i/this.resolution.height*this.viewport.height,this._isFullScreen){if(window.innerWidth/this.aspectRatio<window.innerHeight){let t=window.innerWidth/this.aspectRatio,s=(window.innerHeight-t)/2;i=i/this.viewport.height*t+s,e=e/this.viewport.width*window.innerWidth}else{let t=window.innerHeight*this.aspectRatio,s=(window.innerWidth-t)/2;e=e/this.viewport.width*t+s,i=i/this.viewport.height*window.innerHeight}}return this._isFullScreen||(e+=ew(this._canvas).x,i+=ew(this._canvas).y),new eg(e,i)}/**
     * Takes a coordinate in Excalibur screen space, and translates it to Excalibur world space.
     *
     * World space is where [[Entity|entities]] in Excalibur live by default [[CoordPlane.World]]
     * and extends infinitely out relative from the [[Camera]].
     * @param point  Screen coordinate to convert
     */screenToWorldCoordinates(t){return(// the only difference between screen & world is the camera transform
this._camera?this._camera.inverse.multiply(t):t.sub(em(this.resolution.width/2,this.resolution.height/2)))}/**
     * Takes a coordinate in Excalibur world space, and translates it to Excalibur screen space.
     *
     * Screen space is where [[ScreenElement|screen elements]] and [[Entity|entities]] with [[CoordPlane.Screen]] live.
     * @param point  World coordinate to convert
     */worldToScreenCoordinates(t){return this._camera?this._camera.transform.multiply(t):t.add(em(this.resolution.width/2,this.resolution.height/2))}pageToWorldCoordinates(t){let e=this.pageToScreenCoordinates(t);return this.screenToWorldCoordinates(e)}worldToPageCoordinates(t){let e=this.worldToScreenCoordinates(t);return this.screenToPageCoordinates(e)}/**
     * Returns a BoundingBox of the top left corner of the screen
     * and the bottom right corner of the screen.
     *
     * World bounds are in world coordinates, useful for culling objects offscreen
     */getWorldBounds(){let t=ey.fromDimension(this.resolution.width,this.resolution.height,eg.Half).scale(em(1/this._camera.zoom,1/this._camera.zoom)).rotate(this._camera.rotation).translate(this._camera.pos);return t}/**
     * The width of the game canvas in pixels (physical width component of the
     * resolution of the canvas element)
     */get canvasWidth(){return this.canvas.width}/**
     * Returns half width of the game canvas in pixels (half physical width component)
     */get halfCanvasWidth(){return this.canvas.width/2}/**
     * The height of the game canvas in pixels, (physical height component of
     * the resolution of the canvas element)
     */get canvasHeight(){return this.canvas.height}/**
     * Returns half height of the game canvas in pixels (half physical height component)
     */get halfCanvasHeight(){return this.canvas.height/2}/**
     * Returns the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawWidth(){return this._camera?this.resolution.width/this._camera.zoom:this.resolution.width}/**
     * Returns half the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawWidth(){return this.drawWidth/2}/**
     * Returns the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawHeight(){return this._camera?this.resolution.height/this._camera.zoom:this.resolution.height}/**
     * Returns half the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawHeight(){return this.drawHeight/2}/**
     * Returns screen center coordinates including zoom and device pixel ratio.
     */get center(){return em(this.halfDrawWidth,this.halfDrawHeight)}/**
     * Returns the content area in screen space where it is safe to place content
     */get contentArea(){return this._contentArea}_computeFit(){document.body.style.margin="0px",document.body.style.overflow="hidden";let t=this.aspectRatio,e=0,i=0;window.innerWidth/t<window.innerHeight?(e=window.innerWidth,i=window.innerWidth/t):(e=window.innerHeight*t,i=window.innerHeight),this.viewport={width:e,height:i},this._contentArea=ey.fromDimension(this.resolution.width,this.resolution.height,eg.Zero)}_computeFitScreenAndFill(){document.body.style.margin="0px",document.body.style.overflow="hidden";let t=window.innerWidth,e=window.innerHeight;this._computeFitAndFill(t,e)}_computeFitContainerAndFill(){document.body.style.margin="0px",document.body.style.overflow="hidden";let t=this.canvas.parentElement,e=t.clientWidth,i=t.clientHeight;this._computeFitAndFill(e,i)}_computeFitAndFill(t,e){// if the current screen aspectRatio is less than the original aspectRatio
if(this.viewport={width:t,height:e},t/e<=this._contentResolution.width/this._contentResolution.height){// compute new resolution to match the original aspect ratio
this.resolution={width:t*this._contentResolution.width/t,height:t*this._contentResolution.width/t*e/t};let i=(this.resolution.height-this._contentResolution.height)/2;this._contentArea=new ey({top:i,left:0,right:this._contentResolution.width,bottom:this.resolution.height-i})}else{this.resolution={width:e*this._contentResolution.height/e*t/e,height:e*this._contentResolution.height/e};let i=(this.resolution.width-this._contentResolution.width)/2;this._contentArea=new ey({top:0,left:i,right:this.resolution.width-i,bottom:this._contentResolution.height})}}_computeFitScreenAndZoom(){document.body.style.margin="0px",document.body.style.overflow="hidden",this.canvas.style.position="absolute";let t=window.innerWidth,e=window.innerHeight;this._computeFitAndZoom(t,e)}_computeFitContainerAndZoom(){document.body.style.margin="0px",document.body.style.overflow="hidden",this.canvas.style.position="absolute";let t=this.canvas.parentElement;t.style.position="relative",t.style.overflow="hidden";let e=t.clientWidth,i=t.clientHeight;this._computeFitAndZoom(e,i)}_computeFitAndZoom(t,e){let i=this.aspectRatio,s=0,r=0;t/i<e?(s=t,r=t/i):(s=e*i,r=e);let n=t/s,o=e/r,a=Math.max(n,o),h=s*a,l=r*a;h>t?this.canvas.style.left=-(h-t)/2+"px":this.canvas.style.left="",l>e?this.canvas.style.top=-(l-e)/2+"px":this.canvas.style.top="",this.viewport={width:h,height:l};let d=ey.fromDimension(this.viewport.width,this.viewport.height,eg.Zero);// return safe area
if(this.viewport.width>t){let e=(this.viewport.width-t)/this.viewport.width*this.resolution.width;d.top=0,d.left=e/2,d.right=this.resolution.width-e/2,d.bottom=this.resolution.height}if(this.viewport.height>e){let t=(this.viewport.height-e)/this.viewport.height*this.resolution.height;d.top=t/2,d.left=0,d.bottom=this.resolution.height-t/2,d.right=this.resolution.width}this._contentArea=d}_computeFitContainer(){let t=this.aspectRatio,e=0,i=0,s=this.canvas.parentElement;s.clientWidth/t<s.clientHeight?(e=s.clientWidth,i=s.clientWidth/t):(e=s.clientHeight*t,i=s.clientHeight),this.viewport={width:e,height:i},this._contentArea=ey.fromDimension(this.resolution.width,this.resolution.height,eg.Zero)}_applyDisplayMode(){this._setResolutionAndViewportByDisplayMode(this.parent),this.parent instanceof Window?this._browser.window.on("resize",this._resizeHandler):(this._resizeObserver=new ResizeObserver(()=>{this._resizeHandler()}),this._resizeObserver.observe(this.parent)),this.parent.addEventListener("resize",this._resizeHandler)}/**
     * Sets the resolution and viewport based on the selected display mode.
     */_setResolutionAndViewportByDisplayMode(t){this.displayMode===q.FillContainer&&(this.resolution={width:t.clientWidth,height:t.clientHeight},this.viewport=this.resolution),this.displayMode===q.FillScreen&&(document.body.style.margin="0px",document.body.style.overflow="hidden",this.resolution={width:t.innerWidth,height:t.innerHeight},this.viewport=this.resolution),this._contentArea=ey.fromDimension(this.resolution.width,this.resolution.height,eg.Zero),this.displayMode===q.FitScreen&&this._computeFit(),this.displayMode===q.FitContainer&&this._computeFitContainer(),this.displayMode===q.FitScreenAndFill&&this._computeFitScreenAndFill(),this.displayMode===q.FitContainerAndFill&&this._computeFitContainerAndFill(),this.displayMode===q.FitScreenAndZoom&&this._computeFitScreenAndZoom(),this.displayMode===q.FitContainerAndZoom&&this._computeFitContainerAndZoom()}}/**
 * Internal class used to build instances of AudioContext
 *//* istanbul ignore next */class io{static create(){return!this._INSTANCE&&(window.AudioContext||window.webkitAudioContext)&&(this._INSTANCE=new AudioContext),this._INSTANCE}}io._INSTANCE=null;class ia{/**
     * Play an empty sound to unlock Safari WebAudio context. Call this function
     * right after a user interaction event.
     * @source https://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     */static unlock(){let t=new Promise((t,e)=>{if(ia._UNLOCKED||!io.create())return t(!0);let i=setTimeout(()=>{t7.getInstance().warn("Excalibur was unable to unlock the audio context, audio probably will not play in this browser."),t(!1)},200),s=io.create();s.resume().then(()=>{// create empty buffer and play it
let e=s.createBuffer(1,1,22050),r=s.createBufferSource(),n=!1;r.buffer=e,r.connect(s.destination),r.onended=()=>n=!0,r.start(0),// by checking the play state after some time, we know if we're really unlocked
setTimeout(()=>{r.playbackState?(r.playbackState===r.PLAYING_STATE||r.playbackState===r.FINISHED_STATE)&&(ia._UNLOCKED=!0):(s.currentTime>0||n)&&(ia._UNLOCKED=!0)},0),clearTimeout(i),t(!0)},()=>{e()})});return t}static isUnlocked(){return this._UNLOCKED}}/* istanbul ignore next *//**
 * Draw a line on canvas context
 *
 * @param ctx The canvas context
 * @param color The color of the line
 * @param x1 The start x coordinate
 * @param y1 The start y coordinate
 * @param x2 The ending x coordinate
 * @param y2 The ending y coordinate
 * @param thickness The line thickness
 * @param cap The [[LineCapStyle]] (butt, round, or square)
 */function ih(t,e=ef.Red,i,s,r,n,o=1,a="butt"){t.save(),t.beginPath(),t.lineWidth=o,t.lineCap=a,t.strokeStyle=e.toString(),t.moveTo(i,s),t.lineTo(r,n),t.closePath(),t.stroke(),t.restore()}/* istanbul ignore next *//**
 * Draw the vector as a point onto the canvas.
 */function il(t,e=ef.Red,i){t.beginPath(),t.strokeStyle=e.toString(),t.arc(i.x,i.y,5,0,2*Math.PI),t.closePath(),t.stroke()}/**
 * Draw the vector as a line onto the canvas starting a origin point.
 *//* istanbul ignore next *//**
 *
 */function id(t,e,i,s,r=1){let n=e?e.toString():"blue",o=s.scale(r);t.beginPath(),t.strokeStyle=n,t.moveTo(i.x,i.y),t.lineTo(i.x+o.x,i.y+o.y),t.closePath(),t.stroke()}/**
 * Draw a round rectangle on a canvas context
 *
 * @param ctx The canvas context
 * @param x The top-left x coordinate
 * @param y The top-left y coordinate
 * @param width The width of the rectangle
 * @param height The height of the rectangle
 * @param radius The border radius of the rectangle
 * @param stroke The [[Color]] to stroke rectangle with
 * @param fill The [[Color]] to fill rectangle with
 */function ic(t,e,i,s,r,n=5,o=ef.White,a=null){let h;if("number"==typeof n)h={tl:n,tr:n,br:n,bl:n};else{let t={tl:0,tr:0,br:0,bl:0};for(let e in t)t.hasOwnProperty(e)&&(h[e]=n[e]||t[e])}t.beginPath(),t.moveTo(e+h.tl,i),t.lineTo(e+s-h.tr,i),t.quadraticCurveTo(e+s,i,e+s,i+h.tr),t.lineTo(e+s,i+r-h.br),t.quadraticCurveTo(e+s,i+r,e+s-h.br,i+r),t.lineTo(e+h.bl,i+r),t.quadraticCurveTo(e,i+r,e,i+r-h.bl),t.lineTo(e,i+h.tl),t.quadraticCurveTo(e,i,e+h.tl,i),t.closePath(),a&&(t.fillStyle=a.toString(),t.fill()),o&&(t.strokeStyle=o.toString(),t.stroke())}/**
 *
 */function iu(t,e,i,s,r=ef.White,n=null){t.beginPath(),t.arc(e,i,s,0,2*Math.PI),t.closePath(),n&&(t.fillStyle=n.toString(),t.fill()),r&&(t.strokeStyle=r.toString(),t.stroke())}ia._UNLOCKED=!1;// EXTERNAL MODULE: ./Loader.css
var ip=r(1388);/**
 * A Raster is a Graphic that needs to be first painted to a HTMLCanvasElement before it can be drawn to the
 * [[ExcaliburGraphicsContext]]. This is useful for generating custom images using the 2D canvas api.
 *
 * Implementors must implement the [[Raster.execute]] method to rasterize their drawing.
 */class i_ extends eF{constructor(t){var e,i,s,r,n,o,a,h,l,d;super(t),this.filtering=null,this.lineCap="butt",this.quality=1,this._dirty=!0,this._smoothing=!1,this._color=eD(ef.Black,()=>this.flagDirty()),this._lineWidth=1,this._lineDash=[],this._padding=0,t&&(this.quality=null!==(e=t.quality)&&void 0!==e?e:this.quality,this.color=null!==(i=t.color)&&void 0!==i?i:ef.Black,this.strokeColor=null==t?void 0:t.strokeColor,this.smoothing=null!==(s=t.smoothing)&&void 0!==s?s:this.smoothing,this.lineWidth=null!==(r=t.lineWidth)&&void 0!==r?r:this.lineWidth,this.lineDash=null!==(n=t.lineDash)&&void 0!==n?n:this.lineDash,this.lineCap=null!==(o=t.lineCap)&&void 0!==o?o:this.lineCap,this.padding=null!==(a=t.padding)&&void 0!==a?a:this.padding,this.filtering=null!==(h=t.filtering)&&void 0!==h?h:this.filtering),this._bitmap=document.createElement("canvas");// get the default canvas width/height as a fallback
let c=null!==(l=null==t?void 0:t.width)&&void 0!==l?l:this._bitmap.width,u=null!==(d=null==t?void 0:t.height)&&void 0!==d?d:this._bitmap.height;this.width=c,this.height=u;let p=this._bitmap.getContext("2d");if(p)this._ctx=p;else /* istanbul ignore next */throw Error("Browser does not support 2d canvas drawing, cannot create Raster graphic")}cloneRasterOptions(){return{color:this.color?this.color.clone():null,strokeColor:this.strokeColor?this.strokeColor.clone():null,smoothing:this.smoothing,lineWidth:this.lineWidth,lineDash:this.lineDash,lineCap:this.lineCap,quality:this.quality,padding:this.padding}}/**
     * Gets whether the graphic is dirty, this means there are changes that haven't been re-rasterized
     */get dirty(){return this._dirty}/**
     * Flags the graphic as dirty, meaning it must be re-rasterized before draw.
     * This should be called any time the graphics state changes such that it affects the outputted drawing
     */flagDirty(){this._dirty=!0}/**
     * Gets or sets the current width of the Raster graphic. Setting the width will cause the raster
     * to be flagged dirty causing a re-raster on the next draw.
     *
     * Any `padding`s or `quality` set will be factored into the width
     */get width(){return Math.abs(this._getTotalWidth()*this.scale.x)}set width(t){t/=Math.abs(this.scale.x),this._bitmap.width=t,this._originalWidth=t,this.flagDirty()}/**
     * Gets or sets the current height of the Raster graphic. Setting the height will cause the raster
     * to be flagged dirty causing a re-raster on the next draw.
     *
     * Any `padding` or `quality` set will be factored into the height
     */get height(){return Math.abs(this._getTotalHeight()*this.scale.y)}set height(t){t/=Math.abs(this.scale.y),this._bitmap.height=t,this._originalHeight=t,this.flagDirty()}_getTotalWidth(){var t;return((null!==(t=this._originalWidth)&&void 0!==t?t:this._bitmap.width)+2*this.padding)*1}_getTotalHeight(){var t;return((null!==(t=this._originalHeight)&&void 0!==t?t:this._bitmap.height)+2*this.padding)*1}/**
     * Returns the local bounds of the Raster including the padding
     */get localBounds(){return ey.fromDimension(this._getTotalWidth()*this.scale.x,this._getTotalHeight()*this.scale.y,eg.Zero)}/**
     * Gets or sets the smoothing (anti-aliasing of the graphic). Setting the height will cause the raster
     * to be flagged dirty causing a re-raster on the next draw.
     */get smoothing(){return this._smoothing}set smoothing(t){this._smoothing=t,this.flagDirty()}/**
     * Gets or sets the fillStyle of the Raster graphic. Setting the fillStyle will cause the raster to be
     * flagged dirty causing a re-raster on the next draw.
     */get color(){return this._color}set color(t){this.flagDirty(),this._color=eD(t,()=>this.flagDirty())}/**
     * Gets or sets the strokeStyle of the Raster graphic. Setting the strokeStyle will cause the raster to be
     * flagged dirty causing a re-raster on the next draw.
     */get strokeColor(){return this._strokeColor}set strokeColor(t){this.flagDirty(),this._strokeColor=eD(t,()=>this.flagDirty())}/**
     * Gets or sets the line width of the Raster graphic. Setting the lineWidth will cause the raster to be
     * flagged dirty causing a re-raster on the next draw.
     */get lineWidth(){return this._lineWidth}set lineWidth(t){this._lineWidth=t,this.flagDirty()}get lineDash(){return this._lineDash}set lineDash(t){this._lineDash=t,this.flagDirty()}get padding(){return this._padding}set padding(t){this._padding=t,this.flagDirty()}/**
     * Rasterize the graphic to a bitmap making it usable as in excalibur. Rasterize is called automatically if
     * the graphic is [[Raster.dirty]] on the next [[Graphic.draw]] call
     */rasterize(){this._dirty=!1,this._ctx.clearRect(0,0,this._getTotalWidth(),this._getTotalHeight()),this._ctx.save(),this._applyRasterProperties(this._ctx),this.execute(this._ctx),this._ctx.restore()}_applyRasterProperties(t){var e,i,s;this._bitmap.width=this._getTotalWidth()*this.quality,this._bitmap.height=this._getTotalHeight()*this.quality,// Do a bad thing to pass the filtering as an attribute
this._bitmap.setAttribute("filtering",this.filtering),this._bitmap.setAttribute("forceUpload","true"),t.scale(this.quality,this.quality),t.translate(this.padding,this.padding),t.imageSmoothingEnabled=this.smoothing,t.lineWidth=this.lineWidth,t.setLineDash(null!==(e=this.lineDash)&&void 0!==e?e:t.getLineDash()),t.lineCap=this.lineCap,t.strokeStyle=null===(i=this.strokeColor)||void 0===i?void 0:i.toString(),t.fillStyle=null===(s=this.color)||void 0===s?void 0:s.toString()}_drawImage(t,e,i){this._dirty&&this.rasterize(),t.scale(1/this.quality,1/this.quality),t.drawImage(this._bitmap,e,i)}}/**
 * A canvas [[Graphic]] to provide an adapter between the 2D Canvas API and the [[ExcaliburGraphicsContext]].
 *
 * The [[Canvas]] works by re-rastering a draw handler to a HTMLCanvasElement for every draw which is then passed
 * to the [[ExcaliburGraphicsContext]] implementation as a rendered image.
 *
 * **Low performance API**
 */class ig extends i_{/**
     * Return the 2D graphics context of this canvas
     */get ctx(){return this._ctx}constructor(t){super(t),this._options=t}clone(){return new ig({...this._options,...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){var e,i;(null===(e=this._options)||void 0===e?void 0:e.draw)&&(null===(i=this._options)||void 0===i||i.draw(t)),this._options.cache||this.flagDirty()}}class im{}im.type={any:"",blob:"blob",json:"json",text:"text",document:"document",arraybuffer:"arraybuffer"};class iv{constructor(){this.states=new Map}get currentState(){return this._currentState}set currentState(t){this._currentState=t}static create(t,e){let i=new iv;for(let s in i.data=e,t.states)i.states.set(s,{name:s,...t.states[s]});// validate transitions are states
for(let t of i.states.values())for(let e of t.transitions)if("*"!==e&&!i.states.has(e))throw Error(`Invalid state machine, state [${t.name}] has a transition to another state that doesn't exist [${e}]`);return i.currentState=i.startState=i.states.get(t.start),i}in(t){return this.currentState.name===t}go(t,e){var i,s;if(this.currentState.transitions.includes(t)||this.currentState.transitions.includes("*")){let r=this.states.get(t);if(this.currentState.onExit){let t=null===(i=this.currentState)||void 0===i?void 0:i.onExit({to:r.name,data:this.data});if(!1===t)return!1}if(null==r?void 0:r.onEnter){let t=null==r?void 0:r.onEnter({from:this.currentState.name,eventData:e,data:this.data});if(!1===t)return!1}return(// console.log(`${this.currentState.name} => ${potentialNewState.name} (${eventData})`);
this.currentState=r,(null===(s=this.currentState)||void 0===s?void 0:s.onState)&&this.currentState.onState(),!0)}return!1}update(t){this.currentState.onUpdate&&this.currentState.onUpdate(this.data,t)}save(t){localStorage.setItem(t,JSON.stringify({currentState:this.currentState.name,data:this.data}))}restore(t){let e=JSON.parse(localStorage.getItem(t));this.currentState=this.states.get(e.currentState),this.data=e.data}}/**
 * Internal class representing a Web Audio AudioBufferSourceNode instance
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
 */class iy{_createNewBufferSource(){this._instance=this._audioContext.createBufferSource(),this._instance.buffer=this._src,this._instance.loop=this.loop,this._instance.playbackRate.value=this._playbackRate,this._instance.connect(this._volumeNode),this._volumeNode.connect(this._audioContext.destination)}_handleEnd(){this.loop||(this._instance.onended=()=>{this._playingResolve(!0)})}set loop(t){this._loop=t,this._instance&&(this._instance.loop=t,this.loop||(this._instance.onended=()=>{this._playingResolve(!0)}))}get loop(){return this._loop}set volume(t){t=eh(t,0,1),this._volume=t,this._stateMachine.in("PLAYING")&&this._volumeNode.gain.setTargetAtTime?// After each .1 seconds timestep, the target value will ~63.2% closer to the target value.
// This exponential ramp provides a more pleasant transition in gain
this._volumeNode.gain.setTargetAtTime(t,this._audioContext.currentTime,.1):this._volumeNode.gain.value=t}get volume(){return this._volume}/**
     * Returns the set duration to play, otherwise returns the total duration if unset
     */get duration(){var t;return null!==(t=this._duration)&&void 0!==t?t:this.getTotalPlaybackDuration()}/**
     * Set the duration that this audio should play.
     *
     * Note: if you seek to a specific point the duration will start from that point, for example
     *
     * If you have a 10 second clip, seek to 5 seconds, then set the duration to 2, it will play the clip from 5-7 seconds.
     */set duration(t){this._duration=t}constructor(t){this._src=t,this._audioContext=io.create(),this._volumeNode=this._audioContext.createGain(),this._playingPromise=new Promise(t=>{this._playingResolve=t}),this._stateMachine=iv.create({start:"STOPPED",states:{PLAYING:{onEnter:({data:t})=>{// Buffer nodes are single use
this._createNewBufferSource(),this._handleEnd(),this.loop?this._instance.start(0,t.pausedAt*this._playbackRate):this._instance.start(0,t.pausedAt*this._playbackRate,this.duration),t.startedAt=this._audioContext.currentTime-t.pausedAt,t.pausedAt=0},onState:()=>this._playStarted(),onExit:({to:t})=>{"STOPPED"===t&&this._playingResolve(!0),// Whenever you're not playing... you stop!
this._instance.onended=null,this._instance.disconnect(),this._instance.stop(0),this._instance=null},transitions:["STOPPED","PAUSED","SEEK"]},SEEK:{onEnter:({eventData:t,data:e})=>{e.pausedAt=(null!=t?t:0)/this._playbackRate,e.startedAt=0},transitions:["*"]},STOPPED:{onEnter:({data:t})=>{t.pausedAt=0,t.startedAt=0,this._playingResolve(!0)},transitions:["PLAYING","PAUSED","SEEK"]},PAUSED:{onEnter:({data:t})=>{// Playback rate will be a scale factor of how fast/slow the audio is being played
// default is 1.0
// we need to invert it to get the time scale
t.pausedAt=this._audioContext.currentTime-t.startedAt},transitions:["PLAYING","STOPPED","SEEK"]}}},{startedAt:0,pausedAt:0}),this._volume=1,this._loop=!1,// eslint-disable-next-line @typescript-eslint/no-empty-function
this._playStarted=()=>{},this._playbackRate=1,this._createNewBufferSource()}isPlaying(){return this._stateMachine.in("PLAYING")}isPaused(){return this._stateMachine.in("PAUSED")||this._stateMachine.in("SEEK")}// eslint-disable-next-line @typescript-eslint/no-empty-function
play(t=()=>{}){return this._playStarted=t,this._stateMachine.go("PLAYING"),this._playingPromise}pause(){this._stateMachine.go("PAUSED")}stop(){this._stateMachine.go("STOPPED")}seek(t){this._stateMachine.go("PAUSED"),this._stateMachine.go("SEEK",t)}getTotalPlaybackDuration(){return this._src.duration}getPlaybackPosition(){let{pausedAt:t,startedAt:e}=this._stateMachine.data;return t?t*this._playbackRate:e?(this._audioContext.currentTime-e)*this._playbackRate:0}set playbackRate(t){this._instance.playbackRate.value=this._playbackRate=t}get playbackRate(){return this._instance.playbackRate.value}}class ix extends tT{/**
     * Media event cannot bubble
     */set bubbles(t){// stubbed
}/**
     * Media event cannot bubble
     */get bubbles(){return!1}/**
     * Media event cannot bubble, so they have no path
     */get _path(){return null}/**
     * Media event cannot bubble, so they have no path
     */set _path(t){// stubbed
}constructor(t,e="MediaEvent"){super(),this.target=t,this._name=e}/**
     * Prevents event from bubbling
     */stopPropagation(){/**
         * Stub
         */}/**
     * Action, that calls when event happens
     */action(){/**
         * Stub
         */}/**
     * Propagate event further through event path
     */propagate(){/**
         * Stub
         */}layPath(t){/**
         * Stub
         */}}class iw extends ix{constructor(t,e){super(t,"NativeSoundEvent"),this.track=e}}class ib extends ix{constructor(t,e){super(t,"NativeSoundProcessedEvent"),this._processedData=e,this.data=this._processedData}}let iC={VolumeChange:"volumechange",Processed:"processed",Pause:"pause",Stop:"stop",PlaybackEnd:"playbackend",Resume:"resume",PlaybackStart:"playbackstart"};/**
 * The [[Sound]] object allows games built in Excalibur to load audio
 * components, from soundtracks to sound effects. [[Sound]] is an [[Loadable]]
 * which means it can be passed to a [[Loader]] to pre-load before a game or level.
 */class iA{/**
     * Indicates whether the clip should loop when complete
     * @param value  Set the looping flag
     */set loop(t){for(let e of(this._loop=t,this._tracks))e.loop=this._loop;this.logger.debug("Set loop for all instances of sound",this.path,"to",this._loop)}get loop(){return this._loop}set volume(t){for(let e of(this._volume=t,this._tracks))e.volume=this._volume;this.events.emit("volumechange",new iw(this)),this.logger.debug("Set loop for all instances of sound",this.path,"to",this._volume)}get volume(){return this._volume}/**
     * Get the duration that this audio should play. If unset the total natural playback duration will be used.
     */get duration(){return this._duration}/**
     * Set the duration that this audio should play. If unset the total natural playback duration will be used.
     *
     * Note: if you seek to a specific point the duration will start from that point, for example
     *
     * If you have a 10 second clip, seek to 5 seconds, then set the duration to 2, it will play the clip from 5-7 seconds.
     */set duration(t){this._duration=t}/**
     * Return array of Current AudioInstances playing or being paused
     */get instances(){return this._tracks}get path(){return this._resource.path}set path(t){this._resource.path=t}/**
     * Should excalibur add a cache busting querystring? By default false.
     * Must be set before loading
     */get bustCache(){return this._resource.bustCache}set bustCache(t){this._resource.bustCache=t}/**
     * @param paths A list of audio sources (clip.wav, clip.mp3, clip.ogg) for this audio clip. This is done for browser compatibility.
     */constructor(...t){/**
         * Chrome : MP3, WAV, Ogg
         * Firefox : WAV, Ogg,
         * IE : MP3, WAV coming soon
         * Safari MP3, WAV, Ogg
         */for(let e of(this.events=new tS,this.logger=t7.getInstance(),this._loop=!1,this._volume=1,this._isStopped=!1,// private _isPaused = false;
this._tracks=[],this._wasPlayingOnHidden=!1,this._playbackRate=1,this._audioContext=io.create(),this._resource=new eR("",im.type.arraybuffer),t))if(/**
 * Whether or not the browser can play this file as HTML5 Audio
 */function(t){try{let e=new Audio,i=t.match(/.*\.([A-Za-z0-9]+)(?:(?:\?|\#).*)*$/)[1];if(e.canPlayType("audio/"+i))return!0;return!1}catch(t){return t7.getInstance().warn("Cannot determine audio support, assuming no support for the Audio Tag",t),!1}}(e)){this.path=e;break}this.path||(this.logger.warn("This browser does not support any of the audio files specified:",t.join(", ")),this.logger.warn("Attempting to use",t[0]),this.path=t[0])}isLoaded(){return!!this.data}async load(){var t,e;if(this.data)return this.data;let i=await this._resource.load(),s=await this.decodeAudio(i.slice(0));return this._duration=null!==(e=null!==(t=this._duration)&&void 0!==t?t:null==s?void 0:s.duration)&&void 0!==e?e:void 0,this.events.emit("processed",new ib(this,s)),this.data=s}async decodeAudio(t){try{return await this._audioContext.decodeAudioData(t.slice(0))}catch(t){return this.logger.error("Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file."),await Promise.reject()}}wireEngine(t){t&&(this._engine=t,this._engine.on("hidden",()=>{t.pauseAudioWhenHidden&&this.isPlaying()&&(this._wasPlayingOnHidden=!0,this.pause())}),this._engine.on("visible",()=>{t.pauseAudioWhenHidden&&this._wasPlayingOnHidden&&(this.play(),this._wasPlayingOnHidden=!1)}),this._engine.on("start",()=>{this._isStopped=!1}),this._engine.on("stop",()=>{this.stop(),this._isStopped=!0}))}/**
     * Returns how many instances of the sound are currently playing
     */instanceCount(){return this._tracks.length}/**
     * Whether or not the sound is playing right now
     */isPlaying(){return this._tracks.some(t=>t.isPlaying())}isPaused(){return this._tracks.some(t=>t.isPaused())}/**
     * Play the sound, returns a promise that resolves when the sound is done playing
     * An optional volume argument can be passed in to play the sound. Max volume is 1.0
     */play(t){return this.isLoaded()?this._isStopped?(this.logger.warn("Cannot start playing. Engine is in a stopped state."),Promise.resolve(!1)):(this.volume=t||this.volume,this.isPaused())?this._resumePlayback():this._startPlayback():(this.logger.warn("Cannot start playing. Resource",this.path,"is not loaded yet"),Promise.resolve(!0))}/**
     * Stop the sound, and do not rewind
     */pause(){if(this.isPlaying()){for(let t of this._tracks)t.pause();this.events.emit("pause",new iw(this)),this.logger.debug("Paused all instances of sound",this.path)}}/**
     * Stop the sound if it is currently playing and rewind the track. If the sound is not playing, rewinds the track.
     */stop(){for(let t of this._tracks)t.stop();this.events.emit("stop",new iw(this)),this._tracks.length=0,this.logger.debug("Stopped all instances of sound",this.path)}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._tracks.forEach(t=>{t.playbackRate=this._playbackRate})}seek(t,e=0){0===this._tracks.length&&this._getTrackInstance(this.data),this._tracks[e].seek(t)}getTotalPlaybackDuration(){return this.data.duration}/**
     * Return the current playback time of the playing track in seconds from the start.
     *
     * Optionally specify the track to query if multiple are playing at once.
     * @param trackId
     */getPlaybackPosition(t=0){return this._tracks.length?this._tracks[t].getPlaybackPosition():0}/**
     * Get Id of provided AudioInstance in current trackList
     * @param track [[Audio]] which Id is to be given
     */getTrackId(t){return this._tracks.indexOf(t)}async _resumePlayback(){if(this.isPaused){let t=[];// ensure we resume *current* tracks (if paused)
for(let e of this._tracks)t.push(e.play().then(()=>(this.events.emit("playbackend",new iw(this,e)),this._tracks.splice(this.getTrackId(e),1),!0)));this.events.emit("resume",new iw(this)),this.logger.debug("Resuming paused instances for sound",this.path,this._tracks),// resolve when resumed tracks are done
await Promise.all(t)}return!0}/**
     * Starts playback, returns a promise that resolves when playback is complete
     */async _startPlayback(){let t=await this._getTrackInstance(this.data),e=await t.play(()=>{this.events.emit("playbackstart",new iw(this,t)),this.logger.debug("Playing new instance for sound",this.path)});return(// when done, remove track
this.events.emit("playbackend",new iw(this,t)),this._tracks.splice(this.getTrackId(t),1),e)}_getTrackInstance(t){let e=new iy(t);return e.loop=this.loop,e.volume=this.volume,e.duration=this.duration,e.playbackRate=this._playbackRate,this._tracks.push(e),e}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}let iS={};/**
 * Pre-loading assets
 *
 * The loader provides a mechanism to preload multiple resources at
 * one time. The loader must be passed to the engine in order to
 * trigger the loading progress bar.
 *
 * The [[Loader]] itself implements [[Loadable]] so you can load loaders.
 *
 * ## Example: Pre-loading resources for a game
 *
 * ```js
 * // create a loader
 * var loader = new ex.Loader();
 *
 * // create a resource dictionary (best practice is to keep a separate file)
 * var resources = {
 *   TextureGround: new ex.Texture("/images/textures/ground.png"),
 *   SoundDeath: new ex.Sound("/sound/death.wav", "/sound/death.mp3")
 * };
 *
 * // loop through dictionary and add to loader
 * for (var loadable in resources) {
 *   if (resources.hasOwnProperty(loadable)) {
 *     loader.addResource(resources[loadable]);
 *   }
 * }
 *
 * // start game
 * game.start(loader).then(function () {
 *   console.log("Game started!");
 * });
 * ```
 *
 * ## Customize the Loader
 *
 * The loader can be customized to show different, text, logo, background color, and button.
 *
 * ```typescript
 * const loader = new ex.Loader([playerTexture]);
 *
 * // The loaders button text can simply modified using this
 * loader.playButtonText = 'Start the best game ever';
 *
 * // The logo can be changed by inserting a base64 image string here
 *
 * loader.logo = 'data:image/png;base64,iVBORw...';
 * loader.logoWidth = 15;
 * loader.logoHeight = 14;
 *
 * // The background color can be changed like so by supplying a valid CSS color string
 *
 * loader.backgroundColor = 'red'
 * loader.backgroundColor = '#176BAA'
 *
 * // To build a completely new button
 * loader.startButtonFactory = () => {
 *     let myButton = document.createElement('button');
 *     myButton.textContent = 'The best button';
 *     return myButton;
 * };
 *
 * engine.start(loader).then(() => {});
 * ```
 */class iT{get _image(){return this._imageElement||(this._imageElement=new Image,this._imageElement.src=this.logo),this._imageElement}get playButtonRootElement(){return this._playButtonRootElement}get playButtonElement(){return this._playButtonElement}get _playButton(){let t=document.getElementById("excalibur-play-root");return t&&(this._playButtonRootElement=t),this._playButtonRootElement||(this._playButtonRootElement=document.createElement("div"),this._playButtonRootElement.id="excalibur-play-root",this._playButtonRootElement.style.position="absolute",document.body.appendChild(this._playButtonRootElement)),this._styleBlock||(this._styleBlock=document.createElement("style"),this._styleBlock.textContent=this._playButtonStyles,document.head.appendChild(this._styleBlock)),this._playButtonElement||(this._playButtonElement=this.startButtonFactory(),this._playButtonRootElement.appendChild(this._playButtonElement)),this._playButtonElement}/**
     * @param loadables  Optionally provide the list of resources you want to load at constructor time
     */constructor(t){this.events=new tS,this.canvas=new ig({filtering:G.Blended,smoothing:!0,cache:!0,draw:this.draw.bind(this)}),this._resourceList=[],this._index=0,this._playButtonShown=!1,this._resourceCount=0,this._numLoaded=0,this._progressCounts={},this._totalCounts={},// logo drawing stuff
// base64 string encoding of the excalibur logo (logo-white.png)
this.logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAB2CAYAAABxhGI9AAAACXBIWXMAAAsSAAALEgHS3X78AAAKnUlEQVR42u3dP2wjSx0H8N8hJIonIRmJjsq0SBR+BQ1dcqKhe0lD77SvSwpKkJKGPulpktfRIMUdEqKIqV57rpAokM4dbSiyq7ONPTP7x39ifz7SFbnEnp3xer47O7uzH15fXwMA6OYHmgAABCoACFQAEKgAgEAFAIEKAAIVAAQqACBQAUCgAoBABQCBCgAIVAAQqAAgUAFAoAIAAhUABCoACFQAEKgAgECFLbmOiNeFf2PbAyz68Pr6qhUgbRwR92v+/zwiJrYHMEKFMmcN///UtgcQqFBk1PD/97U9Qx8VCFSgu4EmAIEKAAIVAAQqACBQ4Z25jojP8eX+0WtNAgIVaOY+Im5j+eKh24h41jQgUIEyZ7F5NaPU7wCBCiwYd/w9cOB+qAlgJ3KLLow0EV198803RWvJfvfddx+0lhEqHKu5JgAjVCBvlhmFzjQRXUekHz9+TP79y8uLRjNChXfvoePvAYEKxNtj1e42/O5JoIJABcrdRMRVLM+X3kTEpaaB988cKuzWg9EobTWdMx0Oly8uN4dqhAoARqgnaN3arHfqu7OyH8ItKLVB/P+CEfMTHyGPY3npx1m8zWGDEeoBfUk/xdti57dr/r1Wv2+6EPow3tZ5rRdS72s1neuF97xvWd+XTH0/V+UMttDWqbI/r2nrxfp+jv2uSjSO7S+OXy/A/3lN+9xX5T5HxEUPZZ0tfB71+w57eJ/HFu+z+jkv1u92YX9fbI/HhX3JA9rp5MPr66tWaG9UfUGbrHIzi7cLUyYFf/tpTady03EEeL8mUJ6i7MKYNvWNqr4Pe2jradXO60LrvPAz2PQ5RPX684ah8dxD+2zantnCgVipSVV+m/tgB9W2DDq2Sx/vM95wcHhZhWVJm8yrv58cSgfTdc70+++/X/r522+/tUKSEepBqo+om4ZLPerMjUwuNnQCtx1GWJtee1FwdD5uWd86xLs8UaVt2aNEO1/saZ/Z5rYMW4zq6v34rGV9Bg3q2eZ9SkeNm9qwyUh30OPIHYFKx5FG03C7znSOqYBq+qW/zpQ3anH037TNHluG6f0WPsPhHvab4QFty7ogOeuxDYcNy2/zu2214WNYWxmBurNO8bGn97pNBOO8xy/9uCorZZ4I2r4C7aJgO7ZV9iE49Dm6NvOWx+pWE9CUq3zbdTp9doz38TbXtzqH9RT5CyWe422OaZoZGeZCabrhPQY9HjwsjpTvCg4YtlE2+Ta/j2bzn8fqrDqgm+6yUHOmAvWUjAtGhbNYvsBknDnqH1Qhc7VmxHgeb/NbudA5j/UXlYwif2p6luhAc9teu1npiHKnDs8if6tCm7JLX3NKpgttXe9ruc9mHMd7a83iwdxF5vt8tutARaCeklRnNK9C8WnNF7geJQ4T4XG3JhSnVdilQrG+yOnrlVHfsEGYzhNBn7Lu6tS7+HJafJQ4EMiNlNqWXZ9WPvVgnVYHG5M1ByDXkT6leX2EgTqJtyt45yv7S2qO3sEZjZhDLXeR+YKdJ0Zdk8QocvH9N732KrNtq+FZ/zzIHABcJrYpd+Xv14lOd5ap76SgrduW/VTQ1qcQpqnbgu4ifZvUMNpd9XuoZmvCtPaQ2Y/BCHVLgbrJTeRPDdVf6pfMKDU2fOkHmVFFfXr3MsouLsnNvV5kRoe5+s431PeuoKPqWnaurY/ZPBEeqwceN4l96iwO6H7Mjq4y7VGPVNe10VaZMzVCPVWpI/Z6FZbcv5fMqGCU+dLfFGzj58jP8+bCdJCo7yzKTwdOF0bu9Ug7V4c+yz7FJfYeGoysUss0HssIdVZwYLDujMqlESoCdTtGsZtbHnJBeNdDSJSs0jTKdMJN1HNX54Wv7bvsU9NkVJVa13dX+/wuArV0X/l5RHyo/lnfF4G6p6DrS0kHdtXhy35TGErDPYZUn2WfWqDOo/lVqdMD2O/hKJhD7S/odukymq9s02QN4EEPR/zbaOumZc+r15zK1Zqznl9jsfiemTM1QmV3HUuTkedlg9HIQzRbUD93dfC+2tpj2fIHEH2+RqCCQH13gZq7hWXTNpVu19OB1fc9nQ0AKOKUb5lU0P1kDyOneoWk0lOZ9cIP0x7qu8+2BhCoR2wYu1+e7DmaXzBSsu5vaX1ne2zrpmUPTmxf7PM1Dm4y/vC7ny7Nif7+z/9ZmtM0Z3panPLtPmra9f16bcK0Dpbnwk43Vd/RHtu6zfNQTy1QBy3aqG2g9nVmxml+BOoJyT3NpWmn9xhfFnu4bvDa+44BXhqqfdf3uUF9+yz77AT31Yue2mjecYQ62NLfgkA9ghHqLNEhNem4H1c6vdyDxhf/bpz5m4coW/c39wi6VH2bPtHlcaV9cvXts+zxCe6rTeqc2ndL7uGd93QwM9bFcAzMoZZ7SgTBbWx+asui61h/iq1+RmjqdbnQXQ3T1DNQ63V/U9ucqm/pMzPb1rePsk/1iTOjgvatR4W3Lc8ULB78pELyrnAfeTcj1NU509/86mfJ33/8+Mf00a05UyPUEw7UVCeWG/WNEiExyHRMt5ltW30izUPk18ytt7lNfc8i//DvtvXto+ySA5BjljsLUF8lPkqMPEtW1JomDsiGBZ9Byb4NAvUITSN9GuwsIj6t6UTOqk7jJREkmzqli8xIs96udSO20sX0H1vW92IL9e1a9rgqVyf91gbPsTy9UD9n9lOkT8k+RfkFR5PMNqxOcdSf32PBvg3vilO+zdxE+okx9Wm0ph36XYsRZCpMF993GOk5qvqB3Dct6jvssb67KvuUNJ3frw92bhr8/STSF0JdRPMLpUCgnsgo9S76PZ246ZFk1wWvK5m3vVoYvW1Sz7nN91jfXbQ1ZQc7TW6HeaoOalypG/8/p/rP1aNAc6ZHzSnfdqPUPhdy2PQw6Nz9gSVhuhiqueUHR3uu7y7K3rdDX4u46ZrPbUa0IFBZ0seKQ3XQTRt2vm3W/a2DbNKys++rvm3ep6+y1x2UdP3bWU9lzra47U1GmlctX/sQ23t+aOlByLTh/4NAPaCRxtcdO5HLSJ/6vNtCwGx67VPmPbvWd1q9frKHtp4kAqRJ2HR9j762JfX3bZ//elPtj13PPDx1+D5tqk/Xi6NO8SHz7MmH19dXrdBNfVFP6T2PT1UHNit87/t4m5+aRH+nQBdvqyhZDKJLfZs8h7XPsqdV2ZOV+tanKB8aln0dyxdAXbV4j4gvt4oMOrbP6vbU73NW7TMlbdTnPrWpfqXfh9HKZ9vke7KuTeZRNtXRSe6+1FV//ce/ln5eXfsXgcqXzr6+9261M3moOoa7E6nvTZTfy7iNsmfb7kjfgXGsvxe0vihsEts9HTquPpt1q1vtahu2TqAiUAEEKj0zhwoARqgAu/OnX/442WH+9xc/Wvr58re/Tr7f41/+ZsRqhAoACFQAEKgAcHjMoQJskJsz/eqrr5Z+vvr7v5fmQFevAl5lztQIFQAQqAAgUAHgIJlDBdhgdQ41N2eKESoAIFABQKACwFEwhwoARqgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAEKgAgUAFAoAKAQAUAgQoACFQAEKgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAQqAAgUAFAoAKAQAUAlvwPcFDns1DsH4sAAAAASUVORK5CYII=",this.logoWidth=468,this.logoHeight=118,/**
         * Gets or sets the color of the loading bar, default is [[Color.White]]
         */this.loadingBarColor=ef.White,/**
         * Gets or sets the background color of the loader as a hex string
         */this.backgroundColor="#176BAA",this.suppressPlayButton=!1,/** Loads the css from Loader.css */this._playButtonStyles=ip/* default */.Z.toString(),/**
         * Get/set play button text
         */this.playButtonText="Play game",/**
         * Return a html button element for excalibur to use as a play button
         */this.startButtonFactory=()=>{let t=document.getElementById("excalibur-play");return t||(t=document.createElement("button")),t.id="excalibur-play",t.textContent=this.playButtonText,t.style.display="none",t},this._loadingFuture=new ex,t&&this.addResources(t)}wireEngine(t){this._engine=t,this.canvas.width=this._engine.canvas.width,this.canvas.height=this._engine.canvas.height}/**
     * Add a resource to the loader to load
     * @param loadable  Resource to add
     */addResource(t){let e=this._index++;this._resourceList.push(t),this._progressCounts[e]=0,this._totalCounts[e]=1,this._resourceCount++}/**
     * Add a list of resources to the loader to load
     * @param loadables  The list of resources to load
     */addResources(t){let e=0,i=t.length;for(;e<i;e++)this.addResource(t[e])}/**
     * Returns true if the loader has completely loaded all resources
     */isLoaded(){return this._numLoaded===this._resourceCount}/**
     * Shows the play button and returns a promise that resolves when clicked
     */async showPlayButton(){var t,e;if(this.suppressPlayButton)this.hidePlayButton(),// Delay is to give the logo a chance to show, otherwise don't delay
await eT(500,null===(t=this._engine)||void 0===t?void 0:t.clock);else{let t=()=>{this._positionPlayButton()};(null===(e=this._engine)||void 0===e?void 0:e.browser)&&this._engine.browser.window.on("resize",t),this._playButtonShown=!0,this._playButton.style.display="block",document.body.addEventListener("keyup",t=>{"Enter"===t.key&&this._playButton.click()}),this._positionPlayButton();let i=new Promise(e=>{let i=i=>{var s;// We want to stop propagation to keep bubbling to the engine pointer handlers
i.stopPropagation(),// Hide Button after click
this.hidePlayButton(),(null===(s=this._engine)||void 0===s?void 0:s.browser)&&this._engine.browser.window.off("resize",t),e()};this._playButton.addEventListener("click",i),this._playButton.addEventListener("touchend",i),this._playButton.addEventListener("pointerup",i)});return await i}}hidePlayButton(){this._playButtonShown=!1,this._playButton.style.display="none"}/**
     * Clean up generated elements for the loader
     */dispose(){this._playButtonRootElement.parentElement&&(this._playButtonRootElement.removeChild(this._playButtonElement),document.body.removeChild(this._playButtonRootElement),document.head.removeChild(this._styleBlock),this._playButtonRootElement=null,this._playButtonElement=null,this._styleBlock=null)}update(t,e){// override me
}areResourcesLoaded(){return this._loadingFuture.promise}/**
     * Begin loading all of the supplied resources, returning a promise
     * that resolves when loading of all is complete AND the user has clicked the "Play button"
     */async load(){var t,e;// Wire all sound to the engine
for(let e of(await (null===(t=this._image)||void 0===t?void 0:t.decode()),this.canvas.flagDirty(),await Promise.all(this._resourceList.map(async t=>{await t.load().finally(()=>{// capture progress
this._numLoaded++,this.canvas.flagDirty()})})),this._resourceList))e instanceof iA&&e.wireEngine(this._engine);return this._loadingFuture.resolve(),// short delay in showing the button for aesthetics
await eT(200,null===(e=this._engine)||void 0===e?void 0:e.clock),this.canvas.flagDirty(),await this.showPlayButton(),// Unlock browser AudioContext in after user gesture
// See: https://github.com/excaliburjs/Excalibur/issues/262
// See: https://github.com/excaliburjs/Excalibur/issues/1031
await ia.unlock(),this.data=this._resourceList}markResourceComplete(){this._numLoaded++}/**
     * Returns the progress of the loader as a number between [0, 1] inclusive.
     */get progress(){return this._resourceCount>0?eh(this._numLoaded,0,this._resourceCount)/this._resourceCount:1}_positionPlayButton(){if(this._engine){let t=this._engine.screen.viewport.height,e=this._engine.screen.viewport.width;if(this._playButtonRootElement){let i=this._engine.canvas.offsetLeft,s=this._engine.canvas.offsetTop,r=this._playButton.clientWidth,n=this._playButton.clientHeight;this.playButtonPosition?(this._playButtonRootElement.style.left=`${this.playButtonPosition.x}px`,this._playButtonRootElement.style.top=`${this.playButtonPosition.y}px`):(this._playButtonRootElement.style.left=`${i+e/2-r/2}px`,this._playButtonRootElement.style.top=`${s+t/2-n/2+100}px`)}}}/**
     * Loader draw function. Draws the default Excalibur loading screen.
     * Override `logo`, `logoWidth`, `logoHeight` and `backgroundColor` properties
     * to customize the drawing, or just override entire method.
     */draw(t){let e=this._engine.canvasHeight/this._engine.pixelRatio,i=this._engine.canvasWidth/this._engine.pixelRatio;this._positionPlayButton(),t.fillStyle=this.backgroundColor,t.fillRect(0,0,i,e);let s=e/2,r=Math.min(this.logoWidth,.75*i),n=i/2-r/2;this.logoPosition&&(n=this.logoPosition.x,s=this.logoPosition.y);let o=Math.floor(r*(this.logoHeight/this.logoWidth)),a=this._engine.getAntialiasing();// OG height/width factor
// loading box
if(this._engine.setAntialiasing(!0),this.logoPosition?t.drawImage(this._image,0,0,this.logoWidth,this.logoHeight,n,s,r,o):t.drawImage(this._image,0,0,this.logoWidth,this.logoHeight,n,s-o-20,r,o),!this.suppressPlayButton&&this._playButtonShown){this._engine.setAntialiasing(a);return}let h=n,l=s;this.loadingBarPosition&&(h=this.loadingBarPosition.x,l=this.loadingBarPosition.y),t.lineWidth=2,ic(t,h,l,r,20,10,this.loadingBarColor);let d=r*this.progress,c=d-10;ic(t,h+5,l+5,c>10?c:10,10,5,null,this.loadingBarColor),this._engine.setAntialiasing(a)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}/**
 * This is the list of features that will be used to log the supported
 * features to the console when Detector.logBrowserFeatures() is called.
 */let iE={webgl:"WebGL",webaudio:"WebAudio",gamepadapi:"Gamepad API"};/**
 * Excalibur internal feature detection helper class
 */class iP{constructor(){this._features=null,this.failedTests=[],// critical browser features required for ex to run
this._criticalTests={// Test canvas/2d context support
canvasSupport:function(){let t=document.createElement("canvas");return!!(t.getContext&&t.getContext("2d"))},// Test array buffer support ex uses for downloading binary data
arrayBufferSupport:function(){let t=new XMLHttpRequest;t.open("GET","/");try{t.responseType="arraybuffer"}catch(t){return!1}return"arraybuffer"===t.responseType},// Test data urls ex uses for sprites
dataUrlSupport:function(){let t=document.createElement("canvas");return 0===t.toDataURL("image/png").indexOf("data:image/png")},// Test object url support for loading
objectUrlSupport:function(){return"URL"in window&&"revokeObjectURL"in URL&&"createObjectURL"in URL},// RGBA support for colors
rgbaSupport:function(){let t=document.createElement("a").style;return t.cssText="background-color:rgba(150,255,150,.5)",(""+t.backgroundColor).indexOf("rgba")>-1}},// warnings excalibur performance will be degraded
this._warningTest={webAudioSupport:function(){return!!(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext||window.oAudioContext)},webglSupport:function(){let t=document.createElement("canvas");return!!(t.getContext&&t.getContext("webgl"))}},this._features=this._loadBrowserFeatures()}/**
     * Returns a map of currently supported browser features. This method
     * treats the features as a singleton and will only calculate feature
     * support if it has not previously been done.
     */getBrowserFeatures(){return null===this._features&&(this._features=this._loadBrowserFeatures()),this._features}/**
     * Report on non-critical browser support for debugging purposes.
     * Use native browser console colors for visibility.
     */logBrowserFeatures(){let t="%cSUPPORTED BROWSER FEATURES\n==========================%c\n",e=["font-weight: bold; color: navy","font-weight: normal; color: inherit"],i=this.getBrowserFeatures();for(let s of Object.keys(iE))i[s]?(t+="(%c✓%c)",e.push("font-weight: bold; color: green")):(t+="(%c✗%c)",e.push("font-weight: bold; color: red")),e.push("font-weight: normal; color: inherit"),t+=" "+iE[s]+"\n";e.unshift(t),// eslint-disable-next-line no-console
console.log.apply(console,e)}/**
     * Executes several IIFE's to get a constant reference to supported
     * features within the current execution context.
     */_loadBrowserFeatures(){return{// IIFE to check canvas support
canvas:this._criticalTests.canvasSupport(),// IIFE to check arraybuffer support
arraybuffer:this._criticalTests.arrayBufferSupport(),// IIFE to check dataurl support
dataurl:this._criticalTests.dataUrlSupport(),// IIFE to check objecturl support
objecturl:this._criticalTests.objectUrlSupport(),// IIFE to check rgba support
rgba:this._criticalTests.rgbaSupport(),// IIFE to check webaudio support
webaudio:this._warningTest.webAudioSupport(),// IIFE to check webgl support
webgl:this._warningTest.webglSupport(),// IIFE to check gamepadapi support
gamepadapi:!!navigator.getGamepads}}test(){// Critical test will for ex not to run
let t=!1;for(let e in this._criticalTests)this._criticalTests[e].call(this)||(this.failedTests.push(e),t7.getInstance().error("Critical browser feature missing, Excalibur requires:",e),t=!0);if(t)return!1;// Warning tests do not for ex to return false to compatibility
for(let t in this._warningTest)this._warningTest[t]()||t7.getInstance().warn("Warning browser feature missing, Excalibur will have reduced performance:",t);return!0}}/**
     * Bodies with the `PreventCollision` setting do not participate in any
     * collisions and do not raise collision events.
     */(p=X||(X={})).PreventCollision="PreventCollision",/**
     * Bodies with the `Passive` setting only raise collision events, but are not
     * influenced or moved by other bodies and do not influence or move other bodies.
     * This is useful for use in trigger type behavior.
     */p.Passive="Passive",/**
     * Bodies with the `Active` setting raise collision events and participate
     * in collisions with other bodies and will be push or moved by bodies sharing
     * the `Active` or `Fixed` setting.
     */p.Active="Active",/**
     * Bodies with the `Fixed` setting raise collision events and participate in
     * collisions with other bodies. Actors with the `Fixed` setting will not be
     * pushed or moved by other bodies sharing the `Fixed`. Think of Fixed
     * bodies as "immovable/unstoppable" objects. If two `Fixed` bodies meet they will
     * not be pushed or moved by each other, they will not interact except to throw
     * collision events.
     */p.Fixed="Fixed";let iI=5,iM={},ik=()=>{for(let t in iM)iM[t]=0},iR=(t,e)=>{let i=tC.isEnabled("suppress-obsolete-message");iM[t]<iI&&!i&&(t7.getInstance().warn(t),console.trace&&e.showStackTrace&&console.trace()),iM[t]++};/**
 * Obsolete decorator for marking Excalibur methods obsolete, you can optionally specify a custom message and/or alternate replacement
 * method do the deprecated one. Inspired by https://github.com/jayphelps/core-decorators.js
 */function iD(t){return t={message:"This feature will be removed in future versions of Excalibur.",alternateMethod:null,showStackTrace:!1,...t},function(e,i,s){if(s&&!("function"==typeof s.value||"function"==typeof s.get||"function"==typeof s.set))throw SyntaxError("Only classes/functions/getters/setters can be marked as obsolete");let r=`${e.name||""}${e.name&&i?".":""}${i||""}`,n=`${r} is marked obsolete: ${t.message}`+(t.alternateMethod?` Use ${t.alternateMethod} instead`:"");iM[n]||(iM[n]=0);// If descriptor is null it is a class
let o=s?{...s}:e;return s?(s&&s.value?o.value=function(){return iR(n,t),s.value.apply(this,arguments)}:(s&&s.get&&(o.get=function(){return iR(n,t),s.get.apply(this,arguments)}),s&&s.set&&(o.set=function(){return iR(n,t),s.set.apply(this,arguments)})),o):// with es2015 classes we need to change our decoration tactic
class extends o{constructor(...e){iR(n,t),super(...e)}}}}(_=Z||(Z={})).Arcade="arcade",_.Realistic="realistic",(g=K||(K={}))[g.DynamicAABBTree=0]="DynamicAABBTree",(m=Y||(Y={}))[m.Euler=0]="Euler";/**
 * The [[Physics]] object is the global configuration object for all Excalibur physics.
 *//* istanbul ignore next */class iB{static get gravity(){return iB.acc}static set gravity(t){iB.acc=t}/**
     * Configures Excalibur to use "arcade" physics. Arcade physics which performs simple axis aligned arcade style physics.
     */static useArcadePhysics(){iB.collisionResolutionStrategy=Z.Arcade}/**
     * Configures Excalibur to use rigid body physics. Rigid body physics allows for complicated
     * simulated physical interactions.
     */static useRealisticPhysics(){iB.collisionResolutionStrategy=Z.Realistic}static get dynamicTreeVelocityMultiplyer(){return iB.dynamicTreeVelocityMultiplier}static set dynamicTreeVelocityMultiplyer(t){iB.dynamicTreeVelocityMultiplier=t}}/**
 * Global acceleration that is applied to all vanilla actors that have a [[CollisionType.Active|active]] collision type.
 * Global acceleration won't effect [[Label|labels]], [[ScreenElement|ui actors]], or [[Trigger|triggers]] in Excalibur.
 *
 * This is a great way to globally simulate effects like gravity.
 */iB.acc=new eg(0,0),/**
 * Globally switches all Excalibur physics behavior on or off.
 */iB.enabled=!0,/**
 * Gets or sets the broadphase pair identification strategy.
 *
 * The default strategy is [[BroadphaseStrategy.DynamicAABBTree]] which uses a binary tree of axis-aligned bounding boxes to identify
 * potential collision pairs which is O(nlog(n)) faster.
 */iB.broadphaseStrategy=K.DynamicAABBTree,/**
 * Gets or sets the global collision resolution strategy (narrowphase).
 *
 * The default is [[CollisionResolutionStrategy.Arcade]] which performs simple axis aligned arcade style physics.
 *
 * More advanced rigid body physics are enabled by setting [[CollisionResolutionStrategy.Realistic]] which allows for complicated
 * simulated physical interactions.
 */iB.collisionResolutionStrategy=Z.Arcade,/**
 * The default mass to use if none is specified
 */iB.defaultMass=10,/**
 * Gets or sets the position and velocity positional integrator, currently only Euler is supported.
 */iB.integrator=Y.Euler,/**
 * Factor to add to the RigidBody BoundingBox, bounding box (dimensions += vel * dynamicTreeVelocityMultiplier);
 */iB.dynamicTreeVelocityMultiplier=2,/**
 * Pad RigidBody BoundingBox by a constant amount
 */iB.boundsPadding=5,/**
 * Number of position iterations (overlap) to run in the solver
 */iB.positionIterations=3,/**
 * Number of velocity iteration (response) to run in the solver
 */iB.velocityIterations=8,/**
 * Amount of overlap to tolerate in pixels
 */iB.slop=1,/**
 * Amount of positional overlap correction to apply each position iteration of the solver
 * O - meaning no correction, 1 - meaning correct all overlap
 */iB.steeringFactor=.2,/**
 * Warm start set to true re-uses impulses from previous frames back in the solver
 */iB.warmStart=!0,/**
 * By default bodies do not sleep
 */iB.bodiesCanSleepByDefault=!1,/**
 * Surface epsilon is used to help deal with surface penetration
 */iB.surfaceEpsilon=.1,iB.sleepEpsilon=.07,iB.wakeThreshold=3*iB.sleepEpsilon,iB.sleepBias=.9,/**
 * Enable fast moving body checking, this enables checking for collision pairs via raycast for fast moving objects to prevent
 * bodies from tunneling through one another.
 */iB.checkForFastBodies=!0,/**
 * Disable minimum fast moving body raycast, by default if ex.Physics.checkForFastBodies = true Excalibur will only check if the
 * body is moving at least half of its minimum dimension in an update. If ex.Physics.disableMinimumSpeedForFastBody is set to true,
 * Excalibur will always perform the fast body raycast regardless of speed.
 */iB.disableMinimumSpeedForFastBody=!1,function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);n>3&&o&&Object.defineProperty(e,i,o)}([iD({message:"Alias for incorrect spelling used in older versions, will be removed in v0.25.0",alternateMethod:"dynamicTreeVelocityMultiplier"})],iB,"dynamicTreeVelocityMultiplyer",null),/**
     * The world coordinate plane (default) represents world space, any entities drawn with world
     * space move when the camera moves.
     */(f=j||(j={})).World="world",/**
     * The screen coordinate plane represents screen space, entities drawn in screen space are pinned
     * to screen coordinates ignoring the camera.
     */f.Screen="screen";class iF extends eg{constructor(t){super(0,0),this._getX=t.getX,this._getY=t.getY,this._setX=t.setX,this._setY=t.setY}get x(){return this._x=this._getX()}set x(t){this._setX(t),this._x=t}get y(){return this._y=this._getY()}set y(t){this._setY(t),this._y=t}}/**
 * Wraps a vector and watches for changes in the x/y, modifies the original vector.
 */class iU extends eg{constructor(t,e){super(t.x,t.y),this.original=t,this.change=e}get x(){return this._x=this.original.x}set x(t){this.change(t,this._y),this._x=this.original.x=t}get y(){return this._y=this.original.y}set y(t){this.change(this._x,t),this._y=this.original.y=t}}class iL{constructor(){this._parent=null,this._children=[],this._pos=em(0,0),this._rotation=0,this._scale=em(1,1),this._isDirty=!1,this._isInverseDirty=!1,this._matrix=eP.identity(),this._inverse=eP.identity()}get parent(){return this._parent}set parent(t){if(this._parent){let t=this._parent._children.indexOf(this);t>-1&&this._parent._children.splice(t,1)}this._parent=t,this._parent&&this._parent._children.push(this),this.flagDirty()}get children(){return this._children}set pos(t){t.equals(this._pos)||(this._pos.x=t.x,this._pos.y=t.y,this.flagDirty())}get pos(){return new iU(this._pos,(t,e)=>{(t!==this._pos.x||e!==this._pos.y)&&this.flagDirty()})}set globalPos(t){let e=t.clone();this.parent&&(e=this.parent.inverse.multiply(t)),e.equals(this._pos)||(this._pos=e,this.flagDirty())}get globalPos(){return new iF({getX:()=>this.matrix.data[4],getY:()=>this.matrix.data[5],setX:t=>{if(this.parent){let{x:e}=this.parent.inverse.multiply(em(t,this.pos.y));this.pos.x=e}else this.pos.x=t;t!==this.matrix.data[4]&&this.flagDirty()},setY:t=>{if(this.parent){let{y:e}=this.parent.inverse.multiply(em(this.pos.x,t));this.pos.y=e}else this.pos.y=t;t!==this.matrix.data[5]&&this.flagDirty()}})}set rotation(t){let e=el(t);e!==this._rotation&&this.flagDirty(),this._rotation=e}get rotation(){return this._rotation}set globalRotation(t){let e=0;this.parent&&(e=this.parent.globalRotation);let i=el(t+e);i!==this._rotation&&this.flagDirty(),this._rotation=i}get globalRotation(){return this.parent?this.matrix.getRotation():this.rotation}set scale(t){t.equals(this._scale)||(this._scale.x=t.x,this._scale.y=t.y,this.flagDirty())}get scale(){return new iU(this._scale,(t,e)=>{(t!==this._scale.x||e!==this._scale.y)&&this.flagDirty()})}set globalScale(t){let e=em(1,1);this.parent&&(e=this.parent.globalScale),this.scale=t.scale(em(1/e.x,1/e.y))}get globalScale(){return new iF({getX:()=>this.parent?this.matrix.getScaleX():this.scale.x,getY:()=>this.parent?this.matrix.getScaleY():this.scale.y,setX:t=>{if(this.parent){let e=this.parent.globalScale.x;this.scale.x=t/e}else this.scale.x=t},setY:t=>{if(this.parent){let e=this.parent.globalScale.y;this.scale.y=t/e}else this.scale.y=t}})}get matrix(){return this._isDirty&&(null===this.parent?this._matrix=this._calculateMatrix():this._matrix=this.parent.matrix.multiply(this._calculateMatrix()),this._isDirty=!1),this._matrix}get inverse(){return this._isInverseDirty&&(this._inverse=this.matrix.inverse(),this._isInverseDirty=!1),this._inverse}_calculateMatrix(){let t=eP.identity().translate(this.pos.x,this.pos.y).rotate(this.rotation).scale(this.scale.x,this.scale.y);return t}flagDirty(){this._isDirty=!0,this._isInverseDirty=!0;for(let t=0;t<this._children.length;t++)this._children[t].flagDirty()}apply(t){return this.matrix.multiply(t)}applyInverse(t){return this.inverse.multiply(t)}setTransform(t,e,i){this._pos.x=t.x,this._pos.y=t.y,this._rotation=el(e),this._scale.x=i.x,this._scale.y=i.y,this.flagDirty()}clone(t){let e=null!=t?t:new iL;return this._pos.clone(e._pos),e._rotation=this._rotation,this._scale.clone(e._scale),e.flagDirty(),e}}/**
 * Components are containers for state in Excalibur, the are meant to convey capabilities that an Entity possesses
 *
 * Implementations of Component must have a zero-arg constructor to support dependencies
 *
 * ```typescript
 * class MyComponent extends ex.Component<'my'> {
 *   public readonly type = 'my';
 *   // zero arg support required if you want to use component dependencies
 *   constructor(public optionalPos?: ex.Vector) {}
 * }
 * ```
 */class iz{constructor(){/**
         * Current owning [[Entity]], if any, of this component. Null if not added to any [[Entity]]
         */this.owner=null}/**
     * Clones any properties on this component, if that property value has a `clone()` method it will be called
     */clone(){let t=new this.constructor;for(let e in this)if(this.hasOwnProperty(e)){let i=this[e];(null==i?void 0:i.clone)&&"owner"!==e&&"clone"!==e?t[e]=i.clone():t[e]=i}return t}}/**
 * Tag components are a way of tagging a component with label and a simple value
 *
 * For example:
 *
 * ```typescript
 * const isOffscreen = new TagComponent('offscreen');
 * entity.addComponent(isOffscreen);
 * entity.tags.includes
 * ```
 */class iO extends iz{constructor(t,e){super(),this.type=t,this.value=e}}/**
 * Simple Observable implementation
 * @template T is the typescript Type that defines the data being observed
 */class iH{constructor(){this.observers=[],this.subscriptions=[]}/**
     * Register an observer to listen to this observable
     * @param observer
     */register(t){this.observers.push(t)}/**
     * Register a callback to listen to this observable
     * @param func
     */subscribe(t){this.subscriptions.push(t)}/**
     * Remove an observer from the observable
     * @param observer
     */unregister(t){let e=this.observers.indexOf(t);-1!==e&&this.observers.splice(e,1)}/**
     * Remove a callback that is listening to this observable
     * @param func
     */unsubscribe(t){let e=this.subscriptions.indexOf(t);-1!==e&&this.subscriptions.splice(e,1)}/**
     * Broadcasts a message to all observers and callbacks
     * @param message
     */notifyAll(t){let e=this.observers.length;for(let i=0;i<e;i++)this.observers[i].notify(t);let i=this.subscriptions.length;for(let e=0;e<i;e++)this.subscriptions[e](t)}/**
     * Removes all observers and callbacks
     */clear(){this.observers.length=0,this.subscriptions.length=0}}class iN extends iz{constructor(){super(...arguments),this.type="ex.transform",this._transform=new iL,this._addChildTransform=t=>{let e=t.get(iN);e&&(e._transform.parent=this._transform)},/**
         * Observable that emits when the z index changes on this component
         */this.zIndexChanged$=new iH,this._z=0,/**
         * The [[CoordPlane|coordinate plane|]] for this transform for the entity.
         */this.coordPlane=j.World}get(){return this._transform}onAdd(t){for(let e of t.children)this._addChildTransform(e);t.childrenAdded$.subscribe(t=>this._addChildTransform(t)),t.childrenRemoved$.subscribe(t=>{let e=t.get(iN);e&&(e._transform.parent=null)})}onRemove(t){this._transform.parent=null}/**
     * The z-index ordering of the entity, a higher values are drawn on top of lower values.
     * For example z=99 would be drawn on top of z=0.
     */get z(){return this._z}set z(t){let e=this._z;this._z=t,e!==t&&this.zIndexChanged$.notifyAll(t)}get pos(){return this._transform.pos}set pos(t){this._transform.pos=t}get globalPos(){return this._transform.globalPos}set globalPos(t){this._transform.globalPos=t}get rotation(){return this._transform.rotation}set rotation(t){this._transform.rotation=t}get globalRotation(){return this._transform.globalRotation}set globalRotation(t){this._transform.globalRotation=t}get scale(){return this._transform.scale}set scale(t){this._transform.scale=t}get globalScale(){return this._transform.globalScale}set globalScale(t){this._transform.globalScale=t}applyInverse(t){return this._transform.applyInverse(t)}apply(t){return this._transform.apply(t)}clone(){let t=new iN;return t._transform=this._transform.clone(),t._z=this._z,t}}class i$ extends iz{constructor(){super(...arguments),this.type="ex.motion",/**
         * The velocity of an entity in pixels per second
         */this.vel=eg.Zero,/**
         * The acceleration of entity in pixels per second^2
         */this.acc=eg.Zero,/**
         * The scale rate of change in scale units per second
         */this.scaleFactor=eg.Zero,/**
         * The angular velocity which is how quickly the entity is rotating in radians per second
         */this.angularVelocity=0,/**
         * The amount of torque applied to the entity, angular acceleration is torque * inertia
         */this.torque=0,/**
         * Inertia can be thought of as the resistance to motion
         */this.inertia=1}}/**
 * CollisionGroups indicate like members that do not collide with each other. Use [[CollisionGroupManager]] to create [[CollisionGroup]]s
 *
 * For example:
 *
 * Players have collision group "player"
 *
 * ![Player Collision Group](/assets/images/docs/CollisionGroupsPlayer.png)
 *
 * Enemies have collision group "enemy"
 *
 * ![Enemy Collision Group](/assets/images/docs/CollisionGroupsEnemy.png)
 *
 * Blocks have collision group "ground"
 *
 * ![Ground collision group](/assets/images/docs/CollisionGroupsGround.png)
 *
 * Players don't collide with each other, but enemies and blocks. Likewise, enemies don't collide with each other but collide
 * with players and blocks.
 *
 * This is done with bitmasking, see the following pseudo-code
 *
 * PlayerGroup = `0b001`
 * PlayerGroupMask = `0b110`
 *
 * EnemyGroup = `0b010`
 * EnemyGroupMask = `0b101`
 *
 * BlockGroup = `0b100`
 * BlockGroupMask = `0b011`
 *
 * Should Players collide? No because the bitwise mask evaluates to 0
 * `(player1.group & player2.mask) === 0`
 * `(0b001 & 0b110) === 0`
 *
 * Should Players and Enemies collide? Yes because the bitwise mask is non-zero
 * `(player1.group & enemy1.mask) === 1`
 * `(0b001 & 0b101) === 1`
 *
 * Should Players and Blocks collide? Yes because the bitwise mask is non-zero
 * `(player1.group & blocks1.mask) === 1`
 * `(0b001 & 0b011) === 1`
 */class iW{/**
     * STOP!!** It is preferred that [[CollisionGroupManager.create]] is used to create collision groups
     *  unless you know how to construct the proper bitmasks. See https://github.com/excaliburjs/Excalibur/issues/1091 for more info.
     * @param name Name of the collision group
     * @param category 32 bit category for the group, should be a unique power of 2. For example `0b001` or `0b010`
     * @param mask 32 bit mask of category, or `~category` generally. For a category of `0b001`, the mask would be `0b110`
     */constructor(t,e,i){this._name=t,this._category=e,this._mask=i}/**
     * Get the name of the collision group
     */get name(){return this._name}/**
     * Get the category of the collision group, a 32 bit number which should be a unique power of 2
     */get category(){return this._category}/**
     * Get the mask for this collision group
     */get mask(){return this._mask}/**
     * Evaluates whether 2 collision groups can collide
     * @param other  CollisionGroup
     */canCollide(t){return(this.category&t.mask)!=0&&(t.category&this.mask)!=0}/**
     * Inverts the collision group. For example, if before the group specified "players",
     * inverting would specify all groups except players
     * @returns CollisionGroup
     */invert(){return new iW("~("+this.name+")",~this.category,~this.mask)}/**
     * Combine collision groups with each other. The new group includes all of the previous groups.
     *
     * @param collisionGroups
     */static combine(t){let e=t.map(t=>t.name).join("+"),i=t.reduce((t,e)=>e.category|t,0);return new iW(e,i,~i)}/**
     * Creates a collision group that collides with the listed groups
     * @param collisionGroups
     */static collidesWith(t){return iW.combine(t).invert()}}/**
 * The `All` [[CollisionGroup]] is a special group that collides with all other groups including itself,
 * it is the default collision group on colliders.
 */iW.All=new iW("Collide with all groups",-1,-1);/**
 * Models a potential collision between 2 colliders
 */class iV{constructor(t,e){this.colliderA=t,this.colliderB=e,this.id=null,this.id=iV.calculatePairHash(t.id,e.id)}/**
     * Returns whether a it is allowed for 2 colliders in a Pair to collide
     * @param colliderA
     * @param colliderB
     */static canCollide(t,e){var i,s;let r=null===(i=null==t?void 0:t.owner)||void 0===i?void 0:i.get(i8),n=null===(s=null==e?void 0:e.owner)||void 0===s?void 0:s.get(i8);return!(t.id===e.id||t.owner&&e.owner&&t.owner.id===e.owner.id||t.localBounds.hasZeroDimensions()||e.localBounds.hasZeroDimensions())&&!!r&&!!n&&!!r.group.canCollide(n.group)&&(r.collisionType!==X.Fixed||n.collisionType!==X.Fixed)&&n.collisionType!==X.PreventCollision&&r.collisionType!==X.PreventCollision&&!!r.active&&!!n.active}/**
     * Returns whether or not it is possible for the pairs to collide
     */get canCollide(){let t=this.colliderA,e=this.colliderB;return iV.canCollide(t,e)}/**
     * Runs the collision intersection logic on the members of this pair
     */collide(){return this.colliderA.collide(this.colliderB)}/**
     * Check if the collider is part of the pair
     * @param collider
     */hasCollider(t){return t===this.colliderA||t===this.colliderB}/**
     * Calculates the unique pair hash id for this collision pair (owning id)
     */static calculatePairHash(t,e){return t.value<e.value?`#${t.value}+${e.value}`:`#${e.value}+${t.value}`}}/**
 * A 1 dimensional projection on an axis, used to test overlaps
 */class iG{constructor(t,e){this.min=t,this.max=e}overlaps(t){return this.max>t.min&&t.max>this.min}getOverlap(t){return this.overlaps(t)?this.max>t.max?t.max-this.min:this.max-t.min:0}}/**
 * Dynamic Tree Node used for tracking bounds within the tree
 */class iq{constructor(t){this.parent=t,this.parent=t||null,this.data=null,this.bounds=new ey,this.left=null,this.right=null,this.height=0}isLeaf(){return!this.left&&!this.right}}/**
 * The DynamicTrees provides a spatial partitioning data structure for quickly querying for overlapping bounding boxes for
 * all tracked bodies. The worst case performance of this is O(n*log(n)) where n is the number of bodies in the tree.
 *
 * Internally the bounding boxes are organized as a balanced binary tree of bounding boxes, where the leaf nodes are tracked bodies.
 * Every non-leaf node is a bounding box that contains child bounding boxes.
 */class iX{constructor(t=new ey(-Number.MAX_VALUE,-Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)){this.worldBounds=t,this.root=null,this.nodes={}}/**
     * Inserts a node into the dynamic tree
     */_insert(t){// If there are no nodes in the tree, make this the root leaf
if(null===this.root){this.root=t,this.root.parent=null;return}// Search the tree for a node that is not a leaf and find the best place to insert
let e=t.bounds,i=this.root;for(;!i.isLeaf();){let t;let s=i.left,r=i.right,n=i.bounds.getPerimeter(),o=i.bounds.combine(e),a=o.getPerimeter(),h=2*a,l=2*(a-n),d=0,c=e.combine(s.bounds);s.isLeaf()?d=c.getPerimeter()+l:(t=s.bounds.getPerimeter(),d=c.getPerimeter()-t+l);let u=0,p=e.combine(r.bounds);// cost is acceptable
if(r.isLeaf()?u=p.getPerimeter()+l:(t=r.bounds.getPerimeter(),u=p.getPerimeter()-t+l),h<d&&h<u)break;i=d<u?s:r}// Create the new parent node and insert into the tree
let s=i.parent,r=new iq(s);r.bounds=e.combine(i.bounds),r.height=i.height+1,null!==s?(s.left===i?s.left=r:s.right=r,r.left=i,r.right=t,i.parent=r,t.parent=r):(// The sibling node was the root
r.left=i,r.right=t,i.parent=r,t.parent=r,this.root=r);// Walk up the tree fixing heights and AABBs
let n=t.parent;for(;n;){if(!(n=this._balance(n)).left)throw Error("Parent of current leaf cannot have a null left child"+n);if(!n.right)throw Error("Parent of current leaf cannot have a null right child"+n);n.height=1+Math.max(n.left.height,n.right.height),n.bounds=n.left.bounds.combine(n.right.bounds),n=n.parent}}/**
     * Removes a node from the dynamic tree
     */_remove(t){let e;if(t===this.root){this.root=null;return}let i=t.parent,s=i.parent;if(e=i.left===t?i.right:i.left,s){s.left===i?s.left=e:s.right=e,e.parent=s;let t=s;for(;t;)(t=this._balance(t)).bounds=t.left.bounds.combine(t.right.bounds),t.height=1+Math.max(t.left.height,t.right.height),t=t.parent}else this.root=e,e.parent=null}/**
     * Tracks a body in the dynamic tree
     */trackCollider(t){let e=new iq;e.data=t,e.bounds=t.bounds,e.bounds.left-=2,e.bounds.top-=2,e.bounds.right+=2,e.bounds.bottom+=2,this.nodes[t.id.value]=e,this._insert(e)}/**
     * Updates the dynamic tree given the current bounds of each body being tracked
     */updateCollider(t){var e;let i=this.nodes[t.id.value];if(!i)return!1;let s=t.bounds;// if the body is outside the world no longer update it
if(!this.worldBounds.contains(s))return t7.getInstance().warn("Collider with id "+t.id.value+" is outside the world bounds and will no longer be tracked for physics"),this.untrackCollider(t),!1;if(i.bounds.contains(s))return!1;// THIS IS CAUSING UNECESSARY CHECKS
if(this._remove(i),s.left-=iB.boundsPadding,s.top-=iB.boundsPadding,s.right+=iB.boundsPadding,s.bottom+=iB.boundsPadding,t.owner){let i=null===(e=t.owner)||void 0===e?void 0:e.get(i8);if(i){let t=32*i.vel.x/1e3*iB.dynamicTreeVelocityMultiplier,e=32*i.vel.y/1e3*iB.dynamicTreeVelocityMultiplier;t<0?s.left+=t:s.right+=t,e<0?s.top+=e:s.bottom+=e}}return i.bounds=s,this._insert(i),!0}/**
     * Untracks a body from the dynamic tree
     */untrackCollider(t){let e=this.nodes[t.id.value];e&&(this._remove(e),this.nodes[t.id.value]=null,delete this.nodes[t.id.value])}/**
     * Balances the tree about a node
     */_balance(t){if(null===t)throw Error("Cannot balance at null node");if(t.isLeaf()||t.height<2)return t;let e=t.left,i=t.right,s=e.left,r=e.right,n=i.left,o=i.right,a=i.height-e.height;// Rotate c node up
if(a>1)return(// Swap the right node with it's parent
i.left=t,i.parent=t.parent,t.parent=i,i.parent?i.parent.left===t?i.parent.left=i:i.parent.right=i:this.root=i,n.height>o.height?(i.right=n,t.right=o,o.parent=t,t.bounds=e.bounds.combine(o.bounds),i.bounds=t.bounds.combine(n.bounds),t.height=1+Math.max(e.height,o.height),i.height=1+Math.max(t.height,n.height)):(i.right=o,t.right=n,n.parent=t,t.bounds=e.bounds.combine(n.bounds),i.bounds=t.bounds.combine(o.bounds),t.height=1+Math.max(e.height,n.height),i.height=1+Math.max(t.height,o.height)),i);// Rotate left node up
if(a<-1){// node's old parent should point to b
if(// swap
e.left=t,e.parent=t.parent,t.parent=e,e.parent){if(e.parent.left===t)e.parent.left=e;else{if(e.parent.right!==t)throw"Error rotating Dynamic Tree";e.parent.right=e}}else this.root=e;return s.height>r.height?(e.right=s,t.left=r,r.parent=t,t.bounds=i.bounds.combine(r.bounds),e.bounds=t.bounds.combine(s.bounds),t.height=1+Math.max(i.height,r.height),e.height=1+Math.max(t.height,s.height)):(e.right=r,t.left=s,s.parent=t,t.bounds=i.bounds.combine(s.bounds),e.bounds=t.bounds.combine(r.bounds),t.height=1+Math.max(i.height,s.height),e.height=1+Math.max(t.height,r.height)),e}return t}/**
     * Returns the internal height of the tree, shorter trees are better. Performance drops as the tree grows
     */getHeight(){return null===this.root?0:this.root.height}/**
     * Queries the Dynamic Axis Aligned Tree for bodies that could be colliding with the provided body.
     *
     * In the query callback, it will be passed a potential collider. Returning true from this callback indicates
     * that you are complete with your query and you do not want to continue. Returning false will continue searching
     * the tree until all possible colliders have been returned.
     */query(t,e){let i=t.bounds,s=r=>{if(r&&r.bounds.overlaps(i)){if(!r.isLeaf()||r.data===t)return s(r.left)||s(r.right);if(e.call(t,r.data))return!0}return!1};s(this.root)}/**
     * Queries the Dynamic Axis Aligned Tree for bodies that could be intersecting. By default the raycast query uses an infinitely
     * long ray to test the tree specified by `max`.
     *
     * In the query callback, it will be passed a potential body that intersects with the raycast. Returning true from this
     * callback indicates that your are complete with your query and do not want to continue. Return false will continue searching
     * the tree until all possible bodies that would intersect with the ray have been returned.
     */rayCastQuery(t,e=1/0,i){let s=r=>{if(r&&r.bounds.rayCast(t,e)){if(!r.isLeaf())return s(r.left)||s(r.right);if(i.call(t,r.data))return!0}return!1;// ray missed
};s(this.root)}getNodes(){let t=e=>e?[e].concat(t(e.left),t(e.right)):[];return t(this.root)}debug(t){// draw all the nodes in the Dynamic Tree
let e=i=>{i&&(i.isLeaf()?i.bounds.draw(t,ef.Green):i.bounds.draw(t,ef.White),i.left&&e(i.left),i.right&&e(i.right))};e(this.root)}}/**
 * A 2D ray that can be cast into the scene to do collision detection
 */class iZ{/**
     * @param pos The starting position for the ray
     * @param dir The vector indicating the direction of the ray
     */constructor(t,e){this.pos=t,this.dir=e.normalize()}/**
     * Tests a whether this ray intersects with a line segment. Returns a number greater than or equal to 0 on success.
     * This number indicates the mathematical intersection time.
     * @param line  The line to test
     */intersect(t){let e=t.begin.sub(this.pos);// Test is line and ray are parallel and non intersecting
if(0===this.dir.cross(t.getSlope())&&0!==e.cross(this.dir))return -1;// Lines are parallel
let i=this.dir.cross(t.getSlope());if(0===i)return -1;let s=e.cross(t.getSlope())/i;if(s>=0){let r=e.cross(this.dir)/i/t.getLength();if(r>=0&&r<=1)return s}return -1}intersectPoint(t){let e=this.intersect(t);return e<0?null:this.getPoint(e)}/**
     * Returns the point of intersection given the intersection time
     */getPoint(t){return this.pos.add(this.dir.scale(t))}}/**
 * Responsible for performing the collision broadphase (locating potential collisions) and
 * the narrowphase (actual collision contacts)
 */class iK{constructor(){this._dynamicCollisionTree=new iX,this._pairs=new Set,this._collisionPairCache=[],this._colliders=[]}getColliders(){return this._colliders}rayCast(t,e){var i,s,r;let n=[],o=null!==(i=null==e?void 0:e.maxDistance)&&void 0!==i?i:1/0,a=null!==(s=null==e?void 0:e.collisionGroup)&&void 0!==s?s:iW.All,h=null!==(r=null==e?void 0:e.searchAllColliders)&&void 0!==r&&r;return this._dynamicCollisionTree.rayCastQuery(t,o,e=>{var i;let s=e.owner,r=s.get(i8);// Early exit if not the right group
if(a.mask!==iW.All.mask&&(null===(i=null==r?void 0:r.group)||void 0===i?void 0:i.mask)!==a.mask)return!1;let l=e.rayCast(t,o);return!!l&&(n.push({distance:l.sub(t.pos).distance(),point:l,collider:e,body:r}),!h)}),n}/**
     * Tracks a physics body for collisions
     */track(t){if(!t){t7.getInstance().warn("Cannot track null collider");return}if(t instanceof ij){let e=t.getColliders();for(let i of e)i.owner=t.owner,this._colliders.push(i),this._dynamicCollisionTree.trackCollider(i)}else this._colliders.push(t),this._dynamicCollisionTree.trackCollider(t)}/**
     * Untracks a physics body
     */untrack(t){if(!t){t7.getInstance().warn("Cannot untrack a null collider");return}if(t instanceof ij){let e=t.getColliders();for(let t of e){let e=this._colliders.indexOf(t);-1!==e&&this._colliders.splice(e,1),this._dynamicCollisionTree.untrackCollider(t)}}else{let e=this._colliders.indexOf(t);-1!==e&&this._colliders.splice(e,1),this._dynamicCollisionTree.untrackCollider(t)}}_pairExists(t,e){// if the collision pair has been calculated already short circuit
let i=iV.calculatePairHash(t.id,e.id);return this._pairs.has(i)}/**
     * Detects potential collision pairs in a broadphase approach with the dynamic AABB tree strategy
     */broadphase(t,e,i){let s;let r=e/1e3,n=t.filter(t=>{var e,i;let s=null===(e=t.owner)||void 0===e?void 0:e.get(i8);return(null===(i=t.owner)||void 0===i?void 0:i.active)&&s.collisionType!==X.PreventCollision});// clear old list of collision pairs
this._collisionPairCache=[],this._pairs.clear();for(let t=0,e=n.length;t<e;t++)s=n[t],// Query the collision tree for potential colliders
this._dynamicCollisionTree.query(s,t=>{if(!this._pairExists(s,t)&&iV.canCollide(s,t)){let e=new iV(s,t);this._pairs.add(e.id),this._collisionPairCache.push(e)}// Always return false, to query whole tree. Returning true in the query method stops searching
return!1});// Check dynamic tree for fast moving objects
// Fast moving objects are those moving at least there smallest bound per frame
if(i&&(i.physics.pairs=this._collisionPairCache.length),iB.checkForFastBodies)for(let t of n){let e=t.owner.get(i8);// Skip non-active objects. Does not make sense on other collision types
if(e.collisionType!==X.Active)continue;// Maximum travel distance next frame
let s=e.vel.size*r+// velocity term
.5*e.acc.size*r*r,n=Math.min(t.bounds.height,t.bounds.width);// acc term
if(iB.disableMinimumSpeedForFastBody||s>n/2){let r;i&&i.physics.fastBodies++;// start with the oldPos because the integration for actors has already happened
// objects resting on a surface may be slightly penetrating in the current position
let n=e.globalPos.sub(e.oldPos),o=t.center,a=t.getFurthestPoint(e.vel),h=a.sub(n),l=new iZ(h,e.vel);// back the ray up by -2x surfaceEpsilon to account for fast moving objects starting on the surface
l.pos=l.pos.add(l.dir.scale(-2*iB.surfaceEpsilon));let d=new eg(1/0,1/0);if(this._dynamicCollisionTree.rayCastQuery(l,s+2*iB.surfaceEpsilon,e=>{if(!this._pairExists(t,e)&&iV.canCollide(t,e)){let t=e.rayCast(l,s+10*iB.surfaceEpsilon);if(t){let i=t.sub(h);i.size<d.size&&(d=i,r=e)}}return!1}),r&&eg.isValid(d)){let s=new iV(t,r);this._pairs.has(s.id)||(this._pairs.add(s.id),this._collisionPairCache.push(s));// move the fast moving object to the other body
// need to push into the surface by ex.Physics.surfaceEpsilon
let n=o.sub(a);e.globalPos=h.add(n).add(d).add(l.dir.scale(10*iB.surfaceEpsilon)),t.update(e.transform.get()),i&&i.physics.fastBodyCollisions++}}}// return cache
return this._collisionPairCache}/**
     * Applies narrow phase on collision pairs to find actual area intersections
     * Adds actual colliding pairs to stats' Frame data
     */narrowphase(t,e){let i=[];for(let s=0;s<t.length;s++){let r=t[s].collide();if(i=i.concat(r),e&&r.length>0)for(let t of r)e.physics.contacts.set(t.id,t)}return e&&(e.physics.collisions+=i.length),i}/**
     * Update the dynamic tree positions
     */update(t){let e=0,i=t.length;for(let s=0;s<i;s++)this._dynamicCollisionTree.updateCollider(t[s])&&e++;return e}debug(t){this._dynamicCollisionTree.debug(t)}}/**
 * A collision collider specifies the geometry that can detect when other collision colliders intersect
 * for the purposes of colliding 2 objects in excalibur.
 */class iY{constructor(){this.id=tA("collider",iY._ID++),/**
         * Excalibur uses this to signal to the [[CollisionSystem]] this is part of a composite collider
         * @internal
         * @hidden
         */this.__compositeColliderId=null,this.events=new tS}/**
     * Returns a boolean indicating whether this body collided with
     * or was in stationary contact with
     * the body of the other [[Collider]]
     */touching(t){let e=this.collide(t);return!!e}}iY._ID=0;class ij extends iY{constructor(t){for(let e of(super(),this._collisionProcessor=new iK,this._dynamicAABBTree=new iX,this._colliders=[],t))this.addCollider(e)}clearColliders(){this._colliders=[]}addCollider(t){t.events.pipe(this.events),t.__compositeColliderId=this.id,this._colliders.push(t),this._collisionProcessor.track(t),this._dynamicAABBTree.trackCollider(t)}removeCollider(t){t.events.pipe(this.events),t.__compositeColliderId=null,eC(t,this._colliders),this._collisionProcessor.untrack(t),this._dynamicAABBTree.untrackCollider(t)}getColliders(){return this._colliders}get worldPos(){var t,e;// TODO transform component world pos
return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.pos)&&void 0!==e?e:eg.Zero}get center(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.pos)&&void 0!==e?e:eg.Zero}get bounds(){var t,e;// TODO cache this
let i=this.getColliders(),s=i.reduce((t,e)=>t.combine(e.bounds),null!==(e=null===(t=i[0])||void 0===t?void 0:t.bounds)&&void 0!==e?e:new ey().translate(this.worldPos));return s}get localBounds(){var t,e;// TODO cache this
let i=this.getColliders(),s=i.reduce((t,e)=>t.combine(e.localBounds),null!==(e=null===(t=i[0])||void 0===t?void 0:t.localBounds)&&void 0!==e?e:new ey);return s}get axes(){// TODO cache this
let t=this.getColliders(),e=[];for(let i of t)e=e.concat(i.axes);return e}getFurthestPoint(t){let e=this.getColliders(),i=[];for(let s of e)i.push(s.getFurthestPoint(t));// Pick best point from all colliders
let s=i[0],r=-Number.MAX_VALUE;for(let e of i){let i=e.dot(t);i>r&&(s=e,r=i)}return s}getInertia(t){let e=this.getColliders(),i=0;for(let s of e)i+=s.getInertia(t);return i}collide(t){let e=[t];t instanceof ij&&(e=t.getColliders());let i=[];for(let t of e)this._dynamicAABBTree.query(t,e=>(i.push(new iV(t,e)),!1));let s=[];for(let t of i)s=s.concat(t.collide());return s}getClosestLineBetween(t){let e=this.getColliders(),i=[];if(t instanceof ij){let s=t.getColliders();for(let t of e)for(let e of s){let s=t.getClosestLineBetween(e);s&&i.push(s)}}else for(let s of e){let e=t.getClosestLineBetween(s);e&&i.push(e)}if(i.length){let t=i[0].getLength(),e=i[0];for(let s of i){let i=s.getLength();i<t&&(t=i,e=s)}return e}return null}contains(t){let e=this.getColliders();for(let i of e)if(i.contains(t))return!0;return!1}rayCast(t,e){let i=this.getColliders(),s=[];for(let r of i){let i=r.rayCast(t,e);i&&s.push(i)}if(s.length){let e=s[0],i=e.dot(t.dir);for(let r of s){let s=t.dir.dot(r);s<i&&(e=r,i=s)}return e}return null}project(t){let e=this.getColliders(),i=[];for(let s of e){let e=s.project(t);e&&i.push(e)}// Merge all proj's on the same axis
if(i.length){let t=new iG(i[0].min,i[0].max);for(let e of i)t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max);return t}return null}update(t){if(t){let e=this.getColliders();for(let i of e)i.owner=this.owner,i.update(t)}}debug(t,e){let i=this.getColliders();for(let s of i)s.debug(t,e)}clone(){return new ij(this._colliders.map(t=>t.clone()))}}/**
 * A 2D line segment
 */class iQ{/**
     * @param begin  The starting point of the line segment
     * @param end  The ending point of the line segment
     */constructor(t,e){this.begin=t,this.end=e}/**
     * Gets the raw slope (m) of the line. Will return (+/-)Infinity for vertical lines.
     */get slope(){return(this.end.y-this.begin.y)/(this.end.x-this.begin.x)}/**
     * Gets the Y-intercept (b) of the line. Will return (+/-)Infinity if there is no intercept.
     */get intercept(){return this.begin.y-this.slope*this.begin.x}/**
     * Gets the normal of the line
     */normal(){return this._normal?this._normal:this._normal=this.end.sub(this.begin).normal()}dir(){return this._dir?this._dir:this._dir=this.end.sub(this.begin)}getPoints(){return[this.begin,this.end]}/**
     * Returns the slope of the line in the form of a vector of length 1
     */getSlope(){if(this._slope)return this._slope;let t=this.begin,e=this.end,i=t.distance(e);return this._slope=e.sub(t).scale(1/i)}/**
     * Returns the edge of the line as vector, the length of the vector is the length of the edge
     */getEdge(){let t=this.begin,e=this.end;return e.sub(t)}/**
     * Returns the length of the line segment in pixels
     */getLength(){if(this._length)return this._length;let t=this.begin,e=this.end,i=t.distance(e);return this._length=i}/**
     * Returns the midpoint of the edge
     */get midpoint(){return this.begin.add(this.end).scale(.5)}/**
     * Flips the direction of the line segment
     */flip(){return new iQ(this.end,this.begin)}/**
     * Tests if a given point is below the line, points in the normal direction above the line are considered above.
     * @param point
     */below(t){let e=(this.end.x-this.begin.x)*(t.y-this.begin.y)-(this.end.y-this.begin.y)*(t.x-this.begin.x);return e>=0}/**
     * Returns the clip point
     * @param sideVector Vector that traces the line
     * @param length Length to clip along side
     */clip(t,e){let i=t;i=i.normalize();let s=i.dot(this.begin)-e,r=i.dot(this.end)-e,n=[];return(s<=0&&n.push(this.begin),r<=0&&n.push(this.end),s*r<0&&n.push(this.begin.add(this.end.sub(this.begin).scale(s/(s-r)))),2!==n.length)?null:new iQ(n[0],n[1])}/**
     * Find the perpendicular distance from the line to a point
     * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
     * @param point
     */distanceToPoint(t,e=!1){let i=t.x,s=t.y,r=this.getLength(),n=this.end.y-this.begin.y,o=this.end.x-this.begin.x,a=(n*i-o*s+this.end.x*this.begin.y-this.end.y*this.begin.x)/r;return e?a:Math.abs(a)}/**
     * Find the perpendicular line from the line to a point
     * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
     * (a - p) - ((a - p) * n)n
     * a is a point on the line
     * p is the arbitrary point above the line
     * n is a unit vector in direction of the line
     * @param point
     */findVectorToPoint(t){let e=this.begin.sub(t),i=this.getSlope();return e.sub(i.scale(e.dot(i)))}/**
     * Finds a point on the line given only an X or a Y value. Given an X value, the function returns
     * a new point with the calculated Y value and vice-versa.
     *
     * @param x The known X value of the target point
     * @param y The known Y value of the target point
     * @returns A new point with the other calculated axis value
     */findPoint(t=null,e=null){let i=this.slope,s=this.intercept;if(null!==t)return new eg(t,i*t+s);if(null!==e)return new eg((e-s)/i,e);throw Error("You must provide an X or a Y value")}/**
     * @see http://stackoverflow.com/a/11908158/109458
     */hasPoint(){let t;let e=0;if("number"==typeof arguments[0]&&"number"==typeof arguments[1])t=new eg(arguments[0],arguments[1]),e=arguments[2]||0;else if(arguments[0]instanceof eg)t=arguments[0],e=arguments[1]||0;else throw"Could not determine the arguments for Vector.hasPoint";let i=t.x-this.begin.x,s=t.y-this.begin.y,r=this.end.x-this.begin.x,n=this.end.y-this.begin.y;return(// check whether point lines on the line
!(Math.abs(i*n-s*r)>e)&&(Math.abs(r)>=Math.abs(n)?r>0?this.begin.x<=t.x&&t.x<=this.end.x:this.end.x<=t.x&&t.x<=this.begin.x:n>0?this.begin.y<=t.y&&t.y<=this.end.y:this.end.y<=t.y&&t.y<=this.begin.y))}}/**
 * Finds the closes line between 2 line segments, were the magnitude of u, v are the lengths of each segment
 * L1 = P(s) = p0 + s * u, where s is time and p0 is the start of the line
 * L2 = Q(t) = q0 + t * v, where t is time and q0 is the start of the line
 * @param p0 Point where L1 begins
 * @param u Direction and length of L1
 * @param q0 Point were L2 begins
 * @param v Direction and length of L2
 */function iJ(t,e,i,s){// Distance between 2 lines http://geomalgorithms.com/a07-_distance.html
// w(s, t) = P(s) - Q(t)
// The w(s, t) that has the minimum distance we will say is w(sClosest, tClosest) = wClosest
//
// wClosest is the vector that is uniquely perpendicular to the 2 line directions u & v.
// wClosest = w0 + sClosest * u - tClosest * v, where w0 is p0 - q0
//
// The closest point between 2 lines then satisfies this pair of equations
// 1: u * wClosest = 0
// 2: v * wClosest = 0
//
// Substituting wClosest into the equations we get
//
// 1: (u * u) * sClosest - (u * v) tClosest = -u * w0
// 2: (v * u) * sClosest - (v * v) tClosest = -v * w0
// simplify w0
let r=t.sub(i),n=e.dot(e),o=e.dot(s),a=s.dot(s),h=e.dot(r),l=s.dot(r),d=n*a-o*o,c=d,u=d;// if denom is 0 they are parallel, use any point from either as the start in this case p0
if(0===d||d<=.01)return new iQ(t,i.add(s.scale(h/o)));// Solve for sClosest for infinite line
let p=o*l-a*h,_=n*l-o*h;// / denom;
return p<0?(p=0,_=l,u=a):p>c&&(p=c,_=l+o,u=a),_<0?(_=0,0>-h?p=0:-h>n?p=c:(p=-h,c=n)):_>u&&(_=u,-h+o<0?p=0:-h+o>n?p=c:(p=-h+o,c=n)),p=.001>Math.abs(p)?0:p/c,_=.001>Math.abs(_)?0:_/u,new iQ(t.add(e.scale(p)),i.add(s.scale(_)))}let i0={PolygonPolygonClosestLine(t,e){// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=s.negate(),n=new iZ(t.worldPos,s),o=new iZ(i,r),a=t.rayCast(n).add(n.dir.scale(.1)),h=e.rayCast(o).add(o.dir.scale(.1)),l=t.getClosestFace(a),d=e.getClosestFace(h),c=l.face.begin,u=l.face.getEdge(),p=d.face.begin,_=d.face.getEdge();return iJ(c,u,p,_)},PolygonEdgeClosestLine(t,e){// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=new iZ(t.worldPos,s),n=t.rayCast(r).add(r.dir.scale(.1)),o=t.getClosestFace(n),a=o.face.begin,h=o.face.getEdge(),l=e.asLine(),d=l.begin,c=l.getEdge();return iJ(a,h,d,c)},PolygonCircleClosestLine(t,e){// https://math.stackexchange.com/questions/1919177/how-to-find-point-on-line-closest-to-sphere
// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=new iZ(t.worldPos,s.normalize()),n=t.rayCast(r).add(r.dir.scale(.1)),o=t.getClosestFace(n),a=o.face.begin,h=o.face.getEdge(),l=(h.x*(i.x-a.x)+h.y*(i.y-a.y))/(h.x*h.x+h.y*h.y);// If time of minimum is past the edge clamp
l>1?l=1:l<0&&(l=0);// Minimum distance
let d=Math.sqrt(Math.pow(a.x+h.x*l-i.x,2)+Math.pow(a.y+h.y*l-i.y,2))-e.radius,c=(a.x+h.x*l-i.x)*e.radius/(e.radius+d),u=(a.y+h.y*l-i.y)*e.radius/(e.radius+d);return new iQ(h.scale(l).add(a),new eg(i.x+c,i.y+u))},CircleCircleClosestLine(t,e){// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=t.worldPos,n=r.sub(e.worldPos),o=new iZ(t.worldPos,s),a=new iZ(e.worldPos,n),h=t.rayCast(o),l=e.rayCast(a);return new iQ(h,l)},CircleEdgeClosestLine(t,e){// https://math.stackexchange.com/questions/1919177/how-to-find-point-on-line-closest-to-sphere
let i=t.worldPos,s=e.asLine(),r=s.begin,n=s.getEdge(),o=(n.x*(i.x-r.x)+n.y*(i.y-r.y))/(n.x*n.x+n.y*n.y);// If time of minimum is past the edge clamp to edge
o>1?o=1:o<0&&(o=0);// Minimum distance
let a=Math.sqrt(Math.pow(r.x+n.x*o-i.x,2)+Math.pow(r.y+n.y*o-i.y,2))-t.radius,h=(r.x+n.x*o-i.x)*t.radius/(t.radius+a),l=(r.y+n.y*o-i.y)*t.radius/(t.radius+a);return new iQ(n.scale(o).add(r),new eg(i.x+h,i.y+l))},EdgeEdgeClosestLine(t,e){// L1 = P(s) = p0 + s * u, where s is time and p0 is the start of the line
let i=t.asLine(),s=i.begin,r=i.getEdge(),n=e.asLine(),o=n.begin,a=n.getEdge();return iJ(s,r,o,a)}};/**
 * This is a circle collider for the excalibur rigid body physics simulation
 */class i1 extends iY{get worldPos(){return this._globalMatrix.getPosition()}/**
     * Get the radius of the circle
     */get radius(){var t;let e=this._transform,i=null!==(t=null==e?void 0:e.globalScale)&&void 0!==t?t:eg.One;// This is a trade off, the alternative is retooling circles to support ellipse collisions
return this._naturalRadius*Math.min(i.x,i.y)}/**
     * Set the radius of the circle
     */set radius(t){var e;let i=this._transform,s=null!==(e=null==i?void 0:i.globalScale)&&void 0!==e?e:eg.One;// This is a trade off, the alternative is retooling circles to support ellipse collisions
this._naturalRadius=t/Math.min(s.x,s.y)}constructor(t){super(),/**
         * Position of the circle relative to the collider, by default (0, 0).
         */this.offset=eg.Zero,this._globalMatrix=eP.identity(),this.offset=t.offset||eg.Zero,this.radius=t.radius||0,this._globalMatrix.translate(this.offset.x,this.offset.y)}/**
     * Returns a clone of this shape, not associated with any collider
     */clone(){return new i1({offset:this.offset.clone(),radius:this.radius})}/**
     * Get the center of the collider in world coordinates
     */get center(){return this._globalMatrix.getPosition()}/**
     * Tests if a point is contained in this collider
     */contains(t){var e,i;let s=null!==(i=null===(e=this._transform)||void 0===e?void 0:e.pos)&&void 0!==i?i:this.offset,r=s.distance(t);return r<=this.radius}/**
     * Casts a ray at the Circle collider and returns the nearest point of collision
     * @param ray
     */rayCast(t,e=1/0){//https://en.wikipedia.org/wiki/Line%E2%80%93sphere_intersection
let i=this.center,s=t.dir,r=t.pos,n=Math.sqrt(Math.pow(s.dot(r.sub(i)),2)-Math.pow(r.sub(i).distance(),2)+Math.pow(this.radius,2));if(n<0)return null;{let o=0;if(0===n)return(o=-s.dot(r.sub(i)))>0&&o<e?t.getPoint(o):null;{let o=-s.dot(r.sub(i))+n,a=-s.dot(r.sub(i))-n,h=[];o>=0&&h.push(o),a>=0&&h.push(a);let l=Math.min(...h);return l<=e?t.getPoint(l):null}}}getClosestLineBetween(t){if(t instanceof i1)return i0.CircleCircleClosestLine(this,t);if(t instanceof i9)return i0.PolygonCircleClosestLine(t,this).flip();if(t instanceof i4)return i0.CircleEdgeClosestLine(this,t).flip();throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * @inheritdoc
     */collide(t){if(t instanceof i1)return i3.CollideCircleCircle(this,t);if(t instanceof i9)return i3.CollideCirclePolygon(this,t);if(t instanceof i4)return i3.CollideCircleEdge(this,t);throw Error(`Circle could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Find the point on the collider furthest in the direction specified
     */getFurthestPoint(t){return this.center.add(t.normalize().scale(this.radius))}/**
     * Find the local point on the shape in the direction specified
     * @param direction
     */getFurthestLocalPoint(t){let e=t.normalize();return e.scale(this.radius)}/**
     * Get the axis aligned bounding box for the circle collider in world coordinates
     */get bounds(){var t,e,i;let s=this._transform,r=null!==(t=null==s?void 0:s.globalScale)&&void 0!==t?t:eg.One,n=null!==(e=null==s?void 0:s.globalRotation)&&void 0!==e?e:0,o=null!==(i=null==s?void 0:s.globalPos)&&void 0!==i?i:eg.Zero;return new ey(this.offset.x-this._naturalRadius,this.offset.y-this._naturalRadius,this.offset.x+this._naturalRadius,this.offset.y+this._naturalRadius).rotate(n).scale(r).translate(o)}/**
     * Get the axis aligned bounding box for the circle collider in local coordinates
     */get localBounds(){return new ey(this.offset.x-this._naturalRadius,this.offset.y-this._naturalRadius,this.offset.x+this._naturalRadius,this.offset.y+this._naturalRadius)}/**
     * Get axis not implemented on circles, since there are infinite axis in a circle
     */get axes(){return[]}/**
     * Returns the moment of inertia of a circle given it's mass
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */getInertia(t){return t*this.radius*this.radius/2}/* istanbul ignore next */update(t){var e;this._transform=t;let i=null!==(e=t.matrix)&&void 0!==e?e:this._globalMatrix;i.clone(this._globalMatrix),this._globalMatrix.translate(this.offset.x,this.offset.y)}/**
     * Project the circle along a specified axis
     */project(t){let e=[],i=this.center,s=i.dot(t);return e.push(s),e.push(s+this.radius),e.push(s-this.radius),new iG(Math.min.apply(Math,e),Math.max.apply(Math,e))}debug(t,e){var i,s,r,n;let o=this._transform,a=null!==(i=null==o?void 0:o.globalScale)&&void 0!==i?i:eg.One,h=null!==(s=null==o?void 0:o.globalRotation)&&void 0!==s?s:0,l=null!==(r=null==o?void 0:o.globalPos)&&void 0!==r?r:eg.Zero;t.save(),t.translate(l.x,l.y),t.rotate(h),t.scale(a.x,a.y),t.drawCircle(null!==(n=this.offset)&&void 0!==n?n:eg.Zero,this._naturalRadius,ef.Transparent,e,2),t.restore()}}/**
 * Collision contacts are used internally by Excalibur to resolve collision between colliders. This
 * Pair prevents collisions from being evaluated more than one time
 */class i2{constructor(t,e,i,s,r,n,o,a){var h,l;this._canceled=!1,this.colliderA=t,this.colliderB=e,this.mtv=i,this.normal=s,this.tangent=r,this.points=n,this.localPoints=o,this.info=a,this.id=iV.calculatePairHash(t.id,e.id),(t.__compositeColliderId||e.__compositeColliderId)&&(this.id+="|"+iV.calculatePairHash(null!==(h=t.__compositeColliderId)&&void 0!==h?h:t.id,null!==(l=e.__compositeColliderId)&&void 0!==l?l:e.id))}/**
     * Match contact awake state, except if body's are Fixed
     */matchAwake(){let t=this.colliderA.owner.get(i8),e=this.colliderB.owner.get(i8);t&&e&&t.sleeping!==e.sleeping&&(t.sleeping&&t.collisionType!==X.Fixed&&e.sleepMotion>=iB.wakeThreshold&&t.setSleeping(!1),e.sleeping&&e.collisionType!==X.Fixed&&t.sleepMotion>=iB.wakeThreshold&&e.setSleeping(!1))}isCanceled(){return this._canceled}cancel(){this._canceled=!0}}class i5{static findPolygonPolygonSeparation(t,e){let i=-Number.MAX_VALUE,s=null,r=null,n=-1,o=null,a=t.getSides(),h=t.getLocalSides();for(let t=0;t<a.length;t++){let h=a[t],l=h.normal(),d=e.getFurthestPoint(l.negate()),c=h.distanceToPoint(d,!0);c>i&&(i=c,s=h,r=l,n=t,o=d)}return{collider:t,separation:r?i:99,axis:r,side:s,localSide:h[n],sideId:n,point:o,localPoint:r?e.getFurthestLocalPoint(r.negate()):null}}static findCirclePolygonSeparation(t,e){let i=e.axes,s=e.center,r=s.sub(t.worldPos),n=e.getFurthestPoint(r.negate());i.push(n.sub(t.worldPos).normalize());let o=Number.MAX_VALUE,a=null,h=-1;for(let s=0;s<i.length;s++){let r=e.project(i[s]),n=t.project(i[s]),l=r.getOverlap(n);if(l<=0)return null;l<o&&(o=l,a=i[s],h=s)}return h<0?null:a.normalize().scale(o)}}let i3={CollideCircleCircle(t,e){let i=t.worldPos,s=e.worldPos,r=t.radius+e.radius,n=i.distance(s);if(n>r)return[];// negative means overlap
let o=r-n,a=s.sub(i).normalize(),h=a.perpendicular(),l=a.scale(o),d=t.getFurthestPoint(a),c=t.getFurthestLocalPoint(a);return[new i2(t,e,l,a,h,[d],[c],{collider:t,separation:o,axis:a,point:d})]},CollideCirclePolygon(t,e){var i,s;let r=i5.findCirclePolygonSeparation(t,e);if(!r)return[];// make sure that the minAxis is pointing away from circle
let n=r.dot(e.center.sub(t.center));r=n<0?r.negate():r;let o=t.getFurthestPoint(r),a=null!==(s=null===(i=t.owner)||void 0===i?void 0:i.get(iN))&&void 0!==s?s:new iN,h=a.applyInverse(o),l=r.normalize(),d={collider:t,separation:-r.size,axis:l,point:o,localPoint:h,side:e.findSide(l.negate()),localSide:e.findLocalSide(l.negate())};return[new i2(t,e,r,l,l.perpendicular(),[o],[h],d)]},CollideCircleEdge(t,e){// TODO not sure this actually abides by local/world collisions
// Are edge.begin and edge.end local space or world space? I think they should be local
// center of the circle in world pos
let i=t.center,s=e.asLine(),r=s.end.sub(s.begin),n=r.dot(s.end.sub(i)),o=r.dot(i.sub(s.begin)),a=e.asLine(),h=e.asLocalLine();// Potential region A collision (circle is on the left side of the edge, before the beginning)
if(o<=0){let r=s.begin.sub(i),n=r.dot(r);// save some sqrts
if(n>t.radius*t.radius)return[];// no collision
let o=r.normalize(),l=t.radius-Math.sqrt(n),d={collider:t,separation:l,axis:o,point:a.begin,side:a,localSide:h};return[new i2(t,e,o.scale(l),o,o.perpendicular(),[a.begin],[h.begin],d)]}// Potential region B collision (circle is on the right side of the edge, after the end)
if(n<=0){let r=s.end.sub(i),n=r.dot(r);if(n>t.radius*t.radius)return[];let o=r.normalize(),l=t.radius-Math.sqrt(n),d={collider:t,separation:l,axis:o,point:a.end,side:a,localSide:h};return[new i2(t,e,o.scale(l),o,o.perpendicular(),[a.end],[h.end],d)]}// Otherwise potential region AB collision (circle is in the middle of the edge between the beginning and end)
let l=r.dot(r),d=s.begin.scale(n).add(s.end.scale(o)).scale(1/l),c=i.sub(d),u=c.dot(c);if(u>t.radius*t.radius)return[];// no collision
let p=r.perpendicular();0>p.dot(i.sub(s.begin))&&(p.x=-p.x,p.y=-p.y),p=p.normalize();let _=t.radius-Math.sqrt(u),g=p.scale(_),m={collider:t,separation:_,axis:p,point:d,side:a,localSide:h};return[new i2(t,e,g,p.negate(),p.negate().perpendicular(),[d],[d.sub(e.worldPos)],m)]},CollideEdgeEdge:()=>[],CollidePolygonEdge(t,e){var i;let s=t.center,r=e.center,n=r.sub(s).normalize(),o=new i9({points:[e.begin,e.end,e.end.add(n.scale(100)),e.begin.add(n.scale(100))],offset:e.offset});o.owner=e.owner;let a=null===(i=e.owner)||void 0===i?void 0:i.get(iN);a&&o.update(e.owner.get(iN).get());// Gross hack but poly-poly works well
let h=this.CollidePolygonPolygon(t,o);return h.length&&(// Fudge the contact back to edge
h[0].colliderB=e,h[0].id=iV.calculatePairHash(t.id,e.id)),h},CollidePolygonPolygon(t,e){var i,s,r,n;// Multi contact from SAT
// https://gamedev.stackexchange.com/questions/111390/multiple-contacts-for-sat-collision-detection
// do a SAT test to find a min axis if it exists
let o=i5.findPolygonPolygonSeparation(t,e);// If there is no overlap from boxA's perspective we can end early
if(o.separation>0)return[];let a=i5.findPolygonPolygonSeparation(e,t);// If there is no overlap from boxB's perspective exit now
if(a.separation>0)return[];// Separations are both negative, we want to pick the least negative (minimal movement)
let h=o.separation>a.separation?o:a,l=h.collider===t?e:t,d=l.findSide(h.axis.negate()),c=h.side,u=c.dir().normalize(),p=d.clip(u.negate(),-u.dot(c.begin)),_=null;// If there is no left there is no collision
if(p&&(_=p.clip(u,u.dot(c.end))),_){// We only want clip points below the reference edge, discard the others
let o=_.getPoints().filter(t=>c.below(t)),a=h.axis,l=a.perpendicular();// Point Contact A -> B
0>e.center.sub(t.center).dot(a)&&(l=(a=a.negate()).perpendicular());// Points are clipped from incident which is the other collider
// Store those as locals
let d=[];if(h.collider===t){let t=null!==(s=null===(i=e.owner)||void 0===i?void 0:i.get(iN))&&void 0!==s?s:new iN;d=o.map(e=>t.applyInverse(e))}else{let e=null!==(n=null===(r=t.owner)||void 0===r?void 0:r.get(iN))&&void 0!==n?n:new iN;d=o.map(t=>e.applyInverse(t))}return[new i2(t,e,a.scale(-h.separation),a,l,o,d,h)]}return[]},FindContactSeparation(t,e){var i,s,r,n;let o=t.colliderA,a=null!==(s=null===(i=t.colliderA.owner)||void 0===i?void 0:i.get(iN))&&void 0!==s?s:new iN,h=t.colliderB,l=null!==(n=null===(r=t.colliderB.owner)||void 0===r?void 0:r.get(iN))&&void 0!==n?n:new iN;// both are circles
if(o instanceof i1&&h instanceof i1){let t=o.radius+h.radius,e=a.pos.distance(l.pos);return-(t-e)}// both are polygons
if(o instanceof i9&&h instanceof i9&&t.info.localSide){let i,s;return t.info.collider===o?(i=new iQ(a.apply(t.info.localSide.begin),a.apply(t.info.localSide.end)),s=l.apply(e)):(i=new iQ(l.apply(t.info.localSide.begin),l.apply(t.info.localSide.end)),s=a.apply(e)),i.distanceToPoint(s,!0)}// polygon v circle
if(o instanceof i9&&h instanceof i1||h instanceof i9&&o instanceof i1){let i=a.apply(e);if(t.info.side)return t.info.side.distanceToPoint(i,!0)}// polygon v edge
if(o instanceof i4&&h instanceof i9||h instanceof i4&&o instanceof i9){let i;if(i=t.info.collider===o?l.apply(e):a.apply(e),t.info.side)return t.info.side.distanceToPoint(i,!0)}// circle v edge
if(o instanceof i1&&h instanceof i4||h instanceof i1&&o instanceof i4){let i;// Local point is always on the edge which is always shapeB
let s=l.apply(e);o instanceof i1&&(i=o.getFurthestPoint(t.normal));let r=s.distance(i);if(t.info.side)return r>0?-r:0}return 0}};/**
 * Edge is a single line collider to create collisions with a single line.
 */class i4 extends iY{constructor(t){var e;super(),this._globalMatrix=eP.identity(),this.begin=t.begin||eg.Zero,this.end=t.end||eg.Zero,this.offset=null!==(e=t.offset)&&void 0!==e?e:eg.Zero}/**
     * Returns a clone of this Edge, not associated with any collider
     */clone(){return new i4({begin:this.begin.clone(),end:this.end.clone()})}get worldPos(){var t;let e=this._transform;return null!==(t=null==e?void 0:e.globalPos.add(this.offset))&&void 0!==t?t:this.offset}/**
     * Get the center of the collision area in world coordinates
     */get center(){let t=this._getTransformedBegin(),e=this._getTransformedEnd(),i=t.average(e);return i}_getTransformedBegin(){return this._globalMatrix.multiply(this.begin)}_getTransformedEnd(){return this._globalMatrix.multiply(this.end)}/**
     * Returns the slope of the line in the form of a vector
     */getSlope(){let t=this._getTransformedBegin(),e=this._getTransformedEnd(),i=t.distance(e);return e.sub(t).scale(1/i)}/**
     * Returns the length of the line segment in pixels
     */getLength(){let t=this._getTransformedBegin(),e=this._getTransformedEnd(),i=t.distance(e);return i}/**
     * Tests if a point is contained in this collision area
     */contains(){return!1}/**
     * @inheritdoc
     */rayCast(t,e=1/0){let i=this._getTransformedBegin().sub(t.pos);// Test is line and ray are parallel and non intersecting
if(0===t.dir.cross(this.getSlope())&&0!==i.cross(t.dir))return null;// Lines are parallel
let s=t.dir.cross(this.getSlope());if(0===s)return null;let r=i.cross(this.getSlope())/s;if(r>=0&&r<=e){let e=i.cross(t.dir)/s/this.getLength();if(e>=0&&e<=1)return t.getPoint(r)}return null}/**
     * Returns the closes line between this and another collider, from this -> collider
     * @param shape
     */getClosestLineBetween(t){if(t instanceof i1)return i0.CircleEdgeClosestLine(t,this);if(t instanceof i9)return i0.PolygonEdgeClosestLine(t,this).flip();if(t instanceof i4)return i0.EdgeEdgeClosestLine(this,t);throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * @inheritdoc
     */collide(t){if(t instanceof i1)return i3.CollideCircleEdge(t,this);if(t instanceof i9)return i3.CollidePolygonEdge(t,this);if(t instanceof i4)return i3.CollideEdgeEdge();throw Error(`Edge could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Find the point on the collider furthest in the direction specified
     */getFurthestPoint(t){let e=this._getTransformedBegin(),i=this._getTransformedEnd();return t.dot(e)>0?e:i}_boundsFromBeginEnd(t,e,i=10){// A perfectly vertical or horizontal edge would have a bounds 0 width or height
// this causes problems for the collision system so we give them some padding
return new ey(Math.min(t.x,e.x)-i,Math.min(t.y,e.y)-i,Math.max(t.x,e.x)+i,Math.max(t.y,e.y)+i)}/**
     * Get the axis aligned bounding box for the edge collider in world space
     */get bounds(){let t=this._getTransformedBegin(),e=this._getTransformedEnd();return this._boundsFromBeginEnd(t,e)}/**
     * Get the axis aligned bounding box for the edge collider in local space
     */get localBounds(){return this._boundsFromBeginEnd(this.begin,this.end)}/**
     * Returns this edge represented as a line in world coordinates
     */asLine(){return new iQ(this._getTransformedBegin(),this._getTransformedEnd())}/**
     * Return this edge as a line in local line coordinates (relative to the position)
     */asLocalLine(){return new iQ(this.begin,this.end)}/**
     * Get the axis associated with the edge
     */get axes(){let t=this._getTransformedEnd().sub(this._getTransformedBegin()),e=t.normal(),i=[];return i.push(e),i.push(e.negate()),i.push(e.normal()),i.push(e.normal().negate()),i}/**
     * Get the moment of inertia for an edge
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */getInertia(t){let e=this.end.sub(this.begin).distance()/2;return t*e*e}/**
     * @inheritdoc
     */update(t){var e;this._transform=t;let i=null!==(e=t.matrix)&&void 0!==e?e:this._globalMatrix;i.clone(this._globalMatrix),this._globalMatrix.translate(this.offset.x,this.offset.y)}/**
     * Project the edge along a specified axis
     */project(t){let e=[],i=[this._getTransformedBegin(),this._getTransformedEnd()],s=i.length;for(let r=0;r<s;r++)e.push(i[r].dot(t));return new iG(Math.min.apply(Math,e),Math.max.apply(Math,e))}debug(t,e){let i=this._getTransformedBegin(),s=this._getTransformedEnd();t.drawLine(i,s,e,2),t.drawCircle(i,2,e),t.drawCircle(s,2,e)}}/**
 * Polygon collider for detecting collisions
 */class i9 extends iY{/**
     * Points in the polygon in order around the perimeter in local coordinates. These are relative from the body transform position.
     * Excalibur stores these in counter-clockwise order
     */set points(t){this._localBoundsDirty=!0,this._localSidesDirty=!0,this._sidesDirty=!0,this._points=t}/**
     * Points in the polygon in order around the perimeter in local coordinates. These are relative from the body transform position.
     * Excalibur stores these in counter-clockwise order
     */get points(){return this._points}constructor(t){var e,i;super(),this._logger=t7.getInstance(),this._transformedPoints=[],this._sides=[],this._localSides=[],this._globalMatrix=eP.identity(),this._transformedPointsDirty=!0,this._sidesDirty=!0,this._localSidesDirty=!0,this._localBoundsDirty=!0,this.offset=null!==(e=t.offset)&&void 0!==e?e:eg.Zero,this._globalMatrix.translate(this.offset.x,this.offset.y),this.points=null!==(i=t.points)&&void 0!==i?i:[];let s=this._isCounterClockwiseWinding(this.points);s||this.points.reverse(),this.isConvex()||this._logger.warn("Excalibur only supports convex polygon colliders and will not behave properly.Call PolygonCollider.triangulate() to build a new collider composed of smaller convex triangles"),// calculate initial transformation
this._calculateTransformation()}_isCounterClockwiseWinding(t){// https://stackoverflow.com/a/1165943
let e=0;for(let i=0;i<t.length;i++)e+=(t[(i+1)%t.length].x-t[i].x)*(t[(i+1)%t.length].y+t[i].y);return e<0}/**
     * Returns if the polygon collider is convex, Excalibur does not handle non-convex collision shapes.
     * Call [[Polygon.triangulate]] to generate a [[CompositeCollider]] from this non-convex shape
     */isConvex(){// From SO: https://stackoverflow.com/a/45372025
if(this.points.length<3)return!1;let t=this.points[this.points.length-2],e=this.points[this.points.length-1],i=Math.atan2(e.y-t.y,e.x-t.x),s=0,r=0,n=0;for(let[o,a]of this.points.entries()){if(t=e,s=i,i=Math.atan2((e=a).y-t.y,e.x-t.x),t.equals(e))return!1;// repeat point
let h=i-s;if(h<=-Math.PI?h+=2*Math.PI:h>Math.PI&&(h-=2*Math.PI),0===o){if(0===h)return!1;r=h>0?1:-1}else if(r*h<=0)return!1;n+=h}return 1===Math.abs(Math.round(n/(2*Math.PI)))}/**
     * Tessellates the polygon into a triangle fan as a [[CompositeCollider]] of triangle polygons
     */tessellate(){let t=[];for(let e=1;e<this.points.length-2;e++)t.push([this.points[0],this.points[e+1],this.points[e+2]]);return t.push([this.points[0],this.points[1],this.points[2]]),new ij(t.map(t=>i6.Polygon(t)))}/**
     * Triangulate the polygon collider using the "Ear Clipping" algorithm.
     * Returns a new [[CompositeCollider]] made up of smaller triangles.
     */triangulate(){// https://www.youtube.com/watch?v=hTJFcHutls8
if(this.points.length<3)throw Error("Invalid polygon");/**
         * Helper to get a vertex in the list
         */function t(t,e){return t>=e.length?e[t%e.length]:t<0?e[t%e.length+e.length]:e[t]}let e=[],i=[...this.points],s=eu(0,this.points.length-1);// 1. Loop through vertices clockwise
//    if the vertex is convex (interior angle is < 180) (cross product positive)
//    if the polygon formed by it's edges doesn't contain the points
//         it's an ear add it to our list of triangles, and restart
for(;s.length>3;)for(let r=0;r<s.length;r++){let n=s[r],o=t(r-1,s),a=t(r+1,s),h=i[n],l=i[o],d=i[a],c=l.sub(h),u=d.sub(h),p=u.cross(c)>0;if(!p)continue;let _=!0;// Check that if any vertices are in the triangle a, b, c
for(let t=0;t<s.length;t++){let e=s[t];// We can skip these
if(e===n||e===o||e===a)continue;let r=i[e];if(/**
         * Quick test for point in triangle
         */function(t,e,i,s){let r=i.sub(e),n=s.sub(i),o=e.sub(s),a=t.sub(e),h=t.sub(i),l=t.sub(s),d=r.cross(a),c=n.cross(h),u=o.cross(l);return!(d>0)&&!(c>0)&&!(u>0)}(r,l,h,d)){_=!1;break}}// Add ear to polygon list and remove from list
if(_){e.push([l,h,d]),s.splice(r,1);break}}return e.push([i[s[0]],i[s[1]],i[s[2]]]),new ij(e.map(t=>i6.Polygon(t)))}/**
     * Returns a clone of this ConvexPolygon, not associated with any collider
     */clone(){return new i9({offset:this.offset.clone(),points:this.points.map(t=>t.clone())})}/**
     * Returns the world position of the collider, which is the current body transform plus any defined offset
     */get worldPos(){return this._transform?this._transform.pos.add(this.offset):this.offset}/**
     * Get the center of the collider in world coordinates
     */get center(){return this.bounds.center}/**
     * Calculates the underlying transformation from the body relative space to world space
     */_calculateTransformation(){let t=this.points,e=t.length;this._transformedPoints.length=0;// clear out old transform
for(let i=0;i<e;i++)this._transformedPoints[i]=this._globalMatrix.multiply(t[i].clone())}/**
     * Gets the points that make up the polygon in world space, from actor relative space (if specified)
     */getTransformedPoints(){return this._transformedPointsDirty&&(this._calculateTransformation(),this._transformedPointsDirty=!1),this._transformedPoints}/**
     * Gets the sides of the polygon in world space
     */getSides(){if(this._sidesDirty){let t=[],e=this.getTransformedPoints(),i=e.length;for(let s=0;s<i;s++)t.push(new iQ(e[s],e[(s+1)%i]));this._sides=t,this._sidesDirty=!1}return this._sides}/**
     * Returns the local coordinate space sides
     */getLocalSides(){if(this._localSidesDirty){let t=[],e=this.points,i=e.length;for(let s=0;s<i;s++)t.push(new iQ(e[s],e[(s+1)%i]));this._localSides=t,this._localSidesDirty=!1}return this._localSides}/**
     * Given a direction vector find the world space side that is most in that direction
     * @param direction
     */findSide(t){let e=this.getSides(),i=e[0],s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=e[r],o=n.normal(),a=o.dot(t);a>s&&(i=n,s=a)}return i}/**
     * Given a direction vector find the local space side that is most in that direction
     * @param direction
     */findLocalSide(t){let e=this.getLocalSides(),i=e[0],s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=e[r],o=n.normal(),a=o.dot(t);a>s&&(i=n,s=a)}return i}/**
     * Get the axis associated with the convex polygon
     */get axes(){let t=[],e=this.getSides();for(let i=0;i<e.length;i++)t.push(e[i].normal());return t}/**
     * Updates the transform for the collision geometry
     *
     * Collision geometry (points/bounds) will not change until this is called.
     * @param transform
     */update(t){var e;if(t){this._transform=t,this._transformedPointsDirty=!0,this._sidesDirty=!0;// This change means an update must be performed in order for geometry to update
let i=null!==(e=t.matrix)&&void 0!==e?e:this._globalMatrix;i.clone(this._globalMatrix),this._globalMatrix.translate(this.offset.x,this.offset.y)}}/**
     * Tests if a point is contained in this collider in world space
     */contains(t){// Always cast to the right, as long as we cast in a consistent fixed direction we
// will be fine
let e=new iZ(t,new eg(1,0)),i=this.getSides().reduce(function(t,i){return e.intersect(i)>=0?t+1:t},0);return i%2!=0}getClosestLineBetween(t){if(t instanceof i1)return i0.PolygonCircleClosestLine(this,t);if(t instanceof i9)return i0.PolygonPolygonClosestLine(this,t);if(t instanceof i4)return i0.PolygonEdgeClosestLine(this,t);throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Returns a collision contact if the 2 colliders collide, otherwise collide will
     * return null.
     * @param collider
     */collide(t){if(t instanceof i1)return i3.CollideCirclePolygon(t,this);if(t instanceof i9)return i3.CollidePolygonPolygon(this,t);if(t instanceof i4)return i3.CollidePolygonEdge(this,t);throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Find the point on the collider furthest in the direction specified
     */getFurthestPoint(t){let e=this.getTransformedPoints(),i=null,s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=t.dot(e[r]);n>s&&(s=n,i=e[r])}return i}/**
     * Find the local point on the collider furthest in the direction specified
     * @param direction
     */getFurthestLocalPoint(t){let e=this.points,i=e[0],s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=t.dot(e[r]);n>s&&(s=n,i=e[r])}return i}/**
     * Finds the closes face to the point using perpendicular distance
     * @param point point to test against polygon
     */getClosestFace(t){let e=this.getSides(),i=Number.POSITIVE_INFINITY,s=-1,r=-1;for(let n=0;n<e.length;n++){let o=e[n].distanceToPoint(t);o<i&&(i=o,s=n,r=o)}return -1!==s?{distance:e[s].normal().scale(r),face:e[s]}:null}/**
     * Get the axis aligned bounding box for the polygon collider in world coordinates
     */get bounds(){return this.localBounds.transform(this._globalMatrix)}/**
     * Get the axis aligned bounding box for the polygon collider in local coordinates
     */get localBounds(){return this._localBoundsDirty&&(this._localBounds=ey.fromPoints(this.points),this._localBoundsDirty=!1),this._localBounds}/**
     * Get the moment of inertia for an arbitrary polygon
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */getInertia(t){if(this._cachedMass===t&&this._cachedInertia)return this._cachedInertia;let e=0,i=0,s=this.points;for(let t=0;t<s.length;t++){let r=(t+1)%s.length,n=s[r].cross(s[t]);e+=n*(s[t].dot(s[t])+s[t].dot(s[r])+s[r].dot(s[r])),i+=n}return this._cachedMass=t,this._cachedInertia=t/6*(e/i)}/**
     * Casts a ray into the polygon and returns a vector representing the point of contact (in world space) or null if no collision.
     */rayCast(t,e=1/0){// find the minimum contact time greater than 0
// contact times less than 0 are behind the ray and we don't want those
let i=this.getSides(),s=i.length,r=Number.MAX_VALUE,n=-1;for(let o=0;o<s;o++){let s=t.intersect(i[o]);s>=0&&s<r&&s<=e&&(r=s,n=o)}return(// contact was found
n>=0?t.getPoint(r):null)}/**
     * Project the edges of the polygon along a specified axis
     */project(t){let e=this.getTransformedPoints(),i=e.length,s=Number.MAX_VALUE,r=-Number.MAX_VALUE;for(let n=0;n<i;n++){let i=e[n].dot(t);s=Math.min(s,i),r=Math.max(r,i)}return new iG(s,r)}debug(t,e){let i=this.getTransformedPoints()[0],s=[i,...this.getTransformedPoints(),i];for(let i=0;i<s.length-1;i++)t.drawLine(s[i],s[i+1],e,2),t.drawCircle(s[i],2,e),t.drawCircle(s[i+1],2,e)}}/**
 * Excalibur helper for defining colliders quickly
 */class i6{/**
     * Creates a box collider, under the hood defines a [[PolygonCollider]] collider
     * @param width Width of the box
     * @param height Height of the box
     * @param anchor Anchor of the box (default (.5, .5)) which positions the box relative to the center of the collider's position
     * @param offset Optional offset relative to the collider in local coordinates
     */static Box(t,e,i=eg.Half,s=eg.Zero){return new i9({points:new ey(-t*i.x,-e*i.y,t-t*i.x,e-e*i.y).getPoints(),offset:s})}/**
     * Creates a new [[PolygonCollider|arbitrary polygon]] collider
     *
     * PolygonColliders are useful for creating convex polygon shapes
     * @param points Points specified in counter clockwise
     * @param offset Optional offset relative to the collider in local coordinates
     */static Polygon(t,e=eg.Zero){return new i9({points:t,offset:e})}/**
     * Creates a new [[CircleCollider|circle]] collider
     *
     * Circle colliders are useful for balls, or to make collisions more forgiving on sharp edges
     * @param radius Radius of the circle collider
     * @param offset Optional offset relative to the collider in local coordinates
     */static Circle(t,e=eg.Zero){return new i1({radius:t,offset:e})}/**
     * Creates a new [[EdgeCollider|edge]] collider
     *
     * Edge colliders are useful for  floors, walls, and other barriers
     * @param begin Beginning of the edge in local coordinates to the collider
     * @param end Ending of the edge in local coordinates to the collider
     */static Edge(t,e){return new i4({begin:t,end:e})}/**
     * Creates a new capsule shaped [[CompositeCollider]] using 2 circles and a box
     *
     * Capsule colliders are useful for platformers with incline or jagged floors to have a smooth
     * player experience.
     *
     * @param width
     * @param height
     * @param offset Optional offset
     */static Capsule(t,e,i=eg.Zero){let s=t7.getInstance();t===e&&s.warn("A capsule collider with equal width and height is a circle, consider using a ex.Shape.Circle or ex.CircleCollider");let r=e>=t;if(r){// height > width, if equal maybe use a circle
let s=new ij([i6.Circle(t/2,em(0,-e/2+t/2).add(i)),i6.Box(t,e-t,eg.Half,i),i6.Circle(t/2,em(0,e/2-t/2).add(i))]);return s}{// width > height, if equal maybe use a circle
let s=new ij([i6.Circle(e/2,em(-t/2+e/2,0).add(i)),i6.Box(t-e,e,eg.Half,i),i6.Circle(e/2,em(t/2-e/2,0).add(i))]);return s}}}class i7 extends iz{constructor(t){super(),this.type="ex.collider",this.events=new tS,/**
         * Observable that notifies when a collider is added to the body
         */this.$colliderAdded=new iH,/**
         * Observable that notifies when a collider is removed from the body
         */this.$colliderRemoved=new iH,this.set(t)}/**
     * Get the current collider geometry
     */get(){return this._collider}/**
     * Set the collider geometry
     * @param collider
     * @returns the collider you set
     */set(t){return this.clear(),t&&(this._collider=t,this._collider.owner=this.owner,t.events.pipe(this.events),this.$colliderAdded.notifyAll(t),this.update()),t}/**
     * Remove collider geometry from collider component
     */clear(){this._collider&&(this._collider.events.unpipe(this.events),this.$colliderRemoved.notifyAll(this._collider),this._collider.owner=null,this._collider=null)}clone(){let t=new i7(this._collider.clone());return t}/**
     * Return world space bounds
     */get bounds(){var t,e;return null!==(e=null===(t=this._collider)||void 0===t?void 0:t.bounds)&&void 0!==e?e:new ey}/**
     * Return local space bounds
     */get localBounds(){var t,e;return null!==(e=null===(t=this._collider)||void 0===t?void 0:t.localBounds)&&void 0!==e?e:new ey}/**
     * Update the collider's transformed geometry
     */update(){var t;let e=null===(t=this.owner)||void 0===t?void 0:t.get(iN);this._collider&&(this._collider.owner=this.owner,e&&this._collider.update(e.get()))}/**
     * Collide component with another
     * @param other
     */collide(t){let e=this._collider,i=t._collider;if(!e||!i)return[];// If we have a composite lefthand side :(
// Might bite us, but to avoid updating all the handlers make composite always left side
let s=!1;if(i instanceof ij&&(e=i,i=this._collider,s=!0),this._collider){let r=e.collide(i);if(r)return s&&r.forEach(e=>{e.mtv=e.mtv.negate(),e.normal=e.normal.negate(),e.tangent=e.normal.perpendicular(),e.colliderA=this._collider,e.colliderB=t._collider}),r}return[]}onAdd(t){this._collider&&this.update(),// Wire up the collider events to the owning entity
this.events.on("precollision",e=>{t.events.emit("precollision",new tq(e.target.owner,e.other.owner,e.side,e.intersection))}),this.events.on("postcollision",e=>{t.events.emit("postcollision",new tX(e.target.owner,e.other.owner,e.side,e.intersection))}),this.events.on("collisionstart",e=>{t.events.emit("collisionstart",new tQ(e.target.owner,e.other.owner,e.contact))}),this.events.on("collisionend",e=>{t.events.emit("collisionend",new tJ(e.target.owner,e.other.owner))})}onRemove(){this.events.clear(),this.$colliderRemoved.notifyAll(this._collider)}/**
     * Sets up a box geometry based on the current bounds of the associated actor of this physics body.
     *
     * If no width/height are specified the body will attempt to use the associated actor's width/height.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */useBoxCollider(t,e,i=eg.Half,s=eg.Zero){let r=i6.Box(t,e,i,s);return this.set(r)}/**
     * Sets up a [[PolygonCollider|polygon]] collision geometry based on a list of of points relative
     *  to the anchor of the associated actor
     * of this physics body.
     *
     * Only [convex polygon](https://en.wikipedia.org/wiki/Convex_polygon) definitions are supported.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */usePolygonCollider(t,e=eg.Zero){let i=i6.Polygon(t,e);return this.set(i)}/**
     * Sets up a [[Circle|circle collision geometry]] as the only collider with a specified radius in pixels.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */useCircleCollider(t,e=eg.Zero){let i=i6.Circle(t,e);return this.set(i)}/**
     * Sets up an [[Edge|edge collision geometry]] with a start point and an end point relative to the anchor of the associated actor
     * of this physics body.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */useEdgeCollider(t,e){let i=i6.Edge(t,e);return this.set(i)}/**
     * Setups up a [[CompositeCollider]] which can define any arbitrary set of excalibur colliders
     * @param colliders
     */useCompositeCollider(t){return this.set(new ij(t))}}(v=Q||(Q={})).Rotation="rotation",v.X="x",v.Y="y";/**
 * Body describes all the physical properties pos, vel, acc, rotation, angular velocity for the purpose of
 * of physics simulation.
 */class i8 extends iz{constructor(t){var e,i,s;super(),this.type="ex.body",this.dependencies=[iN,i$],this.id=tA("body",i8._ID++),this.events=new tS,this._oldTransform=new iL,/**
         * Indicates whether the old transform has been captured at least once for interpolation
         * @internal
         */this.__oldTransformCaptured=!1,/**
         * Enable or disabled the fixed update interpolation, by default interpolation is on.
         */this.enableFixedUpdateInterpolate=!0,/**
         * Collision type for the rigidbody physics simulation, by default [[CollisionType.PreventCollision]]
         */this.collisionType=X.PreventCollision,/**
         * The collision group for the body's colliders, by default body colliders collide with everything
         */this.group=iW.All,/**
         * The amount of mass the body has
         */this._mass=iB.defaultMass,/**
         * Amount of "motion" the body has before sleeping. If below [[Physics.sleepEpsilon]] it goes to "sleep"
         */this.sleepMotion=5*iB.sleepEpsilon,/**
         * Can this body sleep, by default bodies do not sleep
         */this.canSleep=iB.bodiesCanSleepByDefault,this._sleeping=!1,/**
         * The also known as coefficient of restitution of this actor, represents the amount of energy preserved after collision or the
         * bounciness. If 1, it is 100% bouncy, 0 it completely absorbs.
         */this.bounciness=.2,/**
         * The coefficient of friction on this actor
         */this.friction=.99,/**
         * Should use global gravity [[Physics.gravity]] in it's physics simulation, default is true
         */this.useGravity=!0,/**
         * Degrees of freedom to limit
         *
         * Note: this only limits responses in the realistic solver, if velocity/angularVelocity is set the actor will still respond
         */this.limitDegreeOfFreedom=[],/**
         * The velocity of the actor last frame (vx, vy) in pixels/second
         */this.oldVel=new eg(0,0),/**
         * Gets/sets the acceleration of the actor from the last frame. This does not include the global acc [[Physics.acc]].
         */this.oldAcc=eg.Zero,t&&(this.collisionType=null!==(e=t.type)&&void 0!==e?e:this.collisionType,this.group=null!==(i=t.group)&&void 0!==i?i:this.group,this.useGravity=null!==(s=t.useGravity)&&void 0!==s?s:this.useGravity)}get matrix(){return this.transform.get().matrix}get mass(){return this._mass}set mass(t){this._mass=t,this._cachedInertia=void 0,this._cachedInverseInertia=void 0}/**
     * The inverse mass (1/mass) of the body. If [[CollisionType.Fixed]] this is 0, meaning "infinite" mass
     */get inverseMass(){return this.collisionType===X.Fixed?0:1/this.mass}/**
     * Whether this body is sleeping or not
     */get sleeping(){return this._sleeping}/**
     * Set the sleep state of the body
     * @param sleeping
     */setSleeping(t){this._sleeping=t,t?(this.vel=eg.Zero,this.acc=eg.Zero,this.angularVelocity=0,this.sleepMotion=0):this.sleepMotion=5*iB.sleepEpsilon}/**
     * Update body's [[BodyComponent.sleepMotion]] for the purpose of sleeping
     */updateMotion(){this._sleeping&&this.setSleeping(!0);let t=this.vel.size*this.vel.size+Math.abs(this.angularVelocity*this.angularVelocity),e=iB.sleepBias;this.sleepMotion=e*this.sleepMotion+(1-e)*t,this.sleepMotion=eh(this.sleepMotion,0,10*iB.sleepEpsilon),this.canSleep&&this.sleepMotion<iB.sleepEpsilon&&this.setSleeping(!0)}/**
     * Get the moment of inertia from the [[ColliderComponent]]
     */get inertia(){if(this._cachedInertia)return this._cachedInertia;// Inertia is a property of the geometry, so this is a little goofy but seems to be okay?
let t=this.owner.get(i7);if(t){t.$colliderAdded.subscribe(()=>{this._cachedInertia=null}),t.$colliderRemoved.subscribe(()=>{this._cachedInertia=null});let e=t.get();if(e)return this._cachedInertia=e.getInertia(this.mass)}return 0}/**
     * Get the inverse moment of inertial from the [[ColliderComponent]]. If [[CollisionType.Fixed]] this is 0, meaning "infinite" mass
     */get inverseInertia(){return this._cachedInverseInertia?this._cachedInverseInertia:this._cachedInverseInertia=this.collisionType===X.Fixed?0:1/this.inertia}/**
     * Returns if the owner is active
     */get active(){var t;return!!(null===(t=this.owner)||void 0===t?void 0:t.active)}/**
     * @deprecated Use globalP0s
     */get center(){return this.globalPos}get transform(){var t;return null===(t=this.owner)||void 0===t?void 0:t.get(iN)}get motion(){var t;return null===(t=this.owner)||void 0===t?void 0:t.get(i$)}get pos(){return this.transform.pos}set pos(t){this.transform.pos=t}/**
     * The (x, y) position of the actor this will be in the middle of the actor if the
     * [[Actor.anchor]] is set to (0.5, 0.5) which is default.
     * If you want the (x, y) position to be the top left of the actor specify an anchor of (0, 0).
     */get globalPos(){return this.transform.globalPos}set globalPos(t){this.transform.globalPos=t}/**
     * The position of the actor last frame (x, y) in pixels
     */get oldPos(){return this._oldTransform.pos}/**
     * The current velocity vector (vx, vy) of the actor in pixels/second
     */get vel(){return this.motion.vel}set vel(t){this.motion.vel=t}/**
     * The current acceleration vector (ax, ay) of the actor in pixels/second/second. An acceleration pointing down such as (0, 100) may
     * be useful to simulate a gravitational effect.
     */get acc(){return this.motion.acc}set acc(t){this.motion.acc=t}/**
     * The current torque applied to the actor
     */get torque(){return this.motion.torque}set torque(t){this.motion.torque=t}/**
     * Gets/sets the rotation of the body from the last frame.
     */get oldRotation(){return this._oldTransform.rotation}/**
     * The rotation of the body in radians
     */get rotation(){return this.transform.globalRotation}set rotation(t){this.transform.globalRotation=t}/**
     * The scale vector of the actor
     */get scale(){return this.transform.globalScale}set scale(t){this.transform.globalScale=t}/**
     * The scale of the actor last frame
     */get oldScale(){return this._oldTransform.scale}/**
     * The scale rate of change of the actor in scale/second
     */get scaleFactor(){return this.motion.scaleFactor}set scaleFactor(t){this.motion.scaleFactor=t}/**
     * Get the angular velocity in radians/second
     */get angularVelocity(){return this.motion.angularVelocity}/**
     * Set the angular velocity in radians/second
     */set angularVelocity(t){this.motion.angularVelocity=t}/**
     * Apply a specific impulse to the body
     * @param point
     * @param impulse
     */applyImpulse(t,e){if(this.collisionType!==X.Active)return;// only active objects participate in the simulation
let i=e.scale(this.inverseMass);if(this.limitDegreeOfFreedom.includes(Q.X)&&(i.x=0),this.limitDegreeOfFreedom.includes(Q.Y)&&(i.y=0),this.vel.addEqual(i),!this.limitDegreeOfFreedom.includes(Q.Rotation)){let i=t.sub(this.globalPos);this.angularVelocity+=this.inverseInertia*i.cross(e)}}/**
     * Apply only linear impulse to the body
     * @param impulse
     */applyLinearImpulse(t){if(this.collisionType!==X.Active)return;// only active objects participate in the simulation
let e=t.scale(this.inverseMass);this.limitDegreeOfFreedom.includes(Q.X)&&(e.x=0),this.limitDegreeOfFreedom.includes(Q.Y)&&(e.y=0),this.vel=this.vel.add(e)}/**
     * Apply only angular impulse to the body
     * @param point
     * @param impulse
     */applyAngularImpulse(t,e){if(this.collisionType===X.Active&&!this.limitDegreeOfFreedom.includes(Q.Rotation)){let i=t.sub(this.globalPos);this.angularVelocity+=this.inverseInertia*i.cross(e)}// only active objects participate in the simulation
}/**
     * Sets the old versions of pos, vel, acc, and scale.
     */captureOldTransform(){// Capture old values before integration step updates them
this.__oldTransformCaptured=!0,this.transform.get().clone(this._oldTransform),this.oldVel.setTo(this.vel.x,this.vel.y),this.oldAcc.setTo(this.acc.x,this.acc.y)}clone(){let t=super.clone();return t}}i8._ID=0;/**
 * AddedComponent message
 */class st{constructor(t){this.data=t,this.type="Component Added"}}/**
 * Type guard to know if message is f an Added Component
 */function se(t){return!!t&&"Component Added"===t.type}/**
 * RemovedComponent message
 */class si{constructor(t){this.data=t,this.type="Component Removed"}}/**
 * Type guard to know if message is for a Removed Component
 */function ss(t){return!!t&&"Component Removed"===t.type}let sr={Initialize:"initialize",PreUpdate:"preupdate",PostUpdate:"postupdate"};/**
 * An Entity is the base type of anything that can have behavior in Excalibur, they are part of the built in entity component system
 *
 * Entities can be strongly typed with the components they contain
 *
 * ```typescript
 * const entity = new Entity<ComponentA | ComponentB>();
 * entity.components.a; // Type ComponentA
 * entity.components.b; // Type ComponentB
 * ```
 */class sn{constructor(t,e){if(/**
         * Listen to or emit events for an entity
         */this.events=new tS,/**
         * The unique identifier for the entity
         */this.id=sn._ID++,/**
         * The scene that the entity is in, if any
         */this.scene=null,this._name="anonymous",/**
         * Whether this entity is active, if set to false it will be reclaimed
         */this.active=!0,/**
         * Bucket to hold on to deferred removals
         */this._componentsToRemove=[],this._componentTypeToInstance=new Map,this._componentStringToInstance=new Map,this._tagsMemo=[],this._typesMemo=[],/**
         * Observable that keeps track of component add or remove changes on the entity
         */this.componentAdded$=new iH,this.componentRemoved$=new iH,this._parent=null,this.childrenAdded$=new iH,this.childrenRemoved$=new iH,this._children=[],this._isInitialized=!1,this._setName(e),t)for(let e of t)this.addComponent(e)}_setName(t){t&&(this._name=t)}get name(){return this._name}/**
     * Kill the entity, means it will no longer be updated. Kills are deferred to the end of the update.
     * If parented it will be removed from the parent when killed.
     */kill(){this.active&&(this.active=!1,this.unparent())}isKilled(){return!this.active}/**
     * Specifically get the tags on the entity from [[TagComponent]]
     */get tags(){return this._tagsMemo}/**
     * Check if a tag exists on the entity
     * @param tag name to check for
     */hasTag(t){return this.tags.includes(t)}/**
     * Adds a tag to an entity
     * @param tag
     * @returns Entity
     */addTag(t){return this.addComponent(new iO(t))}/**
     * Removes a tag on the entity
     *
     * Removals are deferred until the end of update
     * @param tag
     * @param force Remove component immediately, no deferred
     */removeTag(t,e=!1){return this.removeComponent(t,e)}/**
     * The types of the components on the Entity
     */get types(){return this._typesMemo}_rebuildMemos(){this._tagsMemo=Array.from(this._componentStringToInstance.values()).filter(t=>t instanceof iO).map(t=>t.type),this._typesMemo=Array.from(this._componentStringToInstance.keys())}getComponents(){return Array.from(this._componentStringToInstance.values())}_notifyAddComponent(t){this._rebuildMemos();let e=new st({component:t,entity:this});this.componentAdded$.notifyAll(e)}_notifyRemoveComponent(t){let e=new si({component:t,entity:this});this.componentRemoved$.notifyAll(e),this._rebuildMemos()}get parent(){return this._parent}/**
     * Get the direct children of this entity
     */get children(){return this._children}/**
     * Unparents this entity, if there is a parent. Otherwise it does nothing.
     */unparent(){this._parent&&(this._parent.removeChild(this),this._parent=null)}/**
     * Adds an entity to be a child of this entity
     * @param entity
     */addChild(t){if(null===t.parent){if(this.getAncestors().includes(t))throw Error("Cycle detected, cannot add entity");this._children.push(t),t._parent=this,this.childrenAdded$.notifyAll(t)}else throw Error("Entity already has a parent, cannot add without unparenting");return this}/**
     * Remove an entity from children if it exists
     * @param entity
     */removeChild(t){return t.parent===this&&(eC(t,this._children),t._parent=null,this.childrenRemoved$.notifyAll(t)),this}/**
     * Removes all children from this entity
     */removeAllChildren(){// Avoid modifying the array issue by walking backwards
for(let t=this.children.length-1;t>=0;t--)this.removeChild(this.children[t]);return this}/**
     * Returns a list of parent entities starting with the topmost parent. Includes the current entity.
     */getAncestors(){let t=[this],e=this.parent;for(;e;)t.push(e),e=e.parent;return t.reverse()}/**
     * Returns a list of all the entities that descend from this entity. Includes the current entity.
     */getDescendants(){let t=[this],e=[this];for(;e.length>0;){let i=e.pop();e=e.concat(i.children),t=t.concat(i.children)}return t}/**
     * Creates a deep copy of the entity and a copy of all its components
     */clone(){let t=new sn;for(let e of this.types)t.addComponent(this.get(e).clone());for(let e of this.children)t.addChild(e.clone());return t}/**
     * Adds a copy of all the components from another template entity as a "prefab"
     * @param templateEntity Entity to use as a template
     * @param force Force component replacement if it already exists on the target entity
     */addTemplate(t,e=!1){for(let i of t.getComponents())this.addComponent(i.clone(),e);for(let e of t.children)this.addChild(e.clone().addTemplate(e));return this}/**
     * Adds a component to the entity
     * @param component Component or Entity to add copy of components from
     * @param force Optionally overwrite any existing components of the same type
     */addComponent(t,e=!1){// if component already exists, skip if not forced
if(this.has(t.type)){if(!e)return this;this.removeComponent(t,!0)}// TODO circular dependencies will be a problem
if(t.dependencies&&t.dependencies.length)for(let e of t.dependencies)this.addComponent(new e);t.owner=this;let i=t.constructor;return this._componentTypeToInstance.set(i,t),this._componentStringToInstance.set(t.type,t),t.onAdd&&t.onAdd(this),this._notifyAddComponent(t),this}/**
     * Removes a component from the entity, by default removals are deferred to the end of entity update to avoid consistency issues
     *
     * Components can be force removed with the `force` flag, the removal is not deferred and happens immediately
     * @param componentOrType
     * @param force
     */removeComponent(t,e=!1){return e?"string"==typeof t?this._removeComponentByType(t):t instanceof iz&&this._removeComponentByType(t.type):this._componentsToRemove.push(t),this}clearComponents(){let t=this.getComponents();for(let e of t)this.removeComponent(e)}_removeComponentByType(t){if(this.has(t)){let e=this.get(t);e.owner=null,e.onRemove&&e.onRemove(this);let i=e.constructor;this._componentTypeToInstance.delete(i),this._componentStringToInstance.delete(e.type),this._notifyRemoveComponent(e)}}/**
     * @hidden
     * @internal
     */processComponentRemoval(){for(let t of this._componentsToRemove){let e="string"==typeof t?t:t.type;this._removeComponentByType(e)}this._componentsToRemove.length=0}has(t){return"string"==typeof t?this._componentStringToInstance.has(t):this._componentTypeToInstance.has(t)}get(t){return"string"==typeof t?this._componentStringToInstance.get(t):this._componentTypeToInstance.get(t)}/**
     * Gets whether the actor is Initialized
     */get isInitialized(){return this._isInitialized}/**
     * Initializes this entity, meant to be called by the Scene before first update not by users of Excalibur.
     *
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * @internal
     */_initialize(t){this.isInitialized||(this.onInitialize(t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.events.emit("preupdate",new tU(t,e,this)),this.onPreUpdate(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.events.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}/**
     * `onInitialize` is called before the first update of the entity. This method is meant to be
     * overridden.
     *
     * Synonymous with the event handler `.on('initialize', (evt) => {...})`
     */onInitialize(t){// Override me
}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before an entity is updated.
     */onPreUpdate(t,e){// Override me
}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('postupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after an entity is updated.
     */onPostUpdate(t,e){// Override me
}/**
     *
     * Entity update lifecycle, called internally
     *
     * @internal
     * @param engine
     * @param delta
     */update(t,e){for(let i of(this._initialize(t),this._preupdate(t,e),this.children))i.update(t,e);this._postupdate(t,e)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}/**
 * Type guard for checking if a Graphic HasTick (used for graphics that change over time like animations)
 * @param graphic
 */function so(t){return!!t.tick}sn._ID=0;class sa{constructor(t,e){this._options=t,this._graphics=e,this.graphics=[]}get name(){return this._options.name}hide(t){if(t){let e=null;e=t instanceof eF?t:this._graphics.getGraphic(t),this.graphics=this.graphics.filter(t=>t.graphic!==e),this._graphics.recalculateBounds()}else this.graphics.length=0}/**
     * Show a graphic by name or instance at an offset, graphics are shown in the order in which `show()` is called.
     *
     * If `show()` is called multiple times for the same graphic it will be shown multiple times.
     * @param nameOrGraphic
     * @param options
     */show(t,e){let i;return(e={...e},t instanceof eF?i=this._graphics.copyGraphics?t.clone():t:(i=this._graphics.getGraphic(t))||t7.getInstance().error(`No such graphic added to component named ${t}. These named graphics are available: `,this._graphics.getNames()),i)?(this.graphics.push({graphic:i,options:e}),this._graphics.recalculateBounds(),i):null}/**
     * Use a specific graphic, swap out any current graphics being shown
     * @param nameOrGraphic
     * @param options
     */use(t,e){return e={...e},this.hide(),this.show(t,e)}/**
     * Current order of the layer, higher numbers are on top, lower numbers are on the bottom.
     *
     * For example a layer with `order = -1` would be under a layer of `order = 1`
     */get order(){return this._options.order}/**
     * Set the order of the layer, higher numbers are on top, lower numbers are on the bottom.
     *
     * For example a layer with `order = -1` would be under a layer of `order = 1`
     */set order(t){this._options.order=t}/**
     * Get or set the pixel offset from the layer anchor for all graphics in the layer
     */get offset(){var t;return null!==(t=this._options.offset)&&void 0!==t?t:eg.Zero}set offset(t){this._options.offset=t}get currentKeys(){var t;return null!==(t=this.name)&&void 0!==t?t:"anonymous"}clone(t){let e=new sa({...this._options},t);return e.graphics=[...this.graphics.map(t=>({graphic:t.graphic.clone(),options:{...t.options}}))],e}}class sh{constructor(t){this._component=t,this._layers=[],this._layerMap={},this.default=new sa({name:"default",order:0},t),this._maybeAddLayer(this.default)}create(t){let e=new sa(t,this._component);return this._maybeAddLayer(e)}get(t){return t?this._getLayer(t):this._layers}currentKeys(){let t=[];for(let e of this._layers)t.push(e.currentKeys);return t}has(t){return t in this._layerMap}_maybeAddLayer(t){return this._layerMap[t.name]?this._layerMap[t.name]:(this._layerMap[t.name]=t,this._layers.push(t),this._layers.sort((t,e)=>t.order-e.order),t)}_getLayer(t){return this._layerMap[t]}clone(t){let e=new sh(t);e._layerMap={},e._layers=[],e.default=this.default.clone(t),e._maybeAddLayer(e.default);// Remove the default layer out of the clone
let i=this._layers.filter(t=>"default"!==t.name).map(e=>e.clone(t));return i.forEach(t=>e._maybeAddLayer(t)),e}}/**
 * Component to manage drawings, using with the position component
 */class sl extends iz{getGraphic(t){return this._graphics[t]}/**
     * Get registered graphics names
     */getNames(){return Object.keys(this._graphics)}constructor(t){super(),this.type="ex.graphics",this._graphics={},/**
         * Sets or gets wether any drawing should be visible in this component
         */this.visible=!0,/**
         * Sets or gets wither all drawings should have an opacity applied
         */this.opacity=1,/**
         * Offset to apply to graphics by default
         */this.offset=eg.Zero,/**
         * Anchor to apply to graphics by default
         */this.anchor=eg.Half,/**
         * Flip all graphics horizontally along the y-axis
         */this.flipHorizontal=!1,/**
         * Flip all graphics vertically along the x-axis
         */this.flipVertical=!1,/**
         * If set to true graphics added to the component will be copied. This can affect performance
         */this.copyGraphics=!1,this._localBounds=null,// Defaults
t={visible:this.visible,...t};let{current:e,anchor:i,opacity:s,visible:r,graphics:n,offset:o,copyGraphics:a,onPreDraw:h,onPostDraw:l}=t;this._graphics=n||{},this.offset=null!=o?o:this.offset,this.opacity=null!=s?s:this.opacity,this.anchor=null!=i?i:this.anchor,this.copyGraphics=null!=a?a:this.copyGraphics,this.onPreDraw=null!=h?h:this.onPreDraw,this.onPostDraw=null!=l?l:this.onPostDraw,this.visible=!!r,this.layers=new sh(this),e&&this._graphics[e]&&this.show(this._graphics[e])}/**
     * Returns the currently displayed graphics and their offsets, empty array if hidden
     */get current(){return this.layers.default.graphics}/**
     * Returns all graphics associated with this component
     */get graphics(){return this._graphics}add(t,e){let i="default",s=null;return"string"==typeof t?(i=t,s=e):s=t,this._graphics[i]=this.copyGraphics?s.clone():s,"default"===i&&this.show("default"),s}/**
     * Show a graphic by name on the **default** layer, returns the new [[Graphic]]
     */show(t,e){let i=this.layers.default.show(t,e);return this.recalculateBounds(),i}/**
     * Use a graphic only, swap out any graphics on the **default** layer, returns the new [[Graphic]]
     * @param nameOrGraphic
     * @param options
     */use(t,e){let i=this.layers.default.use(t,e);return this.recalculateBounds(),i}hide(t){this.layers.default.hide(t)}set localBounds(t){this._localBounds=t}recalculateBounds(){let t=new ey;for(let e of this.layers.get())for(let{graphic:i,options:s}of e.graphics){let r=this.anchor,n=this.offset;(null==s?void 0:s.anchor)&&(r=s.anchor),(null==s?void 0:s.offset)&&(n=s.offset);let o=i.localBounds,a=-o.width*r.x+n.x,h=-o.height*r.y+n.y;t=null==i?void 0:i.localBounds.translate(em(a+e.offset.x,h+e.offset.y)).combine(t)}this._localBounds=t}get localBounds(){return(!this._localBounds||this._localBounds.hasZeroDimensions())&&this.recalculateBounds(),this._localBounds}/**
     * Update underlying graphics if necesary, called internally
     * @param elapsed
     * @internal
     */update(t,e=0){for(let i of this.layers.get())for(let{graphic:s}of i.graphics)so(s)&&(null==s||s.tick(t,e))}clone(){let t=new sl;return t._graphics={...this._graphics},t.offset=this.offset.clone(),t.opacity=this.opacity,t.anchor=this.anchor.clone(),t.copyGraphics=this.copyGraphics,t.onPreDraw=this.onPreDraw,t.onPostDraw=this.onPostDraw,t.visible=this.visible,t.layers=this.layers.clone(t),t}}/**
 * A Rectangle [[Graphic]] for drawing rectangles to the [[ExcaliburGraphicsContext]]
 */class sd extends i_{constructor(t){super(t),this.width=t.width,this.height=t.height,this.rasterize()}clone(){return new sd({width:this.width,height:this.height,...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){this.color&&t.fillRect(0,0,this.width,this.height),this.strokeColor&&t.strokeRect(0,0,this.width,this.height)}}/**
 * A circle [[Graphic]] for drawing circles to the [[ExcaliburGraphicsContext]]
 *
 * Circles default to [[ImageFiltering.Blended]]
 */class sc extends i_{get radius(){return this._radius}set radius(t){this._radius=t,this.width=2*this._radius,this.height=2*this._radius,this.flagDirty()}constructor(t){var e,i,s;super(t),this._radius=0;let r=null!==(e=t.lineWidth)&&void 0!==e?e:t.strokeColor?1:0;// default lineWidth in canvas is 1px
this.padding=null!==(i=t.padding)&&void 0!==i?i:2+r/2,this.radius=t.radius,this.filtering=null!==(s=t.filtering)&&void 0!==s?s:G.Blended,this.rasterize()}clone(){return new sc({radius:this.radius,...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){this.radius>0&&(t.beginPath(),t.arc(this.radius,this.radius,this.radius,0,2*Math.PI),this.color&&t.fill(),this.strokeColor&&t.stroke())}}/**
 * Add this component to optionally configure how the pointer
 * system detects pointer events.
 *
 * By default the collider shape is used and graphics bounds is not.
 *
 * If both collider shape and graphics bounds are enabled it will fire events if either or
 * are intersecting the pointer.
 */class su extends iz{constructor(){super(...arguments),this.type="ex.pointer",/**
         * Use any existing Collider component geometry for pointer events. This is useful if you want
         * user pointer events only to trigger on the same collision geometry used in the collider component
         * for collision resolution. Default is `true`.
         */this.useColliderShape=!0,/**
         * Use any existing Graphics component bounds for pointers. This is useful if you want the axis aligned
         * bounds around the graphic to trigger pointer events. Default is `false`.
         */this.useGraphicsBounds=!1}}/**
 * Standard easing functions for motion in Excalibur, defined on a domain of [0, duration] and a range from [+startValue,+endValue]
 * Given a time, the function will return a value from positive startValue to positive endValue.
 *
 * ```js
 * function Linear (t) {
 *    return t * t;
 * }
 *
 * // accelerating from zero velocity
 * function EaseInQuad (t) {
 *    return t * t;
 * }
 *
 * // decelerating to zero velocity
 * function EaseOutQuad (t) {
 *    return t * (2 - t);
 * }
 *
 * // acceleration until halfway, then deceleration
 * function EaseInOutQuad (t) {
 *    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
 * }
 *
 * // accelerating from zero velocity
 * function EaseInCubic (t) {
 *    return t * t * t;
 * }
 *
 * // decelerating to zero velocity
 * function EaseOutCubic (t) {
 *    return (--t) * t * t + 1;
 * }
 *
 * // acceleration until halfway, then deceleration
 * function EaseInOutCubic (t) {
 *    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
 * }
 * ```
 */class sp{static CreateReversibleEasingFunction(t){return(e,i,s,r)=>s<i?i-(t(e,s,i,r)-s):t(e,i,s,r)}static CreateVectorEasingFunction(t){return(e,i,s,r)=>new eg(t(e,i.x,s.x,r),t(e,i.y,s.y,r))}}sp.Linear=sp.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e)*t/s+e),sp.EaseInQuad=sp.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e)*(t/=s)*t+e),sp.EaseOutQuad=sp.CreateReversibleEasingFunction((t,e,i,s)=>-(i-=e)*(t/=s)*(t-2)+e),sp.EaseInOutQuad=sp.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e,(t/=s/2)<1)?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e),sp.EaseInCubic=sp.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e)*(t/=s)*t*t+e),sp.EaseOutCubic=sp.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e,t/=s,i*(--t*t*t+1)+e)),sp.EaseInOutCubic=sp.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e,(t/=s/2)<1)?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e);/**
 * Action Queues represent an ordered sequence of actions
 *
 * Action queues are part of the [[ActionContext|Action API]] and
 * store the list of actions to be executed for an [[Actor]].
 *
 * Actors implement [[Actor.actions]] which can be manipulated by
 * advanced users to adjust the actions currently being executed in the
 * queue.
 */class s_{constructor(t){this._actions=[],this._completedActions=[],this._entity=t}/**
     * Add an action to the sequence
     * @param action
     */add(t){this._actions.push(t)}/**
     * Remove an action by reference from the sequence
     * @param action
     */remove(t){let e=this._actions.indexOf(t);this._actions.splice(e,1)}/**
     * Removes all actions from this sequence
     */clearActions(){this._actions.length=0,this._completedActions.length=0,this._currentAction&&this._currentAction.stop()}/**
     *
     * @returns The total list of actions in this sequence complete or not
     */getActions(){return this._actions.concat(this._completedActions)}/**
     *
     * @returns `true` if there are more actions to process in the sequence
     */hasNext(){return this._actions.length>0}/**
     * @returns `true` if the current sequence of actions is done
     */isComplete(){return 0===this._actions.length}/**
     * Resets the sequence of actions, this is used to restart a sequence from the beginning
     */reset(){this._actions=this.getActions();let t=this._actions.length;for(let e=0;e<t;e++)this._actions[e].reset();this._completedActions=[]}/**
     * Update the queue which updates actions and handles completing actions
     * @param elapsedMs
     */update(t){this._actions.length>0&&(this._currentAction=this._actions[0],this._currentAction.update(t),this._currentAction.isComplete(this._entity)&&this._completedActions.push(this._actions.shift()))}}class sg{constructor(t,e,i){this._stopped=!1,this._repeatBuilder=e,this._repeatContext=new sR(t),this._actionQueue=this._repeatContext.getQueue(),this._repeat=i,this._originalRepeat=i,this._repeatBuilder(this._repeatContext),this._repeat--}update(t){this._actionQueue.isComplete()&&(this._actionQueue.clearActions(),this._repeatBuilder(this._repeatContext),this._repeat--),this._actionQueue.update(t)}isComplete(){return this._stopped||this._repeat<=0&&this._actionQueue.isComplete()}stop(){this._stopped=!0}reset(){this._repeat=this._originalRepeat}}/**
 * RepeatForever Action implementation, it is recommended you use the fluent action
 * context API.
 *
 *
 */class sm{constructor(t,e){this._stopped=!1,this._repeatBuilder=e,this._repeatContext=new sR(t),this._actionQueue=this._repeatContext.getQueue(),this._repeatBuilder(this._repeatContext)}update(t){this._stopped||(this._actionQueue.isComplete()&&(this._actionQueue.clearActions(),this._repeatBuilder(this._repeatContext)),this._actionQueue.update(t))}isComplete(){return this._stopped}stop(){this._stopped=!0,this._actionQueue.clearActions()}reset(){}}class sf{constructor(t,e,i,s){if(this._started=!1,this._stopped=!1,this._entity=t,this._tx=t.get(iN),this._motion=t.get(i$),this._speed=s,this._offset=new eg(e,i),s<=0)throw t7.getInstance().error("Attempted to moveBy with speed less than or equal to zero : "+s),Error("Speed must be greater than 0 pixels per second")}update(t){this._started||(this._started=!0,this._start=new eg(this._tx.pos.x,this._tx.pos.y),this._end=this._start.add(this._offset),this._distance=this._offset.size,this._dir=this._end.sub(this._start).normalize()),this.isComplete(this._entity)?(this._tx.pos=em(this._end.x,this._end.y),this._motion.vel=em(0,0)):this._motion.vel=this._dir.scale(this._speed)}isComplete(t){let e=t.get(iN);return this._stopped||e.pos.distance(this._start)>=this._distance}stop(){this._motion.vel=em(0,0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sv{constructor(t,e,i,s){this.entity=t,this._started=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._end=new eg(e,i),this._speed=s}update(t){this._started||(this._started=!0,this._start=new eg(this._tx.pos.x,this._tx.pos.y),this._distance=this._start.distance(this._end),this._dir=this._end.sub(this._start).normalize());let e=this._dir.scale(this._speed);this._motion.vel=em(e.x,e.y),this.isComplete(this.entity)&&(this._tx.pos=em(this._end.x,this._end.y),this._motion.vel=em(0,0))}isComplete(t){let e=t.get(iN);return this._stopped||new eg(e.pos.x,e.pos.y).distance(this._start)>=this._distance}stop(){this._motion.vel=em(0,0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}/**
     * Rotation via `ShortestPath` will use the smallest angle
     * between the starting and ending points. This strategy is the default behavior.
     */(y=J||(J={}))[y.ShortestPath=0]="ShortestPath",/**
     * Rotation via `LongestPath` will use the largest angle
     * between the starting and ending points.
     */y[y.LongestPath=1]="LongestPath",/**
     * Rotation via `Clockwise` will travel in a clockwise direction,
     * regardless of the starting and ending points.
     */y[y.Clockwise=2]="Clockwise",/**
     * Rotation via `CounterClockwise` will travel in a counterclockwise direction,
     * regardless of the starting and ending points.
     */y[y.CounterClockwise=3]="CounterClockwise";class sy{constructor(t,e,i,s){this._started=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._end=e,this._speed=i,this._rotationType=s||J.ShortestPath}update(t){if(!this._started){this._started=!0,this._start=this._tx.rotation,this._currentNonCannonAngle=this._tx.rotation;let t=Math.abs(this._end-this._start),e=en-t;switch(t>e?(this._shortDistance=e,this._longDistance=t):(this._shortDistance=t,this._longDistance=e),this._shortestPathIsPositive=(this._start-this._end+en)%en>=Math.PI,this._rotationType){case J.ShortestPath:this._distance=this._shortDistance,this._shortestPathIsPositive?this._direction=1:this._direction=-1;break;case J.LongestPath:this._distance=this._longDistance,this._shortestPathIsPositive?this._direction=-1:this._direction=1;break;case J.Clockwise:this._direction=1,this._shortestPathIsPositive?this._distance=this._shortDistance:this._distance=this._longDistance;break;case J.CounterClockwise:this._direction=-1,this._shortestPathIsPositive?this._distance=this._longDistance:this._distance=this._shortDistance}}this._motion.angularVelocity=this._direction*this._speed,this._currentNonCannonAngle+=this._direction*this._speed*(t/1e3),this.isComplete()&&(this._tx.rotation=this._end,this._motion.angularVelocity=0,this._stopped=!0)}isComplete(){let t=Math.abs(this._currentNonCannonAngle-this._start);return this._stopped||t>=Math.abs(this._distance)}stop(){this._motion.angularVelocity=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sx{constructor(t,e,i,s){this._started=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._speed=i,this._offset=e,this._rotationType=s||J.ShortestPath}update(t){if(!this._started){this._started=!0,this._start=this._tx.rotation,this._currentNonCannonAngle=this._tx.rotation,this._end=this._start+this._offset;let t=Math.abs(this._end-this._start),e=en-t;switch(t>e?(this._shortDistance=e,this._longDistance=t):(this._shortDistance=t,this._longDistance=e),this._shortestPathIsPositive=(this._start-this._end+en)%en>=Math.PI,this._rotationType){case J.ShortestPath:this._distance=this._shortDistance,this._shortestPathIsPositive?this._direction=1:this._direction=-1;break;case J.LongestPath:this._distance=this._longDistance,this._shortestPathIsPositive?this._direction=-1:this._direction=1;break;case J.Clockwise:this._direction=1,this._shortDistance>=0?this._distance=this._shortDistance:this._distance=this._longDistance;break;case J.CounterClockwise:this._direction=-1,this._shortDistance<=0?this._distance=this._shortDistance:this._distance=this._longDistance}}this._motion.angularVelocity=this._direction*this._speed,this._currentNonCannonAngle+=this._direction*this._speed*(t/1e3),this.isComplete()&&(this._tx.rotation=this._end,this._motion.angularVelocity=0,this._stopped=!0)}isComplete(){let t=Math.abs(this._currentNonCannonAngle-this._start);return this._stopped||t>=Math.abs(this._distance)}stop(){this._motion.angularVelocity=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1,this._start=void 0,this._currentNonCannonAngle=void 0,this._distance=void 0}}class sw{constructor(t,e,i,s,r){this._started=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._endX=e,this._endY=i,this._speedX=s,this._speedY=r}update(t){if(this._started||(this._started=!0,this._startX=this._tx.scale.x,this._startY=this._tx.scale.y,this._distanceX=Math.abs(this._endX-this._startX),this._distanceY=Math.abs(this._endY-this._startY)),Math.abs(this._tx.scale.x-this._startX)>=this._distanceX)this._motion.scaleFactor.x=0;else{let t=this._endY<this._startY?-1:1;this._motion.scaleFactor.x=this._speedX*t}if(Math.abs(this._tx.scale.y-this._startY)>=this._distanceY)this._motion.scaleFactor.y=0;else{let t=this._endY<this._startY?-1:1;this._motion.scaleFactor.y=this._speedY*t}this.isComplete()&&(this._tx.scale=em(this._endX,this._endY),this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0)}isComplete(){return this._stopped||Math.abs(this._tx.scale.x-this._startX)>=this._distanceX-.01&&Math.abs(this._tx.scale.y-this._startY)>=this._distanceY-.01}stop(){this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sb{constructor(t,e,i,s){this._started=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._offset=new eg(e,i),this._speedX=this._speedY=s}update(t){this._started||(this._started=!0,this._startScale=this._tx.scale.clone(),this._endScale=this._startScale.add(this._offset),this._distanceX=Math.abs(this._endScale.x-this._startScale.x),this._distanceY=Math.abs(this._endScale.y-this._startScale.y),this._directionX=this._endScale.x<this._startScale.x?-1:1,this._directionY=this._endScale.y<this._startScale.y?-1:1),this._motion.scaleFactor.x=this._speedX*this._directionX,this._motion.scaleFactor.y=this._speedY*this._directionY,this.isComplete()&&(this._tx.scale=this._endScale,this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0)}isComplete(){return this._stopped||Math.abs(this._tx.scale.x-this._startScale.x)>=this._distanceX-.01&&Math.abs(this._tx.scale.y-this._startScale.y)>=this._distanceY-.01}stop(){this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sC{constructor(t){this._method=null,this._hasBeenCalled=!1,this._method=t}update(t){this._method(),this._hasBeenCalled=!0}isComplete(){return this._hasBeenCalled}reset(){this._hasBeenCalled=!1}stop(){this._hasBeenCalled=!0}}class sA{constructor(t,e,i,s,r){this.easingFcn=r,this._currentLerpTime=0,this._lerpDuration=1e3,this._lerpStart=new eg(0,0),this._lerpEnd=new eg(0,0),this._initialized=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._lerpDuration=s,this._lerpEnd=new eg(e,i)}_initialize(){this._lerpStart=new eg(this._tx.pos.x,this._tx.pos.y),this._currentLerpTime=0}update(t){this._initialized||(this._initialize(),this._initialized=!0),// Need to update lerp time first, otherwise the first update will always be zero
this._currentLerpTime+=t;let e=this._tx.pos.x,i=this._tx.pos.y;this._currentLerpTime<this._lerpDuration?(e=this._lerpEnd.x<this._lerpStart.x?this._lerpStart.x-(this.easingFcn(this._currentLerpTime,this._lerpEnd.x,this._lerpStart.x,this._lerpDuration)-this._lerpEnd.x):this.easingFcn(this._currentLerpTime,this._lerpStart.x,this._lerpEnd.x,this._lerpDuration),i=this._lerpEnd.y<this._lerpStart.y?this._lerpStart.y-(this.easingFcn(this._currentLerpTime,this._lerpEnd.y,this._lerpStart.y,this._lerpDuration)-this._lerpEnd.y):this.easingFcn(this._currentLerpTime,this._lerpStart.y,this._lerpEnd.y,this._lerpDuration),// Given the lerp position figure out the velocity in pixels per second
this._motion.vel=em((e-this._tx.pos.x)/(t/1e3),(i-this._tx.pos.y)/(t/1e3))):(this._tx.pos=em(this._lerpEnd.x,this._lerpEnd.y),this._motion.vel=eg.Zero)}isComplete(){return this._stopped||this._currentLerpTime>=this._lerpDuration}reset(){this._initialized=!1,this._stopped=!1,this._currentLerpTime=0}stop(){this._motion.vel=em(0,0),this._stopped=!0}}class sS{constructor(t,e,i,s,r){this.easingFcn=r,this._currentLerpTime=0,this._lerpDuration=1e3,this._lerpStart=new eg(0,0),this._lerpEnd=new eg(0,0),this._initialized=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._lerpDuration=s,this._offset=new eg(e,i)}_initialize(){this._lerpStart=new eg(this._tx.pos.x,this._tx.pos.y),this._currentLerpTime=0,this._lerpEnd=this._lerpStart.add(this._offset)}update(t){this._initialized||(this._initialize(),this._initialized=!0),// Need to update lerp time first, otherwise the first update will always be zero
this._currentLerpTime+=t;let e=this._tx.pos.x,i=this._tx.pos.y;this._currentLerpTime<this._lerpDuration?(e=this._lerpEnd.x<this._lerpStart.x?this._lerpStart.x-(this.easingFcn(this._currentLerpTime,this._lerpEnd.x,this._lerpStart.x,this._lerpDuration)-this._lerpEnd.x):this.easingFcn(this._currentLerpTime,this._lerpStart.x,this._lerpEnd.x,this._lerpDuration),i=this._lerpEnd.y<this._lerpStart.y?this._lerpStart.y-(this.easingFcn(this._currentLerpTime,this._lerpEnd.y,this._lerpStart.y,this._lerpDuration)-this._lerpEnd.y):this.easingFcn(this._currentLerpTime,this._lerpStart.y,this._lerpEnd.y,this._lerpDuration),// Given the lerp position figure out the velocity in pixels per second
this._motion.vel=em((e-this._tx.pos.x)/(t/1e3),(i-this._tx.pos.y)/(t/1e3))):(this._tx.pos=em(this._lerpEnd.x,this._lerpEnd.y),this._motion.vel=eg.Zero)}isComplete(){return this._stopped||this._currentLerpTime>=this._lerpDuration}reset(){this._initialized=!1,this._stopped=!1,this._currentLerpTime=0}stop(){this._motion.vel=em(0,0),this._stopped=!0}}class sT{constructor(t,e,i,s=1){this._timeVisible=0,this._timeNotVisible=0,this._elapsedTime=0,this._totalTime=0,this._stopped=!1,this._started=!1,this._graphics=t.get(sl),this._timeVisible=e,this._timeNotVisible=i,this._duration=(e+i)*s}update(t){this._started||(this._started=!0,this._elapsedTime=0,this._totalTime=0),this._graphics&&(this._elapsedTime+=t,this._totalTime+=t,this._graphics.visible&&this._elapsedTime>=this._timeVisible&&(this._graphics.visible=!1,this._elapsedTime=0),!this._graphics.visible&&this._elapsedTime>=this._timeNotVisible&&(this._graphics.visible=!0,this._elapsedTime=0),this.isComplete()&&(this._graphics.visible=!0))}isComplete(){return this._stopped||this._totalTime>=this._duration}stop(){this._graphics&&(this._graphics.visible=!0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1,this._elapsedTime=0,this._totalTime=0}}class sE{constructor(t,e,i){this._multiplier=1,this._started=!1,this._stopped=!1,this._graphics=t.get(sl),this._endOpacity=e,this._speed=this._ogspeed=i}update(t){this._graphics&&(this._started||(this._started=!0,this._speed=this._ogspeed,this._endOpacity<this._graphics.opacity?this._multiplier=-1:this._multiplier=1),this._speed>0&&(this._graphics.opacity+=this._multiplier*(Math.abs(this._graphics.opacity-this._endOpacity)*t)/this._speed),this._speed-=t,this.isComplete()&&(this._graphics.opacity=this._endOpacity),t7.getInstance().debug("[Action fade] Actor opacity:",this._graphics.opacity))}isComplete(){return this._stopped||.05>Math.abs(this._graphics.opacity-this._endOpacity)}stop(){this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sP{constructor(t){this._elapsedTime=0,this._started=!1,this._stopped=!1,this._delay=t}update(t){this._started||(this._started=!0),this._elapsedTime+=t}isComplete(){return this._stopped||this._elapsedTime>=this._delay}stop(){this._stopped=!0}reset(){this._elapsedTime=0,this._started=!1,this._stopped=!1}}class sI{constructor(t){this._stopped=!1,this._entity=t}update(t){this._entity.get(sD).clearActions(),this._entity.kill(),this._stopped=!0}isComplete(){return this._stopped}stop(){}reset(){}}class sM{constructor(t,e,i){this._started=!1,this._stopped=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._followTx=e.get(iN),this._followMotion=e.get(i$),this._current=new eg(this._tx.pos.x,this._tx.pos.y),this._end=new eg(this._followTx.pos.x,this._followTx.pos.y),this._maximumDistance=void 0!==i?i:this._current.distance(this._end),this._speed=0}update(t){this._started||(this._started=!0,this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize());let e=Math.sqrt(Math.pow(this._followMotion.vel.x,2)+Math.pow(this._followMotion.vel.y,2));if(0!==e&&(this._speed=e),this._current=em(this._tx.pos.x,this._tx.pos.y),this._end=em(this._followTx.pos.x,this._followTx.pos.y),this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize(),this._distanceBetween>=this._maximumDistance){let t=this._dir.scale(this._speed);this._motion.vel=em(t.x,t.y)}else this._motion.vel=em(0,0);this.isComplete()&&(this._tx.pos=em(this._end.x,this._end.y),this._motion.vel=em(0,0))}stop(){this._motion.vel=em(0,0),this._stopped=!0}isComplete(){// the actor following should never stop unless specified to do so
return this._stopped}reset(){this._started=!1,this._stopped=!1}}class sk{constructor(t,e,i){this._started=!1,this._stopped=!1,this._speedWasSpecified=!1,this._tx=t.get(iN),this._motion=t.get(i$),this._meetTx=e.get(iN),this._meetMotion=e.get(i$),this._current=new eg(this._tx.pos.x,this._tx.pos.y),this._end=new eg(this._meetTx.pos.x,this._meetTx.pos.y),this._speed=i||0,void 0!==i&&(this._speedWasSpecified=!0)}update(t){this._started||(this._started=!0,this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize());let e=Math.sqrt(Math.pow(this._meetMotion.vel.x,2)+Math.pow(this._meetMotion.vel.y,2));0===e||this._speedWasSpecified||(this._speed=e),this._current=em(this._tx.pos.x,this._tx.pos.y),this._end=em(this._meetTx.pos.x,this._meetTx.pos.y),this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize();let i=this._dir.scale(this._speed);this._motion.vel=em(i.x,i.y),this.isComplete()&&(this._tx.pos=em(this._end.x,this._end.y),this._motion.vel=em(0,0))}isComplete(){return this._stopped||this._distanceBetween<=1}stop(){this._motion.vel=em(0,0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1,this._distanceBetween=void 0}}/**
 * The fluent Action API allows you to perform "actions" on
 * [[Actor|Actors]] such as following, moving, rotating, and
 * more. You can implement your own actions by implementing
 * the [[Action]] interface.
 */class sR{constructor(t){this._entity=t,this._queue=new s_(t)}getQueue(){return this._queue}update(t){this._queue.update(t)}/**
     * Clears all queued actions from the Actor
     */clearActions(){this._queue.clearActions()}runAction(t){return t.reset(),this._queue.add(t),this}easeTo(...t){var e,i;let s=0,r=0,n=0,o=sp.Linear;return t[0]instanceof eg?(s=t[0].x,r=t[0].y,n=t[1],o=null!==(e=t[2])&&void 0!==e?e:o):(s=t[0],r=t[1],n=t[2],o=null!==(i=t[3])&&void 0!==i?i:o),this._queue.add(new sA(this._entity,s,r,n,o)),this}easeBy(...t){var e,i;let s=0,r=0,n=0,o=sp.Linear;return t[0]instanceof eg?(s=t[0].x,r=t[0].y,n=t[1],o=null!==(e=t[2])&&void 0!==e?e:o):(s=t[0],r=t[1],n=t[2],o=null!==(i=t[3])&&void 0!==i?i:o),this._queue.add(new sS(this._entity,s,r,n,o)),this}moveTo(t,e,i){let s=0,r=0,n=0;return t instanceof eg?(s=t.x,r=t.y,n=e):(s=t,r=e,n=i),this._queue.add(new sv(this._entity,s,r,n)),this}moveBy(t,e,i){let s=0,r=0,n=0;return t instanceof eg?(s=t.x,r=t.y,n=e):(s=t,r=e,n=i),this._queue.add(new sf(this._entity,s,r,n)),this}/**
     * This method will rotate an actor to the specified angle at the speed
     * specified (in radians per second) and return back the actor. This
     * method is part of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadians  The angle to rotate to in radians
     * @param speed         The angular velocity of the rotation specified in radians per second
     * @param rotationType  The [[RotationType]] to use for this rotation
     */rotateTo(t,e,i){return this._queue.add(new sy(this._entity,t,e,i)),this}/**
     * This method will rotate an actor by the specified angle offset, from it's current rotation given a certain speed
     * in radians/sec and return back the actor. This method is part
     * of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadiansOffset  The angle to rotate to in radians relative to the current rotation
     * @param speed          The speed in radians/sec the actor should rotate at
     * @param rotationType  The [[RotationType]] to use for this rotation, default is shortest path
     */rotateBy(t,e,i){return this._queue.add(new sx(this._entity,t,e,i)),this}scaleTo(t,e,i,s){let r=1,n=1,o=0,a=0;return t instanceof eg&&e instanceof eg&&(r=t.x,n=t.y,o=e.x,a=e.y),"number"==typeof t&&"number"==typeof e&&(r=t,n=e,o=i,a=s),this._queue.add(new sw(this._entity,r,n,o,a)),this}scaleBy(t,e,i){let s=1,r=1;return t instanceof eg&&(s=t.x,r=t.y,i=e),"number"==typeof t&&"number"==typeof e&&(s=t,r=e),this._queue.add(new sb(this._entity,s,r,i)),this}/**
     * This method will cause an actor to blink (become visible and not
     * visible). Optionally, you may specify the number of blinks. Specify the amount of time
     * the actor should be visible per blink, and the amount of time not visible.
     * This method is part of the actor 'Action' fluent API allowing action chaining.
     * @param timeVisible     The amount of time to stay visible per blink in milliseconds
     * @param timeNotVisible  The amount of time to stay not visible per blink in milliseconds
     * @param numBlinks       The number of times to blink
     */blink(t,e,i=1){return this._queue.add(new sT(this._entity,t,e,i)),this}/**
     * This method will cause an actor's opacity to change from its current value
     * to the provided value by a specified time (in milliseconds). This method is
     * part of the actor 'Action' fluent API allowing action chaining.
     * @param opacity  The ending opacity
     * @param time     The time it should take to fade the actor (in milliseconds)
     */fade(t,e){return this._queue.add(new sE(this._entity,t,e)),this}/**
     * This method will delay the next action from executing for a certain
     * amount of time (in milliseconds). This method is part of the actor
     * 'Action' fluent API allowing action chaining.
     * @param time  The amount of time to delay the next action in the queue from executing in milliseconds
     */delay(t){return this._queue.add(new sP(t)),this}/**
     * This method will add an action to the queue that will remove the actor from the
     * scene once it has completed its previous  Any actions on the
     * action queue after this action will not be executed.
     */die(){return this._queue.add(new sI(this._entity)),this}/**
     * This method allows you to call an arbitrary method as the next action in the
     * action queue. This is useful if you want to execute code in after a specific
     * action, i.e An actor arrives at a destination after traversing a path
     */callMethod(t){return this._queue.add(new sC(t)),this}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     * @param times  The number of times to repeat all the previous actions in the action queue. If nothing is specified the actions
     * will repeat forever
     */repeat(t,e){return e?this._queue.add(new sg(this._entity,t,e)):this.repeatForever(t),this}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     */repeatForever(t){return this._queue.add(new sm(this._entity,t)),this}/**
     * This method will cause the entity to follow another at a specified distance
     * @param entity           The entity to follow
     * @param followDistance  The distance to maintain when following, if not specified the actor will follow at the current distance.
     */follow(t,e){return void 0===e?this._queue.add(new sM(this._entity,t)):this._queue.add(new sM(this._entity,t,e)),this}/**
     * This method will cause the entity to move towards another until they
     * collide "meet" at a specified speed.
     * @param entity  The entity to meet
     * @param speed  The speed in pixels per second to move, if not specified it will match the speed of the other actor
     */meet(t,e){return void 0===e?this._queue.add(new sk(this._entity,t)):this._queue.add(new sk(this._entity,t,e)),this}/**
     * Returns a promise that resolves when the current action queue up to now
     * is finished.
     */toPromise(){let t=new Promise(t=>{this._queue.add(new sC(()=>{t()}))});return t}}class sD extends iz{constructor(){super(...arguments),this.type="ex.actions",this.dependencies=[iN,i$]}onAdd(t){this._ctx=new sR(t)}onRemove(){this._ctx=null}/**
     * Returns the internal action queue
     * @returns action queue
     */getQueue(){var t;return null===(t=this._ctx)||void 0===t?void 0:t.getQueue()}runAction(t){var e;return null===(e=this._ctx)||void 0===e?void 0:e.runAction(t)}/**
     * Updates the internal action context, performing action and moving through the internal queue
     * @param elapsedMs
     */update(t){var e;return null===(e=this._ctx)||void 0===e?void 0:e.update(t)}/**
     * Clears all queued actions from the Actor
     */clearActions(){var t;null===(t=this._ctx)||void 0===t||t.clearActions()}easeTo(...t){return this._ctx.easeTo.apply(this._ctx,t)}easeBy(...t){return this._ctx.easeBy.apply(this._ctx,t)}moveTo(t,e,i){return this._ctx.moveTo.apply(this._ctx,[t,e,i])}moveBy(t,e,i){return this._ctx.moveBy.apply(this._ctx,[t,e,i])}/**
     * This method will rotate an actor to the specified angle at the speed
     * specified (in radians per second) and return back the actor. This
     * method is part of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadians  The angle to rotate to in radians
     * @param speed         The angular velocity of the rotation specified in radians per second
     * @param rotationType  The [[RotationType]] to use for this rotation
     */rotateTo(t,e,i){return this._ctx.rotateTo(t,e,i)}/**
     * This method will rotate an actor by the specified angle offset, from it's current rotation given a certain speed
     * in radians/sec and return back the actor. This method is part
     * of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadiansOffset  The angle to rotate to in radians relative to the current rotation
     * @param speed          The speed in radians/sec the actor should rotate at
     * @param rotationType  The [[RotationType]] to use for this rotation, default is shortest path
     */rotateBy(t,e,i){return this._ctx.rotateBy(t,e,i)}scaleTo(t,e,i,s){return this._ctx.scaleTo.apply(this._ctx,[t,e,i,s])}scaleBy(t,e,i){return this._ctx.scaleBy.apply(this._ctx,[t,e,i])}/**
     * This method will cause an actor to blink (become visible and not
     * visible). Optionally, you may specify the number of blinks. Specify the amount of time
     * the actor should be visible per blink, and the amount of time not visible.
     * This method is part of the actor 'Action' fluent API allowing action chaining.
     * @param timeVisible     The amount of time to stay visible per blink in milliseconds
     * @param timeNotVisible  The amount of time to stay not visible per blink in milliseconds
     * @param numBlinks       The number of times to blink
     */blink(t,e,i){return this._ctx.blink(t,e,i)}/**
     * This method will cause an actor's opacity to change from its current value
     * to the provided value by a specified time (in milliseconds). This method is
     * part of the actor 'Action' fluent API allowing action chaining.
     * @param opacity  The ending opacity
     * @param time     The time it should take to fade the actor (in milliseconds)
     */fade(t,e){return this._ctx.fade(t,e)}/**
     * This method will delay the next action from executing for a certain
     * amount of time (in milliseconds). This method is part of the actor
     * 'Action' fluent API allowing action chaining.
     * @param time  The amount of time to delay the next action in the queue from executing in milliseconds
     */delay(t){return this._ctx.delay(t)}/**
     * This method will add an action to the queue that will remove the actor from the
     * scene once it has completed its previous  Any actions on the
     * action queue after this action will not be executed.
     */die(){return this._ctx.die()}/**
     * This method allows you to call an arbitrary method as the next action in the
     * action queue. This is useful if you want to execute code in after a specific
     * action, i.e An actor arrives at a destination after traversing a path
     */callMethod(t){return this._ctx.callMethod(t)}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     * @param times  The number of times to repeat all the previous actions in the action queue. If nothing is specified the actions
     * will repeat forever
     */repeat(t,e){return this._ctx.repeat(t,e)}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     */repeatForever(t){return this._ctx.repeatForever(t)}/**
     * This method will cause the entity to follow another at a specified distance
     * @param entity           The entity to follow
     * @param followDistance  The distance to maintain when following, if not specified the actor will follow at the current distance.
     */follow(t,e){return this._ctx.follow(t,e)}/**
     * This method will cause the entity to move towards another until they
     * collide "meet" at a specified speed.
     * @param entity  The entity to meet
     * @param speed  The speed in pixels per second to move, if not specified it will match the speed of the other actor
     */meet(t,e){return this._ctx.meet(t,e)}/**
     * Returns a promise that resolves when the current action queue up to now
     * is finished.
     */toPromise(){return this._ctx.toPromise()}}/**
     * Em is a scalable unit, 1 em is equal to the current font size of the current element, parent elements can effect em values
     */(x=tt||(tt={})).Em="em",/**
     * Rem is similar to the Em, it is a scalable unit. 1 rem is equal to the font size of the root element
     */x.Rem="rem",/**
     * Pixel is a unit of length in screen pixels
     */x.Px="px",/**
     * Point is a physical unit length (1/72 of an inch)
     */x.Pt="pt",/**
     * Percent is a scalable unit similar to Em, the only difference is the Em units scale faster when Text-Size stuff
     */x.Percent="%",/**
     * The text is left-aligned.
     */(w=te||(te={})).Left="left",/**
     * The text is right-aligned.
     */w.Right="right",/**
     * The text is centered.
     */w.Center="center",/**
     * The text is aligned at the normal start of the line (left-aligned for left-to-right locales,
     * right-aligned for right-to-left locales).
     */w.Start="start",/**
     * The text is aligned at the normal end of the line (right-aligned for left-to-right locales,
     * left-aligned for right-to-left locales).
     */w.End="end",/**
     * The text baseline is the top of the em square.
     */(b=ti||(ti={})).Top="top",/**
     * The text baseline is the hanging baseline.  Currently unsupported; this will act like
     * alphabetic.
     */b.Hanging="hanging",/**
     * The text baseline is the middle of the em square.
     */b.Middle="middle",/**
     * The text baseline is the normal alphabetic baseline.
     */b.Alphabetic="alphabetic",/**
     * The text baseline is the ideographic baseline; this is the bottom of
     * the body of the characters, if the main body of characters protrudes
     * beneath the alphabetic baseline.  Currently unsupported; this will
     * act like alphabetic.
     */b.Ideographic="ideographic",/**
     * The text baseline is the bottom of the bounding box.  This differs
     * from the ideographic baseline in that the ideographic baseline
     * doesn't consider descenders.
     */b.Bottom="bottom",(C=ts||(ts={})).Normal="normal",C.Italic="italic",C.Oblique="oblique",(A=tr||(tr={})).LeftToRight="ltr",A.RightToLeft="rtl";class sB{constructor(t,e,i,s){this.font=t,this.text=e,this.color=i,this.maxWidth=s,this._textFragments=[],this.disposed=!1,this._dirty=!0,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.dimensions=this.measureText(e),this._setDimension(this.dimensions,this.ctx),this._lastHashCode=this.getHashCode()}measureText(t,e){if(this.disposed)throw Error("Accessing disposed text instance! "+this.text);let i=null;i=null!=e?this._getLinesFromText(t,e):t.split("\n");let s=i.reduce((t,e)=>t.length>e.length?t:e);this._applyFont(this.ctx);// font must be applied to the context to measure it
let r=this.ctx.measureText(s),n=Math.abs(r.actualBoundingBoxAscent)+Math.abs(r.actualBoundingBoxDescent),o=n*i.length;n=o;let a=o-Math.abs(r.actualBoundingBoxAscent),h=new ey({left:0-Math.abs(r.actualBoundingBoxLeft)-this.font.padding,top:0-Math.abs(r.actualBoundingBoxAscent)-this.font.padding,bottom:0+a+this.font.padding,right:0+Math.abs(r.actualBoundingBoxRight)+this.font.padding});return h}_setDimension(t,e){// Changing the width and height clears the context properties
// We double the bitmap width to account for all possible alignment
// We scale by "quality" so we render text without jaggies
e.canvas.width=(t.width+2*this.font.padding)*2*this.font.quality,e.canvas.height=(t.height+2*this.font.padding)*2*this.font.quality}static getHashCode(t,e,i){var s;let r=e+"__hashcode__"+t.fontString+t.showDebug+t.textAlign+t.baseAlign+t.direction+JSON.stringify(t.shadow)+(t.padding.toString()+t.smoothing.toString()+t.lineWidth.toString()+t.lineDash.toString()+(null===(s=t.strokeColor)||void 0===s?void 0:s.toString())+(i?i.toString():t.color.toString()));return r}getHashCode(t=!0){return sB.getHashCode(this.font,this.text,t?this.color:void 0)}_applyRasterProperties(t){var e,i;t.translate(this.font.padding,this.font.padding),t.imageSmoothingEnabled=this.font.smoothing,t.lineWidth=this.font.lineWidth,t.setLineDash(null!==(e=this.font.lineDash)&&void 0!==e?e:t.getLineDash()),t.strokeStyle=null===(i=this.font.strokeColor)||void 0===i?void 0:i.toString(),t.fillStyle=this.color.toString()}_applyFont(t){t.resetTransform(),t.translate(this.font.padding+t.canvas.width/2,this.font.padding+t.canvas.height/2),t.scale(this.font.quality,this.font.quality),t.textAlign=this.font.textAlign,t.textBaseline=this.font.baseAlign,t.font=this.font.fontString,t.direction=this.font.direction,this.font.shadow&&(t.shadowColor=this.font.shadow.color.toString(),t.shadowBlur=this.font.shadow.blur,t.shadowOffsetX=this.font.shadow.offset.x,t.shadowOffsetY=this.font.shadow.offset.y)}_drawText(t,e,i){this._applyRasterProperties(t),this._applyFont(t);for(let s=0;s<e.length;s++){let r=e[s];this.color&&t.fillText(r,0,s*i),this.font.strokeColor&&t.strokeText(r,0,s*i)}this.font.showDebug&&(// Horizontal line
/* istanbul ignore next */ih(t,ef.Green,-t.canvas.width/2,0,t.canvas.width/2,0,2),// Vertical line
/* istanbul ignore next */ih(t,ef.Red,0,-t.canvas.height/2,0,t.canvas.height/2,2))}_splitTextBitmap(t){let e=[],i=0,s=0,r=Math.min(4096,t.canvas.width),n=Math.min(4096,t.canvas.height);// Splits the original bitmap into 4k max chunks
for(;i<t.canvas.width;){for(;s<t.canvas.height;){// create new bitmap
let o=document.createElement("canvas");o.width=r,o.height=n;let a=o.getContext("2d");// draw current slice to new bitmap in < 4k chunks
a.drawImage(t.canvas,i,s,r,n,0,0,r,n),e.push({x:i,y:s,canvas:o}),s+=n}i+=r,s=0}return e}flagDirty(){this._dirty=!0}render(t,e,i,s){if(this.disposed)throw Error("Accessing disposed text instance! "+this.text);this._ex=t;let r=this.getHashCode();// Calculate image chunks
if(this._lastHashCode!==r&&(this._dirty=!0),this._dirty){this.dimensions=this.measureText(this.text,s),this._setDimension(this.dimensions,this.ctx);let e=this._getLinesFromText(this.text,s),i=this.dimensions.height/e.length;// clear any out old fragments
if(// draws the text to the main bitmap
this._drawText(this.ctx,e,i),t instanceof ie)for(let e of this._textFragments)t.textureLoader.delete(e.canvas);if(// splits to < 4k fragments for large text
this._textFragments=this._splitTextBitmap(this.ctx),t instanceof ie)for(let e of this._textFragments)t.textureLoader.load(e.canvas,this.font.filtering,!0);this._lastHashCode=r,this._dirty=!1}// draws the bitmap fragments to excalibur graphics context
for(let s of this._textFragments)t.drawImage(s.canvas,0,0,s.canvas.width,s.canvas.height,s.x/this.font.quality+e-this.ctx.canvas.width/this.font.quality/2,s.y/this.font.quality+i-this.ctx.canvas.height/this.font.quality/2,s.canvas.width/this.font.quality,s.canvas.height/this.font.quality)}dispose(){if(this.disposed=!0,this.dimensions=void 0,this.canvas=void 0,this.ctx=void 0,this._ex instanceof ie)for(let t of this._textFragments)this._ex.textureLoader.delete(t.canvas);this._textFragments.length=0}_getLinesFromText(t,e){if(this._chachedText===t&&this._cachedRenderWidth===e)return this._chachedLines;let i=t.split("\n");if(null==e)return i;// If the current line goes past the maxWidth, append a new line without modifying the underlying text.
for(let t=0;t<i.length;t++){let s=i[t],r="";if(this.measureText(s).width>e){for(;this.measureText(s).width>e;)r=s[s.length-1]+r,s=s.slice(0,-1);// Update the array with our new values
i[t]=s,i[t+1]=r}}return this._chachedText=t,this._chachedLines=i,this._cachedRenderWidth=e,i}}class sF{static measureText(t,e,i){let s=sB.getHashCode(e,t);if(sF._MEASURE_CACHE.has(s))return sF._MEASURE_CACHE.get(s);sF._LOGGER.debug("Font text measurement cache miss");let r=e.measureTextWithoutCache(t,i);return sF._MEASURE_CACHE.set(s,r),r}static getTextInstance(t,e,i){let s=sB.getHashCode(e,t,i),r=sF._TEXT_CACHE.get(s);return r||(r=new sB(e,t,i),sF._TEXT_CACHE.set(s,r),sF._LOGGER.debug("Font text instance cache miss")),// Cache the bitmap for certain amount of time
sF._TEXT_USAGE.set(r,performance.now()),r}static checkAndClearCache(){let t=[],e=new Set;for(let[i,s]of sF._TEXT_USAGE.entries())if(s+100<performance.now())sF._LOGGER.debug(`Text cache entry timed out ${i.text}`),t.push(i),i.dispose();else{let t=i.getHashCode(!1);e.add(t)}for(let[e]of(// Deferred removal of text instances
t.forEach(t=>{sF._TEXT_USAGE.delete(t)}),// Regenerate text instance cache
this._TEXT_CACHE.clear(),this._TEXT_USAGE.entries()))this._TEXT_CACHE.set(e.getHashCode(),e);// Regenerated measurement cache
let i=new Map;for(let t of e)sF._MEASURE_CACHE.has(t)&&i.set(t,sF._MEASURE_CACHE.get(t));this._MEASURE_CACHE.clear(),this._MEASURE_CACHE=i}static get cacheSize(){return sF._TEXT_USAGE.size}/**
     * Force clear all cached text bitmaps
     */static clearCache(){for(let[t]of sF._TEXT_USAGE.entries())t.dispose();sF._TEXT_USAGE.clear(),sF._TEXT_CACHE.clear(),sF._MEASURE_CACHE.clear()}}sF._LOGGER=t7.getInstance(),sF._TEXT_USAGE=new Map,sF._TEXT_CACHE=new Map,sF._MEASURE_CACHE=new Map;/**
 * Represents a system or web font in Excalibur
 *
 * If no options specified, the system sans-serif 10 pixel is used
 *
 * If loading a custom web font be sure to have the font loaded before you use it https://erikonarheim.com/posts/dont-test-fonts/
 */class sU extends eF{constructor(t={}){var e,i,s,r,n,o,a,h,l,d,c,u,p,_,g,m,f,v,y;super(t),/**
         * Set the font filtering mode, by default set to [[ImageFiltering.Blended]] regardless of the engine default smoothing
         *
         * If you have a pixel style font that may be a reason to switch this to [[ImageFiltering.Pixel]]
         */this.filtering=G.Blended,/**
         * Font quality determines the size of the underlying raster text, higher quality means less jagged edges.
         * If quality is set to 1, then just enough raster bitmap is generated to render the text.
         *
         * You can think of quality as how zoomed in to the text you can get before seeing jagged edges.
         *
         * (Default 2)
         */this.quality=2,// Raster properties for fonts
this.padding=2,this.smoothing=!1,this.lineWidth=1,this.lineDash=[],this.color=ef.Black,this.family="sans-serif",this.style=ts.Normal,this.bold=!1,this.unit=tt.Px,this.textAlign=te.Left,this.baseAlign=ti.Alphabetic,this.direction=tr.LeftToRight,this.size=10,this.shadow=null,this._textBounds=new ey,this._textMeasurement=new sB(this,"",ef.Black),// Raster properties
this.smoothing=null!==(e=null==t?void 0:t.smoothing)&&void 0!==e?e:this.smoothing,this.padding=null!==(i=null==t?void 0:t.padding)&&void 0!==i?i:this.padding,this.color=null!==(s=null==t?void 0:t.color)&&void 0!==s?s:this.color,this.strokeColor=null!==(r=null==t?void 0:t.strokeColor)&&void 0!==r?r:this.strokeColor,this.lineDash=null!==(n=null==t?void 0:t.lineDash)&&void 0!==n?n:this.lineDash,this.lineWidth=null!==(o=null==t?void 0:t.lineWidth)&&void 0!==o?o:this.lineWidth,this.filtering=null!==(a=null==t?void 0:t.filtering)&&void 0!==a?a:this.filtering,// Font specific properties
this.family=null!==(h=null==t?void 0:t.family)&&void 0!==h?h:this.family,this.style=null!==(l=null==t?void 0:t.style)&&void 0!==l?l:this.style,this.bold=null!==(d=null==t?void 0:t.bold)&&void 0!==d?d:this.bold,this.size=null!==(c=null==t?void 0:t.size)&&void 0!==c?c:this.size,this.unit=null!==(u=null==t?void 0:t.unit)&&void 0!==u?u:this.unit,this.textAlign=null!==(p=null==t?void 0:t.textAlign)&&void 0!==p?p:this.textAlign,this.baseAlign=null!==(_=null==t?void 0:t.baseAlign)&&void 0!==_?_:this.baseAlign,this.direction=null!==(g=null==t?void 0:t.direction)&&void 0!==g?g:this.direction,this.quality=null!==(m=null==t?void 0:t.quality)&&void 0!==m?m:this.quality,(null==t?void 0:t.shadow)&&(this.shadow={},this.shadow.blur=null!==(f=t.shadow.blur)&&void 0!==f?f:this.shadow.blur,this.shadow.offset=null!==(v=t.shadow.offset)&&void 0!==v?v:this.shadow.offset,this.shadow.color=null!==(y=t.shadow.color)&&void 0!==y?y:this.shadow.color)}clone(){return new sU({...this.cloneGraphicOptions(),size:this.size,unit:this.unit,family:this.family,style:this.style,bold:this.bold,textAlign:this.textAlign,baseAlign:this.baseAlign,direction:this.direction,shadow:this.shadow?{blur:this.shadow.blur,offset:this.shadow.offset,color:this.shadow.color}:null})}get fontString(){return`${this.style} ${this.bold?"bold":""} ${this.size}${this.unit} ${this.family}`}get localBounds(){return this._textBounds}_drawImage(t,e,i){// TODO weird vestigial drawimage
}_rotate(t){var e;// TODO this needs to change depending on the bounding box...
let i=null!==(e=this.origin)&&void 0!==e?e:this._textBounds.center;t.translate(i.x,i.y),t.rotate(this.rotation),t.translate(-i.x,-i.y)}_flip(t){this.flipHorizontal&&(t.translate(this._textBounds.width/this.scale.x,0),t.scale(-1,1)),this.flipVertical&&(t.translate(0,-this._textBounds.height/2/this.scale.y),t.scale(1,-1))}measureTextWithoutCache(t,e){return this._textMeasurement.measureText(t,e)}/**
     * Returns a BoundingBox that is the total size of the text including multiple lines
     *
     * Does not include any padding or adjustment
     * @param text
     * @returns BoundingBox
     */measureText(t,e){return sF.measureText(t,this,e)}_postDraw(t){t.restore()}render(t,e,i,s,r,n){let o=sF.getTextInstance(e,this,i);// Apply affine transformations
this._textBounds=o.dimensions,this._preDraw(t,s,r),o.render(t,s,r,n),this._postDraw(t)}}/**
 * Represent Text graphics in excalibur
 *
 * Useful for in game labels, ui, or overlays
 */class Text extends eF{constructor(t){var e,i;super(t),this._text="",this._textWidth=0,this._textHeight=0,// This order is important font, color, then text
this.font=null!==(e=t.font)&&void 0!==e?e:new sU,this.color=null!==(i=t.color)&&void 0!==i?i:this.color,this.text=t.text,this.maxWidth=t.maxWidth}clone(){var t,e;return new Text({text:this.text.slice(),color:null!==(e=null===(t=this.color)||void 0===t?void 0:t.clone())&&void 0!==e?e:ef.Black,font:this.font.clone(),maxWidth:this.maxWidth})}get text(){return this._text}set text(t){this._text=t,this._calculateDimension()}get font(){return this._font}set font(t){this._font=t}get width(){return 0===this._textWidth&&this._calculateDimension(),this._textWidth*this.scale.x}get height(){return 0===this._textHeight&&this._calculateDimension(),this._textHeight*this.scale.y}_calculateDimension(){let{width:t,height:e}=this.font.measureText(this._text,this.maxWidth);this._textWidth=t,this._textHeight=e}get localBounds(){return this.font.measureText(this._text,this.maxWidth).scale(this.scale)}_rotate(t){// None this is delegated to font
// This override erases the default behavior
}_flip(t){// None this is delegated to font
// This override erases the default behavior
}_preDraw(t,e,i){(this.isStale()||this.font.isStale())&&(this.font.flipHorizontal=this.flipHorizontal,this.font.flipVertical=this.flipVertical,this.font.rotation=this.rotation,this.font.origin=this.origin,this.font.opacity=this.opacity),this.font.tint=this.tint,super._preDraw(t,e,i)}_drawImage(t,e,i){var s;let r=ef.Black;this.font instanceof sU&&(r=null!==(s=this.color)&&void 0!==s?s:this.font.color);let{width:n,height:o}=this.font.measureText(this._text,this.maxWidth);this._textWidth=n,this._textHeight=o,this.font.render(t,this._text,r,e,i,this.maxWidth),this.font.showDebug&&(t.debug.drawRect(e-n,i-o,2*n,2*o),null!=this.maxWidth&&t.debug.drawRect(e,i,this.maxWidth,this.height,{color:ef.Yellow}))}}/**
 * The most important primitive in Excalibur is an `Actor`. Anything that
 * can move on the screen, collide with another `Actor`, respond to events,
 * or interact with the current scene, must be an actor. An `Actor` **must**
 * be part of a [[Scene]] for it to be drawn to the screen.
 */class sL extends sn{/**
     * The physics body the is associated with this actor. The body is the container for all physical properties, like position, velocity,
     * acceleration, mass, inertia, etc.
     */get body(){return this.get(i8)}/**
     * Access the Actor's built in [[TransformComponent]]
     */get transform(){return this.get(iN)}/**
     * Access the Actor's built in [[MotionComponent]]
     */get motion(){return this.get(i$)}/**
     * Access to the Actor's built in [[GraphicsComponent]]
     */get graphics(){return this.get(sl)}/**
     * Access to the Actor's built in [[ColliderComponent]]
     */get collider(){return this.get(i7)}/**
     * Access to the Actor's built in [[PointerComponent]] config
     */get pointer(){return this.get(su)}/**
     * Useful for quickly scripting actor behavior, like moving to a place, patrolling back and forth, blinking, etc.
     *
     *  Access to the Actor's built in [[ActionsComponent]] which forwards to the
     * [[ActionContext|Action context]] of the actor.
     */get actions(){return this.get(sD)}/**
     * Gets the position vector of the actor in pixels
     */get pos(){return this.transform.pos}/**
     * Sets the position vector of the actor in pixels
     */set pos(t){this.transform.pos=t.clone()}/**
     * Gets the position vector of the actor from the last frame
     */get oldPos(){return this.body.oldPos}/**
     * Sets the position vector of the actor in the last frame
     */set oldPos(t){this.body.oldPos.setTo(t.x,t.y)}/**
     * Gets the velocity vector of the actor in pixels/sec
     */get vel(){return this.motion.vel}/**
     * Sets the velocity vector of the actor in pixels/sec
     */set vel(t){this.motion.vel=t.clone()}/**
     * Gets the velocity vector of the actor from the last frame
     */get oldVel(){return this.body.oldVel}/**
     * Sets the velocity vector of the actor from the last frame
     */set oldVel(t){this.body.oldVel.setTo(t.x,t.y)}/**
     * Gets the acceleration vector of the actor in pixels/second/second. An acceleration pointing down such as (0, 100) may be
     * useful to simulate a gravitational effect.
     */get acc(){return this.motion.acc}/**
     * Sets the acceleration vector of teh actor in pixels/second/second
     */set acc(t){this.motion.acc=t.clone()}/**
     * Sets the acceleration of the actor from the last frame. This does not include the global acc [[Physics.acc]].
     */set oldAcc(t){this.body.oldAcc.setTo(t.x,t.y)}/**
     * Gets the acceleration of the actor from the last frame. This does not include the global acc [[Physics.acc]].
     */get oldAcc(){return this.body.oldAcc}/**
     * Gets the rotation of the actor in radians. 1 radian = 180/PI Degrees.
     */get rotation(){return this.transform.rotation}/**
     * Sets the rotation of the actor in radians. 1 radian = 180/PI Degrees.
     */set rotation(t){this.transform.rotation=t}/**
     * Gets the rotational velocity of the actor in radians/second
     */get angularVelocity(){return this.motion.angularVelocity}/**
     * Sets the rotational velocity of the actor in radians/sec
     */set angularVelocity(t){this.motion.angularVelocity=t}get scale(){return this.get(iN).scale}set scale(t){this.get(iN).scale=t}get anchor(){return this._anchor}set anchor(t){this._anchor=eD(t,t=>this._handleAnchorChange(t)),this._handleAnchorChange(t)}_handleAnchorChange(t){this.graphics&&(this.graphics.anchor=t)}/**
     * Indicates whether the actor is physically in the viewport
     */get isOffScreen(){return this.hasTag("ex.offscreen")}get draggable(){return this._draggable}set draggable(t){t&&(t&&!this._draggable?(this.events.on("pointerdragstart",this._pointerDragStartHandler),this.events.on("pointerdragend",this._pointerDragEndHandler),this.events.on("pointerdragmove",this._pointerDragMoveHandler),this.events.on("pointerdragleave",this._pointerDragLeaveHandler)):!t&&this._draggable&&(this.events.off("pointerdragstart",this._pointerDragStartHandler),this.events.off("pointerdragend",this._pointerDragEndHandler),this.events.off("pointerdragmove",this._pointerDragMoveHandler),this.events.off("pointerdragleave",this._pointerDragLeaveHandler)),this._draggable=t)}/**
     * Sets the color of the actor's current graphic
     */get color(){return this._color}set color(t){var e;this._color=t.clone();let i=this.graphics.layers.default,s=null===(e=i.graphics[0])||void 0===e?void 0:e.graphic;(s instanceof i_||s instanceof Text)&&(s.color=this._color)}// #endregion
/**
     *
     * @param config
     */constructor(t){super(),this.events=new tS,/**
         * The anchor to apply all actor related transformations like rotation,
         * translation, and scaling. By default the anchor is in the center of
         * the actor. By default it is set to the center of the actor (.5, .5)
         *
         * An anchor of (.5, .5) will ensure that drawings are centered.
         *
         * Use `anchor.setTo` to set the anchor to a different point using
         * values between 0 and 1. For example, anchoring to the top-left would be
         * `Actor.anchor.setTo(0, 0)` and top-right would be `Actor.anchor.setTo(0, 1)`.
         */this._anchor=eD(eg.Half,t=>this._handleAnchorChange(t)),/**
         * Convenience reference to the global logger
         */this.logger=t7.getInstance(),/**
         * Draggable helper
         */this._draggable=!1,this._dragging=!1,this._pointerDragStartHandler=()=>{this._dragging=!0},this._pointerDragEndHandler=()=>{this._dragging=!1},this._pointerDragMoveHandler=t=>{this._dragging&&(this.pos=t.worldPos)},this._pointerDragLeaveHandler=t=>{this._dragging&&(this.pos=t.worldPos)};let{name:e,x:i,y:s,pos:r,coordPlane:n,scale:o,width:a,height:h,radius:l,collider:d,vel:c,acc:u,rotation:p,angularVelocity:_,z:g,color:m,visible:f,anchor:v,collisionType:y,collisionGroup:x}={...t};this._setName(e),this.anchor=null!=v?v:sL.defaults.anchor.clone();let w=new iN;this.addComponent(w),this.pos=null!=r?r:em(null!=i?i:0,null!=s?s:0),this.rotation=null!=p?p:0,this.scale=null!=o?o:em(1,1),this.z=null!=g?g:0,w.coordPlane=null!=n?n:j.World,this.addComponent(new su),this.addComponent(new sl({anchor:this.anchor})),this.addComponent(new i$),this.vel=null!=c?c:eg.Zero,this.acc=null!=u?u:eg.Zero,this.angularVelocity=null!=_?_:0,this.addComponent(new sD),this.addComponent(new i8),this.body.collisionType=null!=y?y:X.Passive,x&&(this.body.group=x),d?this.addComponent(new i7(d)):l?this.addComponent(new i7(i6.Circle(l))):a>0&&h>0?this.addComponent(new i7(i6.Box(a,h,this.anchor))):this.addComponent(new i7),this.graphics.visible=null==f||f,m&&(this.color=m,a&&h?this.graphics.add(new sd({color:m,width:a,height:h})):l&&this.graphics.add(new sc({color:m,radius:l})))}clone(){let t=new sL({color:this.color.clone(),anchor:this.anchor.clone()});t.clearComponents(),t.processComponentRemoval();// Clone the current actors components
let e=this.getComponents();for(let i of e)t.addComponent(i.clone(),!0);return t}/**
     * `onInitialize` is called before the first update of the actor. This method is meant to be
     * overridden. This is where initialization of child actors should take place.
     *
     * Synonymous with the event handler `.on('initialize', (evt) => {...})`
     */onInitialize(t){// Override me
}/**
     * Initializes this actor and all it's child actors, meant to be called by the Scene before first update not by users of Excalibur.
     *
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * @internal
     */_initialize(t){for(let e of(super._initialize(t),this.children))e._initialize(t)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}// #endregion
/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _prekill handler for [[onPreKill]] lifecycle event
     * @internal
     */_prekill(t){this.events.emit("prekill",new tP(this)),this.onPreKill(t)}/**
     * Safe to override onPreKill lifecycle event handler. Synonymous with `.on('prekill', (evt) =>{...})`
     *
     * `onPreKill` is called directly before an actor is killed and removed from its current [[Scene]].
     */onPreKill(t){// Override me
}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _prekill handler for [[onPostKill]] lifecycle event
     * @internal
     */_postkill(t){this.events.emit("postkill",new tI(this)),this.onPostKill(t)}/**
     * Safe to override onPostKill lifecycle event handler. Synonymous with `.on('postkill', (evt) => {...})`
     *
     * `onPostKill` is called directly after an actor is killed and remove from its current [[Scene]].
     */onPostKill(t){// Override me
}/**
     * If the current actor is a member of the scene, this will remove
     * it from the scene graph. It will no longer be drawn or updated.
     */kill(){this.scene?(this._prekill(this.scene),this.events.emit("kill",new tE(this)),super.kill(),this._postkill(this.scene)):this.logger.warn(`Cannot kill actor named "${this.name}", it was never added to the Scene`)}/**
     * If the current actor is killed, it will now not be killed.
     */unkill(){this.active=!0}/**
     * Indicates wether the actor has been killed.
     */isKilled(){return!this.active}/**
     * Gets the z-index of an actor. The z-index determines the relative order an actor is drawn in.
     * Actors with a higher z-index are drawn on top of actors with a lower z-index
     */get z(){return this.get(iN).z}/**
     * Sets the z-index of an actor and updates it in the drawing list for the scene.
     * The z-index determines the relative order an actor is drawn in.
     * Actors with a higher z-index are drawn on top of actors with a lower z-index
     * @param newZ new z-index to assign
     */set z(t){this.get(iN).z=t}/**
     * Get the center point of an actor (global position)
     */get center(){let t=this.getGlobalPos();return new eg(t.x+this.width/2-this.anchor.x*this.width,t.y+this.height/2-this.anchor.y*this.height)}/**
     * Get the local center point of an actor
     */get localCenter(){return new eg(this.pos.x+this.width/2-this.anchor.x*this.width,this.pos.y+this.height/2-this.anchor.y*this.height)}get width(){return this.collider.localBounds.width*this.getGlobalScale().x}get height(){return this.collider.localBounds.height*this.getGlobalScale().y}/**
     * Gets this actor's rotation taking into account any parent relationships
     *
     * @returns Rotation angle in radians
     */getGlobalRotation(){return this.get(iN).globalRotation}/**
     * Gets an actor's world position taking into account parent relationships, scaling, rotation, and translation
     *
     * @returns Position in world coordinates
     */getGlobalPos(){return this.get(iN).globalPos}/**
     * Gets the global scale of the Actor
     */getGlobalScale(){return this.get(iN).globalScale}// #region Collision
/**
     * Tests whether the x/y specified are contained in the actor
     * @param x  X coordinate to test (in world coordinates)
     * @param y  Y coordinate to test (in world coordinates)
     * @param recurse checks whether the x/y are contained in any child actors (if they exist).
     */contains(t,e,i=!1){let s=em(t,e),r=this.get(i7);r.update();let n=r.get();if(!n)return!1;let o=n.contains(s);return i?o||this.children.some(i=>i.contains(t,e,!0)):o}/**
     * Returns true if the two actor.collider's surfaces are less than or equal to the distance specified from each other
     * @param actor     Actor to test
     * @param distance  Distance in pixels to test
     */within(t,e){let i=this.get(i7),s=t.get(i7),r=i.get(),n=s.get();return!!r&&!!n&&r.getClosestLineBetween(n).getLength()<=e}// #endregion
// #region Update
/**
     * Called by the Engine, updates the state of the actor
     * @internal
     * @param engine The reference to the current game engine
     * @param delta  The time elapsed since the last update in milliseconds
     */update(t,e){this._initialize(t),this._preupdate(t,e),this._postupdate(t,e)}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before an actor is updated.
     */onPreUpdate(t,e){// Override me
}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('postupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after an actor is updated.
     */onPostUpdate(t,e){// Override me
}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.events.emit("preupdate",new tU(t,e,this)),this.onPreUpdate(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.events.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}}/**
 * Type guard to detect a screen element
 */function sz(t){return t instanceof sO}// #region Properties
/**
 * Set defaults for all Actors
 */sL.defaults={anchor:eg.Half};/**
 * Helper [[Actor]] primitive for drawing UI's, optimized for UI drawing. Does
 * not participate in collisions. Drawn on top of all other actors.
 */class sO extends sL{constructor(t){var e,i;super({...t}),this.get(iN).coordPlane=j.Screen,this.anchor=null!==(e=null==t?void 0:t.anchor)&&void 0!==e?e:em(0,0),this.body.collisionType=null!==(i=null==t?void 0:t.collisionType)&&void 0!==i?i:X.PreventCollision,this.pointer.useGraphicsBounds=!0,this.pointer.useColliderShape=!1,!(null==t?void 0:t.collider)&&(null==t?void 0:t.width)>0&&(null==t?void 0:t.height)>0&&this.collider.useBoxCollider(this.width,this.height,this.anchor)}_initialize(t){this._engine=t,super._initialize(t)}contains(t,e,i=!0){if(i)return super.contains(t,e);let s=this._engine.worldToScreenCoordinates(new eg(t,e));return super.contains(s.x,s.y)}}/**
 * The Excalibur timer hooks into the internal timer and fires callbacks,
 * after a certain interval, optionally repeating.
 */class sH{get complete(){return this._complete}constructor(t,e,i,s,r,n){if(this._logger=t7.getInstance(),this.id=0,this._elapsedTime=0,this._totalTimeAlive=0,this._running=!1,this._numberOfTicks=0,this.interval=10,this.repeats=!1,this.maxNumberOfRepeats=-1,this.randomRange=[0,0],this._baseInterval=10,this._generateRandomInterval=()=>this._baseInterval+this.random.integer(this.randomRange[0],this.randomRange[1]),this._complete=!1,this.scene=null,"function"!=typeof t){let o=t;t=o.fcn,e=o.interval,i=o.repeats,s=o.numberOfRepeats,r=o.randomRange,n=o.random}if(s&&s>=0&&(this.maxNumberOfRepeats=s,!i))throw Error("repeats must be set to true if numberOfRepeats is set");if(this.id=sH._MAX_ID++,this._callbacks=[],this._baseInterval=this.interval=e,r){if(r[0]>r[1])throw Error("min value must be lower than max value for range");//We use the instance of ex.Random to generate the range
this.random=null!=n?n:new er,this.randomRange=r,this.interval=this._generateRandomInterval(),this.on(()=>{this.interval=this._generateRandomInterval()})}this.repeats=i||this.repeats,t&&this.on(t)}/**
     * Adds a new callback to be fired after the interval is complete
     * @param fcn The callback to be added to the callback list, to be fired after the interval is complete.
     */on(t){this._callbacks.push(t)}/**
     * Removes a callback from the callback list to be fired after the interval is complete.
     * @param fcn The callback to be removed from the callback list, to be fired after the interval is complete.
     */off(t){let e=this._callbacks.indexOf(t);this._callbacks.splice(e,1)}/**
     * Updates the timer after a certain number of milliseconds have elapsed. This is used internally by the engine.
     * @param delta  Number of elapsed milliseconds since the last update.
     */update(t){this._running&&(this._totalTimeAlive+=t,this._elapsedTime+=t,this.maxNumberOfRepeats>-1&&this._numberOfTicks>=this.maxNumberOfRepeats&&(this._complete=!0,this._running=!1,this._elapsedTime=0),!this.complete&&this._elapsedTime>=this.interval&&(this._callbacks.forEach(t=>{t.call(this)}),this._numberOfTicks++,this.repeats||(this._complete=!0,this._running=!1),this._elapsedTime=0))}/**
     * Resets the timer so that it can be reused, and optionally reconfigure the timers interval.
     *
     * Warning** you may need to call `timer.start()` again if the timer had completed
     * @param newInterval If specified, sets a new non-negative interval in milliseconds to refire the callback
     * @param newNumberOfRepeats If specified, sets a new non-negative upper limit to the number of time this timer executes
     */reset(t,e){if(t&&t>=0&&(this._baseInterval=this.interval=t),this.maxNumberOfRepeats&&this.maxNumberOfRepeats>=0&&(this.maxNumberOfRepeats=e,!this.repeats))throw Error("repeats must be set to true if numberOfRepeats is set");this._complete=!1,this._elapsedTime=0,this._numberOfTicks=0}get timesRepeated(){return this._numberOfTicks}getTimeRunning(){return this._totalTimeAlive}/**
     * @returns milliseconds until the next action callback, if complete will return 0
     */get timeToNextAction(){return this.complete?0:this.interval-this._elapsedTime}/**
     * @returns milliseconds elapsed toward the next action
     */get timeElapsedTowardNextAction(){return this._elapsedTime}get isRunning(){return this._running}/**
     * Pauses the timer, time will no longer increment towards the next call
     */pause(){return this._running=!1,this}/**
     * Resumes the timer, time will now increment towards the next call.
     */resume(){return this._running=!0,this}/**
     * Starts the timer, if the timer was complete it will restart the timer and reset the elapsed time counter
     */start(){return this.scene||this._logger.warn("Cannot start a timer not part of a scene, timer wont start until added"),this._running=!0,this.complete&&(this._complete=!1,this._elapsedTime=0,this._numberOfTicks=0),this}/**
     * Stops the timer and resets the elapsed time counter towards the next action invocation
     */stop(){return this._running=!1,this._elapsedTime=0,this._numberOfTicks=0,this}/**
     * Cancels the timer, preventing any further executions.
     */cancel(){this.pause(),this.scene&&this.scene.cancelTimer(this)}}sH._MAX_ID=0;class sN extends iz{constructor(t){super(),this.type="ex.parallax",this.parallaxFactor=em(1,1),this.parallaxFactor=null!=t?t:this.parallaxFactor}}/**
 * Provide arbitrary drawing for the purposes of debugging your game
 *
 * Will only show when the Engine is set to debug mode [[Engine.showDebug]] or [[Engine.toggleDebug]]
 *
 */class s$ extends iz{constructor(t,e=!0){super(),this.draw=t,this.useTransform=e,this.type="ex.debuggraphics"}}let sW={PreUpdate:"preupdate",PostUpdate:"postupdate",PreDraw:"predraw",PostDraw:"postdraw"};/**
 * The TileMap provides a mechanism for doing flat 2D tiles rendered in a grid.
 *
 * TileMaps are useful for top down or side scrolling grid oriented games.
 */class sV extends sn{flagCollidersDirty(){this._collidersDirty=!0}flagTilesDirty(){for(let t=0;t<this.tiles.length;t++)this.tiles[t]&&this.tiles[t].flagDirty()}get x(){var t;return null!==(t=this._transform.pos.x)&&void 0!==t?t:0}set x(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.pos)&&(this.get(iN).pos=em(t,this.y))}get y(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.pos.y)&&void 0!==e?e:0}set y(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.pos)&&(this._transform.pos=em(this.x,t))}get z(){var t;return null!==(t=this._transform.z)&&void 0!==t?t:0}set z(t){this._transform&&(this._transform.z=t)}get rotation(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.rotation)&&void 0!==e?e:0}set rotation(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.rotation)&&(this._transform.rotation=t)}get scale(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.scale)&&void 0!==e?e:eg.One}set scale(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.scale)&&(this._transform.scale=t)}get pos(){return this._transform.pos}set pos(t){this._transform.pos=t}get vel(){return this._motion.vel}set vel(t){this._motion.vel=t}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * @param options
     */constructor(t){var e,i;super(null,t.name),this.events=new tS,this._token=0,this.logger=t7.getInstance(),this.tiles=[],this._rows=[],this._cols=[],this.renderFromTopOfGraphic=!1,this._collidersDirty=!0,this._originalOffsets=new WeakMap,this.addComponent(new iN),this.addComponent(new i$),this.addComponent(new i8({type:X.Fixed})),this.addComponent(new sl({onPostDraw:(t,e)=>this.draw(t,e)})),this.addComponent(new s$(t=>this.debug(t))),this.addComponent(new i7),this._graphics=this.get(sl),this._transform=this.get(iN),this._motion=this.get(i$),this._collider=this.get(i7),this._composite=this._collider.useCompositeCollider([]),this._transform.pos=null!==(e=t.pos)&&void 0!==e?e:eg.Zero,this._oldPos=this._transform.pos.clone(),this._oldScale=this._transform.scale.clone(),this.renderFromTopOfGraphic=null!==(i=t.renderFromTopOfGraphic)&&void 0!==i?i:this.renderFromTopOfGraphic,this.tileWidth=t.tileWidth,this.tileHeight=t.tileHeight,this.rows=t.rows,this.columns=t.columns,this.tiles=Array(this.rows*this.columns),this._rows=Array(this.rows),this._cols=Array(this.columns);let s=[];for(let t=0;t<this.columns;t++){for(let e=0;e<this.rows;e++){let i=new sG({x:t,y:e,map:this});i.map=this,this.tiles[t+e*this.columns]=i,s.push(i),this._rows[e]||(this._rows[e]=[]),this._rows[e].push(i)}this._cols[t]=s,s=[]}this._graphics.localBounds=new ey({left:0,top:0,right:this.columns*this.tileWidth*this.scale.x,bottom:this.rows*this.tileHeight*this.scale.y})}_initialize(t){super._initialize(t),this._engine=t}_getOrSetColliderOriginalOffset(t){if(this._originalOffsets.has(t))return this._originalOffsets.get(t);{let e=t.offset;return this._originalOffsets.set(t,e),e}}/**
     * Tiles colliders based on the solid tiles in the tilemap.
     */_updateColliders(){let t;this._collider.$colliderRemoved.notifyAll(this._composite),this._composite.clearColliders();let e=[];this._composite=this._collider.useCompositeCollider([]);// Bad square tesselation algo
for(let i=0;i<this.columns;i++){// Scan column for colliders
for(let s=0;s<this.rows;s++){// Columns start with a new collider
0===s&&(t=null);let r=this.tiles[i+s*this.columns];// Current tile in column is solid build up current collider
if(r.solid){// Use custom collider otherwise bounding box
if(r.getColliders().length>0){// tile with custom collider interrupting the current run
for(let t of r.getColliders()){let e=this._getOrSetColliderOriginalOffset(t);t.offset=em(r.x*this.tileWidth*this.scale.x,r.y*this.tileHeight*this.scale.y).add(e),t.owner=this,this._composite.addCollider(t)}t&&e.push(t),t=null}else t=t?t.combine(r.bounds):r.bounds}else t&&e.push(t),t=null}// After a column is complete check to see if it can be merged into the last one
if(t){// if previous is the same combine it
let i=e[e.length-1];i&&i.top===t.top&&i.bottom===t.bottom?e[e.length-1]=i.combine(t):e.push(t)}}for(let t of e){let e=i6.Box(t.width,t.height,eg.Zero,em(t.left-this.pos.x,t.top-this.pos.y));e.owner=this,this._composite.addCollider(e)}this._collider.update(),// Notify that colliders have been updated
this._collider.$colliderAdded.notifyAll(this._composite)}/**
     * Returns the [[Tile]] by index (row major order)
     */getTileByIndex(t){return this.tiles[t]}/**
     * Returns the [[Tile]] by its x and y integer coordinates
     */getTile(t,e){return t<0||e<0||t>=this.columns||e>=this.rows?null:this.tiles[t+e*this.columns]}/**
     * Returns the [[Tile]] by testing a point in world coordinates,
     * returns `null` if no Tile was found.
     */getTileByPoint(t){let e=Math.floor((t.x-this.pos.x)/(this.tileWidth*this.scale.x)),i=Math.floor((t.y-this.pos.y)/(this.tileHeight*this.scale.y)),s=this.getTile(e,i);return e>=0&&i>=0&&e<this.columns&&i<this.rows&&s?s:null}getRows(){return this._rows}getColumns(){return this._cols}update(t,e){this.onPreUpdate(t,e),this.emit("preupdate",new tU(t,e,this)),this._oldPos.equals(this.pos)&&this._oldScale.equals(this.scale)||(this.flagCollidersDirty(),this.flagTilesDirty()),this._collidersDirty&&(this._collidersDirty=!1,this._updateColliders()),this._token++,this.pos.clone(this._oldPos),this.scale.clone(this._oldScale),this._transform.pos=this.pos,this.onPostUpdate(t,e),this.emit("postupdate",new tL(t,e,this))}/**
     * Draws the tile map to the screen. Called by the [[Scene]].
     * @param ctx ExcaliburGraphicsContext
     * @param delta  The number of milliseconds since the last draw
     */draw(t,e){let i,s,r,n;this.emit("predraw",new tR(t,e,this));// TODO fix event
let o=this._engine.screen.getWorldBounds(),a=0,h=this.columns,l=0,d=this.rows,c=this.get(sN);if(c){let t=this.pos,e=eg.One.sub(c.parallaxFactor),i=this._engine.currentScene.camera.pos.scale(e);t=t.sub(i),// adjust world bounds by parallax factor
o=o.translate(t)}for(;a<h;a++){for(;l<d;l++)// fixme: This has a large perf impact, we iterate over every tile in the tilemap
// this probably requires a spatial data structure to do more efficiently
if(n=this.getTile(a,l),o.overlaps(n.bounds))for(s=0,r=// get non-negative tile sprites
(i=this.getTile(a,l).getGraphics()).length;s<r;s++){// draw sprite, warning if sprite doesn't exist
let r=i[s];if(r){so(r)&&(null==r||r.tick(e,this._token));let i=this.renderFromTopOfGraphic?0:r.height-this.tileHeight;r.draw(t,a*this.tileWidth,l*this.tileHeight-i)}}l=0}this.emit("postdraw",new tD(t,e,this))}debug(t){let e=this.tileWidth*this.columns,i=this.tileHeight*this.rows,s=eg.Zero;for(let i=0;i<this.rows+1;i++){let r=em(0,i*this.tileHeight);t.drawLine(s.add(r),s.add(em(e,r.y)),ef.Red,2)}for(let e=0;e<this.columns+1;e++){let r=em(e*this.tileWidth,0);t.drawLine(s.add(r),s.add(em(r.x,i)),ef.Red,2)}let r=this._composite.getColliders();for(let e of r){let i=ef.Gray;i.a=.5;let s=e.localBounds,r=e.worldPos.sub(this.pos);t.drawRectangle(r,s.width,s.height,i)}}}/**
 * TileMap Tile
 *
 * A light-weight object that occupies a space in a collision map. Generally
 * created by a [[TileMap]].
 *
 * Tiles can draw multiple sprites. Note that the order of drawing is the order
 * of the sprites in the array so the last one will be drawn on top. You can
 * use transparency to create layers this way.
 */class sG extends sn{// private _transform: TransformComponent;
/**
     * Return the world position of the top left corner of the tile
     */get pos(){return this._posDirty&&(this._recalculate(),this._posDirty=!1),this._pos}/**
     * Width of the tile in pixels
     */get width(){return this._width}/**
     * Height of the tile in pixels
     */get height(){return this._height}/**
     * Wether this tile should be treated as solid by the tilemap
     */get solid(){return this._solid}/**
     * Wether this tile should be treated as solid by the tilemap
     */set solid(t){var e;null===(e=this.map)||void 0===e||e.flagCollidersDirty(),this._solid=t}/**
     * Current list of graphics for this tile
     */getGraphics(){return this._graphics}/**
     * Add another [[Graphic]] to this TileMap tile
     * @param graphic
     */addGraphic(t){this._graphics.push(t)}/**
     * Remove an instance of a [[Graphic]] from this tile
     */removeGraphic(t){eC(t,this._graphics)}/**
     * Clear all graphics from this tile
     */clearGraphics(){this._graphics.length=0}/**
     * Returns the list of colliders
     */getColliders(){return this._colliders}/**
     * Adds a custom collider to the [[Tile]] to use instead of it's bounds
     *
     * If no collider is set but [[Tile.solid]] is set, the tile bounds are used as a collider.
     *
     * **Note!** the [[Tile.solid]] must be set to true for it to act as a "fixed" collider
     * @param collider
     */addCollider(t){this._colliders.push(t),this.map.flagCollidersDirty()}/**
     * Removes a collider from the [[Tile]]
     * @param collider
     */removeCollider(t){let e=this._colliders.indexOf(t);e>-1&&this._colliders.splice(e,1),this.map.flagCollidersDirty()}/**
     * Clears all colliders from the [[Tile]]
     */clearColliders(){this._colliders.length=0,this.map.flagCollidersDirty()}constructor(t){var e,i;super(),this._posDirty=!1,this._solid=!1,this._graphics=[],/**
         * Current list of colliders for this tile
         */this._colliders=[],/**
         * Arbitrary data storage per tile, useful for any game specific data
         */this.data=new Map,this.x=t.x,this.y=t.y,this.map=t.map,this._width=t.map.tileWidth*this.map.scale.x,this._height=t.map.tileHeight*this.map.scale.y,this.solid=null!==(e=t.solid)&&void 0!==e?e:this.solid,this._graphics=null!==(i=t.graphics)&&void 0!==i?i:[],this._recalculate()}flagDirty(){return this._posDirty=!0}_recalculate(){this._width=this.map.tileWidth*this.map.scale.x,this._height=this.map.tileHeight*this.map.scale.y,this._pos=this.map.pos.add(em(this.x*this._width,this.y*this._height)),this._bounds=new ey(this._pos.x,this._pos.y,this._pos.x+this._width,this._pos.y+this._height),this._posDirty=!1}/**
     * Tile bounds in world space
     */get bounds(){return this._posDirty&&this._recalculate(),this._bounds}/**
     * Tile position in world space
     */get center(){return this._posDirty&&this._recalculate(),new eg(this._pos.x+this._width/2,this._pos.y+this._height/2)}}/**
 * Container to house convenience strategy methods
 * @internal
 */class sq{constructor(t){this.camera=t}/**
     * Creates and adds the [[LockCameraToActorStrategy]] on the current camera.
     * @param actor The actor to lock the camera to
     */lockToActor(t){this.camera.addStrategy(new sX(t))}/**
     * Creates and adds the [[LockCameraToActorAxisStrategy]] on the current camera
     * @param actor The actor to lock the camera to
     * @param axis The axis to follow the actor on
     */lockToActorAxis(t,e){this.camera.addStrategy(new sZ(t,e))}/**
     * Creates and adds the [[ElasticToActorStrategy]] on the current camera
     * If cameraElasticity < cameraFriction < 1.0, the behavior will be a dampened spring that will slowly end at the target without bouncing
     * If cameraFriction < cameraElasticity < 1.0, the behavior will be an oscillating spring that will over
     * correct and bounce around the target
     *
     * @param actor Target actor to elastically follow
     * @param cameraElasticity [0 - 1.0] The higher the elasticity the more force that will drive the camera towards the target
     * @param cameraFriction [0 - 1.0] The higher the friction the more that the camera will resist motion towards the target
     */elasticToActor(t,e,i){this.camera.addStrategy(new sK(t,e,i))}/**
     * Creates and adds the [[RadiusAroundActorStrategy]] on the current camera
     * @param actor Target actor to follow when it is "radius" pixels away
     * @param radius Number of pixels away before the camera will follow
     */radiusAroundActor(t,e){this.camera.addStrategy(new sY(t,e))}/**
     * Creates and adds the [[LimitCameraBoundsStrategy]] on the current camera
     * @param box The bounding box to limit the camera to.
     */limitCameraBounds(t){this.camera.addStrategy(new sj(t))}}(S=tn||(tn={}))[S.X=0]="X",S[S.Y=1]="Y";/**
 * Lock a camera to the exact x/y position of an actor.
 */class sX{constructor(t){this.target=t,this.action=(t,e,i,s)=>{let r=t.center;return r}}}/**
 * Lock a camera to a specific axis around an actor.
 */class sZ{constructor(t,e){this.target=t,this.axis=e,this.action=(t,e,i,s)=>{let r=t.center,n=e.getFocus();return this.axis===tn.X?new eg(r.x,n.y):new eg(n.x,r.y)}}}/**
 * Using [Hook's law](https://en.wikipedia.org/wiki/Hooke's_law), elastically move the camera towards the target actor.
 */class sK{/**
     * If cameraElasticity < cameraFriction < 1.0, the behavior will be a dampened spring that will slowly end at the target without bouncing
     * If cameraFriction < cameraElasticity < 1.0, the behavior will be an oscillating spring that will over
     * correct and bounce around the target
     *
     * @param target Target actor to elastically follow
     * @param cameraElasticity [0 - 1.0] The higher the elasticity the more force that will drive the camera towards the target
     * @param cameraFriction [0 - 1.0] The higher the friction the more that the camera will resist motion towards the target
     */constructor(t,e,i){this.target=t,this.cameraElasticity=e,this.cameraFriction=i,this.action=(t,e,i,s)=>{let r=t.center,n=e.getFocus(),o=e.vel.clone(),a=r.sub(n).scale(this.cameraElasticity);o=o.add(a);// Calculate the friction (-1 to apply a force in the opposition of motion)
// Apply to the current camera velocity
let h=o.scale(-1).scale(this.cameraFriction);return o=o.add(h),// Update position by velocity deltas
n=n.add(o)}}}class sY{/**
     *
     * @param target Target actor to follow when it is "radius" pixels away
     * @param radius Number of pixels away before the camera will follow
     */constructor(t,e){this.target=t,this.radius=e,this.action=(t,e,i,s)=>{let r=t.center,n=e.getFocus(),o=r.sub(n),a=o.size;if(a>=this.radius){let t=a-this.radius;return n.add(o.normalize().scale(t))}return n}}}/**
 * Prevent a camera from going beyond the given camera dimensions.
 */class sj{constructor(t){this.target=t,/**
         * Useful for limiting the camera to a [[TileMap]]'s dimensions, or a specific area inside the map.
         *
         * Note that this strategy does not perform any movement by itself.
         * It only sets the camera position to within the given bounds when the camera has gone beyond them.
         * Thus, it is a good idea to combine it with other camera strategies and set this strategy as the last one.
         *
         * Make sure that the camera bounds are at least as large as the viewport size.
         *
         * @param target The bounding box to limit the camera to
         */this.boundSizeChecked=!1,this.action=(t,e,i,s)=>{let r=e.getFocus();this.boundSizeChecked||((t.bottom-t.top<i.drawHeight||t.right-t.left<i.drawWidth)&&t7.getInstance().warn("Camera bounds should not be smaller than the engine viewport"),this.boundSizeChecked=!0);let n=r.x,o=r.y;return r.x<t.left+i.halfDrawWidth?n=t.left+i.halfDrawWidth:r.x>t.right-i.halfDrawWidth&&(n=t.right-i.halfDrawWidth),r.y<t.top+i.halfDrawHeight?o=t.top+i.halfDrawHeight:r.y>t.bottom-i.halfDrawHeight&&(o=t.bottom-i.halfDrawHeight),em(n,o)}}}let sQ={Initialize:"initialize",PreUpdate:"preupdate",PostUpdate:"postupdate"};/**
 * Cameras
 *
 * [[Camera]] is the base class for all Excalibur cameras. Cameras are used
 * to move around your game and set focus. They are used to determine
 * what is "off screen" and can be used to scale the game.
 *
 */class sJ{constructor(){this.events=new tS,this.transform=eP.identity(),this.inverse=eP.identity(),this._cameraStrategies=[],this.strategy=new sq(this),/**
         * Get or set current zoom of the camera, defaults to 1
         */this._z=1,/**
         * Get or set rate of change in zoom, defaults to 0
         */this.dz=0,/**
         * Get or set zoom acceleration
         */this.az=0,/**
         * Current rotation of the camera
         */this.rotation=0,this._angularVelocity=0,/**
         * Get or set the camera's position
         */this._posChanged=!1,this._pos=eB(eg.Zero,()=>this._posChanged=!0),/**
         * Get or set the camera's velocity
         */this.vel=eg.Zero,/**
         * Get or set the camera's acceleration
         */this.acc=eg.Zero,this._cameraMoving=!1,this._currentLerpTime=0,this._lerpDuration=1e3,this._lerpStart=null,this._lerpEnd=null,//camera effects
this._isShaking=!1,this._shakeMagnitudeX=0,this._shakeMagnitudeY=0,this._shakeDuration=0,this._elapsedShakeTime=0,this._xShake=0,this._yShake=0,this._isZooming=!1,this._zoomStart=1,this._zoomEnd=1,this._currentZoomTime=0,this._zoomDuration=0,this._zoomEasing=sp.EaseInOutCubic,this._easing=sp.EaseInOutCubic,this._halfWidth=0,this._halfHeight=0,this._viewport=null,this._isInitialized=!1}get zoom(){return this._z}set zoom(t){this._z=t,this._engine&&(this._halfWidth=this._engine.halfDrawWidth,this._halfHeight=this._engine.halfDrawHeight)}/**
     * Get or set the camera's angular velocity
     */get angularVelocity(){return this._angularVelocity}set angularVelocity(t){this._angularVelocity=t}get pos(){return this._pos}set pos(t){this._pos=eB(t,()=>this._posChanged=!0),this._posChanged=!0}/**
     * Get the camera's x position
     */get x(){return this.pos.x}/**
     * Set the camera's x position (cannot be set when following an [[Actor]] or when moving)
     */set x(t){this._follow||this._cameraMoving||(this.pos=em(t,this.pos.y))}/**
     * Get the camera's y position
     */get y(){return this.pos.y}/**
     * Set the camera's y position (cannot be set when following an [[Actor]] or when moving)
     */set y(t){this._follow||this._cameraMoving||(this.pos=em(this.pos.x,t))}/**
     * Get or set the camera's x velocity
     */get dx(){return this.vel.x}set dx(t){this.vel=em(t,this.vel.y)}/**
     * Get or set the camera's y velocity
     */get dy(){return this.vel.y}set dy(t){this.vel=em(this.vel.x,t)}/**
     * Get or set the camera's x acceleration
     */get ax(){return this.acc.x}set ax(t){this.acc=em(t,this.acc.y)}/**
     * Get or set the camera's y acceleration
     */get ay(){return this.acc.y}set ay(t){this.acc=em(this.acc.x,t)}/**
     * Returns the focal point of the camera, a new point giving the x and y position of the camera
     */getFocus(){return this.pos}/**
     * This moves the camera focal point to the specified position using specified easing function. Cannot move when following an Actor.
     *
     * @param pos The target position to move to
     * @param duration The duration in milliseconds the move should last
     * @param [easingFn] An optional easing function ([[ex.EasingFunctions.EaseInOutCubic]] by default)
     * @returns A [[Promise]] that resolves when movement is finished, including if it's interrupted.
     *          The [[Promise]] value is the [[Vector]] of the target position. It will be rejected if a move cannot be made.
     */move(t,e,i=sp.EaseInOutCubic){if("function"!=typeof i)throw"Please specify an EasingFunction";return(// cannot move when following an actor
this._follow?Promise.reject(t):(this._lerpPromise&&this._lerpResolve&&this._lerpResolve(t),this._lerpPromise=new Promise(t=>{this._lerpResolve=t}),this._lerpStart=this.getFocus().clone(),this._lerpDuration=e,this._lerpEnd=t,this._currentLerpTime=0,this._cameraMoving=!0,this._easing=i,this._lerpPromise))}/**
     * Sets the camera to shake at the specified magnitudes for the specified duration
     * @param magnitudeX  The x magnitude of the shake
     * @param magnitudeY  The y magnitude of the shake
     * @param duration    The duration of the shake in milliseconds
     */shake(t,e,i){this._isShaking=!0,this._shakeMagnitudeX=t,this._shakeMagnitudeY=e,this._shakeDuration=i}/**
     * Zooms the camera in or out by the specified scale over the specified duration.
     * If no duration is specified, it take effect immediately.
     * @param scale    The scale of the zoom
     * @param duration The duration of the zoom in milliseconds
     */zoomOverTime(t,e=0,i=sp.EaseInOutCubic){return(this._zoomPromise=new Promise(t=>{this._zoomResolve=t}),e)?(this._isZooming=!0,this._zoomEasing=i,this._currentZoomTime=0,this._zoomDuration=e,this._zoomStart=this.zoom,this._zoomEnd=t,this._zoomPromise):(this._isZooming=!1,this.zoom=t,Promise.resolve(!0))}/**
     * Gets the bounding box of the viewport of this camera in world coordinates
     */get viewport(){return this._viewport?this._viewport:new ey(0,0,0,0)}/**
     * Adds a new camera strategy to this camera
     * @param cameraStrategy Instance of an [[CameraStrategy]]
     */addStrategy(t){this._cameraStrategies.push(t)}/**
     * Removes a camera strategy by reference
     * @param cameraStrategy Instance of an [[CameraStrategy]]
     */removeStrategy(t){eC(t,this._cameraStrategies)}/**
     * Clears all camera strategies from the camera
     */clearAllStrategies(){this._cameraStrategies.length=0}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.events.emit("preupdate",new tU(t,e,this)),this.onPreUpdate(t,e)}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before a scene is updated.
     */onPreUpdate(t,e){// Overridable
}/**
     *  It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.events.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after a scene is updated.
     */onPostUpdate(t,e){// Overridable
}get isInitialized(){return this._isInitialized}_initialize(t){if(!this.isInitialized){this._engine=t,this._screen=t.screen;let e=this._screen.contentArea,i=em(e.width/2,e.height/2);if(!this._engine.loadingComplete){// If there was a loading screen, we peek the configured resolution
let t=this._screen.peekResolution();t&&(i=em(t.width/2,t.height/2))}this._halfWidth=i.x,this._halfHeight=i.y,this._posChanged||(this.pos=i),// First frame bootstrap
// Ensure camera tx is correct
// Run update twice to ensure properties are init'd
this.updateTransform(),// Run strategies for first frame
this.runStrategies(t,t.clock.elapsed()),// Setup the first frame viewport
this.updateViewport(),// It's important to update the camera after strategies
// This prevents jitter
this.updateTransform(),this.onInitialize(t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0}}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after a scene is updated.
     */onInitialize(t){// Overridable
}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}runStrategies(t,e){for(let i of this._cameraStrategies)this.pos=i.action.call(i,i.target,this,t,e)}updateViewport(){// recalc viewport
this._viewport=new ey(this.x-this._halfWidth,this.y-this._halfHeight,this.x+this._halfWidth,this.y+this._halfHeight)}update(t,e){if(this._initialize(t),this._preupdate(t,e),// Update placements based on linear algebra
this.pos=this.pos.add(this.vel.scale(e/1e3)),this.zoom+=this.dz*e/1e3,this.vel=this.vel.add(this.acc.scale(e/1e3)),this.dz+=this.az*e/1e3,this.rotation+=this.angularVelocity*e/1e3,this._isZooming){if(this._currentZoomTime<this._zoomDuration){let t=this._zoomEasing,i=t(this._currentZoomTime,this._zoomStart,this._zoomEnd,this._zoomDuration);this.zoom=i,this._currentZoomTime+=e}else this._isZooming=!1,this.zoom=this._zoomEnd,this._currentZoomTime=0,this._zoomResolve(!0)}if(this._cameraMoving){if(this._currentLerpTime<this._lerpDuration){let t=sp.CreateVectorEasingFunction(this._easing),i=t(this._currentLerpTime,this._lerpStart,this._lerpEnd,this._lerpDuration);this.pos=i,this._currentLerpTime+=e}else{this.pos=this._lerpEnd;let t=this._lerpEnd.clone();this._lerpStart=null,this._lerpEnd=null,this._currentLerpTime=0,this._cameraMoving=!1,// Order matters here, resolve should be last so any chain promises have a clean slate
this._lerpResolve(t)}}this._isDoneShaking()?(this._isShaking=!1,this._elapsedShakeTime=0,this._shakeMagnitudeX=0,this._shakeMagnitudeY=0,this._shakeDuration=0,this._xShake=0,this._yShake=0):(this._elapsedShakeTime+=e,this._xShake=(Math.random()*this._shakeMagnitudeX|0)+1,this._yShake=(Math.random()*this._shakeMagnitudeY|0)+1),this.runStrategies(t,e),this.updateViewport(),// It's important to update the camera after strategies
// This prevents jitter
this.updateTransform(),this._postupdate(t,e)}/**
     * Applies the relevant transformations to the game canvas to "move" or apply effects to the Camera
     * @param ctx Canvas context to apply transformations
     */draw(t){t.multiply(this.transform)}updateTransform(){// center the camera
let t=this._screen.resolution.width/this.zoom,e=this._screen.resolution.height/this.zoom,i=em(-this.x+t/2+this._xShake,-this.y+e/2+this._yShake);// Calculate camera transform
this.transform.reset(),this.transform.scale(this.zoom,this.zoom),// rotate about the focus
this.transform.translate(t/2,e/2),this.transform.rotate(this.rotation),this.transform.translate(-t/2,-e/2),this.transform.translate(i.x,i.y),this.transform.inverse(this.inverse)}_isDoneShaking(){return!this._isShaking||this._elapsedShakeTime>=this._shakeDuration}}let s0={ExitTrigger:"exittrigger",EnterTrigger:"entertrigger"},s1={pos:eg.Zero,width:10,height:10,visible:!1,action:()=>{},filter:()=>!0,repeat:-1};/**
 * Triggers are a method of firing arbitrary code on collision. These are useful
 * as 'buttons', 'switches', or to trigger effects in a game. By default triggers
 * are invisible, and can only be seen when [[Trigger.visible]] is set to `true`.
 */class s2 extends sL{/**
     *
     * @param opts Trigger options
     */constructor(t){super({x:t.pos.x,y:t.pos.y,width:t.width,height:t.height}),this.events=new tS,/**
         * Action to fire when triggered by collision
         */this.action=()=>{},/**
         * Filter to add additional granularity to action dispatch, if a filter is specified the action will only fire when
         * filter return true for the collided actor.
         */this.filter=()=>!0,/**
         * Number of times to repeat before killing the trigger,
         */this.repeat=-1,t={...s1,...t},this.filter=t.filter||this.filter,this.repeat=t.repeat||this.repeat,this.action=t.action||this.action,t.target&&(this.target=t.target),this.graphics.visible=t.visible,this.body.collisionType=X.Passive,this.events.on("collisionstart",t=>{this.filter(t.other)&&(this.emit("enter",new t4(this,t.other)),this._dispatchAction(),0===this.repeat&&this.kill())}),this.events.on("collisionend",t=>{this.filter(t.other)&&this.emit("exit",new t9(this,t.other))})}set target(t){this._target=t,this.filter=e=>e===t}get target(){return this._target}_initialize(t){super._initialize(t)}_dispatchAction(){0!==this.repeat&&(this.action.call(this),this.repeat--)}}(T=to||(to={})).Update="update",T.Draw="draw";/**
 * An Excalibur [[System]] that updates entities of certain types.
 * Systems are scene specific
 *
 * Excalibur Systems currently require at least 1 Component type to operated
 *
 * Multiple types are declared as a type union
 * For example:
 *
 * ```typescript
 * class MySystem extends System<ComponentA | ComponentB> {
 *   public readonly types = ['a', 'b'] as const;
 *   public readonly systemType = SystemType.Update;
 *   public update(entities: Entity<ComponentA | ComponentB>) {
 *      ...
 *   }
 * }
 * ```
 */class s5{constructor(){/**
         * System can execute in priority order, by default all systems are priority 0. Lower values indicated higher priority.
         * For a system to execute before all other a lower priority value (-1 for example) must be set.
         * For a system to execute after all other a higher priority value (10 for example) must be set.
         */this.priority=0}/**
     * Systems observe when entities match their types or no longer match their types, override
     * @param _entityAddedOrRemoved
     */notify(t){// Override me
}}/**
 * An [[Entity]] with [[Component]] types that matches a [[System]] types exists in the current scene.
 */class s3{constructor(t){this.data=t,this.type="Entity Added"}}/**
 * Type guard to check for AddedEntity messages
 * @param x
 */function s4(t){return!!t&&"Entity Added"===t.type}/**
 * An [[Entity]] with [[Component]] types that no longer matches a [[System]] types exists in the current scene.
 */class s9{constructor(t){this.data=t,this.type="Entity Removed"}}/**
 * type guard to check for the RemovedEntity message
 */function s6(t){return!!t&&"Entity Removed"===t.type}// Add/Remove entities and components
class s7{constructor(t){this._world=t,this.entities=[],this._entityIndex={},this._entitiesToRemove=[]}/**
     * Runs the entity lifecycle
     * @param _context
     */updateEntities(t,e){for(let i of this.entities)// TODO is this right?
i.update(t.engine,e),i.active||this.removeEntity(i)}findEntitiesForRemoval(){for(let t of this.entities)t.active||this.removeEntity(t)}/**
     * EntityManager observes changes on entities
     * @param message
     */notify(t){se(t)&&this._world.queryManager.addEntity(t.data.entity),ss(t)&&this._world.queryManager.removeComponent(t.data.entity,t.data.component)}/**
     * Adds an entity to be tracked by the EntityManager
     * @param entity
     */addEntity(t){t.active=!0,t.scene=this._world.context,t&&!this._entityIndex[t.id]&&(this._entityIndex[t.id]=t,this.entities.push(t),this._world.queryManager.addEntity(t),t.componentAdded$.register(this),t.componentRemoved$.register(this),// if entity has children
t.children.forEach(e=>{e.scene=t.scene,this.addEntity(e)}),t.childrenAdded$.register({notify:t=>{this.addEntity(t)}}),t.childrenRemoved$.register({notify:t=>{this.removeEntity(t,!1)}}))}removeEntity(t,e=!0){var i;let s=0;s=t instanceof sn?t.id:t;let r=this._entityIndex[s];if(r&&r.active&&(r.active=!1),r&&e){this._entitiesToRemove.push(r);return}delete this._entityIndex[s],r&&(r.scene=null,eC(r,this.entities),this._world.queryManager.removeEntity(r),r.componentAdded$.unregister(this),r.componentRemoved$.unregister(this),// if entity has children
r.children.forEach(t=>{t.scene=null,this.removeEntity(t,e)}),r.childrenAdded$.clear(),r.childrenRemoved$.clear(),(null===(i=this._world.context)||void 0===i?void 0:i.engine)&&this._world.context.engine.stats.currFrame.actors.killed++)}processEntityRemovals(){for(let t of this._entitiesToRemove)t.active||this.removeEntity(t,!1);this._entitiesToRemove.length=0}processComponentRemovals(){for(let t of this.entities)t.processComponentRemoval()}getById(t){return this._entityIndex[t]}getByName(t){return this.entities.filter(e=>e.name===t)}clear(){for(let t of this.entities)this.removeEntity(t)}}let s8=t=>{let e=[...t].sort((t,e)=>t.localeCompare(e)).join("+");return e};/**
 * Represents query for entities that match a list of types that is cached and observable
 *
 * Queries can be strongly typed by supplying a type union in the optional type parameter
 * ```typescript
 * const queryAB = new ex.Query<ComponentTypeA | ComponentTypeB>(['A', 'B']);
 * ```
 */class rt extends iH{get key(){return this._key?this._key:this._key=s8(this.types)}constructor(t){super(),this._entities=[],t[0]instanceof Function?this.types=t.map(t=>(new t).type):this.types=t}/**
     * Returns a list of entities that match the query
     *
     * @param sort Optional sorting function to sort entities returned from the query
     */getEntities(t){return t&&this._entities.sort(t),this._entities}/**
     * Add an entity to the query, will only be added if the entity matches the query types
     * @param entity
     */addEntity(t){!eA(this._entities,t)&&this.matches(t)&&(this._entities.push(t),this.notifyAll(new s3(t)))}/**
     * If the entity is part of the query it will be removed regardless of types
     * @param entity
     */removeEntity(t){eC(t,this._entities)&&this.notifyAll(new s9(t))}/**
     * Removes all entities and observers from the query
     */clear(){for(let t of(this._entities.length=0,this.observers))this.unregister(t)}matches(t){let e=[];e=t instanceof sn?t.types:t;let i=!0;for(let t of this.types)if(!(i=i&&e.indexOf(t)>-1))return!1;return i}contain(t){return this.types.indexOf(t)>-1}}/**
 * The query manager is responsible for updating all queries when entities/components change
 */class re{constructor(t){this._world=t,this._queries={}}/**
     * Adds a query to the manager and populates with any entities that match
     * @param query
     */_addQuery(t){for(let e of(this._queries[s8(t.types)]=t,this._world.entityManager.entities))t.addEntity(e)}/**
     * Removes the query if there are no observers left
     * @param query
     */maybeRemoveQuery(t){0===t.observers.length&&(t.clear(),delete this._queries[s8(t.types)])}/**
     * Adds the entity to any matching query in the query manage
     * @param entity
     */addEntity(t){for(let e in this._queries)this._queries[e]&&this._queries[e].addEntity(t)}/**
     * Removes an entity from queries if the removed component disqualifies it
     * @param entity
     * @param component
     */removeComponent(t,e){for(let i in this._queries)// it is now disqualified from that query, remove it
this._queries[i].contain(e.type)&&this._queries[i].removeEntity(t)}/**
     * Removes an entity from all queries it is currently a part of
     * @param entity
     */removeEntity(t){for(let e in this._queries)this._queries[e].removeEntity(t)}/**
     * Creates a populated query and returns, if the query already exists that will be returned instead of a new instance
     * @param types
     */createQuery(t){let e=this.getQuery(t);if(e)return e;let i=new rt(t);return this._addQuery(i),i}/**
     * Retrieves an existing query by types if it exists otherwise returns null
     * @param types
     */getQuery(t){let e=s8(t);return this._queries[e]?this._queries[e]:null}}/**
 * The SystemManager is responsible for keeping track of all systems in a scene.
 * Systems are scene specific
 */class ri{constructor(t){this._world=t,/**
         * List of systems, to add a new system call [[SystemManager.addSystem]]
         */this.systems=[],this.initialized=!1}/**
     * Get a system registered in the manager by type
     * @param systemType
     */get(t){return this.systems.find(e=>e instanceof t)}/**
     * Adds a system to the manager, it will now be updated every frame
     * @param system
     */addSystem(t){// validate system has types
if(!t.types||0===t.types.length)throw Error("Attempted to add a System without any types");let e=this._world.queryManager.createQuery(t.types);this.systems.push(t),this.systems.sort((t,e)=>t.priority-e.priority),e.register(t),this.initialized&&t.initialize&&t.initialize(this._world.context)}/**
     * Removes a system from the manager, it will no longer be updated
     * @param system
     */removeSystem(t){eC(t,this.systems);let e=this._world.queryManager.getQuery(t.types);e&&(e.unregister(t),this._world.queryManager.maybeRemoveQuery(e))}/**
     * Initialize all systems in the manager
     *
     * Systems added after initialize() will be initialized on add
     */initialize(){if(!this.initialized)for(let t of(this.initialized=!0,this.systems))t.initialize&&t.initialize(this._world.context)}/**
     * Updates all systems
     * @param type whether this is an update or draw system
     * @param context context reference
     * @param delta time in milliseconds
     */updateSystems(t,e,i){let s=this.systems.filter(e=>e.systemType===t);for(let t of s)t.preupdate&&t.preupdate(e,i);for(let t of s){// Get entities that match the system types, pre-sort
let s=this._world.queryManager.getQuery(t.types).getEntities(t.sort);// Initialize entities if needed
if(e instanceof rS)for(let t of s)t._initialize(null==e?void 0:e.engine);t.update(s,i)}for(let t of s)t.postupdate&&t.postupdate(e,i)}clear(){for(let t of this.systems)this.removeSystem(t)}}/**
 * The World is a self-contained entity component system for a particular context.
 */class rs{/**
     * The context type is passed to the system updates
     * @param context
     */constructor(t){this.context=t,this.queryManager=new re(this),this.entityManager=new s7(this),this.systemManager=new ri(this)}/**
     * Update systems by type and time elapsed in milliseconds
     */update(t,e){t===to.Update&&this.entityManager.updateEntities(this.context,e),this.systemManager.updateSystems(t,this.context,e),this.entityManager.findEntitiesForRemoval(),this.entityManager.processComponentRemovals(),this.entityManager.processEntityRemovals()}add(t){t instanceof sn&&this.entityManager.addEntity(t),t instanceof s5&&this.systemManager.addSystem(t)}remove(t,e=!0){t instanceof sn&&this.entityManager.removeEntity(t,e),t instanceof s5&&this.systemManager.removeSystem(t)}clearEntities(){this.entityManager.clear()}clearSystems(){this.systemManager.clear()}}class rr{static integrate(t,e,i,s){let r=s/1e3;// This code looks a little wild, but it's to avoid creating any new Vector instances
// integration is done in a tight loop so this is key to avoid GC'ing
e.vel.addEqual(i.scale(r,rr._ACC)),t.pos.add(e.vel.scale(r,rr._VEL),rr._POS).addEqual(i.scale(.5*r*r,rr._VEL_ACC)),e.angularVelocity+=e.torque*(1/e.inertia)*r;let n=t.rotation+e.angularVelocity*r;t.scale.add(e.scaleFactor.scale(r,this._SCALE_FACTOR),rr._SCALE);let o=t.get();o.setTransform(rr._POS,n,rr._SCALE)}}// Scratch vectors to avoid allocation
rr._POS=new eg(0,0),rr._SCALE=new eg(1,1),rr._ACC=new eg(0,0),rr._VEL=new eg(0,0),rr._VEL_ACC=new eg(0,0),rr._SCALE_FACTOR=new eg(0,0);class rn extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.motion"],this.systemType=to.Update,this.priority=-1}update(t,e){let i,s;for(let r=0;r<t.length;r++){i=t[r].get(iN),s=t[r].get(i$);let n=t[r].get(i8);if(null==n?void 0:n.sleeping)continue;let o=s.acc.clone();(null==n?void 0:n.collisionType)===X.Active&&(null==n?void 0:n.useGravity)&&o.addEqual(iB.gravity),null==n||n.captureOldTransform(),// Update transform and motion based on Euler linear algebra
rr.integrate(i,s,o,e)}}}/**
 * ArcadeSolver is the default in Excalibur. It solves collisions so that there is no overlap between contacts,
 * and negates velocity along the collision normal.
 *
 * This is usually the type of collisions used for 2D games that don't need a more realistic collision simulation.
 *
 */class ro{constructor(){this.directionMap=new Map,this.distanceMap=new Map}solve(t){for(let e of(// Events and init
this.preSolve(t),// Sort contacts by distance to avoid artifacts with seams
// It's important to solve in a specific order
// Remove any canceled contacts
(t=t.filter(t=>!t.isCanceled())).sort((t,e)=>{let i=this.distanceMap.get(t.id),s=this.distanceMap.get(e.id);return i-s}),t))// Solve position first in arcade
this.solvePosition(e),// Solve velocity second in arcade
this.solveVelocity(e);return(// Events and any contact house-keeping the solver needs
this.postSolve(t),t)}preSolve(t){for(let e of t){if(1e-4>Math.abs(e.mtv.x)&&1e-4>Math.abs(e.mtv.y)){// Cancel near 0 mtv collisions
e.cancel();continue}let t=W.fromDirection(e.mtv),i=e.mtv.negate(),s=e.colliderA.worldPos.squareDistance(e.colliderB.worldPos);this.distanceMap.set(e.id,s),// Publish collision events on both participants
e.colliderA.events.emit("precollision",new tq(e.colliderA,e.colliderB,t,i)),e.colliderB.events.emit("precollision",new tq(e.colliderB,e.colliderA,W.getOpposite(t),i.negate()))}}postSolve(t){var e,i;for(let s of t){if(s.isCanceled())continue;let t=s.colliderA,r=s.colliderB,n=null===(e=t.owner)||void 0===e?void 0:e.get(i8),o=null===(i=r.owner)||void 0===i?void 0:i.get(i8);if(n&&o&&(n.collisionType===X.Passive||o.collisionType===X.Passive))continue;let a=W.fromDirection(s.mtv),h=s.mtv.negate();// Publish collision events on both participants
s.colliderA.events.emit("postcollision",new tX(s.colliderA,s.colliderB,a,h)),s.colliderB.events.emit("postcollision",new tX(s.colliderB,s.colliderA,W.getOpposite(a),h.negate()))}}solvePosition(t){var e,i;// if bounds no longer intersect skip to the next
// this removes jitter from overlapping/stacked solid tiles or a wall of solid tiles
if(!t.colliderA.bounds.overlaps(t.colliderB.bounds,1e-4)||1e-4>Math.abs(t.mtv.x)&&1e-4>Math.abs(t.mtv.y)){// Cancel the contact to prevent and solving
t.cancel();return}let s=t.mtv,r=t.colliderA,n=t.colliderB,o=null===(e=r.owner)||void 0===e?void 0:e.get(i8),a=null===(i=n.owner)||void 0===i?void 0:i.get(i8);if(o&&a){if(o.collisionType===X.Passive||a.collisionType===X.Passive)return;o.collisionType===X.Active&&a.collisionType===X.Active&&(s=s.scale(.5)),o.collisionType===X.Active&&(o.globalPos.x-=s.x,o.globalPos.y-=s.y,r.update(o.transform.get())),a.collisionType===X.Active&&(a.globalPos.x+=s.x,a.globalPos.y+=s.y,n.update(a.transform.get()))}}solveVelocity(t){var e,i;if(t.isCanceled())return;let s=t.colliderA,r=t.colliderB,n=null===(e=s.owner)||void 0===e?void 0:e.get(i8),o=null===(i=r.owner)||void 0===i?void 0:i.get(i8);if(n&&o){if(n.collisionType===X.Passive||o.collisionType===X.Passive)return;let e=t.normal,i=e.negate();if(n.collisionType===X.Active&&0>n.vel.normalize().dot(i)){// Cancel out velocity opposite direction of collision normal
let t=e.scale(e.dot(n.vel.negate()));n.vel=n.vel.add(t)}if(o.collisionType===X.Active&&0>o.vel.normalize().dot(e)){let t=i.scale(i.dot(o.vel.negate()));o.vel=o.vel.add(t)}}}}/**
 * Holds information about contact points, meant to be reused over multiple frames of contact
 */class ra{constructor(t,e,i){this.point=t,this.local=e,this.contact=i,/**
         * Impulse accumulated over time in normal direction
         */this.normalImpulse=0,/**
         * Impulse accumulated over time in the tangent direction
         */this.tangentImpulse=0,/**
         * Effective mass seen in the normal direction
         */this.normalMass=0,/**
         * Effective mass seen in the tangent direction
         */this.tangentMass=0,/**
         * Direction from center of mass of bodyA to contact point
         */this.aToContact=new eg(0,0),/**
         * Direction from center of mass of bodyB to contact point
         */this.bToContact=new eg(0,0),/**
         * Original contact velocity combined with bounciness
         */this.originalVelocityAndRestitution=0,this.update()}/**
     * Updates the contact information
     */update(){var t,e;let i=null===(t=this.contact.colliderA.owner)||void 0===t?void 0:t.get(i8),s=null===(e=this.contact.colliderB.owner)||void 0===e?void 0:e.get(i8);if(i&&s){let t=this.contact.normal,e=this.contact.tangent;this.aToContact=this.point.sub(i.globalPos),this.bToContact=this.point.sub(s.globalPos);let r=this.aToContact.cross(t),n=this.bToContact.cross(t);this.normalMass=i.inverseMass+s.inverseMass+i.inverseInertia*r*r+s.inverseInertia*n*n;let o=this.aToContact.cross(e),a=this.bToContact.cross(e);this.tangentMass=i.inverseMass+s.inverseMass+i.inverseInertia*o*o+s.inverseInertia*a*a}return this}/**
     * Returns the relative velocity between bodyA and bodyB
     */getRelativeVelocity(){var t,e;let i=null===(t=this.contact.colliderA.owner)||void 0===t?void 0:t.get(i8),s=null===(e=this.contact.colliderB.owner)||void 0===e?void 0:e.get(i8);if(i&&s){// Relative velocity in linear terms
// Angular to linear velocity formula -> omega = velocity/radius so omega x radius = velocity
let t=i.vel.add(eg.cross(i.angularVelocity,this.aToContact)),e=s.vel.add(eg.cross(s.angularVelocity,this.bToContact));return e.sub(t)}return eg.Zero}}class rh{constructor(){this.lastFrameContacts=new Map,// map contact id to contact points
this.idToContactConstraint=new Map}getContactConstraints(t){var e;return null!==(e=this.idToContactConstraint.get(t))&&void 0!==e?e:[]}solve(t){return(// Events and init
this.preSolve(t),// Remove any canceled contacts
t=t.filter(t=>!t.isCanceled()),// Solve velocity first
this.solveVelocity(t),// Solve position last because non-overlap is the most important
this.solvePosition(t),// Events and any contact house-keeping the solver needs
this.postSolve(t),t)}preSolve(t){var e,i,s;for(let e of t){if(1e-4>Math.abs(e.mtv.x)&&1e-4>Math.abs(e.mtv.y)){// Cancel near 0 mtv collisions
e.cancel();continue}// Publish collision events on both participants
let t=W.fromDirection(e.mtv);e.colliderA.events.emit("precollision",new tq(e.colliderA,e.colliderB,t,e.mtv)),e.colliderA.events.emit("beforecollisionresolve",new tY(e.colliderA,e.colliderB,t,e.mtv,e)),e.colliderB.events.emit("precollision",new tq(e.colliderB,e.colliderA,W.getOpposite(t),e.mtv.negate())),e.colliderB.events.emit("beforecollisionresolve",new tY(e.colliderB,e.colliderA,W.getOpposite(t),e.mtv.negate(),e)),// Match awake state for sleeping
e.matchAwake()}// Keep track of contacts that done
let r=Array.from(this.idToContactConstraint.keys());for(let n of t){// Remove all current contacts that are not done
let t=r.indexOf(n.id);t>-1&&r.splice(t,1);let o=null!==(e=this.idToContactConstraint.get(n.id))&&void 0!==e?e:[],a=0,h=n.colliderA.owner.get(i8),l=n.colliderB.owner.get(i8);if(h&&l)for(let t of n.points){let e=n.normal,r=n.tangent,d=t.sub(h.globalPos),c=t.sub(l.globalPos),u=d.cross(e),p=c.cross(e),_=h.inverseMass+l.inverseMass+h.inverseInertia*u*u+l.inverseInertia*p*p,g=d.cross(r),m=c.cross(r),f=h.inverseMass+l.inverseMass+h.inverseInertia*g*g+l.inverseInertia*m*m;o[a]&&(null===(s=null===(i=o[a])||void 0===i?void 0:i.point)||void 0===s?void 0:s.squareDistance(t))<4?(o[a].point=t,o[a].local=n.localPoints[a]):o[a]=new ra(t,n.localPoints[a],n),// Update contact point calculations
o[a].aToContact=d,o[a].bToContact=c,o[a].normalMass=1/_,o[a].tangentMass=1/f;// Calculate relative velocity before solving to accurately do restitution
let v=h.bounciness>l.bounciness?h.bounciness:l.bounciness,y=n.normal.dot(o[a].getRelativeVelocity());o[a].originalVelocityAndRestitution=0,y<-.1&&(o[a].originalVelocityAndRestitution=-v*y),a++}this.idToContactConstraint.set(n.id,o)}// Clean up any contacts that did not occur last frame
for(let t of r)this.idToContactConstraint.delete(t);// Warm contacts with accumulated impulse
// Useful for tall stacks
if(iB.warmStart)this.warmStart(t);else for(let e of t){let t=this.getContactConstraints(e.id);for(let e of t)e.normalImpulse=0,e.tangentImpulse=0}}postSolve(t){for(let e of t){let t=e.colliderA.owner.get(i8),i=e.colliderB.owner.get(i8);if(t&&i){// Skip post solve for active+passive collisions
if(t.collisionType===X.Passive||i.collisionType===X.Passive)continue;// Update motion values for sleeping
t.updateMotion(),i.updateMotion()}// Publish collision events on both participants
let s=W.fromDirection(e.mtv);e.colliderA.events.emit("postcollision",new tX(e.colliderA,e.colliderB,s,e.mtv)),e.colliderA.events.emit("aftercollisionresolve",new tj(e.colliderA,e.colliderB,s,e.mtv,e)),e.colliderB.events.emit("postcollision",new tX(e.colliderB,e.colliderA,W.getOpposite(s),e.mtv.negate())),e.colliderB.events.emit("aftercollisionresolve",new tj(e.colliderB,e.colliderA,W.getOpposite(s),e.mtv.negate(),e))}for(let e of(// Store contacts
this.lastFrameContacts.clear(),t))this.lastFrameContacts.set(e.id,e)}/**
     * Warm up body's based on previous frame contact points
     * @param contacts
     */warmStart(t){var e,i,s;for(let r of t){let t=null===(e=r.colliderA.owner)||void 0===e?void 0:e.get(i8),n=null===(i=r.colliderB.owner)||void 0===i?void 0:i.get(i8);if(t&&n){let e=null!==(s=this.idToContactConstraint.get(r.id))&&void 0!==s?s:[];for(let i of e)if(iB.warmStart){let e=r.normal.scale(i.normalImpulse),s=r.tangent.scale(i.tangentImpulse),o=e.add(s);t.applyImpulse(i.point,o.negate()),n.applyImpulse(i.point,o)}else i.normalImpulse=0,i.tangentImpulse=0}}}/**
     * Iteratively solve the position overlap constraint
     * @param contacts
     */solvePosition(t){var e,i,s;for(let r=0;r<iB.positionIterations;r++)for(let r of t){let t=null===(e=r.colliderA.owner)||void 0===e?void 0:e.get(i8),n=null===(i=r.colliderB.owner)||void 0===i?void 0:i.get(i8);if(t&&n){// Skip solving active+passive
if(t.collisionType===X.Passive||n.collisionType===X.Passive)continue;let e=null!==(s=this.idToContactConstraint.get(r.id))&&void 0!==s?s:[];for(let i of e){let e=r.normal,s=i3.FindContactSeparation(r,i.local),o=iB.steeringFactor,a=iB.slop,h=eh(o*(s+a),-5,0),l=e.scale(-h*i.normalMass);// This is a pseudo impulse, meaning we aren't doing a real impulse calculation
// We adjust position and rotation instead of doing the velocity
if(t.collisionType===X.Active){// TODO make applyPseudoImpulse function?
let e=l.negate().scale(t.inverseMass);t.limitDegreeOfFreedom.includes(Q.X)&&(e.x=0),t.limitDegreeOfFreedom.includes(Q.Y)&&(e.y=0),t.globalPos=t.globalPos.add(e),t.limitDegreeOfFreedom.includes(Q.Rotation)||(t.rotation-=i.aToContact.cross(l)*t.inverseInertia)}if(n.collisionType===X.Active){let t=l.scale(n.inverseMass);n.limitDegreeOfFreedom.includes(Q.X)&&(t.x=0),n.limitDegreeOfFreedom.includes(Q.Y)&&(t.y=0),n.globalPos=n.globalPos.add(t),n.limitDegreeOfFreedom.includes(Q.Rotation)||(n.rotation+=i.bToContact.cross(l)*n.inverseInertia)}}}}}solveVelocity(t){var e,i,s;for(let r=0;r<iB.velocityIterations;r++)for(let r of t){let t=null===(e=r.colliderA.owner)||void 0===e?void 0:e.get(i8),n=null===(i=r.colliderB.owner)||void 0===i?void 0:i.get(i8);if(t&&n){// Skip solving active+passive
if(t.collisionType===X.Passive||n.collisionType===X.Passive)continue;let e=Math.min(t.friction,n.friction),i=null!==(s=this.idToContactConstraint.get(r.id))&&void 0!==s?s:[];// Friction constraint
for(let s of i){let i=s.getRelativeVelocity(),o=-i.dot(r.tangent),a=o*s.tangentMass,h=e*s.normalImpulse,l=eh(s.tangentImpulse+a,-h,h);a=l-s.tangentImpulse,s.tangentImpulse=l;let d=r.tangent.scale(a);t.applyImpulse(s.point,d.negate()),n.applyImpulse(s.point,d)}// Bounce constraint
for(let e of i){// Need to recalc relative velocity because the previous step could have changed vel
let i=e.getRelativeVelocity(),s=i.dot(r.normal),o=-e.normalMass*(s-e.originalVelocityAndRestitution),a=Math.max(e.normalImpulse+o,0);o=a-e.normalImpulse,e.normalImpulse=a;let h=r.normal.scale(o);t.applyImpulse(e.point,h.negate()),n.applyImpulse(e.point,h)}}}}}class rl extends s5{constructor(t){super(),this.types=["ex.transform","ex.motion","ex.collider"],this.systemType=to.Update,this.priority=-1,this._realisticSolver=new rh,this._arcadeSolver=new ro,this._lastFrameContacts=new Map,this._currentFrameContacts=new Map,this._processor=t.collisionProcessor,this._trackCollider=t=>this._processor.track(t),this._untrackCollider=t=>this._processor.untrack(t)}notify(t){if(s4(t)){let e=t.data.get(i7);e.$colliderAdded.subscribe(this._trackCollider),e.$colliderRemoved.subscribe(this._untrackCollider);let i=e.get();i&&this._processor.track(i)}else{let e=t.data.get(i7),i=e.get();e&&i&&this._processor.untrack(i)}}initialize(t){this._engine=t.engine}update(t,e){var i,s,r,n;if(!iB.enabled)return;// Collect up all the colliders and update them
let o=[];for(let e of t){let t=e.get(i7),s=null==t?void 0:t.get();if(t&&(null===(i=t.owner)||void 0===i?void 0:i.active)&&s){if(t.update(),s instanceof ij){let t=s.getColliders();o=o.concat(t)}else o.push(s)}}// Update the spatial partitioning data structures
// TODO if collider invalid it will break the processor
// TODO rename "update" to something more specific
this._processor.update(o);// Run broadphase on all colliders and locates potential collisions
let a=this._processor.broadphase(o,e);this._currentFrameContacts.clear();// Given possible pairs find actual contacts
let h=this._processor.narrowphase(a,null===(n=null===(r=null===(s=this._engine)||void 0===s?void 0:s.debug)||void 0===r?void 0:r.stats)||void 0===n?void 0:n.currFrame),l=this.getSolver();// Record contacts for start/end
for(let t of // Solve, this resolves the position/velocity so entities aren't overlapping
h=l.solve(h)){// Process composite ids, things with the same composite id are treated as the same collider for start/end
let e=t.id.indexOf("|");if(e>0){let i=t.id.substring(e+1);this._currentFrameContacts.set(i,t)}else this._currentFrameContacts.set(t.id,t)}// Emit contact start/end events
this.runContactStartEnd(),// reset the last frame cache
this._lastFrameContacts.clear(),// Keep track of collisions contacts that have started or ended
this._lastFrameContacts=new Map(this._currentFrameContacts)}getSolver(){return iB.collisionResolutionStrategy===Z.Realistic?this._realisticSolver:this._arcadeSolver}debug(t){this._processor.debug(t)}runContactStartEnd(){// Composite collider collisions may have a duplicate id because we want to treat those as a singular start/end
for(let[t,e]of this._currentFrameContacts)if(!this._lastFrameContacts.has(t)){let t=e.colliderA,i=e.colliderB;t.events.emit("collisionstart",new tQ(t,i,e)),t.events.emit("contactstart",new tZ(t,i,e)),i.events.emit("collisionstart",new tQ(i,t,e)),i.events.emit("contactstart",new tZ(i,t,e))}// find all contacts that have ceased
for(let[t,e]of this._lastFrameContacts)if(!this._currentFrameContacts.has(t)){let t=e.colliderA,i=e.colliderB;t.events.emit("collisionend",new tJ(t,i)),t.events.emit("contactend",new tK(t,i)),i.events.emit("collisionend",new tJ(i,t)),i.events.emit("contactend",new tK(i,t))}}}/**
     * Animation is playing forwards
     */(E=ta||(ta={})).Forward="forward",/**
     * Animation is playing backwards
     */E.Backward="backward",/**
     * Animation ends without displaying anything
     */(P=th||(th={})).End="end",/**
     * Animation loops to the first frame after the last frame
     */P.Loop="loop",/**
     * Animation plays to the last frame, then backwards to the first frame, then repeats
     */P.PingPong="pingpong",/**
     * Animation ends stopping on the last frame
     */P.Freeze="freeze";let rd={Frame:"frame",Loop:"loop",Ended:"ended"};/**
 * Create an Animation given a list of [[Frame|frames]] in [[AnimationOptions]]
 *
 * To create an Animation from a [[SpriteSheet]], use [[Animation.fromSpriteSheet]]
 */class Animation extends eF{constructor(t){var e,i;super(t),this.events=new tS,this.frames=[],this.strategy=th.Loop,this.frameDuration=100,this.timeScale=1,this._idempotencyToken=-1,this._firstTick=!0,this._currentFrame=0,this._timeLeftInFrame=0,this._pingPongDirection=1,this._done=!1,this._playing=!0,this._reversed=!1,this.frames=t.frames,this.strategy=null!==(e=t.strategy)&&void 0!==e?e:this.strategy,this.frameDuration=t.totalDuration?t.totalDuration/this.frames.length:null!==(i=t.frameDuration)&&void 0!==i?i:this.frameDuration,t.reverse&&this.reverse(),this.goToFrame(0)}clone(){return new Animation({frames:this.frames.map(t=>({...t})),frameDuration:this.frameDuration,reverse:this._reversed,strategy:this.strategy,...this.cloneGraphicOptions()})}get width(){let t=this.currentFrame;return t?Math.abs(t.graphic.width*this.scale.x):0}get height(){let t=this.currentFrame;return t?Math.abs(t.graphic.height*this.scale.y):0}/**
     * Create an Animation from a [[SpriteSheet]], a list of indices into the sprite sheet, a duration per frame
     * and optional [[AnimationStrategy]]
     *
     * Example:
     * ```typescript
     * const spriteSheet = SpriteSheet.fromImageSource({...});
     *
     * const anim = Animation.fromSpriteSheet(spriteSheet, range(0, 5), 200, AnimationStrategy.Loop);
     * ```
     *
     * @param spriteSheet
     * @param frameIndices
     * @param durationPerFrameMs
     * @param strategy
     */static fromSpriteSheet(t,e,i,s=th.Loop){let r=t.sprites.length-1,n=e.filter(t=>t<0||t>r);return n.length&&Animation._LOGGER.warn(`Indices into SpriteSheet were provided that don't exist: ${n.join(",")} no frame will be shown`),new Animation({frames:t.sprites.filter((t,i)=>e.indexOf(i)>-1).map(t=>({graphic:t,duration:i})),strategy:s})}/**
     * Create an [[Animation]] from a [[SpriteSheet]] given a list of coordinates
     *
     * Example:
     * ```typescript
     * const spriteSheet = SpriteSheet.fromImageSource({...});
     *
     * const anim = Animation.fromSpriteSheetCoordinates({
     *  spriteSheet,
     *  frameCoordinates: [
     *    {x: 0, y: 5, duration: 100},
     *    {x: 1, y: 5, duration: 200},
     *    {x: 2, y: 5, duration: 100},
     *    {x: 3, y: 5, duration: 500}
     *  ],
     *  strategy: AnimationStrategy.PingPong
     * });
     * ```
     *
     * @param options
     * @returns Animation
     */static fromSpriteSheetCoordinates(t){let{spriteSheet:e,frameCoordinates:i,durationPerFrameMs:s,strategy:r,reverse:n}=t,o=null!=s?s:100,a=[];for(let t of i){let{x:i,y:s,duration:r}=t,n=e.getSprite(i,s);n?a.push({graphic:n,duration:null!=r?r:o}):Animation._LOGGER.warn(`Skipping frame! SpriteSheet does not have coordinate (${i}, ${s}), please check your SpriteSheet to confirm that sprite exists`)}return new Animation({frames:a,strategy:r,reverse:n})}/**
     * Returns the current Frame of the animation
     *
     * Use [[Animation.currentFrameIndex]] to get the frame number and
     * [[Animation.goToFrame]] to set the current frame index
     */get currentFrame(){return this._currentFrame>=0&&this._currentFrame<this.frames.length?this.frames[this._currentFrame]:null}/**
     * Returns the current frame index of the animation
     *
     * Use [[Animation.currentFrame]] to grab the current [[Frame]] object
     */get currentFrameIndex(){return this._currentFrame}/**
     * Returns `true` if the animation is playing
     */get isPlaying(){return this._playing}/**
     * Reverses the play direction of the Animation, this preserves the current frame
     */reverse(){// Don't mutate with the original frame list, create a copy
this.frames=this.frames.slice().reverse(),this._reversed=!this._reversed}/**
     * Returns the current play direction of the animation
     */get direction(){// Keep logically consistent with ping-pong direction
// If ping-pong is forward = 1 and reversed is true then we are logically reversed
let t=!!this._reversed&&1===this._pingPongDirection;return t?ta.Backward:ta.Forward}/**
     * Plays or resumes the animation from the current frame
     */play(){this._playing=!0}/**
     * Pauses the animation on the current frame
     */pause(){this._playing=!1,this._firstTick=!0}/**
     * Reset the animation back to the beginning, including if the animation were done
     */reset(){this._done=!1,this._firstTick=!0,this._currentFrame=0}/**
     * Returns `true` if the animation can end
     */get canFinish(){switch(this.strategy){case th.End:case th.Freeze:return!0;default:return!1}}/**
     * Returns `true` if the animation is done, for looping type animations
     * `ex.AnimationStrategy.PingPong` and `ex.AnimationStrategy.Loop` this will always return `false`
     *
     * See the `ex.Animation.canFinish()` method to know if an animation type can end
     */get done(){return this._done}/**
     * Jump the animation immediately to a specific frame if it exists
     * @param frameNumber
     */goToFrame(t){this._currentFrame=t,this._timeLeftInFrame=this.frameDuration;let e=this.frames[this._currentFrame];e&&!this._done&&(this._timeLeftInFrame=(null==e?void 0:e.duration)||this.frameDuration,this.events.emit("frame",{...e,frameIndex:this.currentFrameIndex}))}_nextFrame(){let t=this._currentFrame;if(this._done)return t;let e=-1;switch(this.strategy){case th.Loop:0==(e=(t+1)%this.frames.length)&&this.events.emit("loop",this);break;case th.End:(e=t+1)>=this.frames.length&&(this._done=!0,this._currentFrame=this.frames.length,this.events.emit("end",this));break;case th.Freeze:(e=eh(t+1,0,this.frames.length-1))>=this.frames.length-1&&(this._done=!0,this.events.emit("end",this));break;case th.PingPong:t+this._pingPongDirection>=this.frames.length&&(this._pingPongDirection=-1,this.events.emit("loop",this)),t+this._pingPongDirection<0&&(this._pingPongDirection=1,this.events.emit("loop",this)),e=t+this._pingPongDirection%this.frames.length}return e}/**
     * Called internally by Excalibur to update the state of the animation potential update the current frame
     * @param elapsedMilliseconds Milliseconds elapsed
     * @param idempotencyToken Prevents double ticking in a frame by passing a unique token to the frame
     */tick(t,e=0){this._idempotencyToken!==e&&(this._idempotencyToken=e,this._playing&&(this._firstTick&&(this._firstTick=!1,this.events.emit("frame",{...this.currentFrame,frameIndex:this.currentFrameIndex})),this._timeLeftInFrame-=t*this.timeScale,this._timeLeftInFrame<=0&&this.goToFrame(this._nextFrame())))}_drawImage(t,e,i){this.currentFrame&&this.currentFrame.graphic.draw(t,e,i)}}Animation._LOGGER=t7.getInstance();class rc extends eF{constructor(t){super(t),this.members=[],this.members=t.members,this._updateDimensions()}clone(){return new rc({members:[...this.members],...this.cloneGraphicOptions()})}_updateDimensions(){let t=new ey;for(let{graphic:e,pos:i}of this.members)t=e.localBounds.translate(i).combine(t);return this.width=t.width,this.height=t.height,t}get localBounds(){let t=new ey;for(let{graphic:e,pos:i}of this.members)t=e.localBounds.translate(i).combine(t);return t}_isAnimationOrGroup(t){return t instanceof Animation||t instanceof rc}tick(t,e){for(let i of this.members){let s=i.graphic;this._isAnimationOrGroup(s)&&s.tick(t,e)}}reset(){for(let t of this.members){let e=t.graphic;this._isAnimationOrGroup(e)&&e.reset()}}_preDraw(t,e,i){this._updateDimensions(),super._preDraw(t,e,i)}_drawImage(t,e,i){for(let s of this.members)t.save(),t.translate(e,i),s.graphic.draw(t,s.pos.x,s.pos.y),this.showDebug&&/* istanbul ignore next */t.debug.drawRect(0,0,this.width,this.height),t.restore()}}/**
 * Configurable helper extends base type and makes all properties available as option bag arguments
 * @internal
 * @param base
 */function ru(t){return class extends t{assign(t){//set the value of every property that was passed in,
//if the constructor previously set this value, it will be overridden here
for(let e in t)"function"!=typeof this[e]&&(this[e]=t[e])}constructor(...t){super(...t);//get the number of arguments that aren't undefined. TS passes a value to all parameters
//of whatever ctor is the implementation, so args.length doesn't work here.
let e=t.filter(function(t){return void 0!==t}).length;1!==e||!t[0]||"object"!=typeof t[0]||t[0]instanceof Array||this.assign(t[0])}}}/**
     * Constant for the circular emitter type
     */(I=tl||(tl={}))[I.Circle=0]="Circle",/**
     * Constant for the rectangular emitter type
     */I[I.Rectangle=1]="Rectangle";/**
 * @hidden
 */class rp extends sn{constructor(t,e,i,s,r,n,o,a,h,l){super(),this.position=new eg(0,0),this.velocity=new eg(0,0),this.acceleration=new eg(0,0),this.particleRotationalVelocity=0,this.currentRotation=0,this.focus=null,this.focusAccel=0,this.opacity=1,this.beginColor=ef.White,this.endColor=ef.White,// Life is counted in ms
this.life=300,this.fadeFlag=!1,// Color transitions
this._rRate=1,this._gRate=1,this._bRate=1,this._aRate=0,this._currentColor=ef.White,this.emitter=null,this.particleSize=5,this.particleSprite=null,this.sizeRate=0,this.elapsedMultiplier=0,this.visible=!0,this.isOffscreen=!1;let d=t;if(!d||t instanceof rg||(d=t.emitter,e=t.life,i=t.opacity,r=t.endColor,s=t.beginColor,n=t.position,o=t.velocity,a=t.acceleration,h=t.startSize,l=t.endSize),this.emitter=d,this.life=e||this.life,this.opacity=i||this.opacity,this.endColor=r||this.endColor.clone(),this.beginColor=s||this.beginColor.clone(),this._currentColor=this.beginColor.clone(),this.emitter.particleTransform===td.Global){let t=this.emitter.transform.globalPos;this.position=(n||this.position).add(t),this.velocity=(o||this.velocity).rotate(this.emitter.transform.globalRotation)}else this.velocity=o||this.velocity,this.position=n||this.position;this.acceleration=a||this.acceleration,this._rRate=(this.endColor.r-this.beginColor.r)/this.life,this._gRate=(this.endColor.g-this.beginColor.g)/this.life,this._bRate=(this.endColor.b-this.beginColor.b)/this.life,this._aRate=this.opacity/this.life,this.startSize=h||0,this.endSize=l||0,this.endSize>0&&this.startSize>0&&(this.sizeRate=(this.endSize-this.startSize)/this.life,this.particleSize=this.startSize),this.addComponent(this.transform=new iN),this.addComponent(this.graphics=new sl),this.transform.pos=this.position,this.transform.rotation=this.currentRotation,this.transform.scale=em(1,1),this.particleSprite?(this.graphics.opacity=this.opacity,this.graphics.use(this.particleSprite)):(this.graphics.localBounds=ey.fromDimension(this.particleSize,this.particleSize,eg.Half),this.graphics.onPostDraw=t=>{t.save(),this.graphics.opacity=this.opacity;let e=this._currentColor.clone();e.a=1,t.debug.drawPoint(em(0,0),{color:e,size:this.particleSize}),t.restore()})}kill(){this.emitter.removeParticle(this)}update(t,e){if(this.life=this.life-e,this.elapsedMultiplier=this.elapsedMultiplier+e,this.life<0&&this.kill(),this.fadeFlag&&(this.opacity=eh(this._aRate*this.life,1e-4,1)),this.startSize>0&&this.endSize>0&&(this.particleSize=eh(this.sizeRate*e+this.particleSize,Math.min(this.startSize,this.endSize),Math.max(this.startSize,this.endSize))),this._currentColor.r=eh(this._currentColor.r+this._rRate*e,0,255),this._currentColor.g=eh(this._currentColor.g+this._gRate*e,0,255),this._currentColor.b=eh(this._currentColor.b+this._bRate*e,0,255),this._currentColor.a=eh(this.opacity,1e-4,1),this.focus){let t=this.focus.sub(this.position).normalize().scale(this.focusAccel).scale(e/1e3);this.velocity=this.velocity.add(t)}else this.velocity=this.velocity.add(this.acceleration.scale(e/1e3));this.position=this.position.add(this.velocity.scale(e/1e3)),this.particleRotationalVelocity&&(this.currentRotation=(this.currentRotation+this.particleRotationalVelocity*e/1e3)%(2*Math.PI)),this.transform.pos=this.position,this.transform.rotation=this.currentRotation,this.transform.scale=em(1,1),this.graphics.opacity=this.opacity}}/**
 * Particle is used in a [[ParticleEmitter]]
 */class r_ extends ru(rp){constructor(t,e,i,s,r,n,o,a,h,l){super(t,e,i,s,r,n,o,a,h,l)}}/**
     * [[ParticleTransform.Global]] is the default and emits particles as if
     * they were world space objects, useful for most effects.
     */(M=td||(td={})).Global="global",/**
     * [[ParticleTransform.Local]] particles are children of the emitter and move relative to the emitter
     * as they would in a parent/child actor relationship.
     */M.Local="local";/**
 * Using a particle emitter is a great way to create interesting effects
 * in your game, like smoke, fire, water, explosions, etc. `ParticleEmitter`
 * extend [[Actor]] allowing you to use all of the features that come with.
 */class rg extends sL{/**
     * Gets the opacity of each particle from 0 to 1.0
     */get opacity(){return super.graphics.opacity}/**
     * Gets the opacity of each particle from 0 to 1.0
     */set opacity(t){super.graphics.opacity=t}/**
     * Gets or sets the sprite that a particle should use
     */get particleSprite(){return this._sprite}set particleSprite(t){t&&(this._sprite=t)}/**
     * @param config particle emitter options bag
     */constructor(t){var e,i;super({width:null!==(e=t.width)&&void 0!==e?e:0,height:null!==(i=t.height)&&void 0!==i?i:0}),this._particlesToEmit=0,this.numParticles=0,/**
         * Gets or sets the isEmitting flag
         */this.isEmitting=!0,/**
         * Gets or sets the backing particle collection
         */this.particles=[],/**
         * Gets or sets the backing deadParticle collection
         */this.deadParticles=[],/**
         * Gets or sets the minimum particle velocity
         */this.minVel=0,/**
         * Gets or sets the maximum particle velocity
         */this.maxVel=0,/**
         * Gets or sets the acceleration vector for all particles
         */this.acceleration=new eg(0,0),/**
         * Gets or sets the minimum angle in radians
         */this.minAngle=0,/**
         * Gets or sets the maximum angle in radians
         */this.maxAngle=0,/**
         * Gets or sets the emission rate for particles (particles/sec)
         */this.emitRate=1,/**
         * Gets or sets the life of each particle in milliseconds
         */this.particleLife=2e3,/**
         * Gets or sets the fade flag which causes particles to gradually fade out over the course of their life.
         */this.fadeFlag=!1,/**
         * Gets or sets the optional focus where all particles should accelerate towards
         */this.focus=null,/**
         * Gets or sets the acceleration for focusing particles if a focus has been specified
         */this.focusAccel=null,/**
         * Gets or sets the optional starting size for the particles
         */this.startSize=null,/**
         * Gets or sets the optional ending size for the particles
         */this.endSize=null,/**
         * Gets or sets the minimum size of all particles
         */this.minSize=5,/**
         * Gets or sets the maximum size of all particles
         */this.maxSize=5,/**
         * Gets or sets the beginning color of all particles
         */this.beginColor=ef.White,/**
         * Gets or sets the ending color of all particles
         */this.endColor=ef.White,this._sprite=null,/**
         * Gets or sets the emitter type for the particle emitter
         */this.emitterType=tl.Rectangle,/**
         * Gets or sets the emitter radius, only takes effect when the [[emitterType]] is [[EmitterType.Circle]]
         */this.radius=0,/**
         * Gets or sets the particle rotational speed velocity
         */this.particleRotationalVelocity=0,/**
         * Indicates whether particles should start with a random rotation
         */this.randomRotation=!1,/**
         * Gets or sets the emitted particle transform style, [[ParticleTransform.Global]] is the default and emits particles as if
         * they were world space objects, useful for most effects.
         *
         * If set to [[ParticleTransform.Local]] particles are children of the emitter and move relative to the emitter
         * as they would in a parent/child actor relationship.
         */this.particleTransform=td.Global;let{x:s,y:r,pos:n,isEmitting:o,minVel:a,maxVel:h,acceleration:l,minAngle:d,maxAngle:c,emitRate:u,particleLife:p,opacity:_,fadeFlag:g,focus:m,focusAccel:f,startSize:v,endSize:y,minSize:x,maxSize:w,beginColor:b,endColor:C,particleSprite:A,emitterType:S,radius:T,particleRotationalVelocity:E,particleTransform:P,randomRotation:I,random:M}={...t};this.pos=null!=n?n:em(null!=s?s:0,null!=r?r:0),this.isEmitting=null!=o?o:this.isEmitting,this.minVel=null!=a?a:this.minVel,this.maxVel=null!=h?h:this.maxVel,this.acceleration=null!=l?l:this.acceleration,this.minAngle=null!=d?d:this.minAngle,this.maxAngle=null!=c?c:this.maxAngle,this.emitRate=null!=u?u:this.emitRate,this.particleLife=null!=p?p:this.particleLife,this.opacity=null!=_?_:this.opacity,this.fadeFlag=null!=g?g:this.fadeFlag,this.focus=null!=m?m:this.focus,this.focusAccel=null!=f?f:this.focusAccel,this.startSize=null!=v?v:this.startSize,this.endSize=null!=y?y:this.endSize,this.minSize=null!=x?x:this.minSize,this.maxSize=null!=w?w:this.maxSize,this.beginColor=null!=b?b:this.beginColor,this.endColor=null!=C?C:this.endColor,this.particleSprite=null!=A?A:this.particleSprite,this.emitterType=null!=S?S:this.emitterType,this.radius=null!=T?T:this.radius,this.particleRotationalVelocity=null!=E?E:this.particleRotationalVelocity,this.randomRotation=null!=I?I:this.randomRotation,this.particleTransform=null!=P?P:this.particleTransform,this.body.collisionType=X.PreventCollision,this.random=null!=M?M:new er}removeParticle(t){this.deadParticles.push(t)}/**
     * Causes the emitter to emit particles
     * @param particleCount  Number of particles to emit right now
     */emitParticles(t){var e;for(let i=0;i<t;i++){let t=this._createParticle();this.particles.push(t),(null===(e=this===null||void 0===this?void 0:this.scene)||void 0===e?void 0:e.world)&&(this.particleTransform===td.Global?this.scene.world.add(t):this.addChild(t))}}clearParticles(){this.particles.length=0}// Creates a new particle given the constraints of the emitter
_createParticle(){// todo implement emitter constraints;
let t=0,e=0,i=ep(this.minAngle,this.maxAngle,this.random),s=ep(this.minVel,this.maxVel,this.random),r=this.startSize||ep(this.minSize,this.maxSize,this.random);if(this.emitterType===tl.Rectangle)t=ep(0,this.width,this.random),e=ep(0,this.height,this.random);else if(this.emitterType===tl.Circle){let s=ep(0,this.radius,this.random);t=s*Math.cos(i),e=s*Math.sin(i)}let n=new r_(this,this.particleLife,this.opacity,this.beginColor,this.endColor,new eg(t,e),new eg(s*Math.cos(i),s*Math.sin(i)),this.acceleration,this.startSize,this.endSize);return n.fadeFlag=this.fadeFlag,n.particleSize=r,this.particleSprite&&(n.particleSprite=this.particleSprite,n.graphics.opacity=this.opacity,n.graphics.use(this._sprite)),n.particleRotationalVelocity=this.particleRotationalVelocity,this.randomRotation&&(n.currentRotation=ep(0,2*Math.PI,this.random)),this.focus&&(n.focus=this.focus.add(new eg(this.pos.x,this.pos.y)),n.focusAccel=this.focusAccel),n}update(t,e){var i;super.update(t,e),this.isEmitting&&(this._particlesToEmit+=this.emitRate*(e/1e3),this._particlesToEmit>1&&(this.emitParticles(Math.floor(this._particlesToEmit)),this._particlesToEmit=this._particlesToEmit-Math.floor(this._particlesToEmit)));// deferred removal
for(let t=0;t<this.deadParticles.length;t++)eC(this.deadParticles[t],this.particles),(null===(i=this===null||void 0===this?void 0:this.scene)||void 0===i?void 0:i.world)&&this.scene.world.remove(this.deadParticles[t],!1);this.deadParticles.length=0}}class rm extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.graphics"],this.systemType=to.Draw,this.priority=0,this._token=0,this._sortedTransforms=[],this._zHasChanged=!1,this._zIndexUpdate=()=>{this._zHasChanged=!0}}get sortedTransforms(){return this._sortedTransforms}initialize(t){this._camera=t.camera,this._engine=t.engine}preupdate(){// Graphics context could be switched to fallback in a new frame
this._graphicsContext=this._engine.graphicsContext,this._zHasChanged&&(this._sortedTransforms.sort((t,e)=>t.z-e.z),this._zHasChanged=!1)}notify(t){if(s4(t)){let e=t.data.get(iN);this._sortedTransforms.push(e),e.zIndexChanged$.subscribe(this._zIndexUpdate),this._zHasChanged=!0}else{let e=t.data.get(iN);e.zIndexChanged$.unsubscribe(this._zIndexUpdate);let i=this._sortedTransforms.indexOf(e);i>-1&&this._sortedTransforms.splice(i,1)}}update(t,e){let i;for(let t of(this._token++,sF.checkAndClearCache(),// This is a performance enhancement, most things are in world space
// so if we can only do this once saves a ton of transform updates
this._graphicsContext.save(),this._camera&&this._camera.draw(this._graphicsContext),this._sortedTransforms)){let s=t.owner;// If the entity is offscreen skip
if(s.hasTag("ex.offscreen")||!(i=s.get(sl)).visible)continue;t.coordPlane===j.Screen&&this._graphicsContext.restore(),this._graphicsContext.save(),t.coordPlane===j.Screen&&this._graphicsContext.translate(this._engine.screen.contentArea.left,this._engine.screen.contentArea.top),// Tick any graphics state (but only once) for animations and graphics groups
i.update(e,this._token);// Apply parallax
let r=s.get(sN);if(r){// We use the Tiled formula
// https://doc.mapeditor.org/en/latest/manual/layers/#parallax-scrolling-factor
// cameraPos * (1 - parallaxFactor)
let t=eg.One.sub(r.parallaxFactor),e=this._camera.pos.scale(t);this._graphicsContext.translate(e.x,e.y)}// Position the entity + estimate lag
this._applyTransform(s),i.material&&(this._graphicsContext.material=i.material),i.onPreDraw&&i.onPreDraw(this._graphicsContext,e);// TODO remove this hack on the particle redo
let n=s instanceof r_?s.opacity:1;this._graphicsContext.opacity*=i.opacity*n,// Draw the graphics component
this._drawGraphicsComponent(i),i.onPostDraw&&i.onPostDraw(this._graphicsContext,e),this._graphicsContext.restore(),t.coordPlane===j.Screen&&(this._graphicsContext.save(),this._camera&&this._camera.draw(this._graphicsContext))}this._graphicsContext.restore()}_drawGraphicsComponent(t){var e,i;if(t.visible){let s=t.flipHorizontal,r=t.flipVertical;for(let n of t.layers.get())for(let{graphic:o,options:a}of n.graphics){let h=t.anchor,l=t.offset;(null==a?void 0:a.anchor)&&(h=a.anchor),(null==a?void 0:a.offset)&&(l=a.offset);// See https://github.com/excaliburjs/Excalibur/pull/619 for discussion on this formula
let d=-o.width*h.x+l.x,c=-o.height*h.y+l.y,u=o.flipHorizontal,p=o.flipVertical;if((s||r)&&(// flip any currently flipped graphics
o.flipHorizontal=s?!u:u,o.flipVertical=r?!p:p),null==o||o.draw(this._graphicsContext,d+n.offset.x,c+n.offset.y),(s||r)&&(o.flipHorizontal=u,o.flipVertical=p),(null===(e=this._engine)||void 0===e?void 0:e.isDebug)&&this._engine.debug.graphics.showBounds){let t=em(d+n.offset.x,c+n.offset.y);if(o instanceof rc)for(let e of o.members)null===(i=e.graphic)||void 0===i||i.localBounds.translate(t.add(e.pos)).draw(this._graphicsContext,this._engine.debug.graphics.boundsColor);else /* istanbul ignore next */null==o||o.localBounds.translate(t).draw(this._graphicsContext,this._engine.debug.graphics.boundsColor)}}}}/**
     * This applies the current entity transform to the graphics context
     * @param entity
     */_applyTransform(t){let e=t.getAncestors();for(let t of e){let e=null==t?void 0:t.get(iN),i=null==t?void 0:t.get(i8),s=e.pos,r=e.scale,n=e.rotation;if(i&&this._engine.fixedUpdateFps&&i.__oldTransformCaptured&&i.enableFixedUpdateInterpolate){// Interpolate graphics if needed
let t=this._engine.currentFrameLagMs/(1e3/this._engine.fixedUpdateFps);s=e.pos.scale(t).add(i.oldPos.scale(1-t)),r=e.scale.scale(t).add(i.oldScale.scale(1-t));// Rotational lerp https://stackoverflow.com/a/30129248
let o=(1-t)*Math.cos(i.oldRotation)+t*Math.cos(e.rotation),a=(1-t)*Math.sin(i.oldRotation)+t*Math.sin(e.rotation);n=Math.atan2(a,o)}e&&(this._graphicsContext.z=e.z,this._graphicsContext.translate(s.x,s.y),this._graphicsContext.scale(r.x,r.y),this._graphicsContext.rotate(n))}}}class rf extends s5{constructor(){super(...arguments),this.types=["ex.transform"],this.systemType=to.Draw,this.priority=999}initialize(t){this._graphicsContext=t.engine.graphicsContext,this._camera=t.camera,this._engine=t.engine,this._collisionSystem=t.world.systemManager.get(rl)}update(t,e){var i;let s,r,n,o,a,h,l,d;if(!this._engine.isDebug)return;let c=this._engine.debug.filter,u=this._engine.debug.entity,p=this._engine.debug.transform,_=this._engine.debug.motion,g=this._engine.debug.collider,m=this._engine.debug.physics,f=this._engine.debug.graphics,v=this._engine.debug.body,y=this._engine.debug.camera;for(let e of t){if(e.hasTag("offscreen")||e instanceof r_)continue;if(c.useFilter){let t=0===c.ids.length,i=t||c.ids.includes(e.id);if(!i)continue;let s=""===c.nameQuery,r=s||e.name.includes(c.nameQuery);if(!r)continue}let t=eg.Zero,m=em(0,16);if(s=e.id,r=e.name,n=e.get(iN),// This optionally sets our camera based on the entity coord plan (world vs. screen)
this._pushCameraTransform(n),this._graphicsContext.save(),this._applyTransform(e),n&&((p.showAll||p.showPosition)&&this._graphicsContext.debug.drawPoint(eg.Zero,{size:4,color:p.positionColor}),(p.showAll||p.showPositionLabel)&&(this._graphicsContext.debug.drawText(`pos${n.pos.toString(2)}`,t),t=t.add(m)),(p.showAll||p.showZIndex)&&(this._graphicsContext.debug.drawText(`z(${n.z.toFixed(1)})`,t),t=t.add(m)),(u.showAll||u.showId)&&(this._graphicsContext.debug.drawText(`id(${s}) ${e.parent?"child of id("+(null===(i=e.parent)||void 0===i?void 0:i.id)+")":""}`,t),t=t.add(m)),(u.showAll||u.showName)&&(this._graphicsContext.debug.drawText(`name(${r})`,t),t=t.add(m)),(p.showAll||p.showRotation)&&(this._graphicsContext.drawLine(eg.Zero,eg.fromAngle(n.rotation).scale(50).add(eg.Zero),p.rotationColor,2),this._graphicsContext.debug.drawText(`rot deg(${ed(n.rotation).toFixed(2)})`,t),t=t.add(m)),(p.showAll||p.showScale)&&this._graphicsContext.drawLine(eg.Zero,n.scale.add(eg.Zero),p.scaleColor,2)),(h=e.get(sl))&&(f.showAll||f.showBounds)){let t=h.localBounds;t.draw(this._graphicsContext,f.boundsColor)}if((l=e.get(s$))&&(l.useTransform||this._graphicsContext.restore(),l.draw(this._graphicsContext),l.useTransform||(this._graphicsContext.save(),this._applyTransform(e))),(d=e.get(i8))&&((v.showAll||v.showCollisionGroup)&&(this._graphicsContext.debug.drawText(`collision group(${d.group.name})`,t),t=t.add(m)),(v.showAll||v.showCollisionType)&&(this._graphicsContext.debug.drawText(`collision type(${d.collisionType})`,t),t=t.add(m)),(v.showAll||v.showMass)&&(this._graphicsContext.debug.drawText(`mass(${d.mass})`,t),t=t.add(m)),(v.showAll||v.showMotion)&&(this._graphicsContext.debug.drawText(`motion(${d.sleepMotion})`,t),t=t.add(m)),(v.showAll||v.showSleeping)&&(this._graphicsContext.debug.drawText(`sleeping(${d.canSleep?d.sleeping:"cant sleep"})`,t),t=t.add(m))),this._graphicsContext.restore(),(o=e.get(i$))&&((_.showAll||_.showVelocity)&&(this._graphicsContext.debug.drawText(`vel${o.vel.toString(2)}`,t.add(n.globalPos)),this._graphicsContext.drawLine(n.globalPos,n.globalPos.add(o.vel),_.velocityColor,2),t=t.add(m)),(_.showAll||_.showAcceleration)&&this._graphicsContext.drawLine(n.globalPos,n.globalPos.add(o.acc),_.accelerationColor,2)),// Colliders live in world space already so after the restore()
a=e.get(i7)){let t=a.get();if((g.showAll||g.showGeometry)&&t&&t.debug(this._graphicsContext,g.geometryColor),g.showAll||g.showBounds){if(t instanceof ij){let e=t.getColliders();for(let t of e){let e=t.bounds,i=em(e.left,e.top);this._graphicsContext.debug.drawRect(i.x,i.y,e.width,e.height,{color:g.boundsColor}),(g.showAll||g.showOwner)&&this._graphicsContext.debug.drawText(`owner id(${t.owner.id})`,i)}a.bounds.draw(this._graphicsContext,g.boundsColor)}else if(t){let t=a.bounds,e=em(t.left,t.top);this._graphicsContext.debug.drawRect(e.x,e.y,t.width,t.height,{color:g.boundsColor}),(g.showAll||g.showOwner)&&this._graphicsContext.debug.drawText(`owner id(${a.owner.id})`,e)}}}this._popCameraTransform(n)}if(this._graphicsContext.save(),this._camera.draw(this._graphicsContext),(m.showAll||m.showBroadphaseSpacePartitionDebug)&&this._collisionSystem.debug(this._graphicsContext),m.showAll||m.showCollisionContacts||m.showCollisionNormals)for(let[t,e]of this._engine.debug.stats.currFrame.physics.contacts){if(m.showAll||m.showCollisionContacts)for(let t of e.points)this._graphicsContext.debug.drawPoint(t,{size:5,color:m.collisionContactColor});if(m.showAll||m.showCollisionNormals)for(let t of e.points)this._graphicsContext.debug.drawLine(t,e.normal.scale(30).add(t),{color:m.collisionNormalColor})}this._graphicsContext.restore(),y&&(this._graphicsContext.save(),this._camera.draw(this._graphicsContext),(y.showAll||y.showFocus)&&this._graphicsContext.drawCircle(this._camera.pos,4,y.focusColor),(y.showAll||y.showZoom)&&this._graphicsContext.debug.drawText(`zoom(${this._camera.zoom})`,this._camera.pos),this._graphicsContext.restore()),this._graphicsContext.flush()}/**
     * This applies the current entity transform to the graphics context
     * @param entity
     */_applyTransform(t){let e=t.getAncestors();for(let t of e){let e=null==t?void 0:t.get(iN);e&&(this._graphicsContext.translate(e.pos.x,e.pos.y),this._graphicsContext.scale(e.scale.x,e.scale.y),this._graphicsContext.rotate(e.rotation))}}/**
     * Applies the current camera transform if in world coordinates
     * @param transform
     */_pushCameraTransform(t){// Establish camera offset per entity
t.coordPlane===j.World&&(this._graphicsContext.save(),this._camera&&this._camera.draw(this._graphicsContext))}/**
     * Resets the current camera transform if in world coordinates
     * @param transform
     */_popCameraTransform(t){t.coordPlane===j.World&&this._graphicsContext.restore()}}/**
 * The PointerSystem is responsible for dispatching pointer events to entities
 * that need them.
 *
 * The PointerSystem can be optionally configured by the [[PointerComponent]], by default Entities use
 * the [[Collider]]'s shape for pointer events.
 */class rv extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.pointer"],this.systemType=to.Update,this.priority=-1,/**
         * Optionally override component configuration for all entities
         */this.overrideUseColliderShape=!1,/**
         * Optionally override component configuration for all entities
         */this.overrideUseGraphicsBounds=!1,this.lastFrameEntityToPointers=new Map,this.currentFrameEntityToPointers=new Map,this._sortedTransforms=[],this._sortedEntities=[],this._zHasChanged=!1,this._zIndexUpdate=()=>{this._zHasChanged=!0}}initialize(t){this._engine=t.engine}preupdate(){// event receiver might change per frame
this._receiver=this._engine.input.pointers,this._zHasChanged&&(this._sortedTransforms.sort((t,e)=>e.z-t.z),this._sortedEntities=this._sortedTransforms.map(t=>t.owner),this._zHasChanged=!1)}notify(t){if(s4(t)){let e=t.data.get(iN);this._sortedTransforms.push(e),this._sortedEntities.push(e.owner),e.zIndexChanged$.subscribe(this._zIndexUpdate),this._zHasChanged=!0}else{let e=t.data.get(iN);e.zIndexChanged$.unsubscribe(this._zIndexUpdate);let i=this._sortedTransforms.indexOf(e);i>-1&&(this._sortedTransforms.splice(i,1),this._sortedEntities.splice(i,1))}}entityCurrentlyUnderPointer(t,e){return this.currentFrameEntityToPointers.has(t.id)&&this.currentFrameEntityToPointers.get(t.id).includes(e)}entityWasUnderPointer(t,e){return this.lastFrameEntityToPointers.has(t.id)&&this.lastFrameEntityToPointers.get(t.id).includes(e)}entered(t,e){return this.entityCurrentlyUnderPointer(t,e)&&!this.lastFrameEntityToPointers.has(t.id)}left(t,e){return!this.currentFrameEntityToPointers.has(t.id)&&this.entityWasUnderPointer(t,e)}addPointerToEntity(t,e){if(!this.currentFrameEntityToPointers.has(t.id)){this.currentFrameEntityToPointers.set(t.id,[e]);return}let i=this.currentFrameEntityToPointers.get(t.id);this.currentFrameEntityToPointers.set(t.id,i.concat(e))}update(t){// Locate all the pointer/entity mappings
this._processPointerToEntity(this._sortedEntities),// Dispatch pointer events on entities
this._dispatchEvents(this._sortedEntities),// Clear last frame's events
this._receiver.update(),this.lastFrameEntityToPointers.clear(),this.lastFrameEntityToPointers=new Map(this.currentFrameEntityToPointers),this.currentFrameEntityToPointers.clear(),this._receiver.clear()}_processPointerToEntity(t){var e;let i,s,r,n;// TODO probably a spatial partition optimization here to quickly query bounds for pointer
// doesn't seem to cause issues tho for perf
// Pre-process find entities under pointers
for(let o of t){if(i=o.get(iN),n=null!==(e=o.get(su))&&void 0!==e?e:new su,// Check collider contains pointer
(s=o.get(i7))&&(n.useColliderShape||this.overrideUseColliderShape)){s.update();let t=s.get();if(t)for(let[e,s]of this._receiver.currentFramePointerCoords.entries())t.contains(i.coordPlane===j.World?s.worldPos:s.screenPos)&&this.addPointerToEntity(o,e)}if(// Check graphics contains pointer
(r=o.get(sl))&&(n.useGraphicsBounds||this.overrideUseGraphicsBounds)){let t=r.localBounds.transform(i.get().matrix);for(let[e,s]of this._receiver.currentFramePointerCoords.entries())t.contains(i.coordPlane===j.World?s.worldPos:s.screenPos)&&this.addPointerToEntity(o,e)}}}_processDownAndEmit(t){let e=new Map;// Loop through down and dispatch to entities
for(let i of this._receiver.currentFrameDown)i.active&&t.active&&this.entityCurrentlyUnderPointer(t,i.pointerId)&&(t.events.emit("pointerdown",i),this._receiver.isDragStart(i.pointerId)&&t.events.emit("pointerdragstart",i)),e.set(i.pointerId,i);return e}_processUpAndEmit(t){let e=new Map;// Loop through up and dispatch to entities
for(let i of this._receiver.currentFrameUp)i.active&&t.active&&this.entityCurrentlyUnderPointer(t,i.pointerId)&&(t.events.emit("pointerup",i),this._receiver.isDragEnd(i.pointerId)&&t.events.emit("pointerdragend",i)),e.set(i.pointerId,i);return e}_processMoveAndEmit(t){let e=new Map;// Loop through move and dispatch to entities
for(let i of this._receiver.currentFrameMove)i.active&&t.active&&this.entityCurrentlyUnderPointer(t,i.pointerId)&&(// move
t.events.emit("pointermove",i),this._receiver.isDragging(i.pointerId)&&t.events.emit("pointerdragmove",i)),e.set(i.pointerId,i);return e}_processEnterLeaveAndEmit(t,e){// up, down, and move are considered for enter and leave
for(let i of e){// enter
if(i.active&&t.active&&this.entered(t,i.pointerId)){t.events.emit("pointerenter",i),this._receiver.isDragging(i.pointerId)&&t.events.emit("pointerdragenter",i);break}if(i.active&&t.active&&// leave can happen on move
(this.left(t,i.pointerId)||// or leave can happen on pointer up
this.entityCurrentlyUnderPointer(t,i.pointerId)&&"up"===i.type)){t.events.emit("pointerleave",i),this._receiver.isDragging(i.pointerId)&&t.events.emit("pointerdragleave",i);break}}}_processCancelAndEmit(t){// cancel
for(let e of this._receiver.currentFrameCancel)e.active&&t.active&&this.entityCurrentlyUnderPointer(t,e.pointerId)&&t.events.emit("pointercancel",e)}_processWheelAndEmit(t){// wheel
for(let e of this._receiver.currentFrameWheel)e.active&&t.active&&this.entityCurrentlyUnderPointer(t,0)&&t.events.emit("pointerwheel",e)}_dispatchEvents(t){let e,i,s;let r=new Set(this.lastFrameEntityToPointers.keys()),n=new Set(this.currentFrameEntityToPointers.keys()),o=t.filter(t=>r.has(t.id)||n.has(t.id));// Dispatch events in entity z order
for(let t of o){s=this._processDownAndEmit(t),i=this._processUpAndEmit(t),e=this._processMoveAndEmit(t);let r=[...e.values(),...s.values(),...i.values()];this._processEnterLeaveAndEmit(t,r),this._processCancelAndEmit(t),this._processWheelAndEmit(t)}}}class ry extends s5{constructor(){super(...arguments),this.types=["ex.actions"],this.systemType=to.Update,this.priority=-1,this._actions=[]}notify(t){if(s4(t)){let e=t.data.get(sD);this._actions.push(e)}else{let e=t.data.get(sD),i=this._actions.indexOf(e);i>-1&&this._actions.splice(i,1)}}update(t,e){for(let t of this._actions)t.update(e)}}class rx extends iz{/**
     * Specify the isometric map to use to position this entity's z-index
     * @param map
     */constructor(t){super(),this.type="ex.isometricentity",/**
         * Vertical "height" in the isometric world
         */this.elevation=0,this.map=t}}class rw extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.isometricentity"],this.systemType=to.Update,this.priority=99}update(t,e){let i,s;for(let e of t){i=e.get(iN),s=e.get(rx);let t=Math.max(s.map.columns*s.map.tileWidth,s.map.rows*s.map.tileHeight),r=t*s.elevation+i.pos.y;i.z=r}}}class rb extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.graphics"],this.systemType=to.Draw,this.priority=-1}initialize(t){this._camera=t.camera,this._screen=t.engine.screen}update(t){let e,i,s;for(let r of(this._worldBounds=this._screen.getWorldBounds(),t)){let t;if(i=r.get(sl),e=r.get(iN),s=r.get(sN)){// We use the Tiled formula
// https://doc.mapeditor.org/en/latest/manual/layers/#parallax-scrolling-factor
// cameraPos * (1 - parallaxFactor)
let e=eg.One.sub(s.parallaxFactor);t=this._camera.pos.scale(e)}// Figure out if entities are offscreen
let n=this._isOffscreen(e,i,t);n&&!r.hasTag("ex.offscreen")&&(r.events.emit("exitviewport",new t5(r)),r.addTag("ex.offscreen")),!n&&r.hasTag("ex.offscreen")&&(r.events.emit("enterviewport",new t3(r)),r.removeTag("ex.offscreen"))}}_isOffscreen(t,e,i){if(t.coordPlane!==j.World)return!1;{let s=e.localBounds;i&&(s=s.translate(i));let r=s.transform(t.get().matrix),n=!this._worldBounds.overlaps(r);return n}}}class rC{constructor(){this.collisionProcessor=new iK}rayCast(t,e){return this.collisionProcessor.rayCast(t,e)}}let rA={Initialize:"initialize",Activate:"activate",Deactivate:"deactivate",PreUpdate:"preupdate",PostUpdate:"postupdate",PreDraw:"predraw",PostDraw:"postdraw",PreDebugDraw:"predebugdraw",PostDebugDraw:"postdebugdraw"};/**
 * [[Actor|Actors]] are composed together into groupings called Scenes in
 * Excalibur. The metaphor models the same idea behind real world
 * actors in a scene. Only actors in scenes will be updated and drawn.
 *
 * Typical usages of a scene include: levels, menus, loading screens, etc.
 */class rS{/**
     * The actors in the current scene
     */get actors(){return this.world.entityManager.entities.filter(t=>t instanceof sL)}/**
     * The entities in the current scene
     */get entities(){return this.world.entityManager.entities}/**
     * The triggers in the current scene
     */get triggers(){return this.world.entityManager.entities.filter(t=>t instanceof s2)}/**
     * The [[TileMap]]s in the scene, if any
     */get tileMaps(){return this.world.entityManager.entities.filter(t=>t instanceof sV)}get timers(){return this._timers}constructor(){// Initialize systems
this._logger=t7.getInstance(),this.events=new tS,/**
         * Gets or sets the current camera for the scene
         */this.camera=new sJ,/**
         * The ECS world for the scene
         */this.world=new rs(this),/**
         * The Excalibur physics world for the scene. Used to interact
         * with colliders included in the scene.
         *
         * Can be used to perform scene ray casts, track colliders, broadphase, and narrowphase.
         */this.physics=new rC,this._isInitialized=!1,this._timers=[],this._cancelQueue=[],// Update
this.world.add(new ry),this.world.add(new rn),this.world.add(new rl(this.physics)),this.world.add(new rv),this.world.add(new rw),// Draw
this.world.add(new rb),this.world.add(new rm),this.world.add(new rf)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * This is called before the first update of the [[Scene]]. Initializes scene members like the camera. This method is meant to be
     * overridden. This is where initialization of child actors should take place.
     */onInitialize(t){// will be overridden
}/**
     * This is called when the scene is made active and started. It is meant to be overridden,
     * this is where you should setup any DOM UI or event handlers needed for the scene.
     */onActivate(t){// will be overridden
}/**
     * This is called when the scene is made transitioned away from and stopped. It is meant to be overridden,
     * this is where you should cleanup any DOM UI or event handlers needed for the scene.
     */onDeactivate(t){// will be overridden
}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before a scene is updated.
     */onPreUpdate(t,e){// will be overridden
}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after a scene is updated.
     */onPostUpdate(t,e){// will be overridden
}/**
     * Safe to override onPreDraw lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreDraw` is called directly before a scene is drawn.
     *
     */onPreDraw(t,e){// will be overridden
}/**
     * Safe to override onPostDraw lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostDraw` is called directly after a scene is drawn.
     *
     */onPostDraw(t,e){// will be overridden
}/**
     * Initializes actors in the scene
     */_initializeChildren(){for(let t of this.entities)t._initialize(this.engine)}/**
     * Gets whether or not the [[Scene]] has been initialized
     */get isInitialized(){return this._isInitialized}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Initializes the scene before the first update, meant to be called by engine not by users of
     * Excalibur
     * @internal
     */_initialize(t){this.isInitialized||(this.engine=t,// Initialize camera first
this.camera._initialize(t),this.world.systemManager.initialize(),// This order is important! we want to be sure any custom init that add actors
// fire before the actor init
this.onInitialize.call(this,t),this._initializeChildren(),this._logger.debug("Scene.onInitialize",this,t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Activates the scene with the base behavior, then calls the overridable `onActivate` implementation.
     * @internal
     */_activate(t){this._logger.debug("Scene.onActivate",this),this.onActivate(t)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Deactivates the scene with the base behavior, then calls the overridable `onDeactivate` implementation.
     * @internal
     */_deactivate(t){this._logger.debug("Scene.onDeactivate",this),this.onDeactivate(t)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.emit("preupdate",new tU(t,e,this)),this.onPreUpdate(t,e)}/**
     *  It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _predraw handler for [[onPreDraw]] lifecycle event
     *
     * @internal
     */_predraw(t,e){this.emit("predraw",new tR(t,e,this)),this.onPreDraw(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _postdraw handler for [[onPostDraw]] lifecycle event
     *
     * @internal
     */_postdraw(t,e){this.emit("postdraw",new tD(t,e,this)),this.onPostDraw(t,e)}/**
     * Updates all the actors and timers in the scene. Called by the [[Engine]].
     * @param engine  Reference to the current Engine
     * @param delta   The number of milliseconds since the last update
     */update(t,e){let i,s;// Remove timers in the cancel queue before updating them
for(this._preupdate(t,e),i=0,s=this._cancelQueue.length;i<s;i++)this.removeTimer(this._cancelQueue[i]);// Cycle through timers updating timers
for(let t of(this._cancelQueue.length=0,this._timers))t.update(e);this.world.update(to.Update,e),this.camera&&this.camera.update(t,e),this._collectActorStats(t),this._postupdate(t,e)}/**
     * Draws all the actors in the Scene. Called by the [[Engine]].
     *
     * @param ctx    The current rendering context
     * @param delta  The number of milliseconds since the last draw
     */draw(t,e){var i;this._predraw(t,e),this.world.update(to.Draw,e),(null===(i=this.engine)||void 0===i?void 0:i.isDebug)&&this.debugDraw(t),this._postdraw(t,e)}/**
     * Draws all the actors' debug information in the Scene. Called by the [[Engine]].
     * @param ctx  The current rendering context
     *//* istanbul ignore next */debugDraw(t){this.emit("predebugdraw",new tB(t,this)),// pass
this.emit("postdebugdraw",new tF(t,this))}/**
     * Checks whether an actor is contained in this scene or not
     */contains(t){return this.actors.indexOf(t)>-1}add(t){if(this.emit("entityadded",{target:t}),this.world.add(t),t.scene=this,t instanceof sH){eA(this._timers,t)||this.addTimer(t);return}}/**
     * Removes an [[Entity]] (Actor, TileMap, Trigger, etc) or [[Timer]] from it's current scene
     * and adds it to this scene.
     *
     * Useful if you want to have an object be present in only 1 scene at a time.
     * @param entity
     */transfer(t){let e;t instanceof sn&&t.scene&&t.scene!==this&&(e=t.scene,t.scene.world.remove(t,!1)),t instanceof sH&&t.scene&&(e=t.scene,t.scene.removeTimer(t)),null==e||e.emit("entityremoved",{target:t}),this.add(t)}remove(t){t instanceof sn&&(this.emit("entityremoved",{target:t}),t.active&&t.kill(),this.world.remove(t)),t instanceof sH&&this.removeTimer(t)}/**
     * Removes all entities and timers from the scene, optionally indicate whether deferred should or shouldn't be used.
     *
     * By default entities use deferred removal
     * @param deferred
     */clear(t=!0){for(let e of this.entities)this.world.remove(e,t);for(let t of this.timers)this.removeTimer(t)}/**
     * Adds a [[Timer]] to the scene
     * @param timer  The timer to add
     */addTimer(t){return this._timers.push(t),t.scene=this,t}/**
     * Removes a [[Timer]] from the scene.
     * @warning Can be dangerous, use [[cancelTimer]] instead
     * @param timer  The timer to remove
     */removeTimer(t){let e=this._timers.indexOf(t);return -1!==e&&this._timers.splice(e,1),t}/**
     * Cancels a [[Timer]], removing it from the scene nicely
     * @param timer  The timer to cancel
     */cancelTimer(t){return this._cancelQueue.push(t),t}/**
     * Tests whether a [[Timer]] is active in the scene
     */isTimerActive(t){return this._timers.indexOf(t)>-1&&!t.complete}isCurrentScene(){return!!this.engine&&this.engine.currentScene===this}_collectActorStats(t){let e=this.actors.filter(t=>t instanceof sO);for(let i of e)t.stats.currFrame.actors.ui++;for(let e of this.actors)for(let i of(t.stats.currFrame.actors.alive++,e.children))sz(i)?t.stats.currFrame.actors.ui++:t.stats.currFrame.actors.alive++}}(k=tc||(tc={})).Protanope="Protanope",k.Deuteranope="Deuteranope",k.Tritanope="Tritanope";/**
 * Helper that defines a whole screen renderer, just provide a fragment source!
 *
 * Currently supports 1 varying
 * - vec2 a_texcoord between 0-1 which corresponds to screen position
 */class rT{constructor(t,e){this._shader=new eX({gl:t,vertexSource:`#version 300 es
      in vec2 a_position;
      in vec2 a_texcoord;
      out vec2 v_texcoord;

      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        // Pass the texcoord to the fragment shader.
        v_texcoord = a_texcoord;
      }`,fragmentSource:e}),this._shader.compile(),// Setup memory layout
this._buffer=new eZ({gl:t,type:"static",// clip space quad + uv since we don't need a camera
data:new Float32Array([-1,-1,0,0,-1,1,0,1,1,-1,1,0,1,-1,1,0,-1,1,0,1,1,1,1,1])}),this._layout=new eK({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_texcoord",2]]}),this._buffer.upload()}getShader(){return this._shader}getLayout(){return this._layout}}class rE{constructor(t,e=!1){this._colorBlindnessMode=t,this._simulate=!1,this._simulate=e}initialize(t){this._shader=new rT(t,"#version 300 es\r\nprecision mediump float;\r\n// our texture\r\nuniform sampler2D u_image;\r\n// the texCoords passed in from the vertex shader.\r\nin vec2 v_texcoord;\r\n\r\n// color blind type\r\nuniform int u_type;\r\n\r\n// simulation?\r\nuniform bool u_simulate;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  vec4 o =  texture(u_image, v_texcoord);\r\n  // RGB to LMS matrix conversion\r\n  float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);\r\n  float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);\r\n  float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);\r\n  // Simulate color blindness\r\n  float l;\r\n  float m;\r\n  float s;\r\n  //MODE CODE//\r\n  if (u_type == 0) {\r\n    // Protanope\r\n    l = 0.0 * L + 2.02344 * M + -2.52581 * S;\r\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\r\n    s = 0.0 * L + 0.0 * M + 1.0 * S;;\r\n  } else if (u_type == 1) {\r\n    // Deuteranope\r\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\r\n    m = 0.494207 * L + 0.0 * M + 1.24827 * S;\r\n    s = 0.0 * L + 0.0 * M + 1.0 * S;\r\n  } else if (u_type == 2) {\r\n    // Tritanope\r\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\r\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\r\n    s = -0.395913 * L + 0.801109 * M + 0.0 * S;\r\n  }\r\n\r\n  // LMS to RGB matrix conversion\r\n  vec4 error; // simulate the colors\r\n  error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);\r\n  error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);\r\n  error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);\r\n  error.a = 1.0;\r\n  vec4 diff = o - error;\r\n  vec4 correction; // correct the colors\r\n  correction.r = 0.0;\r\n  correction.g =  (diff.r * 0.7) + (diff.g * 1.0);\r\n  correction.b =  (diff.r * 0.7) + (diff.b * 1.0);\r\n  correction = o + correction;\r\n  correction.a = o.a;\r\n  //SIMULATE//\r\n\r\n  // sim \r\n  if (u_simulate) {\r\n    fragColor = error.rgba;\r\n  } else {\r\n    fragColor = correction.rgba;\r\n  }\r\n}"),this.simulate=this._simulate,this.colorBlindnessMode=this._colorBlindnessMode}getShader(){return this._shader.getShader()}getLayout(){return this._shader.getLayout()}set colorBlindnessMode(t){if(this._colorBlindnessMode=t,this._shader){let t=this._shader.getShader();t.use(),this._colorBlindnessMode===tc.Protanope?t.setUniformInt("u_type",0):this._colorBlindnessMode===tc.Deuteranope?t.setUniformInt("u_type",1):this._colorBlindnessMode===tc.Tritanope&&t.setUniformInt("u_type",2)}}get colorBlindnessMode(){return this._colorBlindnessMode}set simulate(t){if(this._simulate=t,this._shader){let e=this._shader.getShader();e.use(),e.setUniformBoolean("u_simulate",t)}}get simulate(){return this._simulate}}class rP{constructor(t){this._engine=t,this._colorBlindPostProcessor=new rE(tc.Protanope)}/**
     * Correct colors for a specified color blindness
     * @param colorBlindness
     */correct(t){this._engine.graphicsContext instanceof ie&&(this.clear(),this._colorBlindPostProcessor.colorBlindnessMode=t,this._colorBlindPostProcessor.simulate=!1,this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor))}/**
     * Simulate colors for a specified color blindness
     * @param colorBlindness
     */simulate(t){this._engine.graphicsContext instanceof ie&&(this.clear(),this._colorBlindPostProcessor.colorBlindnessMode=t,this._colorBlindPostProcessor.simulate=!0,this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor))}/**
     * Remove color blindness post processor
     */clear(){this._engine.graphicsContext.removePostProcessor(this._colorBlindPostProcessor)}}/**
 * Debug statistics and flags for Excalibur. If polling these values, it would be
 * best to do so on the `postupdate` event for [[Engine]], after all values have been
 * updated during a frame.
 */class rI{constructor(t){/**
         * Performance statistics
         */this.stats={/**
             * Current frame statistics. Engine reuses this instance, use [[FrameStats.clone]] to copy frame stats.
             * Best accessed on [[postframe]] event. See [[FrameStats]]
             */currFrame:new rM,/**
             * Previous frame statistics. Engine reuses this instance, use [[FrameStats.clone]] to copy frame stats.
             * Best accessed on [[preframe]] event. Best inspected on engine event `preframe`. See [[FrameStats]]
             */prevFrame:new rM},/**
         * Filter debug context to named entities or entity ids
         */this.filter={/**
             * Toggle filter on or off (default off) must be on for DebugDraw to use filters
             */useFilter:!1,/**
             * Query for entities by name, if the entity name contains `nameQuery` it will be included
             */nameQuery:"",/**
             * Query for Entity ids, if the id matches it will be included
             */ids:[]},/**
         * Entity debug settings
         */this.entity={showAll:!1,showId:!0,showName:!1},/**
         * Transform component debug settings
         */this.transform={showAll:!1,showPosition:!1,showPositionLabel:!1,positionColor:ef.Yellow,showZIndex:!1,showScale:!1,scaleColor:ef.Green,showRotation:!1,rotationColor:ef.Blue},/**
         * Graphics component debug settings
         */this.graphics={showAll:!1,showBounds:!0,boundsColor:ef.Yellow},/**
         * Collider component debug settings
         */this.collider={showAll:!1,showBounds:!0,boundsColor:ef.Blue,showOwner:!1,showGeometry:!0,geometryColor:ef.Green},/**
         * Physics simulation debug settings
         */this.physics={showAll:!1,showBroadphaseSpacePartitionDebug:!1,showCollisionNormals:!1,collisionNormalColor:ef.Cyan,showCollisionContacts:!0,collisionContactColor:ef.Red},/**
         * Motion component debug settings
         */this.motion={showAll:!1,showVelocity:!1,velocityColor:ef.Yellow,showAcceleration:!1,accelerationColor:ef.Red},/**
         * Body component debug settings
         */this.body={showAll:!1,showCollisionGroup:!1,showCollisionType:!1,showSleeping:!1,showMotion:!1,showMass:!1},/**
         * Camera debug settings
         */this.camera={showAll:!1,showFocus:!1,focusColor:ef.Red,showZoom:!1},this._engine=t,this.colorBlindMode=new rP(this._engine)}/**
     * Switch the current excalibur clock with the [[TestClock]] and return
     * it in the same running state.
     *
     * This is useful when you need to debug frame by frame.
     */useTestClock(){let t=this._engine.clock,e=t.isRunning();t.stop();let i=t.toTestClock();return e&&i.start(),this._engine.clock=i,i}/**
     * Switch the current excalibur clock with the [[StandardClock]] and
     * return it in the same running state.
     *
     * This is useful when you need to switch back to normal mode after
     * debugging.
     */useStandardClock(){let t=this._engine.clock,e=t.isRunning();t.stop();let i=t.toStandardClock();return e&&i.start(),this._engine.clock=i,i}}/**
 * Implementation of a frame's stats. Meant to have values copied via [[FrameStats.reset]], avoid
 * creating instances of this every frame.
 */class rM{constructor(){this._id=0,this._delta=0,this._fps=0,this._actorStats={alive:0,killed:0,ui:0,get remaining(){return this.alive-this.killed},get total(){return this.remaining+this.ui}},this._durationStats={update:0,draw:0,get total(){return this.update+this.draw}},this._physicsStats=new rk,this._graphicsStats={drawCalls:0,drawnImages:0}}/**
     * Zero out values or clone other IFrameStat stats. Allows instance reuse.
     *
     * @param [otherStats] Optional stats to clone
     */reset(t){t?(this.id=t.id,this.delta=t.delta,this.fps=t.fps,this.actors.alive=t.actors.alive,this.actors.killed=t.actors.killed,this.actors.ui=t.actors.ui,this.duration.update=t.duration.update,this.duration.draw=t.duration.draw,this._physicsStats.reset(t.physics),this.graphics.drawCalls=t.graphics.drawCalls,this.graphics.drawnImages=t.graphics.drawnImages):(this.id=this.delta=this.fps=0,this.actors.alive=this.actors.killed=this.actors.ui=0,this.duration.update=this.duration.draw=0,this._physicsStats.reset(),this.graphics.drawnImages=this.graphics.drawCalls=0)}/**
     * Provides a clone of this instance.
     */clone(){let t=new rM;return t.reset(this),t}/**
     * Gets the frame's id
     */get id(){return this._id}/**
     * Sets the frame's id
     */set id(t){this._id=t}/**
     * Gets the frame's delta (time since last frame)
     */get delta(){return this._delta}/**
     * Sets the frame's delta (time since last frame). Internal use only.
     * @internal
     */set delta(t){this._delta=t}/**
     * Gets the frame's frames-per-second (FPS)
     */get fps(){return this._fps}/**
     * Sets the frame's frames-per-second (FPS). Internal use only.
     * @internal
     */set fps(t){this._fps=t}/**
     * Gets the frame's actor statistics
     */get actors(){return this._actorStats}/**
     * Gets the frame's duration statistics
     */get duration(){return this._durationStats}/**
     * Gets the frame's physics statistics
     */get physics(){return this._physicsStats}/**
     * Gets the frame's graphics statistics
     */get graphics(){return this._graphicsStats}}class rk{constructor(){this._pairs=0,this._collisions=0,this._contacts=new Map,this._fastBodies=0,this._fastBodyCollisions=0,this._broadphase=0,this._narrowphase=0}/**
     * Zero out values or clone other IPhysicsStats stats. Allows instance reuse.
     *
     * @param [otherStats] Optional stats to clone
     */reset(t){t?(this.pairs=t.pairs,this.collisions=t.collisions,this.contacts=t.contacts,this.fastBodies=t.fastBodies,this.fastBodyCollisions=t.fastBodyCollisions,this.broadphase=t.broadphase,this.narrowphase=t.narrowphase):(this.pairs=this.collisions=this.fastBodies=0,this.fastBodyCollisions=this.broadphase=this.narrowphase=0,this.contacts.clear())}/**
     * Provides a clone of this instance.
     */clone(){let t=new rk;return t.reset(this),t}get pairs(){return this._pairs}set pairs(t){this._pairs=t}get collisions(){return this._collisions}set collisions(t){this._collisions=t}get contacts(){return this._contacts}set contacts(t){this._contacts=t}get fastBodies(){return this._fastBodies}set fastBodies(t){this._fastBodies=t}get fastBodyCollisions(){return this._fastBodyCollisions}set fastBodyCollisions(t){this._fastBodyCollisions=t}get broadphase(){return this._broadphase}set broadphase(t){this._broadphase=t}get narrowphase(){return this._narrowphase}set narrowphase(t){this._narrowphase=t}}class rR{on(t,e){this._nativeHandlers[t]&&this.off(t,this._nativeHandlers[t]),this._nativeHandlers[t]=this._decorate(e),this.nativeComponent.addEventListener(t,this._nativeHandlers[t])}off(t,e){e||(e=this._nativeHandlers[t]),this.nativeComponent.removeEventListener(t,e),this._nativeHandlers[t]=null}_decorate(t){return e=>{this._paused||t(e)}}pause(){this._paused=!0}resume(){this._paused=!1}clear(){for(let t in this._nativeHandlers)this.off(t)}constructor(t){this.nativeComponent=t,this._paused=!1,this._nativeHandlers={}}}class rD{constructor(t,e){this._windowGlobal=t,this._documentGlobal=e,this._windowComponent=new rR(this._windowGlobal),this._documentComponent=new rR(this._documentGlobal)}get window(){return this._windowComponent}get document(){return this._documentComponent}pause(){this.window.pause(),this.document.pause()}resume(){this.window.resume(),this.document.resume()}clear(){this.window.clear(),this.document.clear()}}class rB{static fromPagePosition(t,e,i){let s,r;3==arguments.length?(s=new eg(t,e),r=i):((s=t).x,s.y,r=e);let n=r.screen.pageToScreenCoordinates(s),o=r.screen.screenToWorldCoordinates(n);return new rB(o,s,n)}constructor(t,e,i){this.worldPos=t,this.pagePos=e,this.screenPos=i}}class PointerEvent{cancel(){this.active=!1}get pagePos(){return this.coordinates.pagePos}get screenPos(){return this.coordinates.screenPos}get worldPos(){return this.coordinates.worldPos}constructor(t,e,i,s,r,n){this.type=t,this.pointerId=e,this.button=i,this.pointerType=s,this.coordinates=r,this.nativeEvent=n,this.active=!0}}class WheelEvent{cancel(){this.active=!1}constructor(t,e,i,s,r,n,o,a,h,l,d,c){this.x=t,this.y=e,this.pageX=i,this.pageY=s,this.screenX=r,this.screenY=n,this.index=o,this.deltaX=a,this.deltaY=h,this.deltaZ=l,this.deltaMode=d,this.ev=c,this.active=!0}}class rF{constructor(){this.events=new tS,/**
         * The last position on the document this pointer was at. Can be `null` if pointer was never active.
         */this.lastPagePos=eg.Zero,/**
         * The last position on the screen this pointer was at. Can be `null` if pointer was never active.
         */this.lastScreenPos=eg.Zero,/**
         * The last position in the game world coordinates this pointer was at. Can be `null` if pointer was never active.
         */this.lastWorldPos=eg.Zero,this._onPointerMove=t=>{this.lastPagePos=new eg(t.pagePos.x,t.pagePos.y),this.lastScreenPos=new eg(t.screenPos.x,t.screenPos.y),this.lastWorldPos=new eg(t.worldPos.x,t.worldPos.y)},this._onPointerDown=t=>{this.lastPagePos=new eg(t.pagePos.x,t.pagePos.y),this.lastScreenPos=new eg(t.screenPos.x,t.screenPos.y),this.lastWorldPos=new eg(t.worldPos.x,t.worldPos.y)},this.on("move",this._onPointerMove),this.on("down",this._onPointerDown)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}(R=tu||(tu={})).Pixel="Pixel",R.Line="Line",R.Page="Page",(D=tp||(tp={}))[D.NoButton=-1]="NoButton",D[D.Left=0]="Left",D[D.Middle=1]="Middle",D[D.Right=2]="Right",D[D.Unknown=3]="Unknown",(B=t_||(t_={})).Left="Left",B.Middle="Middle",B.Right="Right",B.Unknown="Unknown",B.NoButton="NoButton",(F=tg||(tg={})).Touch="Touch",F.Mouse="Mouse",F.Pen="Pen",F.Unknown="Unknown";/**
 * The PointerEventProcessor is responsible for collecting all the events from the canvas and transforming them into GlobalCoordinates
 */class rU{constructor(t,e){this.target=t,this.engine=e,this.events=new tS,this.primary=new rF,this._activeNativePointerIdsToNormalized=new Map,this.lastFramePointerCoords=new Map,this.currentFramePointerCoords=new Map,this.currentFramePointerDown=new Map,this.lastFramePointerDown=new Map,this.currentFrameDown=[],this.currentFrameUp=[],this.currentFrameMove=[],this.currentFrameCancel=[],this.currentFrameWheel=[],this._pointers=[this.primary],this._boundHandle=this._handle.bind(this),this._boundWheel=this._handleWheel.bind(this)}/**
     * Creates a new PointerEventReceiver with a new target and engine while preserving existing pointer event
     * handlers.
     * @param target
     * @param engine
     */recreate(t,e){let i=new rU(t,e);return i.primary=this.primary,i._pointers=this._pointers,i}/**
     * Locates a specific pointer by id, creates it if it doesn't exist
     * @param index
     */at(t){if(t>=this._pointers.length)for(let e=this._pointers.length-1;e<t;e++)this._pointers.push(new rF);return this._pointers[t]}/**
     * The number of pointers currently being tracked by excalibur
     */count(){return this._pointers.length}/**
     * Is the specified pointer id down this frame
     * @param pointerId
     */isDown(t){var e;return null!==(e=this.currentFramePointerDown.get(t))&&void 0!==e&&e}/**
     * Was the specified pointer id down last frame
     * @param pointerId
     */wasDown(t){var e;return null!==(e=this.lastFramePointerDown.get(t))&&void 0!==e&&e}/**
     * Whether the Pointer is currently dragging.
     */isDragging(t){return this.isDown(t)}/**
     * Whether the Pointer just started dragging.
     */isDragStart(t){return this.isDown(t)&&!this.wasDown(t)}/**
     * Whether the Pointer just ended dragging.
     */isDragEnd(t){return!this.isDown(t)&&this.wasDown(t)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * Called internally by excalibur
     *
     * Updates the current frame pointer info and emits raw pointer events
     *
     * This does not emit events to entities, see PointerSystem
     */update(){for(let t of(this.lastFramePointerDown=new Map(this.currentFramePointerDown),this.lastFramePointerCoords=new Map(this.currentFramePointerCoords),this.currentFrameDown)){this.emit("down",t);let e=this.at(t.pointerId);e.emit("down",t),this.primary.emit("pointerdown",t)}for(let t of this.currentFrameUp){this.emit("up",t);let e=this.at(t.pointerId);e.emit("up",t)}for(let t of this.currentFrameMove){this.emit("move",t);let e=this.at(t.pointerId);e.emit("move",t)}for(let t of this.currentFrameCancel){this.emit("cancel",t);let e=this.at(t.pointerId);e.emit("cancel",t)}for(let t of this.currentFrameWheel)this.emit("wheel",t),this.primary.emit("pointerwheel",t)}/**
     * Clears the current frame event and pointer data
     */clear(){for(let t of this.currentFrameUp){this.currentFramePointerCoords.delete(t.pointerId);let e=this._activeNativePointerIdsToNormalized.entries();for(let[i,s]of e)s===t.pointerId&&this._activeNativePointerIdsToNormalized.delete(i)}this.currentFrameDown.length=0,this.currentFrameUp.length=0,this.currentFrameMove.length=0,this.currentFrameCancel.length=0,this.currentFrameWheel.length=0}/**
     * Initializes the pointer event receiver so that it can start listening to native
     * browser events.
     */init(t){var e;this.target===this.engine.canvas?this.engine.canvas.style.touchAction="none":document.body.style.touchAction="none",window.PointerEvent?(this.target.addEventListener("pointerdown",this._boundHandle),this.target.addEventListener("pointerup",this._boundHandle),this.target.addEventListener("pointermove",this._boundHandle),this.target.addEventListener("pointercancel",this._boundHandle)):(// Touch Events
this.target.addEventListener("touchstart",this._boundHandle),this.target.addEventListener("touchend",this._boundHandle),this.target.addEventListener("touchmove",this._boundHandle),this.target.addEventListener("touchcancel",this._boundHandle),// Mouse Events
this.target.addEventListener("mousedown",this._boundHandle),this.target.addEventListener("mouseup",this._boundHandle),this.target.addEventListener("mousemove",this._boundHandle));// MDN MouseWheelEvent
let i={passive:!(this.engine.pageScrollPreventionMode===tm.All||this.engine.pageScrollPreventionMode===tm.Canvas)};"onwheel"in document.createElement("div")?this.target.addEventListener("wheel",this._boundWheel,i):void 0!==document.onmousewheel?this.target.addEventListener("mousewheel",this._boundWheel,i):this.target.addEventListener("MozMousePixelScroll",this._boundWheel,i);let s=null===(e=null==t?void 0:t.grabWindowFocus)||void 0===e||e;// Handle cross origin iframe
if(s&&ee()){let t=()=>{window.focus()};// Preferred pointer events
window.PointerEvent?this.target.addEventListener("pointerdown",t):(// Touch Events
this.target.addEventListener("touchstart",t),// Mouse Events
this.target.addEventListener("mousedown",t))}}detach(){window.PointerEvent?(this.target.removeEventListener("pointerdown",this._boundHandle),this.target.removeEventListener("pointerup",this._boundHandle),this.target.removeEventListener("pointermove",this._boundHandle),this.target.removeEventListener("pointercancel",this._boundHandle)):(// Touch Events
this.target.removeEventListener("touchstart",this._boundHandle),this.target.removeEventListener("touchend",this._boundHandle),this.target.removeEventListener("touchmove",this._boundHandle),this.target.removeEventListener("touchcancel",this._boundHandle),// Mouse Events
this.target.removeEventListener("mousedown",this._boundHandle),this.target.removeEventListener("mouseup",this._boundHandle),this.target.removeEventListener("mousemove",this._boundHandle)),"onwheel"in document.createElement("div")?this.target.removeEventListener("wheel",this._boundWheel):void 0!==document.onmousewheel?this.target.addEventListener("mousewheel",this._boundWheel):this.target.addEventListener("MozMousePixelScroll",this._boundWheel)}/**
     * Take native pointer id and map it to index in active pointers
     * @param nativePointerId
     */_normalizePointerId(t){// Add to the the native pointer set id
this._activeNativePointerIdsToNormalized.set(t,-1);// Native pointer ids in ascending order
let e=Array.from(this._activeNativePointerIdsToNormalized.keys()).sort((t,e)=>t-e),i=e.findIndex(e=>e===t);// ignore pointer because game isn't watching
return(// Save the mapping so we can reverse it later
this._activeNativePointerIdsToNormalized.set(t,i),i)}/**
     * Responsible for handling and parsing pointer events
     */_handle(t){let e,i;t.preventDefault();let s=new Map;if(globalThis.TouchEvent&&t instanceof globalThis.TouchEvent){e=t_.Unknown,i=tg.Touch;// https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
for(let e=0;e<t.changedTouches.length;e++){let i=t.changedTouches[e],r=rB.fromPagePosition(i.pageX,i.pageY,this.engine),n=e+1,o=this._normalizePointerId(n);this.currentFramePointerCoords.set(o,r),s.set(o,r)}}else{e=this._nativeButtonToPointerButton(t.button),i=tg.Mouse;let r=rB.fromPagePosition(t.pageX,t.pageY,this.engine),n=1;globalThis.PointerEvent&&t instanceof globalThis.PointerEvent&&(n=t.pointerId,i=this._stringToPointerType(t.pointerType));let o=this._normalizePointerId(n);this.currentFramePointerCoords.set(o,r),s.set(o,r)}for(let[r,n]of s.entries())switch(t.type){case"mousedown":case"pointerdown":case"touchstart":this.currentFrameDown.push(new PointerEvent("down",r,e,i,n,t)),this.currentFramePointerDown.set(r,!0);break;case"mouseup":case"pointerup":case"touchend":this.currentFrameUp.push(new PointerEvent("up",r,e,i,n,t)),this.currentFramePointerDown.set(r,!1);break;case"mousemove":case"pointermove":case"touchmove":this.currentFrameMove.push(new PointerEvent("move",r,e,i,n,t));break;case"touchcancel":case"pointercancel":this.currentFrameCancel.push(new PointerEvent("cancel",r,e,i,n,t))}}_handleWheel(t){// Should we prevent page scroll because of this event
(this.engine.pageScrollPreventionMode===tm.All||this.engine.pageScrollPreventionMode===tm.Canvas&&t.target===this.engine.canvas)&&t.preventDefault();let e=this.engine.screen.pageToScreenCoordinates(em(t.pageX,t.pageY)),i=this.engine.screen.screenToWorldCoordinates(e),s=-1/40,r=t.deltaX||t.wheelDeltaX*s||0,n=t.deltaY||t.wheelDeltaY*s||t.wheelDelta*s||t.detail||0,o=t.deltaZ||0,a=tu.Pixel;t.deltaMode&&(1===t.deltaMode?a=tu.Line:2===t.deltaMode&&(a=tu.Page));let h=new WheelEvent(i.x,i.y,t.pageX,t.pageY,e.x,e.y,0,r,n,o,a,t);this.currentFrameWheel.push(h)}/**
     * Triggers an excalibur pointer event in a world space pos
     *
     * Useful for testing pointers in excalibur
     * @param type
     * @param pos
     */triggerEvent(t,e){let i=this.engine.screen.worldToPageCoordinates(e);window.PointerEvent?this._handle(new window.PointerEvent("pointer"+t,{pointerId:0,clientX:i.x,clientY:i.y})):this._handle(new window.MouseEvent("mouse"+t,{clientX:i.x,clientY:i.y}));// Force update pointer system
let s=this.engine.currentScene.world.systemManager.get(rv),r=this.engine.currentScene.world.queryManager.createQuery(s.types);s.preupdate(),s.update(r.getEntities())}_nativeButtonToPointerButton(t){switch(t){case tp.NoButton:return t_.NoButton;case tp.Left:return t_.Left;case tp.Middle:return t_.Middle;case tp.Right:return t_.Right;case tp.Unknown:return t_.Unknown;default:return eS(t)}}_stringToPointerType(t){switch(t){case"touch":return tg.Touch;case"mouse":return tg.Mouse;case"pen":return tg.Pen;default:return tg.Unknown}}}class rL{constructor(t){var e;this._samplePeriod=100,this._currentFrameTime=0,this._frames=0,this._previousSampleTime=0,this._beginFrameTime=0,this._fps=t.initialFps,this._samplePeriod=null!==(e=t.samplePeriod)&&void 0!==e?e:this._samplePeriod,this._currentFrameTime=1e3/t.initialFps,this._nowFn=t.nowFn,this._previousSampleTime=this._nowFn()}/**
     * Start of code block to sample FPS for
     */start(){this._beginFrameTime=this._nowFn()}/**
     * End of code block to sample FPS for
     */end(){this._frames++;let t=this._nowFn();this._currentFrameTime=t-this._beginFrameTime,t>=this._previousSampleTime+this._samplePeriod&&(this._fps=1e3*this._frames/(t-this._previousSampleTime),this._previousSampleTime=t,this._frames=0)}/**
     * Return the currently sampled fps over the last sample period, by default every 100ms
     */get fps(){return this._fps}/**
     * Return the instantaneous fps, this can be less useful because it will fluctuate given the current frames time
     */get instant(){return 1e3/this._currentFrameTime}}/**
 * Abstract Clock is the base type of all Clocks
 *
 * It has a few opinions
 * 1. It manages the calculation of what "elapsed" time means and thus maximum fps
 * 2. The default timing api is implemented in now()
 *
 * To implement your own clock, extend Clock and override start/stop to start and stop the clock, then call update() with whatever
 * method is unique to your clock implementation.
 */class rz{constructor(t){var e,i,s;this._onFatalException=()=>{},this._maxFps=1/0,this._lastTime=0,this._elapsed=1,this._scheduledCbs=[],this._totalElapsed=0,this._options=t,this.tick=t.tick,this._lastTime=null!==(e=this.now())&&void 0!==e?e:0,this._maxFps=null!==(i=t.maxFps)&&void 0!==i?i:this._maxFps,this._onFatalException=null!==(s=t.onFatalException)&&void 0!==s?s:this._onFatalException,this.fpsSampler=new rL({initialFps:60,nowFn:()=>this.now()})}/**
     * Get the elapsed time for the last completed frame
     */elapsed(){return this._elapsed}/**
     * Get the current time in milliseconds
     */now(){return performance.now()}toTestClock(){let t=new rH({...this._options,defaultUpdateMs:16.6});return t}toStandardClock(){let t=new rO({...this._options});return t}setFatalExceptionHandler(t){this._onFatalException=t}/**
     * Schedule a callback to fire given a timeout in milliseconds using the excalibur [[Clock]]
     *
     * This is useful to use over the built in browser `setTimeout` because callbacks will be tied to the
     * excalibur update clock, instead of browser time, this means that callbacks wont fire if the game is
     * stopped or paused.
     *
     * @param cb callback to fire
     * @param timeoutMs Optionally specify a timeout in milliseconds from now, default is 0ms which means the next possible tick
     */schedule(t,e=0){// Scheduled based on internal elapsed time
let i=this._totalElapsed+e;this._scheduledCbs.push([t,i])}_runScheduledCbs(){// walk backwards to delete items as we loop
for(let t=this._scheduledCbs.length-1;t>-1;t--)this._scheduledCbs[t][1]<=this._totalElapsed&&(this._scheduledCbs[t][0](),this._scheduledCbs.splice(t,1))}update(t){try{this.fpsSampler.start();// Get the time to calculate time-elapsed
let e=this.now(),i=e-this._lastTime||1,s=1e3/this._maxFps;// only run frame if enough time has elapsed
if(i>=s){let r=0;0!==s&&(r=i%s,i-=r),i>200&&(i=1),// tick the mainloop and run scheduled callbacks
this._elapsed=t||i,this._totalElapsed+=this._elapsed,this._runScheduledCbs(),this.tick(t||i),0!==s?this._lastTime=e-r:this._lastTime=e,this.fpsSampler.end()}}catch(t){this._onFatalException(t),this.stop()}}}/**
 * The [[StandardClock]] implements the requestAnimationFrame browser api to run the tick()
 */class rO extends rz{constructor(t){super(t),this._running=!1}isRunning(){return this._running}start(){if(this._running)return;this._running=!0;let t=()=>{// stop the loop
if(this._running)try{// request next loop
this._requestId=window.requestAnimationFrame(t),this.update()}catch(t){throw window.cancelAnimationFrame(this._requestId),t}};// begin the first frame
t()}stop(){this._running=!1}}/**
 * The TestClock is meant for debugging interactions in excalibur that require precise timing to replicate or test
 */class rH extends rz{constructor(t){super({...t}),this._logger=t7.getInstance(),this._running=!1,this._currentTime=0,this._updateMs=t.defaultUpdateMs}/**
     * Get the current time in milliseconds
     */now(){var t;return null!==(t=this._currentTime)&&void 0!==t?t:0}isRunning(){return this._running}start(){this._running=!0}stop(){this._running=!1}/**
     * Manually step the clock forward 1 tick, optionally specify an elapsed time in milliseconds
     * @param overrideUpdateMs
     */step(t){let e=null!=t?t:this._updateMs;this._running?(// to be comparable to RAF this needs to be a full blown Task
// For example, images cannot decode synchronously in a single step
this.update(e),this._currentTime+=e):this._logger.warn("The clock is not running, no step will be performed")}/**
     * Run a number of steps that tick the clock, optionally specify an elapsed time in milliseconds
     * @param numberOfSteps
     * @param overrideUpdateMs
     */run(t,e){for(let i=0;i<t;i++)this.step(null!=e?e:this._updateMs)}}// EXTERNAL MODULE: ./Util/Toaster.css
var rN=r(7379);/**
 * The Toaster is only meant to be called from inside Excalibur to display messages to players
 */class r${constructor(){this._toasterCss=rN/* default */.Z.toString(),this._isInitialized=!1}_initialize(){this._isInitialized||(this._container=document.createElement("div"),this._container.id="ex-toast-container",document.body.appendChild(this._container),this._isInitialized=!0,this._styleBlock=document.createElement("style"),this._styleBlock.textContent=this._toasterCss,document.head.appendChild(this._styleBlock))}dispose(){this._container.parentElement.removeChild(this._container),this._styleBlock.parentElement.removeChild(this._styleBlock),this._isInitialized=!1}_createFragment(t){let e=document.createElement("span");return e.innerText=t,e}/**
     * Display a toast message to a player
     * @param message Text of the message, messages may have a single "[LINK]" to influence placement
     * @param linkTarget Optionally specify a link location
     * @param linkName Optionally specify a name for that link location
     */toast(t,e,i){this._initialize();let s=document.createElement("div");s.className="ex-toast-message";let r=t.split("[LINK]").map(t=>this._createFragment(t));if(e){let t=document.createElement("a");t.href=e,i?t.innerText=i:t.innerText=e,r.splice(1,0,t)}// Assembly message
let n=document.createElement("div");r.forEach(t=>{n.appendChild(t)}),s.appendChild(n);// Dismiss button
let o=document.createElement("button");o.innerText="x",o.addEventListener("click",()=>{this._container.removeChild(s)}),s.appendChild(o);// Escape to dismiss
let a=t=>{if("Escape"===t.key)try{this._container.removeChild(s)}catch(t){// pass
}document.removeEventListener("keydown",a)};document.addEventListener("keydown",a);// Insert into container
let h=this._container.firstChild;this._container.insertBefore(s,h)}}/**
 * This allows you to map multiple inputs to specific commands! This is especially useful when
 * you need to allow multiple input sources to control a specific action.
 */class rW{constructor(t){this.inputs=t,this._handlers=new Map}/**
     * Executes the input map, called internally by Excalibur
     */execute(){for(let[t,e]of this._handlers.entries()){let i=t(this.inputs);i&&e(i)}}/**
     * This allows you to map multiple inputs to specific commands! This is useful
     *
     * The inputHandler should return a truthy value if you wish the commandHandler to fire.
     *
     * Example:
     * ```typescript
     * const moveRight = (amount: number) => { actor.vel.x = 100 * amount }
     * const moveLeft = (amount: number) => { actor.vel.x = -100 * amount }
     * const moveUp = (amount: number) => { actor.vel.y = -100 * amount }
     * const moveDown = (amount: number) => { actor.vel.y = 100 * amount }
     *
     * engine.inputMapper.on(({keyboard}) => keyboard.isHeld(ex.Keys.ArrowRight) ? 1 : 0, moveRight);
     * engine.inputMapper.on(({gamepads}) => gamepads.at(0).isButtonPressed(ex.Buttons.DpadRight) ? 1 : 0, moveRight);
     * engine.inputMapper.on(({gamepads}) => gamepads.at(0).getAxes(ex.Axes.LeftStickX) > 0 ?
     *  gamepads.at(0).getAxes(ex.Axes.LeftStickX) : 0, moveRight);
     * ```
     * @param inputHandler
     * @param commandHandler
     */on(t,e){this._handlers.set(t,e)}}tb();let rV={FallbackGraphicsContext:"fallbackgraphicscontext",Initialize:"initialize",Visible:"visible",Hidden:"hidden",Start:"start",Stop:"stop",PreUpdate:"preupdate",PostUpdate:"postupdate",PreFrame:"preframe",PostFrame:"postframe",PreDraw:"predraw",PostDraw:"postdraw"};/**
     * Do not prevent any page scrolling
     */(U=tm||(tm={}))[U.None=0]="None",/**
     * Prevent page scroll if mouse is over the game canvas
     */U[U.Canvas=1]="Canvas",/**
     * Prevent all page scrolling via mouse wheel
     */U[U.All=2]="All";/**
 * The Excalibur Engine
 *
 * The [[Engine]] is the main driver for a game. It is responsible for
 * starting/stopping the game, maintaining state, transmitting events,
 * loading resources, and managing the scene.
 */class rG{/**
     * The width of the game canvas in pixels (physical width component of the
     * resolution of the canvas element)
     */get canvasWidth(){return this.screen.canvasWidth}/**
     * Returns half width of the game canvas in pixels (half physical width component)
     */get halfCanvasWidth(){return this.screen.halfCanvasWidth}/**
     * The height of the game canvas in pixels, (physical height component of
     * the resolution of the canvas element)
     */get canvasHeight(){return this.screen.canvasHeight}/**
     * Returns half height of the game canvas in pixels (half physical height component)
     */get halfCanvasHeight(){return this.screen.halfCanvasHeight}/**
     * Returns the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawWidth(){return this.screen.drawWidth}/**
     * Returns half the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawWidth(){return this.screen.halfDrawWidth}/**
     * Returns the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawHeight(){return this.screen.drawHeight}/**
     * Returns half the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawHeight(){return this.screen.halfDrawHeight}/**
     * Returns whether excalibur detects the current screen to be HiDPI
     */get isHiDpi(){return this.screen.isHiDpi}/**
     * Access [[stats]] that holds frame statistics.
     */get stats(){return this.debug.stats}/**
     * Indicates whether the engine is set to fullscreen or not
     */get isFullscreen(){return this.screen.isFullScreen}/**
     * Indicates the current [[DisplayMode]] of the engine.
     */get displayMode(){return this.screen.displayMode}/**
     * Returns the calculated pixel ration for use in rendering
     */get pixelRatio(){return this.screen.pixelRatio}get isDebug(){return this._isDebug}/**
     * Hints the graphics context to truncate fractional world space coordinates
     */get snapToPixel(){return this.graphicsContext.snapToPixel}set snapToPixel(t){this.graphicsContext.snapToPixel=t}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * Creates a new game using the given [[EngineOptions]]. By default, if no options are provided,
     * the game will be rendered full screen (taking up all available browser window space).
     * You can customize the game rendering through [[EngineOptions]].
     *
     * Example:
     *
     * ```js
     * var game = new ex.Engine({
     *   width: 0, // the width of the canvas
     *   height: 0, // the height of the canvas
     *   enableCanvasTransparency: true, // the transparencySection of the canvas
     *   canvasElementId: '', // the DOM canvas element ID, if you are providing your own
     *   displayMode: ex.DisplayMode.FullScreen, // the display mode
     *   pointerScope: ex.PointerScope.Document, // the scope of capturing pointer (mouse/touch) events
     *   backgroundColor: ex.Color.fromHex('#2185d0') // background color of the engine
     * });
     *
     * // call game.start, which is a Promise
     * game.start().then(function () {
     *   // ready, set, go!
     * });
     * ```
     */constructor(t){var e,i,s,r,n,o;/**
         * Listen to and emit events on the Engine
         */this.events=new tS,/**
         * Optionally set the maximum fps if not set Excalibur will go as fast as the device allows.
         *
         * You may want to constrain max fps if your game cannot maintain fps consistently, it can look and feel better to have a 30fps game than
         * one that bounces between 30fps and 60fps
         */this.maxFps=Number.POSITIVE_INFINITY,/**
         * Contains all the scenes currently registered with Excalibur
         */this.scenes={},this._suppressPlayButton=!1,/**
         * Indicates whether audio should be paused when the game is no longer visible.
         */this.pauseAudioWhenHidden=!0,/**
         * Indicates whether the engine should draw with debug information
         */this._isDebug=!1,/**
         * Sets the Transparency for the engine.
         */this.enableCanvasTransparency=!0,/**
         * The action to take when a fatal exception is thrown
         */this.onFatalException=t=>{t7.getInstance().fatal(t)},this._toaster=new r$,this._timescale=1,this._isInitialized=!1,this._deferredGoTo=null,this._originalOptions={},this._performanceThresholdTriggered=!1,this._fpsSamples=[],this._loadingComplete=!1,this._isReady=!1,this._isReadyPromise=new Promise(t=>{this._isReadyResolve=t}),/**
         * Returns the current frames elapsed milliseconds
         */this.currentFrameElapsedMs=0,/**
         * Returns the current frame lag when in fixed update mode
         */this.currentFrameLagMs=0,this._lagMs=0,this._screenShotRequests=[],t={...rG._DEFAULT_ENGINE_OPTIONS,...t},this._originalOptions=t,tC.freeze(),// Initialize browser events facade
this.browser=new rD(window,document);// Check compatibility
let a=new iP;if(t.suppressMinimumBrowserFeatureDetection||(this._compatible=a.test()))this._compatible=!0;else{let e=document.createElement("div");if(e.innerText="Sorry, your browser does not support all the features needed for Excalibur",document.body.appendChild(e),a.failedTests.forEach(function(t){let e=document.createElement("div");e.innerText="Browser feature missing "+t,document.body.appendChild(e)}),t.canvasElementId){let e=document.getElementById(t.canvasElementId);e&&e.parentElement.removeChild(e)}return}console.log&&!t.suppressConsoleBootMessage&&(// eslint-disable-next-line no-console
console.log(`%cPowered by Excalibur.js (v${na})`,"background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;"),// eslint-disable-next-line no-console
console.log("\n      /| ________________\nO|===|* >________________>\n      \\|"),// eslint-disable-next-line no-console
console.log("Visit","http://excaliburjs.com","for more information")),t.suppressPlayButton&&(this._suppressPlayButton=!0),this._logger=t7.getInstance(),this._logger.defaultLevel===H.Debug&&a.logBrowserFeatures(),this._logger.debug("Building engine..."),this.canvasElementId=t.canvasElementId,t.canvasElementId?(this._logger.debug("Using Canvas element specified: "+t.canvasElementId),this.canvas=document.getElementById(t.canvasElementId)):t.canvasElement?(this._logger.debug("Using Canvas element specified:",t.canvasElement),this.canvas=t.canvasElement):(this._logger.debug("Using generated canvas element"),this.canvas=document.createElement("canvas"));let h=null!==(e=t.displayMode)&&void 0!==e?e:q.Fixed;t.width&&t.height||t.viewport?(void 0===t.displayMode&&(h=q.Fixed),this._logger.debug("Engine viewport is size "+t.width+" x "+t.height)):t.displayMode||(this._logger.debug("Engine viewport is fit"),h=q.FitScreen),this._originalDisplayMode=h;// Canvas 2D fallback can be flagged on
let l=tC.isEnabled("use-canvas-context");if(!l)try{this.graphicsContext=new ie({canvasElement:this.canvas,enableTransparency:this.enableCanvasTransparency,smoothing:t.antialiasing,backgroundColor:t.backgroundColor,snapToPixel:t.snapToPixel,useDrawSorting:t.useDrawSorting})}catch(t){this._logger.warn(`Excalibur could not load webgl for some reason (${t.message}) and loaded a Canvas 2D fallback. Some features of Excalibur will not work in this mode. 

Read more about this issue at https://excaliburjs.com/docs/webgl`),// fallback to canvas in case of failure
l=!0}l&&(this.graphicsContext=new is({canvasElement:this.canvas,enableTransparency:this.enableCanvasTransparency,smoothing:t.antialiasing,backgroundColor:t.backgroundColor,snapToPixel:t.snapToPixel,useDrawSorting:t.useDrawSorting})),this.screen=new Screen({canvas:this.canvas,context:this.graphicsContext,antialiasing:null===(i=t.antialiasing)||void 0===i||i,browser:this.browser,viewport:null!==(s=t.viewport)&&void 0!==s?s:t.width&&t.height?{width:t.width,height:t.height}:ir.SVGA,resolution:t.resolution,displayMode:h,pixelRatio:t.suppressHiDPIScaling?1:null!==(r=t.pixelRatio)&&void 0!==r?r:null}),// Set default filtering based on antialiasing
eL.filtering=t.antialiasing?G.Blended:G.Pixel,t.backgroundColor&&(this.backgroundColor=t.backgroundColor.clone()),this.maxFps=null!==(n=t.maxFps)&&void 0!==n?n:this.maxFps,this.fixedUpdateFps=null!==(o=t.fixedUpdateFps)&&void 0!==o?o:this.fixedUpdateFps,this.clock=new rO({maxFps:this.maxFps,tick:this._mainloop.bind(this),onFatalException:t=>this.onFatalException(t)}),this.enableCanvasTransparency=t.enableCanvasTransparency,this._loader=new iT,this._loader.wireEngine(this),this.debug=new rI(this),this._initialize(t),this.rootScene=this.currentScene=new rS,this.addScene("root",this.rootScene),window.___EXCALIBUR_DEVTOOL=this}_monitorPerformanceThresholdAndTriggerFallback(){let{allow:t}=this._originalOptions.configurePerformanceCanvas2DFallback,{threshold:e,showPlayerMessage:i}=this._originalOptions.configurePerformanceCanvas2DFallback;if(void 0===e&&(e=rG._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.threshold),void 0===i&&(i=rG._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.showPlayerMessage),!tC.isEnabled("use-canvas-context")&&t&&this.ready&&!this._performanceThresholdTriggered){this._fpsSamples.length===e.numberOfFrames&&this._fpsSamples.splice(0,1),this._fpsSamples.push(this.clock.fpsSampler.fps);let t=0;for(let e=0;e<this._fpsSamples.length;e++)t+=this._fpsSamples[e];let s=t/this._fpsSamples.length;this._fpsSamples.length===e.numberOfFrames&&s<=e.fps&&(this._performanceThresholdTriggered=!0,this._logger.warn(`Switching to browser 2D Canvas fallback due to performance. Some features of Excalibur will not work in this mode.
this might mean your browser doesn't have webgl enabled or hardware acceleration is unavailable.

If in Chrome:
  * Visit Settings > Advanced > System, and ensure "Use Hardware Acceleration" is checked.
  * Visit chrome://flags/#ignore-gpu-blocklist and ensure "Override software rendering list" is "enabled"
If in Firefox, visit about:config
  * Ensure webgl.disabled = false
  * Ensure webgl.force-enabled = true
  * Ensure layers.acceleration.force-enabled = true

Read more about this issue at https://excaliburjs.com/docs/performance`),i&&this._toaster.toast("Excalibur is encountering performance issues. It's possible that your browser doesn't have hardware acceleration enabled. Visit [LINK] for more information and potential solutions.","https://excaliburjs.com/docs/performance"),this.useCanvas2DFallback(),this.emit("fallbackgraphicscontext",this.graphicsContext))}}/**
     * Switches the engine's graphics context to the 2D Canvas.
     * @warning Some features of Excalibur will not work in this mode.
     */useCanvas2DFallback(){var t,e,i;// Swap out the canvas
let s=this.canvas.cloneNode(!1);this.canvas.parentNode.replaceChild(s,this.canvas),this.canvas=s;let r=this._originalOptions,n=this._originalDisplayMode;// New graphics context
this.graphicsContext=new is({canvasElement:this.canvas,enableTransparency:this.enableCanvasTransparency,smoothing:r.antialiasing,backgroundColor:r.backgroundColor,snapToPixel:r.snapToPixel,useDrawSorting:r.useDrawSorting}),this.screen&&this.screen.dispose(),this.screen=new Screen({canvas:this.canvas,context:this.graphicsContext,antialiasing:null===(t=r.antialiasing)||void 0===t||t,browser:this.browser,viewport:null!==(e=r.viewport)&&void 0!==e?e:r.width&&r.height?{width:r.width,height:r.height}:ir.SVGA,resolution:r.resolution,displayMode:n,pixelRatio:r.suppressHiDPIScaling?1:null!==(i=r.pixelRatio)&&void 0!==i?i:null}),this.screen.setCurrentCamera(this.currentScene.camera),// Reset pointers
this.input.pointers.detach();let o=r&&r.pointerScope===$.Document?document:this.canvas;this.input.pointers=this.input.pointers.recreate(o,this),this.input.pointers.init()}/**
     * Returns a BoundingBox of the top left corner of the screen
     * and the bottom right corner of the screen.
     */getWorldBounds(){return this.screen.getWorldBounds()}/**
     * Gets the current engine timescale factor (default is 1.0 which is 1:1 time)
     */get timescale(){return this._timescale}/**
     * Sets the current engine timescale factor. Useful for creating slow-motion effects or fast-forward effects
     * when using time-based movement.
     */set timescale(t){if(t<=0){t7.getInstance().error("Cannot set engine.timescale to a value of 0 or less than 0.");return}this._timescale=t}/**
     * Adds a [[Timer]] to the [[currentScene]].
     * @param timer  The timer to add to the [[currentScene]].
     */addTimer(t){return this.currentScene.addTimer(t)}/**
     * Removes a [[Timer]] from the [[currentScene]].
     * @param timer  The timer to remove to the [[currentScene]].
     */removeTimer(t){return this.currentScene.removeTimer(t)}/**
     * Adds a [[Scene]] to the engine, think of scenes in Excalibur as you
     * would levels or menus.
     *
     * @param key  The name of the scene, must be unique
     * @param scene The scene to add to the engine
     */addScene(t,e){this.scenes[t]&&this._logger.warn("Scene",t,"already exists overwriting"),this.scenes[t]=e}/**
     * @internal
     */removeScene(t){if(t instanceof rS)for(let e in this.scenes)this.scenes.hasOwnProperty(e)&&this.scenes[e]===t&&delete this.scenes[e];"string"==typeof t&&delete this.scenes[t]}add(t){if(2==arguments.length){this.addScene(arguments[0],arguments[1]);return}this._deferredGoTo&&this.scenes[this._deferredGoTo]?this.scenes[this._deferredGoTo].add(t):this.currentScene.add(t)}remove(t){t instanceof sn&&this.currentScene.remove(t),t instanceof rS&&this.removeScene(t),"string"==typeof t&&this.removeScene(t)}/**
     * Changes the currently updating and drawing scene to a different,
     * named scene. Calls the [[Scene]] lifecycle events.
     * @param key  The key of the scene to transition to.
     * @param data Optional data to send to the scene's onActivate method
     */goToScene(t,e){// if not yet initialized defer goToScene
if(!this.isInitialized){this._deferredGoTo=t;return}if(this.scenes[t]){let i=this.currentScene,s=this.scenes[t];// only deactivate when initialized
if(this._logger.debug("Going to scene:",t),this.currentScene.isInitialized){let t={engine:this,previousScene:i,nextScene:s};this.currentScene._deactivate.apply(this.currentScene,[t,s]),this.currentScene.events.emit("deactivate",new t2(t,this.currentScene))}// set current scene to new one
this.currentScene=s,this.screen.setCurrentCamera(s.camera),// initialize the current scene if has not been already
this.currentScene._initialize(this);let r={engine:this,previousScene:i,nextScene:s,data:e};this.currentScene._activate.apply(this.currentScene,[r,s]),this.currentScene.events.emit("activate",new t1(r,this.currentScene))}else this._logger.error("Scene",t,"does not exist!")}/**
     * Transforms the current x, y from screen coordinates to world coordinates
     * @param point  Screen coordinate to convert
     */screenToWorldCoordinates(t){return this.screen.screenToWorldCoordinates(t)}/**
     * Transforms a world coordinate, to a screen coordinate
     * @param point  World coordinate to convert
     */worldToScreenCoordinates(t){return this.screen.worldToScreenCoordinates(t)}/**
     * Initializes the internal canvas, rendering context, display mode, and native event listeners
     */_initialize(t){var e,i,s,r;this.pageScrollPreventionMode=t.scrollPreventionMode;// initialize inputs
let n=t&&t.pointerScope===$.Document?document:this.canvas;this.input={keyboard:new es,pointers:new rU(n,this),gamepads:new t6},this.input.keyboard.init({grabWindowFocus:null===(i=null===(e=this._originalOptions)||void 0===e?void 0:e.grabWindowFocus)||void 0===i||i}),this.input.pointers.init({grabWindowFocus:null===(r=null===(s=this._originalOptions)||void 0===s?void 0:s.grabWindowFocus)||void 0===r||r}),this.input.gamepads.init(),this.inputMapper=new rW(this.input),// Issue #385 make use of the visibility api
// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API
this.browser.document.on("visibilitychange",()=>{"hidden"===document.visibilityState?(this.events.emit("hidden",new tG(this)),this._logger.debug("Window hidden")):"visible"===document.visibilityState&&(this.events.emit("visible",new tV(this)),this._logger.debug("Window visible"))}),this.canvasElementId||t.canvasElement||document.body.appendChild(this.canvas)}onInitialize(t){// Override me
}/**
     * If supported by the browser, this will set the antialiasing flag on the
     * canvas. Set this to `false` if you want a 'jagged' pixel art look to your
     * image resources.
     * @param isSmooth  Set smoothing to true or false
     */setAntialiasing(t){this.screen.antialiasing=t}/**
     * Return the current smoothing status of the canvas
     */getAntialiasing(){return this.screen.antialiasing}/**
     * Gets whether the actor is Initialized
     */get isInitialized(){return this._isInitialized}_overrideInitialize(t){if(!this.isInitialized){if(this.onInitialize(t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0,this._deferredGoTo){let t=this._deferredGoTo;this._deferredGoTo=null,this.goToScene(t)}else this.goToScene("root")}}/**
     * Updates the entire state of the game
     * @param delta  Number of milliseconds elapsed since the last update.
     */_update(t){if(!this.ready){// suspend updates until loading is finished
this._loader.update(this,t),// Update input listeners
this.input.keyboard.update(),this.input.gamepads.update(),this.inputMapper.execute();return}// Publish preupdate events
this._preupdate(t),// process engine level events
this.currentScene.update(this,t),// Update graphics postprocessors
this.graphicsContext.updatePostProcessors(t),// Publish update event
this._postupdate(t),// Update input listeners
this.input.keyboard.update(),this.input.gamepads.update(),this.inputMapper.execute()}/**
     * @internal
     */_preupdate(t){this.emit("preupdate",new tU(this,t,this)),this.onPreUpdate(this,t)}onPreUpdate(t,e){// Override me
}/**
     * @internal
     */_postupdate(t){this.emit("postupdate",new tL(this,t,this)),this.onPostUpdate(this,t)}onPostUpdate(t,e){// Override me
}/**
     * Draws the entire game
     * @param delta  Number of milliseconds elapsed since the last draw.
     */_draw(t){// Drawing nothing else while loading
if(this.graphicsContext.beginDrawLifecycle(),this.graphicsContext.clear(),this._predraw(this.graphicsContext,t),!this._isReady){this._loader.canvas.draw(this.graphicsContext,0,0),this.graphicsContext.flush();return}this.graphicsContext.backgroundColor=this.backgroundColor,this.currentScene.draw(this.graphicsContext,t),this._postdraw(this.graphicsContext,t),// Flush any pending drawings
this.graphicsContext.flush(),this.graphicsContext.endDrawLifecycle(),this._checkForScreenShots()}/**
     * @internal
     */_predraw(t,e){this.emit("predraw",new tR(t,e,this)),this.onPreDraw(t,e)}onPreDraw(t,e){// Override me
}/**
     * @internal
     */_postdraw(t,e){this.emit("postdraw",new tD(t,e,this)),this.onPostDraw(t,e)}onPostDraw(t,e){// Override me
}/**
     * Enable or disable Excalibur debugging functionality.
     * @param toggle a value that debug drawing will be changed to
     */showDebug(t){this._isDebug=t}/**
     * Toggle Excalibur debugging functionality.
     */toggleDebug(){return this._isDebug=!this._isDebug,this._isDebug}/**
     * Returns true when loading is totally complete and the player has clicked start
     */get loadingComplete(){return this._loadingComplete}get ready(){return this._isReady}isReady(){return this._isReadyPromise}/**
     * Starts the internal game loop for Excalibur after loading
     * any provided assets.
     * @param loader  Optional [[Loader]] to use to load resources. The default loader is [[Loader]], override to provide your own
     * custom loader.
     *
     * Note: start() only resolves AFTER the user has clicked the play button
     */async start(t){if(!this._compatible)throw Error("Excalibur is incompatible with your browser");return t&&(// Push the current user entered resolution/viewport
this.screen.pushResolutionAndViewport(),// Configure resolution for loader, it expects resolution === viewport
this.screen.resolution=this.screen.viewport,this.screen.applyResolutionAndViewport(),this._loader=t,this._loader.suppressPlayButton=this._suppressPlayButton||this._loader.suppressPlayButton,this._loader.wireEngine(this)),// Start the excalibur clock which drives the mainloop
// has started is a slight misnomer, it's really mainloop started
this._logger.debug("Starting game clock..."),this.browser.resume(),this.clock.start(),this._logger.debug("Game clock started"),t&&(await this.load(this._loader),this._loadingComplete=!0,// reset back to previous user resolution/viewport
this.screen.popResolutionAndViewport(),this.screen.applyResolutionAndViewport()),this._loadingComplete=!0,// Initialize before ready
this._overrideInitialize(this),this._isReady=!0,this._isReadyResolve(),this.emit("start",new tM(this)),this._isReadyPromise}_mainloop(t){this.emit("preframe",new tz(this,this.stats.prevFrame));let e=t*this.timescale;this.currentFrameElapsedMs=e;// reset frame stats (reuse existing instances)
let i=this.stats.prevFrame.id+1;this.stats.currFrame.reset(),this.stats.currFrame.id=i,this.stats.currFrame.delta=e,this.stats.currFrame.fps=this.clock.fpsSampler.fps,eY.clear();let s=this.clock.now(),r=1e3/this.fixedUpdateFps;if(this.fixedUpdateFps)for(this._lagMs+=e;this._lagMs>=r;)this._update(r),this._lagMs-=r;else this._update(e);let n=this.clock.now();this.currentFrameLagMs=this._lagMs,this._draw(e);let o=this.clock.now();this.stats.currFrame.duration.update=n-s,this.stats.currFrame.duration.draw=o-n,this.stats.currFrame.graphics.drawnImages=eY.DrawnImagesCount,this.stats.currFrame.graphics.drawCalls=eY.DrawCallCount,this.emit("postframe",new tO(this,this.stats.currFrame)),this.stats.prevFrame.reset(this.stats.currFrame),this._monitorPerformanceThresholdAndTriggerFallback()}/**
     * Stops Excalibur's main loop, useful for pausing the game.
     */stop(){this.clock.isRunning()&&(this.emit("stop",new tk(this)),this.browser.pause(),this.clock.stop(),this._logger.debug("Game stopped"))}/**
     * Returns the Engine's running status, Useful for checking whether engine is running or paused.
     */isRunning(){return this.clock.isRunning()}/**
     * Takes a screen shot of the current viewport and returns it as an
     * HTML Image Element.
     * @param preserveHiDPIResolution in the case of HiDPI return the full scaled backing image, by default false
     */screenshot(t=!1){let e=new Promise(e=>{this._screenShotRequests.push({preserveHiDPIResolution:t,resolve:e})});return e}_checkForScreenShots(){// We must grab the draw buffer before we yield to the browser
// the draw buffer is cleared after compositing
// the reason for the asynchrony is setting `preserveDrawingBuffer: true`
// forces the browser to copy buffers which can have a mass perf impact on mobile
for(let t of this._screenShotRequests){let e=t.preserveHiDPIResolution?this.canvas.width:this.screen.resolution.width,i=t.preserveHiDPIResolution?this.canvas.height:this.screen.resolution.height,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");r.imageSmoothingEnabled=this.screen.antialiasing,r.drawImage(this.canvas,0,0,e,i);let n=new Image,o=s.toDataURL("image/png");n.src=o,t.resolve(n)}// Reset state
this._screenShotRequests.length=0}/**
     * Another option available to you to load resources into the game.
     * Immediately after calling this the game will pause and the loading screen
     * will appear.
     * @param loader  Some [[Loadable]] such as a [[Loader]] collection, [[Sound]], or [[Texture]].
     */async load(t){try{await t.load()}catch(t){this._logger.error("Error loading resources, things may not behave properly",t),await Promise.resolve()}}}/**
 * Default [[EngineOptions]]
 */rG._DEFAULT_ENGINE_OPTIONS={width:0,height:0,enableCanvasTransparency:!0,useDrawSorting:!0,configurePerformanceCanvas2DFallback:{allow:!0,showPlayerMessage:!1,threshold:{fps:20,numberOfFrames:100}},canvasElementId:"",canvasElement:void 0,snapToPixel:!1,pointerScope:$.Canvas,suppressConsoleBootMessage:null,suppressMinimumBrowserFeatureDetection:null,suppressHiDPIScaling:null,suppressPlayButton:null,grabWindowFocus:!0,scrollPreventionMode:tm.Canvas,backgroundColor:ef.fromHex("#2185d0")// Excalibur blue
};/**
 * @deprecated Use [[EventEmitter]] will be removed in v0.29.0
 */class rq{constructor(){this._handlers={},this._wiredEventDispatchers=[],this._deferedHandlerRemovals=[]}/**
     * Clears any existing handlers or wired event dispatchers on this event dispatcher
     */clear(){this._handlers={},this._wiredEventDispatchers=[]}_processDeferredHandlerRemovals(){for(let t of this._deferedHandlerRemovals)this._removeHandler(t.name,t.handler);this._deferedHandlerRemovals.length=0}/**
     * Emits an event for target
     * @param eventName  The name of the event to publish
     * @param event      Optionally pass an event data object to the handler
     */emit(t,e){let i,s;if(this._processDeferredHandlerRemovals(),t){if(t=t.toLowerCase(),null==e&&(e=new tT),this._handlers[t])for(i=0,s=this._handlers[t].length;i<s;i++)this._handlers[t][i](e);for(i=0,s=this._wiredEventDispatchers.length;i<s;i++)this._wiredEventDispatchers[i].emit(t,e)}}/**
     * Subscribe an event handler to a particular event name, multiple handlers per event name are allowed.
     * @param eventName  The name of the event to subscribe to
     * @param handler    The handler callback to fire on this event
     */on(t,e){this._processDeferredHandlerRemovals(),t=t.toLowerCase(),this._handlers[t]||(this._handlers[t]=[]),this._handlers[t].push(e)}/**
     * Unsubscribe an event handler(s) from an event. If a specific handler
     * is specified for an event, only that handler will be unsubscribed.
     * Otherwise all handlers will be unsubscribed for that event.
     *
     * @param eventName  The name of the event to unsubscribe
     * @param handler    Optionally the specific handler to unsubscribe
     */off(t,e){this._deferedHandlerRemovals.push({name:t,handler:e})}_removeHandler(t,e){t=t.toLowerCase();let i=this._handlers[t];if(i){// if no explicit handler is give with the event name clear all handlers
if(e){let s=i.indexOf(e);s>-1&&this._handlers[t].splice(s,1)}else this._handlers[t].length=0}}/**
     * Once listens to an event one time, then unsubscribes from that event
     *
     * @param eventName The name of the event to subscribe to once
     * @param handler   The handler of the event that will be auto unsubscribed
     */once(t,e){this._processDeferredHandlerRemovals();let i=s=>{let r=s||new tT;this.off(t,i),e(r)};this.on(t,i)}/**
     * Wires this event dispatcher to also receive events from another
     */wire(t){t._wiredEventDispatchers.push(this)}/**
     * Unwires this event dispatcher from another
     */unwire(t){let e=t._wiredEventDispatchers.indexOf(this);e>-1&&t._wiredEventDispatchers.splice(e,1)}}/**
 * Labels are the way to draw small amounts of text to the screen. They are
 * actors and inherit all of the benefits and capabilities.
 */class rX extends sL{get font(){return this._font}set font(t){this._font=t,this._text.font=t}/**
     * The text to draw.
     */get text(){return this._text.text}set text(t){this._text.text=t}get color(){return this._text.color}set color(t){this._text&&(this._text.color=t)}get opacity(){return this._text.opacity}set opacity(t){this._text.opacity=t}/**
     * The [[SpriteFont]] to use, if any. Overrides [[Font|font]] if present.
     */get spriteFont(){return this._spriteFont}set spriteFont(t){t&&(this._spriteFont=t,this._text.font=this._spriteFont)}/**
     * Build a new label
     * @param options
     */constructor(t){super(t),this._font=new sU,this._text=new Text({text:"",font:this._font});let{text:e,pos:i,x:s,y:r,spriteFont:n,font:o,color:a}=t;this.pos=null!=i?i:s&&r?em(s,r):this.pos,this.text=null!=e?e:this.text,this.font=null!=o?o:this.font,this.spriteFont=null!=n?n:this.spriteFont,this._text.color=null!=a?a:this.color;let h=this.get(sl);h.anchor=eg.Zero,h.use(this._text)}_initialize(t){super._initialize(t)}/**
     * Returns the width of the text in the label (in pixels);
     */getTextWidth(){return this._text.width}}class rZ extends sn{getGraphics(){return this._graphics}/**
     * Tile graphics
     */addGraphic(t){this._graphics.push(t),this._gfx.visible=!0,this._gfx.localBounds=this._recalculateBounds()}_recalculateBounds(){let t=this._tileBounds.clone();for(let e of this._graphics){let i=em(this.map.graphicsOffset.x-this.map.tileWidth/2,this.map.graphicsOffset.y-(this.map.renderFromTopOfGraphic?0:e.height-this.map.tileHeight));t=t.combine(e.localBounds.translate(i))}return t}removeGraphic(t){let e=this._graphics.indexOf(t);e>-1&&this._graphics.splice(e,1),this._gfx.localBounds=this._recalculateBounds()}clearGraphics(){this._graphics.length=0,this._gfx.visible=!1,this._gfx.localBounds=this._recalculateBounds()}getColliders(){return this._colliders}/**
     * Adds a collider to the IsometricTile
     *
     * **Note!** the [[Tile.solid]] must be set to true for it to act as a "fixed" collider
     * @param collider
     */addCollider(t){this._colliders.push(t),this.map.flagCollidersDirty()}/**
     * Removes a collider from the IsometricTile
     * @param collider
     */removeCollider(t){let e=this._colliders.indexOf(t);e>-1&&this._colliders.splice(e,1),this.map.flagCollidersDirty()}/**
     * Clears all colliders from the IsometricTile
     */clearColliders(){this._colliders.length=0,this.map.flagCollidersDirty()}/**
     * Returns the top left corner of the [[IsometricTile]] in world space
     */get pos(){return this.map.tileToWorld(em(this.x,this.y))}/**
     * Returns the center of the [[IsometricTile]]
     */get center(){return this.pos.add(em(0,this.map.tileHeight/2))}/**
     * Construct a new IsometricTile
     * @param x tile coordinate in x (not world position)
     * @param y tile coordinate in y (not world position)
     * @param graphicsOffset offset that tile should be shifted by (default (0, 0))
     * @param map reference to owning IsometricMap
     */constructor(t,e,i,s){super([new iN,new sl({offset:null!=i?i:eg.Zero,onPostDraw:(t,e)=>this.draw(t,e)}),new rx(s)]),/**
         * Indicates whether this tile is solid
         */this.solid=!1,this._tileBounds=new ey,this._graphics=[],/**
         * Tile colliders
         */this._colliders=[],this.x=t,this.y=e,this.map=s,this._transform=this.get(iN),this._isometricEntityComponent=this.get(rx);let r=this.map.tileWidth/2,n=this.map.tileHeight/2,o=(this.x-this.y)*r,a=(this.x+this.y)*n;this._transform.pos=em(o,a),this._isometricEntityComponent.elevation=0,this._gfx=this.get(sl),this._gfx.visible=!1;let h=this.map.tileWidth,l=this.map.tileHeight,d=em(0,this.map.renderFromTopOfGraphic?l:0);this._gfx.localBounds=this._tileBounds=new ey({left:-h/2,top:-l,right:h/2,bottom:l}).translate(d)}draw(t,e){let i=this.map.tileWidth/2;for(let e of(t.save(),// shift left origin to corner of map, not the left corner of the first sprite
t.translate(-i,0),this._graphics))e.draw(t,this.map.graphicsOffset.x,this.map.graphicsOffset.y-(this.map.renderFromTopOfGraphic?0:e.height-this.map.tileHeight));t.restore()}}/**
 * The IsometricMap is a special tile map that provides isometric rendering support to Excalibur
 *
 * The tileWidth and tileHeight should be the height and width in pixels of the parallelogram of the base of the tile art asset.
 * The tileWidth and tileHeight is not necessarily the same as your graphic pixel width and height.
 *
 * Please refer to the docs https://excaliburjs.com for more details calculating what your tile width and height should be given
 * your art assets.
 */class rK extends sn{constructor(t){super([new iN,new i8({type:X.Fixed}),new i7,new s$(t=>this.debug(t),!1)],t.name),/**
         * Render the tile graphic from the top instead of the bottom
         *
         * default is `false` meaning rendering from the bottom
         */this.renderFromTopOfGraphic=!1,this.graphicsOffset=em(0,0),this._collidersDirty=!1,this._originalOffsets=new WeakMap;let{pos:e,tileWidth:i,tileHeight:s,columns:r,rows:n,renderFromTopOfGraphic:o,graphicsOffset:a}=t;this.transform=this.get(iN),e&&(this.transform.pos=e),this.collider=this.get(i7),this.collider&&this.collider.set(this._composite=new ij([])),this.renderFromTopOfGraphic=null!=o?o:this.renderFromTopOfGraphic,this.graphicsOffset=null!=a?a:this.graphicsOffset,this.tileWidth=i,this.tileHeight=s,this.columns=r,this.rows=n,this.tiles=Array(r*n);// build up tile representation
for(let t=0;t<n;t++)for(let e=0;e<r;e++){let i=new rZ(e,t,this.graphicsOffset,this);this.tiles[e+t*r]=i,this.addChild(i);// TODO row/columns helpers
}}update(){this._collidersDirty&&(this.updateColliders(),this._collidersDirty=!1)}flagCollidersDirty(){this._collidersDirty=!0}_getOrSetColliderOriginalOffset(t){if(this._originalOffsets.has(t))return this._originalOffsets.get(t);{let e=t.offset;return this._originalOffsets.set(t,e),e}}updateColliders(){this._composite.clearColliders();let t=this.get(iN).pos;for(let e of this.tiles)if(e.solid)for(let i of e.getColliders()){let s=this._getOrSetColliderOriginalOffset(i);i.offset=this.tileToWorld(em(e.x,e.y)).sub(t).add(s).sub(em(this.tileWidth/2,this.tileHeight)),i.owner=this,this._composite.addCollider(i)}this.collider.update()}/**
     * Convert world space coordinates to the tile x, y coordinate
     * @param worldCoordinate
     */worldToTile(t){t=t.sub(this.transform.globalPos);let e=this.tileWidth/2,i=this.tileHeight/2;// See https://clintbellanger.net/articles/isometric_math/ for formula
return em(~~((t.x/e+t.y/i)/2),~~((t.y/i-t.x/e)/2))}/**
     * Given a tile coordinate, return the top left corner in world space
     * @param tileCoordinate
     */tileToWorld(t){let e=this.tileWidth/2,i=this.tileHeight/2,s=(t.x-t.y)*e,r=(t.x+t.y)*i;return em(s,r).add(this.transform.pos)}/**
     * Returns the [[IsometricTile]] by its x and y coordinates
     */getTile(t,e){return t<0||e<0||t>=this.columns||e>=this.rows?null:this.tiles[t+e*this.columns]}/**
     * Returns the [[IsometricTile]] by testing a point in world coordinates,
     * returns `null` if no Tile was found.
     */getTileByPoint(t){let e=this.worldToTile(t),i=this.getTile(e.x,e.y);return i}_getMaxZIndex(){let t=Number.NEGATIVE_INFINITY;for(let e of this.tiles){let i=e.get(iN).z;i>t&&(t=i)}return t}/**
     * Debug draw for IsometricMap, called internally by excalibur when debug mode is toggled on
     * @param gfx
     */debug(t){t.save(),t.z=this._getMaxZIndex()+.5;for(let e=0;e<this.rows+1;e++){let i=this.tileToWorld(em(0,e)),s=this.tileToWorld(em(this.columns,e));t.drawLine(i,s,ef.Red,2)}for(let e=0;e<this.columns+1;e++){let i=this.tileToWorld(em(e,0)),s=this.tileToWorld(em(e,this.rows));t.drawLine(i,s,ef.Red,2)}for(let e of this.tiles)t.drawCircle(this.tileToWorld(em(e.x,e.y)),3,ef.Yellow);t.restore()}}/**
 * Action that can represent a sequence of actions, this can be useful in conjunction with
 * [[ParallelActions]] to run multiple sequences in parallel.
 */class rY{constructor(t,e){this._stopped=!1,this._sequenceBuilder=e,this._sequenceContext=new sR(t),this._actionQueue=this._sequenceContext.getQueue(),this._sequenceBuilder(this._sequenceContext)}update(t){this._actionQueue.update(t)}isComplete(){return this._stopped||this._actionQueue.isComplete()}stop(){this._stopped=!0}reset(){this._stopped=!1,this._actionQueue.reset()}clone(t){return new rY(t,this._sequenceBuilder)}}/**
 * Action that can run multiple [[Action]]s or [[ActionSequence]]s at the same time
 */class rj{constructor(t){this._actions=t}update(t){for(let e=0;e<this._actions.length;e++)this._actions[e].update(t)}isComplete(t){return this._actions.every(e=>e.isComplete(t))}reset(){this._actions.forEach(t=>t.reset())}stop(){this._actions.forEach(t=>t.stop())}}/**
 * Static class for managing collision groups in excalibur, there is a maximum of 32 collision groups possible in excalibur
 */class rQ{/**
     * Create a new named collision group up to a max of 32.
     * @param name Name for the collision group
     * @param mask Optionally provide your own 32-bit mask, if none is provide the manager will generate one
     */static create(t,e){if(this._CURRENT_GROUP>this._MAX_GROUPS)throw Error(`Cannot have more than ${this._MAX_GROUPS} collision groups`);if(this._GROUPS.get(t))throw Error(`Collision group ${t} already exists`);let i=new iW(t,this._CURRENT_BIT,void 0!==e?e:~this._CURRENT_BIT);return this._CURRENT_BIT=this._CURRENT_BIT<<1|0,this._CURRENT_GROUP++,this._GROUPS.set(t,i),i}/**
     * Get all collision groups currently tracked by excalibur
     */static get groups(){return Array.from(this._GROUPS.values())}/**
     * Get a collision group by it's name
     * @param name
     */static groupByName(t){return this._GROUPS.get(t)}/**
     * Resets the managers internal group management state
     */static reset(){this._GROUPS=new Map,this._CURRENT_BIT=this._STARTING_BIT,this._CURRENT_GROUP=1}}/**
 * Type guard checking for internal initialize method
 * @internal
 * @param a
 */function rJ(t){return!!t._initialize}/**
 *
 */function r0(t){return!!t.onInitialize}/**
 *
 */function r1(t){return!!t._preupdate}/**
 *
 */function r2(t){return!!t.onPreUpdate}/**
 *
 */function r5(t){return!!t.onPostUpdate}/**
 *
 */function r3(t){return!!t.onPostUpdate}/**
 *
 */function r4(t){return!!t.onPreDraw}/**
 *
 */function r9(t){return!!t.onPostDraw}// using bitmasking the maximum number of groups is 32, because that is the highest 32bit integer that JS can present.
rQ._STARTING_BIT=1,rQ._MAX_GROUPS=32,rQ._CURRENT_GROUP=1,rQ._CURRENT_BIT=rQ._STARTING_BIT,rQ._GROUPS=new Map;/**
 * The [[Texture]] object allows games built in Excalibur to load image resources.
 * [[Texture]] is an [[Loadable]] which means it can be passed to a [[Loader]]
 * to pre-load before starting a level or game.
 */class r6{/**
     * @param path       Path to the image resource
     * @param color      Optionally set the color to treat as transparent the gif, by default [[Color.Magenta]]
     * @param bustCache  Optionally load texture with cache busting
     */constructor(t,e=ef.Magenta,i=!1){this.path=t,this.color=e,this._stream=null,this._gif=null,this._textures=[],this._animation=null,this._transparentColor=null,this._resource=new eR(t,"arraybuffer",i),this._transparentColor=e}/**
     * Should excalibur add a cache busting querystring? By default false.
     * Must be set before loading
     */get bustCache(){return this._resource.bustCache}set bustCache(t){this._resource.bustCache=t}/**
     * Begins loading the texture and returns a promise to be resolved on completion
     */async load(){let t=await this._resource.load();this._stream=new nt(t),this._gif=new ni(this._stream,this._transparentColor);let e=this._gif.images.map(t=>new ez(t.src,!1));return(// Load all textures
await Promise.all(e.map(t=>t.load())),this.data=this._textures=e)}isLoaded(){return!!this.data}/**
     * Return a frame of the gif as a sprite by id
     * @param id
     */toSprite(t=0){let e=this._textures[t].toSprite();return e}/**
     * Return the gif as a spritesheet
     */toSpriteSheet(){let t=this._textures.map(t=>t.toSprite());return new eO({sprites:t})}/**
     * Transform the GIF into an animation with duration per frame
     */toAnimation(t){let e=this.toSpriteSheet(),i=e.sprites.length;return this._animation=Animation.fromSpriteSheet(e,eu(0,i),t),this._animation}get readCheckBytes(){return this._gif.checkBytes}}let r7=t=>t.reduce(function(t,e){return 2*t+e},0),r8=t=>{let e=[];for(let i=7;i>=0;i--)e.push(!!(t&1<<i));return e};class nt{constructor(t){if(this.data=null,this.len=0,this.position=0,this.readByte=()=>{if(this.position>=this.data.byteLength)throw Error("Attempted to read past end of stream.");return this.data[this.position++]},this.readBytes=t=>{let e=[];for(let i=0;i<t;i++)e.push(this.readByte());return e},this.read=t=>{let e="";for(let i=0;i<t;i++)e+=String.fromCharCode(this.readByte());return e},this.readUnsigned=()=>{// Little-endian.
let t=this.readBytes(2);return(t[1]<<8)+t[0]},this.data=new Uint8Array(t),this.len=this.data.byteLength,0===this.len)throw Error("No data loaded from file")}}let ne=function(t,e){// TODO: Now that the GIF parser is a bit different, maybe this should get an array of bytes instead of a String?
let i,s,r=0,n=[],o=1<<t,a=o+1,h=t+1,l=[];// Maybe this streaming thing should be merged with the Stream?
for(;;){if(s=i,(i=function(t){let i=0;for(let s=0;s<t;s++)e.charCodeAt(r>>3)&1<<(7&r)&&(i|=1<<s),r++;return i}(h))===o){!function(){l=[],h=t+1;for(let t=0;t<o;t++)l[t]=[t];l[o]=[],l[a]=null}();continue}if(i===a)break;if(i<l.length)s!==o&&l.push(l[s].concat(l[i][0]));else{if(i!==l.length)throw Error("Invalid LZW code.");l.push(l[s].concat(l[s][0]))}n.push.apply(n,l[i]),l.length===1<<h&&h<12&&h++}// I don't know if this is technically an error, but some GIFs do it.
//if (Math.ceil(pos / 8) !== data.length) throw new Error('Extraneous LZW bytes.');
return n};// The actual parsing; returns an object with properties.
class ni{constructor(t,e=ef.Magenta){this._st=null,this._handler={},this._transparentColor=null,this.frames=[],this.images=[],this.globalColorTable=[],this.checkBytes=[],// LZW (GIF-specific)
this.parseColorTable=t=>{// Each entry is 3 bytes, for RGB.
let e=[];for(let i=0;i<t;i++){let t=this._st.readBytes(3),i="#"+t.map(t=>{let e=t.toString(16);return 1===e.length?"0"+e:e}).join("");e.push(i)}return e},this.readSubBlocks=()=>{let t,e;e="";do t=this._st.readByte(),e+=this._st.read(t);while(0!==t)return e},this.parseHeader=()=>{let t={sig:null,ver:null,width:null,height:null,colorRes:null,globalColorTableSize:null,gctFlag:null,sorted:null,globalColorTable:[],bgColor:null,pixelAspectRatio:null// if not 0, aspectRatio = (pixelAspectRatio + 15) / 64
};if(t.sig=this._st.read(3),t.ver=this._st.read(3),"GIF"!==t.sig)throw Error("Not a GIF file.");// XXX: This should probably be handled more nicely.
t.width=this._st.readUnsigned(),t.height=this._st.readUnsigned();let e=r8(this._st.readByte());t.gctFlag=e.shift(),t.colorRes=r7(e.splice(0,3)),t.sorted=e.shift(),t.globalColorTableSize=r7(e.splice(0,3)),t.bgColor=this._st.readByte(),t.pixelAspectRatio=this._st.readByte(),t.gctFlag&&(t.globalColorTable=this.parseColorTable(1<<t.globalColorTableSize+1),this.globalColorTable=t.globalColorTable),this._handler.hdr&&this._handler.hdr(t)&&this.checkBytes.push(this._handler.hdr)},this.parseExt=t=>{switch(t.label=this._st.readByte(),t.label){case 249:t.extType="gce",(t=>{this.checkBytes.push(this._st.readByte());let e=r8(this._st.readByte());t.reserved=e.splice(0,3),t.disposalMethod=r7(e.splice(0,3)),t.userInput=e.shift(),t.transparencyGiven=e.shift(),t.delayTime=this._st.readUnsigned(),t.transparencyIndex=this._st.readByte(),t.terminator=this._st.readByte(),this._handler.gce&&this._handler.gce(t)&&this.checkBytes.push(this._handler.gce)})(t);break;case 254:t.extType="com",(t=>{t.comment=this.readSubBlocks(),this._handler.com&&this._handler.com(t)&&this.checkBytes.push(this._handler.com)})(t);break;case 1:t.extType="pte",(t=>{this.checkBytes.push(this._st.readByte()),t.ptHeader=this._st.readBytes(12),t.ptData=this.readSubBlocks(),this._handler.pte&&this._handler.pte(t)&&this.checkBytes.push(this._handler.pte)})(t);break;case 255:t.extType="app",(t=>{(this.checkBytes.push(this._st.readByte()),t.identifier=this._st.read(8),t.authCode=this._st.read(3),"NETSCAPE"===t.identifier)?(t=>{this.checkBytes.push(this._st.readByte()),t.unknown=this._st.readByte(),t.iterations=this._st.readUnsigned(),t.terminator=this._st.readByte(),this._handler.app&&this._handler.app.NETSCAPE&&this._handler.app.NETSCAPE(t)&&this.checkBytes.push(this._handler.app)})(t):(t=>{t.appData=this.readSubBlocks(),this._handler.app&&this._handler.app[t.identifier]&&this._handler.app[t.identifier](t)&&this.checkBytes.push(this._handler.app[t.identifier])})(t)})(t);break;default:t.extType="unknown",(t=>{t.data=this.readSubBlocks(),this._handler.unknown&&this._handler.unknown(t)&&this.checkBytes.push(this._handler.unknown)})(t)}},this.parseImg=t=>{t.leftPos=this._st.readUnsigned(),t.topPos=this._st.readUnsigned(),t.width=this._st.readUnsigned(),t.height=this._st.readUnsigned();let e=r8(this._st.readByte());t.lctFlag=e.shift(),t.interlaced=e.shift(),t.sorted=e.shift(),t.reserved=e.splice(0,2),t.lctSize=r7(e.splice(0,3)),t.lctFlag&&(t.lct=this.parseColorTable(1<<t.lctSize+1)),t.lzwMinCodeSize=this._st.readByte();let i=this.readSubBlocks();t.pixels=ne(t.lzwMinCodeSize,i),t.interlaced&&(t.pixels=((t,e)=>{// Of course this defeats the purpose of interlacing. And it's *probably*
// the least efficient way it's ever been implemented. But nevertheless...
let i=Array(t.length),s=t.length/e,r=(s,r)=>{let n=t.slice(r*e,(r+1)*e);i.splice.apply(i,[s*e,e].concat(n))},n=[0,4,2,1],o=[8,8,4,2],a=0;for(let t=0;t<4;t++)for(let e=n[t];e<s;e+=o[t])r(e,a),a++;return i})(t.pixels,t.width)),this.frames.push(t),this.arrayToImage(t),this._handler.img&&this._handler.img(t)&&this.checkBytes.push(this._handler)},this.parseBlock=()=>{let t={sentinel:this._st.readByte(),type:""},e=String.fromCharCode(t.sentinel);switch(e){case"!":t.type="ext",this.parseExt(t);break;case",":t.type="img",this.parseImg(t);break;case";":t.type="eof",this._handler.eof&&this._handler.eof(t)&&this.checkBytes.push(this._handler.eof);break;default:throw Error("Unknown block: 0x"+t.sentinel.toString(16))}"eof"!==t.type&&this.parseBlock()},this.arrayToImage=t=>{let e=0,i=document.createElement("canvas");i.id=e.toString(),i.width=t.width,i.height=t.height,e++;let s=i.getContext("2d"),r=0,n=0;for(let e=0;e<t.pixels.length;e++)n%t.width==0&&(r++,n=0),this.globalColorTable[t.pixels[e]]===this._transparentColor.toHex()?s.fillStyle="rgba(0, 0, 0, 0)":s.fillStyle=this.globalColorTable[t.pixels[e]],s.fillRect(n,r,1,1),n++;let o=new Image;o.src=i.toDataURL(),this.images.push(o)},this._st=t,this._handler={},this._transparentColor=e,this.parseHeader(),this.parseBlock()}}class ns extends eF{constructor(t){super(),this.color=ef.Black,this.thickness=1;let{start:e,end:i,color:s,thickness:r}=t;this.start=e,this.end=i,this.color=null!=s?s:this.color,this.thickness=null!=r?r:this.thickness;let{width:n,height:o}=ey.fromPoints([e,i]);this.width=n,this.height=o}_drawImage(t,e,i){t.drawLine(this.start,this.end,this.color,this.thickness)}clone(){return new ns({start:this.start,end:this.end,color:this.color,thickness:this.thickness})}}/**
 * A polygon [[Graphic]] for drawing arbitrary polygons to the [[ExcaliburGraphicsContext]]
 *
 * Polygons default to [[ImageFiltering.Blended]]
 */class nr extends i_{get points(){return this._points}set points(t){this._points=t;let e=this.minPoint;this.width=this._points.reduce((t,e)=>Math.max(e.x,t),0)-e.x,this.height=this._points.reduce((t,e)=>Math.max(e.y,t),0)-e.y,this.flagDirty()}get minPoint(){let t=this._points.reduce((t,e)=>Math.min(e.x,t),1/0),e=this._points.reduce((t,e)=>Math.min(e.y,t),1/0);return em(t,e)}constructor(t){super(t),this.points=t.points,this.filtering=G.Blended,this.rasterize()}clone(){return new nr({points:this.points.map(t=>t.clone()),...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){if(this.points&&this.points.length){t.beginPath();// Iterate through the supplied points and construct a 'polygon'
let e=this.minPoint.negate(),i=this.points[0].add(e);t.moveTo(i.x,i.y),this.points.forEach(i=>{t.lineTo(i.x+e.x,i.y+e.y)}),t.lineTo(i.x,i.y),t.closePath(),this.color&&t.fill(),this.strokeColor&&t.stroke()}}}class nn{constructor(){// Code from StephenCleary https://gist.github.com/StephenCleary/ba50b2da419c03b9cba1d20cb4654d5e
this._queue=[]}get length(){return this._queue.length}enqueue(){let t=new ex;return this._queue.push(t),t.promise}dequeue(t){let e=this._queue.shift();e.resolve(t)}}/**
 * Semaphore allows you to limit the amount of async calls happening between `enter()` and `exit()`
 *
 * This can be useful when limiting the number of http calls, browser api calls, etc either for performance or to work
 * around browser limitations like max Image.decode() calls in chromium being 256.
 */class no{constructor(t){this._count=t,this._waitQueue=new nn}get count(){return this._count}get waiting(){return this._waitQueue.length}async enter(){return 0!==this._count?(this._count--,Promise.resolve()):this._waitQueue.enqueue()}exit(t=1){if(0!==t){for(;0!==t&&0!==this._waitQueue.length;)this._waitQueue.dequeue(null),t--;this._count+=t}}}/**
 * The current Excalibur version string
 * @description `process.env.__EX_VERSION` gets replaced by Webpack on build
 */let na="0.28.0";tb();// This file is used as the bundle entry point and exports everything
// that will be exposed as the `ex` global variable.
// ex.Events namespace
// ex.Input namespace
// TODO deprecated import site remove in v0.29.0
// ex.Util namespaces
// ex.Deprecated
// import * as deprecated from './Deprecated';
// export { deprecated as Deprecated };
// export * from './Deprecated';
})(),n.fWn,n.Ia8;var o=n.rqv;n.hLI,n.yyv,n.tX5;var a=n.vtX;n.r7K,n.lCh,n.cE4;var h=n.fwF;n.sce,n.AQ6;var l=n._c7;n.KUs,n.Ajp,n.dkO,n.RDh;var d=n._H9;n.mxs,n.OmD,n.kBf,n.C4F,n.NQt,n.JjN,n.EK_,n.V1s,n.xHm,n.Xz7,n.Cdc,n.FKn,n.SUY,n.ab2,n.GfZ,n.YMS,n.oyv,n.aUb,n.SdD,n.JUv,n.jEj,n.TFq,n.HDU,n.R_y,n.ydN,n.t50,n.s$$,n.v2G;var c=n.Ilk;n.s9i,n.dxL,n.LLX;var u=n.wA2;n.R_p,n.IQ$,n.I5F,n.X8$,n.FR6,n.U8o;var p=n.kbG;n.iS_,n.cGG,n.RPN,n.skb,n.SLU,n.RdJ,n.cNu,n.gU7,n.LSk,n.Nmp;var _=n.d1Y;n.xrL,n.sRW,n.cmV,n.qWz,n.N0Q;var g=n.q8b;n.ynB,n.jT9;var m=n.wAz,f=n.D4V;n.NLr,n.N6H,n.W1A,n.JHW,n.ZZ$,n.v2K,n.pBf,n.vpe,n.GMl,n.zW2,n.B0K,n.Nv7,n.C_p,n.MUA,n.xqU,n.pTp,n.vUK,n.j9l;var v=n.Zxw;n.v51,n.Hdx;var y=n.Z$d;n.iqV,n.o$7;var x=n.olM;n.Zm$,n.$QH,n.i78,n.nJg,n.h6u,n.hts,n.j88,n.VME,n.fy2,n.nt,n.Ukr,n.zsu,n.oA6,n.TVh,n.TwZ,n.GTT,n.xxj,n.XdK,n.Jmb;var w=n.cXo;n.Dm5,n.IIB,n.ebW,n.zI0,n.LYD,n.cEG,n.SEl,n.t9V,n.ez5,n.N1d,n.R8U,n.SKZ,n.__J,n.RI$,n.x12,n.ccz;var b=n.aNw;n.XrL,n.xwn,n.dNK,n.ini,n.YdH,n.F5T,n.y3G,n.l57,n.xn0,n.t2V,n.uxB,n.cpd,n.fiy,n.$XZ,n.UG6,n.uqK,n.STE,n.y$z,n.mAD,n.sOq,n.hUw;var C=n._0G;n.Sqs,n.hpZ;var A=n.Vol;n.vYX,n.wIZ,n.cBi,n.c30,n.MPV,n.RFv,n.Ux6,n.rxy,n.I$c,n.kfC,n.VjY,n.mgq,n.YVA,n.Kgp,n.HH$,n.M_d,n.rgh,n.Ra6,n.KhR,n.BS5,n.xhz,n.xOq,n.a9j,n.bHk,n.CgK,n.cuY,n.kvE,n.SBu,n.AE_,n.ctO,n.OLH;var S=n.kky;n.nSF,n.zHn,n.zwx,n.AeJ,n.hLz,n.D9g,n.wA,n.jhr,n.GVs,n._zO,n.LXZ,n.w6$,n.mhV,n.MOD,n.kwd,n.Lmr,n.xsS,n.K5l,n.lLr,n.Z$r,n.IXb,n.SGH,n.SMj,n.L34,n.exe,n.bnF,n.MFA;var T=n.$uU;n.Sap,n.jyi,n.E03;var E=n.V6q;n.rg2,n.DVW,n.nVo,n.F6N,n.xP7,n.Odq,n.Zif,n.ZGJ,n.MJk;var P=n.xvT;n.PHM,n.dpR,n.n9L,n.KwO,n.SxM,n.B7y,n.x7r,n.wx7,n.Uvn,n.OFT,n.xzN,n.CcZ,n.M5Z;var I=n.ZrN,M=n.OWs;n.dF9,n.oZy,n.rD2,n.VHo,n.ohE,n.R$E,n.xQN,n.AdJ,n.q3I,n.Pab;var k=n.uZ5;n.McK,n.F9c,n.k0b,n.hnT,n.RSJ,n.Mku,n.h90,n.rms,n.ErP,n.aVg,n.lPc,n.Z8E,n._N2,n.yFn,n.lNv,n.cu9,n.MZQ,n.FUM,n.BxR;var R=n.vdf,D=n.iaL;n.w6H,n.Q4c,n.Xxe,n.Uxb,n.Yr5;var B=n.Bhw;n.yOA;var F={};F=new URL("KnightSheet.2897b254.png",import.meta.url).toString();var U={};U=new URL("SpiderSheet.597e1dd4.png",import.meta.url).toString();var L={};L=new URL("HeartSheet.54a99443.png",import.meta.url).toString();var z={};z=new URL("UISheet.2837e64f.png",import.meta.url).toString();var O={};O=new URL("TerrainSheet.720a833c.png",import.meta.url).toString();var H={};H=new URL("HighlightSheet.fff21fa0.png",import.meta.url).toString();var N={};N=new URL("Cloud.e0b572a9.png",import.meta.url).toString();var $={};$=new URL("Smoke.7bc6cfe7.png",import.meta.url).toString();var W={};W=new URL("hit.cc332530.wav",import.meta.url).toString();var V={};V=new URL("move.8e8aee5f.wav",import.meta.url).toString();var G={};G=new URL("unitselect.d85b2a99.wav",import.meta.url).toString();const q={KnightSpriteSheet:new w(/*@__PURE__*/t(F)),SpiderSheet:new w(/*@__PURE__*/t(U)),HeartSheet:new w(/*@__PURE__*/t(L)),UISheet:new w(/*@__PURE__*/t(z)),TerrainSheet:new w(/*@__PURE__*/t(O)),HighlightSheet:new w(/*@__PURE__*/t(H)),CloudSheet:new w(/*@__PURE__*/t(N)),SmokeSheet:new w(/*@__PURE__*/t($)),HitSound:new T(/*@__PURE__*/t(W)),MoveSound:new T(/*@__PURE__*/t(V)),SelectSound:new T(/*@__PURE__*/t(G))},X=E.fromImageSource({image:q.TerrainSheet,grid:{rows:5,columns:5,spriteHeight:32,spriteWidth:32}}),Z=E.fromImageSource({image:q.HighlightSheet,grid:{rows:1,columns:5,spriteHeight:32,spriteWidth:32}}),K=h.fromSpriteSheetCoordinates({spriteSheet:Z,strategy:l.Loop,frameCoordinates:[{x:0,y:0,duration:100},{x:1,y:0,duration:100},{x:2,y:0,duration:100},{x:3,y:0,duration:100},{x:4,y:0,duration:100}]}),Y=E.fromImageSource({image:q.SpiderSheet,grid:{rows:1,columns:4,spriteHeight:32,spriteWidth:32}}),j=h.fromSpriteSheetCoordinates({spriteSheet:Y,strategy:l.Loop,frameCoordinates:[{x:0,y:0,duration:200},{x:1,y:0,duration:200},{x:2,y:0,duration:200},{x:3,y:0,duration:200}]}),Q=E.fromImageSource({image:q.KnightSpriteSheet,grid:{rows:1,columns:4,spriteHeight:32,spriteWidth:32}}),J=h.fromSpriteSheetCoordinates({spriteSheet:Q,strategy:l.Loop,frameCoordinates:[{x:0,y:0,duration:200},{x:1,y:0,duration:200},{x:2,y:0,duration:200},{x:3,y:0,duration:200}]}),tt=E.fromImageSource({image:q.HeartSheet,grid:{rows:1,columns:6,spriteHeight:32,spriteWidth:32}}),te=q.SmokeSheet.toSprite(),ti=new b;for(let t of Object.values(q))ti.addResource(t);const ts=performance.now();console.log("Random seed:",ts);const tr=new S(ts),tn=B(3,3),to=B(96,128),ta={Knight:{graphics:{offset:B(0,12*tn.y),idle:J},health:5,movement:4,attack:2,range:1},Spider:{graphics:{offset:B(0,8*tn.y),idle:j},health:3,movement:3,attack:1,range:1}};class th extends a{constructor(t){super({pos:t,coordPlane:p.Screen,vel:B(R(-30,-100),0),width:100,height:100})}onInitialize(t){this.cloudSprite=q.CloudSheet.toSprite(),this.cloudSprite.scale=tn,this.graphics.use(this.cloudSprite)}onPostUpdate(t,e){this.pos.x+this.cloudSprite.width<0&&(this.pos.x=t.screen.contentArea.right+this.cloudSprite.width)}}class tl extends u{static #t=this.type="path-node";constructor(t){super(),this.type="path-node",this.pos=B(0,0),/**
     * Is this path node traversable by anything at all?
     */this.isWalkable=!0,/**
     * Is this path node traversable by certain things
     */this.walkableMask=-1// 32-bit mask
,this.gScore=1/0,this.hScore=1/0,this.weight=1,this.direction=M.Zero,this.connections=[],this.previousNode=null,this.pos=t}}const td=K.clone(),tc=K.clone(),tu=K.clone();class tp extends a{/**
     * Individual cells on the board
     * 
     * @param x integer coordinate
     * @param y integer coordinate
     * @param board 
     */constructor(t,e,i){super({name:`cell(${t}, ${e})`,pos:B(t*(i.tileWidth+i.margin)*tn.x,e*(i.tileHeight+i.margin)*tn.y).add(to),anchor:M.Zero}),this.x=t,this.y=e,this.board=i,this.unit=null,this.pathNode=new tl(this.pos),this.addComponent(this.pathNode),this.sprite=X.sprites[D(0,5)],this.sprite.scale=tn,this.graphics.use(this.sprite.clone()),td.scale=tn,td.opacity=.75,tc.scale=tn,tc.opacity=.75,tc.tint=c.Green,tu.scale=tn,tu.opacity=.75,tu.tint=c.Red,this.graphics.add("range",td),this.graphics.add("path",tc),this.graphics.add("attack",tu)}addUnit(t){this.unit=t,this.unit.cell=this,this.pathNode.walkableMask=t.player.mask}removeUnit(t){this.pathNode.walkableMask=-1,this.unit=null,t.cell=null}toggleHighlight(t,e){// reset highlight
this.graphics.hide("range"),this.graphics.hide("path"),this.graphics.hide("attack"),t?this.graphics.show(e):this.graphics.hide(e)}getDistance(t){return Math.abs(this.pos.x-t.pos.x)+Math.abs(this.pos.y-t.pos.y)}/**
     * Returns the orthogonal neighbors (up, down, left, right)
     * @returns 
     */getNeighbors(){return[this.board.getCell(this.x,this.y-1),this.board.getCell(this.x,this.y+1),this.board.getCell(this.x+1,this.y),this.board.getCell(this.x-1,this.y)].filter(function(t){return null!==t})}}class t_{constructor(t){this.heuristicWeight=1,this.heuristic=(t,e)=>Math.abs(t.pos.x-e.pos.x)+Math.abs(e.pos.y-e.pos.y),this.query=t.world.queryManager.createQuery([tl.type])}_buildPath(t){let e=[];for(;t.previousNode;)e.unshift(t),t=t.previousNode;return e.unshift(t),e}_getRangeHelper(t,e,i,s){s>=0&&(e.push(t),t.connections.filter(t=>t.isWalkable&&!!(t.walkableMask&i)).forEach(t=>this._getRangeHelper(t,e,i,s-1)))}getRange(t,e,i){let s=[];return this._getRangeHelper(t,s,e,i),s=// dedup results
(s=s.filter((t,e,i)=>i.indexOf(t)===e)).filter(t=>t.isWalkable)}/**
     * 
     * @param start start node for the path
     * @param end end node for the path
     * @param mask bit mask to test against the node's walkability mask, same bit position means walkable (0b111 & 0b001) = walkable, (0b010 & 0b001) = not walkable
     * @param range 
     * @returns 
     */findPath(t,e,i,s){let r=this.query.getEntities().map(t=>t.get(tl));r.forEach(t=>{t.gScore=0,t.hScore=0,t.previousNode=null}),t.gScore=0,t.hScore=t.gScore+this.heuristic(t,e)*this.heuristicWeight,t.direction=M.Down;let n=[t],o=[];for(;n.length>0;){// priority queue, evaluate nodes with the lowest cost
let t=n.sort((t,e)=>t.hScore-e.hScore),r=t[0];// Done!
if(r===e)return this._buildPath(r);// Remove current from the open node set
let a=n.indexOf(r);n.splice(a,1),o.push(r);// Find the neighbors that haven't been explored
let h=r.connections.filter(t=>t.isWalkable&&!!(t.walkableMask&i)).filter(t=>-1===o.indexOf(t));s&&(h=h.filter(t=>s.indexOf(t)>-1));// Current direction!
let l=r.direction;h.forEach(t=>{if(-1===n.indexOf(t)){t.previousNode=r,t.gScore=t.weight+r.gScore,t.hScore=t.gScore+this.heuristic(t,e)*this.heuristicWeight;// Turn penalty if direction is not straight
let i=t.pos.sub(r.pos).normalize();t.direction=i;let s=l.dot(i);0===s&&(t.hScore+=130),n.push(t)}})}// error case
return[]}}const tg=new A({emitterType:m.Circle,radius:16,minVel:0,maxVel:20,minAngle:0,maxAngle:6.2,isEmitting:!1,emitRate:8,opacity:.75,fadeFlag:!0,particleLife:1500,maxSize:20,minSize:1,startSize:10,endSize:.01,acceleration:B(0,-32),particleSprite:te,randomRotation:!0,particleRotationalVelocity:Math.PI});class tm extends a{constructor(t,e,i,s,r){super({anchor:B(0,0),z:2}),this.player=r,this.cell=null,this.moved=!1,this.attacked=!1,this.unitConfig={...ta[i]},this.health=this.unitConfig.health,this.anim=this.unitConfig.graphics.idle.clone(),this.anim.scale=tn,this.graphics.use(this.anim),this.graphics.onPostDraw=this.onPostDraw.bind(this);let n=s.getCell(t,e);n&&(this.pos=n.pos.sub(this.unitConfig.graphics.offset),n.addUnit(this))}onPostUpdate(){this.attacked?this.anim.tint=c.Gray:this.anim.tint=c.White,this.health<=0&&(this.cell?.removeUnit(this),// TODO better death animation
this.actions.runAction(new C([new o(this,t=>t.rotateBy(2e3,.5)),new o(this,t=>t.easeBy(B(0,-1e3),300,g.EaseInQuad))])).die())}onPostDraw(t){if(this.health>0){let e=tt.getSprite(k(this.health,0,5),0);e&&(e.scale=tn,e.draw(t,10*tn.x,16*tn.y))}}async move(t){this.cell&&this.cell.removeUnit(this);let e=null;for(let i of t.slice(1,t.length)){e=i.owner;let t=new o(this,t=>{t.delay(200),t.callMethod(()=>{q.MoveSound.play()})}),s=new o(this,t=>{t.easeTo(e.pos.sub(this.unitConfig.graphics.offset),300,g.EaseInOutCubic),t.callMethod(()=>{tg.pos=this.pos.add(tn.scale(16)),tg.emitParticles(5)})}),r=new C([t,s]);await this.actions.runAction(r).toPromise()}e&&e.addUnit(this),this.moved=!0}reset(){this.moved=!1,this.attacked=!1}canAttack(){return!this.attacked}canMove(){return!this.moved}hasActions(){return this.canMove()||this.canAttack()}pass(){this.moved=!0,this.attacked=!0}getPossibleTargets(){if(this.cell){let t=this.cell.board.pathFinder.getRange(this.cell.pathNode,~this.player.mask,this.unitConfig.range);return t.filter(t=>t.owner)}}async attack(t){t.health-=this.unitConfig.attack,q.HitSound.play(),await t.actions.blink(200,200,5).toPromise(),this.attacked=!0;// TODO handle enemy death
}}class tf{static #t=this._STARTING_BIT=1;static #e=this._CURRENT_GROUP=tf._STARTING_BIT;constructor(t,e){this.name=t,this.board=e,this.active=!1,this.mask=tf._CURRENT_GROUP=tf._CURRENT_GROUP<<1|0}async turnStart(){this.active=!0;let t=this.board.getUnits().filter(t=>t.player===this);t.forEach(t=>t.reset())}async turnEnd(){this.active=!1}}function tv(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ty=globalThis,tx=ty.ShadowRoot&&(void 0===ty.ShadyCSS||ty.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tw=Symbol(),tb=new WeakMap;class tC{constructor(t,e,i){if(this._$cssResult$=!0,i!==tw)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tx&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=tb.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tb.set(e,t))}return t}toString(){return this.cssText}}const tA=t=>new tC("string"==typeof t?t:t+"",void 0,tw),tS=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new tC(i,t,tw)},tT=(t,e)=>{if(tx)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),s=ty.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},tE=tx?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return tA(e)})(t):t,{is:tP,defineProperty:tI,getOwnPropertyDescriptor:tM,getOwnPropertyNames:tk,getOwnPropertySymbols:tR,getPrototypeOf:tD}=Object,tB=globalThis,tF=tB.trustedTypes,tU=tF?tF.emptyScript:"",tL=tB.reactiveElementPolyfillSupport,tz=(t,e)=>t,tO={toAttribute(t,e){switch(e){case Boolean:t=t?tU:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},tH=(t,e)=>!tP(t,e),tN={attribute:!0,type:String,converter:tO,reflect:!1,hasChanged:tH};Symbol.metadata??=Symbol("metadata"),tB.litPropertyMetadata??=new WeakMap;class t$ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tN){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&tI(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=tM(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){let n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tN}static _$Ei(){if(this.hasOwnProperty(tz("elementProperties")))return;let t=tD(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tz("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tz("properties"))){let t=this.properties,e=[...tk(t),...tR(t)];for(let i of e)this.createProperty(i,t[i])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(tE(t))}else void 0!==t&&e.push(tE(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tT(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:tO).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:tO;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??tH)(s?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}}t$.elementStyles=[],t$.shadowRootOptions={mode:"open"},t$[tz("elementProperties")]=new Map,t$[tz("finalized")]=new Map,tL?.({ReactiveElement:t$}),(tB.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tW=globalThis,tV=tW.trustedTypes,tG=tV?tV.createPolicy("lit-html",{createHTML:t=>t}):void 0,tq="$lit$",tX=`lit$${(Math.random()+"").slice(9)}$`,tZ="?"+tX,tK=`<${tZ}>`,tY=document,tj=()=>tY.createComment(""),tQ=t=>null===t||"object"!=typeof t&&"function"!=typeof t,tJ=Array.isArray,t0=t=>tJ(t)||"function"==typeof t?.[Symbol.iterator],t1="[ 	\n\f\r]",t2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,t5=/-->/g,t3=/>/g,t4=RegExp(`>|${t1}(?:([^\\s"'>=/]+)(${t1}*=${t1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),t9=/'/g,t6=/"/g,t7=/^(?:script|style|textarea|title)$/i,t8=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),et=t8(1),ee=(t8(2),Symbol.for("lit-noChange")),ei=Symbol.for("lit-nothing"),es=new WeakMap,er=tY.createTreeWalker(tY,129);function en(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tG?tG.createHTML(e):e}const eo=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=t2;for(let e=0;e<i;e++){let i=t[e],a,h,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(h=o.exec(i)));)d=o.lastIndex,o===t2?"!--"===h[1]?o=t5:void 0!==h[1]?o=t3:void 0!==h[2]?(t7.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=t4):void 0!==h[3]&&(o=t4):o===t4?">"===h[0]?(o=r??t2,l=-1):void 0===h[1]?l=-2:(l=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?t4:'"'===h[3]?t6:t9):o===t6||o===t9?o=t4:o===t5||o===t3?o=t2:(o=t4,r=void 0);let c=o===t4&&t[e+1].startsWith("/>")?" ":"";n+=o===t2?i+tK:l>=0?(s.push(a),i.slice(0,l)+tq+i.slice(l)+tX+c):i+tX+(-2===l?e:c)}return[en(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class ea{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,a=this.parts,[h,l]=eo(t,e);if(this.el=ea.createElement(h,i),er.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=er.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(tq)){let e=l[n++],i=s.getAttribute(t).split(tX),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?eu:"?"===o[1]?ep:"@"===o[1]?e_:ec}),s.removeAttribute(t)}else t.startsWith(tX)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(t7.test(s.tagName)){let t=s.textContent.split(tX),e=t.length-1;if(e>0){s.textContent=tV?tV.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],tj()),er.nextNode(),a.push({type:2,index:++r});s.append(t[e],tj())}}}else if(8===s.nodeType){if(s.data===tZ)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(tX,t+1));)a.push({type:7,index:r}),t+=tX.length-1}}r++}}static createElement(t,e){let i=tY.createElement("template");return i.innerHTML=t,i}}function eh(t,e,i=t,s){if(e===ee)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,n=tQ(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=eh(t,r._$AS(t,e.values),r,s)),e}class el{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??tY).importNode(e,!0);er.currentNode=s;let r=er.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new ed(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new eg(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=er.nextNode(),n++)}return er.currentNode=tY,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ed{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=ei,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){tQ(t=eh(this,t,e))?t===ei||null==t||""===t?(this._$AH!==ei&&this._$AR(),this._$AH=ei):t!==this._$AH&&t!==ee&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):t0(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ei&&tQ(this._$AH)?this._$AA.nextSibling.data=t:this.$(tY.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ea.createElement(en(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new el(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=es.get(t.strings);return void 0===e&&es.set(t.strings,e=new ea(t)),e}T(t){tJ(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new ed(this.k(tj()),this.k(tj()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ec{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=ei,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ei}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!tQ(t=eh(this,t,e,0))||t!==this._$AH&&t!==ee)&&(this._$AH=t);else{let s,o;let a=t;for(t=r[0],s=0;s<r.length-1;s++)(o=eh(this,a[i+s],e,s))===ee&&(o=this._$AH[s]),n||=!tQ(o)||o!==this._$AH[s],o===ei?t=ei:t!==ei&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.O(t)}O(t){t===ei?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class eu extends ec{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===ei?void 0:t}}class ep extends ec{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==ei)}}class e_ extends ec{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=eh(this,t,e,0)??ei)===ee)return;let i=this._$AH,s=t===ei&&i!==ei||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==ei&&(i===ei||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class eg{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){eh(this,t)}}const em=tW.litHtmlPolyfillSupport;em?.(ea,ed),(tW.litHtmlVersions??=[]).push("3.1.0");const ef=(t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new ed(e.insertBefore(tj(),t),t,void 0,i??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ev extends t${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ef(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ee}}ev._$litElement$=!0,ev.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ev});const ey=globalThis.litElementPolyfillSupport;ey?.({LitElement:ev}),(globalThis.litElementVersions??=[]).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ex={attribute:!0,type:String,converter:tO,reflect:!1,hasChanged:tH},ew=(t=ex,e,i)=>{let{kind:s,metadata:r}=i,n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function eb(t){return(e,i)=>"object"==typeof i?ew(t,e,i):((t,e,i)=>{let s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eC=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i),eA={ATTRIBUTE:1},eS=t=>(...e)=>({_$litDirective$:t,values:e});class eT{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eE="important",eP=" !"+eE,eI=eS(class extends eT{constructor(t){if(super(t),t.type!==eA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(let t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let s=e[t];if(null!=s){this.ut.add(t);let e="string"==typeof s&&s.endsWith(eP);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?eE:""):i[t]=s}}return ee}}),eM=eS(class extends eT{constructor(t){if(super(t),t.type!==eA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.it){for(let i in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.st?.has(i)&&this.it.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.it)t in e||(i.remove(t),this.it.delete(t));for(let t in e){let s=!!e[t];s===this.it.has(t)||this.st?.has(t)||(s?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return ee}});let ek=class extends ev{static #t=this.styles=tS`
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(50%);
            }
            to {
                opacity: 1;
                transform: translateY(0%);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0%);
            }
            to {
                opacity: 0;
                transform: translateY(50%);
            }
        }

        .menu {
            position: absolute;
            top: 0;
            left: 0;
            width: calc(64px * var(--pixel-conversion));
            display: none;
            opacity: 0;
            flex-direction: column;
            font-size: calc(8px * var(--pixel-conversion));
            background-color: rgba(240, 220, 220, 1);

            border: black calc(1px * var(--pixel-conversion)) solid;
            z-index: 1;
        }

        .overlay {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }

        .show {
            display: flex;
            opacity: 1;
            animation: fadeIn 140ms ease normal;
        }

        .hide {
            animation: fadeOut 140ms ease normal;
        }

        .options {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            background-color: red;
            width: 100%;
            height: calc(7px * var(--pixel-conversion));
        }

        button {
            all: unset;
            padding: calc(2px * var(--pixel-conversion));
            padding-left: calc(4px * var(--pixel-conversion));
            cursor: pointer;
        }

        button:focus, button:hover {
            background-color: rgba(220, 200, 200, 1);
        }

        button:active {
            background-color: rgba(250, 240, 240, 1);
        }
    `;firstUpdated(){this.menuHtml?.addEventListener("animationend",t=>{"fadeOut"===t.animationName&&(this._show=!1,this.menuHtml?.classList.remove("hide"),this.requestUpdate())})}sendEvent(t){return()=>{this.dispatchEvent(new Event(t)),this.hide(),this.requestUpdate()}}show(){this._show=!0,this._debounce=Date.now()}hide(){let t=Date.now();t-this._debounce>200&&(this.menuHtml?.classList.add("hide"),this.clearEvents())}render(){let t=this._show?et`<div class="overlay" @click=${this.hide}></div>`:ei;return et`
        ${t}
        <div class=${eM({menu:!0,show:this._show})} style=${eI({left:`${this.left}px`,top:`${this.top}px`})}>
            <div class="title-bar"></div>
            <div class="options">
                <button style=${eI({display:this.unit?.canMove()?"block":"none"})} @click="${this.sendEvent("move")}">Move</button>
                <button style=${eI({display:this.unit?.canAttack()?"block":"none"})} @click="${this.sendEvent("attack")}">Attack</button>
                <button  @click="${this.sendEvent("pass")}">Pass</button>
            </div>
        </div>
        `}constructor(...t){super(...t),this.left=0,this.top=0,this.fontSize=0,this.width=0,this.unit=null,this.pixelConversion=1,this._show=!1,this.clearEvents=()=>{},// Debounce needed for mobile for some reason
// Overlay is also receiving the event
this._debounce=0}};tv([eb({type:Number})],ek.prototype,"left",void 0),tv([eb({type:Number})],ek.prototype,"top",void 0),tv([eb({type:Number})],ek.prototype,"fontSize",void 0),tv([eb({type:Number})],ek.prototype,"width",void 0),tv([eb({attribute:!1})],ek.prototype,"unit",void 0),tv([eb({type:Number})],ek.prototype,"pixelConversion",void 0),tv([eb({state:!0,attribute:!1})],ek.prototype,"_show",void 0),tv([(t,e,i)=>{let s=t=>t.renderRoot?.querySelector(".menu")??null;return eC(t,e,{get(){return s(this)}})}],ek.prototype,"menuHtml",void 0),ek=tv([(e="unit-menu",(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})],ek);const eR=new f({width:800,height:800,displayMode:_.FitScreenAndFill,antialiasing:!1,suppressHiDPIScaling:!0,configurePerformanceCanvas2DFallback:{allow:!1}});// TODO move to level
// Add clouds :3
eR.add(new th(B(800,0))),eR.add(new th(B(400,300))),eR.add(new th(B(700,700)));const eD=new class{constructor(t,e,i){this.tileWidth=32,this.tileHeight=32,this.margin=2,this.cells=[],this.rows=t,this.cols=e;for(let t=0;t<this.rows*this.cols;t++){let e=new tp(t%this.cols,Math.floor(t/this.cols),this);this.cells.push(e),i.add(e)}// setup neighbors connections
for(let t of this.cells)t.pathNode.connections=t.getNeighbors().map(t=>t.pathNode);this.pathFinder=new t_(i)}getUnits(){let t=[];for(let e of this.cells)e.unit&&e.unit.active&&t.push(e.unit);return t}getEmptyCells(){return this.cells.filter(t=>!t.unit)}getCellByWorldPos(t){return this.getCell(Math.floor((t.x-to.x)/((this.tileWidth+this.margin)*tn.x)),Math.floor((t.y-to.y)/((this.tileHeight+this.margin)*tn.y)))}getCell(t,e){return t<0||t>=this.cols||e<0||e>=this.rows?null:this.cells[t+e*this.cols]}}(6,6,eR.currentScene),eB=new class{constructor(t){this.engine=t,this.uiToWorldPos=new Map,this.unitMenu=new ek,document.body.appendChild(this.unitMenu),document.documentElement.style.setProperty("--pixel-conversion",this.worldDistanceToPage(1).toString()),window.addEventListener("resize",()=>{document.documentElement.style.setProperty("--pixel-conversion",this.worldDistanceToPage(1).toString());let t=this.uiToWorldPos.get(this.unitMenu);if(t){let e=this.engine.screen.worldToPageCoordinates(t);this.unitMenu.left=e.x+this.worldDistanceToPage(32),this.unitMenu.top=e.y}})}worldDistanceToPage(t){let e=this.engine.screen.worldToPageCoordinates(M.Zero),i=this.engine.screen.worldToPageCoordinates(B(t*tn.x,0)).sub(e);return i.x}showUnitMenu(t,e){let i=this.unitMenu,s=this.engine.screen.worldToPageCoordinates(t.pos);i.left=s.x+this.worldDistanceToPage(32),i.top=s.y,i.unit=t;let r=()=>{e.move(),a()},n=()=>{e.attack(),a()},o=()=>{e.pass(),a()};i.addEventListener("move",r),i.addEventListener("attack",n),i.addEventListener("pass",o);let a=()=>{i.removeEventListener("move",r),i.removeEventListener("attack",n),i.removeEventListener("pass",o)};return i.clearEvents=a,i.show(),this.uiToWorldPos.set(i,t.pos),i}}(eR),eF=new class{constructor(t){this.board=t,this.currentPlayer=null,this.currentSelectionMode="move",this.currentUnitSelection=null,this.currentRange=[],this.currentPath=[]}reset(){this.resetHighlight(),this.currentUnitSelection=null,this.currentPath=[],this.currentRange=[]}selectPlayer(t){this.currentPlayer=t}selectUnit(t,e){t.player===this.currentPlayer&&(this.currentUnitSelection=t,this.currentSelectionMode=e,"move"===e?(this.currentRange=this.findMovementRange(this.currentUnitSelection),this.showHighlight(this.currentRange,"range")):(this.currentRange=this.findAttackRange(this.currentUnitSelection),this.showHighlight(this.currentRange,"attack")))}async selectDestinationAndMove(t,e){if(t.player!==this.currentPlayer)return;let i=this.findMovementRange(t);0===this.currentPath.length&&(this.currentPath=this.findPath(e,i)),this.currentPath.length>1&&await t.move(this.currentPath),this.reset()}findAttackRange(t){return this.currentUnitSelection&&t.cell?this.board.pathFinder.getRange(t.cell.pathNode,~t.player.mask,this.currentUnitSelection.unitConfig.range):[]}findMovementRange(t){return this.currentUnitSelection&&t.cell?this.board.pathFinder.getRange(t.cell.pathNode,t.player.mask,this.currentUnitSelection.unitConfig.movement).filter(e=>e.isWalkable&&!!(e.walkableMask&t.player.mask)):[]}resetHighlight(){this.board.cells.forEach(t=>{t.toggleHighlight(!1,"range"),t.toggleHighlight(!1,"path"),t.toggleHighlight(!1,"attack")})}showHighlight(t,e){t.forEach(t=>{let i=t.owner;i.toggleHighlight(!0,e)})}findPath(t,e){if(!this.currentUnitSelection)return[];let i=this.currentUnitSelection.cell?.pathNode;if(t&&!t.unit&&e.includes(t.pathNode)){let s=this.board.pathFinder.findPath(i,t?.pathNode,this.currentUnitSelection.player.mask,e);return s}return[]}}(eD),eU=new class extends tf{constructor(t,e,i){super(t,i),this.selectionManger=e,this.active=!1}async turnStart(){this.active=!0}async turnEnd(){this.active=!1}async makeMove(){let t=this.board.getUnits().filter(t=>t.player===this);for(let e of t){await I.delay(1e3);// pick a random valid move
let t=[];e.cell&&(t=this.board.pathFinder.getRange(e.cell.pathNode,this.mask,e.unitConfig.movement));let i=tr.pickOne(t),s=i.owner;this.selectionManger.selectUnit(e,"move"),await I.delay(1e3);let r=this.selectionManger.findPath(s,t);this.selectionManger.showHighlight(r,"path"),await I.delay(1e3),await this.selectionManger.selectDestinationAndMove(e,s),await I.delay(1e3)}return!0}}("Monsters of the Forest",eF,eD),eL=new class extends tf{constructor(t,e,i,s,r){super(t,r),this.engine=e,this.selectionManager=i,this.uiManger=s,this.passed=!1,this.humanMove=new x,e.input.pointers.on("down",this.pointerClick.bind(this)),e.input.pointers.on("move",this.pointerMove.bind(this))}pointerMove(t){if(this.active&&this.selectionManager.currentUnitSelection){// move
if(this.selectionManager.resetHighlight(),"move"===this.selectionManager.currentSelectionMode){let e=this.selectionManager.findMovementRange(this.selectionManager.currentUnitSelection);this.selectionManager.showHighlight(e,"range");let i=this.board.getCellByWorldPos(t.worldPos);if(i){let t=this.selectionManager.findPath(i,e);this.selectionManager.showHighlight(t,"path")}// attack
}else{let e=this.selectionManager.findAttackRange(this.selectionManager.currentUnitSelection);this.selectionManager.showHighlight(e,"attack");let i=this.board.getCellByWorldPos(t.worldPos);i&&this.hasNonPlayerUnit(i)&&this.selectionManager.showHighlight([i.pathNode],"path")}}}async maybeMove(t,e){e&&t.canMove()?(this.active=!1,await this.selectionManager.selectDestinationAndMove(t,e),this.humanMove.resolve()):this.selectionManager.reset()}async maybeAttack(t,e){if(e&&t.canAttack()&&this.hasNonPlayerUnit(e)){this.active=!1;let i=e.unit;this.selectionManager.reset(),await t.attack(i),this.humanMove.resolve()}else this.selectionManager.reset()}async maybeSelectUnit(t){// check if the cell clicked has a unit, then select it
t?.unit&&this.hasPlayerUnitWithActions(t)?this.uiManger.showUnitMenu(t.unit,{move:()=>{this.selectionManager.selectUnit(t.unit,"move")},attack:()=>{this.selectionManager.selectUnit(t.unit,"attack")},pass:()=>{t.unit?.pass(),this.selectionManager.reset(),this.humanMove.resolve()}}):this.selectionManager.reset()}async pointerClick(t){if(!this.active)return;let e=this.board.getCellByWorldPos(t.worldPos);// a unit is currently selected
if(this.selectionManager.currentUnitSelection){let t=this.selectionManager.currentUnitSelection;"move"===this.selectionManager.currentSelectionMode?await this.maybeMove(t,e):await this.maybeAttack(t,e),await this.maybeSelectUnit(t.cell);// no unit selected, make a selection
}else this.maybeSelectUnit(e)}hasNonPlayerUnit(t){return t&&t.unit&&t.unit.player!==this}hasPlayerUnitWithActions(t){return t?.unit&&t?.unit?.hasActions()&&t.unit.player===this}async waitForHumanMove(){this.active=!0,await this.humanMove.promise,this.humanMove=new x}hasMoves(){let t=this.board.getUnits().filter(t=>t.player===this).filter(t=>t.hasActions());return t.length>0&&!this.passed}async makeMove(){// TODO while there are moves to make or the player has not passed their turn wait
for(this.board.getUnits().filter(t=>t.player===this);this.hasMoves();)await this.waitForHumanMove();return!0}}("Knights of the Round Table",eR,eF,eB,eD),ez=new class{constructor(t,e,i,s){if(this.engine=t,this.players=e,this.maxTurns=s,this.currentTurn=1,this.currentPlayerIndex=0,this.topScreen=B(400,-2e3),this.centerScreen=B(400,400),this.bottomScreen=B(400,2e3),0===e.length)throw Error("Players should be non-zero in length");this.currentPlayer=e[this.currentPlayerIndex],this.selectionManager=i,this.turnText=new P({text:`Turn ${this.currentTurn}`,font:new v({family:"notjamslab14",size:32*tn.x,unit:y.Px,color:c.White,baseAlign:d.Top,quality:4})});let r=t.screen.resolution.width;this.turnActor=new a({pos:this.topScreen,coordPlane:p.Screen,color:new c(240,50,50,.4),width:r,height:100}),this.turnActor.graphics.opacity=0,this.turnActor.graphics.add("text",this.turnText),this.turnActor.graphics.show("text"),t.add(this.turnActor)}async showTurnDisplay(){0===this.currentPlayerIndex&&(this.turnText.text=`Turn ${this.currentTurn}`,await this.turnActor.actions.runAction(new C([new o(this.turnActor,t=>t.easeTo(this.centerScreen,1200,g.EaseInOutCubic).delay(700).easeTo(this.bottomScreen,1200,g.EaseInOutCubic)),new o(this.turnActor,t=>t.fade(1,1200).delay(700).fade(0,1200))])).toPromise(),this.turnActor.pos=this.topScreen)}async start(){// TODO win condition
for(;this.maxTurns>0;){console.log("Current player turn:",this.currentPlayer.name),this.selectionManager.selectPlayer(this.currentPlayer),this.showTurnDisplay(),await this.currentPlayer.turnStart();let t=!0;do t=await this.currentPlayer.makeMove();while(!t)await this.currentPlayer.turnEnd(),this.nextTurn(),this.maxTurns--}}nextTurn(){this.currentPlayerIndex++,this.currentPlayerIndex=this.currentPlayerIndex%this.players.length,this.currentPlayer=this.players[this.currentPlayerIndex],0===this.currentPlayerIndex&&this.currentTurn++}}(eR,[eL,eU],eF,10),eO=new tm(0,0,"Spider",eD,eU);eR.add(eO);const eH=new tm(4,5,"Spider",eD,eU);eR.add(eH);const eN=new tm(1,1,"Knight",eD,eL);eR.add(eN);const e$=new tm(2,1,"Knight",eD,eL);eR.add(e$),eR.add(tg),eR.start(ti).then(()=>{ez.start()});//# sourceMappingURL=index.1fe84bb9.js.map

//# sourceMappingURL=index.1fe84bb9.js.map
