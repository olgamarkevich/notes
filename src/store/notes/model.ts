export interface Note {
  id: number;
  text: string;
}

export interface NotesState {
  items: Note[];
  tagsFilter: string[];
}

export const initialState: NotesState = {
  items: [],
  tagsFilter: [],
};
