import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { Monster } from './models/monster.model';
import { MonstersService } from './monsters.service';

@Resolver(() => Monster)
export class MonstersResolver {
  constructor(private readonly monstersService: MonstersService) {}

  @Query(() => [Monster], { name: 'monsters' })
  async findAll(): Promise<Monster[]> {
    return this.monstersService.findAll();
  }

  @Query(() => Monster, { name: 'monster', nullable: true })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Monster | null> {
    return this.monstersService.findOne(id);
  }

  @Query(() => [Monster], { name: 'monstersBySpecies' })
  async findBySpecies(
    @Args('species') species: string,
  ): Promise<Monster[]> {
    return this.monstersService.findBySpecies(species);
  }

  @Query(() => [Monster], { name: 'monstersByThreatLevel' })
  async findByThreatLevel(
    @Args('level', { type: () => Int }) level: number,
  ): Promise<Monster[]> {
    return this.monstersService.findByThreatLevel(level);
  }

  @Query(() => [Monster], { name: 'monstersByLocation' })
  async findByLocation(
    @Args('location') location: string,
  ): Promise<Monster[]> {
    return this.monstersService.findByLocation(location);
  }
}
