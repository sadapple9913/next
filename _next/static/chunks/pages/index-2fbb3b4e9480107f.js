(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2603)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,o=n(7273).Z,r=l(n(7294)),a=n(4532),u=n(3353),i=n(1410),s=n(9064),c=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),_=n(4266);let g=new Set;function v(e,t,n,l,o){if(o||u.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let o=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,r=t+"%"+n+"%"+o;if(g.has(r))return;g.add(r)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let y=r.default.forwardRef(function(e,t){let n,l;let{href:i,as:g,children:y,prefetch:b,passHref:x,replace:j,shallow:M,scroll:C,locale:E,onClick:O,onMouseEnter:k,onTouchStart:w,legacyBehavior:N=!1}=e,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,N&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let T=!1!==b,I=r.default.useContext(f.RouterContext),L=r.default.useContext(d.AppRouterContext),S=null!=I?I:L,H=!I,{href:R,as:B}=r.default.useMemo(()=>{if(!I){let e=m(i);return{href:e,as:g?m(g):e}}let[e,t]=a.resolveHref(I,i,!0);return{href:e,as:g?a.resolveHref(I,g):t||e}},[I,i,g]),U=r.default.useRef(R),X=r.default.useRef(B);N&&(l=r.default.Children.only(n));let A=N?l&&"object"==typeof l&&l.ref:t,[D,K,q]=p.useIntersection({rootMargin:"200px"}),z=r.default.useCallback(e=>{(X.current!==B||U.current!==R)&&(q(),X.current=B,U.current=R),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[B,A,R,q,D]);r.default.useEffect(()=>{S&&K&&T&&v(S,R,B,{locale:E},H)},[B,R,K,E,T,null==I?void 0:I.locale,S,H]);let V={ref:z,onClick(e){N||"function"!=typeof O||O(e),N&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,l,o,a,i,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,l,{shallow:a,locale:s,scroll:i}):t[o?"replace":"push"](l||n,{forceOptimisticNavigation:!f})};c?r.default.startTransition(h):h()}(e,S,R,B,j,M,C,E,H,T)},onMouseEnter(e){N||"function"!=typeof k||k(e),N&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),S&&(T||!H)&&v(S,R,B,{locale:E,priority:!0,bypassPrefetchedCheck:!0},H)},onTouchStart(e){N||"function"!=typeof w||w(e),N&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),S&&(T||!H)&&v(S,R,B,{locale:E,priority:!0,bypassPrefetchedCheck:!0},H)}};if(s.isAbsoluteUrl(B))V.href=B;else if(!N||x||"a"===l.type&&!("href"in l.props)){let e=void 0!==E?E:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&h.getDomainLocale(B,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);V.href=t||_.addBasePath(c.addLocale(B,e,null==I?void 0:I.defaultLocale))}return N?r.default.cloneElement(l,V):r.default.createElement("a",Object.assign({},P,V),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,s=i||!r,[c,f]=l.useState(!1),d=l.useRef(null),p=l.useCallback(e=>{d.current=e},[]);l.useEffect(()=>{if(r){if(s||c)return;let e=d.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:o,elements:r}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=u.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=a.get(l)))return t;let o=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:r,elements:o},u.push(n),a.set(n,t),t}(n);return r.set(e,t),o.observe(e),function(){if(r.delete(e),o.unobserve(e),0===r.size){o.disconnect(),a.delete(l);let e=u.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!c){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[s,n,t,c,d.current]);let h=l.useCallback(()=>{f(!1)},[]);return[p,c,h]};var l=n(7294),o=n(29);let r="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2603:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f}});var l=n(5893),o=n(9034),r=n.n(o),a=n(9008),u=n.n(a),i=n(1664),s=n.n(i);let c=e=>{let{allPostsData:t}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:" Your Name "})}),(0,l.jsxs)("section",{className:r().headingMd,children:[(0,l.jsx)("p",{children:"[Your Self Introduction]"}),(0,l.jsx)("p",{children:"(This is a website)"})]}),(0,l.jsxs)("section",{className:"".concat(r().headingMd," ").concat(r().padding1px),children:[(0,l.jsx)("h2",{className:r().headingLg,children:"Blog"}),(0,l.jsx)("ul",{className:r().list,children:t.map(e=>{let{date:t,title:n,id:o}=e;return(0,l.jsxs)("li",{className:r().listItem,children:[(0,l.jsx)(s(),{href:"/posts/".concat(o),children:(0,l.jsx)("span",{children:n})}),(0,l.jsx)("br",{}),(0,l.jsx)("small",{className:r().lightText,children:t})]},o)})})]})]})};var f=!0;t.default=c},9034:function(e){e.exports={headingMd:"Home_headingMd__SEBf6",padding1px:"Home_padding1px__uJX3C",headingLg:"Home_headingLg__oQ2Vy",list:"Home_list__qBUOI",listItem:"Home_listItem__9gzv8",lightText:"Home_lightText__SOpV2",headingXl:"Home_headingXl__wgBvM"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);