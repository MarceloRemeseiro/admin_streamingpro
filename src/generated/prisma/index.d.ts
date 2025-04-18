
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Licencia
 * 
 */
export type Licencia = $Result.DefaultSelection<Prisma.$LicenciaPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Dispositivo
 * 
 */
export type Dispositivo = $Result.DefaultSelection<Prisma.$DispositivoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licencia`: Exposes CRUD operations for the **Licencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licencias
    * const licencias = await prisma.licencia.findMany()
    * ```
    */
  get licencia(): Prisma.LicenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispositivo`: Exposes CRUD operations for the **Dispositivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivos
    * const dispositivos = await prisma.dispositivo.findMany()
    * ```
    */
  get dispositivo(): Prisma.DispositivoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Usuario: 'Usuario',
    Licencia: 'Licencia',
    Config: 'Config',
    Device: 'Device',
    Dispositivo: 'Dispositivo'
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
      modelProps: "usuario" | "licencia" | "config" | "device" | "dispositivo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Licencia: {
        payload: Prisma.$LicenciaPayload<ExtArgs>
        fields: Prisma.LicenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>
          }
          findFirst: {
            args: Prisma.LicenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>
          }
          findMany: {
            args: Prisma.LicenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>[]
          }
          create: {
            args: Prisma.LicenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>
          }
          createMany: {
            args: Prisma.LicenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>[]
          }
          delete: {
            args: Prisma.LicenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>
          }
          update: {
            args: Prisma.LicenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>
          }
          deleteMany: {
            args: Prisma.LicenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>[]
          }
          upsert: {
            args: Prisma.LicenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenciaPayload>
          }
          aggregate: {
            args: Prisma.LicenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicencia>
          }
          groupBy: {
            args: Prisma.LicenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenciaCountArgs<ExtArgs>
            result: $Utils.Optional<LicenciaCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Dispositivo: {
        payload: Prisma.$DispositivoPayload<ExtArgs>
        fields: Prisma.DispositivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispositivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispositivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findFirst: {
            args: Prisma.DispositivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispositivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findMany: {
            args: Prisma.DispositivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          create: {
            args: Prisma.DispositivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          createMany: {
            args: Prisma.DispositivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispositivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          delete: {
            args: Prisma.DispositivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          update: {
            args: Prisma.DispositivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          deleteMany: {
            args: Prisma.DispositivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispositivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DispositivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          upsert: {
            args: Prisma.DispositivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          aggregate: {
            args: Prisma.DispositivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo>
          }
          groupBy: {
            args: Prisma.DispositivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispositivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispositivoCountArgs<ExtArgs>
            result: $Utils.Optional<DispositivoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    licencia?: LicenciaOmit
    config?: ConfigOmit
    device?: DeviceOmit
    dispositivo?: DispositivoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    devices: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | UsuarioCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type LicenciaCountOutputType
   */

  export type LicenciaCountOutputType = {
    usuarios: number
  }

  export type LicenciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | LicenciaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * LicenciaCountOutputType without action
   */
  export type LicenciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenciaCountOutputType
     */
    select?: LicenciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenciaCountOutputType without action
   */
  export type LicenciaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    telefono: string | null
    ciudad: string | null
    subdominio: string | null
    codigo: string | null
    activo: boolean | null
    fechaInicio: Date | null
    fechaFin: Date | null
    licenciaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    telefono: string | null
    ciudad: string | null
    subdominio: string | null
    codigo: string | null
    activo: boolean | null
    fechaInicio: Date | null
    fechaFin: Date | null
    licenciaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    email: number
    telefono: number
    ciudad: number
    subdominio: number
    codigo: number
    activo: number
    fechaInicio: number
    fechaFin: number
    licenciaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    telefono?: true
    ciudad?: true
    subdominio?: true
    codigo?: true
    activo?: true
    fechaInicio?: true
    fechaFin?: true
    licenciaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    telefono?: true
    ciudad?: true
    subdominio?: true
    codigo?: true
    activo?: true
    fechaInicio?: true
    fechaFin?: true
    licenciaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    telefono?: true
    ciudad?: true
    subdominio?: true
    codigo?: true
    activo?: true
    fechaInicio?: true
    fechaFin?: true
    licenciaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    username: string
    email: string
    telefono: string | null
    ciudad: string | null
    subdominio: string
    codigo: string
    activo: boolean
    fechaInicio: Date
    fechaFin: Date
    licenciaId: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    telefono?: boolean
    ciudad?: boolean
    subdominio?: boolean
    codigo?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    licenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licencia?: boolean | LicenciaDefaultArgs<ExtArgs>
    devices?: boolean | Usuario$devicesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    telefono?: boolean
    ciudad?: boolean
    subdominio?: boolean
    codigo?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    licenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licencia?: boolean | LicenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    telefono?: boolean
    ciudad?: boolean
    subdominio?: boolean
    codigo?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    licenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licencia?: boolean | LicenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    telefono?: boolean
    ciudad?: boolean
    subdominio?: boolean
    codigo?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    licenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "telefono" | "ciudad" | "subdominio" | "codigo" | "activo" | "fechaInicio" | "fechaFin" | "licenciaId" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licencia?: boolean | LicenciaDefaultArgs<ExtArgs>
    devices?: boolean | Usuario$devicesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licencia?: boolean | LicenciaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licencia?: boolean | LicenciaDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      licencia: Prisma.$LicenciaPayload<ExtArgs>
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      telefono: string | null
      ciudad: string | null
      subdominio: string
      codigo: string
      activo: boolean
      fechaInicio: Date
      fechaFin: Date
      licenciaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licencia<T extends LicenciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenciaDefaultArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devices<T extends Usuario$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly ciudad: FieldRef<"Usuario", 'String'>
    readonly subdominio: FieldRef<"Usuario", 'String'>
    readonly codigo: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly fechaInicio: FieldRef<"Usuario", 'DateTime'>
    readonly fechaFin: FieldRef<"Usuario", 'DateTime'>
    readonly licenciaId: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.devices
   */
  export type Usuario$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Licencia
   */

  export type AggregateLicencia = {
    _count: LicenciaCountAggregateOutputType | null
    _min: LicenciaMinAggregateOutputType | null
    _max: LicenciaMaxAggregateOutputType | null
  }

  export type LicenciaMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenciaMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenciaCountAggregateOutputType = {
    id: number
    tipo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenciaMinAggregateInputType = {
    id?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenciaMaxAggregateInputType = {
    id?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenciaCountAggregateInputType = {
    id?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licencia to aggregate.
     */
    where?: LicenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licencias to fetch.
     */
    orderBy?: LicenciaOrderByWithRelationInput | LicenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licencias
    **/
    _count?: true | LicenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenciaMaxAggregateInputType
  }

  export type GetLicenciaAggregateType<T extends LicenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateLicencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicencia[P]>
      : GetScalarType<T[P], AggregateLicencia[P]>
  }




  export type LicenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenciaWhereInput
    orderBy?: LicenciaOrderByWithAggregationInput | LicenciaOrderByWithAggregationInput[]
    by: LicenciaScalarFieldEnum[] | LicenciaScalarFieldEnum
    having?: LicenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenciaCountAggregateInputType | true
    _min?: LicenciaMinAggregateInputType
    _max?: LicenciaMaxAggregateInputType
  }

  export type LicenciaGroupByOutputType = {
    id: string
    tipo: string
    createdAt: Date
    updatedAt: Date
    _count: LicenciaCountAggregateOutputType | null
    _min: LicenciaMinAggregateOutputType | null
    _max: LicenciaMaxAggregateOutputType | null
  }

  type GetLicenciaGroupByPayload<T extends LicenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenciaGroupByOutputType[P]>
            : GetScalarType<T[P], LicenciaGroupByOutputType[P]>
        }
      >
    >


  export type LicenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Licencia$usuariosArgs<ExtArgs>
    _count?: boolean | LicenciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licencia"]>

  export type LicenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["licencia"]>

  export type LicenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["licencia"]>

  export type LicenciaSelectScalar = {
    id?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "createdAt" | "updatedAt", ExtArgs["result"]["licencia"]>
  export type LicenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Licencia$usuariosArgs<ExtArgs>
    _count?: boolean | LicenciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LicenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LicenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Licencia"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["licencia"]>
    composites: {}
  }

  type LicenciaGetPayload<S extends boolean | null | undefined | LicenciaDefaultArgs> = $Result.GetResult<Prisma.$LicenciaPayload, S>

  type LicenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenciaCountAggregateInputType | true
    }

  export interface LicenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Licencia'], meta: { name: 'Licencia' } }
    /**
     * Find zero or one Licencia that matches the filter.
     * @param {LicenciaFindUniqueArgs} args - Arguments to find a Licencia
     * @example
     * // Get one Licencia
     * const licencia = await prisma.licencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenciaFindUniqueArgs>(args: SelectSubset<T, LicenciaFindUniqueArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Licencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenciaFindUniqueOrThrowArgs} args - Arguments to find a Licencia
     * @example
     * // Get one Licencia
     * const licencia = await prisma.licencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaFindFirstArgs} args - Arguments to find a Licencia
     * @example
     * // Get one Licencia
     * const licencia = await prisma.licencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenciaFindFirstArgs>(args?: SelectSubset<T, LicenciaFindFirstArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaFindFirstOrThrowArgs} args - Arguments to find a Licencia
     * @example
     * // Get one Licencia
     * const licencia = await prisma.licencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licencias
     * const licencias = await prisma.licencia.findMany()
     * 
     * // Get first 10 Licencias
     * const licencias = await prisma.licencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenciaWithIdOnly = await prisma.licencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenciaFindManyArgs>(args?: SelectSubset<T, LicenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Licencia.
     * @param {LicenciaCreateArgs} args - Arguments to create a Licencia.
     * @example
     * // Create one Licencia
     * const Licencia = await prisma.licencia.create({
     *   data: {
     *     // ... data to create a Licencia
     *   }
     * })
     * 
     */
    create<T extends LicenciaCreateArgs>(args: SelectSubset<T, LicenciaCreateArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licencias.
     * @param {LicenciaCreateManyArgs} args - Arguments to create many Licencias.
     * @example
     * // Create many Licencias
     * const licencia = await prisma.licencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenciaCreateManyArgs>(args?: SelectSubset<T, LicenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licencias and returns the data saved in the database.
     * @param {LicenciaCreateManyAndReturnArgs} args - Arguments to create many Licencias.
     * @example
     * // Create many Licencias
     * const licencia = await prisma.licencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licencias and only return the `id`
     * const licenciaWithIdOnly = await prisma.licencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Licencia.
     * @param {LicenciaDeleteArgs} args - Arguments to delete one Licencia.
     * @example
     * // Delete one Licencia
     * const Licencia = await prisma.licencia.delete({
     *   where: {
     *     // ... filter to delete one Licencia
     *   }
     * })
     * 
     */
    delete<T extends LicenciaDeleteArgs>(args: SelectSubset<T, LicenciaDeleteArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Licencia.
     * @param {LicenciaUpdateArgs} args - Arguments to update one Licencia.
     * @example
     * // Update one Licencia
     * const licencia = await prisma.licencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenciaUpdateArgs>(args: SelectSubset<T, LicenciaUpdateArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licencias.
     * @param {LicenciaDeleteManyArgs} args - Arguments to filter Licencias to delete.
     * @example
     * // Delete a few Licencias
     * const { count } = await prisma.licencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenciaDeleteManyArgs>(args?: SelectSubset<T, LicenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licencias
     * const licencia = await prisma.licencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenciaUpdateManyArgs>(args: SelectSubset<T, LicenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licencias and returns the data updated in the database.
     * @param {LicenciaUpdateManyAndReturnArgs} args - Arguments to update many Licencias.
     * @example
     * // Update many Licencias
     * const licencia = await prisma.licencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licencias and only return the `id`
     * const licenciaWithIdOnly = await prisma.licencia.updateManyAndReturn({
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
    updateManyAndReturn<T extends LicenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Licencia.
     * @param {LicenciaUpsertArgs} args - Arguments to update or create a Licencia.
     * @example
     * // Update or create a Licencia
     * const licencia = await prisma.licencia.upsert({
     *   create: {
     *     // ... data to create a Licencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Licencia we want to update
     *   }
     * })
     */
    upsert<T extends LicenciaUpsertArgs>(args: SelectSubset<T, LicenciaUpsertArgs<ExtArgs>>): Prisma__LicenciaClient<$Result.GetResult<Prisma.$LicenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaCountArgs} args - Arguments to filter Licencias to count.
     * @example
     * // Count the number of Licencias
     * const count = await prisma.licencia.count({
     *   where: {
     *     // ... the filter for the Licencias we want to count
     *   }
     * })
    **/
    count<T extends LicenciaCountArgs>(
      args?: Subset<T, LicenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Licencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenciaAggregateArgs>(args: Subset<T, LicenciaAggregateArgs>): Prisma.PrismaPromise<GetLicenciaAggregateType<T>>

    /**
     * Group by Licencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenciaGroupByArgs} args - Group by arguments.
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
      T extends LicenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenciaGroupByArgs['orderBy'] }
        : { orderBy?: LicenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Licencia model
   */
  readonly fields: LicenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Licencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Licencia$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Licencia$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Licencia model
   */
  interface LicenciaFieldRefs {
    readonly id: FieldRef<"Licencia", 'String'>
    readonly tipo: FieldRef<"Licencia", 'String'>
    readonly createdAt: FieldRef<"Licencia", 'DateTime'>
    readonly updatedAt: FieldRef<"Licencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Licencia findUnique
   */
  export type LicenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * Filter, which Licencia to fetch.
     */
    where: LicenciaWhereUniqueInput
  }

  /**
   * Licencia findUniqueOrThrow
   */
  export type LicenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * Filter, which Licencia to fetch.
     */
    where: LicenciaWhereUniqueInput
  }

  /**
   * Licencia findFirst
   */
  export type LicenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * Filter, which Licencia to fetch.
     */
    where?: LicenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licencias to fetch.
     */
    orderBy?: LicenciaOrderByWithRelationInput | LicenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licencias.
     */
    cursor?: LicenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licencias.
     */
    distinct?: LicenciaScalarFieldEnum | LicenciaScalarFieldEnum[]
  }

  /**
   * Licencia findFirstOrThrow
   */
  export type LicenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * Filter, which Licencia to fetch.
     */
    where?: LicenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licencias to fetch.
     */
    orderBy?: LicenciaOrderByWithRelationInput | LicenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licencias.
     */
    cursor?: LicenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licencias.
     */
    distinct?: LicenciaScalarFieldEnum | LicenciaScalarFieldEnum[]
  }

  /**
   * Licencia findMany
   */
  export type LicenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * Filter, which Licencias to fetch.
     */
    where?: LicenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licencias to fetch.
     */
    orderBy?: LicenciaOrderByWithRelationInput | LicenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licencias.
     */
    cursor?: LicenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licencias.
     */
    skip?: number
    distinct?: LicenciaScalarFieldEnum | LicenciaScalarFieldEnum[]
  }

  /**
   * Licencia create
   */
  export type LicenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Licencia.
     */
    data: XOR<LicenciaCreateInput, LicenciaUncheckedCreateInput>
  }

  /**
   * Licencia createMany
   */
  export type LicenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licencias.
     */
    data: LicenciaCreateManyInput | LicenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Licencia createManyAndReturn
   */
  export type LicenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Licencias.
     */
    data: LicenciaCreateManyInput | LicenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Licencia update
   */
  export type LicenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Licencia.
     */
    data: XOR<LicenciaUpdateInput, LicenciaUncheckedUpdateInput>
    /**
     * Choose, which Licencia to update.
     */
    where: LicenciaWhereUniqueInput
  }

  /**
   * Licencia updateMany
   */
  export type LicenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licencias.
     */
    data: XOR<LicenciaUpdateManyMutationInput, LicenciaUncheckedUpdateManyInput>
    /**
     * Filter which Licencias to update
     */
    where?: LicenciaWhereInput
    /**
     * Limit how many Licencias to update.
     */
    limit?: number
  }

  /**
   * Licencia updateManyAndReturn
   */
  export type LicenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * The data used to update Licencias.
     */
    data: XOR<LicenciaUpdateManyMutationInput, LicenciaUncheckedUpdateManyInput>
    /**
     * Filter which Licencias to update
     */
    where?: LicenciaWhereInput
    /**
     * Limit how many Licencias to update.
     */
    limit?: number
  }

  /**
   * Licencia upsert
   */
  export type LicenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Licencia to update in case it exists.
     */
    where: LicenciaWhereUniqueInput
    /**
     * In case the Licencia found by the `where` argument doesn't exist, create a new Licencia with this data.
     */
    create: XOR<LicenciaCreateInput, LicenciaUncheckedCreateInput>
    /**
     * In case the Licencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenciaUpdateInput, LicenciaUncheckedUpdateInput>
  }

  /**
   * Licencia delete
   */
  export type LicenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
    /**
     * Filter which Licencia to delete.
     */
    where: LicenciaWhereUniqueInput
  }

  /**
   * Licencia deleteMany
   */
  export type LicenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licencias to delete
     */
    where?: LicenciaWhereInput
    /**
     * Limit how many Licencias to delete.
     */
    limit?: number
  }

  /**
   * Licencia.usuarios
   */
  export type Licencia$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Licencia without action
   */
  export type LicenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licencia
     */
    select?: LicenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licencia
     */
    omit?: LicenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenciaInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigMinAggregateOutputType = {
    id: string | null
    dark: boolean | null
    userId: string | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: string | null
    dark: boolean | null
    userId: string | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    dark: number
    userId: number
    _all: number
  }


  export type ConfigMinAggregateInputType = {
    id?: true
    dark?: true
    userId?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    dark?: true
    userId?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    dark?: true
    userId?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: string
    dark: boolean
    userId: string
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dark?: boolean
    userId?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dark?: boolean
    userId?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dark?: boolean
    userId?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectScalar = {
    id?: boolean
    dark?: boolean
    userId?: boolean
  }

  export type ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dark" | "userId", ExtArgs["result"]["config"]>

  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dark: boolean
      userId: string
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configs and returns the data saved in the database.
     * @param {ConfigCreateManyAndReturnArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs and returns the data updated in the database.
     * @param {ConfigUpdateManyAndReturnArgs} args - Arguments to update many Configs.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Config model
   */
  interface ConfigFieldRefs {
    readonly id: FieldRef<"Config", 'String'>
    readonly dark: FieldRef<"Config", 'Boolean'>
    readonly userId: FieldRef<"Config", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config createManyAndReturn
   */
  export type ConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config updateManyAndReturn
   */
  export type ConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to delete.
     */
    limit?: number
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    ipPublica: string | null
    registrado: boolean | null
    usuarioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    ipPublica: string | null
    registrado: boolean | null
    usuarioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    nombre: number
    ipPublica: number
    registrado: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    nombre?: true
    ipPublica?: true
    registrado?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    nombre?: true
    ipPublica?: true
    registrado?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    nombre?: true
    ipPublica?: true
    registrado?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    nombre: string
    ipPublica: string
    registrado: boolean
    usuarioId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ipPublica?: boolean
    registrado?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Device$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ipPublica?: boolean
    registrado?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Device$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ipPublica?: boolean
    registrado?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Device$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    nombre?: boolean
    ipPublica?: boolean
    registrado?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ipPublica" | "registrado" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Device$usuarioArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Device$usuarioArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Device$usuarioArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      ipPublica: string
      registrado: boolean
      usuarioId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Device$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Device$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly nombre: FieldRef<"Device", 'String'>
    readonly ipPublica: FieldRef<"Device", 'String'>
    readonly registrado: FieldRef<"Device", 'Boolean'>
    readonly usuarioId: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.usuario
   */
  export type Device$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Dispositivo
   */

  export type AggregateDispositivo = {
    _count: DispositivoCountAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  export type DispositivoMinAggregateOutputType = {
    id: string | null
    dispositivoId: string | null
    nombre: string | null
    inputSrt: string | null
    activo: boolean | null
    ultimaConexion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DispositivoMaxAggregateOutputType = {
    id: string | null
    dispositivoId: string | null
    nombre: string | null
    inputSrt: string | null
    activo: boolean | null
    ultimaConexion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DispositivoCountAggregateOutputType = {
    id: number
    dispositivoId: number
    nombre: number
    inputSrt: number
    activo: number
    ultimaConexion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DispositivoMinAggregateInputType = {
    id?: true
    dispositivoId?: true
    nombre?: true
    inputSrt?: true
    activo?: true
    ultimaConexion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DispositivoMaxAggregateInputType = {
    id?: true
    dispositivoId?: true
    nombre?: true
    inputSrt?: true
    activo?: true
    ultimaConexion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DispositivoCountAggregateInputType = {
    id?: true
    dispositivoId?: true
    nombre?: true
    inputSrt?: true
    activo?: true
    ultimaConexion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DispositivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo to aggregate.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivos
    **/
    _count?: true | DispositivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispositivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispositivoMaxAggregateInputType
  }

  export type GetDispositivoAggregateType<T extends DispositivoAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo[P]>
      : GetScalarType<T[P], AggregateDispositivo[P]>
  }




  export type DispositivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithAggregationInput | DispositivoOrderByWithAggregationInput[]
    by: DispositivoScalarFieldEnum[] | DispositivoScalarFieldEnum
    having?: DispositivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispositivoCountAggregateInputType | true
    _min?: DispositivoMinAggregateInputType
    _max?: DispositivoMaxAggregateInputType
  }

  export type DispositivoGroupByOutputType = {
    id: string
    dispositivoId: string
    nombre: string
    inputSrt: string
    activo: boolean
    ultimaConexion: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DispositivoCountAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  type GetDispositivoGroupByPayload<T extends DispositivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispositivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispositivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
            : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
        }
      >
    >


  export type DispositivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositivoId?: boolean
    nombre?: boolean
    inputSrt?: boolean
    activo?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositivoId?: boolean
    nombre?: boolean
    inputSrt?: boolean
    activo?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispositivoId?: boolean
    nombre?: boolean
    inputSrt?: boolean
    activo?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dispositivo"]>

  export type DispositivoSelectScalar = {
    id?: boolean
    dispositivoId?: boolean
    nombre?: boolean
    inputSrt?: boolean
    activo?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DispositivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dispositivoId" | "nombre" | "inputSrt" | "activo" | "ultimaConexion" | "createdAt" | "updatedAt", ExtArgs["result"]["dispositivo"]>

  export type $DispositivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dispositivoId: string
      nombre: string
      inputSrt: string
      activo: boolean
      ultimaConexion: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dispositivo"]>
    composites: {}
  }

  type DispositivoGetPayload<S extends boolean | null | undefined | DispositivoDefaultArgs> = $Result.GetResult<Prisma.$DispositivoPayload, S>

  type DispositivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispositivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispositivoCountAggregateInputType | true
    }

  export interface DispositivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo'], meta: { name: 'Dispositivo' } }
    /**
     * Find zero or one Dispositivo that matches the filter.
     * @param {DispositivoFindUniqueArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispositivoFindUniqueArgs>(args: SelectSubset<T, DispositivoFindUniqueArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispositivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispositivoFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispositivoFindUniqueOrThrowArgs>(args: SelectSubset<T, DispositivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispositivoFindFirstArgs>(args?: SelectSubset<T, DispositivoFindFirstArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispositivoFindFirstOrThrowArgs>(args?: SelectSubset<T, DispositivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany()
     * 
     * // Get first 10 Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispositivoFindManyArgs>(args?: SelectSubset<T, DispositivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispositivo.
     * @param {DispositivoCreateArgs} args - Arguments to create a Dispositivo.
     * @example
     * // Create one Dispositivo
     * const Dispositivo = await prisma.dispositivo.create({
     *   data: {
     *     // ... data to create a Dispositivo
     *   }
     * })
     * 
     */
    create<T extends DispositivoCreateArgs>(args: SelectSubset<T, DispositivoCreateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispositivos.
     * @param {DispositivoCreateManyArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispositivoCreateManyArgs>(args?: SelectSubset<T, DispositivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispositivos and returns the data saved in the database.
     * @param {DispositivoCreateManyAndReturnArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispositivos and only return the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispositivoCreateManyAndReturnArgs>(args?: SelectSubset<T, DispositivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispositivo.
     * @param {DispositivoDeleteArgs} args - Arguments to delete one Dispositivo.
     * @example
     * // Delete one Dispositivo
     * const Dispositivo = await prisma.dispositivo.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo
     *   }
     * })
     * 
     */
    delete<T extends DispositivoDeleteArgs>(args: SelectSubset<T, DispositivoDeleteArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispositivo.
     * @param {DispositivoUpdateArgs} args - Arguments to update one Dispositivo.
     * @example
     * // Update one Dispositivo
     * const dispositivo = await prisma.dispositivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispositivoUpdateArgs>(args: SelectSubset<T, DispositivoUpdateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispositivos.
     * @param {DispositivoDeleteManyArgs} args - Arguments to filter Dispositivos to delete.
     * @example
     * // Delete a few Dispositivos
     * const { count } = await prisma.dispositivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispositivoDeleteManyArgs>(args?: SelectSubset<T, DispositivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispositivoUpdateManyArgs>(args: SelectSubset<T, DispositivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos and returns the data updated in the database.
     * @param {DispositivoUpdateManyAndReturnArgs} args - Arguments to update many Dispositivos.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dispositivos and only return the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.updateManyAndReturn({
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
    updateManyAndReturn<T extends DispositivoUpdateManyAndReturnArgs>(args: SelectSubset<T, DispositivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispositivo.
     * @param {DispositivoUpsertArgs} args - Arguments to update or create a Dispositivo.
     * @example
     * // Update or create a Dispositivo
     * const dispositivo = await prisma.dispositivo.upsert({
     *   create: {
     *     // ... data to create a Dispositivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo we want to update
     *   }
     * })
     */
    upsert<T extends DispositivoUpsertArgs>(args: SelectSubset<T, DispositivoUpsertArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoCountArgs} args - Arguments to filter Dispositivos to count.
     * @example
     * // Count the number of Dispositivos
     * const count = await prisma.dispositivo.count({
     *   where: {
     *     // ... the filter for the Dispositivos we want to count
     *   }
     * })
    **/
    count<T extends DispositivoCountArgs>(
      args?: Subset<T, DispositivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispositivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispositivoAggregateArgs>(args: Subset<T, DispositivoAggregateArgs>): Prisma.PrismaPromise<GetDispositivoAggregateType<T>>

    /**
     * Group by Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoGroupByArgs} args - Group by arguments.
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
      T extends DispositivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispositivoGroupByArgs['orderBy'] }
        : { orderBy?: DispositivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispositivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo model
   */
  readonly fields: DispositivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispositivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Dispositivo model
   */
  interface DispositivoFieldRefs {
    readonly id: FieldRef<"Dispositivo", 'String'>
    readonly dispositivoId: FieldRef<"Dispositivo", 'String'>
    readonly nombre: FieldRef<"Dispositivo", 'String'>
    readonly inputSrt: FieldRef<"Dispositivo", 'String'>
    readonly activo: FieldRef<"Dispositivo", 'Boolean'>
    readonly ultimaConexion: FieldRef<"Dispositivo", 'DateTime'>
    readonly createdAt: FieldRef<"Dispositivo", 'DateTime'>
    readonly updatedAt: FieldRef<"Dispositivo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo findUnique
   */
  export type DispositivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findUniqueOrThrow
   */
  export type DispositivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findFirst
   */
  export type DispositivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findFirstOrThrow
   */
  export type DispositivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findMany
   */
  export type DispositivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Filter, which Dispositivos to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo create
   */
  export type DispositivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo.
     */
    data: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
  }

  /**
   * Dispositivo createMany
   */
  export type DispositivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo createManyAndReturn
   */
  export type DispositivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo update
   */
  export type DispositivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo.
     */
    data: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo to update.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo updateMany
   */
  export type DispositivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
  }

  /**
   * Dispositivo updateManyAndReturn
   */
  export type DispositivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
  }

  /**
   * Dispositivo upsert
   */
  export type DispositivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo to update in case it exists.
     */
    where: DispositivoWhereUniqueInput
    /**
     * In case the Dispositivo found by the `where` argument doesn't exist, create a new Dispositivo with this data.
     */
    create: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
    /**
     * In case the Dispositivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
  }

  /**
   * Dispositivo delete
   */
  export type DispositivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Filter which Dispositivo to delete.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo deleteMany
   */
  export type DispositivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivos to delete
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to delete.
     */
    limit?: number
  }

  /**
   * Dispositivo without action
   */
  export type DispositivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    telefono: 'telefono',
    ciudad: 'ciudad',
    subdominio: 'subdominio',
    codigo: 'codigo',
    activo: 'activo',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    licenciaId: 'licenciaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const LicenciaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenciaScalarFieldEnum = (typeof LicenciaScalarFieldEnum)[keyof typeof LicenciaScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    dark: 'dark',
    userId: 'userId'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ipPublica: 'ipPublica',
    registrado: 'registrado',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DispositivoScalarFieldEnum: {
    id: 'id',
    dispositivoId: 'dispositivoId',
    nombre: 'nombre',
    inputSrt: 'inputSrt',
    activo: 'activo',
    ultimaConexion: 'ultimaConexion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DispositivoScalarFieldEnum = (typeof DispositivoScalarFieldEnum)[keyof typeof DispositivoScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    ciudad?: StringNullableFilter<"Usuario"> | string | null
    subdominio?: StringFilter<"Usuario"> | string
    codigo?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    fechaInicio?: DateTimeFilter<"Usuario"> | Date | string
    fechaFin?: DateTimeFilter<"Usuario"> | Date | string
    licenciaId?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    licencia?: XOR<LicenciaScalarRelationFilter, LicenciaWhereInput>
    devices?: DeviceListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    subdominio?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    licenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    licencia?: LicenciaOrderByWithRelationInput
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    subdominio?: string
    codigo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    telefono?: StringNullableFilter<"Usuario"> | string | null
    ciudad?: StringNullableFilter<"Usuario"> | string | null
    activo?: BoolFilter<"Usuario"> | boolean
    fechaInicio?: DateTimeFilter<"Usuario"> | Date | string
    fechaFin?: DateTimeFilter<"Usuario"> | Date | string
    licenciaId?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    licencia?: XOR<LicenciaScalarRelationFilter, LicenciaWhereInput>
    devices?: DeviceListRelationFilter
  }, "id" | "username" | "email" | "subdominio" | "codigo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    subdominio?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    licenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    ciudad?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    subdominio?: StringWithAggregatesFilter<"Usuario"> | string
    codigo?: StringWithAggregatesFilter<"Usuario"> | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    fechaInicio?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    licenciaId?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type LicenciaWhereInput = {
    AND?: LicenciaWhereInput | LicenciaWhereInput[]
    OR?: LicenciaWhereInput[]
    NOT?: LicenciaWhereInput | LicenciaWhereInput[]
    id?: StringFilter<"Licencia"> | string
    tipo?: StringFilter<"Licencia"> | string
    createdAt?: DateTimeFilter<"Licencia"> | Date | string
    updatedAt?: DateTimeFilter<"Licencia"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }

  export type LicenciaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type LicenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenciaWhereInput | LicenciaWhereInput[]
    OR?: LicenciaWhereInput[]
    NOT?: LicenciaWhereInput | LicenciaWhereInput[]
    tipo?: StringFilter<"Licencia"> | string
    createdAt?: DateTimeFilter<"Licencia"> | Date | string
    updatedAt?: DateTimeFilter<"Licencia"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type LicenciaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenciaCountOrderByAggregateInput
    _max?: LicenciaMaxOrderByAggregateInput
    _min?: LicenciaMinOrderByAggregateInput
  }

  export type LicenciaScalarWhereWithAggregatesInput = {
    AND?: LicenciaScalarWhereWithAggregatesInput | LicenciaScalarWhereWithAggregatesInput[]
    OR?: LicenciaScalarWhereWithAggregatesInput[]
    NOT?: LicenciaScalarWhereWithAggregatesInput | LicenciaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Licencia"> | string
    tipo?: StringWithAggregatesFilter<"Licencia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Licencia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Licencia"> | Date | string
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    id?: StringFilter<"Config"> | string
    dark?: BoolFilter<"Config"> | boolean
    userId?: StringFilter<"Config"> | string
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    dark?: SortOrder
    userId?: SortOrder
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    dark?: BoolFilter<"Config"> | boolean
  }, "id" | "userId">

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    dark?: SortOrder
    userId?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Config"> | string
    dark?: BoolWithAggregatesFilter<"Config"> | boolean
    userId?: StringWithAggregatesFilter<"Config"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    nombre?: StringFilter<"Device"> | string
    ipPublica?: StringFilter<"Device"> | string
    registrado?: BoolFilter<"Device"> | boolean
    usuarioId?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ipPublica?: SortOrder
    registrado?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    nombre?: StringFilter<"Device"> | string
    ipPublica?: StringFilter<"Device"> | string
    registrado?: BoolFilter<"Device"> | boolean
    usuarioId?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ipPublica?: SortOrder
    registrado?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    nombre?: StringWithAggregatesFilter<"Device"> | string
    ipPublica?: StringWithAggregatesFilter<"Device"> | string
    registrado?: BoolWithAggregatesFilter<"Device"> | boolean
    usuarioId?: StringNullableWithAggregatesFilter<"Device"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type DispositivoWhereInput = {
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    id?: StringFilter<"Dispositivo"> | string
    dispositivoId?: StringFilter<"Dispositivo"> | string
    nombre?: StringFilter<"Dispositivo"> | string
    inputSrt?: StringFilter<"Dispositivo"> | string
    activo?: BoolFilter<"Dispositivo"> | boolean
    ultimaConexion?: DateTimeNullableFilter<"Dispositivo"> | Date | string | null
    createdAt?: DateTimeFilter<"Dispositivo"> | Date | string
    updatedAt?: DateTimeFilter<"Dispositivo"> | Date | string
  }

  export type DispositivoOrderByWithRelationInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
    nombre?: SortOrder
    inputSrt?: SortOrder
    activo?: SortOrder
    ultimaConexion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DispositivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dispositivoId?: string
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    nombre?: StringFilter<"Dispositivo"> | string
    inputSrt?: StringFilter<"Dispositivo"> | string
    activo?: BoolFilter<"Dispositivo"> | boolean
    ultimaConexion?: DateTimeNullableFilter<"Dispositivo"> | Date | string | null
    createdAt?: DateTimeFilter<"Dispositivo"> | Date | string
    updatedAt?: DateTimeFilter<"Dispositivo"> | Date | string
  }, "id" | "dispositivoId">

  export type DispositivoOrderByWithAggregationInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
    nombre?: SortOrder
    inputSrt?: SortOrder
    activo?: SortOrder
    ultimaConexion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DispositivoCountOrderByAggregateInput
    _max?: DispositivoMaxOrderByAggregateInput
    _min?: DispositivoMinOrderByAggregateInput
  }

  export type DispositivoScalarWhereWithAggregatesInput = {
    AND?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    OR?: DispositivoScalarWhereWithAggregatesInput[]
    NOT?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispositivo"> | string
    dispositivoId?: StringWithAggregatesFilter<"Dispositivo"> | string
    nombre?: StringWithAggregatesFilter<"Dispositivo"> | string
    inputSrt?: StringWithAggregatesFilter<"Dispositivo"> | string
    activo?: BoolWithAggregatesFilter<"Dispositivo"> | boolean
    ultimaConexion?: DateTimeNullableWithAggregatesFilter<"Dispositivo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dispositivo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dispositivo"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    licencia: LicenciaCreateNestedOneWithoutUsuariosInput
    devices?: DeviceCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    licenciaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licencia?: LicenciaUpdateOneRequiredWithoutUsuariosNestedInput
    devices?: DeviceUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    licenciaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    licenciaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    licenciaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenciaCreateInput = {
    id?: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutLicenciaInput
  }

  export type LicenciaUncheckedCreateInput = {
    id?: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLicenciaInput
  }

  export type LicenciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutLicenciaNestedInput
  }

  export type LicenciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutLicenciaNestedInput
  }

  export type LicenciaCreateManyInput = {
    id?: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateInput = {
    id?: string
    dark?: boolean
    userId: string
  }

  export type ConfigUncheckedCreateInput = {
    id?: string
    dark?: boolean
    userId: string
  }

  export type ConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dark?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dark?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigCreateManyInput = {
    id?: string
    dark?: boolean
    userId: string
  }

  export type ConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dark?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dark?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    id: string
    nombre: string
    ipPublica: string
    registrado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id: string
    nombre: string
    ipPublica: string
    registrado?: boolean
    usuarioId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyInput = {
    id: string
    nombre: string
    ipPublica: string
    registrado?: boolean
    usuarioId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoCreateInput = {
    id?: string
    dispositivoId: string
    nombre: string
    inputSrt: string
    activo?: boolean
    ultimaConexion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispositivoUncheckedCreateInput = {
    id?: string
    dispositivoId: string
    nombre: string
    inputSrt: string
    activo?: boolean
    ultimaConexion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispositivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    inputSrt?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ultimaConexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    inputSrt?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ultimaConexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoCreateManyInput = {
    id?: string
    dispositivoId: string
    nombre: string
    inputSrt: string
    activo?: boolean
    ultimaConexion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispositivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    inputSrt?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ultimaConexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    inputSrt?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ultimaConexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type LicenciaScalarRelationFilter = {
    is?: LicenciaWhereInput
    isNot?: LicenciaWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    ciudad?: SortOrder
    subdominio?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    licenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    ciudad?: SortOrder
    subdominio?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    licenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    ciudad?: SortOrder
    subdominio?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    licenciaId?: SortOrder
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenciaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenciaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    dark?: SortOrder
    userId?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    dark?: SortOrder
    userId?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    dark?: SortOrder
    userId?: SortOrder
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ipPublica?: SortOrder
    registrado?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ipPublica?: SortOrder
    registrado?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ipPublica?: SortOrder
    registrado?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DispositivoCountOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
    nombre?: SortOrder
    inputSrt?: SortOrder
    activo?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DispositivoMaxOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
    nombre?: SortOrder
    inputSrt?: SortOrder
    activo?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DispositivoMinOrderByAggregateInput = {
    id?: SortOrder
    dispositivoId?: SortOrder
    nombre?: SortOrder
    inputSrt?: SortOrder
    activo?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LicenciaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<LicenciaCreateWithoutUsuariosInput, LicenciaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: LicenciaCreateOrConnectWithoutUsuariosInput
    connect?: LicenciaWhereUniqueInput
  }

  export type DeviceCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DeviceCreateWithoutUsuarioInput, DeviceUncheckedCreateWithoutUsuarioInput> | DeviceCreateWithoutUsuarioInput[] | DeviceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUsuarioInput | DeviceCreateOrConnectWithoutUsuarioInput[]
    createMany?: DeviceCreateManyUsuarioInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DeviceCreateWithoutUsuarioInput, DeviceUncheckedCreateWithoutUsuarioInput> | DeviceCreateWithoutUsuarioInput[] | DeviceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUsuarioInput | DeviceCreateOrConnectWithoutUsuarioInput[]
    createMany?: DeviceCreateManyUsuarioInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LicenciaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<LicenciaCreateWithoutUsuariosInput, LicenciaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: LicenciaCreateOrConnectWithoutUsuariosInput
    upsert?: LicenciaUpsertWithoutUsuariosInput
    connect?: LicenciaWhereUniqueInput
    update?: XOR<XOR<LicenciaUpdateToOneWithWhereWithoutUsuariosInput, LicenciaUpdateWithoutUsuariosInput>, LicenciaUncheckedUpdateWithoutUsuariosInput>
  }

  export type DeviceUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DeviceCreateWithoutUsuarioInput, DeviceUncheckedCreateWithoutUsuarioInput> | DeviceCreateWithoutUsuarioInput[] | DeviceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUsuarioInput | DeviceCreateOrConnectWithoutUsuarioInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUsuarioInput | DeviceUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DeviceCreateManyUsuarioInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUsuarioInput | DeviceUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUsuarioInput | DeviceUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DeviceCreateWithoutUsuarioInput, DeviceUncheckedCreateWithoutUsuarioInput> | DeviceCreateWithoutUsuarioInput[] | DeviceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUsuarioInput | DeviceCreateOrConnectWithoutUsuarioInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUsuarioInput | DeviceUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DeviceCreateManyUsuarioInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUsuarioInput | DeviceUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUsuarioInput | DeviceUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutLicenciaInput = {
    create?: XOR<UsuarioCreateWithoutLicenciaInput, UsuarioUncheckedCreateWithoutLicenciaInput> | UsuarioCreateWithoutLicenciaInput[] | UsuarioUncheckedCreateWithoutLicenciaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicenciaInput | UsuarioCreateOrConnectWithoutLicenciaInput[]
    createMany?: UsuarioCreateManyLicenciaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutLicenciaInput = {
    create?: XOR<UsuarioCreateWithoutLicenciaInput, UsuarioUncheckedCreateWithoutLicenciaInput> | UsuarioCreateWithoutLicenciaInput[] | UsuarioUncheckedCreateWithoutLicenciaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicenciaInput | UsuarioCreateOrConnectWithoutLicenciaInput[]
    createMany?: UsuarioCreateManyLicenciaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutLicenciaNestedInput = {
    create?: XOR<UsuarioCreateWithoutLicenciaInput, UsuarioUncheckedCreateWithoutLicenciaInput> | UsuarioCreateWithoutLicenciaInput[] | UsuarioUncheckedCreateWithoutLicenciaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicenciaInput | UsuarioCreateOrConnectWithoutLicenciaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutLicenciaInput | UsuarioUpsertWithWhereUniqueWithoutLicenciaInput[]
    createMany?: UsuarioCreateManyLicenciaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutLicenciaInput | UsuarioUpdateWithWhereUniqueWithoutLicenciaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutLicenciaInput | UsuarioUpdateManyWithWhereWithoutLicenciaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutLicenciaNestedInput = {
    create?: XOR<UsuarioCreateWithoutLicenciaInput, UsuarioUncheckedCreateWithoutLicenciaInput> | UsuarioCreateWithoutLicenciaInput[] | UsuarioUncheckedCreateWithoutLicenciaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLicenciaInput | UsuarioCreateOrConnectWithoutLicenciaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutLicenciaInput | UsuarioUpsertWithWhereUniqueWithoutLicenciaInput[]
    createMany?: UsuarioCreateManyLicenciaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutLicenciaInput | UsuarioUpdateWithWhereUniqueWithoutLicenciaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutLicenciaInput | UsuarioUpdateManyWithWhereWithoutLicenciaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UsuarioCreateWithoutDevicesInput, UsuarioUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDevicesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutDevicesNestedInput = {
    create?: XOR<UsuarioCreateWithoutDevicesInput, UsuarioUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDevicesInput
    upsert?: UsuarioUpsertWithoutDevicesInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDevicesInput, UsuarioUpdateWithoutDevicesInput>, UsuarioUncheckedUpdateWithoutDevicesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LicenciaCreateWithoutUsuariosInput = {
    id?: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenciaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenciaCreateOrConnectWithoutUsuariosInput = {
    where: LicenciaWhereUniqueInput
    create: XOR<LicenciaCreateWithoutUsuariosInput, LicenciaUncheckedCreateWithoutUsuariosInput>
  }

  export type DeviceCreateWithoutUsuarioInput = {
    id: string
    nombre: string
    ipPublica: string
    registrado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUncheckedCreateWithoutUsuarioInput = {
    id: string
    nombre: string
    ipPublica: string
    registrado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutUsuarioInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUsuarioInput, DeviceUncheckedCreateWithoutUsuarioInput>
  }

  export type DeviceCreateManyUsuarioInputEnvelope = {
    data: DeviceCreateManyUsuarioInput | DeviceCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LicenciaUpsertWithoutUsuariosInput = {
    update: XOR<LicenciaUpdateWithoutUsuariosInput, LicenciaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<LicenciaCreateWithoutUsuariosInput, LicenciaUncheckedCreateWithoutUsuariosInput>
    where?: LicenciaWhereInput
  }

  export type LicenciaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: LicenciaWhereInput
    data: XOR<LicenciaUpdateWithoutUsuariosInput, LicenciaUncheckedUpdateWithoutUsuariosInput>
  }

  export type LicenciaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenciaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUsuarioInput, DeviceUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DeviceCreateWithoutUsuarioInput, DeviceUncheckedCreateWithoutUsuarioInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUsuarioInput, DeviceUncheckedUpdateWithoutUsuarioInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUsuarioInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    nombre?: StringFilter<"Device"> | string
    ipPublica?: StringFilter<"Device"> | string
    registrado?: BoolFilter<"Device"> | boolean
    usuarioId?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type UsuarioCreateWithoutLicenciaInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLicenciaInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLicenciaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLicenciaInput, UsuarioUncheckedCreateWithoutLicenciaInput>
  }

  export type UsuarioCreateManyLicenciaInputEnvelope = {
    data: UsuarioCreateManyLicenciaInput | UsuarioCreateManyLicenciaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutLicenciaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutLicenciaInput, UsuarioUncheckedUpdateWithoutLicenciaInput>
    create: XOR<UsuarioCreateWithoutLicenciaInput, UsuarioUncheckedCreateWithoutLicenciaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutLicenciaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutLicenciaInput, UsuarioUncheckedUpdateWithoutLicenciaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutLicenciaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutLicenciaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    ciudad?: StringNullableFilter<"Usuario"> | string | null
    subdominio?: StringFilter<"Usuario"> | string
    codigo?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    fechaInicio?: DateTimeFilter<"Usuario"> | Date | string
    fechaFin?: DateTimeFilter<"Usuario"> | Date | string
    licenciaId?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioCreateWithoutDevicesInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    licencia: LicenciaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutDevicesInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    licenciaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutDevicesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDevicesInput, UsuarioUncheckedCreateWithoutDevicesInput>
  }

  export type UsuarioUpsertWithoutDevicesInput = {
    update: XOR<UsuarioUpdateWithoutDevicesInput, UsuarioUncheckedUpdateWithoutDevicesInput>
    create: XOR<UsuarioCreateWithoutDevicesInput, UsuarioUncheckedCreateWithoutDevicesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDevicesInput, UsuarioUncheckedUpdateWithoutDevicesInput>
  }

  export type UsuarioUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licencia?: LicenciaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    licenciaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyUsuarioInput = {
    id: string
    nombre: string
    ipPublica: string
    registrado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ipPublica?: StringFieldUpdateOperationsInput | string
    registrado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyLicenciaInput = {
    id?: string
    username: string
    email: string
    telefono?: string | null
    ciudad?: string | null
    subdominio: string
    codigo: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateWithoutLicenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLicenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutLicenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    subdominio?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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