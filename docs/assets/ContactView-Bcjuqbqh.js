import{r as o,c as n,a,b as C,d as E,t as V,w as b,v as y,n as k,e as S,F as B,o as u}from"./index-CO_WKNi1.js";const T={key:0,class:"alert alert-success my-3"},U={key:1,class:"alert alert-danger my-3"},D={key:2,class:"alert alert-info"},F={key:3,class:"card p-3 shadow"},I={class:"form-floating mb-3"},h={class:"form-floating mb-3"},z={class:"invalid-feedback"},J={class:"form-floating mb-3"},$={__name:"ContactView",setup(O){const d=o(!1),c=o(!1),v=o(""),i=o(!1),m=o(!0),f=o(!0),p=o(!0),g=o("Campo requerido"),t=o({name:"",email:"",message:""}),w=()=>{x()&&(i.value=!1,d.value=!0,fetch("https://portfolio-api-pi-eight.vercel.app/email",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)}).then(s=>s.json()).then(()=>{t.value={name:"",email:"",message:""},d.value=!1,c.value=!0}).catch(s=>{d.value=!1,v.value=s.message,console.error(s.data)}))},x=()=>{i.value=!0,m.value=!0,p.value=!0,f.value=!0;const{name:s,email:e,message:l}=t.value;let r=!0;r=r&&s&&l,s||(m.value=!1),l||(p.value=!1);const j=M(e);return r=r&&j,r},M=s=>{const e=new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);let l=!0;return s.length||(l=!1,g.value="Campo requerido"),l&&!e.test(s)&&(l=!1,g.value="Ingrese un email válido"),f.value=l,l},q=()=>{v.value=""},N=()=>{c.value=!1};return(s,e)=>(u(),n(B,null,[e[12]||(e[12]=a("h1",null,"Contacto",-1)),c.value?(u(),n("div",T,[e[4]||(e[4]=C(" Mensaje enviado correctamente. ")),a("span",{style:{cursor:"pointer",float:"right"},onClick:N},e[3]||(e[3]=[a("i",{class:"fa-solid fa-xmark"},null,-1)]))])):E("",!0),v.value?(u(),n("div",U,[C(V(v.value)+" ",1),a("span",{style:{cursor:"pointer",float:"right"},onClick:q},e[5]||(e[5]=[a("i",{class:"fa-solid fa-xmark"},null,-1)]))])):E("",!0),d.value?(u(),n("div",D,"Enviando...")):(u(),n("div",F,[a("form",{class:"needs-validation",onSubmit:S(w,["prevent"]),novalidate:""},[a("div",I,[b(a("input",{class:k(["form-control",{"is-invalid":i.value&&!m.value,"is-valid":i.value&&m.value}]),id:"nombre",type:"text",placeholder:"Nombre","onUpdate:modelValue":e[0]||(e[0]=l=>t.value.name=l),required:""},null,2),[[y,t.value.name,void 0,{trim:!0}]]),e[6]||(e[6]=a("label",{for:"nombre"},"Nombre",-1)),e[7]||(e[7]=a("small",{class:"invalid-feedback"},"Campo requerido",-1))]),a("div",h,[b(a("input",{class:k(["form-control",{"is-invalid":i.value&&!f.value,"is-valid":i.value&&f.value}]),type:"email",placeholder:"Email","onUpdate:modelValue":e[1]||(e[1]=l=>t.value.email=l),required:""},null,2),[[y,t.value.email,void 0,{trim:!0}]]),e[8]||(e[8]=a("label",{for:"email"},"Email",-1)),a("small",z,V(g.value),1)]),a("div",J,[b(a("textarea",{class:k(["form-control",{"is-invalid":i.value&&!p.value,"is-valid":i.value&&p.value}]),placeholder:"Mensaje...","onUpdate:modelValue":e[2]||(e[2]=l=>t.value.message=l),required:""},null,2),[[y,t.value.message,void 0,{trim:!0}]]),e[9]||(e[9]=a("label",{for:"nombre"},"Mensaje",-1)),e[10]||(e[10]=a("small",{class:"invalid-feedback"},"Campo requerido",-1))]),e[11]||(e[11]=a("div",null,[a("button",{class:"btn btn-primary"},"Enviar")],-1))],32)]))],64))}};export{$ as default};
