import React from 'react';
import classes from './EditButton.module.css';

const EditButton = (props) => {
  let button = 'fas fa-plus-circle';
  let buttonColor = 'green';

  if (props.buttonState === 'Remove') {
    button = 'fas fa-minus-circle';
    buttonColor = 'red';
  } else if (props.buttonState === 'Disable') {
    buttonColor = 'grey';
  }

  return (
    <div className={classes['EditButton']}>
      <i style={{color : buttonColor}} className={button}></i>
    </div>
  );
};

export default EditButton;


