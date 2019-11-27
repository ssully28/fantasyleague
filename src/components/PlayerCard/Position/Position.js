import React from 'react';
import classes from './Position.module.css';

const Position = (props) => {
  return (
    <span className={classes['Position']}>{props.pos}</span>
  );
};

export default Position;
