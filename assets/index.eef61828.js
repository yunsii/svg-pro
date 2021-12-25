import{A as Z,_ as I,V as he,r as z,p as ge,Z as xe,c as B,f as A,e as N,b as be,I as q,K as Ee,M as Ce,N as Se,h as F,O as we,o as ne,a as Oe,as as Te,$ as ke,d as Ne,at as Re}from"./index.b227ebe6.js";import{C as Pe}from"./index.15052389.js";import"./index.14e7b4ff.js";import{A as je}from"./index.5d12efd1.js";import{T as G}from"./index.9fb3a419.js";import{T as _e,C as Le}from"./TextArea.7d0ee425.js";import{w as J}from"./button.dc426470.js";import{r as l,m as Q,j as L,k as Y}from"./react-venders.9cf39748.js";import{K as ie,R as De}from"./index.a336d5b7.js";import{T as ae,P as Ae}from"./index.936ea718.js";import"./index.cf2ab0e3.js";import"./index.e8c4f864.js";import"./RouteContext.4b211311.js";import"./Sider.b6aeb129.js";import"./DownOutlined.0f559735.js";var $e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},Ie=$e,oe=function(n,i){return l.exports.createElement(Z,I(I({},n),{},{ref:i,icon:Ie}))};oe.displayName="CopyOutlined";var ze=l.exports.forwardRef(oe),Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Me=Fe,se=function(n,i){return l.exports.createElement(Z,I(I({},n),{},{ref:i,icon:Me}))};se.displayName="EditOutlined";var Be=l.exports.forwardRef(se),He={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ke=He,le=function(n,i){return l.exports.createElement(Z,I(I({},n),{},{ref:i,icon:Ke}))};le.displayName="EnterOutlined";var Ue=l.exports.forwardRef(le),ce=function(n){if(he()&&window.document.documentElement){var i=Array.isArray(n)?n:[n],e=window.document.documentElement;return i.some(function(t){return t in e.style})}return!1},Ve=function(n,i){if(!ce(n))return!1;var e=document.createElement("div"),t=e.style[n];return e.style[n]=i,e.style[n]!==t};function pe(r,n){return!Array.isArray(r)&&n!==void 0?Ve(r,n):ce(r)}var We=globalThis&&globalThis.__rest||function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Xe=function(n,i){var e=n.prefixCls,t=n.component,a=t===void 0?"article":t,s=n.className,o=n["aria-label"],c=n.setContentRef,u=n.children,p=We(n,["prefixCls","component","className","aria-label","setContentRef","children"]),d=i;return c&&(z(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),d=ge(i,c)),l.exports.createElement(xe,null,function(v){var h=v.getPrefixCls,T=v.direction,b=a,E=h("typography",e),P=B(E,A({},"".concat(E,"-rtl"),T==="rtl"),s);return l.exports.createElement(b,N({className:P,"aria-label":o,ref:d},p),u)})},de=l.exports.forwardRef(Xe);de.displayName="Typography";var Ze=de,ue=Ze,qe=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var n=document.activeElement,i=[],e=0;e<r.rangeCount;e++)i.push(r.getRangeAt(e));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return r.removeAllRanges(),function(){r.type==="Caret"&&r.removeAllRanges(),r.rangeCount||i.forEach(function(t){r.addRange(t)}),n&&n.focus()}},Ge=qe,fe={"text/plain":"Text","text/html":"Url",default:"Text"},Je="Copy to clipboard: #{key}, Enter";function Qe(r){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return r.replace(/#{\s*key\s*}/g,n)}function Ye(r,n){var i,e,t,a,s,o,c=!1;n||(n={}),i=n.debug||!1;try{t=Ge(),a=document.createRange(),s=document.getSelection(),o=document.createElement("span"),o.textContent=r,o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(p){if(p.stopPropagation(),n.format)if(p.preventDefault(),typeof p.clipboardData=="undefined"){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=fe[n.format]||fe.default;window.clipboardData.setData(d,r)}else p.clipboardData.clearData(),p.clipboardData.setData(n.format,r);n.onCopy&&(p.preventDefault(),n.onCopy(p.clipboardData))}),document.body.appendChild(o),a.selectNodeContents(o),s.addRange(a);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");c=!0}catch(p){i&&console.error("unable to copy using execCommand: ",p),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",r),n.onCopy&&n.onCopy(window.clipboardData),c=!0}catch(d){i&&console.error("unable to copy using clipboardData: ",d),i&&console.error("falling back to prompt"),e=Qe("message"in n?n.message:Je),window.prompt(e,r)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(a):s.removeAllRanges()),o&&document.body.removeChild(o),t()}return c}var et=Ye,tt=function(n){var i=n.prefixCls,e=n["aria-label"],t=n.className,a=n.style,s=n.direction,o=n.maxLength,c=n.autoSize,u=c===void 0?!0:c,p=n.value,d=n.onSave,v=n.onCancel,h=n.onEnd,T=l.exports.useRef(),b=l.exports.useRef(!1),E=l.exports.useRef(),P=l.exports.useState(p),j=be(P,2),R=j[0],f=j[1];l.exports.useEffect(function(){f(p)},[p]),l.exports.useEffect(function(){if(T.current&&T.current.resizableTextArea){var S=T.current.resizableTextArea.textArea;S.focus();var g=S.value.length;S.setSelectionRange(g,g)}},[]);var m=function(g){var C=g.target;f(C.value.replace(/[\n\r]/g,""))},y=function(){b.current=!0},k=function(){b.current=!1},w=function(g){var C=g.keyCode;b.current||(E.current=C)},_=function(){d(R.trim())},$=function(g){var C=g.keyCode,U=g.ctrlKey,V=g.altKey,W=g.metaKey,X=g.shiftKey;E.current===C&&!b.current&&!U&&!V&&!W&&!X&&(C===ie.ENTER?(_(),h==null||h()):C===ie.ESC&&v())},O=function(){_()},D=B(i,"".concat(i,"-edit-content"),A({},"".concat(i,"-rtl"),s==="rtl"),t);return l.exports.createElement("div",{className:D,style:a},l.exports.createElement(_e,{ref:T,maxLength:o,value:R,onChange:m,onKeyDown:w,onKeyUp:$,onCompositionStart:y,onCompositionEnd:k,onBlur:O,"aria-label":e,autoSize:u}),l.exports.createElement(Ue,{className:"".concat(i,"-edit-content-confirm")}))},rt=tt,nt=1,it=3,at=8,x,ee={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function ot(r){var n=Array.prototype.slice.apply(r);return n.map(function(i){return"".concat(i,": ").concat(r.getPropertyValue(i),";")}).join("")}function st(r){var n=[];return r.forEach(function(i){var e=n[n.length-1];typeof i=="string"&&typeof e=="string"?n[n.length-1]+=i:n.push(i)}),n}function ve(r,n){r.setAttribute("aria-hidden","true");var i=window.getComputedStyle(n),e=ot(i);r.setAttribute("style",e),r.style.position="fixed",r.style.left="0",r.style.height="auto",r.style.minHeight="auto",r.style.maxHeight="auto",r.style.paddingTop="0",r.style.paddingBottom="0",r.style.borderTopWidth="0",r.style.borderBottomWidth="0",r.style.top="-999999px",r.style.zIndex="-1000",r.style.textOverflow="clip",r.style.whiteSpace="normal",r.style.webkitLineClamp="none"}function lt(r){var n=document.createElement("div");ve(n,r),n.appendChild(document.createTextNode("text")),document.body.appendChild(n);var i=n.getBoundingClientRect().height;return document.body.removeChild(n),i}var ct=function(r,n,i,e,t){x||(x=document.createElement("div"),x.setAttribute("aria-hidden","true")),x.parentNode||document.body.appendChild(x);var a=n.rows,s=n.suffix,o=s===void 0?"":s,c=lt(r),u=Math.round(c*a*100)/100;ve(x,r);var p=st(q(i));Q.exports.render(l.exports.createElement("div",{style:ee},l.exports.createElement("span",{style:ee},p,o),l.exports.createElement("span",{style:ee},e)),x);function d(){var f=Math.round(x.getBoundingClientRect().height*100)/100;return f-.1<=u}if(d())return Q.exports.unmountComponentAtNode(x),{content:i,text:x.innerHTML,ellipsis:!1};var v=Array.prototype.slice.apply(x.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(f){var m=f.nodeType;return m!==at}),h=Array.prototype.slice.apply(x.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Q.exports.unmountComponentAtNode(x);var T=[];x.innerHTML="";var b=document.createElement("span");x.appendChild(b);var E=document.createTextNode(t+o);b.appendChild(E),h.forEach(function(f){x.appendChild(f)});function P(f){b.insertBefore(f,E)}function j(f,m){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,w=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,_=Math.floor((y+k)/2),$=m.slice(0,_);if(f.textContent=$,y>=k-1)for(var O=k;O>=y;O-=1){var D=m.slice(0,O);if(f.textContent=D,d()||!D)return O===m.length?{finished:!1,reactNode:m}:{finished:!0,reactNode:D}}return d()?j(f,m,_,k,_):j(f,m,y,_,w)}function R(f,m){var y=f.nodeType;if(y===nt)return P(f),d()?{finished:!1,reactNode:p[m]}:(b.removeChild(f),{finished:!0,reactNode:null});if(y===it){var k=f.textContent||"",w=document.createTextNode(k);return P(w),j(w,k)}return{finished:!1,reactNode:null}}return v.some(function(f,m){var y=R(f,m),k=y.finished,w=y.reactNode;return w&&T.push(w),k}),{content:T,text:x.innerHTML,ellipsis:!0}},pt=globalThis&&globalThis.__rest||function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},dt=pe("webkitLineClamp"),ut=pe("textOverflow");function ft(r,n){var i=r.mark,e=r.code,t=r.underline,a=r.delete,s=r.strong,o=r.keyboard,c=r.italic,u=n;function p(d,v){!d||(u=l.exports.createElement(v,{},u))}return p(s,"strong"),p(t,"u"),p(a,"del"),p(e,"code"),p(i,"mark"),p(o,"kbd"),p(c,"i"),u}function H(r,n,i){return r===!0||r===void 0?n:r||i&&n}var me="...",te=function(r){Ee(i,r);var n=Ce(i);function i(){var e;return Se(this,i),e=n.apply(this,arguments),e.contentRef=l.exports.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),o=s.onExpand;e.setState({expanded:!0}),(a=o)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,o=a.copyable,c=N({},F(o)==="object"?o:null);c.text===void 0&&(c.text=String(s)),et(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){J.cancel(e.rafId),e.rafId=J(function(){e.syncEllipsis()})},e}return we(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),o=this.getEllipsis(t);(a!==t.children||s.rows!==o.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),J.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,o=s.editable;return o?N({editing:a},F(o)==="object"?o:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?N({rows:1,expandable:!1},F(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,o=a.copyable,c=this.getEllipsis(),u=c.rows,p=c.expandable,d=c.suffix,v=c.onEllipsis,h=c.tooltip;return d||h||s||o||p||!t||v?!1:u===1?ut:dt}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,o=t.expanded,c=this.getEllipsis(),u=c.rows,p=c.suffix,d=c.onEllipsis,v=this.props.children;if(!(!u||u<0||!this.contentRef.current||o)&&!this.canUseCSSEllipsis()){z(q(v).every(function(P){return typeof P=="string"}),"Typography","`ellipsis` should use string as children only.");var h=ct(this.contentRef.current,{rows:u,suffix:p},v,this.renderOperations(!0),me),T=h.content,b=h.text,E=h.ellipsis;(a!==b||s!==E)&&(this.setState({ellipsisText:b,ellipsisContent:T,isEllipsis:E}),s!==E&&d&&d(E))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,o=a.symbol,c=this.state,u=c.expanded,p=c.isEllipsis;if(!s||!t&&(u||!p))return null;var d;return o?d=o:d=this.expandStr,l.exports.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},d)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,o=q(s)[0]||this.editStr,c=typeof o=="string"?o:"";return l.exports.createElement(G,{key:"edit",title:s===!1?"":o},l.exports.createElement(ae,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},a||l.exports.createElement(Be,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),o=a.tooltips,c=a.icon,u=Array.isArray(o)?o:[o],p=Array.isArray(c)?c:[c],d=t?H(u[1],this.copiedStr):H(u[0],this.copyStr),v=t?this.copiedStr:this.copyStr,h=typeof d=="string"?d:v;return l.exports.createElement(G,{key:"copy",title:d},l.exports.createElement(ae,{className:B("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":h},t?H(p[1],l.exports.createElement(Le,null),!0):H(p[0],l.exports.createElement(ze,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,o=t.style,c=this.context.direction,u=this.getEditable(),p=u.maxLength,d=u.autoSize,v=u.onEnd;return l.exports.createElement(rt,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:v,prefixCls:this.getPrefixCls(),className:s,style:o,direction:c,maxLength:p,autoSize:d})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,o=a.isEllipsis,c=a.expanded,u=this.props,p=u.component,d=u.children,v=u.className,h=u.type,T=u.disabled,b=u.style,E=pt(u,["component","children","className","type","disabled","style"]),P=this.context.direction,j=this.getEllipsis(),R=j.rows,f=j.suffix,m=j.tooltip,y=this.getPrefixCls(),k=ne(E,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat(Oe(Te))),w=this.canUseCSSEllipsis(),_=R===1&&w,$=R&&R>1&&w,O=d;if(R&&o&&!c&&!w){var D=E.title,S=D||"";!D&&(typeof d=="string"||typeof d=="number")&&(S=String(d)),S=S.slice(String(s||"").length),O=l.exports.createElement(l.exports.Fragment,null,s,l.exports.createElement("span",{title:S,"aria-hidden":"true"},me),f),m&&(O=l.exports.createElement(G,{title:m===!0?d:m},l.exports.createElement("span",null,O)))}else O=l.exports.createElement(l.exports.Fragment,null,d,f);return O=ft(this.props,O),l.exports.createElement(ke,{componentName:"Text"},function(g){var C,U=g.edit,V=g.copy,W=g.copied,X=g.expand;return t.editStr=U,t.copyStr=V,t.copiedStr=W,t.expandStr=X,l.exports.createElement(De,{onResize:t.resizeOnNextFrame,disabled:w},l.exports.createElement(ue,N({className:B((C={},A(C,"".concat(y,"-").concat(h),h),A(C,"".concat(y,"-disabled"),T),A(C,"".concat(y,"-ellipsis"),R),A(C,"".concat(y,"-single-line"),R===1&&!o),A(C,"".concat(y,"-ellipsis-single-line"),_),A(C,"".concat(y,"-ellipsis-multiple-line"),$),C),v),style:N(N({},b),{WebkitLineClamp:$?R:void 0}),component:p,ref:t.contentRef,direction:P},k),O,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return z(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(l.exports.Component);te.contextType=Ne;te.defaultProps={children:""};var K=te,vt=globalThis&&globalThis.__rest||function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},mt=function(n){var i=n.ellipsis,e=vt(n,["ellipsis"]),t=l.exports.useMemo(function(){return i&&F(i)==="object"?ne(i,["expandable","rows"]):i},[i]);return z(F(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),l.exports.createElement(K,N({},e,{ellipsis:t,component:"span"}))},yt=mt,ht=globalThis&&globalThis.__rest||function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},gt=function(n,i){var e=n.ellipsis,t=n.rel,a=ht(n,["ellipsis","rel"]);z(F(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=l.exports.useRef(null);l.exports.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var o=N(N({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete o.navigate,l.exports.createElement(K,N({},o,{ref:s,ellipsis:!!e,component:"a"}))},xt=l.exports.forwardRef(gt),bt=globalThis&&globalThis.__rest||function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Et=Re(1,2,3,4,5),Ct=function(n){var i=n.level,e=i===void 0?1:i,t=bt(n,["level"]),a;return Et.indexOf(e)!==-1?a="h".concat(e):(z(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),l.exports.createElement(K,N({},t,{component:a}))},St=Ct,wt=function(n){return l.exports.createElement(K,N({},n,{component:"div"}))},Ot=wt,M=ue;M.Text=yt;M.Link=xt;M.Title=St;M.Paragraph=Ot;var re=M;const Tt="_pre_1kk0d_2";var kt={pre:Tt};const ye=({children:r})=>L("pre",{className:kt.pre,children:L("code",{children:L(re.Text,{copyable:!0,children:r})})});function Kt(){return L(Ae,{children:Y(Pe,{children:[L(je,{message:"\u66F4\u5FEB\u66F4\u5F3A\u7684\u91CD\u578B\u7EC4\u4EF6\uFF0C\u5DF2\u7ECF\u53D1\u5E03\u3002",type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),Y(re.Text,{strong:!0,children:["\u9AD8\u7EA7\u8868\u683C",L("a",{href:"https://procomponents.ant.design/components/table",rel:"noopener noreferrer",target:"__blank",children:"\u6B22\u8FCE\u4F7F\u7528"})]}),L(ye,{children:"yarn add @ant-design/pro-table"}),Y(re.Text,{strong:!0,style:{marginBottom:12},children:["\u9AD8\u7EA7\u5E03\u5C40",L("a",{href:"https://procomponents.ant.design/components/layout",rel:"noopener noreferrer",target:"__blank",children:"\u6B22\u8FCE\u4F7F\u7528"})]}),L(ye,{children:"yarn add @ant-design/pro-layout"})]})})}export{Kt as default};
