"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5004],{21658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>T});var s=a(87462),r=(a(67294),a(3905)),i=a(26389),l=a(94891),o=a(75190),n=a(47507),m=a(24310),c=a(63303),p=(a(75035),a(85162));const d={id:"out-flows",title:"OutFlows",description:"Queries our flows by account.",sidebar_label:"OutFlows",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries our flows by account.",operationId:"OutFlows",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{out_flows:{type:"array",items:{type:"object",properties:{to_address:{type:"string",title:"stream account address who receives the flow, usually SP(service provider)"},rate:{type:"string",title:"flow rate"},status:{title:"status",type:"string",enum:["OUT_FLOW_STATUS_ACTIVE","OUT_FLOW_STATUS_FROZEN"],default:"OUT_FLOW_STATUS_ACTIVE",description:"- OUT_FLOW_STATUS_ACTIVE: OUT_FLOW_STATUS_ACTIVE defines the active status of a out flow.\n - OUT_FLOW_STATUS_FROZEN: OUT_FLOW_STATUS_FROZEN defines the frozen status of a out flow."}},title:"OutFlow defines the accumulative outflow stream rate in BNB\nfrom a stream account to a Storage Provider"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"account",in:"path",required:!0,schema:{type:"string"}}],tags:["Payment"],method:"get",path:"/greenfield/payment/out_flows/{account}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"OutFlows",description:{content:"Queries our flows by account.",type:"text/plain"},url:{path:["greenfield","payment","out_flows",":account"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"account"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,f={unversionedId:"greenfield-api/out-flows",id:"greenfield-api/out-flows",title:"OutFlows",description:"Queries our flows by account.",source:"@site/docs/greenfield-api/out-flows.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/out-flows",permalink:"/greenfield-docs/docs/greenfield-api/out-flows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"out-flows",title:"OutFlows",description:"Queries our flows by account.",sidebar_label:"OutFlows",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries our flows by account.",operationId:"OutFlows",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{out_flows:{type:"array",items:{type:"object",properties:{to_address:{type:"string",title:"stream account address who receives the flow, usually SP(service provider)"},rate:{type:"string",title:"flow rate"},status:{title:"status",type:"string",enum:["OUT_FLOW_STATUS_ACTIVE","OUT_FLOW_STATUS_FROZEN"],default:"OUT_FLOW_STATUS_ACTIVE",description:"- OUT_FLOW_STATUS_ACTIVE: OUT_FLOW_STATUS_ACTIVE defines the active status of a out flow.\n - OUT_FLOW_STATUS_FROZEN: OUT_FLOW_STATUS_FROZEN defines the frozen status of a out flow."}},title:"OutFlow defines the accumulative outflow stream rate in BNB\nfrom a stream account to a Storage Provider"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"account",in:"path",required:!0,schema:{type:"string"}}],tags:["Payment"],method:"get",path:"/greenfield/payment/out_flows/{account}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"OutFlows",description:{content:"Queries our flows by account.",type:"text/plain"},url:{path:["greenfield","payment","out_flows",":account"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"account"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"DynamicBalance",permalink:"/greenfield-docs/docs/greenfield-api/dynamic-balance"},next:{title:"PaymentParams",permalink:"/greenfield-docs/docs/greenfield-api/payment-params"}},y={},T=[{value:"OutFlows",id:"outflows",level:2}],g={toc:T},_="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(_,(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"outflows"},"OutFlows"),(0,r.kt)("p",null,"Queries our flows by account."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"account",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"out_flows"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"to_address",required:!1,schemaName:"stream account address who receives the flow, usually SP(service provider)",qualifierMessage:void 0,schema:{type:"string",title:"stream account address who receives the flow, usually SP(service provider)"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"rate",required:!1,schemaName:"flow rate",qualifierMessage:void 0,schema:{type:"string",title:"flow rate"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"status",qualifierMessage:"**Possible values:** [`OUT_FLOW_STATUS_ACTIVE`, `OUT_FLOW_STATUS_FROZEN`]",schema:{title:"status",type:"string",enum:["OUT_FLOW_STATUS_ACTIVE","OUT_FLOW_STATUS_FROZEN"],default:"OUT_FLOW_STATUS_ACTIVE",description:"- OUT_FLOW_STATUS_ACTIVE: OUT_FLOW_STATUS_ACTIVE defines the active status of a out flow.\n - OUT_FLOW_STATUS_FROZEN: OUT_FLOW_STATUS_FROZEN defines the frozen status of a out flow."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "out_flows": [\n    {\n      "to_address": "string",\n      "rate": "string",\n      "status": "OUT_FLOW_STATUS_ACTIVE"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);