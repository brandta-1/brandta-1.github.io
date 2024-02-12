import React from 'react';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Hoverable from './Hoverable';
import Stack from '@mui/material/Stack';
import styles from '../utils/styles';
import ItemCard from './ItemCard';
import { ProjectItem, projects } from '../utils/stats';
import { SxProps, Theme } from '@mui/material/styles';

const ProjectCard = (props: ProjectItem) => {
  const { title, desc, skills, gitHub, siteLink } = props;
  return (
    <ItemCard>
      <Box sx={{ pb: 1 }}>
        <Stack direction='row' alignItems='center' sx={{ justifyContent: 'space-between' }}>
          <Typography
            color='text.primary'
            component='div'
            variant='h2'
            sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', gap: '0.25rem' }}>
            <Hoverable
              title={`${title} GitHub`}
              childIcon={<GitHubIcon sx={{ fontSize: '2rem' }} />}
              siteLink={gitHub}
            />
            <Hoverable
              title={`Visit ${title}`}
              childIcon={<LaunchIcon sx={{ fontSize: '2rem' }} />}
              siteLink={siteLink}
            />
          </Box>
        </Stack>
        <Typography color='text.secondary' component='div' variant='subtitle1' sx={{ pr: '10px' }}>
          {desc}
        </Typography>
      </Box>
      <Box>
        <CardActions sx={{ pl: 0 }}>
          {skills.map((i, j) => {
            const colorKey = i.replace(/ /g, '_').toLowerCase();
            return (
              /* an object of two spread SxProps was not resolving as type SxProps, unsure why, had to type cast */
              <Box key={j} sx={{ ...styles[colorKey], ...styles.techBadge } as SxProps<Theme>}>
                <Typography sx={styles.p}>{i}</Typography>
              </Box>
            );
          })}
        </CardActions>
      </Box>
    </ItemCard>
  );
};

const Project = () => {
  return (
    <>
      {projects.map((i) => (
        <ProjectCard key={i.title} {...i} />
      ))}
    </>
  );
};

export default Project;
