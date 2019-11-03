import React, { Component } from 'react';
import './App.scss';
import Submit from './Submit';
import Result from './Result';


class App extends Component {

  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
  }

  test = (props) => {
    //return <Result id={this.props.id}></Result>
    console.log(this.props.id);
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
            <Submit id="kamien" onClick={this.test}></Submit>
            <Submit id="papier" onClick={this.test}></Submit>
            <Submit id="nozyce" onClick={this.test}></Submit>
            <Result></Result>
          </div>
        </div>
      </div>
    )

  }

}

export default App;