// GraphQL Types
export interface Monster {
  id: string;
  name: string;
  description?: string;
  species: string;
  elements: string[];
  weaknesses: string[];
  threatLevel: number;
  habitat?: string;
  locations: string[];
  imageUrl?: string;
  iconUrl?: string;
}

export interface Weapon {
  id: string;
  name: string;
  type: string;
  stats: WeaponStats;
  elements: string[];
  decorationSlots: string[];
  rarity: Rarity;
  imageUrl?: string;
  iconUrl?: string;
}

export interface WeaponStats {
  attack: number;
  affinity: number;
  elementAttack: number;
  sharpness: number;
}

export interface ArmorPiece {
  id: string;
  name: string;
  type: string;
  armorSet: string;
  stats: ArmorStats;
  skills: string[];
  decorationSlots: string[];
  rarity: Rarity;
  imageUrl?: string;
  iconUrl?: string;
}

export interface ArmorStats {
  defense: number;
  resistance: ElementalResistance;
}

export interface ElementalResistance {
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
}

export interface Item {
  id: string;
  name: string;
  category: string;
  type: string;
  rarity: Rarity;
  economy: ItemEconomy;
  obtainMethods: string[];
  effect?: string;
  imageUrl?: string;
  iconUrl?: string;
}

export interface ItemEconomy {
  sellPrice: number;
  buyPrice: number;
  carryLimit: number;
}

export interface Rarity {
  level: number;
  color: string;
  displayName: string;
}

// UI Types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface FilterOptions {
  species?: string;
  threatLevel?: number;
  element?: string;
  location?: string;
}
