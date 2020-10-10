function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{g9RZ:function(e,t,n){"use strict";n.r(t),n.d(t,"NewMeetingModule",(function(){return F}));var o=n("ofXK"),r=n("3Pt+"),a=n("PSD3"),i=n.n(a),l=n("VFot"),c=n("fXoL"),s=n("N+K7"),u=n("dz5x"),b=n("tyNb"),d=n("IvIE"),m=["calendar"];function f(e,t){1&e&&(c.Ob(0,"p"),c.oc(1," Please select consulting type "),c.Nb())}function p(e,t){1&e&&(c.Ob(0,"p"),c.oc(1," Please enter a reason for meeting. "),c.Nb())}function h(e,t){if(1&e){var n=c.Pb();c.Ob(0,"div",17),c.Ob(1,"h3",18),c.oc(2," Book new meeting "),c.Nb(),c.Ob(3,"form",19),c.Ob(4,"div",20),c.Ob(5,"div",21),c.Ob(6,"div",22),c.Ob(7,"div",23),c.nc(8,f,2,0,"p",24),c.Nb(),c.Ob(9,"select",25),c.Ob(10,"option",26),c.oc(11,"Select the consulting type"),c.Nb(),c.Ob(12,"option",27),c.oc(13,"Mentoring"),c.Nb(),c.Ob(14,"option",28),c.oc(15,"Business Advice"),c.Nb(),c.Nb(),c.Ob(16,"div",23),c.nc(17,p,2,0,"p",24),c.Nb(),c.Kb(18,"textarea",29),c.Nb(),c.Nb(),c.Nb(),c.Ob(19,"div",30),c.Ob(20,"button",31),c.Wb("click",(function(){return c.jc(n),c.Yb().goNext()})),c.oc(21," Next "),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&e){var o=c.Yb();c.zb(3),c.ec("formGroup",o.form),c.zb(5),c.ec("ngIf",!o.form.get("counsultingType").valid&&o.form.get("counsultingType").touched||!o.form.get("counsultingType").valid&&!o.firstTabValid),c.zb(9),c.ec("ngIf",!o.form.get("reason").valid&&o.form.get("reason").touched||!o.form.get("reason").valid&&!o.firstTabValid)}}function v(e,t){1&e&&(c.Ob(0,"p",43),c.oc(1," Select your slot for meeting from below available slots. "),c.Nb())}function g(e,t){1&e&&(c.Ob(0,"div",23),c.Ob(1,"p"),c.oc(2," Sorry, currently we don't have any slots available for meetings. Please check after sometime. "),c.Nb(),c.Nb())}function y(e,t){if(1&e){var n=c.Pb();c.Ob(0,"button",44),c.Wb("click",(function(){return c.jc(n),c.Yb(2).showDay=!1})),c.oc(1," Go Back "),c.Nb()}}function O(e,t){if(1&e&&c.Kb(0,"full-calendar",45),2&e){var n=c.Yb(2);c.ec("options",n.calendarOptionsMonth)}}function k(e,t){if(1&e&&c.Kb(0,"full-calendar",45),2&e){var n=c.Yb(2);c.ec("options",n.calendarOptionsDay)}}function w(e,t){if(1&e){var n=c.Pb();c.Ob(0,"div",32),c.Ob(1,"div",33),c.Ob(2,"a",34),c.oc(3," View Plans "),c.Nb(),c.Ob(4,"button",35),c.Wb("click",(function(){return c.jc(n),c.Yb().goPrev()})),c.oc(5," Change Meeting Details "),c.Nb(),c.Nb(),c.Ob(6,"div",36),c.Ob(7,"div"),c.Ob(8,"h3",37),c.oc(9," Select the meeting from the given slots "),c.Nb(),c.nc(10,v,2,0,"p",38),c.nc(11,g,3,0,"div",39),c.Nb(),c.nc(12,y,2,0,"button",40),c.Nb(),c.Ob(13,"div",41),c.nc(14,O,1,1,"full-calendar",42),c.nc(15,k,1,1,"full-calendar",42),c.Nb(),c.Nb()}if(2&e){var o=c.Yb();c.zb(10),c.ec("ngIf",o.allEvents.length),c.zb(1),c.ec("ngIf",!o.allEvents.length),c.zb(1),c.ec("ngIf",o.showDay),c.zb(2),c.ec("ngIf",!o.showDay),c.zb(1),c.ec("ngIf",o.showDay)}}function N(e,t){if(1&e){var n=c.Pb();c.Ob(0,"div",32),c.Ob(1,"div",46),c.Ob(2,"div",47),c.Ob(3,"h3",10),c.oc(4," Confirm your details before payment "),c.Nb(),c.Nb(),c.Ob(5,"div",48),c.Ob(6,"button",35),c.Wb("click",(function(){return c.jc(n),c.Yb().goPrev()})),c.oc(7," Change Slot "),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"form"),c.Ob(9,"div",49),c.Ob(10,"div",21),c.Ob(11,"p"),c.oc(12,"Name"),c.Nb(),c.Ob(13,"p",43),c.oc(14),c.Nb(),c.Ob(15,"p"),c.oc(16,"Phone Number"),c.Nb(),c.Ob(17,"p",43),c.oc(18),c.Nb(),c.Ob(19,"p"),c.oc(20,"Consulting Type"),c.Nb(),c.Ob(21,"p",43),c.oc(22),c.Zb(23,"titlecase"),c.Nb(),c.Ob(24,"p"),c.oc(25,"Reason for meeting"),c.Nb(),c.Ob(26,"p",43),c.oc(27),c.Nb(),c.Ob(28,"p"),c.oc(29,"Duration of the meeting"),c.Nb(),c.Ob(30,"p",43),c.oc(31),c.Nb(),c.Ob(32,"div",50),c.Ob(33,"p"),c.oc(34,"Slot Details"),c.Nb(),c.Nb(),c.Ob(35,"p",43),c.oc(36),c.Zb(37,"date"),c.Nb(),c.Ob(38,"p",51),c.oc(39),c.Zb(40,"date"),c.Zb(41,"date"),c.Nb(),c.Nb(),c.Ob(42,"div",21),c.Ob(43,"h5",52),c.oc(44," Your payment details "),c.Nb(),c.Ob(45,"div",53),c.Ob(46,"div",54),c.Ob(47,"p",55),c.oc(48," Total Amount: "),c.Nb(),c.Ob(49,"h2"),c.oc(50),c.Nb(),c.Nb(),c.Ob(51,"a",34),c.oc(52," View Plans "),c.Nb(),c.Nb(),c.Ob(53,"h6",56),c.oc(54," Enter card number to proceed payment "),c.Nb(),c.Kb(55,"ngx-stripe-card",57),c.Ob(56,"div",58),c.Ob(57,"button",59),c.Wb("click",(function(){return c.jc(n),c.Yb().createToken()})),c.Kb(58,"div",60),c.oc(59," Pay "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&e){var o=c.Yb();c.zb(14),c.qc(" ",o.form.get("userFullName").value," "),c.zb(4),c.qc(" ",o.form.get("mobileNo").value," "),c.zb(4),c.qc(" ",c.ac(23,11,o.form.get("counsultingType").value)," "),c.zb(5),c.qc(" ",o.form.get("reason").value," "),c.zb(4),c.qc(" ",null==o.currentEvent?null:o.currentEvent.duration," mins "),c.zb(5),c.qc(" ",c.bc(37,13,null==o.currentEvent?null:o.currentEvent.date,"mediumDate")," "),c.zb(3),c.rc(" ",c.bc(40,16,null==o.currentEvent?null:o.currentEvent.start,"shortTime")," to ",c.bc(41,19,null==o.currentEvent?null:o.currentEvent.end,"shortTime")," "),c.zb(11),c.qc(" $",o.form.get("amountPaid").value," "),c.zb(5),c.ec("options",o.cardOptions)("elementsOptions",o.elementsOptions)}}var C,P=((C=function(){function e(t,n,o,a,i){_classCallCheck(this,e),this.http=t,this.share=n,this.fb=o,this.stripeService=a,this.router=i,this.cardOptions={style:{base:{iconColor:"#666EE8",color:"#31325F",fontWeight:"300",fontFamily:'"Inter", Helvetica, sans-serif',fontSize:"18px","::placeholder":{color:"#CFD7E0"}}}},this.elementsOptions={locale:"en"},this.showPaymentButton=!1,this.selectedDate="",this.singleDayEvents=[],this.formValid=!0,this.form=new r.e({userId:new r.c(this.share.user.id,{validators:[r.p.required]}),userEmail:new r.c(this.share.user.email,{validators:[r.p.required]}),userFullName:new r.c(this.share.user.fullName,{validators:[r.p.required]}),mobileNo:new r.c(this.share.user.mobileNo,{validators:[r.p.required]}),counsultingType:new r.c(null,{validators:[r.p.required]}),reason:new r.c(null,{validators:[r.p.required]}),duration:new r.c(60,{validators:[r.p.required]}),amountPaid:new r.c(99,{validators:[r.p.required]}),paymentId:new r.c(null,{validators:[r.p.required]}),slotId:new r.c(null,{validators:[r.p.required]})}),this.allEvents=[],this.calendarOptionsMonth={initialView:"dayGridMonth",events:this.allEvents,dateClick:this.handleDateClick.bind(this),eventClick:this.handleEventClick.bind(this),eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!0},displayEventEnd:!0},this.calendarOptionsDay={initialView:"timeGridDay",initialDate:this.selectedDate,eventClick:this.handleEventClick.bind(this),events:this.allEvents,eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!0},displayEventEnd:!0},this.tab=0,this.firstTabValid=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.stripeTest=this.fb.group({name:["",[r.p.required]]}),this.initConfig(),console.log(this.form.get("userFullName").value),this.showDay=!1,this.http.postToBackend("/users/slot/active/unbooked",{userId:this.share.user.id}).then((function(t){console.log(t),console.log("data from server",t.data),e.allEvents=t.data.map((function(e){return{id:e.id,title:e.booked?e.title+" (Booked)":e.title,date:e.date,start:e.startTime,end:e.endTime,allDay:!1,duration:e.duration}})),console.log(e.allEvents),e.calendarOptionsMonth.events=e.allEvents,e.calendarOptionsDay.events=e.allEvents})).catch((function(e){console.log(e)}))}},{key:"formatDate",value:function(e){var t=new Date(e),n=""+(t.getMonth()+1),o=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[r,n,o].join("-")}},{key:"formatTime",value:function(e){var t=new Date(e);return console.log(t.toTimeString()),t.toTimeString()}},{key:"goNext",value:function(){console.log(this.form.value),0==this.tab?(this.firstTabValid=!0,this.isFormValid()?this.tab++:this.firstTabValid=!1):this.tab++,this.firstTabValid=!1}},{key:"goPrev",value:function(){this.tab--}},{key:"isFormValid",value:function(){return this.firstTabValid=!0,!(!this.form.get("counsultingType").valid||!this.form.get("reason").valid)}},{key:"handleDateClick",value:function(e){this.selectedDate=e.dateStr,this.calendarOptionsDay.initialDate=this.selectedDate,console.log(this.selectedDate)}},{key:"handleEventClick",value:function(e){var t=this;this.currentEventID=e.event._def.publicId,this.currentEvent=this.allEvents.find((function(e){return t.currentEventID==e.id})),console.log("Current Event",this.currentEvent),this.confirmSlot()}},{key:"confirmSlot",value:function(){$("#slot-modal").modal("toggle")}},{key:"bookSlot",value:function(){this.form.patchValue({slotId:this.currentEventID}),i.a.fire({icon:"success",title:"Slot Selected",text:"You can also change this slot before payment"}),console.log(this.currentEvent),this.confirmSlot(),this.tab++}},{key:"initConfig",value:function(){var e=this;this.payPalConfig={currency:"USD",clientId:"AYrkJjXXpsLmUPAnX0Uu5KZUBc0t7Pr7y_LAAmVihyMpgfPFTnWem-MFr4XOleV6ltQZbjfvbZr2lK9u",createOrderOnClient:function(t){return{intent:"CAPTURE",purchase_units:[{amount:{currency_code:"USD",value:""+e.form.value.amountPaid,breakdown:{item_total:{currency_code:"USD",value:""+e.form.value.amountPaid}}},items:[{name:"Slot Booking",quantity:"1",category:"DIGITAL_GOODS",unit_amount:{currency_code:"USD",value:""+e.form.value.amountPaid}}]}]}},onApprove:function(e,t){t.order.get().then((function(e){}))},onClientAuthorization:function(t){console.log("onClientAuthorization - you should probably inform your server about completed transaction at this point",t),e.form.patchValue({captureId:t.purchase_units[0].payments.captures[0].id,paymentEmail:t.payer.email_address}),e.showPaymentButton=!1,e.http.postToBackend("/users/slot/booked",e.form.value).then((function(t){console.log(t),alert(t.message),e.form.reset()})).catch((function(e){console.log(e)}))},onCancel:function(t,n){e.showPaymentButton=!1},onError:function(t){e.showPaymentButton=!1},onClick:function(e,t){}}}},{key:"createToken",value:function(){var e=this;console.log("submit",this.form.value.userFullName);var t=this.form.value.userFullName;$("#pay-btn").addClass("running"),$("#pay-btn").prop("disabled",!0),this.stripeService.createToken(this.card.element,{name:t}).subscribe((function(t){t.token?(console.log(t.token.id),e.http.postToBackend("/users/stripe-pay",{token:t.token.id,amount:e.form.value.amountPaid,slotDuration:e.form.value.duration,fullName:e.form.value.fullName,email:e.form.value.email}).then((function(t){console.log(t),7e3===t.statusCode?(e.form.patchValue({paymentId:t.data}),e.http.postToBackend("/users/slot/booked",e.form.value).then((function(t){console.log(t),7e3===t.statusCode?($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),i.a.fire("Payment Successful","Slot Booked Successfully","success"),e.form.reset(),e.router.navigate(["/dashboard/your-meetings"])):($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),i.a.fire("Payment Failed",t.message,"error"))})).catch((function(e){$("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),console.log(e),i.a.fire("Payment Failed",t.message,"error")}))):($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),i.a.fire("Payment Failed",t.message,"error"))})).catch((function(e){console.log(e),$("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),i.a.fire("Payment Failed",e.message,"error")}))):t.error?(console.log(t.error.message),$("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),i.a.fire("Payment Failed",t.error.message,"error")):($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),i.a.fire("Internal Server Error","Please try again","error"))}))}}]),e}()).\u0275fac=function(e){return new(e||C)(c.Jb(s.a),c.Jb(u.a),c.Jb(r.b),c.Jb(l.c),c.Jb(b.c))},C.\u0275cmp=c.Db({type:C,selectors:[["app-new-meeting"]],viewQuery:function(e,t){var n;1&e&&(c.tc(l.b,!0),c.tc(m,!0)),2&e&&(c.ic(n=c.Xb())&&(t.card=n.first),c.ic(n=c.Xb())&&(t.calendarRef=n.first))},decls:39,vars:19,consts:[[1,"form-container",3,"ngSwitch"],["class","form-tab form-tab-1",4,"ngSwitchCase"],["class","form-tab form-tab-2",4,"ngSwitchCase"],["id","slot-modal",1,"modal"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","text-dark","text-center"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body","text-center"],[1,"text-dark"],[1,"text","mb-2"],[1,"text-700"],[1,"text","mb-5"],[1,"modal-footer"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-dark"],[1,"form-tab","form-tab-1"],[1,"text-dark","text-center"],[3,"formGroup"],[1,"row","justify-content-center","mt-5"],[1,"col-md-6"],[1,"form"],[1,"val"],[4,"ngIf"],["formControlName","counsultingType","name","type","id","",1,"form-input"],["value","null"],["value","Mentoring"],["value","Business Advice"],["formControlName","reason","id","","cols","30","rows","5","placeholder","Please enter the reason for this session",1,"form-input"],[1,"text-center"],[1,"btn","btn-dark","btn-sm",3,"click"],[1,"form-tab","form-tab-2"],[1,"d-flex","justify-content-between","align-items-center","text-right"],["href","#","data-toggle","modal","data-target","#cost-modal",1,"link","text-sm","text-500","text"],[1,"btn","btn-dark","btn-sm","mt-0",3,"click"],[1,"d-flex","align-items-center","justify-content-between","mb-5"],[1,"text-dark","text-center","mb-4"],["class","text",4,"ngIf"],["class","val",4,"ngIf"],["class","btn btn-sm btn-dark mt-0",3,"click",4,"ngIf"],[1,"calendar-wrap"],[3,"options",4,"ngIf"],[1,"text"],[1,"btn","btn-sm","btn-dark","mt-0",3,"click"],[3,"options"],[1,"row"],[1,"col-9"],[1,"col-3","text-right"],[1,"row","mt-5"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text","mt-2"],[1,"text-dark","mb-5"],[1,"d-flex","justify-content-between","align-items-center"],[1,"content"],[1,"text","mb-1"],[1,"text-dark","mb-4"],[3,"options","elementsOptions"],[1,"text-right","mt-2"],["type","button","id","pay-btn",1,"btn","btn-primary","ld-ext-right",3,"click"],[1,"ld","ld-ring","ld-spin-fast"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.nc(1,h,22,3,"div",1),c.nc(2,w,16,5,"div",2),c.nc(3,N,60,22,"div",2),c.Nb(),c.Ob(4,"div",3),c.Ob(5,"div",4),c.Ob(6,"div",5),c.Ob(7,"div",6),c.Ob(8,"h4",7),c.oc(9,"Save this slot ?"),c.Nb(),c.Ob(10,"button",8),c.oc(11,"\xd7"),c.Nb(),c.Nb(),c.Ob(12,"div",9),c.Ob(13,"h3",10),c.oc(14),c.Nb(),c.Ob(15,"p",11),c.Ob(16,"span",12),c.oc(17,"Date: "),c.Nb(),c.oc(18),c.Zb(19,"date"),c.Nb(),c.Ob(20,"p",11),c.Ob(21,"span",12),c.oc(22,"Time: "),c.Nb(),c.oc(23),c.Zb(24,"date"),c.Zb(25,"date"),c.Nb(),c.Ob(26,"p",13),c.Ob(27,"span",12),c.oc(28,"Duration: "),c.Nb(),c.oc(29),c.Nb(),c.Ob(30,"h5"),c.oc(31," Amount to be paid for the meeting: "),c.Ob(32,"span",10),c.oc(33),c.Nb(),c.Nb(),c.Nb(),c.Ob(34,"div",14),c.Ob(35,"button",15),c.Wb("click",(function(){return t.bookSlot()})),c.oc(36,"Yes"),c.Nb(),c.Ob(37,"button",16),c.oc(38,"No"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.ec("ngSwitch",t.tab),c.zb(1),c.ec("ngSwitchCase",0),c.zb(1),c.ec("ngSwitchCase",1),c.zb(1),c.ec("ngSwitchCase",2),c.zb(11),c.qc(" ",null==t.currentEvent?null:t.currentEvent.title," "),c.zb(4),c.qc(" ",c.bc(19,10,null==t.currentEvent?null:t.currentEvent.date,"MMMM d, y")," "),c.zb(5),c.rc(" ",c.bc(24,13,null==t.currentEvent?null:t.currentEvent.start,"shortTime")," - ",c.bc(25,16,null==t.currentEvent?null:t.currentEvent.end,"shortTime")," "),c.zb(6),c.qc(" ",null==t.currentEvent?null:t.currentEvent.duration," minutes "),c.zb(4),c.qc("$",t.form.get("amountPaid").value,""))},directives:[o.l,o.m,r.r,r.k,r.f,o.k,r.o,r.j,r.d,r.m,r.q,r.a,d.a,r.l,l.b],pipes:[o.d,o.p],styles:["input[type=file][_ngcontent-%COMP%]{display:none}.form[_ngcontent-%COMP%]{max-width:45rem;width:100%;text-align:center}.form-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;min-height:100vh;overflow:hidden;background-color:#dfe6f6;padding:15rem 0 5rem;position:relative}@media (max-width:47.99em){.form-wrapper[_ngcontent-%COMP%]{padding-top:20rem}}.form-header[_ngcontent-%COMP%]{text-align:center;opacity:0;position:relative;z-index:10;-webkit-animation:fade_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:fade_up .3s cubic-bezier(.25,.46,.45,.94) forwards;-webkit-animation-delay:.2s;animation-delay:.2s}.form-card[_ngcontent-%COMP%]{box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);border-radius:1rem;padding:3rem 3rem 4rem;background-color:#fff;position:relative;z-index:5;-webkit-animation:fade_up .5s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_up .5s cubic-bezier(.45,.19,.13,1.26) forwards}.form-input[_ngcontent-%COMP%]{display:block;width:100%;margin:0 auto 3rem;padding:1rem 2rem;background-color:#eef4ff;outline:none!important;font-family:Inter;transition:all .3s cubic-bezier(.25,.46,.45,.94);border:none;border-bottom:1.2px solid transparent}.form-input[_ngcontent-%COMP%]::-webkit-input-placeholder{opacity:.7}.form-input[_ngcontent-%COMP%]:focus{border-color:#1ac293;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.form-text[_ngcontent-%COMP%]{margin-top:2rem;color:#858585}.form-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;font-weight:700}.form-bg--1[_ngcontent-%COMP%]{width:40rem;opacity:.4;transform:translate(10%,20%)}.form-circle[_ngcontent-%COMP%]{top:12vh;right:28vw;width:30rem;height:30rem}.form-circle-1[_ngcontent-%COMP%]{width:40rem;height:40rem;opacity:.1;border-radius:50%;border:1.5px solid #202020;transform:translate(30%,-40%)}select[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");background-repeat:no-repeat;background-position-x:99%;background-position-y:7px}.modal[_ngcontent-%COMP%]{padding:2rem;-webkit-animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards}.modal-dialog[_ngcontent-%COMP%]{margin:0 auto;min-height:90vh;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:.8rem;padding:1.5rem 2rem;border:none}.modal-title[_ngcontent-%COMP%]{text-align:center}.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:transparent;color:#000}.form-tab[_ngcontent-%COMP%]{-webkit-animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards}.form[_ngcontent-%COMP%]{max-width:100%}"]}),C),_=n("PN1e"),x=n("PjKf"),E=n("5E5Q"),S=n("ogxq");n("XNiG");var T,z,M,D=((M=function(){function e(t){_classCallCheck(this,e),this.zone=t}return _createClass(e,[{key:"registerScript",value:function(e,t,n){var o=this,r=window[t];if(r)this.zone.run((function(){n(r)}));else{var a=document.createElement("script");a.id=this.getElemId(t),a.innerHTML="",a.onload=function(){o.zone.run((function(){n(window[t])}))},a.src=e,a.async=!0,a.defer=!0,document.getElementsByTagName("head")[0].appendChild(a)}}},{key:"cleanup",value:function(e){var t=document.getElementById(this.getElemId(e));t&&t.remove()}},{key:"getElemId",value:function(e){return"ngx-paypal-script-elem-"+e}}]),e}()).\u0275fac=function(e){return new(e||M)(c.Sb(c.z))},M.\u0275prov=c.Fb({token:M,factory:M.\u0275fac}),M),I=((z=function(){function e(t){_classCallCheck(this,e),this.scriptService=t,this.paypalWindowName="paypal"}return _createClass(e,[{key:"registerPayPalScript",value:function(e,t){this.scriptService.registerScript(this.getUrlForConfig(e),this.paypalWindowName,t)}},{key:"destroyPayPalScript",value:function(){this.scriptService.cleanup(this.paypalWindowName)}},{key:"getUrlForConfig",value:function(e){var t=[{name:"client-id",value:e.clientId}];return e.currency&&t.push({name:"currency",value:e.currency}),e.commit&&t.push({name:"commit",value:e.commit}),e.vault&&t.push({name:"vault",value:e.vault}),e.extraParams&&t.push.apply(t,_toConsumableArray(e.extraParams)),"https://www.paypal.com/sdk/js"+this.getQueryString(t)}},{key:"getQueryString",value:function(e){for(var t="",n=0;n<e.length;n++){var o=e[n];t+=0===n?"?":"&",t+="".concat(o.name,"=").concat(o.value)}return t}}]),e}()).\u0275fac=function(e){return new(e||z)(c.Sb(D))},z.\u0275prov=c.Fb({token:z,factory:z.\u0275fac}),z),A=((T=function e(){_classCallCheck(this,e)}).\u0275mod=c.Hb({type:T}),T.\u0275inj=c.Gb({factory:function(e){return new(e||T)},providers:[D,I],imports:[[o.b]]}),T);d.b.registerPlugins([_.b,x.a,E.a,S.a]);var j,q=[{path:"",component:P}],F=((j=function e(){_classCallCheck(this,e)}).\u0275mod=c.Hb({type:j}),j.\u0275inj=c.Gb({factory:function(e){return new(e||j)},imports:[[o.b,d.b,r.g,r.n,A,l.a.forRoot("pk_test_51HTiflHUeWAgE8MwBXkbEHv6ik4TtlKfiKD501HpHljfnJMktJUkfHejOPSVL2vZ3AniKblBYg2C97cZn4Co1hMK00TcSQuSoa"),b.f.forChild(q)]]}),j)}}]);