import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Monster } from './models/monster.model';
import { MonstersEnhancedService } from './monsters-enhanced.service';

@Resolver(() => Monster)
export class MonstersEnhancedResolver {
  constructor(private readonly monstersEnhancedService: MonstersEnhancedService) {}

  @Query(() => Monster, { name: 'monsterWithRewards', nullable: true })
  async findOneWithRewards(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Monster | null> {
    return this.monstersEnhancedService.findOneWithRewards(id);
  }

  @Query(() => [Monster], { name: 'monstersByDroppedItem' })
  async findByDroppedItem(
    @Args('itemName') itemName: string,
  ): Promise<Monster[]> {
    return this.monstersEnhancedService.findByDroppedItem(itemName);
  }

  @Query(() => [String], { name: 'habitatsForMonster' })
  async findHabitatsForMonster(
    @Args('monsterId', { type: () => ID }) monsterId: string,
  ): Promise<string[]> {
    return this.monstersEnhancedService.findHabitatsForMonster(monsterId);
  }
}
