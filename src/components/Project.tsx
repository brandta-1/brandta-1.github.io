import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import styles, { colorMap } from '../utils/styles';

interface ProjectProps {
  project: {
    name: string;
    desc: string;
    pic: string;
    tech: string[];
  };
}
const Project = (props: ProjectProps) => {
  const { name, desc, pic, tech } = props.project;

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component='img'
        sx={{
          width: '200px',
          borderRight: '1px solid black',
          position: 'relative',
          objectFit: 'cover',
          aspectRatio: '16 / 9'
        }}
        image={pic}
        alt={`${name} screenshot`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography color='text.primary' component='div' variant='h5'>
            {name}
          </Typography>
          <Box>
            <Typography color='text.secondary' component='div' variant='subtitle1'>
              {desc}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1%' }}>
              {tech.map((i, j) => {
                const colorKey = i.replace(/ /g, '_').toLowerCase();
                return (
                  <Box key={j} sx={[styles.techBadge, styles[colorKey]]}>
                    <p style={styles.p}>{i}</p>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Project;
