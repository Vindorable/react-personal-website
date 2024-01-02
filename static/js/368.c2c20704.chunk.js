"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[368],{4864:(e,r,a)=>{a.d(r,{Z:()=>i});a(2791);var l=a(3767),s=a(3967),o=a(184);const i=e=>{let{children:r}=e;(0,s.Z)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.Z,{p:2,sx:{width:"100vw",maxWidth:"100%",flexGrow:1,height:"100%",overflowY:"scroll"},children:(0,o.jsx)(l.Z,{direction:"row",sx:{width:"100%"},justifyContent:"space-evenly",children:(0,o.jsx)(l.Z,{position:"relative",spacing:1,p:3,sx:{width:{xs:"auto",md:"80%",lg:"60%"},maxWidth:"896px"},children:r})})})})}},4551:(e,r,a)=>{a.d(r,{Z:()=>o});a(2791);var l=a(4721),s=a(184);const o=e=>{let{amount:r}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{sx:{visibility:"hidden",borderBottomWidth:r}})})}},5368:(e,r,a)=>{a.r(r),a.d(r,{default:()=>y});a(2791);var l=a(4721),s=a(3767),o=a(890),i=a(6981),n=a(4387),t=a(9437),u=a(5523),m=a(97),d=a(7071),h=a(4294),c=a(3967),b=a(4864),p=a(4551),x=a(5705),j=a(8007),g=a(184);const Z=j.Ry({name:j.Z_("Enter your name.").required("Name is required."),email:j.Z_("Enter your email.").email("Enter a valid email.").required("Email is required."),purpose:j.Z_("Enter your purpose.").required("Purpose is required."),mobileGame:j.Z_().when("purpose",{is:e=>"Mobile Games"===e,then:()=>j.Z_("Select your game.").required("Game selection is required."),otherwise:()=>j.Z_()}),subject:j.Z_("Enter your subject.").required("Subject is required."),message:j.Z_("Enter your message.").min(5,"Message is too short.").required("Message is required.")}),v=["General","Mobile Games"],G=["Frankrit Eats Meat","Shark-A-Boom","Dino with a Gun"],y=()=>{const e=(0,c.Z)(),r=(0,x.TA)({initialValues:{name:"",email:"",purpose:"",mobileGame:"",subject:"",message:""},validationSchema:Z,onSubmit:e=>{alert(JSON.stringify(e,null,2))}});function a(e,a,l){a!==l&&(r.setFieldValue(e,"",!1),r.setFieldTouched(e,!1,!1),r.setFieldError(e,!1,!1))}return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(b.Z,{children:[(0,g.jsx)(l.Z,{}),(0,g.jsxs)(s.Z,{alignItems:"center",justifyContent:"center",children:[(0,g.jsx)(o.Z,{variant:"body2",children:"Drop Me A Message"}),(0,g.jsx)(o.Z,{variant:"subtitle2",children:"Note: This form currently don't have a service/backend api so the submit don't work."}),(0,g.jsxs)(o.Z,{inline:!0,align:"center",variant:"subtitle2",children:["For now, you can email me directly at:",(0,g.jsx)("br",{}),"j.raj93.designer@gmail.com"]})]}),(0,g.jsx)(l.Z,{}),(0,g.jsx)(p.Z,{amount:10}),(0,g.jsx)("form",{onSubmit:r.handleSubmit,children:(0,g.jsxs)(s.Z,{spacing:2,children:[(0,g.jsx)(i.Z,{fullWidth:!0,id:"name",name:"name",label:"* Name",value:r.values.name,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),(0,g.jsx)(i.Z,{fullWidth:!0,id:"email",name:"email",label:"* Email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email}),(0,g.jsx)(i.Z,{fullWidth:!0,select:!0,id:"purpose",name:"purpose",label:"* Purpose",value:r.values.purpose,onChange:e=>{r.handleChange(e),a("mobileGame",r.values.purpose,"Mobile Games")},onBlur:e=>{r.handleBlur(e),a("mobileGame",r.values.purpose,"Mobile Games")},error:r.touched.purpose&&Boolean(r.errors.purpose),helperText:r.touched.purpose&&r.errors.purpose,children:v.map(((e,r)=>(0,g.jsx)(n.Z,{value:e,children:e},r)))}),"Mobile Games"===r.values.purpose&&(0,g.jsxs)(t.Z,{sx:{px:"20px"},children:[(0,g.jsx)(o.Z,{variant:"body2",color:r.touched.mobileGame&&r.errors.mobileGame&&e.palette.error.main,children:"* Select the game:"}),G.map(((a,l)=>(0,g.jsx)(u.Z,{id:"mobileGame",name:"mobileGame",label:(0,g.jsx)(o.Z,{variant:"body2",children:a}),value:a,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.mobileGame&&Boolean(r.errors.mobileGame),helperText:r.touched.mobileGame&&r.errors.mobileGame,control:(0,g.jsx)(m.Z,{sx:{color:r.touched.mobileGame&&r.errors.mobileGame&&e.palette.error.main}}),sx:{color:r.touched.mobileGame&&r.errors.mobileGame&&e.palette.error.main}},l))),r.touched.mobileGame&&r.errors.mobileGame&&(0,g.jsx)(d.Z,{sx:{color:e.palette.error.main},id:"mobileGame",children:r.errors.mobileGame})]}),(0,g.jsx)(i.Z,{fullWidth:!0,id:"subject",name:"subject",label:"* Subject",value:r.values.subject,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.subject&&Boolean(r.errors.subject),helperText:r.touched.subject&&r.errors.subject}),(0,g.jsxs)(s.Z,{spacing:.75,children:[(0,g.jsx)(o.Z,{variant:"body2",children:"How can I help?"}),(0,g.jsx)(d.Z,{id:"message",children:"Please do not include confidential or sensitive information in your message."}),(0,g.jsx)(i.Z,{fullWidth:!0,multiline:!0,id:"message",name:"message",label:"* Message",value:r.values.message,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.message&&Boolean(r.errors.message),helperText:r.touched.message&&r.errors.message})]}),(0,g.jsx)(h.Z,{type:"submit",children:"Submit"})]})})]})})}}}]);
//# sourceMappingURL=368.c2c20704.chunk.js.map