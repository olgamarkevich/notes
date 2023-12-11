import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { addFilterTag, removeFilterTag } from '../../store/notes';

const FilterNote = () => {
  const dispatch = useAppDispatch();

  const notes = useAppSelector((state) => state.notes.items);

  const handleChange = (id, e) => {
    if (e.target.checked) {
      dispatch(addFilterTag(id));
    } else dispatch(removeFilterTag(id));
  };
  return (
    <Box mb={2}>
      <FormGroup row="bool">
        {notes.map(
          (todo) =>
            todo.tag !== '' && (
              <FormControlLabel
                style={{
                  marginRight: '35px',
                }}
                control={
                  <Checkbox
                    color="primary"
                    onChange={(e) => handleChange(todo.id, e)}
                    value={todo.tag}
                  />
                }
                label={todo.tag}
              />
            )
        )}
      </FormGroup>
    </Box>
  );
};

export default FilterNote;
