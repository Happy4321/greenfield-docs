"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[289],{55791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const i={title:"Interacting with the Node",order:1},r="Interacting with the Node",l={unversionedId:"guide/greenfield-blockchain/run-node/interact-node",id:"guide/greenfield-blockchain/run-node/interact-node",title:"Interacting with the Node",description:"There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints.",source:"@site/docs/guide/greenfield-blockchain/run-node/interact-node.md",sourceDirName:"guide/greenfield-blockchain/run-node",slug:"/guide/greenfield-blockchain/run-node/interact-node",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/interact-node",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/greenfield-blockchain/run-node/interact-node.md",tags:[],version:"current",frontMatter:{title:"Interacting with the Node",order:1},sidebar:"guideSidebar",previous:{title:"Validator Staking",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/validator-staking"},next:{title:"Run Local Network",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-local-network"}},s={},c=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Using gRPC",id:"using-grpc",level:2},{value:"grpcurl",id:"grpcurl",level:3},{value:"Query for historical state using grpcurl",id:"query-for-historical-state-using-grpcurl",level:4},{value:"Programmatically via Go",id:"programmatically-via-go",level:3},{value:"Install Greenfield GO-sdk",id:"install-greenfield-go-sdk",level:4},{value:"Using the REST Endpoints",id:"using-the-rest-endpoints",level:2},{value:"Query for historical state using REST",id:"query-for-historical-state-using-rest",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interacting-with-the-node"},"Interacting with the Node"),(0,o.kt)("p",null,"There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Since Greenfield Blockchain is based on Cosmos, The majority of the content in this page is copied from the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/interact-node"},"Cosmos SDK"),".")),(0,o.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,o.kt)("p",null,"Now that your chain is running, it is time to try sending tokens from the first account you created to a second account.\nIn a new terminal window, start by running the following query command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query bank balances $MY_VALIDATOR_ADDRESS \n")),(0,o.kt)("p",null,"You should see the current balance of the account you created, equal to the original balance of ",(0,o.kt)("inlineCode",{parentName:"p"},"BNB")," you granted it minus the amount\nyou delegated via the ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx"),". Now, create a second account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd keys add recipient --keyring-backend test\n\n# Put the generated address in a variable for later use.\nRECIPIENT=$(gnfd keys show recipient -a --keyring-backend test)\n")),(0,o.kt)("p",null,"The command above creates a local key-pair that is not yet registered on the chain.\nAn account is created the first time it receives tokens from another account. Now, run the following command to send tokens to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx bank send $MY_VALIDATOR_ADDRESS $RECIPIENT 1000000BNB  --keyring-backend test\n\n# Check that the recipient account did receive the tokens.\ngnfd query bank balances $RECIPIENT \n")),(0,o.kt)("h2",{id:"using-grpc"},"Using gRPC"),(0,o.kt)("p",null,"The Protobuf ecosystem developed tools for different use cases, including code-generation from ",(0,o.kt)("inlineCode",{parentName:"p"},"*.proto")," files into\nvarious languages. These tools allow the building of clients easily. Often, the client connection (i.e. the transport)\ncan be plugged and replaced very easily."),(0,o.kt)("p",null,"Since the code generation library largely depends on your own tech stack, we will only present three alternatives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"grpcurl")," for generic debugging and testing,"),(0,o.kt)("li",{parentName:"ul"},"programmatically via Go,")),(0,o.kt)("h3",{id:"grpcurl"},"grpcurl"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"grpcurl")," is like ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," but for gRPC. It is also available as a Go library,\nbut we will use it only as a CLI command for debugging and testing purposes.\nFollow the instructions in the previous link to install it."),(0,o.kt)("p",null,"Assuming you have a local node running (either a localnet, or connected a live network), you should be able to run the\nfollowing command to list the Protobuf services available (you can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9000")," by the gRPC server endpoint\nof another node, which is configured under the ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.address")," field inside ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 list\n")),(0,o.kt)("p",null,"You should see a list of gRPC services, like ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos.bank.v1beta1.Query"),". This is called reflection, which is a\nProtobuf endpoint returning a description of all available endpoints. Each of these represents a different\nProtobuf service, and each service exposes multiple RPC methods you can query against."),(0,o.kt)("p",null,"In order to get a description of the service you can run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl \\\n    localhost:9090 \\\n    describe cosmos.bank.v1beta1.Query                  # Service we want to inspect\n")),(0,o.kt)("p",null,"It's also possible to execute an RPC call to query the node for information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl \\\n    -plaintext\n    -d \'{"address":"$MY_VALIDATOR"}\' \\\n    localhost:9090 \\\n    cosmos.bank.v1beta1.Query/AllBalances\n')),(0,o.kt)("h4",{id:"query-for-historical-state-using-grpcurl"},"Query for historical state using grpcurl"),(0,o.kt)("p",null,"You may also query for historical data by passing some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md"},"gRPC metadata"),"\nto the query: the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-cosmos-block-height")," metadata should contain the block to query. Using grpcurl as above, the command looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl \\\n    -plaintext \\\n    -H "x-cosmos-block-height: 279256" \\\n    -d \'{"address":"$MY_VALIDATOR"}\' \\\n    localhost:9090 \\\n    cosmos.bank.v1beta1.Query/AllBalances\n')),(0,o.kt)("p",null,"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."),(0,o.kt)("h3",{id:"programmatically-via-go"},"Programmatically via Go"),(0,o.kt)("p",null,"The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection,\nand use the Protobuf-generated client code to query the gRPC server."),(0,o.kt)("h4",{id:"install-greenfield-go-sdk"},"Install Greenfield GO-sdk"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-go-sdk"},"Go-sdk doc")," to install the latest dependency."),(0,o.kt)("p",null,"Init client without key manager, you should use it for only querying purpose."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'client := NewGreenfieldClient("localhost:9090", "greenfield_9000-121")\n\nquery := banktypes.QueryBalanceRequest{\n    Address: "0x76d244CE05c3De4BbC6fDd7F56379B145709ade9",\n    Denom:   "BNB",\n}\nres, err := client.BankQueryClient.Balance(context.Background(), &query)  \n')),(0,o.kt)("p",null,"Init client with key manager, for signing and sending tx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'keyManager, _ := keys.NewPrivateKeyManager("ab463aca3d2965233da3d1d6108aa521274c5ddc2369ff72970a52a451863fbf")\ngnfdClient := NewGreenfieldClient("localhost:9090", \n                                "greenfield_9000-121",\n                                WithKeyManager(km),\n                                    WithGrpcDialOption(grpc.WithTransportCredentials(insecure.NewCredentials()))\n)\n')),(0,o.kt)("h2",{id:"using-the-rest-endpoints"},"Using the REST Endpoints"),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/grpc-rest"},"gRPC guide"),", all gRPC services on the Cosmos SDK are made available for\nmore convenient REST-based queries. The format of the URL path is based on the Protobuf service\nmethod's full-qualified name, but may contain small customizations so that final URLs look more idiomatic.\nFor example, the REST endpoint for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos.bank.v1beta1.Query/AllBalances")," method is ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /cosmos/bank/v1beta1/balances/{address}"),".\nRequest arguments are passed as query parameters."),(0,o.kt)("p",null,"As a concrete example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command to make balances request is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    http://localhost:1317/cosmos/bank/v1beta1/balances/$MY_VALIDATOR\n')),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:1317")," with the REST endpoint of your node, configured under the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.address")," field."),(0,o.kt)("p",null,"The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:1317/swagger"),".\nMake sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.swagger")," field is set to true in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),"."),(0,o.kt)("h3",{id:"query-for-historical-state-using-rest"},"Query for historical state using REST"),(0,o.kt)("p",null,"Querying for historical state is done using the HTTP header ",(0,o.kt)("inlineCode",{parentName:"p"},"x-cosmos-block-height"),". For example, a curl command would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    -H "x-cosmos-block-height: 279256"\n    http://localhost:1317/cosmos/bank/v1beta1/balances/$MY_VALIDATOR\n')),(0,o.kt)("p",null,"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."))}p.isMDXComponent=!0}}]);