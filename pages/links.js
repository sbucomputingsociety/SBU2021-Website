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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import styles from 'styles/jss/nextjs-material-kit/pages/linksPage.js';

const useStyles = makeStyles(styles);

export default function LinksPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  function ListItemLink(props) {
    return <ListItem button component='a' {...props} />;
  }

  const links = [
    {
      href: 'https://stonybrook.campuslabs.com/engage/organization/sbcs',
      text: 'SBEngaged',
    },
    {
      href: 'https://us16.list-manage.com/subscribe?u=677d17c9e74213253e770652c&id=cf5e365c85',
      text: 'Enroll in Newsletter',
      icon: <i className={classes.socialIcons + ' fa fa-envelope'} />,
    },
    {
      href: 'https://discord.gg/9TZcjyUhHS',
      text: 'Discord',
      icon: <i className={classes.socialIcons + ' fab fa-discord'} />,
    },
    {
      href: 'https://www.facebook.com/groups/sb.computing',
      text: 'Facebook',
      icon: <i className={classes.socialIcons + ' fab fa-facebook'} />,
    },
    {
      href: 'https://www.instagram.com/sbucomputingsociety/',
      text: 'Instagram',
      icon: <i className={classes.socialIcons + ' fab fa-instagram'} />,
    },
    {
      href: 'https://www.linkedin.com/groups/8677368/',
      text: 'Linkedin',
      icon: <i className={classes.socialIcons + ' fab fa-linkedin'} />,
    },
    {
      href: 'https://www.youtube.com/channel/UCeIuePMDrzIQ4kfsM5H73sg',
      text: 'YouTube',
      icon: <i className={classes.socialIcons + ' fab fa-youtube'} />,
    },
    {
      href: 'https://twitter.com/sbucomputing',
      text: 'Twitter',
      icon: <i className={classes.socialIcons + ' fab fa-twitter'} />,
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
                  }}
                >
                  <h3 className={classes.title}>Useful Links</h3>
                  <div className={classes.description}>
                    Here's a list of relevant and useful links:
                  </div>
                  <List>
                    {links.map((link) => (
                      <ListItem key={link.href}>
                        <ListItemLink
                          href={link.href}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {link.icon ? (
                            <ListItemIcon>{link.icon}</ListItemIcon>
                          ) : null}
                          <ListItemText primary={link.text} />
                        </ListItemLink>
                      </ListItem>
                    ))}
                  </List>
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
