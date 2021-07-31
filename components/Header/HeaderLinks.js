/*eslint-disable*/
import React from 'react';
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import { Info, Book, Business, Phone, Event } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'styles/jss/nextjs-material-kit/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText='About'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Info}
          dropdownList={[
            <Link href='/about'>
              <a className={classes.dropdownLink}>What is SBCS?</a>
            </Link>,
            <Link href='/team'>
              <a className={classes.dropdownLink}>The Team</a>
            </Link>,
            <Link href='/pdf/bylaws2021.pdf'>
              <a
                className={classes.dropdownLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Bylaws
              </a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText='Events'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Event}
          dropdownList={[
            <Link href='/calendar'>
              <a className={classes.dropdownLink}>Calendar</a>
            </Link>,
            <Link href='/gbms'>
              <a className={classes.dropdownLink}>GBMs</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText='Resources'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Book}
          dropdownList={[
            <Link href='/links'>
              <a className={classes.dropdownLink}>Links</a>
            </Link>,
            <Link href='/resumebook'>
              <a className={classes.dropdownLink}>Resume Book</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/sponsors'
          color='transparent'
          className={classes.navLink}
        >
          <Business className={classes.icons} /> Sponsors
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href='/contact' color='transparent' className={classes.navLink}>
          <Phone className={classes.icons} /> Contact SBCS
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Join our Facebook group!'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/groups/sbucomputingsociety/permalink/10159596114895984/'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on Instagram!'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.instagram.com/sbucomputingsociety'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='youtube-tooltip'
          title='Check out our YouTube channel!'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.youtube.com/channel/UCeIuePMDrzIQ4kfsM5H73sg'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-youtube'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='discord-tooltip'
          title='Join our Discord server!'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://discord.gg/9TZcjyUhHS'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-discord'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
