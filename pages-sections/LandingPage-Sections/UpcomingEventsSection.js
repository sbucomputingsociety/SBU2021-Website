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
  {
    title: 'Landing Internships for Dummies (Series)',
    image: '/img/events/internshipsfordummies.png',
    date: "Wednesdays 1 PM on weeks we don't have GBMs",
    location: 'Zoom Link: bit.ly/sbcs-series',
    href: 'https://bit.ly/sbcs-series',
    description:
      'An ongoing series to help you score internships in the tech field!',
  },
  {
    title: 'Landing Internships for Dummies: A Roadmap',
    image: '/img/events/landinginternshipfordummiesroadmap.png',
    date: 'Wed, March 9th 2022 1:00PM - 2:00PM',
    location: 'Zoom Link: bit.ly/sbcs-series',
    href: 'https://bit.ly/sbcs-series',
    description:
      "Come to the first session in SBCS's Landing Internships for Dummies series!",
  },
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
