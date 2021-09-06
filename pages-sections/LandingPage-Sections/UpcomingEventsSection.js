import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';

import styles from 'styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import EventCard from '../../components/EventCard/EventCard';

const useStyles = makeStyles(styles);

const events = [
  // {
  //   title: 'Stony Brook Involvement Fair',
  //   image: '/img/events/sbinvolvementfair.png',
  //   date: 'Wed, Sept 1, 2021 12:30PM - 2:30PM',
  //   location: 'SAC Plaza',
  //   description: 'Come meet SBCS at the Stony Brook Involvement Fair!',
  // },
  {
    title: 'CEAS Involvement Fair',
    image: '/img/events/ceasinvolvementfair.png',
    date: 'Wed, Sept 8 2021 12:30PM - 2:30PM',
    location: 'Engineering Quad',
    description: 'Come meet SBCS at the CEAS Involvement Fair!',
  },
  {
    title: 'GBM #1: Fishing for Introductions!',
    date: 'Wed, Sept 15 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description:
      'Come to our first General Body Meeting of the year to meet the e-board and learn more about SBCS!',
  },
  {
    title: 'IT & Engineering Networking Mixer',
    image: '/img/events/itengineeringmixer.jpg',
    date: 'Wed, Sept 22 2021 1:00PM - 3:00PM',
    // location: 'Engineering Quad',
    description: 'Come and connect with industry professionals!',
  },

  {
    title: 'GBM #2: Git Workshop',
    date: 'Wed, Sept 29 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description: 'Learn what Git is and how you can use it for your projects!',
  },
  // {
  //   title: 'Event 4',
  //   image: '/img/events/event1.jpg',
  //   date: 'Wed, Sep 22, 2021 1:00PM EDT',
  //   description:
  //     'Ease into the week with our wonderful event held by The Stony Brook Computing Society!',
  // },
];

export default function UpcomingEventsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Upcoming Events</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer spacing={5}>
          {events.map((event) => (
            <GridItem key={event.title} xs={12} sm={12} md={4}>
              <EventCard {...event} />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
