import React from 'react';
import Position from './Position/Position';
import classes from './PlayerCard.module.css';

const PlayerCard = (props) => {
  const player = props.player;
  // let playerStats = {};
  const positions = props.player.pos.map((pos) => {
    return (
      <Position key={pos} pos={pos} />
    )
  });

  return (
    <div className={classes['PlayerCard']}>
      <img className={classes['Img']} src={player.img} alt={player.lname} />
      <div className={classes['CardBody']}>
        <span className={classes['Fname']}>{player.fname}</span>&nbsp;<span className={classes['Lname']}>{player.lname}</span>
        <span className={classes['Positions']}>{positions}</span>
        <div className={classes['Team']}>{player.team}</div>
        <div className={classes['Salary']}>Salary: {player.salary}</div>
      </div>
      <div className={classes['FantasyStats']}>
        <div>PPG: {player.ppg}</div>
        <div>Goals: {player.g}</div>
        <div>Assists: {player.a}</div>
        <div>PIMs: {player.pim}</div>
      </div>
    </div>
  );
};

export default PlayerCard;

/*
id: 2002,
fname: 'Doug',
lname: 'Hamilton',
pos: 2,
salary: 7500,
ppg: 20
gp: 7
g: 2
a: 4
pim: 3
team: 'Hurricanes'
img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png'
*/