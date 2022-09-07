(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(5)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.setIsSelected,s=e.setIsLoaded,a=e.setSelectedTodoId;return Object(o.jsx)(o.Fragment,{children:0===t.length?"":Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.userId}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return t=e,c(!0),a(t.id),void window.setTimeout((function(){s(!0)}),1e3);var t},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})})},j=function(e){var t=e.setComplitedSelect,c=e.complitedSelect,s=e.setInputValue,a=e.inputValue;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"search",className:"input",placeholder:"Search...",value:a,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.isSelected,c=e.isLoaded,s=e.setIsLoaded,a=e.setIsSelected,d=e.selectedTodoId,i=e.todos,r=Object(l.useState)(null),j=Object(n.a)(r,2),h=j[0],m=j[1],O=i.find((function(e){return e.id===d}));return Object(l.useEffect)((function(){var e;O&&(e=O.userId,u("/users/".concat(e))).then((function(e){return m(e)}))}),[d]),Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),c?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===O||void 0===O?void 0:O.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(!1),a(!1)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===O||void 0===O?void 0:O.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==O&&void 0!==O&&O.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]}):Object(o.jsx)(b,{})]})})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),d=Object(n.a)(a,2),i=d[0],m=d[1],O=Object(l.useState)(!1),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(null),N=Object(n.a)(v,2),y=N[0],g=N[1],S=Object(l.useState)("all"),I=Object(n.a)(S,2),k=I[0],C=I[1],T=Object(l.useState)(""),w=Object(n.a)(T,2),L=w[0],_=w[1];Object(l.useEffect)((function(){u("/todos").then(s).finally((function(){return p(!1)}))}),[]);var E=Object(l.useMemo)((function(){return c.filter((function(e){var t;if("active"===k)t=!1===e.completed;else{if("completed"!==k)return e;t=!0===e.completed}return t})).filter((function(e){return""===L?e:e.title.startsWith(L)}))}),[c,k,L]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{setComplitedSelect:C,complitedSelect:k,inputValue:L,setInputValue:_})}),Object(o.jsx)("div",{className:"block",children:f?Object(o.jsx)(b,{}):Object(o.jsx)(r,{todos:E,setIsSelected:m,setIsLoaded:p,setSelectedTodoId:g})})]})})}),Object(o.jsx)(h,{isSelected:i,isLoaded:f,setIsLoaded:p,setIsSelected:m,selectedTodoId:y,todos:c})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.319969a5.chunk.js.map