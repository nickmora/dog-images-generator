(this["webpackJsonprandom-dog-generator"]=this["webpackJsonprandom-dog-generator"]||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/Infinity-2.5s-357px.8ca07674.gif"},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(34),a(17)),l=(a(35),a(54)),s=a(56),m=a(25),u=a(57),d=a(62),g=a(36),h=function(e){return r.a.createElement(l.a,{style:{paddingTop:150},container:!0,spacing:10,justify:"center"},r.a.createElement(s.a,{style:{padding:15}},r.a.createElement(m.a,{style:{padding:[15,15,15,0]}},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(n.Fragment,null,r.a.createElement("img",{style:{height:"auto",maxHeight:"100%",maxWidth:1250},src:e.loading?g:e.image,alt:"A joyous looking dog"})))),r.a.createElement(u.a,null,r.a.createElement(l.a,{item:!0,xs:12,sm:6},r.a.createElement(d.a,{onClick:e.reset,variant:"contained",color:"primary",fullWidth:!0},"See a New Dog")),r.a.createElement(l.a,{item:!0,xs:12,sm:6},r.a.createElement(d.a,{id:"download-button",disabled:!0,fullWidth:!0},"Download Image")))))},f=a(60),p=a(58),E=a(59),b=function(){return r.a.createElement(p.a,{position:"static",justify:"center"},r.a.createElement(E.a,{variant:"h3"},"Dog Images Generator!"))},k=a(61),v=Object(k.a)((function(){return{Footer:{marginTop:200,backgroundColor:"#3f51b5",position:"static","& p":{color:"#fff"},"& a:link":{color:"pink",textDecoration:"none",cursor:"auto"},"& a:visited":{color:"red",cursor:"auto"},"& a:link:active":{color:"black"},"& a:visited:active":{color:"black"}}}})),y=function(){var e=v();return r.a.createElement("div",{className:e.Footer},r.a.createElement(E.a,{variant:"body2",justify:"center"},"All images used courtesy of the ",r.a.createElement("a",{rel:"noopener noreferrer",href:"https://dog.ceo",target:"_blank"},"Dogs API"),"; as such, images are subject to copyright were applicable",r.a.createElement("br",null),"This app was built by Nick Morales Copyright \xa9 2020 Some rights reserved, check out the source code ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/nickmora/dog-images-generator"},"here"),r.a.createElement("br",null),"To see more neat projects, check out my ",r.a.createElement("a",{href:"https://github.com/nickmora"},"GitHub")," or my website: ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://nickmorales.dev"},"NickMorales.dev")))};var w=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),l=Object(i.a)(c,2),s=l[0],m=l[1],u=function(){m(!0),fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()})).then((function(e){return o(e.message),m(!1)}))};return Object(n.useEffect)((function(){a||u()}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(f.a,null,r.a.createElement(h,{loading:s,image:a,reset:u})),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.3c8f2bc4.chunk.js.map