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

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What We Do</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Community Building & Social Events'
              description="We host all sorts of fun, social events like Casino Night, S'mores and Jeopardy, and Geek Games."
              icon={GroupIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Corporate & Career Events'
              description='We hold several career-related events every semester, such as the CS/IT Mixer, Audience With Our Alumni, or a trip to the Facebook NYC office.'
              icon={BusinessIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Faculty Events'
              description='We hold faculty events every semester to bolster student-faculty relations, giving students a chance to talk to their professors in a more casual setting. Some of our past events included a Student-Professor Luncheon and Professor vs. Students Game.'
              icon={SchoolIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Workshops'
              description='We host multiple workshops every semester to help students learn new skills. Past topics have included web development, LaTeX, and cloud computing.'
              icon={BuildIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Mentorship'
              description=''
              icon={PeopleOutlineIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Resume Book'
              description="We feature our members' resumes in a book that is sent to top corporations."
              icon={ImportContactsIcon}
              iconColor='info'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
