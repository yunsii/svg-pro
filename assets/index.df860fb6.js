import{A as Ie,_ as de,af as dt,e as Y,N as Me,a as Ae,K as vt,M as pt,O as mt,w as ze,V as ht,h as gt,f as ye,d as bt,b as xt,I as yt,c as Ct}from"./index.b227ebe6.js";import{r as d}from"./react-venders.9cf39748.js";import{P as wt,E as St}from"./index.a336d5b7.js";var Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},Tt=Et,Ue=function(i,t){return d.exports.createElement(Ie,de(de({},i),{},{ref:t,icon:Tt}))};Ue.displayName="QuestionCircleOutlined";var sr=d.exports.forwardRef(Ue),Rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},_t=Rt,We=function(i,t){return d.exports.createElement(Ie,de(de({},i),{},{ref:t,icon:_t}))};We.displayName="UserOutlined";var cr=d.exports.forwardRef(We);function ur(e,i){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=dt(e))||i&&e&&typeof e.length=="number"){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,l=!1,c;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return n=o.done,o},e:function(o){l=!0,c=o},f:function(){try{!n&&t.return!=null&&t.return()}finally{if(l)throw c}}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Le(e,i,t,a){function r(n){return n instanceof t?n:new t(function(l){l(n)})}return new(t||(t=Promise))(function(n,l){function c(u){try{o(a.next(u))}catch(v){l(v)}}function s(u){try{o(a.throw(u))}catch(v){l(v)}}function o(u){u.done?n(u.value):r(u.value).then(c,s)}o((a=a.apply(e,i||[])).next())})}function Ve(e,i){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,r,n,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(o){return function(u){return s([o,u])}}function s(o){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,r&&(n=o[0]&2?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[o[0]&2,n.value]),o[0]){case 0:case 1:n=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,r=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){t.label=o[1];break}if(o[0]===6&&t.label<n[1]){t.label=n[1],n=o;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(o);break}n[2]&&t.ops.pop(),t.trys.pop();continue}o=i.call(e,t)}catch(u){o=[6,u],r=0}finally{a=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var N=function(){},y=N(),ae=Object,x=function(e){return e===y},ve=function(e){return typeof e=="function"},H=function(e,i){return ae.assign({},e,i)},Fe="undefined",Ce=function(){return typeof window!=Fe},$t=function(){return typeof document!=Fe},pe=new WeakMap,Ot=0,ie=function(e){var i=typeof e,t=e&&e.constructor,a=t==Date,r,n;if(ae(e)===e&&!a&&t!=RegExp){if(r=pe.get(e),r)return r;if(r=++Ot+"~",pe.set(e,r),t==Array){for(r="@",n=0;n<e.length;n++)r+=ie(e[n])+",";pe.set(e,r)}if(t==ae){r="#";for(var l=ae.keys(e).sort();!x(n=l.pop());)x(e[n])||(r+=n+":"+ie(e[n])+",");pe.set(e,r)}}else r=a?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;return r},we=!0,Nt=function(){return we},je=Ce(),Se=$t(),Ee=je&&window.addEventListener?window.addEventListener.bind(window):N,kt=Se?document.addEventListener.bind(document):N,Te=je&&window.removeEventListener?window.removeEventListener.bind(window):N,Pt=Se?document.removeEventListener.bind(document):N,Dt=function(){var e=Se&&document.visibilityState;return x(e)?!0:e!=="hidden"},It=function(e){return kt("visibilitychange",e),Ee("focus",e),function(){Pt("visibilitychange",e),Te("focus",e)}},Mt=function(e){var i=function(){we=!0,e()},t=function(){we=!1};return Ee("online",i),Ee("offline",t),function(){Te("online",i),Te("offline",t)}},Ye={isOnline:Nt,isVisible:Dt},At={initFocus:It,initReconnect:Mt},me=!Ce()||"Deno"in window,zt=function(e){return Ce()?window.requestAnimationFrame(e):setTimeout(e,1)},oe=me?d.exports.useEffect:d.exports.useLayoutEffect,Re=typeof navigator!="undefined"&&navigator.connection,He=!me&&Re&&(["slow-2g","2g"].includes(Re.effectiveType)||Re.saveData),Ge=function(e){if(ve(e))try{e=e()}catch{e=""}var i=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?ie(e):"";var t=e?"$err$"+e:"",a=e?"$req$"+e:"";return[e,i,t,a]},G=new WeakMap,Be=0,qe=1,Qe=2,he=function(e,i,t,a,r,n){for(var l=G.get(e),c=l[0],s=l[1],o=l[4],u=l[5],v=c[i],h=s[i]||[],p=0;p<h.length;++p)h[p](t,a,r);return n&&(delete o[i],delete u[i],v&&v[0])?v[0](Qe).then(function(){return e.get(i)}):e.get(i)},Ut=0,_e=function(){return++Ut},Ke=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return Le(void 0,void 0,void 0,function(){var t,a,r,n,l,c,s,o,u,v,h,p,W,L;return Ve(this,function(E){switch(E.label){case 0:if(t=e[0],a=e[1],r=e[3]!==!1,n=e[2],l=Ge(a),c=l[0],s=l[2],!c)return[2];if(o=G.get(t),u=o[2],v=o[3],e.length<3)return[2,he(t,c,t.get(c),t.get(s),y,r)];if(W=u[c]=_e(),v[c]=0,ve(n))try{n=n(t.get(c))}catch(w){p=w}return n&&ve(n.then)?[4,n.catch(function(w){p=w})]:[3,2];case 1:if(h=E.sent(),W!==u[c]){if(p)throw p;return[2,h]}return[3,3];case 2:h=n,E.label=3;case 3:return p||t.set(c,h),t.set(s,p),v[c]=_e(),[4,he(t,c,h,p,y,r)];case 4:if(L=E.sent(),p)throw p;return[2,L]}})})},Je=function(e,i){for(var t in e)e[t][0]&&e[t][0](i)},Xe=function(e,i){if(!G.has(e)){var t=H(At,i),a={},r=Ke.bind(y,e),n=N;if(G.set(e,[a,{},{},{},{},{},r]),!me){var l=t.initFocus(Je.bind(y,a,Be)),c=t.initReconnect(Je.bind(y,a,qe));n=function(){l&&l(),c&&c(),G.delete(e)}}return[e,r,n]}return[e,G.get(e)[6]]},Wt=function(e,i,t,a,r){if(!!Ye.isVisible()){var n=t.errorRetryCount,l=r.retryCount,c=~~((Math.random()+.5)*(1<<(l<8?l:8)))*t.errorRetryInterval;!x(n)&&l>n||setTimeout(a,c,r)}},Ze=Xe(new Map),et=Ze[0],Lt=Ze[1],tt=H({onLoadingSlow:N,onSuccess:N,onError:N,onErrorRetry:Wt,onDiscarded:N,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:He?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:He?5e3:3e3,compare:function(e,i){return ie(e)==ie(i)},isPaused:function(){return!1},cache:et,mutate:Lt,fallback:{}},Ye),rt=function(e,i){var t=H(e,i);if(i){var a=e.use,r=e.fallback,n=i.use,l=i.fallback;a&&n&&(t.use=a.concat(n)),r&&l&&(t.fallback=H(r,l))}return t},$e=d.exports.createContext({}),Vt=function(e){var i=e.value,t=rt(d.exports.useContext($e),i),a=i&&i.provider,r=d.exports.useState(function(){return a?Xe(a(t.cache||et),i):y})[0];return r&&(t.cache=r[0],t.mutate=r[1]),oe(function(){return r?r[2]:y},[]),d.exports.createElement($e.Provider,H(e,{value:t}))},Ft=function(e,i){var t=d.exports.useState({})[1],a=d.exports.useRef(e),r=d.exports.useRef({data:!1,error:!1,isValidating:!1}),n=d.exports.useCallback(function(l){var c=!1,s=a.current;for(var o in l){var u=o;s[u]!==l[u]&&(s[u]=l[u],r.current[u]&&(c=!0))}c&&!i.current&&t({})},[]);return oe(function(){a.current=e}),[a,r.current,n]},jt=function(e){return ve(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},Yt=function(){return H(tt,d.exports.useContext($e))},Ht=function(e){return function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var a=Yt(),r=jt(i),n=r[0],l=r[1],c=r[2],s=rt(a,c),o=e,u=s.use;if(u)for(var v=u.length;v-- >0;)o=u[v](o);return o(n,l||s.fetcher,s)}},nt=function(e,i,t){var a=i[e]||(i[e]=[]);return a.push(t),function(){var r=a.indexOf(t);r>=0&&(a[r]=a[a.length-1],a.pop())}},Oe={dedupe:!0},Gt=function(e,i,t){var a=t.cache,r=t.compare,n=t.fallbackData,l=t.suspense,c=t.revalidateOnMount,s=t.refreshInterval,o=t.refreshWhenHidden,u=t.refreshWhenOffline,v=G.get(a),h=v[0],p=v[1],W=v[2],L=v[3],E=v[4],w=v[5],V=Ge(e),f=V[0],B=V[1],Z=V[2],q=V[3],z=d.exports.useRef(!1),T=d.exports.useRef(!1),Q=d.exports.useRef(f),ee=d.exports.useRef(t),m=function(){return ee.current},se=a.get(f),ce=x(n)?t.fallback[f]:n,R=x(se)?ce:se,k=a.get(Z),ue=function(){return x(c)?m().isPaused()?!1:l?!x(R):x(R)||t.revalidateIfStale:c},be=function(){return!f||!i?!1:a.get(q)?!0:!z.current&&ue()},P=be(),D=Ft({data:R,error:k,isValidating:P},T),I=D[0],xe=D[1],fe=D[2],F=d.exports.useCallback(function(M){return Le(void 0,void 0,void 0,function(){var g,_,te,K,$,O,re,b,U,j;return Ve(this,function(ne){switch(ne.label){case 0:if(!f||!i||T.current||m().isPaused())return[2,!1];te=!0,K=M||{},$=x(E[f])||!K.dedupe,O=function(){return!T.current&&f===Q.current&&z.current},re=function(){w[f]===_&&(delete E[f],delete w[f])},b={isValidating:!1},U=function(){a.set(q,!1),O()&&fe(b)},a.set(q,!0),fe({isValidating:!0}),ne.label=1;case 1:return ne.trys.push([1,3,,4]),$&&(he(a,f,I.current.data,I.current.error,!0),t.loadingTimeout&&!a.get(f)&&setTimeout(function(){te&&O()&&m().onLoadingSlow(f,t)},t.loadingTimeout),w[f]=_e(),E[f]=i.apply(void 0,B)),_=w[f],[4,E[f]];case 2:return g=ne.sent(),$&&setTimeout(re,t.dedupingInterval),w[f]!==_?($&&O()&&m().onDiscarded(f),[2,!1]):(a.set(Z,y),b.error=y,!x(W[f])&&(_<=W[f]||_<=L[f]||L[f]===0)?(U(),$&&O()&&m().onDiscarded(f),[2,!1]):(r(I.current.data,g)||(b.data=g),r(a.get(f),g)||a.set(f,g),$&&O()&&m().onSuccess(g,f,t),[3,4]));case 3:return j=ne.sent(),re(),m().isPaused()||(a.set(Z,j),b.error=j,$&&O()&&(m().onError(j,f,t),t.shouldRetryOnError&&m().onErrorRetry(j,f,t,F,{retryCount:(K.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return te=!1,U(),O()&&$&&he(a,f,b.data,b.error,!1),[2,!0]}})})},[f]),ft=d.exports.useCallback(Ke.bind(y,a,function(){return Q.current}),[]);if(oe(function(){ee.current=t}),oe(function(){if(!!f){var M=z.current,g=F.bind(y,Oe),_=function(){return m().isVisible()&&m().isOnline()},te=function(b,U,j){fe(H({error:U,isValidating:j},r(I.current.data,b)?y:{data:b}))},K=0,$=function(b){if(b==Be){var U=Date.now();m().revalidateOnFocus&&U>K&&_()&&(K=U+m().focusThrottleInterval,g())}else if(b==qe)m().revalidateOnReconnect&&_()&&g();else if(b==Qe)return F()},O=nt(f,p,te),re=nt(f,h,$);return T.current=!1,Q.current=f,z.current=!0,M&&fe({data:R,error:k,isValidating:P}),ue()&&(x(R)||me?g():zt(g)),function(){T.current=!0,O(),re()}}},[f,F]),oe(function(){var M;function g(){s&&M!==-1&&(M=setTimeout(_,s))}function _(){!I.current.error&&(o||m().isVisible())&&(u||m().isOnline())?F(Oe).then(g):g()}return g(),function(){M&&(clearTimeout(M),M=-1)}},[s,o,u,F]),d.exports.useDebugValue(R),l&&x(R))throw x(k)?F(Oe):k;return{mutate:ft,get data(){return xe.data=!0,R},get error(){return xe.error=!0,k},get isValidating(){return xe.isValidating=!0,P}}},fr=ae.defineProperty(Vt,"default",{value:tt}),dr=Ht(Gt),Bt={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},qt={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},Qt={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},at=Qt,it={lang:Y({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},qt),timePickerLocale:Y({},at)};it.lang.ok="\u786E\u5B9A";var ot=it,C="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",Kt={locale:"zh-cn",Pagination:Bt,DatePicker:ot,TimePicker:at,Calendar:ot,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:C,method:C,array:C,object:C,number:C,date:C,boolean:C,integer:C,float:C,regexp:C,email:C,url:C,hex:C},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"}},vr=Kt,Ne;function lt(e){if(typeof document=="undefined")return 0;if(e||Ne===void 0){var i=document.createElement("div");i.style.width="100%",i.style.height="200px";var t=document.createElement("div"),a=t.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",t.appendChild(i),document.body.appendChild(t);var r=i.offsetWidth;t.style.overflow="scroll";var n=i.offsetWidth;r===n&&(n=t.clientWidth),document.body.removeChild(t),Ne=r-n}return Ne}function J(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e)return{};var t=i.element,a=t===void 0?document.body:t,r={},n=Object.keys(e);return n.forEach(function(l){r[l]=a.style[l]}),n.forEach(function(l){a.style[l]=e[l]}),r}function Jt(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var ke={},st=function(e){if(!(!Jt()&&!e)){var i="ant-scrolling-effect",t=new RegExp("".concat(i),"g"),a=document.body.className;if(e){if(!t.test(a))return;J(ke),ke={},document.body.className=a.replace(t,"").trim();return}var r=lt();if(r&&(ke=J({position:"relative",width:"calc(100% - ".concat(r,"px)")}),!t.test(a))){var n="".concat(a," ").concat(i);document.body.className=n.trim()}}},S=[],ct="ant-scrolling-effect",Pe=new RegExp("".concat(ct),"g"),Xt=0,De=new Map,Zt=function e(i){var t=this;Me(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var a;return(a=t.options)===null||a===void 0?void 0:a.container},this.reLock=function(a){var r=S.find(function(n){var l=n.target;return l===t.lockTarget});r&&t.unLock(),t.options=a,r&&(r.options=a,t.lock())},this.lock=function(){var a;if(!S.some(function(s){var o=s.target;return o===t.lockTarget})){if(S.some(function(s){var o,u=s.options;return(u==null?void 0:u.container)===((o=t.options)===null||o===void 0?void 0:o.container)})){S=[].concat(Ae(S),[{target:t.lockTarget,options:t.options}]);return}var r=0,n=((a=t.options)===null||a===void 0?void 0:a.container)||document.body;(n===document.body&&window.innerWidth-document.documentElement.clientWidth>0||n.scrollHeight>n.clientHeight)&&(r=lt());var l=n.className;if(S.filter(function(s){var o,u=s.options;return(u==null?void 0:u.container)===((o=t.options)===null||o===void 0?void 0:o.container)}).length===0&&De.set(n,J({width:r!==0?"calc(100% - ".concat(r,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:n})),!Pe.test(l)){var c="".concat(l," ").concat(ct);n.className=c.trim()}S=[].concat(Ae(S),[{target:t.lockTarget,options:t.options}])}},this.unLock=function(){var a,r=S.find(function(c){var s=c.target;return s===t.lockTarget});if(S=S.filter(function(c){var s=c.target;return s!==t.lockTarget}),!(!r||S.some(function(c){var s,o=c.options;return(o==null?void 0:o.container)===((s=r.options)===null||s===void 0?void 0:s.container)}))){var n=((a=t.options)===null||a===void 0?void 0:a.container)||document.body,l=n.className;!Pe.test(l)||(J(De.get(n),{element:n}),De.delete(n),n.className=n.className.replace(Pe,"").trim())}},this.lockTarget=Xt++,this.options=i},A=0,le=ht(),ge={},X=function(i){if(!le)return null;if(i){if(typeof i=="string")return document.querySelectorAll(i)[0];if(typeof i=="function")return i();if(gt(i)==="object"&&i instanceof window.HTMLElement)return i}return document.body},pr=function(e){vt(t,e);var i=pt(t);function t(a){var r;return Me(this,t),r=i.call(this,a),r.container=void 0,r.componentRef=d.exports.createRef(),r.rafId=void 0,r.scrollLocker=void 0,r.renderComponent=void 0,r.updateScrollLocker=function(n){var l=n||{},c=l.visible,s=r.props,o=s.getContainer,u=s.visible;u&&u!==c&&le&&X(o)!==r.scrollLocker.getContainer()&&r.scrollLocker.reLock({container:X(o)})},r.updateOpenCount=function(n){var l=n||{},c=l.visible,s=l.getContainer,o=r.props,u=o.visible,v=o.getContainer;u!==c&&le&&X(v)===document.body&&(u&&!c?A+=1:n&&(A-=1));var h=typeof v=="function"&&typeof s=="function";(h?v.toString()!==s.toString():v!==s)&&r.removeCurrentContainer()},r.attachToParent=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(n||r.container&&!r.container.parentNode){var l=X(r.props.getContainer);return l?(l.appendChild(r.container),!0):!1}return!0},r.getContainer=function(){return le?(r.container||(r.container=document.createElement("div"),r.attachToParent(!0)),r.setWrapperClassName(),r.container):null},r.setWrapperClassName=function(){var n=r.props.wrapperClassName;r.container&&n&&n!==r.container.className&&(r.container.className=n)},r.removeCurrentContainer=function(){var n,l;(n=r.container)===null||n===void 0||(l=n.parentNode)===null||l===void 0||l.removeChild(r.container)},r.switchScrollingEffect=function(){A===1&&!Object.keys(ge).length?(st(),ge=J({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):A||(J(ge),ge={},st(!0))},r.scrollLocker=new Zt({container:X(a.getContainer)}),r}return mt(t,[{key:"componentDidMount",value:function(){var r=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=ze(function(){r.forceUpdate()}))}},{key:"componentDidUpdate",value:function(r){this.updateOpenCount(r),this.updateScrollLocker(r),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var r=this.props,n=r.visible,l=r.getContainer;le&&X(l)===document.body&&(A=n&&A?A-1:A),this.removeCurrentContainer(),ze.cancel(this.rafId)}},{key:"render",value:function(){var r=this.props,n=r.children,l=r.forceRender,c=r.visible,s=null,o={getOpenCount:function(){return A},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(l||c||this.componentRef.current)&&(s=d.exports.createElement(wt,{getContainer:this.getContainer,ref:this.componentRef},n(o))),s}}]),t}(d.exports.Component);function er(e){var i=e.className,t=e.direction,a=e.index,r=e.marginDirection,n=e.children,l=e.split,c=e.wrap,s=d.exports.useContext(ut),o=s.horizontalSize,u=s.verticalSize,v=s.latestIndex,h=s.supportFlexGap,p={};return h||(t==="vertical"?a<v&&(p={marginBottom:o/(l?2:1)}):p=Y(Y({},a<v&&ye({},r,o/(l?2:1))),c&&{paddingBottom:u})),n==null?null:d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("div",{className:i,style:p},n),a<v&&l&&d.exports.createElement("span",{className:"".concat(i,"-split"),style:p},l))}var tr=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},ut=d.exports.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),rr={small:8,middle:16,large:24};function nr(e){return typeof e=="string"?rr[e]:e||0}var ar=function(i){var t,a=d.exports.useContext(bt),r=a.getPrefixCls,n=a.space,l=a.direction,c=i.size,s=c===void 0?(n==null?void 0:n.size)||"small":c,o=i.align,u=i.className,v=i.children,h=i.direction,p=h===void 0?"horizontal":h,W=i.prefixCls,L=i.split,E=i.style,w=i.wrap,V=w===void 0?!1:w,f=tr(i,["size","align","className","children","direction","prefixCls","split","style","wrap"]),B=St(),Z=d.exports.useMemo(function(){return(Array.isArray(s)?s:[s,s]).map(function(D){return nr(D)})},[s]),q=xt(Z,2),z=q[0],T=q[1],Q=yt(v,{keepEmpty:!0}),ee=o===void 0&&p==="horizontal"?"center":o,m=r("space",W),se=Ct(m,"".concat(m,"-").concat(p),(t={},ye(t,"".concat(m,"-rtl"),l==="rtl"),ye(t,"".concat(m,"-align-").concat(ee),ee),t),u),ce="".concat(m,"-item"),R=l==="rtl"?"marginLeft":"marginRight",k=0,ue=Q.map(function(D,I){return D!=null&&(k=I),d.exports.createElement(er,{className:ce,key:"".concat(ce,"-").concat(I),direction:p,index:I,marginDirection:R,split:L,wrap:V},D)}),be=d.exports.useMemo(function(){return{horizontalSize:z,verticalSize:T,latestIndex:k,supportFlexGap:B}},[z,T,k,B]);if(Q.length===0)return null;var P={};return V&&(P.flexWrap="wrap",B||(P.marginBottom=-T)),B&&(P.columnGap=z,P.rowGap=T),d.exports.createElement("div",Y({className:se,style:Y(Y({},P),E)},f),d.exports.createElement(ut.Provider,{value:be},ue))},mr=ar;export{pr as P,sr as Q,fr as S,cr as U,ur as _,dr as a,mr as b,lt as g,Yt as u,vr as z};
