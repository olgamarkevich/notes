import React, { ChangeEvent } from 'react';

import { Checkbox, FormControlLabel, FormGroup, Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { addTagToFilter, removeTagFromFilter } from '../../store/notes';
import { selectAllTags } from '../../store/notes/selectors';

const Tags = () => {
  const dispatch = useAppDispatch();

  const tags = useAppSelector(selectAllTags);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, tag: string) => {
    if (e.target.checked) {
      dispatch(addTagToFilter(tag));
    } else {
      dispatch(removeTagFromFilter(tag));
    }
  };

  return (
    <Box mb={2}>
      <FormGroup row={true}>
        {tags.map((tag) => (
          <FormControlLabel
            key={tag}
            style={{
              marginRight: '35px',
            }}
            control={
              <Checkbox
                color="primary"
                onChange={(e) => handleChange(e, tag)}
                value={tag}
              />
            }
            label={tag}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Tags;
