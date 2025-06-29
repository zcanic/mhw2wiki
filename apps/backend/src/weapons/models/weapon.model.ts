import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Weapon {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  type: string;

  @Field(() => Float)
  attack: number;

  @Field(() => Float)
  rarity: number;

  @Field({ nullable: true })
  element?: string;
}