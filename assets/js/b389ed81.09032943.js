"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9778],{15866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const s={title:"BSDB",order:13},r="BS DB(Block Syncer Database)",i={unversionedId:"guide/storage-provider/services/bsdb",id:"guide/storage-provider/services/bsdb",title:"BSDB",description:"BS (Block Syncer Database) store needs to implement BSDB interface. SQL database is used by default.",source:"@site/docs/guide/storage-provider/services/bsdb.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/bsdb",permalink:"/greenfield-docs/docs/guide/storage-provider/services/bsdb",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/storage-provider/services/bsdb.md",tags:[],version:"current",frontMatter:{title:"BSDB",order:13},sidebar:"guideSidebar",previous:{title:"TaskNode",permalink:"/greenfield-docs/docs/guide/storage-provider/services/tasknode"},next:{title:"Metadata",permalink:"/greenfield-docs/docs/guide/storage-provider/services/metadata"}},c={},d=[{value:"Block Syncer",id:"block-syncer",level:2},{value:"Object Table",id:"object-table",level:3},{value:"Bucket Table",id:"bucket-table",level:3},{value:"Epoch Table",id:"epoch-table",level:3},{value:"StreamRecord Table",id:"streamrecord-table",level:3}],l={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bs-dbblock-syncer-database"},"BS DB(Block Syncer Database)"),(0,o.kt)("p",null,"BS (Block Syncer Database) store needs to implement BSDB interface. SQL database is used by default.\nThe following mainly introduces the data schemas corresponding to several core interfaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// BSDB contains all the methods required by block syncer database\ntype BSDB interface {\n    Metadata\n}\n")),(0,o.kt)("h2",{id:"block-syncer"},"Block Syncer"),(0,o.kt)("p",null,"Block Syncer retrieves the historical data on the chain, optimizes the storage, and re-structures it according to the different event data types."),(0,o.kt)("h3",{id:"object-table"},"Object Table"),(0,o.kt)("p",null,"An object represents a fundamental unit of storage in Greenfield, BSDB object table consists of only associated metadata synced from chain side."),(0,o.kt)("p",null,"Below is the schema of ",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Object is the structure for user object\ntype Object struct {\n    // ID defines db auto_increment id of object\n    ID uint64 `gorm:"id"`\n    // Creator defines the account address of object creator\n    Creator common.Address `gorm:"creator_address"`\n    // Owner defines the account address of object owner\n    Owner common.Address `gorm:"column:owner_address"`\n    // BucketName is the name of the bucket\n    BucketName string `gorm:"bucket_name"`\n    // ObjectName is the name of object\n    ObjectName string `gorm:"object_name"`\n    // ObjectID is the unique identifier of object\n    ObjectID common.Hash `gorm:"object_id"`\n    // BucketID is the unique identifier of bucket\n    BucketID common.Hash `gorm:"bucket_id"`\n    // PayloadSize is the total size of the object payload\n    PayloadSize uint64 `gorm:"payload_size"`\n    // Visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage obj\n    Visibility string `gorm:"visibility"`\n    // ContentType defines the format of the object which should be a standard MIME type\n    ContentType string `gorm:"content_type"`\n    // CreateAt defines the block number when the object created\n    CreateAt int64 `gorm:"create_at"`\n    // CreateTime defines the timestamp when the object created\n    CreateTime int64 `gorm:"create_time"`\n    // ObjectStatus defines the upload status of the object.\n    ObjectStatus string `gorm:"column:status"`\n    // RedundancyType defines the type of the redundancy which can be multi-replication or EC\n    RedundancyType string `gorm:"redundancy_type"`\n    // SourceType defines the source of the object.\n    SourceType string `gorm:"source_type"`\n    // CheckSums defines the root hash of the pieces which stored in an SP\n    Checksums pq.ByteaArray `gorm:"check_sums;type:text"`\n    // SecondarySpAddresses defines the addresses of secondary_sps\n    SecondarySpAddresses pq.StringArray `gorm:"secondary_sp_addresses;type:text"`\n    // LockedBalance defines locked balance of object\n    LockedBalance common.Hash `gorm:"locked_balance"`\n    // Removed defines the object is deleted or not\n    Removed bool `gorm:"removed"`\n    // UpdateTime defines the time when the object updated\n    UpdateTime int64 `gorm:"update_time"`\n    // UpdateAt defines the block number when the object updated\n    UpdateAt int64 `gorm:"update_at"`\n}\n')),(0,o.kt)("p",null,"Below is the enum of ",(0,o.kt)("inlineCode",{parentName:"p"},"Visibility, RedundancyType, ObjectStatus and SourceType"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// VisibilityType is the resources public status.\nenum VisibilityType {\n  VISIBILITY_TYPE_UNSPECIFIED = 0;\n  VISIBILITY_TYPE_PUBLIC_READ = 1;\n  VISIBILITY_TYPE_PRIVATE = 2;\n  // If the bucket Visibility is inherit, it's finally set to private. If the object Visibility is inherit, it's the same as bucket.\n  VISIBILITY_TYPE_INHERIT = 3;\n}\n// RedundancyType represents the redundancy algorithm type for object data,\n// which can be either multi-replica or erasure coding.\nenum RedundancyType {\n  REDUNDANCY_EC_TYPE = 0;\n  REDUNDANCY_REPLICA_TYPE = 1;\n}\n// ObjectStatus represents the creation status of an object. After a user successfully\n// sends a CreateObject transaction onto the chain, the status is set to 'Created'.\n// After the Primary Service Provider successfully sends a Seal Object transaction onto\n// the chain, the status is set to 'Sealed'.\nenum ObjectStatus {\n  OBJECT_STATUS_CREATED = 0;\n  OBJECT_STATUS_SEALED = 1;\n}\n// SourceType represents the source of resource creation, which can\n// from Greenfield native or from a cross-chain transfer from BSC\nenum SourceType {\n  SOURCE_TYPE_ORIGIN = 0;\n  SOURCE_TYPE_BSC_CROSS_CHAIN = 1;\n  SOURCE_TYPE_MIRROR_PENDING = 2;\n}\n")),(0,o.kt)("h3",{id:"bucket-table"},"Bucket Table"),(0,o.kt)("p",null,"A bucket serves as a logical container for storing objects in Greenfield.\nThe Bucket table describes the db structure of bucket, and it provides additional storage information compared to the schema on the chain side. e.g. Removed defines the bucket is deleted or not"),(0,o.kt)("p",null,"Below is the schema of ",(0,o.kt)("inlineCode",{parentName:"p"},"Bucket"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Bucket is the structure for user bucket\ntype Bucket struct {\n    // ID defines db auto_increment id of bucket\n    ID uint64 `gorm:"id"`\n    // Owner is the account address of bucket creator, it is also the bucket owner.\n    Owner common.Address `gorm:"column:owner_address"`\n    // BucketName is a globally unique name of bucket\n    BucketName string `gorm:"bucket_name"`\n    // Visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage obj\n    Visibility string `gorm:"visibility"`\n    // ID is the unique identification for bucket.\n    BucketID common.Hash `gorm:"bucket_id"`\n    // SourceType defines which chain the user should send the bucket management transactions to\n    SourceType string `gorm:"source_type"`\n    // CreateAt defines the block number when the bucket created.\n    CreateAt int64 `gorm:"create_at"`\n    // CreateTime defines the timestamp when the bucket created\n    CreateTime int64 `gorm:"create_time"`\n    // PaymentAddress is the address of the payment account\n    PaymentAddress common.Address `gorm:"payment_address"`\n    // PrimarySpAddress is the address of the primary sp. Objects belong to this bucket will never\n    // leave this SP, unless you explicitly shift them to another SP.\n    PrimarySpAddress common.Address `gorm:"primary_sp_address"`\n    // ReadQuota defines the traffic quota for read\n    ChargedReadQuota uint64 `gorm:"charged_read_quota"`\n    // PaymentPriceTime defines price time of payment\n    PaymentPriceTime int64 `gorm:"payment_price_time"`\n    // Removed defines the bucket is deleted or not\n    Removed bool `gorm:"removed"`\n}\n')),(0,o.kt)("p",null,"the enum of ",(0,o.kt)("inlineCode",{parentName:"p"},"Visibility and SourceType")," are the same as above"),(0,o.kt)("h3",{id:"epoch-table"},"Epoch Table"),(0,o.kt)("p",null,"The Epoch table describes the latest progress of block event information."),(0,o.kt)("p",null,"Below is the schema of ",(0,o.kt)("inlineCode",{parentName:"p"},"Epoch"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Epoch stores current information of the latest block\ntype Epoch struct {\n    // OneRowID defines if the table only has one row\n    OneRowID bool `gorm:"one_row_id;not null;default:true;primaryKey"`\n    // BlockHeight defines the latest block number\n    BlockHeight int64 `gorm:"block_height;type:bigint(64)"`\n    // BlockHash defines the latest block hash\n    BlockHash common.Hash `gorm:"block_hash;type:BINARY(32)"`\n    // UpdateTime defines the update time of the latest block\n    UpdateTime int64 `gorm:"update_time;type:bigint(64)"`\n}\n')),(0,o.kt)("h3",{id:"streamrecord-table"},"StreamRecord Table"),(0,o.kt)("p",null,"The StreamRecord table describes the stream payment record of a stream account."),(0,o.kt)("p",null,"Below is the schema of ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamRecord"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type StreamRecord struct {\n    // ID defines db auto_increment id of stream record\n    ID uint64 `gorm:"id"`\n    // Account defines the account address\n    Account common.Address `gorm:"account"`\n    // CrudTimestamp defines the latest update timestamp of the stream record\n    CrudTimestamp int64 `gorm:"crud_timestamp"`\n    // NetflowRate defines the per-second rate that an account\'s balance is changing.\n    // It is the sum of the account\'s inbound and outbound flow rates.\n    NetflowRate *common.Big `gorm:"netflow_rate"`\n    // StaticBalance defines the balance of the stream account at the latest CRUD timestamp.\n    StaticBalance *common.Big `gorm:"static_balance"`\n    // BufferBalance defines reserved balance of the stream account\n    // If the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`\n    BufferBalance *common.Big `gorm:"buffer_balance"`\n    // LockBalance defines the locked balance of the stream account after it puts a new object and before the object is sealed\n    LockBalance *common.Big `gorm:"lock_balance"`\n    // Status defines the status of the stream account\n    Status string `gorm:"status"`\n    // SettleTimestamp defines the unix timestamp when the stream account will be settled\n    SettleTimestamp int64 `gorm:"column:settle_timestamp"`\n    // OutFlows defines the accumulated outflow rates of the stream account\n    OutFlows []byte `gorm:"out_flows;type:longblob"`\n}\n')))}u.isMDXComponent=!0}}]);