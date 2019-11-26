import React from 'react';
import League from './containers/League/League';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes['App']}>
      <League />
    </div>
  );
}

export default App;
