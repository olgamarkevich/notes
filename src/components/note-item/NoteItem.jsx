import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { removeNote, editNote } from '../../store/notes';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { TextField, Grid } from '@mui/material';
import SnackbarUI from '../ui/snackbar/SnackbarUI';

const NoteItem = ({ note }) => {
  const dispatch = useAppDispatch();
  const [editdMode, setEditMode] = useState(false);
  const [updateValue, setUpdateValue] = useState(note.title);

  const [open, setOpen] = useState(false);

  let tag = '';
  const updateNote = () => {
    if (updateValue.indexOf('#') !== -1) {
      tag = updateValue.substring(updateValue.lastIndexOf('#') + 1);
    }

    if (updateValue !== '') {
      dispatch(editNote({ id: note.id, title: updateValue, tag: tag }));
    }

    setEditMode(false);
  };
  return (
    <Paper elevation={4} variant="outlined" style={{ padding: '10px' }}>
      {!editdMode && (
        <Grid container alignItems="center">
          <Grid sm={10}>{note.title}</Grid>
          <Grid sm={2} textAlign="right">
            <IconButton color="info" onClick={() => setEditMode(true)}>
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => dispatch(removeNote(note.id))}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}

      <SnackbarUI openP={open} closeModal={setOpen} />

      {editdMode && (
        <Grid container alignItems="center">
          <Grid sm={10}>
            <TextField
              variant="standard"
              value={updateValue}
              onChange={(e) => setUpdateValue(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid sm={2} textAlign="right">
            <IconButton color="success" onClick={() => updateNote()}>
              <DoneIcon />
            </IconButton>

            <IconButton color="inherit" onClick={() => setEditMode(false)}>
              <ClearIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default NoteItem;
