"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2538],{34645:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const a={},l="Greenfield Storage Provider Deployment Guide",n={unversionedId:"guide/storage-provider/run-book/infra-deployment/README",id:"guide/storage-provider/run-book/infra-deployment/README",title:"Greenfield Storage Provider Deployment Guide",description:"Supported Cloud Providers",source:"@site/docs/guide/storage-provider/run-book/infra-deployment/README.md",sourceDirName:"guide/storage-provider/run-book/infra-deployment",slug:"/guide/storage-provider/run-book/infra-deployment/",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/infra-deployment/",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/storage-provider/run-book/infra-deployment/README.md",tags:[],version:"current",frontMatter:{}},d={},s=[{value:"Supported Cloud Providers",id:"supported-cloud-providers",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Pre-requisites (we assume you already have the following infrastructure):",id:"pre-requisites-we-assume-you-already-have-the-following-infrastructure",level:2},{value:"High Level Architecture",id:"high-level-architecture",level:2},{value:"Steps:",id:"steps",level:2}],u={toc:s},p="wrapper";function c(e){let{components:r,...a}=e;return(0,i.kt)(p,(0,o.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"greenfield-storage-provider-deployment-guide"},"Greenfield Storage Provider Deployment Guide"),(0,i.kt)("h2",{id:"supported-cloud-providers"},"Supported Cloud Providers"),(0,i.kt)("p",null,"We currently support only deployment to AWS (EKS). Other cloud providers (e.g. Alicloud, GCP)\nare in our pipeline and will be supported in the future."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,'For detail about what "storage provider" is on application level, please see\n',(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/guide/storage-provider/"},"https://greenfield.bnbchain.org/docs/guide/storage-provider/"),". This document focuses on AWS infra\nand K8S deployment level."),(0,i.kt)("h2",{id:"pre-requisites-we-assume-you-already-have-the-following-infrastructure"},"Pre-requisites (we assume you already have the following infrastructure):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"AWS account"),(0,i.kt)("li",{parentName:"ol"},"AWS EKS available"),(0,i.kt)("li",{parentName:"ol"},"K8S kustomize client"),(0,i.kt)("li",{parentName:"ol"},"For monitoring (optional):",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Victoria Metrics"),(0,i.kt)("li",{parentName:"ol"},"Grafana dashboard"),(0,i.kt)("li",{parentName:"ol"},"Alert channels")))),(0,i.kt)("h2",{id:"high-level-architecture"},"High Level Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1",src:t(27867).Z,title:"AWS Infra and SP Components",width:"2236",height:"890"})),(0,i.kt)("h2",{id:"steps"},"Steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"aws/"},"Create AWS resources")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"k8s/"},"Create K8S resources")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"grafana/"},"Set up monitoring dashboard"))))}c.isMDXComponent=!0},27867:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/016-AWS-Infra-App-Component-e80cf2dd63485fb06442796365ded248.png"}}]);