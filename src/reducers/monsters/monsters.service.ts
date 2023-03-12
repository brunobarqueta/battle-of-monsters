import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> => {
  return await fetch(`${API_URL}/monsters`).then((response) => response.json());
}

const battle = async (monsterId1: string, monsterId2: string): Promise<string> => {
  const winner = await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "monster1Id": monsterId1,
      "monster2Id": monsterId2
    })
  }).then((response) => response.json())
    .then((data) => {
      return data.winner.name
    });

    return winner;
}

export const MonsterService = {
  getAll,
  battle
};
