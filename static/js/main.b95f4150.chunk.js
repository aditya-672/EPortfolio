(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/profile.a9aeef0d.jpg"},17:function(e,a,t){e.exports=t.p+"static/media/im1.fc14ddab.jpg"},18:function(e,a,t){e.exports=t.p+"static/media/im2.d416a12a.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/im3.5fd57822.jpg"},20:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),i=t.n(s),c=(t(25),t(2)),l=t(3),m=t(5),o=t(4),d=t(6),u=t(15),h=t.n(u),p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Achievements")))))}}]),a}(n.Component),g=t(9),b=t(11),f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).landingData=e.landingData,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(g.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(g.a,{icon:b.a})))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).experience=e.experience,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).education=e.education,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),N=t(16),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).skills=e.skills,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:N.a,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).interests=e.interests,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphThree)))}}]),a}(n.Component),k=t(17),y=t.n(k),O=t(18),x=t.n(O),D=t(19),C=t.n(D),I=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).awards=e.awards,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Achievements & Certifications"),r.a.createElement("ul",{className:"row justify-content-between  "},r.a.createElement("img",{src:y.a,alt:"",width:350,height:350}),r.a.createElement("img",{src:x.a,alt:"",width:350,height:350}),r.a.createElement("img",{src:C.a,alt:"",width:350,height:350}))))}}]),a}(n.Component),A=t(7),T=t(12),S=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={landingData:A.landing,experience:A.experience,education:A.education,skills:A.skills,interests:A.interests,awards:A.awards},T.a.initialize("UA-158818625-1"),T.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(I,{awards:this.state.awards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={landing:{firstName:"Aditya",lastName:"Waghmare",phoneNumber:"+91-0123456789",bio:"I am a enthusiastic person and very determined to whatever work assigned to me. I have good potential in management work. My tech stack includes Python and Javascript. Python for server side and scripting and Javascript for the frontend. I use Mern framework for the server side development and React for the frontend development.",email:"waghmareaditya08@gmail.com",linkedin:"https://linkedin.com/in",github:"https://github.com/aditya-672"},experience:[{position:"Technical Core",organization:"ACM-VIT",aboutWork:"Responsible for handling all the technical functionalities.",fromDate:"July 2021",toDate:"June 2022"}],education:[{university:"Vidyalankar Institute Of Technology",degree:"Bachelor of Engineering",gpa:"9.81/10",fromDate:"January 2021",toDate:"Present"},{university:"D.G.Ruparel College of Arts, Commerce & Science",degree:"H.S.C",gpa:"85.06%",fromDate:"August 2018",toDate:"March 2020"}],skills:[{name:"HTML5"},{name:"CSS3"},{name:"Javascript"},{name:"React"},{name:"Nodejs"},{name:"Python"},{name:"Django"},{name:"Mongo"}],interests:{paragraphOne:"Apart from being a web developer, I enjoy most of my time being outdoors. My sporting interest revolves around badmintion.",paragraphTwo:"I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",paragraphThree:"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."},awards:[]}}},[[20,1,2]]]);
//# sourceMappingURL=main.b95f4150.chunk.js.map