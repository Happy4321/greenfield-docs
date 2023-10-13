"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9351],{65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),d=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:a,defaultValue:i,values:u,groupId:c,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,s.U)(),[N,w]=(0,r.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:y}=(0,d.o5)();if(null!=c){const e=v[c];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=S.indexOf(t),n=k[a].value;n!==N&&(y(t),w(n),null!=c&&b(c,String(n)))},_=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:_,onClick:P},i,{className:(0,o.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},76051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),i=a(85162);const l={title:"Join Greenfield SP Network"},s=void 0,d={unversionedId:"guide/storage-provider/run-book/join-SP-network",id:"guide/storage-provider/run-book/join-SP-network",title:"Join Greenfield SP Network",description:"This guide will help you join Greenfield SP Network: Mainnet and Testnet.",source:"@site/docs/guide/storage-provider/run-book/join-SP-network.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/join-SP-network",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/join-SP-network",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/join-SP-network.md",tags:[],version:"current",frontMatter:{title:"Join Greenfield SP Network"},sidebar:"guideSidebar",previous:{title:"Run SP Node",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-SP-node"},next:{title:"How to deploy Piece Store",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/piece-store"}},p={},u=[{value:"How to Join SP Network?",id:"how-to-join-sp-network",level:2},{value:"1. Submit Proposal",id:"1-submit-proposal",level:3},{value:"Hot Wallet Manual",id:"hot-wallet-manual",level:4},{value:"Hardware Wallet Manual",id:"hardware-wallet-manual",level:4},{value:"Understanding the Parameters",id:"understanding-the-parameters",level:4},{value:"2. Deposit BNB to Proposal",id:"2-deposit-bnb-to-proposal",level:3},{value:"3. Wait Voting and Check Voting Result",id:"3-wait-voting-and-check-voting-result",level:3},{value:"4. Activate SP",id:"4-activate-sp",level:3},{value:"Storage Provider Standard Test",id:"storage-provider-standard-test",level:4},{value:"Update SP status",id:"update-sp-status",level:4},{value:"Storage Provider Operations",id:"storage-provider-operations",level:2},{value:"EditStorageProvider",id:"editstorageprovider",level:3},{value:"Update SP Price",id:"update-sp-price",level:3},{value:"Update SP Quota",id:"update-sp-quota",level:3},{value:"Tools",id:"tools",level:2},{value:"Trouble Shooting",id:"trouble-shooting",level:2}],c={toc:u},m="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will help you join Greenfield SP Network: Mainnet and Testnet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-join-sp-network"},"How to Join SP Network?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-submit-proposal"},"1. Submit Proposal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hot-wallet-manual"},"Hot Wallet Manual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hardware-wallet-manual"},"Hardware Wallet Manual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#understanding-the-parameters"},"Understanding the Parameters")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-deposit-bnb-to-proposal"},"2. Deposit BNB to Proposal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-wait-voting-and-check-voting-result"},"3. Wait Voting and Check Voting Result")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-activate-sp"},"4. Activate SP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storage-provider-standard-test"},"Storage Provider Standard Test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-sp-status"},"Update SP status")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storage-provider-operations"},"Storage Provider Operations"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#editstorageprovider"},"EditStorageProvider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-sp-price"},"Update SP Price")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-sp-quota"},"Update SP Quota")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tools"},"Tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#trouble-shooting"},"Trouble Shooting"))),(0,r.kt)("h2",{id:"how-to-join-sp-network"},"How to Join SP Network?"),(0,r.kt)("p",null,"Greenfield Blockchain validators are responsible for selecting storage providers. For each on-chain proposal to add new storage provider, there are deposit period for depositing BNB and voting period for validators to make votes. Once the proposal passes, new SP can join the network afterwards."),(0,r.kt)("p",null,"You can query the governance parameters ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/gov-v-1-params"},"here"),"."),(0,r.kt)("h3",{id:"1-submit-proposal"},"1. Submit Proposal"),(0,r.kt)("p",null,"The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgCreateStorageProvider"),". It's worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain."),(0,r.kt)(o.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rpcAddr = "https://greenfield-chain.bnbchain.org:443"\nchainId = "greenfield_1017-1"\n'))),(0,r.kt)(i.Z,{value:"testnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\nchainId = "greenfield_5600-1"\n')))),(0,r.kt)("h4",{id:"hot-wallet-manual"},"Hot Wallet Manual"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd")," command to directly send the transaction for creating a storage provider. To do this,  please\nimport the private key of the funding account into the Keystore."),(0,r.kt)("p",null,"However, it is not safe to use a hot wallet for Mainnet. Instead, you should refer to the ",(0,r.kt)("a",{parentName:"p",href:"#hardware-wallet-manual"},"Hardware Wallet Manual"),"\nfor instructions on using a hardware wallet."),(0,r.kt)("p",null,"Command for creating storage provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd tx sp create-storage-provider ./create_storage_provider.json --from {funding_address} --node ${rpcAddr} --chain-id ${chainId} --keyring-backend os\n")),(0,r.kt)("p",null,"The content for create_storage_provider.json, modify it with the correct values as you need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat ./create_storage_provider.json\n{\n  "messages":[\n  {\n    "@type":"/greenfield.sp.MsgCreateStorageProvider",\n    "description":{\n      "moniker":"{moniker}",\n      "identity":"{identity}",\n      "website":"{website}",\n      "security_contact":"{security_contract}",\n      "details":"{details}"\n    },\n    "sp_address":"{operator_address}",\n    "funding_address":"{funding_address}",\n    "seal_address":"{seal_address}",\n    "approval_address":"{approval_address}",\n    "gc_address":"{gc_address}",\n    "maintenance_address":"{maintenance__address}",\n    "endpoint":"https://{your_endpoint}",\n    "deposit":{\n      "denom":"BNB",\n      # Mainnet: 500000000000000000000, Testnet: 1000000000000000000000\n      "amount":"500000000000000000000"\n    },\n    "read_price":"0.1469890427",\n    "store_price":"0.02183945725",\n    "free_read_quota": 1073741824,\n    "creator":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2",\n    "bls_key":"{bls_pub_key}",\n    "bls_proof":"{bls_proof}"\n  }\n],\n  "metadata":"4pIMOgIGx1vZGU=",\n  "title":"Create <name> Storage Provider",\n  "summary":"create <name> Storage Provider",\n  "deposit":"1000000000000000000BNB"\n}\n')),(0,r.kt)("h4",{id:"hardware-wallet-manual"},"Hardware Wallet Manual"),(0,r.kt)("p",null,"The gnfd command is not available for connecting with the hardware wallet, so you should use the ",(0,r.kt)("a",{parentName:"p",href:"https://gnfd-tx-sender.nodereal.io/"},"gnfd-tx-sender")," to send transactions. Here are the steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate the transaction data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd tx sp create-storage-provider ./create_storage_provider.json --from {funding_address} --print-eip712-msg-type\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://gnfd-tx-sender.nodereal.io/"},"gnfd-tx-sender")," website."),(0,r.kt)("li",{parentName:"ol"},"Add your hardware wallet into Metamask, and connect the wallet."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Custom Tx")," page and fill in the generated transaction data in step1."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit")," button to send the transaction.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"submit proposal",src:a(86119).Z,width:"1122",height:"1326"})),(0,r.kt)("h4",{id:"understanding-the-parameters"},"Understanding the Parameters"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can get the gov module address by this command"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "https://greenfield-chain-us.bnbchain.org/cosmos/auth/v1beta1/module_accounts/gov" -H  "accept: application/json"\n'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," is URL of your gateway"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_price")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"store_price")," unit is ",(0,r.kt)("inlineCode",{parentName:"li"},"wei/bytes/s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"free_read_quota")," unit is ",(0,r.kt)("em",{parentName:"li"},"Bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"creator")," is the address of ",(0,r.kt)("inlineCode",{parentName:"li"},"gov module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata")," is optional")),(0,r.kt)("h3",{id:"2-deposit-bnb-to-proposal"},"2. Deposit BNB to Proposal"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can get the mininum deposit for proposal by the above command. Please make sure that the initial deposit is greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"min_deposit")," when submitting the proposal."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "https://greenfield-chain-us.bnbchain.org/cosmos/gov/v1/params/deposit" -H  "accept: application/json"\n'))),(0,r.kt)("p",null,"You can skip this step if the initial deposit amount is greater than the min deposit required by the proposal."),(0,r.kt)("p",null,"Each proposal needs to deposit enough tokens to enter the voting phase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd tx gov deposit ${proposal_id} 1BNB --from ${funding_address} --keyring-backend os --node ${rpcAddr} --chain-id ${chainId}\n")),(0,r.kt)("h3",{id:"3-wait-voting-and-check-voting-result"},"3. Wait Voting and Check Voting Result"),(0,r.kt)("p",null,"After submitting the proposal successfully, you must wait for the voting to be completed and the proposal to be approved.\nIt will last ",(0,r.kt)("strong",{parentName:"p"},"7 days")," on Mainnet while ",(0,r.kt)("strong",{parentName:"p"},"1 day")," on Testnet. Once it has passed and is executed successfully, you can\nverify that the storage provider has been joined."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please ensure that the storage provider service is running before it has been joined.")),(0,r.kt)("p",null,"You can check the on-chain SP information to confirm whether the SP has been successfully created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd query sp storage-providers --node ${rpcAddr}\n")),(0,r.kt)("p",null,"Alternatively, you can check the proposal to know about its execution status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd query gov proposal ${proposal_id} --node ${rpcAddr}\n")),(0,r.kt)("h3",{id:"4-activate-sp"},"4. Activate SP"),(0,r.kt)("h4",{id:"storage-provider-standard-test"},"Storage Provider Standard Test"),(0,r.kt)("p",null,"After the proposal has passed, the status of SP is ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS_IN_MAINTENANCE"),". To prevent being slashed due to functional\nabnormalities, you should first perform a full functional test using the maintenance account.\nYou can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-sp-standard-test"},"SP standard test"),"."),(0,r.kt)("h4",{id:"update-sp-status"},"Update SP status"),(0,r.kt)("p",null,"Once the testing is completed, you need to send a tx to activate the SP to ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS_IN_SERVICE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp update-status [sp-address] STATUS_IN_SERVICE [flags]\n")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/core-concept/storage-provider-lifecycle#in-maintenance"},"Maintenance Mode")," for more details."),(0,r.kt)("h2",{id:"storage-provider-operations"},"Storage Provider Operations"),(0,r.kt)("h3",{id:"editstorageprovider"},"EditStorageProvider"),(0,r.kt)("p",null,"This command is used to edit the information of the SP, including endpoint, description, etc."),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp edit-storage-provider [sp-address] [flags]\n")),(0,r.kt)("p",null,"For example, edit the endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd tx sp edit-storage-provider ${operator_address} --endpoint ${new_endpoint} --from ${operator_address} --keyring-backend os --node ${rpcAddr} --chain-id ${chainId}\n")),(0,r.kt)("h3",{id:"update-sp-price"},"Update SP Price"),(0,r.kt)("p",null,"Update the storage provider read, store price and free read quota, if there is no change to a specific value, the current value should also be provided."),(0,r.kt)("p",null,"The unit of price is a decimal, which indicates wei BNB per byte per second.\nE.g. the price is 0.02183945725, means approximately $0.018 / GB / Month.\n",(0,r.kt)("inlineCode",{parentName:"p"},"(0.02183945725 * (30 * 86400) * (1024 * 1024 * 1024) * 300 / 10 ** 18 \u2248 0.018, assume the BNB price is 300 USD)")),(0,r.kt)("p",null,"The free-read-quota unit is bytes, for 1GB free quota, it should be 1073741824."),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp update-price [sp-address] [read-price] [store-price] [free-read-quota] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd tx sp update-price ${operator_address} 0.1469890427 0.02183945725 1073741824 --from ${operator_address} --keyring-backend os ---node ${rpcAddr} --chain-id ${chainId}\n")),(0,r.kt)("h3",{id:"update-sp-quota"},"Update SP Quota"),(0,r.kt)("p",null,"Besides the above ",(0,r.kt)("inlineCode",{parentName:"p"},"update-price")," command, you can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd-sp")," command to update the free read quota for SP.\nThe update.quota command is used to update the free quota of the SP, it will send a transaction to the blockchain to update\nthe free read quota, but keep the storage price and read price unchanged."),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-sp update.quota [command options] [arguments...]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd-sp update.quota --quota 1073741824 --config ./config.toml\n")),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("p",null,"SP can use Greenfield Cmd or DCellar to verify its functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Greenfield Cmd: Get more details from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cmd"},"repo"),"."),(0,r.kt)("li",{parentName:"ul"},"DCellar: ",(0,r.kt)("a",{parentName:"li",href:"https://dcellar.io/"},"Mainnet"),", ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.dcellar.io"},"Testnet"),".")),(0,r.kt)("h2",{id:"trouble-shooting"},"Trouble Shooting"),(0,r.kt)("p",null,"If you meet issues, please refer to ",(0,r.kt)("a",{parentName:"p",href:"./common-issues"},"SP common issues"),"."))}h.isMDXComponent=!0},86119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/019-submit-proposal-205bc10c4617e2b6af5e46d72a7fdd36.jpg"}}]);