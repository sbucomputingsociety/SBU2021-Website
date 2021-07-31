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

export default function ContactPage(props) {
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
                  <h3 className={classes.title}>Contact SBCS</h3>
                  <div className={classes.description}>
                    Click{' '}
                    <a
                      href='http://eepurl.com/c038SD'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      here
                    </a>{' '}
                    to join our mailing list to enroll in our weekly newsletter,
                    which contains relevant opportunities, upcoming events, and
                    other events of interest to computing students.
                  </div>
                  <br />
                  <div className={classes.message}>
                    You can also reach us at{' '}
                    <a href='mailto:sbucomputingsociety@gmail.co'>
                      sbucomputingsociety@gmail.com
                    </a>
                    .
                  </div>
                  <iframe
                    src='https://discord.com/widget?id=751540629909143703&theme=dark'
                    width='350'
                    height='500'
                    allowtransparency='true'
                    frameBorder='0'
                    sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                    style={{ alignSelf: 'center', marginTop: 20 }}
                  />
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
