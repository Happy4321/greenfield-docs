"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9010],{82361:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>_,frontMatter:()=>p,metadata:()=>y,toc:()=>h});var i=s(87462),a=(s(67294),s(3905)),n=s(26389),r=s(94891),o=s(75190),l=s(47507),c=s(24310),d=s(63303),m=(s(75035),s(85162));const p={id:"list-objects-by-bucket-id",title:"Queries a list of object items under the bucket.",description:"Queries a list of object items under the bucket.",sidebar_label:"ListObjectsByBucketId",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"ListObjectsByBucketId",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{object_infos:{type:"array",items:{type:"object",properties:{owner:{type:"string"},bucket_name:{type:"string",title:"bucket_name is the name of the bucket"},object_name:{type:"string",title:"object_name is the name of object"},id:{type:"string",title:"id is the unique identifier of object"},payload_size:{type:"string",format:"uint64",title:"payloadSize is the total size of the object payload"},visibility:{description:"visibility defines the highest permissions for object. When an object is public, everyone can access it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},content_type:{type:"string",description:"content_type define the format of the object which should be a standard MIME type."},create_at:{type:"string",format:"int64",title:"create_at define the block timestamp when the object is created"},object_status:{description:"object_status define the upload status of the object.",type:"string",enum:["OBJECT_STATUS_CREATED","OBJECT_STATUS_SEALED","OBJECT_STATUS_DISCONTINUED"],default:"OBJECT_STATUS_CREATED"},redundancy_type:{description:"redundancy_type define the type of the redundancy which can be multi-replication or EC.",type:"string",enum:["REDUNDANCY_EC_TYPE","REDUNDANCY_REPLICA_TYPE"],default:"REDUNDANCY_EC_TYPE"},source_type:{description:"source_type define the source of the object.",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN",title:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC"},checksums:{type:"array",items:{type:"string",format:"byte"},title:"checksums define the root hash of the pieces which stored in a SP.\nadd omit tag to omit the field when converting to NFT metadata"},secondary_sp_addresses:{type:"array",items:{type:"string"},title:"secondary_sp_addresses define the addresses of secondary_sps"}}}},pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"bucket_id",in:"path",required:!0,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"Queries a list of object items under the bucket.",method:"get",path:"/greenfield/storage/list_objects_by_bucket_id/{bucket_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a list of object items under the bucket.",description:{type:"text/plain"},url:{path:["greenfield","storage","list_objects_by_bucket_id",":bucket_id"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/list-objects-by-bucket-id",id:"greenfield-api/list-objects-by-bucket-id",title:"Queries a list of object items under the bucket.",description:"Queries a list of object items under the bucket.",source:"@site/docs/greenfield-api/list-objects-by-bucket-id.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/list-objects-by-bucket-id",permalink:"/greenfield-docs/docs/greenfield-api/list-objects-by-bucket-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-objects-by-bucket-id",title:"Queries a list of object items under the bucket.",description:"Queries a list of object items under the bucket.",sidebar_label:"ListObjectsByBucketId",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"ListObjectsByBucketId",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{object_infos:{type:"array",items:{type:"object",properties:{owner:{type:"string"},bucket_name:{type:"string",title:"bucket_name is the name of the bucket"},object_name:{type:"string",title:"object_name is the name of object"},id:{type:"string",title:"id is the unique identifier of object"},payload_size:{type:"string",format:"uint64",title:"payloadSize is the total size of the object payload"},visibility:{description:"visibility defines the highest permissions for object. When an object is public, everyone can access it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},content_type:{type:"string",description:"content_type define the format of the object which should be a standard MIME type."},create_at:{type:"string",format:"int64",title:"create_at define the block timestamp when the object is created"},object_status:{description:"object_status define the upload status of the object.",type:"string",enum:["OBJECT_STATUS_CREATED","OBJECT_STATUS_SEALED","OBJECT_STATUS_DISCONTINUED"],default:"OBJECT_STATUS_CREATED"},redundancy_type:{description:"redundancy_type define the type of the redundancy which can be multi-replication or EC.",type:"string",enum:["REDUNDANCY_EC_TYPE","REDUNDANCY_REPLICA_TYPE"],default:"REDUNDANCY_EC_TYPE"},source_type:{description:"source_type define the source of the object.",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN",title:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC"},checksums:{type:"array",items:{type:"string",format:"byte"},title:"checksums define the root hash of the pieces which stored in a SP.\nadd omit tag to omit the field when converting to NFT metadata"},secondary_sp_addresses:{type:"array",items:{type:"string"},title:"secondary_sp_addresses define the addresses of secondary_sps"}}}},pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"bucket_id",in:"path",required:!0,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"Queries a list of object items under the bucket.",method:"get",path:"/greenfield/storage/list_objects_by_bucket_id/{bucket_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a list of object items under the bucket.",description:{type:"text/plain"},url:{path:["greenfield","storage","list_objects_by_bucket_id",":bucket_id"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"ListObjects",permalink:"/greenfield-docs/docs/greenfield-api/list-objects"},next:{title:"StorageParams",permalink:"/greenfield-docs/docs/greenfield-api/storage-params"}},f={},h=[{value:"ListObjectsByBucketId",id:"listobjectsbybucketid",level:2}],b={toc:h},g="wrapper";function _(e){let{components:t,...s}=e;return(0,a.kt)(g,(0,i.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"listobjectsbybucketid"},"ListObjectsByBucketId"),(0,a.kt)("p",null,"Queries a list of object items under the bucket."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"bucket_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"object_infos"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"bucket_name",required:!1,schemaName:"bucket_name is the name of the bucket",qualifierMessage:void 0,schema:{type:"string",title:"bucket_name is the name of the bucket"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"object_name",required:!1,schemaName:"object_name is the name of object",qualifierMessage:void 0,schema:{type:"string",title:"object_name is the name of object"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"id is the unique identifier of object",qualifierMessage:void 0,schema:{type:"string",title:"id is the unique identifier of object"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"payload_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"payloadSize is the total size of the object payload"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"visibility",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`VISIBILITY_TYPE_UNSPECIFIED`, `VISIBILITY_TYPE_PUBLIC_READ`, `VISIBILITY_TYPE_PRIVATE`, `VISIBILITY_TYPE_INHERIT`]",schema:{description:"visibility defines the highest permissions for object. When an object is public, everyone can access it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"content_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"content_type define the format of the object which should be a standard MIME type."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"create_at",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"create_at define the block timestamp when the object is created"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"object_status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OBJECT_STATUS_CREATED`, `OBJECT_STATUS_SEALED`, `OBJECT_STATUS_DISCONTINUED`]",schema:{description:"object_status define the upload status of the object.",type:"string",enum:["OBJECT_STATUS_CREATED","OBJECT_STATUS_SEALED","OBJECT_STATUS_DISCONTINUED"],default:"OBJECT_STATUS_CREATED"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"redundancy_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`REDUNDANCY_EC_TYPE`, `REDUNDANCY_REPLICA_TYPE`]",schema:{description:"redundancy_type define the type of the redundancy which can be multi-replication or EC.",type:"string",enum:["REDUNDANCY_EC_TYPE","REDUNDANCY_REPLICA_TYPE"],default:"REDUNDANCY_EC_TYPE"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC",qualifierMessage:"**Possible values:** [`SOURCE_TYPE_ORIGIN`, `SOURCE_TYPE_BSC_CROSS_CHAIN`, `SOURCE_TYPE_MIRROR_PENDING`]",schema:{description:"source_type define the source of the object.",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN",title:"SourceType represents the source of resource creation, which can\nfrom Greenfield native or from a cross-chain transfer from BSC"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"checksums",required:!1,schemaName:"byte[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",format:"byte"},title:"checksums define the root hash of the pieces which stored in a SP.\nadd omit tag to omit the field when converting to NFT metadata"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"secondary_sp_addresses",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},title:"secondary_sp_addresses define the addresses of secondary_sps"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"pagination"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest."),(0,a.kt)("p",null," message SomeResponse {\nrepeated Bar results = 1;\nPageResponse page = 2;\n}")),(0,a.kt)(c.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"}))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "object_infos": [\n    {\n      "owner": "string",\n      "bucket_name": "string",\n      "object_name": "string",\n      "id": "string",\n      "payload_size": "string",\n      "visibility": "VISIBILITY_TYPE_UNSPECIFIED",\n      "content_type": "string",\n      "create_at": "string",\n      "object_status": "OBJECT_STATUS_CREATED",\n      "redundancy_type": "REDUNDANCY_EC_TYPE",\n      "source_type": "SOURCE_TYPE_ORIGIN",\n      "checksums": [\n        "string"\n      ],\n      "secondary_sp_addresses": [\n        "string"\n      ]\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);