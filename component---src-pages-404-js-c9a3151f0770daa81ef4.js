(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{255:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(273),o=a(272);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"404"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},265:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(104),o=a.n(l);a.d(t,"a",function(){return o.a});a(267),a(26).default.enqueue,r.a.createContext({})},267:function(e,t,a){var n;e.exports=(n=a(270))&&n.default||n},270:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),l=a(139);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},272:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(294),o=a.n(l),c=function(e){return"https://rphansen91.github.io/elevatejs-blog"+e},i=function(e,t){return e&&"string"==typeof e?e:e&&e[t]&&"string"==typeof e[t]?e[t]:"https://rphansen91.github.io/elevatejs-blog/icon_540.png"},m=function(e){var t=e.title,a=e.description,n=e.images,r=e.contentType,l=e.url,o=e.published,c=e.updated,m=e.category,s=e.tags,p=e.twitter,u=[{itemprop:"name",content:t},{itemprop:"description",content:a},{itemprop:"image",content:i(n,"google")},{name:"description",content:a},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@hodl_stream"},{property:"twitter:title",content:t},{property:"twitter:description",content:a},{property:"twitter:creator",content:p},{property:"twitter:image",content:i(n,"twitter")},{property:"og:title",content:t},{property:"og:type",content:r||"website"},{property:"og:url",content:l},{property:"og:image",content:i(n,"facebook")},{property:"og:description",content:a},{property:"og:site_name",content:"Hodl Stream"},{property:"fb:app_id",content:"857737644405026"}];return o&&u.push({property:"article:published_time",content:o}),c&&u.push({property:"article:modified_time",content:c}),m&&u.push({property:"article:section",content:m}),s&&u.push({property:"article:tag",content:s}),u};t.a=function(e){var t=e.schema,a=e.title,n=void 0===a?"ElevateJS":a,l=e.description,i=void 0===l?"Track your crypto portfolio and visualize how it changes over time.":l,s=e.path,p=void 0===s?"/":s,u=e.twitter,g=void 0===u?"@elevatejs":u,E=e.images,d=void 0===E?{google:"",twitter:"",facebook:""}:E,f=e.contentType,y=e.published,h=e.updated,b=e.category,v=e.tags;return r.a.createElement(o.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:t?"http://schema.org/"+t:""},title:n.slice(0,60),link:[{rel:"canonical",href:c(p)}],meta:m({title:n.slice(0,60),description:i,images:d,contentType:f,url:c(p),published:y,updated:h,category:b,tags:v,twitter:g})},r.a.createElement("script",null,'\n      (adsbygoogle = window.adsbygoogle || []).push({\n        google_ad_client: "ca-pub-7183056818143738",\n        enable_page_level_ads: true\n      });\n    '),r.a.createElement("script",null,'\n      var subscribersSiteId = "7dde6afa-5044-4c8f-abaa-81576fbf673e";\n    '))}},273:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(265),o=a(485),c=a(488),i=a(487),m=a(489),s=a(285),p=a.n(s),u=a(286),g=a.n(u),E=a(193),d=Object(E.a)({palette:{type:"dark",secondary:{main:"#f1c80f"}}});d.typography.h1=d.typography.h4;var f=a(484),y=function(e){var t=e.onClick,a=e.style;return r.a.createElement(f.a,{variant:"h4",onClick:t,style:a},"ElevateJS")},h=function(e){var t=e.menu,a=e.toggleMenu;return r.a.createElement(o.a,{position:"static",className:"primary-gradient"},r.a.createElement(i.a,{container:!0,spacing:0},r.a.createElement(i.a,{item:!0,md:9,xs:12},r.a.createElement(c.a,null,r.a.createElement(m.a,{onClick:a,color:"default","aria-label":"Menu",style:{width:40,color:"#fff"}},t?r.a.createElement(p.a,{color:"inherit"}):r.a.createElement(g.a,{color:"inherit"})),r.a.createElement(l.a,{to:"/","aria-label":"Home",style:{verticalAlign:"middle",display:"flex",flex:1,marginLeft:-40,justifyContent:"center",textDecoration:"none"}},r.a.createElement(y,{style:{color:"#fff",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center"}})))),r.a.createElement(i.a,{item:!0,md:3,xs:12})))};h.defaultProps={menu:!1,toggleMenu:function(){}};var b=h,v=(a(287),function(){return r.a.createElement("div",{className:"page-footer primary-gradient"},r.a.createElement(i.a,{container:!0,spacing:0},r.a.createElement(i.a,{item:!0,md:9,xs:12},r.a.createElement("section",null,r.a.createElement(y,{style:{color:"#fff",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(w,{to:"/blog/"},"Blog"),r.a.createElement(w,{to:"/shop/"},"Shop")))),r.a.createElement(i.a,{item:!0,md:3,xs:12})))}),w=function(e){var t=e.children,a=e.to;return r.a.createElement(l.a,{to:a,style:{color:"white",margin:"0 4px",textDecoration:"none"}},r.a.createElement(f.a,{paragraph:!0},t))},x=a(501),k=a(494),_=a(490),j=a(491),N=a(493),S=a(492),C=a(288),P=a.n(C),O=a(292),T=a.n(O),A=a(289),B=a.n(A),J=a(290),M=a.n(J),D=a(291),H=a.n(D),I=function(e){return r.a.createElement(_.a,{className:e.className||""},r.a.createElement(l.a,{to:"/","aria-label":"home"},r.a.createElement(j.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(P.a,null)),r.a.createElement(N.a,null,r.a.createElement(f.a,{color:"textPrimary"},"Home")))),r.a.createElement(l.a,{to:"/blog/","aria-label":"blog"},r.a.createElement(j.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(B.a,null)),r.a.createElement(N.a,null,r.a.createElement(f.a,{color:"textPrimary"},"Blog")))),r.a.createElement(l.a,{to:"/shop/","aria-label":"shop"},r.a.createElement(j.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(M.a,null)),r.a.createElement(N.a,null,r.a.createElement(f.a,{color:"textPrimary"},"Shop")))))},F=function(e){return r.a.createElement(_.a,{className:e.className||""},r.a.createElement(l.a,{to:"/about/","aria-label":"about"},r.a.createElement(j.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(H.a,null)),r.a.createElement(N.a,null,r.a.createElement(f.a,{color:"textPrimary"},"About")))),r.a.createElement(l.a,{to:"/settings/","aria-label":"settings"},r.a.createElement(j.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(T.a,null)),r.a.createElement(N.a,null,r.a.createElement(f.a,{color:"textPrimary"},"Settings")))))},R=function(e){var t=e.open;return r.a.createElement(x.a,{open:t,variant:"permanent",style:{overflowX:"hidden"}},r.a.createElement(I,{className:t?"links open":"links"}),r.a.createElement(k.a,null),r.a.createElement(F,{className:t?"links open":"links"}),r.a.createElement("div",{style:{marginBottom:"4em"}}))};a(293),t.a=function(e){var t=e.children,a=Object(n.useState)(!1),l=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{open:l}),r.a.createElement("div",{className:"App "+(l?"open":"")},r.a.createElement(b,{menu:l,toggleMenu:function(){return o(!l)}}),r.a.createElement("main",{style:{flexGrow:1}},t),r.a.createElement(v,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-c9a3151f0770daa81ef4.js.map