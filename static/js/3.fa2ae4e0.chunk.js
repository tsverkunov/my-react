(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[3],{385:function(e,a,t){e.exports={wrapperContent:"Dialogs_wrapperContent__2ZElZ",dialogs:"Dialogs_dialogs__1gFvF",chat:"Dialogs_chat__39oT2"}},386:function(e,a,t){e.exports={dialogItem:"DialogItem_dialogItem__1TSiC",dialog:"DialogItem_dialog__3LKK2",ava:"DialogItem_ava__3Aj-f"}},387:function(e,a,t){e.exports={chatBlock:"Chat_chatBlock__2g7aB",chatItem:"Chat_chatItem__3Nkfc",ava:"Chat_ava__3HzcT"}},389:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(385),m=t.n(c),r=t(386),i=t.n(r),l=t(19),o=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:i.a.dialogItem},s.a.createElement("div",{className:i.a.ava},s.a.createElement("img",{alt:"",src:e.ava})),s.a.createElement("div",{className:i.a.dialog},s.a.createElement(l.b,{to:a},e.name)))},d=t(387),u=t.n(d),g=t(56),v=t.n(g),b=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:u.a.chatBlock},s.a.createElement("div",{className:u.a.ava},s.a.createElement("img",{alt:"",src:e.avatar||v.a})),s.a.createElement("div",{className:u.a.chatItem},e.message)))},_=t(231),E=t.n(_),f=t(197),h=t(198),p=(Object(h.a)({form:"newMessageBody"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit,className:E.a.newPost},s.a.createElement(f.a,{component:"textarea",name:"newMessageBody",placeholder:"new message...",className:E.a.newMessage}),s.a.createElement("button",{className:E.a.buttonSend,disabled:e.submitting},"Send"))})),t(50)),N=t(17),S=t(48),w=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(N.c,{initialValues:{message:""},validationSchema:p.a({message:p.b().max(300,"Must be 300 characters or less")}),onSubmit:function(a,t){t.setSubmitting;var n=t.resetForm;setTimeout((function(){e.onSubmit(a),n()}),300)}},(function(e){return s.a.createElement(N.b,{className:E.a.newPost},s.a.createElement(S.c,{name:"message",placeholder:"new message...",className:E.a.newMessage}),s.a.createElement("button",{type:"submit",disabled:e.isSubmitting,className:E.a.buttonSend},e.isSubmitting?"Sending...":"Send"))})))},I=function(e){return s.a.createElement(w,{onSubmit:function(a){e.addMessage(a.message)}})},M=function(e){var a=e.dialogs.map((function(e){return s.a.createElement(o,{ava:e.ava,name:e.name,id:e.id,key:e.id})})),t=e.chats.map((function(a){return s.a.createElement(b,{message:a.message,key:a.id,avatar:e.avatar})}));return s.a.createElement("div",{className:m.a.wrapperContent},s.a.createElement("div",{className:m.a.dialogs},a),s.a.createElement("div",{className:m.a.chat},t,s.a.createElement(I,{addMessage:e.addMessage})))},k=t(195),y=t(10),C=t(74),B=t(7);a.default=Object(B.d)(Object(y.b)((function(e){return{dialogs:e.messageReducer.dialogs,chats:e.messageReducer.chats,avatar:e.authReducer.avatar}}),(function(e){return{addMessage:function(a){e(Object(k.a)(a))}}})),C.a)(M)}}]);
//# sourceMappingURL=3.fa2ae4e0.chunk.js.map