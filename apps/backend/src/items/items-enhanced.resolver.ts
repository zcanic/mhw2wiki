import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Item } from '../common/models/item.model';
import { EnhancedItem } from './models/enhanced-item.model';
import { ItemsEnhancedService } from './items-enhanced.service';

@Resolver(() => EnhancedItem)
export class ItemsEnhancedResolver {
  constructor(private readonly itemsEnhancedService: ItemsEnhancedService) {}

  @Query(() => EnhancedItem, { name: 'itemWithSources', nullable: true })
  async findOneWithSources(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<EnhancedItem | null> {
    return this.itemsEnhancedService.findOneWithSources(id);
  }

  @Query(() => [Item], { name: 'itemsByMonster' })
  async findByMonster(
    @Args('monsterId', { type: () => ID }) monsterId: string,
  ): Promise<Item[]> {
    return this.itemsEnhancedService.findItemsByMonster(monsterId);
  }

  @Query(() => [Item], { name: 'itemsByWeapon' })
  async findByWeapon(
    @Args('weaponId', { type: () => ID }) weaponId: string,
  ): Promise<Item[]> {
    return this.itemsEnhancedService.findItemsByWeapon(weaponId);
  }
}
