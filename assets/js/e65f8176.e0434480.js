(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6713],{42058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>w,frontMatter:()=>c,metadata:()=>f,toc:()=>u});var o=n(87462),r=n(67294),a=n(3905);n(44996),n(50941);n(63303),n(85162);var i=n(93162),s=n.n(i);const d=function(e){let{url:t,proxy:n}=e;return r.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.createElement("ul",{className:"export-dropdown dropdown__menu"},r.createElement("li",null,r.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),s().saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))},c={id:"greenfield-grpc-gateway-docs",title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,f={unversionedId:"greenfield-api/greenfield-grpc-gateway-docs",id:"greenfield-api/greenfield-grpc-gateway-docs",title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",source:"@site/docs/greenfield-api/greenfield-grpc-gateway-docs.info.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/greenfield-grpc-gateway-docs",permalink:"/greenfield-docs/docs/greenfield-api/greenfield-grpc-gateway-docs",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"greenfield-grpc-gateway-docs",title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"Blockchain API",permalink:"/greenfield-docs/docs/api/blockchain-rest"},next:{title:"BridgeParams",permalink:"/greenfield-docs/docs/greenfield-api/bridge-params"}},p={},u=[],g={toc:u},m="wrapper";function w(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,a.kt)(d,{url:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/swagger/greenfield-api.yaml",proxy:void 0,mdxType:"Export"}),(0,a.kt)("h1",{id:"greenfield---grpc-gateway-docs"},"Greenfield - gRPC Gateway docs"),(0,a.kt)("p",null,"A REST interface for state queries"))}w.isMDXComponent=!0},93162:function(e,t,n){var o,r,a,i=n(25108);r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){i.error("could not download file")},o.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,d=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(e,t,n){var i=s.URL||s.webkitURL,d=document.createElement("a");t=t||e.name||"download",d.download=t,d.rel="noopener","string"==typeof e?(d.href=e,d.origin===location.origin?a(d):r(d.href)?o(e,t,n):a(d,d.target="_blank")):(d.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(d.href)}),4e4),setTimeout((function(){a(d)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(r(e))o(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,i=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&i||d)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},l.readAsDataURL(e)}else{var f=s.URL||s.webkitURL,p=f.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){f.revokeObjectURL(p)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,r):o)||(e.exports=a)}}]);