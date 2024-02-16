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
import styles from '../utils/styles';
import Stack from '@mui/material/Stack';
const WorkCard = (props: WorkItem) => {
  const { title, jobTitle, desc, skills, gitHub, siteLink, timeSpan } = props;
  return (
    <ItemCard>
      <Stack
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          '@media (max-width: 920px)': {
            flexDirection: 'column'
          }
        }}>
        <Stack
          sx={{
            alignItems: 'end',
            flexDirection: 'row',
            gap: '.75rem',
            '@media (max-width: 920px)': {
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.25rem'
            }
          }}>
          <CardTitle
            title={title}
            mediaQuery={{
              '@media (max-width: 920px)': {
                textAlign: 'center'
              }
            }}
          />
          <Typography
            color='text.primary'
            component='div'
            variant='h3'
            sx={{
              fontSize: '1.25rem'
            }}>
            {jobTitle}
          </Typography>
          <Typography color='text.secondary' component='div' variant='h3' sx={{ fontSize: '1rem' }}>
            {timeSpan}
          </Typography>
        </Stack>
        {gitHub && siteLink && <CardLinks title={title} siteLink={siteLink} gitHub={gitHub} />}
      </Stack>
      <CardDesc desc={desc} />
      <Box>
        <CardActions sx={styles.cardActions}>
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
