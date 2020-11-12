(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{44:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r.n(a),s=r(19),u=r.n(s),o=(r(44),r(15)),i=r(5),j=r(6),b=r(14),p=r(2),d=r(3),l=r.n(d),O=r(7),f="VERIFY_TOKEN_STARTED",m="VERIFY_TOKEN_END",v="USER_LOGIN_STARTED",x="USER_LOGIN_FAILURE",h="VERIFY_USER_SUCCESS",g="USER_LOGOUT",y="USER_SIGNUP_STARTED",T="USER_SIGNUP_FAILURE",w="USER_SIGNUP_SUCCESS",E="ADD_TEAM_STARTED",S="ADD_TEAM_FAILURE",L="ADD_TEAM_SUCCESS",C=r(10),A=r.n(C);A.a.defaults.withCredentials=!0;var _="http://localhost:4202",k=function(e){e?A.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete A.a.defaults.headers.common.Authorization},N=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(_,"/verifyTokens"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(O.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(_,"/login"),{email:t,password:r});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(_,"/logout"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(l.a.mark((function e(t,r,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(_,"/signup"),{email:t,username:r,password:n});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n){return e.apply(this,arguments)}}(),P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:f,payload:{silentAuth:e}}},R=function(){return{type:m}},I=function(e){var t=e.token,r=e.expiredAt,n=e.user;return{type:h,payload:{token:t,expiredAt:r,user:n}}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong. Please try again later";return{type:x,payload:{error:e}}},G=function(){return k(),{type:g}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong. Please try again later";return{type:T,payload:{signupError:e}}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"You have created new accout. Please log in to continue";return{type:w,payload:{signupSuccess:e}}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong. Please try again later";return{type:S,payload:{addTeamError:e}}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Team has been created";return{type:L,payload:{addTeamMessage:e}}},z=function(){var e=Object(O.a)(l.a.mark((function e(t,r,n,a,c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat("http://localhost:4202","/teams"),{teamLeader:t,teamName:r,teamMembers:n,teamTag:a,game:c});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(O.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(P(e)),t.next=3,N();case 3:if(!(n=t.sent).error){t.next=8;break}return r(R()),n.response&&[401,403].includes(n.response.status)&&r(G()),t.abrupt("return");case 8:204===n.status?r(R()):r(I(n.data));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var J=function(e){var t=Object(a.useState)(e),r=Object(b.a)(t,2),n=r[0],c=r[1];return{value:n,onChange:function(e){c(e.target.value)}}},K=function(){var e=Object(j.c)((function(e){return e.auth})),t=Object(j.b)(),r=e.userLoginLoading,a=e.loginError,c=J(""),s=J("");return Object(n.jsxs)("div",{children:["Login",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["Username",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},c),{},{autoComplete:"new-password"}))]}),Object(n.jsxs)("div",{style:{marginTop:10},children:["Password",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"password"},s),{},{autoComplete:"new-password"}))]}),Object(n.jsx)("input",{type:"button",style:{marginTop:10},value:r?"Loading...":"Login",onClick:function(){t(function(e,t){return function(){var r=Object(O.a)(l.a.mark((function r(n){var a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:v}),r.next=3,M(e,t);case 3:if(!(a=r.sent).error){r.next=7;break}return n(F(a.response.data)),r.abrupt("return");case 7:n(I(a.data));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(c.value,s.value))},disabled:r}),a&&Object(n.jsxs)("div",{style:{color:"red",marginTop:10},children:[" ",a]})]})},W=r(21),q=r.n(W),Q="http://localhost:4202",Z=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(Q,"/profile"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(Q,"/myteams"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,response:e.t0.response});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();var ee=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.auth})),r=t.user,c=t.token,s=t.expiredAt,u=Object(a.useState)([]),o=Object(b.a)(u,2),i=o[0],p=o[1],d=Object(a.useState)([]),f=Object(b.a)(d,2),m=f[0],v=f[1],x=function(){var t=Object(O.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:if(!(r=t.sent).error){t.next=7;break}return e(R()),r.response&&[401,403].includes(r.response.status)&&e(G()),t.abrupt("return");case 7:p(r.data);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(O.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$();case 2:if(!(r=t.sent).error){t.next=7;break}return e(R()),r.response&&[401,403].includes(r.response.status)&&e(G()),t.abrupt("return");case 7:v(r.data.teams);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(c);var t=setTimeout((function(){e(H(!0))}),q()(s).diff()-1e4);return function(){clearTimeout(t)}}),[s,c]),Object(a.useEffect)((function(){x(),h()}),[]),Object(n.jsxs)("div",{children:["Welcome ",r.username,"!",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"button",onClick:function(){e((function(e){e(G()),U()}))},value:"Logout"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"User Data:"}),Object(n.jsxs)("p",{children:[" Email: ",i.email," "]}),Object(n.jsxs)("p",{children:[" Username: ",i.name," "]}),Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:" Your Teams: "}),Object(n.jsx)("b",{children:" "}),Object(n.jsx)("p",{id:"teams",children:" "}),m.map((function(e,t){return Object(n.jsxs)("li",{children:[" ",Object(n.jsx)("br",{}),"Team Name: ",e.teamName," ",Object(n.jsx)("br",{}),"Team Tag: ",e.teamTag," ",Object(n.jsx)("br",{}),"Team Members: ",e.teamMembers[0],", ",e.teamMembers[1],",",e.teamMembers[2],", ",e.teamMembers[3],", ",e.teamMembers[4]," ",Object(n.jsx)("br",{}),"Game: ",e.game," ",Object(n.jsx)("br",{})]},t)}))]})};var te=function(){return Object(n.jsx)("div",{children:"Welcome to the Home Page!"})};var re=function(e){var t=Object(a.useState)(e),r=Object(b.a)(t,2),n=r[0],c=r[1];return{value:n,onChange:function(e){c(e.target.value)}}},ne=function(){var e=Object(j.c)((function(e){return e.auth})),t=Object(j.b)(),r=e.userSignupLoading,a=e.signupError,c=e.signupSuccess,s=re(""),u=re(""),o=re("");return Object(n.jsxs)("div",{children:["Create new account",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["Email",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},s),{},{autoComplete:"new-password"}))]}),Object(n.jsxs)("div",{children:["Username",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},u),{},{autoComplete:"new-password"}))]}),Object(n.jsxs)("div",{style:{marginTop:10},children:["Password",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"password"},o),{},{autoComplete:"new-password"}))]}),Object(n.jsx)("input",{type:"button",style:{marginTop:10},value:r?"Loading...":"Signup",onClick:function(){t(function(e,t,r){return function(){var n=Object(O.a)(l.a.mark((function n(a){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:y}),n.next=3,D(e,t,r);case 3:if(!(c=n.sent).error){n.next=7;break}return a(V(c.response.data.message)),n.abrupt("return");case 7:a(Y(c.response));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(s.value,u.value,o.value))},disabled:r}),c?Object(n.jsxs)("div",{style:{color:"green",marginTop:10},children:[" ",c]}):Object(n.jsxs)("div",{style:{color:"red",marginTop:10},children:[" ",a]})]})};var ae=function(e){var t=Object(a.useState)(e),r=Object(b.a)(t,2),n=r[0],c=r[1];return{value:n,onChange:function(e){c(e.target.value)}}},ce=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.team})),r=Object(j.c)((function(e){return e.auth})),c=t.addTeamLoading,s=t.addTeamError,u=t.addTeamMessage,o=r.user,i=r.token,b=r.expiredAt,d=ae(""),f=ae(""),m=ae(""),v=ae(""),x=ae(""),h=ae(""),g=ae(""),y=ae(""),T=[v.value,x.value,h.value,g.value,y.value];return Object(a.useEffect)((function(){k(i);var t=setTimeout((function(){e(H(!0))}),q()(b).diff()-1e4);return function(){clearTimeout(t)}}),[b,i]),Object(n.jsxs)("div",{children:["Add a new team ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["Team Name ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},d),{},{autoComplete:"off"}))]}),Object(n.jsxs)("div",{style:{marginTop:10},children:["Team Tag ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},f),{},{autoComplete:"off"}))]}),Object(n.jsxs)("div",{style:{marginTop:10},children:["Game ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"radio"},m),{},{value:"League of Legends",name:"game",autoComplete:"off"}))," League of Legends ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"radio"},m),{},{value:"Counter Strike: Global Offensive",name:"game",autoComplete:"off"}))," Couter Strike: Global Offensive ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"radio"},m),{},{value:"Dota 2",name:"game",autoComplete:"off"}))," Dota 2 ",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{marginTop:10},children:["Team Member #1 ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},v),{},{autoComplete:"off"})),Object(n.jsx)("br",{}),"Team Member #2 ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},x),{},{autoComplete:"off"})),Object(n.jsx)("br",{}),"Team Member #3 ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},h),{},{autoComplete:"off"})),Object(n.jsx)("br",{}),"Team Member #4 ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},g),{},{autoComplete:"off"})),Object(n.jsx)("br",{}),"Team Member #5 ",Object(n.jsx)("br",{}),Object(n.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},y),{},{autoComplete:"off"})),Object(n.jsx)("br",{})]}),Object(n.jsx)("input",{type:"button",style:{marginTop:10},value:c?"Adding...":"Add new team",onClick:function(){e(function(e,t,r,n,a){return function(){var c=Object(O.a)(l.a.mark((function c(s){var u;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:E}),c.next=3,z(e,t,r,n,a);case 3:if(!(u=c.sent).error){c.next=7;break}return s(X(u.response.data.message)),c.abrupt("return");case 7:s(B(u.response));case 8:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(o.username,d.value,T,f.value,m.value))},disabled:c}),u?Object(n.jsxs)("div",{style:{color:"green",marginTop:10},children:[" ",u]}):Object(n.jsxs)("div",{style:{color:"red",marginTop:10},children:[" ",s]})]})},se=r(22);var ue=function(e){var t=e.component,r=Object(se.a)(e,["component"]);return Object(n.jsx)(i.b,Object(p.a)(Object(p.a)({},r),{},{render:function(e){return r.isAuthenticated?Object(n.jsx)(t,Object(p.a)({},e)):Object(n.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var oe=function(e){var t=e.component,r=Object(se.a)(e,["component"]);return Object(n.jsx)(i.b,Object(p.a)(Object(p.a)({},r),{},{render:function(e){return r.isAuthenticated?Object(n.jsx)(i.a,{to:{pathname:"/Profile"}}):Object(n.jsx)(t,Object(p.a)({},e))}}))};var ie=function(){var e=Object(j.c)((function(e){return e.auth})),t=Object(j.b)(),r=e.authLoading,c=e.isAuthenticated;return Object(a.useEffect)((function(){t(H())}),[]),r?Object(n.jsx)("div",{className:"content",children:" Checking Authentication..."}):Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/",children:" Home "}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/login",children:" Login "}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/signup",children:" Signup"}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/Profile",children:" Profile"}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/AddTeam",children:" Add Team"})]}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:"/",component:te}),Object(n.jsx)(oe,{path:"/signup",component:ne,isAuthenticated:c}),Object(n.jsx)(oe,{path:"/login",component:K,isAuthenticated:c}),Object(n.jsx)(ue,{path:"/Profile",component:ee,isAuthenticated:c}),Object(n.jsx)(ue,{path:"/AddTeam",component:ce,isAuthenticated:c}),Object(n.jsx)(i.a,{to:c?"/Profile":"/login"})]})})]})})})},je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,70)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},be=r(16),pe=r(38),de={token:null,expiredAt:null,user:null,authLoading:!0,isAuthenticated:!1,userLoginLoading:!1,userSignupLoading:!1,loginError:null,signupError:null,signupSuccess:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var r=t.payload.silentAuth;return r?Object(p.a)({},e):de;case m:return Object(p.a)(Object(p.a)({},e),{},{authLoading:!1});case v:return Object(p.a)(Object(p.a)({},e),{},{userLoginLoading:!0});case x:var n=t.payload.error;return Object(p.a)(Object(p.a)({},e),{},{loginError:n,userLoginLoading:!1});case h:var a=t.payload,c=a.token,s=a.expiredAt,u=a.user;return Object(p.a)(Object(p.a)({},e),{},{token:c,expiredAt:s,user:u,isAuthenticated:!0,authLoading:!1,userLoginLoading:!1});case g:return Object(p.a)(Object(p.a)({},de),{},{authLoading:!1});case y:return Object(p.a)(Object(p.a)({},e),{},{userSignupLoading:!0});case w:var o=t.payload.signupSuccess;return Object(p.a)(Object(p.a)({},e),{},{userSignupLoading:!1,signupSuccess:o});case T:var i=t.payload.signupError;return Object(p.a)(Object(p.a)({},e),{},{userSignupLoading:!1,signupError:i});default:return e}},Oe={team:null,addTeamLoading:!1,addTeamError:null,addTeamMessage:null},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(p.a)(Object(p.a)({},e),{},{addTeamLoading:!0});case S:var r=t.payload.addTeamError;return Object(p.a)(Object(p.a)({},e),{},{addTeamLoading:!1,addTeamError:r});case L:var n=t.payload,a=n.addTeamMessage,c=n.team;return Object(p.a)(Object(p.a)({},e),{},{addTeamLoading:!1,addTeamMessage:a,team:c});default:return e}},me=Object(be.c)({auth:le,team:fe}),ve=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):be.d)(Object(be.a)(pe.a)),xe=Object(be.e)(me,ve);u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(j.a,{store:xe,children:Object(n.jsx)(ie,{})})}),document.getElementById("root")),je()}},[[69,1,2]]]);
//# sourceMappingURL=main.8bb5aec9.chunk.js.map