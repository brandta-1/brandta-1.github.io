import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import Bio from './components/Bio';
import Box from '@mui/material/Box';
import Selector from './components/Selector';
import { Section } from './utils/stats';
import Typography from '@mui/material/Typography';
const pages: Section[] = ['work_history', 'projects', 'about'];

const WorkPage = lazy(() => import('./components/Work'));
const ProjectPage = lazy(() => import('./components/Project'));
const AboutPage = lazy(() => import('./components/About'));

const pageMap: Record<Section, React.LazyExoticComponent<() => JSX.Element>> = {
  projects: ProjectPage,
  work_history: WorkPage,
  about: AboutPage
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
      <Typography
        color='text.primary'
        component='div'
        variant='h1'
        sx={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        {active.replace(/_/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase())}
      </Typography>
      <Selector active={active} setActive={setActive} pages={pages} />
      <Suspense fallback={null}>{React.createElement(pageMap[active])}</Suspense>
    </Box>
  );
}

export default App;
