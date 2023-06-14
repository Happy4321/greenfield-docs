"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9245],{54043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=n(87462),a=(n(67294),n(3905)),r=n(26389),s=n(94891),l=(n(75190),n(47507)),o=n(24310),m=n(63303),p=(n(75035),n(85162));const d={id:"inflation",title:"Inflation returns the current minting inflation value.",description:"Inflation returns the current minting inflation value.",sidebar_label:"Inflation",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Inflation",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{inflation:{type:"string",format:"byte",description:"inflation is the current minting inflation value."}},description:"QueryInflationResponse is the response type for the Query/Inflation RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Inflation returns the current minting inflation value.",method:"get",path:"/cosmos/mint/v1beta1/inflation",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Inflation returns the current minting inflation value.",description:{type:"text/plain"},url:{path:["cosmos","mint","v1beta1","inflation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,u={unversionedId:"greenfield-api/inflation",id:"greenfield-api/inflation",title:"Inflation returns the current minting inflation value.",description:"Inflation returns the current minting inflation value.",source:"@site/docs/greenfield-api/inflation.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/inflation",permalink:"/greenfield-docs/docs/greenfield-api/inflation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"inflation",title:"Inflation returns the current minting inflation value.",description:"Inflation returns the current minting inflation value.",sidebar_label:"Inflation",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Inflation",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{inflation:{type:"string",format:"byte",description:"inflation is the current minting inflation value."}},description:"QueryInflationResponse is the response type for the Query/Inflation RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Inflation returns the current minting inflation value.",method:"get",path:"/cosmos/mint/v1beta1/inflation",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Inflation returns the current minting inflation value.",description:{type:"text/plain"},url:{path:["cosmos","mint","v1beta1","inflation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Annual Provisions",permalink:"/greenfield-docs/docs/greenfield-api/annual-provisions"},next:{title:"MintParams",permalink:"/greenfield-docs/docs/greenfield-api/mint-params"}},f={},y=[{value:"Inflation",id:"inflation",level:2}],g={toc:y},h="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inflation"},"Inflation"),(0,a.kt)("p",null,"Inflation returns the current minting inflation value."),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"inflation",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"inflation is the current minting inflation value."},mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "inflation": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(o.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);