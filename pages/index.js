import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'styles/jss/nextjs-material-kit/pages/landingPage.js';

// Sections for this page
import ProductSection from 'pages-sections/LandingPage-Sections/ProductSection.js';
import TeamSection from 'pages-sections/LandingPage-Sections/TeamSection.js';
import WorkSection from 'pages-sections/LandingPage-Sections/WorkSection.js';
import UpcomingEventsSection from '../pages-sections/LandingPage-Sections/UpcomingEventsSection';
import PastEventsSection from '../pages-sections/LandingPage-Sections/PastEventsSection';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function IndexPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='Stony Brook Computing Society'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter responsive image='/img/landing-bg.jpg'>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                The Stony Brook Computing Society
              </h1>
              <h4>
                The Stony Brook Computing Society is a student organization at
                Stony Brook University for all that are interested in
                programming, computers, and related technology. We hold a GBM
                every week and organize a variety of events focused on
                academics, professional development, and community building.
                Make sure to check the Events tab for any upcoming events!
              </h4>
              <br />
              {/* <Button
                color='danger'
                size='lg'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fas fa-play' />
                Watch video
              </Button> */}
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src='/img/bytes-logo.png' />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div style={{ color: '#3c4858' }}>
            <UpcomingEventsSection />
            <PastEventsSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}