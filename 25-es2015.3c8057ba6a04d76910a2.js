(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{SBtk:function(t,e,n){"use strict";n.r(e),n.d(e,"BlogPostModule",(function(){return O}));var o=n("ofXK"),i=n("PSD3"),r=n.n(i),b=n("fXoL"),c=n("JwGs"),a=n("tyNb"),l=n("N+K7"),s=n("m5X7");function g(t,e){if(1&t&&(b.Ob(0,"div"),b.Ob(1,"div",14),b.Ob(2,"a",15),b.Kb(3,"img",16),b.Nb(),b.Ob(4,"a",17),b.Kb(5,"img",18),b.Nb(),b.Ob(6,"a",19),b.Kb(7,"img",20),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.Yb();b.zb(2),b.fc("href",t.facebookURL,b.mc),b.zb(2),b.fc("href",t.linkedInURL,b.mc),b.zb(2),b.fc("href",t.twitterURL,b.mc)}}function d(t,e){1&t&&(b.Mb(0),b.Ob(1,"div",21),b.Kb(2,"img",22),b.Ob(3,"span",23),b.pc(4," Getting blog... "),b.Kb(5,"div",24),b.Nb(),b.Nb(),b.Lb())}function m(t,e){if(1&t&&(b.Ob(0,"div",28),b.Ob(1,"a",29),b.Ob(2,"div",30),b.Ob(3,"div",31),b.Kb(4,"img",32),b.Nb(),b.Ob(5,"div",33),b.Ob(6,"p",34),b.pc(7),b.Nb(),b.Ob(8,"h4",35),b.pc(9),b.Zb(10,"shorten"),b.Nb(),b.Ob(11,"p",34),b.pc(12),b.Zb(13,"shorten"),b.Nb(),b.Ob(14,"div",36),b.Ob(15,"a",37),b.pc(16,"Read More"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t){const t=e.$implicit;b.zb(4),b.fc("src",t.thumb,b.mc),b.zb(3),b.rc(" ",t.date," "),b.zb(2),b.rc(" ",b.bc(10,4,t.title,45)," "),b.zb(3),b.rc(" ",b.bc(13,7,t.desc,75)," ")}}function h(t,e){if(1&t&&(b.Ob(0,"section",25),b.Ob(1,"div",1),b.Ob(2,"h3",26),b.pc(3," You may also like "),b.Nb(),b.Ob(4,"div",10),b.oc(5,m,17,10,"div",27),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.Yb();b.zb(5),b.ec("ngForOf",t.blogs)}}let p=(()=>{class t{constructor(t,e,n){this.blogsData=t,this.route=e,this.http=n,this.blogs=[],this.linkedInURL="",this.facebookURL="",this.twitterURL="",this.postURL=""}ngOnInit(){this.loading=!0,this.route.params.subscribe(t=>{console.log(t),this.postURL="https://draymoncapital.com/blogpost/"+t.id,this.http.postToBackend("/admin/blog/detail",{blogId:t.id}).then(t=>{this.facebookURL="https://www.facebook.com/sharer.php?u="+this.postURL,this.twitterURL=`https://twitter.com/share?url=${this.postURL}&title=${t.data.title}`,this.linkedInURL=`https://www.linkedin.com/shareArticle?url=${this.postURL}&title=${t.data.title}`,console.log(t),this.loading=!1,this.blog=t.data}).catch(e=>{console.log(e),this.loading=!1,r.a.fire("Error",t.message,"error")})})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(c.a),b.Jb(a.a),b.Jb(l.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-blog-post"]],decls:22,vars:13,consts:[[1,"header-blog"],[1,"container"],[1,"text-center","text-dark"],[1,"text-center","text-big"],[1,"text-center","mb-2"],[4,"ngIf"],[1,"header-circle","bg","bg-circle"],["src","assets/img/bg/shape-1.svg","alt","",1,"bg","bg-br","header-bg"],["alt","",1,"blog-thumb",3,"src"],[1,"blog-post"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-10"],[1,"col-lg-10",3,"innerHTML"],["class","more-blogs bg-light last-section",4,"ngIf"],[1,"share-wrapper"],["target","_blank","title","Share this blog on facebook",1,"share-btn",3,"href"],["src","assets/img/icons/icons8-facebook.svg","alt","share on facebook"],["target","_blank","title","Share this blog on linkedin",1,"share-btn",3,"href"],["src","assets/img/icons/icons8-linkedin-circled.svg","alt","share on linkedin"],["target","_blank","title","Share this blog on twitter",1,"share-btn",3,"href"],["src","assets/img/icons/icons8-twitter-circled.svg","alt","share on twitter"],[1,"d-flex","flex-column","align-items-center","justify-content-center"],["src","assets/img/icons/blog.svg","alt","",1,"mb-5",2,"max-width","15rem"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"more-blogs","bg-light","last-section"],[1,"text-secondary","text-center"],["class","col-md-4 col-sm-6 text-center",4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-6","text-center"],["routerLink","/blogpost"],[1,"blog-card"],[1,"blog-img"],["alt","",3,"src"],[1,"blog-content"],[1,"blog-text"],[1,"blog-title"],[1,"text-right"],["routerLink","/blogpost",1,"link","blog-link"]],template:function(t,e){1&t&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"h3",2),b.pc(3),b.Nb(),b.Ob(4,"p",3),b.pc(5),b.Zb(6,"date"),b.Nb(),b.Ob(7,"h4",4),b.pc(8),b.Zb(9,"titlecase"),b.Nb(),b.oc(10,g,8,3,"div",5),b.oc(11,d,6,0,"ng-container",5),b.Nb(),b.Kb(12,"div",6),b.Kb(13,"img",7),b.Nb(),b.Ob(14,"div",1),b.Kb(15,"img",8),b.Ob(16,"div",9),b.Ob(17,"div",10),b.Ob(18,"div",11),b.Ob(19,"div",10),b.Kb(20,"div",12),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.oc(21,h,6,1,"section",13)),2&t&&(b.zb(3),b.rc(" ",null==e.blog?null:e.blog.title," "),b.zb(2),b.rc(" ",b.bc(6,8,null==e.blog?null:e.blog.postedOn,"MMMM d, y")," "),b.zb(3),b.rc(" ",b.ac(9,11,null==e.blog?null:e.blog.category)," "),b.zb(2),b.ec("ngIf",!e.loading),b.zb(1),b.ec("ngIf",e.loading),b.zb(4),b.ec("src",null==e.blog?null:e.blog.thumbnailImage,b.mc),b.zb(5),b.ec("innerHTML",null==e.blog?null:e.blog.content,b.lc),b.zb(1),b.ec("ngIf",e.blogs.length))},directives:[o.k,o.j,a.e],pipes:[o.d,o.p,s.a],styles:["@font-face{font-family:Inter;src:url(/assets/fonts/inter/Inter-Regular.ttf);font-weight:400;font-display:swap}.blog-card[_ngcontent-%COMP%]{margin:5rem auto 0;padding:1rem;border:1px solid #dfe6f6;transition:all .3s cubic-bezier(.25,.46,.45,.94);border-radius:.8rem;max-width:40rem;background-color:#fff}.blog-card[_ngcontent-%COMP%]:hover{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5)}@media (max-width:61.99em){.blog-card[_ngcontent-%COMP%]{margin:5rem auto 0}}.blog-img[_ngcontent-%COMP%]{height:18rem;overflow:hidden}.blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-position:top;object-position:top;-o-object-fit:cover;object-fit:cover}.blog-content[_ngcontent-%COMP%]{padding:2rem}.blog-title[_ngcontent-%COMP%]{color:#202020;font-weight:700;margin-bottom:1.5rem}.blog-text[_ngcontent-%COMP%]{font-weight:400;margin-bottom:.5rem}.blog-link[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#202020;display:inline-block;margin-top:1rem}.header-blog[_ngcontent-%COMP%]{padding:20rem 0;background-color:#dfe6f6;position:relative;overflow:hidden}@media (max-width:47.99em){.header-blog[_ngcontent-%COMP%]{padding:18rem 0 15rem}}.header-circle[_ngcontent-%COMP%]{top:10rem;left:10%;width:20rem;height:20rem}.header-bg[_ngcontent-%COMP%]{transform:translate(20%,10%);width:30rem}.blog-container[_ngcontent-%COMP%]{padding:8rem 0}@media (max-width:47.99em){.blog-container[_ngcontent-%COMP%]{padding:6rem 0}}.header-blog[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 0,100% 0,100% 80%,31% 100%,0 74%);clip-path:polygon(0 0,100% 0,100% 80%,31% 100%,0 74%);padding-bottom:30rem}@media (max-width:47.99em){.header-blog[_ngcontent-%COMP%]{padding:20rem 0 30rem}}.header-bg[_ngcontent-%COMP%]{transform:translate(20%,-20%)}.blog-thumb[_ngcontent-%COMP%]{margin-top:-20rem;width:100%;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);position:relative;z-index:10;border-radius:1.5rem}.share-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin:2rem auto 0;justify-content:space-between;max-width:22rem}.share-btn[_ngcontent-%COMP%]{box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);min-height:4.2rem;background-color:#fff;min-width:4.2rem;max-height:4.2rem;max-width:4.2rem;border-radius:50%;padding:.5rem}@media (max-width:47.99em){.share-btn[_ngcontent-%COMP%]{min-height:5.4rem;min-width:5.4rem;max-height:5.4rem;max-width:5.4rem}}"]}),t})();var f=n("OeD6");const u=[{path:"",component:p}];let O=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[o.b,f.a,a.f.forChild(u)]]}),t})()}}]);