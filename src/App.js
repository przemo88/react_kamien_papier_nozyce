import React from 'react';
import './App.scss';
import Submit from './submit';
import Result from './result';


function App() {




  return (
    <div>
      <div className="board">
        <div className="title_row">
          <h1 className="title">Kamień, Papier, Nożyce</h1>
        </div>
      </div>
      <div className="board">
        <div className="submit_row">
          <Submit id="kamien"></Submit>
          <Submit id="papier"></Submit>
          <Submit id="nozyce"></Submit>
          <Result></Result>
        </div>
      </div>
    </div>
  );
}

export default App;
