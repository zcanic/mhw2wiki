import { Injectable } from '@nestjs/common';
import { Monster } from './models/monster.model';

@Injectable()
export class MonstersService {
  private mockMonsters: Monster[] = [
    {
      id: '1',
      name: 'Great Jagras',
      species: 'Fanged Wyvern',
      threatLevel: 1,
      description: 'A glutton that devours anything and everything.',
      elements: [],
      weaknesses: ['Fire', 'Thunder'],
      locations: ['Ancient Forest'],
      habitat: 'Forest',
      rewards: [
        {
          itemName: 'Great Jagras Hide',
          method: 'Carve',
          dropRate: 50,
          rank: 'Low'
        }
      ]
    }
  ];

  async findAll(): Promise<Monster[]> {
    return this.mockMonsters;
  }

  async findOne(id: string): Promise<Monster | null> {
    return this.mockMonsters.find(monster => monster.id === id) || null;
  }

  async findBySpecies(species: string): Promise<Monster[]> {
    return this.mockMonsters.filter(monster => 
      monster.species.toLowerCase().includes(species.toLowerCase())
    );
  }

  async findByThreatLevel(level: number): Promise<Monster[]> {
    return this.mockMonsters.filter(monster => monster.threatLevel === level);
  }

  async findByLocation(location: string): Promise<Monster[]> {
    return this.mockMonsters.filter(monster =>
      monster.locations.some(loc => 
        loc.toLowerCase().includes(location.toLowerCase())
      )
    );
  }
}
