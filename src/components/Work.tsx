import React from 'react';
import { WorkItem, work_history } from '../utils/stats';
import ItemCard from './ItemCard';
import RowStack from './RowStack';
import CardTitle from './CardTitle';
import CardLinks from './CardLinks';
import CardDesc from './CardDesc';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Badge from './Badge';
import Typography from '@mui/material/Typography';
const WorkCard = (props: WorkItem) => {
  const { title, desc, skills, gitHub, siteLink, timeSpan } = props;
  return (
    <ItemCard>
      <RowStack>
        <RowStack spacing={1}>
          <CardTitle title={title} />
          <Typography
            color='text.secondary'
            component='div'
            variant='h3'
            sx={{ fontSize: '1.25rem' }}>
            {timeSpan}
          </Typography>
        </RowStack>
        {gitHub && siteLink && <CardLinks title={title} siteLink={siteLink} gitHub={gitHub} />}
      </RowStack>
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
