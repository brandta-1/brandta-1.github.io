import React from 'react';
import Link from '@mui/material/Link';

interface HoverableProps extends React.HTMLAttributes<HTMLElement> {
  childIcon: React.ReactNode;
  siteLink: string;
}

const Hoverable = (props: HoverableProps) => {
  const { childIcon, siteLink } = props;

  return (
    <Link
      sx={{
        '&:hover': {
          color: 'text.secondary'
        }
      }}
      href={siteLink}>
      {childIcon}
    </Link>
  );
};

export default Hoverable;
