"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Run SP Node"},i=void 0,l={unversionedId:"guide/storage-provider/run-book/run-SP-node",id:"guide/storage-provider/run-book/run-SP-node",title:"Run SP Node",description:"This guide helps you set up an SP Node. Once you set up the SP Node successfully, you can follow the Join SP Network guide to make it online.",source:"@site/docs/guide/storage-provider/run-book/run-SP-node.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/run-SP-node",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-SP-node",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/run-SP-node.md",tags:[],version:"current",frontMatter:{title:"Run SP Node"},sidebar:"guideSidebar",previous:{title:"Run Local SP Network",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-local-SP-network"},next:{title:"Join Greenfield SP Network",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/join-SP-network"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Recommended Hardware",id:"recommended-hardware",level:3},{value:"Wallet Preparation",id:"wallet-preparation",level:3},{value:"Database Configuration",id:"database-configuration",level:3},{value:"PieceStore Configuration",id:"piecestore-configuration",level:3},{value:"Gateway Configuration",id:"gateway-configuration",level:3},{value:"1. Support both path-style and virtual-style routers in https certificates",id:"1-support-both-path-style-and-virtual-style-routers-in-https-certificates",level:4},{value:"2. CORS Configuration",id:"2-cors-configuration",level:4},{value:"3. Sample CORS Configuration for Nginx",id:"3-sample-cors-configuration-for-nginx",level:4},{value:"Create Storage Provider",id:"create-storage-provider",level:2},{value:"1. Compile SP",id:"1-compile-sp",level:3},{value:"2. SP Config",id:"2-sp-config",level:3},{value:"Generate config template",id:"generate-config-template",level:4},{value:"Write config",id:"write-config",level:4},{value:"3. Run SP",id:"3-run-sp",level:3},{value:"4. Deploy Dashboard",id:"4-deploy-dashboard",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide helps you set up an SP Node. Once you set up the SP Node successfully, you can follow the ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/join-SP-network"},"Join SP Network guide")," to make it online."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#recommended-hardware"},"Recommended Hardware")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#wallet-preparation"},"Wallet Preparation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#database-configuration"},"Database Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#piecestore-configuration"},"PieceStore Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gateway-configuration"},"Gateway Configuration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-support-both-path-style-and-virtual-style-routers-in-https-certificates"},"1. Support both path-style and virtual-style routers in https certificates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-cors-configuration"},"2. CORS Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-sample-cors-configuration-for-nginx"},"3. Sample CORS Configuration for Nginx")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-storage-provider"},"Create Storage Provider"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-compile-sp"},"1. Compile SP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-sp-config"},"2. SP Config"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generate-config-template"},"Generate config template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#write-config"},"Write config")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-run-sp"},"3. Run SP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-deploy-dashboard"},"4. Deploy Dashboard"))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"recommended-hardware"},"Recommended Hardware"),(0,r.kt)("p",null,"The following lists the recommended hardware requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X, Linux, or Windows\uff1b"),(0,r.kt)("li",{parentName:"ul"},"16 cores of CPU, 64 GB of memory(RAM);"),(0,r.kt)("li",{parentName:"ul"},"1 Gbps network connection with upload/download speeds of 10MB/s+\uff1b"),(0,r.kt)("li",{parentName:"ul"},"At least 1 TB disk space for backend storage;"),(0,r.kt)("li",{parentName:"ul"},"50GB+ SQL database;"),(0,r.kt)("li",{parentName:"ul"},"Piece Store: AWS S3, MinIO(Beta);"),(0,r.kt)("li",{parentName:"ul"},"6 Greenfield accounts with enough BNB tokens.")),(0,r.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Each storage provider will hold 7 different accounts serving different purposes")),(0,r.kt)("h3",{id:"wallet-preparation"},"Wallet Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Operator Account"),": Used to edit the information of the StorageProvider. Please make sure it has enough BNB to pay the gas fee of ",(0,r.kt)("inlineCode",{parentName:"li"},"EditStorageProvider")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStorageProviderStatus")," transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Funding Account"),": Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the SP must submit a deposit as a guarantee. At least ",(0,r.kt)("inlineCode",{parentName:"li"},"500+")," BNB are required for staking. You should use this address to send ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateStorageProvider")," proposal on-chain. Besides the ",(0,r.kt)("inlineCode",{parentName:"li"},"500BNB")," for staking, the funding address should have enough tokens for creating VGF to store more data, so we suggest depositing at least ",(0,r.kt)("inlineCode",{parentName:"li"},"510BNB")," into this account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Seal Account"),": Used to seal the user's object. Please make sure it has enough BNB to pay the gas fee of ",(0,r.kt)("inlineCode",{parentName:"li"},"SealObject")," transaction. We suggest depositing ",(0,r.kt)("inlineCode",{parentName:"li"},"10BNB")," into this account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Approval Account"),": Used to approve user's requests. This account does not require holding BNB tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GC Account"),": It is a special address for sp and is used by sp to clean up local expired or unwanted storage. Please make sure it has enough BNB tokens because it's going to keep sending transactions up the chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Maintenance Account"),": It is used for SP self-testing while in maintenance mode. This account for creating bucket and object will be allowed-listed by Chain while other users' create request will fail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bls Account"),": Used to create bls signature when sealing objects to ensure integrity, it does not need to be deposited.")),(0,r.kt)("p",null,"There are six accounts below, you can use the below command to generate these accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys add operator --keyring-backend os\n./build/bin/gnfd keys add seal --keyring-backend os\n./build/bin/gnfd keys add approval --keyring-backend os\n./build/bin/gnfd keys add gc --keyring-backend os\n./build/bin/gnfd keys add maintenance --keyring-backend os\n./build/bin/gnfd keys add bls --keyring-backend os --algo eth_bls\n")),(0,r.kt)("p",null,"and then export these private keys to prepare for SP deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys export operator --unarmored-hex --unsafe  --keyring-backend os\n./build/bin/gnfd keys export seal --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export approval --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export gc --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export bls --unarmored-hex --unsafe --keyring-backend os\n")),(0,r.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"FundingAddress")," is used to deposit staking tokens and receive earnings. Therefore, users should prepare your own ",(0,r.kt)("inlineCode",{parentName:"p"},"FundingAddress")," public key and private key. And keep private key of ",(0,r.kt)("inlineCode",{parentName:"p"},"FundingAddress")," in cold wallet for safety!"),(0,r.kt)("p",{parentName:"admonition"},"The private keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatorAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SealAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ApprovalAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GCAddress")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BlsAddress")," can be kept in hot wallet, because they are often used to send transactions."),(0,r.kt)("p",{parentName:"admonition"},"If you want to generate public key and private key of ",(0,r.kt)("inlineCode",{parentName:"p"},"FundingAddress")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd")," binary file, you can execute the following commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys add funding --keyring-backend os\n./build/bin/gnfd keys export funding --unarmored-hex --unsafe  --keyring-backend os\n"))),(0,r.kt)("p",null,"maintenance account is not needed for SP deployment, but you should export it to conduct self-test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys export maintenance --unarmored-hex --unsafe --keyring-backend os\n")),(0,r.kt)("p",null,"Please keep these seven private keys safe!"),(0,r.kt)("p",null,"Moreover, obtain bls public key and generate bls proof to fill in the proposal of creating Storage Provider"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bls_pub_key"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys show bls --keyring-backend os --output json | jq -r '.pubkey_hex' \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bls_proof"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Replace the ${bls_pub_key} with the above bls_pub_key to ensure sign the correct bls pub key!!!\n./build/bin/gnfd keys sign "${bls_pub_key}" --from bls --keyring-backend os\n')),(0,r.kt)("h3",{id:"database-configuration"},"Database Configuration"),(0,r.kt)("p",null,"You should create two databases: ",(0,r.kt)("inlineCode",{parentName:"p"},"${SpDB.Database}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${BsDB.Database}"),". Both values can be found in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/config"},"configuration file"),"."),(0,r.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"${BsDB.Database}")," requires the ",(0,r.kt)("strong",{parentName:"p"},"utf8mb4_unicode_ci")," as the character set and collation.")),(0,r.kt)("p",null,"The following example assumes ",(0,r.kt)("inlineCode",{parentName:"p"},"${SpDB.Database}")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_provider_db")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${BsDB.Database}")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"block_syncer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# login in mysql and create database\n# the default encoding for the database should be utf8mb4_unicode_ci\nmysql> CREATE DATABASE storage_provider_db;\nmysql> CREATE DATABASE block_syncer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n# check the database encoding format\nmysql> show create database block_syncer;\n")),(0,r.kt)("p",null,"This is the encoding we expect to see"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Create Database"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"block_syncer"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE DATABASE ",(0,r.kt)("inlineCode",{parentName:"td"},"block_syncer")," /",(0,r.kt)("em",{parentName:"td"},"!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE ",(0,r.kt)("inlineCode",{parentName:"em"},"utf8mb4_0900_ai_ci")," "),"/")))),(0,r.kt)("h3",{id:"piecestore-configuration"},"PieceStore Configuration"),(0,r.kt)("p",null,"Please follow this ",(0,r.kt)("a",{parentName:"p",href:"./piece-store"},"doc")," to config your PieceStore."),(0,r.kt)("h3",{id:"gateway-configuration"},"Gateway Configuration"),(0,r.kt)("h4",{id:"1-support-both-path-style-and-virtual-style-routers-in-https-certificates"},"1. Support both path-style and virtual-style routers in https certificates"),(0,r.kt)("p",null,"You need certificates for SP's exposed gateway service domain name and wildcard subdomain name of it, say you exposed your SP's gateway service on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my-sp1.mainnet.dummy-sp.io"),", then you need SSL certificates for both ",(0,r.kt)("inlineCode",{parentName:"p"},"my-sp1.mainnet.dummy-sp.io")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*.my-sp1.mainnet.dummy-sp.io"),".\nFor instance, if you reqeust AWS ACM certificate, you could request with this:\n",(0,r.kt)("img",{alt:"SP AWS ACM CERT",src:n(30119).Z,width:"2552",height:"1464"})),(0,r.kt)("p",null,"Also, route all traffic from both ",(0,r.kt)("inlineCode",{parentName:"p"},"my-sp1.mainnet.dummy-sp.io")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*.my-sp1.mainnet.dummy-sp.io")," to gateway service, for instance, if you use nginx for ingress control, then you'll need to configure rules look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rules:\n  - host: my-sp1.mainnet.dummy-sp.io\n    http:\n      paths:\n      - backend:\n          service:\n            name: gateway # where your SP gateway service is internally, such a k8s service.\n            port:\n              number: 9033\n        path: /\n        pathType: ImplementationSpecific\n  - host: '*.my-sp1.mainnet.dummy-sp.io'\n    http:\n      paths:\n      - backend:\n          service:\n            name: gateway # the same with the above one.\n            port:\n              number: 9033\n        path: /\n        pathType: ImplementationSpecific\n")),(0,r.kt)("h4",{id:"2-cors-configuration"},"2. CORS Configuration"),(0,r.kt)("p",null,"When working with web applications (e.g. DCellar),  SPs need to allow CORS (Cross-Origin Resource Sharing) requests.\nSee: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors"},"CORS Errors")),(0,r.kt)("p",null,"If CORS is not configured properly, you may find the DCellar (or any other web applications which mean to interact with your SP) will report CORS errors, similar to below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CORS ERROR",src:n(19273).Z,width:"3448",height:"140"})),(0,r.kt)("p",null,"Most people run their SP services behind the nginx or other similar reverse proxies. Usually the CORS settings should be configured in those reverse proxies."),(0,r.kt)("p",null,"We recommend SP with reverse proxy can return the following headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"access-control-allow-headers: *\naccess-control-allow-methods: *\naccess-control-allow-origin: *\naccess-control-expose-headers: *\n")),(0,r.kt)("p",null,"After you finish the configuration, you can verify if it works in DCellar."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://dcellar.io"},"https://dcellar.io")),(0,r.kt)("li",{parentName:"ol"},'Press F12 to launch web developer tools and go to "Network" tab.'),(0,r.kt)("li",{parentName:"ol"},"Connect your wallet"),(0,r.kt)("li",{parentName:"ol"},'Find the "OPTIONS" request to your SP and check its status and response headers. If you see a similar result to the following screenshot, it means your CORS configuration is correct.\n',(0,r.kt)("img",{alt:"CORRECT_CORS",src:n(89284).Z,width:"2524",height:"742"}))),(0,r.kt)("h4",{id:"3-sample-cors-configuration-for-nginx"},"3. Sample CORS Configuration for Nginx"),(0,r.kt)("p",null,"Many storage providers (SPs) prefer to use nginx as their SP's reverse proxy server. It can also help handle CORS requests."),(0,r.kt)("p",null,"Below is a sample nginx config, which can return those expected http response headers about CORS, mentioned in ",(0,r.kt)("a",{parentName:"p",href:"#2-cors-configuration"},"above section"),".\nPlease note that the nginx servers should explicitly return 204 as response code for http ",(0,r.kt)("strong",{parentName:"p"},"OPTIONS")," requests. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"\nserver {\n    listen 443;\n    server_name example.com;\n\n    # Cors Preflight methods needs additional options and different Return Code\n    location / {\n        if ($request_method = 'OPTIONS') {\n            add_header 'Access-Control-Allow-Origin' '*';\n            add_header 'Access-Control-Allow-Methods' '*';\n            add_header 'Access-Control-Allow-Headers' '*';\n            add_header 'Access-Control-Max-Age' 1728000;\n            add_header 'Access-Control-Expose-Headers' '*';\n            add_header 'Content-Type' 'text/plain; charset=utf-8';\n            add_header 'Content-Length' 0;\n            return 204;\n        }\n\n        add_header 'Access-Control-Allow-Origin' '*';\n        add_header 'Access-Control-Allow-Methods' '*';\n        add_header 'Access-Control-Allow-Headers' '*';\n        add_header 'Access-Control-Expose-Headers' '*';\n        \n        # Rest of your server configuration...\n    }\n}\n\n")),(0,r.kt)("h2",{id:"create-storage-provider"},"Create Storage Provider"),(0,r.kt)("h3",{id:"1-compile-sp"},"1. Compile SP"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences#compile-sp"},"Compile SP")," doc to compile the SP binary or you can download the binary from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases"},"Greenfield Storage Provider Release"),"."),(0,r.kt)("h3",{id:"2-sp-config"},"2. SP Config"),(0,r.kt)("h4",{id:"generate-config-template"},"Generate config template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield-storage-provider/build\n\n# dump default configuration\n./gnfd-sp config.dump\n")),(0,r.kt)("h4",{id:"write-config"},"Write config"),(0,r.kt)("p",null,"You can learn about how to write your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file ",(0,r.kt)("a",{parentName:"p",href:"./config"},"here")),(0,r.kt)("p",null,"It's recommended to deploy Kubernetes cluster following this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-sp-deployment/blob/main/docs/README.md"},"guide"),". The corresonding config file is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-sp-deployment/blob/main/docs/k8s/aws/config.toml"},"here"),"."),(0,r.kt)("h3",{id:"3-run-sp"},"3. Run SP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# start sp\n./gnfd-sp --config ${config_file_path}\n")),(0,r.kt)("h3",{id:"4-deploy-dashboard"},"4. Deploy Dashboard"),(0,r.kt)("p",null,"You can prepare your monitoring dashboard following ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/infra-deployment/grafana/"},"this guide")))}c.isMDXComponent=!0},19273:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/405-cors-error-945a9941e2d457303de5e6892e585b2a.png"},89284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/406-correct-cors-4cacd4062aba31bdd22b403f6735c821.png"},30119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/407-SP-AWS-ACM-Cert-d26d5360ff16309e4ea56fe9cd523a7b.png"}}]);