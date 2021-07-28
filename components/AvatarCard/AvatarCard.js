import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import imagesStyle from 'styles/jss/nextjs-material-kit/imagesStyles.js';
import Button from 'components/CustomButtons/Button.js';

const useStyles = makeStyles(imagesStyle);

export default function AvatarCard(props) {
  const classes = useStyles();
  const { className, name, position, image, email, linkedin, ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f9f9f9',
        padding: 15,
      }}
    >
      <h5 style={{ fontWeight: 'bold' }}>{name}</h5>
      <p style={{ marginBottom: 10 }}>{position}</p>
      <div style={{ maxWidth: '200px' }}>
        <img src='/img/faces/christian.jpg' className={imageClasses} />
      </div>
      <div>
        {email ? (
          <Button justIcon link href={email}>
            <i className={'fa fa-envelope'} />
          </Button>
        ) : null}
        {linkedin ? (
          <Button justIcon link href={linkedin}>
            <i className={'fab fa-linkedin'} />
          </Button>
        ) : null}
      </div>
    </div>
  );
}

AvatarCard.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node,
};
