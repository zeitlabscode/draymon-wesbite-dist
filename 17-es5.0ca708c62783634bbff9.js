function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{PqMW:function(t,e,o){"use strict";o.r(e),o.d(e,"BookingDetailsModule",(function(){return p}));var n,l,i=o("ofXK"),s=o("PSD3"),a=o.n(s),c=o("fXoL"),b=o("tyNb"),r=o("dz5x"),u=o("N+K7"),d=function(){return["/admin/video-call"]},f=[{path:"",component:(n=function(){function t(e,o,n,l){_classCallCheck(this,t),this.route=e,this.share=o,this.http=n,this.router=l}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(e){t.http.postToBackend("/admin/slot/detail",{adminId:t.share.user,slotId:e.id}).then((function(e){console.log(e),7e3===e.statusCode&&(t.slot=e.data)})).catch((function(t){console.log(t),a.a.fire({icon:"error",title:"Can't process this request",text:t.message})}))}))}},{key:"cancelBooked",value:function(t,e){var o=this;a.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. Removing it will require refund for the slot. Do you still want to delete it?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then((function(n){n.value&&o.http.postToBackend("/admin/refund",{adminId:o.share.user,slotId:t,transactionId:e}).then((function(t){console.log(t),7e3===t.statusCode?(a.a.fire("Deleted","Slot Deleted Successfully","success"),o.router.navigate(["admin/all-bookings"])):a.a.fire("Sorry ",t.message,"error")})).catch((function(t){console.log(t),a.a.fire("Failed to delete the slot",t.message,"error")}))}))}}]),t}(),n.\u0275fac=function(t){return new(t||n)(c.Jb(b.a),c.Jb(r.a),c.Jb(u.a),c.Jb(b.c))},n.\u0275cmp=c.Db({type:n,selectors:[["app-booking-details"]],decls:55,vars:22,consts:[[1,"text-dark","mb-4"],[1,"booking-details"],[1,"row","mt-5"],[1,"col-md-4"],[1,"text-dark","mb-5"],[1,"text"],[1,"text-dark"],[1,"mb-2","mt-4"],[1,"text-block","text-block--dark","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"content"],[1,"text","mb-1"],[1,"d-flex","align-items-center","justify-content-between"],[1,"row"],[1,"col-lg-6","col-md-8","col-sm-10"],[1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"h2",0),c.oc(1,"Booking details"),c.Nb(),c.Ob(2,"div",1),c.Ob(3,"div",2),c.Ob(4,"div",3),c.Ob(5,"h5",4),c.oc(6,"Customer details"),c.Nb(),c.Ob(7,"p"),c.oc(8,"Name"),c.Nb(),c.Ob(9,"p",5),c.oc(10),c.Nb(),c.Ob(11,"p"),c.oc(12,"Phone Number"),c.Nb(),c.Ob(13,"p",5),c.oc(14),c.Nb(),c.Ob(15,"p"),c.oc(16,"Consulting Type"),c.Nb(),c.Ob(17,"p",5),c.oc(18),c.Zb(19,"titlecase"),c.Nb(),c.Ob(20,"p"),c.oc(21,"Reason for meeting"),c.Nb(),c.Ob(22,"p",5),c.oc(23),c.Nb(),c.Nb(),c.Ob(24,"div",3),c.Ob(25,"h5",4),c.oc(26,"Slot details"),c.Nb(),c.Ob(27,"h5"),c.oc(28),c.Zb(29,"date"),c.Nb(),c.Ob(30,"h4",6),c.oc(31),c.Zb(32,"date"),c.Zb(33,"date"),c.Nb(),c.Ob(34,"p",7),c.oc(35,"Duration of the meeting"),c.Nb(),c.Ob(36,"p",8),c.oc(37),c.Nb(),c.Nb(),c.Ob(38,"div",3),c.Ob(39,"h5",4),c.oc(40,"Payment details"),c.Nb(),c.Ob(41,"div",9),c.Ob(42,"div",10),c.Ob(43,"p",11),c.oc(44,"Total Amount Paid:"),c.Nb(),c.Ob(45,"h2"),c.oc(46),c.Nb(),c.Nb(),c.Nb(),c.Kb(47,"div",12),c.Nb(),c.Nb(),c.Ob(48,"div",13),c.Ob(49,"div",14),c.Ob(50,"div",9),c.Ob(51,"a",15),c.oc(52," Attend Meeting"),c.Nb(),c.Ob(53,"button",16),c.Wb("click",(function(){return e.cancelBooked(null==e.slot?null:e.slot.id,null==e.slot?null:e.slot.bookingDetails.payment_id)})),c.oc(54,"Cancel Meeting"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.zb(10),c.pc(null==e.slot?null:e.slot.bookingDetails.full_name),c.zb(4),c.pc(null==e.slot?null:e.slot.bookingDetails.mobile_no),c.zb(4),c.pc(c.ac(19,10,null==e.slot?null:e.slot.bookingDetails.counsulting_type)),c.zb(5),c.pc(null==e.slot?null:e.slot.bookingDetails.reason),c.zb(5),c.qc(" ",c.bc(29,12,null==e.slot?null:e.slot.date,"MMMM d,y")," "),c.zb(3),c.rc(" ",c.bc(32,15,null==e.slot?null:e.slot.startTime,"h:mm a")," - ",c.bc(33,18,null==e.slot?null:e.slot.endTime,"h:mm a")," "),c.zb(6),c.qc(" ",null==e.slot?null:e.slot.duration," min"),c.zb(9),c.qc("$",null==e.slot?null:e.slot.bookingDetails.amount_paid,""),c.zb(5),c.ec("routerLink",c.gc(21,d)))},directives:[b.e],pipes:[i.p,i.d],styles:[""]}),n)}],p=((l=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:l}),l.\u0275inj=c.Gb({factory:function(t){return new(t||l)},imports:[[i.b,b.f.forChild(f)]]}),l)}}]);