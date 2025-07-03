/**
 * API 客户端 - 连接后端GraphQL API
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// GraphQL查询
const MONSTERS_QUERY = `
  query GetMonsters {
    monsters {
      id
      name
      species
      threatLevel
      description
      elements
      weaknesses
      locations
      habitat
      iconUrl
      imageUrl
    }
  }
`;

const MONSTER_BY_ID_QUERY = `
  query GetMonster($id: String!) {
    monster(id: $id) {
      id
      name
      species
      threatLevel
      description
      elements
      weaknesses
      locations
      habitat
      iconUrl
      imageUrl
      rewards {
        itemName
        method
        dropRate
        rank
      }
    }
  }
`;

// API调用函数
export async function fetchMonsters() {
  try {
    const response = await fetch(`${API_BASE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: MONSTERS_QUERY,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return getFallbackMonsters();
    }

    return data.data.monsters || [];
  } catch (error) {
    console.error('Failed to fetch monsters from API:', error);
    return getFallbackMonsters();
  }
}

export async function fetchMonsterById(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: MONSTER_BY_ID_QUERY,
        variables: { id },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return null;
    }

    return data.data.monster;
  } catch (error) {
    console.error(`Failed to fetch monster ${id} from API:`, error);
    return null;
  }
}

// 降级数据 - 当API不可用时使用
function getFallbackMonsters() {
  return [
    {
      id: '1',
      name: 'Rey Dau',
      species: 'Fanged Wyvern',
      threatLevel: 3,
      description: '雷电龙，操控雷电元素的强大飞龙',
      elements: ['Thunder'],
      weaknesses: ['Ice', 'Water'],
      locations: ['Storm Ridge'],
      habitat: 'Mountain',
      iconUrl: '/monsters/rey-dau-icon.png',
      imageUrl: '/monsters/rey-dau.png',
    },
    {
      id: '2',
      name: 'Zoh Shia',
      species: 'Construct',
      threatLevel: 5,
      description: '白炽龙，龙都的守护者，拥有强大的结晶能力',
      elements: ['Dragon', 'Crystal'],
      weaknesses: ['Ice', 'Water'],
      locations: ['Wyveria'],
      habitat: 'Ancient City',
      iconUrl: '/monsters/zoh-shia-icon.png',
      imageUrl: '/monsters/zoh-shia.png',
    },
    {
      id: '3',
      name: 'Guardian Doshaguma',
      species: 'Fanged Beast',
      threatLevel: 4,
      description: '护卫龙熊，高大威猛的守护兽',
      elements: [],
      weaknesses: ['Fire', 'Thunder'],
      locations: ['Ancient Forest'],
      habitat: 'Forest',
      iconUrl: '/monsters/guardian-doshaguma-icon.png',
      imageUrl: '/monsters/guardian-doshaguma.png',
    },
  ];
}
