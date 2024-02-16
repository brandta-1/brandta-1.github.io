import React from 'react';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material';

interface CardTitleProps {
  title: string;
  mediaQuery?: SxProps<Theme>;
}

const CardTitle = (props: CardTitleProps) => {
  const { title, mediaQuery } = props;
  return (
    <Typography
      color='text.primary'
      component='div'
      variant='h2'
      sx={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1', ...mediaQuery }}>
      {title}
    </Typography>
  );
};

export default CardTitle;
