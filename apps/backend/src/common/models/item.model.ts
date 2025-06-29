import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

// 共享的Item模型，避免循环依赖
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

  @Field(() => Float)
  rarity: number;

  @Field(() => Float)
  value: number;
}
