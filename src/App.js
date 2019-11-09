import React, { Component } from 'react';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import SubmitInfo from './SubmitInfo';
import ResultInfo from './ResultInfo';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
    }

    this.choice = this.choice.bind(this);
  }

  choice = (id) => {
    this.setState({
      id,
    });
  };

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
            <SubmitInfo id="papier" icon={faHandPaper} click={this.choice}></SubmitInfo>
            <SubmitInfo id="kamien" icon={faHandRock} click={this.choice}></SubmitInfo>
            <SubmitInfo id="nozyce" icon={faHandScissors} click={this.choice}></SubmitInfo>
            {this.state.id ? <ResultInfo id={this.state.id} /> : null}
          </div>
        </div>
      </div>
    )

  }

}

export default App;