import { Injectable } from '@nestjs/common';
import { Item } from '../common/models/item.model';

@Injectable()
export class ItemsService {
  private mockItems: Item[] = [
    {
      id: '1',
      name: 'Potion',
      category: 'Consumable',
      rarity: 1,
      value: 20,
      description: 'Restores a small amount of health.'
    },
    {
      id: '2',
      name: 'Mega Potion',
      category: 'Consumable',
      rarity: 2,
      value: 100,
      description: 'Restores a large amount of health.'
    },
    {
      id: '3',
      name: 'Iron Ore',
      category: 'Material',
      rarity: 1,
      value: 50,
      description: 'Common ore used for crafting weapons.'
    },
    {
      id: '4',
      name: 'Rathalos Scale',
      category: 'Material',
      rarity: 4,
      value: 300,
      description: 'A rare scale from the king of the skies.'
    },
    {
      id: '5',
      name: 'Antidote',
      category: 'Consumable',
      rarity: 1,
      value: 30,
      description: 'Cures poison status.'
    },
    {
      id: '6',
      name: 'Ancient Bone',
      category: 'Material',
      rarity: 3,
      value: 200,
      description: 'An ancient bone with mysterious properties.'
    }
  ];

  async findAll(): Promise<Item[]> {
    return this.mockItems;
  }

  async findOne(id: string): Promise<Item | null> {
    return this.mockItems.find(item => item.id === id) || null;
  }

  async findByCategory(category: string): Promise<Item[]> {
    return this.mockItems.filter(item => 
      item.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  async findByRarity(rarity: number): Promise<Item[]> {
    return this.mockItems.filter(item => item.rarity === rarity);
  }

  async searchByName(name: string): Promise<Item[]> {
    return this.mockItems.filter(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
