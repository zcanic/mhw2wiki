import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { Weapon } from './models/weapon.model';
import { WeaponsService } from './weapons.service';

@Resolver(() => Weapon)
export class WeaponsResolver {
  constructor(private readonly weaponsService: WeaponsService) {}

  @Query(() => [Weapon], { name: 'weapons' })
  async findAll(): Promise<Weapon[]> {
    return this.weaponsService.findAll();
  }

  @Query(() => Weapon, { name: 'weapon', nullable: true })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Weapon | null> {
    return this.weaponsService.findOne(id);
  }

  @Query(() => [Weapon], { name: 'weaponsByType' })
  async findByType(
    @Args('type') type: string,
  ): Promise<Weapon[]> {
    return this.weaponsService.findByType(type);
  }

  @Query(() => [Weapon], { name: 'weaponsByRarity' })
  async findByRarity(
    @Args('rarity', { type: () => Int }) rarity: number,
  ): Promise<Weapon[]> {
    return this.weaponsService.findByRarity(rarity);
  }

  @Query(() => [Weapon], { name: 'weaponsByElement' })
  async findByElement(
    @Args('element') element: string,
  ): Promise<Weapon[]> {
    return this.weaponsService.findByElement(element);
  }
}
