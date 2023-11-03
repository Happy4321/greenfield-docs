"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(r),c=n,y=d["".concat(o,".").concat(c)]||d[c]||m[c]||s;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<s;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const s={title:"List Groups By IDs"},l="ListGroupsByIDs",p={unversionedId:"api/storage-provider-rest/list_groups_by_ids",id:"api/storage-provider-rest/list_groups_by_ids",title:"List Groups By IDs",description:"RESTful API Description",source:"@site/docs/api/storage-provider-rest/list_groups_by_ids.md",sourceDirName:"api/storage-provider-rest",slug:"/api/storage-provider-rest/list_groups_by_ids",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_groups_by_ids",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storage-provider-rest/list_groups_by_ids.md",tags:[],version:"current",frontMatter:{title:"List Groups By IDs"},sidebar:"apiReferenceSidebar",previous:{title:"List User Payment Streams",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_user_payment_streams"},next:{title:"Blockchain Events",permalink:"/greenfield-docs/docs/api/events"}},o={},i=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: a list of groups by group ids",id:"example-1-a-list-of-groups-by-group-ids",level:3},{value:"Sample Response: Query a list of groups by group ids successfully",id:"sample-response-query-a-list-of-groups-by-group-ids-successfully",level:3}],u={toc:i},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"listgroupsbyids"},"ListGroupsByIDs"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to query a list of group metadata info by group ids. This API only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"The request does not have a path parameter."),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groups-query"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"groups-query is only used for routing location, and it does not need to pass any value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ids"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"ids is a list of group ids with an upper limit of 100")))),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org?groups-query&ids=1,2\nDate: Fri, 31 March 2023 17:32:00 GMT\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"value is ",(0,n.kt)("inlineCode",{parentName:"td"},"application/xml"))))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GroupEntry"),(0,n.kt)("td",{parentName:"tr",align:null},"Map"),(0,n.kt)("td",{parentName:"tr",align:null},"GroupEntry defines the information of the group map")))),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nXML Body\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-a-list-of-groups-by-group-ids"},"Example 1: a list of groups by group ids"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?groups-query&ids=1,2,333 HTTP/1.1\nHost: gnfd-testnet-sp-1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\n")),(0,n.kt)("h3",{id:"sample-response-query-a-list-of-groups-by-group-ids-successfully"},"Sample Response: Query a list of groups by group ids successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n<?xml version="1.0" encoding="UTF-8"?>\n<GfSpListGroupsByIDsResponse>\n    <GroupEntry>\n        <Id>333</Id>\n        <Value>\n            <Group>\n                <Owner>0x853e215E614A79e4674AbA0C1bB0b0d53AE29418</Owner>\n                <GroupName>ho5fuia</GroupName>\n                <SourceType>0</SourceType>\n                <Id>333</Id>\n                <Extra></Extra>\n            </Group>\n            <Operator>0x0000000000000000000000000000000000000000</Operator>\n            <CreateAt>701242</CreateAt>\n            <CreateTime>1694091719</CreateTime>\n            <UpdateAt>701242</UpdateAt>\n            <UpdateTime>1694091719</UpdateTime>\n            <NumberOfMembers>0</NumberOfMembers>\n            <Removed>false</Removed>\n        </Value>\n    </GroupEntry>\n    <GroupEntry>\n        <Id>2</Id>\n    </GroupEntry>\n    <GroupEntry>\n        <Id>1</Id>\n        <Value>\n            <Group>\n                <Owner>0x886EDBbe3A955AB3126A4cCB9C37f56A4e0429f7</Owner>\n                <GroupName>wk05g1x</GroupName>\n                <SourceType>0</SourceType>\n                <Id>1</Id>\n                <Extra></Extra>\n            </Group>\n            <Operator>0x0000000000000000000000000000000000000000</Operator>\n            <CreateAt>68433</CreateAt>\n            <CreateTime>1692582613</CreateTime>\n            <UpdateAt>68433</UpdateAt>\n            <UpdateTime>1692582613</UpdateTime>\n            <NumberOfMembers>0</NumberOfMembers>\n            <Removed>false</Removed>\n        </Value>\n    </GroupEntry>\n</GfSpListGroupsByIDsResponse>\n')))}m.isMDXComponent=!0}}]);