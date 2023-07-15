import SwipeDrawer from './SwipeDrawer';
import { Box } from '@mui/material';
import Notes from './notes/Notes';
import Archives from './archives/Archives';
import DeleteNotes from './delete/DeleteNotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return (
      <Box style={{ display: 'flex', width: '100%' }}>
        <Router>
          <SwipeDrawer />
          <Routes>        
            <Route path='/' element={<Notes />} />
            <Route path='/archive' element={<Archives />} />
            <Route path='/delete' element={<DeleteNotes />} />
          </Routes>
        </Router>
      </Box>
    )
  }
  
  export default Home
  