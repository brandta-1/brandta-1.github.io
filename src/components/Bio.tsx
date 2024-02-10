import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Hoverable from './Hoverable';

const Bio = () => (
  <Card sx={{ display: 'flex', marginTop: '1.75rem' }}>
    <CardMedia
      component='img'
      sx={{
        flexShrink: 0,
        overflow: 'hidden',
        height: 300,
        width: 300,
        aspectRatio: 1 / 1,
        position: 'relative'
      }}
      image='/images/hs.JPG'
      alt='My picture'
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography color='text.primary' component='div' variant='h4'>
          Hi, I&apos;m Alex Brandt
        </Typography>
        <Box>
          <Typography color='text.secondary' component='div' variant='subtitle1'>
            I graduated from the University of South Carolina with a Bachelor&apos;s Degree in
            Statistics.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Hoverable
              childIcon={<GitHubIcon fontSize='large' />}
              siteLink='https://github.com/brandta-1'
            />
            <Hoverable
              childIcon={<LinkedInIcon fontSize='large' />}
              siteLink='https://www.linkedin.com/in/alex-brandt-a12a39277'
            />
            <Hoverable
              childIcon={<EmailIcon fontSize='large' />}
              siteLink='mailto:alex.brandt.j@gmail.com'
            />
          </Box>
        </Box>
      </CardContent>
    </Box>
  </Card>
);

export default Bio;
