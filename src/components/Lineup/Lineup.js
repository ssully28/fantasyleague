import React from 'react';
import Slot from '../Slot/Slot';
import Button from '../Button/Button';
import classes from './Lineup.module.css';

const Lineup = (props) => {

  const currentLineup = [];

  for (let i in props.lineup) {
    // First define the player as null:
    let player = null;

    // Then if we have an ID grab the player info from the player list:
    if (props.lineup[i]) {
      player = props.players.filter(player => {
        return player.id === props.lineup[i];
      })[0];
    }

    currentLineup.push(
      <Slot
        key={i}
        slot={i}
        player={player}
        removePlayer={props.removePlayer}
        addPlayer={props.addPlayer}
      />
    );
  }

  return (
    <div className={classes['Lineup']}>
      {currentLineup}
      <div className={classes['Submit']}>
        <Button />
      </div>
    </div>

  );
};

export default Lineup;

/*
  props.lineup.f1
   ? <PlayerCard player={props.players.filter(player => {
       return player.id === props.lineup.f1;
     })} />
  : null
*/