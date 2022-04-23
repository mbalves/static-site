(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(74)},44:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(34),r=a.n(c),s=(a(44),a(3)),l=a(4),i=a(7),u=a(5),d=a(8),m=a(78),h=a(80),p=a(79),b=a(77),g=a(12),v=a.n(g),f="https://mbalves-rest-api-backend.azurewebsites.net",E="".concat(f,"/jpa"),k=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"executeBasicAuthenticationService",value:function(e,t){return v.a.get("".concat(f,"/basicauth"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"executeJwtAuthenticationService",value:function(e,t){return v.a.post("".concat(f,"/authenticate"),{username:e,password:t})}},{key:"createBasicAuthToken",value:function(e,t){return"Basic "+window.btoa(e+":"+t)}},{key:"registerSuccessfulLogin",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),this.setupAxiosInterceptors(this.createBasicAuthToken(e,t))}},{key:"registerSuccessfulLoginForJwt",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),this.setupAxiosInterceptors(this.createJWTToken(t))}},{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUserName",value:function(){var e=sessionStorage.getItem("authenticatedUser");return null===e?"":e}},{key:"setupAxiosInterceptors",value:function(e){var t=this;v.a.interceptors.request.use(function(a){return t.isUserLoggedIn()&&(a.headers.authorization=e),a})}}]),e}()),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return k.isUserLoggedIn()?o.a.createElement(p.a,this.props):o.a.createElement(b.a,{to:"/login"})}}]),t}(n.Component),j=a(35),y=a(2),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:"in28minutes",password:"",hasLoginFailed:!1,showSuccessMessage:!1},a.handleChange=a.handleChange.bind(Object(y.a)(Object(y.a)(a))),a.loginClicked=a.loginClicked.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){var e=this;k.executeJwtAuthenticationService(this.state.username,this.state.password).then(function(t){k.registerSuccessfulLoginForJwt(e.state.username,t.data.token),e.props.history.push("/welcome/".concat(e.state.username))}).catch(function(){e.setState({showSuccessMessage:!1}),e.setState({hasLoginFailed:!0})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("div",{className:"container"},this.state.hasLoginFailed&&o.a.createElement("div",{className:"alert alert-warning"},"Invalid Credentials"),this.state.showSuccessMessage&&o.a.createElement("div",null,"Login Sucessful"),"User Name: ",o.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),"Password: ",o.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),o.a.createElement("button",{className:"btn btn-success",onClick:this.loginClicked},"Login")))}}]),t}(n.Component),C=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"retrieveAllTodos",value:function(e){return v.a.get("".concat(E,"/users/").concat(e,"/todos"))}},{key:"retrieveTodo",value:function(e,t){return v.a.get("".concat(E,"/users/").concat(e,"/todos/").concat(t))}},{key:"deleteTodo",value:function(e,t){return v.a.delete("".concat(E,"/users/").concat(e,"/todos/").concat(t))}},{key:"updateTodo",value:function(e,t,a){return v.a.put("".concat(E,"/users/").concat(e,"/todos/").concat(t),a)}},{key:"createTodo",value:function(e,t){return v.a.post("".concat(E,"/users/").concat(e,"/todos/"),t)}}]),e}()),T=a(17),N=a.n(T),S=function(e){function t(e){var a;return Object(s.a)(this,t),console.log("constructor"),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={todos:[],message:null},a.deleteTodoClicked=a.deleteTodoClicked.bind(Object(y.a)(Object(y.a)(a))),a.updateTodoClicked=a.updateTodoClicked.bind(Object(y.a)(Object(y.a)(a))),a.addTodoClicked=a.addTodoClicked.bind(Object(y.a)(Object(y.a)(a))),a.refreshTodos=a.refreshTodos.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),console.log(e),console.log(t),!0}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.refreshTodos(),console.log(this.state)}},{key:"refreshTodos",value:function(){var e=this,t=k.getLoggedInUserName();C.retrieveAllTodos(t).then(function(t){e.setState({todos:t.data})})}},{key:"deleteTodoClicked",value:function(e){var t=this,a=k.getLoggedInUserName();C.deleteTodo(a,e).then(function(a){t.setState({message:"Delete of todo ".concat(e," Successful")}),t.refreshTodos()})}},{key:"addTodoClicked",value:function(){this.props.history.push("/todos/-1")}},{key:"updateTodoClicked",value:function(e){console.log("update "+e),this.props.history.push("/todos/".concat(e))}},{key:"render",value:function(){var e=this;return console.log("render"),o.a.createElement("div",null,o.a.createElement("h1",null,"List Todos"),this.state.message&&o.a.createElement("div",{class:"alert alert-success"},this.state.message),o.a.createElement("div",{className:"container"},o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Target Date"),o.a.createElement("th",null,"IsCompleted?"),o.a.createElement("th",null,"Update"),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,this.state.todos.map(function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.description),o.a.createElement("td",null,N()(t.targetDate).format("YYYY-MM-DD")),o.a.createElement("td",null,t.done.toString()),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.updateTodoClicked(t.id)}},"Update")),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.deleteTodoClicked(t.id)}},"Delete")))}))),o.a.createElement("div",{className:"row"},o.a.createElement("button",{className:"btn btn-success",onClick:this.addTodoClicked},"Add"))))}}]),t}(n.Component);var D=function(){return o.a.createElement("div",null,"An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl")},M=a(76),U=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=k.isUserLoggedIn();return o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},o.a.createElement("div",null,o.a.createElement("a",{href:"http://www.in28minutes.com",className:"navbar-brand"},"in28Minutes")),o.a.createElement("ul",{className:"navbar-nav"},e&&o.a.createElement("li",null,o.a.createElement(M.a,{className:"nav-link",to:"/welcome/in28minutes"},"Home")),e&&o.a.createElement("li",null,o.a.createElement(M.a,{className:"nav-link",to:"/todos"},"Todos"))),o.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},!e&&o.a.createElement("li",null,o.a.createElement(M.a,{className:"nav-link",to:"/login"},"Login")),e&&o.a.createElement("li",null,o.a.createElement(M.a,{className:"nav-link",to:"/logout",onClick:k.logout},"Logout")))))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"text-muted"},"All Rights Reserved 2018 @in28minutes"))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"You are logged out"),o.a.createElement("div",{className:"container"},"Thank You for Using Our Application."))}}]),t}(n.Component),A=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"executeHelloWorldService",value:function(){return v.a.get("".concat(f,"/hello-world"))}},{key:"executeHelloWorldBeanService",value:function(){return v.a.get("".concat(f,"/hello-world-bean"))}},{key:"executeHelloWorldPathVariableService",value:function(e){return v.a.get("".concat(f,"/hello-world/path-variable/").concat(e))}}]),e}()),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).retrieveWelcomeMessage=a.retrieveWelcomeMessage.bind(Object(y.a)(Object(y.a)(a))),a.state={welcomeMessage:""},a.handleSuccessfulResponse=a.handleSuccessfulResponse.bind(Object(y.a)(Object(y.a)(a))),a.handleError=a.handleError.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Welcome!"),o.a.createElement("div",{className:"container"},"Welcome ",this.props.match.params.name,". You can manage your todos ",o.a.createElement(M.a,{to:"/todos"},"here"),"."),o.a.createElement("div",{className:"container"},"Click here to get a customized welcome message.",o.a.createElement("button",{onClick:this.retrieveWelcomeMessage,className:"btn btn-success"},"Get Welcome Message")),o.a.createElement("div",{className:"container"},this.state.welcomeMessage))}},{key:"retrieveWelcomeMessage",value:function(){var e=this;A.executeHelloWorldPathVariableService(this.props.match.params.name).then(function(t){return e.handleSuccessfulResponse(t)}).catch(function(t){return e.handleError(t)})}},{key:"handleSuccessfulResponse",value:function(e){console.log(e),this.setState({welcomeMessage:e.data.message})}},{key:"handleError",value:function(e){console.log(e.response);var t="";e.message&&(t+=e.message),e.response&&e.response.data&&(t+=e.response.data.message),this.setState({welcomeMessage:t})}}]),t}(n.Component),x=a(16),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={id:a.props.match.params.id,description:"",targetDate:N()(new Date).format("YYYY-MM-DD")},a.onSubmit=a.onSubmit.bind(Object(y.a)(Object(y.a)(a))),a.validate=a.validate.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(-1!==this.state.id){var t=k.getLoggedInUserName();C.retrieveTodo(t,this.state.id).then(function(t){return e.setState({description:t.data.description,targetDate:N()(t.data.targetDate).format("YYYY-MM-DD")})})}}},{key:"validate",value:function(e){var t={};return e.description?e.description.length<5&&(t.description="Enter atleast 5 Characters in Description"):t.description="Enter a Description",N()(e.targetDate).isValid()||(t.targetDate="Enter a valid Target Date"),t}},{key:"onSubmit",value:function(e){var t=this,a=k.getLoggedInUserName(),n={id:this.state.id,description:e.description,targetDate:e.targetDate};-1===this.state.id?C.createTodo(a,n).then(function(){return t.props.history.push("/todos")}):C.updateTodo(a,this.state.id,n).then(function(){return t.props.history.push("/todos")}),console.log(e)}},{key:"render",value:function(){var e=this.state,t=e.description,a=e.targetDate;return o.a.createElement("div",null,o.a.createElement("h1",null,"Todo"),o.a.createElement("div",{className:"container"},o.a.createElement(x.d,{initialValues:{description:t,targetDate:a},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0},function(e){return o.a.createElement(x.c,null,o.a.createElement(x.a,{name:"description",component:"div",className:"alert alert-warning"}),o.a.createElement(x.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Description"),o.a.createElement(x.b,{className:"form-control",type:"text",name:"description"})),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement("label",null,"Target Date"),o.a.createElement(x.b,{className:"form-control",type:"date",name:"targetDate"})),o.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"TodoApp"},o.a.createElement(m.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(U,null),o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,component:w}),o.a.createElement(p.a,{path:"/login",component:w}),o.a.createElement(O,{path:"/welcome/:name",component:W}),o.a.createElement(O,{path:"/todos/:id",component:Y}),o.a.createElement(O,{path:"/todos",component:S}),o.a.createElement(O,{path:"/logout",component:L}),o.a.createElement(p.a,{component:D})),o.a.createElement(I,null))))}}]),t}(n.Component),F=(a(72),a(73),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.d3d216f1.chunk.js.map