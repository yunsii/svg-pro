import{K as q,M as G,N as J,O as U,b as V,d as W,c as E,f,k as X,e as N,P as Y,aa as Z,m as ee,ab as te,n as re,E as ne,ac as oe,Q as ae,ad as se,ae as ce}from"./index.b227ebe6.js";import{r as n}from"./react-venders.9cf39748.js";function le(c){return Object.keys(c).reduce(function(e,t){return(t.substr(0,5)==="data-"||t.substr(0,5)==="aria-"||t==="role")&&t.substr(0,7)!=="data-__"&&(e[t]=c[t]),e},{})}var ie=function(c){q(t,c);var e=G(t);function t(){var r;return J(this,t),r=e.apply(this,arguments),r.state={error:void 0,info:{componentStack:""}},r}return U(t,[{key:"componentDidCatch",value:function(a,l){this.setState({error:a,info:l})}},{key:"render",value:function(){var a=this.props,l=a.message,p=a.description,v=a.children,C=this.state,x=C.error,d=C.info,h=d&&d.componentStack?d.componentStack:null,b=typeof l=="undefined"?(x||"").toString():l,y=typeof p=="undefined"?h:p;return x?n.exports.createElement(me,{type:"error",message:b,description:n.exports.createElement("pre",null,y)}):v}}]),t}(n.exports.Component),ue=globalThis&&globalThis.__rest||function(c,e){var t={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&e.indexOf(r)<0&&(t[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(c);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(c,r[a])&&(t[r[a]]=c[r[a]]);return t},pe={success:ee,info:te,error:re,warning:ne},de={success:oe,info:ae,error:se,warning:ce},T=function(e){var t,r=e.description,a=e.prefixCls,l=e.message,p=e.banner,v=e.className,C=v===void 0?"":v,x=e.style,d=e.onMouseEnter,h=e.onMouseLeave,b=e.onClick,y=e.afterClose,O=e.showIcon,A=e.closable,g=e.closeText,S=e.action,m=ue(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),_=n.exports.useState(!1),M=V(_,2),w=M[0],j=M[1],L=n.exports.useRef(),I=n.exports.useContext(W),$=I.getPrefixCls,F=I.direction,o=$("alert",a),D=function(s){var u;j(!0),(u=m.onClose)===null||u===void 0||u.call(m,s)},R=function(){var s=m.type;return s!==void 0?s:p?"warning":"info"},B=g?!0:A,k=R(),H=function(){var s=m.icon,u=(r?de:pe)[k]||null;return s?Z(s,n.exports.createElement("span",{className:"".concat(o,"-icon")},s),function(){return{className:E("".concat(o,"-icon"),f({},s.props.className,s.props.className))}}):n.exports.createElement(u,{className:"".concat(o,"-icon")})},z=function(){return B?n.exports.createElement("button",{type:"button",onClick:D,className:"".concat(o,"-close-icon"),tabIndex:0},g?n.exports.createElement("span",{className:"".concat(o,"-close-text")},g):n.exports.createElement(Y,null)):null},P=p&&O===void 0?!0:O,K=E(o,"".concat(o,"-").concat(k),(t={},f(t,"".concat(o,"-with-description"),!!r),f(t,"".concat(o,"-no-icon"),!P),f(t,"".concat(o,"-banner"),!!p),f(t,"".concat(o,"-rtl"),F==="rtl"),t),C),Q=le(m);return n.exports.createElement(X,{visible:!w,motionName:"".concat(o,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(s){return{maxHeight:s.offsetHeight}},onLeaveEnd:y},function(i){var s=i.className,u=i.style;return n.exports.createElement("div",N({ref:L,"data-show":!w,className:E(K,s),style:N(N({},x),u),onMouseEnter:d,onMouseLeave:h,onClick:b,role:"alert"},Q),P?H():null,n.exports.createElement("div",{className:"".concat(o,"-content")},l?n.exports.createElement("div",{className:"".concat(o,"-message")},l):null,r?n.exports.createElement("div",{className:"".concat(o,"-description")},r):null),S?n.exports.createElement("div",{className:"".concat(o,"-action")},S):null,z())})};T.ErrorBoundary=ie;var me=T;export{me as A,le as g};