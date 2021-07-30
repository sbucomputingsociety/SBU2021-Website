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
    title: 'Event 1',
    image: '/img/events/event1.jpg',
    date: 'Wed, Aug 25, 2021 1:00PM EDT',
    description:
      'Ease into the week with our wonderful event held by The Stony Brook Computing Society!',
  },
  {
    title: 'Event 2',
    image: '/img/events/event1.jpg',
    date: 'Wed, Aug 1, 2021 1:00PM EDT',
    description:
      'Ease into the week with our wonderful event held by The Stony Brook Computing Society!',
  },
  {
    title: 'Event 2',
    image: '/img/events/event1.jpg',
    date: 'Wed, Sept 8, 2021 1:00PM EDT',
    description:
      'Ease into the week with our wonderful event held by The Stony Brook Computing Society!',
  },
  {
    title: 'Event 3',
    image: '/img/events/event1.jpg',
    date: 'Wed, Sept 15, 2021 1:00PM EDT',
    description:
      'Ease into the week with our wonderful event held by The Stony Brook Computing Society!',
  },
  {
    title: 'Event 4',
    image: '/img/events/event1.jpg',
    date: 'Wed, Sep 22, 2021 1:00PM EDT',
    description:
      'Ease into the week with our wonderful event held by The Stony Brook Computing Society!',
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
