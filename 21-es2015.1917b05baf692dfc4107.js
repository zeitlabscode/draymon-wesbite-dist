(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{g9RZ:function(e,t,n){"use strict";n.r(t),n.d(t,"NewMeetingModule",(function(){return _}));var o=n("ofXK"),r=n("3Pt+"),i=n("PSD3"),a=n.n(i),s=n("VFot"),c=n("fXoL"),l=n("N+K7"),b=n("dz5x"),d=n("tyNb"),m=n("IvIE");const u=["calendar"];function p(e,t){1&e&&(c.Ob(0,"p"),c.oc(1," Please select consulting type "),c.Nb())}function f(e,t){1&e&&(c.Ob(0,"p"),c.oc(1," Please enter a reason for meeting. "),c.Nb())}function h(e,t){if(1&e){const e=c.Pb();c.Ob(0,"div",17),c.Ob(1,"h3",18),c.oc(2," Book new meeting "),c.Nb(),c.Ob(3,"form",19),c.Ob(4,"div",20),c.Ob(5,"div",21),c.Ob(6,"div",22),c.Ob(7,"div",23),c.nc(8,p,2,0,"p",24),c.Nb(),c.Ob(9,"select",25),c.Ob(10,"option",26),c.oc(11,"Select the consulting type"),c.Nb(),c.Ob(12,"option",27),c.oc(13,"Mentoring"),c.Nb(),c.Ob(14,"option",28),c.oc(15,"Business Advice"),c.Nb(),c.Nb(),c.Ob(16,"div",23),c.nc(17,f,2,0,"p",24),c.Nb(),c.Kb(18,"textarea",29),c.Nb(),c.Nb(),c.Nb(),c.Ob(19,"div",30),c.Ob(20,"button",31),c.Wb("click",(function(){return c.jc(e),c.Yb().goNext()})),c.oc(21," Next "),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&e){const e=c.Yb();c.zb(3),c.ec("formGroup",e.form),c.zb(5),c.ec("ngIf",!e.form.get("counsultingType").valid&&e.form.get("counsultingType").touched||!e.form.get("counsultingType").valid&&!e.firstTabValid),c.zb(9),c.ec("ngIf",!e.form.get("reason").valid&&e.form.get("reason").touched||!e.form.get("reason").valid&&!e.firstTabValid)}}function g(e,t){1&e&&(c.Ob(0,"p",43),c.oc(1," Select your slot for meeting from below available slots. "),c.Nb())}function v(e,t){1&e&&(c.Ob(0,"div",23),c.Ob(1,"p"),c.oc(2," Sorry, currently we don't have any slots available for meetings. Please check after sometime. "),c.Nb(),c.Nb())}function y(e,t){if(1&e){const e=c.Pb();c.Ob(0,"button",44),c.Wb("click",(function(){return c.jc(e),c.Yb(2).showDay=!1})),c.oc(1," Go Back "),c.Nb()}}function O(e,t){if(1&e&&c.Kb(0,"full-calendar",45),2&e){const e=c.Yb(2);c.ec("options",e.calendarOptionsMonth)}}function N(e,t){if(1&e&&c.Kb(0,"full-calendar",45),2&e){const e=c.Yb(2);c.ec("options",e.calendarOptionsDay)}}function w(e,t){if(1&e){const e=c.Pb();c.Ob(0,"div",32),c.Ob(1,"div",33),c.Ob(2,"a",34),c.oc(3," View Plan "),c.Nb(),c.Ob(4,"button",35),c.Wb("click",(function(){return c.jc(e),c.Yb().goPrev()})),c.oc(5," Change Meeting Details "),c.Nb(),c.Nb(),c.Ob(6,"div",36),c.Ob(7,"div"),c.Ob(8,"h3",37),c.oc(9," Select the meeting from the given slots "),c.Nb(),c.nc(10,g,2,0,"p",38),c.nc(11,v,3,0,"div",39),c.Nb(),c.nc(12,y,2,0,"button",40),c.Nb(),c.Ob(13,"div",41),c.nc(14,O,1,1,"full-calendar",42),c.nc(15,N,1,1,"full-calendar",42),c.Nb(),c.Nb()}if(2&e){const e=c.Yb();c.zb(10),c.ec("ngIf",e.allEvents.length),c.zb(1),c.ec("ngIf",!e.allEvents.length),c.zb(1),c.ec("ngIf",e.showDay),c.zb(2),c.ec("ngIf",!e.showDay),c.zb(1),c.ec("ngIf",e.showDay)}}function k(e,t){if(1&e){const e=c.Pb();c.Ob(0,"div",32),c.Ob(1,"div",46),c.Ob(2,"div",47),c.Ob(3,"h3",10),c.oc(4," Confirm your details before payment "),c.Nb(),c.Nb(),c.Ob(5,"div",48),c.Ob(6,"button",35),c.Wb("click",(function(){return c.jc(e),c.Yb().goPrev()})),c.oc(7," Change Slot "),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"form"),c.Ob(9,"div",49),c.Ob(10,"div",21),c.Ob(11,"p"),c.oc(12,"Name"),c.Nb(),c.Ob(13,"p",43),c.oc(14),c.Nb(),c.Ob(15,"p"),c.oc(16,"Phone Number"),c.Nb(),c.Ob(17,"p",43),c.oc(18),c.Nb(),c.Ob(19,"p"),c.oc(20,"Consulting Type"),c.Nb(),c.Ob(21,"p",43),c.oc(22),c.Zb(23,"titlecase"),c.Nb(),c.Ob(24,"p"),c.oc(25,"Reason for meeting"),c.Nb(),c.Ob(26,"p",43),c.oc(27),c.Nb(),c.Ob(28,"p"),c.oc(29,"Duration of the meeting"),c.Nb(),c.Ob(30,"p",43),c.oc(31),c.Nb(),c.Ob(32,"div",50),c.Ob(33,"p"),c.oc(34,"Slot Details"),c.Nb(),c.Nb(),c.Ob(35,"p",43),c.oc(36),c.Zb(37,"date"),c.Nb(),c.Ob(38,"p",51),c.oc(39),c.Zb(40,"date"),c.Zb(41,"date"),c.Nb(),c.Nb(),c.Ob(42,"div",21),c.Ob(43,"h5",52),c.oc(44," Your payment details "),c.Nb(),c.Ob(45,"div",53),c.Ob(46,"div",54),c.Ob(47,"p",55),c.oc(48," Total Amount: "),c.Nb(),c.Ob(49,"h2"),c.oc(50),c.Nb(),c.Nb(),c.Ob(51,"a",56),c.oc(52," View Plan "),c.Nb(),c.Nb(),c.Ob(53,"h6",57),c.oc(54," Enter card number to proceed payment "),c.Nb(),c.Kb(55,"ngx-stripe-card",58),c.Ob(56,"div",59),c.Ob(57,"button",60),c.Wb("click",(function(){return c.jc(e),c.Yb().createToken()})),c.Kb(58,"div",61),c.oc(59," Pay "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&e){const e=c.Yb();c.zb(14),c.qc(" ",e.form.get("userFullName").value," "),c.zb(4),c.qc(" ",e.form.get("mobileNo").value," "),c.zb(4),c.qc(" ",c.ac(23,11,e.form.get("counsultingType").value)," "),c.zb(5),c.qc(" ",e.form.get("reason").value," "),c.zb(4),c.qc(" ",null==e.currentEvent?null:e.currentEvent.duration," mins "),c.zb(5),c.qc(" ",c.bc(37,13,null==e.currentEvent?null:e.currentEvent.date,"mediumDate")," "),c.zb(3),c.rc(" ",c.bc(40,16,null==e.currentEvent?null:e.currentEvent.start,"shortTime")," to ",c.bc(41,19,null==e.currentEvent?null:e.currentEvent.end,"shortTime")," "),c.zb(11),c.qc(" $",e.form.get("amountPaid").value," "),c.zb(5),c.ec("options",e.cardOptions)("elementsOptions",e.elementsOptions)}}let E=(()=>{class e{constructor(e,t,n,o,i){this.http=e,this.share=t,this.fb=n,this.stripeService=o,this.router=i,this.cardOptions={style:{base:{iconColor:"#666EE8",color:"#31325F",fontWeight:"300",fontFamily:'"Inter", Helvetica, sans-serif',fontSize:"18px","::placeholder":{color:"#CFD7E0"}}}},this.elementsOptions={locale:"en"},this.showPaymentButton=!1,this.selectedDate="",this.singleDayEvents=[],this.formValid=!0,this.form=new r.e({userId:new r.c(this.share.user.id,{validators:[r.p.required]}),userEmail:new r.c(this.share.user.email,{validators:[r.p.required]}),userFullName:new r.c(this.share.user.fullName,{validators:[r.p.required]}),mobileNo:new r.c(this.share.user.mobileNo,{validators:[r.p.required]}),counsultingType:new r.c(null,{validators:[r.p.required]}),reason:new r.c(null,{validators:[r.p.required]}),duration:new r.c(50,{validators:[r.p.required]}),amountPaid:new r.c(99,{validators:[r.p.required]}),paymentId:new r.c(null,{validators:[r.p.required]}),slotId:new r.c(null,{validators:[r.p.required]})}),this.allEvents=[],this.calendarOptionsMonth={initialView:"dayGridMonth",events:this.allEvents,dateClick:this.handleDateClick.bind(this),eventClick:this.handleEventClick.bind(this),eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!0},displayEventEnd:!0},this.calendarOptionsDay={initialView:"timeGridDay",initialDate:this.selectedDate,eventClick:this.handleEventClick.bind(this),events:this.allEvents,eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!0},displayEventEnd:!0},this.tab=0,this.firstTabValid=!0}ngOnInit(){this.stripeTest=this.fb.group({name:["",[r.p.required]]}),console.log(this.form.get("userFullName").value),this.showDay=!1,this.http.postToBackend("/users/slot/active/unbooked",{userId:this.share.user.id}).then(e=>{console.log(e),console.log("data from server",e.data),this.allEvents=e.data.map(e=>({id:e.id,title:e.booked?e.title+" (Booked)":e.title,date:e.date,start:e.startTime,end:e.endTime,allDay:!1,duration:e.duration})),console.log(this.allEvents),this.calendarOptionsMonth.events=this.allEvents,this.calendarOptionsDay.events=this.allEvents}).catch(e=>{console.log(e)})}formatDate(e){var t=new Date(e),n=""+(t.getMonth()+1),o=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[r,n,o].join("-")}formatTime(e){var t=new Date(e);return console.log(t.toTimeString()),t.toTimeString()}goNext(){console.log(this.form.value),0==this.tab?(this.firstTabValid=!0,this.isFormValid()?this.tab++:this.firstTabValid=!1):this.tab++,this.firstTabValid=!1}goPrev(){this.tab--}isFormValid(){return this.firstTabValid=!0,!(!this.form.get("counsultingType").valid||!this.form.get("reason").valid)}handleDateClick(e){this.selectedDate=e.dateStr,this.calendarOptionsDay.initialDate=this.selectedDate,console.log(this.selectedDate)}handleEventClick(e){this.currentEventID=e.event._def.publicId,this.currentEvent=this.allEvents.find(e=>this.currentEventID==e.id),console.log("Current Event",this.currentEvent),this.confirmSlot()}confirmSlot(){$("#slot-modal").modal("toggle")}bookSlot(){this.form.patchValue({slotId:this.currentEventID}),a.a.fire({icon:"success",title:"Slot Selected",text:"You can also change this slot before payment"}),console.log(this.currentEvent),this.confirmSlot(),this.tab++}createToken(){console.log("submit",this.form.value.userFullName);const e=this.form.value.userFullName;$("#pay-btn").addClass("running"),$("#pay-btn").prop("disabled",!0),this.stripeService.createToken(this.card.element,{name:e}).subscribe(e=>{e.token?(console.log(e.token.id),this.http.postToBackend("/users/stripe-pay",{token:e.token.id,amount:this.form.value.amountPaid,slotDuration:this.form.value.duration,fullName:this.form.value.userFullName,email:this.form.value.userEmail}).then(e=>{console.log(e),7e3===e.statusCode?(this.form.patchValue({paymentId:e.data}),this.http.postToBackend("/users/slot/booked",this.form.value).then(e=>{console.log(e),7e3===e.statusCode?($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),a.a.fire("Payment Successful","Slot Booked Successfully","success"),this.form.reset(),this.router.navigate(["/dashboard/your-meetings"])):($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),a.a.fire("Payment Failed",e.message,"error"))}).catch(t=>{$("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),console.log(t),a.a.fire("Payment Failed",e.message,"error")})):($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),a.a.fire("Payment Failed",e.message,"error"))}).catch(e=>{console.log(e),$("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),a.a.fire("Payment Failed",e.message,"error")})):e.error?(console.log(e.error.message),$("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),a.a.fire("Payment Failed",e.error.message,"error")):($("#pay-btn").removeClass("running"),$("#pay-btn").prop("disabled",!1),a.a.fire("Internal Server Error","Please try again","error"))})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(b.a),c.Jb(r.b),c.Jb(s.c),c.Jb(d.c))},e.\u0275cmp=c.Db({type:e,selectors:[["app-new-meeting"]],viewQuery:function(e,t){var n;1&e&&(c.tc(s.b,!0),c.tc(u,!0)),2&e&&(c.ic(n=c.Xb())&&(t.card=n.first),c.ic(n=c.Xb())&&(t.calendarRef=n.first))},decls:39,vars:19,consts:[[1,"form-container",3,"ngSwitch"],["class","form-tab form-tab-1",4,"ngSwitchCase"],["class","form-tab form-tab-2",4,"ngSwitchCase"],["id","slot-modal",1,"modal"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","text-dark","text-center"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body","text-center"],[1,"text-dark"],[1,"text","mb-2"],[1,"text-700"],[1,"text","mb-5"],[1,"modal-footer"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-dark"],[1,"form-tab","form-tab-1"],[1,"text-dark","text-center"],[3,"formGroup"],[1,"row","justify-content-center","mt-5"],[1,"col-md-6"],[1,"form"],[1,"val"],[4,"ngIf"],["formControlName","counsultingType","name","type","id","",1,"form-input"],["value","null"],["value","Mentoring"],["value","Business Advice"],["formControlName","reason","id","","cols","30","rows","5","placeholder","Please enter the reason for this session",1,"form-input"],[1,"text-center"],[1,"btn","btn-dark","btn-sm",3,"click"],[1,"form-tab","form-tab-2"],[1,"d-flex","justify-content-between","align-items-center","text-right"],["href","#","data-toggle","modal","data-target","#cost-modal",1,"btn","btn-dark","btn-sm","mt-0"],[1,"btn","btn-dark","btn-sm","mt-0",3,"click"],[1,"d-flex","align-items-center","justify-content-between","mt-4","mb-5"],[1,"text-dark","text-center","mb-4"],["class","text",4,"ngIf"],["class","val",4,"ngIf"],["class","btn btn-sm btn-dark mt-0",3,"click",4,"ngIf"],[1,"calendar-wrap"],[3,"options",4,"ngIf"],[1,"text"],[1,"btn","btn-sm","btn-dark","mt-0",3,"click"],[3,"options"],[1,"row"],[1,"col-9"],[1,"col-3","text-right"],[1,"row","mt-5"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text","mt-2"],[1,"text-dark","mb-5"],[1,"d-flex","justify-content-between","align-items-center"],[1,"content"],[1,"text","mb-1"],["href","#","data-toggle","modal","data-target","#cost-modal",1,"btn","btn-dark","btn-sm","m-0"],[1,"text-dark","mb-4"],[3,"options","elementsOptions"],[1,"text-right","mt-2"],["type","button","id","pay-btn",1,"btn","btn-primary","ld-ext-right",3,"click"],[1,"ld","ld-ring","ld-spin-fast"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.nc(1,h,22,3,"div",1),c.nc(2,w,16,5,"div",2),c.nc(3,k,60,22,"div",2),c.Nb(),c.Ob(4,"div",3),c.Ob(5,"div",4),c.Ob(6,"div",5),c.Ob(7,"div",6),c.Ob(8,"h4",7),c.oc(9,"Save this slot ?"),c.Nb(),c.Ob(10,"button",8),c.oc(11,"\xd7"),c.Nb(),c.Nb(),c.Ob(12,"div",9),c.Ob(13,"h3",10),c.oc(14),c.Nb(),c.Ob(15,"p",11),c.Ob(16,"span",12),c.oc(17,"Date: "),c.Nb(),c.oc(18),c.Zb(19,"date"),c.Nb(),c.Ob(20,"p",11),c.Ob(21,"span",12),c.oc(22,"Time: "),c.Nb(),c.oc(23),c.Zb(24,"date"),c.Zb(25,"date"),c.Nb(),c.Ob(26,"p",13),c.Ob(27,"span",12),c.oc(28,"Duration: "),c.Nb(),c.oc(29),c.Nb(),c.Ob(30,"h5"),c.oc(31," Amount to be paid for the meeting: "),c.Ob(32,"span",10),c.oc(33),c.Nb(),c.Nb(),c.Nb(),c.Ob(34,"div",14),c.Ob(35,"button",15),c.Wb("click",(function(){return t.bookSlot()})),c.oc(36,"Yes"),c.Nb(),c.Ob(37,"button",16),c.oc(38,"No"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.ec("ngSwitch",t.tab),c.zb(1),c.ec("ngSwitchCase",0),c.zb(1),c.ec("ngSwitchCase",1),c.zb(1),c.ec("ngSwitchCase",2),c.zb(11),c.qc(" ",null==t.currentEvent?null:t.currentEvent.title," "),c.zb(4),c.qc(" ",c.bc(19,10,null==t.currentEvent?null:t.currentEvent.date,"MMMM d, y")," "),c.zb(5),c.rc(" ",c.bc(24,13,null==t.currentEvent?null:t.currentEvent.start,"shortTime")," - ",c.bc(25,16,null==t.currentEvent?null:t.currentEvent.end,"shortTime")," "),c.zb(6),c.qc(" ",null==t.currentEvent?null:t.currentEvent.duration," minutes "),c.zb(4),c.qc("$",t.form.get("amountPaid").value,""))},directives:[o.l,o.m,r.r,r.k,r.f,o.k,r.o,r.j,r.d,r.m,r.q,r.a,m.a,r.l,s.b],pipes:[o.d,o.p],styles:["input[type=file][_ngcontent-%COMP%]{display:none}.form[_ngcontent-%COMP%]{max-width:45rem;width:100%;text-align:center}.form-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;min-height:100vh;overflow:hidden;background-color:#dfe6f6;padding:15rem 0 5rem;position:relative}@media (max-width:47.99em){.form-wrapper[_ngcontent-%COMP%]{padding-top:20rem}}.form-header[_ngcontent-%COMP%]{text-align:center;opacity:0;position:relative;z-index:10;-webkit-animation:fade_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:fade_up .3s cubic-bezier(.25,.46,.45,.94) forwards;-webkit-animation-delay:.2s;animation-delay:.2s}.form-card[_ngcontent-%COMP%]{box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);border-radius:1rem;padding:3rem 3rem 4rem;background-color:#fff;position:relative;z-index:5;-webkit-animation:fade_up .5s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_up .5s cubic-bezier(.45,.19,.13,1.26) forwards}.form-input[_ngcontent-%COMP%]{display:block;width:100%;margin:0 auto 3rem;padding:1rem 2rem;background-color:#eef4ff;outline:none!important;font-family:Inter;transition:all .3s cubic-bezier(.25,.46,.45,.94);border:none;border-bottom:1.2px solid transparent}.form-input[_ngcontent-%COMP%]::-webkit-input-placeholder{opacity:.7}.form-input[_ngcontent-%COMP%]:focus{border-color:#1ac293;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.form-text[_ngcontent-%COMP%]{margin-top:2rem;color:#858585}.form-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;font-weight:700}.form-bg--1[_ngcontent-%COMP%]{width:40rem;opacity:.4;transform:translate(10%,20%)}.form-circle[_ngcontent-%COMP%]{top:12vh;right:28vw;width:30rem;height:30rem}.form-circle-1[_ngcontent-%COMP%]{width:40rem;height:40rem;opacity:.1;border-radius:50%;border:1.5px solid #202020;transform:translate(30%,-40%)}select[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");background-repeat:no-repeat;background-position-x:99%;background-position-y:7px}.modal[_ngcontent-%COMP%]{padding:2rem;-webkit-animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards}.modal-dialog[_ngcontent-%COMP%]{margin:0 auto;min-height:90vh;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:.8rem;padding:1.5rem 2rem;border:none}.modal-title[_ngcontent-%COMP%]{text-align:center}.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:transparent;color:#000}.form-tab[_ngcontent-%COMP%]{-webkit-animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards}.form[_ngcontent-%COMP%]{max-width:100%}"]}),e})();var P=n("PN1e"),x=n("PjKf"),C=n("5E5Q"),z=n("ogxq");n("XNiG");let S=(()=>{class e{constructor(e){this.zone=e}registerScript(e,t,n){const o=window[t];if(o)return void this.zone.run(()=>{n(o)});const r=document.createElement("script");r.id=this.getElemId(t),r.innerHTML="",r.onload=()=>{this.zone.run(()=>{n(window[t])})},r.src=e,r.async=!0,r.defer=!0,document.getElementsByTagName("head")[0].appendChild(r)}cleanup(e){const t=document.getElementById(this.getElemId(e));t&&t.remove()}getElemId(e){return"ngx-paypal-script-elem-"+e}}return e.\u0275fac=function(t){return new(t||e)(c.Sb(c.z))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac}),e})(),M=(()=>{class e{constructor(e){this.scriptService=e,this.paypalWindowName="paypal"}registerPayPalScript(e,t){this.scriptService.registerScript(this.getUrlForConfig(e),this.paypalWindowName,t)}destroyPayPalScript(){this.scriptService.cleanup(this.paypalWindowName)}getUrlForConfig(e){const t=[{name:"client-id",value:e.clientId}];return e.currency&&t.push({name:"currency",value:e.currency}),e.commit&&t.push({name:"commit",value:e.commit}),e.vault&&t.push({name:"vault",value:e.vault}),e.extraParams&&t.push(...e.extraParams),"https://www.paypal.com/sdk/js"+this.getQueryString(t)}getQueryString(e){let t="";for(let n=0;n<e.length;n++){const o=e[n];t+=0===n?"?":"&",t+=`${o.name}=${o.value}`}return t}}return e.\u0275fac=function(t){return new(t||e)(c.Sb(S))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac}),e})(),T=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},providers:[S,M],imports:[[o.b]]}),e})();m.b.registerPlugins([P.b,x.a,C.a,z.a]);const D=[{path:"",component:E}];let _=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[o.b,m.b,r.g,r.n,T,s.a.forRoot("pk_live_51HbCBoEVumuzrwR7uWp6NbKUNyvNgfX0O9kUQiZDEJAN9JQtzyIKZ6SdZk5T64eHToreSJQ3T5Et2u8Ry3OmOE7M00aBTzRgW5"),d.f.forChild(D)]]}),e})()}}]);