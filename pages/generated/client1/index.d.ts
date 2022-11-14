
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model idx
 * 
 */
export type idx = {
  IDX_INDEX_ID: string
  IDX_DATE_TIME: Date
  IDX_CAPITAL_VALUE: Prisma.Decimal
  IDX_DEVIATION: Prisma.Decimal
  lDX_PERCENTAGE_DEVIATION: Prisma.Decimal
}

/**
 * Model man
 * 
 */
export type man = {
  MAN_ANNOUNCEMENT_DATE_TIME: Date
  MAN_ANNOUNCEMENT_PREFIX: string
  MAN_ANNOUNCEMENT: string
  MAN_EXPIRY_DATE: string | null
  id: number
}

/**
 * Model mkistat
 * 
 */
export type mkistat = {
  MKISTAT_INSTRUMENT_CODE: string
  MKISTAT_INSTRUMENT_NUMBER: number
  MKISTAT_QUOTE_BASES: string
  MKISTAT_OPEN_PRICE: Prisma.Decimal
  MKISTAT_PUB_LAST_TRADED_PRICE: Prisma.Decimal
  MKISTAT_SPOT_LAST_TRADED_PRICE: Prisma.Decimal
  MKISTAT_HIGH_PRICE: Prisma.Decimal
  MKISTAT_LOW_PRICE: Prisma.Decimal
  MKISTAT_CLOSE_PRICE: Prisma.Decimal
  MKISTAT_YDAY_CLOSE_PRICE: Prisma.Decimal
  MKISTAT_TOTAL_TRADES: number
  MKISTAT_TOTAL_VOLUME: number
  MKISTAT_TOTAL_VALUE: Prisma.Decimal
  MKISTAT_PUBLIC_TOTAL_TRADES: number
  MKISTAT_PUBLIC_TOTAL_VOLUME: number
  MKISTAT_PUBLIC_TOTAL_VALUE: Prisma.Decimal
  MKISTAT_SPOT_TOTAL_TRADES: number
  MKISTAT_SPOT_TOTAL_VOLUME: number
  MKISTAT_SPOT_TOTAL_VALUE: Prisma.Decimal
  MKISTAT_LM_DATE_TIME: Date
}

/**
 * Model stats
 * 
 */
export type stats = {
  STATS_INSTRUMENT_CODE: string
  STATS_BUYPRICE: Prisma.Decimal
  STATS_BUYVOLUME: number
  STATS_BUYDVPVOLUME: number
  STATS_SELLPRICE: Prisma.Decimal
  STATS_SELLVOLUME: number
  STATS_SELLDVPVOLUME: number
  trd_date: Date
  id: number
}

/**
 * Model trd
 * 
 */
export type trd = {
  TRD_SNO: string | null
  TRD_TOTAL_TRADES: number
  TRD_TOTAL_VOLUME: number
  TRD_TOTAL_VALUE: number | null
  TRD_LM_DATE_TIME: string | null
  id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Idxes
 * const idxes = await prisma.idx.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Idxes
   * const idxes = await prisma.idx.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.idx`: Exposes CRUD operations for the **idx** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idxes
    * const idxes = await prisma.idx.findMany()
    * ```
    */
  get idx(): Prisma.idxDelegate<GlobalReject>;

  /**
   * `prisma.man`: Exposes CRUD operations for the **man** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Men
    * const men = await prisma.man.findMany()
    * ```
    */
  get man(): Prisma.manDelegate<GlobalReject>;

  /**
   * `prisma.mkistat`: Exposes CRUD operations for the **mkistat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mkistats
    * const mkistats = await prisma.mkistat.findMany()
    * ```
    */
  get mkistat(): Prisma.mkistatDelegate<GlobalReject>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stats.findMany()
    * ```
    */
  get stats(): Prisma.statsDelegate<GlobalReject>;

  /**
   * `prisma.trd`: Exposes CRUD operations for the **trd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trds
    * const trds = await prisma.trd.findMany()
    * ```
    */
  get trd(): Prisma.trdDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    idx: 'idx',
    man: 'man',
    mkistat: 'mkistat',
    stats: 'stats',
    trd: 'trd'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model idx
   */


  export type AggregateIdx = {
    _count: IdxCountAggregateOutputType | null
    _avg: IdxAvgAggregateOutputType | null
    _sum: IdxSumAggregateOutputType | null
    _min: IdxMinAggregateOutputType | null
    _max: IdxMaxAggregateOutputType | null
  }

  export type IdxAvgAggregateOutputType = {
    IDX_CAPITAL_VALUE: Decimal | null
    IDX_DEVIATION: Decimal | null
    lDX_PERCENTAGE_DEVIATION: Decimal | null
  }

  export type IdxSumAggregateOutputType = {
    IDX_CAPITAL_VALUE: Decimal | null
    IDX_DEVIATION: Decimal | null
    lDX_PERCENTAGE_DEVIATION: Decimal | null
  }

  export type IdxMinAggregateOutputType = {
    IDX_INDEX_ID: string | null
    IDX_DATE_TIME: Date | null
    IDX_CAPITAL_VALUE: Decimal | null
    IDX_DEVIATION: Decimal | null
    lDX_PERCENTAGE_DEVIATION: Decimal | null
  }

  export type IdxMaxAggregateOutputType = {
    IDX_INDEX_ID: string | null
    IDX_DATE_TIME: Date | null
    IDX_CAPITAL_VALUE: Decimal | null
    IDX_DEVIATION: Decimal | null
    lDX_PERCENTAGE_DEVIATION: Decimal | null
  }

  export type IdxCountAggregateOutputType = {
    IDX_INDEX_ID: number
    IDX_DATE_TIME: number
    IDX_CAPITAL_VALUE: number
    IDX_DEVIATION: number
    lDX_PERCENTAGE_DEVIATION: number
    _all: number
  }


  export type IdxAvgAggregateInputType = {
    IDX_CAPITAL_VALUE?: true
    IDX_DEVIATION?: true
    lDX_PERCENTAGE_DEVIATION?: true
  }

  export type IdxSumAggregateInputType = {
    IDX_CAPITAL_VALUE?: true
    IDX_DEVIATION?: true
    lDX_PERCENTAGE_DEVIATION?: true
  }

  export type IdxMinAggregateInputType = {
    IDX_INDEX_ID?: true
    IDX_DATE_TIME?: true
    IDX_CAPITAL_VALUE?: true
    IDX_DEVIATION?: true
    lDX_PERCENTAGE_DEVIATION?: true
  }

  export type IdxMaxAggregateInputType = {
    IDX_INDEX_ID?: true
    IDX_DATE_TIME?: true
    IDX_CAPITAL_VALUE?: true
    IDX_DEVIATION?: true
    lDX_PERCENTAGE_DEVIATION?: true
  }

  export type IdxCountAggregateInputType = {
    IDX_INDEX_ID?: true
    IDX_DATE_TIME?: true
    IDX_CAPITAL_VALUE?: true
    IDX_DEVIATION?: true
    lDX_PERCENTAGE_DEVIATION?: true
    _all?: true
  }

  export type IdxAggregateArgs = {
    /**
     * Filter which idx to aggregate.
     * 
    **/
    where?: idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idxes to fetch.
     * 
    **/
    orderBy?: Enumerable<idxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idxes
    **/
    _count?: true | IdxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdxMaxAggregateInputType
  }

  export type GetIdxAggregateType<T extends IdxAggregateArgs> = {
        [P in keyof T & keyof AggregateIdx]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdx[P]>
      : GetScalarType<T[P], AggregateIdx[P]>
  }




  export type IdxGroupByArgs = {
    where?: idxWhereInput
    orderBy?: Enumerable<idxOrderByWithAggregationInput>
    by: Array<IdxScalarFieldEnum>
    having?: idxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdxCountAggregateInputType | true
    _avg?: IdxAvgAggregateInputType
    _sum?: IdxSumAggregateInputType
    _min?: IdxMinAggregateInputType
    _max?: IdxMaxAggregateInputType
  }


  export type IdxGroupByOutputType = {
    IDX_INDEX_ID: string
    IDX_DATE_TIME: Date
    IDX_CAPITAL_VALUE: Decimal
    IDX_DEVIATION: Decimal
    lDX_PERCENTAGE_DEVIATION: Decimal
    _count: IdxCountAggregateOutputType | null
    _avg: IdxAvgAggregateOutputType | null
    _sum: IdxSumAggregateOutputType | null
    _min: IdxMinAggregateOutputType | null
    _max: IdxMaxAggregateOutputType | null
  }

  type GetIdxGroupByPayload<T extends IdxGroupByArgs> = PrismaPromise<
    Array<
      PickArray<IdxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdxGroupByOutputType[P]>
            : GetScalarType<T[P], IdxGroupByOutputType[P]>
        }
      >
    >


  export type idxSelect = {
    IDX_INDEX_ID?: boolean
    IDX_DATE_TIME?: boolean
    IDX_CAPITAL_VALUE?: boolean
    IDX_DEVIATION?: boolean
    lDX_PERCENTAGE_DEVIATION?: boolean
  }


  export type idxGetPayload<S extends boolean | null | undefined | idxArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? idx :
    S extends undefined ? never :
    S extends { include: any } & (idxArgs | idxFindManyArgs)
    ? idx 
    : S extends { select: any } & (idxArgs | idxFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof idx ? idx[P] : never
  } 
      : idx


  type idxCountArgs = Merge<
    Omit<idxFindManyArgs, 'select' | 'include'> & {
      select?: IdxCountAggregateInputType | true
    }
  >

  export interface idxDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Idx that matches the filter.
     * @param {idxFindUniqueArgs} args - Arguments to find a Idx
     * @example
     * // Get one Idx
     * const idx = await prisma.idx.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends idxFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, idxFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'idx'> extends True ? Prisma__idxClient<idxGetPayload<T>> : Prisma__idxClient<idxGetPayload<T> | null, null>

    /**
     * Find the first Idx that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idxFindFirstArgs} args - Arguments to find a Idx
     * @example
     * // Get one Idx
     * const idx = await prisma.idx.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends idxFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, idxFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'idx'> extends True ? Prisma__idxClient<idxGetPayload<T>> : Prisma__idxClient<idxGetPayload<T> | null, null>

    /**
     * Find zero or more Idxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idxes
     * const idxes = await prisma.idx.findMany()
     * 
     * // Get first 10 Idxes
     * const idxes = await prisma.idx.findMany({ take: 10 })
     * 
     * // Only select the `IDX_INDEX_ID`
     * const idxWithIDX_INDEX_IDOnly = await prisma.idx.findMany({ select: { IDX_INDEX_ID: true } })
     * 
    **/
    findMany<T extends idxFindManyArgs>(
      args?: SelectSubset<T, idxFindManyArgs>
    ): PrismaPromise<Array<idxGetPayload<T>>>

    /**
     * Create a Idx.
     * @param {idxCreateArgs} args - Arguments to create a Idx.
     * @example
     * // Create one Idx
     * const Idx = await prisma.idx.create({
     *   data: {
     *     // ... data to create a Idx
     *   }
     * })
     * 
    **/
    create<T extends idxCreateArgs>(
      args: SelectSubset<T, idxCreateArgs>
    ): Prisma__idxClient<idxGetPayload<T>>

    /**
     * Create many Idxes.
     *     @param {idxCreateManyArgs} args - Arguments to create many Idxes.
     *     @example
     *     // Create many Idxes
     *     const idx = await prisma.idx.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends idxCreateManyArgs>(
      args?: SelectSubset<T, idxCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Idx.
     * @param {idxDeleteArgs} args - Arguments to delete one Idx.
     * @example
     * // Delete one Idx
     * const Idx = await prisma.idx.delete({
     *   where: {
     *     // ... filter to delete one Idx
     *   }
     * })
     * 
    **/
    delete<T extends idxDeleteArgs>(
      args: SelectSubset<T, idxDeleteArgs>
    ): Prisma__idxClient<idxGetPayload<T>>

    /**
     * Update one Idx.
     * @param {idxUpdateArgs} args - Arguments to update one Idx.
     * @example
     * // Update one Idx
     * const idx = await prisma.idx.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends idxUpdateArgs>(
      args: SelectSubset<T, idxUpdateArgs>
    ): Prisma__idxClient<idxGetPayload<T>>

    /**
     * Delete zero or more Idxes.
     * @param {idxDeleteManyArgs} args - Arguments to filter Idxes to delete.
     * @example
     * // Delete a few Idxes
     * const { count } = await prisma.idx.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends idxDeleteManyArgs>(
      args?: SelectSubset<T, idxDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idxes
     * const idx = await prisma.idx.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends idxUpdateManyArgs>(
      args: SelectSubset<T, idxUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Idx.
     * @param {idxUpsertArgs} args - Arguments to update or create a Idx.
     * @example
     * // Update or create a Idx
     * const idx = await prisma.idx.upsert({
     *   create: {
     *     // ... data to create a Idx
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idx we want to update
     *   }
     * })
    **/
    upsert<T extends idxUpsertArgs>(
      args: SelectSubset<T, idxUpsertArgs>
    ): Prisma__idxClient<idxGetPayload<T>>

    /**
     * Find one Idx that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {idxFindUniqueOrThrowArgs} args - Arguments to find a Idx
     * @example
     * // Get one Idx
     * const idx = await prisma.idx.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends idxFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, idxFindUniqueOrThrowArgs>
    ): Prisma__idxClient<idxGetPayload<T>>

    /**
     * Find the first Idx that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idxFindFirstOrThrowArgs} args - Arguments to find a Idx
     * @example
     * // Get one Idx
     * const idx = await prisma.idx.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends idxFindFirstOrThrowArgs>(
      args?: SelectSubset<T, idxFindFirstOrThrowArgs>
    ): Prisma__idxClient<idxGetPayload<T>>

    /**
     * Count the number of Idxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idxCountArgs} args - Arguments to filter Idxes to count.
     * @example
     * // Count the number of Idxes
     * const count = await prisma.idx.count({
     *   where: {
     *     // ... the filter for the Idxes we want to count
     *   }
     * })
    **/
    count<T extends idxCountArgs>(
      args?: Subset<T, idxCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idx.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdxAggregateArgs>(args: Subset<T, IdxAggregateArgs>): PrismaPromise<GetIdxAggregateType<T>>

    /**
     * Group by Idx.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdxGroupByArgs['orderBy'] }
        : { orderBy?: IdxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdxGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for idx.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__idxClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * idx base type for findUnique actions
   */
  export type idxFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * Filter, which idx to fetch.
     * 
    **/
    where: idxWhereUniqueInput
  }

  /**
   * idx: findUnique
   */
  export interface idxFindUniqueArgs extends idxFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * idx base type for findFirst actions
   */
  export type idxFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * Filter, which idx to fetch.
     * 
    **/
    where?: idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idxes to fetch.
     * 
    **/
    orderBy?: Enumerable<idxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idxes.
     * 
    **/
    cursor?: idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idxes.
     * 
    **/
    distinct?: Enumerable<IdxScalarFieldEnum>
  }

  /**
   * idx: findFirst
   */
  export interface idxFindFirstArgs extends idxFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * idx findMany
   */
  export type idxFindManyArgs = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * Filter, which idxes to fetch.
     * 
    **/
    where?: idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idxes to fetch.
     * 
    **/
    orderBy?: Enumerable<idxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idxes.
     * 
    **/
    cursor?: idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idxes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<IdxScalarFieldEnum>
  }


  /**
   * idx create
   */
  export type idxCreateArgs = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * The data needed to create a idx.
     * 
    **/
    data: XOR<idxCreateInput, idxUncheckedCreateInput>
  }


  /**
   * idx createMany
   */
  export type idxCreateManyArgs = {
    /**
     * The data used to create many idxes.
     * 
    **/
    data: Enumerable<idxCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * idx update
   */
  export type idxUpdateArgs = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * The data needed to update a idx.
     * 
    **/
    data: XOR<idxUpdateInput, idxUncheckedUpdateInput>
    /**
     * Choose, which idx to update.
     * 
    **/
    where: idxWhereUniqueInput
  }


  /**
   * idx updateMany
   */
  export type idxUpdateManyArgs = {
    /**
     * The data used to update idxes.
     * 
    **/
    data: XOR<idxUpdateManyMutationInput, idxUncheckedUpdateManyInput>
    /**
     * Filter which idxes to update
     * 
    **/
    where?: idxWhereInput
  }


  /**
   * idx upsert
   */
  export type idxUpsertArgs = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * The filter to search for the idx to update in case it exists.
     * 
    **/
    where: idxWhereUniqueInput
    /**
     * In case the idx found by the `where` argument doesn't exist, create a new idx with this data.
     * 
    **/
    create: XOR<idxCreateInput, idxUncheckedCreateInput>
    /**
     * In case the idx was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<idxUpdateInput, idxUncheckedUpdateInput>
  }


  /**
   * idx delete
   */
  export type idxDeleteArgs = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
    /**
     * Filter which idx to delete.
     * 
    **/
    where: idxWhereUniqueInput
  }


  /**
   * idx deleteMany
   */
  export type idxDeleteManyArgs = {
    /**
     * Filter which idxes to delete
     * 
    **/
    where?: idxWhereInput
  }


  /**
   * idx: findUniqueOrThrow
   */
  export type idxFindUniqueOrThrowArgs = idxFindUniqueArgsBase
      

  /**
   * idx: findFirstOrThrow
   */
  export type idxFindFirstOrThrowArgs = idxFindFirstArgsBase
      

  /**
   * idx without action
   */
  export type idxArgs = {
    /**
     * Select specific fields to fetch from the idx
     * 
    **/
    select?: idxSelect | null
  }



  /**
   * Model man
   */


  export type AggregateMan = {
    _count: ManCountAggregateOutputType | null
    _avg: ManAvgAggregateOutputType | null
    _sum: ManSumAggregateOutputType | null
    _min: ManMinAggregateOutputType | null
    _max: ManMaxAggregateOutputType | null
  }

  export type ManAvgAggregateOutputType = {
    id: number | null
  }

  export type ManSumAggregateOutputType = {
    id: number | null
  }

  export type ManMinAggregateOutputType = {
    MAN_ANNOUNCEMENT_DATE_TIME: Date | null
    MAN_ANNOUNCEMENT_PREFIX: string | null
    MAN_ANNOUNCEMENT: string | null
    MAN_EXPIRY_DATE: string | null
    id: number | null
  }

  export type ManMaxAggregateOutputType = {
    MAN_ANNOUNCEMENT_DATE_TIME: Date | null
    MAN_ANNOUNCEMENT_PREFIX: string | null
    MAN_ANNOUNCEMENT: string | null
    MAN_EXPIRY_DATE: string | null
    id: number | null
  }

  export type ManCountAggregateOutputType = {
    MAN_ANNOUNCEMENT_DATE_TIME: number
    MAN_ANNOUNCEMENT_PREFIX: number
    MAN_ANNOUNCEMENT: number
    MAN_EXPIRY_DATE: number
    id: number
    _all: number
  }


  export type ManAvgAggregateInputType = {
    id?: true
  }

  export type ManSumAggregateInputType = {
    id?: true
  }

  export type ManMinAggregateInputType = {
    MAN_ANNOUNCEMENT_DATE_TIME?: true
    MAN_ANNOUNCEMENT_PREFIX?: true
    MAN_ANNOUNCEMENT?: true
    MAN_EXPIRY_DATE?: true
    id?: true
  }

  export type ManMaxAggregateInputType = {
    MAN_ANNOUNCEMENT_DATE_TIME?: true
    MAN_ANNOUNCEMENT_PREFIX?: true
    MAN_ANNOUNCEMENT?: true
    MAN_EXPIRY_DATE?: true
    id?: true
  }

  export type ManCountAggregateInputType = {
    MAN_ANNOUNCEMENT_DATE_TIME?: true
    MAN_ANNOUNCEMENT_PREFIX?: true
    MAN_ANNOUNCEMENT?: true
    MAN_EXPIRY_DATE?: true
    id?: true
    _all?: true
  }

  export type ManAggregateArgs = {
    /**
     * Filter which man to aggregate.
     * 
    **/
    where?: manWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of men to fetch.
     * 
    **/
    orderBy?: Enumerable<manOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: manWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` men from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` men.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned men
    **/
    _count?: true | ManCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManMaxAggregateInputType
  }

  export type GetManAggregateType<T extends ManAggregateArgs> = {
        [P in keyof T & keyof AggregateMan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMan[P]>
      : GetScalarType<T[P], AggregateMan[P]>
  }




  export type ManGroupByArgs = {
    where?: manWhereInput
    orderBy?: Enumerable<manOrderByWithAggregationInput>
    by: Array<ManScalarFieldEnum>
    having?: manScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManCountAggregateInputType | true
    _avg?: ManAvgAggregateInputType
    _sum?: ManSumAggregateInputType
    _min?: ManMinAggregateInputType
    _max?: ManMaxAggregateInputType
  }


  export type ManGroupByOutputType = {
    MAN_ANNOUNCEMENT_DATE_TIME: Date
    MAN_ANNOUNCEMENT_PREFIX: string
    MAN_ANNOUNCEMENT: string
    MAN_EXPIRY_DATE: string | null
    id: number
    _count: ManCountAggregateOutputType | null
    _avg: ManAvgAggregateOutputType | null
    _sum: ManSumAggregateOutputType | null
    _min: ManMinAggregateOutputType | null
    _max: ManMaxAggregateOutputType | null
  }

  type GetManGroupByPayload<T extends ManGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ManGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManGroupByOutputType[P]>
            : GetScalarType<T[P], ManGroupByOutputType[P]>
        }
      >
    >


  export type manSelect = {
    MAN_ANNOUNCEMENT_DATE_TIME?: boolean
    MAN_ANNOUNCEMENT_PREFIX?: boolean
    MAN_ANNOUNCEMENT?: boolean
    MAN_EXPIRY_DATE?: boolean
    id?: boolean
  }


  export type manGetPayload<S extends boolean | null | undefined | manArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? man :
    S extends undefined ? never :
    S extends { include: any } & (manArgs | manFindManyArgs)
    ? man 
    : S extends { select: any } & (manArgs | manFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof man ? man[P] : never
  } 
      : man


  type manCountArgs = Merge<
    Omit<manFindManyArgs, 'select' | 'include'> & {
      select?: ManCountAggregateInputType | true
    }
  >

  export interface manDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Man that matches the filter.
     * @param {manFindUniqueArgs} args - Arguments to find a Man
     * @example
     * // Get one Man
     * const man = await prisma.man.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends manFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, manFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'man'> extends True ? Prisma__manClient<manGetPayload<T>> : Prisma__manClient<manGetPayload<T> | null, null>

    /**
     * Find the first Man that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manFindFirstArgs} args - Arguments to find a Man
     * @example
     * // Get one Man
     * const man = await prisma.man.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends manFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, manFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'man'> extends True ? Prisma__manClient<manGetPayload<T>> : Prisma__manClient<manGetPayload<T> | null, null>

    /**
     * Find zero or more Men that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Men
     * const men = await prisma.man.findMany()
     * 
     * // Get first 10 Men
     * const men = await prisma.man.findMany({ take: 10 })
     * 
     * // Only select the `MAN_ANNOUNCEMENT_DATE_TIME`
     * const manWithMAN_ANNOUNCEMENT_DATE_TIMEOnly = await prisma.man.findMany({ select: { MAN_ANNOUNCEMENT_DATE_TIME: true } })
     * 
    **/
    findMany<T extends manFindManyArgs>(
      args?: SelectSubset<T, manFindManyArgs>
    ): PrismaPromise<Array<manGetPayload<T>>>

    /**
     * Create a Man.
     * @param {manCreateArgs} args - Arguments to create a Man.
     * @example
     * // Create one Man
     * const Man = await prisma.man.create({
     *   data: {
     *     // ... data to create a Man
     *   }
     * })
     * 
    **/
    create<T extends manCreateArgs>(
      args: SelectSubset<T, manCreateArgs>
    ): Prisma__manClient<manGetPayload<T>>

    /**
     * Create many Men.
     *     @param {manCreateManyArgs} args - Arguments to create many Men.
     *     @example
     *     // Create many Men
     *     const man = await prisma.man.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends manCreateManyArgs>(
      args?: SelectSubset<T, manCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Man.
     * @param {manDeleteArgs} args - Arguments to delete one Man.
     * @example
     * // Delete one Man
     * const Man = await prisma.man.delete({
     *   where: {
     *     // ... filter to delete one Man
     *   }
     * })
     * 
    **/
    delete<T extends manDeleteArgs>(
      args: SelectSubset<T, manDeleteArgs>
    ): Prisma__manClient<manGetPayload<T>>

    /**
     * Update one Man.
     * @param {manUpdateArgs} args - Arguments to update one Man.
     * @example
     * // Update one Man
     * const man = await prisma.man.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends manUpdateArgs>(
      args: SelectSubset<T, manUpdateArgs>
    ): Prisma__manClient<manGetPayload<T>>

    /**
     * Delete zero or more Men.
     * @param {manDeleteManyArgs} args - Arguments to filter Men to delete.
     * @example
     * // Delete a few Men
     * const { count } = await prisma.man.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends manDeleteManyArgs>(
      args?: SelectSubset<T, manDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Men.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Men
     * const man = await prisma.man.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends manUpdateManyArgs>(
      args: SelectSubset<T, manUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Man.
     * @param {manUpsertArgs} args - Arguments to update or create a Man.
     * @example
     * // Update or create a Man
     * const man = await prisma.man.upsert({
     *   create: {
     *     // ... data to create a Man
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Man we want to update
     *   }
     * })
    **/
    upsert<T extends manUpsertArgs>(
      args: SelectSubset<T, manUpsertArgs>
    ): Prisma__manClient<manGetPayload<T>>

    /**
     * Find one Man that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {manFindUniqueOrThrowArgs} args - Arguments to find a Man
     * @example
     * // Get one Man
     * const man = await prisma.man.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends manFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, manFindUniqueOrThrowArgs>
    ): Prisma__manClient<manGetPayload<T>>

    /**
     * Find the first Man that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manFindFirstOrThrowArgs} args - Arguments to find a Man
     * @example
     * // Get one Man
     * const man = await prisma.man.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends manFindFirstOrThrowArgs>(
      args?: SelectSubset<T, manFindFirstOrThrowArgs>
    ): Prisma__manClient<manGetPayload<T>>

    /**
     * Count the number of Men.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manCountArgs} args - Arguments to filter Men to count.
     * @example
     * // Count the number of Men
     * const count = await prisma.man.count({
     *   where: {
     *     // ... the filter for the Men we want to count
     *   }
     * })
    **/
    count<T extends manCountArgs>(
      args?: Subset<T, manCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Man.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManAggregateArgs>(args: Subset<T, ManAggregateArgs>): PrismaPromise<GetManAggregateType<T>>

    /**
     * Group by Man.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManGroupByArgs['orderBy'] }
        : { orderBy?: ManGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for man.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__manClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * man base type for findUnique actions
   */
  export type manFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * Filter, which man to fetch.
     * 
    **/
    where: manWhereUniqueInput
  }

  /**
   * man: findUnique
   */
  export interface manFindUniqueArgs extends manFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * man base type for findFirst actions
   */
  export type manFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * Filter, which man to fetch.
     * 
    **/
    where?: manWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of men to fetch.
     * 
    **/
    orderBy?: Enumerable<manOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for men.
     * 
    **/
    cursor?: manWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` men from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` men.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of men.
     * 
    **/
    distinct?: Enumerable<ManScalarFieldEnum>
  }

  /**
   * man: findFirst
   */
  export interface manFindFirstArgs extends manFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * man findMany
   */
  export type manFindManyArgs = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * Filter, which men to fetch.
     * 
    **/
    where?: manWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of men to fetch.
     * 
    **/
    orderBy?: Enumerable<manOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing men.
     * 
    **/
    cursor?: manWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` men from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` men.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ManScalarFieldEnum>
  }


  /**
   * man create
   */
  export type manCreateArgs = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * The data needed to create a man.
     * 
    **/
    data: XOR<manCreateInput, manUncheckedCreateInput>
  }


  /**
   * man createMany
   */
  export type manCreateManyArgs = {
    /**
     * The data used to create many men.
     * 
    **/
    data: Enumerable<manCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * man update
   */
  export type manUpdateArgs = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * The data needed to update a man.
     * 
    **/
    data: XOR<manUpdateInput, manUncheckedUpdateInput>
    /**
     * Choose, which man to update.
     * 
    **/
    where: manWhereUniqueInput
  }


  /**
   * man updateMany
   */
  export type manUpdateManyArgs = {
    /**
     * The data used to update men.
     * 
    **/
    data: XOR<manUpdateManyMutationInput, manUncheckedUpdateManyInput>
    /**
     * Filter which men to update
     * 
    **/
    where?: manWhereInput
  }


  /**
   * man upsert
   */
  export type manUpsertArgs = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * The filter to search for the man to update in case it exists.
     * 
    **/
    where: manWhereUniqueInput
    /**
     * In case the man found by the `where` argument doesn't exist, create a new man with this data.
     * 
    **/
    create: XOR<manCreateInput, manUncheckedCreateInput>
    /**
     * In case the man was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<manUpdateInput, manUncheckedUpdateInput>
  }


  /**
   * man delete
   */
  export type manDeleteArgs = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
    /**
     * Filter which man to delete.
     * 
    **/
    where: manWhereUniqueInput
  }


  /**
   * man deleteMany
   */
  export type manDeleteManyArgs = {
    /**
     * Filter which men to delete
     * 
    **/
    where?: manWhereInput
  }


  /**
   * man: findUniqueOrThrow
   */
  export type manFindUniqueOrThrowArgs = manFindUniqueArgsBase
      

  /**
   * man: findFirstOrThrow
   */
  export type manFindFirstOrThrowArgs = manFindFirstArgsBase
      

  /**
   * man without action
   */
  export type manArgs = {
    /**
     * Select specific fields to fetch from the man
     * 
    **/
    select?: manSelect | null
  }



  /**
   * Model mkistat
   */


  export type AggregateMkistat = {
    _count: MkistatCountAggregateOutputType | null
    _avg: MkistatAvgAggregateOutputType | null
    _sum: MkistatSumAggregateOutputType | null
    _min: MkistatMinAggregateOutputType | null
    _max: MkistatMaxAggregateOutputType | null
  }

  export type MkistatAvgAggregateOutputType = {
    MKISTAT_INSTRUMENT_NUMBER: number | null
    MKISTAT_OPEN_PRICE: Decimal | null
    MKISTAT_PUB_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_HIGH_PRICE: Decimal | null
    MKISTAT_LOW_PRICE: Decimal | null
    MKISTAT_CLOSE_PRICE: Decimal | null
    MKISTAT_YDAY_CLOSE_PRICE: Decimal | null
    MKISTAT_TOTAL_TRADES: number | null
    MKISTAT_TOTAL_VOLUME: number | null
    MKISTAT_TOTAL_VALUE: Decimal | null
    MKISTAT_PUBLIC_TOTAL_TRADES: number | null
    MKISTAT_PUBLIC_TOTAL_VOLUME: number | null
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | null
    MKISTAT_SPOT_TOTAL_TRADES: number | null
    MKISTAT_SPOT_TOTAL_VOLUME: number | null
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | null
  }

  export type MkistatSumAggregateOutputType = {
    MKISTAT_INSTRUMENT_NUMBER: number | null
    MKISTAT_OPEN_PRICE: Decimal | null
    MKISTAT_PUB_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_HIGH_PRICE: Decimal | null
    MKISTAT_LOW_PRICE: Decimal | null
    MKISTAT_CLOSE_PRICE: Decimal | null
    MKISTAT_YDAY_CLOSE_PRICE: Decimal | null
    MKISTAT_TOTAL_TRADES: number | null
    MKISTAT_TOTAL_VOLUME: number | null
    MKISTAT_TOTAL_VALUE: Decimal | null
    MKISTAT_PUBLIC_TOTAL_TRADES: number | null
    MKISTAT_PUBLIC_TOTAL_VOLUME: number | null
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | null
    MKISTAT_SPOT_TOTAL_TRADES: number | null
    MKISTAT_SPOT_TOTAL_VOLUME: number | null
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | null
  }

  export type MkistatMinAggregateOutputType = {
    MKISTAT_INSTRUMENT_CODE: string | null
    MKISTAT_INSTRUMENT_NUMBER: number | null
    MKISTAT_QUOTE_BASES: string | null
    MKISTAT_OPEN_PRICE: Decimal | null
    MKISTAT_PUB_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_HIGH_PRICE: Decimal | null
    MKISTAT_LOW_PRICE: Decimal | null
    MKISTAT_CLOSE_PRICE: Decimal | null
    MKISTAT_YDAY_CLOSE_PRICE: Decimal | null
    MKISTAT_TOTAL_TRADES: number | null
    MKISTAT_TOTAL_VOLUME: number | null
    MKISTAT_TOTAL_VALUE: Decimal | null
    MKISTAT_PUBLIC_TOTAL_TRADES: number | null
    MKISTAT_PUBLIC_TOTAL_VOLUME: number | null
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | null
    MKISTAT_SPOT_TOTAL_TRADES: number | null
    MKISTAT_SPOT_TOTAL_VOLUME: number | null
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | null
    MKISTAT_LM_DATE_TIME: Date | null
  }

  export type MkistatMaxAggregateOutputType = {
    MKISTAT_INSTRUMENT_CODE: string | null
    MKISTAT_INSTRUMENT_NUMBER: number | null
    MKISTAT_QUOTE_BASES: string | null
    MKISTAT_OPEN_PRICE: Decimal | null
    MKISTAT_PUB_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | null
    MKISTAT_HIGH_PRICE: Decimal | null
    MKISTAT_LOW_PRICE: Decimal | null
    MKISTAT_CLOSE_PRICE: Decimal | null
    MKISTAT_YDAY_CLOSE_PRICE: Decimal | null
    MKISTAT_TOTAL_TRADES: number | null
    MKISTAT_TOTAL_VOLUME: number | null
    MKISTAT_TOTAL_VALUE: Decimal | null
    MKISTAT_PUBLIC_TOTAL_TRADES: number | null
    MKISTAT_PUBLIC_TOTAL_VOLUME: number | null
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | null
    MKISTAT_SPOT_TOTAL_TRADES: number | null
    MKISTAT_SPOT_TOTAL_VOLUME: number | null
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | null
    MKISTAT_LM_DATE_TIME: Date | null
  }

  export type MkistatCountAggregateOutputType = {
    MKISTAT_INSTRUMENT_CODE: number
    MKISTAT_INSTRUMENT_NUMBER: number
    MKISTAT_QUOTE_BASES: number
    MKISTAT_OPEN_PRICE: number
    MKISTAT_PUB_LAST_TRADED_PRICE: number
    MKISTAT_SPOT_LAST_TRADED_PRICE: number
    MKISTAT_HIGH_PRICE: number
    MKISTAT_LOW_PRICE: number
    MKISTAT_CLOSE_PRICE: number
    MKISTAT_YDAY_CLOSE_PRICE: number
    MKISTAT_TOTAL_TRADES: number
    MKISTAT_TOTAL_VOLUME: number
    MKISTAT_TOTAL_VALUE: number
    MKISTAT_PUBLIC_TOTAL_TRADES: number
    MKISTAT_PUBLIC_TOTAL_VOLUME: number
    MKISTAT_PUBLIC_TOTAL_VALUE: number
    MKISTAT_SPOT_TOTAL_TRADES: number
    MKISTAT_SPOT_TOTAL_VOLUME: number
    MKISTAT_SPOT_TOTAL_VALUE: number
    MKISTAT_LM_DATE_TIME: number
    _all: number
  }


  export type MkistatAvgAggregateInputType = {
    MKISTAT_INSTRUMENT_NUMBER?: true
    MKISTAT_OPEN_PRICE?: true
    MKISTAT_PUB_LAST_TRADED_PRICE?: true
    MKISTAT_SPOT_LAST_TRADED_PRICE?: true
    MKISTAT_HIGH_PRICE?: true
    MKISTAT_LOW_PRICE?: true
    MKISTAT_CLOSE_PRICE?: true
    MKISTAT_YDAY_CLOSE_PRICE?: true
    MKISTAT_TOTAL_TRADES?: true
    MKISTAT_TOTAL_VOLUME?: true
    MKISTAT_TOTAL_VALUE?: true
    MKISTAT_PUBLIC_TOTAL_TRADES?: true
    MKISTAT_PUBLIC_TOTAL_VOLUME?: true
    MKISTAT_PUBLIC_TOTAL_VALUE?: true
    MKISTAT_SPOT_TOTAL_TRADES?: true
    MKISTAT_SPOT_TOTAL_VOLUME?: true
    MKISTAT_SPOT_TOTAL_VALUE?: true
  }

  export type MkistatSumAggregateInputType = {
    MKISTAT_INSTRUMENT_NUMBER?: true
    MKISTAT_OPEN_PRICE?: true
    MKISTAT_PUB_LAST_TRADED_PRICE?: true
    MKISTAT_SPOT_LAST_TRADED_PRICE?: true
    MKISTAT_HIGH_PRICE?: true
    MKISTAT_LOW_PRICE?: true
    MKISTAT_CLOSE_PRICE?: true
    MKISTAT_YDAY_CLOSE_PRICE?: true
    MKISTAT_TOTAL_TRADES?: true
    MKISTAT_TOTAL_VOLUME?: true
    MKISTAT_TOTAL_VALUE?: true
    MKISTAT_PUBLIC_TOTAL_TRADES?: true
    MKISTAT_PUBLIC_TOTAL_VOLUME?: true
    MKISTAT_PUBLIC_TOTAL_VALUE?: true
    MKISTAT_SPOT_TOTAL_TRADES?: true
    MKISTAT_SPOT_TOTAL_VOLUME?: true
    MKISTAT_SPOT_TOTAL_VALUE?: true
  }

  export type MkistatMinAggregateInputType = {
    MKISTAT_INSTRUMENT_CODE?: true
    MKISTAT_INSTRUMENT_NUMBER?: true
    MKISTAT_QUOTE_BASES?: true
    MKISTAT_OPEN_PRICE?: true
    MKISTAT_PUB_LAST_TRADED_PRICE?: true
    MKISTAT_SPOT_LAST_TRADED_PRICE?: true
    MKISTAT_HIGH_PRICE?: true
    MKISTAT_LOW_PRICE?: true
    MKISTAT_CLOSE_PRICE?: true
    MKISTAT_YDAY_CLOSE_PRICE?: true
    MKISTAT_TOTAL_TRADES?: true
    MKISTAT_TOTAL_VOLUME?: true
    MKISTAT_TOTAL_VALUE?: true
    MKISTAT_PUBLIC_TOTAL_TRADES?: true
    MKISTAT_PUBLIC_TOTAL_VOLUME?: true
    MKISTAT_PUBLIC_TOTAL_VALUE?: true
    MKISTAT_SPOT_TOTAL_TRADES?: true
    MKISTAT_SPOT_TOTAL_VOLUME?: true
    MKISTAT_SPOT_TOTAL_VALUE?: true
    MKISTAT_LM_DATE_TIME?: true
  }

  export type MkistatMaxAggregateInputType = {
    MKISTAT_INSTRUMENT_CODE?: true
    MKISTAT_INSTRUMENT_NUMBER?: true
    MKISTAT_QUOTE_BASES?: true
    MKISTAT_OPEN_PRICE?: true
    MKISTAT_PUB_LAST_TRADED_PRICE?: true
    MKISTAT_SPOT_LAST_TRADED_PRICE?: true
    MKISTAT_HIGH_PRICE?: true
    MKISTAT_LOW_PRICE?: true
    MKISTAT_CLOSE_PRICE?: true
    MKISTAT_YDAY_CLOSE_PRICE?: true
    MKISTAT_TOTAL_TRADES?: true
    MKISTAT_TOTAL_VOLUME?: true
    MKISTAT_TOTAL_VALUE?: true
    MKISTAT_PUBLIC_TOTAL_TRADES?: true
    MKISTAT_PUBLIC_TOTAL_VOLUME?: true
    MKISTAT_PUBLIC_TOTAL_VALUE?: true
    MKISTAT_SPOT_TOTAL_TRADES?: true
    MKISTAT_SPOT_TOTAL_VOLUME?: true
    MKISTAT_SPOT_TOTAL_VALUE?: true
    MKISTAT_LM_DATE_TIME?: true
  }

  export type MkistatCountAggregateInputType = {
    MKISTAT_INSTRUMENT_CODE?: true
    MKISTAT_INSTRUMENT_NUMBER?: true
    MKISTAT_QUOTE_BASES?: true
    MKISTAT_OPEN_PRICE?: true
    MKISTAT_PUB_LAST_TRADED_PRICE?: true
    MKISTAT_SPOT_LAST_TRADED_PRICE?: true
    MKISTAT_HIGH_PRICE?: true
    MKISTAT_LOW_PRICE?: true
    MKISTAT_CLOSE_PRICE?: true
    MKISTAT_YDAY_CLOSE_PRICE?: true
    MKISTAT_TOTAL_TRADES?: true
    MKISTAT_TOTAL_VOLUME?: true
    MKISTAT_TOTAL_VALUE?: true
    MKISTAT_PUBLIC_TOTAL_TRADES?: true
    MKISTAT_PUBLIC_TOTAL_VOLUME?: true
    MKISTAT_PUBLIC_TOTAL_VALUE?: true
    MKISTAT_SPOT_TOTAL_TRADES?: true
    MKISTAT_SPOT_TOTAL_VOLUME?: true
    MKISTAT_SPOT_TOTAL_VALUE?: true
    MKISTAT_LM_DATE_TIME?: true
    _all?: true
  }

  export type MkistatAggregateArgs = {
    /**
     * Filter which mkistat to aggregate.
     * 
    **/
    where?: mkistatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mkistats to fetch.
     * 
    **/
    orderBy?: Enumerable<mkistatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: mkistatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mkistats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mkistats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mkistats
    **/
    _count?: true | MkistatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MkistatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MkistatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MkistatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MkistatMaxAggregateInputType
  }

  export type GetMkistatAggregateType<T extends MkistatAggregateArgs> = {
        [P in keyof T & keyof AggregateMkistat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMkistat[P]>
      : GetScalarType<T[P], AggregateMkistat[P]>
  }




  export type MkistatGroupByArgs = {
    where?: mkistatWhereInput
    orderBy?: Enumerable<mkistatOrderByWithAggregationInput>
    by: Array<MkistatScalarFieldEnum>
    having?: mkistatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MkistatCountAggregateInputType | true
    _avg?: MkistatAvgAggregateInputType
    _sum?: MkistatSumAggregateInputType
    _min?: MkistatMinAggregateInputType
    _max?: MkistatMaxAggregateInputType
  }


  export type MkistatGroupByOutputType = {
    MKISTAT_INSTRUMENT_CODE: string
    MKISTAT_INSTRUMENT_NUMBER: number
    MKISTAT_QUOTE_BASES: string
    MKISTAT_OPEN_PRICE: Decimal
    MKISTAT_PUB_LAST_TRADED_PRICE: Decimal
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal
    MKISTAT_HIGH_PRICE: Decimal
    MKISTAT_LOW_PRICE: Decimal
    MKISTAT_CLOSE_PRICE: Decimal
    MKISTAT_YDAY_CLOSE_PRICE: Decimal
    MKISTAT_TOTAL_TRADES: number
    MKISTAT_TOTAL_VOLUME: number
    MKISTAT_TOTAL_VALUE: Decimal
    MKISTAT_PUBLIC_TOTAL_TRADES: number
    MKISTAT_PUBLIC_TOTAL_VOLUME: number
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal
    MKISTAT_SPOT_TOTAL_TRADES: number
    MKISTAT_SPOT_TOTAL_VOLUME: number
    MKISTAT_SPOT_TOTAL_VALUE: Decimal
    MKISTAT_LM_DATE_TIME: Date
    _count: MkistatCountAggregateOutputType | null
    _avg: MkistatAvgAggregateOutputType | null
    _sum: MkistatSumAggregateOutputType | null
    _min: MkistatMinAggregateOutputType | null
    _max: MkistatMaxAggregateOutputType | null
  }

  type GetMkistatGroupByPayload<T extends MkistatGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MkistatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MkistatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MkistatGroupByOutputType[P]>
            : GetScalarType<T[P], MkistatGroupByOutputType[P]>
        }
      >
    >


  export type mkistatSelect = {
    MKISTAT_INSTRUMENT_CODE?: boolean
    MKISTAT_INSTRUMENT_NUMBER?: boolean
    MKISTAT_QUOTE_BASES?: boolean
    MKISTAT_OPEN_PRICE?: boolean
    MKISTAT_PUB_LAST_TRADED_PRICE?: boolean
    MKISTAT_SPOT_LAST_TRADED_PRICE?: boolean
    MKISTAT_HIGH_PRICE?: boolean
    MKISTAT_LOW_PRICE?: boolean
    MKISTAT_CLOSE_PRICE?: boolean
    MKISTAT_YDAY_CLOSE_PRICE?: boolean
    MKISTAT_TOTAL_TRADES?: boolean
    MKISTAT_TOTAL_VOLUME?: boolean
    MKISTAT_TOTAL_VALUE?: boolean
    MKISTAT_PUBLIC_TOTAL_TRADES?: boolean
    MKISTAT_PUBLIC_TOTAL_VOLUME?: boolean
    MKISTAT_PUBLIC_TOTAL_VALUE?: boolean
    MKISTAT_SPOT_TOTAL_TRADES?: boolean
    MKISTAT_SPOT_TOTAL_VOLUME?: boolean
    MKISTAT_SPOT_TOTAL_VALUE?: boolean
    MKISTAT_LM_DATE_TIME?: boolean
  }


  export type mkistatGetPayload<S extends boolean | null | undefined | mkistatArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mkistat :
    S extends undefined ? never :
    S extends { include: any } & (mkistatArgs | mkistatFindManyArgs)
    ? mkistat 
    : S extends { select: any } & (mkistatArgs | mkistatFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof mkistat ? mkistat[P] : never
  } 
      : mkistat


  type mkistatCountArgs = Merge<
    Omit<mkistatFindManyArgs, 'select' | 'include'> & {
      select?: MkistatCountAggregateInputType | true
    }
  >

  export interface mkistatDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mkistat that matches the filter.
     * @param {mkistatFindUniqueArgs} args - Arguments to find a Mkistat
     * @example
     * // Get one Mkistat
     * const mkistat = await prisma.mkistat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mkistatFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mkistatFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mkistat'> extends True ? Prisma__mkistatClient<mkistatGetPayload<T>> : Prisma__mkistatClient<mkistatGetPayload<T> | null, null>

    /**
     * Find the first Mkistat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mkistatFindFirstArgs} args - Arguments to find a Mkistat
     * @example
     * // Get one Mkistat
     * const mkistat = await prisma.mkistat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mkistatFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mkistatFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mkistat'> extends True ? Prisma__mkistatClient<mkistatGetPayload<T>> : Prisma__mkistatClient<mkistatGetPayload<T> | null, null>

    /**
     * Find zero or more Mkistats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mkistatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mkistats
     * const mkistats = await prisma.mkistat.findMany()
     * 
     * // Get first 10 Mkistats
     * const mkistats = await prisma.mkistat.findMany({ take: 10 })
     * 
     * // Only select the `MKISTAT_INSTRUMENT_CODE`
     * const mkistatWithMKISTAT_INSTRUMENT_CODEOnly = await prisma.mkistat.findMany({ select: { MKISTAT_INSTRUMENT_CODE: true } })
     * 
    **/
    findMany<T extends mkistatFindManyArgs>(
      args?: SelectSubset<T, mkistatFindManyArgs>
    ): PrismaPromise<Array<mkistatGetPayload<T>>>

    /**
     * Create a Mkistat.
     * @param {mkistatCreateArgs} args - Arguments to create a Mkistat.
     * @example
     * // Create one Mkistat
     * const Mkistat = await prisma.mkistat.create({
     *   data: {
     *     // ... data to create a Mkistat
     *   }
     * })
     * 
    **/
    create<T extends mkistatCreateArgs>(
      args: SelectSubset<T, mkistatCreateArgs>
    ): Prisma__mkistatClient<mkistatGetPayload<T>>

    /**
     * Create many Mkistats.
     *     @param {mkistatCreateManyArgs} args - Arguments to create many Mkistats.
     *     @example
     *     // Create many Mkistats
     *     const mkistat = await prisma.mkistat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mkistatCreateManyArgs>(
      args?: SelectSubset<T, mkistatCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mkistat.
     * @param {mkistatDeleteArgs} args - Arguments to delete one Mkistat.
     * @example
     * // Delete one Mkistat
     * const Mkistat = await prisma.mkistat.delete({
     *   where: {
     *     // ... filter to delete one Mkistat
     *   }
     * })
     * 
    **/
    delete<T extends mkistatDeleteArgs>(
      args: SelectSubset<T, mkistatDeleteArgs>
    ): Prisma__mkistatClient<mkistatGetPayload<T>>

    /**
     * Update one Mkistat.
     * @param {mkistatUpdateArgs} args - Arguments to update one Mkistat.
     * @example
     * // Update one Mkistat
     * const mkistat = await prisma.mkistat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mkistatUpdateArgs>(
      args: SelectSubset<T, mkistatUpdateArgs>
    ): Prisma__mkistatClient<mkistatGetPayload<T>>

    /**
     * Delete zero or more Mkistats.
     * @param {mkistatDeleteManyArgs} args - Arguments to filter Mkistats to delete.
     * @example
     * // Delete a few Mkistats
     * const { count } = await prisma.mkistat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mkistatDeleteManyArgs>(
      args?: SelectSubset<T, mkistatDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mkistats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mkistatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mkistats
     * const mkistat = await prisma.mkistat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mkistatUpdateManyArgs>(
      args: SelectSubset<T, mkistatUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mkistat.
     * @param {mkistatUpsertArgs} args - Arguments to update or create a Mkistat.
     * @example
     * // Update or create a Mkistat
     * const mkistat = await prisma.mkistat.upsert({
     *   create: {
     *     // ... data to create a Mkistat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mkistat we want to update
     *   }
     * })
    **/
    upsert<T extends mkistatUpsertArgs>(
      args: SelectSubset<T, mkistatUpsertArgs>
    ): Prisma__mkistatClient<mkistatGetPayload<T>>

    /**
     * Find one Mkistat that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {mkistatFindUniqueOrThrowArgs} args - Arguments to find a Mkistat
     * @example
     * // Get one Mkistat
     * const mkistat = await prisma.mkistat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mkistatFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mkistatFindUniqueOrThrowArgs>
    ): Prisma__mkistatClient<mkistatGetPayload<T>>

    /**
     * Find the first Mkistat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mkistatFindFirstOrThrowArgs} args - Arguments to find a Mkistat
     * @example
     * // Get one Mkistat
     * const mkistat = await prisma.mkistat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mkistatFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mkistatFindFirstOrThrowArgs>
    ): Prisma__mkistatClient<mkistatGetPayload<T>>

    /**
     * Count the number of Mkistats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mkistatCountArgs} args - Arguments to filter Mkistats to count.
     * @example
     * // Count the number of Mkistats
     * const count = await prisma.mkistat.count({
     *   where: {
     *     // ... the filter for the Mkistats we want to count
     *   }
     * })
    **/
    count<T extends mkistatCountArgs>(
      args?: Subset<T, mkistatCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MkistatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mkistat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MkistatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MkistatAggregateArgs>(args: Subset<T, MkistatAggregateArgs>): PrismaPromise<GetMkistatAggregateType<T>>

    /**
     * Group by Mkistat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MkistatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MkistatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MkistatGroupByArgs['orderBy'] }
        : { orderBy?: MkistatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MkistatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMkistatGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mkistat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mkistatClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mkistat base type for findUnique actions
   */
  export type mkistatFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * Filter, which mkistat to fetch.
     * 
    **/
    where: mkistatWhereUniqueInput
  }

  /**
   * mkistat: findUnique
   */
  export interface mkistatFindUniqueArgs extends mkistatFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mkistat base type for findFirst actions
   */
  export type mkistatFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * Filter, which mkistat to fetch.
     * 
    **/
    where?: mkistatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mkistats to fetch.
     * 
    **/
    orderBy?: Enumerable<mkistatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mkistats.
     * 
    **/
    cursor?: mkistatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mkistats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mkistats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mkistats.
     * 
    **/
    distinct?: Enumerable<MkistatScalarFieldEnum>
  }

  /**
   * mkistat: findFirst
   */
  export interface mkistatFindFirstArgs extends mkistatFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mkistat findMany
   */
  export type mkistatFindManyArgs = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * Filter, which mkistats to fetch.
     * 
    **/
    where?: mkistatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mkistats to fetch.
     * 
    **/
    orderBy?: Enumerable<mkistatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mkistats.
     * 
    **/
    cursor?: mkistatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mkistats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mkistats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MkistatScalarFieldEnum>
  }


  /**
   * mkistat create
   */
  export type mkistatCreateArgs = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * The data needed to create a mkistat.
     * 
    **/
    data: XOR<mkistatCreateInput, mkistatUncheckedCreateInput>
  }


  /**
   * mkistat createMany
   */
  export type mkistatCreateManyArgs = {
    /**
     * The data used to create many mkistats.
     * 
    **/
    data: Enumerable<mkistatCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mkistat update
   */
  export type mkistatUpdateArgs = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * The data needed to update a mkistat.
     * 
    **/
    data: XOR<mkistatUpdateInput, mkistatUncheckedUpdateInput>
    /**
     * Choose, which mkistat to update.
     * 
    **/
    where: mkistatWhereUniqueInput
  }


  /**
   * mkistat updateMany
   */
  export type mkistatUpdateManyArgs = {
    /**
     * The data used to update mkistats.
     * 
    **/
    data: XOR<mkistatUpdateManyMutationInput, mkistatUncheckedUpdateManyInput>
    /**
     * Filter which mkistats to update
     * 
    **/
    where?: mkistatWhereInput
  }


  /**
   * mkistat upsert
   */
  export type mkistatUpsertArgs = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * The filter to search for the mkistat to update in case it exists.
     * 
    **/
    where: mkistatWhereUniqueInput
    /**
     * In case the mkistat found by the `where` argument doesn't exist, create a new mkistat with this data.
     * 
    **/
    create: XOR<mkistatCreateInput, mkistatUncheckedCreateInput>
    /**
     * In case the mkistat was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<mkistatUpdateInput, mkistatUncheckedUpdateInput>
  }


  /**
   * mkistat delete
   */
  export type mkistatDeleteArgs = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
    /**
     * Filter which mkistat to delete.
     * 
    **/
    where: mkistatWhereUniqueInput
  }


  /**
   * mkistat deleteMany
   */
  export type mkistatDeleteManyArgs = {
    /**
     * Filter which mkistats to delete
     * 
    **/
    where?: mkistatWhereInput
  }


  /**
   * mkistat: findUniqueOrThrow
   */
  export type mkistatFindUniqueOrThrowArgs = mkistatFindUniqueArgsBase
      

  /**
   * mkistat: findFirstOrThrow
   */
  export type mkistatFindFirstOrThrowArgs = mkistatFindFirstArgsBase
      

  /**
   * mkistat without action
   */
  export type mkistatArgs = {
    /**
     * Select specific fields to fetch from the mkistat
     * 
    **/
    select?: mkistatSelect | null
  }



  /**
   * Model stats
   */


  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  export type StatsAvgAggregateOutputType = {
    STATS_BUYPRICE: Decimal | null
    STATS_BUYVOLUME: number | null
    STATS_BUYDVPVOLUME: number | null
    STATS_SELLPRICE: Decimal | null
    STATS_SELLVOLUME: number | null
    STATS_SELLDVPVOLUME: number | null
    id: number | null
  }

  export type StatsSumAggregateOutputType = {
    STATS_BUYPRICE: Decimal | null
    STATS_BUYVOLUME: number | null
    STATS_BUYDVPVOLUME: number | null
    STATS_SELLPRICE: Decimal | null
    STATS_SELLVOLUME: number | null
    STATS_SELLDVPVOLUME: number | null
    id: number | null
  }

  export type StatsMinAggregateOutputType = {
    STATS_INSTRUMENT_CODE: string | null
    STATS_BUYPRICE: Decimal | null
    STATS_BUYVOLUME: number | null
    STATS_BUYDVPVOLUME: number | null
    STATS_SELLPRICE: Decimal | null
    STATS_SELLVOLUME: number | null
    STATS_SELLDVPVOLUME: number | null
    trd_date: Date | null
    id: number | null
  }

  export type StatsMaxAggregateOutputType = {
    STATS_INSTRUMENT_CODE: string | null
    STATS_BUYPRICE: Decimal | null
    STATS_BUYVOLUME: number | null
    STATS_BUYDVPVOLUME: number | null
    STATS_SELLPRICE: Decimal | null
    STATS_SELLVOLUME: number | null
    STATS_SELLDVPVOLUME: number | null
    trd_date: Date | null
    id: number | null
  }

  export type StatsCountAggregateOutputType = {
    STATS_INSTRUMENT_CODE: number
    STATS_BUYPRICE: number
    STATS_BUYVOLUME: number
    STATS_BUYDVPVOLUME: number
    STATS_SELLPRICE: number
    STATS_SELLVOLUME: number
    STATS_SELLDVPVOLUME: number
    trd_date: number
    id: number
    _all: number
  }


  export type StatsAvgAggregateInputType = {
    STATS_BUYPRICE?: true
    STATS_BUYVOLUME?: true
    STATS_BUYDVPVOLUME?: true
    STATS_SELLPRICE?: true
    STATS_SELLVOLUME?: true
    STATS_SELLDVPVOLUME?: true
    id?: true
  }

  export type StatsSumAggregateInputType = {
    STATS_BUYPRICE?: true
    STATS_BUYVOLUME?: true
    STATS_BUYDVPVOLUME?: true
    STATS_SELLPRICE?: true
    STATS_SELLVOLUME?: true
    STATS_SELLDVPVOLUME?: true
    id?: true
  }

  export type StatsMinAggregateInputType = {
    STATS_INSTRUMENT_CODE?: true
    STATS_BUYPRICE?: true
    STATS_BUYVOLUME?: true
    STATS_BUYDVPVOLUME?: true
    STATS_SELLPRICE?: true
    STATS_SELLVOLUME?: true
    STATS_SELLDVPVOLUME?: true
    trd_date?: true
    id?: true
  }

  export type StatsMaxAggregateInputType = {
    STATS_INSTRUMENT_CODE?: true
    STATS_BUYPRICE?: true
    STATS_BUYVOLUME?: true
    STATS_BUYDVPVOLUME?: true
    STATS_SELLPRICE?: true
    STATS_SELLVOLUME?: true
    STATS_SELLDVPVOLUME?: true
    trd_date?: true
    id?: true
  }

  export type StatsCountAggregateInputType = {
    STATS_INSTRUMENT_CODE?: true
    STATS_BUYPRICE?: true
    STATS_BUYVOLUME?: true
    STATS_BUYDVPVOLUME?: true
    STATS_SELLPRICE?: true
    STATS_SELLVOLUME?: true
    STATS_SELLDVPVOLUME?: true
    trd_date?: true
    id?: true
    _all?: true
  }

  export type StatsAggregateArgs = {
    /**
     * Filter which stats to aggregate.
     * 
    **/
    where?: statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats to fetch.
     * 
    **/
    orderBy?: Enumerable<statsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stats
    **/
    _count?: true | StatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsMaxAggregateInputType
  }

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
        [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>
  }




  export type StatsGroupByArgs = {
    where?: statsWhereInput
    orderBy?: Enumerable<statsOrderByWithAggregationInput>
    by: Array<StatsScalarFieldEnum>
    having?: statsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsCountAggregateInputType | true
    _avg?: StatsAvgAggregateInputType
    _sum?: StatsSumAggregateInputType
    _min?: StatsMinAggregateInputType
    _max?: StatsMaxAggregateInputType
  }


  export type StatsGroupByOutputType = {
    STATS_INSTRUMENT_CODE: string
    STATS_BUYPRICE: Decimal
    STATS_BUYVOLUME: number
    STATS_BUYDVPVOLUME: number
    STATS_SELLPRICE: Decimal
    STATS_SELLVOLUME: number
    STATS_SELLDVPVOLUME: number
    trd_date: Date
    id: number
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>
        }
      >
    >


  export type statsSelect = {
    STATS_INSTRUMENT_CODE?: boolean
    STATS_BUYPRICE?: boolean
    STATS_BUYVOLUME?: boolean
    STATS_BUYDVPVOLUME?: boolean
    STATS_SELLPRICE?: boolean
    STATS_SELLVOLUME?: boolean
    STATS_SELLDVPVOLUME?: boolean
    trd_date?: boolean
    id?: boolean
  }


  export type statsGetPayload<S extends boolean | null | undefined | statsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? stats :
    S extends undefined ? never :
    S extends { include: any } & (statsArgs | statsFindManyArgs)
    ? stats 
    : S extends { select: any } & (statsArgs | statsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof stats ? stats[P] : never
  } 
      : stats


  type statsCountArgs = Merge<
    Omit<statsFindManyArgs, 'select' | 'include'> & {
      select?: StatsCountAggregateInputType | true
    }
  >

  export interface statsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Stats that matches the filter.
     * @param {statsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, statsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'stats'> extends True ? Prisma__statsClient<statsGetPayload<T>> : Prisma__statsClient<statsGetPayload<T> | null, null>

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, statsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'stats'> extends True ? Prisma__statsClient<statsGetPayload<T>> : Prisma__statsClient<statsGetPayload<T> | null, null>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     * 
     * // Only select the `STATS_INSTRUMENT_CODE`
     * const statsWithSTATS_INSTRUMENT_CODEOnly = await prisma.stats.findMany({ select: { STATS_INSTRUMENT_CODE: true } })
     * 
    **/
    findMany<T extends statsFindManyArgs>(
      args?: SelectSubset<T, statsFindManyArgs>
    ): PrismaPromise<Array<statsGetPayload<T>>>

    /**
     * Create a Stats.
     * @param {statsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     * 
    **/
    create<T extends statsCreateArgs>(
      args: SelectSubset<T, statsCreateArgs>
    ): Prisma__statsClient<statsGetPayload<T>>

    /**
     * Create many Stats.
     *     @param {statsCreateManyArgs} args - Arguments to create many Stats.
     *     @example
     *     // Create many Stats
     *     const stats = await prisma.stats.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statsCreateManyArgs>(
      args?: SelectSubset<T, statsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Stats.
     * @param {statsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     * 
    **/
    delete<T extends statsDeleteArgs>(
      args: SelectSubset<T, statsDeleteArgs>
    ): Prisma__statsClient<statsGetPayload<T>>

    /**
     * Update one Stats.
     * @param {statsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statsUpdateArgs>(
      args: SelectSubset<T, statsUpdateArgs>
    ): Prisma__statsClient<statsGetPayload<T>>

    /**
     * Delete zero or more Stats.
     * @param {statsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statsDeleteManyArgs>(
      args?: SelectSubset<T, statsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statsUpdateManyArgs>(
      args: SelectSubset<T, statsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Stats.
     * @param {statsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
    **/
    upsert<T extends statsUpsertArgs>(
      args: SelectSubset<T, statsUpsertArgs>
    ): Prisma__statsClient<statsGetPayload<T>>

    /**
     * Find one Stats that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {statsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends statsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, statsFindUniqueOrThrowArgs>
    ): Prisma__statsClient<statsGetPayload<T>>

    /**
     * Find the first Stats that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends statsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, statsFindFirstOrThrowArgs>
    ): Prisma__statsClient<statsGetPayload<T>>

    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends statsCountArgs>(
      args?: Subset<T, statsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsAggregateArgs>(args: Subset<T, StatsAggregateArgs>): PrismaPromise<GetStatsAggregateType<T>>

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsGroupByArgs['orderBy'] }
        : { orderBy?: StatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__statsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * stats base type for findUnique actions
   */
  export type statsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * Filter, which stats to fetch.
     * 
    **/
    where: statsWhereUniqueInput
  }

  /**
   * stats: findUnique
   */
  export interface statsFindUniqueArgs extends statsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * stats base type for findFirst actions
   */
  export type statsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * Filter, which stats to fetch.
     * 
    **/
    where?: statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats to fetch.
     * 
    **/
    orderBy?: Enumerable<statsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stats.
     * 
    **/
    cursor?: statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stats.
     * 
    **/
    distinct?: Enumerable<StatsScalarFieldEnum>
  }

  /**
   * stats: findFirst
   */
  export interface statsFindFirstArgs extends statsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * stats findMany
   */
  export type statsFindManyArgs = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * Filter, which stats to fetch.
     * 
    **/
    where?: statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats to fetch.
     * 
    **/
    orderBy?: Enumerable<statsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stats.
     * 
    **/
    cursor?: statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StatsScalarFieldEnum>
  }


  /**
   * stats create
   */
  export type statsCreateArgs = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * The data needed to create a stats.
     * 
    **/
    data: XOR<statsCreateInput, statsUncheckedCreateInput>
  }


  /**
   * stats createMany
   */
  export type statsCreateManyArgs = {
    /**
     * The data used to create many stats.
     * 
    **/
    data: Enumerable<statsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * stats update
   */
  export type statsUpdateArgs = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * The data needed to update a stats.
     * 
    **/
    data: XOR<statsUpdateInput, statsUncheckedUpdateInput>
    /**
     * Choose, which stats to update.
     * 
    **/
    where: statsWhereUniqueInput
  }


  /**
   * stats updateMany
   */
  export type statsUpdateManyArgs = {
    /**
     * The data used to update stats.
     * 
    **/
    data: XOR<statsUpdateManyMutationInput, statsUncheckedUpdateManyInput>
    /**
     * Filter which stats to update
     * 
    **/
    where?: statsWhereInput
  }


  /**
   * stats upsert
   */
  export type statsUpsertArgs = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * The filter to search for the stats to update in case it exists.
     * 
    **/
    where: statsWhereUniqueInput
    /**
     * In case the stats found by the `where` argument doesn't exist, create a new stats with this data.
     * 
    **/
    create: XOR<statsCreateInput, statsUncheckedCreateInput>
    /**
     * In case the stats was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<statsUpdateInput, statsUncheckedUpdateInput>
  }


  /**
   * stats delete
   */
  export type statsDeleteArgs = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
    /**
     * Filter which stats to delete.
     * 
    **/
    where: statsWhereUniqueInput
  }


  /**
   * stats deleteMany
   */
  export type statsDeleteManyArgs = {
    /**
     * Filter which stats to delete
     * 
    **/
    where?: statsWhereInput
  }


  /**
   * stats: findUniqueOrThrow
   */
  export type statsFindUniqueOrThrowArgs = statsFindUniqueArgsBase
      

  /**
   * stats: findFirstOrThrow
   */
  export type statsFindFirstOrThrowArgs = statsFindFirstArgsBase
      

  /**
   * stats without action
   */
  export type statsArgs = {
    /**
     * Select specific fields to fetch from the stats
     * 
    **/
    select?: statsSelect | null
  }



  /**
   * Model trd
   */


  export type AggregateTrd = {
    _count: TrdCountAggregateOutputType | null
    _avg: TrdAvgAggregateOutputType | null
    _sum: TrdSumAggregateOutputType | null
    _min: TrdMinAggregateOutputType | null
    _max: TrdMaxAggregateOutputType | null
  }

  export type TrdAvgAggregateOutputType = {
    TRD_TOTAL_TRADES: number | null
    TRD_TOTAL_VOLUME: number | null
    TRD_TOTAL_VALUE: number | null
    id: number | null
  }

  export type TrdSumAggregateOutputType = {
    TRD_TOTAL_TRADES: number | null
    TRD_TOTAL_VOLUME: number | null
    TRD_TOTAL_VALUE: number | null
    id: number | null
  }

  export type TrdMinAggregateOutputType = {
    TRD_SNO: string | null
    TRD_TOTAL_TRADES: number | null
    TRD_TOTAL_VOLUME: number | null
    TRD_TOTAL_VALUE: number | null
    TRD_LM_DATE_TIME: string | null
    id: number | null
  }

  export type TrdMaxAggregateOutputType = {
    TRD_SNO: string | null
    TRD_TOTAL_TRADES: number | null
    TRD_TOTAL_VOLUME: number | null
    TRD_TOTAL_VALUE: number | null
    TRD_LM_DATE_TIME: string | null
    id: number | null
  }

  export type TrdCountAggregateOutputType = {
    TRD_SNO: number
    TRD_TOTAL_TRADES: number
    TRD_TOTAL_VOLUME: number
    TRD_TOTAL_VALUE: number
    TRD_LM_DATE_TIME: number
    id: number
    _all: number
  }


  export type TrdAvgAggregateInputType = {
    TRD_TOTAL_TRADES?: true
    TRD_TOTAL_VOLUME?: true
    TRD_TOTAL_VALUE?: true
    id?: true
  }

  export type TrdSumAggregateInputType = {
    TRD_TOTAL_TRADES?: true
    TRD_TOTAL_VOLUME?: true
    TRD_TOTAL_VALUE?: true
    id?: true
  }

  export type TrdMinAggregateInputType = {
    TRD_SNO?: true
    TRD_TOTAL_TRADES?: true
    TRD_TOTAL_VOLUME?: true
    TRD_TOTAL_VALUE?: true
    TRD_LM_DATE_TIME?: true
    id?: true
  }

  export type TrdMaxAggregateInputType = {
    TRD_SNO?: true
    TRD_TOTAL_TRADES?: true
    TRD_TOTAL_VOLUME?: true
    TRD_TOTAL_VALUE?: true
    TRD_LM_DATE_TIME?: true
    id?: true
  }

  export type TrdCountAggregateInputType = {
    TRD_SNO?: true
    TRD_TOTAL_TRADES?: true
    TRD_TOTAL_VOLUME?: true
    TRD_TOTAL_VALUE?: true
    TRD_LM_DATE_TIME?: true
    id?: true
    _all?: true
  }

  export type TrdAggregateArgs = {
    /**
     * Filter which trd to aggregate.
     * 
    **/
    where?: trdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trds to fetch.
     * 
    **/
    orderBy?: Enumerable<trdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: trdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trds
    **/
    _count?: true | TrdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrdMaxAggregateInputType
  }

  export type GetTrdAggregateType<T extends TrdAggregateArgs> = {
        [P in keyof T & keyof AggregateTrd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrd[P]>
      : GetScalarType<T[P], AggregateTrd[P]>
  }




  export type TrdGroupByArgs = {
    where?: trdWhereInput
    orderBy?: Enumerable<trdOrderByWithAggregationInput>
    by: Array<TrdScalarFieldEnum>
    having?: trdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrdCountAggregateInputType | true
    _avg?: TrdAvgAggregateInputType
    _sum?: TrdSumAggregateInputType
    _min?: TrdMinAggregateInputType
    _max?: TrdMaxAggregateInputType
  }


  export type TrdGroupByOutputType = {
    TRD_SNO: string | null
    TRD_TOTAL_TRADES: number
    TRD_TOTAL_VOLUME: number
    TRD_TOTAL_VALUE: number | null
    TRD_LM_DATE_TIME: string | null
    id: number
    _count: TrdCountAggregateOutputType | null
    _avg: TrdAvgAggregateOutputType | null
    _sum: TrdSumAggregateOutputType | null
    _min: TrdMinAggregateOutputType | null
    _max: TrdMaxAggregateOutputType | null
  }

  type GetTrdGroupByPayload<T extends TrdGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TrdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrdGroupByOutputType[P]>
            : GetScalarType<T[P], TrdGroupByOutputType[P]>
        }
      >
    >


  export type trdSelect = {
    TRD_SNO?: boolean
    TRD_TOTAL_TRADES?: boolean
    TRD_TOTAL_VOLUME?: boolean
    TRD_TOTAL_VALUE?: boolean
    TRD_LM_DATE_TIME?: boolean
    id?: boolean
  }


  export type trdGetPayload<S extends boolean | null | undefined | trdArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? trd :
    S extends undefined ? never :
    S extends { include: any } & (trdArgs | trdFindManyArgs)
    ? trd 
    : S extends { select: any } & (trdArgs | trdFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof trd ? trd[P] : never
  } 
      : trd


  type trdCountArgs = Merge<
    Omit<trdFindManyArgs, 'select' | 'include'> & {
      select?: TrdCountAggregateInputType | true
    }
  >

  export interface trdDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Trd that matches the filter.
     * @param {trdFindUniqueArgs} args - Arguments to find a Trd
     * @example
     * // Get one Trd
     * const trd = await prisma.trd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends trdFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, trdFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'trd'> extends True ? Prisma__trdClient<trdGetPayload<T>> : Prisma__trdClient<trdGetPayload<T> | null, null>

    /**
     * Find the first Trd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trdFindFirstArgs} args - Arguments to find a Trd
     * @example
     * // Get one Trd
     * const trd = await prisma.trd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends trdFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, trdFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'trd'> extends True ? Prisma__trdClient<trdGetPayload<T>> : Prisma__trdClient<trdGetPayload<T> | null, null>

    /**
     * Find zero or more Trds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trds
     * const trds = await prisma.trd.findMany()
     * 
     * // Get first 10 Trds
     * const trds = await prisma.trd.findMany({ take: 10 })
     * 
     * // Only select the `TRD_SNO`
     * const trdWithTRD_SNOOnly = await prisma.trd.findMany({ select: { TRD_SNO: true } })
     * 
    **/
    findMany<T extends trdFindManyArgs>(
      args?: SelectSubset<T, trdFindManyArgs>
    ): PrismaPromise<Array<trdGetPayload<T>>>

    /**
     * Create a Trd.
     * @param {trdCreateArgs} args - Arguments to create a Trd.
     * @example
     * // Create one Trd
     * const Trd = await prisma.trd.create({
     *   data: {
     *     // ... data to create a Trd
     *   }
     * })
     * 
    **/
    create<T extends trdCreateArgs>(
      args: SelectSubset<T, trdCreateArgs>
    ): Prisma__trdClient<trdGetPayload<T>>

    /**
     * Create many Trds.
     *     @param {trdCreateManyArgs} args - Arguments to create many Trds.
     *     @example
     *     // Create many Trds
     *     const trd = await prisma.trd.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends trdCreateManyArgs>(
      args?: SelectSubset<T, trdCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Trd.
     * @param {trdDeleteArgs} args - Arguments to delete one Trd.
     * @example
     * // Delete one Trd
     * const Trd = await prisma.trd.delete({
     *   where: {
     *     // ... filter to delete one Trd
     *   }
     * })
     * 
    **/
    delete<T extends trdDeleteArgs>(
      args: SelectSubset<T, trdDeleteArgs>
    ): Prisma__trdClient<trdGetPayload<T>>

    /**
     * Update one Trd.
     * @param {trdUpdateArgs} args - Arguments to update one Trd.
     * @example
     * // Update one Trd
     * const trd = await prisma.trd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends trdUpdateArgs>(
      args: SelectSubset<T, trdUpdateArgs>
    ): Prisma__trdClient<trdGetPayload<T>>

    /**
     * Delete zero or more Trds.
     * @param {trdDeleteManyArgs} args - Arguments to filter Trds to delete.
     * @example
     * // Delete a few Trds
     * const { count } = await prisma.trd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends trdDeleteManyArgs>(
      args?: SelectSubset<T, trdDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trds
     * const trd = await prisma.trd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends trdUpdateManyArgs>(
      args: SelectSubset<T, trdUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Trd.
     * @param {trdUpsertArgs} args - Arguments to update or create a Trd.
     * @example
     * // Update or create a Trd
     * const trd = await prisma.trd.upsert({
     *   create: {
     *     // ... data to create a Trd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trd we want to update
     *   }
     * })
    **/
    upsert<T extends trdUpsertArgs>(
      args: SelectSubset<T, trdUpsertArgs>
    ): Prisma__trdClient<trdGetPayload<T>>

    /**
     * Find one Trd that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {trdFindUniqueOrThrowArgs} args - Arguments to find a Trd
     * @example
     * // Get one Trd
     * const trd = await prisma.trd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends trdFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, trdFindUniqueOrThrowArgs>
    ): Prisma__trdClient<trdGetPayload<T>>

    /**
     * Find the first Trd that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trdFindFirstOrThrowArgs} args - Arguments to find a Trd
     * @example
     * // Get one Trd
     * const trd = await prisma.trd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends trdFindFirstOrThrowArgs>(
      args?: SelectSubset<T, trdFindFirstOrThrowArgs>
    ): Prisma__trdClient<trdGetPayload<T>>

    /**
     * Count the number of Trds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trdCountArgs} args - Arguments to filter Trds to count.
     * @example
     * // Count the number of Trds
     * const count = await prisma.trd.count({
     *   where: {
     *     // ... the filter for the Trds we want to count
     *   }
     * })
    **/
    count<T extends trdCountArgs>(
      args?: Subset<T, trdCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrdAggregateArgs>(args: Subset<T, TrdAggregateArgs>): PrismaPromise<GetTrdAggregateType<T>>

    /**
     * Group by Trd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrdGroupByArgs['orderBy'] }
        : { orderBy?: TrdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrdGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for trd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__trdClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * trd base type for findUnique actions
   */
  export type trdFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * Filter, which trd to fetch.
     * 
    **/
    where: trdWhereUniqueInput
  }

  /**
   * trd: findUnique
   */
  export interface trdFindUniqueArgs extends trdFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * trd base type for findFirst actions
   */
  export type trdFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * Filter, which trd to fetch.
     * 
    **/
    where?: trdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trds to fetch.
     * 
    **/
    orderBy?: Enumerable<trdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trds.
     * 
    **/
    cursor?: trdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trds.
     * 
    **/
    distinct?: Enumerable<TrdScalarFieldEnum>
  }

  /**
   * trd: findFirst
   */
  export interface trdFindFirstArgs extends trdFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * trd findMany
   */
  export type trdFindManyArgs = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * Filter, which trds to fetch.
     * 
    **/
    where?: trdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trds to fetch.
     * 
    **/
    orderBy?: Enumerable<trdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trds.
     * 
    **/
    cursor?: trdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trds.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TrdScalarFieldEnum>
  }


  /**
   * trd create
   */
  export type trdCreateArgs = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * The data needed to create a trd.
     * 
    **/
    data: XOR<trdCreateInput, trdUncheckedCreateInput>
  }


  /**
   * trd createMany
   */
  export type trdCreateManyArgs = {
    /**
     * The data used to create many trds.
     * 
    **/
    data: Enumerable<trdCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * trd update
   */
  export type trdUpdateArgs = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * The data needed to update a trd.
     * 
    **/
    data: XOR<trdUpdateInput, trdUncheckedUpdateInput>
    /**
     * Choose, which trd to update.
     * 
    **/
    where: trdWhereUniqueInput
  }


  /**
   * trd updateMany
   */
  export type trdUpdateManyArgs = {
    /**
     * The data used to update trds.
     * 
    **/
    data: XOR<trdUpdateManyMutationInput, trdUncheckedUpdateManyInput>
    /**
     * Filter which trds to update
     * 
    **/
    where?: trdWhereInput
  }


  /**
   * trd upsert
   */
  export type trdUpsertArgs = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * The filter to search for the trd to update in case it exists.
     * 
    **/
    where: trdWhereUniqueInput
    /**
     * In case the trd found by the `where` argument doesn't exist, create a new trd with this data.
     * 
    **/
    create: XOR<trdCreateInput, trdUncheckedCreateInput>
    /**
     * In case the trd was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<trdUpdateInput, trdUncheckedUpdateInput>
  }


  /**
   * trd delete
   */
  export type trdDeleteArgs = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
    /**
     * Filter which trd to delete.
     * 
    **/
    where: trdWhereUniqueInput
  }


  /**
   * trd deleteMany
   */
  export type trdDeleteManyArgs = {
    /**
     * Filter which trds to delete
     * 
    **/
    where?: trdWhereInput
  }


  /**
   * trd: findUniqueOrThrow
   */
  export type trdFindUniqueOrThrowArgs = trdFindUniqueArgsBase
      

  /**
   * trd: findFirstOrThrow
   */
  export type trdFindFirstOrThrowArgs = trdFindFirstArgsBase
      

  /**
   * trd without action
   */
  export type trdArgs = {
    /**
     * Select specific fields to fetch from the trd
     * 
    **/
    select?: trdSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const IdxScalarFieldEnum: {
    IDX_INDEX_ID: 'IDX_INDEX_ID',
    IDX_DATE_TIME: 'IDX_DATE_TIME',
    IDX_CAPITAL_VALUE: 'IDX_CAPITAL_VALUE',
    IDX_DEVIATION: 'IDX_DEVIATION',
    lDX_PERCENTAGE_DEVIATION: 'lDX_PERCENTAGE_DEVIATION'
  };

  export type IdxScalarFieldEnum = (typeof IdxScalarFieldEnum)[keyof typeof IdxScalarFieldEnum]


  export const ManScalarFieldEnum: {
    MAN_ANNOUNCEMENT_DATE_TIME: 'MAN_ANNOUNCEMENT_DATE_TIME',
    MAN_ANNOUNCEMENT_PREFIX: 'MAN_ANNOUNCEMENT_PREFIX',
    MAN_ANNOUNCEMENT: 'MAN_ANNOUNCEMENT',
    MAN_EXPIRY_DATE: 'MAN_EXPIRY_DATE',
    id: 'id'
  };

  export type ManScalarFieldEnum = (typeof ManScalarFieldEnum)[keyof typeof ManScalarFieldEnum]


  export const MkistatScalarFieldEnum: {
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
  };

  export type MkistatScalarFieldEnum = (typeof MkistatScalarFieldEnum)[keyof typeof MkistatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StatsScalarFieldEnum: {
    STATS_INSTRUMENT_CODE: 'STATS_INSTRUMENT_CODE',
    STATS_BUYPRICE: 'STATS_BUYPRICE',
    STATS_BUYVOLUME: 'STATS_BUYVOLUME',
    STATS_BUYDVPVOLUME: 'STATS_BUYDVPVOLUME',
    STATS_SELLPRICE: 'STATS_SELLPRICE',
    STATS_SELLVOLUME: 'STATS_SELLVOLUME',
    STATS_SELLDVPVOLUME: 'STATS_SELLDVPVOLUME',
    trd_date: 'trd_date',
    id: 'id'
  };

  export type StatsScalarFieldEnum = (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrdScalarFieldEnum: {
    TRD_SNO: 'TRD_SNO',
    TRD_TOTAL_TRADES: 'TRD_TOTAL_TRADES',
    TRD_TOTAL_VOLUME: 'TRD_TOTAL_VOLUME',
    TRD_TOTAL_VALUE: 'TRD_TOTAL_VALUE',
    TRD_LM_DATE_TIME: 'TRD_LM_DATE_TIME',
    id: 'id'
  };

  export type TrdScalarFieldEnum = (typeof TrdScalarFieldEnum)[keyof typeof TrdScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type idxWhereInput = {
    AND?: Enumerable<idxWhereInput>
    OR?: Enumerable<idxWhereInput>
    NOT?: Enumerable<idxWhereInput>
    IDX_INDEX_ID?: StringFilter | string
    IDX_DATE_TIME?: DateTimeFilter | Date | string
    IDX_CAPITAL_VALUE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: DecimalFilter | Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: DecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type idxOrderByWithRelationInput = {
    IDX_INDEX_ID?: SortOrder
    IDX_DATE_TIME?: SortOrder
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
  }

  export type idxWhereUniqueInput = {
    IDX_INDEX_ID_IDX_DATE_TIME?: idxIDX_INDEX_IDIDX_DATE_TIMECompoundUniqueInput
  }

  export type idxOrderByWithAggregationInput = {
    IDX_INDEX_ID?: SortOrder
    IDX_DATE_TIME?: SortOrder
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
    _count?: idxCountOrderByAggregateInput
    _avg?: idxAvgOrderByAggregateInput
    _max?: idxMaxOrderByAggregateInput
    _min?: idxMinOrderByAggregateInput
    _sum?: idxSumOrderByAggregateInput
  }

  export type idxScalarWhereWithAggregatesInput = {
    AND?: Enumerable<idxScalarWhereWithAggregatesInput>
    OR?: Enumerable<idxScalarWhereWithAggregatesInput>
    NOT?: Enumerable<idxScalarWhereWithAggregatesInput>
    IDX_INDEX_ID?: StringWithAggregatesFilter | string
    IDX_DATE_TIME?: DateTimeWithAggregatesFilter | Date | string
    IDX_CAPITAL_VALUE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
  }

  export type manWhereInput = {
    AND?: Enumerable<manWhereInput>
    OR?: Enumerable<manWhereInput>
    NOT?: Enumerable<manWhereInput>
    MAN_ANNOUNCEMENT_DATE_TIME?: DateTimeFilter | Date | string
    MAN_ANNOUNCEMENT_PREFIX?: StringFilter | string
    MAN_ANNOUNCEMENT?: StringFilter | string
    MAN_EXPIRY_DATE?: StringNullableFilter | string | null
    id?: IntFilter | number
  }

  export type manOrderByWithRelationInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: SortOrder
    MAN_ANNOUNCEMENT_PREFIX?: SortOrder
    MAN_ANNOUNCEMENT?: SortOrder
    MAN_EXPIRY_DATE?: SortOrder
    id?: SortOrder
  }

  export type manWhereUniqueInput = {
    id?: number
  }

  export type manOrderByWithAggregationInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: SortOrder
    MAN_ANNOUNCEMENT_PREFIX?: SortOrder
    MAN_ANNOUNCEMENT?: SortOrder
    MAN_EXPIRY_DATE?: SortOrder
    id?: SortOrder
    _count?: manCountOrderByAggregateInput
    _avg?: manAvgOrderByAggregateInput
    _max?: manMaxOrderByAggregateInput
    _min?: manMinOrderByAggregateInput
    _sum?: manSumOrderByAggregateInput
  }

  export type manScalarWhereWithAggregatesInput = {
    AND?: Enumerable<manScalarWhereWithAggregatesInput>
    OR?: Enumerable<manScalarWhereWithAggregatesInput>
    NOT?: Enumerable<manScalarWhereWithAggregatesInput>
    MAN_ANNOUNCEMENT_DATE_TIME?: DateTimeWithAggregatesFilter | Date | string
    MAN_ANNOUNCEMENT_PREFIX?: StringWithAggregatesFilter | string
    MAN_ANNOUNCEMENT?: StringWithAggregatesFilter | string
    MAN_EXPIRY_DATE?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
  }

  export type mkistatWhereInput = {
    AND?: Enumerable<mkistatWhereInput>
    OR?: Enumerable<mkistatWhereInput>
    NOT?: Enumerable<mkistatWhereInput>
    MKISTAT_INSTRUMENT_CODE?: StringFilter | string
    MKISTAT_INSTRUMENT_NUMBER?: IntFilter | number
    MKISTAT_QUOTE_BASES?: StringFilter | string
    MKISTAT_OPEN_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: IntFilter | number
    MKISTAT_TOTAL_VOLUME?: IntFilter | number
    MKISTAT_TOTAL_VALUE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES?: IntFilter | number
    MKISTAT_PUBLIC_TOTAL_VOLUME?: IntFilter | number
    MKISTAT_PUBLIC_TOTAL_VALUE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES?: IntFilter | number
    MKISTAT_SPOT_TOTAL_VOLUME?: IntFilter | number
    MKISTAT_SPOT_TOTAL_VALUE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME?: DateTimeFilter | Date | string
  }

  export type mkistatOrderByWithRelationInput = {
    MKISTAT_INSTRUMENT_CODE?: SortOrder
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_QUOTE_BASES?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
    MKISTAT_LM_DATE_TIME?: SortOrder
  }

  export type mkistatWhereUniqueInput = {
    MKISTAT_INSTRUMENT_CODE_MKISTAT_LM_DATE_TIME?: mkistatMKISTAT_INSTRUMENT_CODEMKISTAT_LM_DATE_TIMECompoundUniqueInput
  }

  export type mkistatOrderByWithAggregationInput = {
    MKISTAT_INSTRUMENT_CODE?: SortOrder
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_QUOTE_BASES?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
    MKISTAT_LM_DATE_TIME?: SortOrder
    _count?: mkistatCountOrderByAggregateInput
    _avg?: mkistatAvgOrderByAggregateInput
    _max?: mkistatMaxOrderByAggregateInput
    _min?: mkistatMinOrderByAggregateInput
    _sum?: mkistatSumOrderByAggregateInput
  }

  export type mkistatScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mkistatScalarWhereWithAggregatesInput>
    OR?: Enumerable<mkistatScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mkistatScalarWhereWithAggregatesInput>
    MKISTAT_INSTRUMENT_CODE?: StringWithAggregatesFilter | string
    MKISTAT_INSTRUMENT_NUMBER?: IntWithAggregatesFilter | number
    MKISTAT_QUOTE_BASES?: StringWithAggregatesFilter | string
    MKISTAT_OPEN_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: IntWithAggregatesFilter | number
    MKISTAT_TOTAL_VOLUME?: IntWithAggregatesFilter | number
    MKISTAT_TOTAL_VALUE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES?: IntWithAggregatesFilter | number
    MKISTAT_PUBLIC_TOTAL_VOLUME?: IntWithAggregatesFilter | number
    MKISTAT_PUBLIC_TOTAL_VALUE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES?: IntWithAggregatesFilter | number
    MKISTAT_SPOT_TOTAL_VOLUME?: IntWithAggregatesFilter | number
    MKISTAT_SPOT_TOTAL_VALUE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME?: DateTimeWithAggregatesFilter | Date | string
  }

  export type statsWhereInput = {
    AND?: Enumerable<statsWhereInput>
    OR?: Enumerable<statsWhereInput>
    NOT?: Enumerable<statsWhereInput>
    STATS_INSTRUMENT_CODE?: StringFilter | string
    STATS_BUYPRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: IntFilter | number
    STATS_BUYDVPVOLUME?: IntFilter | number
    STATS_SELLPRICE?: DecimalFilter | Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: IntFilter | number
    STATS_SELLDVPVOLUME?: IntFilter | number
    trd_date?: DateTimeFilter | Date | string
    id?: IntFilter | number
  }

  export type statsOrderByWithRelationInput = {
    STATS_INSTRUMENT_CODE?: SortOrder
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    trd_date?: SortOrder
    id?: SortOrder
  }

  export type statsWhereUniqueInput = {
    id?: number
  }

  export type statsOrderByWithAggregationInput = {
    STATS_INSTRUMENT_CODE?: SortOrder
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    trd_date?: SortOrder
    id?: SortOrder
    _count?: statsCountOrderByAggregateInput
    _avg?: statsAvgOrderByAggregateInput
    _max?: statsMaxOrderByAggregateInput
    _min?: statsMinOrderByAggregateInput
    _sum?: statsSumOrderByAggregateInput
  }

  export type statsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<statsScalarWhereWithAggregatesInput>
    OR?: Enumerable<statsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<statsScalarWhereWithAggregatesInput>
    STATS_INSTRUMENT_CODE?: StringWithAggregatesFilter | string
    STATS_BUYPRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: IntWithAggregatesFilter | number
    STATS_BUYDVPVOLUME?: IntWithAggregatesFilter | number
    STATS_SELLPRICE?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: IntWithAggregatesFilter | number
    STATS_SELLDVPVOLUME?: IntWithAggregatesFilter | number
    trd_date?: DateTimeWithAggregatesFilter | Date | string
    id?: IntWithAggregatesFilter | number
  }

  export type trdWhereInput = {
    AND?: Enumerable<trdWhereInput>
    OR?: Enumerable<trdWhereInput>
    NOT?: Enumerable<trdWhereInput>
    TRD_SNO?: StringNullableFilter | string | null
    TRD_TOTAL_TRADES?: IntFilter | number
    TRD_TOTAL_VOLUME?: IntFilter | number
    TRD_TOTAL_VALUE?: FloatNullableFilter | number | null
    TRD_LM_DATE_TIME?: StringNullableFilter | string | null
    id?: IntFilter | number
  }

  export type trdOrderByWithRelationInput = {
    TRD_SNO?: SortOrder
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    TRD_LM_DATE_TIME?: SortOrder
    id?: SortOrder
  }

  export type trdWhereUniqueInput = {
    id?: number
  }

  export type trdOrderByWithAggregationInput = {
    TRD_SNO?: SortOrder
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    TRD_LM_DATE_TIME?: SortOrder
    id?: SortOrder
    _count?: trdCountOrderByAggregateInput
    _avg?: trdAvgOrderByAggregateInput
    _max?: trdMaxOrderByAggregateInput
    _min?: trdMinOrderByAggregateInput
    _sum?: trdSumOrderByAggregateInput
  }

  export type trdScalarWhereWithAggregatesInput = {
    AND?: Enumerable<trdScalarWhereWithAggregatesInput>
    OR?: Enumerable<trdScalarWhereWithAggregatesInput>
    NOT?: Enumerable<trdScalarWhereWithAggregatesInput>
    TRD_SNO?: StringNullableWithAggregatesFilter | string | null
    TRD_TOTAL_TRADES?: IntWithAggregatesFilter | number
    TRD_TOTAL_VOLUME?: IntWithAggregatesFilter | number
    TRD_TOTAL_VALUE?: FloatNullableWithAggregatesFilter | number | null
    TRD_LM_DATE_TIME?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
  }

  export type idxCreateInput = {
    IDX_INDEX_ID?: string
    IDX_DATE_TIME?: Date | string
    IDX_CAPITAL_VALUE?: Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: Decimal | DecimalJsLike | number | string
  }

  export type idxUncheckedCreateInput = {
    IDX_INDEX_ID?: string
    IDX_DATE_TIME?: Date | string
    IDX_CAPITAL_VALUE?: Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: Decimal | DecimalJsLike | number | string
  }

  export type idxUpdateInput = {
    IDX_INDEX_ID?: StringFieldUpdateOperationsInput | string
    IDX_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    IDX_CAPITAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type idxUncheckedUpdateInput = {
    IDX_INDEX_ID?: StringFieldUpdateOperationsInput | string
    IDX_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    IDX_CAPITAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type idxCreateManyInput = {
    IDX_INDEX_ID?: string
    IDX_DATE_TIME?: Date | string
    IDX_CAPITAL_VALUE?: Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: Decimal | DecimalJsLike | number | string
  }

  export type idxUpdateManyMutationInput = {
    IDX_INDEX_ID?: StringFieldUpdateOperationsInput | string
    IDX_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    IDX_CAPITAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type idxUncheckedUpdateManyInput = {
    IDX_INDEX_ID?: StringFieldUpdateOperationsInput | string
    IDX_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    IDX_CAPITAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IDX_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lDX_PERCENTAGE_DEVIATION?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type manCreateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: Date | string
    MAN_ANNOUNCEMENT_PREFIX: string
    MAN_ANNOUNCEMENT: string
    MAN_EXPIRY_DATE?: string | null
  }

  export type manUncheckedCreateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: Date | string
    MAN_ANNOUNCEMENT_PREFIX: string
    MAN_ANNOUNCEMENT: string
    MAN_EXPIRY_DATE?: string | null
    id?: number
  }

  export type manUpdateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    MAN_ANNOUNCEMENT_PREFIX?: StringFieldUpdateOperationsInput | string
    MAN_ANNOUNCEMENT?: StringFieldUpdateOperationsInput | string
    MAN_EXPIRY_DATE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manUncheckedUpdateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    MAN_ANNOUNCEMENT_PREFIX?: StringFieldUpdateOperationsInput | string
    MAN_ANNOUNCEMENT?: StringFieldUpdateOperationsInput | string
    MAN_EXPIRY_DATE?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type manCreateManyInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: Date | string
    MAN_ANNOUNCEMENT_PREFIX: string
    MAN_ANNOUNCEMENT: string
    MAN_EXPIRY_DATE?: string | null
    id?: number
  }

  export type manUpdateManyMutationInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    MAN_ANNOUNCEMENT_PREFIX?: StringFieldUpdateOperationsInput | string
    MAN_ANNOUNCEMENT?: StringFieldUpdateOperationsInput | string
    MAN_EXPIRY_DATE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manUncheckedUpdateManyInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    MAN_ANNOUNCEMENT_PREFIX?: StringFieldUpdateOperationsInput | string
    MAN_ANNOUNCEMENT?: StringFieldUpdateOperationsInput | string
    MAN_EXPIRY_DATE?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type mkistatCreateInput = {
    MKISTAT_INSTRUMENT_CODE: string
    MKISTAT_INSTRUMENT_NUMBER: number
    MKISTAT_QUOTE_BASES?: string
    MKISTAT_OPEN_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: number
    MKISTAT_TOTAL_VOLUME?: number
    MKISTAT_TOTAL_VALUE?: Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES: number
    MKISTAT_PUBLIC_TOTAL_VOLUME: number
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES: number
    MKISTAT_SPOT_TOTAL_VOLUME: number
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME: Date | string
  }

  export type mkistatUncheckedCreateInput = {
    MKISTAT_INSTRUMENT_CODE: string
    MKISTAT_INSTRUMENT_NUMBER: number
    MKISTAT_QUOTE_BASES?: string
    MKISTAT_OPEN_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: number
    MKISTAT_TOTAL_VOLUME?: number
    MKISTAT_TOTAL_VALUE?: Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES: number
    MKISTAT_PUBLIC_TOTAL_VOLUME: number
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES: number
    MKISTAT_SPOT_TOTAL_VOLUME: number
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME: Date | string
  }

  export type mkistatUpdateInput = {
    MKISTAT_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    MKISTAT_INSTRUMENT_NUMBER?: IntFieldUpdateOperationsInput | number
    MKISTAT_QUOTE_BASES?: StringFieldUpdateOperationsInput | string
    MKISTAT_OPEN_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mkistatUncheckedUpdateInput = {
    MKISTAT_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    MKISTAT_INSTRUMENT_NUMBER?: IntFieldUpdateOperationsInput | number
    MKISTAT_QUOTE_BASES?: StringFieldUpdateOperationsInput | string
    MKISTAT_OPEN_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mkistatCreateManyInput = {
    MKISTAT_INSTRUMENT_CODE: string
    MKISTAT_INSTRUMENT_NUMBER: number
    MKISTAT_QUOTE_BASES?: string
    MKISTAT_OPEN_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE: Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: number
    MKISTAT_TOTAL_VOLUME?: number
    MKISTAT_TOTAL_VALUE?: Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES: number
    MKISTAT_PUBLIC_TOTAL_VOLUME: number
    MKISTAT_PUBLIC_TOTAL_VALUE: Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES: number
    MKISTAT_SPOT_TOTAL_VOLUME: number
    MKISTAT_SPOT_TOTAL_VALUE: Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME: Date | string
  }

  export type mkistatUpdateManyMutationInput = {
    MKISTAT_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    MKISTAT_INSTRUMENT_NUMBER?: IntFieldUpdateOperationsInput | number
    MKISTAT_QUOTE_BASES?: StringFieldUpdateOperationsInput | string
    MKISTAT_OPEN_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mkistatUncheckedUpdateManyInput = {
    MKISTAT_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    MKISTAT_INSTRUMENT_NUMBER?: IntFieldUpdateOperationsInput | number
    MKISTAT_QUOTE_BASES?: StringFieldUpdateOperationsInput | string
    MKISTAT_OPEN_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUB_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_LAST_TRADED_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_HIGH_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LOW_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_YDAY_CLOSE_PRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_PUBLIC_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_PUBLIC_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_SPOT_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    MKISTAT_SPOT_TOTAL_VALUE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    MKISTAT_LM_DATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statsCreateInput = {
    STATS_INSTRUMENT_CODE?: string
    STATS_BUYPRICE?: Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: number
    STATS_BUYDVPVOLUME?: number
    STATS_SELLPRICE?: Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: number
    STATS_SELLDVPVOLUME?: number
    trd_date?: Date | string
  }

  export type statsUncheckedCreateInput = {
    STATS_INSTRUMENT_CODE?: string
    STATS_BUYPRICE?: Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: number
    STATS_BUYDVPVOLUME?: number
    STATS_SELLPRICE?: Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: number
    STATS_SELLDVPVOLUME?: number
    trd_date?: Date | string
    id?: number
  }

  export type statsUpdateInput = {
    STATS_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    STATS_BUYPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_BUYDVPVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLDVPVOLUME?: IntFieldUpdateOperationsInput | number
    trd_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statsUncheckedUpdateInput = {
    STATS_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    STATS_BUYPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_BUYDVPVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLDVPVOLUME?: IntFieldUpdateOperationsInput | number
    trd_date?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type statsCreateManyInput = {
    STATS_INSTRUMENT_CODE?: string
    STATS_BUYPRICE?: Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: number
    STATS_BUYDVPVOLUME?: number
    STATS_SELLPRICE?: Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: number
    STATS_SELLDVPVOLUME?: number
    trd_date?: Date | string
    id?: number
  }

  export type statsUpdateManyMutationInput = {
    STATS_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    STATS_BUYPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_BUYDVPVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLDVPVOLUME?: IntFieldUpdateOperationsInput | number
    trd_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statsUncheckedUpdateManyInput = {
    STATS_INSTRUMENT_CODE?: StringFieldUpdateOperationsInput | string
    STATS_BUYPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_BUYVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_BUYDVPVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLPRICE?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    STATS_SELLVOLUME?: IntFieldUpdateOperationsInput | number
    STATS_SELLDVPVOLUME?: IntFieldUpdateOperationsInput | number
    trd_date?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type trdCreateInput = {
    TRD_SNO?: string | null
    TRD_TOTAL_TRADES?: number
    TRD_TOTAL_VOLUME?: number
    TRD_TOTAL_VALUE?: number | null
    TRD_LM_DATE_TIME?: string | null
  }

  export type trdUncheckedCreateInput = {
    TRD_SNO?: string | null
    TRD_TOTAL_TRADES?: number
    TRD_TOTAL_VOLUME?: number
    TRD_TOTAL_VALUE?: number | null
    TRD_LM_DATE_TIME?: string | null
    id?: number
  }

  export type trdUpdateInput = {
    TRD_SNO?: NullableStringFieldUpdateOperationsInput | string | null
    TRD_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VALUE?: NullableFloatFieldUpdateOperationsInput | number | null
    TRD_LM_DATE_TIME?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trdUncheckedUpdateInput = {
    TRD_SNO?: NullableStringFieldUpdateOperationsInput | string | null
    TRD_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VALUE?: NullableFloatFieldUpdateOperationsInput | number | null
    TRD_LM_DATE_TIME?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type trdCreateManyInput = {
    TRD_SNO?: string | null
    TRD_TOTAL_TRADES?: number
    TRD_TOTAL_VOLUME?: number
    TRD_TOTAL_VALUE?: number | null
    TRD_LM_DATE_TIME?: string | null
    id?: number
  }

  export type trdUpdateManyMutationInput = {
    TRD_SNO?: NullableStringFieldUpdateOperationsInput | string | null
    TRD_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VALUE?: NullableFloatFieldUpdateOperationsInput | number | null
    TRD_LM_DATE_TIME?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trdUncheckedUpdateManyInput = {
    TRD_SNO?: NullableStringFieldUpdateOperationsInput | string | null
    TRD_TOTAL_TRADES?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VOLUME?: IntFieldUpdateOperationsInput | number
    TRD_TOTAL_VALUE?: NullableFloatFieldUpdateOperationsInput | number | null
    TRD_LM_DATE_TIME?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type idxIDX_INDEX_IDIDX_DATE_TIMECompoundUniqueInput = {
    IDX_INDEX_ID: string
    IDX_DATE_TIME: Date | string
  }

  export type idxCountOrderByAggregateInput = {
    IDX_INDEX_ID?: SortOrder
    IDX_DATE_TIME?: SortOrder
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
  }

  export type idxAvgOrderByAggregateInput = {
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
  }

  export type idxMaxOrderByAggregateInput = {
    IDX_INDEX_ID?: SortOrder
    IDX_DATE_TIME?: SortOrder
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
  }

  export type idxMinOrderByAggregateInput = {
    IDX_INDEX_ID?: SortOrder
    IDX_DATE_TIME?: SortOrder
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
  }

  export type idxSumOrderByAggregateInput = {
    IDX_CAPITAL_VALUE?: SortOrder
    IDX_DEVIATION?: SortOrder
    lDX_PERCENTAGE_DEVIATION?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type manCountOrderByAggregateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: SortOrder
    MAN_ANNOUNCEMENT_PREFIX?: SortOrder
    MAN_ANNOUNCEMENT?: SortOrder
    MAN_EXPIRY_DATE?: SortOrder
    id?: SortOrder
  }

  export type manAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type manMaxOrderByAggregateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: SortOrder
    MAN_ANNOUNCEMENT_PREFIX?: SortOrder
    MAN_ANNOUNCEMENT?: SortOrder
    MAN_EXPIRY_DATE?: SortOrder
    id?: SortOrder
  }

  export type manMinOrderByAggregateInput = {
    MAN_ANNOUNCEMENT_DATE_TIME?: SortOrder
    MAN_ANNOUNCEMENT_PREFIX?: SortOrder
    MAN_ANNOUNCEMENT?: SortOrder
    MAN_EXPIRY_DATE?: SortOrder
    id?: SortOrder
  }

  export type manSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type mkistatMKISTAT_INSTRUMENT_CODEMKISTAT_LM_DATE_TIMECompoundUniqueInput = {
    MKISTAT_INSTRUMENT_CODE: string
    MKISTAT_LM_DATE_TIME: Date | string
  }

  export type mkistatCountOrderByAggregateInput = {
    MKISTAT_INSTRUMENT_CODE?: SortOrder
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_QUOTE_BASES?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
    MKISTAT_LM_DATE_TIME?: SortOrder
  }

  export type mkistatAvgOrderByAggregateInput = {
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
  }

  export type mkistatMaxOrderByAggregateInput = {
    MKISTAT_INSTRUMENT_CODE?: SortOrder
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_QUOTE_BASES?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
    MKISTAT_LM_DATE_TIME?: SortOrder
  }

  export type mkistatMinOrderByAggregateInput = {
    MKISTAT_INSTRUMENT_CODE?: SortOrder
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_QUOTE_BASES?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
    MKISTAT_LM_DATE_TIME?: SortOrder
  }

  export type mkistatSumOrderByAggregateInput = {
    MKISTAT_INSTRUMENT_NUMBER?: SortOrder
    MKISTAT_OPEN_PRICE?: SortOrder
    MKISTAT_PUB_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_SPOT_LAST_TRADED_PRICE?: SortOrder
    MKISTAT_HIGH_PRICE?: SortOrder
    MKISTAT_LOW_PRICE?: SortOrder
    MKISTAT_CLOSE_PRICE?: SortOrder
    MKISTAT_YDAY_CLOSE_PRICE?: SortOrder
    MKISTAT_TOTAL_TRADES?: SortOrder
    MKISTAT_TOTAL_VOLUME?: SortOrder
    MKISTAT_TOTAL_VALUE?: SortOrder
    MKISTAT_PUBLIC_TOTAL_TRADES?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VOLUME?: SortOrder
    MKISTAT_PUBLIC_TOTAL_VALUE?: SortOrder
    MKISTAT_SPOT_TOTAL_TRADES?: SortOrder
    MKISTAT_SPOT_TOTAL_VOLUME?: SortOrder
    MKISTAT_SPOT_TOTAL_VALUE?: SortOrder
  }

  export type statsCountOrderByAggregateInput = {
    STATS_INSTRUMENT_CODE?: SortOrder
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    trd_date?: SortOrder
    id?: SortOrder
  }

  export type statsAvgOrderByAggregateInput = {
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    id?: SortOrder
  }

  export type statsMaxOrderByAggregateInput = {
    STATS_INSTRUMENT_CODE?: SortOrder
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    trd_date?: SortOrder
    id?: SortOrder
  }

  export type statsMinOrderByAggregateInput = {
    STATS_INSTRUMENT_CODE?: SortOrder
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    trd_date?: SortOrder
    id?: SortOrder
  }

  export type statsSumOrderByAggregateInput = {
    STATS_BUYPRICE?: SortOrder
    STATS_BUYVOLUME?: SortOrder
    STATS_BUYDVPVOLUME?: SortOrder
    STATS_SELLPRICE?: SortOrder
    STATS_SELLVOLUME?: SortOrder
    STATS_SELLDVPVOLUME?: SortOrder
    id?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type trdCountOrderByAggregateInput = {
    TRD_SNO?: SortOrder
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    TRD_LM_DATE_TIME?: SortOrder
    id?: SortOrder
  }

  export type trdAvgOrderByAggregateInput = {
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    id?: SortOrder
  }

  export type trdMaxOrderByAggregateInput = {
    TRD_SNO?: SortOrder
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    TRD_LM_DATE_TIME?: SortOrder
    id?: SortOrder
  }

  export type trdMinOrderByAggregateInput = {
    TRD_SNO?: SortOrder
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    TRD_LM_DATE_TIME?: SortOrder
    id?: SortOrder
  }

  export type trdSumOrderByAggregateInput = {
    TRD_TOTAL_TRADES?: SortOrder
    TRD_TOTAL_VOLUME?: SortOrder
    TRD_TOTAL_VALUE?: SortOrder
    id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}