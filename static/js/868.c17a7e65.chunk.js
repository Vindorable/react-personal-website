"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{4864:(e,i,t)=>{t.d(i,{Z:()=>o});t(2791);var n=t(3767),s=t(3967),a=t(184);const o=e=>{let{children:i}=e;(0,s.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{p:2,sx:{width:"100vw",maxWidth:"100%",flexGrow:1,height:"100%",overflowY:"scroll"},children:(0,a.jsx)(n.Z,{direction:"row",sx:{width:"100%"},justifyContent:"space-evenly",children:(0,a.jsx)(n.Z,{position:"relative",spacing:1,p:3,sx:{width:{xs:"100%",md:"80%",lg:"60%"},maxWidth:"896px"},children:i})})})})}},7707:(e,i,t)=>{t.d(i,{Z:()=>m});var n=t(2791),s=t(3767),a=t(697),o=t(4721),r=t(890),d=t(4294),l=t(3967),c=t(1531),h=t(5959),p=t(7149),x=t(184);const m=e=>{let{modBanner:i,modName:t,modShortDesc:m,modDescArt:g,modScreenshots:u,modLongDesc:j,steamWorkshopLink:y,changelogImgLink:b,others:Z}=e;const f=(0,l.Z)(),[k,v]=(0,n.useState)(!1);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(s.Z,{spacing:1.25,children:[(0,x.jsx)(a.Z,{component:"img",sx:{width:"100%",height:"auto"},alt:"",src:i,style:{borderRadius:"8px"}}),(0,x.jsx)(o.Z,{}),(0,x.jsx)(r.Z,{variant:"h6",children:t}),(0,x.jsx)(s.Z,{p:.75,children:(0,x.jsx)(r.Z,{variant:"body2",children:m})}),(0,x.jsx)(o.Z,{}),(0,x.jsx)(x.Fragment,{children:(g||u)&&(0,x.jsxs)(s.Z,{direction:(0,p.h)()?"column":"row",spacing:(0,p.h)()?3:0,children:[(0,x.jsx)(x.Fragment,{children:g&&(0,x.jsx)(s.Z,{width:(0,p.h)()?"100%":"70%",children:(0,x.jsx)(a.Z,{component:"img",sx:{width:"100%",height:"auto"},alt:"",src:g})})}),(0,x.jsx)(x.Fragment,{children:u&&(0,x.jsx)(s.Z,{width:(0,p.h)()?"100%":"30%",children:(0,x.jsx)(h.Z,{imageSet:u,height:200,width:200,columns:1,aspectRatio:16/9})})})]})}),(0,x.jsx)(x.Fragment,{children:j&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.Z,{variant:"h6",children:"Description"}),(0,x.jsx)(s.Z,{p:.75,children:(0,x.jsx)(r.Z,{variant:"body2",children:j})})]})}),(0,x.jsx)(a.Z,{children:(0,x.jsx)(d.Z,{disableElevation:!0,variant:"outlined",startIcon:(0,x.jsx)(c.Z,{}),onClick:()=>window.open(y,"_blank"),children:"Steam Workshop Link"})}),(0,x.jsx)(x.Fragment,{children:b&&(0,x.jsx)(a.Z,{p:1,sx:{borderRadius:"8px",border:1,borderColor:f.palette.divider},children:(0,x.jsxs)(s.Z,{spacing:1,children:[(0,x.jsx)(a.Z,{children:(0,x.jsx)(d.Z,{onClick:()=>v((e=>!e)),children:k?"Hide Changelog":"View Changelog"})}),k&&(0,x.jsx)(a.Z,{component:"img",sx:{width:"630px",maxWidth:"100%",height:"auto"},alt:"",src:b,style:{borderRadius:"8px"}})]})})}),(0,x.jsx)(a.Z,{sx:{width:"100%",height:"auto"},children:Z})]})})}},5959:(e,i,t)=>{t.d(i,{Z:()=>h});var n=t(2791),s=t(3767),a=t(8075),o=t(6934),r=t(3967),d=t(3169),l=t(184);const c=(0,o.ZP)("ul")((e=>{let{theme:i,cols:t}=e;return{display:"grid",padding:0,margin:0,width:"auto",height:"auto",rowHeight:"auto",gap:12,[i.breakpoints.up("xs")]:{gridTemplateColumns:t<3?"repeat(".concat(t,", 1fr)"):"repeat(3, 1fr)"},[i.breakpoints.up("sm")]:{gridTemplateColumns:t<4?"repeat(".concat(t,", 1fr)"):"repeat(4, 1fr)"},[i.breakpoints.up("md")]:{gridTemplateColumns:t<5?"repeat(".concat(t,", 1fr)"):"repeat(5, 1fr)"},[i.breakpoints.up("lg")]:{gridTemplateColumns:t<5?"repeat(".concat(t,", 1fr)"):"repeat(5, 1fr)"}}})),h=e=>{let{imageSet:i,width:t,height:o,columns:h,aspectRatio:p}=e;const x=(0,r.Z)(),m=t,g=o,u=(0,n.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{alignItems:"center",justifyContent:"center",sx:{width:"100%"},children:(0,l.jsx)(c,{cols:h,children:i.map((e=>(0,l.jsx)(a.Z,{sx:{aspectRatio:p||1,transition:x.transitions.create("all",{easing:x.transitions.easing.sharp,duration:x.transitions.duration.leavingScreen}),"&:hover":{transform:"scale3d(1.05, 1.05, 1)"},"&:active":{transform:"scale3d(0.95, 0.95, 1)"},cursor:"pointer"},children:(0,l.jsx)("img",{srcSet:"".concat(e.img),src:"".concat(e.img),alt:e.title,style:{width:m,height:g,maxWidth:"100%",maxHeight:"100%",borderRadius:"8px"},loading:"lazy",onClick:i=>u.current.openLightbox(e)})},e.img)))})}),(0,l.jsx)(d.Z,{ref:u,imageSet:i})]})}},3169:(e,i,t)=>{t.d(i,{Z:()=>m});var n=t(2791),s=t(9095),a=t(2739),o=t(2003),r=t(697),d=t(3767),l=t(3400),c=t(7283),h=t(1750),p=t(8579),x=t(184);const m=(0,n.forwardRef)(((e,i)=>{let{imageSet:t}=e;(0,n.useImperativeHandle)(i,(()=>({openLightbox(e){Z(e)}})));const[m,g]=n.useState("false"),[u,j]=n.useState("false"),[y,b]=n.useState(!1),Z=e=>{g(e),j(e.img),b(!0)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(s.Z,{open:y,onClose:()=>b(!1),closeAfterTransition:!0,slots:{backdrop:a.Z},slotProps:{backdrop:{timeout:500}},children:(0,x.jsx)(o.Z,{in:y,children:(0,x.jsxs)(r.Z,{sx:{width:"100vw",height:"100dvh",backgroundColor:"#000"},children:[(0,x.jsx)(r.Z,{component:"img",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:u.width,height:"auto",maxWidth:"100%",maxHeight:"90%",bgcolor:"background.paper",border:"1px solid #fff",boxShadow:24,outline:"none",objectFit:"contain"},alt:"",src:u,style:{objectFit:"contain",borderRadius:"8px"}}),(0,x.jsxs)(d.Z,{sx:{width:"100vw",height:"100dvh"},children:[(0,x.jsx)(d.Z,{sx:{width:"100%",height:"100%"},p:1,justifyContent:"center",children:(0,x.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,x.jsx)(l.Z,{onClick:()=>(()=>{let e=t.indexOf(m);if(e<=0)b(!1);else{let i=t[e-1];g(i),j(i.img)}})(),children:(0,x.jsx)(c.Z,{size:32})}),(0,x.jsx)(l.Z,{onClick:()=>(()=>{let e=t.indexOf(m);if(e>=t.length-1)b(!1);else{let i=t[e+1];g(i),j(i.img)}})(),children:(0,x.jsx)(h.Z,{size:32})})]})}),(0,x.jsx)(d.Z,{direction:"row",sx:{width:"100%"},position:"absolute",p:1,alignItems:"center",justifyContent:"end",children:(0,x.jsx)(l.Z,{onClick:()=>b(!1),children:(0,x.jsx)(p.Z,{size:32})})})]})]})})})})}))},7149:(e,i,t)=>{t.d(i,{h:()=>a});t(2791);var n=t(3967),s=t(5193);const a=()=>{const e=(0,n.Z)();return(0,s.Z)(e.breakpoints.down("md"))}},6016:(e,i,t)=>{t.r(i),t.d(i,{default:()=>W});var n=t(2791),s=t(4721),a=t(3767),o=t(890),r=t(493),d=t(4852),l=t(2602),c=t(7120),h=new Map;h.set("bold",(function(e){return n.createElement(n.Fragment,null,n.createElement("polyline",{points:"72.2 128.2 152.2 40.2 216 40 215.8 103.8 127.8 183.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n.createElement("line",{x1:"100",y1:"156",x2:"160",y2:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n.createElement("path",{d:"M82.1,205.5,60.2,227.4a8,8,0,0,1-11.3,0L28.6,207.1a8,8,0,0,1,0-11.3l21.9-21.9a8,8,0,0,0,0-11.4L33.7,145.7a8,8,0,0,1,0-11.4l16.6-16.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-16.6,16.6a8,8,0,0,1-11.4,0L93.5,205.5A8,8,0,0,0,82.1,205.5Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),h.set("duotone",(function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z",opacity:"0.2"}),n.createElement("polyline",{points:"76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("line",{x1:"100",y1:"156",x2:"160",y2:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("path",{d:"M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),h.set("fill",(function(){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M221.7,34.3A8.1,8.1,0,0,0,216,32h0l-63.8.2a8.1,8.1,0,0,0-6.2,2.9L75.6,120.3,67.3,112a16.1,16.1,0,0,0-22.6,0L32,124.7a15.9,15.9,0,0,0,0,22.6l20.9,20.9-30,29.9a16.2,16.2,0,0,0,0,22.7l12.3,12.3a16.3,16.3,0,0,0,22.7,0l29.9-30L108.7,224a16.1,16.1,0,0,0,22.6,0L144,211.3a15.9,15.9,0,0,0,0-22.6l-8.3-8.3L220.9,110a8.1,8.1,0,0,0,2.9-6.2L224,40A8.1,8.1,0,0,0,221.7,34.3ZM207.8,100l-83.5,69-13-13,54.4-54.3a8.1,8.1,0,0,0-11.4-11.4L100,144.7l-13-13,69-83.5,52-.2Z"}))})),h.set("light",(function(e){return n.createElement(n.Fragment,null,n.createElement("polyline",{points:"76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n.createElement("line",{x1:"100",y1:"156",x2:"160",y2:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n.createElement("path",{d:"M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),h.set("thin",(function(e){return n.createElement(n.Fragment,null,n.createElement("polyline",{points:"76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n.createElement("line",{x1:"100",y1:"156",x2:"160",y2:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n.createElement("path",{d:"M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),h.set("regular",(function(e){return n.createElement(n.Fragment,null,n.createElement("polyline",{points:"76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("line",{x1:"100",y1:"156",x2:"160",y2:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("path",{d:"M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var p=function(e,i){return(0,l._)(e,i,h)},x=(0,n.forwardRef)((function(e,i){return n.createElement(c.Z,Object.assign({ref:i},e,{renderPath:p}))}));x.displayName="Sword";const m=x;var g=t(4864),u=t(7707);const j=t.p+"static/media/dst+dota+weapon+mod+steam+dp.abd184568f712e166f82.png";var y=t(697),b=t(6934),Z=t(3967),f=t(7148),k=t(184);const v=(0,b.ZP)(y.Z)((e=>{let{theme:i}=e;return{padding:"calc(1.25 * 8px)",backgroundColor:"rgb(12, 12, 12)",borderRadius:"8px",boxShadow:"0px 0px 2px ".concat(i.palette.dividerCustom.strong),width:"100%",height:"auto"}})),w=e=>{let{weaponIcon:i,weaponName:t,dotaHeroName:s,releaseStatus:r,lore:d,abilities:l,moreInfo:c,disclaimer:h}=e;const p=(0,Z.Z)(),[x,m]=n.useState(0);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(a.Z,{spacing:1.25,p:1,sx:{borderRadius:"8px",border:1,borderColor:p.palette.divider},children:[(0,k.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,k.jsx)(y.Z,{component:"img",sx:{width:"150px",height:"auto"},alt:"",src:i}),(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(o.Z,{variant:"h6",children:t}),(0,k.jsxs)(o.Z,{variant:"body2",children:[s,"'s weapon."]}),(0,k.jsxs)(o.Z,{variant:"body2",children:["Status: ",r]})]})]}),(0,k.jsxs)(f.oG,{value:x,onChange:(e,i)=>{m(i)},children:[(0,k.jsx)(f.he,{label:"Lore"}),(0,k.jsx)(f.he,{label:"Abilities"}),(0,k.jsx)(f.he,{label:"More Info"}),(0,k.jsx)(f.he,{label:"Disclaimer"})]}),(()=>{switch(x){case 0:return(0,k.jsx)(v,{children:d});case 1:return(0,k.jsx)(v,{children:l});case 2:return(0,k.jsx)(v,{children:c});case 3:return(0,k.jsx)(v,{children:h})}})()]})})};var S=t(3565),L=t(8622),T=t(4437),P=t(5708);const W=()=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(g.Z,{children:(0,k.jsx)(u.Z,{modBanner:j,modName:"DOTA2 X DON'T STARVE TOGETHER WEAPONS COLLECTION",modShortDesc:(0,k.jsxs)(k.Fragment,{children:["Are you an veteran  Dota2 player? Do you also enjoy playing Don't Starve Together?",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"I have clocked 2500++ hours ",(0,k.jsx)("i",{children:"(yes that much!)"})," in Dota2 and I have purchased countless hero customization items created by Valve and the amazing community which I fell in love with.",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"Now, I bring those weapons into DST for you! ;)"]}),steamWorkshopLink:"https://steamcommunity.com/sharedfiles/filedetails/?id=734809016",others:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{borderBottomWidth:10,visibility:"hidden"}}),(0,k.jsxs)(a.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"center",children:[(0,k.jsx)(m,{size:26}),(0,k.jsx)(o.Z,{variant:"h5",children:"The Weapons"}),(0,k.jsx)(m,{size:26,mirrored:!0})]}),(0,k.jsx)(s.Z,{sx:{borderBottomWidth:5,visibility:"hidden"}}),(0,k.jsx)(w,{weaponIcon:S,weaponName:"NIGHTMARE BLADE",dotaHeroName:"Axe",releaseStatus:"Public Release",lore:(0,k.jsx)(o.Z,{variant:"body2",children:"No one knows the true origins of the Nightmare Blade. Countless folklores of its existence have been passed down for generations. One of the oldest records documented the blade being bathed in the black mist of timeless darkness, and by this baptism it was given an innate connection to its beholder's Sanity."}),abilities:(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsxs)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:[(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Has 150 uses with 40 damage."}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Reduces movement speed when equipped by 20%."}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Weapon damage increases based on Player's sanity (full sanity = 40 dmg / zero sanity = 80 dmg)."})]})})}),moreInfo:(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(o.Z,{variant:"body2",children:"Found under the War (weapons) tab. Weapon recipe configuration available:"}),(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsxs)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:[(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Easy - Hound Tooth=4, Log=12, Flint=8"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Normal - Hound Tooth=8, Living Log=4, Flint=12"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Hard - Hound Tooth=12, Living Log=8, Flint=22"})]})})}),(0,k.jsx)(o.Z,{variant:"body2",children:"Weapon is not upgradable (some weapons can be upgraded to form a stronger version of itself)."})]}),disclaimer:(0,k.jsxs)(o.Z,{variant:"body2",children:["This weapon art is based of this. ",(0,k.jsx)("br",{}),"The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay."]})}),(0,k.jsx)(s.Z,{sx:{visibility:"hidden",borderBottomWidth:10}}),(0,k.jsx)(w,{weaponIcon:L,weaponName:"KRAKEN BRINGER",dotaHeroName:"Kunkka",releaseStatus:"Public Release",lore:(0,k.jsx)(o.Z,{variant:"body2",children:"Anyone who holds the Krakenbringer feels a greater presence gravitating on them. Some say the blade is the vengeful Kraken himself. Even though, it has the power to command it's brethren in battle, those careless find themselves entangled in psychosis. After all, the Kraken is still alive and breathing..."}),abilities:(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsxs)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:[(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Has 150 uses with 41 damage."}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Drains sanity similar to the Night Sword when equipped."}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Every hit spawns a Tentacle, Kraken Brethren, to support you in battle. Kraken Brethren only hits once and does same damage as the Tentacle."})]})})}),moreInfo:(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(o.Z,{variant:"body2",children:"Found under the War (weapons) tab. Weapon recipe configuration available:"}),(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsxs)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:[(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Easy - Tentacle Spots=2, Tentacle Spike=1, Gold Nugget=4"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Normal - Tentacle Spots=6, Tentacle Spike=3, Gold Nugget=8"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Hard - Tentacle Spots=8, Tentacle Spike=6, Gold Nugget=12"})]})})}),(0,k.jsx)(o.Z,{variant:"body2",children:"Weapon is not upgradable (some weapons can be upgraded to form a stronger version of itself)."})]}),disclaimer:(0,k.jsxs)(o.Z,{variant:"body2",children:["This weapon art is based of this. ",(0,k.jsx)("br",{}),"The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay."]})}),(0,k.jsx)(s.Z,{sx:{visibility:"hidden",borderBottomWidth:10}}),(0,k.jsx)(w,{weaponIcon:T,weaponName:"WULDASTRON",dotaHeroName:"Sven",releaseStatus:"Private Release (don't ask me for it..)",lore:(0,k.jsx)(o.Z,{variant:"body2",children:"A blade that can only be held by the mightiest. A blade that brings great honour. Wuldastron is the most prized great sword amongst the Kings that has been passed down for generations to only those worthy. It's swift judgement leaves no one to question it's wielder's ulterior motives."}),abilities:(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsx)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"[Not Comfirmed]"})})})}),moreInfo:(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(o.Z,{variant:"body2",children:"Found under the War (weapons) tab. Weapon recipe configuration available:"}),(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsxs)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:[(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Easy - [Not Comfirmed]"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Normal - [Not Comfirmed]"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Hard - [Not Comfirmed]"})]})})}),(0,k.jsx)(o.Z,{variant:"body2",children:"Weapon is upgradable to an evil and stronger version - the Cursed Wuldast."})]}),disclaimer:(0,k.jsxs)(o.Z,{variant:"body2",children:["This weapon art is based of this. ",(0,k.jsx)("br",{}),"The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay."]})}),(0,k.jsx)(s.Z,{sx:{visibility:"hidden",borderBottomWidth:10}}),(0,k.jsx)(w,{weaponIcon:P,weaponName:"CURSED WULDAST",dotaHeroName:"Sven",releaseStatus:"Private Release (don't ask me for it..)",lore:(0,k.jsx)(o.Z,{variant:"body2",children:"...darkness..."}),abilities:(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsx)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"[Not Comfirmed]"})})})}),moreInfo:(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(o.Z,{variant:"body2",children:"Found under the War (weapons) tab. Weapon recipe configuration available:"}),(0,k.jsx)(a.Z,{p:.75,children:(0,k.jsx)(o.Z,{variant:"body2",children:(0,k.jsxs)(r.Z,{sx:{listStyleType:"disc",padding:"0"},children:[(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Easy - [Not Comfirmed]"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Normal - [Not Comfirmed]"}),(0,k.jsx)(d.ZP,{sx:{display:"list-item",listStylePosition:"inside",padding:"0"},children:"Hard - [Not Comfirmed]"})]})})}),(0,k.jsx)(o.Z,{variant:"body2",children:"Weapon is an upgraded version of Wuldastron."})]}),disclaimer:(0,k.jsxs)(o.Z,{variant:"body2",children:["This weapon art is based of this. ",(0,k.jsx)("br",{}),"The weapon is adapted, modified, and/or build upon its original content to fit the Don't Starve Together's gameplay."]})})]})})})})},5708:(e,i,t)=>{e.exports=t.p+"static/media/CURSED WULDAST.8bb6fa142ae34e240c28.png"},8622:(e,i,t)=>{e.exports=t.p+"static/media/KRAKEN BRINGER.ba640d783791fbc2c6b4.png"},3565:(e,i,t)=>{e.exports=t.p+"static/media/NIGHTMARE BLADE.1af26decb9848d7cfd6a.png"},4437:(e,i,t)=>{e.exports=t.p+"static/media/WULDASTRON.0c3a59f621d2c10f5657.png"}}]);
//# sourceMappingURL=868.c17a7e65.chunk.js.map