import React from 'react';
import './App.scss';
import Submit from './submit';




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
          <Submit name="kamien"></Submit>
          <Submit name="papier"></Submit>
          <Submit name="nozyce"></Submit>
        </div>
      </div>
    </div>
  );
}

export default App;
