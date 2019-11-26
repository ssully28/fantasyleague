import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import EditButton from '../EditButton/EditButton';

import classes from './Slot.module.css';

const Slot = (props) => {
  const slotName = props.slot.toUpperCase();
  // const card = <PlayerCard />

  let playerCard = 'Add Player...';

  if (props.player) {
    playerCard = <PlayerCard player={props.player}/>
  }

  return (
    <div className={classes['Slot']}>
      <div className={classes['Position']}>{slotName}</div>
      <div className={classes['Player']}>{playerCard}</div>
      <div className={classes['Edit']}><EditButton /></div>
    </div>
  );
};

export default Slot;
