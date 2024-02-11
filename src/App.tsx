import './App.css';
import React from 'react';
import Bio from './components/Bio';
import ProjectsArray from './components/ProjectsArray';
import Box from '@mui/material/Box';
import Selector from './components/Selector';
function App() {
  return (
    <Box
      component='main'
      sx={{
        display: 'grid',
        gridGap: '1rem',
        width: '100%'
      }}>
      <Bio />
      <Selector />
      <ProjectsArray />
    </Box>
  );
}

export default App;
