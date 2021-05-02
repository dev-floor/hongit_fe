import React from 'react';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';

const App = ({ match }: RouteComponentProps) => {
  console.log(match);
  return (
    <div className="big-text">
      <p> Home </p>
    </div>
  );
};

export default App;
