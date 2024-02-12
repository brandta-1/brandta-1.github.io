import React from 'react';
import Typography from '@mui/material/Typography';
import styles from '../utils/styles';
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
      sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
      {title}
    </Typography>
  );
};

export default CardTitle;
