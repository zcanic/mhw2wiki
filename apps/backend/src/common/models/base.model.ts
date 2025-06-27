import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  iconUrl?: string;
}

@ObjectType()
export class GameImage {
  @Field()
  url: string;

  @Field()
  alt: string;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  height?: number;
}

@ObjectType()
export class Rarity {
  @Field(() => Int)
  level: number;

  @Field()
  color: string;

  @Field()
  displayName: string;
}
