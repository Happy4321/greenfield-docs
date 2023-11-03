"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Roadmap",icon:"proposal",order:2},l="Roadmap",i={unversionedId:"release-notes/roadmap",id:"release-notes/roadmap",title:"Roadmap",description:"Upcoming",source:"@site/docs/release-notes/roadmap.md",sourceDirName:"release-notes",slug:"/release-notes/roadmap",permalink:"/greenfield-docs/docs/release-notes/roadmap",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/release-notes/roadmap.md",tags:[],version:"current",frontMatter:{title:"Roadmap",icon:"proposal",order:2},sidebar:"releaseNotesSidebar",previous:{title:"Release Notes",permalink:"/greenfield-docs/docs/release-notes/releaseNotes"},next:{title:"Feature Lists",permalink:"/greenfield-docs/docs/release-notes/features"}},p={},s=[{value:"Upcoming",id:"upcoming",level:2},{value:"October 17th, Launch Mainnet Lena",id:"october-17th-launch-mainnet-lena",level:3},{value:"Long Term",id:"long-term",level:2},{value:"March 2023, Testnet Congo",id:"march-2023-testnet-congo",level:3},{value:"May 2023, Testnet Mekong",id:"may-2023-testnet-mekong",level:3},{value:"September 2023, Launch Mainnet Lena",id:"september-2023-launch-mainnet-lena",level:3},{value:"December 2023, Mainnet",id:"december-2023-mainnet",level:3},{value:"June 2024, Mainnet",id:"june-2024-mainnet",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap"},"Roadmap"),(0,a.kt)("h2",{id:"upcoming"},"Upcoming"),(0,a.kt)("h3",{id:"october-17th-launch-mainnet-lena"},"October 17th, Launch Mainnet Lena"),(0,a.kt)("p",null,"This version will be our first version for Greenfield Mainnet, including major features introduced on the Testnet, please\nrefer to ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/release-notes/features"},"Features")," for details."),(0,a.kt)("h2",{id:"long-term"},"Long Term"),(0,a.kt)("h3",{id:"march-2023-testnet-congo"},"March 2023, Testnet Congo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support Ethereum compatible address and EIP-712 transactions"),(0,a.kt)("li",{parentName:"ul"},"Support cross-chain token transfer between BSC and Greenfield"),(0,a.kt)("li",{parentName:"ul"},"Support storage management, including bucket, object, and group operations"),(0,a.kt)("li",{parentName:"ul"},"Support stream payment billing system")),(0,a.kt)("h3",{id:"may-2023-testnet-mekong"},"May 2023, Testnet Mekong"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support mirror storage resources from Greenfield to BSC, and cross-chain programming paradigm on BSC"),(0,a.kt)("li",{parentName:"ul"},"Support permission management on buckets, objects, and groups"),(0,a.kt)("li",{parentName:"ul"},"Support data challenge")),(0,a.kt)("h3",{id:"september-2023-launch-mainnet-lena"},"September 2023, Launch Mainnet Lena"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support SP standard framework"),(0,a.kt)("li",{parentName:"ul"},"Support SP join by governance, and SP exits freely"),(0,a.kt)("li",{parentName:"ul"},"Support data recovery"),(0,a.kt)("li",{parentName:"ul"},"Support large object and breakpoint resume transfer")),(0,a.kt)("h3",{id:"december-2023-mainnet"},"December 2023, Mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support SP reputation system"),(0,a.kt)("li",{parentName:"ul"},"Enrich the ecosystem by building abundant toolchains and programming paradigms, such as data marketplace, NFT toolset,\ndata migration toolset and so on"),(0,a.kt)("li",{parentName:"ul"},"Link Greenfield with opBNB")),(0,a.kt)("h3",{id:"june-2024-mainnet"},"June 2024, Mainnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support off-chain generic computing"),(0,a.kt)("li",{parentName:"ul"},"Support perpetual storage"),(0,a.kt)("li",{parentName:"ul"},"Data availability layer for BSC and L2 blockchains")))}m.isMDXComponent=!0}}]);