(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(146),r=a(170),o=a(529),s={resourceImage:{width:"100%",height:"786px",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url("+a.n(o).a+")",minWidth:"1024px",backgroundPosition:"50% 35%",top:"0",left:"0"},subTitle:{display:"flex",position:"relative",left:"109px"},subtitleRule:{width:"22.5px",height:"0.6px",backgroundColor:"#ffffff",marginTop:"87px"},subtitleText:{width:"500.3px",height:" 24px",fontFamily:"Oswald",fontSize:"16px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.83",letterSpacing:"4.4px",marginLeft:"50px",marginTop:"70px",color:"#ffffff"},mediaResources:{width:"571.5px",height:"115.5px",fontFamily:"Oswald",fontSize:"88px",fontWeight:"bold",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.27",letterSpacing:"0.8px",color:"#ffffff",marginLeft:"109px"},arrowBack:{transform:"rotate(180deg)",position:"absolute",left:"7em",top:"40em"}};var c=Object(l.withStyles)(s)(function(e){var t=e.classes;return i.a.createElement(r.a,{classes:t,subtitleTexts:"Lorem Ipsum Dolor sit.",mediaResources:"Media Resources."})}),m=a(181),f=a(182),u=(a(169),a(7)),p=a.n(u),d=a(143);var g=Object(l.withStyles)({card:{width:"315px",paddingLeft:"50px",height:"450.2px"},links:{display:"grid"},linkText:{width:"100%",color:"#77064c",height:"34.8px",fontSize:"16.8px",fontStyle:"normal",fontFamily:"Montserrat",fontWeight:"bold",lineHeight:"24.8px",fontStretch:"normal",textTransform:"none",letterSpacing:"0.6px"},titleText:{width:"242.4px",height:"69.7px",fontFamily:"Oswald",fontSize:"34px",fontWeight:"bold",fontStyle:"normal",fontStretch:"normal",lineHeight:"0.99",letterSpacing:"1.7px",color:"#023256",marginTop:"90px"},cardText:{width:"219.8px",height:"128.3px",fontFamily:"Montserrat",fontSize:"15px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"2.5",letterSpacing:"1px",color:"#023256"}})(function(e){var t=e.classes,a=e.title,n=e.text,l=e.link,r=e.link2,o="";return r&&(o=i.a.createElement(d.a,{className:t.linkText},r)),i.a.createElement(d.b,{className:t.card},i.a.createElement(d.c,null,i.a.createElement(d.e,null,i.a.createElement(d.h,{gutterBottom:!0,variant:"h5",component:"h2",className:t.titleText},a),i.a.createElement(d.h,{component:"p",className:t.cardText},n))),i.a.createElement(d.d,null,i.a.createElement("div",{className:t.links},i.a.createElement(d.a,{size:"small",className:t.linkText},l),o)))}),h=[{title:"Data",text:"Lorem ipsum dolor sit amet conc tetur adipi scing elit lorem.",link:"Data Link 1"},{title:"Video",text:"Consec tetur adipisc ing elit lorem ipsum.",link:"Video Link 1",link2:"Video Link 2"},{title:"Research",text:"Lorem ipsum dolor sit amet conc tetur adipi scing elit",link:"Link to Gill’s research"},{title:"Visualisations",text:"Lorem ipsum dolor sit amet conse ctetur.",link:"Visualisation Link"}],x={cardStyle:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"#ffffff",boxShadow:"none",marginTop:"95px",marginBottom:"65px"},parentCard:{width:"100%",height:"auto",alignItems:"center",justifyContent:"center",marginTop:"102.2px",backgroundColor:"#ffffff"}},A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={resourceVideos:h},t}return p()(t,e),t.prototype.render=function(){var e=this.state.resourceVideos;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:x.parentCard},i.a.createElement("div",{style:x.cardStyle},e.map(function(e){return i.a.createElement(g,{key:e.title,title:e.title,text:e.text,link:e.link,link2:e.link2})}))))},t}(n.Component),E=(a(165),a(157));t.default=Object(E.a)(function(){return i.a.createElement("div",{className:"main-container-parent"},i.a.createElement(c,null),i.a.createElement(A,null),i.a.createElement(m.a,null),i.a.createElement(f.a,null))})},163:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAAAXNSR0IArs4c6QAAAPdJREFUWAntmbENwjAQRWPEAkyAvAEdDSPQR4IBUOZCFEzDCGzAAAhi/kcprjG6o4z/SV927B9H93JJJKfrFF0pJQuDkwBgnaAn1DtPadc2wRrRMl6QoNXKAXAyxMqyIWg1YBwHqR4iJBuCJmi/CPwxh/JSpUW5eaElGFdYfB+9wEz9W+Q1QAuT3xv9Y0rpyjEC26C98UBRJTBi5kBolmTV3ehEMXmT0wXFlQXMUPF0lzA9oLPH3IhnjTx3kC0mPpJ8j90bYeBL0/ul9K02c5dgBW6wYAlWgEDAqsqKwdL2ToDX14oK426rNhAj4CZo2qIOQnP/BPkA7xZ5mzsk8EcAAAAASUVORK5CYII="},165:function(e,t,a){},169:function(e,t,a){"use strict";a(201)("link",function(e){return function(t){return e(this,"a","href",t)}})},170:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(143),r=a(146),o=a(162),s=a(180),c=a.n(s),m=function(e){var t=e.listClass,a=e.to,n=e.customClass,l=e.children;return i.a.createElement("li",{className:t},i.a.createElement(o.Link,{to:a,className:n},l))},f=Object(r.withStyles)({liNav:{display:"inline-block",marginRight:"4rem",textDecoration:"none",fontFamily:"Oswald",fontSize:"1.2em",fontWeight:"bold",fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"1.1px",textAlign:"right",color:"#ffffff",left:"3em",padding:"25px","&:hover":{padding:"25px",background:"rgba(255, 255, 255, 0.1)",borderLeft:"6px solid white",color:"white"}},seaLogo:{height:"14em",bottom:"4em",position:"relative"},parentNav:{position:"relative",top:"2em",width:"100%",left:"0"},ulNav:{listStyle:"none",display:"flex",zIndex:"3"},firstChild:{marginRight:"auto"}})(function(e){var t=e.classes,a=i.a.createElement("img",{src:c.a,className:t.seaLogo,alt:"seaLogoImage"});return i.a.createElement("div",{className:t.parentNav},i.a.createElement("header",null,i.a.createElement("ul",{className:t.ulNav},i.a.createElement(m,{to:"/",listClass:t.firstChild},a),i.a.createElement(m,{to:"/news/",customClass:t.liNav},"News."),i.a.createElement(m,{to:"/about/",customClass:t.liNav},"About Us."),i.a.createElement(m,{to:"/resources/",customClass:t.liNav},"Resources"))))}),u=a(163),p=a.n(u);t.a=function(e){var t=e.classes,a=e.subtitleTexts,n=e.mediaResources;return i.a.createElement("div",{className:t.resourceImage},i.a.createElement(f,null),i.a.createElement("div",{className:t.subTitle},i.a.createElement("div",{className:t.subtitleRule}),i.a.createElement(l.h,{variant:"body1",gutterBottom:!0,className:t.subtitleText},a)),i.a.createElement(l.h,{variant:"body1",gutterBottom:!0,className:t.mediaResources},n),i.a.createElement("div",{className:t.arrowBack},i.a.createElement("img",{src:p.a,alt:"Arrow back"})))}},201:function(e,t,a){var n=a(12),i=a(24),l=a(18),r=/"/g,o=function(e,t,a,n){var i=String(l(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(r,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},529:function(e,t,a){e.exports=a.p+"static/artem@3x-9dfa070f4c876f59724fc5fc710844a9.png"}}]);
//# sourceMappingURL=component---src-pages-resources-js-936eea30a18caefd8630.js.map