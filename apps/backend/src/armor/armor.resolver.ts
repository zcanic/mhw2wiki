import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { ArmorPiece } from './models/armor.model';
import { ArmorService } from './armor.service';

@Resolver(() => ArmorPiece)
export class ArmorResolver {
  constructor(private readonly armorService: ArmorService) {}

  @Query(() => [ArmorPiece], { name: 'armorPieces' })
  async findAll(): Promise<ArmorPiece[]> {
    return this.armorService.findAll();
  }

  @Query(() => ArmorPiece, { name: 'armorPiece', nullable: true })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ArmorPiece | null> {
    return this.armorService.findOne(id);
  }

  @Query(() => [ArmorPiece], { name: 'armorPiecesByType' })
  async findByType(
    @Args('type') type: string,
  ): Promise<ArmorPiece[]> {
    return this.armorService.findByType(type);
  }

  @Query(() => [ArmorPiece], { name: 'armorPiecesBySet' })
  async findBySet(
    @Args('armorSet') armorSet: string,
  ): Promise<ArmorPiece[]> {
    return this.armorService.findBySet(armorSet);
  }

  @Query(() => [ArmorPiece], { name: 'armorPiecesByRarity' })
  async findByRarity(
    @Args('rarity', { type: () => Int }) rarity: number,
  ): Promise<ArmorPiece[]> {
    return this.armorService.findByRarity(rarity);
  }
}
