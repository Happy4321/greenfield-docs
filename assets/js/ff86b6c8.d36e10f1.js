"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6191],{642:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>h,toc:()=>_});var a=i(87462),s=(i(67294),i(3905)),r=i(26389),n=i(94891),o=i(75190),c=i(47507),d=i(24310),p=i(63303),m=(i(75035),i(85162));const l={id:"head-object",title:"HeadObject",description:"Queries a object with specify name.",sidebar_label:"HeadObject",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a object with specify name.",operationId:"HeadObject",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{object_info:{type:"object",properties:{owner:{type:"string",title:"owner is the object owner"},creator:{type:"string",title:"creator is the address of the uploader, it always be same as owner address"},bucket_name:{type:"string",title:"bucket_name is the name of the bucket"},object_name:{type:"string",title:"object_name is the name of object"},id:{type:"string",title:"id is the unique identifier of object"},local_virtual_group_id:{type:"integer",format:"int64"},payload_size:{type:"string",format:"uint64",title:"payloadSize is the total size of the object payload"},visibility:{description:"visibility defines the highest permissions for object. When an object is public, everyone can access it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},content_type:{type:"string",description:"content_type define the format of the object which should be a standard MIME type."},create_at:{type:"string",format:"int64",title:"create_at define the block timestamp when the object is created"},object_status:{description:"object_status define the upload status of the object.",type:"string",enum:["OBJECT_STATUS_CREATED","OBJECT_STATUS_SEALED","OBJECT_STATUS_DISCONTINUED"],default:"OBJECT_STATUS_CREATED"},redundancy_type:{description:"redundancy_type define the type of the redundancy which can be multi-replication or EC.",type:"string",enum:["REDUNDANCY_EC_TYPE","REDUNDANCY_REPLICA_TYPE"],default:"REDUNDANCY_EC_TYPE"},source_type:{description:"source_type define the source of the object.",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_MIRROR_PENDING","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_OP_CROSS_CHAIN"],default:"SOURCE_TYPE_ORIGIN",title:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC"},checksums:{type:"array",items:{type:"string",format:"byte"},title:"checksums define the root hash of the pieces which stored in a SP.\nadd omit tag to omit the field when converting to NFT metadata"}}},global_virtual_group:{type:"object",properties:{id:{type:"integer",format:"int64",description:"ID represents the unique identifier of the global virtual group."},family_id:{type:"integer",format:"int64",description:"Family ID represents the identifier of the GVG family that the group belongs to."},primary_sp_id:{type:"integer",format:"int64",description:"Primary SP ID represents the unique identifier of the primary storage provider in the group."},secondary_sp_ids:{type:"array",items:{type:"integer",format:"int64"},description:"Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group."},stored_size:{type:"string",format:"uint64",description:"Stored size represents the size of the stored objects within the group."},virtual_payment_address:{type:"string",description:"Virtual payment address represents the payment address associated with the group."},total_deposit:{type:"string",description:"Total deposit represents the number of tokens deposited by this storage provider for staking."}},description:"A global virtual group consists of one primary SP (SP) and multiple secondary SP.\nEvery global virtual group must belong to a GVG family, and the objects of each\nbucket must be stored in a GVG within a group family."}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},{name:"object_name",in:"path",required:!0,schema:{type:"string"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/head_object/{bucket_name}/{object_name}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"HeadObject",description:{content:"Queries a object with specify name.",type:"text/plain"},url:{path:["greenfield","storage","head_object",":bucket_name",":object_name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_name"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"object_name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,h={unversionedId:"greenfield-api/head-object",id:"greenfield-api/head-object",title:"HeadObject",description:"Queries a object with specify name.",source:"@site/docs/greenfield-api/head-object.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/head-object",permalink:"/greenfield-docs/docs/greenfield-api/head-object",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"head-object",title:"HeadObject",description:"Queries a object with specify name.",sidebar_label:"HeadObject",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a object with specify name.",operationId:"HeadObject",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{object_info:{type:"object",properties:{owner:{type:"string",title:"owner is the object owner"},creator:{type:"string",title:"creator is the address of the uploader, it always be same as owner address"},bucket_name:{type:"string",title:"bucket_name is the name of the bucket"},object_name:{type:"string",title:"object_name is the name of object"},id:{type:"string",title:"id is the unique identifier of object"},local_virtual_group_id:{type:"integer",format:"int64"},payload_size:{type:"string",format:"uint64",title:"payloadSize is the total size of the object payload"},visibility:{description:"visibility defines the highest permissions for object. When an object is public, everyone can access it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},content_type:{type:"string",description:"content_type define the format of the object which should be a standard MIME type."},create_at:{type:"string",format:"int64",title:"create_at define the block timestamp when the object is created"},object_status:{description:"object_status define the upload status of the object.",type:"string",enum:["OBJECT_STATUS_CREATED","OBJECT_STATUS_SEALED","OBJECT_STATUS_DISCONTINUED"],default:"OBJECT_STATUS_CREATED"},redundancy_type:{description:"redundancy_type define the type of the redundancy which can be multi-replication or EC.",type:"string",enum:["REDUNDANCY_EC_TYPE","REDUNDANCY_REPLICA_TYPE"],default:"REDUNDANCY_EC_TYPE"},source_type:{description:"source_type define the source of the object.",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_MIRROR_PENDING","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_OP_CROSS_CHAIN"],default:"SOURCE_TYPE_ORIGIN",title:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC"},checksums:{type:"array",items:{type:"string",format:"byte"},title:"checksums define the root hash of the pieces which stored in a SP.\nadd omit tag to omit the field when converting to NFT metadata"}}},global_virtual_group:{type:"object",properties:{id:{type:"integer",format:"int64",description:"ID represents the unique identifier of the global virtual group."},family_id:{type:"integer",format:"int64",description:"Family ID represents the identifier of the GVG family that the group belongs to."},primary_sp_id:{type:"integer",format:"int64",description:"Primary SP ID represents the unique identifier of the primary storage provider in the group."},secondary_sp_ids:{type:"array",items:{type:"integer",format:"int64"},description:"Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group."},stored_size:{type:"string",format:"uint64",description:"Stored size represents the size of the stored objects within the group."},virtual_payment_address:{type:"string",description:"Virtual payment address represents the payment address associated with the group."},total_deposit:{type:"string",description:"Total deposit represents the number of tokens deposited by this storage provider for staking."}},description:"A global virtual group consists of one primary SP (SP) and multiple secondary SP.\nEvery global virtual group must belong to a GVG family, and the objects of each\nbucket must be stored in a GVG within a group family."}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},{name:"object_name",in:"path",required:!0,schema:{type:"string"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/head_object/{bucket_name}/{object_name}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"HeadObject",description:{content:"Queries a object with specify name.",type:"text/plain"},url:{path:["greenfield","storage","head_object",":bucket_name",":object_name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_name"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"object_name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"HeadGroupNFT",permalink:"/greenfield-docs/docs/greenfield-api/head-group-nft"},next:{title:"HeadObjectById",permalink:"/greenfield-docs/docs/greenfield-api/head-object-by-id"}},y={},_=[{value:"HeadObject",id:"headobject",level:2}],f={toc:_},g="wrapper";function b(e){let{components:t,...i}=e;return(0,s.kt)(g,(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"headobject"},"HeadObject"),(0,s.kt)("p",null,"Queries a object with specify name."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"object_name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"object_info"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"owner is the object owner",qualifierMessage:void 0,schema:{type:"string",title:"owner is the object owner"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"creator",required:!1,schemaName:"creator is the address of the uploader, it always be same as owner address",qualifierMessage:void 0,schema:{type:"string",title:"creator is the address of the uploader, it always be same as owner address"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"bucket_name",required:!1,schemaName:"bucket_name is the name of the bucket",qualifierMessage:void 0,schema:{type:"string",title:"bucket_name is the name of the bucket"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"object_name",required:!1,schemaName:"object_name is the name of object",qualifierMessage:void 0,schema:{type:"string",title:"object_name is the name of object"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"id is the unique identifier of object",qualifierMessage:void 0,schema:{type:"string",title:"id is the unique identifier of object"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"local_virtual_group_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"payload_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"payloadSize is the total size of the object payload"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"visibility",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`VISIBILITY_TYPE_UNSPECIFIED`, `VISIBILITY_TYPE_PUBLIC_READ`, `VISIBILITY_TYPE_PRIVATE`, `VISIBILITY_TYPE_INHERIT`]",schema:{description:"visibility defines the highest permissions for object. When an object is public, everyone can access it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"content_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"content_type define the format of the object which should be a standard MIME type."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"create_at",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"create_at define the block timestamp when the object is created"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"object_status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OBJECT_STATUS_CREATED`, `OBJECT_STATUS_SEALED`, `OBJECT_STATUS_DISCONTINUED`]",schema:{description:"object_status define the upload status of the object.",type:"string",enum:["OBJECT_STATUS_CREATED","OBJECT_STATUS_SEALED","OBJECT_STATUS_DISCONTINUED"],default:"OBJECT_STATUS_CREATED"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"redundancy_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`REDUNDANCY_EC_TYPE`, `REDUNDANCY_REPLICA_TYPE`]",schema:{description:"redundancy_type define the type of the redundancy which can be multi-replication or EC.",type:"string",enum:["REDUNDANCY_EC_TYPE","REDUNDANCY_REPLICA_TYPE"],default:"REDUNDANCY_EC_TYPE"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC",qualifierMessage:"**Possible values:** [`SOURCE_TYPE_ORIGIN`, `SOURCE_TYPE_MIRROR_PENDING`, `SOURCE_TYPE_BSC_CROSS_CHAIN`, `SOURCE_TYPE_OP_CROSS_CHAIN`]",schema:{description:"source_type define the source of the object.",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_MIRROR_PENDING","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_OP_CROSS_CHAIN"],default:"SOURCE_TYPE_ORIGIN",title:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"checksums",required:!1,schemaName:"byte[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",format:"byte"},title:"checksums define the root hash of the pieces which stored in a SP.\nadd omit tag to omit the field when converting to NFT metadata"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"global_virtual_group"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A global virtual group consists of one primary SP (SP) and multiple secondary SP.\nEvery global virtual group must belong to a GVG family, and the objects of each\nbucket must be stored in a GVG within a group family.")),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"ID represents the unique identifier of the global virtual group."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"family_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Family ID represents the identifier of the GVG family that the group belongs to."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"primary_sp_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Primary SP ID represents the unique identifier of the primary storage provider in the group."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"secondary_sp_ids",required:!1,schemaName:"int64[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int64"},description:"Secondary SP IDs represents the list of unique identifiers of the secondary storage providers in the group."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"stored_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"Stored size represents the size of the stored objects within the group."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"virtual_payment_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Virtual payment address represents the payment address associated with the group."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"total_deposit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Total deposit represents the number of tokens deposited by this storage provider for staking."},mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "object_info": {\n    "owner": "string",\n    "creator": "string",\n    "bucket_name": "string",\n    "object_name": "string",\n    "id": "string",\n    "local_virtual_group_id": 0,\n    "payload_size": "string",\n    "visibility": "VISIBILITY_TYPE_UNSPECIFIED",\n    "content_type": "string",\n    "create_at": "string",\n    "object_status": "OBJECT_STATUS_CREATED",\n    "redundancy_type": "REDUNDANCY_EC_TYPE",\n    "source_type": "SOURCE_TYPE_ORIGIN",\n    "checksums": [\n      "string"\n    ]\n  },\n  "global_virtual_group": {\n    "id": 0,\n    "family_id": 0,\n    "primary_sp_id": 0,\n    "secondary_sp_ids": [\n      0\n    ],\n    "stored_size": "string",\n    "virtual_payment_address": "string",\n    "total_deposit": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);