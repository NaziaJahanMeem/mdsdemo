
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "pages\\generated\\client1",
    "generated\\client1",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.IdxScalarFieldEnum = makeEnum({
  IDX_INDEX_ID: 'IDX_INDEX_ID',
  IDX_DATE_TIME: 'IDX_DATE_TIME',
  IDX_CAPITAL_VALUE: 'IDX_CAPITAL_VALUE',
  IDX_DEVIATION: 'IDX_DEVIATION',
  lDX_PERCENTAGE_DEVIATION: 'lDX_PERCENTAGE_DEVIATION'
});

exports.Prisma.ManScalarFieldEnum = makeEnum({
  MAN_ANNOUNCEMENT_DATE_TIME: 'MAN_ANNOUNCEMENT_DATE_TIME',
  MAN_ANNOUNCEMENT_PREFIX: 'MAN_ANNOUNCEMENT_PREFIX',
  MAN_ANNOUNCEMENT: 'MAN_ANNOUNCEMENT',
  MAN_EXPIRY_DATE: 'MAN_EXPIRY_DATE',
  id: 'id'
});

exports.Prisma.MkistatScalarFieldEnum = makeEnum({
  MKISTAT_INSTRUMENT_CODE: 'MKISTAT_INSTRUMENT_CODE',
  MKISTAT_INSTRUMENT_NUMBER: 'MKISTAT_INSTRUMENT_NUMBER',
  MKISTAT_QUOTE_BASES: 'MKISTAT_QUOTE_BASES',
  MKISTAT_OPEN_PRICE: 'MKISTAT_OPEN_PRICE',
  MKISTAT_PUB_LAST_TRADED_PRICE: 'MKISTAT_PUB_LAST_TRADED_PRICE',
  MKISTAT_SPOT_LAST_TRADED_PRICE: 'MKISTAT_SPOT_LAST_TRADED_PRICE',
  MKISTAT_HIGH_PRICE: 'MKISTAT_HIGH_PRICE',
  MKISTAT_LOW_PRICE: 'MKISTAT_LOW_PRICE',
  MKISTAT_CLOSE_PRICE: 'MKISTAT_CLOSE_PRICE',
  MKISTAT_YDAY_CLOSE_PRICE: 'MKISTAT_YDAY_CLOSE_PRICE',
  MKISTAT_TOTAL_TRADES: 'MKISTAT_TOTAL_TRADES',
  MKISTAT_TOTAL_VOLUME: 'MKISTAT_TOTAL_VOLUME',
  MKISTAT_TOTAL_VALUE: 'MKISTAT_TOTAL_VALUE',
  MKISTAT_PUBLIC_TOTAL_TRADES: 'MKISTAT_PUBLIC_TOTAL_TRADES',
  MKISTAT_PUBLIC_TOTAL_VOLUME: 'MKISTAT_PUBLIC_TOTAL_VOLUME',
  MKISTAT_PUBLIC_TOTAL_VALUE: 'MKISTAT_PUBLIC_TOTAL_VALUE',
  MKISTAT_SPOT_TOTAL_TRADES: 'MKISTAT_SPOT_TOTAL_TRADES',
  MKISTAT_SPOT_TOTAL_VOLUME: 'MKISTAT_SPOT_TOTAL_VOLUME',
  MKISTAT_SPOT_TOTAL_VALUE: 'MKISTAT_SPOT_TOTAL_VALUE',
  MKISTAT_LM_DATE_TIME: 'MKISTAT_LM_DATE_TIME'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StatsScalarFieldEnum = makeEnum({
  STATS_INSTRUMENT_CODE: 'STATS_INSTRUMENT_CODE',
  STATS_BUYPRICE: 'STATS_BUYPRICE',
  STATS_BUYVOLUME: 'STATS_BUYVOLUME',
  STATS_BUYDVPVOLUME: 'STATS_BUYDVPVOLUME',
  STATS_SELLPRICE: 'STATS_SELLPRICE',
  STATS_SELLVOLUME: 'STATS_SELLVOLUME',
  STATS_SELLDVPVOLUME: 'STATS_SELLDVPVOLUME',
  trd_date: 'trd_date',
  id: 'id'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TrdScalarFieldEnum = makeEnum({
  TRD_SNO: 'TRD_SNO',
  TRD_TOTAL_TRADES: 'TRD_TOTAL_TRADES',
  TRD_TOTAL_VOLUME: 'TRD_TOTAL_VOLUME',
  TRD_TOTAL_VALUE: 'TRD_TOTAL_VALUE',
  TRD_LM_DATE_TIME: 'TRD_LM_DATE_TIME',
  id: 'id'
});


exports.Prisma.ModelName = makeEnum({
  idx: 'idx',
  man: 'man',
  mkistat: 'mkistat',
  stats: 'stats',
  trd: 'trd'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"idx\",\"dbName\":null,\"fields\":[{\"name\":\"IDX_INDEX_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDX_DATE_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'0000-00-00 00:00:00'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDX_CAPITAL_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDX_DEVIATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lDX_PERCENTAGE_DEVIATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"IDX_INDEX_ID\",\"IDX_DATE_TIME\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"man\",\"dbName\":null,\"fields\":[{\"name\":\"MAN_ANNOUNCEMENT_DATE_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'0000-00-00 00:00:00'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_ANNOUNCEMENT_PREFIX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_ANNOUNCEMENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_EXPIRY_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"mkistat\",\"dbName\":null,\"fields\":[{\"name\":\"MKISTAT_INSTRUMENT_CODE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_INSTRUMENT_NUMBER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_QUOTE_BASES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_OPEN_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_PUB_LAST_TRADED_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_SPOT_LAST_TRADED_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_HIGH_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_LOW_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_CLOSE_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_YDAY_CLOSE_PRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_TOTAL_TRADES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_TOTAL_VOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_TOTAL_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_PUBLIC_TOTAL_TRADES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_PUBLIC_TOTAL_VOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_PUBLIC_TOTAL_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_SPOT_TOTAL_TRADES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_SPOT_TOTAL_VOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_SPOT_TOTAL_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MKISTAT_LM_DATE_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"MKISTAT_INSTRUMENT_CODE\",\"MKISTAT_LM_DATE_TIME\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"stats\",\"dbName\":null,\"fields\":[{\"name\":\"STATS_INSTRUMENT_CODE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATS_BUYPRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATS_BUYVOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATS_BUYDVPVOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATS_SELLPRICE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATS_SELLVOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATS_SELLDVPVOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trd_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'0000-00-00'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"trd\",\"dbName\":null,\"fields\":[{\"name\":\"TRD_SNO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRD_TOTAL_TRADES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRD_TOTAL_VOLUME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRD_TOTAL_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRD_LM_DATE_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"idx\",\"plural\":\"idxes\",\"findUnique\":\"findUniqueidx\",\"findFirst\":\"findFirstidx\",\"findMany\":\"findManyidx\",\"create\":\"createOneidx\",\"createMany\":\"createManyidx\",\"delete\":\"deleteOneidx\",\"update\":\"updateOneidx\",\"deleteMany\":\"deleteManyidx\",\"updateMany\":\"updateManyidx\",\"upsert\":\"upsertOneidx\",\"aggregate\":\"aggregateidx\",\"groupBy\":\"groupByidx\"},{\"model\":\"man\",\"plural\":\"men\",\"findUnique\":\"findUniqueman\",\"findFirst\":\"findFirstman\",\"findMany\":\"findManyman\",\"create\":\"createOneman\",\"createMany\":\"createManyman\",\"delete\":\"deleteOneman\",\"update\":\"updateOneman\",\"deleteMany\":\"deleteManyman\",\"updateMany\":\"updateManyman\",\"upsert\":\"upsertOneman\",\"aggregate\":\"aggregateman\",\"groupBy\":\"groupByman\"},{\"model\":\"mkistat\",\"plural\":\"mkistats\",\"findUnique\":\"findUniquemkistat\",\"findFirst\":\"findFirstmkistat\",\"findMany\":\"findManymkistat\",\"create\":\"createOnemkistat\",\"createMany\":\"createManymkistat\",\"delete\":\"deleteOnemkistat\",\"update\":\"updateOnemkistat\",\"deleteMany\":\"deleteManymkistat\",\"updateMany\":\"updateManymkistat\",\"upsert\":\"upsertOnemkistat\",\"aggregate\":\"aggregatemkistat\",\"groupBy\":\"groupBymkistat\"},{\"model\":\"stats\",\"plural\":\"stats\",\"findUnique\":\"findUniquestats\",\"findFirst\":\"findFirststats\",\"findMany\":\"findManystats\",\"create\":\"createOnestats\",\"createMany\":\"createManystats\",\"delete\":\"deleteOnestats\",\"update\":\"updateOnestats\",\"deleteMany\":\"deleteManystats\",\"updateMany\":\"updateManystats\",\"upsert\":\"upsertOnestats\",\"aggregate\":\"aggregatestats\",\"groupBy\":\"groupBystats\"},{\"model\":\"trd\",\"plural\":\"trds\",\"findUnique\":\"findUniquetrd\",\"findFirst\":\"findFirsttrd\",\"findMany\":\"findManytrd\",\"create\":\"createOnetrd\",\"createMany\":\"createManytrd\",\"delete\":\"deleteOnetrd\",\"update\":\"updateOnetrd\",\"deleteMany\":\"deleteManytrd\",\"updateMany\":\"updateManytrd\",\"upsert\":\"upsertOnetrd\",\"aggregate\":\"aggregatetrd\",\"groupBy\":\"groupBytrd\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\nazia\\OneDrive\\Desktop\\NEXTJS\\mdsconvert\\pages\\generated\\client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\prisma",
  "clientVersion": "4.6.1",
  "engineVersion": "694eea289a8462c80264df36757e4fdc129b1b32",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "pages\\generated\\client1\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "pages\\generated\\client1\\schema.prisma")
