"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},81479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"World State"},s="World State",i={unversionedId:"guide/greenfield-blockchain/modules/world-state",id:"guide/greenfield-blockchain/modules/world-state",title:"World State",description:"All Greenfield validators have access to up-to-date active data in full. Anyone can join the blockchain as a",source:"@site/docs/guide/greenfield-blockchain/modules/world-state.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/world-state",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/world-state",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/modules/world-state.md",tags:[],version:"current",frontMatter:{title:"World State"},sidebar:"guideSidebar",previous:{title:"Virtual Group",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/virtual-group"},next:{title:"Interacting with the Node",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/interact-node"}},c={},l=[{value:"Accounts and Balance",id:"accounts-and-balance",level:2},{value:"Validator and SP Metadata",id:"validator-and-sp-metadata",level:2},{value:"Storage Metadata",id:"storage-metadata",level:2},{value:"Permission Metadata",id:"permission-metadata",level:2},{value:"Billing Metadata",id:"billing-metadata",level:2}],d={toc:l},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"world-state"},"World State"),(0,r.kt)("p",null,"All Greenfield validators have access to up-to-date active data in full. Anyone can join the blockchain as a\nfull node and freely synchronize this data."),(0,r.kt)("p",null,"The active data is stored on-chain and can only be updated through transactions on the Greenfield blockchain.\nThere are several types of active data, which are described below."),(0,r.kt)("h2",{id:"accounts-and-balance"},"Accounts and Balance"),(0,r.kt)("p",null,'Each user has their "Owner Address" as the identifier for their owner account to "own" the data resources. There is\nanother "payment account" type dedicated to billing and payment purposes and owned by owner addresses.'),(0,r.kt)("p",null,"Both owner accounts and payment accounts can hold the BNB balance on Greenfield. Users can deposit BNB from BSC, accept\ntransfers from other users, and spend them on transaction gas and storage usage."),(0,r.kt)("h2",{id:"validator-and-sp-metadata"},"Validator and SP Metadata"),(0,r.kt)("p",null,"These are the basic information about the Greenfield validators and Greenfield SPs. SPs may have more information, as\nit has to publish their service information for users' data operations. There should be a reputation mechanism for SPs\nas well."),(0,r.kt)("h2",{id:"storage-metadata"},"Storage Metadata"),(0,r.kt)("p",null,'The "storage metadata" includes size, ownership, checksum hashes, and distribution location among SPs. Similar to AWS S3,\nthe basic unit of the storage is an "object", which can be a piece of binary data, text files, photos, videos, or any\nother format. Users can create their objects under their "bucket". A bucket is globally unique. The object can be referred\nto via the bucket name and the object ID. It can also be located by the bucket name, the prefix tag, and the object ID\nvia off-chain facility.'),(0,r.kt)("h2",{id:"permission-metadata"},"Permission Metadata"),(0,r.kt)("p",null,"Data resources on Greenfield, such as the data objects and the buckets, all have access control, such as which address\ncan create, read, list, or even execute the resources, and which address can grant/revoke these permissions."),(0,r.kt)("p",null,'Two other data resources also have access control. One is "Group". A group represents a group of user addresses that have\nthe same permissions to the same resources. It can be used in the same way as an address in the access control. Meanwhile,\nit requires permission too to change the group. The other is "payment account". They are created by the owner accounts.'),(0,r.kt)("p",null,"Here the access control is enforced by the SPs off-chain. People can test and challenge the SPs if they mess up the\ncontrol. Slash and reward will happen to keep the SPs sticking to the principles."),(0,r.kt)("h2",{id:"billing-metadata"},"Billing Metadata"),(0,r.kt)("p",null,'Users have to pay fees to store data objects on Greenfield. While each object enjoys a free quota to download by users\nwho are permitted to, the excessive download will require extra data packages to be paid for the bandwidth. Besides\nthe owner address, users can derive multiple "Payment Addresses" to pay these fees. Objects are stored under buckets,\nwhile each bucket can be associated with these payment addresses, and the system will charge these accounts for storing\nand/or downloading. Many buckets can share the same payment address. Such association information is also stored on\nchains with consensus as well.'))}h.isMDXComponent=!0}}]);