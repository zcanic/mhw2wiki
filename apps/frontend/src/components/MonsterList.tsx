'use client';

import { useQuery, gql } from '@apollo/client';
import { Monster } from '../types';
import { MonsterCard } from './MonsterCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

const GET_MONSTERS = gql`
  query GetMonsters {
    monsters {
      id
      name
      description
      species
      elements
      weaknesses
      threatLevel
      habitat
      locations
      imageUrl
      iconUrl
    }
  }
`;

export function MonsterList() {
  const { loading, error, data } = useQuery(GET_MONSTERS);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.monsters.map((monster: Monster) => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
