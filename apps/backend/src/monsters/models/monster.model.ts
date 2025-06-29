import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/models/base.model';

// 注册枚举类型用于GraphQL
export enum MonsterType {
  FLYING_WYVERN = 'FLYING_WYVERN',
  BRUTE_WYVERN = 'BRUTE_WYVERN',
  FANGED_WYVERN = 'FANGED_WYVERN',
  PISCINE_WYVERN = 'PISCINE_WYVERN',
  BIRD_WYVERN = 'BIRD_WYVERN',
  FANGED_BEAST = 'FANGED_BEAST',
  HERBIVORE = 'HERBIVORE',
  NEOPTERON = 'NEOPTERON',
  TEMNOCERAN = 'TEMNOCERAN',
  AMPHIBIAN = 'AMPHIBIAN',
  ELDER_DRAGON = 'ELDER_DRAGON',
  DEMI_ELDER = 'DEMI_ELDER',
  CONSTRUCT = 'CONSTRUCT',
  UNKNOWN = 'UNKNOWN',
}

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

export enum ThreatLevel {
  LEVEL_1 = 'LEVEL_1',
  LEVEL_2 = 'LEVEL_2',
  LEVEL_3 = 'LEVEL_3',
  LEVEL_4 = 'LEVEL_4',
  LEVEL_5 = 'LEVEL_5',
  LEVEL_6 = 'LEVEL_6',
  LEVEL_7 = 'LEVEL_7',
}

// 注册枚举到GraphQL
registerEnumType(MonsterType, {
  name: 'MonsterType',
  description: 'Monster species classification',
});

registerEnumType(ElementType, {
  name: 'ElementType',
  description: 'Element and status effect types',
});

registerEnumType(ThreatLevel, {
  name: 'ThreatLevel',
  description: 'Monster threat level (1-10)',
});

@ObjectType()
export class Stage {
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

  @Field(() => Int)
  areas: number;

  @Field({ nullable: true })
  basecamp?: string;

  @Field({ nullable: true })
  climate?: string;

  @Field({ nullable: true })
  ecosystem?: string;

  @Field({ nullable: true })
  mapUrl?: string;

  @Field({ nullable: true })
  imageUrl?: string;
}

@ObjectType()
export class LargeMonster extends BaseEntity {
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

  @Field(() => MonsterType)
  monsterType: MonsterType;

  @Field(() => ThreatLevel)
  threatLevel: ThreatLevel;

  @Field({ nullable: true })
  size?: string;

  @Field(() => [ElementType])
  elements: ElementType[];

  @Field(() => [ElementType])
  weaknesses: ElementType[];

  @Field(() => [ElementType])
  resistances: ElementType[];

  @Field(() => [MonsterHabitat])
  habitats: MonsterHabitat[];

  @Field(() => [MonsterBodyPart])
  bodyParts: MonsterBodyPart[];

  @Field(() => [MonsterReward])
  rewards: MonsterReward[];

  // 从BaseEntity继承: id, name, description, imageUrl, iconUrl
}

@ObjectType()
export class MonsterHabitat {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  stageId: number;

  @Field()
  isMainHabitat: boolean;

  @Field({ nullable: true })
  conditions?: string;

  @Field(() => Stage)
  stage: Stage;
}

@ObjectType()
export class MonsterBodyPart {
  @Field(() => Int)
  id: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  nameZh?: string;

  @Field()
  breakable: boolean;

  @Field()
  severable: boolean;

  @Field(() => Int)
  cutDamage: number;

  @Field(() => Int)
  bluntDamage: number;

  @Field(() => Int)
  shotDamage: number;

  @Field(() => Int)
  fireResistance: number;

  @Field(() => Int)
  waterResistance: number;

  @Field(() => Int)
  thunderResistance: number;

  @Field(() => Int)
  iceResistance: number;

  @Field(() => Int)
  dragonResistance: number;
}

@ObjectType()
export class MonsterReward {
  @Field(() => Int)
  id: number;

  @Field()
  method: string; // 'carve', 'break', 'capture', 'shiny', 'quest_reward'

  @Field()
  rank: string; // 'Low', 'High', 'Master'

  @Field(() => Int)
  dropRate: number;

  @Field(() => Int)
  quantity: number;

  @Field({ nullable: true })
  condition?: string;

  @Field(() => Item)
  item: Item;
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

// 保留原有的Monster模型作为向后兼容（标记为废弃）
@ObjectType()
export class Monster extends BaseEntity {
  @Field()
  species: string;

  @Field(() => [String])
  elements: string[];

  @Field(() => [String])
  weaknesses: string[];

  @Field(() => Int)
  threatLevel: number;

  @Field({ nullable: true })
  habitat?: string;

  @Field(() => [String])
  locations: string[];

  @Field(() => [MonsterReward])
  rewards: MonsterReward[];
}
