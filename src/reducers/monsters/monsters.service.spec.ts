import { MonsterService } from './monsters.service';
import monstersData from '../../../data/monsters.json';

describe('Monsters Service', () => {
  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1], monstersData.monsters[2], monstersData.monsters[3]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
      monstersData.monsters[2],
      monstersData.monsters[3],
    ]);
  });

  it('should return the winner of the battle', async () => {
    jest.spyOn(MonsterService, 'battle').mockResolvedValue('Red Dragon');
    const monsterId1 = 'monster-1';
    const monsterId2 = 'monster-3';
    const response = await MonsterService.battle(monsterId1, monsterId2);

    expect(response).toEqual('Red Dragon');
  });
});
