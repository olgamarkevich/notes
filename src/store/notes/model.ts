export interface Note {
  id: number;
  text: string;
}

export interface Alert {
  id: number;
  type: string;
  message: string;
}

export interface NotesState {
  items: Note[];
  tagsFilter: string[];
  alerts: Alert[];
}

export const initialState: NotesState = {
  items: [],
  tagsFilter: [],
  alerts: [],
};
