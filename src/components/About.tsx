import React, { useState } from 'react';
import { ProjectCard } from './Project';
import { about } from '../utils/stats';
import CardTitle from './CardTitle';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack spacing={'1.75rem'}>
        <ProjectCard {...about.meta} />
        <Stack>
          <CardTitle title={'Work References'} />
          <Typography color='text.secondary' component='div'>
            Available upon request.
          </Typography>
        </Stack>
        <Stack>
          <CardTitle title={'Resume'} />
          <Accordion sx={{ mt: '0.5rem' }} onClick={() => setOpen((c) => !c)}>
            <AccordionSummary sx={{ color: 'text.secondary' }} expandIcon={<ExpandMoreIcon />}>
              {`Click to ${open ? 'close' : 'view'}`}
            </AccordionSummary>
            <AccordionDetails>
              <iframe src={'/Resume.pdf#view=FitH'} width='100%' height='1100px' />
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
