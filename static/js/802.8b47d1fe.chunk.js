"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{4864:(e,t,a)=>{a.d(t,{Z:()=>i});a(2791);var o=a(3767),n=a(3967),r=a(184);const i=e=>{let{children:t}=e;(0,n.Z)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{p:2,sx:{width:"100vw",maxWidth:"100%",flexGrow:1,height:"100%",overflowY:"scroll"},children:(0,r.jsx)(o.Z,{direction:"row",sx:{width:"100%"},justifyContent:"space-evenly",children:(0,r.jsx)(o.Z,{position:"relative",spacing:1,p:3,sx:{width:{xs:"100%",md:"80%",lg:"60%"},maxWidth:"896px"},children:t})})})})}},281:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(2791),n=a(3767),r=a(697),i=a(3967),l=a(7689),s=a(3169),c=a(184);const d=e=>{let{src:t,alt:a,url:d,lightbox:p,height:h}=e;const u=(0,i.Z)(),m=(0,l.s0)(),g=(0,o.useRef)(null),x=[{img:t,title:a}];function v(e){return 0===e.indexOf("//")&&(e=window.location.protocol+e),e.toLowerCase().replace(/([a-z])?:\/\//,"$1").split("/")[0]}return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{alignItems:"center",justifyContent:"center",sx:{width:"100%"},children:(0,c.jsx)(n.Z,{children:(0,c.jsx)(r.Z,{component:"img",sx:{width:"100%",height:h||"auto",cursor:d||p?"pointer":"default",transition:u.transitions.create("all",{easing:u.transitions.easing.sharp,duration:u.transitions.duration.leavingScreen}),"&:hover":d||p?{transform:"scale3d(1.05, 1.05, 1)"}:void 0,"&:active":d||p?{transform:"scale3d(0.95, 0.95, 1)"}:void 0,objectFit:"contain"},alt:a,src:t,style:{objectFit:"contain",borderRadius:"8px"},onClick:function(){return d?function(e){return(e.indexOf(":")>-1||e.indexOf("//")>-1)&&v(window.location.href)!==v(e)}(d)?window.open(d,"_blank"):m(d):p?g.current.openLightbox(x[0]):void 0}})})}),(0,c.jsx)(s.Z,{ref:g,imageSet:x})]})}},3169:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(2791),n=a(9095),r=a(2739),i=a(2003),l=a(697),s=a(3767),c=a(3400),d=a(7283),p=a(1750),h=a(8579),u=a(184);const m=(0,o.forwardRef)(((e,t)=>{let{imageSet:a}=e;(0,o.useImperativeHandle)(t,(()=>({openLightbox(e){f(e)}})));const[m,g]=o.useState("false"),[x,v]=o.useState("false"),[b,Z]=o.useState(!1),f=e=>{g(e),v(e.img),Z(!0)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(n.Z,{open:b,onClose:()=>Z(!1),closeAfterTransition:!0,slots:{backdrop:r.Z},slotProps:{backdrop:{timeout:500}},children:(0,u.jsx)(i.Z,{in:b,children:(0,u.jsxs)(l.Z,{sx:{width:"100vw",height:"100dvh",backgroundColor:"#000"},children:[(0,u.jsx)(l.Z,{component:"img",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:x.width,height:"auto",maxWidth:"100%",maxHeight:"90%",bgcolor:"background.paper",border:"1px solid #fff",boxShadow:24,outline:"none",objectFit:"contain"},alt:"",src:x,style:{objectFit:"contain",borderRadius:"8px"}}),(0,u.jsxs)(s.Z,{sx:{width:"100vw",height:"100dvh"},children:[(0,u.jsx)(s.Z,{sx:{width:"100%",height:"100%"},p:1,justifyContent:"center",children:(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,u.jsx)(c.Z,{onClick:()=>(()=>{let e=a.indexOf(m);if(e<=0)Z(!1);else{let t=a[e-1];g(t),v(t.img)}})(),children:(0,u.jsx)(d.Z,{size:32})}),(0,u.jsx)(c.Z,{onClick:()=>(()=>{let e=a.indexOf(m);if(e>=a.length-1)Z(!1);else{let t=a[e+1];g(t),v(t.img)}})(),children:(0,u.jsx)(p.Z,{size:32})})]})}),(0,u.jsx)(s.Z,{direction:"row",sx:{width:"100%"},position:"absolute",p:1,alignItems:"center",justifyContent:"end",children:(0,u.jsx)(c.Z,{onClick:()=>Z(!1),children:(0,u.jsx)(h.Z,{size:32})})})]})]})})})})}))},4551:(e,t,a)=>{a.d(t,{Z:()=>r});a(2791);var o=a(4721),n=a(184);const r=e=>{let{amount:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{sx:{visibility:"hidden",borderBottomWidth:t}})})}},7149:(e,t,a)=>{a.d(t,{h:()=>r});a(2791);var o=a(3967),n=a(5193);const r=()=>{const e=(0,o.Z)();return(0,n.Z)(e.breakpoints.down("md"))}},4531:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(2791);var o=a(697),n=a(4294),r=a(4721),i=a(890),l=a(3767),s=a(9502),c=a(4864),d=a(281),p=a(4551),h=a(7149);const u=a.p+"static/media/jgames-logo.168cdd23051d0559bcb3.png";var m=a(8102),g=a(1248);const x=a.p+"static/media/game-dino-with-a-gun.9cdf9a06a0ee3a6678d4.png";var v=a(8072),b=a(7689),Z=a(184);const f=()=>{const e=(0,b.s0)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(d.Z,{src:u,height:300}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(n.Z,{disableElevation:!0,variant:"outlined",startIcon:(0,Z.jsx)(s._,{size:28}),onClick:()=>e(v.p.playgroundSubpage.gamePrivacyPolicy),children:"Games Privacy Policy"})}),(0,Z.jsx)(p.Z,{amount:10}),(0,Z.jsx)(r.Z,{}),(0,Z.jsx)(i.Z,{variant:"body2",children:"These are the games I created as a solo indie game dev over the years."}),(0,Z.jsxs)(l.Z,{direction:(0,h.h)()?"column":"row",p:2,spacing:3,children:[(0,Z.jsx)(d.Z,{src:m,height:(0,h.h)()?"100%":"180px",url:v.p.playgroundSubpage.gameFrankritEatsMeat}),(0,Z.jsx)(d.Z,{src:g,height:(0,h.h)()?"100%":"180px",url:v.p.playgroundSubpage.gameSharkABoom}),(0,Z.jsx)(d.Z,{src:x,height:(0,h.h)()?"100%":"180px",url:v.p.playgroundSubpage.gameDinoWithAGun})]})]})})}},4294:(e,t,a)=>{a.d(t,{Z:()=>C});var o=a(3366),n=a(7462),r=a(2791),i=a(3733),l=a(5735),s=a(4419),c=a(2065),d=a(6934),p=a(1402),h=a(7119),u=a(4036),m=a(5878),g=a(1217);function x(e){return(0,g.Z)("MuiButton",e)}const v=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const b=r.createContext({});const Z=r.createContext(void 0);var f=a(184);const w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(h.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["".concat(a.variant).concat((0,u.Z)(a.color))],t["size".concat((0,u.Z)(a.size))],t["".concat(a.variant,"Size").concat((0,u.Z)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:a}=e;var o,r;const i="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],l="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return(0,n.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat((t.vars||t).palette[a.color].main),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[8]}),["&.".concat(v.focusVisible)]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[6]}),["&.".concat(v.disabled)]:(0,n.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat((t.vars||t).palette.action.disabledBackground)},"contained"===a.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:t.vars?"1px solid rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.5)"):"1px solid ".concat((0,c.Fq)(t.palette[a.color].main,.5))},"contained"===a.variant&&{color:t.vars?t.vars.palette.text.primary:null==(o=(r=t.palette).getContrastText)?void 0:o.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(v.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(v.disabled)]:{boxShadow:"none"}}})),j=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t["iconSize".concat((0,u.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},y(t))})),z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t["iconSize".concat((0,u.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},y(t))})),C=r.forwardRef((function(e,t){const a=r.useContext(b),c=r.useContext(Z),d=(0,l.Z)(a,e),h=(0,p.Z)({props:d,name:"MuiButton"}),{children:m,color:g="primary",component:v="button",className:y,disabled:C=!1,disableElevation:k=!1,disableFocusRipple:M=!1,endIcon:I,focusVisibleClassName:E,fullWidth:L=!1,size:O="medium",startIcon:R,type:F,variant:P="text"}=h,A=(0,o.Z)(h,w),W=(0,n.Z)({},h,{color:g,component:v,disabled:C,disableElevation:k,disableFocusRipple:M,fullWidth:L,size:O,type:F,variant:P}),B=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:r,variant:i,classes:l}=e,c={root:["root",i,"".concat(i).concat((0,u.Z)(t)),"size".concat((0,u.Z)(r)),"".concat(i,"Size").concat((0,u.Z)(r)),"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,u.Z)(r))],endIcon:["endIcon","iconSize".concat((0,u.Z)(r))]},d=(0,s.Z)(c,x,l);return(0,n.Z)({},l,d)})(W),N=R&&(0,f.jsx)(j,{className:B.startIcon,ownerState:W,children:R}),T=I&&(0,f.jsx)(z,{className:B.endIcon,ownerState:W,children:I}),V=c||"";return(0,f.jsxs)(S,(0,n.Z)({ownerState:W,className:(0,i.Z)(a.className,B.root,y,V),component:v,disabled:C,focusRipple:!M,focusVisibleClassName:(0,i.Z)(B.focusVisible,E),ref:t,type:F},A,{classes:B,children:[N,m,T]}))}))},8102:(e,t,a)=>{e.exports=a.p+"static/media/game-frankrit-eats-meat.447e9552878d2a0e3228.png"},1248:(e,t,a)=>{e.exports=a.p+"static/media/game-shark-a-boom.42cee78bbd6612e69d27.png"},9502:(e,t,a)=>{a.d(t,{_:()=>u});var o=a(2791),n=a(2204);const r=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M246.14,113.86l-16-16a20,20,0,0,0-23.06-3.75l-45.2-45.2a20,20,0,0,0-3.74-23.06l-16-16a20,20,0,0,0-28.28,0l-64,64a20,20,0,0,0,0,28.28l16,16a20,20,0,0,0,23,3.79L29.36,181.38a32,32,0,0,0,45.26,45.26L134,167.21a20,20,0,0,0,3.81,22.94l16,16a20,20,0,0,0,28.29,0l64-64a20,20,0,0,0,0-28.29ZM80,98.34,69.64,88,128,29.65,138.34,40ZM57.64,209.67a8,8,0,0,1-11.31-11.32l59.52-59.52,11.31,11.32Zm92.7-60.29-43.72-43.72,39-39,43.72,43.72Zm17.65,37L157.65,176,216,117.66,226.34,128Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M149.66,45.66l-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,0-11.32l64-64a8,8,0,0,1,11.32,0l16,16A8,8,0,0,1,149.66,45.66Zm88,76.68-16-16a8,8,0,0,0-11.32,0l-64,64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l64-64A8,8,0,0,0,237.66,122.34Z",opacity:"0.2"}),o.createElement("path",{d:"M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.62h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68ZM205.66,98.34l-48-48a8,8,0,0,0-11.31,0l-56,56a8,8,0,0,0,0,11.31L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l12.69,12.69a8,8,0,0,0,11.31,0l56-56A8,8,0,0,0,205.66,98.34Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M241.91,118.1l-16-16a14,14,0,0,0-19.55-.23L154.13,49.64a14,14,0,0,0-.23-19.55l-16-16a14,14,0,0,0-19.8,0l-64,64a14,14,0,0,0,0,19.8l16,16a14,14,0,0,0,19.55.23L99.52,124,32.73,190.79a23,23,0,0,0,32.48,32.49L132,156.49l9.87,9.87a14,14,0,0,0,.23,19.55l16,16a14,14,0,0,0,19.8,0l64-64A14,14,0,0,0,241.91,118.1Zm-91.56,39.76-52.21-52.2,47.52-47.52,52.2,52.2ZM78.59,105.41l-16-16a2,2,0,0,1,0-2.83l64-64a2,2,0,0,1,2.83,0l16,16a2,2,0,0,1,0,2.83l-64,64A2,2,0,0,1,78.59,105.41ZM56.73,214.8a11,11,0,0,1-15.52-15.52L108,132.49,123.52,148Zm176.69-85.38-64,64a2,2,0,0,1-2.83,0l-16-16a2,2,0,0,1,0-2.83l64-64a2,2,0,0,1,2.83,0l16,16A2,2,0,0,1,233.42,129.42Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M240.49,119.52l-16-16a12,12,0,0,0-17,0l-1.17,1.17-55-55,1.18-1.17a12,12,0,0,0,0-17l-16-16a12,12,0,0,0-17,0l-64,64a12,12,0,0,0,0,17l16,16a12,12,0,0,0,17,0l1.17-1.18L102.34,124l-68.2,68.21A21,21,0,0,0,63.8,221.87L132,153.66l12.69,12.69-1.18,1.17a12,12,0,0,0,0,17l16,16a12,12,0,0,0,17,0l64-64a12,12,0,0,0,0-17ZM77.17,106.83l-16-16a4,4,0,0,1,0-5.66l64-64a4,4,0,0,1,5.66,0l16,16a4,4,0,0,1,0,5.65l-64,64A4,4,0,0,1,77.17,106.83Zm-19,109.38A13,13,0,1,1,39.8,197.87L108,129.66,126.34,148ZM95.31,105.66l50.35-50.35,55,55-50.35,50.35Zm139.52,25.17-64,64a4,4,0,0,1-5.66,0l-16-16a4,4,0,0,1,0-5.65l64-64a4,4,0,0,1,5.66,0l16,16a4,4,0,0,1,0,5.66Z"}))]]);var i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const u=(0,o.forwardRef)(((e,t)=>o.createElement(n.Z,((e,t)=>l(e,s(t)))(((e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&h(e,a,t[a]);return e})({ref:t},e),{weights:r}))));u.displayName="Gavel"},2204:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(2791);const n=(0,o.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var r=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&c(e,a,t[a]);return e},p=(e,t)=>{var a={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&s.call(e,o)&&(a[o]=e[o]);return a};const h=(0,o.forwardRef)(((e,t)=>{const a=e,{alt:r,color:i,size:l,weight:s,mirrored:c,children:h,weights:u}=a,m=p(a,["alt","color","size","weight","mirrored","children","weights"]),g=(0,o.useContext)(n),{color:x="currentColor",size:v,weight:b="regular",mirrored:Z=!1}=g,f=p(g,["color","size","weight","mirrored"]);return o.createElement("svg",d(d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:null!=l?l:v,height:null!=l?l:v,fill:null!=i?i:x,viewBox:"0 0 256 256",transform:c||Z?"scale(-1, 1)":void 0},f),m),!!r&&o.createElement("title",null,r),h,u.get(null!=s?s:b))}));h.displayName="IconBase"}}]);
//# sourceMappingURL=802.8b47d1fe.chunk.js.map