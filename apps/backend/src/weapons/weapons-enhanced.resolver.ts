import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Weapon } from './models/weapon.model';
import { EnhancedWeapon } from './models/enhanced-weapon.model';
import { WeaponsEnhancedService } from './weapons-enhanced.service';

@Resolver(() => EnhancedWeapon)
export class WeaponsEnhancedResolver {
  constructor(private readonly weaponsEnhancedService: WeaponsEnhancedService) {}

  @Query(() => EnhancedWeapon, { name: 'weaponWithMaterials', nullable: true })
  async findOneWithMaterials(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<EnhancedWeapon | null> {
    return this.weaponsEnhancedService.findOneWithMaterials(id);
  }

  @Query(() => [Weapon], { name: 'weaponsByMaterial' })
  async findByMaterial(
    @Args('materialName') materialName: string,
  ): Promise<Weapon[]> {
    return this.weaponsEnhancedService.findByMaterial(materialName);
  }

  @Query(() => [Weapon], { name: 'weaponsByTree' })
  async findByWeaponTree(
    @Args('treeName') treeName: string,
  ): Promise<Weapon[]> {
    return this.weaponsEnhancedService.findByWeaponTree(treeName);
  }
}
