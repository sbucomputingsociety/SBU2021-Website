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

export default function EventCard(props) {
  const classes = useStyles();
  const {
    className,
    title,
    image,
    date,
    location,
    href,
    description,
    ...rest
  } = props;
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
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
        height: '100%',
      }}
    >
      <div style={{ maxWidth: '350px' }}>
        <img src={image} className={imageClasses} />
      </div>
      <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
      <h5 style={{ color: '#f05537', fontWeight: 'bold' }}>{date}</h5>
      {href ? (
        <a href={href}>
          <h5 style={{ color: '#6f7287', fontWeight: 'bold' }}>{location}</h5>
        </a>
      ) : (
        <h5 style={{ color: '#6f7287', fontWeight: 'bold' }}>{location}</h5>
      )}

      <div>{description}</div>
    </div>
  );
}

EventCard.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node,
};
