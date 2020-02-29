(this["webpackJsonpgoogle-books"]=this["webpackJsonpgoogle-books"]||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),c=n.n(r),l=(n(25),n(26),n(4)),i=Object(a.createContext)(),u=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(!1),s=Object(l.a)(u,2),m=s[0],f=s[1],d=Object(a.useState)(""),v=Object(l.a)(d,2),h=v[0],E=v[1];return o.a.createElement(i.Provider,{value:{bookData:[r,c],fetchData:[m,f],search:[h,E]}},e.children)},s=n(9),m=function(){return o.a.createElement("nav",null,o.a.createElement("h3",null,"Google Books"),o.a.createElement("ul",{className:"nav-links"},o.a.createElement(s.b,{to:"/"},o.a.createElement("li",null,"Home")),o.a.createElement(s.b,{to:"/saved"},o.a.createElement("li",null,"Saved"))))},f=n(13),d=n.n(f),v=n(19),h=function(){var e=Object(a.useContext)(i),t=e.search,n=e.bookData,r=e.fetchData,c=Object(l.a)(n,2),u=(c[0],c[1]),s=Object(l.a)(r,2),m=s[0],f=s[1],h=Object(l.a)(t,2),E=h[0],b=h[1],p=function(){return Object(v.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==E){e.next=3;break}e.next=11;break;case 3:return e.next=5,fetch("/api/books",{method:"POST",body:JSON.stringify({searching:E}),headers:{"Content-Type":"application/json"}});case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,u(n),!1===m&&f(m=!0);case 11:case"end":return e.stop()}}),e)})))()};return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"Google books search")),o.a.createElement("section",{className:"filterBar"},o.a.createElement("input",{type:"text",placeholder:"Filter by book name...",value:E,onChange:function(e){b(E=e.target.value)}}),o.a.createElement("button",{onClick:function(){return p()}},"Search")))},E=function(){var e=Object(a.useContext)(i),t=e.bookData,n=e.fetchData,r=Object(l.a)(n,1)[0];return o.a.createElement("section",{id:"searchedBooks"},!1===r?"":o.a.createElement(o.a.Fragment,null,t[0].items.map((function(e){return o.a.createElement("div",{className:"book",key:e.id},o.a.createElement("h3",null,e.volumeInfo.title),o.a.createElement("h4",null,"Written By: ",e.volumeInfo.authors?e.volumeInfo.authors.map((function(e){return" ".concat(e)})).toString():" Not Provided"),o.a.createElement("div",{className:"book-info"},o.a.createElement("div",{className:"book-buttons"},o.a.createElement("button",{onClick:function(t){t.preventDefault(),window.open(e.volumeInfo.infoLink)}},"View"),o.a.createElement("button",{onClick:function(){return console.log("saved")}},"Save")),o.a.createElement("div",null,e.volumeInfo.imageLinks?o.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:"book.volumeInfo.title"}):o.a.createElement("img",{src:"./content/img/not-found.jpg",alt:"Not Found",width:"150"})),o.a.createElement("div",null,e.volumeInfo.description?o.a.createElement("p",null,e.volumeInfo.description):o.a.createElement("p",null,"No description has been provided for this book."))))}))))};var b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),o.a.createElement(E,null))};var p=function(){return o.a.createElement(o.a.Fragment,null)},g=n(6);var k=function(){return o.a.createElement(u,null,o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement("section",{id:"wrapper"},o.a.createElement(g.c,null,o.a.createElement(g.a,{path:"/",exact:!0,component:b}),o.a.createElement(g.a,{path:"/saved",component:p}))))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.cf0c6318.chunk.js.map