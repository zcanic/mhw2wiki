import { Injectable } from '@nestjs/common';
import { Weapon } from './models/weapon.model';

@Injectable()
export class WeaponsService {
  private mockWeapons: Weapon[] = [
    {
      id: '1',
      name: 'Iron Sword',
      type: 'Great Sword',
      attack: 100,
      rarity: 1,
      description: 'A basic iron great sword.'
    }
  ];

  async findAll(): Promise<Weapon[]> {
    return this.mockWeapons;
  }

  async findOne(id: string): Promise<Weapon | null> {
    return this.mockWeapons.find(weapon => weapon.id === id) || null;
  }

  async findByType(type: string): Promise<Weapon[]> {
    return this.mockWeapons.filter(weapon => 
      weapon.type.toLowerCase().includes(type.toLowerCase())
    );
  }

  async findByRarity(rarity: number): Promise<Weapon[]> {
    return this.mockWeapons.filter(weapon => weapon.rarity === rarity);
  }

  async findByElement(element: string): Promise<Weapon[]> {
    return this.mockWeapons.filter(weapon => 
      weapon.element?.toLowerCase().includes(element.toLowerCase())
    );
  }
}
