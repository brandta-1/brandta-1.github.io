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
  <Card sx={{ display: 'flex', margin: 'auto', marginTop: '1.75rem' }}>
    <CardMedia
      component='img'
      sx={{
        height: 300,
        width: 300,
        aspectRatio: 1 / 1
      }}
      image='/images/hs.PNG'
      alt='My picture'
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography
          color='text.primary'
          component='div'
          variant='h1'
          sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Hi, I&apos;m Alex Brandt
        </Typography>
        <Box>
          <Typography color='text.secondary' component='div' variant='subtitle1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Hoverable
              title={`My GitHub`}
              childIcon={<GitHubIcon fontSize='large' />}
              siteLink='https://github.com/brandta-1'
            />
            <Hoverable
              title={`My LinkedIn`}
              childIcon={<LinkedInIcon fontSize='large' />}
              siteLink='https://www.linkedin.com/in/alex-brandt-a12a39277'
            />
            <Hoverable
              title={`My Email`}
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
