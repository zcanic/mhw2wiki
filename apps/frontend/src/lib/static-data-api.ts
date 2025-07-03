// 静态数据访问层 - 替代GraphQL Apollo Client
import monstersData from '../data/monsters.json';
import weaponsData from '../data/weapons.json';
import itemsData from '../data/items.json';
import searchIndex from '../data/search-index.json';

// 数据类型定义
export interface Monster {
  id: number;
  game_id: string;
  names: string; // JSON string containing multi-language names
  descriptions?: string | null;
  species?: string | null;
  features?: string | null;
  parts?: string | null;
  rewards?: string | null;
}

export interface Weapon {
  id: number;
  game_id: string;
  kind: string;
  names: string;
  descriptions?: string | null;
  rarity?: number | null;
  attack_raw?: number | null;
  affinity?: number | null;
  defense?: number | null;
  element_type?: string | null;
  element_damage?: number | null;
  materials?: string | null;
  crafting_cost?: number | null;
}

export interface Item {
  id: number;
  game_id: string;
  names: string;
  descriptions?: string | null;
  kind?: string | null;
  rarity: number;
  sell_price: number;
  buy_price: number;
  max_count: number;
}

export interface SearchResult {
  id: number;
  game_id: string;
  names: string;
  descriptions?: string | null;
  type: 'monster' | 'weapon' | 'item';
}

// 工具函数：解析多语言名称
export function parseNames(namesJson: string, lang: string = 'zh-Hans'): string {
  try {
    const names = JSON.parse(namesJson);
    // 优先级：简体中文 > 繁体中文 > 英文 > 日文
    return names[lang] || names['zh-Hans'] || names['zh-Hant'] || names['en'] || names['ja'] || '未知';
  } catch {
    return '未知';
  }
}

// 工具函数：解析多语言描述
export function parseDescriptions(descriptionsJson?: string | null, lang: string = 'zh-Hans'): string {
  if (!descriptionsJson) return '';
  try {
    const descriptions = JSON.parse(descriptionsJson);
    return descriptions[lang] || descriptions['zh-Hans'] || descriptions['zh-Hant'] || descriptions['en'] || descriptions['ja'] || '';
  } catch {
    return '';
  }
}

// 静态数据API - 替代GraphQL查询
export class StaticDataAPI {
  // 获取所有怪物
  static getMonsters(): Monster[] {
    return monstersData as Monster[];
  }

  // 根据ID获取单个怪物
  static getMonsterById(id: number): Monster | undefined {
    return monstersData.find(monster => monster.id === id) as Monster | undefined;
  }

  // 获取所有武器
  static getWeapons(): Weapon[] {
    return weaponsData as Weapon[];
  }

  // 根据类型筛选武器
  static getWeaponsByType(weaponType: string): Weapon[] {
    return weaponsData.filter(weapon => weapon.kind === weaponType) as Weapon[];
  }

  // 根据ID获取单个武器
  static getWeaponById(id: number): Weapon | undefined {
    return weaponsData.find(weapon => weapon.id === id) as Weapon | undefined;
  }

  // 获取所有物品
  static getItems(): Item[] {
    return itemsData as Item[];
  }

  // 根据类型筛选物品
  static getItemsByKind(kind: string): Item[] {
    return itemsData.filter(item => item.kind === kind) as Item[];
  }

  // 根据ID获取单个物品
  static getItemById(id: number): Item | undefined {
    return itemsData.find(item => item.id === id) as Item | undefined;
  }

  // 全局搜索
  static search(query: string, type?: 'monster' | 'weapon' | 'item'): SearchResult[] {
    const results = searchIndex.filter(item => {
      // 类型筛选
      if (type && item.type !== type) return false;
      
      // 搜索匹配
      const name = parseNames(item.names).toLowerCase();
      const description = parseDescriptions(item.descriptions).toLowerCase();
      const searchTerm = query.toLowerCase();
      
      return name.includes(searchTerm) || description.includes(searchTerm);
    });

    return results as SearchResult[];
  }

  // 获取搜索建议
  static getSearchSuggestions(query: string, limit: number = 5): string[] {
    const results = this.search(query);
    return results
      .slice(0, limit)
      .map(item => parseNames(item.names));
  }

  // 获取统计信息
  static getStats() {
    return {
      totalMonsters: monstersData.length,
      totalWeapons: weaponsData.length,
      totalItems: itemsData.length,
      totalRecords: monstersData.length + weaponsData.length + itemsData.length,
    };
  }
}

export default StaticDataAPI;
