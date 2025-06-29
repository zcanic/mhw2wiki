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
    },
    {
      id: '2',
      name: 'Flame Blade',
      type: 'Long Sword',
      attack: 120,
      rarity: 2,
      element: 'Fire',
      description: 'A long sword imbued with fire.'
    },
    {
      id: '3',
      name: 'Lightning Hammer',
      type: 'Hammer',
      attack: 150,
      rarity: 3,
      element: 'Thunder',
      description: 'A powerful hammer crackling with electricity.'
    },
    {
      id: '4',
      name: 'Hunter\'s Bow',
      type: 'Bow',
      attack: 80,
      rarity: 1,
      description: 'A reliable bow for beginners.'
    },
    {
      id: '5',
      name: 'Rathalos Sword',
      type: 'Great Sword',
      attack: 180,
      rarity: 4,
      element: 'Fire',
      description: 'A great sword forged from Rathalos materials.'
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
