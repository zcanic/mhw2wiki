import { Injectable } from '@nestjs/common';
import { Weapon } from './models/weapon.model';
import { DatabaseService } from '../common/database.service';

// 新增接口定义
interface WeaponMaterial {
  itemName: string;
  quantity: number;
  rarity?: number;
}

interface WeaponUpgrade {
  level: number;
  attack: number;
  materials: WeaponMaterial[];
}

interface EnhancedWeapon extends Weapon {
  materials?: WeaponMaterial[];
  upgrades?: WeaponUpgrade[];
  weaponTree?: string;
}

@Injectable()
export class WeaponsEnhancedService {
  constructor(private readonly databaseService: DatabaseService) {}

  private mockWeapons: EnhancedWeapon[] = [
    {
      id: '1',
      name: 'Iron Sword',
      type: 'Great Sword',
      attack: 100,
      rarity: 1,
      description: 'A basic iron great sword.',
      materials: [
        { itemName: 'Iron Ore', quantity: 2 },
        { itemName: 'Earth Crystal', quantity: 1 }
      ],
      upgrades: [
        {
          level: 2,
          attack: 120,
          materials: [
            { itemName: 'Iron Ore', quantity: 4 },
            { itemName: 'Machalite Ore', quantity: 2 }
          ]
        }
      ],
      weaponTree: 'Iron Tree'
    },
    {
      id: '2',
      name: 'Flame Blade',
      type: 'Long Sword',
      attack: 120,
      rarity: 2,
      element: 'Fire',
      description: 'A long sword imbued with fire.',
      materials: [
        { itemName: 'Iron Ore', quantity: 3 },
        { itemName: 'Flame Sac', quantity: 1 },
        { itemName: 'Anjanath Scale', quantity: 2 }
      ],
      upgrades: [
        {
          level: 2,
          attack: 140,
          materials: [
            { itemName: 'Anjanath Fang', quantity: 2 },
            { itemName: 'Flame Sac', quantity: 2 }
          ]
        }
      ],
      weaponTree: 'Anjanath Tree'
    },
    {
      id: '3',
      name: 'Lightning Hammer',
      type: 'Hammer',
      attack: 150,
      rarity: 3,
      element: 'Thunder',
      description: 'A powerful hammer crackling with electricity.',
      materials: [
        { itemName: 'Iron Ore', quantity: 5 },
        { itemName: 'Thunder Sac', quantity: 2 },
        { itemName: 'Zinogre Shell', quantity: 3 }
      ],
      weaponTree: 'Zinogre Tree'
    },
    {
      id: '4',
      name: 'Hunter\'s Bow',
      type: 'Bow',
      attack: 80,
      rarity: 1,
      description: 'A reliable bow for beginners.',
      materials: [
        { itemName: 'Iron Ore', quantity: 1 },
        { itemName: 'Monster Bone M', quantity: 2 },
        { itemName: 'Jagras Hide', quantity: 3 }
      ],
      weaponTree: 'Bone Tree'
    },
    {
      id: '5',
      name: 'Rathalos Sword',
      type: 'Great Sword',
      attack: 180,
      rarity: 4,
      element: 'Fire',
      description: 'A great sword forged from Rathalos materials.',
      materials: [
        { itemName: 'Rathalos Scale', quantity: 4 },
        { itemName: 'Rathalos Shell', quantity: 2 },
        { itemName: 'Rathalos Wing', quantity: 1 },
        { itemName: 'Flame Sac', quantity: 3 }
      ],
      upgrades: [
        {
          level: 2,
          attack: 200,
          materials: [
            { itemName: 'Rathalos Ruby', quantity: 1 },
            { itemName: 'Rathalos Shell', quantity: 5 }
          ]
        }
      ],
      weaponTree: 'Rathalos Tree'
    }
  ];

  async findAll(): Promise<Weapon[]> {
    // 返回基础武器信息
    return this.mockWeapons.map(weapon => ({
      id: weapon.id,
      name: weapon.name,
      type: weapon.type,
      attack: weapon.attack,
      rarity: weapon.rarity,
      element: weapon.element,
      description: weapon.description
    }));
  }

  async findOne(id: string): Promise<Weapon | null> {
    const weapon = this.mockWeapons.find(weapon => weapon.id === id);
    if (!weapon) return null;

    return {
      id: weapon.id,
      name: weapon.name,
      type: weapon.type,
      attack: weapon.attack,
      rarity: weapon.rarity,
      element: weapon.element,
      description: weapon.description
    };
  }

  // 新增：获取武器的详细信息（包含制作材料）
  async findOneWithMaterials(id: string): Promise<EnhancedWeapon | null> {
    return this.mockWeapons.find(weapon => weapon.id === id) || null;
  }

  // 新增：根据制作材料查找武器
  async findByMaterial(materialName: string): Promise<Weapon[]> {
    const weaponsWithMaterial = this.mockWeapons.filter(weapon =>
      weapon.materials?.some(material => 
        material.itemName.toLowerCase().includes(materialName.toLowerCase())
      )
    );

    return weaponsWithMaterial.map(weapon => ({
      id: weapon.id,
      name: weapon.name,
      type: weapon.type,
      attack: weapon.attack,
      rarity: weapon.rarity,
      element: weapon.element,
      description: weapon.description
    }));
  }

  // 新增：获取武器树信息
  async findByWeaponTree(treeName: string): Promise<Weapon[]> {
    const weaponsInTree = this.mockWeapons.filter(weapon =>
      weapon.weaponTree?.toLowerCase().includes(treeName.toLowerCase())
    );

    return weaponsInTree.map(weapon => ({
      id: weapon.id,
      name: weapon.name,
      type: weapon.type,
      attack: weapon.attack,
      rarity: weapon.rarity,
      element: weapon.element,
      description: weapon.description
    }));
  }

  async findByType(type: string): Promise<Weapon[]> {
    const weapons = await this.findAll();
    return weapons.filter(weapon => 
      weapon.type.toLowerCase().includes(type.toLowerCase())
    );
  }

  async findByRarity(rarity: number): Promise<Weapon[]> {
    const weapons = await this.findAll();
    return weapons.filter(weapon => weapon.rarity === rarity);
  }

  async findByElement(element: string): Promise<Weapon[]> {
    const weapons = await this.findAll();
    return weapons.filter(weapon => 
      weapon.element?.toLowerCase().includes(element.toLowerCase())
    );
  }
}
