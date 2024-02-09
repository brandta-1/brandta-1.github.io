import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

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
          fkexShrink: 0,
          overflow: 'hidden',
          height: 200,
          width: 200,
          position: 'relative'
        }}
        image={pic}
        alt={`${name} screenshot`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography color='text.primary' component='div' variant='h4'>
            {name}
          </Typography>
          <Box>
            <Typography color='text.secondary' component='div' variant='subtitle1'>
              {desc}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              {tech.map((i, j) => {
                return <p key={j}>{i}</p>;
              })}
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Project;
