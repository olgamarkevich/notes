import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, Note } from './model';

export const slice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.items.push(action.payload);
    },

    removeNote: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },

    editNote: (state, action: PayloadAction<Note>) => {
      const editTodoItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (editTodoItem !== undefined) {
        editTodoItem.title = action.payload.title;
        editTodoItem.tag = action.payload.tag;
      }
    },

    addFilterTag: (state, action: PayloadAction<number>) => {
      let find = state.items.find((item) => item.id === action.payload);
      if (find !== undefined) {
        state.filter.push(find);
      }
    },

    removeFilterTag: (state, action: PayloadAction<number>) => {
      state.filter = state.filter.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addNote, removeNote, editNote, addFilterTag, removeFilterTag } =
  slice.actions;

export default slice.reducer;
