import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, battleMonsters, setSelectedMonster, setSelectedComputerMonster } from './monsters.actions';
interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedComputerMonster: Monster | null;
  battleResults: string;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedComputerMonster: null,
  battleResults: ""
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(battleMonsters.pending, (state) => ({
    ...state,
  }));

  builder.addCase(battleMonsters.rejected, (state) => ({
    ...state,
    battleResults: ''
  }));

  builder.addCase(battleMonsters.fulfilled, (state, action) => ({
    ...state,
    battleResults: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedComputerMonster, (state, action) => ({
    ...state,
    selectedComputerMonster: action.payload,
  }));
});