import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ArmorPiece {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  type: string;

  @Field()
  rarity: number;

  @Field()
  defense: number;

  @Field()
  armorSet: string;
}
