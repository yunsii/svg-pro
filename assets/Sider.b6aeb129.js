import{d as A,e as S,c as z,b as R,f as N,a as ge,A as he,_ as U,o as ye}from"./index.b227ebe6.js";import{r as t}from"./react-venders.9cf39748.js";import{R as X,L as Y}from"./index.cf2ab0e3.js";var Z=globalThis&&globalThis.__rest||function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},q=t.exports.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function B(e){var r=e.suffixCls,n=e.tagName,a=e.displayName;return function(o){var c=function(u){var f=t.exports.useContext(A),p=f.getPrefixCls,g=u.prefixCls,b=p(r,g);return t.exports.createElement(o,S({prefixCls:b,tagName:n},u))};return c.displayName=a,c}}var F=function(r){var n=r.prefixCls,a=r.className,o=r.children,c=r.tagName,d=Z(r,["prefixCls","className","children","tagName"]),u=z(n,a);return t.exports.createElement(c,S({className:u},d),o)},Ce=function(r){var n,a=t.exports.useContext(A),o=a.direction,c=t.exports.useState([]),d=R(c,2),u=d[0],f=d[1],p=r.prefixCls,g=r.className,b=r.children,w=r.hasSider,E=r.tagName,P=Z(r,["prefixCls","className","children","hasSider","tagName"]),O=z(p,(n={},N(n,"".concat(p,"-has-sider"),typeof w=="boolean"?w:u.length>0),N(n,"".concat(p,"-rtl"),o==="rtl"),n),g),_=t.exports.useMemo(function(){return{siderHook:{addSider:function(h){f(function(y){return[].concat(ge(y),[h])})},removeSider:function(h){f(function(y){return y.filter(function(j){return j!==h})})}}}},[]);return t.exports.createElement(q.Provider,{value:_},t.exports.createElement(E,S({className:O},P),b))},Se=B({suffixCls:"layout",tagName:"section",displayName:"Layout"})(Ce),je=B({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(F),He=B({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(F),Le=B({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(F),Te=Se,Ne={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},be=Ne,ee=function(r,n){return t.exports.createElement(he,U(U({},r),{},{ref:n,icon:be}))};ee.displayName="BarsOutlined";var we=t.exports.forwardRef(ee),Oe=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},Ee=Oe,Pe=globalThis&&globalThis.__rest||function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},te={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},_e=t.exports.createContext({}),$e=function(){var e=0;return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(r).concat(e)}}(),re=t.exports.forwardRef(function(e,r){var n=e.prefixCls,a=e.className,o=e.trigger,c=e.children,d=e.defaultCollapsed,u=d===void 0?!1:d,f=e.theme,p=f===void 0?"dark":f,g=e.style,b=g===void 0?{}:g,w=e.collapsible,E=w===void 0?!1:w,P=e.reverseArrow,O=P===void 0?!1:P,_=e.width,k=_===void 0?200:_,h=e.collapsedWidth,y=h===void 0?80:h,j=e.zeroWidthTriggerStyle,H=e.breakpoint,L=e.onCollapse,T=e.onBreakpoint,v=Pe(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),ae=t.exports.useContext(q),I=ae.siderHook,oe=t.exports.useState("collapsed"in v?v.collapsed:u),M=R(oe,2),m=M[0],V=M[1],ne=t.exports.useState(!1),D=R(ne,2),G=D[0],se=D[1];t.exports.useEffect(function(){"collapsed"in v&&V(v.collapsed)},[v.collapsed]);var J=function(s,i){"collapsed"in v||V(s),L==null||L(s,i)},K=t.exports.useRef();K.current=function(l){se(l.matches),T==null||T(l.matches),m!==l.matches&&J(l.matches,"responsive")},t.exports.useEffect(function(){function l(x){return K.current(x)}var s;if(typeof window!="undefined"){var i=window,$=i.matchMedia;if($&&H&&H in te){s=$("(max-width: ".concat(te[H],")"));try{s.addEventListener("change",l)}catch{s.addListener(l)}l(s)}}return function(){try{s==null||s.removeEventListener("change",l)}catch{s==null||s.removeListener(l)}}},[]),t.exports.useEffect(function(){var l=$e("ant-sider-");return I.addSider(l),function(){return I.removeSider(l)}},[]);var Q=function(){J(!m,"clickTrigger")},le=t.exports.useContext(A),ie=le.getPrefixCls,ce=function(){var s,i=ie("layout-sider",n),$=ye(v,["collapsed"]),x=m?y:k,C=Ee(x)?"".concat(x,"px"):String(x),W=parseFloat(String(y||0))===0?t.exports.createElement("span",{onClick:Q,className:z("".concat(i,"-zero-width-trigger"),"".concat(i,"-zero-width-trigger-").concat(O?"right":"left")),style:j},o||t.exports.createElement(we,null)):null,ue={expanded:O?t.exports.createElement(X,null):t.exports.createElement(Y,null),collapsed:O?t.exports.createElement(Y,null):t.exports.createElement(X,null)},fe=m?"collapsed":"expanded",pe=ue[fe],ve=o!==null?W||t.exports.createElement("div",{className:"".concat(i,"-trigger"),onClick:Q,style:{width:C}},o||pe):null,me=S(S({},b),{flex:"0 0 ".concat(C),maxWidth:C,minWidth:C,width:C}),xe=z(i,"".concat(i,"-").concat(p),(s={},N(s,"".concat(i,"-collapsed"),!!m),N(s,"".concat(i,"-has-trigger"),E&&o!==null&&!W),N(s,"".concat(i,"-below"),!!G),N(s,"".concat(i,"-zero-width"),parseFloat(C)===0),s),a);return t.exports.createElement("aside",S({className:xe},$,{style:me,ref:r}),t.exports.createElement("div",{className:"".concat(i,"-children")},c),E||G&&W?ve:null)},de=t.exports.useMemo(function(){return{siderCollapsed:m}},[m]);return t.exports.createElement(_e.Provider,{value:de},ce())});re.displayName="Sider";var We=re;export{Le as C,He as F,je as H,Te as I,We as S,_e as a};
