import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@mhwildswiki/database/src/generated/client';
import { Weapon } from './models/weapon.model';

@Injectable()
export class WeaponsService {
  private prisma = new PrismaClient();

  async findAll(): Promise<Weapon[]> {
    const weapons = await this.prisma.weapon.findMany({
      orderBy: { names: 'asc' },
    });
    
    return weapons.map(weapon => this.transformToWeapon(weapon));
  }

  async findOne(id: string): Promise<Weapon | null> {
    const weapon = await this.prisma.weapon.findUnique({
      where: { id: parseInt(id) },
    });
    
    if (!weapon) return null;
    return this.transformToWeapon(weapon);
  }

  async findByType(type: string): Promise<Weapon[]> {
    const weapons = await this.prisma.weapon.findMany({
      where: { kind: type.toLowerCase() },
      orderBy: { names: 'asc' },
    });
    
    return weapons.map(weapon => this.transformToWeapon(weapon));
  }

  async findByRarity(rarity: number): Promise<Weapon[]> {
    const weapons = await this.prisma.weapon.findMany({
      where: { rarity },
      orderBy: { names: 'asc' },
    });
    
    return weapons.map(weapon => this.transformToWeapon(weapon));
  }

  async findByElement(element: string): Promise<Weapon[]> {
    // For now return all weapons since element filtering needs proper implementation
    return this.findAll();
  }

  private transformToWeapon(dbWeapon: any): Weapon {
    const names = JSON.parse(dbWeapon.names);
    return {
      id: dbWeapon.id.toString(),
      name: names.en || names.ja || 'Unknown',
      type: dbWeapon.kind,
      attack: dbWeapon.attack_raw || 0,
      rarity: dbWeapon.rarity || 1,
      description: `${names.en || names.ja} - ${dbWeapon.kind}`,
      element: dbWeapon.element_type || undefined
    };
  }
}
