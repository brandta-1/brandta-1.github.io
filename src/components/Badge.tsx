import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import styles from '../utils/styles';
import { SxProps, Theme } from '@mui/material/styles';

interface BadgeProps {
  skill: string;
}

const Badge = (props: BadgeProps) => {
  const { skill } = props;
  const colorKey = skill.replace(/ /g, '_').toLowerCase();
  return (
    /* an object of two spread SxProps was not resolving as type SxProps, unsure why, had to type cast */
    <Box sx={{ ...styles[colorKey], ...styles.techBadge } as SxProps<Theme>}>
      <Typography sx={styles.p}>{skill}</Typography>
    </Box>
  );
};

export default Badge;
