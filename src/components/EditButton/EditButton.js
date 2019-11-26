import React from 'react';
import classes from './EditButton.module.css';

const EditButton = (props) => {
  return (
    <div className={classes['EditButton']}>
      <i class="fas fa-minus-circle"></i>
    </div>
  );
};

export default EditButton;

// <i class="fas fa-plus-circle"></i>
