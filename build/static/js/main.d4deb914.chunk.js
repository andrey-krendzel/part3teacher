(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(15),o=n.n(r),a=n(6),i=n(4),u=n(2),s=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[e.content,Object(c.jsx)("button",{onClick:n,children:r})]})},j=function(t){var e=t.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},l=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},f=n(3),b=n.n(f),d="https://part3teacher.herokuapp.com/api/notes",p=function(){var t=b.a.get(d),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},m=function(t){return b.a.post(d,t).then((function(t){return t.data}))},h=function(t,e){return b.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))},O=function(){var t=Object(u.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(u.useState)(""),f=Object(i.a)(o,2),b=f[0],d=f[1],O=Object(u.useState)(!1),v=Object(i.a)(O,2),x=v[0],g=v[1],S=Object(u.useState)(null),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(u.useEffect)((function(){p().then((function(t){r(t)}))}),[]);var N=x?n:n.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:y}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:N.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});h(t,c).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(t){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()>.5};m(e).then((function(t){r(n.concat(t)),d("")}))},children:[Object(c.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(l,{})]})};n(39);o.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d4deb914.chunk.js.map