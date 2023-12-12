export interface Note {
  id: number;
  title: string;
  tag: string;
}

export interface Tag {
  id: number;
  tag: string;
}

export interface Alert {
  id: number;
  type: string;
  message: string;
}

export interface NoteState {
  items: Note[];
  filter: Note[];
  tags: Tag[];
  alerts: Alert[];
}

export const initialState: NoteState = {
  items: [],
  tags: [],
  filter: [],
  alerts: [],
};
