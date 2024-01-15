"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[354],{4864:(e,t,i)=>{i.d(t,{Z:()=>a});i(2791);var r=i(3767),n=i(3967),o=i(184);const a=e=>{let{children:t}=e;(0,n.Z)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Z,{p:2,sx:{width:"100vw",maxWidth:"100%",flexGrow:1,height:"100%",overflowY:"scroll"},children:(0,o.jsx)(r.Z,{direction:"row",sx:{width:"100%"},justifyContent:"space-evenly",children:(0,o.jsx)(r.Z,{position:"relative",spacing:1,p:3,sx:{width:{xs:"100%",md:"80%",lg:"60%"},maxWidth:"896px"},children:t})})})})}},4551:(e,t,i)=>{i.d(t,{Z:()=>o});i(2791);var r=i(4721),n=i(184);const o=e=>{let{amount:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{sx:{visibility:"hidden",borderBottomWidth:t}})})}},1354:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var r=i(2791),n=i(890),o=i(3767),a=i(3366),l=i(7462),c=i(3733),s=i(4419),d=i(1402),h=i(6934),m=i(5878),p=i(1217);function g(e){return(0,p.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);var u=i(184);const v=["children","className","component","image","src","style"],x=(0,h.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{isMediaComponent:r,isImageComponent:n}=i;return[t.root,r&&t.media,n&&t.img]}})((e=>{let{ownerState:t}=e;return(0,l.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),f=["video","audio","picture","iframe","img"],w=["picture","img"],Z=r.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:n,component:o="div",image:h,src:m,style:p}=i,Z=(0,a.Z)(i,v),b=-1!==f.indexOf(o),j=!b&&h?(0,l.Z)({backgroundImage:'url("'.concat(h,'")')},p):p,C=(0,l.Z)({},i,{component:o,isMediaComponent:b,isImageComponent:-1!==w.indexOf(o)}),k=(e=>{const{classes:t,isMediaComponent:i,isImageComponent:r}=e,n={root:["root",i&&"media",r&&"img"]};return(0,s.Z)(n,g,t)})(C);return(0,u.jsx)(x,(0,l.Z)({className:(0,c.Z)(k.root,n),as:o,role:!b&&h?"img":void 0,ref:t,style:j,ownerState:C,src:b?h||m:void 0},Z,{children:r}))}));var b=i(4721),j=i(4864),C=i(4551);const k=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(j.Z,{children:[(0,u.jsx)(n.Z,{inline:!0,align:"center",variant:"h6",children:"Winky"}),(0,u.jsx)(C.Z,{amount:10}),(0,u.jsx)(o.Z,{direction:"row",useFlexGap:!0,flexWrap:"wrap",spacing:2,justifyContent:"space-evenly",children:[{link:"https://i.imgur.com/y66DPuA.mp4"},{link:"https://i.imgur.com/jhHSUjH.mp4"},{link:"https://i.imgur.com/ZLtmcTS.mp4"},{link:"https://i.imgur.com/TG0lIUh.mp4"},{link:"https://i.imgur.com/hu1dVCe.mp4"},{link:"https://i.imgur.com/gHIQMf9.mp4"},{link:"https://i.imgur.com/lQFqc4Q.mp4"}].map(((e,t)=>(0,u.jsx)(Z,{component:"video",image:e.link,autoPlay:!0,muted:!0,loop:!0,sx:{width:"auto",height:"200px",borderRadius:"16px"}},t)))}),(0,u.jsx)(C.Z,{amount:30}),(0,u.jsx)(b.Z,{}),(0,u.jsx)(C.Z,{amount:20}),(0,u.jsx)(n.Z,{inline:!0,align:"center",variant:"h6",children:"Tronbull"}),(0,u.jsx)(C.Z,{amount:10}),(0,u.jsx)(o.Z,{direction:"row",useFlexGap:!0,flexWrap:"wrap",spacing:2,justifyContent:"space-evenly",children:[{link:"https://i.imgur.com/VKk6g3c.mp4"},{link:"https://i.imgur.com/hpJXN3N.mp4"},{link:"https://i.imgur.com/Xf9vaXI.mp4"}].map(((e,t)=>(0,u.jsx)(Z,{component:"video",image:e.link,autoPlay:!0,muted:!0,loop:!0,sx:{width:"auto",height:"200px",borderRadius:"16px"}},t)))})]})})},4721:(e,t,i)=>{i.d(t,{Z:()=>x});var r=i(3366),n=i(7462),o=i(2791),a=i(3733),l=i(4419),c=i(2065),s=i(6934),d=i(1402),h=i(133),m=i(184);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,n.Z)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,n.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),u=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),v=o.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:c,className:s,component:v=(c?"div":"hr"),flexItem:x=!1,light:f=!1,orientation:w="horizontal",role:Z=("hr"!==v?"separator":void 0),textAlign:b="center",variant:j="fullWidth"}=i,C=(0,r.Z)(i,p),k=(0,n.Z)({},i,{absolute:o,component:v,flexItem:x,light:f,orientation:w,role:Z,textAlign:b,variant:j}),S=(e=>{const{absolute:t,children:i,classes:r,flexItem:n,light:o,orientation:a,textAlign:c,variant:s}=e,d={root:["root",t&&"absolute",s,o&&"light","vertical"===a&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(d,h.V,r)})(k);return(0,m.jsx)(g,(0,n.Z)({as:v,className:(0,a.Z)(S.root,s),role:Z,ref:t,ownerState:k},C,{children:c?(0,m.jsx)(u,{className:S.wrapper,ownerState:k,children:c}):null}))}));v.muiSkipListHighlight=!0;const x=v},133:(e,t,i)=>{i.d(t,{V:()=>o,Z:()=>a});var r=i(5878),n=i(1217);function o(e){return(0,n.Z)("MuiDivider",e)}const a=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])}}]);
//# sourceMappingURL=354.76c7ab11.chunk.js.map