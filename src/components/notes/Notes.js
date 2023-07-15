import React,{useContext} from 'react'
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';
import Form from './Form';
import Note from './Note';
import EmptyNotes from './EmptyNotes';

function Notes() {

  const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

  const { notes, setNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
          <Form />
          { notes.length > 0 ?
            <Grid container style={{ marginTop: 16}}>
            {
              notes.map((note) => (
                <Grid item>
                  <Note key={note.id} note={note} />
                  {/* {console.log(note.id)} */}
                </Grid>
              ))
            }
            </Grid>
                : <EmptyNotes /> }
      </Box>
    </Box>
  )
}

export default Notes
