import React, { Component, Fragment } from 'react';
// import Standings from '../../components/Standings/Standings';
import BackgroundPic from '../../assets/images/background.png';
import Nav from '../../components/Nav/Nav';
import Lineup from '../../components/Lineup/Lineup';
import Modal from '../../components/UI/Modal/Modal';
import classes from './League.module.css';

class League extends Component {
  state = {
    league: 'Thursday Silver',
    salaryCap: 55000,
    averageSalary: 6500,
    selectingPlayer: false,
    // Lineup to be saved to API for user...
    lineup: {
      F1: 1001,
      F2: 1002,
      D1: 2001,
      D2: 2002,
      G: 3000
    },
    // Players to be loaded from API...
    players: [
      { id: 1001, fname: 'Sidney', lname: 'Crosby', pos: ['F', 'D'], salary: 15700, ppg: 20, gp: 8, g: 5, a: 14, pim: 3, team: 'Penguins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 1002, fname: 'Timo', lname: 'Meier', pos: ['F'], salary: 6700, ppg: 20, gp: 5, g: 21, a: 11, pim: 3, team: 'Sharks', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 2001, fname: 'Thomas', lname: 'Chabot', pos: ['D'], salary: 5300, ppg: 20, gp: 6, g: 2, a: 4, pim: 3, team: 'Senators', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 2002, fname: 'Doug', lname: 'Hamilton', pos: ['D'], salary: 7500, ppg: 20, gp: 7, g: 2, a: 4, pim: 3, team: 'Hurricanes', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3000, fname: 'Tukka', lname: 'Rask', pos: ['G'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },

      { id: 3001, fname: 'John', lname: 'Gibson', pos: ['G'], salary: 8400, ppg: 17, gp: 4, g: 0, a: 0, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3002, fname: 'Jacob', lname: 'Markstrom', pos: ['G'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3003, fname: 'Steven', lname: 'Stamkos', pos: ['F'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3004, fname: 'Brent', lname: 'Burns', pos: ['F', 'D'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3005, fname: 'Alex', lname: 'Ovechkin', pos: ['F'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3006, fname: 'Erik', lname: 'Karlsson', pos: ['D'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3007, fname: 'Cale', lname: 'Makar', pos: ['D'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' },
      { id: 3008, fname: 'Patrick', lname: 'Marleau', pos: ['F'], salary: 9500, ppg: 20, gp: 4, g: 2, a: 4, pim: 3, team: 'Bruins', img: 'https://photos.smugmug.com/photos/i-btdgmzB/0/f0c92997/Th/i-btdgmzB-Th.png' }
    ],
    schedule: [
      { date: '2019-11-28', time: 7, hometeam: 'RPA', awayteam: 'Cobras' },
      { date: '2019-11-28', time: 8, hometeam: 'Iron Man', awayteam: 'Warriors' },
      { date: '2019-11-28', time: 9, hometeam: 'Rogue Squadron', awayteam: 'Warriors' },
    ],
    selectablePlayers: []
  }

  removePlayer = (slot) => {
    // Might be able to refactor this...
    // TODO : Re-calculate the remaining salary!!!
    const lineup = this.state.lineup;
    lineup[slot] = null;
    this.setState({ lineup: lineup });
  }

  addPlayer = (slot) => {
    this.setState({ selectingPlayer: true });
    let pos = slot.charAt(0);
    console.log("Adding a: ", pos);
    let players = this.state.players.filter(player => player.pos.includes(pos));
    this.setState({selectablePlayers: players});
    console.log(players);
    /*
      1 - Open Player Modal [DONE]
      2 - List all players eligible for this slot
      3 - When user clicks the + on the right add user to lineup state
      3a - Update Salary state
      4 - Close the Player Modal
    */
  }

  addPlayerCancel = () => {
    this.setState({ selectingPlayer: false });
  };

  render() {

    // Get the current salary:
    // TODO - fix, need to get just the combined salary for the players in the state lineup!
    const currentSalary = this.state.players.reduce((prev, curr) => {
      return prev + curr['salary'];
    }, 0);

    // To calculate the available cap space:
    const remainingSalary = this.state.salaryCap - currentSalary;

    return (
      <Fragment>
        <Modal 
          show={this.state.selectingPlayer}
          modalClosed={this.addPlayerCancel}
          selectablePlayers={this.state.selectablePlayers} />
        <div className={classes['League']}>
          <div className={classes['TopBanner']}>
            <div className={classes['Sport']}>Fantasy Hockey</div>
            <div className={classes['Rink']}>Contra Costa Sports Complex</div>
          </div>
          <Nav league={this.state.league} cap={remainingSalary} />
          <Lineup
            lineup={this.state.lineup}
            players={this.state.players}
            removePlayer={this.removePlayer}
            addPlayer={this.addPlayer} />
          <div className={classes['About']}>Created For Contra Costa Sports Complex</div>
          <div className={classes['About']}>By Steve Sullivan Great Guy</div>
        </div>
      </Fragment>

    );
  };
};

export default League;
