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

let events = [
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
  {
    title: 'Data Science Workshop Part 1',
    image: '/img/events/datascienceworkshop.png',
    date: 'Wed, Nov 3 2021 1:00PM - 2:30PM',
    location: 'Engineering 145',
    description: 'Learn basic data science techniques using Python!',
  },
  {
    title: "GBM #10: Study n' Snacks",
    image: '/img/events/studynsnack.png',
    date: 'Wed, Dec 1 2021 1:00PM',
    location: 'Engineering 145',
    description:
      'Come join SBCS as we study for finals with snacks and lo-fi hip-hop beats during the dead week!',
  },
  {
    title: 'GBM #2: Python-ing the Technical Interview',
    image: '/img/events/pythoningthetechnicalinterview.png',
    date: 'Wed, March 2nd 2022 1:00PM - 2:00PM',
    location: 'Engineering 145',
    description:
      'Learn how to use data structures and algorithms in Python for your coding interviews!',
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
  {
    title: 'Careers in Project Management',
    image: '/img/events/projectmanagement.png',
    date: 'Wednesday, April 13 2022 6PM - 7:30PM',
    location: 'Register on Handshake!',
    href: 'https://app.joinhandshake.com/stu/events/953023?ref=events-search',
    description:
      'Learn more about project management in a virtual networking opportunity with experts from PMI Long Island Chapter and SBU!',
  },
  {
    title: 'Succulent Potting Party',
    image: '/img/events/succulent.png',
    date: 'Wednesday, April 20 2022 7:30PM - 9PM',
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
    date: 'April 1 - April 31 2022',
    location: 'Join the SBCS Discord for more info!',
    href: 'https://discord.gg/F3j32S5AhX',
    description:
      'SBCS is hosting an online month-long data science hackathon from April 1 to April 31!',
  },
  {
    title: 'BGM1: Introduction',
    image: '/img/events/GBM_1_Intro_9_14_2022.jpg',
    date: 'Wednesday, September 14 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Learn about Stony Brook Computing Society! 1-2 PM in Engineering 145 👋 See you there!',
  },
  {
    title: 'Landing Internships for Dummies',
    image: '/img/events/landing_internships_9_21_2022.jpg',
    date: 'Wednesday, September 21 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Join SBCS\'s first ever internship prep series to get professional advice and tips about internship. It\'s absolutely free~',
  },
  {
    title: 'Introduction to Web Development',
    image: '/img/events/Intro_to_web_dev_9_28_2022.png',
    date: 'Wednesday, September 28 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Ever wanted to learn how to build your very own website?🤔 This meeting will help you learn the basics of HTML, CSS, and JavaScript! Everything you need to be able to create your own stunning website in under an hour!',
  },
  {
    title: 'Landing Internships For Dummies',
    image: '/img/events/Landing_internships_for_dummies_10_5_2022.jpg',
    date: 'Wednesday, October 5 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Interested in learning how to showcase your coding projects online? Come check out the next session of our Internship Prep Series as we go over how to build your own portfolio website!',
  },
  {
    title: 'Vim Workshop',
    image: '/img/events/Vim_10_12_2022.jpg',
    date: 'Wednesday, October 12 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Vim is a terminal text editor that is very useful for making quick changes when connected to an online web server or being unable to access other complex code editors like VSCode. Join to learn more!',
  },
  {
    title: 'How to Network & Ace the Behavioral Interview',
    image: '/img/events/Networking_and_behavioral_interviews_10_19_2022.jpg',
    date: 'Wednesday, October 19 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Join us to listen in on the part three of our internship prep series. We will be introducing best practices for networking and tips to ace behavioral interviews.',
  },
  {
    title: 'How to Build a Mobile App',
    image: '/img/events/MobileApp_10_26_2022.png',
    date: 'Wednesday, October 26 2022 1PM - 2PM',
    location: 'Engineering 145',
    description: 'Interested in learning mobile app development? Our next meeting will be How to Build a Mobile App. We hope to see you there!',
  },
  {
    title: 'Coding Contest',
    image: '/img/events/CodingContest_10_28_2022.png',
    date: 'Wednesday, October 27 2022 7PM - 8PM',
    location: 'Old CS 2120',
    description: 'Come to join a coding contest co-hosted by SBCS, WiCS, and TBP! You will learn how to problem-solve in order to prepare for the professional world!',
  },
];

export default function PastEventsSection() {
  const classes = useStyles();
  events = events.reverse();
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
