(window["webpackJsonpvk-wheel"]=window["webpackJsonpvk-wheel"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},183:function(e,t,a){e.exports=a(284)},262:function(e,t,a){},275:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);a(184),a(210),a(212),a(213),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252);var n=a(0),r=a.n(n),l=a(65),i=a.n(l),c=a(39),o=a.n(c),s=a(66),u=a.n(s),h=a(97),d=a(24),f=a(104),m=a.n(f),g=a(103),b=a.n(g),v=(a(261),a(262),a(48)),w=a.n(v),p=a(42),E=a.n(p),O=a(98),j=a.n(O),F=a(67),S=a.n(F),P=a(68),C=a.n(P),I=["#F84","#8F4","#48F","#F8F"],k=["\u043e\u0434\u0438\u043d","\u0434\u0432\u0430","\u0442\u0440\u0438","\u0447\u0435\u0442\u044b\u0440\u0435"],x=function(e){var t=e.id,a=(e.go,e.fetchedUser,Object(n.useRef)(null)),l=Object(n.useRef)(null),i=Object(n.useRef)(null),c=Object(n.useState)(400),o=Object(d.a)(c,2),s=o[0],u=o[1],h=Object(n.useState)(400),f=Object(d.a)(h,2),m=f[0],g=f[1],b=Object(n.useState)(""),v=Object(d.a)(b,2),p=v[0],O=v[1],F=null,P=null,x=null,y=0,M=!1;Object(n.useEffect)((function(){u(window.innerWidth),g(window.innerHeight)}),[]),Object(n.useEffect)((function(){if(A(y),a.current){var e=null;setInterval((function(){var t=s+"/"+m;e!==t&&(e=t,F=P=null,A(y))}),10)}}),[s,m]);var A=function(e){var t=Math.min(s,m)/2.25|0;if(M||null===F){F=[];for(var n=0;n<k.length;n++){var r=a.current;r.width=r.height=2*t+10;var c=r.getContext("2d"),o=5+t,u=5+t,h=c.createRadialGradient(o,u,0,o,u,t);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.5)");for(var d=0;d<k.length;d++){var f=2*Math.PI*d/k.length,g=f+2*Math.PI/(0==d?1:k.length),b=2*Math.PI*(d+.5)/k.length;c.beginPath(),c.moveTo(o,u),c.arc(o,u,t,f,g,!1),c.fillStyle=I[d%4],c.fill(),c.fillStyle=h,c.fill(),c.save(),d==x?(c.fillStyle="#FFF",c.shadowColor="#FFF",c.shadowBlur=t/20):(c.fillStyle="#AAA",c.shadowColor="#000",c.shadowBlur=t/100),c.font="bold "+t/k.length*.7+"px serif",c.textAlign="center",c.textBaseline="middle",c.translate(o,u),c.rotate(b),c.fillText(k[d],.62*t,0),c.restore()}F.push(r)}}if(null===P){(P=l.current).width=P.height=10+2*t*1.25|0;var v=P.getContext("2d"),w=P.width/2,p=P.height/2;v.shadowOffsetX=t/80,v.shadowOffsetY=t/80,v.shadowBlur=t/40,v.shadowColor="rgba(0,0,0,0.5)",v.beginPath(),v.arc(w,p,1.025*t,0,2*Math.PI,!0),v.arc(w,p,.975*t,0,2*Math.PI,!1),v.fillStyle="#444",v.fill(),v.shadowOffsetX=t/40,v.shadowOffsetY=t/40;var E=v.createRadialGradient(w-t/7,p-t/7,0,w,p,t/3);E.addColorStop(0,"#FFF"),E.addColorStop(.2,"#F44"),E.addColorStop(1,"#811"),v.fillStyle=E,v.beginPath(),v.arc(w,p,t/3.5,0,2*Math.PI,!1),v.fill(),v.translate(w,p),v.rotate(Math.PI-.2),v.beginPath(),v.moveTo(1.1*-t,.05*-t),v.lineTo(.9*-t,0),v.lineTo(1.1*-t,.05*t),v.fillStyle="#F44",v.fill()}i.current.width=s,i.current.height=m;var O=s/2,j=m/2,S=i.current.getContext("2d");(x=Math.floor((-.2-e)*k.length/(2*Math.PI))%k.length)<0&&(x+=k.length),console.log(x),S.save(),S.translate(O,j),S.rotate(e),S.translate(-F[x].width/2,-F[x].height/2),S.drawImage(F[x],0,0),S.restore(),S.drawImage(P,O-P.width/2,j-P.height/2)};return r.a.createElement(w.a,{id:t},r.a.createElement(E.a,null,"\u0412\u0440\u0430\u0449\u0430\u0442\u044c \u043a\u043e\u043b\u0435\u0441\u043e"),r.a.createElement(S.a,null,r.a.createElement("canvas",{hidden:!0,ref:a,id:"canvas",width:"956",height:"754"}),r.a.createElement("canvas",{hidden:!0,ref:l,id:"canvas",width:"956",height:"754"}),r.a.createElement("canvas",{ref:i,id:"canvas",width:"956",height:"754"})),r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(j.a,{size:"xl",level:"2",onClick:function(){M||function(e,t){var a=performance.now(),n=y;requestAnimationFrame((function r(){var l=(performance.now()-a)/t;l>1&&(l=1),A(y=n+100*(e*l-.5*e*l*l)),l<1?requestAnimationFrame(r):(M=!1,O(k[x]))})),M=!0}(.5+.125*Math.random(),5e3)}},"\u0412\u0440\u0430\u0449\u0430\u0442\u044c \u043a\u043e\u043b\u0435\u0441\u043e")),r.a.createElement(C.a,null,p)))},y=a(69),M=a(102),A=a.n(M),T=a(99),B=a.n(T),R=a(100),U=a.n(R),W=a(101),G=a.n(W),K=(a(275),Object(y.b)()),V=function(e){return r.a.createElement(w.a,{id:e.id},r.a.createElement(E.a,{left:r.a.createElement(A.a,{onClick:e.go,"data-to":"home"},K===y.a?r.a.createElement(B.a,null):r.a.createElement(U.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:G.a,alt:"Persik The Cat"}))},q=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(null),c=Object(d.a)(i,2),s=c[0],f=c[1],g=Object(n.useState)(r.a.createElement(b.a,{size:"large"})),v=Object(d.a)(g,2),w=(v[0],v[1]);Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var p=function(e){l(e.currentTarget.dataset.to)};return r.a.createElement(m.a,{activePanel:a},r.a.createElement(x,{id:"home",fetchedUser:s,go:p}),r.a.createElement(V,{id:"persik",go:p}))};o.a.send("VKWebAppInit"),i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.40a88545.chunk.js.map