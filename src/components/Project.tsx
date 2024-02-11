import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Hoverable from './Hoverable';
import Stack from '@mui/material/Stack';
import styles from '../utils/styles';

interface ProjectProps {
  project: {
    name: string;
    desc: string;
    pic: string;
    tech: string[];
    gitHub: string;
    siteLink: string;
  };
}
const Project = (props: ProjectProps) => {
  const { name, desc, pic, tech, gitHub, siteLink } = props.project;

  return (
    <Card
      sx={{
        display: 'flex',
        margin: 'auto',
        border: 1,
        boxShadow: 3
      }}>
      <CardMedia
        component='img'
        sx={{
          width: 255,
          borderRight: '1px solid black',
          position: 'relative',
          objectFit: 'cover',
          aspectRatio: '16 / 9'
        }}
        image={pic}
        alt={`${name} screenshot`}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            /* todo add more padding on the container, and more horizontal spacing on the icons */

            '&:last-child': { pb: 1 }
          }}>
          <Box sx={{ pb: 1 }}>
            <Stack direction='row' alignItems='center' sx={{ justifyContent: 'space-between' }}>
              <Typography
                color='text.primary'
                component='div'
                variant='h2'
                sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {name}
              </Typography>
              <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                <Hoverable
                  title={`${name} GitHub`}
                  childIcon={<GitHubIcon sx={{ fontSize: '2rem' }} />}
                  siteLink={gitHub}
                />
                <Hoverable
                  title={`Visit ${name}`}
                  childIcon={<LaunchIcon sx={{ fontSize: '2rem' }} />}
                  siteLink={siteLink}
                />
              </Box>
            </Stack>
            <Typography
              color='text.secondary'
              component='div'
              variant='subtitle1'
              sx={{ pr: '10px' }}>
              {desc}
            </Typography>
          </Box>
          <Box>
            <CardActions sx={{ pl: 0 }}>
              {tech.map((i, j) => {
                const colorKey = i.replace(/ /g, '_').toLowerCase();
                return (
                  <Box key={j} sx={[styles.techBadge, styles[colorKey]]}>
                    <Typography sx={styles.p}>{i}</Typography>
                  </Box>
                );
              })}
            </CardActions>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Project;
