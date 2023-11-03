"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,l(l({ref:t},i),{},{components:n})):a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Run Local SP Network"},l=void 0,s={unversionedId:"guide/storage-provider/run-book/run-local-SP-network",id:"guide/storage-provider/run-book/run-local-SP-network",title:"Run Local SP Network",description:"This guide helps you to set up a local Greenfield Storage Provider network for testing",source:"@site/docs/guide/storage-provider/run-book/run-local-SP-network.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/run-local-SP-network",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-local-SP-network",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/run-local-SP-network.md",tags:[],version:"current",frontMatter:{title:"Run Local SP Network"},sidebar:"guideSidebar",previous:{title:"SP Compiling and Dependencies",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences"},next:{title:"Run SP Node",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-SP-node"}},c={},d=[{value:"Recommended Prerequisites",id:"recommended-prerequisites",level:2},{value:"Quickly setup local Greenfield blockchain network",id:"quickly-setup-local-greenfield-blockchain-network",level:2},{value:"Setup local SP network",id:"setup-local-sp-network",level:2},{value:"Operate With SP",id:"operate-with-sp",level:2},{value:"1. Generate your test account",id:"1-generate-your-test-account",level:3},{value:"2. Transefer some BNB tokens to test account",id:"2-transefer-some-bnb-tokens-to-test-account",level:3},{value:"3. Use cmd to send requests",id:"3-use-cmd-to-send-requests",level:3}],i={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide helps you to set up a local Greenfield Storage Provider network for testing\nand other development related purposes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#recommended-prerequisites"},"Recommended Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quickly-setup-local-greenfield-blockchain-network"},"Quickly setup local Greenfield blockchain network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-local-sp-network"},"Setup local SP network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#operate-with-sp"},"Operate With SP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-generate-your-test-account"},"1. Generate your test account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-transefer-some-bnb-tokens-to-test-account"},"2. Transefer some BNB tokens to test account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-use-cmd-to-send-requests"},"3. Use cmd to send requests"))))),(0,r.kt)("h2",{id:"recommended-prerequisites"},"Recommended Prerequisites"),(0,r.kt)("p",null,"The following lists the recommended hardware requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X, Linux, or Windows\uff1b"),(0,r.kt)("li",{parentName:"ul"},"16 cores of CPU, 64 GB of memory(RAM);"),(0,r.kt)("li",{parentName:"ul"},"At least 100GB disk space for backend storage;"),(0,r.kt)("li",{parentName:"ul"},"10GB+ SQL Database.")),(0,r.kt)("h2",{id:"quickly-setup-local-greenfield-blockchain-network"},"Quickly setup local Greenfield blockchain network"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build Greenfield Blockchain")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," Greenfield blockchain uses a lib which uses ",(0,r.kt)("inlineCode",{parentName:"p"},"cgo"),", so you should set cgo env var; in addition, you should install ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc")," compiler in your OS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/bnb-chain/greenfield.git\ncd greenfield/\nexport CGO_ENABLED=1\nmake build\n")),(0,r.kt)("p",null,"If you encountered the following error messages while compiling greenfield blockchain, you should install ",(0,r.kt)("inlineCode",{parentName:"p"},"glibc-static")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++-static"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# command-line-arguments\n/usr/local/go/pkg/tool/linux_amd64/link: running gcc failed: exit status 1\n/bin/ld: cannot find -lstdc++\ncollect2: error: ld returned 1 exit status\n\nmake: *** [build] Error 1\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start Greenfield Blockchain")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1 validator and 8 storage providers\nbash ./deployment/localup/localup.sh all 1 8\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Export the keys of SPs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'bash ./deployment/localup/localup.sh export_sps 1 8\n\n# result example\n# {\n#   "sp0": {\n#     "OperatorAddress": "0x14539343413EB47899B0935287ab1111Df891d04",\n#     "FundingAddress": "0x21c6ff21DD7012DE1CCf9055f2eB234A44a1d3fB",\n#     "SealAddress": "0x8e424c6Db42Ad9A5d91b24e20b5f603eC70abbA3",\n#     "ApprovalAddress": "0x7Aa5C8B50696f1D15B3A60d6629f7318c605bb4C",\n#     "GcAddress": "0xfa238a4B262e1dc35c4970A2296A2444B956c9Ca",\n#     "MaintenanceAddress": "0xbE03316B1D7c3FCB69136e47e02442d6Fb3396dB",\n#     "OperatorPrivateKey": "ba6e97958d9c43d1ad54923eba99f8d59f54a0c66c78a5dcbc004c5c3ec72f8c",\n#     "FundingPrivateKey": "bd9d9e7823cd2dc7bc20f1b6676c3025cdda6cf5a8df9b04597fdff42c29af01",\n#     "SealPrivateKey": "aacd6b834627fdbc5de2bfdb1db31be0ea810a941854787653814c8040a9dd39",\n#     "ApprovalPrivateKey": "32108ed1a47c0af965824f84ac2162c029f347eec6d0988e642330b0ac264c85",\n#     "GcPrivateKey": "2fad16031b4fd9facb7dacda3da4ca4dd5f005f4166891bf9f7be13e02abb12d",\n#     "MaintenancePrivateKey": "cc38f4c004f73a810223776376a37a8ab3ed8204214f5a3a0a2f77f7bb5e2dc1",\n#     "BlsPrivateKey": "6f349866f18413abb1a78cab947933459042044649686f354e941a646b9ed6e7"\n#   }\n#   ...\n# }\n')),(0,r.kt)("p",null,"These JSON data will be used for setup local SP network, so you'd better save it as a json file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash ./deployment/localup/localup.sh export_sps 1 8 > sp.json\n")),(0,r.kt)("h2",{id:"setup-local-sp-network"},"Setup local SP network"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compile SP")),(0,r.kt)("p",null,"Users who want to compile SP can refer this ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences#compile-sp"},"doc"),"."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Generate localup env")),(0,r.kt)("p",null,"Use the following instruction to generate template config file, sp.info and db.info in seven different directories. This command is used for generating sp env the first time or regenerating sp env."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# This command accepts four args, the first arg is json file path that only supports absolute path, the second arg is db user name,\n# the third arg is db password and the fourth arg is db address.\ncd greenfield-storage-provider/\nbash ./deployment/localup/localup.sh --generate json_file_path db_username db_password db_address\n")),(0,r.kt)("p",null,"The json file path accepted for the first arg is generated by ",(0,r.kt)("a",{parentName:"p",href:"#quickly-setup-local-greenfield-blockchain-network"},"quickly setup local greenfield blockchain network step3"),"."),(0,r.kt)("p",null,"View directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ls deployment/localup/local_env/sp0\n\u251c\u2500\u2500 sp0\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml   # generated template config file\n\u2502\xa0\xa0 \u251c\u2500\u2500 db.info       # generated db.info is used for config.toml\n\u2502\xa0\xa0 \u251c\u2500\u2500 gnfd-sp0      # gnfd-sp binary\n\u2502\xa0\xa0 \u2514\u2500\u2500 sp.info       # generated sp.info is used for config.toml\n\u251c\u2500\u2500 sp1\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# An example for generating local sp env\ncd greenfield-storage-provider/\nbash ./deployment/localup/localup.sh --generate /root/sp.json root greenfield localhost:3306\n\n[root@yourmachine sp0]# cat db.info\n#!/usr/bin/env bash\nUSER="root"                     # database username\nPWD="greenfield"                # database password\nADDRESS="localhost:3306"        # db endpoint, e.g. "localhost:3306"\nDATABASE="sp_0"                 # database name\n\n[root@yourmachine sp0]# cat sp.info\n#!/usr/bin/env bash\nSP_ENDPOINT="127.0.0.1:9033"                                                              # gateway endpoint, e.g. "127.0.0.1:9033"\nOPERATOR_ADDRESS="0x14539343413EB47899B0935287ab1111Df891d04"                             # OperatorAddr is generated in setup local Greenfield blockchain step 3.\nOPERATOR_PRIVATE_KEY="ba6e97958d9c43d1ad54923eba99f8d59f54a0c66c78a5dcbc004c5c3ec72f8c"   # OperatorPrivKey is generated in setup local Greenfield blockchain step 3.\nFUNDING_PRIVATE_KEY="bd9d9e7823cd2dc7bc20f1b6676c3025cdda6cf5a8df9b04597fdff42c29af01"    # FundingPrivKey is generated in setup local Greenfield blockchain step 3.\nSEAL_PRIVATE_KEY="aacd6b834627fdbc5de2bfdb1db31be0ea810a941854787653814c8040a9dd39"       # SealPrivKey is generated in setup local Greenfield blockchain step 3.\nAPPROVAL_PRIVATE_KEY="32108ed1a47c0af965824f84ac2162c029f347eec6d0988e642330b0ac264c85"   # ApprovalPrivKey is generated in setup local Greenfield blockchain step 3.\nGC_PRIVATE_KEY="2fad16031b4fd9facb7dacda3da4ca4dd5f005f4166891bf9f7be13e02abb12d"         # GcPrivateKey is generated in setup local Greenfield blockchain step 3.\nBLS_PRIVATE_KEY="6f349866f18413abb1a78cab947933459042044649686f354e941a646b9ed6e7"        # BlsPrivateKey is generated in setup local Greenfield blockchain step 3.\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Start Eight SPs")),(0,r.kt)("p",null,"Make config.toml according to db.info, sp.info and start eight SPs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield-storage-provider/\nbash ./deployment/localup/localup.sh --reset\nbash ./deployment/localup/localup.sh --start\n")),(0,r.kt)("p",null,"The environment directory is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"deployment/localup/local_env/\n\u251c\u2500\u2500 sp0\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml    # real config\n\u2502\xa0\xa0 \u251c\u2500\u2500 data/          # piecestore data directory\n\u2502\xa0\xa0 \u251c\u2500\u2500 db.info\n\u2502\xa0\xa0 \u251c\u2500\u2500 gnfd-sp0\n\u2502\xa0\xa0 \u251c\u2500\u2500 gnfd-sp.log    # gnfd-sp log file\n\u2502\xa0\xa0 \u251c\u2500\u2500 log.txt\n\u2502\xa0\xa0 \u2514\u2500\u2500 sp.info\n\u251c\u2500\u2500 sp1\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("admonition",{title:"Recompile SP",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to modify config.toml in different sp directories or recompile gnfd-sp binary file, you can use the following commands to reset and start local sp:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield-storage-provider/\nbash ./deployment/localup/localup.sh --reset\nbash ./deployment/localup/localup.sh --start\n"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Supported commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# this command should be executed in greenfield-storage-provider/ directory.\nbash ./deployment/localup/localup.sh --help\n\nUsage: deployment/localup/localup.sh [option...] {help|generate|reset|start|stop|print}\n\n   --help            display help info\n   --generate        generate sp.info and db.info that accepts four args: the first arg is json file path, the second arg is db username, the third arg is db password and the fourth arg is db address\n   --reset           reset env\n   --start           start storage providers\n   --stop            stop storage providers\n   --clean           clean local sp env\n   --print           print sp local env work directory\n")),(0,r.kt)("h2",{id:"operate-with-sp"},"Operate With SP"),(0,r.kt)("p",null,"If you have already started Greenfield blockchain and Greenfield SP successfully in local, you can use Greenfield Cmd to operate with SP such as CreateBucket, PutObject and GetObject. Detailed info about Greenfield Cmd can be found ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/getting-started/greenfield-command"},"here"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We strongly recommend you reading ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cmd"},"Greenfield Cmd"),". It will help you explore the functions of Greenfield blockchain and SP.")),(0,r.kt)("p",null,"Next, We provide you a hand by hand tutorial to operate with chain and SP."),(0,r.kt)("h3",{id:"1-generate-your-test-account"},"1. Generate your test account"),(0,r.kt)("p",null,"We firstly need to generate a test account and private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield/\n# this command will generate a test account whose name is testkey, you can change its name\n./build/bin/gnfd keys add testkey --keyring-backend os\n# export the private key of test account\n./build/bin/gnfd keys export testkey --unarmored-hex --unsafe --keyring-backend os\n")),(0,r.kt)("h3",{id:"2-transefer-some-bnb-tokens-to-test-account"},"2. Transefer some BNB tokens to test account"),(0,r.kt)("p",null,"After generating test account, there are no any tokens in this account. We should transefer some BNB tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield/\n# transefer 5000 BNB tokens\n./gnfd tx bank send validator0 {generated_test_account_address} 500000000000000000000BNB --home /{your_greenfield_path}/greenfield/deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -y\n# query your account balances\n./gnfd q bank balances {generated_test_account_address} --node http://localhost:26750\n")),(0,r.kt)("h3",{id:"3-use-cmd-to-send-requests"},"3. Use cmd to send requests"),(0,r.kt)("p",null,"If you come in this step, congratulations, you can operate with your own private chain and SP."),(0,r.kt)("p",null,"First, we need to configure cmd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd greenfield-cmd/\nmake build\ncd build/\n# generate a keystore file to manage private key information\ntouch key.txt & echo ${TEST_ACCOUNT_PRIVATE_KEY} > key.txt\ntouch password.txt & echo "test_sp_function" > password.txt\n./gnfd-cmd --home ./  --passwordfile password.txt account import key.txt \n\n# construct config.toml\ntouch config.toml\n{\n   echo rpcAddr = \\"http://localhost:26750\\"\n   echo chainId = \\"greenfield_9000-121\\"\n} > config.toml\n')),(0,r.kt)("p",null,"Second, you can do some operations with SP:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create bucket")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# list current available SPs\n./gnfd-cmd -c ./config.toml --home ./ sp ls\n# random choose one SP to create bucket\n./gnfd-cmd -c ./config.toml --home ./ bucket create gnfd://${BUCKET_NAME}\n# head bucket info\n./gnfd-cmd -c ./config.toml --home ./ bucket head gnfd://${BUCKET_NAME}\n# choose one sp to create bucket, operator_address is shown in sp ls result\n./gnfd-cmd -c ./config.toml --home ./ bucket create --primarySP ${operator_address} gnfd://${BUCKET_NAME}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"PutObject & GetObject")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# generate a 17MB random file\ndd if=/dev/urandom of=./random_file bs=17M count=1\n# put object\n./gnfd-cmd -c ./config.toml --home ./ object put --contentType "application/octet-stream" ./random_file gnfd://${BUCKET_NAME}/random_file\n# get object\n./gnfd-cmd -c ./config.toml --home ./ object get gnfd://${BUCKET_NAME}/random_file ./new_random_file\n')),(0,r.kt)("p",null,"Users can use md5 to compare your generated file and downloaded file whether is the same."),(0,r.kt)("p",null,"You can explore other functions of Greenfield Cmd."))}u.isMDXComponent=!0}}]);