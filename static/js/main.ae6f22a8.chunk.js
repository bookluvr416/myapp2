(this.webpackJsonpmyapp2=this.webpackJsonpmyapp2||[]).push([[0],{22:function(e,n,t){e.exports=t(34)},27:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),i=t.n(r),c=(t(27),t(15)),l=t(16),s=t(20),u=t(17),d=t(21),m=t(8),p=t(5),f=(t(28),function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("h3",null,"Task Manager"),o.a.createElement(m.b,{to:"/"},"Current Tasks"),o.a.createElement(m.b,{to:"/completed"},"Completed Tasks"))}),h=function(e){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("p",{className:"page-info"},e.title,":"),o.a.createElement("ul",{className:e.status},o.a.createElement("li",null,"Task 1"),o.a.createElement("li",null,"Task 2"),o.a.createElement("li",null,"Task 3")))},v=function(){return o.a.createElement(h,{title:"Current Tasks",status:"Current"})},g=function(){return o.a.createElement(h,{title:"Completed Tasks",status:"Completed"})},w=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(p.a,{exact:!0,path:"/",component:v}),o.a.createElement(p.a,{path:"/completed",component:g})))}}]),n}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/myapp2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/myapp2","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(n,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.ae6f22a8.chunk.js.map