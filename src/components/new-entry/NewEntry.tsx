import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/store';
import { addNote } from '../../store/notes';
import SnackbarUI from '../ui/snackbar/SnackbarUI';

const NewEntry = () => {
  const [entryValue, setEntryValue] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  let tag: string = '';

  const addEntry = () => {
    if (entryValue.indexOf('#') !== -1) {
      tag = entryValue.substring(entryValue.lastIndexOf('#') + 1);
    }

    if (entryValue !== '') {
      dispatch(addNote({ id: Date.now(), title: entryValue, tag: tag }));
    }
    setEntryValue('');
    setOpen(true);
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

        <SnackbarUI openP={open} closeModal={setOpen} />
      </Grid>
    </>
  );
};

export default NewEntry;
