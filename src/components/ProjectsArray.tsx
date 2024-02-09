import React from 'react';
import Project from './Project';
import stats from '../utils/stats';

const { projects } = stats;

const ProjectsArray = () => {
  return (
    <>
      {projects.map((i, j) => (
        <Project key={j} project={i} />
      ))}
    </>
  );
};

export default ProjectsArray;
