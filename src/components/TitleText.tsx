import React from 'react';
import Typography from '@mui/material/Typography';
import styles, { functionalStyles } from '../utils/styles';

interface TitleTextprops {
  text: string;
  selector?: boolean;
}

const TitleText = (props: TitleTextprops) => {
  const { text, selector } = props;

  console.log('selector here: ', selector);

  return (
    <Typography
      color='text.primary'
      component='div'
      variant='h1'
      sx={functionalStyles.titleText(selector)}>
      {text.replace(/_/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase())}
    </Typography>
  );
};

export default TitleText;
