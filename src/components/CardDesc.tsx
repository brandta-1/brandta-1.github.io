import React from 'react';
import Typography from '@mui/material/Typography';

interface DescProp {
  desc: string;
}

const CardDesc = (props: DescProp) => {
  const { desc } = props;
  return (
    <Typography
      color='text.secondary'
      component='div'
      variant='subtitle1'
      sx={{
        textAlign: 'justify',
        pr: '10px',
        '@media (max-width: 920px)': {
          pr: '0'
        }
      }}>
      {desc}
    </Typography>
  );
};

export default CardDesc;
