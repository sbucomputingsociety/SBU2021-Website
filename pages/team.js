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
                  name="Mir Farid '23"
                  position='President'
                  image='/img/faces/mirfarid.png'
                  email='mailto:mir.farid@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/mirfarid/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Avish Parmar '23"
                  position='Vice President'
                  image='/img/faces/avishparmar.jpg'
                  email='mailto:avish.parmar@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/avish-parmar-40951915a'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name=""
                  position='Treasurer'
                  image=''
                  email=''
                  linkedin=''
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Bryan Lai '24"
                  position='Secretary'
                  image='/img/faces/bryanlai.jpg'
                  email='mailto:bryan.j.lai@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/bryanlais/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Amir Hamza '25"
                  position='Community Chair'
                  image='/img/faces/amirhamza.jpeg'
                  email='mailto:amir.hamza@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/mohammedamirhamza/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Angel Xie '26"
                  position='Webmaster'
                  image='/img/faces/AngelXie.png'
                  email='mailto:jiaxin.xie@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/jiaxin-xie-67102720b/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name="Sean Erfan '26"
                  position='Branding Manager'
                  image='/img/faces/SeanErfan.jpg'
                  email='mailto:sean.erfan@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/sean-erfan-abb259256/'
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
                  name=''
                  position='Senior Rep'
                  image=''
                  email='mailto:'
                  linkedin=''
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Kyoshi Noda'
                  position='Junior Rep'
                  image='/img/faces/KyoshiNoda.jpg'
                  email='mailto:kyoshi.noda@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/kyoshi-noda/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Ritesh Chavan'
                  position='Sophomore Rep'
                  image='/img/faces/RiteshChavan.jpg'
                  email='ritesh.chavan@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/riteeessshhh/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Sharon Guan'
                  position='Sophomore Rep'
                  image=''
                  email='mailto:sharon.guan@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/sharon-guan-2575b8226/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Kimberly Ramirez'
                  position='Freshman Rep'
                  image='/img/faces/KimberlyRamirez.jpg'
                  email='mailto:kimberly.ramirez@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/kimberlyramirez31/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Grace Wang'
                  position='Freshman Rep'
                  image='/img/faces/GraceWang.jpg'
                  email='mailto:grace.wang@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/grace-wang-870099198/'
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <AvatarCard
                  name='Atri Vyas'
                  position='Freshman Rep'
                  image='/img/faces/AtriVyas.jpg'
                  email='mailto:atri.vyas@stonybrook.edu'
                  linkedin='https://www.linkedin.com/in/atrivyas7/'
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
