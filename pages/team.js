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

import styles from 'styles/jss/nextjs-material-kit/pages/profilePage.js';
import AvatarCard from '../components/AvatarCard/AvatarCard';

const useStyles = makeStyles(styles);

export default function TeamPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames();
  // classes.imgRaised
  // classes.imgRoundedCircle,
  // classes.imgFluid
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
                <div className={classes.profile}>
                  <div>
                    <img
                      src='/img/logo.png'
                      alt='...'
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Current E-Board</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>Shoutout to the SBCS team!</p>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Samin Mailk '23"
                  position='President'
                  image='/img/faces/saminmalik.jpg'
                  email='mailto:lawrence.lin@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/saminmalik2000'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Nayan Pasari '22"
                  position='Vice President'
                  image='/img/faces/nayanpasari.jpg'
                  email='mailto:nayan.pasari@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/nayan-pasari-10b201182/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Avish Parmar '23"
                  position='Treasurer'
                  image='/img/faces/avishparmar.png'
                  email='mailto:avish.parmar@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/avish-parmar-40951915a'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Mir Farid '23"
                  position='Secretary'
                  image='/img/faces/mirfarid.png'
                  email='mailto:mir.farid@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/mirfarid/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Summer Wang '24"
                  position='Event Coordinator'
                  image='/img/faces/summerwang.jpg'
                  email='mailto:xuecen.wang@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/xuecen-summer-wang'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Lawrence Lin '22"
                  position='Webmaster'
                  image='/img/faces/lawrencelin.jpg'
                  email='mailto:lawrence.lin@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/lawrencelin101/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Paul Noble '24"
                  position='Branding Manager'
                  image='/img/faces/paulnoble.jpg'
                  email='mailto:paul.noble@stonybrook.edu'
                />
              </GridItem>
              {/* <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Reilly Browne '23"
                  position='Community Chair'
                  image='/img/faces/reillybrowne.jpeg'
                  email='mailto:reilly.browne@stonybrook.edu'
                />
              </GridItem> */}
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Charlie Clark'
                  position='Senior Rep'
                  image='/img/faces/charlesclark.jpeg'
                  email='mailto:charles.r.clark@stonybrook.edu'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Arman Syed'
                  position='Junior Rep'
                  image='/img/faces/armansyed.jpg'
                  email='mailto:arman.syed@stonybrook.edu'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Bryan Lai'
                  position='Sophomore Rep'
                  image='/img/faces/bryanlai.jpg'
                  email='mailto:bryan.j.lai@stonybrook.edu'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Prachi Kadam'
                  position='Sophomore Rep'
                  image='/img/faces/prachikadam.jpg'
                  email='mailto:prachi.kadam@stonybrook.edu'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Amir Hamza'
                  position='Freshman Rep'
                  image='/img/faces/amirhamza.jpeg'
                  email='mailto:mohammedamir.hamza@stonybrook.edu'
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
