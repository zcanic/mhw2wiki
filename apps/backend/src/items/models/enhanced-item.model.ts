import { ObjectType, Field } from '@nestjs/graphql';
import { Item } from '../../common/models/item.model';

@ObjectType()
export class ItemSource {
  @Field()
  monsterName: string;

  @Field()
  method: string;

  @Field()
  dropRate: number;

  @Field({ nullable: true })
  rank?: string;
}

@ObjectType()
export class ItemUsage {
  @Field()
  type: string; // 'weapon' | 'armor' | 'upgrade'

  @Field()
  itemName: string;

  @Field()
  quantity: number;
}

@ObjectType()
export class EnhancedItem extends Item {
  @Field(() => [ItemSource], { nullable: true })
  sources?: ItemSource[];

  @Field(() => [ItemUsage], { nullable: true })
  usages?: ItemUsage[];
}
