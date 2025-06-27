import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  category: string;

  @Field()
  rarity: number;

  @Field()
  value: number;
}
