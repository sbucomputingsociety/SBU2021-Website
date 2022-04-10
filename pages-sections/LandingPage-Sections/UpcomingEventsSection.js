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
    title: 'Careers in Project Management',
    image: '/img/events/projectmanagement.png',
    date: 'Wednesday, April 13 6PM - 7:30PM',
    location: 'Register on Handshake!',
    href: 'https://app.joinhandshake.com/stu/events/953023?ref=events-search',
    description:
      'Learn more about project management in a virtual networking opportunity with experts from PMI Long Island Chapter and SBU!',
  },
  {
    title: 'Succulent Potting Party',
    image: '/img/events/succulent.png',
    date: 'Wednesday, April 20 7:30PM - 9PM',
    location: 'SAC 169',
    description: 'SBCS x WiCS is holding a succulent potting party!',
  },
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
    title: 'Data Science Hackathon',
    image: '/img/events/datasciencehackathonapril2022.png',
    date: 'April 1 - April 31',
    location: 'Join the SBCS Discord for more info!',
    href: 'https://discord.gg/F3j32S5AhX',
    description:
      'SBCS is hosting an online month-long data science hackathon from April 1 to April 31!',
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
