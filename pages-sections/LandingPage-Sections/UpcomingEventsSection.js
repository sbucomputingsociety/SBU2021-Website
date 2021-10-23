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
    title: 'Mummy Wrap',
    image: '/img/events/mummywrap.png',
    date: 'Wed, Oct 27 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description:
      'Are you ready for the night of the living bytes? No programming knowledge needed! Mummy wrap the SBCS e-board and win prizes for the best wrap!',
  },
  {
    title: 'Course Scheduling Panel',
    image: '/img/events/courseschedulingfall2021.png',
    date: 'Fri, Oct 29 2021 1:00PM - 2:30PM',
    location: 'bit.ly/coursepanel',
    description:
      'Join WiCS and SBCS for our Faculty and Student Panel! Come ask your burning questions and listen to answers from CSE/ISE professors & advisors.',
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
