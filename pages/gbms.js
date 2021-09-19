import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NavPills from 'components/NavPills/NavPills.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'styles/jss/nextjs-material-kit/pages/sponsorsPage.js';

const useStyles = makeStyles(styles);

export default function GbmsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color='transparent'
        brand='Stony Brook Computing Society'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 60,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image='/img/profile-bg.jpg' />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={6}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 100,
                  }}
                >
                  <h3 className={classes.title}>General Body Meetings</h3>
                  <div className={classes.description}>
                    SBCS holds General Body Meetings (GBMs) weekly throughout
                    the school year. These can be social, academic, or
                    career-oriented meetings!
                    <br />
                    <br />
                    <b>Time:</b> Every Wednesday 1pm (unless announced
                    otherwise)
                    <br />
                    <b>Location:</b> Engineering 145
                  </div>
                  <img src='/img/gbm1.jpg' style={{ marginTop: 15 }} />
                  <span style={{ textAlign: 'center' }}>
                    <b>Fall 2021 GBM #1:</b> We reached our record number of
                    attendees - over <b>100</b> people came!
                  </span>
                  <img src='/img/gbm.jpg' style={{ marginTop: 15 }} />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
