import './App.css';
import React from 'react';
import Bio from './components/Bio';
import ProjectsArray from './components/ProjectsArray';
import Box from '@mui/material/Box';
function App() {
  return (
    <Box sx={{ display: 'grid', gridGap: '1.875rem', justifyContent: 'center' }}>
      <Bio />
      <ProjectsArray />
    </Box>
  );
}

export default App;
