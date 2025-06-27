import { Injectable } from '@nestjs/common';
import { ArmorPiece } from './models/armor.model';

@Injectable()
export class ArmorService {
  private armorPieces: ArmorPiece[] = [
    {
      id: '1',
      name: 'Leather Headgear',
      type: 'Head',
      armorSet: 'Leather',
      defense: 8,
      rarity: 1,
      description: '기본적인 가죽 헬멧. 초보 헌터에게 적합.'
    },
    {
      id: '2',
      name: 'Leather Vest',
      type: 'Chest',
      armorSet: 'Leather',
      defense: 8,
      rarity: 1,
      description: '기본적인 가죽 갑옷. 초보 헌터에게 적합.'
    }
  ];

  async findAll(): Promise<ArmorPiece[]> {
    return this.armorPieces;
  }

  async findOne(id: string): Promise<ArmorPiece | null> {
    return this.armorPieces.find(armor => armor.id === id) || null;
  }

  async findByType(type: string): Promise<ArmorPiece[]> {
    return this.armorPieces.filter(armor => 
      armor.type.toLowerCase() === type.toLowerCase()
    );
  }

  async findBySet(armorSet: string): Promise<ArmorPiece[]> {
    return this.armorPieces.filter(armor => 
      armor.armorSet.toLowerCase().includes(armorSet.toLowerCase())
    );
  }

  async findByRarity(rarity: number): Promise<ArmorPiece[]> {
    return this.armorPieces.filter(armor => armor.rarity === rarity);
  }
}
