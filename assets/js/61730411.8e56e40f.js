"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Key Management",order:2},o="Key Management",s={unversionedId:"guide/core-concept/key-management",id:"guide/core-concept/key-management",title:"Key Management",description:"Greenfield blockchain is an application-specific chain without EVM.",source:"@site/docs/guide/core-concept/key-management.md",sourceDirName:"guide/core-concept",slug:"/guide/core-concept/key-management",permalink:"/greenfield-docs/docs/guide/core-concept/key-management",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/core-concept/key-management.md",tags:[],version:"current",frontMatter:{title:"Key Management",order:2},sidebar:"guideSidebar",previous:{title:"Accounts",permalink:"/greenfield-docs/docs/guide/core-concept/accounts"},next:{title:"Billing and Payment",permalink:"/greenfield-docs/docs/guide/core-concept/billing-payment"}},l={},p=[{value:"EIP-712 Support",id:"eip-712-support",level:2},{value:"Keyring Interface",id:"keyring-interface",level:2},{value:"Backend Options",id:"backend-options",level:2},{value:"System Options",id:"system-options",level:3},{value:"Tools Options",id:"tools-options",level:3},{value:"Supported Sign Algorithms",id:"supported-sign-algorithms",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"key-management"},"Key Management"),(0,r.kt)("p",null,"Greenfield blockchain is an application-specific chain without EVM.\nAs a result, its transaction data structure and API are different from those of BSC.\nGreenfield will not support full functions in existing wallets, e.g. Transfer, Send Transactions, etc.\nHowever, these wallets can still sign transactions using the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP712")," standard.\nThis standard allows wallets to display data in signing prompts in a structured and readable format.\nThis is an ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"example")," of how to use it in Metamask.\nEventually, wallets will start supporting Greenfield directly."),(0,r.kt)("h2",{id:"eip-712-support"},"EIP-712 Support"),(0,r.kt)("p",null,"The greenfield chain supports and only supports EIP-712 structured transaction.  These enable the existing wallet\ninfrastructure to interact with Greenfield at the beginning naturally."),(0,r.kt)("p",null,"To achieve this, the following changes have been made."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An Ethereum-compatible RPC backend. Be noted that we only support necessary methods to connect a\nwallet(",(0,r.kt)("inlineCode",{parentName:"li"},"eth_chainId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_networkId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_blockNumber"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getBlockByNumber")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getBalance"),"). Other RPC methods are not implemented."),(0,r.kt)("li",{parentName:"ol"},"Same signing algorithm(",(0,r.kt)("inlineCode",{parentName:"li"},"eth_scep256k1"),") as Ethereum.")),(0,r.kt)("p",null,"For developers, they can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-go-sdk"},"greenfield-go-sdk")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-js-sdk"},"greenfield-js-sdk")," for easy integration."),(0,r.kt)("h2",{id:"keyring-interface"},"Keyring Interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface is the primary interface for key management in the greenfield-cosmos-sdk. It defines the methods\nthat a type needs to implement to be used as a key storage backend. These methods include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Get"),": retrieves a key by name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List"),": lists all keys stored in the keyring."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete"),": deletes a key by name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sign"),": signs a message using a key.")),(0,r.kt)("p",null,"By implementing these methods, you can create a custom key storage backend that meets the specific needs of your application."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It means you don't have to follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface to manage your key, any existing Ethereum wallets are applicable to\nGreenfield as well.")),(0,r.kt)("h2",{id:"backend-options"},"Backend Options"),(0,r.kt)("p",null,"The greenfield-cosmos-sdk provides different options for key storage, each with its own strengths and weaknesses. The choice of backend will depend on your specific use case. Here are the available options:"),(0,r.kt)("h3",{id:"system-options"},"System Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"os"),": This backend uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"operating system"),"'s default credentials store to handle key storage operations securely.\nThe keyring may be kept unlocked for the whole duration of the user session.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"memory"),": This backend uses a transient storage, meaning that Keys are discarded when the process terminates or the type\ninstance is garbage collected."))),(0,r.kt)("h3",{id:"tools-options"},"Tools Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"file"),": This backend stores the keyring encrypted within the app's configuration directory. This keyring will request a password each time it is accessed, which may occur multiple times in a single command resulting in repeated password prompts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"kwallet"),": This backend uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"KDE Wallet Manager")," as a credentials management application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pass"),": This backend uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," command line utility to store and retrieve keys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test"),": This backend stores keys insecurely to disk. It does not prompt for a password to be unlocked and should\nonly be used for testing purposes.\n"))),(0,r.kt)("h2",{id:"supported-sign-algorithms"},"Supported Sign Algorithms"),(0,r.kt)("p",null,"The greenfield-cosmos-sdk supports as many sign algorithms as users want, but in Greenfield context, we only\nsupport ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_secp256k1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519"),". These algorithms were chosen for their security and compatibility with the\nEthereum and Tendermint ecosystems."))}m.isMDXComponent=!0}}]);