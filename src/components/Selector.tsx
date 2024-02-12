import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles, { functionalStyles } from '../utils/styles';
import { Section } from '../utils/stats';
//types dont get included in the bundle
import { SxProps, Theme } from '@mui/material/styles';

interface SelectorProps {
  pages: Section[];
  active: Section;
  setActive: (val: Section) => void;
}

const Selector = (props: SelectorProps) => {
  const { active, setActive, pages } = props;
  return (
    <Box component='nav'>
      <Box sx={styles.boxRow}>
        {pages.map((i, j) => (
          <Typography
            key={j}
            onClick={() => {
              setActive(i);
            }}
            sx={
              /* see comment in Project.tsx*/
              { ...styles.selectorCard, ...functionalStyles.active(active == i) } as SxProps<Theme>
            }>
            {i.replace(/_/g, ' ')}
          </Typography>
        ))}
      </Box>
      <Box sx={{ ...styles.boxRow, backgroundColor: 'white', justifyContent: 'space-around' }}>
        {pages.map((i, j) => (
          <Box
            key={j}
            sx={
              {
                ...styles.downArrow,
                ...functionalStyles.activeArrow(active == i)
              } as SxProps<Theme>
            }></Box>
        ))}
      </Box>
    </Box>
  );
};

export default Selector;
