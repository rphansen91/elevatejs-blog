(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0UK8":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("tRbT");a.a=function(e){var a=e.content,t=e.sidebar;return r.a.createElement(c.a,{container:!0,spacing:0},r.a.createElement(c.a,{item:!0,md:9,xs:12,className:"main-content"},a),r.a.createElement(c.a,{item:!0,md:3,xs:12,className:"sidebar-content border-left-2"},t))}},"2G31":function(e,a,t){"use strict";var n=t("HWB9"),r=t("q1tI"),c=t.n(r),i=t("ofer"),o=t("hao3"),s=t("OJkI"),l=t("o4QW"),d=t("Z3vd"),m=t("Wbzz"),A=t("iae6"),p=t("k8Y/"),g=t.n(p);a.a=function(e){e.q;var a=e.activePost,t=e.loading,r=e.error,p=e.filter,u=void 0===p?function(e){return e}:p,f=n.data.allMarkdownRemark.edges.map(function(e){return e.node.frontmatter});return c.a.createElement("div",{className:"article-sidebar"},c.a.createElement("section",null),c.a.createElement(i.a,{variant:"h4",color:"textPrimary",className:"my-2 text-center"},"Articles ",r?"- "+r:""),t&&c.a.createElement(A.a,{style:{margin:"auto"}}),g()(f,"publishedAt","desc").filter(u).slice(0,6).reduce(function(e,t,n){var r,i,A,p;console.log(t),n&&n%2==0&&e.push(c.a.createElement(o.b,{style:{display:"block",maxWidth:"100%",margin:"auto",width:350},key:n+"ad"}));var g=a&&a.publishedAt===t.publishedAt&&a.title===t.title;return e.push(c.a.createElement(m.Link,{"aria-label":"Read More",style:{padding:"12px 24px",display:"block"},to:t.path,key:n},c.a.createElement(s.a,{isActive:g,title:t.title,image:n<4&&(null===(r=t.urlToImage)||void 0===r?void 0:null===(i=r.childImageSharp)||void 0===i?void 0:null===(A=i.fluid)||void 0===A?void 0:A.src),actions:c.a.createElement(l.a,null,c.a.createElement(d.a,(p={color:"primary","aria-label":"Read More",variant:"contained"},p.color="secondary",p),g?"Currently Reading":"Read More"))}))),e},[]))}},HWB9:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"publishedAt":"June 20, 2020","title":"React Hawk","description":"React state management library","author":"Ryan P. Hansen","urlToImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVQoz2PQ5dFhAAEFDnkGLiYu6XaVFjkQX4hFiJGVkZUBBjiZOMF0vGQsw3SNKYz9ar0ME9X6UDAc/M/5zwiiHQTtVver9axkIAFMUutjRGIzMAANYAJxelQ7zSep9/+foj5xLYjPzsiuwcjAyAtTnCmTDnZoklSC8AyNqYp9at08QFeB9QJpPiBmg5iq3s88Qa2XA0jPW6g97/8szelBQGEOZgbmeiCdA8QhQJzPxMDkD6RDg8QCtKdpTC4C6kkAGpICxEFAnA/ETghnq/fPnaM58z9Q8MYG/TV8IAOBBrgDaXMgNgViFyhbR4tbS3imxjT1CWp9LkD15kBsDcSOQKyNbKAzEL8H4ktAiQ4GMsEkWMQADfIBYmsQe7L6BPZQsWAQkxHoSlCAM0LZYLU5MpkMQO8yAtUzAi1HwSB5AO5TYgpODP7SAAAAAElFTkSuQmCC","aspectRatio":2.7551020408163267,"src":"/static/fa064c32d29c97189840dce3e5b56f93/819a5/react-hawk-logo.png","srcSet":"/static/fa064c32d29c97189840dce3e5b56f93/3c722/react-hawk-logo.png 135w,\\n/static/fa064c32d29c97189840dce3e5b56f93/69f22/react-hawk-logo.png 270w,\\n/static/fa064c32d29c97189840dce3e5b56f93/819a5/react-hawk-logo.png 540w,\\n/static/fa064c32d29c97189840dce3e5b56f93/5716b/react-hawk-logo.png 810w,\\n/static/fa064c32d29c97189840dce3e5b56f93/a45dc/react-hawk-logo.png 1080w,\\n/static/fa064c32d29c97189840dce3e5b56f93/c44a9/react-hawk-logo.png 1108w","sizes":"(max-width: 540px) 100vw, 540px"}}},"sourceName":"React Hawk","path":"/blog/react-hawk"}}},{"node":{"frontmatter":{"publishedAt":"June 20, 2020","title":"TypeScript Mongo Codegen","description":"Code generation for seamless interaction between GraphQL and MongoDB","author":"Ryan P. Hansen","urlToImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADVklEQVQ4y2VTW0jTURg/Z4uahlFE4UP1UBRRSVDKtv/lbM5t2Szn/v+pM5euTZnaBa3IGmiWZmatmzqdzvuw0IIKwkuYmmZSdCNKegh6q5eCCKK30znHZs4+OHyX33d+5/vO+Q4QRVElCAIERIgGEYnYgshBpBNVACBFBEtYp/0vj+d5SLloAJIVO08qChRkSUgvQINFXE5tdxPvyT2v20xtjHOj8hZzsADPC7G8wMPaMScc+HUCqHdzUL+HZ2SOSs06dxOHvW0on/rOGt2SSIW0ssVkcwAhI6CKVdDXA7zmnLhzBS7m77uwpag4jHBxl6ma+gWZ0kp84LkCZ2Gg5jQqvYCirywjz8w0l7tTUXrVkbQmMSEOLJDCk8nhqnAerm4p6VgQVgA1iD2aks/uNlFQ/0OcZw1Me7ceUnpDhte+i1nd7/fedY/IDaeHpcaqgfS6+ibbqVt3My75p9OCFTPWUNFwZuDiLWudlXV0HgNnsvzvlV7hHXOVFgrxh4Ka72VdZjziuoEHrY09Vcd8vzs89Zdn9/QZH1ubsxu8NT/7PFd/zGb342dyh59sg9ct5Uq6X4y0bHFpFTtWGJZaz+xa5bqp/eru1GKf3/Fh2N5c6ziSz8PGpJhIN+6TJUW9+Zdnpve3lkzIrToWM2THbVRvg/OvhJLnXhPEg2WuBvSx/I4DH+7OGLqXfSVnWm6vodB9+RrLebOvu/xtWrfxidyWOCN3jj2XujawonTm5Tr6OHQYZVMq/HBnkJ1ww1s20He8GvfLtR/fmW5vGpUClY+kwHGKTdrarFNy6MqIHFhP2n35xTWECelTinlMOdCEDDGMMJnTA5z+lhU5hdq3jxuDBRPpQcuk1OYnq3XC3vppMqvdP21vf01Iw1NSqGnc1pI2YQs6CK6h+yrMxRCJSDU/mBu57QDnYrBYwrbaBNL2+2+eUfwipxePSS2GxTmHjQchmeNYLc/BqK9DL3Y0sxkOSTeVAYtvSUGKg80jqQQ9lUIPJ+VQKfXPpRxRzGR2Kp/ZO5SNFp+SEMXo/g531OfmOE4VOZXauzSJEBfOwoXVHEVOhUHQxyzMo3ujfgpCiGlynzA1NXW10WhcTW0WXAsAaVnx+cAD+NgeZL9CI2j/yyOapf8Bvu03HDnqQtcAAAAASUVORK5CYII=","aspectRatio":1.3235294117647058,"src":"/static/49e7ad49fdedb40fca5438c38875d9d2/819a5/ts-mongo-codegen.png","srcSet":"/static/49e7ad49fdedb40fca5438c38875d9d2/3c722/ts-mongo-codegen.png 135w,\\n/static/49e7ad49fdedb40fca5438c38875d9d2/69f22/ts-mongo-codegen.png 270w,\\n/static/49e7ad49fdedb40fca5438c38875d9d2/819a5/ts-mongo-codegen.png 540w,\\n/static/49e7ad49fdedb40fca5438c38875d9d2/bc8e0/ts-mongo-codegen.png 800w","sizes":"(max-width: 540px) 100vw, 540px"}}},"sourceName":"TypeScript Mongo Codegen","path":"/blog/ts-mongo-codegen"}}}]}}}')},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("Bl7J"),i=t("1uMg"),o=t("ofer"),s=t("hao3"),l=t("0UK8"),d=t("2G31"),m=(t("UtSW"),function(){return r.a.createElement(l.a,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null),r.a.createElement("section",null),r.a.createElement(o.a,{variant:"h4",color:"textPrimary",align:"center",style:{marginBottom:"0.3rem"}},"Articles"),r.a.createElement(s.a,null)),sidebar:r.a.createElement(d.a,null)})});a.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement(m,null))}},UtSW:function(e,a,t){},iae6:function(e,a,t){"use strict";var n=t("k1TG"),r=t("aXB2"),c=t("q1tI"),i=t("iuhU"),o=t("H2TA"),s=t("NqtD");function l(e){var a,t,n;return a=e,t=0,n=1,e=(Math.min(Math.max(t,a),n)-t)/(n-t),e=(e-=1)*e*e+1}var d=c.forwardRef(function(e,a){var t,o=e.classes,d=e.className,m=e.color,A=void 0===m?"primary":m,p=e.disableShrink,g=void 0!==p&&p,u=e.size,f=void 0===u?40:u,h=e.style,k=e.thickness,v=void 0===k?3.6:k,b=e.value,w=void 0===b?0:b,x=e.variant,y=void 0===x?"indeterminate":x,S=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),E={},Q={},M={};if("determinate"===y||"static"===y){var O=2*Math.PI*((44-v)/2);E.strokeDasharray=O.toFixed(3),M["aria-valuenow"]=Math.round(w),"static"===y?(E.strokeDashoffset="".concat(((100-w)/100*O).toFixed(3),"px"),Q.transform="rotate(-90deg)"):(E.strokeDashoffset="".concat((t=(100-w)/100,t*t*O).toFixed(3),"px"),Q.transform="rotate(".concat((270*l(w/70)).toFixed(3),"deg)"))}return c.createElement("div",Object(n.a)({className:Object(i.a)(o.root,d,"inherit"!==A&&o["color".concat(Object(s.a)(A))],{indeterminate:o.indeterminate,static:o.static}[y]),style:Object(n.a)({width:f,height:f},Q,h),ref:a,role:"progressbar"},M,S),c.createElement("svg",{className:o.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},c.createElement("circle",{className:Object(i.a)(o.circle,g&&o.circleDisableShrink,{indeterminate:o.circleIndeterminate,static:o.circleStatic}[y]),style:E,cx:44,cy:44,r:(44-v)/2,fill:"none",strokeWidth:v})))});a.a=Object(o.a)(function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(d)}}]);
//# sourceMappingURL=component---src-pages-index-js-97357082072abf6c0904.js.map