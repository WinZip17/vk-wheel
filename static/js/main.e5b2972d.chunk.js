(window["webpackJsonpvk-wheel"]=window["webpackJsonpvk-wheel"]||[]).push([[0],{175:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);a(97),a(123),a(125),a(126),a(128),a(129),a(130),a(131),a(132),a(133),a(134),a(135),a(137),a(138),a(139),a(140),a(141),a(142),a(143),a(144),a(145),a(146),a(148),a(149),a(150),a(151),a(152),a(153),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165);var n=a(0),r=a.n(n),l=a(63),o=a.n(l),i=a(22),s=a.n(i),c=a(64),u=a.n(c),d=a(93),h=a(17),m=a(95),f=a.n(m),g=(a(174),a(175),a(34)),p=a.n(g),v=a(38),b=a.n(v),w=a(94),E=a.n(w),O=a(49),S=a.n(O),P=["#F84","#8F4","#48F","#F8F"],A=["\u043e\u0434\u0438\u043d","\u0434\u0432\u0430","\u0442\u0440\u0438","\u0447\u0435\u0442\u044b\u0440\u0435","\u043f\u044f\u0442\u044c","\u0448\u0435\u0441\u0442\u044c","\u0441\u0435\u043c\u044c","\u0432\u043e\u0441\u0435\u043c\u044c","\u0434\u0435\u0432\u044f\u0442\u044c","\u0434\u0435\u0441\u044f\u0442\u044c"],j=[0,1,0,0,0,0,3,0,0,0],F=function(e){var t=e.id,a=Object(n.useRef)(null),l=Object(n.useRef)(null),o=Object(n.useRef)(null),i=Object(n.useState)(380),s=Object(h.a)(i,2),c=s[0],u=s[1],d=Object(n.useState)(380),m=Object(h.a)(d,2),f=m[0],g=m[1],v=null,w=null,O=null,F=0,C=!1;Object(n.useEffect)((function(){u(window.innerWidth>0?window.innerWidth:380),g(window.innerHeight>0?.7*window.innerHeight:380)}),[]),Object(n.useEffect)((function(){if(M(F),a.current){var e=null;setInterval((function(){var t=c+"/"+f;e!==t&&(e=t,v=w=null,M(F))}),10)}}),[c,f]);var M=function(e){var t=Math.min(c,f)/2.25|0;if(C||null===v){v=[];for(var n=0;n<A.length;n++){var r=a.current;r.width=r.height=2*t+10;var i=r.getContext("2d"),s=5+t,u=5+t,d=i.createRadialGradient(s,u,0,s,u,t);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.5)");for(var h=0;h<A.length;h++){var m=2*Math.PI*h/A.length,g=m+2*Math.PI/(0==h?1:A.length),p=2*Math.PI*(h+.5)/A.length;i.beginPath(),i.moveTo(s,u),i.arc(s,u,t,m,g,!1),i.fillStyle=P[h%4],i.fill(),i.fillStyle=d,i.fill(),i.save(),h==O?(i.fillStyle="#FFF",i.shadowColor="#FFF",i.shadowBlur=t/20):(i.fillStyle="#AAA",i.shadowColor="#000",i.shadowBlur=t/100),i.font="bold "+t/A.length*.7+"px serif",i.textAlign="center",i.textBaseline="middle",i.translate(s,u),i.rotate(p),i.fillText(A[h],.62*t,0),i.restore()}v.push(r)}}if(null===w){(w=l.current).width=w.height=10+2*t*1.25|0;var b=w.getContext("2d"),E=w.width/2,S=w.height/2;b.shadowOffsetX=t/80,b.shadowOffsetY=t/80,b.shadowBlur=t/40,b.shadowColor="rgba(0,0,0,0.5)",b.beginPath(),b.arc(E,S,1.025*t,0,2*Math.PI,!0),b.arc(E,S,.975*t,0,2*Math.PI,!1),b.fillStyle="#444",b.fill(),b.shadowOffsetX=t/40,b.shadowOffsetY=t/40;var j=b.createRadialGradient(E-t/7,S-t/7,0,E,S,t/3);j.addColorStop(0,"#FFF"),j.addColorStop(.2,"#F44"),j.addColorStop(1,"#811"),b.fillStyle=j,b.beginPath(),b.arc(E,S,t/3.5,0,2*Math.PI,!1),b.fill(),b.translate(E,S),b.rotate(Math.PI-.2),b.beginPath(),b.moveTo(1.1*-t,.05*-t),b.lineTo(.9*-t,0),b.lineTo(1.1*-t,.05*t),b.fillStyle="#F44",b.fill()}o.current.width=c,o.current.height=f;var F=c/2,M=f/2,I=o.current.getContext("2d");(O=Math.floor((-.2-e)*A.length/(2*Math.PI))%A.length)<0&&(O+=A.length),I.save(),I.translate(F,M),I.rotate(e),I.translate(-v[O].width/2,-v[O].height/2),I.drawImage(v[O],0,0),I.restore(),I.drawImage(w,F-w.width/2,M-w.height/2)},I=function(e,t){return Math.floor(Math.random()*(t-e))+e};return r.a.createElement(p.a,{id:t},r.a.createElement("div",{className:"panel-well"},r.a.createElement("canvas",{ref:o,id:"canvas",width:"956",height:"754",className:"canvas"})),r.a.createElement(E.a,{align:"center"},r.a.createElement(b.a,{onClick:function(){if(!C){for(var t=function(){for(var e=[],t=0;t<j.length;t++)for(var a=0;a<j[t];a++)e.push(t);return e[I(0,e.length)]}(),a=360/A.length,n=360,l=0,o=360,i=A.length;i>0;i--)i===t+1&&(o=n-1),n-=a,i===t+1&&(l=n+1);!function(t,a){var n=performance.now(),l=F;requestAnimationFrame((function o(){var i=(performance.now()-n)/a;i>1&&(i=1),M(F=l+100*(t*i-.5*t*i*i)),i<1?requestAnimationFrame(o):(C=!1,e.setResult(A[O]),0===e.attempts?(e.setAttempts(1),e.setActivePanel("result")):1===e.attempts&&(e.setAttempts(2),e.setPopout(r.a.createElement(S.a,{size:"large",className:"ScreenSpinner"})),e.sendResult(A[O])))})),C=!0}(.62432-34906e-8*I(l,o),5e3)}},disabled:C,align:"center"},"\u0412\u0440\u0430\u0449\u0430\u0442\u044c \u043a\u043e\u043b\u0435\u0441\u043e")),r.a.createElement("canvas",{hidden:!0,ref:a,id:"canvas",width:"956",height:"754"}),r.a.createElement("canvas",{hidden:!0,ref:l,id:"canvas",width:"956",height:"754"}))},C=(a(92),function(e){return r.a.createElement(p.a,{id:e.id},r.a.createElement("div",{className:"\u0421ongratulationFormSell"},r.a.createElement("div",{className:"\u0421ongratulation mx-auto"},r.a.createElement("h2",null," \u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! "),r.a.createElement("p",null,"\u0412\u044b \u0432\u044b\u0433\u0440\u0430\u043b\u0438 ",e.result),r.a.createElement("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437"),r.a.createElement(b.a,{onClick:e.go,"data-to":"home",align:"left"},"\u0412\u0440\u0430\u0449\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{onClick:function(){e.setPopout(r.a.createElement(S.a,{size:"large",className:"ScreenSpinner"})),e.sendResult(e.result)},align:"right"},"\u0417\u0430\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0438\u0437"))))}),M=function(e){var t=(new Date).getHours(),a="\u0412\u0430\u0448 \u043f\u0440\u0438\u0437 ".concat(e.result,", \u043c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 30 \u043c\u0438\u043d\u0443\u0442"),n="\u0412\u0430\u0448 \u043f\u0440\u0438\u0437 ".concat(e.result,", \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0437\u0430\u0432\u0442\u0440\u0430 \u0434\u043e 11:00");return r.a.createElement(p.a,{id:e.id,className:"\u0421ongratulationFormSell"},r.a.createElement("div",{className:"\u0421ongratulation mx-auto"},r.a.createElement("h2",null,t<9||t>21?n:a)))},I="a2d7546a9a8d0056331bbc2b99a3432dd9750aa3a0d3561de6b6482b0592015bb97e321ffa210f48a9ea8",y=function(){var e=Object(n.useState)("home"),t=Object(h.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),i=Object(h.a)(o,2),c=i[0],m=i[1],g=Object(n.useState)(null),p=Object(h.a)(g,2),v=p[0],b=p[1],w=Object(n.useState)(null),E=Object(h.a)(w,2),O=E[0],S=E[1],P=Object(n.useState)(0),A=Object(h.a)(P,2),j=A[0],y=A[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,m(t),b(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,r=t.data;if("VKWebAppUpdateConfig"===n){var o=document.createAttribute("scheme");o.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(o)}"VKWebAppCallAPIMethodResult"===n&&"\u0421ongratulation"!==a&&(b(null),l("\u0421ongratulation"))})),function(){e.apply(this,arguments)}()}),[]);var x=function(e){l(e.currentTarget.dataset.to)},R=function(e){var t=new Date,a="\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: https://vk.com/id".concat(c.id,", \u0438\u043c\u044f: ").concat(c.first_name,". \u0412\u0440\u0430\u0449\u0430\u043b \u043a\u043e\u043b\u0435\u0441\u043e:  ").concat(t.toLocaleString("ru",{year:"numeric",month:"long",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"}),". \u0412\u044b\u0433\u0440\u0430\u043b: ").concat(e),n=Math.floor(1e9+Math.random()*(9e9+1-1e9)),r=Math.floor(1e9+Math.random()*(9e9+1-1e9));s.a.send("VKWebAppCallAPIMethod",{method:"messages.send",request_id:"sendOrder",params:{user_id:"184750457",v:"5.102",random_id:n,peer_id:"-189092828",message:a,access_token:I}}),s.a.send("VKWebAppCallAPIMethod",{method:"messages.send",request_id:"sendOrder",params:{user_id:"1587067",v:"5.102",random_id:r,peer_id:"-189092828",message:a,access_token:I}})};return r.a.createElement(f.a,{activePanel:a,popout:v},r.a.createElement(F,{id:"home",fetchedUser:c,go:x,setActivePanel:l,result:O,setResult:S,setAttempts:y,attempts:j,sendResult:R,setPopout:b}),r.a.createElement(C,{id:"result",go:x,result:O,setActivePanel:l,sendResult:R,setPopout:b}),r.a.createElement(M,{id:"\u0421ongratulation",go:x,result:O}))};s.a.send("VKWebAppInit"),o.a.render(r.a.createElement(y,null),document.getElementById("root"))},92:function(e,t,a){},96:function(e,t,a){e.exports=a(195)}},[[96,1,2]]]);
//# sourceMappingURL=main.e5b2972d.chunk.js.map