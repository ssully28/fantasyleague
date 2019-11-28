import React from 'react';
import classes from './Nav.module.css';

const Nav = (props) => {
  return (
    <div className={classes['Nav']}>
      <div className={classes['LeagueName']}>{props.league}</div>
      <div className={classes['Salary']}>Available Salary: {props.cap}</div>
    </div>
  );
};

export default Nav;
