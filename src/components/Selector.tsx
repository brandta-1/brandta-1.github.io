import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles, { functionalStyles } from '../utils/styles';
import stats from '../utils/stats';
const Selector = () => {
  const [active, setActive] = useState(stats.sections[0]);

  return (
    <Box component='nav'>
      <Box sx={styles.boxRow}>
        {stats.sections.map((i, j) => (
          <Typography
            key={j}
            onClick={() => {
              setActive(i);
            }}
            sx={[styles.selectorCard, functionalStyles.active(active == i)]}>
            {i}
          </Typography>
        ))}
      </Box>
      <Box sx={[styles.boxRow, { backgroundColor: 'white', justifyContent: 'space-around' }]}>
        {stats.sections.map((i, j) => (
          <Box key={j} sx={[styles.downArrow, functionalStyles.activeArrow(active == i)]}></Box>
        ))}
      </Box>
    </Box>
  );
};

export default Selector;
