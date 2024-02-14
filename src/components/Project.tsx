import React from 'react';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardLinks from './CardLinks';
import ItemCard from './ItemCard';
import { ProjectItem, projects } from '../utils/stats';
import Badge from './Badge';
import CardTitle from './CardTitle';
import CardDesc from './CardDesc';
import RowStack from './RowStack';
export const ProjectCard = (props: ProjectItem) => {
  const { title, desc, skills, gitHub, siteLink } = props;
  return (
    <ItemCard>
      <RowStack justifyContent={'space-between'}>
        <CardTitle title={title} />
        <CardLinks title={title} siteLink={siteLink} gitHub={gitHub} />
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
