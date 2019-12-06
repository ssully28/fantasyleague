import React, { Component, Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import PlayerCard from '../../PlayerCard/PlayerCard';
import EditButton from '../../EditButton/EditButton';
import classes from './Modal.module.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    let playerArr = this.props.selectablePlayers;
    let playerList = [];

    if (playerArr) {
      playerList = this.props.selectablePlayers.map((player) => {
        return (
          <div key={player.id} className={classes['PlayerList']}>
            <div><PlayerCard player={player} /></div>
            <div><EditButton playerId={player.id} slot={this.props.slot} addPlayer={this.props.addPlayer}/></div>
          </div>
        );
      });
    }

    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes['Modal']}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {playerList}
        </div>
      </Fragment>
    );
  };
};

export default Modal;