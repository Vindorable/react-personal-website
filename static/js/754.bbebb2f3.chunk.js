"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[754],{493:(e,t,o)=>{o.d(t,{Z:()=>g});var n=o(3366),r=o(7462),a=o(2791),i=o(3733),s=o(4419),l=o(6934),c=o(1402),d=o(9480),u=o(5878),p=o(1217);function m(e){return(0,p.Z)("MuiList",e)}(0,u.Z)("MuiList",["root","padding","dense","subheader"]);var h=o(184);const f=["children","className","component","dense","disablePadding","subheader"],v=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),g=a.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiList"}),{children:l,className:u,component:p="ul",dense:g=!1,disablePadding:b=!1,subheader:Z}=o,y=(0,n.Z)(o,f),P=a.useMemo((()=>({dense:g})),[g]),x=(0,r.Z)({},o,{component:p,dense:g,disablePadding:b}),w=(e=>{const{classes:t,disablePadding:o,dense:n,subheader:r}=e,a={root:["root",!o&&"padding",n&&"dense",r&&"subheader"]};return(0,s.Z)(a,m,t)})(x);return(0,h.jsx)(d.Z.Provider,{value:P,children:(0,h.jsxs)(v,(0,r.Z)({as:p,className:(0,i.Z)(w.root,u),ref:t,ownerState:x},y,{children:[Z,l]}))})}))},9480:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o(2791).createContext({})},4387:(e,t,o)=>{o.d(t,{Z:()=>C});var n=o(3366),r=o(7462),a=o(2791),i=o(3733),s=o(4419),l=o(2065),c=o(6934),d=o(1402),u=o(9480),p=o(7119),m=o(162),h=o(2071),f=o(133),v=o(5878);const g=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);const b=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var Z=o(1217);function y(e){return(0,Z.Z)("MuiMenuItem",e)}const P=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var x=o(184);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],M=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(P.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(P.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(P.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(P.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(P.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(f.Z.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(f.Z.inset)]:{marginLeft:52},["& .".concat(b.root)]:{marginTop:0,marginBottom:0},["& .".concat(b.inset)]:{paddingLeft:36},["& .".concat(g.root)]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(g.root," svg")]:{fontSize:"1.25rem"}}))})),C=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:p=!1,divider:f=!1,disableGutters:v=!1,focusVisibleClassName:g,role:b="menuitem",tabIndex:Z,className:P}=o,C=(0,n.Z)(o,w),S=a.useContext(u.Z),k=a.useMemo((()=>({dense:p||S.dense||!1,disableGutters:v})),[S.dense,p,v]),T=a.useRef(null);(0,m.Z)((()=>{l&&T.current&&T.current.focus()}),[l]);const F=(0,r.Z)({},o,{dense:k.dense,divider:f,disableGutters:v}),O=(e=>{const{disabled:t,dense:o,divider:n,disableGutters:a,selected:i,classes:l}=e,c={root:["root",o&&"dense",t&&"disabled",!a&&"gutters",n&&"divider",i&&"selected"]},d=(0,s.Z)(c,y,l);return(0,r.Z)({},l,d)})(o),E=(0,h.Z)(T,t);let L;return o.disabled||(L=void 0!==Z?Z:-1),(0,x.jsx)(u.Z.Provider,{value:k,children:(0,x.jsx)(M,(0,r.Z)({ref:E,role:b,tabIndex:L,component:c,focusVisibleClassName:(0,i.Z)(O.focusVisible,g),className:(0,i.Z)(O.root,P)},C,{ownerState:F,classes:O}))})}))},911:(e,t,o)=>{o.d(t,{Z:()=>Q});var n=o(7462),r=o(3366),a=o(2791),i=(o(8457),o(3733)),s=o(4419),l=o(1107),c=o(8301),d=o(493);const u=o(7137).Z;var p=o(2071),m=o(162),h=o(184);const f=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function v(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function g(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function b(e,t){if(void 0===t)return!0;let o=e.innerText;return void 0===o&&(o=e.textContent),o=o.trim().toLowerCase(),0!==o.length&&(t.repeating?o[0]===t.keys[0]:0===o.indexOf(t.keys.join("")))}function Z(e,t,o,n,r,a){let i=!1,s=r(e,t,!!t&&o);for(;s;){if(s===e.firstChild){if(i)return!1;i=!0}const t=!n&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&b(s,a)&&!t)return s.focus(),!0;s=r(e,s,o)}return!1}const y=a.forwardRef((function(e,t){const{actions:o,autoFocus:i=!1,autoFocusItem:s=!1,children:l,className:y,disabledItemsFocusable:P=!1,disableListWrap:x=!1,onKeyDown:w,variant:M="selectedMenu"}=e,C=(0,r.Z)(e,f),S=a.useRef(null),k=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,m.Z)((()=>{i&&S.current.focus()}),[i]),a.useImperativeHandle(o,(()=>({adjustStyleForScrollbar:(e,t)=>{const o=!S.current.style.width;if(e.clientHeight<S.current.clientHeight&&o){const o="".concat(u((0,c.Z)(e)),"px");S.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=o,S.current.style.width="calc(100% + ".concat(o,")")}return S.current}})),[]);const T=(0,p.Z)(S,t);let F=-1;a.Children.forEach(l,((e,t)=>{a.isValidElement(e)?(e.props.disabled||("selectedMenu"===M&&e.props.selected||-1===F)&&(F=t),F===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(F+=1,F>=l.length&&(F=-1))):F===t&&(F+=1,F>=l.length&&(F=-1))}));const O=a.Children.map(l,((e,t)=>{if(t===F){const t={};return s&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===M&&(t.tabIndex=0),a.cloneElement(e,t)}return e}));return(0,h.jsx)(d.Z,(0,n.Z)({role:"menu",ref:T,className:y,onKeyDown:e=>{const t=S.current,o=e.key,n=(0,c.Z)(t).activeElement;if("ArrowDown"===o)e.preventDefault(),Z(t,n,x,P,v);else if("ArrowUp"===o)e.preventDefault(),Z(t,n,x,P,g);else if("Home"===o)e.preventDefault(),Z(t,null,x,P,v);else if("End"===o)e.preventDefault(),Z(t,null,x,P,g);else if(1===o.length){const r=k.current,a=o.toLowerCase(),i=performance.now();r.keys.length>0&&(i-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&a!==r.keys[0]&&(r.repeating=!1)),r.lastTime=i,r.keys.push(a);const s=n&&!r.repeating&&b(n,r);r.previousKeyMatched&&(s||Z(t,n,!1,P,v,r))?e.preventDefault():r.previousKeyMatched=!1}w&&w(e)},tabIndex:i?0:-1},C,{children:O}))}));var P=o(627),x=o(6934),w=o(1402),M=o(3199),C=o(7602),S=o(3208),k=o(9095),T=o(5527),F=o(5878),O=o(1217);function E(e){return(0,O.Z)("MuiPopover",e)}(0,F.Z)("MuiPopover",["root","paper"]);const L=["onEntering"],R=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],I=["slotProps"];function N(e,t){let o=0;return"number"===typeof t?o=t:"center"===t?o=e.height/2:"bottom"===t&&(o=e.height),o}function D(e,t){let o=0;return"number"===typeof t?o=t:"center"===t?o=e.width/2:"right"===t&&(o=e.width),o}function z(e){return[e.horizontal,e.vertical].map((e=>"number"===typeof e?"".concat(e,"px"):e)).join(" ")}function j(e){return"function"===typeof e?e():e}const H=(0,x.ZP)(k.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),K=(0,x.ZP)(T.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),V=a.forwardRef((function(e,t){var o,d,u;const m=(0,w.Z)({props:e,name:"MuiPopover"}),{action:f,anchorEl:v,anchorOrigin:g={vertical:"top",horizontal:"left"},anchorPosition:b,anchorReference:Z="anchorEl",children:y,className:x,container:k,elevation:T=8,marginThreshold:F=16,open:O,PaperProps:V={},slots:A,slotProps:W,transformOrigin:B={vertical:"top",horizontal:"left"},TransitionComponent:G=S.Z,transitionDuration:q="auto",TransitionProps:{onEntering:X}={},disableScrollLock:U=!1}=m,Y=(0,r.Z)(m.TransitionProps,L),J=(0,r.Z)(m,R),Q=null!=(o=null==W?void 0:W.paper)?o:V,$=a.useRef(),_=(0,p.Z)($,Q.ref),ee=(0,n.Z)({},m,{anchorOrigin:g,anchorReference:Z,elevation:T,marginThreshold:F,externalPaperSlotProps:Q,transformOrigin:B,TransitionComponent:G,transitionDuration:q,TransitionProps:Y}),te=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"]},E,t)})(ee),oe=a.useCallback((()=>{if("anchorPosition"===Z)return b;const e=j(v),t=(e&&1===e.nodeType?e:(0,c.Z)($.current).body).getBoundingClientRect();return{top:t.top+N(t,g.vertical),left:t.left+D(t,g.horizontal)}}),[v,g.horizontal,g.vertical,b,Z]),ne=a.useCallback((e=>({vertical:N(e,B.vertical),horizontal:D(e,B.horizontal)})),[B.horizontal,B.vertical]),re=a.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},o=ne(t);if("none"===Z)return{top:null,left:null,transformOrigin:z(o)};const n=oe();let r=n.top-o.vertical,a=n.left-o.horizontal;const i=r+t.height,s=a+t.width,l=(0,C.Z)(j(v)),c=l.innerHeight-F,d=l.innerWidth-F;if(null!==F&&r<F){const e=r-F;r-=e,o.vertical+=e}else if(null!==F&&i>c){const e=i-c;r-=e,o.vertical+=e}if(null!==F&&a<F){const e=a-F;a-=e,o.horizontal+=e}else if(s>d){const e=s-d;a-=e,o.horizontal+=e}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(a),"px"),transformOrigin:z(o)}}),[v,Z,oe,ne,F]),[ae,ie]=a.useState(O),se=a.useCallback((()=>{const e=$.current;if(!e)return;const t=re(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,ie(!0)}),[re]);a.useEffect((()=>(U&&window.addEventListener("scroll",se),()=>window.removeEventListener("scroll",se))),[v,U,se]);a.useEffect((()=>{O&&se()})),a.useImperativeHandle(f,(()=>O?{updatePosition:()=>{se()}}:null),[O,se]),a.useEffect((()=>{if(!O)return;const e=(0,M.Z)((()=>{se()})),t=(0,C.Z)(v);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[v,O,se]);let le=q;"auto"!==q||G.muiSupportAuto||(le=void 0);const ce=k||(v?(0,c.Z)(j(v)).body:void 0),de=null!=(d=null==A?void 0:A.root)?d:H,ue=null!=(u=null==A?void 0:A.paper)?u:K,pe=(0,l.y)({elementType:ue,externalSlotProps:(0,n.Z)({},Q,{style:ae?Q.style:(0,n.Z)({},Q.style,{opacity:0})}),additionalProps:{elevation:T,ref:_},ownerState:ee,className:(0,i.Z)(te.paper,null==Q?void 0:Q.className)}),me=(0,l.y)({elementType:de,externalSlotProps:(null==W?void 0:W.root)||{},externalForwardedProps:J,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:ce,open:O},ownerState:ee,className:(0,i.Z)(te.root,x)}),{slotProps:he}=me,fe=(0,r.Z)(me,I);return(0,h.jsx)(de,(0,n.Z)({},fe,!(0,P.X)(de)&&{slotProps:he,disableScrollLock:U},{children:(0,h.jsx)(G,(0,n.Z)({appear:!0,in:O,onEntering:(e,t)=>{X&&X(e,t),se()},onExited:()=>{ie(!1)},timeout:le},Y,{children:(0,h.jsx)(ue,(0,n.Z)({},pe,{children:y}))}))}))}));var A=o(3967);function W(e){return(0,O.Z)("MuiMenu",e)}(0,F.Z)("MuiMenu",["root","paper","list"]);const B=["onEntering"],G=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],q={vertical:"top",horizontal:"right"},X={vertical:"top",horizontal:"left"},U=(0,x.ZP)(V,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Y=(0,x.ZP)(K,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),J=(0,x.ZP)(y,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Q=a.forwardRef((function(e,t){var o,c;const d=(0,w.Z)({props:e,name:"MuiMenu"}),{autoFocus:u=!0,children:p,className:m,disableAutoFocusItem:f=!1,MenuListProps:v={},onClose:g,open:b,PaperProps:Z={},PopoverClasses:y,transitionDuration:P="auto",TransitionProps:{onEntering:x}={},variant:M="selectedMenu",slots:C={},slotProps:S={}}=d,k=(0,r.Z)(d.TransitionProps,B),T=(0,r.Z)(d,G),F=(0,A.Z)(),O="rtl"===F.direction,E=(0,n.Z)({},d,{autoFocus:u,disableAutoFocusItem:f,MenuListProps:v,onEntering:x,PaperProps:Z,transitionDuration:P,TransitionProps:k,variant:M}),L=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},W,t)})(E),R=u&&!f&&b,I=a.useRef(null);let N=-1;a.Children.map(p,((e,t)=>{a.isValidElement(e)&&(e.props.disabled||("selectedMenu"===M&&e.props.selected||-1===N)&&(N=t))}));const D=null!=(o=C.paper)?o:Y,z=null!=(c=S.paper)?c:Z,j=(0,l.y)({elementType:C.root,externalSlotProps:S.root,ownerState:E,className:[L.root,m]}),H=(0,l.y)({elementType:D,externalSlotProps:z,ownerState:E,className:L.paper});return(0,h.jsx)(U,(0,n.Z)({onClose:g,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?q:X,slots:{paper:D,root:C.root},slotProps:{root:j,paper:H},open:b,ref:t,transitionDuration:P,TransitionProps:(0,n.Z)({onEntering:(e,t)=>{I.current&&I.current.adjustStyleForScrollbar(e,F),x&&x(e,t)}},k),ownerState:E},T,{classes:y,children:(0,h.jsx)(J,(0,n.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),g&&g(e,"tabKeyDown"))},actions:I,autoFocus:u&&(-1===N||f),autoFocusItem:R,variant:M},v,{className:(0,i.Z)(L.list,v.className),children:p}))}))}))}}]);
//# sourceMappingURL=754.bbebb2f3.chunk.js.map