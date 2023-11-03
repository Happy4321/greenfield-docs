"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),b=n,m=c["".concat(i,".").concat(b)]||c[b]||u[b]||s;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},21642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={title:"List Objects By IDs"},l="ListObjectsByIDs",o={unversionedId:"api/storage-provider-rest/list_objects_by_ids",id:"api/storage-provider-rest/list_objects_by_ids",title:"List Objects By IDs",description:"RESTful API Description",source:"@site/docs/api/storage-provider-rest/list_objects_by_ids.md",sourceDirName:"api/storage-provider-rest",slug:"/api/storage-provider-rest/list_objects_by_ids",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_objects_by_ids",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storage-provider-rest/list_objects_by_ids.md",tags:[],version:"current",frontMatter:{title:"List Objects By IDs"},sidebar:"apiReferenceSidebar",previous:{title:"SP Response",permalink:"/greenfield-docs/docs/api/storage-provider-rest/sp_response"},next:{title:"List Buckets By IDs",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_buckets_by_ids"}},i={},p=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: a list of objects by object ids",id:"example-1-a-list-of-objects-by-object-ids",level:3},{value:"Sample Response: Query a list of objects by object ids successfully",id:"sample-response-query-a-list-of-objects-by-object-ids-successfully",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"listobjectsbyids"},"ListObjectsByIDs"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to query a list of objects metadata info by object ids. This API only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"The request does not have a path parameter."),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"objects-query"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"objects-query is only used for routing location, and it does not need to pass any value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ids"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"ids is a list of object ids with an upper limit of 100")))),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org?objects-query&ids=1,2\nDate: Fri, 31 March 2023 17:32:00 GMT\nContent-Type: application/xml\nContent-Length: length\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"value is ",(0,n.kt)("inlineCode",{parentName:"td"},"application/xml"))))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"objects"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"objects defines the information of the object list")))),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nXML Body\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-a-list-of-objects-by-object-ids"},"Example 1: a list of objects by object ids"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?objects-query&ids=1,2,3,4,5,333 HTTP/1.1\nHost: gnfd-testnet-sp-1.bnbchain.org\n")),(0,n.kt)("h3",{id:"sample-response-query-a-list-of-objects-by-object-ids-successfully"},"Sample Response: Query a list of objects by object ids successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n<GfSpListObjectsByIDsResponse>\n    <ObjectEntry>\n        <Id>2</Id>\n        <Value>\n            <ObjectInfo>\n                <Owner>0xB769053f37080e70EE8458B7d376cCD64C1d1eab</Owner>\n                <Creator>0xB769053f37080e70EE8458B7d376cCD64C1d1eab</Creator>\n                <BucketName>cwtmcrfqen</BucketName>\n                <ObjectName>dq6knn/n/00ybg9</ObjectName>\n                <Id>2</Id>\n                <LocalVirtualGroupId>0</LocalVirtualGroupId>\n                <PayloadSize>1067008</PayloadSize>\n                <Visibility>3</Visibility>\n                <ContentType>text/event-stream</ContentType>\n                <CreateAt>1688364504</CreateAt>\n                <ObjectStatus>1</ObjectStatus>\n                <RedundancyType>0</RedundancyType>\n                <SourceType>0</SourceType>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n                <Checksums>0251d00d386672c15072a311b56881bd470e2bb435aa618ca457eb44456b5aa1</Checksums>\n            </ObjectInfo>\n            <LockedBalance>0x0000000000000000000000000000000000000000000000000000000000000000</LockedBalance>\n            <Removed>false</Removed>\n            <UpdateAt>0</UpdateAt>\n            <DeleteAt>0</DeleteAt>\n            <DeleteReason></DeleteReason>\n            <Operator>0xB769053f37080e70EE8458B7d376cCD64C1d1eab</Operator>\n            <CreateTxHash>0xfd58401fc320c183475b956056ced8ab6762c635e6841a36fd432ad190c70545</CreateTxHash>\n            <UpdateTxHash>0xf92faafa57aebe2444df8715faece0fa8c2631381b2157875baaf52f63b3dff4</UpdateTxHash>\n            <SealTxHash>0xf512b2a742ed4fcf6cecedbe058ebb07eceba390041948b04b2a82392801a9b5</SealTxHash>\n        </Value>\n    </ObjectEntry>\n    <ObjectEntry>\n        <Id>1</Id>\n    </ObjectEntry>\n</GfSpListObjectsByIDsResponse>\n")))}u.isMDXComponent=!0}}]);