(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(273),l=a(272),c=a(484),i=a(269);a(19),a(38),a(3);var s=function(e){return e},m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){var e=this.props,t=e.src,a=e.onScriptLoaded,n=void 0===a?s:a,r=e.onScriptError,o=void 0===r?s:r;(function(e){return new Promise(function(t,a){if("undefined"!=typeof document){var n=document.createElement("script");n.src=e,n.onload=t,n.onerror=a,document.body.appendChild(n)}else t()})})(t).then(n).catch(o)},o.render=function(){var e=this.props.children;return n.Children.only(e)},r}(n.Component);var u=function(e){var t=e.page,a=(e.name,e.tabs),n=void 0===a?"timeline":a;return r.a.createElement(m,{src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9",onScriptLoaded:function(){return FB.XFBML.parse()}},r.a.createElement("div",{className:"fb-page","data-href":"https://www.facebook.com/"+t+"/","data-tabs":n,"data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"},r.a.createElement("blockquote",{cite:"https://www.facebook.com/"+t+"/",className:"fb-xfbml-parse-ignore"},r.a.createElement("a",{href:"https://www.facebook.com/"+t+"/"}))))},p=(a(145),function(e){var t=e.width,a=void 0===t?"300px":t,n=e.link,o=e.username;return r.a.createElement(m,{src:"https://instawidget.net/js/instawidget.js?u="+n+"&width="+a},r.a.createElement("a",{href:"https://instawidget.net/v/user/"+o,id:"link-"+n}))}),d=function(e){var t=e.username;return r.a.createElement(m,{src:"https://platform.twitter.com/widgets.js"},r.a.createElement("a",{className:"twitter-timeline",href:"https://twitter.com/"+t}))},f=(a(464),function(){return r.a.createElement("div",null,r.a.createElement(i.c,null),r.a.createElement("section",null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"text-center"},r.a.createElement(c.a,{variant:"h1",color:"textPrimary"},"About"),r.a.createElement(c.a,{variant:"subtitle1",color:"textSecondary"},"Elevate JavaScript delivers in depth breakdowns of popular open source libraries.")),r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement(u,{page:"elevatejs",name:"ElevateJS",tabs:"timeline, events"})),r.a.createElement("div",{className:"about-content"},r.a.createElement(d,{username:"elevatejs"})),r.a.createElement("div",{className:"about-content"},r.a.createElement(p,{username:"elevatejs",link:"edfee4f5133f008b0c0787bf13bede2b061e23953e3298f30356155e5f35197e"})))),r.a.createElement(i.a,null))});t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"About",path:"/about"}),r.a.createElement(f,null))}},265:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(104),l=a.n(o);a.d(t,"a",function(){return l.a});a(267),a(26).default.enqueue,r.a.createContext({})},267:function(e,t,a){var n;e.exports=(n=a(270))&&n.default||n},269:function(e,t,a){"use strict";var n=a(0);n.Component;a.d(t,"c",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var r=function(){return null},o=function(){return null},l=function(e){e.style;return null}},270:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),o=a(139);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},272:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(294),l=a.n(o),c=function(e){return"https://rphansen91.github.io/elevatejs-blog"+e},i=function(e,t){return e&&"string"==typeof e?e:e&&e[t]&&"string"==typeof e[t]?e[t]:"https://rphansen91.github.io/elevatejs-blog/icon_540.png"},s=function(e){var t=e.title,a=e.description,n=e.images,r=e.contentType,o=e.url,l=e.published,c=e.updated,s=e.category,m=e.tags,u=e.twitter,p=[{itemprop:"name",content:t},{itemprop:"description",content:a},{itemprop:"image",content:i(n,"google")},{name:"description",content:a},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@hodl_stream"},{property:"twitter:title",content:t},{property:"twitter:description",content:a},{property:"twitter:creator",content:u},{property:"twitter:image",content:i(n,"twitter")},{property:"og:title",content:t},{property:"og:type",content:r||"website"},{property:"og:url",content:o},{property:"og:image",content:i(n,"facebook")},{property:"og:description",content:a},{property:"og:site_name",content:"Hodl Stream"},{property:"fb:app_id",content:"857737644405026"}];return l&&p.push({property:"article:published_time",content:l}),c&&p.push({property:"article:modified_time",content:c}),s&&p.push({property:"article:section",content:s}),m&&p.push({property:"article:tag",content:m}),p};t.a=function(e){var t=e.schema,a=e.title,n=void 0===a?"ElevateJS":a,o=e.description,i=void 0===o?"Track your crypto portfolio and visualize how it changes over time.":o,m=e.path,u=void 0===m?"/":m,p=e.twitter,d=void 0===p?"@elevatejs":p,f=e.images,E=void 0===f?{google:"",twitter:"",facebook:""}:f,g=e.contentType,h=e.published,v=e.updated,y=e.category,b=e.tags;return r.a.createElement(l.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:t?"http://schema.org/"+t:""},title:n.slice(0,60),link:[{rel:"canonical",href:c(u)}],meta:s({title:n.slice(0,60),description:i,images:E,contentType:g,url:c(u),published:h,updated:v,category:y,tags:b,twitter:d})},r.a.createElement("script",null,'\n      (adsbygoogle = window.adsbygoogle || []).push({\n        google_ad_client: "ca-pub-7183056818143738",\n        enable_page_level_ads: true\n      });\n    '),r.a.createElement("script",null,'\n      var subscribersSiteId = "7dde6afa-5044-4c8f-abaa-81576fbf673e";\n    '))}},273:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(265),l=a(485),c=a(488),i=a(487),s=a(489),m=a(285),u=a.n(m),p=a(286),d=a.n(p),f=a(193),E=Object(f.a)({palette:{type:"dark",secondary:{main:"#f1c80f"}}});E.typography.h1=E.typography.h4;var g=a(484),h=function(e){var t=e.onClick,a=e.style;return r.a.createElement(g.a,{variant:"h4",onClick:t,style:a},"ElevateJS")},v=function(e){var t=e.menu,a=e.toggleMenu;return r.a.createElement(l.a,{position:"static",className:"primary-gradient"},r.a.createElement(i.a,{container:!0,spacing:0},r.a.createElement(i.a,{item:!0,md:9,xs:12},r.a.createElement(c.a,null,r.a.createElement(s.a,{onClick:a,color:"default","aria-label":"Menu",style:{width:40,color:"#fff"}},t?r.a.createElement(u.a,{color:"inherit"}):r.a.createElement(d.a,{color:"inherit"})),r.a.createElement(o.a,{to:"/","aria-label":"Home",style:{verticalAlign:"middle",display:"flex",flex:1,marginLeft:-40,justifyContent:"center",textDecoration:"none"}},r.a.createElement(h,{style:{color:"#fff",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center"}})))),r.a.createElement(i.a,{item:!0,md:3,xs:12})))};v.defaultProps={menu:!1,toggleMenu:function(){}};var y=v,b=(a(287),function(){return r.a.createElement("div",{className:"page-footer primary-gradient"},r.a.createElement(i.a,{container:!0,spacing:0},r.a.createElement(i.a,{item:!0,md:9,xs:12},r.a.createElement("section",null,r.a.createElement(h,{style:{color:"#fff",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(w,{to:"/blog/"},"Blog"),r.a.createElement(w,{to:"/shop/"},"Shop")))),r.a.createElement(i.a,{item:!0,md:3,xs:12})))}),w=function(e){var t=e.children,a=e.to;return r.a.createElement(o.a,{to:a,style:{color:"white",margin:"0 4px",textDecoration:"none"}},r.a.createElement(g.a,{paragraph:!0},t))},x=a(501),k=a(494),j=a(490),N=a(491),_=a(493),S=a(492),C=a(288),P=a.n(C),A=a(292),B=a.n(A),J=a(289),M=a.n(J),L=a(290),O=a.n(L),T=a(291),D=a.n(T),F=function(e){return r.a.createElement(j.a,{className:e.className||""},r.a.createElement(o.a,{to:"/","aria-label":"home"},r.a.createElement(N.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(P.a,null)),r.a.createElement(_.a,null,r.a.createElement(g.a,{color:"textPrimary"},"Home")))),r.a.createElement(o.a,{to:"/blog/","aria-label":"blog"},r.a.createElement(N.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(M.a,null)),r.a.createElement(_.a,null,r.a.createElement(g.a,{color:"textPrimary"},"Blog")))),r.a.createElement(o.a,{to:"/shop/","aria-label":"shop"},r.a.createElement(N.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(O.a,null)),r.a.createElement(_.a,null,r.a.createElement(g.a,{color:"textPrimary"},"Shop")))))},H=function(e){return r.a.createElement(j.a,{className:e.className||""},r.a.createElement(o.a,{to:"/about/","aria-label":"about"},r.a.createElement(N.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(D.a,null)),r.a.createElement(_.a,null,r.a.createElement(g.a,{color:"textPrimary"},"About")))),r.a.createElement(o.a,{to:"/settings/","aria-label":"settings"},r.a.createElement(N.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(B.a,null)),r.a.createElement(_.a,null,r.a.createElement(g.a,{color:"textPrimary"},"Settings")))))},I=function(e){var t=e.open;return r.a.createElement(x.a,{open:t,variant:"permanent",style:{overflowX:"hidden"}},r.a.createElement(F,{className:t?"links open":"links"}),r.a.createElement(k.a,null),r.a.createElement(H,{className:t?"links open":"links"}),r.a.createElement("div",{style:{marginBottom:"4em"}}))};a(293),t.a=function(e){var t=e.children,a=Object(n.useState)(!1),o=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{open:o}),r.a.createElement("div",{className:"App "+(o?"open":"")},r.a.createElement(y,{menu:o,toggleMenu:function(){return l(!o)}}),r.a.createElement("main",{style:{flexGrow:1}},t),r.a.createElement(b,null)))}}}]);
//# sourceMappingURL=component---src-pages-about-js-77764e5867477fb7a86b.js.map