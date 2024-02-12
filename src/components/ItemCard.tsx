import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import styles from '../utils/styles';

interface ItemCardProps {
  children: React.ReactNode;
}
//children just means all its child jsx components
//single source of truth for components that share this
//if something has specific styling, but multiple uses,
//then it should be its own component
const ItemCard = (props: ItemCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        margin: 'auto',
        border: 1,
        boxShadow: 3,
        width: '100%'
      }}>
      <CardContent sx={styles.cardContentTest}>{props.children}</CardContent>
    </Card>
  );
};

export default ItemCard;
