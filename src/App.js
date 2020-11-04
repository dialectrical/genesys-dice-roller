import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <p>Blank</p>
  } else if (roll === 2) {
    return <p>Success</p>
  } else if (roll === 3) {
    return <p>Success</p>
  } else if (roll === 4) {
    return <p>Success Success</p>
  } else if (roll === 5) {
    return <p>Sucess Success</p>
  } else if (roll === 6) {
    return <p>Advantage</p>
  } else if (roll === 7) {
    return <p>Success Advantage</p>
  } else if (roll === 8) {
    return <p>Success Advantage</p>
  } else if (roll === 9) {
    return <p>Success Advantage</p>
  } else if (roll === 10) {
    return <p>Advantage Advantage</p>
  } else if (roll === 11) {
    return <p>Advantage Advantage</p>
  } else if (roll === 12) {
    return <p>Triumph</p>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        numberOfDice: null,
        rolls: [],
        rollSum: null,
        successTotal: null,
        advantageTotal: null,
        triumphTotal: null
    };
  }
  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    let successTotal = 0;
    let advantageTotal = 0;
    let triumphTotal = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 12) + 1;
      rollSum += rolls[i];
      console.log(rolls[i]);
      if (rolls[i] === 2 || rolls[i] === 3) {
        successTotal += 1;
      } else if (rolls[i] === 4 || rolls[i] === 5) {
        successTotal += 2;
      } else if (rolls[i] === 6) {
        advantageTotal += 1;
      } else if (rolls[i] === 7 || rolls[i] === 8 || rolls[i] === 9) {
        successTotal += 1;
        advantageTotal += 1;
      } else if (rolls[i] === 10 || rolls[i] === 11) {
        advantageTotal += 2;
      } else if (rolls[i] === 12) {
        triumphTotal += 1;
      }
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum,
      successTotal,
      advantageTotal,
      triumphTotal
    });
  }
  render(){
    return(
      <div className="buttons">
        {[1, 2, 3, 4, 5].map(number => {
          let text = number + " Proficiency";
          return (
            <button
              key={number}
              onClick={ () => this.diceRoll(number) }
              className="button"
            >
              {text}
            </button>
          );
        })}
        <div className="results">
          {
            this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)
          }
          {console.log(this.state.successTotal + " " + this.state.advantageTotal + " " + this.state.triumphTotal)}
          {
            this.state.numberOfDice ? (
              <div>
                <h2>Results:</h2>
                <p>Successes: <span className="sum">{this.state.successTotal}</span></p>
                <p>Advantages: <span className="sum">{this.state.advantageTotal}</span></p>
                <p>Triumphs: <span className="sum">{this.state.triumphTotal}</span></p>
                <p>Dice rolled: {this.state.numberOfDice}</p>
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
