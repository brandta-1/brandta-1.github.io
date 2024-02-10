import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  techBadge: {
    borderRadius: '20px',
    padding: '0.125rem 0.575rem',
    height: '25%',
    border: '1px solid rgba(0,0,0,0.25)',
    borderStyle: 'solid',
    borderWidth: '0.1rem'
  },
  p: {
    margin: '0',
    fontSize: '0.75rem',
    fontWeight: 'bold'
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
  }
};

const colorMap: Record<string, React.CSSProperties['color']> = {
  react_native: 'rgb(97, 219, 251)',
  react: '#61DBFB',
  json_web_tokens: '#D63AFF',
  graphql: '#F6009C',
  mongodb: '#00ED64',
  express: '#68A063',
  node: '#68A063'
};

export { colorMap };
export default styles;
