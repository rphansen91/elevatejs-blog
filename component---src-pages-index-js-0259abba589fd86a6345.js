(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0UK8":function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("tRbT");a.a=function(e){var a=e.content,t=e.sidebar;return n.a.createElement(i.a,{container:!0,spacing:0},n.a.createElement(i.a,{item:!0,md:9,xs:12,className:"main-content"},a),n.a.createElement(i.a,{item:!0,md:3,xs:12,className:"sidebar-content border-left-2"},t))}},"2G31":function(e,a,t){"use strict";var r=t("yDQL"),n=t("q1tI"),i=t.n(n),c=t("ofer"),o=t("hao3"),s=t("OJkI"),l=t("o4QW"),d=t("Z3vd"),m=t("Wbzz"),g=t("iae6"),u=t("k8Y/"),p=t.n(u);a.a=function(e){e.q;var a=e.activePost,t=e.loading,n=e.error,u=e.filter,A=void 0===u?function(e){return e}:u,f=r.data.allMarkdownRemark.edges.map(function(e){return e.node.frontmatter});return i.a.createElement("div",{className:"article-sidebar"},i.a.createElement("section",null),i.a.createElement(c.a,{variant:"h4",color:"textPrimary",className:"my-2 text-center"},"Articles ",n?"- "+n:""),t&&i.a.createElement(g.a,{style:{margin:"auto"}}),p()(f,"publishedAt","desc").filter(A).slice(0,6).reduce(function(e,t,r){var n,c,g,u;console.log(t),r&&r%2==0&&e.push(i.a.createElement(o.b,{style:{display:"block",maxWidth:"100%",margin:"auto",width:350},key:r+"ad"}));var p=a&&a.publishedAt===t.publishedAt&&a.title===t.title;return e.push(i.a.createElement(m.Link,{"aria-label":"Read More",style:{padding:"12px 24px",display:"block"},to:t.path,key:r},i.a.createElement(s.a,{isActive:p,title:t.title,image:r<4&&(null===(n=t.urlToImage)||void 0===n?void 0:null===(c=n.childImageSharp)||void 0===c?void 0:null===(g=c.fluid)||void 0===g?void 0:g.src),actions:i.a.createElement(l.a,null,i.a.createElement(d.a,(u={color:"primary","aria-label":"Read More",variant:"contained"},u.color="secondary",u),p?"Currently Reading":"Read More"))}))),e},[]))}},RXBc:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),i=t("Bl7J"),c=t("1uMg"),o=t("ofer"),s=t("hao3"),l=t("0UK8"),d=t("2G31"),m=(t("UtSW"),function(){return n.a.createElement(l.a,{content:n.a.createElement(n.a.Fragment,null,n.a.createElement(s.c,null),n.a.createElement("section",null),n.a.createElement(o.a,{variant:"h4",color:"textPrimary",align:"center",style:{marginBottom:"0.3rem"}},"Articles"),n.a.createElement(s.a,null)),sidebar:n.a.createElement(d.a,null)})});a.default=function(){return n.a.createElement(i.a,null,n.a.createElement(c.a,{title:"ElevateJS | Home"}),n.a.createElement(m,null))}},UtSW:function(e,a,t){},iae6:function(e,a,t){"use strict";var r=t("k1TG"),n=t("aXB2"),i=t("q1tI"),c=t("iuhU"),o=t("H2TA"),s=t("NqtD");function l(e){var a,t,r;return a=e,t=0,r=1,e=(Math.min(Math.max(t,a),r)-t)/(r-t),e=(e-=1)*e*e+1}var d=i.forwardRef(function(e,a){var t,o=e.classes,d=e.className,m=e.color,g=void 0===m?"primary":m,u=e.disableShrink,p=void 0!==u&&u,A=e.size,f=void 0===A?40:A,h=e.style,v=e.thickness,b=void 0===v?3.6:v,k=e.value,w=void 0===k?0:k,y=e.variant,E=void 0===y?"indeterminate":y,x=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},O={},R={};if("determinate"===E||"static"===E){var D=2*Math.PI*((44-b)/2);S.strokeDasharray=D.toFixed(3),R["aria-valuenow"]=Math.round(w),"static"===E?(S.strokeDashoffset="".concat(((100-w)/100*D).toFixed(3),"px"),O.transform="rotate(-90deg)"):(S.strokeDashoffset="".concat((t=(100-w)/100,t*t*D).toFixed(3),"px"),O.transform="rotate(".concat((270*l(w/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(r.a)({className:Object(c.a)(o.root,d,"inherit"!==g&&o["color".concat(Object(s.a)(g))],{indeterminate:o.indeterminate,static:o.static}[E]),style:Object(r.a)({width:f,height:f},O,h),ref:a,role:"progressbar"},R,x),i.createElement("svg",{className:o.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(c.a)(o.circle,p&&o.circleDisableShrink,{indeterminate:o.circleIndeterminate,static:o.circleStatic}[E]),style:S,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})))});a.a=Object(o.a)(function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(d)},yDQL:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"publishedAt":"June 20, 2020","title":"React Hawk","description":"React state management library","author":"Ryan P. Hansen","urlToImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVQoz52SQUsCQRTHZ3Z1W6JLlJmVSkK7mxp28VQJdQsMwlsRVBR0KUIK6WbooYh03dXs0iGCzn2I6BBduwnRd+gDTP8nu7JKHnJ2f/znvZ15+968YazPeE+/sYGGzOXOXOHKSjl2ueHap+HjrrU7k9tttXWTWVq1jTss3bE5HiFE27k2uvpqarctkRWc7MWRlMRoiQdVUnkniFahIJywEYwgB21iplbJ3RsNUddrHzDJp/SrqhQryk2jwf/8iPS5oy/PySfRNOolmMMykw+gyyAC5kEYR5KApu4MO4NENkEcJME0CIMMZRgBnwgoalrlC+UOURCJSdfQPDgEZ6Dg4751aA4/TqOiE+w7AnlQBHvgwjmLavkx/iCgPw3dugr4A2NwzyEoZReiOZjFeU9BZ/ZDuyoqGcf6hJPZBIhamhlzA5bADbLMQre+l1p+NuhAAAUs9PqDSpD3dpjTCy1Ezxkq4W6HvXQ1Bw6Zuu7eL+89+0+G7l3y2gNX/AuJr4U0SNln1AAAAABJRU5ErkJggg==","aspectRatio":1.9014084507042253,"src":"/elevatejs-blog/static/c9ef2f409258ba0a391aa42a78231948/819a5/react-hawk.png","srcSet":"/elevatejs-blog/static/c9ef2f409258ba0a391aa42a78231948/3c722/react-hawk.png 135w,\\n/elevatejs-blog/static/c9ef2f409258ba0a391aa42a78231948/69f22/react-hawk.png 270w,\\n/elevatejs-blog/static/c9ef2f409258ba0a391aa42a78231948/819a5/react-hawk.png 540w,\\n/elevatejs-blog/static/c9ef2f409258ba0a391aa42a78231948/bc8e0/react-hawk.png 800w","sizes":"(max-width: 540px) 100vw, 540px"}}},"sourceName":"React Hawk","path":"/blog/react-hawk/"}}},{"node":{"frontmatter":{"publishedAt":"June 20, 2020","title":"TypeScript Mongo Codegen","description":"Code generation for seamless interaction between GraphQL and MongoDB","author":"Ryan P. Hansen","urlToImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADVklEQVQ4y2VTW0jTURg/Z4uahlFE4UP1UBRRSVDKtv/lbM5t2Szn/v+pM5euTZnaBa3IGmiWZmatmzqdzvuw0IIKwkuYmmZSdCNKegh6q5eCCKK30znHZs4+OHyX33d+5/vO+Q4QRVElCAIERIgGEYnYgshBpBNVACBFBEtYp/0vj+d5SLloAJIVO08qChRkSUgvQINFXE5tdxPvyT2v20xtjHOj8hZzsADPC7G8wMPaMScc+HUCqHdzUL+HZ2SOSs06dxOHvW0on/rOGt2SSIW0ssVkcwAhI6CKVdDXA7zmnLhzBS7m77uwpag4jHBxl6ma+gWZ0kp84LkCZ2Gg5jQqvYCirywjz8w0l7tTUXrVkbQmMSEOLJDCk8nhqnAerm4p6VgQVgA1iD2aks/uNlFQ/0OcZw1Me7ceUnpDhte+i1nd7/fedY/IDaeHpcaqgfS6+ibbqVt3My75p9OCFTPWUNFwZuDiLWudlXV0HgNnsvzvlV7hHXOVFgrxh4Ka72VdZjziuoEHrY09Vcd8vzs89Zdn9/QZH1ubsxu8NT/7PFd/zGb342dyh59sg9ct5Uq6X4y0bHFpFTtWGJZaz+xa5bqp/eru1GKf3/Fh2N5c6ziSz8PGpJhIN+6TJUW9+Zdnpve3lkzIrToWM2THbVRvg/OvhJLnXhPEg2WuBvSx/I4DH+7OGLqXfSVnWm6vodB9+RrLebOvu/xtWrfxidyWOCN3jj2XujawonTm5Tr6OHQYZVMq/HBnkJ1ww1s20He8GvfLtR/fmW5vGpUClY+kwHGKTdrarFNy6MqIHFhP2n35xTWECelTinlMOdCEDDGMMJnTA5z+lhU5hdq3jxuDBRPpQcuk1OYnq3XC3vppMqvdP21vf01Iw1NSqGnc1pI2YQs6CK6h+yrMxRCJSDU/mBu57QDnYrBYwrbaBNL2+2+eUfwipxePSS2GxTmHjQchmeNYLc/BqK9DL3Y0sxkOSTeVAYtvSUGKg80jqQQ9lUIPJ+VQKfXPpRxRzGR2Kp/ZO5SNFp+SEMXo/g531OfmOE4VOZXauzSJEBfOwoXVHEVOhUHQxyzMo3ujfgpCiGlynzA1NXW10WhcTW0WXAsAaVnx+cAD+NgeZL9CI2j/yyOapf8Bvu03HDnqQtcAAAAASUVORK5CYII=","aspectRatio":1.3235294117647058,"src":"/elevatejs-blog/static/49e7ad49fdedb40fca5438c38875d9d2/819a5/ts-mongo-codegen.png","srcSet":"/elevatejs-blog/static/49e7ad49fdedb40fca5438c38875d9d2/3c722/ts-mongo-codegen.png 135w,\\n/elevatejs-blog/static/49e7ad49fdedb40fca5438c38875d9d2/69f22/ts-mongo-codegen.png 270w,\\n/elevatejs-blog/static/49e7ad49fdedb40fca5438c38875d9d2/819a5/ts-mongo-codegen.png 540w,\\n/elevatejs-blog/static/49e7ad49fdedb40fca5438c38875d9d2/bc8e0/ts-mongo-codegen.png 800w","sizes":"(max-width: 540px) 100vw, 540px"}}},"sourceName":"TypeScript Mongo Codegen","path":"/blog/ts-mongo-codegen/"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-0259abba589fd86a6345.js.map