(this["webpackJsonpgoogle-oauth"]=this["webpackJsonpgoogle-oauth"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),i=n.n(a),r=n(3),s=n.n(r),l=n(5),g=n(7),u=n(6),j=n.n(u),d=(n(13),n(0));var h=function(){var e=Object(o.useState)(localStorage.getItem("loginData")?JSON.parse(localStorage.getItem("loginData")):null),t=Object(g.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/google-login",{method:"POST",body:JSON.stringify({token:t.tokenId}),headers:{"content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,c(o),localStorage.setItem("loginData",JSON.stringify(o));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React Google Login Authentication"}),n?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["You logged in as ",n.email]}),Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("loginData"),c(null)},children:"Logout"})]}):Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{clientId:"236561478521-vpqd91lcbpgvqr9kr1v9kgo7503ta5up.apps.googleusercontent.com",buttonText:"Log in with Google",onSuccess:a,onFailure:function(e){alert(e)},cookiePolicy:"single_host_origin"})})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d03180da.chunk.js.map