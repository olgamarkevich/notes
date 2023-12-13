import React from 'react';

import { useAppSelector } from './hooks/store';
import { selectAllTags, selectFilteredItems } from './store/notes/selectors';
import NewEntry from './components/new-entry/NewEntry';
import NoteItem from './components/note-item/NoteItem';
import Tags from './components/tags/Tags';

import {
  AppBar,
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  const notes = useAppSelector(selectFilteredItems);
  const tags = useAppSelector(selectAllTags);

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
          <Box>
            <Typography variant="h6">Add New Note</Typography>
            <NewEntry />
            <Divider
              textAlign="center"
              style={{ marginBottom: '20px' }}
            ></Divider>
          </Box>

          {tags.length > 0 && (
            <Box mb={2}>
              <Typography variant="h6">Filter Notes by Tags</Typography>
              <Tags />
              <Divider
                textAlign="center"
                style={{ marginBottom: '20px' }}
              ></Divider>
            </Box>
          )}

          <Box>
            <Typography variant="h6">Your Notes</Typography>
            {notes.length === 0 && (
              <Typography align="center">No notes available</Typography>
            )}
            <Grid container spacing={2}>
              {notes.map((note) => (
                <Grid item sm={12} key={note.id}>
                  <NoteItem note={note} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default App;
