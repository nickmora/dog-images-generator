(this["webpackJsonprandom-dog-generator"]=this["webpackJsonprandom-dog-generator"]||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){e.exports=n.p+"static/media/Infinity-2.5s-357px.8ca07674.gif"},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),l=(n(31),n(18)),i=(n(32),n(54)),s=n(55),m=n(39),u=n(56),g=n(58),d=function(e){return o.a.createElement(i.a,{style:{paddingTop:150},container:!0,spacing:10,justify:"center"},o.a.createElement(s.a,null,o.a.createElement(m.a,{style:{padding:15}},o.a.createElement(i.a,{item:!0,xs:12},e.image?o.a.createElement("img",{style:{height:"100%"},src:e.image,alt:"A joyous looking dog"}):o.a.createElement(a.Fragment,null,o.a.createElement("p",null,"Loading..."),o.a.createElement("img",{src:n(37)})))),o.a.createElement(u.a,null,o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(g.a,{onClick:e.reset},"See a New Dog")),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(g.a,{onClick:e.reset},"Save this Dog")))))},E=n(57);var f=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){n||fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),r(e.message)}))}),[n]),console.log(n),o.a.createElement("div",{className:"App"},o.a.createElement(E.a,null,o.a.createElement(d,{image:n,reset:function(){return r(null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ab2c30a0.chunk.js.map