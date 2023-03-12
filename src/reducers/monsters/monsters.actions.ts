import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const battleMonsters = createAsyncThunk<string, {monsterId1: string, monsterId2: string}>(
  'monsters/battleMonsters',
  async ({monsterId1, monsterId2 }) => MonsterService.battle(monsterId1, monsterId2),
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);

