(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XfPR:function(t,n,o){"use strict";o.r(n),o.d(n,"BlogPostModule",(function(){return i}));var l=o("ofXK"),e=o("fXoL"),c=o("N+K7"),b=o("tyNb");const s=[{path:"",component:(()=>{class t{constructor(t,n){this.http=t,this.route=n}ngOnInit(){this.route.params.subscribe(t=>{console.log(t),this.http.postToBackend("/admin/blog/detail",{blogId:t.id}).then(t=>{console.log(t),this.blog=t.data}).catch(t=>{console.log(t)})})}}return t.\u0275fac=function(n){return new(n||t)(e.Jb(c.a),e.Jb(b.a))},t.\u0275cmp=e.Db({type:t,selectors:[["app-blog-post"]],decls:10,vars:7,consts:[[1,"blog-container"],[1,"text-center","text-dark"],[1,"text-center","text-big"],[1,"row","justify-content-center","mt-5"],[1,"col-lg-10"],["alt","",1,"blog-thumb",3,"src"],[1,"mt-5",3,"innerHTML"]],template:function(t,n){1&t&&(e.Ob(0,"section",0),e.Ob(1,"h3",1),e.nc(2),e.Nb(),e.Ob(3,"p",2),e.nc(4),e.Zb(5,"date"),e.Nb(),e.Ob(6,"div",3),e.Ob(7,"div",4),e.Kb(8,"img",5),e.Kb(9,"div",6),e.Nb(),e.Nb(),e.Nb()),2&t&&(e.zb(2),e.pc(" ",null==n.blog?null:n.blog.title," "),e.zb(2),e.pc(" ",e.ac(5,4,null==n.blog?null:n.blog.postedOn,"MMMM d, y")," "),e.zb(4),e.dc("src",null==n.blog?null:n.blog.thumbnailImage,e.kc),e.zb(1),e.dc("innerHTML",null==n.blog?null:n.blog.content,e.jc))},pipes:[l.d],styles:[""]}),t})()}];let i=(()=>{class t{}return t.\u0275mod=e.Hb({type:t}),t.\u0275inj=e.Gb({factory:function(n){return new(n||t)},imports:[[l.b,b.f.forChild(s)]]}),t})()}}]);