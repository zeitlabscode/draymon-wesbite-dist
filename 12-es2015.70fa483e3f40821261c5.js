(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Dft3:function(t,n,e){"use strict";e.r(n),e.d(n,"AdminPanelModule",(function(){return x}));var o=e("ofXK"),i=e("tyNb"),a=e("PSD3"),r=e.n(a),l=e("fXoL"),b=e("N+K7"),s=e("CNll");function c(t,n){1&t&&(l.Mb(0),l.Ob(1,"div",13),l.Ob(2,"span",14),l.pc(3," Getting dashboard data... "),l.Kb(4,"div",15),l.Nb(),l.Nb(),l.Lb())}function d(t,n){1&t&&(l.Ob(0,"div",36),l.Ob(1,"a",37),l.pc(2," Attend Meeting "),l.Nb(),l.Nb())}function m(t,n){if(1&t&&(l.Ob(0,"section",27),l.Ob(1,"h2",28),l.pc(2,"Next Meeting to attend"),l.Nb(),l.Ob(3,"div",24),l.Ob(4,"div",29),l.Ob(5,"div",30),l.Ob(6,"div",24),l.Ob(7,"div",31),l.Ob(8,"h4",32),l.pc(9," Meeting Details "),l.Nb(),l.Ob(10,"h6"),l.pc(11," Booked by "),l.Nb(),l.Ob(12,"p",33),l.pc(13),l.Nb(),l.Ob(14,"h6"),l.pc(15," Phone Number "),l.Nb(),l.Ob(16,"p",33),l.pc(17),l.Nb(),l.Ob(18,"h6"),l.pc(19," Consulting Type "),l.Nb(),l.Ob(20,"p",33),l.pc(21),l.Zb(22,"titlecase"),l.Nb(),l.Ob(23,"h6"),l.pc(24," Reason for meeting "),l.Nb(),l.Ob(25,"p",33),l.pc(26),l.Nb(),l.Nb(),l.Ob(27,"div",31),l.Ob(28,"h4",32),l.pc(29," Payment Details "),l.Nb(),l.Ob(30,"h6"),l.pc(31," Payment Paid "),l.Nb(),l.Ob(32,"h3",34),l.pc(33),l.Nb(),l.Ob(34,"h4",32),l.pc(35," Slot Details: "),l.Nb(),l.Ob(36,"h6"),l.pc(37," Date "),l.Nb(),l.Ob(38,"p",33),l.pc(39),l.Zb(40,"date"),l.Nb(),l.Ob(41,"h6"),l.pc(42," Time "),l.Nb(),l.Ob(43,"p",33),l.pc(44),l.Zb(45,"date"),l.Zb(46,"date"),l.Nb(),l.oc(47,d,3,0,"div",35),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){const t=l.Yb(2);l.zb(13),l.rc(" ",null==t.mostRecent?null:t.mostRecent.userName," "),l.zb(4),l.rc(" ",null==t.mostRecent?null:t.mostRecent.mobileNo," "),l.zb(4),l.rc(" ",l.ac(22,10,null==t.mostRecent?null:t.mostRecent.counsultingType)," "),l.zb(5),l.rc(" ",null==t.mostRecent?null:t.mostRecent.reason," "),l.zb(7),l.rc(" $",null==t.mostRecent?null:t.mostRecent.amountPaid," "),l.zb(6),l.rc(" ",l.bc(40,12,null==t.mostRecent?null:t.mostRecent.date,"MMMM d,y")," "),l.zb(5),l.tc(" ",l.bc(45,15,null==t.mostRecent?null:t.mostRecent.startTime,"h:mm a")," - ",l.bc(46,18,null==t.mostRecent?null:t.mostRecent.endTime,"h:mm a"),"(",null==t.mostRecent?null:t.mostRecent.duration," MINS) "),l.zb(3),l.ec("ngIf",t.canAttend)}}function g(t,n){1&t&&(l.Mb(0),l.Ob(1,"span",38),l.pc(2," You don't have any recent meeting to attend. "),l.Ob(3,"a",39),l.pc(4,"Create a slot now."),l.Nb(),l.Nb(),l.Lb())}const u=function(t){return["/admin/booking-details",t]};function h(t,n){if(1&t&&(l.Ob(0,"div",40),l.Ob(1,"div",41),l.Ob(2,"h5",28),l.pc(3),l.Nb(),l.Ob(4,"h6",42),l.pc(5),l.Zb(6,"titlecase"),l.Nb(),l.Ob(7,"p"),l.pc(8),l.Zb(9,"date"),l.Nb(),l.Ob(10,"div",43),l.Ob(11,"a",44),l.pc(12,"View Full Details"),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){const t=n.$implicit;l.zb(3),l.qc(null==t?null:t.userName),l.zb(2),l.qc(l.ac(6,4,null==t?null:t.counsultingType)),l.zb(3),l.qc(l.bc(9,6,null==t?null:t.date,"mediumDate")),l.zb(3),l.ec("routerLink",l.hc(9,u,null==t?null:t.id))}}function p(t,n){if(1&t&&(l.Ob(0,"span",56),l.Ob(1,"a",57),l.Ob(2,"i",58),l.pc(3," remove_red_eye "),l.Nb(),l.Ob(4,"div",50),l.Ob(5,"p"),l.pc(6,"View Booking Details"),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){const t=l.Yb().$implicit;l.zb(1),l.ec("routerLink",l.hc(1,u,null==t?null:t.id))}}function O(t,n){if(1&t){const t=l.Pb();l.Ob(0,"div",40),l.Ob(1,"div",45),l.Ob(2,"div",46),l.oc(3,p,7,3,"span",47),l.Ob(4,"span",48),l.Wb("click",(function(){l.kc(t);const e=n.$implicit,o=n.index;return l.Yb(2).deleteSlot(null==e?null:e.id,null==e?null:e.transactionId,e.booked,o)})),l.Ob(5,"i",49),l.pc(6," delete_outline "),l.Nb(),l.Ob(7,"div",50),l.Ob(8,"p"),l.pc(9,"Delete this slot ?"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(10,"h4",51),l.pc(11),l.Zb(12,"date"),l.Nb(),l.Ob(13,"h6",52),l.pc(14),l.Zb(15,"date"),l.Zb(16,"date"),l.Nb(),l.Ob(17,"div",53),l.Ob(18,"span",54),l.pc(19),l.Nb(),l.Ob(20,"span",55),l.pc(21),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&t){const t=n.$implicit;l.zb(3),l.ec("ngIf",null==t?null:t.booked),l.zb(8),l.qc(l.bc(12,10,null==t?null:t.date,"mediumDate")),l.zb(3),l.sc(" ",l.bc(15,13,null==t?null:t.startTime,"h:mm a")," - ",l.bc(16,16,null==t?null:t.endTime,"h:mm a"),""),l.zb(5),l.rc("",null==t?null:t.duration," MINS"),l.zb(1),l.Bb("text-block--primary",null==t?null:t.booked)("text-block--secondary",!(null!=t&&t.booked)),l.zb(1),l.rc(" ",1==(null==t?null:t.booked)?"Booked":"Not Booked"," ")}}function f(t,n){if(1&t&&(l.Ob(0,"div",16),l.oc(1,m,48,21,"section",17),l.oc(2,g,5,0,"ng-container",0),l.Ob(3,"section",18),l.Ob(4,"div",19),l.Ob(5,"div",20),l.Ob(6,"h3",21),l.pc(7,"Latest Bookings"),l.Nb(),l.Nb(),l.Ob(8,"a",22),l.pc(9," See All"),l.Nb(),l.Nb(),l.Ob(10,"div",23),l.Ob(11,"div",24),l.oc(12,h,13,11,"div",25),l.Nb(),l.Nb(),l.Nb(),l.Ob(13,"section",18),l.Ob(14,"div",19),l.Ob(15,"div",20),l.Ob(16,"h3",21),l.pc(17,"Latest Added Slots"),l.Nb(),l.Nb(),l.Ob(18,"a",26),l.pc(19," See All"),l.Nb(),l.Nb(),l.Ob(20,"div",23),l.Ob(21,"div",24),l.oc(22,O,22,19,"div",25),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){const t=l.Yb();l.zb(1),l.ec("ngIf",t.mostRecent),l.zb(1),l.ec("ngIf",!t.loading&&!t.mostRecent),l.zb(10),l.ec("ngForOf",t.bookedSlots),l.zb(10),l.ec("ngForOf",t.allSlots)}}let v=(()=>{class t{constructor(t,n){this.http=t,this.share=n,this.bookedSlots=[],this.allSlots=[],this.canAttend=!1}ngOnInit(){this.loading=!0,this.http.postToBackend("/admin/dashboard",{adminId:this.share.user}).then(t=>{if(console.log(t),this.loading=!1,7e3==t.statusCode){if(this.mostRecent=t.data.recentMetting,this.bookedSlots=t.data.latest.splice(0,5),this.allSlots=t.data.recent,this.mostRecent){let t,n;t=new Date(this.mostRecent.startTime),n=new Date,this.canAttend=(t-n)/36e5<=1}}else r.a.fire("Error",t.message,"error")}).catch(t=>{this.loading=!1,console.log(t),r.a.fire("Error",t.message,"error")})}deleteSlot(t,n,e,o){e?r.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. So you cannot delete it",showCancelButton:!0}):r.a.fire({icon:"question",title:"Delete this slot?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then(n=>{n.value&&this.http.postToBackend("/admin/slot/delete",{adminId:this.share.user,slotId:t}).then(t=>{console.log(t),t.statusCode?(r.a.fire("Deleted","Slot Deleted Successfully","success"),this.allSlots.splice(o,1)):r.a.fire("Failed","Failed to delete slot","error")}).catch(t=>{console.log(t),r.a.fire("Failed","Failed to delete slot","error")}),console.log(n.value,t)})}}return t.\u0275fac=function(n){return new(n||t)(l.Jb(b.a),l.Jb(s.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-dashboard"]],decls:34,vars:2,consts:[[4,"ngIf"],["class","wrapper",4,"ngIf"],["id","booked-modal",1,"modal"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","border-none"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body","text-center"],[1,"text-dark","text-center"],[1,"modal-footer"],["type","button",1,"btn","btn-sm","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-dark"],["id","not-booked-modal",1,"modal"],[1,"text-center","mt-5","pt-4"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"wrapper"],["class","next-meeting",4,"ngIf"],[1,"slots-container","pt-2"],[1,"d-flex","align-items-end","justify-content-between","border-1"],[1,"heading"],[1,"text-dark","mb-0"],["routerLink","/admin/all-bookings",1,"btn","btn-dark","btn-sm","mt-0"],[1,"slot-section"],[1,"row"],["class","col-lg-3 col-md-4 col-6",4,"ngFor","ngForOf"],["routerLink","/admin/all-slots",1,"btn","btn-dark","btn-sm","mt-0"],[1,"next-meeting"],[1,"text-dark"],[1,"col-md-9"],[1,"card","slot-card","p-5"],[1,"col-md-6"],[1,"text-dark","mb-3"],[1,"text"],[1,"text-dark","mt-4","border-1"],["class","text-right",4,"ngIf"],[1,"text-right"],["routerLink","/admin/video-call",1,"btn","btn-dark","mt-4"],[1,"d-block","text","mx-auto","border-0"],["routerLink","/admin/add-slot",1,"text-700","link"],[1,"col-lg-3","col-md-4","col-6"],[1,"card","slot-card","text-center","pt-5"],[1,"text-light-gray","slot-time","mt-2","mb-2"],[1,"text-center"],[1,"btn","btn-sm","btn-dark","mt-3",3,"routerLink"],[1,"card","slot-card"],[1,"slot-option"],["class","my-tooltip",4,"ngIf"],[1,"my-tooltip",3,"click"],[1,"material-icons","material-icons-rounded"],[1,"my-tooltip-content"],[1,"text-dark","mb-2"],[1,"text-light-gray","slot-time","mb-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-block","text-block--dark"],[1,"text-block"],[1,"my-tooltip"],[3,"routerLink"],[1,"material-icons","material-icons-outlined","text-dark"]],template:function(t,n){1&t&&(l.oc(0,c,5,0,"ng-container",0),l.oc(1,f,23,4,"div",1),l.Ob(2,"div",2),l.Ob(3,"div",3),l.Ob(4,"div",4),l.Ob(5,"div",5),l.Ob(6,"button",6),l.pc(7," \xd7 "),l.Nb(),l.Nb(),l.Ob(8,"div",7),l.Ob(9,"h3",8),l.pc(10,"Delete this slot ?"),l.Nb(),l.Ob(11,"p"),l.pc(12," This slot is already booked. "),l.Kb(13,"br"),l.pc(14," Deleting this will result in refund of the payment. "),l.Nb(),l.Nb(),l.Ob(15,"div",9),l.Ob(16,"button",10),l.pc(17," Yes, Delete it "),l.Nb(),l.Ob(18,"button",11),l.pc(19," No "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(20,"div",12),l.Ob(21,"div",3),l.Ob(22,"div",4),l.Ob(23,"div",5),l.Ob(24,"button",6),l.pc(25," \xd7 "),l.Nb(),l.Nb(),l.Ob(26,"div",7),l.Ob(27,"h3",8),l.pc(28,"Delete this slot ?"),l.Nb(),l.Nb(),l.Ob(29,"div",9),l.Ob(30,"button",10),l.pc(31," Yes, Delete it "),l.Nb(),l.Ob(32,"button",11),l.pc(33," No "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.ec("ngIf",n.loading),l.zb(1),l.ec("ngIf",!n.loading))},directives:[o.k,i.e,o.j],pipes:[o.p,o.d],styles:[".slot-card[_ngcontent-%COMP%]{border-radius:1rem;position:relative;padding-top:5rem;display:flex;flex-direction:column;justify-content:space-between;min-height:15rem;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);margin-bottom:3rem}.slot-option[_ngcontent-%COMP%]{position:absolute;right:0;top:0;cursor:pointer;padding:1.5rem}.slot-option[_ngcontent-%COMP%]   .my-tooltip[_ngcontent-%COMP%]:not(:last-child){margin-right:2rem}.modal[_ngcontent-%COMP%]{padding:2rem;-webkit-animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards}.modal-dialog[_ngcontent-%COMP%]{margin:0 auto;min-height:90vh;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:.8rem;padding:1.5rem 2rem;border:none}.modal-title[_ngcontent-%COMP%]{text-align:center}.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:transparent;color:#000}"]}),t})();var N=e("kGJY");let C=(()=>{class t{constructor(t,n,e,o){this.share=t,this.storage=n,this.http=e,this.router=o}ngOnInit(){this.fixHeader(),$(".hamburger-container").on("click",this.toggleHam),$(".navbar-menu-item").on("click",this.toggleHam)}fixHeader(){$(window).scroll((function(){$(window).scrollTop()>=100?$(".navbar").addClass("fixed"):$(".navbar").removeClass("fixed")}))}toggleHam(){$(".hamburger-container").hasClass("open")?($(".hamburger-container").removeClass("open"),$(".navbar-menu").removeClass("open")):($(".hamburger-container").addClass("open"),$(".navbar-menu").addClass("open"))}logout(){$("#logout-btn").addClass("running"),$("#logout-btn").prop("disabled",!0),this.http.postToBackend("/admin/logout",{}).then(t=>{console.log(t),7e3===t.statusCode?(this.share.token=null,this.share.user=null,this.storage.destroyToken(),this.storage.destroyUser(),$("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),this.router.navigate(["/admin/login"])):($("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),r.a.fire({title:"Some Error Occured",icon:"error",text:t.message}))}).catch(t=>{r.a.fire({title:"Internal server error",icon:"error",text:t.message})})}}return t.\u0275fac=function(n){return new(n||t)(l.Jb(s.a),l.Jb(N.a),l.Jb(b.a),l.Jb(i.c))},t.\u0275cmp=l.Db({type:t,selectors:[["app-header"]],decls:34,vars:0,consts:[["id","navbar",1,"navbar"],[1,"navbar-container"],[1,"navbar-logo"],["routerLink","/"],["src","assets/img/logo.png","alt","logo",1,"navbar-logo-img"],[1,"text-dark"],[1,"navbar-menu-wrapper"],[1,"navbar-menu"],[1,"navbar-menu-item"],["routerLink","/admin"],["routerLink","/admin/all-slots"],["routerLink","/admin/all-bookings"],["routerLink","/admin/blogs"],["routerLink","/admin/users"],["routerLink","/admin/add-slot",1,"btn","btn-primary","btn-big","btn-sm","m-0"],["id","logout-btn",1,"btn","btn-dark","btn-sm","logout-btn","ld-ext-right",3,"click"],["src","assets/img/icons/logout.svg","alt",""],[1,"ld","ld-ring","ld-spin-fast"],[1,"hamburger-container"],[1,"hamburger"]],template:function(t,n){1&t&&(l.Ob(0,"nav",0),l.Ob(1,"div",1),l.Ob(2,"div",2),l.Ob(3,"a",3),l.Kb(4,"img",4),l.Nb(),l.Ob(5,"h4",5),l.pc(6,"Admin Panel"),l.Nb(),l.Nb(),l.Ob(7,"div",6),l.Ob(8,"ul",7),l.Ob(9,"li",8),l.Ob(10,"a",9),l.pc(11,"Dashboard"),l.Nb(),l.Nb(),l.Ob(12,"li",8),l.Ob(13,"a",10),l.pc(14,"All Slots"),l.Nb(),l.Nb(),l.Ob(15,"li",8),l.Ob(16,"a",11),l.pc(17,"All Bookings"),l.Nb(),l.Nb(),l.Ob(18,"li",8),l.Ob(19,"a",12),l.pc(20,"Blogs"),l.Nb(),l.Nb(),l.Ob(21,"li",8),l.Ob(22,"a",13),l.pc(23,"Users"),l.Nb(),l.Nb(),l.Ob(24,"li",8),l.Ob(25,"a",14),l.pc(26,"Add new slot"),l.Nb(),l.Nb(),l.Nb(),l.Ob(27,"button",15),l.Wb("click",(function(){return n.logout()})),l.Kb(28,"img",16),l.Kb(29,"div",17),l.Ob(30,"span"),l.pc(31," Logout "),l.Nb(),l.Nb(),l.Nb(),l.Ob(32,"div",18),l.Kb(33,"div",19),l.Nb(),l.Nb(),l.Nb())},directives:[i.e],styles:['.hamburger-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .3s ease-in-out;display:none}@media (max-width:47.99em){.hamburger-container[_ngcontent-%COMP%]{display:block}}.hamburger[_ngcontent-%COMP%]{position:relative;width:30px;height:4px}.hamburger[_ngcontent-%COMP%], .hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{border-radius:25px;background:#202020;transition:all .3s ease-in-out}.hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{content:"";position:absolute;width:inherit;height:inherit}.hamburger-container[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:translateY(-10px)}.hamburger[_ngcontent-%COMP%]:after{transform:translateY(10px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{transform:translateX(-40px);background:transparent;box-shadow:none}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:rotate(45deg) translate(28px,-28px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:after{transform:rotate(-45deg) translate(28px,28px)}.navbar[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100%;z-index:1050;padding:2rem 0;transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.2s}.navbar-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center}.navbar-logo[_ngcontent-%COMP%]{position:relative;z-index:1000}.navbar-logo-img[_ngcontent-%COMP%]{width:6rem}.navbar-menu[_ngcontent-%COMP%]{list-style:none;display:flex;transition:all .3s cubic-bezier(.45,.19,.13,1.26)}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:4rem}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;text-transform:capitalize;font-weight:700;transition:all .3s cubic-bezier(.25,.46,.45,.94);font-size:1.4rem;font-family:Montserrat}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1ac293}@media (max-width:61.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.6rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]{margin:2rem 0}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:0}}@media (max-width:47.99em){.navbar-menu[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;position:fixed;left:0;top:0;width:100%;background-color:#fff;opacity:0;transform:scale(.6);visibility:hidden}.navbar-menu.open[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:scale(1)}}.dashboard-icon[_ngcontent-%COMP%], .navbar.fixed[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.dashboard-icon[_ngcontent-%COMP%]{height:5rem;cursor:pointer;z-index:50;width:5rem;border-radius:50%;padding:.2rem;display:flex;align-items:center;justify-content:center}.dashboard-icon[_ngcontent-%COMP%], .dashboard-lg[_ngcontent-%COMP%]{position:relative}@media (max-width:47.99em){.dashboard-lg[_ngcontent-%COMP%]{display:none}}.dashboard-sm[_ngcontent-%COMP%]{display:none;position:absolute;right:4em}@media (max-width:47.99em){.dashboard-sm[_ngcontent-%COMP%]{display:block}}@media (max-width:35.99em){.dashboard-sm[_ngcontent-%COMP%]{right:4.5em}}.dashboard-menu[_ngcontent-%COMP%]{min-width:15rem;background-color:#fff;box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);padding:1rem;border-radius:1rem;visibility:hidden;opacity:0;transform:translateY(1rem);transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.1s;position:absolute;right:0;top:110%}.dashboard-menu.show[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:translateY(0)}.dashboard-link[_ngcontent-%COMP%]{padding:1rem;font-weight:500;cursor:pointer;display:block;transition:all .3s cubic-bezier(.25,.46,.45,.94)}.dashboard-link[_ngcontent-%COMP%]:hover{background-color:#dfe6f6}.navbar-logo[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-logo-img[_ngcontent-%COMP%]{height:4rem;width:auto;margin-right:1rem}.navbar-container[_ngcontent-%COMP%]{padding:0 3vw}.navbar-menu[_ngcontent-%COMP%]{align-items:center}.navbar-menu-wrapper[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{z-index:5;margin:0 0 0 2rem;position:relative;justify-content:center}@media (max-width:47.99em){.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{position:absolute;right:calc(40px + 3vw)}}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;margin-right:.8rem;z-index:5;-webkit-filter:invert(1);filter:invert(1);transition:all .3s cubic-bezier(.25,.46,.45,.94)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;z-index:5}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   .ld[_ngcontent-%COMP%]{z-index:20}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:after{height:100%;transform-origin:bottom;z-index:0;transform:scaleY(0) scaleX(1)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover:after{transform:scaleY(1) scaleX(1)}.navbar.fixed[_ngcontent-%COMP%]{padding:1rem 0}@media (max-width:47.99em){.navbar.fixed[_ngcontent-%COMP%]{padding:2rem 0}}.navbar.fixed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{background-color:#202020}.navbar.fixed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}@media (max-width:47.99em){.btn-big[_ngcontent-%COMP%]{padding:1.8rem 3rem!important;font-size:2rem!important}}']}),t})();const M=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Db({type:t,selectors:[["app-admin-panel"]],decls:5,vars:0,consts:[[1,"dash","bg-light"],[1,"container"],[1,"dash-container"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.Kb(1,"app-header"),l.Ob(2,"div",1),l.Ob(3,"div",2),l.Kb(4,"router-outlet"),l.Nb(),l.Nb(),l.Nb())},directives:[C,i.g],styles:[".dash[_ngcontent-%COMP%]{min-height:100vh}.dash-container[_ngcontent-%COMP%]{padding:15vh 0 5vh}@media (max-width:47.99em){.dash-container[_ngcontent-%COMP%]{padding-top:15vh}}"]}),t})(),children:[{path:"",component:v},{path:"booking-details/:id",loadChildren:()=>e.e(17).then(e.bind(null,"PqMW")).then(t=>t.BookingDetailsModule)},{path:"all-bookings",loadChildren:()=>e.e(13).then(e.bind(null,"N9uA")).then(t=>t.AllBookingsModule)},{path:"users",loadChildren:()=>e.e(18).then(e.bind(null,"rZsv")).then(t=>t.UsersModule)},{path:"all-slots",loadChildren:()=>e.e(14).then(e.bind(null,"fEIi")).then(t=>t.AllSlotsModule)},{path:"add-slot",loadChildren:()=>Promise.all([e.e(3),e.e(11)]).then(e.bind(null,"pBEy")).then(t=>t.AddSlotModule)},{path:"video-call",loadChildren:()=>e.e(19).then(e.bind(null,"XihW")).then(t=>t.VideoCallModule)},{path:"blogs",loadChildren:()=>Promise.all([e.e(2),e.e(16)]).then(e.bind(null,"oS7f")).then(t=>t.BlogsModule)},{path:"blog/:id",loadChildren:()=>e.e(15).then(e.bind(null,"XfPR")).then(t=>t.BlogPostModule)},{path:"blogs/post-new",loadChildren:()=>Promise.all([e.e(4),e.e(9)]).then(e.bind(null,"106v")).then(t=>t.PostBlogModule)}]}];let P=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[i.f.forChild(M)],i.f]}),t})(),x=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[o.b,P]]}),t})()}}]);