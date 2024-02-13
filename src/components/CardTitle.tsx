import React from 'react';
import Typography from '@mui/material/Typography';

interface CardTitleProps {
  title: string;
}

const CardTitle = (props: CardTitleProps) => {
  const { title } = props;
  return (
    <Typography
      color='text.primary'
      component='div'
      variant='h2'
      sx={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>
      {title}
    </Typography>
  );
};

export default CardTitle;
