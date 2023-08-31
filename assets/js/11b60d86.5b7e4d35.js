"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6235],{37706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var i=r(87462),a=(r(67294),r(3905)),s=r(26389),l=r(94891),o=r(75190),n=r(47507),p=r(24310),d=r(63303),m=(r(75035),r(85162));const u={id:"global-virtual-group",title:"GlobalVirtualGroup",description:"Queries a global virtual group by its id.",sidebar_label:"GlobalVirtualGroup",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a global virtual group by its id.",operationId:"GlobalVirtualGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_virtual_group:{type:"object",properties:{id:{type:"integer",format:"int64",description:"ID represents the unique identifier of the global virtual group."},family_id:{type:"integer",format:"int64",description:"Family ID represents the identifier of the GVG family that the group belongs to."},primary_sp_id:{type:"integer",format:"int64",description:"Primary SP ID represents the unique identifier of the primary storage provider in the group."},secondary_sp_ids:{type:"array",items:{type:"integer",format:"int64"},description:"Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group."},stored_size:{type:"string",format:"uint64",description:"Stored size represents the size of the stored objects within the group."},virtual_payment_address:{type:"string",description:"Virtual payment address represents the payment address associated with the group."},total_deposit:{type:"string",description:"Total deposit represents the number of tokens deposited by this storage provider for staking."}},description:"A global virtual group consists of one primary SP (SP) and multiple secondary SP.\nEvery global virtual group must belong to a GVG family, and the objects of each\nbucket must be stored in a GVG within a group family."}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"global_virtual_group_id",in:"query",required:!1,schema:{type:"integer",format:"int64"}}],tags:["VirtualGroup"],method:"get",path:"/greenfield/virtualgroup/global_virtual_group",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GlobalVirtualGroup",description:{content:"Queries a global virtual group by its id.",type:"text/plain"},url:{path:["greenfield","virtualgroup","global_virtual_group"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"global_virtual_group_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,c={unversionedId:"greenfield-api/global-virtual-group",id:"greenfield-api/global-virtual-group",title:"GlobalVirtualGroup",description:"Queries a global virtual group by its id.",source:"@site/docs/greenfield-api/global-virtual-group.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/global-virtual-group",permalink:"/greenfield-docs/docs/greenfield-api/global-virtual-group",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"global-virtual-group",title:"GlobalVirtualGroup",description:"Queries a global virtual group by its id.",sidebar_label:"GlobalVirtualGroup",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a global virtual group by its id.",operationId:"GlobalVirtualGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_virtual_group:{type:"object",properties:{id:{type:"integer",format:"int64",description:"ID represents the unique identifier of the global virtual group."},family_id:{type:"integer",format:"int64",description:"Family ID represents the identifier of the GVG family that the group belongs to."},primary_sp_id:{type:"integer",format:"int64",description:"Primary SP ID represents the unique identifier of the primary storage provider in the group."},secondary_sp_ids:{type:"array",items:{type:"integer",format:"int64"},description:"Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group."},stored_size:{type:"string",format:"uint64",description:"Stored size represents the size of the stored objects within the group."},virtual_payment_address:{type:"string",description:"Virtual payment address represents the payment address associated with the group."},total_deposit:{type:"string",description:"Total deposit represents the number of tokens deposited by this storage provider for staking."}},description:"A global virtual group consists of one primary SP (SP) and multiple secondary SP.\nEvery global virtual group must belong to a GVG family, and the objects of each\nbucket must be stored in a GVG within a group family."}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"global_virtual_group_id",in:"query",required:!1,schema:{type:"integer",format:"int64"}}],tags:["VirtualGroup"],method:"get",path:"/greenfield/virtualgroup/global_virtual_group",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GlobalVirtualGroup",description:{content:"Queries a global virtual group by its id.",type:"text/plain"},url:{path:["greenfield","virtualgroup","global_virtual_group"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"global_virtual_group_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"AvailableGlobalVirtualGroupFamilies",permalink:"/greenfield-docs/docs/greenfield-api/available-global-virtual-group-families"},next:{title:"GlobalVirtualGroupByFamilyID",permalink:"/greenfield-docs/docs/greenfield-api/global-virtual-group-by-family-id"}},y={},f=[{value:"GlobalVirtualGroup",id:"globalvirtualgroup",level:2}],h={toc:f},b="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"globalvirtualgroup"},"GlobalVirtualGroup"),(0,a.kt)("p",null,"Queries a global virtual group by its id."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"global_virtual_group_id",in:"query",required:!1,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"global_virtual_group"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"A global virtual group consists of one primary SP (SP) and multiple secondary SP.\nEvery global virtual group must belong to a GVG family, and the objects of each\nbucket must be stored in a GVG within a group family.")),(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"ID represents the unique identifier of the global virtual group."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"family_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Family ID represents the identifier of the GVG family that the group belongs to."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"primary_sp_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Primary SP ID represents the unique identifier of the primary storage provider in the group."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"secondary_sp_ids",required:!1,schemaName:"int64[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int64"},description:"Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"stored_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"Stored size represents the size of the stored objects within the group."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"virtual_payment_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Virtual payment address represents the payment address associated with the group."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"total_deposit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Total deposit represents the number of tokens deposited by this storage provider for staking."},mdxType:"SchemaItem"}))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "global_virtual_group": {\n    "id": 0,\n    "family_id": 0,\n    "primary_sp_id": 0,\n    "secondary_sp_ids": [\n      0\n    ],\n    "stored_size": "string",\n    "virtual_payment_address": "string",\n    "total_deposit": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);