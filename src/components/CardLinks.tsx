import Box from '@mui/material/Box';
import React from 'react';
import Hoverable from './Hoverable';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface CardLinksProps {
  title: string;
  gitHub: string;
  siteLink: string;
}

const CardLinks = (props: CardLinksProps) => {
  const { title, gitHub, siteLink } = props;
  return (
    <Box sx={{ display: 'flex', gap: '0.25rem' }}>
      <Hoverable
        title={`${title} GitHub`}
        childIcon={<GitHubIcon sx={{ fontSize: '1.5rem' }} />}
        siteLink={gitHub}
      />
      <Hoverable
        title={`Visit ${title}`}
        childIcon={<LaunchIcon sx={{ fontSize: '1.5rem' }} />}
        siteLink={siteLink}
      />
    </Box>
  );
};

export default CardLinks;
