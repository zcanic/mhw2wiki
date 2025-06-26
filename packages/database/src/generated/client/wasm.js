
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ItemScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  descriptions: 'descriptions',
  kind: 'kind',
  rarity: 'rarity',
  max_count: 'max_count',
  sell_price: 'sell_price',
  buy_price: 'buy_price',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SkillScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  descriptions: 'descriptions',
  ranks: 'ranks',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MonsterScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  descriptions: 'descriptions',
  features: 'features',
  species: 'species',
  parts: 'parts',
  rewards: 'rewards',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ArmorSetScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  rarity: 'rarity',
  set_bonus: 'set_bonus',
  group_bonus: 'group_bonus',
  pieces: 'pieces',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AmuletScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  ranks: 'ranks',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AccessoryScalarFieldEnum = {
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
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CharmScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WeaponSeriesScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WeaponScalarFieldEnum = {
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
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ArmorUpgradeScalarFieldEnum = {
  id: 'id',
  rarity: 'rarity',
  steps: 'steps',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SpeciesScalarFieldEnum = {
  id: 'id',
  kind: 'kind',
  names: 'names',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StageScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  areas: 'areas',
  camps: 'camps',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.HuntingHornMelodyScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  notes: 'notes',
  songs: 'songs',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.HuntingHornSongScalarFieldEnum = {
  id: 'id',
  effect_id: 'effect_id',
  notes: 'notes',
  names: 'names',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PartNameScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  names: 'names',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Item: 'Item',
  Skill: 'Skill',
  Monster: 'Monster',
  ArmorSet: 'ArmorSet',
  Amulet: 'Amulet',
  Accessory: 'Accessory',
  Charm: 'Charm',
  WeaponSeries: 'WeaponSeries',
  Weapon: 'Weapon',
  ArmorUpgrade: 'ArmorUpgrade',
  Species: 'Species',
  Stage: 'Stage',
  HuntingHornMelody: 'HuntingHornMelody',
  HuntingHornSong: 'HuntingHornSong',
  PartName: 'PartName'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
