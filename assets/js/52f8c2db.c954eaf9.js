"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4169],{1033:(e,n,A)=>{A.r(n),A.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=A(87462),a=(A(67294),A(3905));const r={},s="Create a SP cluster",o={unversionedId:"guide/storage-provider/run-book/infra-deployment/k8s/README",id:"guide/storage-provider/run-book/infra-deployment/k8s/README",title:"Create a SP cluster",description:"Pre-requisite is that AWS resources must first be created. Please see aws section for details.",source:"@site/docs/guide/storage-provider/run-book/infra-deployment/k8s/README.md",sourceDirName:"guide/storage-provider/run-book/infra-deployment/k8s",slug:"/guide/storage-provider/run-book/infra-deployment/k8s/",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/infra-deployment/k8s/",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/storage-provider/run-book/infra-deployment/k8s/README.md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Cluster Size Selection",id:"cluster-size-selection",level:2},{value:"Setting up K8S via kustomize",id:"setting-up-k8s-via-kustomize",level:2},{value:"Config file",id:"config-file",level:3},{value:"Setting up secret",id:"setting-up-secret",level:2}],l={toc:p},d="wrapper";function c(e){let{components:n,...A}=e;return(0,a.kt)(d,(0,t.Z)({},l,A,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-sp-cluster"},"Create a SP cluster"),(0,a.kt)("p",null,"Pre-requisite is that AWS resources must first be created. Please see aws section for details."),(0,a.kt)("p",null,"Then, using ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomize"),", you can create the app in K8S (EKS) very quickly."),(0,a.kt)("h2",{id:"cluster-size-selection"},"Cluster Size Selection"),(0,a.kt)("p",null,"We currently support a number of cluster modes, depending on the requirements of performance."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"all-in-one: All services of SP are deployed in a single pod."),(0,a.kt)("li",{parentName:"ol"},"regular: An arrangement where some services will be combined as a pod."),(0,a.kt)("li",{parentName:"ol"},"large: Each service is a pod by itself.")),(0,a.kt)("h2",{id:"setting-up-k8s-via-kustomize"},"Setting up K8S via kustomize"),(0,a.kt)("p",null,"To set up a primary SP cluster, using ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomize")," we can deploy it with the following YAML. You can\nreplace the ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"s in the YAML file. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"resources:\n  - https://github.com/node-real/greenfield-sp-k8s/base/cluster/large?ref=v0.2.16\n\n\nimages:\n- name: ghcr.io/bnb-chain/greenfield-storage-provider\n  newTag: 0.2.0\n\nconfigMapGenerator:\n- name: config\n  files:\n  - configs/config.toml\n\npatches:\n- target:\n    kind: Service\n    name: p2p-external\n  patch: |-\n    - op: replace\n      path: /metadata/annotations/service.beta.kubernetes.io~1aws-load-balancer-subnets\n      value: subnet-a,subnet-b,subnet-c\n- target:\n    kind: Ingress\n    name: gateway\n  patch: |-\n    - op: replace\n      path: /spec/rules/0/host\n      value: sp-a.yourdomain.com\n    - op: replace\n      path: /spec/rules/1/host\n      value: *.sp-a.yourdomain.com\n- target:\n    kind: ServiceAccount\n    name: nodereal-default\n  patch: |-\n    - op: replace\n      path: /metadata/annotations/eks.amazonaws.com~1role-arn\n      value: arn:aws:iam::111111111111:role/greenfield-sp-a\n- target:\n    kind: SecretStore\n    name: default\n  patch: |-\n    - op: replace\n      path: /spec/provider/aws/region\n      value: ap-northeast-1\n- target:\n    kind: ExternalSecret\n    name: default\n  patch: |-\n    - op: replace\n      path: /spec/dataFrom/0/extract/key\n      value: /projects/greenfield/sp/a\n- target:\n    kind: ServiceMonitor\n    name: default\n  patch: |-\n    - op: replace\n      path: /spec/namespaceSelector/matchNames/0\n      value: gf-sp-a\n")),(0,a.kt)("h3",{id:"config-file"},"Config file"),(0,a.kt)("p",null,"Here is the config file used in the above ",(0,a.kt)("inlineCode",{parentName:"p"},"configMapGenerator"),". You will need to obtain and\nreplace ",(0,a.kt)("inlineCode",{parentName:"p"},"SpOperatorAddress"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ChainID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GreenfieldAddresses")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TendermintAddresses")," from your env."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# services list are to be started\nService = ["gateway", "uploader", "downloader", "challenge", "tasknode", "receiver", "manager", "p2p", "auth", "stopserving"]\n\n# sp operator address generate from sp\'s \'OperatorPublicKey\'\nSpOperatorAddress = "0x000000000000000000000000000000000000000"\n\n# service name in k8s\n# notice: except gateway is SP Domain\n[Endpoint]\ngateway = "sp-a.your-domain.com"\nchallenge = "challenge:9333"\ndownloader = "downloader:9233"\nreceiver = "receiver:9533"\nsigner = "signer:9633"\ntasknode = "tasknode:9433"\nuploader = "uploader:9133"\nmetadata = "metadata:9833"\np2p = "p2p:9833"\nauth = "auth:8933"\n\n# pod listen addr\n[ListenAddress]\nchallenge = "0.0.0.0:9333"\ndownloader = "0.0.0.0:9233"\ngateway = "0.0.0.0:9033"\nreceiver = "0.0.0.0:9533"\nsigner = "0.0.0.0:9633"\ntasknode = "0.0.0.0:9433"\nuploader = "0.0.0.0:9133"\nmetadata = "0.0.0.0:9833"\np2p = "0.0.0.0:9833"\nauth = "0.0.0.0:8933"\n\n# SQL DB configuration\n# User, Passwd, Address support ENV vars\n[SpDBConfig]\nUser = ""\nPasswd = ""\nAddress = ""\nDatabase = "storage_provider_db"\n\n[BsDBConfig]\nUser = ""\nPasswd = ""\nAddress = ""\nDatabase = "block_syncer"\n\n[BsDBSwitchedConfig]\nUser = ""\nPasswd = ""\nAddress = ""\nDatabase = "block_syncer_backup"\n\n# piece store configuration\n# BucketURL, AWSAccessKey, AWSSecretKey, AWSSessionToken support ENV vars\n[PieceStoreConfig]\nShards = 0\n\n[PieceStoreConfig.Store]\nStorage = "s3"\nMaxRetries = 5\nIAMType = "SA"\n\n# According to dev/qa greeenfield chain to replace\n[ChainConfig]\nChainID = "greenfield_xxxx-x"\n\n[[ChainConfig.NodeAddr]]\nGreenfieldAddresses = ["k8s-gnfdvali-gnfdvali-0000000000000000000000000.elb.us-east-1.amazonaws.com:9090"]\nTendermintAddresses = ["https://gnfd.chain.your-domain.com"]\n\n# signer service config\n[SignerCfg]\nWhitelistCIDR = ["0.0.0.0/0"]\nGasLimit = 210000\n\n[BlockSyncerCfg]\nModules = ["epoch", "bucket", "object", "payment", "group", "permission","storage_provider"]\nDsn = ""\nDsnBackup = ""\nRecreateTables = true\nBackup = false\nWorkers = 50\n\n# p2p node configuration\n[P2PCfg]\nListenAddress = "0.0.0.0:9933"\n# p2p node msg Secp256k1 encryption key, it is different from other SP\'s addresses\n# generate by ./gnfd-sp p2p.create.key -n 14, ref to dev_p2p_list and qa_p2p_list.\n# P2PPrivateKey = ""\n# p2p node\'s bootstrap node, format: [node_id1@ip1:port1, node_id2@ip1:port2]\n# ip need be the pod real ip\nBootstrap = []\n\n# metrics config\n[MetricsCfg]\nEnabled = true\nHTTPAddress = "0.0.0.0:24036"\n\n# pprof config\n[PProfCfg]\nEnabled = true\nHTTPAddress = "0.0.0.0:25341"\n\n[DiscontinueCfg]\nBucketKeepAliveDays = 1\n\n[MetadataCfg]\nIsMasterDB = true\nBsDBSwitchCheckIntervalSec = 3600\n\n[RateLimiter]\nAPILimits = []\nHostPattern = []\nPathPattern = []\n\n[RateLimiter.HTTPLimitCfg]\nOn = false\nRateLimit = 1\nRatePeriod = "S"\n')),(0,a.kt)("h2",{id:"setting-up-secret"},"Setting up secret"),(0,a.kt)("p",null,"The SP app also will fetch secret from AWS (used as external secret in K8S). Please see AWS\ndoc for creating the secret. The secret JSON content will be like the followings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SP_DB_USER":"xxx",\n    "SP_DB_PASSWORD":"xxx",\n    "SP_DB_ADDRESS":"xxx:3306",\n    "SP_DB_DATABASE":"storage_provider_db",\n    "BLOCK_SYNCER_DSN":"user:pw@tcp(xxx:3306)/block_syncer?parseTime=true&multiStatements=true&loc=Local",\n    "BS_DB_USER":"xxx",\n    "BS_DB_PASSWORD":"xxx",\n    "BS_DB_ADDRESS":"xxx:3306",\n    "BS_DB_DATABASE":"block_syncer",\n    "SIGNER_OPERATOR_PRIV_KEY":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n    "SIGNER_FUNDING_PRIV_KEY":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n    "SIGNER_APPROVAL_PRIV_KEY":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n    "SIGNER_SEAL_PRIV_KEY":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n    "BUCKET_URL":"xxx",\n    "P2P_PRIVATE_KEY":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n    "SIGNER_GC_PRIV_KEY":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n    "BS_DB_SWITCHED_USER":"xxx",\n    "BS_DB_SWITCHED_PASSWORD":"xxx",\n    "BS_DB_SWITCHED_ADDRESS":"xxx:3306",\n    "BS_DB_SWITCHED_DATABASE":"block_syncer_backup",\n    "BLOCK_SYNCER_DSN_SWITCHED":"user:pw@tcp(xxx:3306)/block_syncer_backup?parseTime=true&multiStatements=true&loc=Local"\n}\n')),(0,a.kt)("p",null,"refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-docs/blob/718b662489fd862f56c1a0b9748f357b71735bd0/src/guide/storage-provider/run-book/run-testnet-SP-node.md"},"runbook")," to check how to get the keys."),(0,a.kt)("p",null,"build command: ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomize build . > sp.yaml"),"\napply command: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f ./sp.yaml")))}c.isMDXComponent=!0}}]);