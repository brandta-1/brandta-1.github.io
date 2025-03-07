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
  const colorKey = skill.replace(/ /g, '_').toLowerCase().replace('#', 'sharp');
  return (
    /* an object of two spread SxProps isnt resolving as type SxProps, choosing to type cast instead of deep merge */
    <Box sx={{ ...styles[colorKey], ...styles.techBadge } as SxProps<Theme>}>
      <Typography sx={styles.p}>{skill}</Typography>
    </Box>
  );
};

export default Badge;
