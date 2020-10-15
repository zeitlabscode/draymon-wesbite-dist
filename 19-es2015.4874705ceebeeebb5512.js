(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{TDBs:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",(function(){return M}));var o=e("ofXK"),a=e("tyNb"),i=e("PSD3"),r=e.n(i),s=e("fXoL"),c=e("N+K7"),d=e("dz5x");function b(t,n){1&t&&(s.Mb(0),s.Ob(1,"div",3),s.Ob(2,"span",4),s.oc(3," Please Wait... "),s.Kb(4,"div",5),s.Nb(),s.Nb(),s.Lb())}function l(t,n){1&t&&(s.Ob(0,"div",10),s.Ob(1,"h4",11),s.oc(2," Get genuine advice for your business or career from "),s.Ob(3,"span",12),s.oc(4," Jonathan Hauck. "),s.Nb(),s.Nb(),s.Ob(5,"h6",13),s.oc(6," About Jonathan "),s.Nb(),s.Ob(7,"p",14),s.oc(8," Jonathan Hauck brings to his clients a wealth of experience and knowledge. His travel to classrooms in China and India, his philanthropic and voluntary contributions in his native Seattle, and his never-ending quest for increased knowledge has shaped him into a capable consultant and counselor. "),s.Nb(),s.Ob(9,"p",14),s.oc(10," Jonathan has spent thousands of hours as a highly trained specialized mechanic, working mainly as an elevator builder in Southern California. There he learned to appreciate the diversity of skill sets as they worked together to complete a building project. After two decades in commercial construction, Jon made a significant change in careers, taking a position as an accounts payable auditor and analyst. "),s.Nb(),s.Ob(11,"div",15),s.Ob(12,"a",16),s.oc(13," Book a meeting "),s.Nb(),s.Ob(14,"a",17),s.oc(15," View Plan "),s.Nb(),s.Nb(),s.Nb())}function g(t,n){1&t&&(s.Mb(0),s.Ob(1,"div",18),s.Kb(2,"img",19),s.Nb(),s.Ob(3,"h5",3),s.oc(4," You don't have any meetings currently. "),s.Nb(),s.Ob(5,"div",3),s.Ob(6,"a",20),s.oc(7,"Book Now"),s.Nb(),s.Nb(),s.Lb())}function m(t,n){if(1&t&&(s.Mb(0),s.Ob(1,"div",21),s.Ob(2,"h4",22),s.oc(3),s.Zb(4,"date"),s.Zb(5,"date"),s.Nb(),s.Ob(6,"p",23),s.oc(7," Meeting Type "),s.Nb(),s.Ob(8,"p",24),s.oc(9),s.Zb(10,"titlecase"),s.Nb(),s.Ob(11,"p",23),s.oc(12," Reason for meeting "),s.Nb(),s.Ob(13,"p"),s.oc(14),s.Nb(),s.Nb(),s.Ob(15,"div",25),s.Ob(16,"div",26),s.Ob(17,"a",27),s.oc(18,"View all Meetings"),s.Nb(),s.Nb(),s.Ob(19,"div",26),s.Ob(20,"a",28),s.oc(21,"Attend Meeting"),s.Nb(),s.Nb(),s.Nb(),s.Lb()),2&t){const t=s.Yb(2);s.zb(3),s.rc(" ",s.bc(4,4,null==t.slot?null:t.slot.startTime,"h:mm a"),", ",s.bc(5,7,null==t.slot?null:t.slot.date,"MMMM d,y")," "),s.zb(6),s.qc(" ",s.ac(10,10,null==t.slot?null:t.slot.counsultingType)," "),s.zb(5),s.qc(" ",null==t.slot?null:t.slot.reason," ")}}function h(t,n){if(1&t&&(s.Ob(0,"div",6),s.nc(1,l,16,0,"div",7),s.Ob(2,"div",8),s.Ob(3,"h6",9),s.oc(4," Your upcoming meeting with Jonathan "),s.Nb(),s.nc(5,g,8,0,"ng-container",1),s.nc(6,m,22,12,"ng-container",1),s.Nb(),s.Nb()),2&t){const t=s.Yb();s.zb(1),s.ec("ngIf",!t.meetingsCount),s.zb(4),s.ec("ngIf",!t.meetingsCount),s.zb(1),s.ec("ngIf",t.meetingsCount)}}let p=(()=>{class t{constructor(t,n){this.http=t,this.share=n,this.meetingsCount=0}ngOnInit(){this.loading=!0,this.http.postToBackend("/users/dashboard",{userId:this.share.user.id}).then(t=>{console.log(t),7e3==t.statusCode?(this.meetingsCount=1,this.slot=t.data,this.loading=!1):this.loading=!1}).catch(t=>{console.log(t),this.loading=!1,r.a.fire({title:"Failed to load data",text:t.message,icon:"error"})})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(c.a),s.Jb(d.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-dash-home"]],decls:3,vars:2,consts:[[1,"dash-wrap"],[4,"ngIf"],["class","row justify-content-center",4,"ngIf"],[1,"text-center"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"row","justify-content-center"],["class","col-md-6",4,"ngIf"],[1,"col-md-6","col-lg-6"],[1,"text-dark","text-center"],[1,"col-md-6"],[1,"text-dark","border-1"],[1,"text-primary"],[1,"text-dark"],[1,"mt-3"],[1,"btn-wrap","mb-5"],["routerLink","./new-meeting",1,"btn","btn-primary","btn-sm"],["href","#","data-toggle","modal","data-target","#cost-modal",1,"btn","btn-dark","btn-sm"],[1,"wrap-img"],["src","assets/img/nothing-found.svg","alt",""],["routerLink","./new-meeting",1,"btn","btn-dark","btn-sm","mt-4"],[1,"wrap-img-2"],[1,"text-dark","mb-4"],[1,"text","mb-1"],[1,"mb-4"],[1,"row"],[1,"col-6","text-center"],["routerLink","./your-meetings",1,"btn","btn-sm","btn-primary","mt-4"],["routerLink","./video-call",1,"btn","btn-dark","btn-sm","mt-4"]],template:function(t,n){1&t&&(s.Ob(0,"div",0),s.nc(1,b,5,0,"ng-container",1),s.nc(2,h,7,3,"div",2),s.Nb()),2&t&&(s.zb(1),s.ec("ngIf",n.loading),s.zb(1),s.ec("ngIf",!n.loading))},directives:[o.k,a.e],pipes:[o.d,o.p],styles:[".wrap-img[_ngcontent-%COMP%]{padding:1rem;text-align:center;margin:4rem 0 2rem}.wrap-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75%}.wrap-img-2[_ngcontent-%COMP%]{text-align:center;padding-bottom:2rem;margin:4rem 0 2rem}.dash-wrap[_ngcontent-%COMP%]{-webkit-animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards}.btn-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"]}),t})();var u=e("n90K");let O=(()=>{class t{constructor(t,n,e,o){this.share=t,this.http=n,this.storage=e,this.router=o}ngOnInit(){}logout(){$("#logout-btn").addClass("running"),$("#logout-btn").prop("disabled",!0),this.http.postToBackend("/users/logout",{}).then(t=>{console.log(t),7e3===t.statusCode?(this.share.token=null,this.share.user=null,this.storage.destroyToken(),this.storage.destroyUser(),$("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),this.router.navigate(["/"])):($("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),r.a.fire({title:"Some Error Occured",icon:"error",text:"Please try again!"}))}).catch(t=>{r.a.fire({title:"Internal server error",icon:"error",text:"Please try again"})})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(d.a),s.Jb(c.a),s.Jb(u.a),s.Jb(a.c))},t.\u0275cmp=s.Db({type:t,selectors:[["app-dash-header"]],decls:18,vars:1,consts:[[1,"dash-header"],[1,"dash-header-top"],["routerLink","/",1,"dash-header-top-home"],["src","assets/img/logo.png","alt","logo",1,"logo"],[1,"name"],[1,"dash-header-top-settings"],["id","logout-btn",1,"btn","btn-primary","logout-btn","ld-ext-right",3,"click"],[1,"ld","ld-ring","ld-spin-fast"],["src","assets/img/icons/logout.svg","alt",""],[1,"dash-header-bottom"],[1,"container"],[1,"text-center"],[1,"text-dark"]],template:function(t,n){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"a",2),s.Kb(3,"img",3),s.Ob(4,"h4",4),s.oc(5," Draymon Capital "),s.Nb(),s.Nb(),s.Ob(6,"div",5),s.Ob(7,"button",6),s.Wb("click",(function(){return n.logout()})),s.Kb(8,"div",7),s.Kb(9,"img",8),s.Ob(10,"span"),s.oc(11," Logout "),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"div",9),s.Ob(13,"div",10),s.Ob(14,"h4",11),s.Ob(15,"span",12),s.oc(16),s.Nb(),s.oc(17," welcome to your dashboard "),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(16),s.qc("Hi ",null==n.share?null:n.share.user.fullName,","))},directives:[a.e],styles:[".dash-header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:2rem 2vw}@media (max-width:61.99em){.dash-header-top[_ngcontent-%COMP%]{margin-bottom:5rem}}@media (max-width:47.99em){.dash-header-top[_ngcontent-%COMP%]{margin-bottom:7rem}}.dash-header-top-home[_ngcontent-%COMP%]{display:flex;align-items:center}.dash-header-top-home[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:4rem;margin-right:.5rem}.dash-header-top-home[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-bottom:0;color:#202020}.dash-header-top-settings[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{margin:0;z-index:5;position:relative;display:flex;align-items:center;justify-content:center}.dash-header-top-settings[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2rem;margin-right:.8rem;z-index:5;-webkit-filter:invert(1);filter:invert(1);transition:all .3s cubic-bezier(.25,.46,.45,.94)}.dash-header-top-settings[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;z-index:5}.dash-header-top-settings[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   .ld[_ngcontent-%COMP%]{z-index:10}.dash-header-top-settings[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:after{height:100%;transform-origin:bottom;z-index:0;transform:scaleY(0) scaleX(1)}.dash-header-top-settings[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover:after{transform:scaleY(1) scaleX(1)}.dash-header-bottom[_ngcontent-%COMP%]{padding:1rem 0 0}"]}),t})();const v=function(){return{exact:!0}};let f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-dash-navbar"]],decls:15,vars:6,consts:[[1,"dash-navbar"],[1,"container","container-custom"],[1,"dash-navbar-wrap"],["routerLink","/dashboard/new-meeting","routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["src","assets/img/icons/add.svg","alt","",1,"nav-item-img"],[1,"nav-item-text"],["routerLink","/dashboard","routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["src","assets/img/icons/home.svg","alt","",1,"nav-item-img"],["routerLink","/dashboard/your-meetings","routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["src","assets/img/icons/list.svg","alt","",1,"nav-item-img"]],template:function(t,n){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"div",2),s.Ob(3,"a",3),s.Kb(4,"img",4),s.Ob(5,"p",5),s.oc(6,"New Meeting"),s.Nb(),s.Nb(),s.Ob(7,"a",6),s.Kb(8,"img",7),s.Ob(9,"p",5),s.oc(10,"Home"),s.Nb(),s.Nb(),s.Ob(11,"a",8),s.Kb(12,"img",9),s.Ob(13,"p",5),s.oc(14,"Your Meetings"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(3),s.ec("routerLinkActiveOptions",s.gc(3,v)),s.zb(4),s.ec("routerLinkActiveOptions",s.gc(4,v)),s.zb(4),s.ec("routerLinkActiveOptions",s.gc(5,v)))},directives:[a.e,a.d],styles:['.dash-navbar[_ngcontent-%COMP%]{position:fixed;width:100%;height:7rem;bottom:1rem;left:0;z-index:1000;text-align:center}@media (max-width:35.99em){.dash-navbar[_ngcontent-%COMP%]{bottom:0;height:11rem}}.dash-navbar-wrap[_ngcontent-%COMP%]{background-color:#fff;display:flex;align-items:center;border-radius:50rem;margin:auto;max-width:60rem;justify-content:space-between;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 2px 6px -2px rgba(0,0,0,.2);width:100%}@media (max-width:35.99em){.dash-navbar-wrap[_ngcontent-%COMP%]{border-radius:0;max-width:100%}}.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{padding:1rem;text-align:center;min-width:10rem;flex:1;display:block;position:relative;opacity:.5;transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.2s}@media (max-width:35.99em){.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{padding:3rem 1rem}}.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:.4rem;width:10rem;height:4px;border-radius:2rem;transform:scaleX(0) translateX(-50%);background-color:#1ac293;transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.2s}.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item-img[_ngcontent-%COMP%]{width:1.8rem}.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item-text[_ngcontent-%COMP%]{margin:3px 0 0;font-size:1.2rem;font-weight:600}@media (max-width:47.99em){.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item-text[_ngcontent-%COMP%]{font-size:1.6rem}}.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]{opacity:1}.dash-navbar-wrap[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]:after{transform:scaleX(1) translateX(-50%)}']}),t})();const w=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-dashboard"]],decls:22,vars:0,consts:[[1,"dash","bg-light"],[1,"container","container-custom"],[1,"dash-container"],["id","cost-modal",1,"modal"],[1,"modal-dialog","plan-modal"],[1,"modal-content","plan"],[1,"plan-close"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body","p-0"],[1,"plan-img"],["src","assets/img/pricing.gif","alt",""],[1,"plan-content"],[1,"text-white"],[1,"mb-1","text-white"],[1,"text","text-white"]],template:function(t,n){1&t&&(s.Ob(0,"div",0),s.Kb(1,"app-dash-header"),s.Ob(2,"div",1),s.Ob(3,"div",2),s.Kb(4,"router-outlet"),s.Nb(),s.Kb(5,"app-dash-navbar"),s.Nb(),s.Nb(),s.Ob(6,"div",3),s.Ob(7,"div",4),s.Ob(8,"div",5),s.Ob(9,"div",6),s.Ob(10,"button",7),s.oc(11,"\xd7"),s.Nb(),s.Nb(),s.Ob(12,"div",8),s.Ob(13,"div",9),s.Kb(14,"img",10),s.Nb(),s.Ob(15,"div",11),s.Ob(16,"h5",12),s.oc(17," Pay "),s.Nb(),s.Ob(18,"h2",13),s.oc(19," $99 "),s.Nb(),s.Ob(20,"p",14),s.oc(21," For 50 minutes of consulting "),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb())},directives:[O,a.g,f],styles:[".modal[_ngcontent-%COMP%]{padding:2rem;-webkit-animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards}.modal-dialog[_ngcontent-%COMP%]{margin:0 auto;min-height:90vh;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:.8rem;padding:1.5rem 2rem;border:none}.modal-title[_ngcontent-%COMP%]{text-align:center}.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:transparent;color:#000}.dash[_ngcontent-%COMP%]{min-height:100vh}.dash-container[_ngcontent-%COMP%]{margin:4rem 0 0;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 2px 6px -2px rgba(0,0,0,.2);background-color:#fff;border-top-left-radius:1rem;border-top-right-radius:1rem;min-height:80vh;padding:4rem 5rem 10rem}@media (max-width:47.99em){.dash-container[_ngcontent-%COMP%]{padding:4rem 3.5rem 10rem}}@media (max-width:35.99em){.dash-container[_ngcontent-%COMP%]{padding-bottom:15rem}}.plan[_ngcontent-%COMP%]{border-radius:1rem;text-align:center;padding:0;overflow:hidden}.plan-img[_ngcontent-%COMP%]{padding:1.5rem;margin-bottom:-1rem}.plan-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:25rem}.plan-content[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom right,#0564b6,#1ac293);padding:20% 2rem 4rem;-webkit-clip-path:polygon(0 22%,100% 0,100% 100%,0 100%);clip-path:polygon(0 22%,100% 0,100% 100%,0 100%)}.plan-close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:1rem 1.5rem;z-index:10}.plan-close[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:3rem;font-weight:400}.plan-modal[_ngcontent-%COMP%]{max-width:38rem;width:100%}"]}),t})(),children:[{path:"",component:p},{path:"new-meeting",loadChildren:()=>Promise.all([e.e(3),e.e(21)]).then(e.bind(null,"g9RZ")).then(t=>t.NewMeetingModule)},{path:"your-meetings",loadChildren:()=>e.e(20).then(e.bind(null,"Fep+")).then(t=>t.MeetingsModule)},{path:"video-call",loadChildren:()=>e.e(22).then(e.bind(null,"73oR")).then(t=>t.VideoCallModule)}]}];let C=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[a.f.forChild(w)],a.f]}),t})(),M=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[o.b,C]]}),t})()}}]);