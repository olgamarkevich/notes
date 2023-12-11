export interface Note {
  id: number;
  title: string;
  tag: string;
}

export interface Tag {
  id: number;
  tag: string;
}

export interface NoteState {
  items: Note[];
  filter: Note[];
  tags: Tag[];
}

export const initialState: NoteState = {
  items: [],
  tags: [],
  filter: [],
};