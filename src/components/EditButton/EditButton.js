import React from 'react';
import classes from './EditButton.module.css';

const EditButton = (props) => {

  const removePlayer = () => {
    props.removePlayer(props.slot);
  }

  const addPlayer = () => {
    props.addPlayer(props.slot, props.playerId);
  }

  let button = 'fas fa-plus-circle';
  let buttonColor = 'green';
  let buttonAction = addPlayer;

  if (props.buttonState === 'Remove') {
    button = 'fas fa-minus-circle';
    buttonColor = 'red';
    buttonAction = removePlayer;
  } else if (props.buttonState === 'Disable') {
    // See if we can't change button to an X as well....
    buttonColor = 'grey';
  }



  return (
    <div className={classes['EditButton']}>
      <i
        style={{ color: buttonColor }}
        className={button}
        onClick={buttonAction} />
    </div>
  );
};

export default EditButton;


