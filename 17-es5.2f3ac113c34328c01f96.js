function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{PqMW:function(t,e,n){"use strict";n.r(e),n.d(e,"BookingDetailsModule",(function(){return g}));var o=n("ofXK"),l=n("PSD3"),i=n.n(l),s=n("fXoL"),a=n("tyNb"),b=n("CNll"),c=n("N+K7");function r(t,e){1&t&&(s.Mb(0),s.Ob(1,"div",3),s.Ob(2,"span",4),s.pc(3," Getting booking details... "),s.Kb(4,"div",5),s.Nb(),s.Nb(),s.Lb())}var u=function(){return["/admin/video-call"]};function d(t,e){if(1&t&&(s.Ob(0,"div",6),s.Ob(1,"div",7),s.Ob(2,"div",8),s.Ob(3,"h5",9),s.pc(4,"Customer details"),s.Nb(),s.Ob(5,"p"),s.pc(6,"Name"),s.Nb(),s.Ob(7,"p",10),s.pc(8),s.Nb(),s.Ob(9,"p"),s.pc(10,"Phone Number"),s.Nb(),s.Ob(11,"p",10),s.pc(12),s.Nb(),s.Ob(13,"p"),s.pc(14,"Consulting Type"),s.Nb(),s.Ob(15,"p",10),s.pc(16),s.Zb(17,"titlecase"),s.Nb(),s.Ob(18,"p"),s.pc(19,"Reason for meeting"),s.Nb(),s.Ob(20,"p",10),s.pc(21),s.Nb(),s.Nb(),s.Ob(22,"div",8),s.Ob(23,"h5",9),s.pc(24,"Slot details"),s.Nb(),s.Ob(25,"h5"),s.pc(26),s.Zb(27,"date"),s.Nb(),s.Ob(28,"h4",11),s.pc(29),s.Zb(30,"date"),s.Zb(31,"date"),s.Nb(),s.Ob(32,"p",12),s.pc(33,"Duration of the meeting"),s.Nb(),s.Ob(34,"p",13),s.pc(35),s.Nb(),s.Nb(),s.Ob(36,"div",8),s.Ob(37,"h5",9),s.pc(38,"Payment details"),s.Nb(),s.Ob(39,"div",14),s.Ob(40,"div",15),s.Ob(41,"p",16),s.pc(42,"Total Amount Paid:"),s.Nb(),s.Ob(43,"h2"),s.pc(44),s.Nb(),s.Nb(),s.Nb(),s.Kb(45,"div",17),s.Nb(),s.Nb(),s.Ob(46,"div",18),s.Ob(47,"div",19),s.Ob(48,"div",14),s.Ob(49,"a",20),s.pc(50," Attend Meeting"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t){var n=s.Yb();s.zb(8),s.qc(null==n.slot?null:n.slot.bookingDetails.full_name),s.zb(4),s.qc(null==n.slot?null:n.slot.bookingDetails.mobile_no),s.zb(4),s.qc(s.ac(17,10,null==n.slot?null:n.slot.bookingDetails.counsulting_type)),s.zb(5),s.qc(null==n.slot?null:n.slot.bookingDetails.reason),s.zb(5),s.rc(" ",s.bc(27,12,null==n.slot?null:n.slot.date,"MMMM d,y")," "),s.zb(3),s.sc(" ",s.bc(30,15,null==n.slot?null:n.slot.startTime,"h:mm a")," - ",s.bc(31,18,null==n.slot?null:n.slot.endTime,"h:mm a")," "),s.zb(6),s.rc(" ",null==n.slot?null:n.slot.duration," min"),s.zb(9),s.rc("$",null==n.slot?null:n.slot.bookingDetails.amount_paid,""),s.zb(5),s.ec("routerLink",s.gc(21,u))}}var p,f,m=[{path:"",component:(p=function(){function t(e,n,o,l){_classCallCheck(this,t),this.route=e,this.share=n,this.http=o,this.router=l}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loading=!0,this.route.params.subscribe((function(e){t.http.postToBackend("/admin/slot/detail",{adminId:t.share.user,slotId:e.id}).then((function(e){t.loading=!1,console.log(e),7e3===e.statusCode?t.slot=e.data:i.a.fire("Error",e.message,"error")})).catch((function(e){t.loading=!1,console.log(e),i.a.fire({icon:"error",title:"Can't process this request",text:e.message})}))}))}},{key:"cancelBooked",value:function(t,e){var n=this;i.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. Removing it will require refund for the slot. Do you still want to delete it?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then((function(o){o.value&&n.http.postToBackend("/admin/refund",{adminId:n.share.user,slotId:t,transactionId:e}).then((function(t){console.log(t),7e3===t.statusCode?(i.a.fire("Deleted","Slot Deleted Successfully","success"),n.router.navigate(["admin/all-bookings"])):i.a.fire("Sorry ",t.message,"error")})).catch((function(t){console.log(t),i.a.fire("Failed to delete the slot",t.message,"error")}))}))}}]),t}(),p.\u0275fac=function(t){return new(t||p)(s.Jb(a.a),s.Jb(b.a),s.Jb(c.a),s.Jb(a.c))},p.\u0275cmp=s.Db({type:p,selectors:[["app-booking-details"]],decls:4,vars:2,consts:[[1,"text-dark","mb-4"],[4,"ngIf"],["class","booking-details",4,"ngIf"],[1,"text-center","mt-5","pt-4"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"booking-details"],[1,"row","mt-5"],[1,"col-md-4"],[1,"text-dark","mb-5"],[1,"text"],[1,"text-dark"],[1,"mb-2","mt-4"],[1,"text-block","text-block--dark","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"content"],[1,"text","mb-1"],[1,"d-flex","align-items-center","justify-content-between"],[1,"row"],[1,"col-lg-6","col-md-8","col-sm-10"],[1,"btn","btn-primary",3,"routerLink"]],template:function(t,e){1&t&&(s.Ob(0,"h2",0),s.pc(1,"Booking details"),s.Nb(),s.oc(2,r,5,0,"ng-container",1),s.oc(3,d,51,22,"div",2)),2&t&&(s.zb(2),s.ec("ngIf",e.loading),s.zb(1),s.ec("ngIf",!e.loading))},directives:[o.k,a.e],pipes:[o.p,o.d],styles:[""]}),p)}],g=((f=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:f}),f.\u0275inj=s.Gb({factory:function(t){return new(t||f)},imports:[[o.b,a.f.forChild(m)]]}),f)}}]);