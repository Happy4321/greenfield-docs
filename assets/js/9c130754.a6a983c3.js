"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7963],{78211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>g,metadata:()=>u,toc:()=>f});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),l=a(94891),o=a(75190),d=a(47507),n=a(24310),p=a(63303),m=(a(75035),a(85162));const g={id:"delegator-validators",title:"DelegatorValidators queries the validators of a delegator.",description:"DelegatorValidators queries the validators of a delegator.",sidebar_label:"DelegatorValidators",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"DelegatorValidators",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{validators:{type:"array",items:{type:"string"},description:"validators defines the validators a delegator is delegating for."}},description:"QueryDelegatorValidatorsResponse is the response type for the\nQuery/DelegatorValidators RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"DelegatorValidators queries the validators of a delegator.",method:"get",path:"/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DelegatorValidators queries the validators of a delegator.",description:{type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","delegators",":delegator_address","validators"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) delegator_address defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,u={unversionedId:"greenfield-api/delegator-validators",id:"greenfield-api/delegator-validators",title:"DelegatorValidators queries the validators of a delegator.",description:"DelegatorValidators queries the validators of a delegator.",source:"@site/docs/greenfield-api/delegator-validators.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/delegator-validators",permalink:"/greenfield-docs/docs/greenfield-api/delegator-validators",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delegator-validators",title:"DelegatorValidators queries the validators of a delegator.",description:"DelegatorValidators queries the validators of a delegator.",sidebar_label:"DelegatorValidators",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"DelegatorValidators",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{validators:{type:"array",items:{type:"string"},description:"validators defines the validators a delegator is delegating for."}},description:"QueryDelegatorValidatorsResponse is the response type for the\nQuery/DelegatorValidators RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"DelegatorValidators queries the validators of a delegator.",method:"get",path:"/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DelegatorValidators queries the validators of a delegator.",description:{type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","delegators",":delegator_address","validators"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) delegator_address defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delegation Rewards",permalink:"/greenfield-docs/docs/greenfield-api/delegation-rewards"},next:{title:"DelegatorWithdrawAddress",permalink:"/greenfield-docs/docs/greenfield-api/delegator-withdraw-address"}},y={},f=[{value:"DelegatorValidators",id:"delegatorvalidators",level:2}],h={toc:f},v="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(v,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delegatorvalidators"},"DelegatorValidators"),(0,s.kt)("p",null,"DelegatorValidators queries the validators of a delegator."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"validators",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},description:"validators defines the validators a delegator is delegating for."},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "validators": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(n.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);