function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"73oR":function(e,t,n){"use strict";n.r(t),n.d(t,"VideoCallModule",(function(){return p}));var o=n("ofXK"),i=n("PSD3"),a=n.n(i),r=n("fXoL"),c=n("N+K7"),s=n("dz5x"),l=n("tyNb");function d(e,t){1&e&&(r.Mb(0),r.Ob(1,"div",2),r.Ob(2,"span",3),r.oc(3," Please Wait... "),r.Kb(4,"div",4),r.Nb(),r.Nb(),r.Lb())}function b(e,t){1&e&&(r.Ob(0,"div",9),r.Kb(1,"img",10),r.Ob(2,"p"),r.oc(3,"You don't have any meeting yet."),r.Nb(),r.Ob(4,"a",11),r.oc(5,"Book one now"),r.Nb(),r.Nb())}function g(e,t){if(1&e&&(r.Ob(0,"div",12),r.Ob(1,"h4",2),r.oc(2,"Your meeting will start in"),r.Nb(),r.Ob(3,"h1",13),r.oc(4),r.Ob(5,"span",14),r.oc(6,"hrs"),r.Nb(),r.oc(7),r.Ob(8,"span",14),r.oc(9,"mins"),r.Nb(),r.oc(10),r.Ob(11,"span",14),r.oc(12,"seconds"),r.Nb(),r.Nb(),r.Ob(13,"div",2),r.Ob(14,"a",15),r.oc(15," Go to Dashboard "),r.Nb(),r.Nb(),r.Nb()),2&e){var n=r.Yb(2);r.zb(4),r.qc("",n.hour," "),r.zb(3),r.qc(" ",n.minute," "),r.zb(3),r.qc(" ",n.second," ")}}function f(e,t){if(1&e){var n=r.Pb();r.Ob(0,"div",16),r.Ob(1,"h5",17),r.oc(2,"Your meeting"),r.Nb(),r.Ob(3,"div",18),r.Ob(4,"div",19),r.Wb("click",(function(){return r.jc(n),r.Yb(2).toggleScreen()})),r.Ob(5,"i",20),r.oc(6," fullscreen "),r.Nb(),r.Nb(),r.Kb(7,"iframe",21),r.Nb(),r.Nb()}}function m(e,t){1&e&&(r.Ob(0,"div"),r.Ob(1,"div",9),r.Kb(2,"img",10),r.Ob(3,"p"),r.oc(4,"Meeting Over"),r.Nb(),r.Ob(5,"a",22),r.oc(6," Go to Dashboard"),r.Nb(),r.Nb(),r.Nb())}function u(e,t){if(1&e&&(r.Ob(0,"div",5),r.nc(1,b,6,0,"div",6),r.nc(2,g,16,3,"div",7),r.nc(3,f,8,0,"div",8),r.nc(4,m,7,0,"div",0),r.Nb()),2&e){var n=r.Yb();r.zb(1),r.ec("ngIf",-1===n.status),r.zb(1),r.ec("ngIf",0===n.status),r.zb(1),r.ec("ngIf",1===n.status),r.zb(1),r.ec("ngIf",2===n.status)}}var h,v,O=[{path:"",component:(h=function(){function e(t,n,o){_classCallCheck(this,e),this.http=t,this.share=n,this.router=o,this.status=0,this.hour=0,this.minute=0,this.second=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.status=-1,this.loading=!0,this.http.postToBackend("/users/check-current",{userId:this.share.user.id}).then((function(t){if(e.loading=!1,console.log(t),7e3==t.statusCode){var n=t.data.endTime?t.data.endTime:t.data.startTime;t.data.endTime?e.status=1:t.data.startTime&&(e.status=0,e.startTimer(t.data.startTime)),console.log(new Date(n)),e.startTimer(n)}})).catch((function(t){e.loading=!1,a.a.fire({title:"Failed to load data",text:t.message,icon:"error"})}))}},{key:"toggleScreen",value:function(){$("#iframe").hasClass("fullscreen")?($("#iframe").removeClass("fullscreen"),$("#toggle-icon").html("fullscreen"),$("body,html").removeClass("fixed")):($("#iframe").addClass("fullscreen"),$("#toggle-icon").html("fullscreen_exit"),$("body,html").addClass("fixed"))}},{key:"startTimer",value:function(e){var t,n=this;this.x=setInterval((function(){console.log("hit"),t=(new Date).getTime();var o=new Date(e)-t,i=(Math.floor(o/864e5),Math.floor(o%864e5/36e5)),a=Math.floor(o%36e5/6e4),r=Math.floor(o%6e4/1e3);n.hour=i,n.minute=a,n.second=r,o<0&&0==n.status&&(clearInterval(n.x),n.status=1),o<0&&1==n.status&&(clearInterval(n.x),n.status=2)}),1e3)}}]),e}(),h.\u0275fac=function(e){return new(e||h)(r.Jb(c.a),r.Jb(s.a),r.Jb(l.c))},h.\u0275cmp=r.Db({type:h,selectors:[["app-video-call"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"text-center"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"container"],["class","meeting-over",4,"ngIf"],["class","counter",4,"ngIf"],["class","video-call-container",4,"ngIf"],[1,"meeting-over"],["src","assets/img/icons/end.svg","alt",""],["routerLink","/dashboard/new-meeting",1,"btn"],[1,"counter"],[1,"text-center","text-dark"],[1,"small"],["routerLink","/dashboard",1,"btn","btn-primary"],[1,"video-call-container"],[1,"text-center","mb-3"],["id","iframe",1,"iframe-container"],[1,"toggle-screen",3,"click"],["id","toggle-icon",1,"material-icons"],["src","https://tokbox.com/embed/embed/ot-embed.js?embedId=bec6518c-a0ab-4c90-a177-f906c4b1979c&room=DEFAULT_ROOM&iframe=true","width","100%","height","auto","scrolling","auto","allow","microphone; camera"],["routerLink","/admin",1,"btn"]],template:function(e,t){1&e&&(r.nc(0,d,5,0,"ng-container",0),r.nc(1,u,5,4,"div",1)),2&e&&(r.ec("ngIf",t.loading),r.zb(1),r.ec("ngIf",!t.loading))},directives:[o.k,l.e],styles:[".meeting-over[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:5rem}.meeting-over[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.6;height:7rem;margin-bottom:2rem}.meeting-over[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600}.iframe-container[_ngcontent-%COMP%]{z-index:2;margin:4rem 0;width:100%;height:0;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);padding-bottom:56.25%;position:relative;overflow:hidden}.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;left:0;top:0;border:none;height:100%;width:100%}.toggle-screen[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;right:0;padding:.5rem;z-index:10}.toggle-screen[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4rem;color:#fff}@media (max-width:47.99em){.toggle-screen[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:5rem}}#iframe.fullscreen[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;top:0;left:0;margin:0;z-index:9999}.counter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6rem;margin-top:10vh}.counter[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{color:#858585;font-size:3rem;margin-right:1rem}@media (max-width:35.99em){.counter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5rem}.counter[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-size:2.5rem}}"]}),h)}],p=((v=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:v}),v.\u0275inj=r.Gb({factory:function(e){return new(e||v)},imports:[[o.b,l.f.forChild(O)]]}),v)}}]);