(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{93367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(67294))&&r.__esModule?r:{default:r},o=n(93367);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},74287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},57947:function(e,t,n){"use strict";var r=n(61682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(67294)),i=(o=n(60617))&&o.__esModule?o:{default:o},c=n(93367),s=n(74287),l=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=h.length;c<s;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&u||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,u.default.cloneElement(e,i)}return u.default.cloneElement(e,{key:o})}))}function y(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(s.HeadManagerContext);return u.default.createElement(i.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},60617:function(e,t,n){"use strict";var r=n(83115),a=n(2553),o=n(62012),u=(n(50450),n(9807)),i=n(27690),c=n(99828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(67294),d=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},49961:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(85893),a=n(39227),o=n(27261),u=n(67294),i=n(9008),c=n(46823),s=n(16184),l=n(94184),d=n.n(l),f=n(22122),p=n(96156),h=n(2949),v=n(28991),y=n(6610),m=n(5991),b=n(65255),g=n(44144),x=function(e){(0,b.Z)(n,e);var t=(0,g.Z)(n);function n(e){var r;(0,y.Z)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,v.Z)((0,v.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,m.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,a=t.style,o=t.name,i=t.id,c=t.type,s=t.disabled,l=t.readOnly,v=t.tabIndex,y=t.onClick,m=t.onFocus,b=t.onBlur,g=t.onKeyDown,x=t.onKeyPress,k=t.onKeyUp,O=t.autoFocus,C=t.value,j=t.required,w=(0,h.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),_=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),Z=this.state.checked,E=d()(n,r,(e={},(0,p.Z)(e,"".concat(n,"-checked"),Z),(0,p.Z)(e,"".concat(n,"-disabled"),s),e));return u.createElement("span",{className:E,style:a},u.createElement("input",(0,f.Z)({name:o,id:i,type:c,required:j,readOnly:l,disabled:s,tabIndex:v,className:"".concat(n,"-input"),checked:!!Z,onClick:y,onFocus:m,onBlur:b,onKeyUp:k,onKeyDown:g,onKeyPress:x,onChange:this.handleChange,autoFocus:O,ref:this.saveInput,value:C},_)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,v.Z)((0,v.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var k=x,O=n(44095),C=n(38796),j=n(98423),w=n(86032),_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Z=u.createContext(null),E=function(e,t){var n=e.defaultValue,r=e.children,a=e.options,o=void 0===a?[]:a,i=e.prefixCls,l=e.className,f=e.style,p=e.onChange,h=_(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),v=u.useContext(w.E_),y=v.getPrefixCls,m=v.direction,b=u.useState(h.value||n||[]),g=(0,C.Z)(b,2),x=g[0],k=g[1],E=u.useState([]),P=(0,C.Z)(E,2),M=P[0],S=P[1];u.useEffect((function(){"value"in h&&k(h.value||[])}),[h.value]);var N=function(){return o.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},I=y("checkbox",i),D="".concat(I,"-group"),F=(0,j.Z)(h,["value","disabled"]);o&&o.length>0&&(r=N().map((function(e){return u.createElement(A,{prefixCls:I,key:e.value.toString(),disabled:"disabled"in e?e.disabled:h.disabled,value:e.value,checked:-1!==x.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var K={toggleOption:function(e){var t=x.indexOf(e.value),n=(0,O.Z)(x);-1===t?n.push(e.value):n.splice(t,1),"value"in h||k(n);var r=N();null===p||void 0===p||p(n.filter((function(e){return-1!==M.indexOf(e)})).sort((function(e,t){return r.findIndex((function(t){return t.value===e}))-r.findIndex((function(e){return e.value===t}))})))},value:x,disabled:h.disabled,name:h.name,registerValue:function(e){S((function(t){return[].concat((0,O.Z)(t),[e])}))},cancelValue:function(e){S((function(t){return t.filter((function(t){return t!==e}))}))}},H=d()(D,(0,c.Z)({},"".concat(D,"-rtl"),"rtl"===m),l);return u.createElement("div",(0,s.Z)({className:H,style:f},F,{ref:t}),u.createElement(Z.Provider,{value:K},r))},P=u.forwardRef(E),M=u.memo(P),S=n(21687),N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},I=function(e,t){var n,r=e.prefixCls,a=e.className,o=e.children,i=e.indeterminate,l=void 0!==i&&i,f=e.style,p=e.onMouseEnter,h=e.onMouseLeave,v=e.skipGroup,y=void 0!==v&&v,m=N(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),b=u.useContext(w.E_),g=b.getPrefixCls,x=b.direction,O=u.useContext(Z),C=u.useRef(m.value);u.useEffect((function(){null===O||void 0===O||O.registerValue(m.value),(0,S.Z)("checked"in m||!!O||!("value"in m),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),u.useEffect((function(){if(!y)return m.value!==C.current&&(null===O||void 0===O||O.cancelValue(C.current),null===O||void 0===O||O.registerValue(m.value)),function(){return null===O||void 0===O?void 0:O.cancelValue(m.value)}}),[m.value]);var j=g("checkbox",r),_=(0,s.Z)({},m);O&&!y&&(_.onChange=function(){m.onChange&&m.onChange.apply(m,arguments),O.toggleOption&&O.toggleOption({label:o,value:m.value})},_.name=O.name,_.checked=-1!==O.value.indexOf(m.value),_.disabled=m.disabled||O.disabled);var E=d()((n={},(0,c.Z)(n,"".concat(j,"-wrapper"),!0),(0,c.Z)(n,"".concat(j,"-rtl"),"rtl"===x),(0,c.Z)(n,"".concat(j,"-wrapper-checked"),_.checked),(0,c.Z)(n,"".concat(j,"-wrapper-disabled"),_.disabled),n),a),P=d()((0,c.Z)({},"".concat(j,"-indeterminate"),l));return u.createElement("label",{className:E,style:f,onMouseEnter:p,onMouseLeave:h},u.createElement(k,(0,s.Z)({},_,{prefixCls:j,className:P,ref:t})),void 0!==o&&u.createElement("span",null,o))},D=u.forwardRef(I);D.displayName="Checkbox";var A=D,F=A;F.Group=M,F.__ANT_CHECKBOX=!0;var K=F,H=n(86396),R=n(25779),T=n(18222),q=n(11163),V=n(29163),U=n(94654),B=n(90169),W=n(22471),G=n(76915);function L(){var e=(0,o.Z)(["\ncolor: red; \n"]);return L=function(){return e},e}var X=V.ZP.div(L()),$=function(){var e=(0,U.I0)(),t=(0,U.v9)((function(e){return e.user})),n=t.isSigningUp,o=t.me,c=(0,B.Z)(""),s=(0,a.Z)(c,2),l=s[0],d=s[1],f=(0,B.Z)(""),p=(0,a.Z)(f,2),h=p[0],v=p[1],y=(0,B.Z)(""),m=(0,a.Z)(y,2),b=m[0],g=m[1],x=(0,u.useState)(""),k=x[0],O=x[1],C=(0,u.useState)(!1),j=C[0],w=C[1],_=(0,u.useCallback)((function(e){O(e.target.value),w(e.target.value!==b)}),[b]),Z=(0,u.useState)(""),E=Z[0],P=Z[1],M=(0,u.useState)(!1),S=M[0],N=M[1],I=(0,u.useCallback)((function(e){P(e.target.checked),N(!1)}),[]),D=(0,u.useCallback)((function(){return b!==k?w(!0):E?void e((0,G.JE)({email:l,nickname:h,password:b})):N(!0)}),[b,k,E]);return(0,u.useEffect)((function(){o&&q.default.push("/")}),[o]),(0,r.jsxs)(W.Z,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"\ud68c\uc6d0\uac00\uc785 | NodeBird"})}),(0,r.jsxs)(H.Z,{onFinish:D,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"user-email",children:"\uc774\uba54\uc77c"}),(0,r.jsx)("br",{}),(0,r.jsx)(R.Z,{name:"user-email",type:"email",value:l,required:!0,onChange:d})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"user-nick",children:"\ub2c9\ub124\uc784"}),(0,r.jsx)("br",{}),(0,r.jsx)(R.Z,{name:"user-nick",value:h,required:!0,onChange:v})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"user-password",children:"\ube44\ubc00\ubc88\ud638"}),(0,r.jsx)("br",{}),(0,r.jsx)(R.Z,{name:"user-password",value:b,type:"password",required:!0,onChange:g})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"user-password-check",children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,r.jsx)("br",{}),(0,r.jsx)(R.Z,{name:"user-password-check",value:k,type:"password",required:!0,onChange:_}),j&&(0,r.jsx)(X,{children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(K,{name:"user-term",checked:E,onChange:I,children:"\ud68c\uc6d0\uc815\ubcf4\uad00\ub9ac\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."}),S&&(0,r.jsx)(X,{children:"\uc704 \uc0ac\ud56d\uc5d0 \ub3d9\uc758\ud558\uc154\uc57c \uac00\uc785 \uac00\ub2a5\ud569\ub2c8\ub2e4"}),(0,r.jsx)("div",{style:{marginTop:10},children:(0,r.jsx)(T.Z,{type:"primary",htmlType:"submit",loading:n,children:"\uac00\uc785\ud558\uae30"})})]})]})]})}},38971:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(49961)}])},9008:function(e,t,n){e.exports=n(57947)},38164:function(e,t,n){var r=n(54360);e.exports=function(e){if(Array.isArray(e))return r(e)}},50450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},61682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},99828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var r=n(21914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},27690:function(e,t,n){var r=n(87917),a=n(50450);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},83115:function(e,t,n){var r=n(38164),a=n(27381),o=n(73585),u=n(95725);e.exports=function(e){return r(e)||a(e)||o(e)||u()}},11163:function(e,t,n){e.exports=n(72441)}},function(e){e.O(0,[774,351,331,610,471],(function(){return t=38971,e(e.s=t);var t}));var t=e.O();_N_E=t}]);