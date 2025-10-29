
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model HostProfile
 * 
 */
export type HostProfile = $Result.DefaultSelection<Prisma.$HostProfilePayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model ListingImage
 * 
 */
export type ListingImage = $Result.DefaultSelection<Prisma.$ListingImagePayload>
/**
 * Model SavedListing
 * 
 */
export type SavedListing = $Result.DefaultSelection<Prisma.$SavedListingPayload>
/**
 * Model ListingView
 * 
 */
export type ListingView = $Result.DefaultSelection<Prisma.$ListingViewPayload>
/**
 * Model SearchQuery
 * 
 */
export type SearchQuery = $Result.DefaultSelection<Prisma.$SearchQueryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  HOST: 'HOST',
  TRAVELER: 'TRAVELER'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const CancellationPolicy: {
  FLEXIBLE: 'FLEXIBLE',
  MODERATE: 'MODERATE',
  STRICT: 'STRICT'
};

export type CancellationPolicy = (typeof CancellationPolicy)[keyof typeof CancellationPolicy]


export const ListingCategory: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  VILLA: 'VILLA',
  CONDO: 'CONDO',
  COTTAGE: 'COTTAGE',
  CABIN: 'CABIN',
  ROOM: 'ROOM',
  HOTEL: 'HOTEL',
  RESORT: 'RESORT',
  HOSTEL: 'HOSTEL',
  BOAT: 'BOAT',
  OTHER: 'OTHER'
};

export type ListingCategory = (typeof ListingCategory)[keyof typeof ListingCategory]


export const PropertyType: {
  ENTIRE_PLACE: 'ENTIRE_PLACE',
  PRIVATE_ROOM: 'PRIVATE_ROOM',
  SHARED_ROOM: 'SHARED_ROOM'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const PriceUnit: {
  NIGHT: 'NIGHT',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  HOUR: 'HOUR',
  PERSON_NIGHT: 'PERSON_NIGHT'
};

export type PriceUnit = (typeof PriceUnit)[keyof typeof PriceUnit]


export const BookingPlatform: {
  AIRBNB: 'AIRBNB',
  BOOKING_COM: 'BOOKING_COM',
  VRBO: 'VRBO',
  HOSTAWAY: 'HOSTAWAY',
  AIRBNB_DIRECT: 'AIRBNB_DIRECT',
  HOTEL_OWN_WEBSITE: 'HOTEL_OWN_WEBSITE',
  OTHER: 'OTHER'
};

export type BookingPlatform = (typeof BookingPlatform)[keyof typeof BookingPlatform]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type CancellationPolicy = $Enums.CancellationPolicy

export const CancellationPolicy: typeof $Enums.CancellationPolicy

export type ListingCategory = $Enums.ListingCategory

export const ListingCategory: typeof $Enums.ListingCategory

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type PriceUnit = $Enums.PriceUnit

export const PriceUnit: typeof $Enums.PriceUnit

export type BookingPlatform = $Enums.BookingPlatform

export const BookingPlatform: typeof $Enums.BookingPlatform

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hostProfile`: Exposes CRUD operations for the **HostProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HostProfiles
    * const hostProfiles = await prisma.hostProfile.findMany()
    * ```
    */
  get hostProfile(): Prisma.HostProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingImage`: Exposes CRUD operations for the **ListingImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingImages
    * const listingImages = await prisma.listingImage.findMany()
    * ```
    */
  get listingImage(): Prisma.ListingImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedListing`: Exposes CRUD operations for the **SavedListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedListings
    * const savedListings = await prisma.savedListing.findMany()
    * ```
    */
  get savedListing(): Prisma.SavedListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingView`: Exposes CRUD operations for the **ListingView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingViews
    * const listingViews = await prisma.listingView.findMany()
    * ```
    */
  get listingView(): Prisma.ListingViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchQuery`: Exposes CRUD operations for the **SearchQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchQueries
    * const searchQueries = await prisma.searchQuery.findMany()
    * ```
    */
  get searchQuery(): Prisma.SearchQueryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    HostProfile: 'HostProfile',
    Listing: 'Listing',
    ListingImage: 'ListingImage',
    SavedListing: 'SavedListing',
    ListingView: 'ListingView',
    SearchQuery: 'SearchQuery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "hostProfile" | "listing" | "listingImage" | "savedListing" | "listingView" | "searchQuery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      HostProfile: {
        payload: Prisma.$HostProfilePayload<ExtArgs>
        fields: Prisma.HostProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>
          }
          findFirst: {
            args: Prisma.HostProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>
          }
          findMany: {
            args: Prisma.HostProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>[]
          }
          create: {
            args: Prisma.HostProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>
          }
          createMany: {
            args: Prisma.HostProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HostProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>[]
          }
          delete: {
            args: Prisma.HostProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>
          }
          update: {
            args: Prisma.HostProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>
          }
          deleteMany: {
            args: Prisma.HostProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HostProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>[]
          }
          upsert: {
            args: Prisma.HostProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostProfilePayload>
          }
          aggregate: {
            args: Prisma.HostProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHostProfile>
          }
          groupBy: {
            args: Prisma.HostProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostProfileCountArgs<ExtArgs>
            result: $Utils.Optional<HostProfileCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      ListingImage: {
        payload: Prisma.$ListingImagePayload<ExtArgs>
        fields: Prisma.ListingImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>
          }
          findFirst: {
            args: Prisma.ListingImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>
          }
          findMany: {
            args: Prisma.ListingImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>[]
          }
          create: {
            args: Prisma.ListingImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>
          }
          createMany: {
            args: Prisma.ListingImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>[]
          }
          delete: {
            args: Prisma.ListingImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>
          }
          update: {
            args: Prisma.ListingImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>
          }
          deleteMany: {
            args: Prisma.ListingImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>[]
          }
          upsert: {
            args: Prisma.ListingImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingImagePayload>
          }
          aggregate: {
            args: Prisma.ListingImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingImage>
          }
          groupBy: {
            args: Prisma.ListingImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingImageCountArgs<ExtArgs>
            result: $Utils.Optional<ListingImageCountAggregateOutputType> | number
          }
        }
      }
      SavedListing: {
        payload: Prisma.$SavedListingPayload<ExtArgs>
        fields: Prisma.SavedListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          findFirst: {
            args: Prisma.SavedListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          findMany: {
            args: Prisma.SavedListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>[]
          }
          create: {
            args: Prisma.SavedListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          createMany: {
            args: Prisma.SavedListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>[]
          }
          delete: {
            args: Prisma.SavedListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          update: {
            args: Prisma.SavedListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          deleteMany: {
            args: Prisma.SavedListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>[]
          }
          upsert: {
            args: Prisma.SavedListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedListingPayload>
          }
          aggregate: {
            args: Prisma.SavedListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedListing>
          }
          groupBy: {
            args: Prisma.SavedListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedListingCountArgs<ExtArgs>
            result: $Utils.Optional<SavedListingCountAggregateOutputType> | number
          }
        }
      }
      ListingView: {
        payload: Prisma.$ListingViewPayload<ExtArgs>
        fields: Prisma.ListingViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          findFirst: {
            args: Prisma.ListingViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          findMany: {
            args: Prisma.ListingViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>[]
          }
          create: {
            args: Prisma.ListingViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          createMany: {
            args: Prisma.ListingViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>[]
          }
          delete: {
            args: Prisma.ListingViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          update: {
            args: Prisma.ListingViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          deleteMany: {
            args: Prisma.ListingViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>[]
          }
          upsert: {
            args: Prisma.ListingViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingViewPayload>
          }
          aggregate: {
            args: Prisma.ListingViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingView>
          }
          groupBy: {
            args: Prisma.ListingViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingViewCountArgs<ExtArgs>
            result: $Utils.Optional<ListingViewCountAggregateOutputType> | number
          }
        }
      }
      SearchQuery: {
        payload: Prisma.$SearchQueryPayload<ExtArgs>
        fields: Prisma.SearchQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          findFirst: {
            args: Prisma.SearchQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          findMany: {
            args: Prisma.SearchQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          create: {
            args: Prisma.SearchQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          createMany: {
            args: Prisma.SearchQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          delete: {
            args: Prisma.SearchQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          update: {
            args: Prisma.SearchQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          deleteMany: {
            args: Prisma.SearchQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          upsert: {
            args: Prisma.SearchQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          aggregate: {
            args: Prisma.SearchQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchQuery>
          }
          groupBy: {
            args: Prisma.SearchQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchQueryCountArgs<ExtArgs>
            result: $Utils.Optional<SearchQueryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    hostProfile?: HostProfileOmit
    listing?: ListingOmit
    listingImage?: ListingImageOmit
    savedListing?: SavedListingOmit
    listingView?: ListingViewOmit
    searchQuery?: SearchQueryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    listings: number
    savedListings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    savedListings?: boolean | UserCountOutputTypeCountSavedListingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedListingWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    images: number
    savedBy: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ListingCountOutputTypeCountImagesArgs
    savedBy?: boolean | ListingCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingImageWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedListingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    phone: string | null
    bio: string | null
    userType: $Enums.UserType | null
    isVerified: boolean | null
    verificationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    phone: string | null
    bio: string | null
    userType: $Enums.UserType | null
    isVerified: boolean | null
    verificationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatar: number
    phone: number
    bio: number
    userType: number
    isVerified: number
    verificationToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    phone?: true
    bio?: true
    userType?: true
    isVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    phone?: true
    bio?: true
    userType?: true
    isVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    phone?: true
    bio?: true
    userType?: true
    isVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    avatar: string | null
    phone: string | null
    bio: string | null
    userType: $Enums.UserType
    isVerified: boolean
    verificationToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    phone?: boolean
    bio?: boolean
    userType?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listings?: boolean | User$listingsArgs<ExtArgs>
    savedListings?: boolean | User$savedListingsArgs<ExtArgs>
    hostProfile?: boolean | User$hostProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    phone?: boolean
    bio?: boolean
    userType?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    phone?: boolean
    bio?: boolean
    userType?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    phone?: boolean
    bio?: boolean
    userType?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatar" | "phone" | "bio" | "userType" | "isVerified" | "verificationToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | User$listingsArgs<ExtArgs>
    savedListings?: boolean | User$savedListingsArgs<ExtArgs>
    hostProfile?: boolean | User$hostProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listings: Prisma.$ListingPayload<ExtArgs>[]
      savedListings: Prisma.$SavedListingPayload<ExtArgs>[]
      hostProfile: Prisma.$HostProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      avatar: string | null
      phone: string | null
      bio: string | null
      userType: $Enums.UserType
      isVerified: boolean
      verificationToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedListings<T extends User$savedListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hostProfile<T extends User$hostProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$hostProfileArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.savedListings
   */
  export type User$savedListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    where?: SavedListingWhereInput
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    cursor?: SavedListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * User.hostProfile
   */
  export type User$hostProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    where?: HostProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model HostProfile
   */

  export type AggregateHostProfile = {
    _count: HostProfileCountAggregateOutputType | null
    _avg: HostProfileAvgAggregateOutputType | null
    _sum: HostProfileSumAggregateOutputType | null
    _min: HostProfileMinAggregateOutputType | null
    _max: HostProfileMaxAggregateOutputType | null
  }

  export type HostProfileAvgAggregateOutputType = {
    totalListings: number | null
    totalBookings: number | null
    averageRating: number | null
    responseTime: number | null
    acceptanceRate: number | null
  }

  export type HostProfileSumAggregateOutputType = {
    totalListings: number | null
    totalBookings: number | null
    averageRating: number | null
    responseTime: number | null
    acceptanceRate: number | null
  }

  export type HostProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    taxId: string | null
    bankAccount: string | null
    payoutEmail: string | null
    totalListings: number | null
    totalBookings: number | null
    averageRating: number | null
    responseTime: number | null
    acceptanceRate: number | null
    cancellationPolicy: $Enums.CancellationPolicy | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HostProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    taxId: string | null
    bankAccount: string | null
    payoutEmail: string | null
    totalListings: number | null
    totalBookings: number | null
    averageRating: number | null
    responseTime: number | null
    acceptanceRate: number | null
    cancellationPolicy: $Enums.CancellationPolicy | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HostProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    taxId: number
    bankAccount: number
    payoutEmail: number
    totalListings: number
    totalBookings: number
    averageRating: number
    responseTime: number
    acceptanceRate: number
    cancellationPolicy: number
    certifications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HostProfileAvgAggregateInputType = {
    totalListings?: true
    totalBookings?: true
    averageRating?: true
    responseTime?: true
    acceptanceRate?: true
  }

  export type HostProfileSumAggregateInputType = {
    totalListings?: true
    totalBookings?: true
    averageRating?: true
    responseTime?: true
    acceptanceRate?: true
  }

  export type HostProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    taxId?: true
    bankAccount?: true
    payoutEmail?: true
    totalListings?: true
    totalBookings?: true
    averageRating?: true
    responseTime?: true
    acceptanceRate?: true
    cancellationPolicy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HostProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    taxId?: true
    bankAccount?: true
    payoutEmail?: true
    totalListings?: true
    totalBookings?: true
    averageRating?: true
    responseTime?: true
    acceptanceRate?: true
    cancellationPolicy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HostProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    taxId?: true
    bankAccount?: true
    payoutEmail?: true
    totalListings?: true
    totalBookings?: true
    averageRating?: true
    responseTime?: true
    acceptanceRate?: true
    cancellationPolicy?: true
    certifications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HostProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HostProfile to aggregate.
     */
    where?: HostProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostProfiles to fetch.
     */
    orderBy?: HostProfileOrderByWithRelationInput | HostProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HostProfiles
    **/
    _count?: true | HostProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HostProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HostProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostProfileMaxAggregateInputType
  }

  export type GetHostProfileAggregateType<T extends HostProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateHostProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHostProfile[P]>
      : GetScalarType<T[P], AggregateHostProfile[P]>
  }




  export type HostProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostProfileWhereInput
    orderBy?: HostProfileOrderByWithAggregationInput | HostProfileOrderByWithAggregationInput[]
    by: HostProfileScalarFieldEnum[] | HostProfileScalarFieldEnum
    having?: HostProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostProfileCountAggregateInputType | true
    _avg?: HostProfileAvgAggregateInputType
    _sum?: HostProfileSumAggregateInputType
    _min?: HostProfileMinAggregateInputType
    _max?: HostProfileMaxAggregateInputType
  }

  export type HostProfileGroupByOutputType = {
    id: string
    userId: string
    companyName: string | null
    taxId: string | null
    bankAccount: string | null
    payoutEmail: string | null
    totalListings: number
    totalBookings: number
    averageRating: number
    responseTime: number
    acceptanceRate: number
    cancellationPolicy: $Enums.CancellationPolicy
    certifications: string[]
    createdAt: Date
    updatedAt: Date
    _count: HostProfileCountAggregateOutputType | null
    _avg: HostProfileAvgAggregateOutputType | null
    _sum: HostProfileSumAggregateOutputType | null
    _min: HostProfileMinAggregateOutputType | null
    _max: HostProfileMaxAggregateOutputType | null
  }

  type GetHostProfileGroupByPayload<T extends HostProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostProfileGroupByOutputType[P]>
            : GetScalarType<T[P], HostProfileGroupByOutputType[P]>
        }
      >
    >


  export type HostProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    taxId?: boolean
    bankAccount?: boolean
    payoutEmail?: boolean
    totalListings?: boolean
    totalBookings?: boolean
    averageRating?: boolean
    responseTime?: boolean
    acceptanceRate?: boolean
    cancellationPolicy?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostProfile"]>

  export type HostProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    taxId?: boolean
    bankAccount?: boolean
    payoutEmail?: boolean
    totalListings?: boolean
    totalBookings?: boolean
    averageRating?: boolean
    responseTime?: boolean
    acceptanceRate?: boolean
    cancellationPolicy?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostProfile"]>

  export type HostProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    taxId?: boolean
    bankAccount?: boolean
    payoutEmail?: boolean
    totalListings?: boolean
    totalBookings?: boolean
    averageRating?: boolean
    responseTime?: boolean
    acceptanceRate?: boolean
    cancellationPolicy?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostProfile"]>

  export type HostProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    taxId?: boolean
    bankAccount?: boolean
    payoutEmail?: boolean
    totalListings?: boolean
    totalBookings?: boolean
    averageRating?: boolean
    responseTime?: boolean
    acceptanceRate?: boolean
    cancellationPolicy?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HostProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "taxId" | "bankAccount" | "payoutEmail" | "totalListings" | "totalBookings" | "averageRating" | "responseTime" | "acceptanceRate" | "cancellationPolicy" | "certifications" | "createdAt" | "updatedAt", ExtArgs["result"]["hostProfile"]>
  export type HostProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HostProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HostProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HostProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HostProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string | null
      taxId: string | null
      bankAccount: string | null
      payoutEmail: string | null
      totalListings: number
      totalBookings: number
      averageRating: number
      responseTime: number
      acceptanceRate: number
      cancellationPolicy: $Enums.CancellationPolicy
      certifications: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hostProfile"]>
    composites: {}
  }

  type HostProfileGetPayload<S extends boolean | null | undefined | HostProfileDefaultArgs> = $Result.GetResult<Prisma.$HostProfilePayload, S>

  type HostProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostProfileCountAggregateInputType | true
    }

  export interface HostProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HostProfile'], meta: { name: 'HostProfile' } }
    /**
     * Find zero or one HostProfile that matches the filter.
     * @param {HostProfileFindUniqueArgs} args - Arguments to find a HostProfile
     * @example
     * // Get one HostProfile
     * const hostProfile = await prisma.hostProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostProfileFindUniqueArgs>(args: SelectSubset<T, HostProfileFindUniqueArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HostProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostProfileFindUniqueOrThrowArgs} args - Arguments to find a HostProfile
     * @example
     * // Get one HostProfile
     * const hostProfile = await prisma.hostProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, HostProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HostProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileFindFirstArgs} args - Arguments to find a HostProfile
     * @example
     * // Get one HostProfile
     * const hostProfile = await prisma.hostProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostProfileFindFirstArgs>(args?: SelectSubset<T, HostProfileFindFirstArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HostProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileFindFirstOrThrowArgs} args - Arguments to find a HostProfile
     * @example
     * // Get one HostProfile
     * const hostProfile = await prisma.hostProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, HostProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HostProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HostProfiles
     * const hostProfiles = await prisma.hostProfile.findMany()
     * 
     * // Get first 10 HostProfiles
     * const hostProfiles = await prisma.hostProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostProfileWithIdOnly = await prisma.hostProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostProfileFindManyArgs>(args?: SelectSubset<T, HostProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HostProfile.
     * @param {HostProfileCreateArgs} args - Arguments to create a HostProfile.
     * @example
     * // Create one HostProfile
     * const HostProfile = await prisma.hostProfile.create({
     *   data: {
     *     // ... data to create a HostProfile
     *   }
     * })
     * 
     */
    create<T extends HostProfileCreateArgs>(args: SelectSubset<T, HostProfileCreateArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HostProfiles.
     * @param {HostProfileCreateManyArgs} args - Arguments to create many HostProfiles.
     * @example
     * // Create many HostProfiles
     * const hostProfile = await prisma.hostProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostProfileCreateManyArgs>(args?: SelectSubset<T, HostProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HostProfiles and returns the data saved in the database.
     * @param {HostProfileCreateManyAndReturnArgs} args - Arguments to create many HostProfiles.
     * @example
     * // Create many HostProfiles
     * const hostProfile = await prisma.hostProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HostProfiles and only return the `id`
     * const hostProfileWithIdOnly = await prisma.hostProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HostProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, HostProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HostProfile.
     * @param {HostProfileDeleteArgs} args - Arguments to delete one HostProfile.
     * @example
     * // Delete one HostProfile
     * const HostProfile = await prisma.hostProfile.delete({
     *   where: {
     *     // ... filter to delete one HostProfile
     *   }
     * })
     * 
     */
    delete<T extends HostProfileDeleteArgs>(args: SelectSubset<T, HostProfileDeleteArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HostProfile.
     * @param {HostProfileUpdateArgs} args - Arguments to update one HostProfile.
     * @example
     * // Update one HostProfile
     * const hostProfile = await prisma.hostProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostProfileUpdateArgs>(args: SelectSubset<T, HostProfileUpdateArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HostProfiles.
     * @param {HostProfileDeleteManyArgs} args - Arguments to filter HostProfiles to delete.
     * @example
     * // Delete a few HostProfiles
     * const { count } = await prisma.hostProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostProfileDeleteManyArgs>(args?: SelectSubset<T, HostProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HostProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HostProfiles
     * const hostProfile = await prisma.hostProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostProfileUpdateManyArgs>(args: SelectSubset<T, HostProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HostProfiles and returns the data updated in the database.
     * @param {HostProfileUpdateManyAndReturnArgs} args - Arguments to update many HostProfiles.
     * @example
     * // Update many HostProfiles
     * const hostProfile = await prisma.hostProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HostProfiles and only return the `id`
     * const hostProfileWithIdOnly = await prisma.hostProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HostProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, HostProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HostProfile.
     * @param {HostProfileUpsertArgs} args - Arguments to update or create a HostProfile.
     * @example
     * // Update or create a HostProfile
     * const hostProfile = await prisma.hostProfile.upsert({
     *   create: {
     *     // ... data to create a HostProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HostProfile we want to update
     *   }
     * })
     */
    upsert<T extends HostProfileUpsertArgs>(args: SelectSubset<T, HostProfileUpsertArgs<ExtArgs>>): Prisma__HostProfileClient<$Result.GetResult<Prisma.$HostProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HostProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileCountArgs} args - Arguments to filter HostProfiles to count.
     * @example
     * // Count the number of HostProfiles
     * const count = await prisma.hostProfile.count({
     *   where: {
     *     // ... the filter for the HostProfiles we want to count
     *   }
     * })
    **/
    count<T extends HostProfileCountArgs>(
      args?: Subset<T, HostProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HostProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HostProfileAggregateArgs>(args: Subset<T, HostProfileAggregateArgs>): Prisma.PrismaPromise<GetHostProfileAggregateType<T>>

    /**
     * Group by HostProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostProfileGroupByArgs} args - Group by arguments.
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
      T extends HostProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostProfileGroupByArgs['orderBy'] }
        : { orderBy?: HostProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HostProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HostProfile model
   */
  readonly fields: HostProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HostProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HostProfile model
   */
  interface HostProfileFieldRefs {
    readonly id: FieldRef<"HostProfile", 'String'>
    readonly userId: FieldRef<"HostProfile", 'String'>
    readonly companyName: FieldRef<"HostProfile", 'String'>
    readonly taxId: FieldRef<"HostProfile", 'String'>
    readonly bankAccount: FieldRef<"HostProfile", 'String'>
    readonly payoutEmail: FieldRef<"HostProfile", 'String'>
    readonly totalListings: FieldRef<"HostProfile", 'Int'>
    readonly totalBookings: FieldRef<"HostProfile", 'Int'>
    readonly averageRating: FieldRef<"HostProfile", 'Float'>
    readonly responseTime: FieldRef<"HostProfile", 'Int'>
    readonly acceptanceRate: FieldRef<"HostProfile", 'Float'>
    readonly cancellationPolicy: FieldRef<"HostProfile", 'CancellationPolicy'>
    readonly certifications: FieldRef<"HostProfile", 'String[]'>
    readonly createdAt: FieldRef<"HostProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"HostProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HostProfile findUnique
   */
  export type HostProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * Filter, which HostProfile to fetch.
     */
    where: HostProfileWhereUniqueInput
  }

  /**
   * HostProfile findUniqueOrThrow
   */
  export type HostProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * Filter, which HostProfile to fetch.
     */
    where: HostProfileWhereUniqueInput
  }

  /**
   * HostProfile findFirst
   */
  export type HostProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * Filter, which HostProfile to fetch.
     */
    where?: HostProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostProfiles to fetch.
     */
    orderBy?: HostProfileOrderByWithRelationInput | HostProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HostProfiles.
     */
    cursor?: HostProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HostProfiles.
     */
    distinct?: HostProfileScalarFieldEnum | HostProfileScalarFieldEnum[]
  }

  /**
   * HostProfile findFirstOrThrow
   */
  export type HostProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * Filter, which HostProfile to fetch.
     */
    where?: HostProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostProfiles to fetch.
     */
    orderBy?: HostProfileOrderByWithRelationInput | HostProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HostProfiles.
     */
    cursor?: HostProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HostProfiles.
     */
    distinct?: HostProfileScalarFieldEnum | HostProfileScalarFieldEnum[]
  }

  /**
   * HostProfile findMany
   */
  export type HostProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * Filter, which HostProfiles to fetch.
     */
    where?: HostProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostProfiles to fetch.
     */
    orderBy?: HostProfileOrderByWithRelationInput | HostProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HostProfiles.
     */
    cursor?: HostProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostProfiles.
     */
    skip?: number
    distinct?: HostProfileScalarFieldEnum | HostProfileScalarFieldEnum[]
  }

  /**
   * HostProfile create
   */
  export type HostProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a HostProfile.
     */
    data: XOR<HostProfileCreateInput, HostProfileUncheckedCreateInput>
  }

  /**
   * HostProfile createMany
   */
  export type HostProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HostProfiles.
     */
    data: HostProfileCreateManyInput | HostProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HostProfile createManyAndReturn
   */
  export type HostProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * The data used to create many HostProfiles.
     */
    data: HostProfileCreateManyInput | HostProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HostProfile update
   */
  export type HostProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a HostProfile.
     */
    data: XOR<HostProfileUpdateInput, HostProfileUncheckedUpdateInput>
    /**
     * Choose, which HostProfile to update.
     */
    where: HostProfileWhereUniqueInput
  }

  /**
   * HostProfile updateMany
   */
  export type HostProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HostProfiles.
     */
    data: XOR<HostProfileUpdateManyMutationInput, HostProfileUncheckedUpdateManyInput>
    /**
     * Filter which HostProfiles to update
     */
    where?: HostProfileWhereInput
    /**
     * Limit how many HostProfiles to update.
     */
    limit?: number
  }

  /**
   * HostProfile updateManyAndReturn
   */
  export type HostProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * The data used to update HostProfiles.
     */
    data: XOR<HostProfileUpdateManyMutationInput, HostProfileUncheckedUpdateManyInput>
    /**
     * Filter which HostProfiles to update
     */
    where?: HostProfileWhereInput
    /**
     * Limit how many HostProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HostProfile upsert
   */
  export type HostProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the HostProfile to update in case it exists.
     */
    where: HostProfileWhereUniqueInput
    /**
     * In case the HostProfile found by the `where` argument doesn't exist, create a new HostProfile with this data.
     */
    create: XOR<HostProfileCreateInput, HostProfileUncheckedCreateInput>
    /**
     * In case the HostProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostProfileUpdateInput, HostProfileUncheckedUpdateInput>
  }

  /**
   * HostProfile delete
   */
  export type HostProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
    /**
     * Filter which HostProfile to delete.
     */
    where: HostProfileWhereUniqueInput
  }

  /**
   * HostProfile deleteMany
   */
  export type HostProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HostProfiles to delete
     */
    where?: HostProfileWhereInput
    /**
     * Limit how many HostProfiles to delete.
     */
    limit?: number
  }

  /**
   * HostProfile without action
   */
  export type HostProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostProfile
     */
    select?: HostProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostProfile
     */
    omit?: HostProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostProfileInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    basePrice: Decimal | null
    maxGuests: number | null
    bedrooms: number | null
    bathrooms: number | null
    beds: number | null
    views: number | null
  }

  export type ListingSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    basePrice: Decimal | null
    maxGuests: number | null
    bedrooms: number | null
    bathrooms: number | null
    beds: number | null
    views: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    hostId: string | null
    title: string | null
    description: string | null
    category: $Enums.ListingCategory | null
    propertyType: $Enums.PropertyType | null
    location: string | null
    latitude: number | null
    longitude: number | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    basePrice: Decimal | null
    currency: string | null
    pricePerUnit: $Enums.PriceUnit | null
    maxGuests: number | null
    bedrooms: number | null
    bathrooms: number | null
    beds: number | null
    directBookingUrl: string | null
    bookingPlatform: $Enums.BookingPlatform | null
    isActive: boolean | null
    isFeatured: boolean | null
    views: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    hostId: string | null
    title: string | null
    description: string | null
    category: $Enums.ListingCategory | null
    propertyType: $Enums.PropertyType | null
    location: string | null
    latitude: number | null
    longitude: number | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    basePrice: Decimal | null
    currency: string | null
    pricePerUnit: $Enums.PriceUnit | null
    maxGuests: number | null
    bedrooms: number | null
    bathrooms: number | null
    beds: number | null
    directBookingUrl: string | null
    bookingPlatform: $Enums.BookingPlatform | null
    isActive: boolean | null
    isFeatured: boolean | null
    views: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    hostId: number
    title: number
    description: number
    category: number
    propertyType: number
    location: number
    latitude: number
    longitude: number
    city: number
    state: number
    country: number
    postalCode: number
    basePrice: number
    currency: number
    pricePerUnit: number
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: number
    bookingPlatform: number
    amenities: number
    rules: number
    languages: number
    isActive: number
    isFeatured: number
    views: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    basePrice?: true
    maxGuests?: true
    bedrooms?: true
    bathrooms?: true
    beds?: true
    views?: true
  }

  export type ListingSumAggregateInputType = {
    latitude?: true
    longitude?: true
    basePrice?: true
    maxGuests?: true
    bedrooms?: true
    bathrooms?: true
    beds?: true
    views?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    hostId?: true
    title?: true
    description?: true
    category?: true
    propertyType?: true
    location?: true
    latitude?: true
    longitude?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    basePrice?: true
    currency?: true
    pricePerUnit?: true
    maxGuests?: true
    bedrooms?: true
    bathrooms?: true
    beds?: true
    directBookingUrl?: true
    bookingPlatform?: true
    isActive?: true
    isFeatured?: true
    views?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    hostId?: true
    title?: true
    description?: true
    category?: true
    propertyType?: true
    location?: true
    latitude?: true
    longitude?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    basePrice?: true
    currency?: true
    pricePerUnit?: true
    maxGuests?: true
    bedrooms?: true
    bathrooms?: true
    beds?: true
    directBookingUrl?: true
    bookingPlatform?: true
    isActive?: true
    isFeatured?: true
    views?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    hostId?: true
    title?: true
    description?: true
    category?: true
    propertyType?: true
    location?: true
    latitude?: true
    longitude?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    basePrice?: true
    currency?: true
    pricePerUnit?: true
    maxGuests?: true
    bedrooms?: true
    bathrooms?: true
    beds?: true
    directBookingUrl?: true
    bookingPlatform?: true
    amenities?: true
    rules?: true
    languages?: true
    isActive?: true
    isFeatured?: true
    views?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    hostId: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude: number | null
    longitude: number | null
    city: string
    state: string | null
    country: string
    postalCode: string | null
    basePrice: Decimal
    currency: string
    pricePerUnit: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform: $Enums.BookingPlatform | null
    amenities: string[]
    rules: string[]
    languages: string[]
    isActive: boolean
    isFeatured: boolean
    views: number
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    propertyType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    basePrice?: boolean
    currency?: boolean
    pricePerUnit?: boolean
    maxGuests?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    beds?: boolean
    directBookingUrl?: boolean
    bookingPlatform?: boolean
    amenities?: boolean
    rules?: boolean
    languages?: boolean
    isActive?: boolean
    isFeatured?: boolean
    views?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Listing$imagesArgs<ExtArgs>
    savedBy?: boolean | Listing$savedByArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    propertyType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    basePrice?: boolean
    currency?: boolean
    pricePerUnit?: boolean
    maxGuests?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    beds?: boolean
    directBookingUrl?: boolean
    bookingPlatform?: boolean
    amenities?: boolean
    rules?: boolean
    languages?: boolean
    isActive?: boolean
    isFeatured?: boolean
    views?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    propertyType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    basePrice?: boolean
    currency?: boolean
    pricePerUnit?: boolean
    maxGuests?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    beds?: boolean
    directBookingUrl?: boolean
    bookingPlatform?: boolean
    amenities?: boolean
    rules?: boolean
    languages?: boolean
    isActive?: boolean
    isFeatured?: boolean
    views?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    hostId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    propertyType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    basePrice?: boolean
    currency?: boolean
    pricePerUnit?: boolean
    maxGuests?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    beds?: boolean
    directBookingUrl?: boolean
    bookingPlatform?: boolean
    amenities?: boolean
    rules?: boolean
    languages?: boolean
    isActive?: boolean
    isFeatured?: boolean
    views?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hostId" | "title" | "description" | "category" | "propertyType" | "location" | "latitude" | "longitude" | "city" | "state" | "country" | "postalCode" | "basePrice" | "currency" | "pricePerUnit" | "maxGuests" | "bedrooms" | "bathrooms" | "beds" | "directBookingUrl" | "bookingPlatform" | "amenities" | "rules" | "languages" | "isActive" | "isFeatured" | "views" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Listing$imagesArgs<ExtArgs>
    savedBy?: boolean | Listing$savedByArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ListingImagePayload<ExtArgs>[]
      savedBy: Prisma.$SavedListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hostId: string
      title: string
      description: string
      category: $Enums.ListingCategory
      propertyType: $Enums.PropertyType
      location: string
      latitude: number | null
      longitude: number | null
      city: string
      state: string | null
      country: string
      postalCode: string | null
      basePrice: Prisma.Decimal
      currency: string
      pricePerUnit: $Enums.PriceUnit
      maxGuests: number
      bedrooms: number
      bathrooms: number
      beds: number
      directBookingUrl: string
      bookingPlatform: $Enums.BookingPlatform | null
      amenities: string[]
      rules: string[]
      languages: string[]
      isActive: boolean
      isFeatured: boolean
      views: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Listing$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Listing$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Listing$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly hostId: FieldRef<"Listing", 'String'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly category: FieldRef<"Listing", 'ListingCategory'>
    readonly propertyType: FieldRef<"Listing", 'PropertyType'>
    readonly location: FieldRef<"Listing", 'String'>
    readonly latitude: FieldRef<"Listing", 'Float'>
    readonly longitude: FieldRef<"Listing", 'Float'>
    readonly city: FieldRef<"Listing", 'String'>
    readonly state: FieldRef<"Listing", 'String'>
    readonly country: FieldRef<"Listing", 'String'>
    readonly postalCode: FieldRef<"Listing", 'String'>
    readonly basePrice: FieldRef<"Listing", 'Decimal'>
    readonly currency: FieldRef<"Listing", 'String'>
    readonly pricePerUnit: FieldRef<"Listing", 'PriceUnit'>
    readonly maxGuests: FieldRef<"Listing", 'Int'>
    readonly bedrooms: FieldRef<"Listing", 'Int'>
    readonly bathrooms: FieldRef<"Listing", 'Int'>
    readonly beds: FieldRef<"Listing", 'Int'>
    readonly directBookingUrl: FieldRef<"Listing", 'String'>
    readonly bookingPlatform: FieldRef<"Listing", 'BookingPlatform'>
    readonly amenities: FieldRef<"Listing", 'String[]'>
    readonly rules: FieldRef<"Listing", 'String[]'>
    readonly languages: FieldRef<"Listing", 'String[]'>
    readonly isActive: FieldRef<"Listing", 'Boolean'>
    readonly isFeatured: FieldRef<"Listing", 'Boolean'>
    readonly views: FieldRef<"Listing", 'Int'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.images
   */
  export type Listing$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    where?: ListingImageWhereInput
    orderBy?: ListingImageOrderByWithRelationInput | ListingImageOrderByWithRelationInput[]
    cursor?: ListingImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingImageScalarFieldEnum | ListingImageScalarFieldEnum[]
  }

  /**
   * Listing.savedBy
   */
  export type Listing$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    where?: SavedListingWhereInput
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    cursor?: SavedListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model ListingImage
   */

  export type AggregateListingImage = {
    _count: ListingImageCountAggregateOutputType | null
    _avg: ListingImageAvgAggregateOutputType | null
    _sum: ListingImageSumAggregateOutputType | null
    _min: ListingImageMinAggregateOutputType | null
    _max: ListingImageMaxAggregateOutputType | null
  }

  export type ListingImageAvgAggregateOutputType = {
    order: number | null
  }

  export type ListingImageSumAggregateOutputType = {
    order: number | null
  }

  export type ListingImageMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    url: string | null
    altText: string | null
    order: number | null
    createdAt: Date | null
  }

  export type ListingImageMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    url: string | null
    altText: string | null
    order: number | null
    createdAt: Date | null
  }

  export type ListingImageCountAggregateOutputType = {
    id: number
    listingId: number
    url: number
    altText: number
    order: number
    createdAt: number
    _all: number
  }


  export type ListingImageAvgAggregateInputType = {
    order?: true
  }

  export type ListingImageSumAggregateInputType = {
    order?: true
  }

  export type ListingImageMinAggregateInputType = {
    id?: true
    listingId?: true
    url?: true
    altText?: true
    order?: true
    createdAt?: true
  }

  export type ListingImageMaxAggregateInputType = {
    id?: true
    listingId?: true
    url?: true
    altText?: true
    order?: true
    createdAt?: true
  }

  export type ListingImageCountAggregateInputType = {
    id?: true
    listingId?: true
    url?: true
    altText?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type ListingImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingImage to aggregate.
     */
    where?: ListingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingImages to fetch.
     */
    orderBy?: ListingImageOrderByWithRelationInput | ListingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingImages
    **/
    _count?: true | ListingImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingImageMaxAggregateInputType
  }

  export type GetListingImageAggregateType<T extends ListingImageAggregateArgs> = {
        [P in keyof T & keyof AggregateListingImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingImage[P]>
      : GetScalarType<T[P], AggregateListingImage[P]>
  }




  export type ListingImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingImageWhereInput
    orderBy?: ListingImageOrderByWithAggregationInput | ListingImageOrderByWithAggregationInput[]
    by: ListingImageScalarFieldEnum[] | ListingImageScalarFieldEnum
    having?: ListingImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingImageCountAggregateInputType | true
    _avg?: ListingImageAvgAggregateInputType
    _sum?: ListingImageSumAggregateInputType
    _min?: ListingImageMinAggregateInputType
    _max?: ListingImageMaxAggregateInputType
  }

  export type ListingImageGroupByOutputType = {
    id: string
    listingId: string
    url: string
    altText: string | null
    order: number
    createdAt: Date
    _count: ListingImageCountAggregateOutputType | null
    _avg: ListingImageAvgAggregateOutputType | null
    _sum: ListingImageSumAggregateOutputType | null
    _min: ListingImageMinAggregateOutputType | null
    _max: ListingImageMaxAggregateOutputType | null
  }

  type GetListingImageGroupByPayload<T extends ListingImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingImageGroupByOutputType[P]>
            : GetScalarType<T[P], ListingImageGroupByOutputType[P]>
        }
      >
    >


  export type ListingImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingImage"]>

  export type ListingImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingImage"]>

  export type ListingImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingImage"]>

  export type ListingImageSelectScalar = {
    id?: boolean
    listingId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type ListingImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "url" | "altText" | "order" | "createdAt", ExtArgs["result"]["listingImage"]>
  export type ListingImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type ListingImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type ListingImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $ListingImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingImage"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      url: string
      altText: string | null
      order: number
      createdAt: Date
    }, ExtArgs["result"]["listingImage"]>
    composites: {}
  }

  type ListingImageGetPayload<S extends boolean | null | undefined | ListingImageDefaultArgs> = $Result.GetResult<Prisma.$ListingImagePayload, S>

  type ListingImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingImageCountAggregateInputType | true
    }

  export interface ListingImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingImage'], meta: { name: 'ListingImage' } }
    /**
     * Find zero or one ListingImage that matches the filter.
     * @param {ListingImageFindUniqueArgs} args - Arguments to find a ListingImage
     * @example
     * // Get one ListingImage
     * const listingImage = await prisma.listingImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingImageFindUniqueArgs>(args: SelectSubset<T, ListingImageFindUniqueArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingImageFindUniqueOrThrowArgs} args - Arguments to find a ListingImage
     * @example
     * // Get one ListingImage
     * const listingImage = await prisma.listingImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageFindFirstArgs} args - Arguments to find a ListingImage
     * @example
     * // Get one ListingImage
     * const listingImage = await prisma.listingImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingImageFindFirstArgs>(args?: SelectSubset<T, ListingImageFindFirstArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageFindFirstOrThrowArgs} args - Arguments to find a ListingImage
     * @example
     * // Get one ListingImage
     * const listingImage = await prisma.listingImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingImages
     * const listingImages = await prisma.listingImage.findMany()
     * 
     * // Get first 10 ListingImages
     * const listingImages = await prisma.listingImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingImageWithIdOnly = await prisma.listingImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingImageFindManyArgs>(args?: SelectSubset<T, ListingImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingImage.
     * @param {ListingImageCreateArgs} args - Arguments to create a ListingImage.
     * @example
     * // Create one ListingImage
     * const ListingImage = await prisma.listingImage.create({
     *   data: {
     *     // ... data to create a ListingImage
     *   }
     * })
     * 
     */
    create<T extends ListingImageCreateArgs>(args: SelectSubset<T, ListingImageCreateArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingImages.
     * @param {ListingImageCreateManyArgs} args - Arguments to create many ListingImages.
     * @example
     * // Create many ListingImages
     * const listingImage = await prisma.listingImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingImageCreateManyArgs>(args?: SelectSubset<T, ListingImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingImages and returns the data saved in the database.
     * @param {ListingImageCreateManyAndReturnArgs} args - Arguments to create many ListingImages.
     * @example
     * // Create many ListingImages
     * const listingImage = await prisma.listingImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingImages and only return the `id`
     * const listingImageWithIdOnly = await prisma.listingImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingImage.
     * @param {ListingImageDeleteArgs} args - Arguments to delete one ListingImage.
     * @example
     * // Delete one ListingImage
     * const ListingImage = await prisma.listingImage.delete({
     *   where: {
     *     // ... filter to delete one ListingImage
     *   }
     * })
     * 
     */
    delete<T extends ListingImageDeleteArgs>(args: SelectSubset<T, ListingImageDeleteArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingImage.
     * @param {ListingImageUpdateArgs} args - Arguments to update one ListingImage.
     * @example
     * // Update one ListingImage
     * const listingImage = await prisma.listingImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingImageUpdateArgs>(args: SelectSubset<T, ListingImageUpdateArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingImages.
     * @param {ListingImageDeleteManyArgs} args - Arguments to filter ListingImages to delete.
     * @example
     * // Delete a few ListingImages
     * const { count } = await prisma.listingImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingImageDeleteManyArgs>(args?: SelectSubset<T, ListingImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingImages
     * const listingImage = await prisma.listingImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingImageUpdateManyArgs>(args: SelectSubset<T, ListingImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingImages and returns the data updated in the database.
     * @param {ListingImageUpdateManyAndReturnArgs} args - Arguments to update many ListingImages.
     * @example
     * // Update many ListingImages
     * const listingImage = await prisma.listingImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingImages and only return the `id`
     * const listingImageWithIdOnly = await prisma.listingImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingImage.
     * @param {ListingImageUpsertArgs} args - Arguments to update or create a ListingImage.
     * @example
     * // Update or create a ListingImage
     * const listingImage = await prisma.listingImage.upsert({
     *   create: {
     *     // ... data to create a ListingImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingImage we want to update
     *   }
     * })
     */
    upsert<T extends ListingImageUpsertArgs>(args: SelectSubset<T, ListingImageUpsertArgs<ExtArgs>>): Prisma__ListingImageClient<$Result.GetResult<Prisma.$ListingImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageCountArgs} args - Arguments to filter ListingImages to count.
     * @example
     * // Count the number of ListingImages
     * const count = await prisma.listingImage.count({
     *   where: {
     *     // ... the filter for the ListingImages we want to count
     *   }
     * })
    **/
    count<T extends ListingImageCountArgs>(
      args?: Subset<T, ListingImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingImageAggregateArgs>(args: Subset<T, ListingImageAggregateArgs>): Prisma.PrismaPromise<GetListingImageAggregateType<T>>

    /**
     * Group by ListingImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingImageGroupByArgs} args - Group by arguments.
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
      T extends ListingImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingImageGroupByArgs['orderBy'] }
        : { orderBy?: ListingImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ListingImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingImage model
   */
  readonly fields: ListingImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListingImage model
   */
  interface ListingImageFieldRefs {
    readonly id: FieldRef<"ListingImage", 'String'>
    readonly listingId: FieldRef<"ListingImage", 'String'>
    readonly url: FieldRef<"ListingImage", 'String'>
    readonly altText: FieldRef<"ListingImage", 'String'>
    readonly order: FieldRef<"ListingImage", 'Int'>
    readonly createdAt: FieldRef<"ListingImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListingImage findUnique
   */
  export type ListingImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * Filter, which ListingImage to fetch.
     */
    where: ListingImageWhereUniqueInput
  }

  /**
   * ListingImage findUniqueOrThrow
   */
  export type ListingImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * Filter, which ListingImage to fetch.
     */
    where: ListingImageWhereUniqueInput
  }

  /**
   * ListingImage findFirst
   */
  export type ListingImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * Filter, which ListingImage to fetch.
     */
    where?: ListingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingImages to fetch.
     */
    orderBy?: ListingImageOrderByWithRelationInput | ListingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingImages.
     */
    cursor?: ListingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingImages.
     */
    distinct?: ListingImageScalarFieldEnum | ListingImageScalarFieldEnum[]
  }

  /**
   * ListingImage findFirstOrThrow
   */
  export type ListingImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * Filter, which ListingImage to fetch.
     */
    where?: ListingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingImages to fetch.
     */
    orderBy?: ListingImageOrderByWithRelationInput | ListingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingImages.
     */
    cursor?: ListingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingImages.
     */
    distinct?: ListingImageScalarFieldEnum | ListingImageScalarFieldEnum[]
  }

  /**
   * ListingImage findMany
   */
  export type ListingImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * Filter, which ListingImages to fetch.
     */
    where?: ListingImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingImages to fetch.
     */
    orderBy?: ListingImageOrderByWithRelationInput | ListingImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingImages.
     */
    cursor?: ListingImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingImages.
     */
    skip?: number
    distinct?: ListingImageScalarFieldEnum | ListingImageScalarFieldEnum[]
  }

  /**
   * ListingImage create
   */
  export type ListingImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ListingImage.
     */
    data: XOR<ListingImageCreateInput, ListingImageUncheckedCreateInput>
  }

  /**
   * ListingImage createMany
   */
  export type ListingImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingImages.
     */
    data: ListingImageCreateManyInput | ListingImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingImage createManyAndReturn
   */
  export type ListingImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * The data used to create many ListingImages.
     */
    data: ListingImageCreateManyInput | ListingImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingImage update
   */
  export type ListingImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ListingImage.
     */
    data: XOR<ListingImageUpdateInput, ListingImageUncheckedUpdateInput>
    /**
     * Choose, which ListingImage to update.
     */
    where: ListingImageWhereUniqueInput
  }

  /**
   * ListingImage updateMany
   */
  export type ListingImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingImages.
     */
    data: XOR<ListingImageUpdateManyMutationInput, ListingImageUncheckedUpdateManyInput>
    /**
     * Filter which ListingImages to update
     */
    where?: ListingImageWhereInput
    /**
     * Limit how many ListingImages to update.
     */
    limit?: number
  }

  /**
   * ListingImage updateManyAndReturn
   */
  export type ListingImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * The data used to update ListingImages.
     */
    data: XOR<ListingImageUpdateManyMutationInput, ListingImageUncheckedUpdateManyInput>
    /**
     * Filter which ListingImages to update
     */
    where?: ListingImageWhereInput
    /**
     * Limit how many ListingImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingImage upsert
   */
  export type ListingImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ListingImage to update in case it exists.
     */
    where: ListingImageWhereUniqueInput
    /**
     * In case the ListingImage found by the `where` argument doesn't exist, create a new ListingImage with this data.
     */
    create: XOR<ListingImageCreateInput, ListingImageUncheckedCreateInput>
    /**
     * In case the ListingImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingImageUpdateInput, ListingImageUncheckedUpdateInput>
  }

  /**
   * ListingImage delete
   */
  export type ListingImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
    /**
     * Filter which ListingImage to delete.
     */
    where: ListingImageWhereUniqueInput
  }

  /**
   * ListingImage deleteMany
   */
  export type ListingImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingImages to delete
     */
    where?: ListingImageWhereInput
    /**
     * Limit how many ListingImages to delete.
     */
    limit?: number
  }

  /**
   * ListingImage without action
   */
  export type ListingImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingImage
     */
    select?: ListingImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingImage
     */
    omit?: ListingImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingImageInclude<ExtArgs> | null
  }


  /**
   * Model SavedListing
   */

  export type AggregateSavedListing = {
    _count: SavedListingCountAggregateOutputType | null
    _min: SavedListingMinAggregateOutputType | null
    _max: SavedListingMaxAggregateOutputType | null
  }

  export type SavedListingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    listingId: string | null
    savedAt: Date | null
  }

  export type SavedListingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    listingId: string | null
    savedAt: Date | null
  }

  export type SavedListingCountAggregateOutputType = {
    id: number
    userId: number
    listingId: number
    savedAt: number
    _all: number
  }


  export type SavedListingMinAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    savedAt?: true
  }

  export type SavedListingMaxAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    savedAt?: true
  }

  export type SavedListingCountAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedListing to aggregate.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedListings
    **/
    _count?: true | SavedListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedListingMaxAggregateInputType
  }

  export type GetSavedListingAggregateType<T extends SavedListingAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedListing[P]>
      : GetScalarType<T[P], AggregateSavedListing[P]>
  }




  export type SavedListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedListingWhereInput
    orderBy?: SavedListingOrderByWithAggregationInput | SavedListingOrderByWithAggregationInput[]
    by: SavedListingScalarFieldEnum[] | SavedListingScalarFieldEnum
    having?: SavedListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedListingCountAggregateInputType | true
    _min?: SavedListingMinAggregateInputType
    _max?: SavedListingMaxAggregateInputType
  }

  export type SavedListingGroupByOutputType = {
    id: string
    userId: string
    listingId: string
    savedAt: Date
    _count: SavedListingCountAggregateOutputType | null
    _min: SavedListingMinAggregateOutputType | null
    _max: SavedListingMaxAggregateOutputType | null
  }

  type GetSavedListingGroupByPayload<T extends SavedListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedListingGroupByOutputType[P]>
            : GetScalarType<T[P], SavedListingGroupByOutputType[P]>
        }
      >
    >


  export type SavedListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedListing"]>

  export type SavedListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedListing"]>

  export type SavedListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedListing"]>

  export type SavedListingSelectScalar = {
    id?: boolean
    userId?: boolean
    listingId?: boolean
    savedAt?: boolean
  }

  export type SavedListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "listingId" | "savedAt", ExtArgs["result"]["savedListing"]>
  export type SavedListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type SavedListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type SavedListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $SavedListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedListing"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      listingId: string
      savedAt: Date
    }, ExtArgs["result"]["savedListing"]>
    composites: {}
  }

  type SavedListingGetPayload<S extends boolean | null | undefined | SavedListingDefaultArgs> = $Result.GetResult<Prisma.$SavedListingPayload, S>

  type SavedListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedListingCountAggregateInputType | true
    }

  export interface SavedListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedListing'], meta: { name: 'SavedListing' } }
    /**
     * Find zero or one SavedListing that matches the filter.
     * @param {SavedListingFindUniqueArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedListingFindUniqueArgs>(args: SelectSubset<T, SavedListingFindUniqueArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedListingFindUniqueOrThrowArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedListingFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingFindFirstArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedListingFindFirstArgs>(args?: SelectSubset<T, SavedListingFindFirstArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingFindFirstOrThrowArgs} args - Arguments to find a SavedListing
     * @example
     * // Get one SavedListing
     * const savedListing = await prisma.savedListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedListingFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedListings
     * const savedListings = await prisma.savedListing.findMany()
     * 
     * // Get first 10 SavedListings
     * const savedListings = await prisma.savedListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedListingWithIdOnly = await prisma.savedListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedListingFindManyArgs>(args?: SelectSubset<T, SavedListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedListing.
     * @param {SavedListingCreateArgs} args - Arguments to create a SavedListing.
     * @example
     * // Create one SavedListing
     * const SavedListing = await prisma.savedListing.create({
     *   data: {
     *     // ... data to create a SavedListing
     *   }
     * })
     * 
     */
    create<T extends SavedListingCreateArgs>(args: SelectSubset<T, SavedListingCreateArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedListings.
     * @param {SavedListingCreateManyArgs} args - Arguments to create many SavedListings.
     * @example
     * // Create many SavedListings
     * const savedListing = await prisma.savedListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedListingCreateManyArgs>(args?: SelectSubset<T, SavedListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedListings and returns the data saved in the database.
     * @param {SavedListingCreateManyAndReturnArgs} args - Arguments to create many SavedListings.
     * @example
     * // Create many SavedListings
     * const savedListing = await prisma.savedListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedListings and only return the `id`
     * const savedListingWithIdOnly = await prisma.savedListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedListingCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedListing.
     * @param {SavedListingDeleteArgs} args - Arguments to delete one SavedListing.
     * @example
     * // Delete one SavedListing
     * const SavedListing = await prisma.savedListing.delete({
     *   where: {
     *     // ... filter to delete one SavedListing
     *   }
     * })
     * 
     */
    delete<T extends SavedListingDeleteArgs>(args: SelectSubset<T, SavedListingDeleteArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedListing.
     * @param {SavedListingUpdateArgs} args - Arguments to update one SavedListing.
     * @example
     * // Update one SavedListing
     * const savedListing = await prisma.savedListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedListingUpdateArgs>(args: SelectSubset<T, SavedListingUpdateArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedListings.
     * @param {SavedListingDeleteManyArgs} args - Arguments to filter SavedListings to delete.
     * @example
     * // Delete a few SavedListings
     * const { count } = await prisma.savedListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedListingDeleteManyArgs>(args?: SelectSubset<T, SavedListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedListings
     * const savedListing = await prisma.savedListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedListingUpdateManyArgs>(args: SelectSubset<T, SavedListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedListings and returns the data updated in the database.
     * @param {SavedListingUpdateManyAndReturnArgs} args - Arguments to update many SavedListings.
     * @example
     * // Update many SavedListings
     * const savedListing = await prisma.savedListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedListings and only return the `id`
     * const savedListingWithIdOnly = await prisma.savedListing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedListingUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedListing.
     * @param {SavedListingUpsertArgs} args - Arguments to update or create a SavedListing.
     * @example
     * // Update or create a SavedListing
     * const savedListing = await prisma.savedListing.upsert({
     *   create: {
     *     // ... data to create a SavedListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedListing we want to update
     *   }
     * })
     */
    upsert<T extends SavedListingUpsertArgs>(args: SelectSubset<T, SavedListingUpsertArgs<ExtArgs>>): Prisma__SavedListingClient<$Result.GetResult<Prisma.$SavedListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingCountArgs} args - Arguments to filter SavedListings to count.
     * @example
     * // Count the number of SavedListings
     * const count = await prisma.savedListing.count({
     *   where: {
     *     // ... the filter for the SavedListings we want to count
     *   }
     * })
    **/
    count<T extends SavedListingCountArgs>(
      args?: Subset<T, SavedListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedListingAggregateArgs>(args: Subset<T, SavedListingAggregateArgs>): Prisma.PrismaPromise<GetSavedListingAggregateType<T>>

    /**
     * Group by SavedListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedListingGroupByArgs} args - Group by arguments.
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
      T extends SavedListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedListingGroupByArgs['orderBy'] }
        : { orderBy?: SavedListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SavedListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedListing model
   */
  readonly fields: SavedListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedListing model
   */
  interface SavedListingFieldRefs {
    readonly id: FieldRef<"SavedListing", 'String'>
    readonly userId: FieldRef<"SavedListing", 'String'>
    readonly listingId: FieldRef<"SavedListing", 'String'>
    readonly savedAt: FieldRef<"SavedListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedListing findUnique
   */
  export type SavedListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing findUniqueOrThrow
   */
  export type SavedListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing findFirst
   */
  export type SavedListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedListings.
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedListings.
     */
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * SavedListing findFirstOrThrow
   */
  export type SavedListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListing to fetch.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedListings.
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedListings.
     */
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * SavedListing findMany
   */
  export type SavedListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter, which SavedListings to fetch.
     */
    where?: SavedListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedListings to fetch.
     */
    orderBy?: SavedListingOrderByWithRelationInput | SavedListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedListings.
     */
    cursor?: SavedListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedListings.
     */
    skip?: number
    distinct?: SavedListingScalarFieldEnum | SavedListingScalarFieldEnum[]
  }

  /**
   * SavedListing create
   */
  export type SavedListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedListing.
     */
    data: XOR<SavedListingCreateInput, SavedListingUncheckedCreateInput>
  }

  /**
   * SavedListing createMany
   */
  export type SavedListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedListings.
     */
    data: SavedListingCreateManyInput | SavedListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedListing createManyAndReturn
   */
  export type SavedListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * The data used to create many SavedListings.
     */
    data: SavedListingCreateManyInput | SavedListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedListing update
   */
  export type SavedListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedListing.
     */
    data: XOR<SavedListingUpdateInput, SavedListingUncheckedUpdateInput>
    /**
     * Choose, which SavedListing to update.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing updateMany
   */
  export type SavedListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedListings.
     */
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyInput>
    /**
     * Filter which SavedListings to update
     */
    where?: SavedListingWhereInput
    /**
     * Limit how many SavedListings to update.
     */
    limit?: number
  }

  /**
   * SavedListing updateManyAndReturn
   */
  export type SavedListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * The data used to update SavedListings.
     */
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyInput>
    /**
     * Filter which SavedListings to update
     */
    where?: SavedListingWhereInput
    /**
     * Limit how many SavedListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedListing upsert
   */
  export type SavedListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedListing to update in case it exists.
     */
    where: SavedListingWhereUniqueInput
    /**
     * In case the SavedListing found by the `where` argument doesn't exist, create a new SavedListing with this data.
     */
    create: XOR<SavedListingCreateInput, SavedListingUncheckedCreateInput>
    /**
     * In case the SavedListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedListingUpdateInput, SavedListingUncheckedUpdateInput>
  }

  /**
   * SavedListing delete
   */
  export type SavedListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
    /**
     * Filter which SavedListing to delete.
     */
    where: SavedListingWhereUniqueInput
  }

  /**
   * SavedListing deleteMany
   */
  export type SavedListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedListings to delete
     */
    where?: SavedListingWhereInput
    /**
     * Limit how many SavedListings to delete.
     */
    limit?: number
  }

  /**
   * SavedListing without action
   */
  export type SavedListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedListing
     */
    select?: SavedListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedListing
     */
    omit?: SavedListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedListingInclude<ExtArgs> | null
  }


  /**
   * Model ListingView
   */

  export type AggregateListingView = {
    _count: ListingViewCountAggregateOutputType | null
    _min: ListingViewMinAggregateOutputType | null
    _max: ListingViewMaxAggregateOutputType | null
  }

  export type ListingViewMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    userId: string | null
    visitorIp: string | null
    userAgent: string | null
    referer: string | null
    viewedAt: Date | null
  }

  export type ListingViewMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    userId: string | null
    visitorIp: string | null
    userAgent: string | null
    referer: string | null
    viewedAt: Date | null
  }

  export type ListingViewCountAggregateOutputType = {
    id: number
    listingId: number
    userId: number
    visitorIp: number
    userAgent: number
    referer: number
    viewedAt: number
    _all: number
  }


  export type ListingViewMinAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    visitorIp?: true
    userAgent?: true
    referer?: true
    viewedAt?: true
  }

  export type ListingViewMaxAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    visitorIp?: true
    userAgent?: true
    referer?: true
    viewedAt?: true
  }

  export type ListingViewCountAggregateInputType = {
    id?: true
    listingId?: true
    userId?: true
    visitorIp?: true
    userAgent?: true
    referer?: true
    viewedAt?: true
    _all?: true
  }

  export type ListingViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingView to aggregate.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingViews
    **/
    _count?: true | ListingViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingViewMaxAggregateInputType
  }

  export type GetListingViewAggregateType<T extends ListingViewAggregateArgs> = {
        [P in keyof T & keyof AggregateListingView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingView[P]>
      : GetScalarType<T[P], AggregateListingView[P]>
  }




  export type ListingViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingViewWhereInput
    orderBy?: ListingViewOrderByWithAggregationInput | ListingViewOrderByWithAggregationInput[]
    by: ListingViewScalarFieldEnum[] | ListingViewScalarFieldEnum
    having?: ListingViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingViewCountAggregateInputType | true
    _min?: ListingViewMinAggregateInputType
    _max?: ListingViewMaxAggregateInputType
  }

  export type ListingViewGroupByOutputType = {
    id: string
    listingId: string
    userId: string | null
    visitorIp: string | null
    userAgent: string | null
    referer: string | null
    viewedAt: Date
    _count: ListingViewCountAggregateOutputType | null
    _min: ListingViewMinAggregateOutputType | null
    _max: ListingViewMaxAggregateOutputType | null
  }

  type GetListingViewGroupByPayload<T extends ListingViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingViewGroupByOutputType[P]>
            : GetScalarType<T[P], ListingViewGroupByOutputType[P]>
        }
      >
    >


  export type ListingViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    visitorIp?: boolean
    userAgent?: boolean
    referer?: boolean
    viewedAt?: boolean
  }, ExtArgs["result"]["listingView"]>

  export type ListingViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    visitorIp?: boolean
    userAgent?: boolean
    referer?: boolean
    viewedAt?: boolean
  }, ExtArgs["result"]["listingView"]>

  export type ListingViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    userId?: boolean
    visitorIp?: boolean
    userAgent?: boolean
    referer?: boolean
    viewedAt?: boolean
  }, ExtArgs["result"]["listingView"]>

  export type ListingViewSelectScalar = {
    id?: boolean
    listingId?: boolean
    userId?: boolean
    visitorIp?: boolean
    userAgent?: boolean
    referer?: boolean
    viewedAt?: boolean
  }

  export type ListingViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "userId" | "visitorIp" | "userAgent" | "referer" | "viewedAt", ExtArgs["result"]["listingView"]>

  export type $ListingViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      userId: string | null
      visitorIp: string | null
      userAgent: string | null
      referer: string | null
      viewedAt: Date
    }, ExtArgs["result"]["listingView"]>
    composites: {}
  }

  type ListingViewGetPayload<S extends boolean | null | undefined | ListingViewDefaultArgs> = $Result.GetResult<Prisma.$ListingViewPayload, S>

  type ListingViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingViewCountAggregateInputType | true
    }

  export interface ListingViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingView'], meta: { name: 'ListingView' } }
    /**
     * Find zero or one ListingView that matches the filter.
     * @param {ListingViewFindUniqueArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingViewFindUniqueArgs>(args: SelectSubset<T, ListingViewFindUniqueArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingViewFindUniqueOrThrowArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewFindFirstArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingViewFindFirstArgs>(args?: SelectSubset<T, ListingViewFindFirstArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewFindFirstOrThrowArgs} args - Arguments to find a ListingView
     * @example
     * // Get one ListingView
     * const listingView = await prisma.listingView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingViews
     * const listingViews = await prisma.listingView.findMany()
     * 
     * // Get first 10 ListingViews
     * const listingViews = await prisma.listingView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingViewWithIdOnly = await prisma.listingView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingViewFindManyArgs>(args?: SelectSubset<T, ListingViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingView.
     * @param {ListingViewCreateArgs} args - Arguments to create a ListingView.
     * @example
     * // Create one ListingView
     * const ListingView = await prisma.listingView.create({
     *   data: {
     *     // ... data to create a ListingView
     *   }
     * })
     * 
     */
    create<T extends ListingViewCreateArgs>(args: SelectSubset<T, ListingViewCreateArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingViews.
     * @param {ListingViewCreateManyArgs} args - Arguments to create many ListingViews.
     * @example
     * // Create many ListingViews
     * const listingView = await prisma.listingView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingViewCreateManyArgs>(args?: SelectSubset<T, ListingViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingViews and returns the data saved in the database.
     * @param {ListingViewCreateManyAndReturnArgs} args - Arguments to create many ListingViews.
     * @example
     * // Create many ListingViews
     * const listingView = await prisma.listingView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingViews and only return the `id`
     * const listingViewWithIdOnly = await prisma.listingView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingView.
     * @param {ListingViewDeleteArgs} args - Arguments to delete one ListingView.
     * @example
     * // Delete one ListingView
     * const ListingView = await prisma.listingView.delete({
     *   where: {
     *     // ... filter to delete one ListingView
     *   }
     * })
     * 
     */
    delete<T extends ListingViewDeleteArgs>(args: SelectSubset<T, ListingViewDeleteArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingView.
     * @param {ListingViewUpdateArgs} args - Arguments to update one ListingView.
     * @example
     * // Update one ListingView
     * const listingView = await prisma.listingView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingViewUpdateArgs>(args: SelectSubset<T, ListingViewUpdateArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingViews.
     * @param {ListingViewDeleteManyArgs} args - Arguments to filter ListingViews to delete.
     * @example
     * // Delete a few ListingViews
     * const { count } = await prisma.listingView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingViewDeleteManyArgs>(args?: SelectSubset<T, ListingViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingViews
     * const listingView = await prisma.listingView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingViewUpdateManyArgs>(args: SelectSubset<T, ListingViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingViews and returns the data updated in the database.
     * @param {ListingViewUpdateManyAndReturnArgs} args - Arguments to update many ListingViews.
     * @example
     * // Update many ListingViews
     * const listingView = await prisma.listingView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingViews and only return the `id`
     * const listingViewWithIdOnly = await prisma.listingView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingView.
     * @param {ListingViewUpsertArgs} args - Arguments to update or create a ListingView.
     * @example
     * // Update or create a ListingView
     * const listingView = await prisma.listingView.upsert({
     *   create: {
     *     // ... data to create a ListingView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingView we want to update
     *   }
     * })
     */
    upsert<T extends ListingViewUpsertArgs>(args: SelectSubset<T, ListingViewUpsertArgs<ExtArgs>>): Prisma__ListingViewClient<$Result.GetResult<Prisma.$ListingViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewCountArgs} args - Arguments to filter ListingViews to count.
     * @example
     * // Count the number of ListingViews
     * const count = await prisma.listingView.count({
     *   where: {
     *     // ... the filter for the ListingViews we want to count
     *   }
     * })
    **/
    count<T extends ListingViewCountArgs>(
      args?: Subset<T, ListingViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingViewAggregateArgs>(args: Subset<T, ListingViewAggregateArgs>): Prisma.PrismaPromise<GetListingViewAggregateType<T>>

    /**
     * Group by ListingView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingViewGroupByArgs} args - Group by arguments.
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
      T extends ListingViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingViewGroupByArgs['orderBy'] }
        : { orderBy?: ListingViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ListingViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingView model
   */
  readonly fields: ListingViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListingView model
   */
  interface ListingViewFieldRefs {
    readonly id: FieldRef<"ListingView", 'String'>
    readonly listingId: FieldRef<"ListingView", 'String'>
    readonly userId: FieldRef<"ListingView", 'String'>
    readonly visitorIp: FieldRef<"ListingView", 'String'>
    readonly userAgent: FieldRef<"ListingView", 'String'>
    readonly referer: FieldRef<"ListingView", 'String'>
    readonly viewedAt: FieldRef<"ListingView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListingView findUnique
   */
  export type ListingViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView findUniqueOrThrow
   */
  export type ListingViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView findFirst
   */
  export type ListingViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingViews.
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingViews.
     */
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * ListingView findFirstOrThrow
   */
  export type ListingViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Filter, which ListingView to fetch.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingViews.
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingViews.
     */
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * ListingView findMany
   */
  export type ListingViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Filter, which ListingViews to fetch.
     */
    where?: ListingViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingViews to fetch.
     */
    orderBy?: ListingViewOrderByWithRelationInput | ListingViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingViews.
     */
    cursor?: ListingViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingViews.
     */
    skip?: number
    distinct?: ListingViewScalarFieldEnum | ListingViewScalarFieldEnum[]
  }

  /**
   * ListingView create
   */
  export type ListingViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The data needed to create a ListingView.
     */
    data: XOR<ListingViewCreateInput, ListingViewUncheckedCreateInput>
  }

  /**
   * ListingView createMany
   */
  export type ListingViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingViews.
     */
    data: ListingViewCreateManyInput | ListingViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingView createManyAndReturn
   */
  export type ListingViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The data used to create many ListingViews.
     */
    data: ListingViewCreateManyInput | ListingViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingView update
   */
  export type ListingViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The data needed to update a ListingView.
     */
    data: XOR<ListingViewUpdateInput, ListingViewUncheckedUpdateInput>
    /**
     * Choose, which ListingView to update.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView updateMany
   */
  export type ListingViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingViews.
     */
    data: XOR<ListingViewUpdateManyMutationInput, ListingViewUncheckedUpdateManyInput>
    /**
     * Filter which ListingViews to update
     */
    where?: ListingViewWhereInput
    /**
     * Limit how many ListingViews to update.
     */
    limit?: number
  }

  /**
   * ListingView updateManyAndReturn
   */
  export type ListingViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The data used to update ListingViews.
     */
    data: XOR<ListingViewUpdateManyMutationInput, ListingViewUncheckedUpdateManyInput>
    /**
     * Filter which ListingViews to update
     */
    where?: ListingViewWhereInput
    /**
     * Limit how many ListingViews to update.
     */
    limit?: number
  }

  /**
   * ListingView upsert
   */
  export type ListingViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * The filter to search for the ListingView to update in case it exists.
     */
    where: ListingViewWhereUniqueInput
    /**
     * In case the ListingView found by the `where` argument doesn't exist, create a new ListingView with this data.
     */
    create: XOR<ListingViewCreateInput, ListingViewUncheckedCreateInput>
    /**
     * In case the ListingView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingViewUpdateInput, ListingViewUncheckedUpdateInput>
  }

  /**
   * ListingView delete
   */
  export type ListingViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
    /**
     * Filter which ListingView to delete.
     */
    where: ListingViewWhereUniqueInput
  }

  /**
   * ListingView deleteMany
   */
  export type ListingViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingViews to delete
     */
    where?: ListingViewWhereInput
    /**
     * Limit how many ListingViews to delete.
     */
    limit?: number
  }

  /**
   * ListingView without action
   */
  export type ListingViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingView
     */
    select?: ListingViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingView
     */
    omit?: ListingViewOmit<ExtArgs> | null
  }


  /**
   * Model SearchQuery
   */

  export type AggregateSearchQuery = {
    _count: SearchQueryCountAggregateOutputType | null
    _avg: SearchQueryAvgAggregateOutputType | null
    _sum: SearchQuerySumAggregateOutputType | null
    _min: SearchQueryMinAggregateOutputType | null
    _max: SearchQueryMaxAggregateOutputType | null
  }

  export type SearchQueryAvgAggregateOutputType = {
    resultCount: number | null
  }

  export type SearchQuerySumAggregateOutputType = {
    resultCount: number | null
  }

  export type SearchQueryMinAggregateOutputType = {
    id: string | null
    query: string | null
    city: string | null
    country: string | null
    resultCount: number | null
    searchedAt: Date | null
  }

  export type SearchQueryMaxAggregateOutputType = {
    id: string | null
    query: string | null
    city: string | null
    country: string | null
    resultCount: number | null
    searchedAt: Date | null
  }

  export type SearchQueryCountAggregateOutputType = {
    id: number
    query: number
    city: number
    country: number
    resultCount: number
    searchedAt: number
    _all: number
  }


  export type SearchQueryAvgAggregateInputType = {
    resultCount?: true
  }

  export type SearchQuerySumAggregateInputType = {
    resultCount?: true
  }

  export type SearchQueryMinAggregateInputType = {
    id?: true
    query?: true
    city?: true
    country?: true
    resultCount?: true
    searchedAt?: true
  }

  export type SearchQueryMaxAggregateInputType = {
    id?: true
    query?: true
    city?: true
    country?: true
    resultCount?: true
    searchedAt?: true
  }

  export type SearchQueryCountAggregateInputType = {
    id?: true
    query?: true
    city?: true
    country?: true
    resultCount?: true
    searchedAt?: true
    _all?: true
  }

  export type SearchQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchQuery to aggregate.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchQueries
    **/
    _count?: true | SearchQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchQueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchQuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchQueryMaxAggregateInputType
  }

  export type GetSearchQueryAggregateType<T extends SearchQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchQuery[P]>
      : GetScalarType<T[P], AggregateSearchQuery[P]>
  }




  export type SearchQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchQueryWhereInput
    orderBy?: SearchQueryOrderByWithAggregationInput | SearchQueryOrderByWithAggregationInput[]
    by: SearchQueryScalarFieldEnum[] | SearchQueryScalarFieldEnum
    having?: SearchQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchQueryCountAggregateInputType | true
    _avg?: SearchQueryAvgAggregateInputType
    _sum?: SearchQuerySumAggregateInputType
    _min?: SearchQueryMinAggregateInputType
    _max?: SearchQueryMaxAggregateInputType
  }

  export type SearchQueryGroupByOutputType = {
    id: string
    query: string
    city: string | null
    country: string | null
    resultCount: number
    searchedAt: Date
    _count: SearchQueryCountAggregateOutputType | null
    _avg: SearchQueryAvgAggregateOutputType | null
    _sum: SearchQuerySumAggregateOutputType | null
    _min: SearchQueryMinAggregateOutputType | null
    _max: SearchQueryMaxAggregateOutputType | null
  }

  type GetSearchQueryGroupByPayload<T extends SearchQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchQueryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchQueryGroupByOutputType[P]>
        }
      >
    >


  export type SearchQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    city?: boolean
    country?: boolean
    resultCount?: boolean
    searchedAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    city?: boolean
    country?: boolean
    resultCount?: boolean
    searchedAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    city?: boolean
    country?: boolean
    resultCount?: boolean
    searchedAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectScalar = {
    id?: boolean
    query?: boolean
    city?: boolean
    country?: boolean
    resultCount?: boolean
    searchedAt?: boolean
  }

  export type SearchQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "query" | "city" | "country" | "resultCount" | "searchedAt", ExtArgs["result"]["searchQuery"]>

  export type $SearchQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchQuery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      query: string
      city: string | null
      country: string | null
      resultCount: number
      searchedAt: Date
    }, ExtArgs["result"]["searchQuery"]>
    composites: {}
  }

  type SearchQueryGetPayload<S extends boolean | null | undefined | SearchQueryDefaultArgs> = $Result.GetResult<Prisma.$SearchQueryPayload, S>

  type SearchQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchQueryCountAggregateInputType | true
    }

  export interface SearchQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchQuery'], meta: { name: 'SearchQuery' } }
    /**
     * Find zero or one SearchQuery that matches the filter.
     * @param {SearchQueryFindUniqueArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchQueryFindUniqueArgs>(args: SelectSubset<T, SearchQueryFindUniqueArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchQueryFindUniqueOrThrowArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindFirstArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchQueryFindFirstArgs>(args?: SelectSubset<T, SearchQueryFindFirstArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindFirstOrThrowArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchQueries
     * const searchQueries = await prisma.searchQuery.findMany()
     * 
     * // Get first 10 SearchQueries
     * const searchQueries = await prisma.searchQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchQueryFindManyArgs>(args?: SelectSubset<T, SearchQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchQuery.
     * @param {SearchQueryCreateArgs} args - Arguments to create a SearchQuery.
     * @example
     * // Create one SearchQuery
     * const SearchQuery = await prisma.searchQuery.create({
     *   data: {
     *     // ... data to create a SearchQuery
     *   }
     * })
     * 
     */
    create<T extends SearchQueryCreateArgs>(args: SelectSubset<T, SearchQueryCreateArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchQueries.
     * @param {SearchQueryCreateManyArgs} args - Arguments to create many SearchQueries.
     * @example
     * // Create many SearchQueries
     * const searchQuery = await prisma.searchQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchQueryCreateManyArgs>(args?: SelectSubset<T, SearchQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchQueries and returns the data saved in the database.
     * @param {SearchQueryCreateManyAndReturnArgs} args - Arguments to create many SearchQueries.
     * @example
     * // Create many SearchQueries
     * const searchQuery = await prisma.searchQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchQueries and only return the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchQuery.
     * @param {SearchQueryDeleteArgs} args - Arguments to delete one SearchQuery.
     * @example
     * // Delete one SearchQuery
     * const SearchQuery = await prisma.searchQuery.delete({
     *   where: {
     *     // ... filter to delete one SearchQuery
     *   }
     * })
     * 
     */
    delete<T extends SearchQueryDeleteArgs>(args: SelectSubset<T, SearchQueryDeleteArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchQuery.
     * @param {SearchQueryUpdateArgs} args - Arguments to update one SearchQuery.
     * @example
     * // Update one SearchQuery
     * const searchQuery = await prisma.searchQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchQueryUpdateArgs>(args: SelectSubset<T, SearchQueryUpdateArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchQueries.
     * @param {SearchQueryDeleteManyArgs} args - Arguments to filter SearchQueries to delete.
     * @example
     * // Delete a few SearchQueries
     * const { count } = await prisma.searchQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchQueryDeleteManyArgs>(args?: SelectSubset<T, SearchQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchQueries
     * const searchQuery = await prisma.searchQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchQueryUpdateManyArgs>(args: SelectSubset<T, SearchQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchQueries and returns the data updated in the database.
     * @param {SearchQueryUpdateManyAndReturnArgs} args - Arguments to update many SearchQueries.
     * @example
     * // Update many SearchQueries
     * const searchQuery = await prisma.searchQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchQueries and only return the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchQuery.
     * @param {SearchQueryUpsertArgs} args - Arguments to update or create a SearchQuery.
     * @example
     * // Update or create a SearchQuery
     * const searchQuery = await prisma.searchQuery.upsert({
     *   create: {
     *     // ... data to create a SearchQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchQuery we want to update
     *   }
     * })
     */
    upsert<T extends SearchQueryUpsertArgs>(args: SelectSubset<T, SearchQueryUpsertArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryCountArgs} args - Arguments to filter SearchQueries to count.
     * @example
     * // Count the number of SearchQueries
     * const count = await prisma.searchQuery.count({
     *   where: {
     *     // ... the filter for the SearchQueries we want to count
     *   }
     * })
    **/
    count<T extends SearchQueryCountArgs>(
      args?: Subset<T, SearchQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchQueryAggregateArgs>(args: Subset<T, SearchQueryAggregateArgs>): Prisma.PrismaPromise<GetSearchQueryAggregateType<T>>

    /**
     * Group by SearchQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryGroupByArgs} args - Group by arguments.
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
      T extends SearchQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchQueryGroupByArgs['orderBy'] }
        : { orderBy?: SearchQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SearchQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchQuery model
   */
  readonly fields: SearchQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchQuery model
   */
  interface SearchQueryFieldRefs {
    readonly id: FieldRef<"SearchQuery", 'String'>
    readonly query: FieldRef<"SearchQuery", 'String'>
    readonly city: FieldRef<"SearchQuery", 'String'>
    readonly country: FieldRef<"SearchQuery", 'String'>
    readonly resultCount: FieldRef<"SearchQuery", 'Int'>
    readonly searchedAt: FieldRef<"SearchQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchQuery findUnique
   */
  export type SearchQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery findUniqueOrThrow
   */
  export type SearchQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery findFirst
   */
  export type SearchQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchQueries.
     */
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery findFirstOrThrow
   */
  export type SearchQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchQueries.
     */
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery findMany
   */
  export type SearchQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQueries to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery create
   */
  export type SearchQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data needed to create a SearchQuery.
     */
    data: XOR<SearchQueryCreateInput, SearchQueryUncheckedCreateInput>
  }

  /**
   * SearchQuery createMany
   */
  export type SearchQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchQueries.
     */
    data: SearchQueryCreateManyInput | SearchQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchQuery createManyAndReturn
   */
  export type SearchQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data used to create many SearchQueries.
     */
    data: SearchQueryCreateManyInput | SearchQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchQuery update
   */
  export type SearchQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data needed to update a SearchQuery.
     */
    data: XOR<SearchQueryUpdateInput, SearchQueryUncheckedUpdateInput>
    /**
     * Choose, which SearchQuery to update.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery updateMany
   */
  export type SearchQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchQueries.
     */
    data: XOR<SearchQueryUpdateManyMutationInput, SearchQueryUncheckedUpdateManyInput>
    /**
     * Filter which SearchQueries to update
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to update.
     */
    limit?: number
  }

  /**
   * SearchQuery updateManyAndReturn
   */
  export type SearchQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data used to update SearchQueries.
     */
    data: XOR<SearchQueryUpdateManyMutationInput, SearchQueryUncheckedUpdateManyInput>
    /**
     * Filter which SearchQueries to update
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to update.
     */
    limit?: number
  }

  /**
   * SearchQuery upsert
   */
  export type SearchQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The filter to search for the SearchQuery to update in case it exists.
     */
    where: SearchQueryWhereUniqueInput
    /**
     * In case the SearchQuery found by the `where` argument doesn't exist, create a new SearchQuery with this data.
     */
    create: XOR<SearchQueryCreateInput, SearchQueryUncheckedCreateInput>
    /**
     * In case the SearchQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchQueryUpdateInput, SearchQueryUncheckedUpdateInput>
  }

  /**
   * SearchQuery delete
   */
  export type SearchQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter which SearchQuery to delete.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery deleteMany
   */
  export type SearchQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchQueries to delete
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to delete.
     */
    limit?: number
  }

  /**
   * SearchQuery without action
   */
  export type SearchQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    avatar: 'avatar',
    phone: 'phone',
    bio: 'bio',
    userType: 'userType',
    isVerified: 'isVerified',
    verificationToken: 'verificationToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HostProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    taxId: 'taxId',
    bankAccount: 'bankAccount',
    payoutEmail: 'payoutEmail',
    totalListings: 'totalListings',
    totalBookings: 'totalBookings',
    averageRating: 'averageRating',
    responseTime: 'responseTime',
    acceptanceRate: 'acceptanceRate',
    cancellationPolicy: 'cancellationPolicy',
    certifications: 'certifications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HostProfileScalarFieldEnum = (typeof HostProfileScalarFieldEnum)[keyof typeof HostProfileScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    hostId: 'hostId',
    title: 'title',
    description: 'description',
    category: 'category',
    propertyType: 'propertyType',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    basePrice: 'basePrice',
    currency: 'currency',
    pricePerUnit: 'pricePerUnit',
    maxGuests: 'maxGuests',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    beds: 'beds',
    directBookingUrl: 'directBookingUrl',
    bookingPlatform: 'bookingPlatform',
    amenities: 'amenities',
    rules: 'rules',
    languages: 'languages',
    isActive: 'isActive',
    isFeatured: 'isFeatured',
    views: 'views',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const ListingImageScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    url: 'url',
    altText: 'altText',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type ListingImageScalarFieldEnum = (typeof ListingImageScalarFieldEnum)[keyof typeof ListingImageScalarFieldEnum]


  export const SavedListingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    listingId: 'listingId',
    savedAt: 'savedAt'
  };

  export type SavedListingScalarFieldEnum = (typeof SavedListingScalarFieldEnum)[keyof typeof SavedListingScalarFieldEnum]


  export const ListingViewScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    userId: 'userId',
    visitorIp: 'visitorIp',
    userAgent: 'userAgent',
    referer: 'referer',
    viewedAt: 'viewedAt'
  };

  export type ListingViewScalarFieldEnum = (typeof ListingViewScalarFieldEnum)[keyof typeof ListingViewScalarFieldEnum]


  export const SearchQueryScalarFieldEnum: {
    id: 'id',
    query: 'query',
    city: 'city',
    country: 'country',
    resultCount: 'resultCount',
    searchedAt: 'searchedAt'
  };

  export type SearchQueryScalarFieldEnum = (typeof SearchQueryScalarFieldEnum)[keyof typeof SearchQueryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CancellationPolicy'
   */
  export type EnumCancellationPolicyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancellationPolicy'>
    


  /**
   * Reference to a field of type 'CancellationPolicy[]'
   */
  export type ListEnumCancellationPolicyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancellationPolicy[]'>
    


  /**
   * Reference to a field of type 'ListingCategory'
   */
  export type EnumListingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingCategory'>
    


  /**
   * Reference to a field of type 'ListingCategory[]'
   */
  export type ListEnumListingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingCategory[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PriceUnit'
   */
  export type EnumPriceUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceUnit'>
    


  /**
   * Reference to a field of type 'PriceUnit[]'
   */
  export type ListEnumPriceUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceUnit[]'>
    


  /**
   * Reference to a field of type 'BookingPlatform'
   */
  export type EnumBookingPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingPlatform'>
    


  /**
   * Reference to a field of type 'BookingPlatform[]'
   */
  export type ListEnumBookingPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingPlatform[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    isVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingListRelationFilter
    savedListings?: SavedListingListRelationFilter
    hostProfile?: XOR<HostProfileNullableScalarRelationFilter, HostProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    userType?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listings?: ListingOrderByRelationAggregateInput
    savedListings?: SavedListingOrderByRelationAggregateInput
    hostProfile?: HostProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    verificationToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingListRelationFilter
    savedListings?: SavedListingListRelationFilter
    hostProfile?: XOR<HostProfileNullableScalarRelationFilter, HostProfileWhereInput> | null
  }, "id" | "email" | "verificationToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    userType?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HostProfileWhereInput = {
    AND?: HostProfileWhereInput | HostProfileWhereInput[]
    OR?: HostProfileWhereInput[]
    NOT?: HostProfileWhereInput | HostProfileWhereInput[]
    id?: StringFilter<"HostProfile"> | string
    userId?: StringFilter<"HostProfile"> | string
    companyName?: StringNullableFilter<"HostProfile"> | string | null
    taxId?: StringNullableFilter<"HostProfile"> | string | null
    bankAccount?: StringNullableFilter<"HostProfile"> | string | null
    payoutEmail?: StringNullableFilter<"HostProfile"> | string | null
    totalListings?: IntFilter<"HostProfile"> | number
    totalBookings?: IntFilter<"HostProfile"> | number
    averageRating?: FloatFilter<"HostProfile"> | number
    responseTime?: IntFilter<"HostProfile"> | number
    acceptanceRate?: FloatFilter<"HostProfile"> | number
    cancellationPolicy?: EnumCancellationPolicyFilter<"HostProfile"> | $Enums.CancellationPolicy
    certifications?: StringNullableListFilter<"HostProfile">
    createdAt?: DateTimeFilter<"HostProfile"> | Date | string
    updatedAt?: DateTimeFilter<"HostProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HostProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    taxId?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    payoutEmail?: SortOrderInput | SortOrder
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
    cancellationPolicy?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HostProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: HostProfileWhereInput | HostProfileWhereInput[]
    OR?: HostProfileWhereInput[]
    NOT?: HostProfileWhereInput | HostProfileWhereInput[]
    companyName?: StringNullableFilter<"HostProfile"> | string | null
    taxId?: StringNullableFilter<"HostProfile"> | string | null
    bankAccount?: StringNullableFilter<"HostProfile"> | string | null
    payoutEmail?: StringNullableFilter<"HostProfile"> | string | null
    totalListings?: IntFilter<"HostProfile"> | number
    totalBookings?: IntFilter<"HostProfile"> | number
    averageRating?: FloatFilter<"HostProfile"> | number
    responseTime?: IntFilter<"HostProfile"> | number
    acceptanceRate?: FloatFilter<"HostProfile"> | number
    cancellationPolicy?: EnumCancellationPolicyFilter<"HostProfile"> | $Enums.CancellationPolicy
    certifications?: StringNullableListFilter<"HostProfile">
    createdAt?: DateTimeFilter<"HostProfile"> | Date | string
    updatedAt?: DateTimeFilter<"HostProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type HostProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    taxId?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    payoutEmail?: SortOrderInput | SortOrder
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
    cancellationPolicy?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HostProfileCountOrderByAggregateInput
    _avg?: HostProfileAvgOrderByAggregateInput
    _max?: HostProfileMaxOrderByAggregateInput
    _min?: HostProfileMinOrderByAggregateInput
    _sum?: HostProfileSumOrderByAggregateInput
  }

  export type HostProfileScalarWhereWithAggregatesInput = {
    AND?: HostProfileScalarWhereWithAggregatesInput | HostProfileScalarWhereWithAggregatesInput[]
    OR?: HostProfileScalarWhereWithAggregatesInput[]
    NOT?: HostProfileScalarWhereWithAggregatesInput | HostProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HostProfile"> | string
    userId?: StringWithAggregatesFilter<"HostProfile"> | string
    companyName?: StringNullableWithAggregatesFilter<"HostProfile"> | string | null
    taxId?: StringNullableWithAggregatesFilter<"HostProfile"> | string | null
    bankAccount?: StringNullableWithAggregatesFilter<"HostProfile"> | string | null
    payoutEmail?: StringNullableWithAggregatesFilter<"HostProfile"> | string | null
    totalListings?: IntWithAggregatesFilter<"HostProfile"> | number
    totalBookings?: IntWithAggregatesFilter<"HostProfile"> | number
    averageRating?: FloatWithAggregatesFilter<"HostProfile"> | number
    responseTime?: IntWithAggregatesFilter<"HostProfile"> | number
    acceptanceRate?: FloatWithAggregatesFilter<"HostProfile"> | number
    cancellationPolicy?: EnumCancellationPolicyWithAggregatesFilter<"HostProfile"> | $Enums.CancellationPolicy
    certifications?: StringNullableListFilter<"HostProfile">
    createdAt?: DateTimeWithAggregatesFilter<"HostProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HostProfile"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    hostId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    category?: EnumListingCategoryFilter<"Listing"> | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFilter<"Listing"> | $Enums.PropertyType
    location?: StringFilter<"Listing"> | string
    latitude?: FloatNullableFilter<"Listing"> | number | null
    longitude?: FloatNullableFilter<"Listing"> | number | null
    city?: StringFilter<"Listing"> | string
    state?: StringNullableFilter<"Listing"> | string | null
    country?: StringFilter<"Listing"> | string
    postalCode?: StringNullableFilter<"Listing"> | string | null
    basePrice?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Listing"> | string
    pricePerUnit?: EnumPriceUnitFilter<"Listing"> | $Enums.PriceUnit
    maxGuests?: IntFilter<"Listing"> | number
    bedrooms?: IntFilter<"Listing"> | number
    bathrooms?: IntFilter<"Listing"> | number
    beds?: IntFilter<"Listing"> | number
    directBookingUrl?: StringFilter<"Listing"> | string
    bookingPlatform?: EnumBookingPlatformNullableFilter<"Listing"> | $Enums.BookingPlatform | null
    amenities?: StringNullableListFilter<"Listing">
    rules?: StringNullableListFilter<"Listing">
    languages?: StringNullableListFilter<"Listing">
    isActive?: BoolFilter<"Listing"> | boolean
    isFeatured?: BoolFilter<"Listing"> | boolean
    views?: IntFilter<"Listing"> | number
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ListingImageListRelationFilter
    savedBy?: SavedListingListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    hostId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    pricePerUnit?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    directBookingUrl?: SortOrder
    bookingPlatform?: SortOrderInput | SortOrder
    amenities?: SortOrder
    rules?: SortOrder
    languages?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    host?: UserOrderByWithRelationInput
    images?: ListingImageOrderByRelationAggregateInput
    savedBy?: SavedListingOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    hostId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    category?: EnumListingCategoryFilter<"Listing"> | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFilter<"Listing"> | $Enums.PropertyType
    location?: StringFilter<"Listing"> | string
    latitude?: FloatNullableFilter<"Listing"> | number | null
    longitude?: FloatNullableFilter<"Listing"> | number | null
    city?: StringFilter<"Listing"> | string
    state?: StringNullableFilter<"Listing"> | string | null
    country?: StringFilter<"Listing"> | string
    postalCode?: StringNullableFilter<"Listing"> | string | null
    basePrice?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Listing"> | string
    pricePerUnit?: EnumPriceUnitFilter<"Listing"> | $Enums.PriceUnit
    maxGuests?: IntFilter<"Listing"> | number
    bedrooms?: IntFilter<"Listing"> | number
    bathrooms?: IntFilter<"Listing"> | number
    beds?: IntFilter<"Listing"> | number
    directBookingUrl?: StringFilter<"Listing"> | string
    bookingPlatform?: EnumBookingPlatformNullableFilter<"Listing"> | $Enums.BookingPlatform | null
    amenities?: StringNullableListFilter<"Listing">
    rules?: StringNullableListFilter<"Listing">
    languages?: StringNullableListFilter<"Listing">
    isActive?: BoolFilter<"Listing"> | boolean
    isFeatured?: BoolFilter<"Listing"> | boolean
    views?: IntFilter<"Listing"> | number
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ListingImageListRelationFilter
    savedBy?: SavedListingListRelationFilter
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    hostId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    pricePerUnit?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    directBookingUrl?: SortOrder
    bookingPlatform?: SortOrderInput | SortOrder
    amenities?: SortOrder
    rules?: SortOrder
    languages?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    hostId?: StringWithAggregatesFilter<"Listing"> | string
    title?: StringWithAggregatesFilter<"Listing"> | string
    description?: StringWithAggregatesFilter<"Listing"> | string
    category?: EnumListingCategoryWithAggregatesFilter<"Listing"> | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"Listing"> | $Enums.PropertyType
    location?: StringWithAggregatesFilter<"Listing"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    city?: StringWithAggregatesFilter<"Listing"> | string
    state?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    country?: StringWithAggregatesFilter<"Listing"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    basePrice?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Listing"> | string
    pricePerUnit?: EnumPriceUnitWithAggregatesFilter<"Listing"> | $Enums.PriceUnit
    maxGuests?: IntWithAggregatesFilter<"Listing"> | number
    bedrooms?: IntWithAggregatesFilter<"Listing"> | number
    bathrooms?: IntWithAggregatesFilter<"Listing"> | number
    beds?: IntWithAggregatesFilter<"Listing"> | number
    directBookingUrl?: StringWithAggregatesFilter<"Listing"> | string
    bookingPlatform?: EnumBookingPlatformNullableWithAggregatesFilter<"Listing"> | $Enums.BookingPlatform | null
    amenities?: StringNullableListFilter<"Listing">
    rules?: StringNullableListFilter<"Listing">
    languages?: StringNullableListFilter<"Listing">
    isActive?: BoolWithAggregatesFilter<"Listing"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Listing"> | boolean
    views?: IntWithAggregatesFilter<"Listing"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type ListingImageWhereInput = {
    AND?: ListingImageWhereInput | ListingImageWhereInput[]
    OR?: ListingImageWhereInput[]
    NOT?: ListingImageWhereInput | ListingImageWhereInput[]
    id?: StringFilter<"ListingImage"> | string
    listingId?: StringFilter<"ListingImage"> | string
    url?: StringFilter<"ListingImage"> | string
    altText?: StringNullableFilter<"ListingImage"> | string | null
    order?: IntFilter<"ListingImage"> | number
    createdAt?: DateTimeFilter<"ListingImage"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type ListingImageOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
  }

  export type ListingImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingImageWhereInput | ListingImageWhereInput[]
    OR?: ListingImageWhereInput[]
    NOT?: ListingImageWhereInput | ListingImageWhereInput[]
    listingId?: StringFilter<"ListingImage"> | string
    url?: StringFilter<"ListingImage"> | string
    altText?: StringNullableFilter<"ListingImage"> | string | null
    order?: IntFilter<"ListingImage"> | number
    createdAt?: DateTimeFilter<"ListingImage"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id">

  export type ListingImageOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: ListingImageCountOrderByAggregateInput
    _avg?: ListingImageAvgOrderByAggregateInput
    _max?: ListingImageMaxOrderByAggregateInput
    _min?: ListingImageMinOrderByAggregateInput
    _sum?: ListingImageSumOrderByAggregateInput
  }

  export type ListingImageScalarWhereWithAggregatesInput = {
    AND?: ListingImageScalarWhereWithAggregatesInput | ListingImageScalarWhereWithAggregatesInput[]
    OR?: ListingImageScalarWhereWithAggregatesInput[]
    NOT?: ListingImageScalarWhereWithAggregatesInput | ListingImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListingImage"> | string
    listingId?: StringWithAggregatesFilter<"ListingImage"> | string
    url?: StringWithAggregatesFilter<"ListingImage"> | string
    altText?: StringNullableWithAggregatesFilter<"ListingImage"> | string | null
    order?: IntWithAggregatesFilter<"ListingImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ListingImage"> | Date | string
  }

  export type SavedListingWhereInput = {
    AND?: SavedListingWhereInput | SavedListingWhereInput[]
    OR?: SavedListingWhereInput[]
    NOT?: SavedListingWhereInput | SavedListingWhereInput[]
    id?: StringFilter<"SavedListing"> | string
    userId?: StringFilter<"SavedListing"> | string
    listingId?: StringFilter<"SavedListing"> | string
    savedAt?: DateTimeFilter<"SavedListing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type SavedListingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type SavedListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_listingId?: SavedListingUserIdListingIdCompoundUniqueInput
    AND?: SavedListingWhereInput | SavedListingWhereInput[]
    OR?: SavedListingWhereInput[]
    NOT?: SavedListingWhereInput | SavedListingWhereInput[]
    userId?: StringFilter<"SavedListing"> | string
    listingId?: StringFilter<"SavedListing"> | string
    savedAt?: DateTimeFilter<"SavedListing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "userId_listingId">

  export type SavedListingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedListingCountOrderByAggregateInput
    _max?: SavedListingMaxOrderByAggregateInput
    _min?: SavedListingMinOrderByAggregateInput
  }

  export type SavedListingScalarWhereWithAggregatesInput = {
    AND?: SavedListingScalarWhereWithAggregatesInput | SavedListingScalarWhereWithAggregatesInput[]
    OR?: SavedListingScalarWhereWithAggregatesInput[]
    NOT?: SavedListingScalarWhereWithAggregatesInput | SavedListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedListing"> | string
    userId?: StringWithAggregatesFilter<"SavedListing"> | string
    listingId?: StringWithAggregatesFilter<"SavedListing"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedListing"> | Date | string
  }

  export type ListingViewWhereInput = {
    AND?: ListingViewWhereInput | ListingViewWhereInput[]
    OR?: ListingViewWhereInput[]
    NOT?: ListingViewWhereInput | ListingViewWhereInput[]
    id?: StringFilter<"ListingView"> | string
    listingId?: StringFilter<"ListingView"> | string
    userId?: StringNullableFilter<"ListingView"> | string | null
    visitorIp?: StringNullableFilter<"ListingView"> | string | null
    userAgent?: StringNullableFilter<"ListingView"> | string | null
    referer?: StringNullableFilter<"ListingView"> | string | null
    viewedAt?: DateTimeFilter<"ListingView"> | Date | string
  }

  export type ListingViewOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    visitorIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referer?: SortOrderInput | SortOrder
    viewedAt?: SortOrder
  }

  export type ListingViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingViewWhereInput | ListingViewWhereInput[]
    OR?: ListingViewWhereInput[]
    NOT?: ListingViewWhereInput | ListingViewWhereInput[]
    listingId?: StringFilter<"ListingView"> | string
    userId?: StringNullableFilter<"ListingView"> | string | null
    visitorIp?: StringNullableFilter<"ListingView"> | string | null
    userAgent?: StringNullableFilter<"ListingView"> | string | null
    referer?: StringNullableFilter<"ListingView"> | string | null
    viewedAt?: DateTimeFilter<"ListingView"> | Date | string
  }, "id">

  export type ListingViewOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    visitorIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referer?: SortOrderInput | SortOrder
    viewedAt?: SortOrder
    _count?: ListingViewCountOrderByAggregateInput
    _max?: ListingViewMaxOrderByAggregateInput
    _min?: ListingViewMinOrderByAggregateInput
  }

  export type ListingViewScalarWhereWithAggregatesInput = {
    AND?: ListingViewScalarWhereWithAggregatesInput | ListingViewScalarWhereWithAggregatesInput[]
    OR?: ListingViewScalarWhereWithAggregatesInput[]
    NOT?: ListingViewScalarWhereWithAggregatesInput | ListingViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListingView"> | string
    listingId?: StringWithAggregatesFilter<"ListingView"> | string
    userId?: StringNullableWithAggregatesFilter<"ListingView"> | string | null
    visitorIp?: StringNullableWithAggregatesFilter<"ListingView"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ListingView"> | string | null
    referer?: StringNullableWithAggregatesFilter<"ListingView"> | string | null
    viewedAt?: DateTimeWithAggregatesFilter<"ListingView"> | Date | string
  }

  export type SearchQueryWhereInput = {
    AND?: SearchQueryWhereInput | SearchQueryWhereInput[]
    OR?: SearchQueryWhereInput[]
    NOT?: SearchQueryWhereInput | SearchQueryWhereInput[]
    id?: StringFilter<"SearchQuery"> | string
    query?: StringFilter<"SearchQuery"> | string
    city?: StringNullableFilter<"SearchQuery"> | string | null
    country?: StringNullableFilter<"SearchQuery"> | string | null
    resultCount?: IntFilter<"SearchQuery"> | number
    searchedAt?: DateTimeFilter<"SearchQuery"> | Date | string
  }

  export type SearchQueryOrderByWithRelationInput = {
    id?: SortOrder
    query?: SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    resultCount?: SortOrder
    searchedAt?: SortOrder
  }

  export type SearchQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchQueryWhereInput | SearchQueryWhereInput[]
    OR?: SearchQueryWhereInput[]
    NOT?: SearchQueryWhereInput | SearchQueryWhereInput[]
    query?: StringFilter<"SearchQuery"> | string
    city?: StringNullableFilter<"SearchQuery"> | string | null
    country?: StringNullableFilter<"SearchQuery"> | string | null
    resultCount?: IntFilter<"SearchQuery"> | number
    searchedAt?: DateTimeFilter<"SearchQuery"> | Date | string
  }, "id">

  export type SearchQueryOrderByWithAggregationInput = {
    id?: SortOrder
    query?: SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    resultCount?: SortOrder
    searchedAt?: SortOrder
    _count?: SearchQueryCountOrderByAggregateInput
    _avg?: SearchQueryAvgOrderByAggregateInput
    _max?: SearchQueryMaxOrderByAggregateInput
    _min?: SearchQueryMinOrderByAggregateInput
    _sum?: SearchQuerySumOrderByAggregateInput
  }

  export type SearchQueryScalarWhereWithAggregatesInput = {
    AND?: SearchQueryScalarWhereWithAggregatesInput | SearchQueryScalarWhereWithAggregatesInput[]
    OR?: SearchQueryScalarWhereWithAggregatesInput[]
    NOT?: SearchQueryScalarWhereWithAggregatesInput | SearchQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchQuery"> | string
    query?: StringWithAggregatesFilter<"SearchQuery"> | string
    city?: StringNullableWithAggregatesFilter<"SearchQuery"> | string | null
    country?: StringNullableWithAggregatesFilter<"SearchQuery"> | string | null
    resultCount?: IntWithAggregatesFilter<"SearchQuery"> | number
    searchedAt?: DateTimeWithAggregatesFilter<"SearchQuery"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutHostInput
    savedListings?: SavedListingCreateNestedManyWithoutUserInput
    hostProfile?: HostProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutHostInput
    savedListings?: SavedListingUncheckedCreateNestedManyWithoutUserInput
    hostProfile?: HostProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutHostNestedInput
    savedListings?: SavedListingUpdateManyWithoutUserNestedInput
    hostProfile?: HostProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutHostNestedInput
    savedListings?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
    hostProfile?: HostProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostProfileCreateInput = {
    id?: string
    companyName?: string | null
    taxId?: string | null
    bankAccount?: string | null
    payoutEmail?: string | null
    totalListings?: number
    totalBookings?: number
    averageRating?: number
    responseTime?: number
    acceptanceRate?: number
    cancellationPolicy?: $Enums.CancellationPolicy
    certifications?: HostProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHostProfileInput
  }

  export type HostProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyName?: string | null
    taxId?: string | null
    bankAccount?: string | null
    payoutEmail?: string | null
    totalListings?: number
    totalBookings?: number
    averageRating?: number
    responseTime?: number
    acceptanceRate?: number
    cancellationPolicy?: $Enums.CancellationPolicy
    certifications?: HostProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    payoutEmail?: NullableStringFieldUpdateOperationsInput | string | null
    totalListings?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: FloatFieldUpdateOperationsInput | number
    cancellationPolicy?: EnumCancellationPolicyFieldUpdateOperationsInput | $Enums.CancellationPolicy
    certifications?: HostProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHostProfileNestedInput
  }

  export type HostProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    payoutEmail?: NullableStringFieldUpdateOperationsInput | string | null
    totalListings?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: FloatFieldUpdateOperationsInput | number
    cancellationPolicy?: EnumCancellationPolicyFieldUpdateOperationsInput | $Enums.CancellationPolicy
    certifications?: HostProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostProfileCreateManyInput = {
    id?: string
    userId: string
    companyName?: string | null
    taxId?: string | null
    bankAccount?: string | null
    payoutEmail?: string | null
    totalListings?: number
    totalBookings?: number
    averageRating?: number
    responseTime?: number
    acceptanceRate?: number
    cancellationPolicy?: $Enums.CancellationPolicy
    certifications?: HostProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    payoutEmail?: NullableStringFieldUpdateOperationsInput | string | null
    totalListings?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: FloatFieldUpdateOperationsInput | number
    cancellationPolicy?: EnumCancellationPolicyFieldUpdateOperationsInput | $Enums.CancellationPolicy
    certifications?: HostProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    payoutEmail?: NullableStringFieldUpdateOperationsInput | string | null
    totalListings?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: FloatFieldUpdateOperationsInput | number
    cancellationPolicy?: EnumCancellationPolicyFieldUpdateOperationsInput | $Enums.CancellationPolicy
    certifications?: HostProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutListingsInput
    images?: ListingImageCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    hostId: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ListingImageUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutListingsNestedInput
    images?: ListingImageUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ListingImageUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    hostId: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingImageCreateInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutImagesInput
  }

  export type ListingImageUncheckedCreateInput = {
    id?: string
    listingId: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ListingImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ListingImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingImageCreateManyInput = {
    id?: string
    listingId: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ListingImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingCreateInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedListingsInput
    listing: ListingCreateNestedOneWithoutSavedByInput
  }

  export type SavedListingUncheckedCreateInput = {
    id?: string
    userId: string
    listingId: string
    savedAt?: Date | string
  }

  export type SavedListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedListingsNestedInput
    listing?: ListingUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingCreateManyInput = {
    id?: string
    userId: string
    listingId: string
    savedAt?: Date | string
  }

  export type SavedListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewCreateInput = {
    id?: string
    listingId: string
    userId?: string | null
    visitorIp?: string | null
    userAgent?: string | null
    referer?: string | null
    viewedAt?: Date | string
  }

  export type ListingViewUncheckedCreateInput = {
    id?: string
    listingId: string
    userId?: string | null
    visitorIp?: string | null
    userAgent?: string | null
    referer?: string | null
    viewedAt?: Date | string
  }

  export type ListingViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    visitorIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    visitorIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewCreateManyInput = {
    id?: string
    listingId: string
    userId?: string | null
    visitorIp?: string | null
    userAgent?: string | null
    referer?: string | null
    viewedAt?: Date | string
  }

  export type ListingViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    visitorIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    visitorIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryCreateInput = {
    id?: string
    query: string
    city?: string | null
    country?: string | null
    resultCount?: number
    searchedAt?: Date | string
  }

  export type SearchQueryUncheckedCreateInput = {
    id?: string
    query: string
    city?: string | null
    country?: string | null
    resultCount?: number
    searchedAt?: Date | string
  }

  export type SearchQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    resultCount?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    resultCount?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryCreateManyInput = {
    id?: string
    query: string
    city?: string | null
    country?: string | null
    resultCount?: number
    searchedAt?: Date | string
  }

  export type SearchQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    resultCount?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    resultCount?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type SavedListingListRelationFilter = {
    every?: SavedListingWhereInput
    some?: SavedListingWhereInput
    none?: SavedListingWhereInput
  }

  export type HostProfileNullableScalarRelationFilter = {
    is?: HostProfileWhereInput | null
    isNot?: HostProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    userType?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    userType?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    userType?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCancellationPolicyFilter<$PrismaModel = never> = {
    equals?: $Enums.CancellationPolicy | EnumCancellationPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumCancellationPolicyFilter<$PrismaModel> | $Enums.CancellationPolicy
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HostProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    taxId?: SortOrder
    bankAccount?: SortOrder
    payoutEmail?: SortOrder
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
    cancellationPolicy?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostProfileAvgOrderByAggregateInput = {
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
  }

  export type HostProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    taxId?: SortOrder
    bankAccount?: SortOrder
    payoutEmail?: SortOrder
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    taxId?: SortOrder
    bankAccount?: SortOrder
    payoutEmail?: SortOrder
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostProfileSumOrderByAggregateInput = {
    totalListings?: SortOrder
    totalBookings?: SortOrder
    averageRating?: SortOrder
    responseTime?: SortOrder
    acceptanceRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCancellationPolicyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CancellationPolicy | EnumCancellationPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumCancellationPolicyWithAggregatesFilter<$PrismaModel> | $Enums.CancellationPolicy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCancellationPolicyFilter<$PrismaModel>
    _max?: NestedEnumCancellationPolicyFilter<$PrismaModel>
  }

  export type EnumListingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingCategory | EnumListingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumListingCategoryFilter<$PrismaModel> | $Enums.ListingCategory
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPriceUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceUnitFilter<$PrismaModel> | $Enums.PriceUnit
  }

  export type EnumBookingPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingPlatform | EnumBookingPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingPlatformNullableFilter<$PrismaModel> | $Enums.BookingPlatform | null
  }

  export type ListingImageListRelationFilter = {
    every?: ListingImageWhereInput
    some?: ListingImageWhereInput
    none?: ListingImageWhereInput
  }

  export type ListingImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    pricePerUnit?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    directBookingUrl?: SortOrder
    bookingPlatform?: SortOrder
    amenities?: SortOrder
    rules?: SortOrder
    languages?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    views?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    pricePerUnit?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    directBookingUrl?: SortOrder
    bookingPlatform?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    pricePerUnit?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    directBookingUrl?: SortOrder
    bookingPlatform?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    basePrice?: SortOrder
    maxGuests?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    beds?: SortOrder
    views?: SortOrder
  }

  export type EnumListingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingCategory | EnumListingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumListingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ListingCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingCategoryFilter<$PrismaModel>
    _max?: NestedEnumListingCategoryFilter<$PrismaModel>
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPriceUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceUnitWithAggregatesFilter<$PrismaModel> | $Enums.PriceUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceUnitFilter<$PrismaModel>
    _max?: NestedEnumPriceUnitFilter<$PrismaModel>
  }

  export type EnumBookingPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingPlatform | EnumBookingPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingPlatform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingPlatformNullableFilter<$PrismaModel>
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type ListingImageCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ListingImageMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingImageMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SavedListingUserIdListingIdCompoundUniqueInput = {
    userId: string
    listingId: string
  }

  export type SavedListingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedListingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedListingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    savedAt?: SortOrder
  }

  export type ListingViewCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    visitorIp?: SortOrder
    userAgent?: SortOrder
    referer?: SortOrder
    viewedAt?: SortOrder
  }

  export type ListingViewMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    visitorIp?: SortOrder
    userAgent?: SortOrder
    referer?: SortOrder
    viewedAt?: SortOrder
  }

  export type ListingViewMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    userId?: SortOrder
    visitorIp?: SortOrder
    userAgent?: SortOrder
    referer?: SortOrder
    viewedAt?: SortOrder
  }

  export type SearchQueryCountOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    city?: SortOrder
    country?: SortOrder
    resultCount?: SortOrder
    searchedAt?: SortOrder
  }

  export type SearchQueryAvgOrderByAggregateInput = {
    resultCount?: SortOrder
  }

  export type SearchQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    city?: SortOrder
    country?: SortOrder
    resultCount?: SortOrder
    searchedAt?: SortOrder
  }

  export type SearchQueryMinOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    city?: SortOrder
    country?: SortOrder
    resultCount?: SortOrder
    searchedAt?: SortOrder
  }

  export type SearchQuerySumOrderByAggregateInput = {
    resultCount?: SortOrder
  }

  export type ListingCreateNestedManyWithoutHostInput = {
    create?: XOR<ListingCreateWithoutHostInput, ListingUncheckedCreateWithoutHostInput> | ListingCreateWithoutHostInput[] | ListingUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutHostInput | ListingCreateOrConnectWithoutHostInput[]
    createMany?: ListingCreateManyHostInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type SavedListingCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type HostProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<HostProfileCreateWithoutUserInput, HostProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: HostProfileCreateOrConnectWithoutUserInput
    connect?: HostProfileWhereUniqueInput
  }

  export type ListingUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<ListingCreateWithoutHostInput, ListingUncheckedCreateWithoutHostInput> | ListingCreateWithoutHostInput[] | ListingUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutHostInput | ListingCreateOrConnectWithoutHostInput[]
    createMany?: ListingCreateManyHostInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type SavedListingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type HostProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<HostProfileCreateWithoutUserInput, HostProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: HostProfileCreateOrConnectWithoutUserInput
    connect?: HostProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ListingUpdateManyWithoutHostNestedInput = {
    create?: XOR<ListingCreateWithoutHostInput, ListingUncheckedCreateWithoutHostInput> | ListingCreateWithoutHostInput[] | ListingUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutHostInput | ListingCreateOrConnectWithoutHostInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutHostInput | ListingUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ListingCreateManyHostInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutHostInput | ListingUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutHostInput | ListingUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type SavedListingUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutUserInput | SavedListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutUserInput | SavedListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutUserInput | SavedListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type HostProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<HostProfileCreateWithoutUserInput, HostProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: HostProfileCreateOrConnectWithoutUserInput
    upsert?: HostProfileUpsertWithoutUserInput
    disconnect?: HostProfileWhereInput | boolean
    delete?: HostProfileWhereInput | boolean
    connect?: HostProfileWhereUniqueInput
    update?: XOR<XOR<HostProfileUpdateToOneWithWhereWithoutUserInput, HostProfileUpdateWithoutUserInput>, HostProfileUncheckedUpdateWithoutUserInput>
  }

  export type ListingUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<ListingCreateWithoutHostInput, ListingUncheckedCreateWithoutHostInput> | ListingCreateWithoutHostInput[] | ListingUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutHostInput | ListingCreateOrConnectWithoutHostInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutHostInput | ListingUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ListingCreateManyHostInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutHostInput | ListingUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutHostInput | ListingUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type SavedListingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput> | SavedListingCreateWithoutUserInput[] | SavedListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutUserInput | SavedListingCreateOrConnectWithoutUserInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutUserInput | SavedListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedListingCreateManyUserInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutUserInput | SavedListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutUserInput | SavedListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type HostProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<HostProfileCreateWithoutUserInput, HostProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: HostProfileCreateOrConnectWithoutUserInput
    upsert?: HostProfileUpsertWithoutUserInput
    disconnect?: HostProfileWhereInput | boolean
    delete?: HostProfileWhereInput | boolean
    connect?: HostProfileWhereUniqueInput
    update?: XOR<XOR<HostProfileUpdateToOneWithWhereWithoutUserInput, HostProfileUpdateWithoutUserInput>, HostProfileUncheckedUpdateWithoutUserInput>
  }

  export type HostProfileCreatecertificationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutHostProfileInput = {
    create?: XOR<UserCreateWithoutHostProfileInput, UserUncheckedCreateWithoutHostProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCancellationPolicyFieldUpdateOperationsInput = {
    set?: $Enums.CancellationPolicy
  }

  export type HostProfileUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutHostProfileNestedInput = {
    create?: XOR<UserCreateWithoutHostProfileInput, UserUncheckedCreateWithoutHostProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostProfileInput
    upsert?: UserUpsertWithoutHostProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostProfileInput, UserUpdateWithoutHostProfileInput>, UserUncheckedUpdateWithoutHostProfileInput>
  }

  export type ListingCreateamenitiesInput = {
    set: string[]
  }

  export type ListingCreaterulesInput = {
    set: string[]
  }

  export type ListingCreatelanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type ListingImageCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingImageCreateWithoutListingInput, ListingImageUncheckedCreateWithoutListingInput> | ListingImageCreateWithoutListingInput[] | ListingImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingImageCreateOrConnectWithoutListingInput | ListingImageCreateOrConnectWithoutListingInput[]
    createMany?: ListingImageCreateManyListingInputEnvelope
    connect?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
  }

  export type SavedListingCreateNestedManyWithoutListingInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type ListingImageUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingImageCreateWithoutListingInput, ListingImageUncheckedCreateWithoutListingInput> | ListingImageCreateWithoutListingInput[] | ListingImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingImageCreateOrConnectWithoutListingInput | ListingImageCreateOrConnectWithoutListingInput[]
    createMany?: ListingImageCreateManyListingInputEnvelope
    connect?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
  }

  export type SavedListingUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
  }

  export type EnumListingCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ListingCategory
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPriceUnitFieldUpdateOperationsInput = {
    set?: $Enums.PriceUnit
  }

  export type NullableEnumBookingPlatformFieldUpdateOperationsInput = {
    set?: $Enums.BookingPlatform | null
  }

  export type ListingUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ListingUpdaterulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ListingUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type ListingImageUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingImageCreateWithoutListingInput, ListingImageUncheckedCreateWithoutListingInput> | ListingImageCreateWithoutListingInput[] | ListingImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingImageCreateOrConnectWithoutListingInput | ListingImageCreateOrConnectWithoutListingInput[]
    upsert?: ListingImageUpsertWithWhereUniqueWithoutListingInput | ListingImageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingImageCreateManyListingInputEnvelope
    set?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    disconnect?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    delete?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    connect?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    update?: ListingImageUpdateWithWhereUniqueWithoutListingInput | ListingImageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingImageUpdateManyWithWhereWithoutListingInput | ListingImageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingImageScalarWhereInput | ListingImageScalarWhereInput[]
  }

  export type SavedListingUpdateManyWithoutListingNestedInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutListingInput | SavedListingUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutListingInput | SavedListingUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutListingInput | SavedListingUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type ListingImageUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingImageCreateWithoutListingInput, ListingImageUncheckedCreateWithoutListingInput> | ListingImageCreateWithoutListingInput[] | ListingImageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingImageCreateOrConnectWithoutListingInput | ListingImageCreateOrConnectWithoutListingInput[]
    upsert?: ListingImageUpsertWithWhereUniqueWithoutListingInput | ListingImageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingImageCreateManyListingInputEnvelope
    set?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    disconnect?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    delete?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    connect?: ListingImageWhereUniqueInput | ListingImageWhereUniqueInput[]
    update?: ListingImageUpdateWithWhereUniqueWithoutListingInput | ListingImageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingImageUpdateManyWithWhereWithoutListingInput | ListingImageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingImageScalarWhereInput | ListingImageScalarWhereInput[]
  }

  export type SavedListingUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput> | SavedListingCreateWithoutListingInput[] | SavedListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: SavedListingCreateOrConnectWithoutListingInput | SavedListingCreateOrConnectWithoutListingInput[]
    upsert?: SavedListingUpsertWithWhereUniqueWithoutListingInput | SavedListingUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: SavedListingCreateManyListingInputEnvelope
    set?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    disconnect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    delete?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    connect?: SavedListingWhereUniqueInput | SavedListingWhereUniqueInput[]
    update?: SavedListingUpdateWithWhereUniqueWithoutListingInput | SavedListingUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: SavedListingUpdateManyWithWhereWithoutListingInput | SavedListingUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
  }

  export type ListingCreateNestedOneWithoutImagesInput = {
    create?: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutImagesInput
    connect?: ListingWhereUniqueInput
  }

  export type ListingUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutImagesInput
    upsert?: ListingUpsertWithoutImagesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutImagesInput, ListingUpdateWithoutImagesInput>, ListingUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutSavedListingsInput = {
    create?: XOR<UserCreateWithoutSavedListingsInput, UserUncheckedCreateWithoutSavedListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedListingsInput
    connect?: UserWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutSavedByInput = {
    create?: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ListingCreateOrConnectWithoutSavedByInput
    connect?: ListingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedListingsNestedInput = {
    create?: XOR<UserCreateWithoutSavedListingsInput, UserUncheckedCreateWithoutSavedListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedListingsInput
    upsert?: UserUpsertWithoutSavedListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedListingsInput, UserUpdateWithoutSavedListingsInput>, UserUncheckedUpdateWithoutSavedListingsInput>
  }

  export type ListingUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ListingCreateOrConnectWithoutSavedByInput
    upsert?: ListingUpsertWithoutSavedByInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutSavedByInput, ListingUpdateWithoutSavedByInput>, ListingUncheckedUpdateWithoutSavedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCancellationPolicyFilter<$PrismaModel = never> = {
    equals?: $Enums.CancellationPolicy | EnumCancellationPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumCancellationPolicyFilter<$PrismaModel> | $Enums.CancellationPolicy
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCancellationPolicyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CancellationPolicy | EnumCancellationPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CancellationPolicy[] | ListEnumCancellationPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumCancellationPolicyWithAggregatesFilter<$PrismaModel> | $Enums.CancellationPolicy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCancellationPolicyFilter<$PrismaModel>
    _max?: NestedEnumCancellationPolicyFilter<$PrismaModel>
  }

  export type NestedEnumListingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingCategory | EnumListingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumListingCategoryFilter<$PrismaModel> | $Enums.ListingCategory
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPriceUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceUnitFilter<$PrismaModel> | $Enums.PriceUnit
  }

  export type NestedEnumBookingPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingPlatform | EnumBookingPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingPlatformNullableFilter<$PrismaModel> | $Enums.BookingPlatform | null
  }

  export type NestedEnumListingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingCategory | EnumListingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingCategory[] | ListEnumListingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumListingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ListingCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingCategoryFilter<$PrismaModel>
    _max?: NestedEnumListingCategoryFilter<$PrismaModel>
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPriceUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceUnit[] | ListEnumPriceUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceUnitWithAggregatesFilter<$PrismaModel> | $Enums.PriceUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceUnitFilter<$PrismaModel>
    _max?: NestedEnumPriceUnitFilter<$PrismaModel>
  }

  export type NestedEnumBookingPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingPlatform | EnumBookingPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingPlatform[] | ListEnumBookingPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingPlatform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingPlatformNullableFilter<$PrismaModel>
  }

  export type ListingCreateWithoutHostInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ListingImageCreateNestedManyWithoutListingInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutHostInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ListingImageUncheckedCreateNestedManyWithoutListingInput
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutHostInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutHostInput, ListingUncheckedCreateWithoutHostInput>
  }

  export type ListingCreateManyHostInputEnvelope = {
    data: ListingCreateManyHostInput | ListingCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type SavedListingCreateWithoutUserInput = {
    id?: string
    savedAt?: Date | string
    listing: ListingCreateNestedOneWithoutSavedByInput
  }

  export type SavedListingUncheckedCreateWithoutUserInput = {
    id?: string
    listingId: string
    savedAt?: Date | string
  }

  export type SavedListingCreateOrConnectWithoutUserInput = {
    where: SavedListingWhereUniqueInput
    create: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput>
  }

  export type SavedListingCreateManyUserInputEnvelope = {
    data: SavedListingCreateManyUserInput | SavedListingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HostProfileCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    taxId?: string | null
    bankAccount?: string | null
    payoutEmail?: string | null
    totalListings?: number
    totalBookings?: number
    averageRating?: number
    responseTime?: number
    acceptanceRate?: number
    cancellationPolicy?: $Enums.CancellationPolicy
    certifications?: HostProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    taxId?: string | null
    bankAccount?: string | null
    payoutEmail?: string | null
    totalListings?: number
    totalBookings?: number
    averageRating?: number
    responseTime?: number
    acceptanceRate?: number
    cancellationPolicy?: $Enums.CancellationPolicy
    certifications?: HostProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostProfileCreateOrConnectWithoutUserInput = {
    where: HostProfileWhereUniqueInput
    create: XOR<HostProfileCreateWithoutUserInput, HostProfileUncheckedCreateWithoutUserInput>
  }

  export type ListingUpsertWithWhereUniqueWithoutHostInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutHostInput, ListingUncheckedUpdateWithoutHostInput>
    create: XOR<ListingCreateWithoutHostInput, ListingUncheckedCreateWithoutHostInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutHostInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutHostInput, ListingUncheckedUpdateWithoutHostInput>
  }

  export type ListingUpdateManyWithWhereWithoutHostInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutHostInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    hostId?: StringFilter<"Listing"> | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    category?: EnumListingCategoryFilter<"Listing"> | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFilter<"Listing"> | $Enums.PropertyType
    location?: StringFilter<"Listing"> | string
    latitude?: FloatNullableFilter<"Listing"> | number | null
    longitude?: FloatNullableFilter<"Listing"> | number | null
    city?: StringFilter<"Listing"> | string
    state?: StringNullableFilter<"Listing"> | string | null
    country?: StringFilter<"Listing"> | string
    postalCode?: StringNullableFilter<"Listing"> | string | null
    basePrice?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Listing"> | string
    pricePerUnit?: EnumPriceUnitFilter<"Listing"> | $Enums.PriceUnit
    maxGuests?: IntFilter<"Listing"> | number
    bedrooms?: IntFilter<"Listing"> | number
    bathrooms?: IntFilter<"Listing"> | number
    beds?: IntFilter<"Listing"> | number
    directBookingUrl?: StringFilter<"Listing"> | string
    bookingPlatform?: EnumBookingPlatformNullableFilter<"Listing"> | $Enums.BookingPlatform | null
    amenities?: StringNullableListFilter<"Listing">
    rules?: StringNullableListFilter<"Listing">
    languages?: StringNullableListFilter<"Listing">
    isActive?: BoolFilter<"Listing"> | boolean
    isFeatured?: BoolFilter<"Listing"> | boolean
    views?: IntFilter<"Listing"> | number
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type SavedListingUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedListingWhereUniqueInput
    update: XOR<SavedListingUpdateWithoutUserInput, SavedListingUncheckedUpdateWithoutUserInput>
    create: XOR<SavedListingCreateWithoutUserInput, SavedListingUncheckedCreateWithoutUserInput>
  }

  export type SavedListingUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedListingWhereUniqueInput
    data: XOR<SavedListingUpdateWithoutUserInput, SavedListingUncheckedUpdateWithoutUserInput>
  }

  export type SavedListingUpdateManyWithWhereWithoutUserInput = {
    where: SavedListingScalarWhereInput
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedListingScalarWhereInput = {
    AND?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
    OR?: SavedListingScalarWhereInput[]
    NOT?: SavedListingScalarWhereInput | SavedListingScalarWhereInput[]
    id?: StringFilter<"SavedListing"> | string
    userId?: StringFilter<"SavedListing"> | string
    listingId?: StringFilter<"SavedListing"> | string
    savedAt?: DateTimeFilter<"SavedListing"> | Date | string
  }

  export type HostProfileUpsertWithoutUserInput = {
    update: XOR<HostProfileUpdateWithoutUserInput, HostProfileUncheckedUpdateWithoutUserInput>
    create: XOR<HostProfileCreateWithoutUserInput, HostProfileUncheckedCreateWithoutUserInput>
    where?: HostProfileWhereInput
  }

  export type HostProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: HostProfileWhereInput
    data: XOR<HostProfileUpdateWithoutUserInput, HostProfileUncheckedUpdateWithoutUserInput>
  }

  export type HostProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    payoutEmail?: NullableStringFieldUpdateOperationsInput | string | null
    totalListings?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: FloatFieldUpdateOperationsInput | number
    cancellationPolicy?: EnumCancellationPolicyFieldUpdateOperationsInput | $Enums.CancellationPolicy
    certifications?: HostProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    payoutEmail?: NullableStringFieldUpdateOperationsInput | string | null
    totalListings?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: FloatFieldUpdateOperationsInput | number
    cancellationPolicy?: EnumCancellationPolicyFieldUpdateOperationsInput | $Enums.CancellationPolicy
    certifications?: HostProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutHostProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutHostInput
    savedListings?: SavedListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHostProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutHostInput
    savedListings?: SavedListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHostProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostProfileInput, UserUncheckedCreateWithoutHostProfileInput>
  }

  export type UserUpsertWithoutHostProfileInput = {
    update: XOR<UserUpdateWithoutHostProfileInput, UserUncheckedUpdateWithoutHostProfileInput>
    create: XOR<UserCreateWithoutHostProfileInput, UserUncheckedCreateWithoutHostProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostProfileInput, UserUncheckedUpdateWithoutHostProfileInput>
  }

  export type UserUpdateWithoutHostProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutHostNestedInput
    savedListings?: SavedListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHostProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutHostNestedInput
    savedListings?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedListings?: SavedListingCreateNestedManyWithoutUserInput
    hostProfile?: HostProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedListings?: SavedListingUncheckedCreateNestedManyWithoutUserInput
    hostProfile?: HostProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type ListingImageCreateWithoutListingInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ListingImageUncheckedCreateWithoutListingInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ListingImageCreateOrConnectWithoutListingInput = {
    where: ListingImageWhereUniqueInput
    create: XOR<ListingImageCreateWithoutListingInput, ListingImageUncheckedCreateWithoutListingInput>
  }

  export type ListingImageCreateManyListingInputEnvelope = {
    data: ListingImageCreateManyListingInput | ListingImageCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type SavedListingCreateWithoutListingInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedListingsInput
  }

  export type SavedListingUncheckedCreateWithoutListingInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedListingCreateOrConnectWithoutListingInput = {
    where: SavedListingWhereUniqueInput
    create: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput>
  }

  export type SavedListingCreateManyListingInputEnvelope = {
    data: SavedListingCreateManyListingInput | SavedListingCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedListings?: SavedListingUpdateManyWithoutUserNestedInput
    hostProfile?: HostProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedListings?: SavedListingUncheckedUpdateManyWithoutUserNestedInput
    hostProfile?: HostProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ListingImageUpsertWithWhereUniqueWithoutListingInput = {
    where: ListingImageWhereUniqueInput
    update: XOR<ListingImageUpdateWithoutListingInput, ListingImageUncheckedUpdateWithoutListingInput>
    create: XOR<ListingImageCreateWithoutListingInput, ListingImageUncheckedCreateWithoutListingInput>
  }

  export type ListingImageUpdateWithWhereUniqueWithoutListingInput = {
    where: ListingImageWhereUniqueInput
    data: XOR<ListingImageUpdateWithoutListingInput, ListingImageUncheckedUpdateWithoutListingInput>
  }

  export type ListingImageUpdateManyWithWhereWithoutListingInput = {
    where: ListingImageScalarWhereInput
    data: XOR<ListingImageUpdateManyMutationInput, ListingImageUncheckedUpdateManyWithoutListingInput>
  }

  export type ListingImageScalarWhereInput = {
    AND?: ListingImageScalarWhereInput | ListingImageScalarWhereInput[]
    OR?: ListingImageScalarWhereInput[]
    NOT?: ListingImageScalarWhereInput | ListingImageScalarWhereInput[]
    id?: StringFilter<"ListingImage"> | string
    listingId?: StringFilter<"ListingImage"> | string
    url?: StringFilter<"ListingImage"> | string
    altText?: StringNullableFilter<"ListingImage"> | string | null
    order?: IntFilter<"ListingImage"> | number
    createdAt?: DateTimeFilter<"ListingImage"> | Date | string
  }

  export type SavedListingUpsertWithWhereUniqueWithoutListingInput = {
    where: SavedListingWhereUniqueInput
    update: XOR<SavedListingUpdateWithoutListingInput, SavedListingUncheckedUpdateWithoutListingInput>
    create: XOR<SavedListingCreateWithoutListingInput, SavedListingUncheckedCreateWithoutListingInput>
  }

  export type SavedListingUpdateWithWhereUniqueWithoutListingInput = {
    where: SavedListingWhereUniqueInput
    data: XOR<SavedListingUpdateWithoutListingInput, SavedListingUncheckedUpdateWithoutListingInput>
  }

  export type SavedListingUpdateManyWithWhereWithoutListingInput = {
    where: SavedListingScalarWhereInput
    data: XOR<SavedListingUpdateManyMutationInput, SavedListingUncheckedUpdateManyWithoutListingInput>
  }

  export type ListingCreateWithoutImagesInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutListingsInput
    savedBy?: SavedListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutImagesInput = {
    id?: string
    hostId: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: SavedListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutImagesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
  }

  export type ListingUpsertWithoutImagesInput = {
    update: XOR<ListingUpdateWithoutImagesInput, ListingUncheckedUpdateWithoutImagesInput>
    create: XOR<ListingCreateWithoutImagesInput, ListingUncheckedCreateWithoutImagesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutImagesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutImagesInput, ListingUncheckedUpdateWithoutImagesInput>
  }

  export type ListingUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutListingsNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserCreateWithoutSavedListingsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingCreateNestedManyWithoutHostInput
    hostProfile?: HostProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedListingsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    phone?: string | null
    bio?: string | null
    userType?: $Enums.UserType
    isVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutHostInput
    hostProfile?: HostProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedListingsInput, UserUncheckedCreateWithoutSavedListingsInput>
  }

  export type ListingCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutListingsInput
    images?: ListingImageCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutSavedByInput = {
    id?: string
    hostId: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ListingImageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutSavedByInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedListingsInput = {
    update: XOR<UserUpdateWithoutSavedListingsInput, UserUncheckedUpdateWithoutSavedListingsInput>
    create: XOR<UserCreateWithoutSavedListingsInput, UserUncheckedCreateWithoutSavedListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedListingsInput, UserUncheckedUpdateWithoutSavedListingsInput>
  }

  export type UserUpdateWithoutSavedListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUpdateManyWithoutHostNestedInput
    hostProfile?: HostProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutHostNestedInput
    hostProfile?: HostProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ListingUpsertWithoutSavedByInput = {
    update: XOR<ListingUpdateWithoutSavedByInput, ListingUncheckedUpdateWithoutSavedByInput>
    create: XOR<ListingCreateWithoutSavedByInput, ListingUncheckedCreateWithoutSavedByInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutSavedByInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutSavedByInput, ListingUncheckedUpdateWithoutSavedByInput>
  }

  export type ListingUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutListingsNestedInput
    images?: ListingImageUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ListingImageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyHostInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ListingCategory
    propertyType: $Enums.PropertyType
    location: string
    latitude?: number | null
    longitude?: number | null
    city: string
    state?: string | null
    country: string
    postalCode?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    pricePerUnit?: $Enums.PriceUnit
    maxGuests: number
    bedrooms: number
    bathrooms: number
    beds: number
    directBookingUrl: string
    bookingPlatform?: $Enums.BookingPlatform | null
    amenities?: ListingCreateamenitiesInput | string[]
    rules?: ListingCreaterulesInput | string[]
    languages?: ListingCreatelanguagesInput | string[]
    isActive?: boolean
    isFeatured?: boolean
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedListingCreateManyUserInput = {
    id?: string
    listingId: string
    savedAt?: Date | string
  }

  export type ListingUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ListingImageUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ListingImageUncheckedUpdateManyWithoutListingNestedInput
    savedBy?: SavedListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumListingCategoryFieldUpdateOperationsInput | $Enums.ListingCategory
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    directBookingUrl?: StringFieldUpdateOperationsInput | string
    bookingPlatform?: NullableEnumBookingPlatformFieldUpdateOperationsInput | $Enums.BookingPlatform | null
    amenities?: ListingUpdateamenitiesInput | string[]
    rules?: ListingUpdaterulesInput | string[]
    languages?: ListingUpdatelanguagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedListingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingImageCreateManyListingInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type SavedListingCreateManyListingInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type ListingImageUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingImageUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingImageUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedListingsNestedInput
  }

  export type SavedListingUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedListingUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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