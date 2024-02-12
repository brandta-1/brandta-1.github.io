import React from 'react';
import { WorkItem, work_history } from '../utils/stats';
import ItemCard from './ItemCard';
import Stack from '@mui/material/Stack';
import CardTitle from './CardTitle';
import CardLinks from './CardLinks';
import CardDesc from './CardDesc';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Badge from './Badge';
const WorkCard = (props: WorkItem) => {
  const { title, desc, skills, gitHub, siteLink, timeSpan } = props;
  return (
    <ItemCard>
      <Stack direction='row' alignItems='center' sx={{ justifyContent: 'space-between' }}>
        <CardTitle title={title} />
        <p>{timeSpan}</p>
      </Stack>
      <CardDesc desc={desc} />
      <Box>
        <CardActions sx={{ pl: 0 }}>
          {skills.map((i, j) => {
            return <Badge key={j} skill={i} />;
          })}
        </CardActions>
      </Box>
    </ItemCard>
  );
};

const Work = () => {
  return (
    <>
      {work_history.map((i) => (
        <WorkCard key={i.title} {...i} />
      ))}
    </>
  );
};

export default Work;
