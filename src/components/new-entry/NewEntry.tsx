import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/store';
import { addNote } from '../../store/notes';

const NewEntry = () => {
  const [entryValue, setEntryValue] = useState('');

  const dispatch = useAppDispatch();

  let tagArr: RegExpMatchArray | null;

  const addEntry = () => {
    if (entryValue.indexOf('#') !== -1 && tagArr !== null) {
      tagArr = entryValue.match(/#[^\s#]*/g);
    }

    if (entryValue !== '' && tagArr !== null) {
      tagArr.forEach((tag) => {
        dispatch(addNote({ id: Date.now(), title: entryValue, tag: tag }));
      });
    }
    setEntryValue('');
  };

  return (
    <>
      <Grid container spacing={2} alignItems="stretch" mb={2}>
        <Grid item md={10}>
          <TextField
            label="Add new note"
            variant="outlined"
            value={entryValue}
            style={{ width: '100%' }}
            onChange={(e) => setEntryValue(e.target.value)}
          />
        </Grid>
        <Grid item md={2}>
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            color="success"
            style={{ height: '100%' }}
            onClick={addEntry}
          >
            add new
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NewEntry;
