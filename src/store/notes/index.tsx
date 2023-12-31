import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, Note } from './model';

export const slice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.items.push({ id: Date.now(), text: action.payload });
    },

    removeNote: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((el) => el.id !== payload);
    },

    editNote: (state, { payload }: PayloadAction<Note>) => {
      state.items = state.items.map((note) =>
        note.id === payload.id ? payload : note
      );
    },

    addTagToFilter: (state, { payload }: PayloadAction<string>) => {
      if (!state.tagsFilter.includes(payload)) {
        state.tagsFilter.push(payload);
      }
    },

    removeTagFromFilter: (state, { payload }: PayloadAction<string>) => {
      if (state.tagsFilter.includes(payload)) {
        state.tagsFilter = state.tagsFilter.filter((tag) => tag !== payload);
      }
    },
  },
});

export const {
  addNote,
  removeNote,
  editNote,
  addTagToFilter,
  removeTagFromFilter,
} = slice.actions;

export default slice.reducer;
