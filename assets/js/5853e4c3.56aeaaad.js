"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3196],{53067:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Get Bucket Meta"},i="GetBucketMeta",d={unversionedId:"api/storgae-provider-rest/get_bucket_meta",id:"api/storgae-provider-rest/get_bucket_meta",title:"Get Bucket Meta",description:"RESTful API Description",source:"@site/docs/api/storgae-provider-rest/get_bucket_meta.md",sourceDirName:"api/storgae-provider-rest",slug:"/api/storgae-provider-rest/get_bucket_meta",permalink:"/greenfield-docs/docs/api/storgae-provider-rest/get_bucket_meta",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storgae-provider-rest/get_bucket_meta.md",tags:[],version:"current",frontMatter:{title:"Get Bucket Meta"},sidebar:"apiReferenceSidebar",previous:{title:"List Groups Members",permalink:"/greenfield-docs/docs/api/storgae-provider-rest/list_group_members"},next:{title:"List User Groups",permalink:"/greenfield-docs/docs/api/storgae-provider-rest/list_user_groups"}},u={},s=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Bucket",id:"bucket",level:3},{value:"StreamRecord",id:"streamrecord",level:3},{value:"BucketStatus",id:"bucketstatus",level:3},{value:"StreamAccountStatus",id:"streamaccountstatus",level:3},{value:"VisibilityType",id:"visibilitytype",level:3},{value:"SourceType",id:"sourcetype",level:3},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Get Bucket Meta",id:"example-1-get-bucket-meta",level:3},{value:"Sample Response: Get Object Meta successfully",id:"sample-response-get-object-meta-successfully",level:3}],p={toc:s},m="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getbucketmeta"},"GetBucketMeta"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to get bucket meta by bucket name. And it supports both ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual-hosted-style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(virtual-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName.gnfd-testnet-sp-*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(virtual-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")))),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket-meta"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket-meta is only used for routing location, and it does not need to pass any value")))),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"The request does not have a request body."),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?bucket-meta HTTP/1.1\nHost: BucketName.gnfd-testnet-sp-*.bnbchain.org\n")),(0,r.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/xml"))))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bucket"},"Bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"bucket defines the bucket meta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream_record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#streamrecord"},"StreamRecord")),(0,r.kt)("td",{parentName:"tr",align:null},"stream_record defines the stream payment record of a stream account")))),(0,r.kt)("h3",{id:"bucket"},"Bucket"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner is the object owner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName is the name of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Visibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#visibilitytype"},"VisibilityType")),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility defines the highest permissions for bucket. When an bucket is public, everyone can access it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"Uint"),(0,r.kt)("td",{parentName:"tr",align:null},"Id is the unique identification for bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SourceType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sourcetype"},"SourceType")),(0,r.kt)("td",{parentName:"tr",align:null},"SourceType defines which chain the user should send the bucket management transactions to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateAt"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"CreateAt define the block timestamp when the bucket created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PrimarySPAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"PrimarySPAddress is the unique address of the primary sp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PaymentAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"payment_address is the address of the payment account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota defines the traffic quota for read in bytes per month.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BucketStatus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bucketstatus"},"BucketStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"BucketStatus define the status of the bucket")))),(0,r.kt)("h3",{id:"streamrecord"},"StreamRecord"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account is the account address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CrudTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"CrudTimestamp defines latest update timestamp of the stream record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NetflowRate"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"NetflowRate defines the per-second rate that an account's balance is changing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StaticBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"StaticBalance defines the balance of the stream account at the latest CRUD timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BufferBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"BufferBalance defines reserved balance of the stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LockBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"LockBalance defines the locked balance of the stream account after it puts a new object and before the object is sealed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#streamaccountstatus"},"StreamAccountStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Status defines the status of the stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SettleTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"SettleTimestamp defines the unix timestamp when the stream account will be settled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OutFlowCount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"OutFlowCount defines the count of its out flows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FrozenNetflowRate"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"FrozenNetflowRate defines the frozen netflow rate, which is used when resuming stream account")))),(0,r.kt)("h3",{id:"bucketstatus"},"BucketStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket status is created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket status is discontinued")))),(0,r.kt)("h3",{id:"streamaccountstatus"},"StreamAccountStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account")))),(0,r.kt)("h3",{id:"visibilitytype"},"VisibilityType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is unspecified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is public read")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is private")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is inherit")))),(0,r.kt)("h3",{id:"sourcetype"},"SourceType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE_TYPE_ORIGIN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE_TYPE_BSC_CROSS_CHAIN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE_TYPE_MIRROR_PENDING")))),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storgae-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\n\nBody\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples given all use virtual-hosted-style."),(0,r.kt)("h3",{id:"example-1-get-bucket-meta"},"Example 1: Get Bucket Meta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?bucket-meta HTTP/1.1\nHost: j6it2.gnfd-testnet-sp-1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\n")),(0,r.kt)("h3",{id:"sample-response-get-object-meta-successfully"},"Sample Response: Get Object Meta successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n<?xml version="1.0" encoding="UTF-8"?>\n<GfSpGetBucketMetaResponse>\n    <Bucket>\n        <BucketInfo>\n            <Owner>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Owner>\n            <BucketName>j6it2</BucketName>\n            <Visibility>2</Visibility>\n            <Id>2</Id>\n            <SourceType>0</SourceType>\n            <CreateAt>1692278045</CreateAt>\n            <PaymentAddress>0xBC212bF5d6004311E350a531A1946D572C4d85E4</PaymentAddress>\n            <GlobalVirtualGroupFamilyId>1</GlobalVirtualGroupFamilyId>\n            <ChargedReadQuota>0</ChargedReadQuota>\n            <BucketStatus>1</BucketStatus>\n        </BucketInfo>\n        <Removed>false</Removed>\n        <DeleteAt>1693055775</DeleteAt>\n        <DeleteReason>testnet cleanup</DeleteReason>\n        <Operator>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Operator>\n        <CreateTxHash>0x8284859bf59b0fbde5a4836b0ffb1449fece0167ccd774782c37e4ed10af9047</CreateTxHash>\n        <UpdateTxHash>0x2a1c313dec9196b07cef8008f0e0e614c804a0c28dc08c9d78648afac1908bce</UpdateTxHash>\n        <UpdateAt>82179</UpdateAt>\n        <UpdateTime>1692450975</UpdateTime>\n    </Bucket>\n    <StreamRecord>\n        <Account>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Account>\n        <CrudTimestamp>1692366686</CrudTimestamp>\n        <NetflowRate>-11191795</NetflowRate>\n        <StaticBalance>0</StaticBalance>\n        <BufferBalance>174054795840000</BufferBalance>\n        <LockBalance>0</LockBalance>\n        <Status>0</Status>\n        <SettleTimestamp>1707832286</SettleTimestamp>\n        <OutFlowCount>0</OutFlowCount>\n        <FrozenNetflowRate>0</FrozenNetflowRate>\n    </StreamRecord>\n</GfSpGetBucketMetaResponse>\n')))}o.isMDXComponent=!0}}]);