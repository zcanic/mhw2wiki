import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Monster {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  species: string;

  @Field(() => Int)
  threatLevel: number;

  @Field(() => [String])
  elements: string[];

  @Field(() => [String])
  weaknesses: string[];

  @Field(() => [String])
  locations: string[];

  @Field({ nullable: true })
  habitat?: string;

  @Field({ nullable: true })
  iconUrl?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field(() => [MonsterReward])
  rewards: MonsterReward[];
}

@ObjectType()
export class MonsterReward {
  @Field()
  itemName: string;

  @Field()
  method: string;

  @Field(() => Int)
  dropRate: number;

  @Field({ nullable: true })
  rank?: string;
}
