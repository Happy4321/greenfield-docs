"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[178],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(t),f=n,g=h["".concat(c,".").concat(f)]||h[f]||m[f]||i;return t?o.createElement(g,a(a({ref:r},d),{},{components:t})):o.createElement(g,a({ref:r},d))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[h]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62680:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const i={title:"Mirroring FAQ"},a="Mirroring FAQ",s={unversionedId:"faq/mirroring-faqs",id:"faq/mirroring-faqs",title:"Mirroring FAQ",description:"What is mirroring?",source:"@site/docs/faq/mirroring-faqs.md",sourceDirName:"faq",slug:"/faq/mirroring-faqs",permalink:"/greenfield-docs/docs/faq/mirroring-faqs",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/faq/mirroring-faqs.md",tags:[],version:"current",frontMatter:{title:"Mirroring FAQ"},sidebar:"faqSidebar",previous:{title:"SP FAQ",permalink:"/greenfield-docs/docs/faq/sp-faqs"},next:{title:"Challenger FAQ",permalink:"/greenfield-docs/docs/faq/challenge-faqs"}},c={},l=[{value:"What is mirroring?",id:"what-is-mirroring",level:3},{value:"Is the mirroring copy content of the file from Greenfield to BSC? What is the maximal filesize supported?",id:"is-the-mirroring-copy-content-of-the-file-from-greenfield-to-bsc-what-is-the-maximal-filesize-supported",level:3},{value:"What can be achieved through mirroring?",id:"what-can-be-achieved-through-mirroring",level:3},{value:"What are the advantages of mirroring?",id:"what-are-the-advantages-of-mirroring",level:3},{value:"How mirroring is actually implemented on BSC?",id:"how-mirroring-is-actually-implemented-on-bsc",level:3},{value:"Is ownership of the object changed during mirroring?",id:"is-ownership-of-the-object-changed-during-mirroring",level:3},{value:"Are objects mirrored by default over to BSC?",id:"are-objects-mirrored-by-default-over-to-bsc",level:3},{value:"Once the object is mirrored, can it still be managed by BNB Greenfield?",id:"once-the-object-is-mirrored-can-it-still-be-managed-by-bnb-greenfield",level:3},{value:"How long the changes are propagated from mirrored BSC objects to actual change on BNB Greenfield?",id:"how-long-the-changes-are-propagated-from-mirrored-bsc-objects-to-actual-change-on-bnb-greenfield",level:3},{value:"If the object is renamed, does the mirroring break and need to be \u201cremirrored\u201d?",id:"if-the-object-is-renamed-does-the-mirroring-break-and-need-to-be-remirrored",level:3},{value:"Can the mirrored object be migrated between storage providers?",id:"can-the-mirrored-object-be-migrated-between-storage-providers",level:3}],d={toc:l},h="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(h,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mirroring-faq"},"Mirroring FAQ"),(0,n.kt)("h3",{id:"what-is-mirroring"},"What is mirroring?"),(0,n.kt)("p",null,"In the context of BNB Greenfield, object mirroring refers to the process of transferring control over objects stored on BNB Greenfield to a smart contract on BNB Smart Chain (BSC). When an object is mirrored, it means that the object can be managed through BSC by sending messages to Greenfield through a network of relayers, which facilitate communication and interaction between the two platforms. This allows the object to be fully managed on-chain on BSC, meaning that users or other smart contracts can perform various operations and changes to the object through on-chain transactions."),(0,n.kt)("h3",{id:"is-the-mirroring-copy-content-of-the-file-from-greenfield-to-bsc-what-is-the-maximal-filesize-supported"},"Is the mirroring copy content of the file from Greenfield to BSC? What is the maximal filesize supported?"),(0,n.kt)("p",null,"During the mirroring process from BNB Greenfield to BSC, the content of the file itself is not copied. This means that neither the data nor the file metadata, which is stored on the BNB Greenfield blockchain, is transferred to BSC. Consequently, there is no size limit imposed on the mirroring process since the actual file content is not duplicated."),(0,n.kt)("h3",{id:"what-can-be-achieved-through-mirroring"},"What can be achieved through mirroring?"),(0,n.kt)("p",null,"Currently changing any metadata attributes of the object, which includes information about its properties, permissions, and other relevant attributes. For example, let's say a user wants to change the permission settings of a specific object stored on BNB Greenfield. They can initiate an on-chain transaction on BSC, either directly or through a smart contract, specifying the desired changes to the object's permissions. As part of this transaction, a message is propagated through the relayer network from BSC to BNB Greenfield. The relayers act as intermediaries, facilitating the communication between the two platforms. The message contains the information about the requested changes to the object's metadata, such as the updated permission settings. Upon receiving the message, BNB Greenfield processes the request and updates the metadata of the object accordingly. "),(0,n.kt)("h3",{id:"what-are-the-advantages-of-mirroring"},"What are the advantages of mirroring?"),(0,n.kt)("p",null,"By transferring control over objects to the smart contract on BSC and allowing on-chain management, object mirroring enables greater flexibility and control over decentralized storage on BNB Greenfield to all dApps on BSC. It leverages the capabilities of the BSC and its smart contract functionality to provide enhanced functionality and interoperability between the two platforms."),(0,n.kt)("h3",{id:"how-mirroring-is-actually-implemented-on-bsc"},"How mirroring is actually implemented on BSC?"),(0,n.kt)("p",null,"Mirroring on BSC allows for the replication of resources from the Greenfield Blockchain to BSC as non-fungible tokens (NFTs). These resources include buckets, objects, and groups, which are represented as NFTs conforming to the ERC-721 standard. Additionally, the members within a group can be mirrored as ERC-1155 tokens, representing permissions."),(0,n.kt)("p",null,"Once mirrored on BSC, these resources can be managed directly by smart contracts on the BSC network. Any operations performed on BSC will impact the storage format, access permissions, and other aspects of the data on Greenfield, ensuring that changes made on BSC are reflected on Greenfield. Currently, the mirrored NFTs are not transferable, but the ability to transfer them will be introduced in the future."),(0,n.kt)("h3",{id:"is-ownership-of-the-object-changed-during-mirroring"},"Is ownership of the object changed during mirroring?"),(0,n.kt)("p",null,"Currently, the ownership of an object cannot be changed. The ownership of an object is initially set to the creator of the object and remains the same even after the object is mirrored to a smart contract on BSC. Mirroring does not alter the ownership of the object, and it cannot be set to the BSC smart contract or any other party. The object's ownership remains with its original creator throughout the mirroring process and subsequent interactions with the object on BSC."),(0,n.kt)("h3",{id:"are-objects-mirrored-by-default-over-to-bsc"},"Are objects mirrored by default over to BSC?"),(0,n.kt)("p",null,"Mirroring objects from BNB Greenfield to BSC is not done automatically with the creation of the object. Users have to manually trigger the mirroring process for selected objects, either at the bucket or object level, as it requires transaction gas. This allows users to have control over which objects are mirrored while being aware of the associated costs."),(0,n.kt)("h3",{id:"once-the-object-is-mirrored-can-it-still-be-managed-by-bnb-greenfield"},"Once the object is mirrored, can it still be managed by BNB Greenfield?"),(0,n.kt)("p",null,'Once an object is mirrored from BNB Greenfield to BSC, it can only be managed on BSC and cannot be reverted or "un-mirrored" back to Greenfield for management through Greenfield. However, it is worth noting that the ability to "un-mirror" objects back to Greenfield may be introduced in future releases, providing the option to manage mirrored objects through Greenfield after being mirrored to BSC.'),(0,n.kt)("h3",{id:"how-long-the-changes-are-propagated-from-mirrored-bsc-objects-to-actual-change-on-bnb-greenfield"},"How long the changes are propagated from mirrored BSC objects to actual change on BNB Greenfield?"),(0,n.kt)("p",null,"The changes made to mirrored objects on BSC are propagated to BNB Greenfield once the corresponding transactions are finalized on both blockchains. BSC has a block finality of 3 seconds, while BNB Greenfield has a block finality of 2 seconds. As a result, the changes should be reflected within a maximum block finality of 3 seconds, which is the longer of the two block finality times."),(0,n.kt)("h3",{id:"if-the-object-is-renamed-does-the-mirroring-break-and-need-to-be-remirrored"},"If the object is renamed, does the mirroring break and need to be \u201cremirrored\u201d?"),(0,n.kt)("p",null,"Mirroring in BNB Greenfield is based on the unique object ID and is not influenced by changes to object metadata, including its name. Even if an object is renamed, the mirroring process remains intact, as it is unaffected by such metadata modifications."),(0,n.kt)("h3",{id:"can-the-mirrored-object-be-migrated-between-storage-providers"},"Can the mirrored object be migrated between storage providers?"),(0,n.kt)("p",null,"The mirroring process in BNB Greenfield allows for object migration between storage providers because the object's data and metadata always reside on BNB Greenfield. As the data is not copied over to BSC, the mirroring remains unaffected. This means that migrating the actual content from one storage provider to another does not impact the mirroring process."))}m.isMDXComponent=!0}}]);