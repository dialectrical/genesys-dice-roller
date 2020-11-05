import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

const DiceTypes = [
  {
      id: 'Ability',
      diceCode: 1,
      sides: 8,
  },
  {
    id: 'Proficiency',
    diceCode: 2,
    sides: 12,
  },
  {
    id: 'Boost',
    diceCode: 3,
    sides: 6,
  },
  {
    id: 'Difficulty',
    diceCode: 4,
    sides: 8,
  },
  {
    id: 'Challenge',
    diceCode: 5,
    sides: 12,
  },
  {
    id: 'Setback',
    diceCode: 6,
    sides: 6,
  }
]

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

class DiceButton extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.rollMore(this.props.diceCode);
  }

  decrement() {
    this.props.rollLess(this.props.diceCode);
  }


  render () {
    return(
      <div>
        <h2>{this.props.id}: {this.props.rollAmount}</h2>
        <button onClick = {this.decrement}>-</button>
        <button onClick = {this.increment}>+</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        numberOfDice: 0,
        rolls: [],
        rollSum: null,
        abilityTotal: 0,
        proficiencyTotal: 0,
        boostTotal: 0,
        difficultyTotal: 0,
        challengeTotal: 0,
        setbackTotal: 0,
        successTotal: 0,
        advantageTotal: 0,
        triumphTotal: 0,
        failureTotal: 0,
        threatTotal: 0,
        despairTotal: 0,
        rollAmount: 0
    };
    this.rollMore = this.rollMore.bind(this);
    this.rollLess = this.rollLess.bind(this);
  }
  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    let successTotal = 0;
    let advantageTotal = 0;
    let triumphTotal = 0;
    let failureTotal = 0;
    let threatTotal = 0;
    let despairTotal = 0;

    //roll Ability die
    for (let i = 0; i < this.state.abilityTotal; i++) {
      rolls[i] = Math.floor(Math.random() * 8) + 1;
      rollSum += rolls[i];
      console.log(rolls[i]);
      if (rolls[i] === 2 || rolls[i] === 3) {
        successTotal += 1;
      } else if (rolls[i] === 4) {
        successTotal += 2;
      } else if (rolls[i] === 5 || rolls[i] === 6) {
        advantageTotal += 1;
      } else if (rolls[i] === 7) {
        successTotal += 1;
        advantageTotal += 1;
      } else if (rolls[i] === 8) {
        advantageTotal += 2;
      }
    }

    //roll Proficiency die
    for (let i = 0; i < this.state.proficiencyTotal; i++) {
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

    //roll Boost die
    for (let i = 0; i < this.state.boostTotal; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
      console.log(rolls[i]);
      if (rolls[i] === 3) {
        successTotal += 1;
      } else if (rolls[i] === 4) {
        successTotal += 1;
        advantageTotal += 1;
      } else if (rolls[i] === 5) {
        advantageTotal += 2;
      } else if (rolls[i] === 6) {
        advantageTotal += 1;
      }
    }

    //roll Difficult dice
    for (let i = 0; i < this.state.difficultyTotal; i++) {
      rolls[i] = Math.floor(Math.random() * 8) + 1;
      rollSum += rolls[i];
      console.log(rolls[i]);
      if (rolls[i] === 2) {
        failureTotal += 1;
      } else if (rolls[i] === 3) {
        failureTotal += 2;
      } else if (rolls[i] === 4 || rolls[i] === 5 || rolls[i] === 6) {
        threatTotal += 1;
      } else if (rolls[i] === 7) {
        threatTotal += 2;
      } else if (rolls[i] === 8) {
        failureTotal += 1;
        threatTotal += 1;
      }
    }

    //roll Challenge die
    for (let i = 0; i < this.state.challengeTotal; i++) {
      rolls[i] = Math.floor(Math.random() * 12) + 1;
      rollSum += rolls[i];
      console.log(rolls[i]);
      if (rolls[i] === 2 || rolls[i] === 3) {
        failureTotal += 1;
      } else if (rolls[i] === 4 || rolls[i] === 5) {
        failureTotal += 2;
      } else if (rolls[i] === 6 || rolls[i] === 7) {
        threatTotal += 1;
      } else if (rolls[i] === 8 || rolls[i] === 9) {
        failureTotal += 1;
        threatTotal += 1;
      } else if (rolls[i] === 10 || rolls[i] === 11) {
        threatTotal += 2;
      } else if (rolls[i] === 12) {
        despairTotal += 1;
      }
    }

    //roll Setbcak die
    for (let i = 0; i < this.state.setbackTotal; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
      console.log(rolls[i]);
      if (rolls[i] === 3 || rolls[i] === 4) {
        failureTotal += 1;
      } else if (rolls[i] === 5 || rolls[i] === 6) {
        threatTotal += 1;
      }
    }

    this.setState({
      numberOfDice: 1,
      rolls,
      rollSum,
      successTotal,
      advantageTotal,
      triumphTotal,
      failureTotal,
      threatTotal,
      despairTotal
    });
  }

  rollMore(diceCode) {
    let rollAmount;
    if (diceCode === 1) {
      rollAmount = this.state.abilityTotal;
    } else if (diceCode === 2) {
      rollAmount = this.state.proficiencyTotal;
    } else if (diceCode === 3) {
      rollAmount = this.state.boostTotal;
    } else if (diceCode === 4) {
      rollAmount = this.state.difficultyTotal;
    } else if (diceCode === 5) {
      rollAmount = this.state.challengeTotal;
    } else if (diceCode === 6) {
      rollAmount = this.state.setbackTotal;
    }
    if (rollAmount < 5) {
      rollAmount += 1;
      if (diceCode === 1) {
        this.setState({
          abilityTotal: rollAmount
        });
      } else if (diceCode === 2) {
        this.setState({
          proficiencyTotal: rollAmount
        })
      } else if (diceCode === 3) {
        this.setState({
          boostTotal: rollAmount
        });
      } else if (diceCode === 4) {
        this.setState({
          difficultyTotal: rollAmount
        });
      } else if (diceCode === 5) {
        this.setState({
          challengeTotal: rollAmount
        });
      } else if (diceCode === 6) {
        this.setState({
          setbackTotal: rollAmount
        });
      }
    }
  }

  rollLess(diceCode) {
    let rollAmount;
    if (diceCode === 1) {
      rollAmount = this.state.abilityTotal;
    } else if (diceCode === 2) {
      rollAmount = this.state.proficiencyTotal;
    } else if (diceCode === 3) {
      rollAmount = this.state.boostTotal;
    } else if (diceCode === 4) {
      rollAmount = this.state.difficultyTotal;
    } else if (diceCode === 5) {
      rollAmount = this.state.challengeTotal;
    } else if (diceCode === 6) {
      rollAmount = this.state.setbackTotal;
    }
    if (rollAmount > 0) {
      rollAmount -= 1;
      if (diceCode === 1) {
        this.setState({
          abilityTotal: rollAmount
        });
      } else if (diceCode === 2) {
        this.setState({
          proficiencyTotal: rollAmount
        });
      } else if (diceCode === 3) {
        this.setState({
          boostTotal: rollAmount
        });
      } else if (diceCode === 4) {
        this.setState({
          difficultyTotal: rollAmount
        });
      } else if (diceCode === 5) {
        this.setState({
          challengeTotal: rollAmount
        });
      } else if (diceCode === 6) {
        this.setState({
          setbackTotal: rollAmount
        });
      }
    }
  }
  calculateOutcome() {
    let successOrFail = this.state.successTotal - this.state.failureTotal;
    let advantageOrThreat = this.state.advantageTotal - this.state.threatTotal;
    let successOrFailResult;
    let advantageOrThreatResult;
    let triumphResult;
    let despairResult;
    if (successOrFail < 0) {
      successOrFail *= -1;
      if (successOrFail > 1) {
        successOrFailResult = successOrFail + " Failures";
      } else {
        successOrFailResult = successOrFail + " Failure";
      }
    } else if (successOrFail === 0) {
      successOrFail = null;
    } else if (successOrFail > 0) {
      if (successOrFail > 1) {
        successOrFailResult = successOrFail + " Successes";
      } else {
        successOrFailResult = successOrFail + " Success";
      }
    }
    if (advantageOrThreat < 0) {
      advantageOrThreat *= -1;
      if (advantageOrThreat > 1) {
        advantageOrThreatResult = advantageOrThreat + " Threats";
      } else {
        advantageOrThreatResult = advantageOrThreat + " Threat";
      }
    } else if (advantageOrThreat === 0) {
      advantageOrThreat = null;
    } else if (advantageOrThreat > 0) {
      if (advantageOrThreat > 1) {
        advantageOrThreatResult = advantageOrThreat + " Advantages";
      } else {
        advantageOrThreatResult = advantageOrThreat + " Advantage";
      }
    }
    if (this.state.triumphTotal > 0) {
      triumphResult = this.state.triumphTotal + " Triumphs";
    }
    if (this.state.despairTotal > 0) {
      despairResult = this.state.despairTotal + " Despairs";
    }
    return (<p>{successOrFailResult} {advantageOrThreatResult} {triumphResult} {despairResult}</p>);
  }
  render() {
    let diceBank;
    diceBank = DiceTypes.map((diceObj, i, diceBankArr) => {
      let text = diceBankArr[i].id;
      let diceCode = diceBankArr[i].diceCode;
      let rollAmount;
      if (diceCode === 1) {
        rollAmount = this.state.abilityTotal;
      } else if (diceCode === 2) {
        rollAmount = this.state.proficiencyTotal;
      } else if (diceCode === 3) {
        rollAmount = this.state.boostTotal;
      } else if (diceCode === 4) {
        rollAmount = this.state.difficultyTotal;
      } else if (diceCode === 5) {
        rollAmount = this.state.challengeTotal;
      } else if (diceCode === 6) {
        rollAmount = this.state.setbackTotal;
      }
      return(
        <DiceButton
          id={diceBankArr[i].id}
          diceCode={diceBankArr[i].diceCode}
          sides={diceBankArr[i].sides}
          amount={this.state.numberOfDice}
          rollMore={this.rollMore}
          rollLess={this.rollLess}
          rollAmount={rollAmount}
        />
      );
    })
    return(
      <div className="app">
        <div className='buttons'>
          {diceBank}
        </div>
        <div>
          <button onClick= { () => this.diceRoll() }>Roll Dice</button>
        </div>
        <div className="results">
          {
            this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)
          }
          {
            this.state.numberOfDice ? (
              <div>
                <div>
                  <h2>Overall Results:</h2>
                  <div>
                    Successes: <span className='successes'>{this.state.successTotal} </span>
                    Advantages: <span className='advantages'>{this.state.advantageTotal} </span>
                    Triumphs: <span className='triumphs'>{this.state.triumphTotal}</span>
                  </div>
                  <div>
                    Failures: <span className='failures'>{this.state.failureTotal} </span>
                    Threat: <span className='threats'>{this.state.threatTotal} </span>
                    Failures: <span className='despairs'>{this.state.despairTotal}</span>
                  </div>
                </div>
                <div>
                  <h2>Outcome:</h2>
                  <div>
                    {this.calculateOutcome()}
                  </div>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
