import React, { Component } from 'react';
// import Standings from '../../components/Standings/Standings';
import Nav from '../../components/Nav/Nav';
import Lineup from '../../components/Lineup/Lineup';
import classes from './League.module.css';

class League extends Component {
  state = {
    league: 'Thursday Silver',
    salaryCap: 55000,
    averageSalary: 6500,
    // Lineup to be saved to API for user...
    lineup: {
      f1: 1001,
      f2: 1002,
      d1: 2001,
      d2: 2002,
      g: 3000
    },
    // Players to be loaded from API...
    players: [
      { id: 1001, fname: 'Sidney', lname: 'Crosby', pos: ['F','D'], salary: 15700, ppg: 20, gp: 8, g: 5, a: 14, pim: 3, team: 'Penguins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 1002, fname: 'Timo', lname: 'Meier', pos: ['F'], salary: 6700, ppg: 20, gp: 5, g: 21, a: 11, pim: 3, team: 'Sharks', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 2001, fname: 'Thomas', lname: 'Chabot', pos: ['D'], salary: 5300, ppg: 20, gp: 6, g: 2, a: 4, pim: 3, team: 'Senators', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 2002, fname: 'Doug', lname: 'Hamilton', pos: ['D'], salary: 7500, ppg: 20, gp: 7, g: 2, a: 4, pim: 3, team: 'Hurricanes', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3000, fname: 'Tukka', lname: 'Rask', pos: ['G'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' }
    ],
    schedule: [
      { date: '2019-11-28', time: 7, hometeam: 'RPA', awayteam: 'Cobras' },
      { date: '2019-11-28', time: 8, hometeam: 'Iron Man', awayteam: 'Warriors' },
      { date: '2019-11-28', time: 9, hometeam: 'Rogue Squadron', awayteam: 'Warriors' },
    ]
  }
  render() {
    
    // Get the current salary:
    const currentSalary = this.state.players.reduce((prev, curr) => {
      return prev + curr['salary'];
    }, 0);

    // To calculate the available cap space:
    const remainingSalary = this.state.salaryCap - currentSalary;

    return (
      <div className={classes['League']}>
        <div className={classes['Sport']}>Fantasy Hockey</div>
        <div className={classes['Rink']}>Contra Costa Sports Complex</div>
        <Nav league={this.state.league} cap={remainingSalary}  />
        <Lineup lineup={this.state.lineup} players={this.state.players} />
        <div className={classes['About']}>Created For Contra Costa Sports Complex</div>
        <div className={classes['About']}>By Steve Sullivan Great Guy</div>
      </div>
    );
  };
};

export default League;