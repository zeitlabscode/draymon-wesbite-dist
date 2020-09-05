(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Vqaw:function(e,t,r){"use strict";r.r(t),r.d(t,"SignupModule",(function(){return p}));var o=r("ofXK"),n=r("3Pt+");class i{static patternValidator(e,t){return r=>r.value?e.test(r.value)?null:t:null}static passwordMatchValidator(e){e.get("password").value!==e.get("confirmPassword").value&&e.get("confirmPassword").setErrors({NoPassswordMatch:!0})}}var a=r("PSD3"),s=r.n(a),c=r("fXoL"),l=r("N+K7"),m=r("dz5x"),d=r("tyNb");const b=[{path:"",component:(()=>{class e{constructor(e,t,r,o){this.http=e,this.share=t,this.fb=r,this.router=o,this.submitted=!1}createSignupForm(){return this.fb.group({fullName:new n.c(null,{validators:[n.o.required,n.o.minLength(3),n.o.maxLength(50)]}),email:[null,n.o.compose([n.o.email,n.o.required])],mobileNo:[null,n.o.compose([n.o.required])],password:[null,n.o.compose([n.o.required,i.patternValidator(/\d/,{hasNumber:!0}),i.patternValidator(/[A-Z]/,{hasCapitalCase:!0}),n.o.minLength(6)])]})}ngOnInit(){this.registrationForm=this.createSignupForm()}register(){this.submitted=!0,console.log(this.registrationForm.value),this.registrationForm.invalid||(console.log(this.registrationForm.value),$("#signup-btn").addClass("running"),$("#signup-btn").prop("disabled",!0),this.http.postToBackend("/users/register",this.registrationForm.value).then(e=>{$("#signup-btn").removeClass("running"),$("#signup-btn").prop("disabled",!1),console.log(e),this.submitted=!1,7e3===e.statusCode?(s.a.fire({icon:"success",title:"Registered Successfully. Verify your account.",text:"We have sent you a code to your registered mail ID. Enter the code and verify your account",confirmButtonText:"Verify"}),this.router.navigate(["/verify"])):s.a.fire(7007===e.statusCode?{icon:"warning",title:"Some error occured",text:e.message}:{icon:"error",title:"Internal Server Error"})}).catch(e=>{$("#signup-btn").removeClass("running"),$("#signup-btn").prop("disabled",!1),s.a.fire({icon:"error",title:"Internal Server Error"}),console.log(e)}))}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(m.a),c.Jb(n.b),c.Jb(d.b))},e.\u0275cmp=c.Db({type:e,selectors:[["app-signup"]],decls:26,vars:1,consts:[[1,"form-wrapper"],[1,"form-header"],[1,"text-dark","mb-5"],[1,"text-primary"],[1,"form"],[1,"form-card"],[1,"text-dark","text-center","border-1","mb-5"],[3,"formGroup","submit"],["formControlName","fullName","type","text","placeholder","Enter your name",1,"form-input"],["formControlName","email","type","email","placeholder","Enter your email",1,"form-input"],["formControlName","mobileNo","type","number","placeholder","Enter your Contact No.",1,"form-input"],["formControlName","password","type","password","placeholder","Enter Your Password",1,"form-input"],["type","submit","id","signup-btn",1,"btn","form-btn","btn-dark","mt-2","ld-ext-right"],[1,"ld","ld-ring","ld-spin-fast"],[1,"form-text"],["routerLink","/login",1,"link"],["src","assets/img/bg/shape-1.svg","alt","",1,"bg","bg-bl","form-bg","form-bg--1"],[1,"form-circle","bg","bg-circle"],[1,"bg","bg-tr","form-circle-1"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"h4",2),c.jc(3," Hi! "),c.Kb(4,"br"),c.Ob(5,"span",3),c.jc(6," Welcome to Draymon Capitals "),c.Nb(),c.Nb(),c.Nb(),c.Ob(7,"div",4),c.Ob(8,"div",5),c.Ob(9,"h3",6),c.jc(10," Get Started "),c.Nb(),c.Ob(11,"form",7),c.Wb("submit",(function(){return t.register()})),c.Kb(12,"input",8),c.Kb(13,"input",9),c.Kb(14,"input",10),c.Kb(15,"input",11),c.Ob(16,"button",12),c.jc(17," Signup "),c.Kb(18,"div",13),c.Nb(),c.Nb(),c.Nb(),c.Ob(19,"p",14),c.jc(20," Already have an account? "),c.Ob(21,"a",15),c.jc(22,"Login "),c.Nb(),c.Nb(),c.Nb(),c.Kb(23,"img",16),c.Kb(24,"div",17),c.Kb(25,"div",18),c.Nb()),2&e&&(c.zb(11),c.bc("formGroup",t.registrationForm))},directives:[n.q,n.i,n.f,n.a,n.h,n.d,n.l,d.d],styles:[".form[_ngcontent-%COMP%]{max-width:45rem;width:100%;text-align:center}.form-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;min-height:100vh;overflow:hidden;background-color:#e0e8f5;padding:15rem 0 5rem;position:relative}@media (max-width:47.99em){.form-wrapper[_ngcontent-%COMP%]{padding-top:20rem}}.form-header[_ngcontent-%COMP%]{text-align:center;opacity:0;position:relative;z-index:10;-webkit-animation:fade_up .3s cubic-bezier(.25,.46,.45,.94) forwards;animation:fade_up .3s cubic-bezier(.25,.46,.45,.94) forwards;-webkit-animation-delay:.2s;animation-delay:.2s}.form-card[_ngcontent-%COMP%]{box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);border-radius:1rem;padding:3rem 3rem 4rem;background-color:#fff;position:relative;z-index:5;-webkit-animation:fade_up .5s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_up .5s cubic-bezier(.45,.19,.13,1.26) forwards}.form-input[_ngcontent-%COMP%]{display:block;width:100%;margin:0 auto 3rem;padding:1rem 2rem;background-color:#eef4ff;outline:none!important;font-family:Inter;transition:all .3s cubic-bezier(.25,.46,.45,.94);border:none;border-bottom:1.2px solid transparent}.form-input[_ngcontent-%COMP%]::-webkit-input-placeholder{opacity:.7}.form-input[_ngcontent-%COMP%]:focus{border-color:#1ac293;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.form-text[_ngcontent-%COMP%]{margin-top:2rem;color:#858585}.form-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;font-weight:700}.form-bg--1[_ngcontent-%COMP%]{width:40rem;opacity:.4;transform:translate(10%,20%)}.form-circle[_ngcontent-%COMP%]{top:12vh;right:28vw;width:30rem;height:30rem}.form-circle-1[_ngcontent-%COMP%]{width:40rem;height:40rem;opacity:.1;border-radius:50%;border:1.5px solid #202020;transform:translate(30%,-40%)}select[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");background-repeat:no-repeat;background-position-x:99%;background-position-y:7px}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[o.b,n.m,n.g,d.e.forChild(b)]]}),e})()}}]);