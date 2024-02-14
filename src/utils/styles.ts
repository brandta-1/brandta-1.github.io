import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';

const styles: Record<string, SxProps<Theme>> = {
  techBadge: {
    borderRadius: '20px',
    padding: '0.125rem 0.575rem',
    height: '25%',
    border: '1px solid rgba(0,0,0,0.25)',
    borderStyle: 'solid',
    borderWidth: '0.1rem'
  },
  bioButtons: {
    '@media (max-width: 920px)': {
      justifyContent: 'center'
    }
  },
  bioContainer: {
    display: 'flex',
    margin: 'auto',
    marginTop: '1.75rem',
    '@media (max-width: 920px)': {
      marginTop: '2.5rem',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  cardPicture: {
    height: '230px',
    width: '230px',
    aspectRatio: '1 / 1'
  },
  cardContentTest: {
    '&:last-child': { pb: 1 }
  },
  p: {
    margin: '0',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  },
  selector: {
    '@media (max-width: 920px)': {
      position: 'fixed',
      left: '0',
      right: '0'
    }
  },
  selectorArrows: {
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'space-around',
    '@media (max-width: 920px)': {
      display: 'none'
    }
  },
  selectorCard: {
    display: 'flex',
    flex: '0 1 50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '.125rem',
    paddingTop: '.125rem',
    color: 'white',
    borderLeft: 'solid .0125rem',
    cursor: 'pointer'
  },
  react_native: {
    backgroundColor: '#61D8F8',
    color: 'black'
  },
  react: {
    backgroundColor: '#61D8F8',
    color: 'black'
  },
  json_web_tokens: {
    backgroundColor: '#D63AFF',
    color: 'white'
  },
  typescript: {
    backgroundColor: '#3178C6',
    color: 'white'
  },
  mui: {
    backgroundColor: '#0079F3',
    color: 'white'
  },
  graphql: {
    backgroundColor: '#F6009C',
    color: 'white'
  },
  mongodb: {
    backgroundColor: '#00ED64',
    color: 'white'
  },
  express: {
    backgroundColor: '#68A063',
    color: 'white'
  },
  node: {
    backgroundColor: '#68A063',
    color: 'white'
  },

  vba: {
    backgroundColor: '#912697',
    color: 'white'
  },

  postgresql: {
    backgroundColor: '#336791',
    color: 'white'
  },
  python: {
    backgroundColor: '#3673A5',
    color: 'white'
  },
  linux: {
    backgroundColor: '#DE4815',
    color: 'white'
  },
  django: {
    backgroundColor: '#000000',
    color: 'white'
  },
  java: {
    backgroundColor: '#0D8AC7',
    color: 'white'
  },
  sql: {
    backgrondColor: '#ffffff',
    color: 'black'
  },
  salesforce: {
    backgroundColor: '#00A1E0',
    color: 'white'
  },
  bloomberg_terminal: {
    backgroundColor: '#000000',
    color: 'white'
  },
  downArrow: {
    width: '0',
    height: '0',
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '20px solid',
    color: 'text.secondary'
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: 'text.primary'
  }
};

const functionalStyles: Record<string, (...args: any[]) => React.CSSProperties> = {
  active: (activeBool: boolean) => ({
    backgroundColor: activeBool ? 'text.secondary' : 'text.primary'
  }),
  activeArrow: (activeBool: boolean) => ({
    color: activeBool ? 'text.secondary' : 'rgba(0,0,0,0)'
  }),
  stickySelector: (scrollBool: boolean) => ({})
};

export default styles;
export { functionalStyles };
