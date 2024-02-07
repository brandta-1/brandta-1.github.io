import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Bio = () => (
  <Card sx={{ display: 'flex' }}>
    <CardMedia component='img' sx={{ width: 151 }} image='/images/hs.JPG' alt='My picture' />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component='div' variant='h3'>
          Hi, I&apos;m Alex Brandt
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' component='div'>
          Originally from Tennessee and South Carolina, I graduated from USC in 2021 with a B.S. in
          Statistics. During my Junior year, I TA&apos;md for an introductory Java course. I
          conducted lab instruction going over the basics of OOP and elementary data structures.
          Since then, I&apos;ve worked in the finance industry, and my interest in coding has
          rekindled. This led me to study full-stack Web Developement at UNCC.
        </Typography>
      </CardContent>
    </Box>
  </Card>
);

export default Bio;
