(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t);n(146),n(147),n(73);var a=n(173),i=n(0),r=n.n(i),o=n(150),s=n(145),c=function(e){var t=e.data,n=t.heading,a=t.description,i=t.btnTxt,o=e.elemId;return r.a.createElement("section",{className:"banner-area",id:o,style:{background:"url(images/banner.jpeg) 50%",backgroundSize:"cover"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row fullscreen d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"banner-content col-lg-7"},r.a.createElement("h1",null,n),r.a.createElement("p",{className:"pt-20 pb-20"},a),r.a.createElement(s.Link,{className:"primary-btn",to:""},i)))))},d={tile:function(e){var t=e.data,n=t.heading,a=t.description,i=t.icon;return r.a.createElement("div",{className:"single-offer d-flex flex-row pb-30"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"images/"+i,alt:n})),r.a.createElement("div",{className:"desc"},r.a.createElement(s.Link,{to:""},r.a.createElement("h4",null,n)),r.a.createElement("p",null,a)))}},l=function(e){var t=e.data,n=t.heading,a=t.description,i=e.deps,o=e.elemId;return r.a.createElement("section",{className:"we-offer-area section-gap",id:o},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"menu-content pb-60 col-lg-10"},r.a.createElement("div",{className:"title text-center"},r.a.createElement("h1",{className:"mb-10"},n),r.a.createElement("p",null,a)))),r.a.createElement("div",{className:"row flex-wrap"},i.map(function(e){var t=d[e.name];return e.data.map(function(e,n){return r.a.createElement(t,{data:e,key:n})})}))))},m="824489971";t.default=function(e){var t=e.pageContext;return r.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=e.allPagesJson.edges.find(function(e){return e.node.id===t.id}).node.components.sort(function(e,t){return e.position-t.position});return r.a.createElement(o.a,null,n.map(function(e,t){switch(e.name.toLowerCase()){case"banner":return r.a.createElement(c,{data:e.data,elemId:e.title.toLowerCase(),key:t});case"grid":return r.a.createElement(l,{data:e.data,deps:e.dependencies,elemId:e.title.toLowerCase(),key:t});default:return""}}))},data:a})}},146:function(e,t,n){var a=n(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},147:function(e,t,n){"use strict";var a=n(11),i=n(26),r=n(27),o=n(24),s=[].sort,c=[1,2,3];a(a.P+a.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n(148)(s)),"Array",{sort:function(e){return void 0===e?s.call(r(this)):s.call(r(this),i(e))}})},148:function(e,t,n){"use strict";var a=n(24);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},173:function(e){e.exports={data:{allPagesJson:{edges:[{node:{id:"a2h45d7e9e",components:[{name:"editor",title:"Text Editor",position:2,data:{heading:"We offer the best services",description:"Who are in extremely love with eco friendly system",btnTxt:null},dependencies:[]}]}},{node:{id:"g5shhgl021",components:[{name:"hero",title:"Hero",position:1,data:{heading:"Our blog",description:"This is our blog page. You can find the latest news here.",btnTxt:null},dependencies:[]},{name:"excerpts",title:"Excerpts",position:2,data:null,dependencies:null}]}},{node:{id:"32d23we2e2",components:[{name:"editor",title:"Text Editor",position:2,data:{heading:"We offer the best services",description:"How does friendship play a role in your health?",btnTxt:null},dependencies:[]}]}},{node:{id:"at3B9E95H3",components:[{name:"grid",title:"Services",position:2,data:{heading:"We offer the best services",description:"this is some description for my banner!",btnTxt:null},dependencies:[{name:"tile",data:[{heading:"Unlimited Colors",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",icon:"s1.png"},{heading:"Smart Security",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",icon:"s2.png"},{heading:"Endless Support1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",icon:"s3.png"},{heading:"Same Day Delivery",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",icon:"s4.png"}]}]},{name:"banner",title:"Banner",position:1,data:{heading:"Have a nice day",description:"Some vague description for my gorgeous banner!",btnTxt:"Join us!"},dependencies:[]}]}}]}}}}}]);
//# sourceMappingURL=component---src-templates-index-js-fcf1c31575afdca975f4.js.map