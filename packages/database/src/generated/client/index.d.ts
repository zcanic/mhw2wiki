
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
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Monster
 * 
 */
export type Monster = $Result.DefaultSelection<Prisma.$MonsterPayload>
/**
 * Model Weapon
 * 
 */
export type Weapon = $Result.DefaultSelection<Prisma.$WeaponPayload>
/**
 * Model ArmorSet
 * 
 */
export type ArmorSet = $Result.DefaultSelection<Prisma.$ArmorSetPayload>
/**
 * Model Amulet
 * 
 */
export type Amulet = $Result.DefaultSelection<Prisma.$AmuletPayload>
/**
 * Model Accessory
 * 
 */
export type Accessory = $Result.DefaultSelection<Prisma.$AccessoryPayload>
/**
 * Model Charm
 * 
 */
export type Charm = $Result.DefaultSelection<Prisma.$CharmPayload>
/**
 * Model ArmorUpgrade
 * 
 */
export type ArmorUpgrade = $Result.DefaultSelection<Prisma.$ArmorUpgradePayload>
/**
 * Model Species
 * 
 */
export type Species = $Result.DefaultSelection<Prisma.$SpeciesPayload>
/**
 * Model Stage
 * 
 */
export type Stage = $Result.DefaultSelection<Prisma.$StagePayload>
/**
 * Model PartName
 * 
 */
export type PartName = $Result.DefaultSelection<Prisma.$PartNamePayload>
/**
 * Model WeaponSeries
 * 
 */
export type WeaponSeries = $Result.DefaultSelection<Prisma.$WeaponSeriesPayload>
/**
 * Model HuntingHornMelody
 * 
 */
export type HuntingHornMelody = $Result.DefaultSelection<Prisma.$HuntingHornMelodyPayload>
/**
 * Model HuntingHornSong
 * 
 */
export type HuntingHornSong = $Result.DefaultSelection<Prisma.$HuntingHornSongPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
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
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
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
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **Monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.MonsterDelegate<ExtArgs>;

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
   * `prisma.armorSet`: Exposes CRUD operations for the **ArmorSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArmorSets
    * const armorSets = await prisma.armorSet.findMany()
    * ```
    */
  get armorSet(): Prisma.ArmorSetDelegate<ExtArgs>;

  /**
   * `prisma.amulet`: Exposes CRUD operations for the **Amulet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amulets
    * const amulets = await prisma.amulet.findMany()
    * ```
    */
  get amulet(): Prisma.AmuletDelegate<ExtArgs>;

  /**
   * `prisma.accessory`: Exposes CRUD operations for the **Accessory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accessories
    * const accessories = await prisma.accessory.findMany()
    * ```
    */
  get accessory(): Prisma.AccessoryDelegate<ExtArgs>;

  /**
   * `prisma.charm`: Exposes CRUD operations for the **Charm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charms
    * const charms = await prisma.charm.findMany()
    * ```
    */
  get charm(): Prisma.CharmDelegate<ExtArgs>;

  /**
   * `prisma.armorUpgrade`: Exposes CRUD operations for the **ArmorUpgrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArmorUpgrades
    * const armorUpgrades = await prisma.armorUpgrade.findMany()
    * ```
    */
  get armorUpgrade(): Prisma.ArmorUpgradeDelegate<ExtArgs>;

  /**
   * `prisma.species`: Exposes CRUD operations for the **Species** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Species
    * const species = await prisma.species.findMany()
    * ```
    */
  get species(): Prisma.SpeciesDelegate<ExtArgs>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<ExtArgs>;

  /**
   * `prisma.partName`: Exposes CRUD operations for the **PartName** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartNames
    * const partNames = await prisma.partName.findMany()
    * ```
    */
  get partName(): Prisma.PartNameDelegate<ExtArgs>;

  /**
   * `prisma.weaponSeries`: Exposes CRUD operations for the **WeaponSeries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeaponSeries
    * const weaponSeries = await prisma.weaponSeries.findMany()
    * ```
    */
  get weaponSeries(): Prisma.WeaponSeriesDelegate<ExtArgs>;

  /**
   * `prisma.huntingHornMelody`: Exposes CRUD operations for the **HuntingHornMelody** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HuntingHornMelodies
    * const huntingHornMelodies = await prisma.huntingHornMelody.findMany()
    * ```
    */
  get huntingHornMelody(): Prisma.HuntingHornMelodyDelegate<ExtArgs>;

  /**
   * `prisma.huntingHornSong`: Exposes CRUD operations for the **HuntingHornSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HuntingHornSongs
    * const huntingHornSongs = await prisma.huntingHornSong.findMany()
    * ```
    */
  get huntingHornSong(): Prisma.HuntingHornSongDelegate<ExtArgs>;
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
    Item: 'Item',
    Skill: 'Skill',
    Monster: 'Monster',
    Weapon: 'Weapon',
    ArmorSet: 'ArmorSet',
    Amulet: 'Amulet',
    Accessory: 'Accessory',
    Charm: 'Charm',
    ArmorUpgrade: 'ArmorUpgrade',
    Species: 'Species',
    Stage: 'Stage',
    PartName: 'PartName',
    WeaponSeries: 'WeaponSeries',
    HuntingHornMelody: 'HuntingHornMelody',
    HuntingHornSong: 'HuntingHornSong'
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
      modelProps: "item" | "skill" | "monster" | "weapon" | "armorSet" | "amulet" | "accessory" | "charm" | "armorUpgrade" | "species" | "stage" | "partName" | "weaponSeries" | "huntingHornMelody" | "huntingHornSong"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
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
      ArmorSet: {
        payload: Prisma.$ArmorSetPayload<ExtArgs>
        fields: Prisma.ArmorSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArmorSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArmorSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>
          }
          findFirst: {
            args: Prisma.ArmorSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArmorSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>
          }
          findMany: {
            args: Prisma.ArmorSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>[]
          }
          create: {
            args: Prisma.ArmorSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>
          }
          createMany: {
            args: Prisma.ArmorSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArmorSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>[]
          }
          delete: {
            args: Prisma.ArmorSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>
          }
          update: {
            args: Prisma.ArmorSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>
          }
          deleteMany: {
            args: Prisma.ArmorSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArmorSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArmorSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorSetPayload>
          }
          aggregate: {
            args: Prisma.ArmorSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArmorSet>
          }
          groupBy: {
            args: Prisma.ArmorSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArmorSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArmorSetCountArgs<ExtArgs>
            result: $Utils.Optional<ArmorSetCountAggregateOutputType> | number
          }
        }
      }
      Amulet: {
        payload: Prisma.$AmuletPayload<ExtArgs>
        fields: Prisma.AmuletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmuletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmuletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>
          }
          findFirst: {
            args: Prisma.AmuletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmuletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>
          }
          findMany: {
            args: Prisma.AmuletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>[]
          }
          create: {
            args: Prisma.AmuletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>
          }
          createMany: {
            args: Prisma.AmuletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmuletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>[]
          }
          delete: {
            args: Prisma.AmuletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>
          }
          update: {
            args: Prisma.AmuletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>
          }
          deleteMany: {
            args: Prisma.AmuletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmuletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AmuletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmuletPayload>
          }
          aggregate: {
            args: Prisma.AmuletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmulet>
          }
          groupBy: {
            args: Prisma.AmuletGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmuletGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmuletCountArgs<ExtArgs>
            result: $Utils.Optional<AmuletCountAggregateOutputType> | number
          }
        }
      }
      Accessory: {
        payload: Prisma.$AccessoryPayload<ExtArgs>
        fields: Prisma.AccessoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          findFirst: {
            args: Prisma.AccessoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          findMany: {
            args: Prisma.AccessoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>[]
          }
          create: {
            args: Prisma.AccessoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          createMany: {
            args: Prisma.AccessoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>[]
          }
          delete: {
            args: Prisma.AccessoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          update: {
            args: Prisma.AccessoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          deleteMany: {
            args: Prisma.AccessoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccessoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessoryPayload>
          }
          aggregate: {
            args: Prisma.AccessoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessory>
          }
          groupBy: {
            args: Prisma.AccessoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessoryCountArgs<ExtArgs>
            result: $Utils.Optional<AccessoryCountAggregateOutputType> | number
          }
        }
      }
      Charm: {
        payload: Prisma.$CharmPayload<ExtArgs>
        fields: Prisma.CharmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>
          }
          findFirst: {
            args: Prisma.CharmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>
          }
          findMany: {
            args: Prisma.CharmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>[]
          }
          create: {
            args: Prisma.CharmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>
          }
          createMany: {
            args: Prisma.CharmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>[]
          }
          delete: {
            args: Prisma.CharmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>
          }
          update: {
            args: Prisma.CharmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>
          }
          deleteMany: {
            args: Prisma.CharmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharmPayload>
          }
          aggregate: {
            args: Prisma.CharmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharm>
          }
          groupBy: {
            args: Prisma.CharmGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharmGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharmCountArgs<ExtArgs>
            result: $Utils.Optional<CharmCountAggregateOutputType> | number
          }
        }
      }
      ArmorUpgrade: {
        payload: Prisma.$ArmorUpgradePayload<ExtArgs>
        fields: Prisma.ArmorUpgradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArmorUpgradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArmorUpgradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>
          }
          findFirst: {
            args: Prisma.ArmorUpgradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArmorUpgradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>
          }
          findMany: {
            args: Prisma.ArmorUpgradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>[]
          }
          create: {
            args: Prisma.ArmorUpgradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>
          }
          createMany: {
            args: Prisma.ArmorUpgradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArmorUpgradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>[]
          }
          delete: {
            args: Prisma.ArmorUpgradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>
          }
          update: {
            args: Prisma.ArmorUpgradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>
          }
          deleteMany: {
            args: Prisma.ArmorUpgradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArmorUpgradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArmorUpgradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmorUpgradePayload>
          }
          aggregate: {
            args: Prisma.ArmorUpgradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArmorUpgrade>
          }
          groupBy: {
            args: Prisma.ArmorUpgradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArmorUpgradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArmorUpgradeCountArgs<ExtArgs>
            result: $Utils.Optional<ArmorUpgradeCountAggregateOutputType> | number
          }
        }
      }
      Species: {
        payload: Prisma.$SpeciesPayload<ExtArgs>
        fields: Prisma.SpeciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findFirst: {
            args: Prisma.SpeciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findMany: {
            args: Prisma.SpeciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          create: {
            args: Prisma.SpeciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          createMany: {
            args: Prisma.SpeciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          delete: {
            args: Prisma.SpeciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          update: {
            args: Prisma.SpeciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          deleteMany: {
            args: Prisma.SpeciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          aggregate: {
            args: Prisma.SpeciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecies>
          }
          groupBy: {
            args: Prisma.SpeciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeciesCountArgs<ExtArgs>
            result: $Utils.Optional<SpeciesCountAggregateOutputType> | number
          }
        }
      }
      Stage: {
        payload: Prisma.$StagePayload<ExtArgs>
        fields: Prisma.StageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findFirst: {
            args: Prisma.StageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findMany: {
            args: Prisma.StageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          create: {
            args: Prisma.StageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          createMany: {
            args: Prisma.StageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          delete: {
            args: Prisma.StageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          update: {
            args: Prisma.StageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          deleteMany: {
            args: Prisma.StageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.StageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageCountArgs<ExtArgs>
            result: $Utils.Optional<StageCountAggregateOutputType> | number
          }
        }
      }
      PartName: {
        payload: Prisma.$PartNamePayload<ExtArgs>
        fields: Prisma.PartNameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartNameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartNameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>
          }
          findFirst: {
            args: Prisma.PartNameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartNameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>
          }
          findMany: {
            args: Prisma.PartNameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>[]
          }
          create: {
            args: Prisma.PartNameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>
          }
          createMany: {
            args: Prisma.PartNameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartNameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>[]
          }
          delete: {
            args: Prisma.PartNameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>
          }
          update: {
            args: Prisma.PartNameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>
          }
          deleteMany: {
            args: Prisma.PartNameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartNameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartNameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartNamePayload>
          }
          aggregate: {
            args: Prisma.PartNameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartName>
          }
          groupBy: {
            args: Prisma.PartNameGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartNameGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartNameCountArgs<ExtArgs>
            result: $Utils.Optional<PartNameCountAggregateOutputType> | number
          }
        }
      }
      WeaponSeries: {
        payload: Prisma.$WeaponSeriesPayload<ExtArgs>
        fields: Prisma.WeaponSeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponSeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponSeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>
          }
          findFirst: {
            args: Prisma.WeaponSeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponSeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>
          }
          findMany: {
            args: Prisma.WeaponSeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>[]
          }
          create: {
            args: Prisma.WeaponSeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>
          }
          createMany: {
            args: Prisma.WeaponSeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeaponSeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>[]
          }
          delete: {
            args: Prisma.WeaponSeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>
          }
          update: {
            args: Prisma.WeaponSeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>
          }
          deleteMany: {
            args: Prisma.WeaponSeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponSeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeaponSeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponSeriesPayload>
          }
          aggregate: {
            args: Prisma.WeaponSeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeaponSeries>
          }
          groupBy: {
            args: Prisma.WeaponSeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeaponSeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponSeriesCountArgs<ExtArgs>
            result: $Utils.Optional<WeaponSeriesCountAggregateOutputType> | number
          }
        }
      }
      HuntingHornMelody: {
        payload: Prisma.$HuntingHornMelodyPayload<ExtArgs>
        fields: Prisma.HuntingHornMelodyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HuntingHornMelodyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HuntingHornMelodyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>
          }
          findFirst: {
            args: Prisma.HuntingHornMelodyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HuntingHornMelodyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>
          }
          findMany: {
            args: Prisma.HuntingHornMelodyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>[]
          }
          create: {
            args: Prisma.HuntingHornMelodyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>
          }
          createMany: {
            args: Prisma.HuntingHornMelodyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HuntingHornMelodyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>[]
          }
          delete: {
            args: Prisma.HuntingHornMelodyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>
          }
          update: {
            args: Prisma.HuntingHornMelodyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>
          }
          deleteMany: {
            args: Prisma.HuntingHornMelodyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HuntingHornMelodyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HuntingHornMelodyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornMelodyPayload>
          }
          aggregate: {
            args: Prisma.HuntingHornMelodyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuntingHornMelody>
          }
          groupBy: {
            args: Prisma.HuntingHornMelodyGroupByArgs<ExtArgs>
            result: $Utils.Optional<HuntingHornMelodyGroupByOutputType>[]
          }
          count: {
            args: Prisma.HuntingHornMelodyCountArgs<ExtArgs>
            result: $Utils.Optional<HuntingHornMelodyCountAggregateOutputType> | number
          }
        }
      }
      HuntingHornSong: {
        payload: Prisma.$HuntingHornSongPayload<ExtArgs>
        fields: Prisma.HuntingHornSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HuntingHornSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HuntingHornSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>
          }
          findFirst: {
            args: Prisma.HuntingHornSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HuntingHornSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>
          }
          findMany: {
            args: Prisma.HuntingHornSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>[]
          }
          create: {
            args: Prisma.HuntingHornSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>
          }
          createMany: {
            args: Prisma.HuntingHornSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HuntingHornSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>[]
          }
          delete: {
            args: Prisma.HuntingHornSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>
          }
          update: {
            args: Prisma.HuntingHornSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>
          }
          deleteMany: {
            args: Prisma.HuntingHornSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HuntingHornSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HuntingHornSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingHornSongPayload>
          }
          aggregate: {
            args: Prisma.HuntingHornSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuntingHornSong>
          }
          groupBy: {
            args: Prisma.HuntingHornSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<HuntingHornSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.HuntingHornSongCountArgs<ExtArgs>
            result: $Utils.Optional<HuntingHornSongCountAggregateOutputType> | number
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
    game_id: number | null
    rarity: number | null
    max_count: number | null
    sell_price: number | null
    buy_price: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    rarity: number | null
    max_count: number | null
    sell_price: number | null
    buy_price: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    kind: string | null
    rarity: number | null
    max_count: number | null
    sell_price: number | null
    buy_price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    kind: string | null
    rarity: number | null
    max_count: number | null
    sell_price: number | null
    buy_price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    descriptions: number
    kind: number
    rarity: number
    max_count: number
    sell_price: number
    buy_price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
    max_count?: true
    sell_price?: true
    buy_price?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
    max_count?: true
    sell_price?: true
    buy_price?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    kind?: true
    rarity?: true
    max_count?: true
    sell_price?: true
    buy_price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    kind?: true
    rarity?: true
    max_count?: true
    sell_price?: true
    buy_price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    kind?: true
    rarity?: true
    max_count?: true
    sell_price?: true
    buy_price?: true
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
    game_id: bigint
    names: string
    descriptions: string | null
    kind: string | null
    rarity: number
    max_count: number
    sell_price: number
    buy_price: number
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
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    kind?: boolean
    rarity?: boolean
    max_count?: boolean
    sell_price?: boolean
    buy_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    kind?: boolean
    rarity?: boolean
    max_count?: boolean
    sell_price?: boolean
    buy_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    kind?: boolean
    rarity?: boolean
    max_count?: boolean
    sell_price?: boolean
    buy_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      descriptions: string | null
      kind: string | null
      rarity: number
      max_count: number
      sell_price: number
      buy_price: number
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
    readonly game_id: FieldRef<"Item", 'BigInt'>
    readonly names: FieldRef<"Item", 'String'>
    readonly descriptions: FieldRef<"Item", 'String'>
    readonly kind: FieldRef<"Item", 'String'>
    readonly rarity: FieldRef<"Item", 'Int'>
    readonly max_count: FieldRef<"Item", 'Int'>
    readonly sell_price: FieldRef<"Item", 'Int'>
    readonly buy_price: FieldRef<"Item", 'Int'>
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
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    ranks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    ranks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    descriptions: number
    ranks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    ranks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    ranks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    ranks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    descriptions: string | null
    ranks: string
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    ranks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    ranks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    ranks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      descriptions: string | null
      ranks: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Skill model
   */ 
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly game_id: FieldRef<"Skill", 'BigInt'>
    readonly names: FieldRef<"Skill", 'String'>
    readonly descriptions: FieldRef<"Skill", 'String'>
    readonly ranks: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
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
    game_id: number | null
  }

  export type MonsterSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
  }

  export type MonsterMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    features: string | null
    species: string | null
    parts: string | null
    rewards: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    features: string | null
    species: string | null
    parts: string | null
    rewards: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    descriptions: number
    features: number
    species: number
    parts: number
    rewards: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonsterAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type MonsterSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type MonsterMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    features?: true
    species?: true
    parts?: true
    rewards?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    features?: true
    species?: true
    parts?: true
    rewards?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    features?: true
    species?: true
    parts?: true
    rewards?: true
    createdAt?: true
    updatedAt?: true
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
    game_id: bigint
    names: string
    descriptions: string | null
    features: string | null
    species: string | null
    parts: string | null
    rewards: string | null
    createdAt: Date
    updatedAt: Date
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
    names?: boolean
    descriptions?: boolean
    features?: boolean
    species?: boolean
    parts?: boolean
    rewards?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    features?: boolean
    species?: boolean
    parts?: boolean
    rewards?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    features?: boolean
    species?: boolean
    parts?: boolean
    rewards?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      descriptions: string | null
      features: string | null
      species: string | null
      parts: string | null
      rewards: string | null
      createdAt: Date
      updatedAt: Date
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
    readonly game_id: FieldRef<"Monster", 'BigInt'>
    readonly names: FieldRef<"Monster", 'String'>
    readonly descriptions: FieldRef<"Monster", 'String'>
    readonly features: FieldRef<"Monster", 'String'>
    readonly species: FieldRef<"Monster", 'String'>
    readonly parts: FieldRef<"Monster", 'String'>
    readonly rewards: FieldRef<"Monster", 'String'>
    readonly createdAt: FieldRef<"Monster", 'DateTime'>
    readonly updatedAt: FieldRef<"Monster", 'DateTime'>
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
    game_id: number | null
    rarity: number | null
    attack_raw: number | null
    affinity: number | null
    defense: number | null
    element_damage: number | null
    crafting_cost: number | null
    upgrade_cost: number | null
    series_id: number | null
    previous_id: number | null
  }

  export type WeaponSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    rarity: number | null
    attack_raw: number | null
    affinity: number | null
    defense: number | null
    element_damage: number | null
    crafting_cost: number | null
    upgrade_cost: number | null
    series_id: bigint | null
    previous_id: bigint | null
  }

  export type WeaponMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    kind: string | null
    names: string | null
    descriptions: string | null
    rarity: number | null
    attack_raw: number | null
    affinity: number | null
    defense: number | null
    slots: string | null
    sharpness: string | null
    handicraft: string | null
    element_type: string | null
    element_damage: number | null
    element_hidden: boolean | null
    ammo: string | null
    coatings: string | null
    charge_levels: string | null
    melodies: string | null
    songs: string | null
    kinsect_bonus: string | null
    crafting_cost: number | null
    upgrade_cost: number | null
    materials: string | null
    series_id: bigint | null
    previous_id: bigint | null
    next_weapons: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    kind: string | null
    names: string | null
    descriptions: string | null
    rarity: number | null
    attack_raw: number | null
    affinity: number | null
    defense: number | null
    slots: string | null
    sharpness: string | null
    handicraft: string | null
    element_type: string | null
    element_damage: number | null
    element_hidden: boolean | null
    ammo: string | null
    coatings: string | null
    charge_levels: string | null
    melodies: string | null
    songs: string | null
    kinsect_bonus: string | null
    crafting_cost: number | null
    upgrade_cost: number | null
    materials: string | null
    series_id: bigint | null
    previous_id: bigint | null
    next_weapons: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponCountAggregateOutputType = {
    id: number
    game_id: number
    kind: number
    names: number
    descriptions: number
    rarity: number
    attack_raw: number
    affinity: number
    defense: number
    slots: number
    sharpness: number
    handicraft: number
    element_type: number
    element_damage: number
    element_hidden: number
    ammo: number
    coatings: number
    charge_levels: number
    melodies: number
    songs: number
    kinsect_bonus: number
    crafting_cost: number
    upgrade_cost: number
    materials: number
    series_id: number
    previous_id: number
    next_weapons: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeaponAvgAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
    attack_raw?: true
    affinity?: true
    defense?: true
    element_damage?: true
    crafting_cost?: true
    upgrade_cost?: true
    series_id?: true
    previous_id?: true
  }

  export type WeaponSumAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
    attack_raw?: true
    affinity?: true
    defense?: true
    element_damage?: true
    crafting_cost?: true
    upgrade_cost?: true
    series_id?: true
    previous_id?: true
  }

  export type WeaponMinAggregateInputType = {
    id?: true
    game_id?: true
    kind?: true
    names?: true
    descriptions?: true
    rarity?: true
    attack_raw?: true
    affinity?: true
    defense?: true
    slots?: true
    sharpness?: true
    handicraft?: true
    element_type?: true
    element_damage?: true
    element_hidden?: true
    ammo?: true
    coatings?: true
    charge_levels?: true
    melodies?: true
    songs?: true
    kinsect_bonus?: true
    crafting_cost?: true
    upgrade_cost?: true
    materials?: true
    series_id?: true
    previous_id?: true
    next_weapons?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponMaxAggregateInputType = {
    id?: true
    game_id?: true
    kind?: true
    names?: true
    descriptions?: true
    rarity?: true
    attack_raw?: true
    affinity?: true
    defense?: true
    slots?: true
    sharpness?: true
    handicraft?: true
    element_type?: true
    element_damage?: true
    element_hidden?: true
    ammo?: true
    coatings?: true
    charge_levels?: true
    melodies?: true
    songs?: true
    kinsect_bonus?: true
    crafting_cost?: true
    upgrade_cost?: true
    materials?: true
    series_id?: true
    previous_id?: true
    next_weapons?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponCountAggregateInputType = {
    id?: true
    game_id?: true
    kind?: true
    names?: true
    descriptions?: true
    rarity?: true
    attack_raw?: true
    affinity?: true
    defense?: true
    slots?: true
    sharpness?: true
    handicraft?: true
    element_type?: true
    element_damage?: true
    element_hidden?: true
    ammo?: true
    coatings?: true
    charge_levels?: true
    melodies?: true
    songs?: true
    kinsect_bonus?: true
    crafting_cost?: true
    upgrade_cost?: true
    materials?: true
    series_id?: true
    previous_id?: true
    next_weapons?: true
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
    game_id: bigint
    kind: string
    names: string
    descriptions: string | null
    rarity: number | null
    attack_raw: number | null
    affinity: number | null
    defense: number | null
    slots: string | null
    sharpness: string | null
    handicraft: string | null
    element_type: string | null
    element_damage: number | null
    element_hidden: boolean
    ammo: string | null
    coatings: string | null
    charge_levels: string | null
    melodies: string | null
    songs: string | null
    kinsect_bonus: string | null
    crafting_cost: number | null
    upgrade_cost: number | null
    materials: string | null
    series_id: bigint | null
    previous_id: bigint | null
    next_weapons: string | null
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
    game_id?: boolean
    kind?: boolean
    names?: boolean
    descriptions?: boolean
    rarity?: boolean
    attack_raw?: boolean
    affinity?: boolean
    defense?: boolean
    slots?: boolean
    sharpness?: boolean
    handicraft?: boolean
    element_type?: boolean
    element_damage?: boolean
    element_hidden?: boolean
    ammo?: boolean
    coatings?: boolean
    charge_levels?: boolean
    melodies?: boolean
    songs?: boolean
    kinsect_bonus?: boolean
    crafting_cost?: boolean
    upgrade_cost?: boolean
    materials?: boolean
    series_id?: boolean
    previous_id?: boolean
    next_weapons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    kind?: boolean
    names?: boolean
    descriptions?: boolean
    rarity?: boolean
    attack_raw?: boolean
    affinity?: boolean
    defense?: boolean
    slots?: boolean
    sharpness?: boolean
    handicraft?: boolean
    element_type?: boolean
    element_damage?: boolean
    element_hidden?: boolean
    ammo?: boolean
    coatings?: boolean
    charge_levels?: boolean
    melodies?: boolean
    songs?: boolean
    kinsect_bonus?: boolean
    crafting_cost?: boolean
    upgrade_cost?: boolean
    materials?: boolean
    series_id?: boolean
    previous_id?: boolean
    next_weapons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectScalar = {
    id?: boolean
    game_id?: boolean
    kind?: boolean
    names?: boolean
    descriptions?: boolean
    rarity?: boolean
    attack_raw?: boolean
    affinity?: boolean
    defense?: boolean
    slots?: boolean
    sharpness?: boolean
    handicraft?: boolean
    element_type?: boolean
    element_damage?: boolean
    element_hidden?: boolean
    ammo?: boolean
    coatings?: boolean
    charge_levels?: boolean
    melodies?: boolean
    songs?: boolean
    kinsect_bonus?: boolean
    crafting_cost?: boolean
    upgrade_cost?: boolean
    materials?: boolean
    series_id?: boolean
    previous_id?: boolean
    next_weapons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WeaponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weapon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      kind: string
      names: string
      descriptions: string | null
      rarity: number | null
      attack_raw: number | null
      affinity: number | null
      defense: number | null
      slots: string | null
      sharpness: string | null
      handicraft: string | null
      element_type: string | null
      element_damage: number | null
      element_hidden: boolean
      ammo: string | null
      coatings: string | null
      charge_levels: string | null
      melodies: string | null
      songs: string | null
      kinsect_bonus: string | null
      crafting_cost: number | null
      upgrade_cost: number | null
      materials: string | null
      series_id: bigint | null
      previous_id: bigint | null
      next_weapons: string | null
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
    readonly game_id: FieldRef<"Weapon", 'BigInt'>
    readonly kind: FieldRef<"Weapon", 'String'>
    readonly names: FieldRef<"Weapon", 'String'>
    readonly descriptions: FieldRef<"Weapon", 'String'>
    readonly rarity: FieldRef<"Weapon", 'Int'>
    readonly attack_raw: FieldRef<"Weapon", 'Int'>
    readonly affinity: FieldRef<"Weapon", 'Int'>
    readonly defense: FieldRef<"Weapon", 'Int'>
    readonly slots: FieldRef<"Weapon", 'String'>
    readonly sharpness: FieldRef<"Weapon", 'String'>
    readonly handicraft: FieldRef<"Weapon", 'String'>
    readonly element_type: FieldRef<"Weapon", 'String'>
    readonly element_damage: FieldRef<"Weapon", 'Int'>
    readonly element_hidden: FieldRef<"Weapon", 'Boolean'>
    readonly ammo: FieldRef<"Weapon", 'String'>
    readonly coatings: FieldRef<"Weapon", 'String'>
    readonly charge_levels: FieldRef<"Weapon", 'String'>
    readonly melodies: FieldRef<"Weapon", 'String'>
    readonly songs: FieldRef<"Weapon", 'String'>
    readonly kinsect_bonus: FieldRef<"Weapon", 'String'>
    readonly crafting_cost: FieldRef<"Weapon", 'Int'>
    readonly upgrade_cost: FieldRef<"Weapon", 'Int'>
    readonly materials: FieldRef<"Weapon", 'String'>
    readonly series_id: FieldRef<"Weapon", 'BigInt'>
    readonly previous_id: FieldRef<"Weapon", 'BigInt'>
    readonly next_weapons: FieldRef<"Weapon", 'String'>
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
   * Model ArmorSet
   */

  export type AggregateArmorSet = {
    _count: ArmorSetCountAggregateOutputType | null
    _avg: ArmorSetAvgAggregateOutputType | null
    _sum: ArmorSetSumAggregateOutputType | null
    _min: ArmorSetMinAggregateOutputType | null
    _max: ArmorSetMaxAggregateOutputType | null
  }

  export type ArmorSetAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
    rarity: number | null
  }

  export type ArmorSetSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    rarity: number | null
  }

  export type ArmorSetMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    rarity: number | null
    set_bonus: string | null
    group_bonus: string | null
    pieces: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArmorSetMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    rarity: number | null
    set_bonus: string | null
    group_bonus: string | null
    pieces: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArmorSetCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    rarity: number
    set_bonus: number
    group_bonus: number
    pieces: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArmorSetAvgAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
  }

  export type ArmorSetSumAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
  }

  export type ArmorSetMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    rarity?: true
    set_bonus?: true
    group_bonus?: true
    pieces?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArmorSetMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    rarity?: true
    set_bonus?: true
    group_bonus?: true
    pieces?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArmorSetCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    rarity?: true
    set_bonus?: true
    group_bonus?: true
    pieces?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArmorSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArmorSet to aggregate.
     */
    where?: ArmorSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorSets to fetch.
     */
    orderBy?: ArmorSetOrderByWithRelationInput | ArmorSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArmorSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArmorSets
    **/
    _count?: true | ArmorSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArmorSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArmorSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArmorSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArmorSetMaxAggregateInputType
  }

  export type GetArmorSetAggregateType<T extends ArmorSetAggregateArgs> = {
        [P in keyof T & keyof AggregateArmorSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArmorSet[P]>
      : GetScalarType<T[P], AggregateArmorSet[P]>
  }




  export type ArmorSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArmorSetWhereInput
    orderBy?: ArmorSetOrderByWithAggregationInput | ArmorSetOrderByWithAggregationInput[]
    by: ArmorSetScalarFieldEnum[] | ArmorSetScalarFieldEnum
    having?: ArmorSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArmorSetCountAggregateInputType | true
    _avg?: ArmorSetAvgAggregateInputType
    _sum?: ArmorSetSumAggregateInputType
    _min?: ArmorSetMinAggregateInputType
    _max?: ArmorSetMaxAggregateInputType
  }

  export type ArmorSetGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    rarity: number
    set_bonus: string | null
    group_bonus: string | null
    pieces: string
    createdAt: Date
    updatedAt: Date
    _count: ArmorSetCountAggregateOutputType | null
    _avg: ArmorSetAvgAggregateOutputType | null
    _sum: ArmorSetSumAggregateOutputType | null
    _min: ArmorSetMinAggregateOutputType | null
    _max: ArmorSetMaxAggregateOutputType | null
  }

  type GetArmorSetGroupByPayload<T extends ArmorSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArmorSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArmorSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArmorSetGroupByOutputType[P]>
            : GetScalarType<T[P], ArmorSetGroupByOutputType[P]>
        }
      >
    >


  export type ArmorSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    rarity?: boolean
    set_bonus?: boolean
    group_bonus?: boolean
    pieces?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["armorSet"]>

  export type ArmorSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    rarity?: boolean
    set_bonus?: boolean
    group_bonus?: boolean
    pieces?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["armorSet"]>

  export type ArmorSetSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    rarity?: boolean
    set_bonus?: boolean
    group_bonus?: boolean
    pieces?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ArmorSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArmorSet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      rarity: number
      set_bonus: string | null
      group_bonus: string | null
      pieces: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["armorSet"]>
    composites: {}
  }

  type ArmorSetGetPayload<S extends boolean | null | undefined | ArmorSetDefaultArgs> = $Result.GetResult<Prisma.$ArmorSetPayload, S>

  type ArmorSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArmorSetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArmorSetCountAggregateInputType | true
    }

  export interface ArmorSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArmorSet'], meta: { name: 'ArmorSet' } }
    /**
     * Find zero or one ArmorSet that matches the filter.
     * @param {ArmorSetFindUniqueArgs} args - Arguments to find a ArmorSet
     * @example
     * // Get one ArmorSet
     * const armorSet = await prisma.armorSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArmorSetFindUniqueArgs>(args: SelectSubset<T, ArmorSetFindUniqueArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ArmorSet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArmorSetFindUniqueOrThrowArgs} args - Arguments to find a ArmorSet
     * @example
     * // Get one ArmorSet
     * const armorSet = await prisma.armorSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArmorSetFindUniqueOrThrowArgs>(args: SelectSubset<T, ArmorSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ArmorSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetFindFirstArgs} args - Arguments to find a ArmorSet
     * @example
     * // Get one ArmorSet
     * const armorSet = await prisma.armorSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArmorSetFindFirstArgs>(args?: SelectSubset<T, ArmorSetFindFirstArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ArmorSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetFindFirstOrThrowArgs} args - Arguments to find a ArmorSet
     * @example
     * // Get one ArmorSet
     * const armorSet = await prisma.armorSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArmorSetFindFirstOrThrowArgs>(args?: SelectSubset<T, ArmorSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ArmorSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArmorSets
     * const armorSets = await prisma.armorSet.findMany()
     * 
     * // Get first 10 ArmorSets
     * const armorSets = await prisma.armorSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const armorSetWithIdOnly = await prisma.armorSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArmorSetFindManyArgs>(args?: SelectSubset<T, ArmorSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ArmorSet.
     * @param {ArmorSetCreateArgs} args - Arguments to create a ArmorSet.
     * @example
     * // Create one ArmorSet
     * const ArmorSet = await prisma.armorSet.create({
     *   data: {
     *     // ... data to create a ArmorSet
     *   }
     * })
     * 
     */
    create<T extends ArmorSetCreateArgs>(args: SelectSubset<T, ArmorSetCreateArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ArmorSets.
     * @param {ArmorSetCreateManyArgs} args - Arguments to create many ArmorSets.
     * @example
     * // Create many ArmorSets
     * const armorSet = await prisma.armorSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArmorSetCreateManyArgs>(args?: SelectSubset<T, ArmorSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArmorSets and returns the data saved in the database.
     * @param {ArmorSetCreateManyAndReturnArgs} args - Arguments to create many ArmorSets.
     * @example
     * // Create many ArmorSets
     * const armorSet = await prisma.armorSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArmorSets and only return the `id`
     * const armorSetWithIdOnly = await prisma.armorSet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArmorSetCreateManyAndReturnArgs>(args?: SelectSubset<T, ArmorSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ArmorSet.
     * @param {ArmorSetDeleteArgs} args - Arguments to delete one ArmorSet.
     * @example
     * // Delete one ArmorSet
     * const ArmorSet = await prisma.armorSet.delete({
     *   where: {
     *     // ... filter to delete one ArmorSet
     *   }
     * })
     * 
     */
    delete<T extends ArmorSetDeleteArgs>(args: SelectSubset<T, ArmorSetDeleteArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ArmorSet.
     * @param {ArmorSetUpdateArgs} args - Arguments to update one ArmorSet.
     * @example
     * // Update one ArmorSet
     * const armorSet = await prisma.armorSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArmorSetUpdateArgs>(args: SelectSubset<T, ArmorSetUpdateArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ArmorSets.
     * @param {ArmorSetDeleteManyArgs} args - Arguments to filter ArmorSets to delete.
     * @example
     * // Delete a few ArmorSets
     * const { count } = await prisma.armorSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArmorSetDeleteManyArgs>(args?: SelectSubset<T, ArmorSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArmorSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArmorSets
     * const armorSet = await prisma.armorSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArmorSetUpdateManyArgs>(args: SelectSubset<T, ArmorSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArmorSet.
     * @param {ArmorSetUpsertArgs} args - Arguments to update or create a ArmorSet.
     * @example
     * // Update or create a ArmorSet
     * const armorSet = await prisma.armorSet.upsert({
     *   create: {
     *     // ... data to create a ArmorSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArmorSet we want to update
     *   }
     * })
     */
    upsert<T extends ArmorSetUpsertArgs>(args: SelectSubset<T, ArmorSetUpsertArgs<ExtArgs>>): Prisma__ArmorSetClient<$Result.GetResult<Prisma.$ArmorSetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ArmorSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetCountArgs} args - Arguments to filter ArmorSets to count.
     * @example
     * // Count the number of ArmorSets
     * const count = await prisma.armorSet.count({
     *   where: {
     *     // ... the filter for the ArmorSets we want to count
     *   }
     * })
    **/
    count<T extends ArmorSetCountArgs>(
      args?: Subset<T, ArmorSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArmorSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArmorSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArmorSetAggregateArgs>(args: Subset<T, ArmorSetAggregateArgs>): Prisma.PrismaPromise<GetArmorSetAggregateType<T>>

    /**
     * Group by ArmorSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorSetGroupByArgs} args - Group by arguments.
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
      T extends ArmorSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArmorSetGroupByArgs['orderBy'] }
        : { orderBy?: ArmorSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArmorSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArmorSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArmorSet model
   */
  readonly fields: ArmorSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArmorSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArmorSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ArmorSet model
   */ 
  interface ArmorSetFieldRefs {
    readonly id: FieldRef<"ArmorSet", 'Int'>
    readonly game_id: FieldRef<"ArmorSet", 'BigInt'>
    readonly names: FieldRef<"ArmorSet", 'String'>
    readonly rarity: FieldRef<"ArmorSet", 'Int'>
    readonly set_bonus: FieldRef<"ArmorSet", 'String'>
    readonly group_bonus: FieldRef<"ArmorSet", 'String'>
    readonly pieces: FieldRef<"ArmorSet", 'String'>
    readonly createdAt: FieldRef<"ArmorSet", 'DateTime'>
    readonly updatedAt: FieldRef<"ArmorSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArmorSet findUnique
   */
  export type ArmorSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * Filter, which ArmorSet to fetch.
     */
    where: ArmorSetWhereUniqueInput
  }

  /**
   * ArmorSet findUniqueOrThrow
   */
  export type ArmorSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * Filter, which ArmorSet to fetch.
     */
    where: ArmorSetWhereUniqueInput
  }

  /**
   * ArmorSet findFirst
   */
  export type ArmorSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * Filter, which ArmorSet to fetch.
     */
    where?: ArmorSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorSets to fetch.
     */
    orderBy?: ArmorSetOrderByWithRelationInput | ArmorSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArmorSets.
     */
    cursor?: ArmorSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArmorSets.
     */
    distinct?: ArmorSetScalarFieldEnum | ArmorSetScalarFieldEnum[]
  }

  /**
   * ArmorSet findFirstOrThrow
   */
  export type ArmorSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * Filter, which ArmorSet to fetch.
     */
    where?: ArmorSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorSets to fetch.
     */
    orderBy?: ArmorSetOrderByWithRelationInput | ArmorSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArmorSets.
     */
    cursor?: ArmorSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArmorSets.
     */
    distinct?: ArmorSetScalarFieldEnum | ArmorSetScalarFieldEnum[]
  }

  /**
   * ArmorSet findMany
   */
  export type ArmorSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * Filter, which ArmorSets to fetch.
     */
    where?: ArmorSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorSets to fetch.
     */
    orderBy?: ArmorSetOrderByWithRelationInput | ArmorSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArmorSets.
     */
    cursor?: ArmorSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorSets.
     */
    skip?: number
    distinct?: ArmorSetScalarFieldEnum | ArmorSetScalarFieldEnum[]
  }

  /**
   * ArmorSet create
   */
  export type ArmorSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * The data needed to create a ArmorSet.
     */
    data: XOR<ArmorSetCreateInput, ArmorSetUncheckedCreateInput>
  }

  /**
   * ArmorSet createMany
   */
  export type ArmorSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArmorSets.
     */
    data: ArmorSetCreateManyInput | ArmorSetCreateManyInput[]
  }

  /**
   * ArmorSet createManyAndReturn
   */
  export type ArmorSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ArmorSets.
     */
    data: ArmorSetCreateManyInput | ArmorSetCreateManyInput[]
  }

  /**
   * ArmorSet update
   */
  export type ArmorSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * The data needed to update a ArmorSet.
     */
    data: XOR<ArmorSetUpdateInput, ArmorSetUncheckedUpdateInput>
    /**
     * Choose, which ArmorSet to update.
     */
    where: ArmorSetWhereUniqueInput
  }

  /**
   * ArmorSet updateMany
   */
  export type ArmorSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArmorSets.
     */
    data: XOR<ArmorSetUpdateManyMutationInput, ArmorSetUncheckedUpdateManyInput>
    /**
     * Filter which ArmorSets to update
     */
    where?: ArmorSetWhereInput
  }

  /**
   * ArmorSet upsert
   */
  export type ArmorSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * The filter to search for the ArmorSet to update in case it exists.
     */
    where: ArmorSetWhereUniqueInput
    /**
     * In case the ArmorSet found by the `where` argument doesn't exist, create a new ArmorSet with this data.
     */
    create: XOR<ArmorSetCreateInput, ArmorSetUncheckedCreateInput>
    /**
     * In case the ArmorSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArmorSetUpdateInput, ArmorSetUncheckedUpdateInput>
  }

  /**
   * ArmorSet delete
   */
  export type ArmorSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
    /**
     * Filter which ArmorSet to delete.
     */
    where: ArmorSetWhereUniqueInput
  }

  /**
   * ArmorSet deleteMany
   */
  export type ArmorSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArmorSets to delete
     */
    where?: ArmorSetWhereInput
  }

  /**
   * ArmorSet without action
   */
  export type ArmorSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorSet
     */
    select?: ArmorSetSelect<ExtArgs> | null
  }


  /**
   * Model Amulet
   */

  export type AggregateAmulet = {
    _count: AmuletCountAggregateOutputType | null
    _avg: AmuletAvgAggregateOutputType | null
    _sum: AmuletSumAggregateOutputType | null
    _min: AmuletMinAggregateOutputType | null
    _max: AmuletMaxAggregateOutputType | null
  }

  export type AmuletAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type AmuletSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
  }

  export type AmuletMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    ranks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmuletMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    ranks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmuletCountAggregateOutputType = {
    id: number
    game_id: number
    ranks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmuletAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type AmuletSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type AmuletMinAggregateInputType = {
    id?: true
    game_id?: true
    ranks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmuletMaxAggregateInputType = {
    id?: true
    game_id?: true
    ranks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmuletCountAggregateInputType = {
    id?: true
    game_id?: true
    ranks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AmuletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amulet to aggregate.
     */
    where?: AmuletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amulets to fetch.
     */
    orderBy?: AmuletOrderByWithRelationInput | AmuletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmuletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amulets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amulets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amulets
    **/
    _count?: true | AmuletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmuletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmuletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmuletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmuletMaxAggregateInputType
  }

  export type GetAmuletAggregateType<T extends AmuletAggregateArgs> = {
        [P in keyof T & keyof AggregateAmulet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmulet[P]>
      : GetScalarType<T[P], AggregateAmulet[P]>
  }




  export type AmuletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmuletWhereInput
    orderBy?: AmuletOrderByWithAggregationInput | AmuletOrderByWithAggregationInput[]
    by: AmuletScalarFieldEnum[] | AmuletScalarFieldEnum
    having?: AmuletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmuletCountAggregateInputType | true
    _avg?: AmuletAvgAggregateInputType
    _sum?: AmuletSumAggregateInputType
    _min?: AmuletMinAggregateInputType
    _max?: AmuletMaxAggregateInputType
  }

  export type AmuletGroupByOutputType = {
    id: number
    game_id: bigint
    ranks: string
    createdAt: Date
    updatedAt: Date
    _count: AmuletCountAggregateOutputType | null
    _avg: AmuletAvgAggregateOutputType | null
    _sum: AmuletSumAggregateOutputType | null
    _min: AmuletMinAggregateOutputType | null
    _max: AmuletMaxAggregateOutputType | null
  }

  type GetAmuletGroupByPayload<T extends AmuletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmuletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmuletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmuletGroupByOutputType[P]>
            : GetScalarType<T[P], AmuletGroupByOutputType[P]>
        }
      >
    >


  export type AmuletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    ranks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["amulet"]>

  export type AmuletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    ranks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["amulet"]>

  export type AmuletSelectScalar = {
    id?: boolean
    game_id?: boolean
    ranks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AmuletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amulet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      ranks: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["amulet"]>
    composites: {}
  }

  type AmuletGetPayload<S extends boolean | null | undefined | AmuletDefaultArgs> = $Result.GetResult<Prisma.$AmuletPayload, S>

  type AmuletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AmuletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AmuletCountAggregateInputType | true
    }

  export interface AmuletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amulet'], meta: { name: 'Amulet' } }
    /**
     * Find zero or one Amulet that matches the filter.
     * @param {AmuletFindUniqueArgs} args - Arguments to find a Amulet
     * @example
     * // Get one Amulet
     * const amulet = await prisma.amulet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmuletFindUniqueArgs>(args: SelectSubset<T, AmuletFindUniqueArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Amulet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AmuletFindUniqueOrThrowArgs} args - Arguments to find a Amulet
     * @example
     * // Get one Amulet
     * const amulet = await prisma.amulet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmuletFindUniqueOrThrowArgs>(args: SelectSubset<T, AmuletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Amulet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletFindFirstArgs} args - Arguments to find a Amulet
     * @example
     * // Get one Amulet
     * const amulet = await prisma.amulet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmuletFindFirstArgs>(args?: SelectSubset<T, AmuletFindFirstArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Amulet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletFindFirstOrThrowArgs} args - Arguments to find a Amulet
     * @example
     * // Get one Amulet
     * const amulet = await prisma.amulet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmuletFindFirstOrThrowArgs>(args?: SelectSubset<T, AmuletFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Amulets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amulets
     * const amulets = await prisma.amulet.findMany()
     * 
     * // Get first 10 Amulets
     * const amulets = await prisma.amulet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amuletWithIdOnly = await prisma.amulet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmuletFindManyArgs>(args?: SelectSubset<T, AmuletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Amulet.
     * @param {AmuletCreateArgs} args - Arguments to create a Amulet.
     * @example
     * // Create one Amulet
     * const Amulet = await prisma.amulet.create({
     *   data: {
     *     // ... data to create a Amulet
     *   }
     * })
     * 
     */
    create<T extends AmuletCreateArgs>(args: SelectSubset<T, AmuletCreateArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Amulets.
     * @param {AmuletCreateManyArgs} args - Arguments to create many Amulets.
     * @example
     * // Create many Amulets
     * const amulet = await prisma.amulet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmuletCreateManyArgs>(args?: SelectSubset<T, AmuletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amulets and returns the data saved in the database.
     * @param {AmuletCreateManyAndReturnArgs} args - Arguments to create many Amulets.
     * @example
     * // Create many Amulets
     * const amulet = await prisma.amulet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amulets and only return the `id`
     * const amuletWithIdOnly = await prisma.amulet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmuletCreateManyAndReturnArgs>(args?: SelectSubset<T, AmuletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Amulet.
     * @param {AmuletDeleteArgs} args - Arguments to delete one Amulet.
     * @example
     * // Delete one Amulet
     * const Amulet = await prisma.amulet.delete({
     *   where: {
     *     // ... filter to delete one Amulet
     *   }
     * })
     * 
     */
    delete<T extends AmuletDeleteArgs>(args: SelectSubset<T, AmuletDeleteArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Amulet.
     * @param {AmuletUpdateArgs} args - Arguments to update one Amulet.
     * @example
     * // Update one Amulet
     * const amulet = await prisma.amulet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmuletUpdateArgs>(args: SelectSubset<T, AmuletUpdateArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Amulets.
     * @param {AmuletDeleteManyArgs} args - Arguments to filter Amulets to delete.
     * @example
     * // Delete a few Amulets
     * const { count } = await prisma.amulet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmuletDeleteManyArgs>(args?: SelectSubset<T, AmuletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amulets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amulets
     * const amulet = await prisma.amulet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmuletUpdateManyArgs>(args: SelectSubset<T, AmuletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Amulet.
     * @param {AmuletUpsertArgs} args - Arguments to update or create a Amulet.
     * @example
     * // Update or create a Amulet
     * const amulet = await prisma.amulet.upsert({
     *   create: {
     *     // ... data to create a Amulet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amulet we want to update
     *   }
     * })
     */
    upsert<T extends AmuletUpsertArgs>(args: SelectSubset<T, AmuletUpsertArgs<ExtArgs>>): Prisma__AmuletClient<$Result.GetResult<Prisma.$AmuletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Amulets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletCountArgs} args - Arguments to filter Amulets to count.
     * @example
     * // Count the number of Amulets
     * const count = await prisma.amulet.count({
     *   where: {
     *     // ... the filter for the Amulets we want to count
     *   }
     * })
    **/
    count<T extends AmuletCountArgs>(
      args?: Subset<T, AmuletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmuletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amulet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmuletAggregateArgs>(args: Subset<T, AmuletAggregateArgs>): Prisma.PrismaPromise<GetAmuletAggregateType<T>>

    /**
     * Group by Amulet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmuletGroupByArgs} args - Group by arguments.
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
      T extends AmuletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmuletGroupByArgs['orderBy'] }
        : { orderBy?: AmuletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmuletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmuletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amulet model
   */
  readonly fields: AmuletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amulet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmuletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Amulet model
   */ 
  interface AmuletFieldRefs {
    readonly id: FieldRef<"Amulet", 'Int'>
    readonly game_id: FieldRef<"Amulet", 'BigInt'>
    readonly ranks: FieldRef<"Amulet", 'String'>
    readonly createdAt: FieldRef<"Amulet", 'DateTime'>
    readonly updatedAt: FieldRef<"Amulet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Amulet findUnique
   */
  export type AmuletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * Filter, which Amulet to fetch.
     */
    where: AmuletWhereUniqueInput
  }

  /**
   * Amulet findUniqueOrThrow
   */
  export type AmuletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * Filter, which Amulet to fetch.
     */
    where: AmuletWhereUniqueInput
  }

  /**
   * Amulet findFirst
   */
  export type AmuletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * Filter, which Amulet to fetch.
     */
    where?: AmuletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amulets to fetch.
     */
    orderBy?: AmuletOrderByWithRelationInput | AmuletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amulets.
     */
    cursor?: AmuletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amulets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amulets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amulets.
     */
    distinct?: AmuletScalarFieldEnum | AmuletScalarFieldEnum[]
  }

  /**
   * Amulet findFirstOrThrow
   */
  export type AmuletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * Filter, which Amulet to fetch.
     */
    where?: AmuletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amulets to fetch.
     */
    orderBy?: AmuletOrderByWithRelationInput | AmuletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amulets.
     */
    cursor?: AmuletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amulets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amulets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amulets.
     */
    distinct?: AmuletScalarFieldEnum | AmuletScalarFieldEnum[]
  }

  /**
   * Amulet findMany
   */
  export type AmuletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * Filter, which Amulets to fetch.
     */
    where?: AmuletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amulets to fetch.
     */
    orderBy?: AmuletOrderByWithRelationInput | AmuletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amulets.
     */
    cursor?: AmuletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amulets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amulets.
     */
    skip?: number
    distinct?: AmuletScalarFieldEnum | AmuletScalarFieldEnum[]
  }

  /**
   * Amulet create
   */
  export type AmuletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * The data needed to create a Amulet.
     */
    data: XOR<AmuletCreateInput, AmuletUncheckedCreateInput>
  }

  /**
   * Amulet createMany
   */
  export type AmuletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amulets.
     */
    data: AmuletCreateManyInput | AmuletCreateManyInput[]
  }

  /**
   * Amulet createManyAndReturn
   */
  export type AmuletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Amulets.
     */
    data: AmuletCreateManyInput | AmuletCreateManyInput[]
  }

  /**
   * Amulet update
   */
  export type AmuletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * The data needed to update a Amulet.
     */
    data: XOR<AmuletUpdateInput, AmuletUncheckedUpdateInput>
    /**
     * Choose, which Amulet to update.
     */
    where: AmuletWhereUniqueInput
  }

  /**
   * Amulet updateMany
   */
  export type AmuletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amulets.
     */
    data: XOR<AmuletUpdateManyMutationInput, AmuletUncheckedUpdateManyInput>
    /**
     * Filter which Amulets to update
     */
    where?: AmuletWhereInput
  }

  /**
   * Amulet upsert
   */
  export type AmuletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * The filter to search for the Amulet to update in case it exists.
     */
    where: AmuletWhereUniqueInput
    /**
     * In case the Amulet found by the `where` argument doesn't exist, create a new Amulet with this data.
     */
    create: XOR<AmuletCreateInput, AmuletUncheckedCreateInput>
    /**
     * In case the Amulet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmuletUpdateInput, AmuletUncheckedUpdateInput>
  }

  /**
   * Amulet delete
   */
  export type AmuletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
    /**
     * Filter which Amulet to delete.
     */
    where: AmuletWhereUniqueInput
  }

  /**
   * Amulet deleteMany
   */
  export type AmuletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amulets to delete
     */
    where?: AmuletWhereInput
  }

  /**
   * Amulet without action
   */
  export type AmuletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amulet
     */
    select?: AmuletSelect<ExtArgs> | null
  }


  /**
   * Model Accessory
   */

  export type AggregateAccessory = {
    _count: AccessoryCountAggregateOutputType | null
    _avg: AccessoryAvgAggregateOutputType | null
    _sum: AccessorySumAggregateOutputType | null
    _min: AccessoryMinAggregateOutputType | null
    _max: AccessoryMaxAggregateOutputType | null
  }

  export type AccessoryAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
    rarity: number | null
    price: number | null
    level: number | null
  }

  export type AccessorySumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    rarity: number | null
    price: number | null
    level: number | null
  }

  export type AccessoryMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    rarity: number | null
    price: number | null
    level: number | null
    skills: string | null
    allowed_on: string | null
    icon_color: string | null
    icon_color_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessoryMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    descriptions: string | null
    rarity: number | null
    price: number | null
    level: number | null
    skills: string | null
    allowed_on: string | null
    icon_color: string | null
    icon_color_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessoryCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    descriptions: number
    rarity: number
    price: number
    level: number
    skills: number
    allowed_on: number
    icon_color: number
    icon_color_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessoryAvgAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
    price?: true
    level?: true
  }

  export type AccessorySumAggregateInputType = {
    id?: true
    game_id?: true
    rarity?: true
    price?: true
    level?: true
  }

  export type AccessoryMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    rarity?: true
    price?: true
    level?: true
    skills?: true
    allowed_on?: true
    icon_color?: true
    icon_color_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessoryMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    rarity?: true
    price?: true
    level?: true
    skills?: true
    allowed_on?: true
    icon_color?: true
    icon_color_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessoryCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    descriptions?: true
    rarity?: true
    price?: true
    level?: true
    skills?: true
    allowed_on?: true
    icon_color?: true
    icon_color_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accessory to aggregate.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accessories
    **/
    _count?: true | AccessoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessoryMaxAggregateInputType
  }

  export type GetAccessoryAggregateType<T extends AccessoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessory[P]>
      : GetScalarType<T[P], AggregateAccessory[P]>
  }




  export type AccessoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessoryWhereInput
    orderBy?: AccessoryOrderByWithAggregationInput | AccessoryOrderByWithAggregationInput[]
    by: AccessoryScalarFieldEnum[] | AccessoryScalarFieldEnum
    having?: AccessoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessoryCountAggregateInputType | true
    _avg?: AccessoryAvgAggregateInputType
    _sum?: AccessorySumAggregateInputType
    _min?: AccessoryMinAggregateInputType
    _max?: AccessoryMaxAggregateInputType
  }

  export type AccessoryGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    descriptions: string | null
    rarity: number
    price: number
    level: number
    skills: string
    allowed_on: string
    icon_color: string | null
    icon_color_id: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccessoryCountAggregateOutputType | null
    _avg: AccessoryAvgAggregateOutputType | null
    _sum: AccessorySumAggregateOutputType | null
    _min: AccessoryMinAggregateOutputType | null
    _max: AccessoryMaxAggregateOutputType | null
  }

  type GetAccessoryGroupByPayload<T extends AccessoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessoryGroupByOutputType[P]>
            : GetScalarType<T[P], AccessoryGroupByOutputType[P]>
        }
      >
    >


  export type AccessorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    rarity?: boolean
    price?: boolean
    level?: boolean
    skills?: boolean
    allowed_on?: boolean
    icon_color?: boolean
    icon_color_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessory"]>

  export type AccessorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    rarity?: boolean
    price?: boolean
    level?: boolean
    skills?: boolean
    allowed_on?: boolean
    icon_color?: boolean
    icon_color_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessory"]>

  export type AccessorySelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    descriptions?: boolean
    rarity?: boolean
    price?: boolean
    level?: boolean
    skills?: boolean
    allowed_on?: boolean
    icon_color?: boolean
    icon_color_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AccessoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accessory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      descriptions: string | null
      rarity: number
      price: number
      level: number
      skills: string
      allowed_on: string
      icon_color: string | null
      icon_color_id: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessory"]>
    composites: {}
  }

  type AccessoryGetPayload<S extends boolean | null | undefined | AccessoryDefaultArgs> = $Result.GetResult<Prisma.$AccessoryPayload, S>

  type AccessoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccessoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccessoryCountAggregateInputType | true
    }

  export interface AccessoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accessory'], meta: { name: 'Accessory' } }
    /**
     * Find zero or one Accessory that matches the filter.
     * @param {AccessoryFindUniqueArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessoryFindUniqueArgs>(args: SelectSubset<T, AccessoryFindUniqueArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accessory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccessoryFindUniqueOrThrowArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accessory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryFindFirstArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessoryFindFirstArgs>(args?: SelectSubset<T, AccessoryFindFirstArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accessory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryFindFirstOrThrowArgs} args - Arguments to find a Accessory
     * @example
     * // Get one Accessory
     * const accessory = await prisma.accessory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accessories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accessories
     * const accessories = await prisma.accessory.findMany()
     * 
     * // Get first 10 Accessories
     * const accessories = await prisma.accessory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessoryWithIdOnly = await prisma.accessory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessoryFindManyArgs>(args?: SelectSubset<T, AccessoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accessory.
     * @param {AccessoryCreateArgs} args - Arguments to create a Accessory.
     * @example
     * // Create one Accessory
     * const Accessory = await prisma.accessory.create({
     *   data: {
     *     // ... data to create a Accessory
     *   }
     * })
     * 
     */
    create<T extends AccessoryCreateArgs>(args: SelectSubset<T, AccessoryCreateArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accessories.
     * @param {AccessoryCreateManyArgs} args - Arguments to create many Accessories.
     * @example
     * // Create many Accessories
     * const accessory = await prisma.accessory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessoryCreateManyArgs>(args?: SelectSubset<T, AccessoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accessories and returns the data saved in the database.
     * @param {AccessoryCreateManyAndReturnArgs} args - Arguments to create many Accessories.
     * @example
     * // Create many Accessories
     * const accessory = await prisma.accessory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accessories and only return the `id`
     * const accessoryWithIdOnly = await prisma.accessory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accessory.
     * @param {AccessoryDeleteArgs} args - Arguments to delete one Accessory.
     * @example
     * // Delete one Accessory
     * const Accessory = await prisma.accessory.delete({
     *   where: {
     *     // ... filter to delete one Accessory
     *   }
     * })
     * 
     */
    delete<T extends AccessoryDeleteArgs>(args: SelectSubset<T, AccessoryDeleteArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accessory.
     * @param {AccessoryUpdateArgs} args - Arguments to update one Accessory.
     * @example
     * // Update one Accessory
     * const accessory = await prisma.accessory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessoryUpdateArgs>(args: SelectSubset<T, AccessoryUpdateArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accessories.
     * @param {AccessoryDeleteManyArgs} args - Arguments to filter Accessories to delete.
     * @example
     * // Delete a few Accessories
     * const { count } = await prisma.accessory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessoryDeleteManyArgs>(args?: SelectSubset<T, AccessoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accessories
     * const accessory = await prisma.accessory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessoryUpdateManyArgs>(args: SelectSubset<T, AccessoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accessory.
     * @param {AccessoryUpsertArgs} args - Arguments to update or create a Accessory.
     * @example
     * // Update or create a Accessory
     * const accessory = await prisma.accessory.upsert({
     *   create: {
     *     // ... data to create a Accessory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accessory we want to update
     *   }
     * })
     */
    upsert<T extends AccessoryUpsertArgs>(args: SelectSubset<T, AccessoryUpsertArgs<ExtArgs>>): Prisma__AccessoryClient<$Result.GetResult<Prisma.$AccessoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryCountArgs} args - Arguments to filter Accessories to count.
     * @example
     * // Count the number of Accessories
     * const count = await prisma.accessory.count({
     *   where: {
     *     // ... the filter for the Accessories we want to count
     *   }
     * })
    **/
    count<T extends AccessoryCountArgs>(
      args?: Subset<T, AccessoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessoryAggregateArgs>(args: Subset<T, AccessoryAggregateArgs>): Prisma.PrismaPromise<GetAccessoryAggregateType<T>>

    /**
     * Group by Accessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessoryGroupByArgs} args - Group by arguments.
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
      T extends AccessoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessoryGroupByArgs['orderBy'] }
        : { orderBy?: AccessoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accessory model
   */
  readonly fields: AccessoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accessory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Accessory model
   */ 
  interface AccessoryFieldRefs {
    readonly id: FieldRef<"Accessory", 'Int'>
    readonly game_id: FieldRef<"Accessory", 'BigInt'>
    readonly names: FieldRef<"Accessory", 'String'>
    readonly descriptions: FieldRef<"Accessory", 'String'>
    readonly rarity: FieldRef<"Accessory", 'Int'>
    readonly price: FieldRef<"Accessory", 'Int'>
    readonly level: FieldRef<"Accessory", 'Int'>
    readonly skills: FieldRef<"Accessory", 'String'>
    readonly allowed_on: FieldRef<"Accessory", 'String'>
    readonly icon_color: FieldRef<"Accessory", 'String'>
    readonly icon_color_id: FieldRef<"Accessory", 'String'>
    readonly createdAt: FieldRef<"Accessory", 'DateTime'>
    readonly updatedAt: FieldRef<"Accessory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accessory findUnique
   */
  export type AccessoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory findUniqueOrThrow
   */
  export type AccessoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory findFirst
   */
  export type AccessoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accessories.
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accessories.
     */
    distinct?: AccessoryScalarFieldEnum | AccessoryScalarFieldEnum[]
  }

  /**
   * Accessory findFirstOrThrow
   */
  export type AccessoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Filter, which Accessory to fetch.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accessories.
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accessories.
     */
    distinct?: AccessoryScalarFieldEnum | AccessoryScalarFieldEnum[]
  }

  /**
   * Accessory findMany
   */
  export type AccessoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Filter, which Accessories to fetch.
     */
    where?: AccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accessories to fetch.
     */
    orderBy?: AccessoryOrderByWithRelationInput | AccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accessories.
     */
    cursor?: AccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accessories.
     */
    skip?: number
    distinct?: AccessoryScalarFieldEnum | AccessoryScalarFieldEnum[]
  }

  /**
   * Accessory create
   */
  export type AccessoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * The data needed to create a Accessory.
     */
    data: XOR<AccessoryCreateInput, AccessoryUncheckedCreateInput>
  }

  /**
   * Accessory createMany
   */
  export type AccessoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accessories.
     */
    data: AccessoryCreateManyInput | AccessoryCreateManyInput[]
  }

  /**
   * Accessory createManyAndReturn
   */
  export type AccessoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accessories.
     */
    data: AccessoryCreateManyInput | AccessoryCreateManyInput[]
  }

  /**
   * Accessory update
   */
  export type AccessoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * The data needed to update a Accessory.
     */
    data: XOR<AccessoryUpdateInput, AccessoryUncheckedUpdateInput>
    /**
     * Choose, which Accessory to update.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory updateMany
   */
  export type AccessoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accessories.
     */
    data: XOR<AccessoryUpdateManyMutationInput, AccessoryUncheckedUpdateManyInput>
    /**
     * Filter which Accessories to update
     */
    where?: AccessoryWhereInput
  }

  /**
   * Accessory upsert
   */
  export type AccessoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * The filter to search for the Accessory to update in case it exists.
     */
    where: AccessoryWhereUniqueInput
    /**
     * In case the Accessory found by the `where` argument doesn't exist, create a new Accessory with this data.
     */
    create: XOR<AccessoryCreateInput, AccessoryUncheckedCreateInput>
    /**
     * In case the Accessory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessoryUpdateInput, AccessoryUncheckedUpdateInput>
  }

  /**
   * Accessory delete
   */
  export type AccessoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
    /**
     * Filter which Accessory to delete.
     */
    where: AccessoryWhereUniqueInput
  }

  /**
   * Accessory deleteMany
   */
  export type AccessoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accessories to delete
     */
    where?: AccessoryWhereInput
  }

  /**
   * Accessory without action
   */
  export type AccessoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accessory
     */
    select?: AccessorySelect<ExtArgs> | null
  }


  /**
   * Model Charm
   */

  export type AggregateCharm = {
    _count: CharmCountAggregateOutputType | null
    _avg: CharmAvgAggregateOutputType | null
    _sum: CharmSumAggregateOutputType | null
    _min: CharmMinAggregateOutputType | null
    _max: CharmMaxAggregateOutputType | null
  }

  export type CharmAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type CharmSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
  }

  export type CharmMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharmMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharmCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharmAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type CharmSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type CharmMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharmMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharmCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charm to aggregate.
     */
    where?: CharmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charms to fetch.
     */
    orderBy?: CharmOrderByWithRelationInput | CharmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charms
    **/
    _count?: true | CharmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharmMaxAggregateInputType
  }

  export type GetCharmAggregateType<T extends CharmAggregateArgs> = {
        [P in keyof T & keyof AggregateCharm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharm[P]>
      : GetScalarType<T[P], AggregateCharm[P]>
  }




  export type CharmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharmWhereInput
    orderBy?: CharmOrderByWithAggregationInput | CharmOrderByWithAggregationInput[]
    by: CharmScalarFieldEnum[] | CharmScalarFieldEnum
    having?: CharmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharmCountAggregateInputType | true
    _avg?: CharmAvgAggregateInputType
    _sum?: CharmSumAggregateInputType
    _min?: CharmMinAggregateInputType
    _max?: CharmMaxAggregateInputType
  }

  export type CharmGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    createdAt: Date
    updatedAt: Date
    _count: CharmCountAggregateOutputType | null
    _avg: CharmAvgAggregateOutputType | null
    _sum: CharmSumAggregateOutputType | null
    _min: CharmMinAggregateOutputType | null
    _max: CharmMaxAggregateOutputType | null
  }

  type GetCharmGroupByPayload<T extends CharmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharmGroupByOutputType[P]>
            : GetScalarType<T[P], CharmGroupByOutputType[P]>
        }
      >
    >


  export type CharmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charm"]>

  export type CharmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charm"]>

  export type CharmSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CharmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["charm"]>
    composites: {}
  }

  type CharmGetPayload<S extends boolean | null | undefined | CharmDefaultArgs> = $Result.GetResult<Prisma.$CharmPayload, S>

  type CharmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharmCountAggregateInputType | true
    }

  export interface CharmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charm'], meta: { name: 'Charm' } }
    /**
     * Find zero or one Charm that matches the filter.
     * @param {CharmFindUniqueArgs} args - Arguments to find a Charm
     * @example
     * // Get one Charm
     * const charm = await prisma.charm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharmFindUniqueArgs>(args: SelectSubset<T, CharmFindUniqueArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Charm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharmFindUniqueOrThrowArgs} args - Arguments to find a Charm
     * @example
     * // Get one Charm
     * const charm = await prisma.charm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharmFindUniqueOrThrowArgs>(args: SelectSubset<T, CharmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Charm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmFindFirstArgs} args - Arguments to find a Charm
     * @example
     * // Get one Charm
     * const charm = await prisma.charm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharmFindFirstArgs>(args?: SelectSubset<T, CharmFindFirstArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Charm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmFindFirstOrThrowArgs} args - Arguments to find a Charm
     * @example
     * // Get one Charm
     * const charm = await prisma.charm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharmFindFirstOrThrowArgs>(args?: SelectSubset<T, CharmFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Charms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charms
     * const charms = await prisma.charm.findMany()
     * 
     * // Get first 10 Charms
     * const charms = await prisma.charm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charmWithIdOnly = await prisma.charm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharmFindManyArgs>(args?: SelectSubset<T, CharmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Charm.
     * @param {CharmCreateArgs} args - Arguments to create a Charm.
     * @example
     * // Create one Charm
     * const Charm = await prisma.charm.create({
     *   data: {
     *     // ... data to create a Charm
     *   }
     * })
     * 
     */
    create<T extends CharmCreateArgs>(args: SelectSubset<T, CharmCreateArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Charms.
     * @param {CharmCreateManyArgs} args - Arguments to create many Charms.
     * @example
     * // Create many Charms
     * const charm = await prisma.charm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharmCreateManyArgs>(args?: SelectSubset<T, CharmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charms and returns the data saved in the database.
     * @param {CharmCreateManyAndReturnArgs} args - Arguments to create many Charms.
     * @example
     * // Create many Charms
     * const charm = await prisma.charm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charms and only return the `id`
     * const charmWithIdOnly = await prisma.charm.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharmCreateManyAndReturnArgs>(args?: SelectSubset<T, CharmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Charm.
     * @param {CharmDeleteArgs} args - Arguments to delete one Charm.
     * @example
     * // Delete one Charm
     * const Charm = await prisma.charm.delete({
     *   where: {
     *     // ... filter to delete one Charm
     *   }
     * })
     * 
     */
    delete<T extends CharmDeleteArgs>(args: SelectSubset<T, CharmDeleteArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Charm.
     * @param {CharmUpdateArgs} args - Arguments to update one Charm.
     * @example
     * // Update one Charm
     * const charm = await prisma.charm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharmUpdateArgs>(args: SelectSubset<T, CharmUpdateArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Charms.
     * @param {CharmDeleteManyArgs} args - Arguments to filter Charms to delete.
     * @example
     * // Delete a few Charms
     * const { count } = await prisma.charm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharmDeleteManyArgs>(args?: SelectSubset<T, CharmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charms
     * const charm = await prisma.charm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharmUpdateManyArgs>(args: SelectSubset<T, CharmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Charm.
     * @param {CharmUpsertArgs} args - Arguments to update or create a Charm.
     * @example
     * // Update or create a Charm
     * const charm = await prisma.charm.upsert({
     *   create: {
     *     // ... data to create a Charm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charm we want to update
     *   }
     * })
     */
    upsert<T extends CharmUpsertArgs>(args: SelectSubset<T, CharmUpsertArgs<ExtArgs>>): Prisma__CharmClient<$Result.GetResult<Prisma.$CharmPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Charms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmCountArgs} args - Arguments to filter Charms to count.
     * @example
     * // Count the number of Charms
     * const count = await prisma.charm.count({
     *   where: {
     *     // ... the filter for the Charms we want to count
     *   }
     * })
    **/
    count<T extends CharmCountArgs>(
      args?: Subset<T, CharmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharmAggregateArgs>(args: Subset<T, CharmAggregateArgs>): Prisma.PrismaPromise<GetCharmAggregateType<T>>

    /**
     * Group by Charm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharmGroupByArgs} args - Group by arguments.
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
      T extends CharmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharmGroupByArgs['orderBy'] }
        : { orderBy?: CharmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charm model
   */
  readonly fields: CharmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Charm model
   */ 
  interface CharmFieldRefs {
    readonly id: FieldRef<"Charm", 'Int'>
    readonly game_id: FieldRef<"Charm", 'BigInt'>
    readonly names: FieldRef<"Charm", 'String'>
    readonly createdAt: FieldRef<"Charm", 'DateTime'>
    readonly updatedAt: FieldRef<"Charm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charm findUnique
   */
  export type CharmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * Filter, which Charm to fetch.
     */
    where: CharmWhereUniqueInput
  }

  /**
   * Charm findUniqueOrThrow
   */
  export type CharmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * Filter, which Charm to fetch.
     */
    where: CharmWhereUniqueInput
  }

  /**
   * Charm findFirst
   */
  export type CharmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * Filter, which Charm to fetch.
     */
    where?: CharmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charms to fetch.
     */
    orderBy?: CharmOrderByWithRelationInput | CharmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charms.
     */
    cursor?: CharmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charms.
     */
    distinct?: CharmScalarFieldEnum | CharmScalarFieldEnum[]
  }

  /**
   * Charm findFirstOrThrow
   */
  export type CharmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * Filter, which Charm to fetch.
     */
    where?: CharmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charms to fetch.
     */
    orderBy?: CharmOrderByWithRelationInput | CharmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charms.
     */
    cursor?: CharmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charms.
     */
    distinct?: CharmScalarFieldEnum | CharmScalarFieldEnum[]
  }

  /**
   * Charm findMany
   */
  export type CharmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * Filter, which Charms to fetch.
     */
    where?: CharmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charms to fetch.
     */
    orderBy?: CharmOrderByWithRelationInput | CharmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charms.
     */
    cursor?: CharmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charms.
     */
    skip?: number
    distinct?: CharmScalarFieldEnum | CharmScalarFieldEnum[]
  }

  /**
   * Charm create
   */
  export type CharmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * The data needed to create a Charm.
     */
    data: XOR<CharmCreateInput, CharmUncheckedCreateInput>
  }

  /**
   * Charm createMany
   */
  export type CharmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charms.
     */
    data: CharmCreateManyInput | CharmCreateManyInput[]
  }

  /**
   * Charm createManyAndReturn
   */
  export type CharmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Charms.
     */
    data: CharmCreateManyInput | CharmCreateManyInput[]
  }

  /**
   * Charm update
   */
  export type CharmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * The data needed to update a Charm.
     */
    data: XOR<CharmUpdateInput, CharmUncheckedUpdateInput>
    /**
     * Choose, which Charm to update.
     */
    where: CharmWhereUniqueInput
  }

  /**
   * Charm updateMany
   */
  export type CharmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charms.
     */
    data: XOR<CharmUpdateManyMutationInput, CharmUncheckedUpdateManyInput>
    /**
     * Filter which Charms to update
     */
    where?: CharmWhereInput
  }

  /**
   * Charm upsert
   */
  export type CharmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * The filter to search for the Charm to update in case it exists.
     */
    where: CharmWhereUniqueInput
    /**
     * In case the Charm found by the `where` argument doesn't exist, create a new Charm with this data.
     */
    create: XOR<CharmCreateInput, CharmUncheckedCreateInput>
    /**
     * In case the Charm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharmUpdateInput, CharmUncheckedUpdateInput>
  }

  /**
   * Charm delete
   */
  export type CharmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
    /**
     * Filter which Charm to delete.
     */
    where: CharmWhereUniqueInput
  }

  /**
   * Charm deleteMany
   */
  export type CharmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charms to delete
     */
    where?: CharmWhereInput
  }

  /**
   * Charm without action
   */
  export type CharmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charm
     */
    select?: CharmSelect<ExtArgs> | null
  }


  /**
   * Model ArmorUpgrade
   */

  export type AggregateArmorUpgrade = {
    _count: ArmorUpgradeCountAggregateOutputType | null
    _avg: ArmorUpgradeAvgAggregateOutputType | null
    _sum: ArmorUpgradeSumAggregateOutputType | null
    _min: ArmorUpgradeMinAggregateOutputType | null
    _max: ArmorUpgradeMaxAggregateOutputType | null
  }

  export type ArmorUpgradeAvgAggregateOutputType = {
    id: number | null
    rarity: number | null
  }

  export type ArmorUpgradeSumAggregateOutputType = {
    id: number | null
    rarity: number | null
  }

  export type ArmorUpgradeMinAggregateOutputType = {
    id: number | null
    rarity: number | null
    steps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArmorUpgradeMaxAggregateOutputType = {
    id: number | null
    rarity: number | null
    steps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArmorUpgradeCountAggregateOutputType = {
    id: number
    rarity: number
    steps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArmorUpgradeAvgAggregateInputType = {
    id?: true
    rarity?: true
  }

  export type ArmorUpgradeSumAggregateInputType = {
    id?: true
    rarity?: true
  }

  export type ArmorUpgradeMinAggregateInputType = {
    id?: true
    rarity?: true
    steps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArmorUpgradeMaxAggregateInputType = {
    id?: true
    rarity?: true
    steps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArmorUpgradeCountAggregateInputType = {
    id?: true
    rarity?: true
    steps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArmorUpgradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArmorUpgrade to aggregate.
     */
    where?: ArmorUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorUpgrades to fetch.
     */
    orderBy?: ArmorUpgradeOrderByWithRelationInput | ArmorUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArmorUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorUpgrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArmorUpgrades
    **/
    _count?: true | ArmorUpgradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArmorUpgradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArmorUpgradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArmorUpgradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArmorUpgradeMaxAggregateInputType
  }

  export type GetArmorUpgradeAggregateType<T extends ArmorUpgradeAggregateArgs> = {
        [P in keyof T & keyof AggregateArmorUpgrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArmorUpgrade[P]>
      : GetScalarType<T[P], AggregateArmorUpgrade[P]>
  }




  export type ArmorUpgradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArmorUpgradeWhereInput
    orderBy?: ArmorUpgradeOrderByWithAggregationInput | ArmorUpgradeOrderByWithAggregationInput[]
    by: ArmorUpgradeScalarFieldEnum[] | ArmorUpgradeScalarFieldEnum
    having?: ArmorUpgradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArmorUpgradeCountAggregateInputType | true
    _avg?: ArmorUpgradeAvgAggregateInputType
    _sum?: ArmorUpgradeSumAggregateInputType
    _min?: ArmorUpgradeMinAggregateInputType
    _max?: ArmorUpgradeMaxAggregateInputType
  }

  export type ArmorUpgradeGroupByOutputType = {
    id: number
    rarity: number
    steps: string
    createdAt: Date
    updatedAt: Date
    _count: ArmorUpgradeCountAggregateOutputType | null
    _avg: ArmorUpgradeAvgAggregateOutputType | null
    _sum: ArmorUpgradeSumAggregateOutputType | null
    _min: ArmorUpgradeMinAggregateOutputType | null
    _max: ArmorUpgradeMaxAggregateOutputType | null
  }

  type GetArmorUpgradeGroupByPayload<T extends ArmorUpgradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArmorUpgradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArmorUpgradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArmorUpgradeGroupByOutputType[P]>
            : GetScalarType<T[P], ArmorUpgradeGroupByOutputType[P]>
        }
      >
    >


  export type ArmorUpgradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rarity?: boolean
    steps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["armorUpgrade"]>

  export type ArmorUpgradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rarity?: boolean
    steps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["armorUpgrade"]>

  export type ArmorUpgradeSelectScalar = {
    id?: boolean
    rarity?: boolean
    steps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ArmorUpgradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArmorUpgrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rarity: number
      steps: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["armorUpgrade"]>
    composites: {}
  }

  type ArmorUpgradeGetPayload<S extends boolean | null | undefined | ArmorUpgradeDefaultArgs> = $Result.GetResult<Prisma.$ArmorUpgradePayload, S>

  type ArmorUpgradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArmorUpgradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArmorUpgradeCountAggregateInputType | true
    }

  export interface ArmorUpgradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArmorUpgrade'], meta: { name: 'ArmorUpgrade' } }
    /**
     * Find zero or one ArmorUpgrade that matches the filter.
     * @param {ArmorUpgradeFindUniqueArgs} args - Arguments to find a ArmorUpgrade
     * @example
     * // Get one ArmorUpgrade
     * const armorUpgrade = await prisma.armorUpgrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArmorUpgradeFindUniqueArgs>(args: SelectSubset<T, ArmorUpgradeFindUniqueArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ArmorUpgrade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArmorUpgradeFindUniqueOrThrowArgs} args - Arguments to find a ArmorUpgrade
     * @example
     * // Get one ArmorUpgrade
     * const armorUpgrade = await prisma.armorUpgrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArmorUpgradeFindUniqueOrThrowArgs>(args: SelectSubset<T, ArmorUpgradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ArmorUpgrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeFindFirstArgs} args - Arguments to find a ArmorUpgrade
     * @example
     * // Get one ArmorUpgrade
     * const armorUpgrade = await prisma.armorUpgrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArmorUpgradeFindFirstArgs>(args?: SelectSubset<T, ArmorUpgradeFindFirstArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ArmorUpgrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeFindFirstOrThrowArgs} args - Arguments to find a ArmorUpgrade
     * @example
     * // Get one ArmorUpgrade
     * const armorUpgrade = await prisma.armorUpgrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArmorUpgradeFindFirstOrThrowArgs>(args?: SelectSubset<T, ArmorUpgradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ArmorUpgrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArmorUpgrades
     * const armorUpgrades = await prisma.armorUpgrade.findMany()
     * 
     * // Get first 10 ArmorUpgrades
     * const armorUpgrades = await prisma.armorUpgrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const armorUpgradeWithIdOnly = await prisma.armorUpgrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArmorUpgradeFindManyArgs>(args?: SelectSubset<T, ArmorUpgradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ArmorUpgrade.
     * @param {ArmorUpgradeCreateArgs} args - Arguments to create a ArmorUpgrade.
     * @example
     * // Create one ArmorUpgrade
     * const ArmorUpgrade = await prisma.armorUpgrade.create({
     *   data: {
     *     // ... data to create a ArmorUpgrade
     *   }
     * })
     * 
     */
    create<T extends ArmorUpgradeCreateArgs>(args: SelectSubset<T, ArmorUpgradeCreateArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ArmorUpgrades.
     * @param {ArmorUpgradeCreateManyArgs} args - Arguments to create many ArmorUpgrades.
     * @example
     * // Create many ArmorUpgrades
     * const armorUpgrade = await prisma.armorUpgrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArmorUpgradeCreateManyArgs>(args?: SelectSubset<T, ArmorUpgradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArmorUpgrades and returns the data saved in the database.
     * @param {ArmorUpgradeCreateManyAndReturnArgs} args - Arguments to create many ArmorUpgrades.
     * @example
     * // Create many ArmorUpgrades
     * const armorUpgrade = await prisma.armorUpgrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArmorUpgrades and only return the `id`
     * const armorUpgradeWithIdOnly = await prisma.armorUpgrade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArmorUpgradeCreateManyAndReturnArgs>(args?: SelectSubset<T, ArmorUpgradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ArmorUpgrade.
     * @param {ArmorUpgradeDeleteArgs} args - Arguments to delete one ArmorUpgrade.
     * @example
     * // Delete one ArmorUpgrade
     * const ArmorUpgrade = await prisma.armorUpgrade.delete({
     *   where: {
     *     // ... filter to delete one ArmorUpgrade
     *   }
     * })
     * 
     */
    delete<T extends ArmorUpgradeDeleteArgs>(args: SelectSubset<T, ArmorUpgradeDeleteArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ArmorUpgrade.
     * @param {ArmorUpgradeUpdateArgs} args - Arguments to update one ArmorUpgrade.
     * @example
     * // Update one ArmorUpgrade
     * const armorUpgrade = await prisma.armorUpgrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArmorUpgradeUpdateArgs>(args: SelectSubset<T, ArmorUpgradeUpdateArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ArmorUpgrades.
     * @param {ArmorUpgradeDeleteManyArgs} args - Arguments to filter ArmorUpgrades to delete.
     * @example
     * // Delete a few ArmorUpgrades
     * const { count } = await prisma.armorUpgrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArmorUpgradeDeleteManyArgs>(args?: SelectSubset<T, ArmorUpgradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArmorUpgrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArmorUpgrades
     * const armorUpgrade = await prisma.armorUpgrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArmorUpgradeUpdateManyArgs>(args: SelectSubset<T, ArmorUpgradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArmorUpgrade.
     * @param {ArmorUpgradeUpsertArgs} args - Arguments to update or create a ArmorUpgrade.
     * @example
     * // Update or create a ArmorUpgrade
     * const armorUpgrade = await prisma.armorUpgrade.upsert({
     *   create: {
     *     // ... data to create a ArmorUpgrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArmorUpgrade we want to update
     *   }
     * })
     */
    upsert<T extends ArmorUpgradeUpsertArgs>(args: SelectSubset<T, ArmorUpgradeUpsertArgs<ExtArgs>>): Prisma__ArmorUpgradeClient<$Result.GetResult<Prisma.$ArmorUpgradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ArmorUpgrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeCountArgs} args - Arguments to filter ArmorUpgrades to count.
     * @example
     * // Count the number of ArmorUpgrades
     * const count = await prisma.armorUpgrade.count({
     *   where: {
     *     // ... the filter for the ArmorUpgrades we want to count
     *   }
     * })
    **/
    count<T extends ArmorUpgradeCountArgs>(
      args?: Subset<T, ArmorUpgradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArmorUpgradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArmorUpgrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArmorUpgradeAggregateArgs>(args: Subset<T, ArmorUpgradeAggregateArgs>): Prisma.PrismaPromise<GetArmorUpgradeAggregateType<T>>

    /**
     * Group by ArmorUpgrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmorUpgradeGroupByArgs} args - Group by arguments.
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
      T extends ArmorUpgradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArmorUpgradeGroupByArgs['orderBy'] }
        : { orderBy?: ArmorUpgradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArmorUpgradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArmorUpgradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArmorUpgrade model
   */
  readonly fields: ArmorUpgradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArmorUpgrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArmorUpgradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ArmorUpgrade model
   */ 
  interface ArmorUpgradeFieldRefs {
    readonly id: FieldRef<"ArmorUpgrade", 'Int'>
    readonly rarity: FieldRef<"ArmorUpgrade", 'Int'>
    readonly steps: FieldRef<"ArmorUpgrade", 'String'>
    readonly createdAt: FieldRef<"ArmorUpgrade", 'DateTime'>
    readonly updatedAt: FieldRef<"ArmorUpgrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArmorUpgrade findUnique
   */
  export type ArmorUpgradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * Filter, which ArmorUpgrade to fetch.
     */
    where: ArmorUpgradeWhereUniqueInput
  }

  /**
   * ArmorUpgrade findUniqueOrThrow
   */
  export type ArmorUpgradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * Filter, which ArmorUpgrade to fetch.
     */
    where: ArmorUpgradeWhereUniqueInput
  }

  /**
   * ArmorUpgrade findFirst
   */
  export type ArmorUpgradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * Filter, which ArmorUpgrade to fetch.
     */
    where?: ArmorUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorUpgrades to fetch.
     */
    orderBy?: ArmorUpgradeOrderByWithRelationInput | ArmorUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArmorUpgrades.
     */
    cursor?: ArmorUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorUpgrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArmorUpgrades.
     */
    distinct?: ArmorUpgradeScalarFieldEnum | ArmorUpgradeScalarFieldEnum[]
  }

  /**
   * ArmorUpgrade findFirstOrThrow
   */
  export type ArmorUpgradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * Filter, which ArmorUpgrade to fetch.
     */
    where?: ArmorUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorUpgrades to fetch.
     */
    orderBy?: ArmorUpgradeOrderByWithRelationInput | ArmorUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArmorUpgrades.
     */
    cursor?: ArmorUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorUpgrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArmorUpgrades.
     */
    distinct?: ArmorUpgradeScalarFieldEnum | ArmorUpgradeScalarFieldEnum[]
  }

  /**
   * ArmorUpgrade findMany
   */
  export type ArmorUpgradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * Filter, which ArmorUpgrades to fetch.
     */
    where?: ArmorUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArmorUpgrades to fetch.
     */
    orderBy?: ArmorUpgradeOrderByWithRelationInput | ArmorUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArmorUpgrades.
     */
    cursor?: ArmorUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArmorUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArmorUpgrades.
     */
    skip?: number
    distinct?: ArmorUpgradeScalarFieldEnum | ArmorUpgradeScalarFieldEnum[]
  }

  /**
   * ArmorUpgrade create
   */
  export type ArmorUpgradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * The data needed to create a ArmorUpgrade.
     */
    data: XOR<ArmorUpgradeCreateInput, ArmorUpgradeUncheckedCreateInput>
  }

  /**
   * ArmorUpgrade createMany
   */
  export type ArmorUpgradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArmorUpgrades.
     */
    data: ArmorUpgradeCreateManyInput | ArmorUpgradeCreateManyInput[]
  }

  /**
   * ArmorUpgrade createManyAndReturn
   */
  export type ArmorUpgradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ArmorUpgrades.
     */
    data: ArmorUpgradeCreateManyInput | ArmorUpgradeCreateManyInput[]
  }

  /**
   * ArmorUpgrade update
   */
  export type ArmorUpgradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * The data needed to update a ArmorUpgrade.
     */
    data: XOR<ArmorUpgradeUpdateInput, ArmorUpgradeUncheckedUpdateInput>
    /**
     * Choose, which ArmorUpgrade to update.
     */
    where: ArmorUpgradeWhereUniqueInput
  }

  /**
   * ArmorUpgrade updateMany
   */
  export type ArmorUpgradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArmorUpgrades.
     */
    data: XOR<ArmorUpgradeUpdateManyMutationInput, ArmorUpgradeUncheckedUpdateManyInput>
    /**
     * Filter which ArmorUpgrades to update
     */
    where?: ArmorUpgradeWhereInput
  }

  /**
   * ArmorUpgrade upsert
   */
  export type ArmorUpgradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * The filter to search for the ArmorUpgrade to update in case it exists.
     */
    where: ArmorUpgradeWhereUniqueInput
    /**
     * In case the ArmorUpgrade found by the `where` argument doesn't exist, create a new ArmorUpgrade with this data.
     */
    create: XOR<ArmorUpgradeCreateInput, ArmorUpgradeUncheckedCreateInput>
    /**
     * In case the ArmorUpgrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArmorUpgradeUpdateInput, ArmorUpgradeUncheckedUpdateInput>
  }

  /**
   * ArmorUpgrade delete
   */
  export type ArmorUpgradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
    /**
     * Filter which ArmorUpgrade to delete.
     */
    where: ArmorUpgradeWhereUniqueInput
  }

  /**
   * ArmorUpgrade deleteMany
   */
  export type ArmorUpgradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArmorUpgrades to delete
     */
    where?: ArmorUpgradeWhereInput
  }

  /**
   * ArmorUpgrade without action
   */
  export type ArmorUpgradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmorUpgrade
     */
    select?: ArmorUpgradeSelect<ExtArgs> | null
  }


  /**
   * Model Species
   */

  export type AggregateSpecies = {
    _count: SpeciesCountAggregateOutputType | null
    _avg: SpeciesAvgAggregateOutputType | null
    _sum: SpeciesSumAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  export type SpeciesAvgAggregateOutputType = {
    id: number | null
  }

  export type SpeciesSumAggregateOutputType = {
    id: number | null
  }

  export type SpeciesMinAggregateOutputType = {
    id: number | null
    kind: string | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeciesMaxAggregateOutputType = {
    id: number | null
    kind: string | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeciesCountAggregateOutputType = {
    id: number
    kind: number
    names: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpeciesAvgAggregateInputType = {
    id?: true
  }

  export type SpeciesSumAggregateInputType = {
    id?: true
  }

  export type SpeciesMinAggregateInputType = {
    id?: true
    kind?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeciesMaxAggregateInputType = {
    id?: true
    kind?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeciesCountAggregateInputType = {
    id?: true
    kind?: true
    names?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpeciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to aggregate.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Species
    **/
    _count?: true | SpeciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeciesMaxAggregateInputType
  }

  export type GetSpeciesAggregateType<T extends SpeciesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecies[P]>
      : GetScalarType<T[P], AggregateSpecies[P]>
  }




  export type SpeciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesWhereInput
    orderBy?: SpeciesOrderByWithAggregationInput | SpeciesOrderByWithAggregationInput[]
    by: SpeciesScalarFieldEnum[] | SpeciesScalarFieldEnum
    having?: SpeciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeciesCountAggregateInputType | true
    _avg?: SpeciesAvgAggregateInputType
    _sum?: SpeciesSumAggregateInputType
    _min?: SpeciesMinAggregateInputType
    _max?: SpeciesMaxAggregateInputType
  }

  export type SpeciesGroupByOutputType = {
    id: number
    kind: string
    names: string
    createdAt: Date
    updatedAt: Date
    _count: SpeciesCountAggregateOutputType | null
    _avg: SpeciesAvgAggregateOutputType | null
    _sum: SpeciesSumAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  type GetSpeciesGroupByPayload<T extends SpeciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
            : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
        }
      >
    >


  export type SpeciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectScalar = {
    id?: boolean
    kind?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SpeciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Species"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kind: string
      names: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["species"]>
    composites: {}
  }

  type SpeciesGetPayload<S extends boolean | null | undefined | SpeciesDefaultArgs> = $Result.GetResult<Prisma.$SpeciesPayload, S>

  type SpeciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpeciesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpeciesCountAggregateInputType | true
    }

  export interface SpeciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Species'], meta: { name: 'Species' } }
    /**
     * Find zero or one Species that matches the filter.
     * @param {SpeciesFindUniqueArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeciesFindUniqueArgs>(args: SelectSubset<T, SpeciesFindUniqueArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Species that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpeciesFindUniqueOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeciesFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeciesFindFirstArgs>(args?: SelectSubset<T, SpeciesFindFirstArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Species that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeciesFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Species
     * const species = await prisma.species.findMany()
     * 
     * // Get first 10 Species
     * const species = await prisma.species.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speciesWithIdOnly = await prisma.species.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeciesFindManyArgs>(args?: SelectSubset<T, SpeciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Species.
     * @param {SpeciesCreateArgs} args - Arguments to create a Species.
     * @example
     * // Create one Species
     * const Species = await prisma.species.create({
     *   data: {
     *     // ... data to create a Species
     *   }
     * })
     * 
     */
    create<T extends SpeciesCreateArgs>(args: SelectSubset<T, SpeciesCreateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Species.
     * @param {SpeciesCreateManyArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeciesCreateManyArgs>(args?: SelectSubset<T, SpeciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Species and returns the data saved in the database.
     * @param {SpeciesCreateManyAndReturnArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Species and only return the `id`
     * const speciesWithIdOnly = await prisma.species.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeciesCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Species.
     * @param {SpeciesDeleteArgs} args - Arguments to delete one Species.
     * @example
     * // Delete one Species
     * const Species = await prisma.species.delete({
     *   where: {
     *     // ... filter to delete one Species
     *   }
     * })
     * 
     */
    delete<T extends SpeciesDeleteArgs>(args: SelectSubset<T, SpeciesDeleteArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Species.
     * @param {SpeciesUpdateArgs} args - Arguments to update one Species.
     * @example
     * // Update one Species
     * const species = await prisma.species.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeciesUpdateArgs>(args: SelectSubset<T, SpeciesUpdateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Species.
     * @param {SpeciesDeleteManyArgs} args - Arguments to filter Species to delete.
     * @example
     * // Delete a few Species
     * const { count } = await prisma.species.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeciesDeleteManyArgs>(args?: SelectSubset<T, SpeciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Species
     * const species = await prisma.species.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeciesUpdateManyArgs>(args: SelectSubset<T, SpeciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Species.
     * @param {SpeciesUpsertArgs} args - Arguments to update or create a Species.
     * @example
     * // Update or create a Species
     * const species = await prisma.species.upsert({
     *   create: {
     *     // ... data to create a Species
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Species we want to update
     *   }
     * })
     */
    upsert<T extends SpeciesUpsertArgs>(args: SelectSubset<T, SpeciesUpsertArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesCountArgs} args - Arguments to filter Species to count.
     * @example
     * // Count the number of Species
     * const count = await prisma.species.count({
     *   where: {
     *     // ... the filter for the Species we want to count
     *   }
     * })
    **/
    count<T extends SpeciesCountArgs>(
      args?: Subset<T, SpeciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpeciesAggregateArgs>(args: Subset<T, SpeciesAggregateArgs>): Prisma.PrismaPromise<GetSpeciesAggregateType<T>>

    /**
     * Group by Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesGroupByArgs} args - Group by arguments.
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
      T extends SpeciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeciesGroupByArgs['orderBy'] }
        : { orderBy?: SpeciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpeciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Species model
   */
  readonly fields: SpeciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Species.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Species model
   */ 
  interface SpeciesFieldRefs {
    readonly id: FieldRef<"Species", 'Int'>
    readonly kind: FieldRef<"Species", 'String'>
    readonly names: FieldRef<"Species", 'String'>
    readonly createdAt: FieldRef<"Species", 'DateTime'>
    readonly updatedAt: FieldRef<"Species", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Species findUnique
   */
  export type SpeciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findUniqueOrThrow
   */
  export type SpeciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findFirst
   */
  export type SpeciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findFirstOrThrow
   */
  export type SpeciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findMany
   */
  export type SpeciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species create
   */
  export type SpeciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * The data needed to create a Species.
     */
    data: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
  }

  /**
   * Species createMany
   */
  export type SpeciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
  }

  /**
   * Species createManyAndReturn
   */
  export type SpeciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
  }

  /**
   * Species update
   */
  export type SpeciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * The data needed to update a Species.
     */
    data: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
    /**
     * Choose, which Species to update.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species updateMany
   */
  export type SpeciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Species.
     */
    data: XOR<SpeciesUpdateManyMutationInput, SpeciesUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpeciesWhereInput
  }

  /**
   * Species upsert
   */
  export type SpeciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * The filter to search for the Species to update in case it exists.
     */
    where: SpeciesWhereUniqueInput
    /**
     * In case the Species found by the `where` argument doesn't exist, create a new Species with this data.
     */
    create: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
    /**
     * In case the Species was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
  }

  /**
   * Species delete
   */
  export type SpeciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Filter which Species to delete.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species deleteMany
   */
  export type SpeciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to delete
     */
    where?: SpeciesWhereInput
  }

  /**
   * Species without action
   */
  export type SpeciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
  }


  /**
   * Model Stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
    areas: number | null
  }

  export type StageSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    areas: number | null
  }

  export type StageMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    areas: number | null
    camps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StageMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    areas: number | null
    camps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    areas: number
    camps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    id?: true
    game_id?: true
    areas?: true
  }

  export type StageSumAggregateInputType = {
    id?: true
    game_id?: true
    areas?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    areas?: true
    camps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    areas?: true
    camps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    areas?: true
    camps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stage to aggregate.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type StageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
    orderBy?: StageOrderByWithAggregationInput | StageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    areas: number
    camps: string | null
    createdAt: Date
    updatedAt: Date
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type StageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    areas?: boolean
    camps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stage"]>

  export type StageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    areas?: boolean
    camps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stage"]>

  export type StageSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    areas?: boolean
    camps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      areas: number
      camps: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }

  type StageGetPayload<S extends boolean | null | undefined | StageDefaultArgs> = $Result.GetResult<Prisma.$StagePayload, S>

  type StageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StageCountAggregateInputType | true
    }

  export interface StageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stage'], meta: { name: 'Stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageFindUniqueArgs>(args: SelectSubset<T, StageFindUniqueArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageFindUniqueOrThrowArgs>(args: SelectSubset<T, StageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageFindFirstArgs>(args?: SelectSubset<T, StageFindFirstArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageFindFirstOrThrowArgs>(args?: SelectSubset<T, StageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageFindManyArgs>(args?: SelectSubset<T, StageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
     */
    create<T extends StageCreateArgs>(args: SelectSubset<T, StageCreateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stages.
     * @param {StageCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageCreateManyArgs>(args?: SelectSubset<T, StageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stages and returns the data saved in the database.
     * @param {StageCreateManyAndReturnArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stages and only return the `id`
     * const stageWithIdOnly = await prisma.stage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StageCreateManyAndReturnArgs>(args?: SelectSubset<T, StageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
     */
    delete<T extends StageDeleteArgs>(args: SelectSubset<T, StageDeleteArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageUpdateArgs>(args: SelectSubset<T, StageUpdateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageDeleteManyArgs>(args?: SelectSubset<T, StageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageUpdateManyArgs>(args: SelectSubset<T, StageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
     */
    upsert<T extends StageUpsertArgs>(args: SelectSubset<T, StageUpsertArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
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
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stage model
   */
  readonly fields: StageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Stage model
   */ 
  interface StageFieldRefs {
    readonly id: FieldRef<"Stage", 'Int'>
    readonly game_id: FieldRef<"Stage", 'BigInt'>
    readonly names: FieldRef<"Stage", 'String'>
    readonly areas: FieldRef<"Stage", 'Int'>
    readonly camps: FieldRef<"Stage", 'String'>
    readonly createdAt: FieldRef<"Stage", 'DateTime'>
    readonly updatedAt: FieldRef<"Stage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findUniqueOrThrow
   */
  export type StageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findFirstOrThrow
   */
  export type StageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findMany
   */
  export type StageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage create
   */
  export type StageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * The data needed to create a Stage.
     */
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }

  /**
   * Stage createMany
   */
  export type StageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
  }

  /**
   * Stage createManyAndReturn
   */
  export type StageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
  }

  /**
   * Stage update
   */
  export type StageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * The data needed to update a Stage.
     */
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
  }

  /**
   * Stage upsert
   */
  export type StageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * The filter to search for the Stage to update in case it exists.
     */
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     */
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }

  /**
   * Stage delete
   */
  export type StageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Filter which Stage to delete.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StageWhereInput
  }

  /**
   * Stage without action
   */
  export type StageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
  }


  /**
   * Model PartName
   */

  export type AggregatePartName = {
    _count: PartNameCountAggregateOutputType | null
    _avg: PartNameAvgAggregateOutputType | null
    _sum: PartNameSumAggregateOutputType | null
    _min: PartNameMinAggregateOutputType | null
    _max: PartNameMaxAggregateOutputType | null
  }

  export type PartNameAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type PartNameSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
  }

  export type PartNameMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartNameMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartNameCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartNameAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type PartNameSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type PartNameMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartNameMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartNameCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartNameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartName to aggregate.
     */
    where?: PartNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartNames to fetch.
     */
    orderBy?: PartNameOrderByWithRelationInput | PartNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartNames
    **/
    _count?: true | PartNameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartNameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartNameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartNameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartNameMaxAggregateInputType
  }

  export type GetPartNameAggregateType<T extends PartNameAggregateArgs> = {
        [P in keyof T & keyof AggregatePartName]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartName[P]>
      : GetScalarType<T[P], AggregatePartName[P]>
  }




  export type PartNameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartNameWhereInput
    orderBy?: PartNameOrderByWithAggregationInput | PartNameOrderByWithAggregationInput[]
    by: PartNameScalarFieldEnum[] | PartNameScalarFieldEnum
    having?: PartNameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartNameCountAggregateInputType | true
    _avg?: PartNameAvgAggregateInputType
    _sum?: PartNameSumAggregateInputType
    _min?: PartNameMinAggregateInputType
    _max?: PartNameMaxAggregateInputType
  }

  export type PartNameGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    createdAt: Date
    updatedAt: Date
    _count: PartNameCountAggregateOutputType | null
    _avg: PartNameAvgAggregateOutputType | null
    _sum: PartNameSumAggregateOutputType | null
    _min: PartNameMinAggregateOutputType | null
    _max: PartNameMaxAggregateOutputType | null
  }

  type GetPartNameGroupByPayload<T extends PartNameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartNameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartNameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartNameGroupByOutputType[P]>
            : GetScalarType<T[P], PartNameGroupByOutputType[P]>
        }
      >
    >


  export type PartNameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partName"]>

  export type PartNameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partName"]>

  export type PartNameSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PartNamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartName"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partName"]>
    composites: {}
  }

  type PartNameGetPayload<S extends boolean | null | undefined | PartNameDefaultArgs> = $Result.GetResult<Prisma.$PartNamePayload, S>

  type PartNameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartNameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PartNameCountAggregateInputType | true
    }

  export interface PartNameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartName'], meta: { name: 'PartName' } }
    /**
     * Find zero or one PartName that matches the filter.
     * @param {PartNameFindUniqueArgs} args - Arguments to find a PartName
     * @example
     * // Get one PartName
     * const partName = await prisma.partName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartNameFindUniqueArgs>(args: SelectSubset<T, PartNameFindUniqueArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PartName that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PartNameFindUniqueOrThrowArgs} args - Arguments to find a PartName
     * @example
     * // Get one PartName
     * const partName = await prisma.partName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartNameFindUniqueOrThrowArgs>(args: SelectSubset<T, PartNameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PartName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameFindFirstArgs} args - Arguments to find a PartName
     * @example
     * // Get one PartName
     * const partName = await prisma.partName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartNameFindFirstArgs>(args?: SelectSubset<T, PartNameFindFirstArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PartName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameFindFirstOrThrowArgs} args - Arguments to find a PartName
     * @example
     * // Get one PartName
     * const partName = await prisma.partName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartNameFindFirstOrThrowArgs>(args?: SelectSubset<T, PartNameFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PartNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartNames
     * const partNames = await prisma.partName.findMany()
     * 
     * // Get first 10 PartNames
     * const partNames = await prisma.partName.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partNameWithIdOnly = await prisma.partName.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartNameFindManyArgs>(args?: SelectSubset<T, PartNameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PartName.
     * @param {PartNameCreateArgs} args - Arguments to create a PartName.
     * @example
     * // Create one PartName
     * const PartName = await prisma.partName.create({
     *   data: {
     *     // ... data to create a PartName
     *   }
     * })
     * 
     */
    create<T extends PartNameCreateArgs>(args: SelectSubset<T, PartNameCreateArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PartNames.
     * @param {PartNameCreateManyArgs} args - Arguments to create many PartNames.
     * @example
     * // Create many PartNames
     * const partName = await prisma.partName.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartNameCreateManyArgs>(args?: SelectSubset<T, PartNameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartNames and returns the data saved in the database.
     * @param {PartNameCreateManyAndReturnArgs} args - Arguments to create many PartNames.
     * @example
     * // Create many PartNames
     * const partName = await prisma.partName.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartNames and only return the `id`
     * const partNameWithIdOnly = await prisma.partName.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartNameCreateManyAndReturnArgs>(args?: SelectSubset<T, PartNameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PartName.
     * @param {PartNameDeleteArgs} args - Arguments to delete one PartName.
     * @example
     * // Delete one PartName
     * const PartName = await prisma.partName.delete({
     *   where: {
     *     // ... filter to delete one PartName
     *   }
     * })
     * 
     */
    delete<T extends PartNameDeleteArgs>(args: SelectSubset<T, PartNameDeleteArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PartName.
     * @param {PartNameUpdateArgs} args - Arguments to update one PartName.
     * @example
     * // Update one PartName
     * const partName = await prisma.partName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartNameUpdateArgs>(args: SelectSubset<T, PartNameUpdateArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PartNames.
     * @param {PartNameDeleteManyArgs} args - Arguments to filter PartNames to delete.
     * @example
     * // Delete a few PartNames
     * const { count } = await prisma.partName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartNameDeleteManyArgs>(args?: SelectSubset<T, PartNameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartNames
     * const partName = await prisma.partName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartNameUpdateManyArgs>(args: SelectSubset<T, PartNameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartName.
     * @param {PartNameUpsertArgs} args - Arguments to update or create a PartName.
     * @example
     * // Update or create a PartName
     * const partName = await prisma.partName.upsert({
     *   create: {
     *     // ... data to create a PartName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartName we want to update
     *   }
     * })
     */
    upsert<T extends PartNameUpsertArgs>(args: SelectSubset<T, PartNameUpsertArgs<ExtArgs>>): Prisma__PartNameClient<$Result.GetResult<Prisma.$PartNamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PartNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameCountArgs} args - Arguments to filter PartNames to count.
     * @example
     * // Count the number of PartNames
     * const count = await prisma.partName.count({
     *   where: {
     *     // ... the filter for the PartNames we want to count
     *   }
     * })
    **/
    count<T extends PartNameCountArgs>(
      args?: Subset<T, PartNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartNameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartNameAggregateArgs>(args: Subset<T, PartNameAggregateArgs>): Prisma.PrismaPromise<GetPartNameAggregateType<T>>

    /**
     * Group by PartName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartNameGroupByArgs} args - Group by arguments.
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
      T extends PartNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartNameGroupByArgs['orderBy'] }
        : { orderBy?: PartNameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartNameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartNameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartName model
   */
  readonly fields: PartNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartNameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PartName model
   */ 
  interface PartNameFieldRefs {
    readonly id: FieldRef<"PartName", 'Int'>
    readonly game_id: FieldRef<"PartName", 'BigInt'>
    readonly names: FieldRef<"PartName", 'String'>
    readonly createdAt: FieldRef<"PartName", 'DateTime'>
    readonly updatedAt: FieldRef<"PartName", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartName findUnique
   */
  export type PartNameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * Filter, which PartName to fetch.
     */
    where: PartNameWhereUniqueInput
  }

  /**
   * PartName findUniqueOrThrow
   */
  export type PartNameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * Filter, which PartName to fetch.
     */
    where: PartNameWhereUniqueInput
  }

  /**
   * PartName findFirst
   */
  export type PartNameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * Filter, which PartName to fetch.
     */
    where?: PartNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartNames to fetch.
     */
    orderBy?: PartNameOrderByWithRelationInput | PartNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartNames.
     */
    cursor?: PartNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartNames.
     */
    distinct?: PartNameScalarFieldEnum | PartNameScalarFieldEnum[]
  }

  /**
   * PartName findFirstOrThrow
   */
  export type PartNameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * Filter, which PartName to fetch.
     */
    where?: PartNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartNames to fetch.
     */
    orderBy?: PartNameOrderByWithRelationInput | PartNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartNames.
     */
    cursor?: PartNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartNames.
     */
    distinct?: PartNameScalarFieldEnum | PartNameScalarFieldEnum[]
  }

  /**
   * PartName findMany
   */
  export type PartNameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * Filter, which PartNames to fetch.
     */
    where?: PartNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartNames to fetch.
     */
    orderBy?: PartNameOrderByWithRelationInput | PartNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartNames.
     */
    cursor?: PartNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartNames.
     */
    skip?: number
    distinct?: PartNameScalarFieldEnum | PartNameScalarFieldEnum[]
  }

  /**
   * PartName create
   */
  export type PartNameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * The data needed to create a PartName.
     */
    data: XOR<PartNameCreateInput, PartNameUncheckedCreateInput>
  }

  /**
   * PartName createMany
   */
  export type PartNameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartNames.
     */
    data: PartNameCreateManyInput | PartNameCreateManyInput[]
  }

  /**
   * PartName createManyAndReturn
   */
  export type PartNameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PartNames.
     */
    data: PartNameCreateManyInput | PartNameCreateManyInput[]
  }

  /**
   * PartName update
   */
  export type PartNameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * The data needed to update a PartName.
     */
    data: XOR<PartNameUpdateInput, PartNameUncheckedUpdateInput>
    /**
     * Choose, which PartName to update.
     */
    where: PartNameWhereUniqueInput
  }

  /**
   * PartName updateMany
   */
  export type PartNameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartNames.
     */
    data: XOR<PartNameUpdateManyMutationInput, PartNameUncheckedUpdateManyInput>
    /**
     * Filter which PartNames to update
     */
    where?: PartNameWhereInput
  }

  /**
   * PartName upsert
   */
  export type PartNameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * The filter to search for the PartName to update in case it exists.
     */
    where: PartNameWhereUniqueInput
    /**
     * In case the PartName found by the `where` argument doesn't exist, create a new PartName with this data.
     */
    create: XOR<PartNameCreateInput, PartNameUncheckedCreateInput>
    /**
     * In case the PartName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartNameUpdateInput, PartNameUncheckedUpdateInput>
  }

  /**
   * PartName delete
   */
  export type PartNameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
    /**
     * Filter which PartName to delete.
     */
    where: PartNameWhereUniqueInput
  }

  /**
   * PartName deleteMany
   */
  export type PartNameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartNames to delete
     */
    where?: PartNameWhereInput
  }

  /**
   * PartName without action
   */
  export type PartNameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartName
     */
    select?: PartNameSelect<ExtArgs> | null
  }


  /**
   * Model WeaponSeries
   */

  export type AggregateWeaponSeries = {
    _count: WeaponSeriesCountAggregateOutputType | null
    _avg: WeaponSeriesAvgAggregateOutputType | null
    _sum: WeaponSeriesSumAggregateOutputType | null
    _min: WeaponSeriesMinAggregateOutputType | null
    _max: WeaponSeriesMaxAggregateOutputType | null
  }

  export type WeaponSeriesAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type WeaponSeriesSumAggregateOutputType = {
    id: number | null
    game_id: bigint | null
  }

  export type WeaponSeriesMinAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponSeriesMaxAggregateOutputType = {
    id: number | null
    game_id: bigint | null
    names: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponSeriesCountAggregateOutputType = {
    id: number
    game_id: number
    names: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeaponSeriesAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type WeaponSeriesSumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type WeaponSeriesMinAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponSeriesMaxAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponSeriesCountAggregateInputType = {
    id?: true
    game_id?: true
    names?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeaponSeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeaponSeries to aggregate.
     */
    where?: WeaponSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponSeries to fetch.
     */
    orderBy?: WeaponSeriesOrderByWithRelationInput | WeaponSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeaponSeries
    **/
    _count?: true | WeaponSeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponSeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponSeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponSeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponSeriesMaxAggregateInputType
  }

  export type GetWeaponSeriesAggregateType<T extends WeaponSeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateWeaponSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeaponSeries[P]>
      : GetScalarType<T[P], AggregateWeaponSeries[P]>
  }




  export type WeaponSeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponSeriesWhereInput
    orderBy?: WeaponSeriesOrderByWithAggregationInput | WeaponSeriesOrderByWithAggregationInput[]
    by: WeaponSeriesScalarFieldEnum[] | WeaponSeriesScalarFieldEnum
    having?: WeaponSeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponSeriesCountAggregateInputType | true
    _avg?: WeaponSeriesAvgAggregateInputType
    _sum?: WeaponSeriesSumAggregateInputType
    _min?: WeaponSeriesMinAggregateInputType
    _max?: WeaponSeriesMaxAggregateInputType
  }

  export type WeaponSeriesGroupByOutputType = {
    id: number
    game_id: bigint
    names: string
    createdAt: Date
    updatedAt: Date
    _count: WeaponSeriesCountAggregateOutputType | null
    _avg: WeaponSeriesAvgAggregateOutputType | null
    _sum: WeaponSeriesSumAggregateOutputType | null
    _min: WeaponSeriesMinAggregateOutputType | null
    _max: WeaponSeriesMaxAggregateOutputType | null
  }

  type GetWeaponSeriesGroupByPayload<T extends WeaponSeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponSeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponSeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponSeriesGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponSeriesGroupByOutputType[P]>
        }
      >
    >


  export type WeaponSeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weaponSeries"]>

  export type WeaponSeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weaponSeries"]>

  export type WeaponSeriesSelectScalar = {
    id?: boolean
    game_id?: boolean
    names?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WeaponSeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeaponSeries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: bigint
      names: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weaponSeries"]>
    composites: {}
  }

  type WeaponSeriesGetPayload<S extends boolean | null | undefined | WeaponSeriesDefaultArgs> = $Result.GetResult<Prisma.$WeaponSeriesPayload, S>

  type WeaponSeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeaponSeriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeaponSeriesCountAggregateInputType | true
    }

  export interface WeaponSeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeaponSeries'], meta: { name: 'WeaponSeries' } }
    /**
     * Find zero or one WeaponSeries that matches the filter.
     * @param {WeaponSeriesFindUniqueArgs} args - Arguments to find a WeaponSeries
     * @example
     * // Get one WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeaponSeriesFindUniqueArgs>(args: SelectSubset<T, WeaponSeriesFindUniqueArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeaponSeries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeaponSeriesFindUniqueOrThrowArgs} args - Arguments to find a WeaponSeries
     * @example
     * // Get one WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeaponSeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, WeaponSeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeaponSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesFindFirstArgs} args - Arguments to find a WeaponSeries
     * @example
     * // Get one WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeaponSeriesFindFirstArgs>(args?: SelectSubset<T, WeaponSeriesFindFirstArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeaponSeries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesFindFirstOrThrowArgs} args - Arguments to find a WeaponSeries
     * @example
     * // Get one WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeaponSeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, WeaponSeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeaponSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.findMany()
     * 
     * // Get first 10 WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponSeriesWithIdOnly = await prisma.weaponSeries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeaponSeriesFindManyArgs>(args?: SelectSubset<T, WeaponSeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeaponSeries.
     * @param {WeaponSeriesCreateArgs} args - Arguments to create a WeaponSeries.
     * @example
     * // Create one WeaponSeries
     * const WeaponSeries = await prisma.weaponSeries.create({
     *   data: {
     *     // ... data to create a WeaponSeries
     *   }
     * })
     * 
     */
    create<T extends WeaponSeriesCreateArgs>(args: SelectSubset<T, WeaponSeriesCreateArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeaponSeries.
     * @param {WeaponSeriesCreateManyArgs} args - Arguments to create many WeaponSeries.
     * @example
     * // Create many WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeaponSeriesCreateManyArgs>(args?: SelectSubset<T, WeaponSeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeaponSeries and returns the data saved in the database.
     * @param {WeaponSeriesCreateManyAndReturnArgs} args - Arguments to create many WeaponSeries.
     * @example
     * // Create many WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeaponSeries and only return the `id`
     * const weaponSeriesWithIdOnly = await prisma.weaponSeries.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeaponSeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, WeaponSeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WeaponSeries.
     * @param {WeaponSeriesDeleteArgs} args - Arguments to delete one WeaponSeries.
     * @example
     * // Delete one WeaponSeries
     * const WeaponSeries = await prisma.weaponSeries.delete({
     *   where: {
     *     // ... filter to delete one WeaponSeries
     *   }
     * })
     * 
     */
    delete<T extends WeaponSeriesDeleteArgs>(args: SelectSubset<T, WeaponSeriesDeleteArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeaponSeries.
     * @param {WeaponSeriesUpdateArgs} args - Arguments to update one WeaponSeries.
     * @example
     * // Update one WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeaponSeriesUpdateArgs>(args: SelectSubset<T, WeaponSeriesUpdateArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeaponSeries.
     * @param {WeaponSeriesDeleteManyArgs} args - Arguments to filter WeaponSeries to delete.
     * @example
     * // Delete a few WeaponSeries
     * const { count } = await prisma.weaponSeries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeaponSeriesDeleteManyArgs>(args?: SelectSubset<T, WeaponSeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeaponSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeaponSeriesUpdateManyArgs>(args: SelectSubset<T, WeaponSeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeaponSeries.
     * @param {WeaponSeriesUpsertArgs} args - Arguments to update or create a WeaponSeries.
     * @example
     * // Update or create a WeaponSeries
     * const weaponSeries = await prisma.weaponSeries.upsert({
     *   create: {
     *     // ... data to create a WeaponSeries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeaponSeries we want to update
     *   }
     * })
     */
    upsert<T extends WeaponSeriesUpsertArgs>(args: SelectSubset<T, WeaponSeriesUpsertArgs<ExtArgs>>): Prisma__WeaponSeriesClient<$Result.GetResult<Prisma.$WeaponSeriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WeaponSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesCountArgs} args - Arguments to filter WeaponSeries to count.
     * @example
     * // Count the number of WeaponSeries
     * const count = await prisma.weaponSeries.count({
     *   where: {
     *     // ... the filter for the WeaponSeries we want to count
     *   }
     * })
    **/
    count<T extends WeaponSeriesCountArgs>(
      args?: Subset<T, WeaponSeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponSeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeaponSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeaponSeriesAggregateArgs>(args: Subset<T, WeaponSeriesAggregateArgs>): Prisma.PrismaPromise<GetWeaponSeriesAggregateType<T>>

    /**
     * Group by WeaponSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponSeriesGroupByArgs} args - Group by arguments.
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
      T extends WeaponSeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponSeriesGroupByArgs['orderBy'] }
        : { orderBy?: WeaponSeriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeaponSeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeaponSeries model
   */
  readonly fields: WeaponSeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeaponSeries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponSeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WeaponSeries model
   */ 
  interface WeaponSeriesFieldRefs {
    readonly id: FieldRef<"WeaponSeries", 'Int'>
    readonly game_id: FieldRef<"WeaponSeries", 'BigInt'>
    readonly names: FieldRef<"WeaponSeries", 'String'>
    readonly createdAt: FieldRef<"WeaponSeries", 'DateTime'>
    readonly updatedAt: FieldRef<"WeaponSeries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeaponSeries findUnique
   */
  export type WeaponSeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * Filter, which WeaponSeries to fetch.
     */
    where: WeaponSeriesWhereUniqueInput
  }

  /**
   * WeaponSeries findUniqueOrThrow
   */
  export type WeaponSeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * Filter, which WeaponSeries to fetch.
     */
    where: WeaponSeriesWhereUniqueInput
  }

  /**
   * WeaponSeries findFirst
   */
  export type WeaponSeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * Filter, which WeaponSeries to fetch.
     */
    where?: WeaponSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponSeries to fetch.
     */
    orderBy?: WeaponSeriesOrderByWithRelationInput | WeaponSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeaponSeries.
     */
    cursor?: WeaponSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeaponSeries.
     */
    distinct?: WeaponSeriesScalarFieldEnum | WeaponSeriesScalarFieldEnum[]
  }

  /**
   * WeaponSeries findFirstOrThrow
   */
  export type WeaponSeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * Filter, which WeaponSeries to fetch.
     */
    where?: WeaponSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponSeries to fetch.
     */
    orderBy?: WeaponSeriesOrderByWithRelationInput | WeaponSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeaponSeries.
     */
    cursor?: WeaponSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeaponSeries.
     */
    distinct?: WeaponSeriesScalarFieldEnum | WeaponSeriesScalarFieldEnum[]
  }

  /**
   * WeaponSeries findMany
   */
  export type WeaponSeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * Filter, which WeaponSeries to fetch.
     */
    where?: WeaponSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponSeries to fetch.
     */
    orderBy?: WeaponSeriesOrderByWithRelationInput | WeaponSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeaponSeries.
     */
    cursor?: WeaponSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponSeries.
     */
    skip?: number
    distinct?: WeaponSeriesScalarFieldEnum | WeaponSeriesScalarFieldEnum[]
  }

  /**
   * WeaponSeries create
   */
  export type WeaponSeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * The data needed to create a WeaponSeries.
     */
    data: XOR<WeaponSeriesCreateInput, WeaponSeriesUncheckedCreateInput>
  }

  /**
   * WeaponSeries createMany
   */
  export type WeaponSeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeaponSeries.
     */
    data: WeaponSeriesCreateManyInput | WeaponSeriesCreateManyInput[]
  }

  /**
   * WeaponSeries createManyAndReturn
   */
  export type WeaponSeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WeaponSeries.
     */
    data: WeaponSeriesCreateManyInput | WeaponSeriesCreateManyInput[]
  }

  /**
   * WeaponSeries update
   */
  export type WeaponSeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * The data needed to update a WeaponSeries.
     */
    data: XOR<WeaponSeriesUpdateInput, WeaponSeriesUncheckedUpdateInput>
    /**
     * Choose, which WeaponSeries to update.
     */
    where: WeaponSeriesWhereUniqueInput
  }

  /**
   * WeaponSeries updateMany
   */
  export type WeaponSeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeaponSeries.
     */
    data: XOR<WeaponSeriesUpdateManyMutationInput, WeaponSeriesUncheckedUpdateManyInput>
    /**
     * Filter which WeaponSeries to update
     */
    where?: WeaponSeriesWhereInput
  }

  /**
   * WeaponSeries upsert
   */
  export type WeaponSeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * The filter to search for the WeaponSeries to update in case it exists.
     */
    where: WeaponSeriesWhereUniqueInput
    /**
     * In case the WeaponSeries found by the `where` argument doesn't exist, create a new WeaponSeries with this data.
     */
    create: XOR<WeaponSeriesCreateInput, WeaponSeriesUncheckedCreateInput>
    /**
     * In case the WeaponSeries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponSeriesUpdateInput, WeaponSeriesUncheckedUpdateInput>
  }

  /**
   * WeaponSeries delete
   */
  export type WeaponSeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
    /**
     * Filter which WeaponSeries to delete.
     */
    where: WeaponSeriesWhereUniqueInput
  }

  /**
   * WeaponSeries deleteMany
   */
  export type WeaponSeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeaponSeries to delete
     */
    where?: WeaponSeriesWhereInput
  }

  /**
   * WeaponSeries without action
   */
  export type WeaponSeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponSeries
     */
    select?: WeaponSeriesSelect<ExtArgs> | null
  }


  /**
   * Model HuntingHornMelody
   */

  export type AggregateHuntingHornMelody = {
    _count: HuntingHornMelodyCountAggregateOutputType | null
    _avg: HuntingHornMelodyAvgAggregateOutputType | null
    _sum: HuntingHornMelodySumAggregateOutputType | null
    _min: HuntingHornMelodyMinAggregateOutputType | null
    _max: HuntingHornMelodyMaxAggregateOutputType | null
  }

  export type HuntingHornMelodyAvgAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type HuntingHornMelodySumAggregateOutputType = {
    id: number | null
    game_id: number | null
  }

  export type HuntingHornMelodyMinAggregateOutputType = {
    id: number | null
    game_id: number | null
    notes: string | null
    songs: string | null
  }

  export type HuntingHornMelodyMaxAggregateOutputType = {
    id: number | null
    game_id: number | null
    notes: string | null
    songs: string | null
  }

  export type HuntingHornMelodyCountAggregateOutputType = {
    id: number
    game_id: number
    notes: number
    songs: number
    _all: number
  }


  export type HuntingHornMelodyAvgAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type HuntingHornMelodySumAggregateInputType = {
    id?: true
    game_id?: true
  }

  export type HuntingHornMelodyMinAggregateInputType = {
    id?: true
    game_id?: true
    notes?: true
    songs?: true
  }

  export type HuntingHornMelodyMaxAggregateInputType = {
    id?: true
    game_id?: true
    notes?: true
    songs?: true
  }

  export type HuntingHornMelodyCountAggregateInputType = {
    id?: true
    game_id?: true
    notes?: true
    songs?: true
    _all?: true
  }

  export type HuntingHornMelodyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuntingHornMelody to aggregate.
     */
    where?: HuntingHornMelodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornMelodies to fetch.
     */
    orderBy?: HuntingHornMelodyOrderByWithRelationInput | HuntingHornMelodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HuntingHornMelodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornMelodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornMelodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HuntingHornMelodies
    **/
    _count?: true | HuntingHornMelodyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HuntingHornMelodyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HuntingHornMelodySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HuntingHornMelodyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HuntingHornMelodyMaxAggregateInputType
  }

  export type GetHuntingHornMelodyAggregateType<T extends HuntingHornMelodyAggregateArgs> = {
        [P in keyof T & keyof AggregateHuntingHornMelody]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuntingHornMelody[P]>
      : GetScalarType<T[P], AggregateHuntingHornMelody[P]>
  }




  export type HuntingHornMelodyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuntingHornMelodyWhereInput
    orderBy?: HuntingHornMelodyOrderByWithAggregationInput | HuntingHornMelodyOrderByWithAggregationInput[]
    by: HuntingHornMelodyScalarFieldEnum[] | HuntingHornMelodyScalarFieldEnum
    having?: HuntingHornMelodyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HuntingHornMelodyCountAggregateInputType | true
    _avg?: HuntingHornMelodyAvgAggregateInputType
    _sum?: HuntingHornMelodySumAggregateInputType
    _min?: HuntingHornMelodyMinAggregateInputType
    _max?: HuntingHornMelodyMaxAggregateInputType
  }

  export type HuntingHornMelodyGroupByOutputType = {
    id: number
    game_id: number
    notes: string
    songs: string
    _count: HuntingHornMelodyCountAggregateOutputType | null
    _avg: HuntingHornMelodyAvgAggregateOutputType | null
    _sum: HuntingHornMelodySumAggregateOutputType | null
    _min: HuntingHornMelodyMinAggregateOutputType | null
    _max: HuntingHornMelodyMaxAggregateOutputType | null
  }

  type GetHuntingHornMelodyGroupByPayload<T extends HuntingHornMelodyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HuntingHornMelodyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HuntingHornMelodyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HuntingHornMelodyGroupByOutputType[P]>
            : GetScalarType<T[P], HuntingHornMelodyGroupByOutputType[P]>
        }
      >
    >


  export type HuntingHornMelodySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    notes?: boolean
    songs?: boolean
  }, ExtArgs["result"]["huntingHornMelody"]>

  export type HuntingHornMelodySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    notes?: boolean
    songs?: boolean
  }, ExtArgs["result"]["huntingHornMelody"]>

  export type HuntingHornMelodySelectScalar = {
    id?: boolean
    game_id?: boolean
    notes?: boolean
    songs?: boolean
  }


  export type $HuntingHornMelodyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HuntingHornMelody"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: number
      notes: string
      songs: string
    }, ExtArgs["result"]["huntingHornMelody"]>
    composites: {}
  }

  type HuntingHornMelodyGetPayload<S extends boolean | null | undefined | HuntingHornMelodyDefaultArgs> = $Result.GetResult<Prisma.$HuntingHornMelodyPayload, S>

  type HuntingHornMelodyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HuntingHornMelodyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HuntingHornMelodyCountAggregateInputType | true
    }

  export interface HuntingHornMelodyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HuntingHornMelody'], meta: { name: 'HuntingHornMelody' } }
    /**
     * Find zero or one HuntingHornMelody that matches the filter.
     * @param {HuntingHornMelodyFindUniqueArgs} args - Arguments to find a HuntingHornMelody
     * @example
     * // Get one HuntingHornMelody
     * const huntingHornMelody = await prisma.huntingHornMelody.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HuntingHornMelodyFindUniqueArgs>(args: SelectSubset<T, HuntingHornMelodyFindUniqueArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HuntingHornMelody that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HuntingHornMelodyFindUniqueOrThrowArgs} args - Arguments to find a HuntingHornMelody
     * @example
     * // Get one HuntingHornMelody
     * const huntingHornMelody = await prisma.huntingHornMelody.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HuntingHornMelodyFindUniqueOrThrowArgs>(args: SelectSubset<T, HuntingHornMelodyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HuntingHornMelody that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyFindFirstArgs} args - Arguments to find a HuntingHornMelody
     * @example
     * // Get one HuntingHornMelody
     * const huntingHornMelody = await prisma.huntingHornMelody.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HuntingHornMelodyFindFirstArgs>(args?: SelectSubset<T, HuntingHornMelodyFindFirstArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HuntingHornMelody that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyFindFirstOrThrowArgs} args - Arguments to find a HuntingHornMelody
     * @example
     * // Get one HuntingHornMelody
     * const huntingHornMelody = await prisma.huntingHornMelody.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HuntingHornMelodyFindFirstOrThrowArgs>(args?: SelectSubset<T, HuntingHornMelodyFindFirstOrThrowArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HuntingHornMelodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HuntingHornMelodies
     * const huntingHornMelodies = await prisma.huntingHornMelody.findMany()
     * 
     * // Get first 10 HuntingHornMelodies
     * const huntingHornMelodies = await prisma.huntingHornMelody.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const huntingHornMelodyWithIdOnly = await prisma.huntingHornMelody.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HuntingHornMelodyFindManyArgs>(args?: SelectSubset<T, HuntingHornMelodyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HuntingHornMelody.
     * @param {HuntingHornMelodyCreateArgs} args - Arguments to create a HuntingHornMelody.
     * @example
     * // Create one HuntingHornMelody
     * const HuntingHornMelody = await prisma.huntingHornMelody.create({
     *   data: {
     *     // ... data to create a HuntingHornMelody
     *   }
     * })
     * 
     */
    create<T extends HuntingHornMelodyCreateArgs>(args: SelectSubset<T, HuntingHornMelodyCreateArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HuntingHornMelodies.
     * @param {HuntingHornMelodyCreateManyArgs} args - Arguments to create many HuntingHornMelodies.
     * @example
     * // Create many HuntingHornMelodies
     * const huntingHornMelody = await prisma.huntingHornMelody.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HuntingHornMelodyCreateManyArgs>(args?: SelectSubset<T, HuntingHornMelodyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HuntingHornMelodies and returns the data saved in the database.
     * @param {HuntingHornMelodyCreateManyAndReturnArgs} args - Arguments to create many HuntingHornMelodies.
     * @example
     * // Create many HuntingHornMelodies
     * const huntingHornMelody = await prisma.huntingHornMelody.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HuntingHornMelodies and only return the `id`
     * const huntingHornMelodyWithIdOnly = await prisma.huntingHornMelody.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HuntingHornMelodyCreateManyAndReturnArgs>(args?: SelectSubset<T, HuntingHornMelodyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HuntingHornMelody.
     * @param {HuntingHornMelodyDeleteArgs} args - Arguments to delete one HuntingHornMelody.
     * @example
     * // Delete one HuntingHornMelody
     * const HuntingHornMelody = await prisma.huntingHornMelody.delete({
     *   where: {
     *     // ... filter to delete one HuntingHornMelody
     *   }
     * })
     * 
     */
    delete<T extends HuntingHornMelodyDeleteArgs>(args: SelectSubset<T, HuntingHornMelodyDeleteArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HuntingHornMelody.
     * @param {HuntingHornMelodyUpdateArgs} args - Arguments to update one HuntingHornMelody.
     * @example
     * // Update one HuntingHornMelody
     * const huntingHornMelody = await prisma.huntingHornMelody.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HuntingHornMelodyUpdateArgs>(args: SelectSubset<T, HuntingHornMelodyUpdateArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HuntingHornMelodies.
     * @param {HuntingHornMelodyDeleteManyArgs} args - Arguments to filter HuntingHornMelodies to delete.
     * @example
     * // Delete a few HuntingHornMelodies
     * const { count } = await prisma.huntingHornMelody.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HuntingHornMelodyDeleteManyArgs>(args?: SelectSubset<T, HuntingHornMelodyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HuntingHornMelodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HuntingHornMelodies
     * const huntingHornMelody = await prisma.huntingHornMelody.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HuntingHornMelodyUpdateManyArgs>(args: SelectSubset<T, HuntingHornMelodyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HuntingHornMelody.
     * @param {HuntingHornMelodyUpsertArgs} args - Arguments to update or create a HuntingHornMelody.
     * @example
     * // Update or create a HuntingHornMelody
     * const huntingHornMelody = await prisma.huntingHornMelody.upsert({
     *   create: {
     *     // ... data to create a HuntingHornMelody
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HuntingHornMelody we want to update
     *   }
     * })
     */
    upsert<T extends HuntingHornMelodyUpsertArgs>(args: SelectSubset<T, HuntingHornMelodyUpsertArgs<ExtArgs>>): Prisma__HuntingHornMelodyClient<$Result.GetResult<Prisma.$HuntingHornMelodyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HuntingHornMelodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyCountArgs} args - Arguments to filter HuntingHornMelodies to count.
     * @example
     * // Count the number of HuntingHornMelodies
     * const count = await prisma.huntingHornMelody.count({
     *   where: {
     *     // ... the filter for the HuntingHornMelodies we want to count
     *   }
     * })
    **/
    count<T extends HuntingHornMelodyCountArgs>(
      args?: Subset<T, HuntingHornMelodyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HuntingHornMelodyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HuntingHornMelody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HuntingHornMelodyAggregateArgs>(args: Subset<T, HuntingHornMelodyAggregateArgs>): Prisma.PrismaPromise<GetHuntingHornMelodyAggregateType<T>>

    /**
     * Group by HuntingHornMelody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornMelodyGroupByArgs} args - Group by arguments.
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
      T extends HuntingHornMelodyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HuntingHornMelodyGroupByArgs['orderBy'] }
        : { orderBy?: HuntingHornMelodyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HuntingHornMelodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuntingHornMelodyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HuntingHornMelody model
   */
  readonly fields: HuntingHornMelodyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HuntingHornMelody.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HuntingHornMelodyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HuntingHornMelody model
   */ 
  interface HuntingHornMelodyFieldRefs {
    readonly id: FieldRef<"HuntingHornMelody", 'Int'>
    readonly game_id: FieldRef<"HuntingHornMelody", 'Int'>
    readonly notes: FieldRef<"HuntingHornMelody", 'String'>
    readonly songs: FieldRef<"HuntingHornMelody", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HuntingHornMelody findUnique
   */
  export type HuntingHornMelodyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornMelody to fetch.
     */
    where: HuntingHornMelodyWhereUniqueInput
  }

  /**
   * HuntingHornMelody findUniqueOrThrow
   */
  export type HuntingHornMelodyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornMelody to fetch.
     */
    where: HuntingHornMelodyWhereUniqueInput
  }

  /**
   * HuntingHornMelody findFirst
   */
  export type HuntingHornMelodyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornMelody to fetch.
     */
    where?: HuntingHornMelodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornMelodies to fetch.
     */
    orderBy?: HuntingHornMelodyOrderByWithRelationInput | HuntingHornMelodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuntingHornMelodies.
     */
    cursor?: HuntingHornMelodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornMelodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornMelodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuntingHornMelodies.
     */
    distinct?: HuntingHornMelodyScalarFieldEnum | HuntingHornMelodyScalarFieldEnum[]
  }

  /**
   * HuntingHornMelody findFirstOrThrow
   */
  export type HuntingHornMelodyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornMelody to fetch.
     */
    where?: HuntingHornMelodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornMelodies to fetch.
     */
    orderBy?: HuntingHornMelodyOrderByWithRelationInput | HuntingHornMelodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuntingHornMelodies.
     */
    cursor?: HuntingHornMelodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornMelodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornMelodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuntingHornMelodies.
     */
    distinct?: HuntingHornMelodyScalarFieldEnum | HuntingHornMelodyScalarFieldEnum[]
  }

  /**
   * HuntingHornMelody findMany
   */
  export type HuntingHornMelodyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornMelodies to fetch.
     */
    where?: HuntingHornMelodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornMelodies to fetch.
     */
    orderBy?: HuntingHornMelodyOrderByWithRelationInput | HuntingHornMelodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HuntingHornMelodies.
     */
    cursor?: HuntingHornMelodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornMelodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornMelodies.
     */
    skip?: number
    distinct?: HuntingHornMelodyScalarFieldEnum | HuntingHornMelodyScalarFieldEnum[]
  }

  /**
   * HuntingHornMelody create
   */
  export type HuntingHornMelodyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * The data needed to create a HuntingHornMelody.
     */
    data: XOR<HuntingHornMelodyCreateInput, HuntingHornMelodyUncheckedCreateInput>
  }

  /**
   * HuntingHornMelody createMany
   */
  export type HuntingHornMelodyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HuntingHornMelodies.
     */
    data: HuntingHornMelodyCreateManyInput | HuntingHornMelodyCreateManyInput[]
  }

  /**
   * HuntingHornMelody createManyAndReturn
   */
  export type HuntingHornMelodyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HuntingHornMelodies.
     */
    data: HuntingHornMelodyCreateManyInput | HuntingHornMelodyCreateManyInput[]
  }

  /**
   * HuntingHornMelody update
   */
  export type HuntingHornMelodyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * The data needed to update a HuntingHornMelody.
     */
    data: XOR<HuntingHornMelodyUpdateInput, HuntingHornMelodyUncheckedUpdateInput>
    /**
     * Choose, which HuntingHornMelody to update.
     */
    where: HuntingHornMelodyWhereUniqueInput
  }

  /**
   * HuntingHornMelody updateMany
   */
  export type HuntingHornMelodyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HuntingHornMelodies.
     */
    data: XOR<HuntingHornMelodyUpdateManyMutationInput, HuntingHornMelodyUncheckedUpdateManyInput>
    /**
     * Filter which HuntingHornMelodies to update
     */
    where?: HuntingHornMelodyWhereInput
  }

  /**
   * HuntingHornMelody upsert
   */
  export type HuntingHornMelodyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * The filter to search for the HuntingHornMelody to update in case it exists.
     */
    where: HuntingHornMelodyWhereUniqueInput
    /**
     * In case the HuntingHornMelody found by the `where` argument doesn't exist, create a new HuntingHornMelody with this data.
     */
    create: XOR<HuntingHornMelodyCreateInput, HuntingHornMelodyUncheckedCreateInput>
    /**
     * In case the HuntingHornMelody was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HuntingHornMelodyUpdateInput, HuntingHornMelodyUncheckedUpdateInput>
  }

  /**
   * HuntingHornMelody delete
   */
  export type HuntingHornMelodyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
    /**
     * Filter which HuntingHornMelody to delete.
     */
    where: HuntingHornMelodyWhereUniqueInput
  }

  /**
   * HuntingHornMelody deleteMany
   */
  export type HuntingHornMelodyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuntingHornMelodies to delete
     */
    where?: HuntingHornMelodyWhereInput
  }

  /**
   * HuntingHornMelody without action
   */
  export type HuntingHornMelodyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornMelody
     */
    select?: HuntingHornMelodySelect<ExtArgs> | null
  }


  /**
   * Model HuntingHornSong
   */

  export type AggregateHuntingHornSong = {
    _count: HuntingHornSongCountAggregateOutputType | null
    _avg: HuntingHornSongAvgAggregateOutputType | null
    _sum: HuntingHornSongSumAggregateOutputType | null
    _min: HuntingHornSongMinAggregateOutputType | null
    _max: HuntingHornSongMaxAggregateOutputType | null
  }

  export type HuntingHornSongAvgAggregateOutputType = {
    id: number | null
  }

  export type HuntingHornSongSumAggregateOutputType = {
    id: number | null
  }

  export type HuntingHornSongMinAggregateOutputType = {
    id: number | null
    effect_id: string | null
    notes: string | null
    names: string | null
  }

  export type HuntingHornSongMaxAggregateOutputType = {
    id: number | null
    effect_id: string | null
    notes: string | null
    names: string | null
  }

  export type HuntingHornSongCountAggregateOutputType = {
    id: number
    effect_id: number
    notes: number
    names: number
    _all: number
  }


  export type HuntingHornSongAvgAggregateInputType = {
    id?: true
  }

  export type HuntingHornSongSumAggregateInputType = {
    id?: true
  }

  export type HuntingHornSongMinAggregateInputType = {
    id?: true
    effect_id?: true
    notes?: true
    names?: true
  }

  export type HuntingHornSongMaxAggregateInputType = {
    id?: true
    effect_id?: true
    notes?: true
    names?: true
  }

  export type HuntingHornSongCountAggregateInputType = {
    id?: true
    effect_id?: true
    notes?: true
    names?: true
    _all?: true
  }

  export type HuntingHornSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuntingHornSong to aggregate.
     */
    where?: HuntingHornSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornSongs to fetch.
     */
    orderBy?: HuntingHornSongOrderByWithRelationInput | HuntingHornSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HuntingHornSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HuntingHornSongs
    **/
    _count?: true | HuntingHornSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HuntingHornSongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HuntingHornSongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HuntingHornSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HuntingHornSongMaxAggregateInputType
  }

  export type GetHuntingHornSongAggregateType<T extends HuntingHornSongAggregateArgs> = {
        [P in keyof T & keyof AggregateHuntingHornSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuntingHornSong[P]>
      : GetScalarType<T[P], AggregateHuntingHornSong[P]>
  }




  export type HuntingHornSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuntingHornSongWhereInput
    orderBy?: HuntingHornSongOrderByWithAggregationInput | HuntingHornSongOrderByWithAggregationInput[]
    by: HuntingHornSongScalarFieldEnum[] | HuntingHornSongScalarFieldEnum
    having?: HuntingHornSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HuntingHornSongCountAggregateInputType | true
    _avg?: HuntingHornSongAvgAggregateInputType
    _sum?: HuntingHornSongSumAggregateInputType
    _min?: HuntingHornSongMinAggregateInputType
    _max?: HuntingHornSongMaxAggregateInputType
  }

  export type HuntingHornSongGroupByOutputType = {
    id: number
    effect_id: string
    notes: string
    names: string
    _count: HuntingHornSongCountAggregateOutputType | null
    _avg: HuntingHornSongAvgAggregateOutputType | null
    _sum: HuntingHornSongSumAggregateOutputType | null
    _min: HuntingHornSongMinAggregateOutputType | null
    _max: HuntingHornSongMaxAggregateOutputType | null
  }

  type GetHuntingHornSongGroupByPayload<T extends HuntingHornSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HuntingHornSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HuntingHornSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HuntingHornSongGroupByOutputType[P]>
            : GetScalarType<T[P], HuntingHornSongGroupByOutputType[P]>
        }
      >
    >


  export type HuntingHornSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effect_id?: boolean
    notes?: boolean
    names?: boolean
  }, ExtArgs["result"]["huntingHornSong"]>

  export type HuntingHornSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effect_id?: boolean
    notes?: boolean
    names?: boolean
  }, ExtArgs["result"]["huntingHornSong"]>

  export type HuntingHornSongSelectScalar = {
    id?: boolean
    effect_id?: boolean
    notes?: boolean
    names?: boolean
  }


  export type $HuntingHornSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HuntingHornSong"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      effect_id: string
      notes: string
      names: string
    }, ExtArgs["result"]["huntingHornSong"]>
    composites: {}
  }

  type HuntingHornSongGetPayload<S extends boolean | null | undefined | HuntingHornSongDefaultArgs> = $Result.GetResult<Prisma.$HuntingHornSongPayload, S>

  type HuntingHornSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HuntingHornSongFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HuntingHornSongCountAggregateInputType | true
    }

  export interface HuntingHornSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HuntingHornSong'], meta: { name: 'HuntingHornSong' } }
    /**
     * Find zero or one HuntingHornSong that matches the filter.
     * @param {HuntingHornSongFindUniqueArgs} args - Arguments to find a HuntingHornSong
     * @example
     * // Get one HuntingHornSong
     * const huntingHornSong = await prisma.huntingHornSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HuntingHornSongFindUniqueArgs>(args: SelectSubset<T, HuntingHornSongFindUniqueArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HuntingHornSong that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HuntingHornSongFindUniqueOrThrowArgs} args - Arguments to find a HuntingHornSong
     * @example
     * // Get one HuntingHornSong
     * const huntingHornSong = await prisma.huntingHornSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HuntingHornSongFindUniqueOrThrowArgs>(args: SelectSubset<T, HuntingHornSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HuntingHornSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongFindFirstArgs} args - Arguments to find a HuntingHornSong
     * @example
     * // Get one HuntingHornSong
     * const huntingHornSong = await prisma.huntingHornSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HuntingHornSongFindFirstArgs>(args?: SelectSubset<T, HuntingHornSongFindFirstArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HuntingHornSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongFindFirstOrThrowArgs} args - Arguments to find a HuntingHornSong
     * @example
     * // Get one HuntingHornSong
     * const huntingHornSong = await prisma.huntingHornSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HuntingHornSongFindFirstOrThrowArgs>(args?: SelectSubset<T, HuntingHornSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HuntingHornSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HuntingHornSongs
     * const huntingHornSongs = await prisma.huntingHornSong.findMany()
     * 
     * // Get first 10 HuntingHornSongs
     * const huntingHornSongs = await prisma.huntingHornSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const huntingHornSongWithIdOnly = await prisma.huntingHornSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HuntingHornSongFindManyArgs>(args?: SelectSubset<T, HuntingHornSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HuntingHornSong.
     * @param {HuntingHornSongCreateArgs} args - Arguments to create a HuntingHornSong.
     * @example
     * // Create one HuntingHornSong
     * const HuntingHornSong = await prisma.huntingHornSong.create({
     *   data: {
     *     // ... data to create a HuntingHornSong
     *   }
     * })
     * 
     */
    create<T extends HuntingHornSongCreateArgs>(args: SelectSubset<T, HuntingHornSongCreateArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HuntingHornSongs.
     * @param {HuntingHornSongCreateManyArgs} args - Arguments to create many HuntingHornSongs.
     * @example
     * // Create many HuntingHornSongs
     * const huntingHornSong = await prisma.huntingHornSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HuntingHornSongCreateManyArgs>(args?: SelectSubset<T, HuntingHornSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HuntingHornSongs and returns the data saved in the database.
     * @param {HuntingHornSongCreateManyAndReturnArgs} args - Arguments to create many HuntingHornSongs.
     * @example
     * // Create many HuntingHornSongs
     * const huntingHornSong = await prisma.huntingHornSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HuntingHornSongs and only return the `id`
     * const huntingHornSongWithIdOnly = await prisma.huntingHornSong.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HuntingHornSongCreateManyAndReturnArgs>(args?: SelectSubset<T, HuntingHornSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HuntingHornSong.
     * @param {HuntingHornSongDeleteArgs} args - Arguments to delete one HuntingHornSong.
     * @example
     * // Delete one HuntingHornSong
     * const HuntingHornSong = await prisma.huntingHornSong.delete({
     *   where: {
     *     // ... filter to delete one HuntingHornSong
     *   }
     * })
     * 
     */
    delete<T extends HuntingHornSongDeleteArgs>(args: SelectSubset<T, HuntingHornSongDeleteArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HuntingHornSong.
     * @param {HuntingHornSongUpdateArgs} args - Arguments to update one HuntingHornSong.
     * @example
     * // Update one HuntingHornSong
     * const huntingHornSong = await prisma.huntingHornSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HuntingHornSongUpdateArgs>(args: SelectSubset<T, HuntingHornSongUpdateArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HuntingHornSongs.
     * @param {HuntingHornSongDeleteManyArgs} args - Arguments to filter HuntingHornSongs to delete.
     * @example
     * // Delete a few HuntingHornSongs
     * const { count } = await prisma.huntingHornSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HuntingHornSongDeleteManyArgs>(args?: SelectSubset<T, HuntingHornSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HuntingHornSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HuntingHornSongs
     * const huntingHornSong = await prisma.huntingHornSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HuntingHornSongUpdateManyArgs>(args: SelectSubset<T, HuntingHornSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HuntingHornSong.
     * @param {HuntingHornSongUpsertArgs} args - Arguments to update or create a HuntingHornSong.
     * @example
     * // Update or create a HuntingHornSong
     * const huntingHornSong = await prisma.huntingHornSong.upsert({
     *   create: {
     *     // ... data to create a HuntingHornSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HuntingHornSong we want to update
     *   }
     * })
     */
    upsert<T extends HuntingHornSongUpsertArgs>(args: SelectSubset<T, HuntingHornSongUpsertArgs<ExtArgs>>): Prisma__HuntingHornSongClient<$Result.GetResult<Prisma.$HuntingHornSongPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HuntingHornSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongCountArgs} args - Arguments to filter HuntingHornSongs to count.
     * @example
     * // Count the number of HuntingHornSongs
     * const count = await prisma.huntingHornSong.count({
     *   where: {
     *     // ... the filter for the HuntingHornSongs we want to count
     *   }
     * })
    **/
    count<T extends HuntingHornSongCountArgs>(
      args?: Subset<T, HuntingHornSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HuntingHornSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HuntingHornSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HuntingHornSongAggregateArgs>(args: Subset<T, HuntingHornSongAggregateArgs>): Prisma.PrismaPromise<GetHuntingHornSongAggregateType<T>>

    /**
     * Group by HuntingHornSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingHornSongGroupByArgs} args - Group by arguments.
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
      T extends HuntingHornSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HuntingHornSongGroupByArgs['orderBy'] }
        : { orderBy?: HuntingHornSongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HuntingHornSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuntingHornSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HuntingHornSong model
   */
  readonly fields: HuntingHornSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HuntingHornSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HuntingHornSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HuntingHornSong model
   */ 
  interface HuntingHornSongFieldRefs {
    readonly id: FieldRef<"HuntingHornSong", 'Int'>
    readonly effect_id: FieldRef<"HuntingHornSong", 'String'>
    readonly notes: FieldRef<"HuntingHornSong", 'String'>
    readonly names: FieldRef<"HuntingHornSong", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HuntingHornSong findUnique
   */
  export type HuntingHornSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornSong to fetch.
     */
    where: HuntingHornSongWhereUniqueInput
  }

  /**
   * HuntingHornSong findUniqueOrThrow
   */
  export type HuntingHornSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornSong to fetch.
     */
    where: HuntingHornSongWhereUniqueInput
  }

  /**
   * HuntingHornSong findFirst
   */
  export type HuntingHornSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornSong to fetch.
     */
    where?: HuntingHornSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornSongs to fetch.
     */
    orderBy?: HuntingHornSongOrderByWithRelationInput | HuntingHornSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuntingHornSongs.
     */
    cursor?: HuntingHornSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuntingHornSongs.
     */
    distinct?: HuntingHornSongScalarFieldEnum | HuntingHornSongScalarFieldEnum[]
  }

  /**
   * HuntingHornSong findFirstOrThrow
   */
  export type HuntingHornSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornSong to fetch.
     */
    where?: HuntingHornSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornSongs to fetch.
     */
    orderBy?: HuntingHornSongOrderByWithRelationInput | HuntingHornSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuntingHornSongs.
     */
    cursor?: HuntingHornSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuntingHornSongs.
     */
    distinct?: HuntingHornSongScalarFieldEnum | HuntingHornSongScalarFieldEnum[]
  }

  /**
   * HuntingHornSong findMany
   */
  export type HuntingHornSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * Filter, which HuntingHornSongs to fetch.
     */
    where?: HuntingHornSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingHornSongs to fetch.
     */
    orderBy?: HuntingHornSongOrderByWithRelationInput | HuntingHornSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HuntingHornSongs.
     */
    cursor?: HuntingHornSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingHornSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingHornSongs.
     */
    skip?: number
    distinct?: HuntingHornSongScalarFieldEnum | HuntingHornSongScalarFieldEnum[]
  }

  /**
   * HuntingHornSong create
   */
  export type HuntingHornSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * The data needed to create a HuntingHornSong.
     */
    data: XOR<HuntingHornSongCreateInput, HuntingHornSongUncheckedCreateInput>
  }

  /**
   * HuntingHornSong createMany
   */
  export type HuntingHornSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HuntingHornSongs.
     */
    data: HuntingHornSongCreateManyInput | HuntingHornSongCreateManyInput[]
  }

  /**
   * HuntingHornSong createManyAndReturn
   */
  export type HuntingHornSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HuntingHornSongs.
     */
    data: HuntingHornSongCreateManyInput | HuntingHornSongCreateManyInput[]
  }

  /**
   * HuntingHornSong update
   */
  export type HuntingHornSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * The data needed to update a HuntingHornSong.
     */
    data: XOR<HuntingHornSongUpdateInput, HuntingHornSongUncheckedUpdateInput>
    /**
     * Choose, which HuntingHornSong to update.
     */
    where: HuntingHornSongWhereUniqueInput
  }

  /**
   * HuntingHornSong updateMany
   */
  export type HuntingHornSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HuntingHornSongs.
     */
    data: XOR<HuntingHornSongUpdateManyMutationInput, HuntingHornSongUncheckedUpdateManyInput>
    /**
     * Filter which HuntingHornSongs to update
     */
    where?: HuntingHornSongWhereInput
  }

  /**
   * HuntingHornSong upsert
   */
  export type HuntingHornSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * The filter to search for the HuntingHornSong to update in case it exists.
     */
    where: HuntingHornSongWhereUniqueInput
    /**
     * In case the HuntingHornSong found by the `where` argument doesn't exist, create a new HuntingHornSong with this data.
     */
    create: XOR<HuntingHornSongCreateInput, HuntingHornSongUncheckedCreateInput>
    /**
     * In case the HuntingHornSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HuntingHornSongUpdateInput, HuntingHornSongUncheckedUpdateInput>
  }

  /**
   * HuntingHornSong delete
   */
  export type HuntingHornSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
    /**
     * Filter which HuntingHornSong to delete.
     */
    where: HuntingHornSongWhereUniqueInput
  }

  /**
   * HuntingHornSong deleteMany
   */
  export type HuntingHornSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuntingHornSongs to delete
     */
    where?: HuntingHornSongWhereInput
  }

  /**
   * HuntingHornSong without action
   */
  export type HuntingHornSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingHornSong
     */
    select?: HuntingHornSongSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    descriptions: 'descriptions',
    kind: 'kind',
    rarity: 'rarity',
    max_count: 'max_count',
    sell_price: 'sell_price',
    buy_price: 'buy_price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    descriptions: 'descriptions',
    ranks: 'ranks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    descriptions: 'descriptions',
    features: 'features',
    species: 'species',
    parts: 'parts',
    rewards: 'rewards',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


  export const WeaponScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    kind: 'kind',
    names: 'names',
    descriptions: 'descriptions',
    rarity: 'rarity',
    attack_raw: 'attack_raw',
    affinity: 'affinity',
    defense: 'defense',
    slots: 'slots',
    sharpness: 'sharpness',
    handicraft: 'handicraft',
    element_type: 'element_type',
    element_damage: 'element_damage',
    element_hidden: 'element_hidden',
    ammo: 'ammo',
    coatings: 'coatings',
    charge_levels: 'charge_levels',
    melodies: 'melodies',
    songs: 'songs',
    kinsect_bonus: 'kinsect_bonus',
    crafting_cost: 'crafting_cost',
    upgrade_cost: 'upgrade_cost',
    materials: 'materials',
    series_id: 'series_id',
    previous_id: 'previous_id',
    next_weapons: 'next_weapons',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeaponScalarFieldEnum = (typeof WeaponScalarFieldEnum)[keyof typeof WeaponScalarFieldEnum]


  export const ArmorSetScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    rarity: 'rarity',
    set_bonus: 'set_bonus',
    group_bonus: 'group_bonus',
    pieces: 'pieces',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArmorSetScalarFieldEnum = (typeof ArmorSetScalarFieldEnum)[keyof typeof ArmorSetScalarFieldEnum]


  export const AmuletScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    ranks: 'ranks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AmuletScalarFieldEnum = (typeof AmuletScalarFieldEnum)[keyof typeof AmuletScalarFieldEnum]


  export const AccessoryScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    descriptions: 'descriptions',
    rarity: 'rarity',
    price: 'price',
    level: 'level',
    skills: 'skills',
    allowed_on: 'allowed_on',
    icon_color: 'icon_color',
    icon_color_id: 'icon_color_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessoryScalarFieldEnum = (typeof AccessoryScalarFieldEnum)[keyof typeof AccessoryScalarFieldEnum]


  export const CharmScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharmScalarFieldEnum = (typeof CharmScalarFieldEnum)[keyof typeof CharmScalarFieldEnum]


  export const ArmorUpgradeScalarFieldEnum: {
    id: 'id',
    rarity: 'rarity',
    steps: 'steps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArmorUpgradeScalarFieldEnum = (typeof ArmorUpgradeScalarFieldEnum)[keyof typeof ArmorUpgradeScalarFieldEnum]


  export const SpeciesScalarFieldEnum: {
    id: 'id',
    kind: 'kind',
    names: 'names',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpeciesScalarFieldEnum = (typeof SpeciesScalarFieldEnum)[keyof typeof SpeciesScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    areas: 'areas',
    camps: 'camps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const PartNameScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartNameScalarFieldEnum = (typeof PartNameScalarFieldEnum)[keyof typeof PartNameScalarFieldEnum]


  export const WeaponSeriesScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    names: 'names',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeaponSeriesScalarFieldEnum = (typeof WeaponSeriesScalarFieldEnum)[keyof typeof WeaponSeriesScalarFieldEnum]


  export const HuntingHornMelodyScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    notes: 'notes',
    songs: 'songs'
  };

  export type HuntingHornMelodyScalarFieldEnum = (typeof HuntingHornMelodyScalarFieldEnum)[keyof typeof HuntingHornMelodyScalarFieldEnum]


  export const HuntingHornSongScalarFieldEnum: {
    id: 'id',
    effect_id: 'effect_id',
    notes: 'notes',
    names: 'names'
  };

  export type HuntingHornSongScalarFieldEnum = (typeof HuntingHornSongScalarFieldEnum)[keyof typeof HuntingHornSongScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    game_id?: BigIntFilter<"Item"> | bigint | number
    names?: StringFilter<"Item"> | string
    descriptions?: StringNullableFilter<"Item"> | string | null
    kind?: StringNullableFilter<"Item"> | string | null
    rarity?: IntFilter<"Item"> | number
    max_count?: IntFilter<"Item"> | number
    sell_price?: IntFilter<"Item"> | number
    buy_price?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    kind?: SortOrderInput | SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    names?: StringFilter<"Item"> | string
    descriptions?: StringNullableFilter<"Item"> | string | null
    kind?: StringNullableFilter<"Item"> | string | null
    rarity?: IntFilter<"Item"> | number
    max_count?: IntFilter<"Item"> | number
    sell_price?: IntFilter<"Item"> | number
    buy_price?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }, "id" | "game_id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    kind?: SortOrderInput | SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
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
    game_id?: BigIntWithAggregatesFilter<"Item"> | bigint | number
    names?: StringWithAggregatesFilter<"Item"> | string
    descriptions?: StringNullableWithAggregatesFilter<"Item"> | string | null
    kind?: StringNullableWithAggregatesFilter<"Item"> | string | null
    rarity?: IntWithAggregatesFilter<"Item"> | number
    max_count?: IntWithAggregatesFilter<"Item"> | number
    sell_price?: IntWithAggregatesFilter<"Item"> | number
    buy_price?: IntWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    game_id?: BigIntFilter<"Skill"> | bigint | number
    names?: StringFilter<"Skill"> | string
    descriptions?: StringNullableFilter<"Skill"> | string | null
    ranks?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    names?: StringFilter<"Skill"> | string
    descriptions?: StringNullableFilter<"Skill"> | string | null
    ranks?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }, "id" | "game_id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    game_id?: BigIntWithAggregatesFilter<"Skill"> | bigint | number
    names?: StringWithAggregatesFilter<"Skill"> | string
    descriptions?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    ranks?: StringWithAggregatesFilter<"Skill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type MonsterWhereInput = {
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    id?: IntFilter<"Monster"> | number
    game_id?: BigIntFilter<"Monster"> | bigint | number
    names?: StringFilter<"Monster"> | string
    descriptions?: StringNullableFilter<"Monster"> | string | null
    features?: StringNullableFilter<"Monster"> | string | null
    species?: StringNullableFilter<"Monster"> | string | null
    parts?: StringNullableFilter<"Monster"> | string | null
    rewards?: StringNullableFilter<"Monster"> | string | null
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
  }

  export type MonsterOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    species?: SortOrderInput | SortOrder
    parts?: SortOrderInput | SortOrder
    rewards?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    names?: StringFilter<"Monster"> | string
    descriptions?: StringNullableFilter<"Monster"> | string | null
    features?: StringNullableFilter<"Monster"> | string | null
    species?: StringNullableFilter<"Monster"> | string | null
    parts?: StringNullableFilter<"Monster"> | string | null
    rewards?: StringNullableFilter<"Monster"> | string | null
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
  }, "id" | "game_id">

  export type MonsterOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    species?: SortOrderInput | SortOrder
    parts?: SortOrderInput | SortOrder
    rewards?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    game_id?: BigIntWithAggregatesFilter<"Monster"> | bigint | number
    names?: StringWithAggregatesFilter<"Monster"> | string
    descriptions?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    features?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    species?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    parts?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    rewards?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
  }

  export type WeaponWhereInput = {
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    id?: IntFilter<"Weapon"> | number
    game_id?: BigIntFilter<"Weapon"> | bigint | number
    kind?: StringFilter<"Weapon"> | string
    names?: StringFilter<"Weapon"> | string
    descriptions?: StringNullableFilter<"Weapon"> | string | null
    rarity?: IntNullableFilter<"Weapon"> | number | null
    attack_raw?: IntNullableFilter<"Weapon"> | number | null
    affinity?: IntNullableFilter<"Weapon"> | number | null
    defense?: IntNullableFilter<"Weapon"> | number | null
    slots?: StringNullableFilter<"Weapon"> | string | null
    sharpness?: StringNullableFilter<"Weapon"> | string | null
    handicraft?: StringNullableFilter<"Weapon"> | string | null
    element_type?: StringNullableFilter<"Weapon"> | string | null
    element_damage?: IntNullableFilter<"Weapon"> | number | null
    element_hidden?: BoolFilter<"Weapon"> | boolean
    ammo?: StringNullableFilter<"Weapon"> | string | null
    coatings?: StringNullableFilter<"Weapon"> | string | null
    charge_levels?: StringNullableFilter<"Weapon"> | string | null
    melodies?: StringNullableFilter<"Weapon"> | string | null
    songs?: StringNullableFilter<"Weapon"> | string | null
    kinsect_bonus?: StringNullableFilter<"Weapon"> | string | null
    crafting_cost?: IntNullableFilter<"Weapon"> | number | null
    upgrade_cost?: IntNullableFilter<"Weapon"> | number | null
    materials?: StringNullableFilter<"Weapon"> | string | null
    series_id?: BigIntNullableFilter<"Weapon"> | bigint | number | null
    previous_id?: BigIntNullableFilter<"Weapon"> | bigint | number | null
    next_weapons?: StringNullableFilter<"Weapon"> | string | null
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
  }

  export type WeaponOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    attack_raw?: SortOrderInput | SortOrder
    affinity?: SortOrderInput | SortOrder
    defense?: SortOrderInput | SortOrder
    slots?: SortOrderInput | SortOrder
    sharpness?: SortOrderInput | SortOrder
    handicraft?: SortOrderInput | SortOrder
    element_type?: SortOrderInput | SortOrder
    element_damage?: SortOrderInput | SortOrder
    element_hidden?: SortOrder
    ammo?: SortOrderInput | SortOrder
    coatings?: SortOrderInput | SortOrder
    charge_levels?: SortOrderInput | SortOrder
    melodies?: SortOrderInput | SortOrder
    songs?: SortOrderInput | SortOrder
    kinsect_bonus?: SortOrderInput | SortOrder
    crafting_cost?: SortOrderInput | SortOrder
    upgrade_cost?: SortOrderInput | SortOrder
    materials?: SortOrderInput | SortOrder
    series_id?: SortOrderInput | SortOrder
    previous_id?: SortOrderInput | SortOrder
    next_weapons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    kind?: StringFilter<"Weapon"> | string
    names?: StringFilter<"Weapon"> | string
    descriptions?: StringNullableFilter<"Weapon"> | string | null
    rarity?: IntNullableFilter<"Weapon"> | number | null
    attack_raw?: IntNullableFilter<"Weapon"> | number | null
    affinity?: IntNullableFilter<"Weapon"> | number | null
    defense?: IntNullableFilter<"Weapon"> | number | null
    slots?: StringNullableFilter<"Weapon"> | string | null
    sharpness?: StringNullableFilter<"Weapon"> | string | null
    handicraft?: StringNullableFilter<"Weapon"> | string | null
    element_type?: StringNullableFilter<"Weapon"> | string | null
    element_damage?: IntNullableFilter<"Weapon"> | number | null
    element_hidden?: BoolFilter<"Weapon"> | boolean
    ammo?: StringNullableFilter<"Weapon"> | string | null
    coatings?: StringNullableFilter<"Weapon"> | string | null
    charge_levels?: StringNullableFilter<"Weapon"> | string | null
    melodies?: StringNullableFilter<"Weapon"> | string | null
    songs?: StringNullableFilter<"Weapon"> | string | null
    kinsect_bonus?: StringNullableFilter<"Weapon"> | string | null
    crafting_cost?: IntNullableFilter<"Weapon"> | number | null
    upgrade_cost?: IntNullableFilter<"Weapon"> | number | null
    materials?: StringNullableFilter<"Weapon"> | string | null
    series_id?: BigIntNullableFilter<"Weapon"> | bigint | number | null
    previous_id?: BigIntNullableFilter<"Weapon"> | bigint | number | null
    next_weapons?: StringNullableFilter<"Weapon"> | string | null
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
  }, "id" | "game_id">

  export type WeaponOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    attack_raw?: SortOrderInput | SortOrder
    affinity?: SortOrderInput | SortOrder
    defense?: SortOrderInput | SortOrder
    slots?: SortOrderInput | SortOrder
    sharpness?: SortOrderInput | SortOrder
    handicraft?: SortOrderInput | SortOrder
    element_type?: SortOrderInput | SortOrder
    element_damage?: SortOrderInput | SortOrder
    element_hidden?: SortOrder
    ammo?: SortOrderInput | SortOrder
    coatings?: SortOrderInput | SortOrder
    charge_levels?: SortOrderInput | SortOrder
    melodies?: SortOrderInput | SortOrder
    songs?: SortOrderInput | SortOrder
    kinsect_bonus?: SortOrderInput | SortOrder
    crafting_cost?: SortOrderInput | SortOrder
    upgrade_cost?: SortOrderInput | SortOrder
    materials?: SortOrderInput | SortOrder
    series_id?: SortOrderInput | SortOrder
    previous_id?: SortOrderInput | SortOrder
    next_weapons?: SortOrderInput | SortOrder
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
    game_id?: BigIntWithAggregatesFilter<"Weapon"> | bigint | number
    kind?: StringWithAggregatesFilter<"Weapon"> | string
    names?: StringWithAggregatesFilter<"Weapon"> | string
    descriptions?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    rarity?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    attack_raw?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    affinity?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    defense?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    slots?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    sharpness?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    handicraft?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    element_type?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    element_damage?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    element_hidden?: BoolWithAggregatesFilter<"Weapon"> | boolean
    ammo?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    coatings?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    charge_levels?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    melodies?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    songs?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    kinsect_bonus?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    crafting_cost?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    upgrade_cost?: IntNullableWithAggregatesFilter<"Weapon"> | number | null
    materials?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    series_id?: BigIntNullableWithAggregatesFilter<"Weapon"> | bigint | number | null
    previous_id?: BigIntNullableWithAggregatesFilter<"Weapon"> | bigint | number | null
    next_weapons?: StringNullableWithAggregatesFilter<"Weapon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Weapon"> | Date | string
  }

  export type ArmorSetWhereInput = {
    AND?: ArmorSetWhereInput | ArmorSetWhereInput[]
    OR?: ArmorSetWhereInput[]
    NOT?: ArmorSetWhereInput | ArmorSetWhereInput[]
    id?: IntFilter<"ArmorSet"> | number
    game_id?: BigIntFilter<"ArmorSet"> | bigint | number
    names?: StringFilter<"ArmorSet"> | string
    rarity?: IntFilter<"ArmorSet"> | number
    set_bonus?: StringNullableFilter<"ArmorSet"> | string | null
    group_bonus?: StringNullableFilter<"ArmorSet"> | string | null
    pieces?: StringFilter<"ArmorSet"> | string
    createdAt?: DateTimeFilter<"ArmorSet"> | Date | string
    updatedAt?: DateTimeFilter<"ArmorSet"> | Date | string
  }

  export type ArmorSetOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    rarity?: SortOrder
    set_bonus?: SortOrderInput | SortOrder
    group_bonus?: SortOrderInput | SortOrder
    pieces?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorSetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: ArmorSetWhereInput | ArmorSetWhereInput[]
    OR?: ArmorSetWhereInput[]
    NOT?: ArmorSetWhereInput | ArmorSetWhereInput[]
    names?: StringFilter<"ArmorSet"> | string
    rarity?: IntFilter<"ArmorSet"> | number
    set_bonus?: StringNullableFilter<"ArmorSet"> | string | null
    group_bonus?: StringNullableFilter<"ArmorSet"> | string | null
    pieces?: StringFilter<"ArmorSet"> | string
    createdAt?: DateTimeFilter<"ArmorSet"> | Date | string
    updatedAt?: DateTimeFilter<"ArmorSet"> | Date | string
  }, "id" | "game_id">

  export type ArmorSetOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    rarity?: SortOrder
    set_bonus?: SortOrderInput | SortOrder
    group_bonus?: SortOrderInput | SortOrder
    pieces?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArmorSetCountOrderByAggregateInput
    _avg?: ArmorSetAvgOrderByAggregateInput
    _max?: ArmorSetMaxOrderByAggregateInput
    _min?: ArmorSetMinOrderByAggregateInput
    _sum?: ArmorSetSumOrderByAggregateInput
  }

  export type ArmorSetScalarWhereWithAggregatesInput = {
    AND?: ArmorSetScalarWhereWithAggregatesInput | ArmorSetScalarWhereWithAggregatesInput[]
    OR?: ArmorSetScalarWhereWithAggregatesInput[]
    NOT?: ArmorSetScalarWhereWithAggregatesInput | ArmorSetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArmorSet"> | number
    game_id?: BigIntWithAggregatesFilter<"ArmorSet"> | bigint | number
    names?: StringWithAggregatesFilter<"ArmorSet"> | string
    rarity?: IntWithAggregatesFilter<"ArmorSet"> | number
    set_bonus?: StringNullableWithAggregatesFilter<"ArmorSet"> | string | null
    group_bonus?: StringNullableWithAggregatesFilter<"ArmorSet"> | string | null
    pieces?: StringWithAggregatesFilter<"ArmorSet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArmorSet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArmorSet"> | Date | string
  }

  export type AmuletWhereInput = {
    AND?: AmuletWhereInput | AmuletWhereInput[]
    OR?: AmuletWhereInput[]
    NOT?: AmuletWhereInput | AmuletWhereInput[]
    id?: IntFilter<"Amulet"> | number
    game_id?: BigIntFilter<"Amulet"> | bigint | number
    ranks?: StringFilter<"Amulet"> | string
    createdAt?: DateTimeFilter<"Amulet"> | Date | string
    updatedAt?: DateTimeFilter<"Amulet"> | Date | string
  }

  export type AmuletOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmuletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: AmuletWhereInput | AmuletWhereInput[]
    OR?: AmuletWhereInput[]
    NOT?: AmuletWhereInput | AmuletWhereInput[]
    ranks?: StringFilter<"Amulet"> | string
    createdAt?: DateTimeFilter<"Amulet"> | Date | string
    updatedAt?: DateTimeFilter<"Amulet"> | Date | string
  }, "id" | "game_id">

  export type AmuletOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AmuletCountOrderByAggregateInput
    _avg?: AmuletAvgOrderByAggregateInput
    _max?: AmuletMaxOrderByAggregateInput
    _min?: AmuletMinOrderByAggregateInput
    _sum?: AmuletSumOrderByAggregateInput
  }

  export type AmuletScalarWhereWithAggregatesInput = {
    AND?: AmuletScalarWhereWithAggregatesInput | AmuletScalarWhereWithAggregatesInput[]
    OR?: AmuletScalarWhereWithAggregatesInput[]
    NOT?: AmuletScalarWhereWithAggregatesInput | AmuletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amulet"> | number
    game_id?: BigIntWithAggregatesFilter<"Amulet"> | bigint | number
    ranks?: StringWithAggregatesFilter<"Amulet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Amulet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Amulet"> | Date | string
  }

  export type AccessoryWhereInput = {
    AND?: AccessoryWhereInput | AccessoryWhereInput[]
    OR?: AccessoryWhereInput[]
    NOT?: AccessoryWhereInput | AccessoryWhereInput[]
    id?: IntFilter<"Accessory"> | number
    game_id?: BigIntFilter<"Accessory"> | bigint | number
    names?: StringFilter<"Accessory"> | string
    descriptions?: StringNullableFilter<"Accessory"> | string | null
    rarity?: IntFilter<"Accessory"> | number
    price?: IntFilter<"Accessory"> | number
    level?: IntFilter<"Accessory"> | number
    skills?: StringFilter<"Accessory"> | string
    allowed_on?: StringFilter<"Accessory"> | string
    icon_color?: StringNullableFilter<"Accessory"> | string | null
    icon_color_id?: StringNullableFilter<"Accessory"> | string | null
    createdAt?: DateTimeFilter<"Accessory"> | Date | string
    updatedAt?: DateTimeFilter<"Accessory"> | Date | string
  }

  export type AccessoryOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
    skills?: SortOrder
    allowed_on?: SortOrder
    icon_color?: SortOrderInput | SortOrder
    icon_color_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: AccessoryWhereInput | AccessoryWhereInput[]
    OR?: AccessoryWhereInput[]
    NOT?: AccessoryWhereInput | AccessoryWhereInput[]
    names?: StringFilter<"Accessory"> | string
    descriptions?: StringNullableFilter<"Accessory"> | string | null
    rarity?: IntFilter<"Accessory"> | number
    price?: IntFilter<"Accessory"> | number
    level?: IntFilter<"Accessory"> | number
    skills?: StringFilter<"Accessory"> | string
    allowed_on?: StringFilter<"Accessory"> | string
    icon_color?: StringNullableFilter<"Accessory"> | string | null
    icon_color_id?: StringNullableFilter<"Accessory"> | string | null
    createdAt?: DateTimeFilter<"Accessory"> | Date | string
    updatedAt?: DateTimeFilter<"Accessory"> | Date | string
  }, "id" | "game_id">

  export type AccessoryOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrderInput | SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
    skills?: SortOrder
    allowed_on?: SortOrder
    icon_color?: SortOrderInput | SortOrder
    icon_color_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessoryCountOrderByAggregateInput
    _avg?: AccessoryAvgOrderByAggregateInput
    _max?: AccessoryMaxOrderByAggregateInput
    _min?: AccessoryMinOrderByAggregateInput
    _sum?: AccessorySumOrderByAggregateInput
  }

  export type AccessoryScalarWhereWithAggregatesInput = {
    AND?: AccessoryScalarWhereWithAggregatesInput | AccessoryScalarWhereWithAggregatesInput[]
    OR?: AccessoryScalarWhereWithAggregatesInput[]
    NOT?: AccessoryScalarWhereWithAggregatesInput | AccessoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Accessory"> | number
    game_id?: BigIntWithAggregatesFilter<"Accessory"> | bigint | number
    names?: StringWithAggregatesFilter<"Accessory"> | string
    descriptions?: StringNullableWithAggregatesFilter<"Accessory"> | string | null
    rarity?: IntWithAggregatesFilter<"Accessory"> | number
    price?: IntWithAggregatesFilter<"Accessory"> | number
    level?: IntWithAggregatesFilter<"Accessory"> | number
    skills?: StringWithAggregatesFilter<"Accessory"> | string
    allowed_on?: StringWithAggregatesFilter<"Accessory"> | string
    icon_color?: StringNullableWithAggregatesFilter<"Accessory"> | string | null
    icon_color_id?: StringNullableWithAggregatesFilter<"Accessory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Accessory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Accessory"> | Date | string
  }

  export type CharmWhereInput = {
    AND?: CharmWhereInput | CharmWhereInput[]
    OR?: CharmWhereInput[]
    NOT?: CharmWhereInput | CharmWhereInput[]
    id?: IntFilter<"Charm"> | number
    game_id?: BigIntFilter<"Charm"> | bigint | number
    names?: StringFilter<"Charm"> | string
    createdAt?: DateTimeFilter<"Charm"> | Date | string
    updatedAt?: DateTimeFilter<"Charm"> | Date | string
  }

  export type CharmOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: CharmWhereInput | CharmWhereInput[]
    OR?: CharmWhereInput[]
    NOT?: CharmWhereInput | CharmWhereInput[]
    names?: StringFilter<"Charm"> | string
    createdAt?: DateTimeFilter<"Charm"> | Date | string
    updatedAt?: DateTimeFilter<"Charm"> | Date | string
  }, "id" | "game_id">

  export type CharmOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharmCountOrderByAggregateInput
    _avg?: CharmAvgOrderByAggregateInput
    _max?: CharmMaxOrderByAggregateInput
    _min?: CharmMinOrderByAggregateInput
    _sum?: CharmSumOrderByAggregateInput
  }

  export type CharmScalarWhereWithAggregatesInput = {
    AND?: CharmScalarWhereWithAggregatesInput | CharmScalarWhereWithAggregatesInput[]
    OR?: CharmScalarWhereWithAggregatesInput[]
    NOT?: CharmScalarWhereWithAggregatesInput | CharmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Charm"> | number
    game_id?: BigIntWithAggregatesFilter<"Charm"> | bigint | number
    names?: StringWithAggregatesFilter<"Charm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Charm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Charm"> | Date | string
  }

  export type ArmorUpgradeWhereInput = {
    AND?: ArmorUpgradeWhereInput | ArmorUpgradeWhereInput[]
    OR?: ArmorUpgradeWhereInput[]
    NOT?: ArmorUpgradeWhereInput | ArmorUpgradeWhereInput[]
    id?: IntFilter<"ArmorUpgrade"> | number
    rarity?: IntFilter<"ArmorUpgrade"> | number
    steps?: StringFilter<"ArmorUpgrade"> | string
    createdAt?: DateTimeFilter<"ArmorUpgrade"> | Date | string
    updatedAt?: DateTimeFilter<"ArmorUpgrade"> | Date | string
  }

  export type ArmorUpgradeOrderByWithRelationInput = {
    id?: SortOrder
    rarity?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorUpgradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rarity?: number
    AND?: ArmorUpgradeWhereInput | ArmorUpgradeWhereInput[]
    OR?: ArmorUpgradeWhereInput[]
    NOT?: ArmorUpgradeWhereInput | ArmorUpgradeWhereInput[]
    steps?: StringFilter<"ArmorUpgrade"> | string
    createdAt?: DateTimeFilter<"ArmorUpgrade"> | Date | string
    updatedAt?: DateTimeFilter<"ArmorUpgrade"> | Date | string
  }, "id" | "rarity">

  export type ArmorUpgradeOrderByWithAggregationInput = {
    id?: SortOrder
    rarity?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArmorUpgradeCountOrderByAggregateInput
    _avg?: ArmorUpgradeAvgOrderByAggregateInput
    _max?: ArmorUpgradeMaxOrderByAggregateInput
    _min?: ArmorUpgradeMinOrderByAggregateInput
    _sum?: ArmorUpgradeSumOrderByAggregateInput
  }

  export type ArmorUpgradeScalarWhereWithAggregatesInput = {
    AND?: ArmorUpgradeScalarWhereWithAggregatesInput | ArmorUpgradeScalarWhereWithAggregatesInput[]
    OR?: ArmorUpgradeScalarWhereWithAggregatesInput[]
    NOT?: ArmorUpgradeScalarWhereWithAggregatesInput | ArmorUpgradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArmorUpgrade"> | number
    rarity?: IntWithAggregatesFilter<"ArmorUpgrade"> | number
    steps?: StringWithAggregatesFilter<"ArmorUpgrade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArmorUpgrade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArmorUpgrade"> | Date | string
  }

  export type SpeciesWhereInput = {
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    id?: IntFilter<"Species"> | number
    kind?: StringFilter<"Species"> | string
    names?: StringFilter<"Species"> | string
    createdAt?: DateTimeFilter<"Species"> | Date | string
    updatedAt?: DateTimeFilter<"Species"> | Date | string
  }

  export type SpeciesOrderByWithRelationInput = {
    id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kind?: string
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    names?: StringFilter<"Species"> | string
    createdAt?: DateTimeFilter<"Species"> | Date | string
    updatedAt?: DateTimeFilter<"Species"> | Date | string
  }, "id" | "kind">

  export type SpeciesOrderByWithAggregationInput = {
    id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpeciesCountOrderByAggregateInput
    _avg?: SpeciesAvgOrderByAggregateInput
    _max?: SpeciesMaxOrderByAggregateInput
    _min?: SpeciesMinOrderByAggregateInput
    _sum?: SpeciesSumOrderByAggregateInput
  }

  export type SpeciesScalarWhereWithAggregatesInput = {
    AND?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    OR?: SpeciesScalarWhereWithAggregatesInput[]
    NOT?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Species"> | number
    kind?: StringWithAggregatesFilter<"Species"> | string
    names?: StringWithAggregatesFilter<"Species"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Species"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Species"> | Date | string
  }

  export type StageWhereInput = {
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    id?: IntFilter<"Stage"> | number
    game_id?: BigIntFilter<"Stage"> | bigint | number
    names?: StringFilter<"Stage"> | string
    areas?: IntFilter<"Stage"> | number
    camps?: StringNullableFilter<"Stage"> | string | null
    createdAt?: DateTimeFilter<"Stage"> | Date | string
    updatedAt?: DateTimeFilter<"Stage"> | Date | string
  }

  export type StageOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    areas?: SortOrder
    camps?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    names?: StringFilter<"Stage"> | string
    areas?: IntFilter<"Stage"> | number
    camps?: StringNullableFilter<"Stage"> | string | null
    createdAt?: DateTimeFilter<"Stage"> | Date | string
    updatedAt?: DateTimeFilter<"Stage"> | Date | string
  }, "id" | "game_id">

  export type StageOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    areas?: SortOrder
    camps?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StageCountOrderByAggregateInput
    _avg?: StageAvgOrderByAggregateInput
    _max?: StageMaxOrderByAggregateInput
    _min?: StageMinOrderByAggregateInput
    _sum?: StageSumOrderByAggregateInput
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    OR?: StageScalarWhereWithAggregatesInput[]
    NOT?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stage"> | number
    game_id?: BigIntWithAggregatesFilter<"Stage"> | bigint | number
    names?: StringWithAggregatesFilter<"Stage"> | string
    areas?: IntWithAggregatesFilter<"Stage"> | number
    camps?: StringNullableWithAggregatesFilter<"Stage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Stage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stage"> | Date | string
  }

  export type PartNameWhereInput = {
    AND?: PartNameWhereInput | PartNameWhereInput[]
    OR?: PartNameWhereInput[]
    NOT?: PartNameWhereInput | PartNameWhereInput[]
    id?: IntFilter<"PartName"> | number
    game_id?: BigIntFilter<"PartName"> | bigint | number
    names?: StringFilter<"PartName"> | string
    createdAt?: DateTimeFilter<"PartName"> | Date | string
    updatedAt?: DateTimeFilter<"PartName"> | Date | string
  }

  export type PartNameOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartNameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: PartNameWhereInput | PartNameWhereInput[]
    OR?: PartNameWhereInput[]
    NOT?: PartNameWhereInput | PartNameWhereInput[]
    names?: StringFilter<"PartName"> | string
    createdAt?: DateTimeFilter<"PartName"> | Date | string
    updatedAt?: DateTimeFilter<"PartName"> | Date | string
  }, "id" | "game_id">

  export type PartNameOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartNameCountOrderByAggregateInput
    _avg?: PartNameAvgOrderByAggregateInput
    _max?: PartNameMaxOrderByAggregateInput
    _min?: PartNameMinOrderByAggregateInput
    _sum?: PartNameSumOrderByAggregateInput
  }

  export type PartNameScalarWhereWithAggregatesInput = {
    AND?: PartNameScalarWhereWithAggregatesInput | PartNameScalarWhereWithAggregatesInput[]
    OR?: PartNameScalarWhereWithAggregatesInput[]
    NOT?: PartNameScalarWhereWithAggregatesInput | PartNameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartName"> | number
    game_id?: BigIntWithAggregatesFilter<"PartName"> | bigint | number
    names?: StringWithAggregatesFilter<"PartName"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartName"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartName"> | Date | string
  }

  export type WeaponSeriesWhereInput = {
    AND?: WeaponSeriesWhereInput | WeaponSeriesWhereInput[]
    OR?: WeaponSeriesWhereInput[]
    NOT?: WeaponSeriesWhereInput | WeaponSeriesWhereInput[]
    id?: IntFilter<"WeaponSeries"> | number
    game_id?: BigIntFilter<"WeaponSeries"> | bigint | number
    names?: StringFilter<"WeaponSeries"> | string
    createdAt?: DateTimeFilter<"WeaponSeries"> | Date | string
    updatedAt?: DateTimeFilter<"WeaponSeries"> | Date | string
  }

  export type WeaponSeriesOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: bigint | number
    AND?: WeaponSeriesWhereInput | WeaponSeriesWhereInput[]
    OR?: WeaponSeriesWhereInput[]
    NOT?: WeaponSeriesWhereInput | WeaponSeriesWhereInput[]
    names?: StringFilter<"WeaponSeries"> | string
    createdAt?: DateTimeFilter<"WeaponSeries"> | Date | string
    updatedAt?: DateTimeFilter<"WeaponSeries"> | Date | string
  }, "id" | "game_id">

  export type WeaponSeriesOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeaponSeriesCountOrderByAggregateInput
    _avg?: WeaponSeriesAvgOrderByAggregateInput
    _max?: WeaponSeriesMaxOrderByAggregateInput
    _min?: WeaponSeriesMinOrderByAggregateInput
    _sum?: WeaponSeriesSumOrderByAggregateInput
  }

  export type WeaponSeriesScalarWhereWithAggregatesInput = {
    AND?: WeaponSeriesScalarWhereWithAggregatesInput | WeaponSeriesScalarWhereWithAggregatesInput[]
    OR?: WeaponSeriesScalarWhereWithAggregatesInput[]
    NOT?: WeaponSeriesScalarWhereWithAggregatesInput | WeaponSeriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeaponSeries"> | number
    game_id?: BigIntWithAggregatesFilter<"WeaponSeries"> | bigint | number
    names?: StringWithAggregatesFilter<"WeaponSeries"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WeaponSeries"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeaponSeries"> | Date | string
  }

  export type HuntingHornMelodyWhereInput = {
    AND?: HuntingHornMelodyWhereInput | HuntingHornMelodyWhereInput[]
    OR?: HuntingHornMelodyWhereInput[]
    NOT?: HuntingHornMelodyWhereInput | HuntingHornMelodyWhereInput[]
    id?: IntFilter<"HuntingHornMelody"> | number
    game_id?: IntFilter<"HuntingHornMelody"> | number
    notes?: StringFilter<"HuntingHornMelody"> | string
    songs?: StringFilter<"HuntingHornMelody"> | string
  }

  export type HuntingHornMelodyOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrder
    notes?: SortOrder
    songs?: SortOrder
  }

  export type HuntingHornMelodyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: number
    AND?: HuntingHornMelodyWhereInput | HuntingHornMelodyWhereInput[]
    OR?: HuntingHornMelodyWhereInput[]
    NOT?: HuntingHornMelodyWhereInput | HuntingHornMelodyWhereInput[]
    notes?: StringFilter<"HuntingHornMelody"> | string
    songs?: StringFilter<"HuntingHornMelody"> | string
  }, "id" | "game_id">

  export type HuntingHornMelodyOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrder
    notes?: SortOrder
    songs?: SortOrder
    _count?: HuntingHornMelodyCountOrderByAggregateInput
    _avg?: HuntingHornMelodyAvgOrderByAggregateInput
    _max?: HuntingHornMelodyMaxOrderByAggregateInput
    _min?: HuntingHornMelodyMinOrderByAggregateInput
    _sum?: HuntingHornMelodySumOrderByAggregateInput
  }

  export type HuntingHornMelodyScalarWhereWithAggregatesInput = {
    AND?: HuntingHornMelodyScalarWhereWithAggregatesInput | HuntingHornMelodyScalarWhereWithAggregatesInput[]
    OR?: HuntingHornMelodyScalarWhereWithAggregatesInput[]
    NOT?: HuntingHornMelodyScalarWhereWithAggregatesInput | HuntingHornMelodyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HuntingHornMelody"> | number
    game_id?: IntWithAggregatesFilter<"HuntingHornMelody"> | number
    notes?: StringWithAggregatesFilter<"HuntingHornMelody"> | string
    songs?: StringWithAggregatesFilter<"HuntingHornMelody"> | string
  }

  export type HuntingHornSongWhereInput = {
    AND?: HuntingHornSongWhereInput | HuntingHornSongWhereInput[]
    OR?: HuntingHornSongWhereInput[]
    NOT?: HuntingHornSongWhereInput | HuntingHornSongWhereInput[]
    id?: IntFilter<"HuntingHornSong"> | number
    effect_id?: StringFilter<"HuntingHornSong"> | string
    notes?: StringFilter<"HuntingHornSong"> | string
    names?: StringFilter<"HuntingHornSong"> | string
  }

  export type HuntingHornSongOrderByWithRelationInput = {
    id?: SortOrder
    effect_id?: SortOrder
    notes?: SortOrder
    names?: SortOrder
  }

  export type HuntingHornSongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    effect_id?: string
    AND?: HuntingHornSongWhereInput | HuntingHornSongWhereInput[]
    OR?: HuntingHornSongWhereInput[]
    NOT?: HuntingHornSongWhereInput | HuntingHornSongWhereInput[]
    notes?: StringFilter<"HuntingHornSong"> | string
    names?: StringFilter<"HuntingHornSong"> | string
  }, "id" | "effect_id">

  export type HuntingHornSongOrderByWithAggregationInput = {
    id?: SortOrder
    effect_id?: SortOrder
    notes?: SortOrder
    names?: SortOrder
    _count?: HuntingHornSongCountOrderByAggregateInput
    _avg?: HuntingHornSongAvgOrderByAggregateInput
    _max?: HuntingHornSongMaxOrderByAggregateInput
    _min?: HuntingHornSongMinOrderByAggregateInput
    _sum?: HuntingHornSongSumOrderByAggregateInput
  }

  export type HuntingHornSongScalarWhereWithAggregatesInput = {
    AND?: HuntingHornSongScalarWhereWithAggregatesInput | HuntingHornSongScalarWhereWithAggregatesInput[]
    OR?: HuntingHornSongScalarWhereWithAggregatesInput[]
    NOT?: HuntingHornSongScalarWhereWithAggregatesInput | HuntingHornSongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HuntingHornSong"> | number
    effect_id?: StringWithAggregatesFilter<"HuntingHornSong"> | string
    notes?: StringWithAggregatesFilter<"HuntingHornSong"> | string
    names?: StringWithAggregatesFilter<"HuntingHornSong"> | string
  }

  export type ItemCreateInput = {
    game_id: bigint | number
    names: string
    descriptions?: string | null
    kind?: string | null
    rarity?: number
    max_count?: number
    sell_price?: number
    buy_price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    kind?: string | null
    rarity?: number
    max_count?: number
    sell_price?: number
    buy_price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    max_count?: IntFieldUpdateOperationsInput | number
    sell_price?: IntFieldUpdateOperationsInput | number
    buy_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    max_count?: IntFieldUpdateOperationsInput | number
    sell_price?: IntFieldUpdateOperationsInput | number
    buy_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    kind?: string | null
    rarity?: number
    max_count?: number
    sell_price?: number
    buy_price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    max_count?: IntFieldUpdateOperationsInput | number
    sell_price?: IntFieldUpdateOperationsInput | number
    buy_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    max_count?: IntFieldUpdateOperationsInput | number
    sell_price?: IntFieldUpdateOperationsInput | number
    buy_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    game_id: bigint | number
    names: string
    descriptions?: string | null
    ranks: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    ranks: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    ranks: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterCreateInput = {
    game_id: bigint | number
    names: string
    descriptions?: string | null
    features?: string | null
    species?: string | null
    parts?: string | null
    rewards?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    features?: string | null
    species?: string | null
    parts?: string | null
    rewards?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    species?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    species?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    features?: string | null
    species?: string | null
    parts?: string | null
    rewards?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    species?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    species?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateInput = {
    game_id: bigint | number
    kind: string
    names: string
    descriptions?: string | null
    rarity?: number | null
    attack_raw?: number | null
    affinity?: number | null
    defense?: number | null
    slots?: string | null
    sharpness?: string | null
    handicraft?: string | null
    element_type?: string | null
    element_damage?: number | null
    element_hidden?: boolean
    ammo?: string | null
    coatings?: string | null
    charge_levels?: string | null
    melodies?: string | null
    songs?: string | null
    kinsect_bonus?: string | null
    crafting_cost?: number | null
    upgrade_cost?: number | null
    materials?: string | null
    series_id?: bigint | number | null
    previous_id?: bigint | number | null
    next_weapons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    kind: string
    names: string
    descriptions?: string | null
    rarity?: number | null
    attack_raw?: number | null
    affinity?: number | null
    defense?: number | null
    slots?: string | null
    sharpness?: string | null
    handicraft?: string | null
    element_type?: string | null
    element_damage?: number | null
    element_hidden?: boolean
    ammo?: string | null
    coatings?: string | null
    charge_levels?: string | null
    melodies?: string | null
    songs?: string | null
    kinsect_bonus?: string | null
    crafting_cost?: number | null
    upgrade_cost?: number | null
    materials?: string | null
    series_id?: bigint | number | null
    previous_id?: bigint | number | null
    next_weapons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableIntFieldUpdateOperationsInput | number | null
    attack_raw?: NullableIntFieldUpdateOperationsInput | number | null
    affinity?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    slots?: NullableStringFieldUpdateOperationsInput | string | null
    sharpness?: NullableStringFieldUpdateOperationsInput | string | null
    handicraft?: NullableStringFieldUpdateOperationsInput | string | null
    element_type?: NullableStringFieldUpdateOperationsInput | string | null
    element_damage?: NullableIntFieldUpdateOperationsInput | number | null
    element_hidden?: BoolFieldUpdateOperationsInput | boolean
    ammo?: NullableStringFieldUpdateOperationsInput | string | null
    coatings?: NullableStringFieldUpdateOperationsInput | string | null
    charge_levels?: NullableStringFieldUpdateOperationsInput | string | null
    melodies?: NullableStringFieldUpdateOperationsInput | string | null
    songs?: NullableStringFieldUpdateOperationsInput | string | null
    kinsect_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    crafting_cost?: NullableIntFieldUpdateOperationsInput | number | null
    upgrade_cost?: NullableIntFieldUpdateOperationsInput | number | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    series_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    previous_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_weapons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableIntFieldUpdateOperationsInput | number | null
    attack_raw?: NullableIntFieldUpdateOperationsInput | number | null
    affinity?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    slots?: NullableStringFieldUpdateOperationsInput | string | null
    sharpness?: NullableStringFieldUpdateOperationsInput | string | null
    handicraft?: NullableStringFieldUpdateOperationsInput | string | null
    element_type?: NullableStringFieldUpdateOperationsInput | string | null
    element_damage?: NullableIntFieldUpdateOperationsInput | number | null
    element_hidden?: BoolFieldUpdateOperationsInput | boolean
    ammo?: NullableStringFieldUpdateOperationsInput | string | null
    coatings?: NullableStringFieldUpdateOperationsInput | string | null
    charge_levels?: NullableStringFieldUpdateOperationsInput | string | null
    melodies?: NullableStringFieldUpdateOperationsInput | string | null
    songs?: NullableStringFieldUpdateOperationsInput | string | null
    kinsect_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    crafting_cost?: NullableIntFieldUpdateOperationsInput | number | null
    upgrade_cost?: NullableIntFieldUpdateOperationsInput | number | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    series_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    previous_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_weapons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateManyInput = {
    id?: number
    game_id: bigint | number
    kind: string
    names: string
    descriptions?: string | null
    rarity?: number | null
    attack_raw?: number | null
    affinity?: number | null
    defense?: number | null
    slots?: string | null
    sharpness?: string | null
    handicraft?: string | null
    element_type?: string | null
    element_damage?: number | null
    element_hidden?: boolean
    ammo?: string | null
    coatings?: string | null
    charge_levels?: string | null
    melodies?: string | null
    songs?: string | null
    kinsect_bonus?: string | null
    crafting_cost?: number | null
    upgrade_cost?: number | null
    materials?: string | null
    series_id?: bigint | number | null
    previous_id?: bigint | number | null
    next_weapons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableIntFieldUpdateOperationsInput | number | null
    attack_raw?: NullableIntFieldUpdateOperationsInput | number | null
    affinity?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    slots?: NullableStringFieldUpdateOperationsInput | string | null
    sharpness?: NullableStringFieldUpdateOperationsInput | string | null
    handicraft?: NullableStringFieldUpdateOperationsInput | string | null
    element_type?: NullableStringFieldUpdateOperationsInput | string | null
    element_damage?: NullableIntFieldUpdateOperationsInput | number | null
    element_hidden?: BoolFieldUpdateOperationsInput | boolean
    ammo?: NullableStringFieldUpdateOperationsInput | string | null
    coatings?: NullableStringFieldUpdateOperationsInput | string | null
    charge_levels?: NullableStringFieldUpdateOperationsInput | string | null
    melodies?: NullableStringFieldUpdateOperationsInput | string | null
    songs?: NullableStringFieldUpdateOperationsInput | string | null
    kinsect_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    crafting_cost?: NullableIntFieldUpdateOperationsInput | number | null
    upgrade_cost?: NullableIntFieldUpdateOperationsInput | number | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    series_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    previous_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_weapons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableIntFieldUpdateOperationsInput | number | null
    attack_raw?: NullableIntFieldUpdateOperationsInput | number | null
    affinity?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    slots?: NullableStringFieldUpdateOperationsInput | string | null
    sharpness?: NullableStringFieldUpdateOperationsInput | string | null
    handicraft?: NullableStringFieldUpdateOperationsInput | string | null
    element_type?: NullableStringFieldUpdateOperationsInput | string | null
    element_damage?: NullableIntFieldUpdateOperationsInput | number | null
    element_hidden?: BoolFieldUpdateOperationsInput | boolean
    ammo?: NullableStringFieldUpdateOperationsInput | string | null
    coatings?: NullableStringFieldUpdateOperationsInput | string | null
    charge_levels?: NullableStringFieldUpdateOperationsInput | string | null
    melodies?: NullableStringFieldUpdateOperationsInput | string | null
    songs?: NullableStringFieldUpdateOperationsInput | string | null
    kinsect_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    crafting_cost?: NullableIntFieldUpdateOperationsInput | number | null
    upgrade_cost?: NullableIntFieldUpdateOperationsInput | number | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    series_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    previous_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_weapons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorSetCreateInput = {
    game_id: bigint | number
    names: string
    rarity?: number
    set_bonus?: string | null
    group_bonus?: string | null
    pieces: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmorSetUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    rarity?: number
    set_bonus?: string | null
    group_bonus?: string | null
    pieces: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmorSetUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    set_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    group_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    pieces?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorSetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    set_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    group_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    pieces?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorSetCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    rarity?: number
    set_bonus?: string | null
    group_bonus?: string | null
    pieces: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmorSetUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    set_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    group_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    pieces?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorSetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    rarity?: IntFieldUpdateOperationsInput | number
    set_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    group_bonus?: NullableStringFieldUpdateOperationsInput | string | null
    pieces?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmuletCreateInput = {
    game_id: bigint | number
    ranks: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmuletUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    ranks: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmuletUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmuletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmuletCreateManyInput = {
    id?: number
    game_id: bigint | number
    ranks: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmuletUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmuletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ranks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryCreateInput = {
    game_id: bigint | number
    names: string
    descriptions?: string | null
    rarity?: number
    price?: number
    level?: number
    skills: string
    allowed_on?: string
    icon_color?: string | null
    icon_color_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessoryUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    rarity?: number
    price?: number
    level?: number
    skills: string
    allowed_on?: string
    icon_color?: string | null
    icon_color_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessoryUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    allowed_on?: StringFieldUpdateOperationsInput | string
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
    icon_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    allowed_on?: StringFieldUpdateOperationsInput | string
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
    icon_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    descriptions?: string | null
    rarity?: number
    price?: number
    level?: number
    skills: string
    allowed_on?: string
    icon_color?: string | null
    icon_color_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessoryUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    allowed_on?: StringFieldUpdateOperationsInput | string
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
    icon_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    descriptions?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    allowed_on?: StringFieldUpdateOperationsInput | string
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
    icon_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharmCreateInput = {
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharmUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharmUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharmCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharmUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorUpgradeCreateInput = {
    rarity: number
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmorUpgradeUncheckedCreateInput = {
    id?: number
    rarity: number
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmorUpgradeUpdateInput = {
    rarity?: IntFieldUpdateOperationsInput | number
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorUpgradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rarity?: IntFieldUpdateOperationsInput | number
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorUpgradeCreateManyInput = {
    id?: number
    rarity: number
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmorUpgradeUpdateManyMutationInput = {
    rarity?: IntFieldUpdateOperationsInput | number
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmorUpgradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rarity?: IntFieldUpdateOperationsInput | number
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesCreateInput = {
    kind: string
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeciesUncheckedCreateInput = {
    id?: number
    kind: string
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeciesUpdateInput = {
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesCreateManyInput = {
    id?: number
    kind: string
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeciesUpdateManyMutationInput = {
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateInput = {
    game_id: bigint | number
    names: string
    areas?: number
    camps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    areas?: number
    camps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    areas?: IntFieldUpdateOperationsInput | number
    camps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    areas?: IntFieldUpdateOperationsInput | number
    camps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    areas?: number
    camps?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    areas?: IntFieldUpdateOperationsInput | number
    camps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    areas?: IntFieldUpdateOperationsInput | number
    camps?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartNameCreateInput = {
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartNameUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartNameUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartNameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartNameCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartNameUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartNameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponSeriesCreateInput = {
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponSeriesUncheckedCreateInput = {
    id?: number
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponSeriesUpdateInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponSeriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponSeriesCreateManyInput = {
    id?: number
    game_id: bigint | number
    names: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponSeriesUpdateManyMutationInput = {
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponSeriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: BigIntFieldUpdateOperationsInput | bigint | number
    names?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuntingHornMelodyCreateInput = {
    game_id: number
    notes: string
    songs: string
  }

  export type HuntingHornMelodyUncheckedCreateInput = {
    id?: number
    game_id: number
    notes: string
    songs: string
  }

  export type HuntingHornMelodyUpdateInput = {
    game_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    songs?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornMelodyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    songs?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornMelodyCreateManyInput = {
    id?: number
    game_id: number
    notes: string
    songs: string
  }

  export type HuntingHornMelodyUpdateManyMutationInput = {
    game_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    songs?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornMelodyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    songs?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornSongCreateInput = {
    effect_id: string
    notes: string
    names: string
  }

  export type HuntingHornSongUncheckedCreateInput = {
    id?: number
    effect_id: string
    notes: string
    names: string
  }

  export type HuntingHornSongUpdateInput = {
    effect_id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornSongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    effect_id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornSongCreateManyInput = {
    id?: number
    effect_id: string
    notes: string
    names: string
  }

  export type HuntingHornSongUpdateManyMutationInput = {
    effect_id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type HuntingHornSongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    effect_id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    names?: StringFieldUpdateOperationsInput | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    kind?: SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    kind?: SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    kind?: SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
    max_count?: SortOrder
    sell_price?: SortOrder
    buy_price?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type MonsterCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    features?: SortOrder
    species?: SortOrder
    parts?: SortOrder
    rewards?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type MonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    features?: SortOrder
    species?: SortOrder
    parts?: SortOrder
    rewards?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    features?: SortOrder
    species?: SortOrder
    parts?: SortOrder
    rewards?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type WeaponCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    rarity?: SortOrder
    attack_raw?: SortOrder
    affinity?: SortOrder
    defense?: SortOrder
    slots?: SortOrder
    sharpness?: SortOrder
    handicraft?: SortOrder
    element_type?: SortOrder
    element_damage?: SortOrder
    element_hidden?: SortOrder
    ammo?: SortOrder
    coatings?: SortOrder
    charge_levels?: SortOrder
    melodies?: SortOrder
    songs?: SortOrder
    kinsect_bonus?: SortOrder
    crafting_cost?: SortOrder
    upgrade_cost?: SortOrder
    materials?: SortOrder
    series_id?: SortOrder
    previous_id?: SortOrder
    next_weapons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
    attack_raw?: SortOrder
    affinity?: SortOrder
    defense?: SortOrder
    element_damage?: SortOrder
    crafting_cost?: SortOrder
    upgrade_cost?: SortOrder
    series_id?: SortOrder
    previous_id?: SortOrder
  }

  export type WeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    rarity?: SortOrder
    attack_raw?: SortOrder
    affinity?: SortOrder
    defense?: SortOrder
    slots?: SortOrder
    sharpness?: SortOrder
    handicraft?: SortOrder
    element_type?: SortOrder
    element_damage?: SortOrder
    element_hidden?: SortOrder
    ammo?: SortOrder
    coatings?: SortOrder
    charge_levels?: SortOrder
    melodies?: SortOrder
    songs?: SortOrder
    kinsect_bonus?: SortOrder
    crafting_cost?: SortOrder
    upgrade_cost?: SortOrder
    materials?: SortOrder
    series_id?: SortOrder
    previous_id?: SortOrder
    next_weapons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    rarity?: SortOrder
    attack_raw?: SortOrder
    affinity?: SortOrder
    defense?: SortOrder
    slots?: SortOrder
    sharpness?: SortOrder
    handicraft?: SortOrder
    element_type?: SortOrder
    element_damage?: SortOrder
    element_hidden?: SortOrder
    ammo?: SortOrder
    coatings?: SortOrder
    charge_levels?: SortOrder
    melodies?: SortOrder
    songs?: SortOrder
    kinsect_bonus?: SortOrder
    crafting_cost?: SortOrder
    upgrade_cost?: SortOrder
    materials?: SortOrder
    series_id?: SortOrder
    previous_id?: SortOrder
    next_weapons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
    attack_raw?: SortOrder
    affinity?: SortOrder
    defense?: SortOrder
    element_damage?: SortOrder
    crafting_cost?: SortOrder
    upgrade_cost?: SortOrder
    series_id?: SortOrder
    previous_id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ArmorSetCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    rarity?: SortOrder
    set_bonus?: SortOrder
    group_bonus?: SortOrder
    pieces?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorSetAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
  }

  export type ArmorSetMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    rarity?: SortOrder
    set_bonus?: SortOrder
    group_bonus?: SortOrder
    pieces?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorSetMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    rarity?: SortOrder
    set_bonus?: SortOrder
    group_bonus?: SortOrder
    pieces?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorSetSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
  }

  export type AmuletCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmuletAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type AmuletMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmuletMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    ranks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmuletSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type AccessoryCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
    skills?: SortOrder
    allowed_on?: SortOrder
    icon_color?: SortOrder
    icon_color_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessoryAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
  }

  export type AccessoryMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
    skills?: SortOrder
    allowed_on?: SortOrder
    icon_color?: SortOrder
    icon_color_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessoryMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    descriptions?: SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
    skills?: SortOrder
    allowed_on?: SortOrder
    icon_color?: SortOrder
    icon_color_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessorySumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    rarity?: SortOrder
    price?: SortOrder
    level?: SortOrder
  }

  export type CharmCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharmAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type CharmMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharmMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharmSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type ArmorUpgradeCountOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorUpgradeAvgOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
  }

  export type ArmorUpgradeMaxOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorUpgradeMinOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmorUpgradeSumOrderByAggregateInput = {
    id?: SortOrder
    rarity?: SortOrder
  }

  export type SpeciesCountOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpeciesMaxOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesMinOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeciesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StageCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    areas?: SortOrder
    camps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    areas?: SortOrder
  }

  export type StageMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    areas?: SortOrder
    camps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    areas?: SortOrder
    camps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    areas?: SortOrder
  }

  export type PartNameCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartNameAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type PartNameMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartNameMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartNameSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type WeaponSeriesCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSeriesAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type WeaponSeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSeriesMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    names?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSeriesSumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type HuntingHornMelodyCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    notes?: SortOrder
    songs?: SortOrder
  }

  export type HuntingHornMelodyAvgOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type HuntingHornMelodyMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    notes?: SortOrder
    songs?: SortOrder
  }

  export type HuntingHornMelodyMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    notes?: SortOrder
    songs?: SortOrder
  }

  export type HuntingHornMelodySumOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
  }

  export type HuntingHornSongCountOrderByAggregateInput = {
    id?: SortOrder
    effect_id?: SortOrder
    notes?: SortOrder
    names?: SortOrder
  }

  export type HuntingHornSongAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HuntingHornSongMaxOrderByAggregateInput = {
    id?: SortOrder
    effect_id?: SortOrder
    notes?: SortOrder
    names?: SortOrder
  }

  export type HuntingHornSongMinOrderByAggregateInput = {
    id?: SortOrder
    effect_id?: SortOrder
    notes?: SortOrder
    names?: SortOrder
  }

  export type HuntingHornSongSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillDefaultArgs instead
     */
    export type SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterDefaultArgs instead
     */
    export type MonsterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonsterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeaponDefaultArgs instead
     */
    export type WeaponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeaponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArmorSetDefaultArgs instead
     */
    export type ArmorSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArmorSetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AmuletDefaultArgs instead
     */
    export type AmuletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AmuletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessoryDefaultArgs instead
     */
    export type AccessoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccessoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharmDefaultArgs instead
     */
    export type CharmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArmorUpgradeDefaultArgs instead
     */
    export type ArmorUpgradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArmorUpgradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpeciesDefaultArgs instead
     */
    export type SpeciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpeciesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StageDefaultArgs instead
     */
    export type StageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartNameDefaultArgs instead
     */
    export type PartNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartNameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeaponSeriesDefaultArgs instead
     */
    export type WeaponSeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeaponSeriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HuntingHornMelodyDefaultArgs instead
     */
    export type HuntingHornMelodyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HuntingHornMelodyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HuntingHornSongDefaultArgs instead
     */
    export type HuntingHornSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HuntingHornSongDefaultArgs<ExtArgs>

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