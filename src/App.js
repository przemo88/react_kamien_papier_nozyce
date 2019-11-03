import React, { Component } from 'react';
import './App.scss';
import SubmitInfo from './SubmitInfo';
import ResultInfo from './ResultInfo';


class App extends Component {

  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
  }

  test = (id) => {
    //return <Result id={this.props.id}></Result>
    console.log('test');
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
            <SubmitInfo id="papier" click={this.test}></SubmitInfo>
            <SubmitInfo id="kamien" click={this.test}></SubmitInfo>
            <SubmitInfo id="nozyce" click={this.test}></SubmitInfo>
            <ResultInfo id={this.test}></ResultInfo>
          </div>
        </div>
      </div>
    )

  }

}

export default App;