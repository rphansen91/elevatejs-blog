(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(273),i=a(272),l=a(484),c=a(269),s=a(309),m=a(305),u=(a(465),function(){return r.a.createElement(s.a,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,null),r.a.createElement("section",null),r.a.createElement(l.a,{variant:"h4",color:"textPrimary",align:"center",style:{marginBottom:"0.3rem"}},"Articles"),r.a.createElement(c.a,null)),sidebar:r.a.createElement(m.a,null)})});t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement(u,null))}},265:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(104),i=a.n(o);a.d(t,"a",function(){return i.a});a(267),a(26).default.enqueue,r.a.createContext({})},267:function(e,t,a){var n;e.exports=(n=a(270))&&n.default||n},269:function(e,t,a){"use strict";var n=a(0);n.Component;a.d(t,"c",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i});var r=function(){return null},o=function(){return null},i=function(e){e.style;return null}},270:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),o=a(139);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},272:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(294),i=a.n(o),l=function(e){return"https://rphansen91.github.io/elevatejs-blog"+e},c=function(e,t){return e&&"string"==typeof e?e:e&&e[t]&&"string"==typeof e[t]?e[t]:"https://rphansen91.github.io/elevatejs-blog/icon_540.png"},s=function(e){var t=e.title,a=e.description,n=e.images,r=e.contentType,o=e.url,i=e.published,l=e.updated,s=e.category,m=e.tags,u=e.twitter,p=[{itemprop:"name",content:t},{itemprop:"description",content:a},{itemprop:"image",content:c(n,"google")},{name:"description",content:a},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@hodl_stream"},{property:"twitter:title",content:t},{property:"twitter:description",content:a},{property:"twitter:creator",content:u},{property:"twitter:image",content:c(n,"twitter")},{property:"og:title",content:t},{property:"og:type",content:r||"website"},{property:"og:url",content:o},{property:"og:image",content:c(n,"facebook")},{property:"og:description",content:a},{property:"og:site_name",content:"Hodl Stream"},{property:"fb:app_id",content:"857737644405026"}];return i&&p.push({property:"article:published_time",content:i}),l&&p.push({property:"article:modified_time",content:l}),s&&p.push({property:"article:section",content:s}),m&&p.push({property:"article:tag",content:m}),p};t.a=function(e){var t=e.schema,a=e.title,n=void 0===a?"ElevateJS":a,o=e.description,c=void 0===o?"Track your crypto portfolio and visualize how it changes over time.":o,m=e.path,u=void 0===m?"/":m,p=e.twitter,d=void 0===p?"@elevatejs":p,g=e.images,f=void 0===g?{google:"",twitter:"",facebook:""}:g,y=e.contentType,h=e.published,E=e.updated,v=e.category,b=e.tags;return r.a.createElement(i.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:t?"http://schema.org/"+t:""},title:n.slice(0,60),link:[{rel:"canonical",href:l(u)}],meta:s({title:n.slice(0,60),description:c,images:f,contentType:y,url:l(u),published:h,updated:E,category:v,tags:b,twitter:d})},r.a.createElement("script",null,'\n      (adsbygoogle = window.adsbygoogle || []).push({\n        google_ad_client: "ca-pub-7183056818143738",\n        enable_page_level_ads: true\n      });\n    '),r.a.createElement("script",null,'\n      var subscribersSiteId = "7dde6afa-5044-4c8f-abaa-81576fbf673e";\n    '))}},273:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(265),i=a(485),l=a(488),c=a(487),s=a(489),m=a(285),u=a.n(m),p=a(286),d=a.n(p),g=a(193),f=Object(g.a)({palette:{type:"dark",secondary:{main:"#f1c80f"}}});f.typography.h1=f.typography.h4;var y=a(484),h=function(e){var t=e.onClick,a=e.style;return r.a.createElement(y.a,{variant:"h4",onClick:t,style:a},"ElevateJS")},E=function(e){var t=e.menu,a=e.toggleMenu;return r.a.createElement(i.a,{position:"static",className:"primary-gradient"},r.a.createElement(c.a,{container:!0,spacing:0},r.a.createElement(c.a,{item:!0,md:9,xs:12},r.a.createElement(l.a,null,r.a.createElement(s.a,{onClick:a,color:"default","aria-label":"Menu",style:{width:40,color:"#fff"}},t?r.a.createElement(u.a,{color:"inherit"}):r.a.createElement(d.a,{color:"inherit"})),r.a.createElement(o.a,{to:"/","aria-label":"Home",style:{verticalAlign:"middle",display:"flex",flex:1,marginLeft:-40,justifyContent:"center",textDecoration:"none"}},r.a.createElement(h,{style:{color:"#fff",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center"}})))),r.a.createElement(c.a,{item:!0,md:3,xs:12})))};E.defaultProps={menu:!1,toggleMenu:function(){}};var v=E,b=(a(287),function(){return r.a.createElement("div",{className:"page-footer primary-gradient"},r.a.createElement(c.a,{container:!0,spacing:0},r.a.createElement(c.a,{item:!0,md:9,xs:12},r.a.createElement("section",null,r.a.createElement(h,{style:{color:"#fff",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(x,{to:"/blog/"},"Blog"),r.a.createElement(x,{to:"/shop/"},"Shop")))),r.a.createElement(c.a,{item:!0,md:3,xs:12})))}),x=function(e){var t=e.children,a=e.to;return r.a.createElement(o.a,{to:a,style:{color:"white",margin:"0 4px",textDecoration:"none"}},r.a.createElement(y.a,{paragraph:!0},t))},k=a(501),w=a(494),S=a(490),j=a(491),N=a(493),C=a(492),M=a(288),D=a.n(M),A=a(292),O=a.n(A),P=a(289),R=a.n(P),H=a(290),_=a.n(H),T=a(291),I=a.n(T),B=function(e){return r.a.createElement(S.a,{className:e.className||""},r.a.createElement(o.a,{to:"/","aria-label":"home"},r.a.createElement(j.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(D.a,null)),r.a.createElement(N.a,null,r.a.createElement(y.a,{color:"textPrimary"},"Home")))),r.a.createElement(o.a,{to:"/blog/","aria-label":"blog"},r.a.createElement(j.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(R.a,null)),r.a.createElement(N.a,null,r.a.createElement(y.a,{color:"textPrimary"},"Blog")))),r.a.createElement(o.a,{to:"/shop/","aria-label":"shop"},r.a.createElement(j.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(_.a,null)),r.a.createElement(N.a,null,r.a.createElement(y.a,{color:"textPrimary"},"Shop")))))},F=function(e){return r.a.createElement(S.a,{className:e.className||""},r.a.createElement(o.a,{to:"/about/","aria-label":"about"},r.a.createElement(j.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(I.a,null)),r.a.createElement(N.a,null,r.a.createElement(y.a,{color:"textPrimary"},"About")))),r.a.createElement(o.a,{to:"/settings/","aria-label":"settings"},r.a.createElement(j.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(O.a,null)),r.a.createElement(N.a,null,r.a.createElement(y.a,{color:"textPrimary"},"Settings")))))},J=function(e){var t=e.open;return r.a.createElement(k.a,{open:t,variant:"permanent",style:{overflowX:"hidden"}},r.a.createElement(B,{className:t?"links open":"links"}),r.a.createElement(w.a,null),r.a.createElement(F,{className:t?"links open":"links"}),r.a.createElement("div",{style:{marginBottom:"4em"}}))};a(293),t.a=function(e){var t=e.children,a=Object(n.useState)(!1),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{open:o}),r.a.createElement("div",{className:"App "+(o?"open":"")},r.a.createElement(v,{menu:o,toggleMenu:function(){return i(!o)}}),r.a.createElement("main",{style:{flexGrow:1}},t),r.a.createElement(b,null)))}},279:function(e,t,a){"use strict";a(20),a(5),a(6),a(3),a(18);var n=a(0),r=a.n(n),o=a(98),i=a(495),l=a(497),c=a(496),s=a(484);a(311);t.a=function(e){var t=e.onClick,a=e.image,n=e.title,m=e.actions,u=e.imageStyle,p=e.large,d=void 0===p||p,g=e.isActive,f=void 0!==g&&g,y=(e.imageSize,function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["onClick","image","title","actions","imageStyle","large","isActive","imageSize"])),h=Object(o.a)(),E=f?h.palette.primary.main:h.palette.text.secondary;return r.a.createElement(i.a,{className:"article",style:Object.assign({color:E,cursor:"pointer"},y),onClick:t||function(e){return e}},a&&r.a.createElement(c.a,{style:Object.assign({paddingTop:"56.5%",height:"auto",width:"100%"},u),image:a,title:n}),r.a.createElement("div",{style:d?{}:{flex:1}},r.a.createElement(l.a,{style:{maxHeight:"3.6em",minHeight:"3.6em",whiteSpace:"normal",overflow:"hidden",padding:"0.4em",paddingBottom:0,lineHeight:"1em",textAlign:"left"}},r.a.createElement(s.a,{variant:"subtitle1",color:"textPrimary",component:"p",style:{lineHeight:1}},n)),m))}},305:function(e,t,a){"use strict";var n=a(306),r=a(0),o=a.n(r),i=a(484),l=a(269),c=a(279),s=a(498),m=a(455),u=a(265),p=a(361),d=a(312),g=a.n(d);t.a=function(e){e.q;var t=e.activePost,a=e.loading,r=e.error,d=e.filter,f=void 0===d?function(e){return e}:d,y=n.data.allMarkdownRemark.edges.map(function(e){return e.node.frontmatter});return o.a.createElement("div",{className:"article-sidebar"},o.a.createElement("section",null),o.a.createElement(i.a,{variant:"h4",color:"textPrimary",className:"my-2 text-center"},"Articles ",r?"- "+r:""),a&&o.a.createElement(p.a,{style:{margin:"auto"}}),g()(y,"publishedAt","desc").filter(f).slice(0,6).reduce(function(e,a,n){var r;console.log(a),n&&n%2==0&&e.push(o.a.createElement(l.b,{style:{display:"block",maxWidth:"100%",margin:"auto",width:350},key:n+"ad"}));var i=t&&t.publishedAt===a.publishedAt&&t.title===a.title;return e.push(o.a.createElement(u.a,{"aria-label":"Read More",style:{padding:"12px 24px",display:"block"},to:a.path,key:n},o.a.createElement(c.a,{isActive:i,title:a.title,image:n<4&&a.urlToImage,actions:o.a.createElement(s.a,null,o.a.createElement(m.a,(r={color:"primary","aria-label":"Read More",variant:"contained"},r.color="secondary",r),i?"Currently Reading":"Read More"))}))),e},[]))}},306:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{publishedAt:"June 20, 2020",title:"React Hawk",description:"React state management library",author:"Ryan P. Hansen",urlToImage:"/react-hawk-logo.png",sourceName:"React Hawk",path:"/blog/react-hawk"}}},{node:{frontmatter:{publishedAt:"June 20, 2020",title:"TypeScript Mongo Codegen",description:"Code generation for seamless interaction between GraphQL and MongoDB",author:"Ryan P. Hansen",urlToImage:"/ts-mongo-codegen.png",sourceName:"TypeScript Mongo Codegen",path:"/blog/ts-mongo-codegen"}}}]}}}},309:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(487);t.a=function(e){var t=e.content,a=e.sidebar;return r.a.createElement(o.a,{container:!0,spacing:0},r.a.createElement(o.a,{item:!0,md:9,xs:12,className:"main-content"},t),r.a.createElement(o.a,{item:!0,md:3,xs:12,className:"sidebar-content border-left-2"},a))}},361:function(e,t,a){"use strict";var n=a(1),r=a(7),o=a(0),i=a.n(o),l=(a(2),a(105)),c=a(266),s=a(271);function m(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var u=i.a.forwardRef(function(e,t){var a,o=e.classes,c=e.className,u=e.color,p=void 0===u?"primary":u,d=e.disableShrink,g=void 0!==d&&d,f=e.size,y=void 0===f?40:f,h=e.style,E=e.thickness,v=void 0===E?3.6:E,b=e.value,x=void 0===b?0:b,k=e.variant,w=void 0===k?"indeterminate":k,S=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},N={},C={};if("determinate"===w||"static"===w){var M=2*Math.PI*((44-v)/2);j.strokeDasharray=M.toFixed(3),C["aria-valuenow"]=Math.round(x),"static"===w?(j.strokeDashoffset="".concat(((100-x)/100*M).toFixed(3),"px"),N.transform="rotate(-90deg)"):(j.strokeDashoffset="".concat((a=(100-x)/100,a*a*M).toFixed(3),"px"),N.transform="rotate(".concat((270*m(x/70)).toFixed(3),"deg)"))}return i.a.createElement("div",Object(n.a)({className:Object(l.a)(o.root,c,"inherit"!==p&&o["color".concat(Object(s.a)(p))],{indeterminate:o.indeterminate,static:o.static}[w]),style:Object(n.a)({width:y,height:y},N,{},h),ref:t,role:"progressbar"},C,S),i.a.createElement("svg",{className:o.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.a.createElement("circle",{className:Object(l.a)(o.circle,g&&o.circleDisableShrink,{indeterminate:o.circleIndeterminate,static:o.circleStatic}[w]),style:j,cx:44,cy:44,r:(44-v)/2,fill:"none",strokeWidth:v})))});t.a=Object(c.a)(function(e){return{root:{display:"inline-block",lineHeight:1},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$mui-progress-circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$mui-progress-circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes mui-progress-circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(u)}}]);
//# sourceMappingURL=component---src-pages-index-js-30c4347f76cb037ff5fa.js.map