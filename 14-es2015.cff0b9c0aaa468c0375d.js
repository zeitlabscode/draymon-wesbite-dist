(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{fEIi:function(t,e,o){"use strict";o.r(e),o.d(e,"AllSlotsModule",(function(){return p}));var l=o("ofXK"),n=o("PSD3"),s=o.n(n),i=o("fXoL"),c=o("N+K7"),a=o("CNll"),r=o("tyNb");function d(t,e){1&t&&(i.Mb(0),i.Ob(1,"div",2),i.Ob(2,"span",3),i.oc(3," Getting slots, Please wait... "),i.Kb(4,"div",4),i.Nb(),i.Nb(),i.Lb())}const b=function(t){return["/admin/booking-details",t]};function u(t,e){if(1&t&&(i.Ob(0,"span",14),i.Ob(1,"a",22),i.Ob(2,"i",23),i.oc(3," remove_red_eye "),i.Nb(),i.Ob(4,"div",16),i.Ob(5,"p"),i.oc(6," View Booking Details "),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t){const t=i.Yb().$implicit;i.zb(1),i.ec("routerLink",i.hc(1,b,null==t?null:t.id))}}function f(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",10),i.Ob(1,"div",11),i.Ob(2,"div",12),i.nc(3,u,7,3,"span",13),i.Ob(4,"span",14),i.Ob(5,"i",15),i.Wb("click",(function(){i.jc(t);const o=e.$implicit,l=e.index;return i.Yb(2).deleteSlot(null==o?null:o.id,null==o?null:o.transactionId,null==o?null:o.booked,l)})),i.oc(6," delete_outline "),i.Nb(),i.Ob(7,"div",16),i.Ob(8,"p"),i.oc(9," Delete this slot ? "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(10,"h5",17),i.oc(11),i.Zb(12,"date"),i.Nb(),i.Ob(13,"h6",18),i.oc(14),i.Zb(15,"date"),i.Zb(16,"date"),i.Nb(),i.Ob(17,"div",19),i.Ob(18,"span",20),i.oc(19),i.Nb(),i.Ob(20,"span",21),i.oc(21),i.Nb(),i.Nb(),i.Nb(),i.Nb()}if(2&t){const t=e.$implicit;i.zb(3),i.ec("ngIf",null==t?null:t.booked),i.zb(8),i.qc(" ",i.bc(12,10,null==t?null:t.date,"MMMM d,y")," "),i.zb(3),i.rc(" ",i.bc(15,13,null==t?null:t.startTime,"h:mm a")," - ",i.bc(16,16,null==t?null:t.endTime,"h:mm a"),""),i.zb(5),i.qc("",null==t?null:t.duration," MINS"),i.zb(1),i.Bb("text-block--primary",null==t?null:t.booked)("text-block--secondary",!(null!=t&&t.booked)),i.zb(1),i.qc(" ",1==(null==t?null:t.booked)?"Booked":"Not Booked"," ")}}function h(t,e){if(1&t&&(i.Ob(0,"section",5),i.Ob(1,"h2",6),i.oc(2," All Slots "),i.Nb(),i.Ob(3,"div",7),i.Ob(4,"div",8),i.nc(5,f,22,19,"div",9),i.Nb(),i.Nb(),i.Nb()),2&t){const t=i.Yb();i.zb(5),i.ec("ngForOf",t.allSlots)}}const m=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.share=e,this.allSlots=[]}ngOnInit(){this.loading=!0,this.http.postToBackend("/admin/slot/all",{adminId:this.share.user}).then(t=>{this.loading=!1,console.log(t),7e3==t.statusCode?(this.allSlots=t.data,console.log(this.allSlots)):s.a.fire("Error",t.message,"error")}).catch(t=>{this.loading=!1,console.log(t),s.a.fire("Error",t.message,"error")})}deleteSlot(t,e,o,l){o?s.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. Removing it will require refund for the slot. Do you still want to remove it?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then(o=>{o.value&&this.http.postToBackend("/admin/refund",{adminId:this.share.user,slotId:t,transactionId:e}).then(t=>{console.log(t),7e3===t.statusCode?(this.allSlots.splice(l,1),s.a.fire("Deleted","Slot deleted successfully. Refund Initiated","success")):s.a.fire("Failed!",t.message,"error")}).catch(t=>{console.log(t),s.a.fire("Oops",t.message,"error")})}):s.a.fire({icon:"question",title:"Delete this slot?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then(e=>{e.value&&this.http.postToBackend("/admin/slot/delete",{adminId:this.share.user,slotId:t}).then(t=>{console.log(t),t.statusCode?(s.a.fire("Deleted","Slot Deleted Successfully","success"),this.allSlots.splice(l,1)):s.a.fire("Failed","Failed to delete slot","error")}).catch(t=>{console.log(t),s.a.fire("Failed","Failed to delete slot","error")}),console.log(e.value,t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(c.a),i.Jb(a.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-all-slots"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","slots-container",4,"ngIf"],[1,"text-center","mt-5","pt-5"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"slots-container"],[1,"text-dark"],[1,"slot-section"],[1,"row"],["class","col-lg-3 col-md-4 col-6",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-6"],[1,"card","slot-card"],[1,"slot-option"],["class","my-tooltip",4,"ngIf"],[1,"my-tooltip"],[1,"material-icons","material-icons-rounded",3,"click"],[1,"my-tooltip-content"],[1,"text-dark","mb-2"],[1,"text-light-gray","slot-time","mb-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-block","text-block--dark"],[1,"text-block"],[3,"routerLink"],[1,"material-icons","material-icons-outlined","text-dark"]],template:function(t,e){1&t&&(i.nc(0,d,5,0,"ng-container",0),i.nc(1,h,6,1,"section",1)),2&t&&(i.ec("ngIf",e.loading),i.zb(1),i.ec("ngIf",!e.loading))},directives:[l.k,l.j,r.e],pipes:[l.d],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[l.b,r.f.forChild(m)]]}),t})()}}]);