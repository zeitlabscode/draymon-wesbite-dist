(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"Fep+":function(t,e,n){"use strict";n.r(e),n.d(e,"MeetingsModule",(function(){return h}));var o=n("ofXK"),a=n("PSD3"),i=n.n(a),r=n("fXoL"),l=n("N+K7"),c=n("dz5x"),s=n("tyNb");function b(t,e){1&t&&(r.Mb(0),r.Ob(1,"span",5),r.oc(2," Getting your meetings... "),r.Kb(3,"div",6),r.Nb(),r.Lb())}function d(t,e){if(1&t&&(r.Ob(0,"tr"),r.Ob(1,"td",9),r.oc(2),r.Nb(),r.Ob(3,"td"),r.oc(4),r.Zb(5,"date"),r.Nb(),r.Ob(6,"td"),r.oc(7),r.Zb(8,"date"),r.Zb(9,"date"),r.Nb(),r.Ob(10,"td",11),r.oc(11),r.Nb(),r.Ob(12,"td"),r.oc(13),r.Zb(14,"titlecase"),r.Nb(),r.Nb()),2&t){const t=e.$implicit,n=e.index;r.zb(2),r.pc(n+1),r.zb(2),r.pc(r.bc(5,6,null==t?null:t.date,"EE, dd MMM, yyyy")),r.zb(3),r.rc("",r.bc(8,9,null==t?null:t.startTime,"h:mm a")," - ",r.bc(9,12,null==t?null:t.endTime,"h:mm a"),""),r.zb(4),r.qc("",null==t?null:t.duration," MINS"),r.zb(2),r.pc(r.ac(14,15,null==t?null:t.counsultingType))}}function u(t,e){if(1&t&&(r.Ob(0,"div",7),r.Ob(1,"table",8),r.Ob(2,"thead"),r.Ob(3,"tr"),r.Ob(4,"th",9),r.oc(5,"Sr no."),r.Nb(),r.Ob(6,"th"),r.oc(7,"Date"),r.Nb(),r.Ob(8,"th"),r.oc(9,"Time"),r.Nb(),r.Ob(10,"th"),r.oc(11,"Duration"),r.Nb(),r.Ob(12,"th"),r.oc(13,"Consulting Type"),r.Nb(),r.Nb(),r.Nb(),r.Ob(14,"tbody"),r.nc(15,d,15,17,"tr",10),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Yb();r.zb(15),r.ec("ngForOf",t.slots)}}function g(t,e){1&t&&(r.Mb(0),r.Ob(1,"span",12),r.oc(2," You don't have any meetings. "),r.Nb(),r.Ob(3,"a",13),r.oc(4,"Book one now."),r.Nb(),r.Lb())}const m=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.share=e,this.slots=[]}ngOnInit(){this.loading=!0,this.http.postToBackend("/users/slot/booked/all",{userId:this.share.user.id}).then(t=>{this.loading=!1,console.log(t),7e3===t.statusCode&&(this.slots=t.data.map(t=>{let e,n;return e=new Date(t.startTime),n=new Date,{id:t.id,title:t.title,date:t.date,startTime:t.startTime,endTime:t.endTime,duration:t.duration,counsultingType:t.counsultingType,bookedAt:t.bookedAt,transactionId:t.transactionId,join:t.join,refund:(e-n)/36e5>24}}),console.log(this.slots))}).catch(t=>{console.log(t),this.loading=!1,i.a.fire({icon:"error",title:"Internal Server Error"})})}confirmCancelation(t,e,n){i.a.fire({icon:"question",title:"Cancel this meeting?",text:"The amount paid for this meeting will be refunded to your account in 48 hours",showCancelButton:!0,confirmButtonText:"Yes, cancel!"}).then(o=>{o.value&&this.cancel(t,e,n)})}cancel(t,e,n){this.http.postToBackend("/users/slot/cancel",{userId:this.share.user.id,slotId:e,transactionId:n}).then(e=>{console.log(e),7e3===e.statusCode?(this.slots.splice(t,1),i.a.fire("Canceled","Your booking is cancelled and refund is initiated successfully","success")):i.a.fire("Failed","Cannot cancel booking. Please try later","error")}).catch(t=>{console.log(t),i.a.fire("Failed","Cannot cancel booking. Please try later","error")})}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(l.a),r.Jb(c.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-meetings"]],decls:9,vars:3,consts:[[1,"dash-wrap"],[1,"text-dark","border-1"],[1,"text-primary"],[4,"ngIf"],["class","table-wrap",4,"ngIf"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"table-wrap"],[1,"table","table-reponsive"],[1,"table-cell-small"],[4,"ngFor","ngForOf"],[1,"text-primary","text-small","text-700"],[1,"text","mx-auto"],["routerLink","/dashboard/new-meeting",1,"text-700","link"]],template:function(t,e){1&t&&(r.Ob(0,"div",0),r.Ob(1,"h4",1),r.oc(2," See all your "),r.Ob(3,"span",2),r.oc(4," meetings "),r.Nb(),r.oc(5," at one place. "),r.Nb(),r.nc(6,b,4,0,"ng-container",3),r.nc(7,u,16,1,"div",4),r.nc(8,g,5,0,"ng-container",3),r.Nb()),2&t&&(r.zb(6),r.ec("ngIf",e.loading),r.zb(1),r.ec("ngIf",!e.loading&&e.slots.length),r.zb(1),r.ec("ngIf",!e.loading&&!e.slots.length))},directives:[o.k,o.j,s.e],pipes:[o.d,o.p],styles:[".table[_ngcontent-%COMP%]{border-collapse:separate}.table-wrap[_ngcontent-%COMP%]{margin:3rem 0;overflow-x:scroll;padding:1rem 1rem 3rem}.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:6px}.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#dfe6f6;border-radius:1rem}.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#1ac293;border-radius:1rem}.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#1ac293}.table-reponsive[_ngcontent-%COMP%]{width:100%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500;color:rgba(0,0,0,.42);text-align:left;padding:2rem 1rem;min-width:12rem;margin-bottom:3rem;font-size:1.4rem}@media (max-width:47.99em){.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem 1rem}}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;color:#000;font-weight:500;min-width:12rem;border-bottom:1px solid #d3d8df;font-size:1.4rem}@media (max-width:47.99em){.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1.5rem 1rem}}.table-cell-small[_ngcontent-%COMP%]{min-width:5rem!important}.dash-wrap[_ngcontent-%COMP%]{-webkit-animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:slide_up .3s cubic-bezier(.25,.46,.45,.94) forwards}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[o.b,s.f.forChild(m)]]}),t})()}}]);