import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { getTagsFromStr } from '../utils';

const getItems = (state: RootState) => state.notes.items;
const getTagsFilter = (state: RootState) => state.notes.tagsFilter;

export const selectAllTags = createSelector([getItems], (items) => {
  const tags = new Set<string>();

  items.forEach((note) => {
    const noteTags = getTagsFromStr(note.text);

    noteTags.forEach((tag) => {
      tags.add(tag);
    });
  });

  return Array.from(tags);
});

export const selectFilteredItems = createSelector(
  [getItems, getTagsFilter],
  (notes, tags) =>
    tags.length
      ? notes.filter((note) => tags.some((tag) => note.text.includes(tag)))
      : notes
);
