import React from 'react';

import { useAppSelector } from './hooks/store';
import { selectFilteredItems } from './store/notes/selectors';
import NewEntry from './components/new-entry/NewEntry';
import NoteItem from './components/note-item/NoteItem';
import Tags from './components/tags/Tags';

import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  const notes = useAppSelector(selectFilteredItems);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Notes
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth="md" style={{ paddingTop: 80 }}>
          <NewEntry />
          <Box mb={2}>
            <Tags />
          </Box>

          {notes.length === 0 && (
            <Typography variant="h6" align="center">
              No notes available
            </Typography>
          )}
          <Grid container spacing={2}>
            {notes.map((note) => (
              <Grid item sm={12} key={note.id}>
                <NoteItem note={note} />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* <SnackbarUI /> */}
      </main>
    </>
  );
}

export default App;
