import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import Bio from './components/Bio';
import Box from '@mui/material/Box';
import Selector from './components/Selector';
import { Section } from './utils/stats';

const pages: Section[] = ['projects', 'work_history'];

const WorkPage = lazy(() => import('./components/Work'));
const ProjectPage = lazy(() => import('./components/Project'));

const pageMap: Record<Section, React.LazyExoticComponent<() => JSX.Element>> = {
  projects: ProjectPage,
  work_history: WorkPage
};

function App() {
  const [active, setActive] = useState<Section>(pages[0]);

  return (
    <Box
      component='main'
      sx={{
        display: 'grid',
        gridGap: '1rem',
        width: '100%'
      }}>
      <Bio />
      <Selector active={active} setActive={setActive} pages={pages} />
      <Suspense fallback={null}>{React.createElement(pageMap[active])}</Suspense>
    </Box>
  );
}

export default App;
