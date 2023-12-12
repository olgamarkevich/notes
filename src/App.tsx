import React from 'react';
import { useAppSelector } from './hooks/store';
import NewEntry from './components/new-entry/NewEntry';
import TodoItem from './components/note-item/NoteItem';
import FilterTodo from './components/filter-note/FilterNote';

import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  const notes = useAppSelector((state) => state.notes.items);
  const filter = useAppSelector((state) => state.notes.filter);

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
            <FilterTodo />
          </Box>

          {notes.length === 0 && (
            <Typography variant="h6" align="center">
              No notes available
            </Typography>
          )}
          <Grid container spacing={2}>
            {filter.length === 0 &&
              notes.map((note) => (
                <Grid item sm={12} key={note.id}>
                  <TodoItem note={note} />
                </Grid>
              ))}

            {filter.length > 0 &&
              filter.map((note) => (
                <Grid item sm={12} key={note.id}>
                  <TodoItem note={note} />
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
