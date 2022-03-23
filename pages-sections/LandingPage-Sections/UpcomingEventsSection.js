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
    title: 'GBM #3: SBCS Logo Making',
    image: '/img/events/gbm3spring2022.png',
    date: 'Wed, March 23th 2022 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description:
      'Come help SBCS make a brand new logo! There will be a prize for the best design!',
  },
  {
    title: 'Course Scheduling Panel',
    image: '/img/events/courseschedulingspring2022.png',
    date: 'Fri, April 1st 2022 2:00PM - 3:30PM',
    location: 'bit.ly/course-scheduling22',
    href: 'https://bit.ly/course-scheduling22',
    description: 'Join WiCS and SBCS for our Faculty and Student Panel!',
  },
];
courseschedulingspring2022;
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
