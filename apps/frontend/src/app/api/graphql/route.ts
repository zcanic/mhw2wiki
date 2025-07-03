import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@apollo/server/integrations/next';
import { gql } from 'graphql-tag';
import StaticDataAPI, { parseNames, parseDescriptions } from '../../../lib/static-data-api';

// GraphQL Schema定义
const typeDefs = gql`
  type Monster {
    id: ID!
    gameId: String!
    name: String!
    description: String
    species: String
    features: String
    parts: String
    rewards: String
  }

  type Weapon {
    id: ID!
    gameId: String!
    kind: String!
    name: String!
    description: String
    rarity: Int
    attackRaw: Int
    affinity: Int
    defense: Int
    elementType: String
    elementDamage: Int
    materials: String
    craftingCost: Int
  }

  type Item {
    id: ID!
    gameId: String!
    name: String!
    description: String
    kind: String
    rarity: Int!
    sellPrice: Int!
    buyPrice: Int!
    maxCount: Int!
  }

  type SearchResult {
    id: ID!
    gameId: String!
    name: String!
    description: String
    type: String!
  }

  type Query {
    # 怪物查询
    monsters: [Monster!]!
    monster(id: ID!): Monster
    
    # 武器查询
    weapons: [Weapon!]!
    weaponsByType(type: String!): [Weapon!]!
    weapon(id: ID!): Weapon
    
    # 物品查询
    items: [Item!]!
    itemsByKind(kind: String!): [Item!]!
    item(id: ID!): Item
    
    # 搜索
    search(query: String!, type: String): [SearchResult!]!
  }
`;

// GraphQL Resolvers
const resolvers = {
  Query: {
    // 怪物解析器
    monsters: () => {
      return StaticDataAPI.getMonsters().map(monster => ({
        id: monster.id.toString(),
        gameId: monster.game_id,
        name: parseNames(monster.names),
        description: parseDescriptions(monster.descriptions),
        species: monster.species,
        features: monster.features,
        parts: monster.parts,
        rewards: monster.rewards,
      }));
    },
    
    monster: (_: any, { id }: { id: string }) => {
      const monster = StaticDataAPI.getMonsterById(parseInt(id));
      if (!monster) return null;
      
      return {
        id: monster.id.toString(),
        gameId: monster.game_id,
        name: parseNames(monster.names),
        description: parseDescriptions(monster.descriptions),
        species: monster.species,
        features: monster.features,
        parts: monster.parts,
        rewards: monster.rewards,
      };
    },
    
    // 武器解析器
    weapons: () => {
      return StaticDataAPI.getWeapons().map(weapon => ({
        id: weapon.id.toString(),
        gameId: weapon.game_id,
        kind: weapon.kind,
        name: parseNames(weapon.names),
        description: parseDescriptions(weapon.descriptions),
        rarity: weapon.rarity,
        attackRaw: weapon.attack_raw,
        affinity: weapon.affinity,
        defense: weapon.defense,
        elementType: weapon.element_type,
        elementDamage: weapon.element_damage,
        materials: weapon.materials,
        craftingCost: weapon.crafting_cost,
      }));
    },
    
    weaponsByType: (_: any, { type }: { type: string }) => {
      return StaticDataAPI.getWeaponsByType(type).map(weapon => ({
        id: weapon.id.toString(),
        gameId: weapon.game_id,
        kind: weapon.kind,
        name: parseNames(weapon.names),
        description: parseDescriptions(weapon.descriptions),
        rarity: weapon.rarity,
        attackRaw: weapon.attack_raw,
        affinity: weapon.affinity,
        defense: weapon.defense,
        elementType: weapon.element_type,
        elementDamage: weapon.element_damage,
        materials: weapon.materials,
        craftingCost: weapon.crafting_cost,
      }));
    },
    
    weapon: (_: any, { id }: { id: string }) => {
      const weapon = StaticDataAPI.getWeaponById(parseInt(id));
      if (!weapon) return null;
      
      return {
        id: weapon.id.toString(),
        gameId: weapon.game_id,
        kind: weapon.kind,
        name: parseNames(weapon.names),
        description: parseDescriptions(weapon.descriptions),
        rarity: weapon.rarity,
        attackRaw: weapon.attack_raw,
        affinity: weapon.affinity,
        defense: weapon.defense,
        elementType: weapon.element_type,
        elementDamage: weapon.element_damage,
        materials: weapon.materials,
        craftingCost: weapon.crafting_cost,
      };
    },
    
    // 物品解析器
    items: () => {
      return StaticDataAPI.getItems().map(item => ({
        id: item.id.toString(),
        gameId: item.game_id,
        name: parseNames(item.names),
        description: parseDescriptions(item.descriptions),
        kind: item.kind,
        rarity: item.rarity,
        sellPrice: item.sell_price,
        buyPrice: item.buy_price,
        maxCount: item.max_count,
      }));
    },
    
    itemsByKind: (_: any, { kind }: { kind: string }) => {
      return StaticDataAPI.getItemsByKind(kind).map(item => ({
        id: item.id.toString(),
        gameId: item.game_id,
        name: parseNames(item.names),
        description: parseDescriptions(item.descriptions),
        kind: item.kind,
        rarity: item.rarity,
        sellPrice: item.sell_price,
        buyPrice: item.buy_price,
        maxCount: item.max_count,
      }));
    },
    
    item: (_: any, { id }: { id: string }) => {
      const item = StaticDataAPI.getItemById(parseInt(id));
      if (!item) return null;
      
      return {
        id: item.id.toString(),
        gameId: item.game_id,
        name: parseNames(item.names),
        description: parseDescriptions(item.descriptions),
        kind: item.kind,
        rarity: item.rarity,
        sellPrice: item.sell_price,
        buyPrice: item.buy_price,
        maxCount: item.max_count,
      };
    },
    
    // 搜索解析器
    search: (_: any, { query, type }: { query: string; type?: string }) => {
      const results = StaticDataAPI.search(query, type as any);
      return results.map(result => ({
        id: result.id.toString(),
        gameId: result.game_id,
        name: parseNames(result.names),
        description: parseDescriptions(result.descriptions),
        type: result.type,
      }));
    },
  },
};

// 创建Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // 开发环境启用
});

// Next.js API处理器
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
