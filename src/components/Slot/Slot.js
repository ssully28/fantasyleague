import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import EditButton from '../EditButton/EditButton';
import classes from './Slot.module.css';

const Slot = (props) => {
  const slotName = props.slot.toUpperCase();

  // Set a default in the case we don't have a player in a slot:
  let playerCard = 'Add Player...';
  
  // Eventually have to change this to be able to be greyed out....
  let buttonState = 'Add';


  // Then if we do have a player create a card for this slot:
  if (props.player) {
    playerCard = <PlayerCard player={props.player}/>
    buttonState = 'Remove';
  }



  return (
    <div className={classes['Slot']}>
      <div className={classes['Position']}>{slotName}</div>
      <div className={classes['Player']}>{playerCard}</div>
      <div className={classes['Edit']}><EditButton buttonState={buttonState} /></div>
    </div>
  );
};

export default Slot;
