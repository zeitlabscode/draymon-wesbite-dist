(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{fEIi:function(t,e,l){"use strict";l.r(e),l.d(e,"AllSlotsModule",(function(){return p}));var o=l("ofXK"),n=l("PSD3"),s=l.n(n),i=l("fXoL"),c=l("N+K7"),a=l("dz5x"),d=l("tyNb");const r=function(t){return["/admin/booking-details",t]};function b(t,e){if(1&t&&(i.Ob(0,"span",10),i.Ob(1,"a",17),i.Ob(2,"i",18),i.nc(3," remove_red_eye "),i.Nb(),i.Ob(4,"div",12),i.Ob(5,"p"),i.nc(6," View Booking Details "),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t){const t=i.Yb().$implicit;i.zb(1),i.dc("routerLink",i.gc(1,r,null==t?null:t.id))}}function u(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",6),i.Ob(1,"div",7),i.Ob(2,"div",8),i.mc(3,b,7,3,"span",9),i.Ob(4,"span",10),i.Ob(5,"i",11),i.Wb("click",(function(){i.ic(t);const l=e.$implicit,o=e.index;return i.Yb().deleteSlot(null==l?null:l.id,null==l?null:l.transactionId,null==l?null:l.booked,o)})),i.nc(6," delete_outline "),i.Nb(),i.Ob(7,"div",12),i.Ob(8,"p"),i.nc(9," Delete this slot ? "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(10,"h4",1),i.nc(11),i.Zb(12,"date"),i.Nb(),i.Ob(13,"h6",13),i.nc(14),i.Zb(15,"date"),i.Zb(16,"date"),i.Nb(),i.Ob(17,"div",14),i.Ob(18,"span",15),i.nc(19),i.Nb(),i.Ob(20,"span",16),i.nc(21),i.Nb(),i.Nb(),i.Nb(),i.Nb()}if(2&t){const t=e.$implicit;i.zb(3),i.dc("ngIf",null==t?null:t.booked),i.zb(8),i.pc(" ",i.ac(12,10,null==t?null:t.date,"MMMM d,y")," "),i.zb(3),i.qc(" ",i.ac(15,13,null==t?null:t.startTime,"h:mm a")," - ",i.ac(16,16,null==t?null:t.endTime,"h:mm a"),""),i.zb(5),i.pc("",null==t?null:t.duration," MINS"),i.zb(1),i.Bb("text-block--primary",null==t?null:t.booked)("text-block--secondary",!(null!=t&&t.booked)),i.zb(1),i.pc(" ",1==(null==t?null:t.booked)?"Booked":"Not Booked"," ")}}const h=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.share=e,this.allSlots=[]}ngOnInit(){this.http.postToBackend("/admin/slot/all",{adminId:this.share.user}).then(t=>{console.log(t),7e3==t.statusCode&&(this.allSlots=t.data,console.log(this.allSlots))}).catch(t=>{console.log(t)})}deleteSlot(t,e,l,o){l?s.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. Removing it will require refund for the slot. Do you still want to remove it?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then(l=>{l.value&&this.http.postToBackend("/admin/refund",{adminId:this.share.user,slotId:t,transactionId:e}).then(t=>{console.log(t),7e3===t.statusCode?(this.allSlots.splice(o,1),s.a.fire("Deleted","Slot deleted successfully. Refund Initiated","success")):s.a.fire("Failed",t.message,"error")}).catch(t=>{console.log(t),s.a.fire("Failed","Failed to delete slot","error")})}):s.a.fire({icon:"question",title:"Delete this slot?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then(e=>{e.value&&this.http.postToBackend("/admin/slot/delete",{adminId:this.share.user,slotId:t}).then(t=>{console.log(t),t.statusCode?(s.a.fire("Deleted","Slot Deleted Successfully","success"),this.allSlots.splice(o,1)):s.a.fire("Failed","Failed to delete slot","error")}).catch(t=>{console.log(t),s.a.fire("Failed","Failed to delete slot","error")}),console.log(e.value,t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(c.a),i.Jb(a.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-all-slots"]],decls:8,vars:1,consts:[[1,"slots-container"],[1,"text-dark"],[1,"slot-section"],[1,"border-1"],[1,"row"],["class","col-lg-3 col-md-4 col-6",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-6"],[1,"card","slot-card"],[1,"slot-option"],["class","my-tooltip",4,"ngIf"],[1,"my-tooltip"],[1,"material-icons","material-icons-rounded",3,"click"],[1,"my-tooltip-content"],[1,"text-light-gray","slot-time","mb-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-block","text-block--dark"],[1,"text-block"],[3,"routerLink"],[1,"material-icons","material-icons-outlined","text-dark"]],template:function(t,e){1&t&&(i.Ob(0,"section",0),i.Ob(1,"h2",1),i.nc(2," All Slots "),i.Nb(),i.Ob(3,"div",2),i.Ob(4,"h4",3),i.nc(5," 12th September, 2020 Friday "),i.Nb(),i.Ob(6,"div",4),i.mc(7,u,22,19,"div",5),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.zb(7),i.dc("ngForOf",e.allSlots))},directives:[o.j,o.k,d.e],pipes:[o.d],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[o.b,d.f.forChild(h)]]}),t})()}}]);