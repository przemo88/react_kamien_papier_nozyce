import React, { Component } from 'react';
import { faHandPaper, faHandScissors, faHandRock, faGamepad } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import SubmitInfo from './SubmitInfo';
import ResultInfo from './ResultInfo';
import StartInfo from './StartInfo';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      click: false,
    }

    this.choice = this.choice.bind(this);
    this.roundLimit = this.roundLimit.bind(this);
    this.lottery = this.lottery.bind(this);
    this.game = this.game.bind(this);
  }

  lottery = () => {

    var temp;

    temp = Math.floor(Math.random() * 3 + 1);
    console.log(temp);

    if (temp === 1) {
      this.setState({
        ran: 'papier',
      })
    }

    else if (temp === 2) {
      this.setState({
        ran: 'kamień',
      })
    }

    else if (temp === 3) {
      this.setState({
        ran: 'nożyce',
      })
    }
  }

  choice = (id) => {
    this.setState({
      id,
    });
    console.log(id)
  };

  roundLimit = () => {
    this.setState({
      round: prompt("Podaj ilość rund potrzebnych do wygrania"),
    })
  }

  game = (id) => {
    this.choice(id);
    this.lottery();
  }


  render() {
    return (
      <div>
        <div className="board">
          <div className="title_row">
            <h1 className="title">Kamień, Papier, Nożyce</h1>
          </div>
        </div>
        <div className="board">
          <div className="submit_row">
            <SubmitInfo id="papier" icon={faHandPaper} click={this.game}
              disabled={!this.state.round ? true : false}
              action={!this.state.round ? "submit disable" : "submit enable"}></SubmitInfo>
            <SubmitInfo id="kamień" icon={faHandRock} click={this.game}
              disabled={!this.state.round ? true : false}
              action={!this.state.round ? "submit disable" : "submit enable"}></SubmitInfo>
            <SubmitInfo id="nożyce" icon={faHandScissors} click={this.game}
              disabled={!this.state.round ? true : false}
              action={!this.state.round ? "submit disable" : "submit enable"}></SubmitInfo>
            <SubmitInfo id="gra" icon={faGamepad} click={this.roundLimit}
              action={!this.state.round ? "submit enable" : "submit disable"}></SubmitInfo>
            {this.state.id ? <ResultInfo id={this.state.id} round={this.state.round} ran={this.state.ran} /> : null}
            {!this.state.round ? <StartInfo></StartInfo> : null}

          </div>
        </div>
      </div>
    )

  }

}

export default App;