import React, { useState, FC } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { TextField, Grid } from '@mui/material';

import { useAppDispatch } from '../../hooks/store';
import { removeNote, editNote } from '../../store/notes';
import { Note } from '../../store/notes/model';

interface Props {
  note: Note;
}

const NoteItem: FC<Props> = ({ note }) => {
  const dispatch = useAppDispatch();
  const [editdMode, setEditMode] = useState(false);
  const [updateValue, setUpdateValue] = useState(note.text);

  const updateNote = () => {
    dispatch(editNote({ id: note.id, text: updateValue }));
    setEditMode(false);
  };
  return (
    <Paper elevation={4} variant="outlined" style={{ padding: '10px' }}>
      {!editdMode && (
        <Grid container alignItems="center">
          <Grid sm={10}>{note.text}</Grid>
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
