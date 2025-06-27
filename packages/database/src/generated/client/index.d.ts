
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
 * Model LargeMonster
 * 
 */
export type LargeMonster = $Result.DefaultSelection<Prisma.$LargeMonsterPayload>
/**
 * Model Weapon
 * 
 */
export type Weapon = $Result.DefaultSelection<Prisma.$WeaponPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Monster
 * 
 */
export type Monster = $Result.DefaultSelection<Prisma.$MonsterPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LargeMonsters
 * const largeMonsters = await prisma.largeMonster.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more LargeMonsters
   * const largeMonsters = await prisma.largeMonster.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.largeMonster`: Exposes CRUD operations for the **LargeMonster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LargeMonsters
    * const largeMonsters = await prisma.largeMonster.findMany()
    * ```
    */
  get largeMonster(): Prisma.LargeMonsterDelegate<ExtArgs>;

  /**
   * `prisma.weapon`: Exposes CRUD operations for the **Weapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weapons
    * const weapons = await prisma.weapon.findMany()
    * ```
    */
  get weapon(): Prisma.WeaponDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **Monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.MonsterDelegate<ExtArgs>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
    LargeMonster: 'LargeMonster',
    Weapon: 'Weapon',
    Item: 'Item',
    Monster: 'Monster'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "largeMonster" | "weapon" | "item" | "monster"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LargeMonster: {
        payload: Prisma.$LargeMonsterPayload<ExtArgs>
        fields: Prisma.LargeMonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LargeMonsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LargeMonsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>
          }
          findFirst: {
            args: Prisma.LargeMonsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LargeMonsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>
          }
          findMany: {
            args: Prisma.LargeMonsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>[]
          }
          create: {
            args: Prisma.LargeMonsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>
          }
          createMany: {
            args: Prisma.LargeMonsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LargeMonsterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>[]
          }
          delete: {
            args: Prisma.LargeMonsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>
          }
          update: {
            args: Prisma.LargeMonsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>
          }
          deleteMany: {
            args: Prisma.LargeMonsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LargeMonsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LargeMonsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeMonsterPayload>
          }
          aggregate: {
            args: Prisma.LargeMonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLargeMonster>
          }
          groupBy: {
            args: Prisma.LargeMonsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<LargeMonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.LargeMonsterCountArgs<ExtArgs>
            result: $Utils.Optional<LargeMonsterCountAggregateOutputType> | number
          }
        }
      }
      Weapon: {
        payload: Prisma.$WeaponPayload<ExtArgs>
        fields: Prisma.WeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findFirst: {
            args: Prisma.WeaponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findMany: {
            args: Prisma.WeaponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          create: {
            args: Prisma.WeaponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          createMany: {
            args: Prisma.WeaponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeaponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          delete: {
            args: Prisma.WeaponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          update: {
            args: Prisma.WeaponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          deleteMany: {
            args: Prisma.WeaponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeaponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          aggregate: {
            args: Prisma.WeaponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeapon>
          }
          groupBy: {
            args: Prisma.WeaponGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponCountArgs<ExtArgs>
            result: $Utils.Optional<WeaponCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Monster: {
        payload: Prisma.$MonsterPayload<ExtArgs>
        fields: Prisma.MonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findFirst: {
            args: Prisma.MonsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findMany: {
            args: Prisma.MonsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          create: {
            args: Prisma.MonsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          createMany: {
            args: Prisma.MonsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonsterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          delete: {
            args: Prisma.MonsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          update: {
            args: Prisma.MonsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          deleteMany: {
            args: Prisma.MonsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          aggregate: {
            args: Prisma.MonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonster>
          }
          groupBy: {
            args: Prisma.MonsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model LargeMonster
   */

  export type AggregateLargeMonster = {
    _count: LargeMonsterCountAggregateOutputType | null
    _avg: LargeMonsterAvgAggregateOutputType | null
    _sum: LargeMonsterSumAggregateOutputType | null
    _min: LargeMonsterMinAggregateOutputType | null
    _max: LargeMonsterMaxAggregateOutputType | null
  }

  export type LargeMonsterAvgAggregateOutputType = {
    id: number | null
  }

  export type LargeMonsterSumAggregateOutputType = {
    id: number | null
  }

  export type LargeMonsterMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    nameEn: string | null
    nameJa: string | null
    nameZh: string | null
    monsterType: string | null
    threatLevel: string | null
    elements: string | null
    weaknesses: string | null
    iconUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LargeMonsterMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    nameEn: string | null
    nameJa: string | null
    nameZh: string | null
    monsterType: string | null
    threatLevel: string | null
    elements: string | null
    weaknesses: string | null
    iconUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LargeMonsterCountAggregateOutputType = {
    id: number
    gameId: number
    nameEn: number
    nameJa: number
    nameZh: number
    monsterType: number
    threatLevel: number
    elements: number
    weaknesses: number
    iconUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LargeMonsterAvgAggregateInputType = {
    id?: true
  }

  export type LargeMonsterSumAggregateInputType = {
    id?: true
  }

  export type LargeMonsterMinAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    monsterType?: true
    threatLevel?: true
    elements?: true
    weaknesses?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LargeMonsterMaxAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    monsterType?: true
    threatLevel?: true
    elements?: true
    weaknesses?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LargeMonsterCountAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    monsterType?: true
    threatLevel?: true
    elements?: true
    weaknesses?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LargeMonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LargeMonster to aggregate.
     */
    where?: LargeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeMonsters to fetch.
     */
    orderBy?: LargeMonsterOrderByWithRelationInput | LargeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LargeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LargeMonsters
    **/
    _count?: true | LargeMonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LargeMonsterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LargeMonsterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LargeMonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LargeMonsterMaxAggregateInputType
  }

  export type GetLargeMonsterAggregateType<T extends LargeMonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateLargeMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLargeMonster[P]>
      : GetScalarType<T[P], AggregateLargeMonster[P]>
  }




  export type LargeMonsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LargeMonsterWhereInput
    orderBy?: LargeMonsterOrderByWithAggregationInput | LargeMonsterOrderByWithAggregationInput[]
    by: LargeMonsterScalarFieldEnum[] | LargeMonsterScalarFieldEnum
    having?: LargeMonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LargeMonsterCountAggregateInputType | true
    _avg?: LargeMonsterAvgAggregateInputType
    _sum?: LargeMonsterSumAggregateInputType
    _min?: LargeMonsterMinAggregateInputType
    _max?: LargeMonsterMaxAggregateInputType
  }

  export type LargeMonsterGroupByOutputType = {
    id: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh: string | null
    monsterType: string
    threatLevel: string
    elements: string
    weaknesses: string
    iconUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: LargeMonsterCountAggregateOutputType | null
    _avg: LargeMonsterAvgAggregateOutputType | null
    _sum: LargeMonsterSumAggregateOutputType | null
    _min: LargeMonsterMinAggregateOutputType | null
    _max: LargeMonsterMaxAggregateOutputType | null
  }

  type GetLargeMonsterGroupByPayload<T extends LargeMonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LargeMonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LargeMonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LargeMonsterGroupByOutputType[P]>
            : GetScalarType<T[P], LargeMonsterGroupByOutputType[P]>
        }
      >
    >


  export type LargeMonsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    monsterType?: boolean
    threatLevel?: boolean
    elements?: boolean
    weaknesses?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["largeMonster"]>

  export type LargeMonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    monsterType?: boolean
    threatLevel?: boolean
    elements?: boolean
    weaknesses?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["largeMonster"]>

  export type LargeMonsterSelectScalar = {
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    monsterType?: boolean
    threatLevel?: boolean
    elements?: boolean
    weaknesses?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LargeMonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LargeMonster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      nameEn: string
      nameJa: string
      nameZh: string | null
      monsterType: string
      threatLevel: string
      elements: string
      weaknesses: string
      iconUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["largeMonster"]>
    composites: {}
  }

  type LargeMonsterGetPayload<S extends boolean | null | undefined | LargeMonsterDefaultArgs> = $Result.GetResult<Prisma.$LargeMonsterPayload, S>

  type LargeMonsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LargeMonsterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LargeMonsterCountAggregateInputType | true
    }

  export interface LargeMonsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LargeMonster'], meta: { name: 'LargeMonster' } }
    /**
     * Find zero or one LargeMonster that matches the filter.
     * @param {LargeMonsterFindUniqueArgs} args - Arguments to find a LargeMonster
     * @example
     * // Get one LargeMonster
     * const largeMonster = await prisma.largeMonster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LargeMonsterFindUniqueArgs>(args: SelectSubset<T, LargeMonsterFindUniqueArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LargeMonster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LargeMonsterFindUniqueOrThrowArgs} args - Arguments to find a LargeMonster
     * @example
     * // Get one LargeMonster
     * const largeMonster = await prisma.largeMonster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LargeMonsterFindUniqueOrThrowArgs>(args: SelectSubset<T, LargeMonsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LargeMonster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterFindFirstArgs} args - Arguments to find a LargeMonster
     * @example
     * // Get one LargeMonster
     * const largeMonster = await prisma.largeMonster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LargeMonsterFindFirstArgs>(args?: SelectSubset<T, LargeMonsterFindFirstArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LargeMonster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterFindFirstOrThrowArgs} args - Arguments to find a LargeMonster
     * @example
     * // Get one LargeMonster
     * const largeMonster = await prisma.largeMonster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LargeMonsterFindFirstOrThrowArgs>(args?: SelectSubset<T, LargeMonsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LargeMonsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LargeMonsters
     * const largeMonsters = await prisma.largeMonster.findMany()
     * 
     * // Get first 10 LargeMonsters
     * const largeMonsters = await prisma.largeMonster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const largeMonsterWithIdOnly = await prisma.largeMonster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LargeMonsterFindManyArgs>(args?: SelectSubset<T, LargeMonsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LargeMonster.
     * @param {LargeMonsterCreateArgs} args - Arguments to create a LargeMonster.
     * @example
     * // Create one LargeMonster
     * const LargeMonster = await prisma.largeMonster.create({
     *   data: {
     *     // ... data to create a LargeMonster
     *   }
     * })
     * 
     */
    create<T extends LargeMonsterCreateArgs>(args: SelectSubset<T, LargeMonsterCreateArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LargeMonsters.
     * @param {LargeMonsterCreateManyArgs} args - Arguments to create many LargeMonsters.
     * @example
     * // Create many LargeMonsters
     * const largeMonster = await prisma.largeMonster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LargeMonsterCreateManyArgs>(args?: SelectSubset<T, LargeMonsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LargeMonsters and returns the data saved in the database.
     * @param {LargeMonsterCreateManyAndReturnArgs} args - Arguments to create many LargeMonsters.
     * @example
     * // Create many LargeMonsters
     * const largeMonster = await prisma.largeMonster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LargeMonsters and only return the `id`
     * const largeMonsterWithIdOnly = await prisma.largeMonster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LargeMonsterCreateManyAndReturnArgs>(args?: SelectSubset<T, LargeMonsterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LargeMonster.
     * @param {LargeMonsterDeleteArgs} args - Arguments to delete one LargeMonster.
     * @example
     * // Delete one LargeMonster
     * const LargeMonster = await prisma.largeMonster.delete({
     *   where: {
     *     // ... filter to delete one LargeMonster
     *   }
     * })
     * 
     */
    delete<T extends LargeMonsterDeleteArgs>(args: SelectSubset<T, LargeMonsterDeleteArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LargeMonster.
     * @param {LargeMonsterUpdateArgs} args - Arguments to update one LargeMonster.
     * @example
     * // Update one LargeMonster
     * const largeMonster = await prisma.largeMonster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LargeMonsterUpdateArgs>(args: SelectSubset<T, LargeMonsterUpdateArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LargeMonsters.
     * @param {LargeMonsterDeleteManyArgs} args - Arguments to filter LargeMonsters to delete.
     * @example
     * // Delete a few LargeMonsters
     * const { count } = await prisma.largeMonster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LargeMonsterDeleteManyArgs>(args?: SelectSubset<T, LargeMonsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LargeMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LargeMonsters
     * const largeMonster = await prisma.largeMonster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LargeMonsterUpdateManyArgs>(args: SelectSubset<T, LargeMonsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LargeMonster.
     * @param {LargeMonsterUpsertArgs} args - Arguments to update or create a LargeMonster.
     * @example
     * // Update or create a LargeMonster
     * const largeMonster = await prisma.largeMonster.upsert({
     *   create: {
     *     // ... data to create a LargeMonster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LargeMonster we want to update
     *   }
     * })
     */
    upsert<T extends LargeMonsterUpsertArgs>(args: SelectSubset<T, LargeMonsterUpsertArgs<ExtArgs>>): Prisma__LargeMonsterClient<$Result.GetResult<Prisma.$LargeMonsterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LargeMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterCountArgs} args - Arguments to filter LargeMonsters to count.
     * @example
     * // Count the number of LargeMonsters
     * const count = await prisma.largeMonster.count({
     *   where: {
     *     // ... the filter for the LargeMonsters we want to count
     *   }
     * })
    **/
    count<T extends LargeMonsterCountArgs>(
      args?: Subset<T, LargeMonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LargeMonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LargeMonster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LargeMonsterAggregateArgs>(args: Subset<T, LargeMonsterAggregateArgs>): Prisma.PrismaPromise<GetLargeMonsterAggregateType<T>>

    /**
     * Group by LargeMonster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeMonsterGroupByArgs} args - Group by arguments.
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
      T extends LargeMonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LargeMonsterGroupByArgs['orderBy'] }
        : { orderBy?: LargeMonsterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LargeMonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLargeMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LargeMonster model
   */
  readonly fields: LargeMonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LargeMonster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LargeMonsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LargeMonster model
   */ 
  interface LargeMonsterFieldRefs {
    readonly id: FieldRef<"LargeMonster", 'Int'>
    readonly gameId: FieldRef<"LargeMonster", 'String'>
    readonly nameEn: FieldRef<"LargeMonster", 'String'>
    readonly nameJa: FieldRef<"LargeMonster", 'String'>
    readonly nameZh: FieldRef<"LargeMonster", 'String'>
    readonly monsterType: FieldRef<"LargeMonster", 'String'>
    readonly threatLevel: FieldRef<"LargeMonster", 'String'>
    readonly elements: FieldRef<"LargeMonster", 'String'>
    readonly weaknesses: FieldRef<"LargeMonster", 'String'>
    readonly iconUrl: FieldRef<"LargeMonster", 'String'>
    readonly createdAt: FieldRef<"LargeMonster", 'DateTime'>
    readonly updatedAt: FieldRef<"LargeMonster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LargeMonster findUnique
   */
  export type LargeMonsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * Filter, which LargeMonster to fetch.
     */
    where: LargeMonsterWhereUniqueInput
  }

  /**
   * LargeMonster findUniqueOrThrow
   */
  export type LargeMonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * Filter, which LargeMonster to fetch.
     */
    where: LargeMonsterWhereUniqueInput
  }

  /**
   * LargeMonster findFirst
   */
  export type LargeMonsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * Filter, which LargeMonster to fetch.
     */
    where?: LargeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeMonsters to fetch.
     */
    orderBy?: LargeMonsterOrderByWithRelationInput | LargeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LargeMonsters.
     */
    cursor?: LargeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LargeMonsters.
     */
    distinct?: LargeMonsterScalarFieldEnum | LargeMonsterScalarFieldEnum[]
  }

  /**
   * LargeMonster findFirstOrThrow
   */
  export type LargeMonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * Filter, which LargeMonster to fetch.
     */
    where?: LargeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeMonsters to fetch.
     */
    orderBy?: LargeMonsterOrderByWithRelationInput | LargeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LargeMonsters.
     */
    cursor?: LargeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LargeMonsters.
     */
    distinct?: LargeMonsterScalarFieldEnum | LargeMonsterScalarFieldEnum[]
  }

  /**
   * LargeMonster findMany
   */
  export type LargeMonsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * Filter, which LargeMonsters to fetch.
     */
    where?: LargeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeMonsters to fetch.
     */
    orderBy?: LargeMonsterOrderByWithRelationInput | LargeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LargeMonsters.
     */
    cursor?: LargeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeMonsters.
     */
    skip?: number
    distinct?: LargeMonsterScalarFieldEnum | LargeMonsterScalarFieldEnum[]
  }

  /**
   * LargeMonster create
   */
  export type LargeMonsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * The data needed to create a LargeMonster.
     */
    data: XOR<LargeMonsterCreateInput, LargeMonsterUncheckedCreateInput>
  }

  /**
   * LargeMonster createMany
   */
  export type LargeMonsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LargeMonsters.
     */
    data: LargeMonsterCreateManyInput | LargeMonsterCreateManyInput[]
  }

  /**
   * LargeMonster createManyAndReturn
   */
  export type LargeMonsterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LargeMonsters.
     */
    data: LargeMonsterCreateManyInput | LargeMonsterCreateManyInput[]
  }

  /**
   * LargeMonster update
   */
  export type LargeMonsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * The data needed to update a LargeMonster.
     */
    data: XOR<LargeMonsterUpdateInput, LargeMonsterUncheckedUpdateInput>
    /**
     * Choose, which LargeMonster to update.
     */
    where: LargeMonsterWhereUniqueInput
  }

  /**
   * LargeMonster updateMany
   */
  export type LargeMonsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LargeMonsters.
     */
    data: XOR<LargeMonsterUpdateManyMutationInput, LargeMonsterUncheckedUpdateManyInput>
    /**
     * Filter which LargeMonsters to update
     */
    where?: LargeMonsterWhereInput
  }

  /**
   * LargeMonster upsert
   */
  export type LargeMonsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * The filter to search for the LargeMonster to update in case it exists.
     */
    where: LargeMonsterWhereUniqueInput
    /**
     * In case the LargeMonster found by the `where` argument doesn't exist, create a new LargeMonster with this data.
     */
    create: XOR<LargeMonsterCreateInput, LargeMonsterUncheckedCreateInput>
    /**
     * In case the LargeMonster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LargeMonsterUpdateInput, LargeMonsterUncheckedUpdateInput>
  }

  /**
   * LargeMonster delete
   */
  export type LargeMonsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
    /**
     * Filter which LargeMonster to delete.
     */
    where: LargeMonsterWhereUniqueInput
  }

  /**
   * LargeMonster deleteMany
   */
  export type LargeMonsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LargeMonsters to delete
     */
    where?: LargeMonsterWhereInput
  }

  /**
   * LargeMonster without action
   */
  export type LargeMonsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeMonster
     */
    select?: LargeMonsterSelect<ExtArgs> | null
  }


  /**
   * Model Weapon
   */

  export type AggregateWeapon = {
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  export type WeaponAvgAggregateOutputType = {
    id: number | null
    rarity: number | null
    attack: number | null
    elementDamage: number | null
  }

  export type WeaponSumAggregateOutputType = {
    id: number | null
    rarity: number | null
    attack: number | null
    elementDamage: number | null
  }

  export type WeaponMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    nameEn: string | null
    nameJa: string | null
    nameZh: string | null
    weaponType: string | null
    rarity: number | null
    attack: number | null
    elementType: string | null
    elementDamage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    nameEn: string | null
    nameJa: string | null
    nameZh: string | null
    weaponType: string | null
    rarity: number | null
    attack: number | null
    elementType: string | null
    elementDamage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponCountAggregateOutputType = {
    id: number
    gameId: number
    nameEn: number
    nameJa: number
    nameZh: number
    weaponType: number
    rarity: number
    attack: number
    elementType: number
    elementDamage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeaponAvgAggregateInputType = {
    id?: true
    rarity?: true
    attack?: true
    elementDamage?: true
  }

  export type WeaponSumAggregateInputType = {
    id?: true
    rarity?: true
    attack?: true
    elementDamage?: true
  }

  export type WeaponMinAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    weaponType?: true
    rarity?: true
    attack?: true
    elementType?: true
    elementDamage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponMaxAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    weaponType?: true
    rarity?: true
    attack?: true
    elementType?: true
    elementDamage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponCountAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    weaponType?: true
    rarity?: true
    attack?: true
    elementType?: true
    elementDamage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeaponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapon to aggregate.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weapons
    **/
    _count?: true | WeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponMaxAggregateInputType
  }

  export type GetWeaponAggregateType<T extends WeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeapon[P]>
      : GetScalarType<T[P], AggregateWeapon[P]>
  }




  export type WeaponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithAggregationInput | WeaponOrderByWithAggregationInput[]
    by: WeaponScalarFieldEnum[] | WeaponScalarFieldEnum
    having?: WeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponCountAggregateInputType | true
    _avg?: WeaponAvgAggregateInputType
    _sum?: WeaponSumAggregateInputType
    _min?: WeaponMinAggregateInputType
    _max?: WeaponMaxAggregateInputType
  }

  export type WeaponGroupByOutputType = {
    id: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh: string | null
    weaponType: string
    rarity: number
    attack: number
    elementType: string | null
    elementDamage: number | null
    createdAt: Date
    updatedAt: Date
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  type GetWeaponGroupByPayload<T extends WeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponGroupByOutputType[P]>
        }
      >
    >


  export type WeaponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    weaponType?: boolean
    rarity?: boolean
    attack?: boolean
    elementType?: boolean
    elementDamage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    weaponType?: boolean
    rarity?: boolean
    attack?: boolean
    elementType?: boolean
    elementDamage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectScalar = {
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    weaponType?: boolean
    rarity?: boolean
    attack?: boolean
    elementType?: boolean
    elementDamage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WeaponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weapon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      nameEn: string
      nameJa: string
      nameZh: string | null
      weaponType: string
      rarity: number
      attack: number
      elementType: string | null
      elementDamage: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weapon"]>
    composites: {}
  }

  type WeaponGetPayload<S extends boolean | null | undefined | WeaponDefaultArgs> = $Result.GetResult<Prisma.$WeaponPayload, S>

  type WeaponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeaponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeaponCountAggregateInputType | true
    }

  export interface WeaponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weapon'], meta: { name: 'Weapon' } }
    /**
     * Find zero or one Weapon that matches the filter.
     * @param {WeaponFindUniqueArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeaponFindUniqueArgs>(args: SelectSubset<T, WeaponFindUniqueArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Weapon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeaponFindUniqueOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeaponFindUniqueOrThrowArgs>(args: SelectSubset<T, WeaponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Weapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeaponFindFirstArgs>(args?: SelectSubset<T, WeaponFindFirstArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Weapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeaponFindFirstOrThrowArgs>(args?: SelectSubset<T, WeaponFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Weapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weapons
     * const weapons = await prisma.weapon.findMany()
     * 
     * // Get first 10 Weapons
     * const weapons = await prisma.weapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponWithIdOnly = await prisma.weapon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeaponFindManyArgs>(args?: SelectSubset<T, WeaponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Weapon.
     * @param {WeaponCreateArgs} args - Arguments to create a Weapon.
     * @example
     * // Create one Weapon
     * const Weapon = await prisma.weapon.create({
     *   data: {
     *     // ... data to create a Weapon
     *   }
     * })
     * 
     */
    create<T extends WeaponCreateArgs>(args: SelectSubset<T, WeaponCreateArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Weapons.
     * @param {WeaponCreateManyArgs} args - Arguments to create many Weapons.
     * @example
     * // Create many Weapons
     * const weapon = await prisma.weapon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeaponCreateManyArgs>(args?: SelectSubset<T, WeaponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weapons and returns the data saved in the database.
     * @param {WeaponCreateManyAndReturnArgs} args - Arguments to create many Weapons.
     * @example
     * // Create many Weapons
     * const weapon = await prisma.weapon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weapons and only return the `id`
     * const weaponWithIdOnly = await prisma.weapon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeaponCreateManyAndReturnArgs>(args?: SelectSubset<T, WeaponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Weapon.
     * @param {WeaponDeleteArgs} args - Arguments to delete one Weapon.
     * @example
     * // Delete one Weapon
     * const Weapon = await prisma.weapon.delete({
     *   where: {
     *     // ... filter to delete one Weapon
     *   }
     * })
     * 
     */
    delete<T extends WeaponDeleteArgs>(args: SelectSubset<T, WeaponDeleteArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Weapon.
     * @param {WeaponUpdateArgs} args - Arguments to update one Weapon.
     * @example
     * // Update one Weapon
     * const weapon = await prisma.weapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeaponUpdateArgs>(args: SelectSubset<T, WeaponUpdateArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Weapons.
     * @param {WeaponDeleteManyArgs} args - Arguments to filter Weapons to delete.
     * @example
     * // Delete a few Weapons
     * const { count } = await prisma.weapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeaponDeleteManyArgs>(args?: SelectSubset<T, WeaponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weapons
     * const weapon = await prisma.weapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeaponUpdateManyArgs>(args: SelectSubset<T, WeaponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Weapon.
     * @param {WeaponUpsertArgs} args - Arguments to update or create a Weapon.
     * @example
     * // Update or create a Weapon
     * const weapon = await prisma.weapon.upsert({
     *   create: {
     *     // ... data to create a Weapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weapon we want to update
     *   }
     * })
     */
    upsert<T extends WeaponUpsertArgs>(args: SelectSubset<T, WeaponUpsertArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponCountArgs} args - Arguments to filter Weapons to count.
     * @example
     * // Count the number of Weapons
     * const count = await prisma.weapon.count({
     *   where: {
     *     // ... the filter for the Weapons we want to count
     *   }
     * })
    **/
    count<T extends WeaponCountArgs>(
      args?: Subset<T, WeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeaponAggregateArgs>(args: Subset<T, WeaponAggregateArgs>): Prisma.PrismaPromise<GetWeaponAggregateType<T>>

    /**
     * Group by Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponGroupByArgs} args - Group by arguments.
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
      T extends WeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponGroupByArgs['orderBy'] }
        : { orderBy?: WeaponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weapon model
   */
  readonly fields: WeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Weapon model
   */ 
  interface WeaponFieldRefs {
    readonly id: FieldRef<"Weapon", 'Int'>
    readonly gameId: FieldRef<"Weapon", 'String'>
    readonly nameEn: FieldRef<"Weapon", 'String'>
    readonly nameJa: FieldRef<"Weapon", 'String'>
    readonly nameZh: FieldRef<"Weapon", 'String'>
    readonly weaponType: FieldRef<"Weapon", 'String'>
    readonly rarity: FieldRef<"Weapon", 'Int'>
    readonly attack: FieldRef<"Weapon", 'Int'>
    readonly elementType: FieldRef<"Weapon", 'String'>
    readonly elementDamage: FieldRef<"Weapon", 'Int'>
    readonly createdAt: FieldRef<"Weapon", 'DateTime'>
    readonly updatedAt: FieldRef<"Weapon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Weapon findUnique
   */
  export type WeaponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon findUniqueOrThrow
   */
  export type WeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon findFirst
   */
  export type WeaponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon findFirstOrThrow
   */
  export type WeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon findMany
   */
  export type WeaponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Filter, which Weapons to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon create
   */
  export type WeaponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * The data needed to create a Weapon.
     */
    data: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
  }

  /**
   * Weapon createMany
   */
  export type WeaponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weapons.
     */
    data: WeaponCreateManyInput | WeaponCreateManyInput[]
  }

  /**
   * Weapon createManyAndReturn
   */
  export type WeaponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Weapons.
     */
    data: WeaponCreateManyInput | WeaponCreateManyInput[]
  }

  /**
   * Weapon update
   */
  export type WeaponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * The data needed to update a Weapon.
     */
    data: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
    /**
     * Choose, which Weapon to update.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon updateMany
   */
  export type WeaponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weapons.
     */
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyInput>
    /**
     * Filter which Weapons to update
     */
    where?: WeaponWhereInput
  }

  /**
   * Weapon upsert
   */
  export type WeaponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * The filter to search for the Weapon to update in case it exists.
     */
    where: WeaponWhereUniqueInput
    /**
     * In case the Weapon found by the `where` argument doesn't exist, create a new Weapon with this data.
     */
    create: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
    /**
     * In case the Weapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
  }

  /**
   * Weapon delete
   */
  export type WeaponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Filter which Weapon to delete.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon deleteMany
   */
  export type WeaponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapons to delete
     */
    where?: WeaponWhereInput
  }

  /**
   * Weapon without action
   */
  export type WeaponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    rarity: number | null
    value: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    rarity: number | null
    value: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    nameEn: string | null
    nameJa: string | null
    nameZh: string | null
    category: string | null
    rarity: number | null
    value: number | null
    iconUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    nameEn: string | null
    nameJa: string | null
    nameZh: string | null
    category: string | null
    rarity: number | null
    value: number | null
    iconUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    gameId: number
    nameEn: number
    nameJa: number
    nameZh: number
    category: number
    rarity: number
    value: number
    iconUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    rarity?: true
    value?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    rarity?: true
    value?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    category?: true
    rarity?: true
    value?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    category?: true
    rarity?: true
    value?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    gameId?: true
    nameEn?: true
    nameJa?: true
    nameZh?: true
    category?: true
    rarity?: true
    value?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh: string | null
    category: string
    rarity: number
    value: number
    iconUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    category?: boolean
    rarity?: boolean
    value?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    category?: boolean
    rarity?: boolean
    value?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    gameId?: boolean
    nameEn?: boolean
    nameJa?: boolean
    nameZh?: boolean
    category?: boolean
    rarity?: boolean
    value?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      nameEn: string
      nameJa: string
      nameZh: string | null
      category: string
      rarity: number
      value: number
      iconUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly gameId: FieldRef<"Item", 'String'>
    readonly nameEn: FieldRef<"Item", 'String'>
    readonly nameJa: FieldRef<"Item", 'String'>
    readonly nameZh: FieldRef<"Item", 'String'>
    readonly category: FieldRef<"Item", 'String'>
    readonly rarity: FieldRef<"Item", 'Int'>
    readonly value: FieldRef<"Item", 'Int'>
    readonly iconUrl: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
  }


  /**
   * Model Monster
   */

  export type AggregateMonster = {
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  export type MonsterAvgAggregateOutputType = {
    id: number | null
  }

  export type MonsterSumAggregateOutputType = {
    id: number | null
  }

  export type MonsterMinAggregateOutputType = {
    id: number | null
    game_id: string | null
    data: string | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: number | null
    game_id: string | null
    data: string | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    game_id: number
    data: number
    _all: number
  }


  export type MonsterAvgAggregateInputType = {
    id?: true
  }

  export type MonsterSumAggregateInputType = {
    id?: true
  }

  export type MonsterMinAggregateInputType = {
    id?: true
    game_id?: true
    data?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    game_id?: true
    data?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    game_id?: true
    data?: true
    _all?: true
  }

  export type MonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monster to aggregate.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monsters
    **/
    _count?: true | MonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterMaxAggregateInputType
  }

  export type GetMonsterAggregateType<T extends MonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonster[P]>
      : GetScalarType<T[P], AggregateMonster[P]>
  }




  export type MonsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithAggregationInput | MonsterOrderByWithAggregationInput[]
    by: MonsterScalarFieldEnum[] | MonsterScalarFieldEnum
    having?: MonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterCountAggregateInputType | true
    _avg?: MonsterAvgAggregateInputType
    _sum?: MonsterSumAggregateInputType
    _min?: MonsterMinAggregateInputType
    _max?: MonsterMaxAggregateInputType
  }

  export type MonsterGroupByOutputType = {
    id: number
    game_id: string
    data: string
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  type GetMonsterGroupByPayload<T extends MonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectScalar = {
    id?: boolean
    game_id?: boolean
    data?: boolean
  }


  export type $MonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: string
      data: string
    }, ExtArgs["result"]["monster"]>
    composites: {}
  }

  type MonsterGetPayload<S extends boolean | null | undefined | MonsterDefaultArgs> = $Result.GetResult<Prisma.$MonsterPayload, S>

  type MonsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonsterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonsterCountAggregateInputType | true
    }

  export interface MonsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monster'], meta: { name: 'Monster' } }
    /**
     * Find zero or one Monster that matches the filter.
     * @param {MonsterFindUniqueArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonsterFindUniqueArgs>(args: SelectSubset<T, MonsterFindUniqueArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Monster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonsterFindUniqueOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonsterFindUniqueOrThrowArgs>(args: SelectSubset<T, MonsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Monster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonsterFindFirstArgs>(args?: SelectSubset<T, MonsterFindFirstArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Monster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonsterFindFirstOrThrowArgs>(args?: SelectSubset<T, MonsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Monsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monsters
     * const monsters = await prisma.monster.findMany()
     * 
     * // Get first 10 Monsters
     * const monsters = await prisma.monster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterWithIdOnly = await prisma.monster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonsterFindManyArgs>(args?: SelectSubset<T, MonsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Monster.
     * @param {MonsterCreateArgs} args - Arguments to create a Monster.
     * @example
     * // Create one Monster
     * const Monster = await prisma.monster.create({
     *   data: {
     *     // ... data to create a Monster
     *   }
     * })
     * 
     */
    create<T extends MonsterCreateArgs>(args: SelectSubset<T, MonsterCreateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Monsters.
     * @param {MonsterCreateManyArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonsterCreateManyArgs>(args?: SelectSubset<T, MonsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monsters and returns the data saved in the database.
     * @param {MonsterCreateManyAndReturnArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monsters and only return the `id`
     * const monsterWithIdOnly = await prisma.monster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonsterCreateManyAndReturnArgs>(args?: SelectSubset<T, MonsterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Monster.
     * @param {MonsterDeleteArgs} args - Arguments to delete one Monster.
     * @example
     * // Delete one Monster
     * const Monster = await prisma.monster.delete({
     *   where: {
     *     // ... filter to delete one Monster
     *   }
     * })
     * 
     */
    delete<T extends MonsterDeleteArgs>(args: SelectSubset<T, MonsterDeleteArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Monster.
     * @param {MonsterUpdateArgs} args - Arguments to update one Monster.
     * @example
     * // Update one Monster
     * const monster = await prisma.monster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonsterUpdateArgs>(args: SelectSubset<T, MonsterUpdateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Monsters.
     * @param {MonsterDeleteManyArgs} args - Arguments to filter Monsters to delete.
     * @example
     * // Delete a few Monsters
     * const { count } = await prisma.monster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonsterDeleteManyArgs>(args?: SelectSubset<T, MonsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonsterUpdateManyArgs>(args: SelectSubset<T, MonsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Monster.
     * @param {MonsterUpsertArgs} args - Arguments to update or create a Monster.
     * @example
     * // Update or create a Monster
     * const monster = await prisma.monster.upsert({
     *   create: {
     *     // ... data to create a Monster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monster we want to update
     *   }
     * })
     */
    upsert<T extends MonsterUpsertArgs>(args: SelectSubset<T, MonsterUpsertArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterCountArgs} args - Arguments to filter Monsters to count.
     * @example
     * // Count the number of Monsters
     * const count = await prisma.monster.count({
     *   where: {
     *     // ... the filter for the Monsters we want to count
     *   }
     * })
    **/
    count<T extends MonsterCountArgs>(
      args?: Subset<T, MonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterAggregateArgs>(args: Subset<T, MonsterAggregateArgs>): Prisma.PrismaPromise<GetMonsterAggregateType<T>>

    /**
     * Group by Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterGroupByArgs} args - Group by arguments.
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
      T extends MonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterGroupByArgs['orderBy'] }
        : { orderBy?: MonsterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monster model
   */
  readonly fields: MonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Monster model
   */ 
  interface MonsterFieldRefs {
    readonly id: FieldRef<"Monster", 'Int'>
    readonly game_id: FieldRef<"Monster", 'String'>
    readonly data: FieldRef<"Monster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Monster findUnique
   */
  export type MonsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findUniqueOrThrow
   */
  export type MonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findFirst
   */
  export type MonsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findFirstOrThrow
   */
  export type MonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findMany
   */
  export type MonsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Filter, which Monsters to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster create
   */
  export type MonsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * The data needed to create a Monster.
     */
    data: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
  }

  /**
   * Monster createMany
   */
  export type MonsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
  }

  /**
   * Monster createManyAndReturn
   */
  export type MonsterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
  }

  /**
   * Monster update
   */
  export type MonsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * The data needed to update a Monster.
     */
    data: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
    /**
     * Choose, which Monster to update.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster updateMany
   */
  export type MonsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
  }

  /**
   * Monster upsert
   */
  export type MonsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * The filter to search for the Monster to update in case it exists.
     */
    where: MonsterWhereUniqueInput
    /**
     * In case the Monster found by the `where` argument doesn't exist, create a new Monster with this data.
     */
    create: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
    /**
     * In case the Monster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
  }

  /**
   * Monster delete
   */
  export type MonsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Filter which Monster to delete.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster deleteMany
   */
  export type MonsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monsters to delete
     */
    where?: MonsterWhereInput
  }

  /**
   * Monster without action
   */
  export type MonsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LargeMonsterScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    nameEn: 'nameEn',
    nameJa: 'nameJa',
    nameZh: 'nameZh',
    monsterType: 'monsterType',
    threatLevel: 'threatLevel',
    elements: 'elements',
    weaknesses: 'weaknesses',
    iconUrl: 'iconUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LargeMonsterScalarFieldEnum = (typeof LargeMonsterScalarFieldEnum)[keyof typeof LargeMonsterScalarFieldEnum]


  export const WeaponScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    nameEn: 'nameEn',
    nameJa: 'nameJa',
    nameZh: 'nameZh',
    weaponType: 'weaponType',
    rarity: 'rarity',
    attack: 'attack',
    elementType: 'elementType',
    elementDamage: 'elementDamage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeaponScalarFieldEnum = (typeof WeaponScalarFieldEnum)[keyof typeof WeaponScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    nameEn: 'nameEn',
    nameJa: 'nameJa',
    nameZh: 'nameZh',
    category: 'category',
    rarity: 'rarity',
    value: 'value',
    iconUrl: 'iconUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    data: 'data'
  };

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LargeMonsterWhereInput = {
    AND?: LargeMonsterWhereInput | LargeMonsterWhereInput[]
    OR?: LargeMonsterWhereInput[]
    NOT?: LargeMonsterWhereInput | LargeMonsterWhereInput[]
    id?: IntFilter<"LargeMonster"> | number
    gameId?: StringFilter<"LargeMonster"> | string
    nameEn?: StringFilter<"LargeMonster"> | string
    nameJa?: StringFilter<"LargeMonster"> | string
    nameZh?: StringNullableFilter<"LargeMonster"> | string | null
    monsterType?: StringFilter<"LargeMonster"> | string
    threatLevel?: StringFilter<"LargeMonster"> | string
    elements?: StringFilter<"LargeMonster"> | string
    weaknesses?: StringFilter<"LargeMonster"> | string
    iconUrl?: StringNullableFilter<"LargeMonster"> | string | null
    createdAt?: DateTimeFilter<"LargeMonster"> | Date | string
    updatedAt?: DateTimeFilter<"LargeMonster"> | Date | string
  }

  export type LargeMonsterOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrderInput | SortOrder
    monsterType?: SortOrder
    threatLevel?: SortOrder
    elements?: SortOrder
    weaknesses?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeMonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId?: string
    AND?: LargeMonsterWhereInput | LargeMonsterWhereInput[]
    OR?: LargeMonsterWhereInput[]
    NOT?: LargeMonsterWhereInput | LargeMonsterWhereInput[]
    nameEn?: StringFilter<"LargeMonster"> | string
    nameJa?: StringFilter<"LargeMonster"> | string
    nameZh?: StringNullableFilter<"LargeMonster"> | string | null
    monsterType?: StringFilter<"LargeMonster"> | string
    threatLevel?: StringFilter<"LargeMonster"> | string
    elements?: StringFilter<"LargeMonster"> | string
    weaknesses?: StringFilter<"LargeMonster"> | string
    iconUrl?: StringNullableFilter<"LargeMonster"> | string | null
    createdAt?: DateTimeFilter<"LargeMonster"> | Date | string
    updatedAt?: DateTimeFilter<"LargeMonster"> | Date | string
  }, "id" | "gameId">

  export type LargeMonsterOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrderInput | SortOrder
    monsterType?: SortOrder
    threatLevel?: SortOrder
    elements?: SortOrder
    weaknesses?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LargeMonsterCountOrderByAggregateInput
    _avg?: LargeMonsterAvgOrderByAggregateInput
    _max?: LargeMonsterMaxOrderByAggregateInput
    _min?: LargeMonsterMinOrderByAggregateInput
    _sum?: LargeMonsterSumOrderByAggregateInput
  }

  export type LargeMonsterScalarWhereWithAggregatesInput = {
    AND?: LargeMonsterScalarWhereWithAggregatesInput | LargeMonsterScalarWhereWithAggregatesInput[]
    OR?: LargeMonsterScalarWhereWithAggregatesInput[]
    NOT?: LargeMonsterScalarWhereWithAggregatesInput | LargeMonsterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LargeMonster"> | number
    gameId?: StringWithAggregatesFilter<"LargeMonster"> | string
    nameEn?: StringWithAggregatesFilter<"LargeMonster"> | string
    nameJa?: StringWithAggregatesFilter<"LargeMonster"> | string
    nameZh?: StringNullableWithAggregatesFilter<"LargeMonster"> | string | null
    monsterType?: StringWithAggregatesFilter<"LargeMonster"> | string
    threatLevel?: StringWithAggregatesFilter<"LargeMonster"> | string
    elements?: StringWithAggregatesFilter<"LargeMonster"> | string
    weaknesses?: StringWithAggregatesFilter<"LargeMonster"> | string
    iconUrl?: StringNullableWithAggregatesFilter<"LargeMonster"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LargeMonster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LargeMonster"> | Date | string
  }

  export type WeaponWhereInput = {
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    id?: IntFilter<"Weapon"> | number
    gameId?: StringFilter<"Weapon"> | string
    nameEn?: StringFilter<"Weapon"> | string
    nameJa?: StringFilter<"Weapon"> | string
    nameZh?: StringNullableFilter<"Weapon"> | string | null
    weaponType?: StringFilter<"Weapon"> | string
    rarity?: IntFilter<"Weapon"> | number
    attack?: IntFilter<"Weapon"> | number
    elementType?: StringNullableFilter<"Weapon"> | string | null
    elementDamage?: IntNullableFilter<"Weapon"> | number | null
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
  }

  export type WeaponOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrderInput | SortOrder
    weaponType?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementType?: SortOrderInput | SortOrder
    elementDamage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId?: string
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    nameEn?: StringFilter<"Weapon"> | string
    nameJa?: StringFilter<"Weapon"> | string
    nameZh?: StringNullableFilter<"Weapon"> | string | null
    weaponType?: StringFilter<"Weapon"> | string
    rarity?: IntFilter<"Weapon"> | number
    attack?: IntFilter<"Weapon"> | number
    elementType?: StringNullableFilter<"Weapon"> | string | null
    elementDamage?: IntNullableFilter<"Weapon"> | number | null
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
  }, "id" | "gameId">

  export type WeaponOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrderInput | SortOrder
    weaponType?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementType?: SortOrderInput | SortOrder
    elementDamage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeaponCountOrderByAggregateInput
    _avg?: WeaponAvgOrderByAggregateInput
    _max?: WeaponMaxOrderByAggregateInput
    _min?: WeaponMinOrderByAggregateInput
    _sum?: WeaponSumOrderByAggregateInput
  }

  export type WeaponScalarWhereWithAggregatesInput = {
    AND?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    OR?: WeaponScalarWhereWithAggregatesInput[]
    NOT?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Weapon"> | number
    gameId?: StringWithAggregatesFilter<"Weapon"> | string
    nameEn?: StringWithAggregatesFilter<"Weapon"> | string
    nameJa?: StringWithAggregatesFilter<"Weapon"> | string
    nameZh?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    weaponType?: StringWithAggregatesFilter<"Weapon"> | string
    rarity?: IntWithAggregatesFilter<"Weapon"> | number
    attack?: IntWithAggregatesFilter<"Weapon"> | number
    elementType?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    elementDamage?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Weapon"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    gameId?: StringFilter<"Item"> | string
    nameEn?: StringFilter<"Item"> | string
    nameJa?: StringFilter<"Item"> | string
    nameZh?: StringNullableFilter<"Item"> | string | null
    category?: StringFilter<"Item"> | string
    rarity?: IntFilter<"Item"> | number
    value?: IntFilter<"Item"> | number
    iconUrl?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrderInput | SortOrder
    category?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    nameEn?: StringFilter<"Item"> | string
    nameJa?: StringFilter<"Item"> | string
    nameZh?: StringNullableFilter<"Item"> | string | null
    category?: StringFilter<"Item"> | string
    rarity?: IntFilter<"Item"> | number
    value?: IntFilter<"Item"> | number
    iconUrl?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }, "id" | "gameId">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrderInput | SortOrder
    category?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    gameId?: StringWithAggregatesFilter<"Item"> | string
    nameEn?: StringWithAggregatesFilter<"Item"> | string
    nameJa?: StringWithAggregatesFilter<"Item"> | string
    nameZh?: StringNullableWithAggregatesFilter<"Item"> | string | null
    category?: StringWithAggregatesFilter<"Item"> | string
    rarity?: IntWithAggregatesFilter<"Item"> | number
    value?: IntWithAggregatesFilter<"Item"> | number
    iconUrl?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type MonsterWhereInput = {
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    id?: IntFilter<"Monster"> | number
    game_id?: StringFilter<"Monster"> | string
    data?: StringFilter<"Monster"> | string
  }

  export type MonsterOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    data?: SortOrder
  }

  export type MonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: string
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    data?: StringFilter<"Monster"> | string
  }, "id" | "game_id">

  export type MonsterOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    data?: SortOrder
    _count?: MonsterCountOrderByAggregateInput
    _avg?: MonsterAvgOrderByAggregateInput
    _max?: MonsterMaxOrderByAggregateInput
    _min?: MonsterMinOrderByAggregateInput
    _sum?: MonsterSumOrderByAggregateInput
  }

  export type MonsterScalarWhereWithAggregatesInput = {
    AND?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    OR?: MonsterScalarWhereWithAggregatesInput[]
    NOT?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Monster"> | number
    game_id?: StringWithAggregatesFilter<"Monster"> | string
    data?: StringWithAggregatesFilter<"Monster"> | string
  }

  export type LargeMonsterCreateInput = {
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    monsterType: string
    threatLevel: string
    elements?: string
    weaknesses?: string
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LargeMonsterUncheckedCreateInput = {
    id?: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    monsterType: string
    threatLevel: string
    elements?: string
    weaknesses?: string
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LargeMonsterUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    monsterType?: StringFieldUpdateOperationsInput | string
    threatLevel?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LargeMonsterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    monsterType?: StringFieldUpdateOperationsInput | string
    threatLevel?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LargeMonsterCreateManyInput = {
    id?: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    monsterType: string
    threatLevel: string
    elements?: string
    weaknesses?: string
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LargeMonsterUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    monsterType?: StringFieldUpdateOperationsInput | string
    threatLevel?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LargeMonsterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    monsterType?: StringFieldUpdateOperationsInput | string
    threatLevel?: StringFieldUpdateOperationsInput | string
    elements?: StringFieldUpdateOperationsInput | string
    weaknesses?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateInput = {
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    weaponType: string
    rarity?: number
    attack?: number
    elementType?: string | null
    elementDamage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUncheckedCreateInput = {
    id?: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    weaponType: string
    rarity?: number
    attack?: number
    elementType?: string | null
    elementDamage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    weaponType?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    elementType?: NullableStringFieldUpdateOperationsInput | string | null
    elementDamage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    weaponType?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    elementType?: NullableStringFieldUpdateOperationsInput | string | null
    elementDamage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateManyInput = {
    id?: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    weaponType: string
    rarity?: number
    attack?: number
    elementType?: string | null
    elementDamage?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    weaponType?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    elementType?: NullableStringFieldUpdateOperationsInput | string | null
    elementDamage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    weaponType?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    elementType?: NullableStringFieldUpdateOperationsInput | string | null
    elementDamage?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    category: string
    rarity?: number
    value?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    category: string
    rarity?: number
    value?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    gameId: string
    nameEn: string
    nameJa: string
    nameZh?: string | null
    category: string
    rarity?: number
    value?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameJa?: StringFieldUpdateOperationsInput | string
    nameZh?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterCreateInput = {
    game_id: string
    data: string
  }

  export type MonsterUncheckedCreateInput = {
    id?: number
    game_id: string
    data: string
  }

  export type MonsterUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterCreateManyInput = {
    id?: number
    game_id: string
    data: string
  }

  export type MonsterUpdateManyMutationInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LargeMonsterCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    monsterType?: SortOrder
    threatLevel?: SortOrder
    elements?: SortOrder
    weaknesses?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeMonsterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LargeMonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    monsterType?: SortOrder
    threatLevel?: SortOrder
    elements?: SortOrder
    weaknesses?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeMonsterMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    monsterType?: SortOrder
    threatLevel?: SortOrder
    elements?: SortOrder
    weaknesses?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeMonsterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WeaponCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    weaponType?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementType?: SortOrder
    elementDamage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementDamage?: SortOrder
  }

  export type WeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    weaponType?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementType?: SortOrder
    elementDamage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    weaponType?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementType?: SortOrder
    elementDamage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSumOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    attack?: SortOrder
    elementDamage?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    category?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    category?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    nameEn?: SortOrder
    nameJa?: SortOrder
    nameZh?: SortOrder
    category?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
  }

  export type MonsterCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    data?: SortOrder
  }

  export type MonsterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    data?: SortOrder
  }

  export type MonsterMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    data?: SortOrder
  }

  export type MonsterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LargeMonsterDefaultArgs instead
     */
    export type LargeMonsterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LargeMonsterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeaponDefaultArgs instead
     */
    export type WeaponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeaponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterDefaultArgs instead
     */
    export type MonsterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonsterDefaultArgs<ExtArgs>

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