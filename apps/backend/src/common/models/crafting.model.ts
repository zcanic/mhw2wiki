import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class CraftingMaterial {
  @Field(() => ID)
  id: string;

  @Field()
  itemName: string;

  @Field(() => Int)
  quantity: number;
}

@ObjectType()
export class CraftingRecipe {
  @Field(() => ID)
  id: string;

  @Field()
  resultItem: string;

  @Field(() => Int)
  resultQuantity: number;

  @Field(() => [CraftingMaterial])
  materials: CraftingMaterial[];

  @Field({ nullable: true })
  craftingLocation?: string;

  @Field(() => Int, { nullable: true })
  craftingTime?: number;
}
