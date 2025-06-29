import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/models/base.model';

// 武器类型枚举
export enum WeaponType {
  GREAT_SWORD = 'GREAT_SWORD',
  LONG_SWORD = 'LONG_SWORD',
  SWORD_AND_SHIELD = 'SWORD_AND_SHIELD',
  DUAL_BLADES = 'DUAL_BLADES',
  HAMMER = 'HAMMER',
  HUNTING_HORN = 'HUNTING_HORN',
  LANCE = 'LANCE',
  GUNLANCE = 'GUNLANCE',
  SWITCH_AXE = 'SWITCH_AXE',
  CHARGE_BLADE = 'CHARGE_BLADE',
  INSECT_GLAIVE = 'INSECT_GLAIVE',
  LIGHT_BOWGUN = 'LIGHT_BOWGUN',
  HEAVY_BOWGUN = 'HEAVY_BOWGUN',
  BOW = 'BOW',
}

// 元素类型枚举 (从monster模型导入)
export enum ElementType {
  FIRE = 'FIRE',
  WATER = 'WATER',
  THUNDER = 'THUNDER',
  ICE = 'ICE',
  DRAGON = 'DRAGON',
  POISON = 'POISON',
  SLEEP = 'SLEEP',
  PARALYSIS = 'PARALYSIS',
  BLAST = 'BLAST',
  NON_ELEMENTAL = 'NON_ELEMENTAL',
}

// 注册枚举到GraphQL
registerEnumType(WeaponType, {
  name: 'WeaponType',
  description: 'Weapon type classification',
});

registerEnumType(ElementType, {
  name: 'ElementType', 
  description: 'Element and status effect types',
});

@ObjectType()
export class Weapon extends BaseEntity {
  @Field(() => Int)
  gameId: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  nameZh?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  descriptionJa?: string;

  @Field({ nullable: true })
  descriptionZh?: string;

  @Field(() => WeaponType)
  weaponType: WeaponType;

  // Alias for frontend compatibility
  @Field(() => String)
  get type(): string {
    return this.weaponType;
  }

  @Field(() => Int)
  rarity: number;

  @Field(() => Int)
  rawAttack: number;

  @Field(() => Int)
  affinity: number;

  @Field(() => Int)
  defense: number;

  @Field({ nullable: true })
  sharpnessData?: string;

  @Field({ nullable: true })
  handicraft?: string;

  @Field(() => ElementType, { nullable: true })
  elementType?: ElementType;

  @Field(() => Int, { nullable: true })
  elementDamage?: number;

  @Field()
  elementHidden: boolean;

  @Field(() => Int)
  level1Slots: number;

  @Field(() => Int)
  level2Slots: number;

  @Field(() => Int)
  level3Slots: number;

  @Field(() => Int)
  level4Slots: number;

  // 远程武器专用字段
  @Field({ nullable: true })
  ammoData?: string;

  @Field({ nullable: true })
  coatings?: string;

  @Field({ nullable: true })
  chargeLevels?: string;

  // 狩猎笛专用字段
  @Field({ nullable: true })
  melodies?: string;

  @Field({ nullable: true })
  songs?: string;

  // 虫棍专用字段
  @Field({ nullable: true })
  kinsectBonus?: string;

  @Field(() => Int)
  craftingCost: number;

  @Field(() => Int)
  upgradeCost: number;

  @Field(() => [WeaponMaterial])
  materials: WeaponMaterial[];

  @Field(() => [WeaponSkill])
  skills: WeaponSkill[];

  @Field(() => Weapon, { nullable: true })
  upgradeFrom?: Weapon;

  @Field(() => [Weapon])
  upgradeTo: Weapon[];

  @Field(() => WeaponSeries, { nullable: true })
  series?: WeaponSeries;

  // 从BaseEntity继承: id, name, description, imageUrl, iconUrl
}

@ObjectType()
export class WeaponMaterial {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Item)
  item: Item;
}

@ObjectType()
export class WeaponSkill {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  level: number;

  @Field(() => Skill)
  skill: Skill;
}

@ObjectType()
export class WeaponSeries {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  gameId: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  nameZh?: string;

  @Field(() => [Weapon])
  weapons: Weapon[];
}

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  gameId: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  nameZh?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  descriptionJa?: string;

  @Field({ nullable: true })
  descriptionZh?: string;

  @Field(() => Int)
  maxLevel: number;

  @Field({ nullable: true })
  category?: string;
}

@ObjectType()
export class Item {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  gameId: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  nameZh?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  descriptionJa?: string;

  @Field({ nullable: true })
  descriptionZh?: string;

  @Field()
  category: string;

  @Field(() => Int)
  rarity: number;

  @Field(() => Int)
  value: number;

  @Field(() => Int, { nullable: true })
  carryLimit?: number;

  @Field({ nullable: true })
  iconUrl?: string;
}
