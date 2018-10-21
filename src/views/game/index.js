import React, { Component } from 'react';

//global components
import { MaterialButton } from 'global/components/material/button';

import './styles.css';

class Game extends Component {
  constructor() {
    super(); 
  }  

  render() {
    return (
      <div className="login-panel"> 
        <MaterialButton buttonText={"Login"} onClick={this.onClickLogin} />
      </div>
    );
  }
}

export default Game;