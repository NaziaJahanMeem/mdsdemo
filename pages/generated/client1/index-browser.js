
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
