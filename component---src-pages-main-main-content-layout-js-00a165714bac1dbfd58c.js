(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,5],{"L+uM":function(e,t,n){"use strict";n("R48M");var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");t.default=o},MH5N:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=n("R/WZ"),i=n("tRbT"),c=n("YlgM"),l=n("bXZw"),s=Object(o.a)((function(e){return{}}));function u(){s();return r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{item:!0,xs:12,md:8,lg:8},r.a.createElement(c.default,null)),r.a.createElement(i.a,{item:!0,xs:12,md:4,lg:4},r.a.createElement(l.default,null)))}},Ng2W:function(e,t,n){"use strict";n("R48M");var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=o},"VD++":function(e,t,n){"use strict";var a=n("k1TG"),r=n("aXB2"),o=n("q1tI"),i=n.n(o),c=(n("17x9"),n("i8i4")),l=n.n(c),s=n("iuhU"),u=n("bfFb"),d="undefined"!=typeof window?i.a.useLayoutEffect:i.a.useEffect;function p(e){var t=i.a.useRef(e);return d((function(){t.current=e})),i.a.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var m=n("H2TA"),f="undefined"!=typeof window?i.a.useLayoutEffect:i.a.useEffect;var b=function(e){var t=e.children,n=e.defer,a=void 0!==n&&n,r=e.fallback,o=void 0===r?null:r,c=i.a.useState(!1),l=c[0],s=c[1];return f((function(){a||s(!0)}),[a]),i.a.useEffect((function(){a&&s(!0)}),[a]),i.a.createElement(i.a.Fragment,null,l?t:o)},h=n("Z79C"),g=n("t8Zj"),v=(n("n7j8"),n("Ggvi"),n("AqHK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("cxuS"),n("8o2o")),y=n("9Hrx"),x=n("uRdJ"),E=i.a.createContext(null);n("JHok"),n("pS08");function w(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function j(e,t,n){return null!=n[t]?n[t]:e.props[t]}function S(e,t,n){var a=w(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var c={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var s=r[l][a];c[r[l][a]]=n(s)}c[l]=n(l)}for(a=0;a<o.length;a++)c[o[a]]=n(o[a]);return c}(t,a);return Object.keys(r).forEach((function(i){var c=r[i];if(Object(o.isValidElement)(c)){var l=i in t,s=i in a,u=t[i],d=Object(o.isValidElement)(u)&&!u.props.in;!s||l&&!d?s||!l||d?s&&l&&Object(o.isValidElement)(u)&&(r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:j(c,"exit",e),enter:j(c,"enter",e)})):r[i]=Object(o.cloneElement)(c,{in:!1}):r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:j(c,"exit",e),enter:j(c,"enter",e)})}})),r}var k=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},O=function(e){function t(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(Object(x.a)(Object(x.a)(a)));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}Object(y.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,a=i,w(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:j(e,"appear",n),enter:j(e,"enter",n),exit:j(e,"exit",n)})}))):S(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=w(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(a.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=Object(v.a)(e,["component","childFactory"]),r=this.state.contextValue,o=k(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?i.a.createElement(E.Provider,{value:r},o):i.a.createElement(E.Provider,{value:r},i.a.createElement(t,a,o))},t}(i.a.Component);O.propTypes={},O.defaultProps={component:"div",childFactory:function(e){return e}};var C=O,M="undefined"==typeof window?i.a.useEffect:i.a.useLayoutEffect;var T=function(e){var t=e.classes,n=e.pulsate,a=void 0!==n&&n,r=e.rippleX,o=e.rippleY,c=e.rippleSize,l=e.in,u=e.onExited,d=void 0===u?function(){}:u,m=e.timeout,f=i.a.useState(!1),b=f[0],h=f[1],g=Object(s.a)(t.ripple,t.rippleVisible,a&&t.ripplePulsate),v={width:c,height:c,top:-c/2+o,left:-c/2+r},y=Object(s.a)(t.child,b&&t.childLeaving,a&&t.childPulsate),x=p(d);return M((function(){if(!l){h(!0);var e=setTimeout(x,m);return function(){clearTimeout(e)}}}),[x,l,m]),i.a.createElement("span",{className:g,style:v},i.a.createElement("span",{className:y}))},R=i.a.forwardRef((function(e,t){var n=e.center,o=void 0!==n&&n,c=e.classes,l=e.className,u=Object(r.a)(e,["center","classes","className"]),d=i.a.useState([]),p=d[0],m=d[1],f=i.a.useRef(0),b=i.a.useRef(null);i.a.useEffect((function(){b.current&&(b.current(),b.current=null)}),[p]);var h=i.a.useRef(!1),v=i.a.useRef(null),y=i.a.useRef(null),x=i.a.useRef(null);i.a.useEffect((function(){return function(){clearTimeout(v.current)}}),[]);var E=i.a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,a=e.rippleY,r=e.rippleSize,o=e.cb;m((function(e){return[].concat(Object(g.a)(e),[i.a.createElement(T,{key:f.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:a,rippleSize:r})])})),f.current+=1,b.current=o}),[c]),w=i.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.pulsate,r=void 0!==a&&a,i=t.center,c=void 0===i?o||t.pulsate:i,l=t.fakeElement,s=void 0!==l&&l;if("mousedown"===e.type&&h.current)h.current=!1;else{"touchstart"===e.type&&(h.current=!0);var u,d,p,m=s?null:x.current,f=m?m.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(f.width/2),d=Math.round(f.height/2);else{var b=e.clientX?e.clientX:e.touches[0].clientX,g=e.clientY?e.clientY:e.touches[0].clientY;u=Math.round(b-f.left),d=Math.round(g-f.top)}if(c)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2==0&&(p+=1);else{var w=2*Math.max(Math.abs((m?m.clientWidth:0)-u),u)+2,j=2*Math.max(Math.abs((m?m.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(w,2)+Math.pow(j,2))}e.touches?(y.current=function(){E({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},v.current=setTimeout((function(){y.current&&(y.current(),y.current=null)}),80)):E({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[o,E]),j=i.a.useCallback((function(){w({},{pulsate:!0})}),[w]),S=i.a.useCallback((function(e,t){if(clearTimeout(v.current),"touchend"===e.type&&y.current)return e.persist(),y.current(),y.current=null,void(v.current=setTimeout((function(){S(e,t)})));y.current=null,m((function(e){return e.length>0?e.slice(1):e})),b.current=t}),[]);return i.a.useImperativeHandle(t,(function(){return{pulsate:j,start:w,stop:S}}),[j,w,S]),i.a.createElement("span",Object(a.a)({className:Object(s.a)(c.root,l),ref:x},u),i.a.createElement(C,{component:null,exit:!0},p))}));var z,N=Object(m.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(((z=i.a.memo(R)).muiName="MuiTouchRipple",z)),I=i.a.forwardRef((function(e,t){var n=e.action,o=e.buttonRef,c=e.centerRipple,d=void 0!==c&&c,m=e.children,f=e.classes,g=e.className,v=e.component,y=void 0===v?"button":v,x=e.disabled,E=void 0!==x&&x,w=e.disableRipple,j=void 0!==w&&w,S=e.disableTouchRipple,k=void 0!==S&&S,O=e.focusRipple,C=void 0!==O&&O,M=e.focusVisibleClassName,T=e.onBlur,R=e.onClick,z=e.onFocus,I=e.onFocusVisible,A=e.onKeyDown,B=e.onKeyUp,V=e.onMouseDown,L=e.onMouseLeave,D=e.onMouseUp,F=e.onTouchEnd,W=e.onTouchMove,H=e.onTouchStart,P=e.onDragLeave,q=e.tabIndex,X=void 0===q?0:q,G=e.TouchRippleProps,U=e.type,K=void 0===U?"button":U,$=Object(r.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Z=i.a.useRef(null);var Y=i.a.useRef(null),_=i.a.useState(!1),J=_[0],Q=_[1];E&&J&&Q(!1);var ee=Object(h.a)(),te=ee.isFocusVisible,ne=ee.onBlurVisible,ae=ee.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k;return p((function(a){return t&&t(a),!n&&Y.current&&Y.current[e](a),!0}))}i.a.useImperativeHandle(n,(function(){return{focusVisible:function(){Q(!0),Z.current.focus()}}}),[]),i.a.useEffect((function(){J&&C&&!j&&Y.current.pulsate()}),[j,C,J]);var oe=re("start",V),ie=re("stop",P),ce=re("stop",D),le=re("stop",(function(e){J&&e.preventDefault(),L&&L(e)})),se=re("start",H),ue=re("stop",F),de=re("stop",W),pe=re("stop",(function(e){J&&(ne(e),Q(!1)),T&&T(e)}),!1),me=p((function(e){E||(Z.current||(Z.current=e.currentTarget),te(e)&&(Q(!0),I&&I(e)),z&&z(e))})),fe=function(){var e=l.a.findDOMNode(Z.current);return y&&"button"!==y&&!("A"===e.tagName&&e.href)},be=i.a.useRef(!1),he=p((function(e){C&&!be.current&&J&&Y.current&&" "===e.key&&(be.current=!0,e.persist(),Y.current.stop(e,(function(){Y.current.start(e)}))),A&&A(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&(e.preventDefault(),R&&R(e))})),ge=p((function(e){C&&" "===e.key&&Y.current&&J&&(be.current=!1,e.persist(),Y.current.stop(e,(function(){Y.current.pulsate(e)}))),B&&B(e),e.target===e.currentTarget&&fe()&&" "===e.key&&(e.preventDefault(),R&&R(e))})),ve=y;"button"===ve&&$.href&&(ve="a");var ye={};"button"===ve?(ye.type=K,ye.disabled=E):("a"===ve&&$.href||(ye.role="button"),ye["aria-disabled"]=E);var xe=Object(u.a)(o,t),Ee=Object(u.a)(ae,Z),we=Object(u.a)(xe,Ee);return i.a.createElement(ve,Object(a.a)({className:Object(s.a)(f.root,g,J&&[f.focusVisible,M],E&&f.disabled),onBlur:pe,onClick:R,onFocus:me,onKeyDown:he,onKeyUp:ge,onMouseDown:oe,onMouseLeave:le,onMouseUp:ce,onDragLeave:ie,onTouchEnd:ue,onTouchMove:de,onTouchStart:se,ref:we,tabIndex:E?-1:X},ye,$),m,j||E?null:i.a.createElement(b,null,i.a.createElement(N,Object(a.a)({ref:Y,center:d},G))))}));t.a=Object(m.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(I)},YlgM:function(e,t,n){"use strict";n.r(t);n("aHCT");var a=n("q1tI"),r=n.n(a),o=n("R/WZ"),i=n("ofer"),c=n("Z3vd"),l=n("tRbT"),s=n("k1TG"),u=n("aXB2"),d=(n("17x9"),n("iuhU")),p=n("NqtD"),m=n("H2TA"),f=n("Z79C"),b=n("bfFb"),h=r.a.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.color,c=void 0===o?"primary":o,l=e.component,m=void 0===l?"a":l,h=e.onBlur,g=e.onFocus,v=e.TypographyClasses,y=e.underline,x=void 0===y?"hover":y,E=e.variant,w=void 0===E?"inherit":E,j=Object(u.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),S=Object(f.a)(),k=S.isFocusVisible,O=S.onBlurVisible,C=S.ref,M=r.a.useState(!1),T=M[0],R=M[1],z=Object(b.a)(t,C);return r.a.createElement(i.a,Object(s.a)({className:Object(d.a)(n.root,n["underline".concat(Object(p.a)(x))],a,T&&n.focusVisible,{button:n.button}[m]),classes:v,color:c,component:m,onBlur:function(e){T&&(O(),R(!1)),h&&h(e)},onFocus:function(e){k(e)&&R(!0),g&&g(e)},ref:z,variant:w},j))})),g=Object(m.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h),v=n("L+uM"),y=n.n(v),x=n("pTM4"),E=n("iyFD"),w=n.n(E),j=n("k/Ag"),S=n.n(j),k=n("qIbO"),O=n.n(k);n.d(t,"default",(function(){return M}));var C=Object(o.a)((function(e){return{root:{marginRight:50,marginBottom:20,backgroundColor:"white",padding:40},ribbon:{position:"absolute",top:"-4px",right:"-4px",width:"110px",height:"110px",overflow:"hidden"},text:{fontFamily:"'Montserrat', sans-serif",position:"relative",left:"-8px",top:"18px",width:"158px",padding:"10px 10px",fontSize:"15px",fontWeight:"bold",textAlign:"center",textTransform:"uppercase",color:"#fff",backgroundColor:"#479FC8",WebkitTransform:"rotate(45deg) translate3d(0, 0, 0)",MozTransformOrigin:"rotate(45deg) translate3d(0, 0, 0)",msTransform:"rotate(45deg) translate3d(0, 0, 0)",OTransform:"rotate(45deg) translate3d(0, 0, 0)"},hasRibbon:{position:"relative",display:"inline-block"},button:{textAlign:"center",marginBottom:50,marginTop:30},bold:{fontWeight:"600"}}}));function M(){var e=C();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.root+" left-content"},r.a.createElement(i.a,{variant:"h4",display:"block",style:{marginBottom:"20px"}},"Projects"),r.a.createElement(i.a,{variant:"h5",display:"block",color:"textSecondary",align:"center",className:e.bold},"NFL App"),r.a.createElement(i.a,{paragraph:!0,display:"block",color:"textSecondary",align:"center"},"React, Gatsby, Material-UI, My Sports Feed API"),r.a.createElement("div",{style:{textAlign:"center"},className:e.hasRibbon},r.a.createElement("img",{src:w.a}),r.a.createElement("div",{className:e.ribbon},r.a.createElement("div",{className:e.text},"New"))),r.a.createElement(i.a,{paragraph:!0},"React application created using Gatsby and utilizing My Sports Feed api and Material-UI for styling."),r.a.createElement("div",{className:e.button},r.a.createElement(c.a,{variant:"outlined",color:"primary",size:"large",startIcon:r.a.createElement(y.a,null),href:"http://whosnapit.com/NFL-Fantasy-Football/",target:"_blank"},"Demo")),r.a.createElement("hr",null),r.a.createElement(l.a,{container:!0,spacing:3,style:{paddingTop:"20px",marginBottom:"20px"}},r.a.createElement(l.a,{item:!0,xs:12,lg:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:O.a}))),r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h5",display:"block",color:"textSecondary",align:"left",className:e.bold,style:{marginBottom:"20px"}},"Simple eCommerce Page with Shopping Cart - vanilla JavaScript, jQuery, Bootstrap"),r.a.createElement(i.a,{paragraph:!0},"Simple eCommerce page with shopping cart where product information is loaded from a local json file. An option to choose between localStorage or sessionStorage to store products that have been added to cart to test persistency between browser tabs."),r.a.createElement("div",{style:{cursor:"pointer"}},r.a.createElement(g,{href:"http://whosnapit.com/ws-product-cards/",target:"_blank",variant:"h6",display:"inline",style:{verticalAlign:"middle",color:"#3AAA64"}},r.a.createElement(y.a,{style:{verticalAlign:"middle",color:"#3AAA64"}})," ","Try It")))),r.a.createElement("hr",null),r.a.createElement(l.a,{container:!0,spacing:3,style:{paddingTop:"20px",marginBottom:"20px"}},r.a.createElement(l.a,{item:!0,xs:12,lg:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:S.a}))),r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h5",display:"block",color:"textSecondary",align:"left",className:e.bold,style:{marginBottom:"20px"}},"MLB Stats App - Angular 5, Bootstrap, My Sports Feed API"),r.a.createElement(i.a,{paragraph:!0},"MLB stats application created using Angular 5, My Sports Feed api for data and Bootstrap for styling."),r.a.createElement("div",{style:{cursor:"pointer"}},r.a.createElement(g,{href:"http://tj-mlb-demo.herokuapp.com/",target:"_blank",variant:"h6",display:"inline",style:{verticalAlign:"middle",color:"#3AAA64"}},r.a.createElement(y.a,{style:{verticalAlign:"middle",color:"#3AAA64"}})," ","Try It")))),r.a.createElement("hr",null),r.a.createElement(l.a,{container:!0,spacing:3,style:{paddingTop:"20px",marginBottom:"20px"}},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(i.a,{paragraph:!0,align:"center",className:e.bold},"...LOAD MORE")))),r.a.createElement("div",{className:e.root+" left-content"},r.a.createElement(i.a,{variant:"h4",display:"block",style:{marginBottom:"20px"}},"My GitHub"),r.a.createElement(x.default,null)))}},Z3vd:function(e,t,n){"use strict";var a=n("aXB2"),r=n("k1TG"),o=n("q1tI"),i=n.n(o),c=(n("17x9"),n("iuhU")),l=n("H2TA"),s=n("ye/S"),u=n("VD++"),d=n("NqtD"),p=i.a.forwardRef((function(e,t){var n=e.children,o=e.classes,l=e.className,s=e.color,p=void 0===s?"default":s,m=e.component,f=void 0===m?"button":m,b=e.disabled,h=void 0!==b&&b,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.endIcon,x=e.focusVisibleClassName,E=e.fullWidth,w=void 0!==E&&E,j=e.size,S=void 0===j?"medium":j,k=e.startIcon,O=e.type,C=void 0===O?"button":O,M=e.variant,T=void 0===M?"text":M,R=Object(a.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),z=k&&i.a.createElement("span",{className:Object(c.a)(o.startIcon,o["iconSize".concat(Object(d.a)(S))])},k),N=y&&i.a.createElement("span",{className:Object(c.a)(o.endIcon,o["iconSize".concat(Object(d.a)(S))])},y);return i.a.createElement(u.a,Object(r.a)({className:Object(c.a)(o.root,o[T],l,"inherit"===p?o.colorInherit:"default"!==p&&o["".concat(T).concat(Object(d.a)(p))],"medium"!==S&&[o["".concat(T,"Size").concat(Object(d.a)(S))],o["size".concat(Object(d.a)(S))]],h&&o.disabled,w&&o.fullWidth),component:f,disabled:h,focusRipple:!v,focusVisibleClassName:Object(c.a)(o.focusVisible,x),ref:t,type:C},R),i.a.createElement("span",{className:o.label},z,n,N))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},Z79C:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=n("i8i4"),i=n.n(o),c=!0,l=!1,s=null,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){e.metaKey||e.altKey||e.ctrlKey||(c=!0)}function p(){c=!1}function m(){"hidden"===this.visibilityState&&l&&(c=!0)}function f(e){var t,n,a,r=e.target;try{return r.matches(":focus-visible")}catch(o){}return c||(n=(t=r).type,!("INPUT"!==(a=t.tagName)||!u[n]||t.readOnly)||"TEXTAREA"===a&&!t.readOnly||!!t.isContentEditable)}function b(){l=!0,window.clearTimeout(s),s=window.setTimeout((function(){l=!1}),100)}function h(){return{isFocusVisible:f,onBlurVisible:b,ref:r.a.useCallback((function(e){var t,n=i.a.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",d,!0),t.addEventListener("mousedown",p,!0),t.addEventListener("pointerdown",p,!0),t.addEventListener("touchstart",p,!0),t.addEventListener("visibilitychange",m,!0))}),[])}}},aHCT:function(e,t,n){"use strict";n("t+fG")("bold",(function(e){return function(){return e(this,"b","","")}}))},bXZw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n("q1tI"),r=n.n(a),o=n("R/WZ"),i=n("ofer"),c=n("r2we"),l=n.n(c),s=n("hTzE"),u=n.n(s),d=n("Ng2W"),p=n.n(d),m=n("zjWC"),f=Object(o.a)((function(e){return{root:{backgroundColor:"white",padding:40,marginBottom:20},about:{justifyContent:"center",marginBottom:20},icon:{verticalAlign:"middle",marginRight:20}}}));function b(){var e=f();return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("div",{className:e.root},r.a.createElement(m.default,null)),r.a.createElement(g,null))}var h=function(){var e=f();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{variant:"body1",className:e.about,display:"block"},r.a.createElement(l.a,{className:e.icon}),"Hayward, CA"),r.a.createElement(i.a,{variant:"body1",className:e.about,display:"block"},r.a.createElement(u.a,{className:e.icon}),"tsornet@gmail.com"),r.a.createElement(i.a,{variant:"body1",display:"block"},r.a.createElement(p.a,{className:e.icon}),"http://whosnapit.com"))},g=function(){var e=f();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{variant:"h5",display:"block",color:"textSecondary"},"Skills"))}},bfFb:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function i(e,t){return r.a.useMemo((function(){return null==e&&null==t?null:function(n){o(e,n),o(t,n)}}),[e,t])}n.d(t,"a",(function(){return i}))},cxuS:function(e,t,n){var a=n("P8UN"),r=n("ys0W")(!1);a(a.S,"Object",{values:function(e){return r(e)}})},hTzE:function(e,t,n){"use strict";n("R48M");var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");t.default=o},iyFD:function(e,t,n){e.exports=n.p+"static/project1-f6b8abeb40fdeac88972a933fe10f321.jpg"},"k/Ag":function(e,t,n){e.exports=n.p+"static/project2-d2701319ca51215a956715f670fe30f3.jpg"},qIbO:function(e,t,n){e.exports=n.p+"static/project3-504f83da7c61c2ddfa5f0e2f3ce65a24.jpg"},r2we:function(e,t,n){"use strict";n("R48M");var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");t.default=o},tRbT:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok");var a=n("aXB2"),r=n("k1TG"),o=n("q1tI"),i=n.n(o),c=(n("17x9"),n("iuhU")),l=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=i.a.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,u=e.classes,d=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,b=void 0!==f&&f,h=e.direction,g=void 0===h?"row":h,v=e.item,y=void 0!==v&&v,x=e.justify,E=void 0===x?"flex-start":x,w=e.lg,j=void 0!==w&&w,S=e.md,k=void 0!==S&&S,O=e.sm,C=void 0!==O&&O,M=e.spacing,T=void 0===M?0:M,R=e.wrap,z=void 0===R?"wrap":R,N=e.xl,I=void 0!==N&&N,A=e.xs,B=void 0!==A&&A,V=e.zeroMinWidth,L=void 0!==V&&V,D=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(c.a)(u.root,d,b&&[u.container,0!==T&&u["spacing-xs-".concat(String(T))]],y&&u.item,L&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==z&&u["wrap-xs-".concat(String(z))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==E&&u["justify-xs-".concat(String(E))],!1!==B&&u["grid-xs-".concat(String(B))],!1!==C&&u["grid-sm-".concat(String(C))],!1!==k&&u["grid-md-".concat(String(k))],!1!==j&&u["grid-lg-".concat(String(j))],!1!==I&&u["grid-xl-".concat(String(I))]);return i.a.createElement(m,Object(r.a)({className:F,ref:t},D))})),m=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.a=m},ys0W:function(e,t,n){var a=n("QPJK"),r=n("2mBY"),o=n("5SQf"),i=n("BnbX").f;e.exports=function(e){return function(t){for(var n,c=o(t),l=r(c),s=l.length,u=0,d=[];s>u;)n=l[u++],a&&!i.call(c,n)||d.push(e?[n,c[n]]:c[n]);return d}}}}]);
//# sourceMappingURL=component---src-pages-main-main-content-layout-js-00a165714bac1dbfd58c.js.map