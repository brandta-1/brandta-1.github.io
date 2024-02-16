import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Hoverable from './Hoverable';
import RowStack from './RowStack';
import Stack from '@mui/material/Stack';
import styles from '../utils/styles';
import TitleText from './TitleText';

const Bio = () => (
  <Card sx={styles.bioContainer}>
    <CardMedia component='img' sx={styles.cardPicture} image='/images/hs.PNG' alt='My picture' />
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '.5rem' }}>
      <Stack spacing={2}>
        <TitleText text={"Hi, I'm Alex Brandt."} />
        <Typography
          color='text.secondary'
          component='div'
          variant='h2'
          sx={{ fontSize: '1.2rem', textAlign: 'justify' }}>
          I graduated from the University of South Carolina with a Bachelor&apos;s Degree in
          Statistics. My professional background includes technology, business, software, and data.
          I offer a multifaceted profile with a mix of technical and interpersonal skills, and this
          site provides a snapshot of my work.
        </Typography>
        <RowStack sx={styles.bioButtons}>
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
        </RowStack>
      </Stack>
    </Box>
  </Card>
);

export default Bio;
