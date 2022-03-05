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

// Carousel
import Carousel from 'react-slick';
import LocationOn from '@material-ui/icons/LocationOn';
import Card from 'components/Card/Card.js';

const useStyles = makeStyles(styles);

export default function GalleryPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay: true,
  };

  const fall2021images = [
    {
      src: '/img/gallery/involvementfair-fall2021.jpg',
      alt: 'CEAS Involvement Fair 2021',
      caption: 'CEAS Involvement Fair 2021',
    },
    {
      src: '/img/gallery/gbm1-0-fall2021.png',
      alt: 'Meet the E-Board!',
      caption: 'Meet the E-Board!',
    },
    {
      src: '/img/gallery/gbm1-1-fall2021.jpg',
      alt: 'GBM #1 Fall 2021',
      caption: 'GBM #1 Fall 2021',
    },
    {
      src: '/img/gallery/gitworkshop-fall2021.JPG',
      alt: 'GBM #2: Git Workshop',
      caption: 'GBM #2: Git Workshop',
    },
    {
      src: '/img/gallery/jeopardy-fall2021.jpg',
      alt: 'GBM #3: Jeopardy!',
      caption: 'GBM #3: Jeopardy!',
    },
    {
      src: '/img/gallery/mummywrap-fall2021.png',
      alt: 'Mummy Wrapping',
      caption: 'Mummy Wrapping',
    },
    {
      src: '/img/gallery/thanksgivingpotluck-fall2021.jpeg',
      alt: 'Thanksgiving Potluck',
      caption: 'Thanksgiving Potluck',
    },
  ];

  const spring2022images = [
    {
      src: '/img/gallery/gbm1-spring2022.jpg',
      alt: 'GBM #1 Spring 2022',
      caption: 'GBM #1 Spring 2022',
    },
  ];

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
                  <h3 className={classes.title}>Gallery</h3>
                  <div
                    className={classes.description}
                    style={{ marginBottom: 20 }}
                  >
                    Browse through our gallery to get a sense of what we do! If
                    you'd like to contribute, please email us at{' '}
                    <a href='mailto:sbucomputingsociety@gmail.com'>
                      sbucomputingsociety@gmail.com
                    </a>
                  </div>
                  <h4>Fall 2021</h4>
                  <Carousel {...settings}>
                    {fall2021images.map((image) => (
                      <div>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className='slick-image'
                        />
                        <div
                          className='slick-caption'
                          style={{
                            bottom: 0,
                            padding: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                          }}
                        >
                          <h4 style={{ margin: 0 }}>{image.caption}</h4>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                  <h4>Spring 2022</h4>
                  <Carousel {...settings}>
                    {spring2022images.map((image) => (
                      <div>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className='slick-image'
                        />

                        <div
                          className='slick-caption'
                          style={{
                            bottom: 0,
                            padding: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                          }}
                        >
                          <h4 style={{ margin: 0 }}>{image.caption}</h4>
                        </div>
                      </div>
                    ))}
                  </Carousel>
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
