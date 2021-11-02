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
    title: 'Stony Brook Involvement Fair',
    image: '/img/events/sbinvolvementfair.png',
    date: 'Wed, Sept 1, 2021 12:30PM - 2:30PM',
    location: 'SAC Plaza',
    description: 'Come meet SBCS at the Stony Brook Involvement Fair!',
  },
  {
    title: 'CEAS Involvement Fair',
    image: '/img/events/ceasinvolvementfair.png',
    date: 'Wed, Sept 8 2021 12:30PM - 2:30PM',
    location: 'Engineering Quad',
    description: 'Come meet SBCS at the CEAS Involvement Fair!',
  },
  {
    title: 'GBM #1: Fishing for Introductions!',
    image: '/img/events/fall2021gbm1.png',
    date: 'Wed, Sept 15 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description:
      'Come meet the e-board and join us for games + icebreakers + snacks!',
  },
  {
    title: 'Career Fair Preparation',
    image: '/img/events/careerfairprep.png',
    date: 'Mon, Sept 20 2021 1:00PM - 2:00PM',
    location: 'New CS 120',
    description:
      'Learn about resumes, interviews, how to speak to recruiters/companies, etc.',
  },
  {
    title: 'IT & Engineering Networking Mixer',
    image: '/img/events/itengineeringmixer.jpg',
    date: 'Wed, Sept 22 2021 1:00PM - 3:00PM',
    location: 'Zoom',
    description: 'Come and connect with industry professionals!',
  },
  {
    title: 'GBM #2: Git Workshop',
    image: '/img/events/gitworkshop.png',
    date: 'Wed, Sept 29 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description: 'Learn what Git is and how you can use it for your projects!',
  },
  {
    title: 'Blackstone Technology Seminar',
    image: '/img/events/blackstonetechseminar.png',
    date: 'Fri, Oct 1 2021 12:00PM - 1:00PM',
    location: 'Zoom',
    description:
      'Come listen to Blackstone professionals as they talk about their experience and relevant industry technologies!',
  },
  {
    title: 'Cracking the Coding Interview',
    image: '/img/events/crackingthecodinginterview.png',
    date: 'Wed, Oct 13 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description:
      'Applying for internships & jobs in CS? Come join us as we go over problem solving techniques and other interview tips!',
  },
  {
    title: 'Intro to Web Development',
    image: '/img/events/introtowebdevelopment.png',
    date: 'Wed, Oct 20 2021 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description: 'Learn how to make a web app using HTML, CSS, and JavaScript!',
  },
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

export default function PastEventsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Past Events</h2>
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
