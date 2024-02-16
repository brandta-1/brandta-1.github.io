import React from 'react';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardLinks from './CardLinks';
import ItemCard from './ItemCard';
import { ProjectItem, projects } from '../utils/stats';
import Badge from './Badge';
import CardTitle from './CardTitle';
import CardDesc from './CardDesc';
import Stack from '@mui/material/Stack';
import styles from '../utils/styles';
export const ProjectCard = (props: ProjectItem) => {
  const { title, desc, skills, gitHub, siteLink } = props;
  return (
    <ItemCard>
      <Stack justifyContent={'space-between'} direction='row'>
        <CardTitle title={title} />
        {gitHub && siteLink && <CardLinks title={title} siteLink={siteLink} gitHub={gitHub} />}
      </Stack>
      <CardDesc desc={desc} />
      <CardActions sx={styles.cardActions}>
        {skills.map((i, j) => {
          return <Badge key={j} skill={i} />;
        })}
      </CardActions>
    </ItemCard>
  );
};

const Project = () => {
  return (
    <>
      {projects.map((i) => (
        <ProjectCard key={i.title} {...i} />
      ))}
    </>
  );
};

export default Project;
