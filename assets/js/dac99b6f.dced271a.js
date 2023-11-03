"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(r),g=i,b=l["".concat(u,".").concat(g)]||l[g]||p[g]||a;return r?n.createElement(b,s(s({ref:t},d),{},{components:r})):n.createElement(b,s({ref:t},d))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[l]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},22391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"SPDB"},s="SPDB",o={unversionedId:"guide/storage-provider/modules/spdb",id:"guide/storage-provider/modules/spdb",title:"SPDB",description:"SP(Storage Provider Database) store needs to implement SPDB interface. SQL database is used by default.",source:"@site/docs/guide/storage-provider/modules/spdb.md",sourceDirName:"guide/storage-provider/modules",slug:"/guide/storage-provider/modules/spdb",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/spdb",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/modules/spdb.md",tags:[],version:"current",frontMatter:{title:"SPDB"},sidebar:"guideSidebar",previous:{title:"Block Syncer",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/blocksyncer"},next:{title:"Piece Store",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/piece-store"}},u={},c=[{value:"UploadObjectProgressDB",id:"uploadobjectprogressdb",level:2},{value:"GCObjectProgressDB",id:"gcobjectprogressdb",level:2},{value:"SignatureDB",id:"signaturedb",level:2},{value:"TrafficDB",id:"trafficdb",level:2},{value:"OffChainAuthKeyDB",id:"offchainauthkeydb",level:2},{value:"MigrateDB",id:"migratedb",level:2}],d={toc:c},l="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spdb"},"SPDB"),(0,i.kt)("p",null,"SP(Storage Provider Database) store needs to implement SPDB interface. SQL database is used by default.\nThe following mainly introduces the data schemas corresponding to several core interfaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// SPDB contains all the methods required by sql database\ntype SPDB interface {\n    UploadObjectProgressDB\n    GCObjectProgressDB\n    SignatureDB\n    TrafficDB\n    OffChainAuthKeyDB\n    MigrateDB\n}\n")),(0,i.kt)("h2",{id:"uploadobjectprogressdb"},"UploadObjectProgressDB"),(0,i.kt)("p",null,"UploadObjectProgressDB interface which records upload object related progress(including foreground and background) and state. You can overwrite all these methods to meet your requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type UploadObjectProgressDB interface {\n    // InsertUploadProgress inserts a new upload object progress.\n    InsertUploadProgress(objectID uint64) error\n    // DeleteUploadProgress deletes the upload object progress.\n    DeleteUploadProgress(objectID uint64) error\n    // UpdateUploadProgress updates the upload object progress state.\n    UpdateUploadProgress(uploadMeta *UploadObjectMeta) error\n    // GetUploadState queries the task state by object id.\n    GetUploadState(objectID uint64) (storetypes.TaskState, string, error)\n    // GetUploadMetasToReplicate queries the latest upload_done/replicate_doing object to continue replicate.\n    // It is only used in startup.\n    GetUploadMetasToReplicate(limit int, timeout int64) ([]*UploadObjectMeta, error)\n    // GetUploadMetasToSeal queries the latest replicate_done/seal_doing object to continue seal.\n    // It is only used in startup.\n    GetUploadMetasToSeal(limit int, timeout int64) ([]*UploadObjectMeta, error)\n    // InsertPutEvent inserts a new upload event progress.\n    InsertPutEvent(task coretask.Task) error\n}\n\n// UploadObjectMeta defines the upload object state and related seal info, etc.\ntype UploadObjectMeta struct {\n    ObjectID             uint64\n    TaskState            storetypes.TaskState\n    GlobalVirtualGroupID uint32\n    SecondaryEndpoints   []string\n    SecondarySignatures  [][]byte\n    ErrorDescription     string\n}\n")),(0,i.kt)("p",null,"TaskState is defined in protobuf enum:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-proto"},"enum TaskState {\n  TASK_STATE_INIT_UNSPECIFIED = 0;\n\n  TASK_STATE_UPLOAD_OBJECT_DOING = 1;\n  TASK_STATE_UPLOAD_OBJECT_DONE = 2;\n  TASK_STATE_UPLOAD_OBJECT_ERROR = 3;\n\n  TASK_STATE_ALLOC_SECONDARY_DOING = 4;\n  TASK_STATE_ALLOC_SECONDARY_DONE = 5;\n  TASK_STATE_ALLOC_SECONDARY_ERROR = 6;\n\n  TASK_STATE_REPLICATE_OBJECT_DOING = 7;\n  TASK_STATE_REPLICATE_OBJECT_DONE = 8;\n  TASK_STATE_REPLICATE_OBJECT_ERROR = 9;\n\n  TASK_STATE_SIGN_OBJECT_DOING = 10;\n  TASK_STATE_SIGN_OBJECT_DONE = 11;\n  TASK_STATE_SIGN_OBJECT_ERROR = 12;\n\n  TASK_STATE_SEAL_OBJECT_DOING = 13;\n  TASK_STATE_SEAL_OBJECT_DONE = 14;\n  TASK_STATE_SEAL_OBJECT_ERROR = 15;\n\n  TASK_STATE_OBJECT_DISCONTINUED = 16;\n}\n")),(0,i.kt)("h2",{id:"gcobjectprogressdb"},"GCObjectProgressDB"),(0,i.kt)("p",null,"GCObjectProgressDB interface which records gc object related progress. You can overwrite all these methods to meet your requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type GCObjectProgressDB interface {\n    // InsertGCObjectProgress inserts a new gc object progress.\n    InsertGCObjectProgress(taskKey string, gcMeta *GCObjectMeta) error\n    // DeleteGCObjectProgress deletes the gc object progress.\n    DeleteGCObjectProgress(taskKey string) error\n    // UpdateGCObjectProgress updates the gc object progress.\n    UpdateGCObjectProgress(gcMeta *GCObjectMeta) error\n    // GetGCMetasToGC queries the latest gc meta to continue gc.\n    // It is only used in startup.\n    GetGCMetasToGC(limit int) ([]*GCObjectMeta, error)\n}\n\n// GCObjectMeta defines the gc object range progress info.\ntype GCObjectMeta struct {\n    TaskKey             string\n    StartBlockHeight    uint64\n    EndBlockHeight      uint64\n    CurrentBlockHeight  uint64\n    LastDeletedObjectID uint64\n}\n")),(0,i.kt)("h2",{id:"signaturedb"},"SignatureDB"),(0,i.kt)("p",null,"SignatureDB abstract object integrity interface. You can overwrite all these methods to meet your requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type SignatureDB interface {\n    /*\n        Object Signature is used to get challenge info.\n    */\n    // GetObjectIntegrity gets integrity meta info by object id and redundancy index.\n    GetObjectIntegrity(objectID uint64, redundancyIndex int32) (*IntegrityMeta, error)\n    // SetObjectIntegrity sets(maybe overwrite) integrity hash info to db.\n    SetObjectIntegrity(integrity *IntegrityMeta) error\n    // DeleteObjectIntegrity deletes the integrity hash.\n    DeleteObjectIntegrity(objectID uint64, redundancyIndex int32) error\n    // UpdateIntegrityChecksum update IntegrityMetaTable's integrity checksum\n    UpdateIntegrityChecksum(integrity *IntegrityMeta) error\n    // UpdatePieceChecksum if the IntegrityMetaTable already exists, it will be appended to the existing PieceChecksumList.\n    UpdatePieceChecksum(objectID uint64, redundancyIndex int32, checksum []byte) error\n    /*\n        Piece Signature is used to help replicate object's piece data to secondary sps, which is temporary.\n    */\n    // SetReplicatePieceChecksum sets(maybe overwrite) the piece hash.\n    SetReplicatePieceChecksum(objectID uint64, segmentIdx uint32, redundancyIdx int32, checksum []byte) error\n    // GetAllReplicatePieceChecksum gets all piece hashes.\n    GetAllReplicatePieceChecksum(objectID uint64, redundancyIdx int32, pieceCount uint32) ([][]byte, error)\n    // DeleteAllReplicatePieceChecksum deletes all piece hashes.\n    DeleteAllReplicatePieceChecksum(objectID uint64, redundancyIdx int32, pieceCount uint32) error\n}\n\n// IntegrityMeta defines the payload integrity hash and piece checksum with objectID.\ntype IntegrityMeta struct {\n    ObjectID          uint64\n    RedundancyIndex   int32\n    IntegrityChecksum []byte\n    PieceChecksumList [][]byte\n}\n")),(0,i.kt)("h2",{id:"trafficdb"},"TrafficDB"),(0,i.kt)("p",null,"TrafficDB defines a series of traffic interfaces. You can overwrite all these methods to meet your requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type TrafficDB interface {\n    // CheckQuotaAndAddReadRecord get the traffic info from db, update the quota meta and check\n    // whether the added traffic record exceeds the quota, if it exceeds the quota,\n    // it will return error, Otherwise, add a record and return nil.\n    CheckQuotaAndAddReadRecord(record *ReadRecord, quota *BucketQuota) error\n    // InitBucketTraffic init the traffic info\n    InitBucketTraffic(bucketID uint64, bucketName string, quota *BucketQuota) error\n    // GetBucketTraffic return bucket traffic info,\n    // notice maybe return (nil, nil) while there is no bucket traffic.\n    GetBucketTraffic(bucketID uint64) (*BucketTraffic, error)\n    // GetReadRecord return record list by time range.\n    GetReadRecord(timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n    // GetBucketReadRecord return bucket record list by time range.\n    GetBucketReadRecord(bucketID uint64, timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n    // GetObjectReadRecord return object record list by time range.\n    GetObjectReadRecord(objectID uint64, timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n    // GetUserReadRecord return user record list by time range.\n    GetUserReadRecord(userAddress string, timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n}\n\n// ReadRecord defines a read request record, will decrease the bucket read quota.\ntype ReadRecord struct {\n    BucketID        uint64\n    ObjectID        uint64\n    UserAddress     string\n    BucketName      string\n    ObjectName      string\n    ReadSize        uint64\n    ReadTimestampUs int64\n}\n\n// BucketQuota defines read quota of a bucket.\ntype BucketQuota struct {\n    ChargedQuotaSize uint64 // the charged quota of bucket on greenfield chain meta\n    FreeQuotaSize    uint64 // the free quota of SP on greenfield chain\n}\n\n// BucketTraffic is record traffic by year and month.\ntype BucketTraffic struct {\n    BucketID              uint64\n    BucketName            string\n    ReadConsumedSize      uint64\n    FreeQuotaSize         uint64 // the total free quota size of SP price meta\n    FreeQuotaConsumedSize uint64 // the consumed free quota size\n    ChargedQuotaSize      uint64 // the total charged quota of bucket\n    ModifyTime            int64\n}\n\n// TrafficTimeRange is used by query, return records in [StartTimestampUs, EndTimestampUs).\ntype TrafficTimeRange struct {\n    StartTimestampUs int64\n    EndTimestampUs   int64\n    LimitNum         int // is unlimited if LimitNum <= 0.\n}\n")),(0,i.kt)("h2",{id:"offchainauthkeydb"},"OffChainAuthKeyDB"),(0,i.kt)("p",null,"OffChainAuthKeyDB defines authentication operations in SpDB. You can overwrite all these methods to meet your requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type OffChainAuthKeyDB interface {\n    GetAuthKey(userAddress string, domain string) (*OffChainAuthKey, error)\n    UpdateAuthKey(userAddress string, domain string, oldNonce int32, newNonce int32, newPublicKey string, newExpiryDate time.Time) error\n    InsertAuthKey(newRecord *OffChainAuthKey) error\n}\n\n// OffChainAuthKey contains some info about authentication\ntype OffChainAuthKey struct {\n    UserAddress string\n    Domain      string\n\n    CurrentNonce     int32\n    CurrentPublicKey string\n    NextNonce        int32\n    ExpiryDate       time.Time\n\n    CreatedTime  time.Time\n    ModifiedTime time.Time\n}\n")),(0,i.kt)("h2",{id:"migratedb"},"MigrateDB"),(0,i.kt)("p",null,"MigrateDB is used to support sp exit and bucket migrate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type MigrateDB interface {\n    // UpdateSPExitSubscribeProgress includes insert and update.\n    UpdateSPExitSubscribeProgress(blockHeight uint64) error\n    // QuerySPExitSubscribeProgress returns blockHeight which is called at startup.\n    QuerySPExitSubscribeProgress() (uint64, error)\n    // UpdateSwapOutSubscribeProgress includes insert and update.\n    UpdateSwapOutSubscribeProgress(blockHeight uint64) error\n    // QuerySwapOutSubscribeProgress returns blockHeight which is called at startup.\n    QuerySwapOutSubscribeProgress() (uint64, error)\n    // UpdateBucketMigrateSubscribeProgress includes insert and update.\n    UpdateBucketMigrateSubscribeProgress(blockHeight uint64) error\n    // QueryBucketMigrateSubscribeProgress returns blockHeight which is called at startup.\n    QueryBucketMigrateSubscribeProgress() (uint64, error)\n\n    // InsertSwapOutUnit is used to insert a swap out unit.\n    InsertSwapOutUnit(meta *SwapOutMeta) error\n    // UpdateSwapOutUnitCompletedGVGList is used to record dest swap out progress, manager restart can load it.\n    UpdateSwapOutUnitCompletedGVGList(swapOutKey string, completedGVGList []uint32) error\n    // QuerySwapOutUnitInSrcSP is used to rebuild swap out plan at startup.\n    QuerySwapOutUnitInSrcSP(swapOutKey string) (*SwapOutMeta, error)\n    // ListDestSPSwapOutUnits is used to rebuild swap out plan at startup.\n    ListDestSPSwapOutUnits() ([]*SwapOutMeta, error)\n\n    // InsertMigrateGVGUnit inserts a new gvg migrate unit.\n    InsertMigrateGVGUnit(meta *MigrateGVGUnitMeta) error\n    // DeleteMigrateGVGUnit deletes the gvg migrate unit.\n    DeleteMigrateGVGUnit(meta *MigrateGVGUnitMeta) error\n\n    // UpdateMigrateGVGUnitStatus updates gvg unit status.\n    UpdateMigrateGVGUnitStatus(migrateKey string, migrateStatus int) error\n    // UpdateMigrateGVGUnitLastMigrateObjectID updates gvg unit LastMigrateObjectID.\n    UpdateMigrateGVGUnitLastMigrateObjectID(migrateKey string, lastMigrateObjectID uint64) error\n\n    // QueryMigrateGVGUnit returns the gvg migrate unit info.\n    QueryMigrateGVGUnit(migrateKey string) (*MigrateGVGUnitMeta, error)\n    // ListMigrateGVGUnitsByBucketID is used to load at dest sp startup(bucket migrate).\n    ListMigrateGVGUnitsByBucketID(bucketID uint64) ([]*MigrateGVGUnitMeta, error)\n}\n\ntype SwapOutMeta struct {\n    SwapOutKey    string // as primary key\n    IsDestSP      bool\n    SwapOutMsg    *virtualgrouptypes.MsgSwapOut\n    CompletedGVGs []uint32\n}\n\ntype MigrateGVGUnitMeta struct {\n    MigrateGVGKey        string // as primary key\n    SwapOutKey           string\n    GlobalVirtualGroupID uint32 // is used by sp exit/bucket migrate\n    VirtualGroupFamilyID uint32 // is used by sp exit\n    RedundancyIndex      int32  // is used by sp exit\n    BucketID             uint64 // is used by bucket migrate\n    SrcSPID              uint32\n    DestSPID             uint32\n    LastMigratedObjectID uint64\n    MigrateStatus        int // scheduler assign unit status.\n}\n")))}p.isMDXComponent=!0}}]);