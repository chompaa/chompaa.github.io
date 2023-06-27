(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var A,c,Ne,S,oe,Oe,Y,B={},Ee=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function Ce(e){var t=e.parentNode;t&&t.removeChild(e)}function I(e,t,n){var r,i,o,l={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?A.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return E(e,l,r,i,null)}function E(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Ne};return i==null&&c.vnode!=null&&c.vnode(o),o}function N(e){return e.children}function P(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function Ie(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ie(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!W.__r++||oe!==c.debounceRendering)&&((oe=c.debounceRendering)||Oe)(W)}function W(){var e,t,n,r,i,o,l,a;for(S.sort(Y);e=S.shift();)e.__d&&(t=S.length,r=void 0,i=void 0,l=(o=(n=e).__v).__e,(a=n.__P)&&(r=[],(i=x({},o)).__v=o.__v+1,te(a,o,i,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??H(o),o.__h),Re(r,o),o.__e!=l&&Ie(o)),S.length>t&&S.sort(Y));W.__r=0}function He(e,t,n,r,i,o,l,a,u,d){var _,v,f,s,h,$,m,y=r&&r.__k||Ee,k=y.length;for(n.__k=[],_=0;_<t.length;_++)if((s=n.__k[_]=(s=t[_])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?E(null,s,null,null,s):J(s)?E(N,{children:s},null,null,null):s.__b>0?E(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(f=y[_])===null||f&&s.key==f.key&&s.type===f.type)y[_]=void 0;else for(v=0;v<k;v++){if((f=y[v])&&s.key==f.key&&s.type===f.type){y[v]=void 0;break}f=null}te(e,s,f=f||B,i,o,l,a,u,d),h=s.__e,(v=s.ref)&&f.ref!=v&&(m||(m=[]),f.ref&&m.push(f.ref,null,s),m.push(v,s.__c||h,s)),h!=null?($==null&&($=h),typeof s.type=="function"&&s.__k===f.__k?s.__d=u=Me(s,u,e):u=Ue(e,s,f,y,h,u),typeof n.type=="function"&&(n.__d=u)):u&&f.__e==u&&u.parentNode!=e&&(u=H(f))}for(n.__e=$,_=k;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=Ae(r).nextSibling),Fe(y[_],y[_]));if(m)for(_=0;_<m.length;_++)De(m[_],m[++_],m[++_])}function Me(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?Me(r,t,n):Ue(n,r,r,i,r.__e,t));return t}function M(e,t){return t=t||[],e==null||typeof e=="boolean"||(J(e)?e.some(function(n){M(n,t)}):t.push(e)),t}function Ue(e,t,n,r,i,o){var l,a,u;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),l=null;else{for(a=o,u=0;(a=a.nextSibling)&&u<r.length;u+=1)if(a==i)break e;e.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function Ae(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=Ae(n)))return r}return null}function Xe(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||q(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||q(e,o,t[o],n[o],r)}function ie(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Qe.test(t)?n:n+"px"}function q(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ie(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ie(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?ae:le,o):e.removeEventListener(t,o?ae:le,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function le(e){return this.l[e.type+!1](c.event?c.event(e):e)}function ae(e){return this.l[e.type+!0](c.event?c.event(e):e)}function te(e,t,n,r,i,o,l,a,u){var d,_,v,f,s,h,$,m,y,k,D,O,re,F,K,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(d=c.__b)&&d(t);try{e:if(typeof b=="function"){if(m=t.props,y=(d=b.contextType)&&r[d.__c],k=d?y?y.props.value:d.__:r,n.__c?$=(_=t.__c=n.__c).__=_.__E:("prototype"in b&&b.prototype.render?t.__c=_=new b(m,k):(t.__c=_=new P(m,k),_.constructor=b,_.render=et),y&&y.sub(_),_.props=m,_.state||(_.state={}),_.context=k,_.__n=r,v=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),b.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,b.getDerivedStateFromProps(m,_.__s))),f=_.props,s=_.state,_.__v=t,v)b.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(b.getDerivedStateFromProps==null&&m!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(m,k),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(m,_.__s,k)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=m,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(L){L&&(L.__=t)}),D=0;D<_._sb.length;D++)_.__h.push(_._sb[D]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(m,_.__s,k),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,s,h)})}if(_.context=k,_.props=m,_.__P=e,O=c.__r,re=0,"prototype"in b&&b.prototype.render){for(_.state=_.__s,_.__d=!1,O&&O(t),d=_.render(_.props,_.state,_.context),F=0;F<_._sb.length;F++)_.__h.push(_._sb[F]);_._sb=[]}else do _.__d=!1,O&&O(t),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++re<25);_.state=_.__s,_.getChildContext!=null&&(r=x(x({},r),_.getChildContext())),v||_.getSnapshotBeforeUpdate==null||(h=_.getSnapshotBeforeUpdate(f,s)),He(e,J(K=d!=null&&d.type===N&&d.key==null?d.props.children:d)?K:[K],t,n,r,i,o,l,a,u),_.base=t.__e,t.__h=null,_.__h.length&&l.push(_),$&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ye(n.__e,t,n,r,i,o,l,u);(d=c.diffed)&&d(t)}catch(L){t.__v=null,(u||o!=null)&&(t.__e=a,t.__h=!!u,o[o.indexOf(a)]=null),c.__e(L,t,n)}}function Re(e,t){c.__c&&c.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){c.__e(r,n.__v)}})}function Ye(e,t,n,r,i,o,l,a){var u,d,_,v=n.props,f=t.props,s=t.type,h=0;if(s==="svg"&&(i=!0),o!=null){for(;h<o.length;h++)if((u=o[h])&&"setAttribute"in u==!!s&&(s?u.localName===s:u.nodeType===3)){e=u,o[h]=null;break}}if(e==null){if(s===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,f.is&&f),o=null,a=!1}if(s===null)v===f||a&&e.data===f||(e.data=f);else{if(o=o&&A.call(e.childNodes),d=(v=n.props||B).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!a){if(o!=null)for(v={},h=0;h<e.attributes.length;h++)v[e.attributes[h].name]=e.attributes[h].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Xe(e,f,v,i,a),_)t.__k=[];else if(He(e,J(h=t.props.children)?h:[h],t,n,r,i&&s!=="foreignObject",o,l,o?o[0]:n.__k&&H(n,0),a),o!=null)for(h=o.length;h--;)o[h]!=null&&Ce(o[h]);a||("value"in f&&(h=f.value)!==void 0&&(h!==e.value||s==="progress"&&!h||s==="option"&&h!==v.value)&&q(e,"value",h,v.value,!1),"checked"in f&&(h=f.checked)!==void 0&&h!==e.checked&&q(e,"checked",h,v.checked,!1))}return e}function De(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){c.__e(r,n)}}function Fe(e,t,n){var r,i;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||De(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){c.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Fe(r[i],t,n||typeof e.type!="function");n||e.__e==null||Ce(e.__e),e.__=e.__e=e.__d=void 0}function et(e,t,n){return this.constructor(e,n)}function tt(e,t,n){var r,i,o;c.__&&c.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],te(t,e=(!r&&n||t).__k=I(N,null,[e]),i||B,B,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?A.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Re(o,e)}function nt(e,t,n){var r,i,o,l,a=x({},e.props);for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o]===void 0&&l!==void 0?l[o]:t[o];return arguments.length>2&&(a.children=arguments.length>3?A.call(arguments,2):n),E(e.type,a,r||e.key,i||e.ref,null)}A=Ee.slice,c={__e:function(e,t,n,r){for(var i,o,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(a){e=a}throw e}},Ne=0,P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),_e(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},P.prototype.render=N,S=[],Oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0;var rt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},ot=Object.defineProperty,_t=Object.defineProperties,it=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,ce=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))Le.call(t,n)&&ce(e,n,t[n]);if(G)for(var n of G(t))ze.call(t,n)&&ce(e,n,t[n]);return e},lt=(e,t)=>_t(e,it(t)),at=(e,t)=>{var n={};for(var r in e)Le.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&G)for(var r of G(e))t.indexOf(r)<0&&ze.call(e,r)&&(n[r]=e[r]);return n},R=(e,t,n)=>{const r=i=>{var o=i,{color:l="currentColor",size:a=24,stroke:u=2,children:d}=o,_=at(o,["color","size","stroke","children"]);return I("svg",se(lt(se({},rt),{width:a,height:a,stroke:l,"stroke-width":u,class:`tabler-icon tabler-icon-${e}`}),_),[...n.map(([v,f])=>I(v,f)),...M(d)])};return r.displayName=`${t}`,r},ct=R("arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]]),Te=R("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),st=R("brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]),ut=R("moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),ft=R("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),U,g,Q,ue,Z=0,je=[],j=[],fe=c.__b,pe=c.__r,de=c.diffed,he=c.__c,ve=c.unmount;function ne(e,t){c.__h&&c.__h(g,e,Z||t),Z=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:j}),n.__[e]}function Ve(e){return Z=1,pt(qe,e)}function pt(e,t,n){var r=ne(U++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):qe(void 0,t),function(a){var u=r.__N?r.__N[0]:r.__[0],d=r.t(u,a);u!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=g,!g.u)){var i=function(a,u,d){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(f){return f.__c});if(_.every(function(f){return!f.__N}))return!o||o.call(this,a,u,d);var v=!1;return _.forEach(function(f){if(f.__N){var s=f.__[0];f.__=f.__N,f.__N=void 0,s!==f.__[0]&&(v=!0)}}),!(!v&&r.__c.props===a)&&(!o||o.call(this,a,u,d))};g.u=!0;var o=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(a,u,d){if(this.__e){var _=o;o=void 0,i(a,u,d),o=_}l&&l.call(this,a,u,d)},g.shouldComponentUpdate=i}return r.__N||r.__}function Be(e,t){var n=ne(U++,3);!c.__s&&We(n.__H,t)&&(n.__=e,n.i=t,g.__H.__h.push(n))}function dt(e){return Z=5,ht(function(){return{current:e}},[])}function ht(e,t){var n=ne(U++,7);return We(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function vt(){for(var e;e=je.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(V),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(t){e.__H.__h=[],c.__e(t,e.__v)}}c.__b=function(e){g=null,fe&&fe(e)},c.__r=function(e){pe&&pe(e),U=0;var t=(g=e.__c).__H;t&&(Q===g?(t.__h=[],g.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=j,n.__N=n.i=void 0})):(t.__h.forEach(V),t.__h.forEach(ee),t.__h=[],U=0)),Q=g},c.diffed=function(e){de&&de(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(je.push(t)!==1&&ue===c.requestAnimationFrame||((ue=c.requestAnimationFrame)||mt)(vt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==j&&(n.__=n.__V),n.i=void 0,n.__V=j})),Q=g=null},c.__c=function(e,t){t.some(function(n){try{n.__h.forEach(V),n.__h=n.__h.filter(function(r){return!r.__||ee(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],c.__e(r,n.__v)}}),he&&he(e,t)},c.unmount=function(e){ve&&ve(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{V(r)}catch(i){t=i}}),n.__H=void 0,t&&c.__e(t,n.__v))};var me=typeof requestAnimationFrame=="function";function mt(e){var t,n=function(){clearTimeout(r),me&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);me&&(t=requestAnimationFrame(n))}function V(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function ee(e){var t=g;e.__c=e.__(),g=t}function We(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function qe(e,t){return typeof t=="function"?t(e):t}function gt(e,t){for(var n in t)e[n]=t[n];return e}function ge(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function ye(e){this.props=e}(ye.prototype=new P).isPureReactComponent=!0,ye.prototype.shouldComponentUpdate=function(e,t){return ge(this.props,e)||ge(this.state,t)};var be=c.__b;c.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),be&&be(e)};var yt=c.__e;c.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}yt(e,t,n,r)};var ke=c.unmount;function Ge(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=gt({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Ge(r,t,n)})),e}function Ze(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Ze(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function X(){this.__u=0,this.t=null,this.__b=null}function Je(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function z(){this.u=null,this.o=null}c.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ke&&ke(e)},(X.prototype=new P).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Je(r.__v),o=!1,l=function(){o||(o=!0,n.__R=null,i?i(a):a())};n.__R=l;var a=function(){if(!--r.__u){if(r.state.__a){var d=r.state.__a;r.__v.__k[0]=Ze(d,d.__c.__P,d.__c.__O)}var _;for(r.setState({__a:r.__b=null});_=r.t.pop();)_.forceUpdate()}},u=t.__h===!0;r.__u++||u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(l,l)},X.prototype.componentWillUnmount=function(){this.t=[]},X.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Ge(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&I(N,null,e.fallback);return i&&(i.__h=null),[I(N,null,t.__a?null:e.children),i]};var we=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(z.prototype=new P).__a=function(e){var t=this,n=Je(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),we(t,e,r)):i()};n?n(o):o()}},z.prototype.render=function(e){this.u=null,this.o=new Map;var t=M(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){we(e,n,t)})};var Ke=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,bt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,kt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,wt=/[A-Z0-9]/g,xt=typeof document<"u",Pt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var xe=c.event;function St(){}function $t(){return this.cancelBubble}function Nt(){return this.defaultPrevented}c.event=function(e){return xe&&(e=xe(e)),e.persist=St,e.isPropagationStopped=$t,e.isDefaultPrevented=Nt,e.nativeEvent=e};var Ot={enumerable:!1,configurable:!0,get:function(){return this.class}},Pe=c.vnode;c.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var o in n){var l=n[o];if(!(o==="value"&&"defaultValue"in n&&l==null||xt&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var a=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===!0?l="":a==="ondoubleclick"?o="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||Pt(n.type)?a==="onfocus"?o="onfocusin":a==="onblur"?o="onfocusout":kt.test(o)?o=a:r.indexOf("-")===-1&&bt.test(o)?o=o.replace(wt,"-$&").toLowerCase():l===null&&(l=void 0):a=o="oninput",a==="oninput"&&i[o=a]&&(o="oninputCapture"),i[o]=l}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=M(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=M(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Ot)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=Ke,Pe&&Pe(e)};var Se=c.__r;c.__r=function(e){Se&&Se(e),e.__c};var $e=c.diffed;c.diffed=function(e){$e&&$e(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};function Et(e){return!!e&&e.$$typeof===Ke}function Ct(e){return Et(e)?nt.apply(null,arguments):e}var It=0;function p(e,t,n,r,i,o){var l,a,u={};for(a in t)a=="ref"?l=t[a]:u[a]=t[a];var d={type:e,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--It,__source:i,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(a in l)u[a]===void 0&&(u[a]=l[a]);return c.vnode&&c.vnode(d),d}const C=({icon:e,link:t,onClick:n})=>p("a",{href:t,onClick:()=>{n&&n()},target:"_blank",class:"flex w-fit cursor-pointer items-center justify-center rounded-lg p-[0.125rem]  shadow-[inset_0_0_0_0] shadow-main transition duration-500 ease-in-out  hover:text-alt hover:shadow-[inset_0_0_0_26px] hover:shadow-main  dark:hover:text-main dark:hover:shadow-alt",children:Ct(e,{stroke:1,size:26})});var w=(e=>(e.Tailwind="Tailwind",e.React="React",e.MaterialUI="MUI",e.Express="Express",e.SocketIo="Socket-io",e.PeerJS="PeerJS",e.Firebase="Firebase",e.TypeScript="TypeScript",e))(w||{});const Ht=({icon:e})=>p("div",{class:"w-fit rounded-full bg-main/25 px-3 py-1 text-xs font-medium leading-5 text-main  dark:bg-alt/25 dark:text-alt",children:e}),T=({title:e,tags:t,description:n,demo:r,github:i,visible:o,className:l})=>p("div",{class:"align-start flex flex-col gap-4 rounded-md lg:flex-row lg:p-4 lg:hover:bg-alt/10",children:p("div",{class:`flex h-fit min-h-max w-full flex-col content-center justify-center gap-4 
          transition-all ease-in-out ${l} ${o?"translate-x-0 opacity-100":"-translate-x-10 opacity-0"}`,children:[p("div",{class:"flex gap-2",children:[p("h1",{class:"items-center font-display font-bold tracking-wider",children:e}),r?p(C,{icon:p(ct,{}),link:r}):null,p(C,{icon:p(Te,{}),link:i})]}),p("p",{class:"justify-inter-word flex text-sm",children:n}),p("div",{class:"flex gap-2",children:t.map(a=>p(Ht,{icon:a}))})]})}),Mt=e=>{const t=dt(null),[n,r]=Ve(!1);return Be(()=>{const i=new IntersectionObserver(([l])=>{r(l.isIntersecting)},e),o=t.current;if(o)return i.observe(o),()=>{i.unobserve(o)}},[t,e]),[t,n]},Ut=()=>{const e={root:null,rootMargin:"0px",threshold:.1},[t,n]=Mt(e),[r,i]=Ve(localStorage.theme),o=()=>{localStorage.theme=r==="dark"?"light":"dark",i(localStorage.theme)};return Be(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]),p("div",{class:"bg-alt text-main dark:bg-main dark:text-alt",children:p("section",{class:`min-h-screen-d relative mx-auto max-w-screen-xl justify-between px-6 transition-all 
                duration-700 md:px-24 lg:px-48${n?"translate-y-0 opacity-100":"-translate-y-10 opacity-0"}`,ref:t,id:"landing",children:p("div",{class:"flex flex-col lg:flex-row",children:[p("div",{class:"lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2",children:p("div",{class:"flex flex-col gap-y-5 py-24",children:[p("p",{class:"font-display text-5xl font-black tracking-tight",children:"Antony Martin"}),p("p",{class:"text-xl font-medium tracking-tight",children:"Frontend Developer"}),p("p",{class:"text-l tracking-tight",children:"Currently looking for work."}),p("div",{class:"lg:absolute lg:bottom-24",children:p("div",{class:"flex gap-x-2",children:[p(C,{link:"https://github.com/chompaa",icon:p(Te,{})}),p(C,{link:"https://www.linkedin.com/in/antony-martin-122a92225/",icon:p(st,{})}),p(C,{icon:r==="dark"?p(ut,{}):p(ft,{}),onClick:()=>o()})]})})]})}),p("div",{class:"w-full lg:w-1/2 lg:pt-24",children:[p("div",{class:"mb-12",children:[p("h2",{class:"sticky top-0 z-10 -mx-6 w-screen bg-alt/50 px-6 py-4 text-sm font-bold uppercase tracking-widest  backdrop-blur-xl dark:bg-main/50 md:-mx-24 md:px-24 lg:relative  lg:top-auto lg:mx-4 lg:w-fit lg:p-0 lg:pb-4",children:"About"}),p("p",{class:"lg:mx-4",children:["Hi, I'm Antony. I have a bachelors in Mathematics, and am currently undertaking a masters in Computer Science.",p("br",{}),p("br",{}),"In my spare time I enjoy working on personal projects, bouldering, and going to the gym."]})]}),p("h2",{class:"sticky top-0 z-10 -mx-6 w-screen bg-alt/50 px-6 py-4 text-sm font-bold uppercase tracking-widest  backdrop-blur-xl dark:bg-main/50 md:-mx-24 md:px-24 lg:relative  lg:top-auto lg:mx-4 lg:w-fit lg:p-0 lg:pb-4",children:"Showcase"}),p("div",{class:"flex w-full flex-auto flex-col flex-wrap gap-12 pb-24 lg:gap-4",children:[p(T,{title:"Zenithdraw",description:"Draw collaboratively with your friends! Features the ability to save and restore                 drawings, zoom/pan the canvas, change stroke sizes, and erase.",github:"https://github.com/chompaa/zenithdraw",tags:[w.Express,w.SocketIo,w.React],visible:n,className:"delay-0"}),p(T,{title:"Trello Clone",description:"A trello-board-like app. Keep track of your tasks and organize them into lists.                 Features drag-and-drop, realtime updates, along with user authentication and                 storage.",github:"https://github.com/chompaa/trello-clone",demo:"https://chompaa.github.io/trello-clone",tags:[w.React,w.Tailwind,w.Firebase],visible:n,className:"delay-200"}),p(T,{title:"Pathviz",description:"Visualize pathfinding algorithms such as Dijkstra's algorithm and DFS! Generate a                 maze or build your own and watch the algorithm a path.",github:"https://github.com/chompaa/pathfinding-visualizer",demo:"https://chompaa.github.io/pathfinding-visualizer",tags:[w.React],visible:n,className:"delay-500"}),p(T,{title:"Tic-tac-toe",description:"A peer-to-peer tic-tac-toe game. Share your ID and connect with your friends!                 Not satisfied with the match outcome? Rematch!",github:"https://github.com/chompaa/tictactoe",demo:"https://chompaa.github.io/tictactoe",tags:[w.PeerJS,w.React,w.MaterialUI],visible:n,className:"delay-700"})]})]})]})})})};tt(p(Ut,{}),document.getElementById("app"));