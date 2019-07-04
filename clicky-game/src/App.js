import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper';
import Nav from './Components/Nav';
import Jumbotron from './Components/Jumbotron';
import Images from './Components/Images';
import GameData from './GameData.json';

class App extends Component {

  state = {
    GameData
  };


  render() {
    return (
      <Wrapper>
        <Nav />
        <Jumbotron />
        <div className="gameArea">
        {this.state.GameData.map(card => (
          <Images 
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
          ))}
        </div>
      </Wrapper>
    );
  }
}


export default App;
