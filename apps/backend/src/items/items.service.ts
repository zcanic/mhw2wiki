import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@mhwildswiki/database/src/generated/client';
import { Item } from './models/item.model';

@Injectable()
export class ItemsService {
  private prisma = new PrismaClient();

  async findAll(): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      orderBy: { names: 'asc' },
    });
    
    return items.map(item => this.transformToItem(item));
  }

  async findOne(id: string): Promise<Item | null> {
    const item = await this.prisma.item.findUnique({
      where: { id: parseInt(id) },
    });
    
    if (!item) return null;
    return this.transformToItem(item);
  }

  async findByCategory(category: string): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      where: { kind: category.toLowerCase() },
      orderBy: { names: 'asc' },
    });
    
    return items.map(item => this.transformToItem(item));
  }

  async findByRarity(rarity: number): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      where: { rarity },
      orderBy: { names: 'asc' },
    });
    
    return items.map(item => this.transformToItem(item));
  }

  async searchByName(name: string): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      orderBy: { names: 'asc' },
    });
    
    // Filter by name after fetching since SQLite doesn't have great JSON search
    return items
      .map(item => this.transformToItem(item))
      .filter(item => 
        item.name.toLowerCase().includes(name.toLowerCase())
      );
  }

  private transformToItem(dbItem: any): Item {
    const names = JSON.parse(dbItem.names);
    return {
      id: dbItem.id.toString(),
      name: names.en || names.ja || 'Unknown',
      category: dbItem.kind,
      description: `${names.en || names.ja} - ${dbItem.kind}`,
      rarity: dbItem.rarity,
      value: dbItem.rarity * 100 // 临时计算value，基于稀有度
    };
  }
}
