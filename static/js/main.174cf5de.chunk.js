(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){e.exports=n.p+"static/media/header_bg_rain.751dd399.jpg"},125:function(e,t,n){e.exports=n.p+"static/media/header_bg_snow.468404b7.jpg"},13:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return i});var a=function(e){return{type:"SET_ZIP",payload:e}},c=function(e){return{type:"REMOVE_ZIP_HISTORY",payload:e}},r=function(e){return{type:"SET_ZIP_HISTORY",payload:e}},i=function(e){return{type:"SET_UNIT_TYPE",payload:e}}},132:function(e,t,n){e.exports=n(334)},169:function(e,t,n){},331:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);n(133);var a=n(0),c=n.n(a),r=n(122),i=n.n(r),o=(n(169),n(4)),l=n(5),s=n(8),u=n(7),p=n(9),d=n(129),h=n(6),m=n(13),f=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"setupZipCodeHistory",value:function(){var e=localStorage.getItem("zip_history");if(e){e=JSON.parse(e);var t=!0;Array.isArray(e)&&e.length>0?e.forEach(function(e){e&&"string"===typeof e&&""!==e.trim()||(t=!1)}):t=!1,t?h.a.dispatch(Object(m.d)(e)):h.a.dispatch(Object(m.c)("03063"))}else h.a.dispatch(Object(m.c)("03063"))}},{key:"setupUnitType",value:function(){var e=localStorage.getItem("unit_type");!e||"imperial"!==e&&"metric"!==e||h.a.dispatch(Object(m.b)(e))}}]),e}(),v=n(335);function C(){return c.a.createElement("header",null,c.a.createElement("h1",null,"React Weather"),c.a.createElement("nav",null,c.a.createElement(v.a,{to:"/"},"Forecast"),c.a.createElement(v.a,{to:"/settings"},"Settings")))}var g=function(e){return c.a.createElement("button",{className:"menuToggle "+(e.open?"open":""),onClick:e.toggleClick,title:e.open?"Close Menu":"Open Menu"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))},y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={menuOpen:!1,zipCodeHistory:h.a.getState().zipCodeHistory},n.zipSelected=function(e,t){e.preventDefault(),h.a.dispatch(Object(m.c)(t))},n.toggleMenu=function(){var e=n.state.menuOpen;n.setState({menuOpen:!e})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.subscribe(function(){e.setState({zipCodeHistory:h.a.getState().zipCodeHistory})})}},{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"zipCodeHistory"},c.a.createElement(g,{open:this.state.menuOpen,toggleClick:this.toggleMenu}),c.a.createElement("span",null,"Recent Locations"),c.a.createElement("ul",{className:this.state.menuOpen?"mobileOpen":""},this.state.zipCodeHistory.map(function(t,n){return c.a.createElement("li",{key:n},c.a.createElement("a",{href:"/",title:"View weather for ".concat(t),onClick:function(n){e.zipSelected(n,t)}},t))})))}}]),t}(a.Component),E=n(80),b=n.n(E),O=n(124),w=n.n(O),z=n(125),x=n.n(z),j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={zipCode:"03063",zipLooksValid:!0},n.zipChanged=function(e){return n.setState({zipCode:e.target.value})},n.zipEntered=function(e){e.preventDefault(),h.a.dispatch(Object(m.c)(n.state.zipCode))},n.zipLooksInvalid=function(){return!!isNaN(parseInt(n.state.zipCode))||5!==n.state.zipCode.length},n.getImageSource=function(){if(!n.props.conditions||!n.props.conditions.weather)return"";var e=n.props.conditions.weather[0].id;return e>=700?b.a:e>=600?x.a:e>=200?w.a:b.a},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({zipCode:e.zipCode})}},{key:"render",value:function(){return c.a.createElement("section",{className:"weatherToolbar",style:{backgroundImage:"url(".concat(this.getImageSource(),")")}},c.a.createElement("div",{className:"container"},c.a.createElement(y,null),c.a.createElement("form",{className:"toolbar"},c.a.createElement("h1",null,"Find Your Local Weather"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Zip Code"),c.a.createElement("input",{type:"text",placeholder:"zip code",value:this.state.zipCode,onChange:this.zipChanged}),c.a.createElement("button",{type:"submit",disabled:this.zipLooksInvalid(),onClick:this.zipEntered,title:"Get forecast for this location"},"Get Weather")))))}}]),t}(a.Component),S="7dfc4a3f6ee2b253293df23c0182f01d",k=function(e,t){return"https://api.openweathermap.org/data/2.5/weather?zip=".concat(e,"&appid=").concat(S,"&units=").concat(t)},M=function(e,t){return"https://api.openweathermap.org/data/2.5/forecast?zip=".concat(e,"&appid=").concat(S,"&units=").concat(t)};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var T=c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#1D1D1B",d:"M400,160c-5.312,0-10.562,0.375-15.792,1.125 C354.334,120.417,307.188,96,256,96s-98.312,24.417-128.208,65.125C122.562,160.375,117.312,160,112,160C50.25,160,0,210.25,0,272 c0,61.75,50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,401.917,217.5,416,256,416 c38.542,0,75.333-14.083,104.291-39.333C372.916,381.5,386.312,384,400,384c61.75,0,112-50.25,112-112 C512,210.25,461.75,160,400,160z M400,352c-17.125,0-32.916-5.5-45.938-14.667C330.584,365.624,295.624,384,256,384 c-39.625,0-74.584-18.376-98.062-46.667C144.938,346.5,129.125,352,112,352c-44.188,0-80-35.812-80-80s35.812-80,80-80 c10.812,0,21.062,2.208,30.438,6.083C163.667,156.667,206.291,128,256,128s92.334,28.667,113.541,70.083 C378.938,194.208,389.209,192,400,192c44.188,0,80,35.812,80,80S444.188,352,400,352z"}),L=function(e){return c.a.createElement("svg",P({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),T)};n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#1D1D1B",d:"M256,144c-61.75,0-112,50.25-112,112c0,61.75,50.25,112,112,112 s112-50.25,112-112C368,194.25,317.75,144,256,144z M256,336c-44.188,0-80-35.812-80-80s35.812-80,80-80s80,35.812,80,80 S300.188,336,256,336z M256,112c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32 C240,104.833,247.167,112,256,112z M256,400c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32 C272,407.167,264.833,400,256,400z M380.438,154.167l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625 c-6.25-6.25-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625 C364.062,160.417,374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624 s16.375,6.25,22.625,0l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256 c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32 c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167 c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0 c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0 c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.374,0-22.625L380.459,357.812z"}))),H=function(e){return c.a.createElement("svg",N({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),_)};n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var D=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fill:"#1D1D1B",d:"M208,64c8.833,0,16-7.167,16-16V16c0-8.833-7.167-16-16-16s-16,7.167-16,16v32 C192,56.833,199.167,64,208,64z M332.438,106.167l22.625-22.625c6.249-6.25,6.249-16.375,0-22.625 c-6.25-6.25-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625 C316.062,112.417,326.188,112.417,332.438,106.167z M16,224h32c8.833,0,16-7.167,16-16s-7.167-16-16-16H16 c-8.833,0-16,7.167-16,16S7.167,224,16,224z M352,208c0,8.833,7.167,16,16,16h32c8.833,0,16-7.167,16-16s-7.167-16-16-16h-32 C359.167,192,352,199.167,352,208z M83.541,106.167c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625 L83.541,60.917c-6.25-6.25-16.374-6.25-22.625,0c-6.25,6.25-6.25,16.375,0,22.625L83.541,106.167z M400,256 c-5.312,0-10.562,0.375-15.792,1.125c-16.771-22.875-39.124-40.333-64.458-51.5C318.459,145,268.938,96,208,96 c-61.75,0-112,50.25-112,112c0,17.438,4.334,33.75,11.5,48.438C47.875,258.875,0,307.812,0,368c0,61.75,50.25,112,112,112 c13.688,0,27.084-2.5,39.709-7.333C180.666,497.917,217.5,512,256,512c38.542,0,75.333-14.083,104.291-39.333 C372.916,477.5,386.312,480,400,480c61.75,0,112-50.25,112-112S461.75,256,400,256z M208,128c39.812,0,72.562,29.167,78.708,67.25 c-10.021-2-20.249-3.25-30.708-3.25c-45.938,0-88.5,19.812-118.375,53.25C131.688,234.083,128,221.542,128,208 C128,163.812,163.812,128,208,128z M400,448c-17.125,0-32.916-5.5-45.938-14.667C330.584,461.625,295.624,480,256,480 c-39.625,0-74.584-18.375-98.062-46.667C144.938,442.5,129.125,448,112,448c-44.188,0-80-35.812-80-80s35.812-80,80-80 c7.75,0,15.062,1.458,22.125,3.541c2.812,0.792,5.667,1.417,8.312,2.521c4.375-8.562,9.875-16.396,15.979-23.75 C181.792,242.188,216.562,224,256,224c10.125,0,19.834,1.458,29.25,3.709c10.562,2.499,20.542,6.291,29.834,11.291 c23.291,12.375,42.416,31.542,54.457,55.063C378.938,290.188,389.209,288,400,288c44.188,0,80,35.812,80,80S444.188,448,400,448z"}))),B=function(e){return c.a.createElement("svg",I({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),D)};n.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var W=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#1D1D1B",d:"M400,64c-5.312,0-10.562,0.375-15.792,1.125 C354.334,24.417,307.188,0,256,0s-98.312,24.417-128.208,65.125C122.562,64.375,117.312,64,112,64C50.25,64,0,114.25,0,176 s50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,305.917,217.5,320,256,320c38.542,0,75.333-14.083,104.291-39.333 C372.916,285.5,386.312,288,400,288c61.75,0,112-50.25,112-112S461.75,64,400,64z M400,256c-17.125,0-32.916-5.5-45.938-14.667 C330.584,269.625,295.624,288,256,288c-39.625,0-74.584-18.375-98.062-46.667C144.938,250.5,129.125,256,112,256 c-44.188,0-80-35.812-80-80s35.812-80,80-80c10.812,0,21.062,2.208,30.438,6.083C163.667,60.667,206.291,32,256,32 s92.334,28.667,113.541,70.083C378.938,98.208,389.209,96,400,96c44.188,0,80,35.812,80,80S444.188,256,400,256z M225,480 c0,17.688,14.312,32,32,32s32-14.312,32-32s-32-64-32-64S225,462.312,225,480z M352,448c0,17.688,14.312,32,32,32s32-14.312,32-32 s-32-64-32-64S352,430.312,352,448z M96,384c0,17.688,14.312,32,32,32s32-14.312,32-32s-32-64-32-64S96,366.312,96,384z"}))),A=function(e){return c.a.createElement("svg",R({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),W)};n.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var F=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#1D1D1B",d:"M326.042,443.688l-18-10.376 c0.542-3.124,0.958-6.311,0.958-9.624c0-3.312-0.416-6.5-1-9.625l18.042-10.396c8.417-4.917,11.291-15.729,6.458-24.104 c-4.876-8.479-15.667-11.375-24.125-6.5l-18.188,10.5c-4.876-4.146-10.375-7.396-16.5-9.604v-20.896 c0-9.771-7.938-17.688-17.688-17.688s-17.666,7.917-17.666,17.688v20.875c-6.126,2.188-11.646,5.479-16.521,9.625l-18.146-10.5 c-8.479-4.875-19.292-2-24.167,6.479c-4.875,8.417-1.938,19.25,6.5,24.126l17.959,10.375c-0.584,3.146-0.959,6.334-0.959,9.646 c0,3.313,0.375,6.5,0.959,9.624L186,443.688c-8.459,4.875-11.375,15.75-6.5,24.188s15.688,11.312,24.125,6.438l18.167-10.438 c4.874,4.125,10.396,7.375,16.542,9.562v20.938c0,9.749,7.916,17.624,17.666,17.624s17.688-7.875,17.688-17.624v-20.938 c6.125-2.188,11.688-5.438,16.521-9.625l18.167,10.5c8.458,4.875,19.249,2,24.125-6.438 C337.375,459.438,334.5,448.625,326.042,443.688z M256,441.375c-9.75,0-17.688-7.938-17.688-17.688s7.938-17.646,17.688-17.646 s17.667,7.896,17.667,17.646S265.75,441.375,256,441.375z M474.166,396.25l-12.083-3.208c-0.291-3.833-1.208-7.479-2.896-10.979 l8.771-8.771c4.125-4.125,4.104-10.792,0-14.854c-4.083-4.104-10.708-4.125-14.833,0l-8.791,8.75 c-3.459-1.625-7.146-2.562-10.959-2.875l-3.209-12.062c-1.499-5.583-7.25-8.938-12.874-7.438 c-5.604,1.521-8.875,7.271-7.417,12.875l3.209,11.896c-1.584,1.084-3.084,2.292-4.5,3.667c-1.375,1.417-2.542,2.916-3.626,4.459 l-11.896-3.209c-5.604-1.499-11.396,1.876-12.896,7.438c-1.499,5.625,1.876,11.354,7.417,12.875l12,3.229 c0.334,3.771,1.292,7.458,2.979,10.959l-8.812,8.812c-4.083,4.104-4.062,10.729,0.042,14.812 c4.083,4.083,10.708,4.125,14.792,0.042l8.832-8.833c3.459,1.707,7.168,2.666,11.001,2.957l3.166,12.021 c1.542,5.604,7.25,8.938,12.876,7.438c5.583-1.5,8.957-7.249,7.458-12.917l-3.209-11.896c1.5-1.062,3.042-2.25,4.459-3.625 c1.375-1.396,2.542-2.938,3.624-4.479l11.917,3.209c5.604,1.5,11.375-1.854,12.854-7.417 C483.062,403.541,479.75,397.792,474.166,396.25z M438.312,402.938c-4.125,4.125-10.771,4.104-14.875,0 c-4.062-4.062-4.104-10.729,0-14.854c4.104-4.083,10.771-4.083,14.875,0C442.375,392.188,442.375,398.875,438.312,402.938z M118.938,342.5l-11.875,3.188c-1.104-1.5-2.25-3.021-3.646-4.438c-1.416-1.375-2.916-2.562-4.479-3.625l3.188-11.938 c1.5-5.604-1.834-11.375-7.375-12.854c-5.625-1.5-11.375,1.834-12.875,7.417l-3.25,12.062c-3.812,0.312-7.458,1.25-10.938,2.896 l-8.812-8.771c-4.125-4.125-10.75-4.104-14.834,0c-4.104,4.104-4.104,10.75,0,14.854l8.771,8.771 c-1.646,3.5-2.604,7.188-2.896,10.979l-12.042,3.208c-5.625,1.542-8.959,7.25-7.458,12.875c1.521,5.583,7.271,8.875,12.896,7.417 l11.875-3.23c1.062,1.604,2.25,3.105,3.688,4.501c1.375,1.375,2.875,2.604,4.438,3.625l-3.188,11.896 c-1.5,5.625,1.834,11.417,7.416,12.917c5.626,1.5,11.334-1.833,12.834-7.438l3.25-12c3.812-0.312,7.5-1.271,11-2.938l8.791,8.792 c4.084,4.124,10.709,4.041,14.834-0.042c4.062-4.062,4.125-10.708,0-14.812l-8.812-8.812c1.688-3.46,2.688-7.188,2.938-11.001 l12.062-3.188c5.562-1.521,8.896-7.25,7.396-12.875C130.334,344.376,124.584,341.042,118.938,342.5z M88.562,370.958 c-4.104,4.104-10.75,4.104-14.875,0c-4.062-4.083-4.062-10.771,0-14.833c4.125-4.083,10.771-4.083,14.875,0 S92.625,366.875,88.562,370.958z M512,176c0-61.75-50.25-112-112-112c-5.312,0-10.562,0.375-15.792,1.125 C354.334,24.417,307.188,0,256,0s-98.312,24.417-128.208,65.125C122.562,64.375,117.312,64,112,64C50.25,64,0,114.25,0,176 s50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,305.917,217.5,320,256,320c38.542,0,75.333-14.083,104.291-39.333 C372.916,285.5,386.312,288,400,288C461.75,288,512,237.75,512,176z M354.062,241.333C330.584,269.625,295.624,288,256,288 c-39.625,0-74.584-18.375-98.062-46.667C144.938,250.5,129.125,256,112,256c-44.188,0-80-35.812-80-80s35.812-80,80-80 c10.812,0,21.062,2.208,30.438,6.083C163.667,60.667,206.291,32,256,32s92.334,28.667,113.541,70.083 C378.938,98.208,389.209,96,400,96c44.188,0,80,35.812,80,80s-35.812,80-80,80C382.875,256,367.084,250.5,354.062,241.333z"}))),X=function(e){return c.a.createElement("svg",Z({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),F)};n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var J=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fill:"#1D1D1B",d:"M192,384l32,32l-32,96l96-96l-32-32l32-64L192,384z M512,134.833c0-49.146-40-89.124-89.167-89.124 c-2.396,0-4.771,0.083-7.146,0.27C392.562,17.146,357.709,0,320,0c-37.688,0-72.562,17.146-95.688,45.979 c-2.375-0.187-4.771-0.27-7.188-0.27C168,45.709,128,85.688,128,134.833c0,5.146,0.688,10.125,1.5,15.042 c-0.542,0.708-1.188,1.354-1.708,2.083c-5.229-0.75-10.479-1.125-15.792-1.125c-61.75,0-112,50.25-112,112 c0,61.751,50.25,112,112,112c13.688,0,27.084-2.499,39.709-7.333c1.104,0.959,2.416,1.625,3.541,2.562l28.312-18.875 c-9.438-6.688-18.25-14.125-25.625-23c-13,9.146-28.812,14.646-45.938,14.646c-44.188,0-80-35.791-80-80c0-44.167,35.812-80,80-80 c10.812,0,21.062,2.209,30.438,6.083c0.562-1.083,1.25-2,1.812-3.042c5.625-10.271,12.562-19.667,20.666-28.042 c23.084-23.896,55.167-39,91.084-39c49.709,0,92.334,28.667,113.541,70.083c5.646-2.333,11.668-3.833,17.875-4.833l12.584-1.25 c12.334,0,23.875,3.042,34.312,8c11.312,5.417,21.021,13.375,28.646,23.208c10.5,13.521,17.042,30.334,17.042,48.792 c0,44.209-35.812,80-80,80c-17.125,0-32.916-5.5-45.938-14.646c-14,16.875-32.438,29.562-53.146,37.562l-5.979,11.938l18.25,18.25 c17.062-6.646,33.021-16.188,47.104-28.438c12.625,4.834,26.021,7.333,39.709,7.333c61.75,0,112-50.249,112-112 c0-25.666-9.042-49.083-23.666-68C502.916,178.958,512,158.021,512,134.833z M465.562,172.458 c-18.479-13.438-41-21.625-65.562-21.625c-5.312,0-10.562,0.375-15.792,1.125C354.334,111.271,307.188,86.833,256,86.833 c-34.125,0-66.312,11.062-92.938,30.354c7.479-22.853,28.729-39.478,54.062-39.478c7.75,0,15.062,1.562,21.75,4.333 C254.062,52.458,284.5,32,320,32s65.958,20.458,81.084,50.042c6.729-2.771,14.083-4.333,21.749-4.333 c31.584,0,57.167,25.583,57.167,57.124C480,149.333,474.438,162.396,465.562,172.458z"}))),U=function(e){return c.a.createElement("svg",Y({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),J)};n.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var G=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fill:"#1D1D1B",d:"M112,160h288c8.833,0,16-7.167,16-16s-7.167-16-16-16H112c-8.833,0-16,7.167-16,16S103.167,160,112,160z M400,192H112c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,192,400,192z M400,256H112 c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,256,400,256z M400,320H112c-8.833,0-16,7.167-16,16 s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,320,400,320z"}))),q=function(e){return c.a.createElement("svg",V({version:1.1,id:"Layer_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e),G)},K=(n.p,function(e){var t=e.icon;return["03d","03n","04d","04n"].indexOf(t)>-1?c.a.createElement(L,null):["01d","01n"].indexOf(t)>-1?c.a.createElement(H,null):["02d","02n"].indexOf(t)>-1?c.a.createElement(B,null):["09d","09n","10d","10n"].indexOf(t)>-1?c.a.createElement(A,null):["11d","11n"].indexOf(t)>-1?c.a.createElement(U,null):["13d","13n"].indexOf(t)>-1?c.a.createElement(X,null):["50d","50n"].indexOf(t)>-1?c.a.createElement(q,null):c.a.createElement(H,null)}),Q=function(e){var t=e.conditions,n=h.a.getState().unitType,a="metric"===n?"C":"F",r="metric"===n?"kph":"mph";return c.a.createElement("div",{className:"conditions"},c.a.createElement("h3",null,t.weather[0]?t.weather[0].main:"N/A"),c.a.createElement("p",null,"Current Temp"),c.a.createElement("h3",null,Math.round(t.main.temp),c.a.createElement("sup",null,"\xb0 ",a)),c.a.createElement("p",null,"Wind Speed"),c.a.createElement("h4",null,t.wind.speed," ",c.a.createElement("sup",null,r)))},$=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.currentConditions;return c.a.createElement("div",{className:"currentConditions"},c.a.createElement("div",{className:"currentConditionsMeta"},c.a.createElement("h2",null,"Current conditions for the ",c.a.createElement("strong",null,e.name)," area")),c.a.createElement("div",{className:"conditionsContent"},c.a.createElement(K,{icon:e.weather[0]?e.weather[0].icon:null}),c.a.createElement(Q,{conditions:e})))}}]),t}(a.Component),ee=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"date",value:function(e){var t=new Date(1e3*e),n=t.getMonth()+1,a=t.getDate(),c=t.toLocaleString("en-US",{hour:"numeric",hour12:!0});return"".concat(n,".").concat(a," ").concat(c)}}]),e}(),te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.currentConditions;return c.a.createElement("div",{className:"dayConditions"},c.a.createElement("div",{className:"date"},ee.date(this.props.currentConditions.dt)),c.a.createElement("div",{className:"conditionStatus"},c.a.createElement(K,{icon:e.weather[0]?e.weather[0].icon:""})),c.a.createElement(Q,{conditions:e}))}}]),t}(a.Component),ne=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getWrapperWidth=function(){return 100/n.props.conditions.length},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.conditions.map(function(t){return c.a.createElement("div",{key:t.dt,className:"dayConditonWrapper",style:{width:"".concat(e.getWrapperWidth(),"%")}},c.a.createElement(te,{key:t.dt,currentConditions:t}))})}}]),t}(a.Component);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var ce=c.a.createElement("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"}),re=function(e){return c.a.createElement("svg",ae({width:24,height:24,viewBox:"0 0 24 24"},e),ce)},ie=(n.p,function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={xAxisTransform:0,itemsPerPane:5},n.calculateItemsPerPane=function(e){e<480?n.setState({itemsPerPane:2}):e<880?n.setState({itemsPerPane:3}):n.setState({itemsPerPane:5})},n.getScrollContainerWidth=function(){return n.props.conditions.length/n.state.itemsPerPane*100},n.slideRight=function(){var e=100/n.props.conditions.length,t=100-e*n.state.itemsPerPane;Math.abs(n.state.xAxisTransform)<t&&n.setState({xAxisTransform:n.state.xAxisTransform-e})},n.slideLeft=function(){var e=n.state.xAxisTransform+100/n.props.conditions.length;e<=0&&n.setState({xAxisTransform:e})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.calculateItemsPerPane(window.innerWidth),window.onresize=function(){e.setState({xAxisTransform:0}),e.calculateItemsPerPane(window.innerWidth)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"forecastScrollContainer container"},c.a.createElement("h3",{className:"scrollTitle"},"Future Forecast"),c.a.createElement("div",{className:"scrollContainer",style:{width:"".concat(this.getScrollContainerWidth(),"%"),transform:"translateX(".concat(this.state.xAxisTransform,"%)")}},c.a.createElement(ne,{conditions:this.props.conditions})),c.a.createElement("div",{className:"scrollControls"},c.a.createElement("button",{title:"Previous",onClick:this.slideLeft},c.a.createElement(re,null)),c.a.createElement("button",{title:"Next",onClick:this.slideRight},c.a.createElement(re,null))))}}]),t}(a.Component)),oe=n(126),le=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={chartData:{}},n.createChartData=function(){var e=[],t=[];n.props.futureConditions.forEach(function(n){e.push(ee.date(n.dt)),t.push(n.main.temp)});var a=h.a.getState().unitType;return{labels:e,datasets:[{data:t,label:"Temp (".concat("metric"===a?"c":"f",")"),borderColor:"#3FBF7F",fill:!0,backgroundColor:"rgba(38, 124, 81, 0.05)"}]}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.createChartData();return c.a.createElement("section",{className:"chartContainer"},c.a.createElement("div",{className:"container"},c.a.createElement("h5",null,"Temperature Over Time"),c.a.createElement("div",{className:"chartWrapper"},c.a.createElement("div",{className:"chartWrapperInner"},c.a.createElement(oe.a,{data:e,height:70})))))}}]),t}(a.Component),se=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).showLoadingBar=function(){return n.props.isLoadingConditions?"block":"none"},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.currentConditionsLoaded?c.a.createElement("div",{className:"dashboardContent"},c.a.createElement($,{currentConditions:this.props.currentConditions}),c.a.createElement(ie,{conditions:this.props.futureConditions}),c.a.createElement(le,{futureConditions:this.props.futureConditions}),c.a.createElement("div",{className:"loader",style:{display:this.showLoadingBar()}})):c.a.createElement("div",{className:"loader"})}}]),t}(a.Component),ue=n(81),pe=n.n(ue),de=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={currentConditions:{},futureConditions:[],zipCodeHistory:[],zipCode:0,currentConditionsLoaded:!1,isLoadingConditions:!1},e.zipEntered=function(){var t=h.a.getState(),n=t.zipCode,a=t.unitType;e.setState({isLoadingConditions:!0,zipCode:n}),pe.a.get(k(n,a)).then(function(t){e.setState({currentConditionsLoaded:!0,currentConditions:t.data,isLoadingConditions:!1})}).catch(function(t){t.response&&404===t.response.status?alert("Location for the zip code not found. Please try another zip code"):alert("There was a problem getting current conditions. Please try again in a few minutes."),e.setState({isLoadingConditions:!1}),h.a.dispatch(Object(m.a)(n))}),pe.a.get(M(n,a)).then(function(t){e.setState({futureConditions:t.data.list})}).catch(function(t){alert("There was a problem getting the future forecast. Please try again in a few minutes."),e.setState({isLoadingConditions:!1})})},e.storeSubscription=null,e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.zipEntered()}},{key:"componentDidMount",value:function(){var e=this;this.storeSubscription=h.a.subscribe(function(){e.zipEntered()})}},{key:"componentWillUnmount",value:function(){this.storeSubscription()}},{key:"render",value:function(){return c.a.createElement("div",{className:"dashboard"},c.a.createElement(j,{zipCode:this.state.zipCode,conditions:this.state.currentConditions}),c.a.createElement(se,{currentConditionsLoaded:this.state.currentConditionsLoaded,currentConditions:this.state.currentConditions,futureConditions:this.state.futureConditions,isLoadingConditions:this.state.isLoadingConditions}))}}]),t}(a.Component),he=n(337),me=n(336),fe=(n(331),c.a.lazy(function(){return n.e(1).then(n.bind(null,338))})),ve=function(){return c.a.createElement(a.Suspense,{fallback:c.a.createElement("div",null,"Loading ...")},c.a.createElement(fe,null))},Ce=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){f.setupZipCodeHistory(),f.setupUnitType()}},{key:"componentDidMount",value:function(){document.title="React Weather"}},{key:"render",value:function(){return c.a.createElement(d.a,{store:h.a},c.a.createElement(he.a,{basename:"/react-weather"},c.a.createElement("div",{className:"App"},c.a.createElement(C,null),c.a.createElement("div",{id:"content",role:"main"},c.a.createElement(me.a,{path:"/",exact:!0,component:de}),c.a.createElement(me.a,{path:"/settings",component:ve})))))}}]),t}(a.Component);i.a.render(c.a.createElement(Ce,null),document.getElementById("root"))},6:function(e,t,n){"use strict";var a=n(54),c=n(130),r={zipCodeHistory:[],zipCode:0,unitType:"imperial"};n.d(t,"a",function(){return i});var i=Object(a.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;if("SET_ZIP"===t.type){var n=[];return n=e.zipCodeHistory.indexOf(t.payload)>-1?e.zipCodeHistory:[t.payload].concat(e.zipCodeHistory),localStorage.setItem("zip_history",JSON.stringify(n)),Object.assign({},e,{zipCode:t.payload,zipCodeHistory:n})}if("ADD_ZIP_HISTORY"===t.type&&!(e.zipCodeHistory.indexOf(t.payload)>-1)){var a=[t.payload].concat(e.zipCodeHistory);return localStorage.setItem("zip_history",JSON.stringify(a)),Object.assign({},e,{zipCodeHistory:a})}if("REMOVE_ZIP_HISTORY"===t.type){var i=Object(c.a)(e.zipCodeHistory),o=i.indexOf(t.payload);return-1!==o&&i.splice(o,1),localStorage.setItem("zip_history",JSON.stringify(i)),Object.assign({},e,{zipCodeHistory:i,zipCode:i[0]})}return"SET_ZIP_HISTORY"===t.type?Object.assign({},e,{zipCodeHistory:t.payload,zipCode:t.payload[0]}):"SET_UNIT_TYPE"===t.type?(localStorage.setItem("unit_type",t.payload),Object.assign({},e,{unitType:t.payload})):e})},80:function(e,t,n){e.exports=n.p+"static/media/header_bg.d1f6a5f7.jpg"}},[[132,3,2]]]);
//# sourceMappingURL=main.174cf5de.chunk.js.map