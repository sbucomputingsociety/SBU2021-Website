import { container, title } from 'styles/jss/nextjs-material-kit.js';

import imagesStyle from 'styles/jss/nextjs-material-kit/imagesStyles.js';

const sponsorsPageStyle = {
  container: {
    ...container,
    paddingBottom: 100,
  },
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)',
    },
  },
  content: {
    marginBottom: '100px',
  },
  description: {
    margin: '1.071rem auto 0',
    maxWidth: '600px',
    color: '#999',
    textAlign: 'center !important',
  },
  name: {
    marginTop: '-80px',
  },
  ...imagesStyle,
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  message: {
    textAlign: 'center',
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999',
  },
  sponsor: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 0',
  },
  navWrapper: {
    margin: '20px auto 50px auto',
    textAlign: 'center',
  },
};

export default sponsorsPageStyle;
