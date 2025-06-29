import { Injectable } from '@nestjs/common';
import { Item } from '../common/models/item.model';
import { EnhancedItem } from './models/enhanced-item.model';
import { ItemsService } from './items.service';
import { DatabaseService } from '../common/database.service';

export interface ItemSource {
  monsterName: string;
  method: string;
  dropRate: number;
  rank?: string;
}

export interface ItemUsage {
  type: 'weapon' | 'armor' | 'upgrade';
  itemName: string;
  quantity: number;
}

@Injectable()
export class ItemsEnhancedService {
  constructor(
    private readonly itemsService: ItemsService,
    private readonly databaseService: DatabaseService,
  ) {}

  async findOneWithSources(id: string): Promise<EnhancedItem | null> {
    const item = await this.itemsService.findOne(id);
    if (!item) return null;

    // Mock data for now - TODO: Replace with real Prisma queries
    const sources: ItemSource[] = this.getMockSources(item.name);
    const usages: ItemUsage[] = this.getMockUsages(item.name);

    return {
      ...item,
      sources,
      usages,
    };
  }

  async findItemsByMonster(monsterId: string): Promise<Item[]> {
    // Mock implementation - TODO: Replace with real Prisma query
    const allItems = await this.itemsService.findAll();
    
    // Mock: Return items that could be dropped by this monster
    const mockDroppedItems = [
      'Great Jagras Hide',
      'Great Jagras Scale',
      'Sharp Claw',
      'Monster Bone S'
    ];

    if (monsterId === '1') {
      return allItems.filter(item => mockDroppedItems.includes(item.name));
    }

    return [];
  }

  async findItemsByWeapon(weaponId: string): Promise<Item[]> {
    // Mock implementation - TODO: Replace with real Prisma query
    const allItems = await this.itemsService.findAll();
    
    // Mock: Return items needed to craft this weapon
    const mockMaterials = [
      'Iron Ore',
      'Monster Bone S',
      'Machalite Ore'
    ];

    if (weaponId === '1') {
      return allItems.filter(item => mockMaterials.includes(item.name));
    }

    return [];
  }

  private getMockSources(itemName: string): ItemSource[] {
    // Mock data for item sources
    const sources: Record<string, ItemSource[]> = {
      'Great Jagras Hide': [
        { monsterName: 'Great Jagras', method: 'Carve', dropRate: 50, rank: 'Low' },
        { monsterName: 'Great Jagras', method: 'Capture', dropRate: 35, rank: 'Low' }
      ],
      'Great Jagras Scale': [
        { monsterName: 'Great Jagras', method: 'Carve', dropRate: 30, rank: 'Low' },
        { monsterName: 'Great Jagras', method: 'Shiny Drop', dropRate: 15, rank: 'Low' }
      ],
      'Iron Ore': [
        { monsterName: 'Mining Node', method: 'Mining', dropRate: 80, rank: 'All' }
      ],
      'Monster Bone S': [
        { monsterName: 'Great Jagras', method: 'Carve', dropRate: 25, rank: 'Low' },
        { monsterName: 'Kulu-Ya-Ku', method: 'Carve', dropRate: 30, rank: 'Low' }
      ]
    };

    return sources[itemName] || [];
  }

  private getMockUsages(itemName: string): ItemUsage[] {
    // Mock data for item usages
    const usages: Record<string, ItemUsage[]> = {
      'Iron Ore': [
        { type: 'weapon', itemName: 'Iron Sword I', quantity: 2 },
        { type: 'weapon', itemName: 'Iron Lance I', quantity: 3 },
        { type: 'armor', itemName: 'Chain Mail', quantity: 1 }
      ],
      'Monster Bone S': [
        { type: 'weapon', itemName: 'Bone Sword I', quantity: 1 },
        { type: 'upgrade', itemName: 'Iron Sword II', quantity: 2 }
      ],
      'Great Jagras Hide': [
        { type: 'armor', itemName: 'Jagras Vest', quantity: 2 },
        { type: 'armor', itemName: 'Jagras Gloves', quantity: 1 }
      ]
    };

    return usages[itemName] || [];
  }
}
