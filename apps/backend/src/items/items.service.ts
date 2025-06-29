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
