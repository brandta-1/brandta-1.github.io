import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

//of that type, remove that key, aka remove the direction key so its not a valid prop anymore, since we always want this to be a row, we dont want direction being used externally
//from the type StackProps remove key 'direction'
type RowStackProps = Omit<StackProps, 'direction'>;

const RowStack = (props: RowStackProps) => {
  const { children, justifyContent = 'space-between', alignItems = 'end', ...rest } = props;
  return (
    <Stack {...{ ...rest, justifyContent, alignItems }} direction='row'>
      {children}
    </Stack>
  );
};

export default RowStack;
