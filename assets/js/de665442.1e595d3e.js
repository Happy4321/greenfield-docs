"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3108],{81479:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const o={title:"World State"},i="World State",d={unversionedId:"guide/greenfield-blockchain/modules/world-state",id:"guide/greenfield-blockchain/modules/world-state",title:"World State",description:"All Greenfield validators have access to up-to-date active data in full. Anyone can join the blockchain as a",source:"@site/docs/guide/greenfield-blockchain/modules/world-state.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/world-state",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/world-state",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/greenfield-blockchain/modules/world-state.md",tags:[],version:"current",frontMatter:{title:"World State"},sidebar:"guideSidebar",previous:{title:"Data Availability Challenge",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/data-availability-challenge"},next:{title:"Command Line",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/"}},r={},l=[{value:"Accounts and Balance",id:"accounts-and-balance",level:2},{value:"Validator and SP Metadata",id:"validator-and-sp-metadata",level:2},{value:"Storage Metadata",id:"storage-metadata",level:2},{value:"Permission Metadata",id:"permission-metadata",level:2},{value:"Billing Metadata",id:"billing-metadata",level:2}],c={toc:l},h="wrapper";function u(e){let{components:a,...t}=e;return(0,s.kt)(h,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"world-state"},"World State"),(0,s.kt)("p",null,"All Greenfield validators have access to up-to-date active data in full. Anyone can join the blockchain as a\nfull node and freely synchronize this data."),(0,s.kt)("p",null,"The active data is stored on-chain and can only be updated through transactions on the Greenfield blockchain.\nThere are several types of active data, which are described below."),(0,s.kt)("h2",{id:"accounts-and-balance"},"Accounts and Balance"),(0,s.kt)("p",null,'Each user has their "Owner Address" as the identifier for their owner account to "own" the data resources. There is\nanother "payment account" type dedicated to billing and payment purposes and owned by owner addresses.'),(0,s.kt)("p",null,"Both owner accounts and payment accounts can hold the BNB balance on Greenfield. Users can deposit BNB from BSC, accept\ntransfers from other users, and spend them on transaction gas and storage usage."),(0,s.kt)("h2",{id:"validator-and-sp-metadata"},"Validator and SP Metadata"),(0,s.kt)("p",null,"These are the basic information about the Greenfield validators and Greenfield SPs. SPs may have more information, as\nit has to publish their service information for users' data operations. There should be a reputation mechanism for SPs\nas well."),(0,s.kt)("h2",{id:"storage-metadata"},"Storage Metadata"),(0,s.kt)("p",null,'The "storage metadata" includes size, ownership, checksum hashes, and distribution location among SPs. Similar to AWS S3,\nthe basic unit of the storage is an "object", which can be a piece of binary data, text files, photos, videos, or any\nother format. Users can create their objects under their "bucket". A bucket is globally unique. The object can be referred\nto via the bucket name and the object ID. It can also be located by the bucket name, the prefix tag, and the object ID\nvia off-chain facility.'),(0,s.kt)("h2",{id:"permission-metadata"},"Permission Metadata"),(0,s.kt)("p",null,"Data resources on Greenfield, such as the data objects and the buckets, all have access control, such as which address\ncan create, read, list, or even execute the resources, and which address can grant/revoke these permissions."),(0,s.kt)("p",null,'Two other data resources also have access control. One is "Group". A group represents a group of user addresses that have\nthe same permissions to the same resources. It can be used in the same way as an address in the access control. Meanwhile,\nit requires permission too to change the group. The other is "payment account". They are created by the owner accounts.'),(0,s.kt)("p",null,"Here the access control is enforced by the SPs off-chain. People can test and challenge the SPs if they mess up the\ncontrol. Slash and reward will happen to keep the SPs sticking to the principles."),(0,s.kt)("h2",{id:"billing-metadata"},"Billing Metadata"),(0,s.kt)("p",null,'Users have to pay fees to store data objects on Greenfield. While each object enjoys a free quota to download by users\nwho are permitted to, the excessive download will require extra data packages to be paid for the bandwidth. Besides\nthe owner address, users can derive multiple "Payment Addresses" to pay these fees. Objects are stored under buckets,\nwhile each bucket can be associated with these payment addresses, and the system will charge these accounts for storing\nand/or downloading. Many buckets can share the same payment address. Such association information is also stored on\nchains with consensus as well.'))}u.isMDXComponent=!0}}]);