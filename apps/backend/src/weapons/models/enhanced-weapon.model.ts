import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WeaponMaterial {
  @Field()
  itemName: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int, { nullable: true })
  rarity?: number;
}

@ObjectType()
export class WeaponUpgrade {
  @Field(() => Int)
  level: number;

  @Field(() => Int)
  attack: number;

  @Field(() => [WeaponMaterial])
  materials: WeaponMaterial[];
}

@ObjectType()
export class EnhancedWeapon {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  type: string;

  @Field(() => Int)
  attack: number;

  @Field(() => Int)
  rarity: number;

  @Field({ nullable: true })
  element?: string;

  @Field(() => [WeaponMaterial], { nullable: true })
  materials?: WeaponMaterial[];

  @Field(() => [WeaponUpgrade], { nullable: true })
  upgrades?: WeaponUpgrade[];

  @Field({ nullable: true })
  weaponTree?: string;
}
