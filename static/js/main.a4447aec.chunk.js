(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(5)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.setIsSelected,s=e.setIsLoaded,a=e.setSelectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.userId}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return t=e,c(!0),a(t),void window.setTimeout((function(){s(!0)}),1e3);var t},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.setComplitedSelect,c=e.complitedSelect,s=e.setInputValue,a=e.inputValue;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.isSelected,c=e.isLoaded,s=e.setIsLoaded,a=e.setIsSelected,d=e.selectedTodo,i=Object(l.useState)(null),r=Object(n.a)(i,2),j=r[0],h=r[1];return Object(l.useEffect)((function(){var e;void 0!==d.userId&&(e=d.userId,b("/users/".concat(e))).then((function(e){return h(e)}))}),[d]),Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),c?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(d.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(!1),a(!1)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:d.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[d.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===j||void 0===j?void 0:j.email),children:null===j||void 0===j?void 0:j.name})]})]})]}):Object(o.jsx)(u,{})]})})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),d=Object(n.a)(a,2),i=d[0],m=d[1],O=Object(l.useState)(!1),x=Object(n.a)(O,2),p=x[0],f=x[1],v=Object(l.useState)({}),N=Object(n.a)(v,2),y=N[0],S=N[1],g=Object(l.useState)("all"),I=Object(n.a)(g,2),k=I[0],T=I[1],w=Object(l.useState)(""),C=Object(n.a)(w,2),L=C[0],_=C[1];Object(l.useEffect)((function(){b("/todos").then(s)}),[]);var E=c.filter((function(e){var t;if("active"===k)t=!1===e.completed;else{if("completed"!==k)return e;t=!0===e.completed}return t})).filter((function(e){return""===L?e:e.title.startsWith(L)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{setComplitedSelect:T,complitedSelect:k,inputValue:L,setInputValue:_})}),Object(o.jsx)("div",{className:"block",children:0===c.length?Object(o.jsx)(u,{}):Object(o.jsx)(r,{todos:E,setIsSelected:m,setIsLoaded:f,setSelectedTodo:S})})]})})}),Object(o.jsx)(h,{isSelected:i,isLoaded:p,setIsLoaded:f,setIsSelected:m,selectedTodo:y})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a4447aec.chunk.js.map