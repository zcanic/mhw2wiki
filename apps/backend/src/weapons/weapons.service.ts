import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@mhwildswiki/database/src/generated/client';
import { Weapon } from './models/weapon.model';

@Injectable()
export class WeaponsService {
  private prisma = new PrismaClient();

  async findAll(): Promise<Weapon[]> {
    const weapons = await this.prisma.weapon.findMany({
      orderBy: { nameEn: 'asc' },
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
      where: { weaponType: type.toUpperCase() as any },
      orderBy: { nameEn: 'asc' },
    });
    
    return weapons.map(weapon => this.transformToWeapon(weapon));
  }

  async findByRarity(rarity: number): Promise<Weapon[]> {
    const weapons = await this.prisma.weapon.findMany({
      where: { rarity },
      orderBy: { nameEn: 'asc' },
    });
    
    return weapons.map(weapon => this.transformToWeapon(weapon));
  }

  async findByElement(element: string): Promise<Weapon[]> {
    // For now return all weapons since element filtering needs proper implementation
    return this.findAll();
  }

  private transformToWeapon(dbWeapon: any): Weapon {
    const weapon = new Weapon();
    weapon.id = dbWeapon.id.toString();
    weapon.name = dbWeapon.nameEn || dbWeapon.nameJa || 'Unknown';
    weapon.description = dbWeapon.descriptionEn || dbWeapon.descriptionJa || '';
    weapon.gameId = dbWeapon.gameId || dbWeapon.id;
    weapon.nameEn = dbWeapon.nameEn || 'Unknown';
    weapon.nameJa = dbWeapon.nameJa || 'Unknown';
    weapon.nameZh = dbWeapon.nameZh;
    weapon.descriptionEn = dbWeapon.descriptionEn;
    weapon.descriptionJa = dbWeapon.descriptionJa;
    weapon.descriptionZh = dbWeapon.descriptionZh;
    weapon.weaponType = dbWeapon.weaponType;
    weapon.rarity = dbWeapon.rarity || 1;
    weapon.rawAttack = dbWeapon.rawAttack || 0;
    weapon.affinity = dbWeapon.affinity || 0;
    weapon.defense = dbWeapon.defense || 0;
    weapon.sharpnessData = dbWeapon.sharpnessData;
    weapon.handicraft = dbWeapon.handicraft;
    weapon.elementType = dbWeapon.elementType;
    weapon.elementDamage = dbWeapon.elementDamage;
    weapon.elementHidden = dbWeapon.elementHidden || false;
    weapon.level1Slots = dbWeapon.level1Slots || 0;
    weapon.level2Slots = dbWeapon.level2Slots || 0;
    weapon.level3Slots = dbWeapon.level3Slots || 0;
    weapon.level4Slots = dbWeapon.level4Slots || 0;
    weapon.ammoData = dbWeapon.ammoData;
    weapon.coatings = dbWeapon.coatings;
    weapon.chargeLevels = dbWeapon.chargeLevels;
    weapon.melodies = dbWeapon.melodies;
    weapon.songs = dbWeapon.songs;
    weapon.kinsectBonus = dbWeapon.kinsectBonus;
    weapon.craftingCost = dbWeapon.craftingCost || 0;
    weapon.upgradeCost = dbWeapon.upgradeCost || 0;
    weapon.materials = [];
    weapon.skills = [];
    weapon.upgradeTo = [];
    
    return weapon;
  }
}
