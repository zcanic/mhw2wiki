import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { Item } from '../common/models/item.model';
import { ItemsService } from './items.service';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [Item], { name: 'items' })
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'item', nullable: true })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Item | null> {
    return this.itemsService.findOne(id);
  }

  @Query(() => [Item], { name: 'itemsByCategory' })
  async findByCategory(
    @Args('category') category: string,
  ): Promise<Item[]> {
    return this.itemsService.findByCategory(category);
  }

  @Query(() => [Item], { name: 'itemsByRarity' })
  async findByRarity(
    @Args('rarity', { type: () => Int }) rarity: number,
  ): Promise<Item[]> {
    return this.itemsService.findByRarity(rarity);
  }

  @Query(() => [Item], { name: 'searchItems' })
  async searchByName(
    @Args('name') name: string,
  ): Promise<Item[]> {
    return this.itemsService.searchByName(name);
  }
}
