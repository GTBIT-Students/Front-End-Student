(this.webpackJsonpgtbit_frontend=this.webpackJsonpgtbit_frontend||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=n(42),s=n(30),u=n(38),i=n(27),m=n(66),p=n(67),f=n(73),d=n(19),g=n(31),h=n(25),b=n.n(h),k=n(35),v=n(21),E=n(68),x=n.n(E),y=n(157),j=n(158),w=n(159),O=n(163),S=n(162),C=n(165),I=n(164),N=n(160),z=n(36),A=n.n(z),F=n(37);F.a.defaults.styling="bootstrap4",F.a.defaults.icons="fontawesome5",F.a.defaults.delay=5e3;var _=function(e){var t=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},n=function(e){return("0"+Number(e).toString(16)).substr(-2)},a=function(n){return t(e).reduce((function(e,t){return e^t}),n)};return function(e){return e.split("").map(t).map(a).map(n).join("")}}("@35#456"),W=function(e){var t=function(t){return(n=e,n.split("").map((function(e){return e.charCodeAt(0)}))).reduce((function(e,t){return e^t}),t);var n};return function(e){return e.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map(t).map((function(e){return String.fromCharCode(e)})).join("")}}("@35#456");function q(e){return _(e)}function B(e){return W(e)}var D,H,J="https://gtbit-backend.herokuapp.com";function P(e,t,n,a){A.a.post("".concat(J).concat(e),t,H).then((function(e){200===e.status&&n(e)})).catch((function(e){a(e),console.log(e)}))}!function(){console.log("geting tooken");var e=document.cookie.match("(^|[^;]+)\\s*token\\s*=\\s*([^;]+)");if(e){var t=e.pop();D=B(t),H={headers:{Authorization:"Token "+D}}}else H={}}();var L=n(69),R=n.n(L),T=n(153);var U=function(e){var t=e.children,n=e.active;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{active:n,spinner:r.a.createElement(T.a,{className:"text-dark"}),styles:{overlay:function(e){return Object(g.a)({},e,{background:"rgba(0,0,0,0.1)",minHeight:"50px"})}},style:{background:"none"}},t))},G=n(70),K=n.n(G),M=n(161);var Q=function(){document.body.style.background="rgb(244,245,246)";var e=Object(a.useState)({username:"",password:"",checked:!1}),t=Object(v.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(v.a)(c,2),u=s[0],i=s[1],m=Object(a.useState)(!1),p=Object(v.a)(m,2),f=p[0],h=p[1];function E(e){var t,a=e.target.name;t="checked"===a?e.target.checked:e.target.value,o(Object(g.a)({},n,Object(d.a)({},a,t)))}function z(){return A.apply(this,arguments)}function A(){return(A=Object(k.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checked"),e.t0=localStorage,e.next=4,q(n.username);case 4:return e.t1=e.sent,e.t0.setItem.call(e.t0,"uname",e.t1),e.t2=localStorage,e.next=9,q(n.password);case 9:e.t3=e.sent,e.t2.setItem.call(e.t2,"pass",e.t3);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return _.apply(this,arguments)}function _(){return(_=Object(k.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.data.token){e.next=8;break}return e.next=3,q(t.data.token);case 3:a=e.sent,document.cookie="token=".concat(a,";"),n.checked?z():console.log("not checked"),window.location.pathname="/admin",i(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K()("Authentication Failed","","error"),i(!1);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(k.a)(b.a.mark((function e(){var t,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof Storage){e.next=23;break}if(!localStorage.getItem("uname")||!localStorage.getItem("pass")){e.next=19;break}return e.next=4,B(localStorage.getItem("uname"));case 4:return t=e.sent,e.next=7,B(localStorage.getItem("pass"));case 7:return n=e.sent,e.next=10,document.cookie.match("(^|[^;]+)\\s*token\\s*=\\s*([^;]+)");case 10:(a=e.sent)&&(a=a.pop()),console.log(t,n,a),r={username:t,password:n},console.log(r),o({username:t}),t&&n&&a?P("/api/v1/token/authorize",r,F,(function(){console.log("handleerror"),h(!0)})):h(!0),e.next=21;break;case 19:console.log("uname pass not found"),h(!0);case 21:e.next=25;break;case 23:h(!0),console.log("Sorry! No Web Storage support..");case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("fetching...name and pass "),function(){e.apply(this,arguments)}()}),[]),r.a.createElement(y.a,{style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"1em 0",boxSizing:"border-box"}},r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{style:{boxShadow:"rgba(0, 0, 0, 0.05) 0px 5px 16px 0px"},className:"mx-auto "+x.a.logincard},f?r.a.createElement(U,{active:u},r.a.createElement(O.a.Header,{bg:"info",className:"text-center"},r.a.createElement("span",{style:{fontSize:"1.5rem"}},"Sign In")),r.a.createElement(O.a.Body,null,r.a.createElement("br",null),r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),i(!0),console.log("Login submit called"),P("/api/v1/token/authorize",Object(g.a)({},n,{checked:void 0}),F,W)}},r.a.createElement(S.a,{fullWidth:!0,id:"outlined-basic",label:"Enter Username",variant:"outlined",className:"mb-3",name:"username",value:n.username,onChange:E,required:!0}),r.a.createElement(S.a,{fullWidth:!0,id:"outlined-basic",label:"Enter Password",variant:"outlined",className:"mb-3",name:"password",value:n.password,onChange:E,required:!0}),r.a.createElement(C.a,{control:r.a.createElement(I.a,{checked:n.checked,onChange:E,name:"checked",color:"primary"}),label:"Remember me"}),r.a.createElement(j.a,{className:"justify-content-center"},r.a.createElement(N.a,{variant:"contained",color:"primary",type:"submit"},"Sign In")),r.a.createElement(j.a,{className:"mt-2"},r.a.createElement(w.a,{sm:"8"},r.a.createElement(l.b,{to:"/"},"Forgot Password?")))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{animation:"wave"}),r.a.createElement(M.a,{animation:!1}),r.a.createElement(M.a,{variant:"rect",height:218}),r.a.createElement(M.a,{animation:!1}),r.a.createElement(M.a,{animation:"wave"}))))))},V=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null))}}]),t}(a.Component);n(117);c.a.render(r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:V}),r.a.createElement(s.a,{path:"/login",component:Q})),document.getElementById("root"))},68:function(e,t,n){e.exports={logincard:"login_logincard__2ieks"}},80:function(e,t,n){e.exports=n(118)}},[[80,1,2]]]);
//# sourceMappingURL=main.6fd652e7.chunk.js.map