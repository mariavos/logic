(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(149),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(155),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(156),c=n(0),o=n.n(c),l=n(4),u=n.n(l),s=n(157),d=n.n(s),m=n(145),p=(n(168),function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"footer-content"})))))}),f=(n(169),function(e){var t=e.isScrolled;return o.a.createElement("header",{id:"header",className:t?"header-scrolled":""},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-center justify-content-between d-flex"},o.a.createElement("div",{id:"logo"},o.a.createElement(m.Link,{to:"/"},o.a.createElement("img",{src:Object(m.withPrefix)("images/logo.png"),alt:"Startup"}))),o.a.createElement("nav",{id:"nav-menu-container"},o.a.createElement("ul",{className:"nav-menu"},o.a.createElement("li",null,o.a.createElement(m.Link,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(m.Link,{to:"#services"},"Services")),o.a.createElement("li",null,o.a.createElement(m.Link,{to:"/blog/"},"Blog")),o.a.createElement("li",null,o.a.createElement(m.Link,{to:"/generic/"},"Generic")))))))}),v=(n(170),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isScrolled:!1},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY>200;t!==e.state.isScrolled&&e.setState({isScrolled:t})})},n.render=function(){var e=this;return o.a.createElement(m.StaticQuery,{query:"1044757290",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Startup template for TippetCMS"},{name:"keywords",content:"startup template, TippetCMS"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(f,{isScrolled:e.state.isScrolled}),e.props.children,o.a.createElement(p,null))},data:i})},t}(o.a.Component));v.propTypes={children:u.a.node.isRequired};t.a=v},155:function(e,t,n){var a;e.exports=(a=n(167))&&a.default||a},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Startup"}}}}},167:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(68),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){}}]);
//# sourceMappingURL=1-6f486ac28b5b44e62ba1.js.map