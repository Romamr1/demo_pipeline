import React, { Component } from 'react';
import {ProcessDef} from './components/Process_dev';
import {DemoPrep} from './components/Demo_prep';
import {Demo} from './components/Demo';
import {Validation} from './components/Validation';
import {Closing} from './components/Closing';
import {Header} from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="parent-table">
          <ProcessDef />
          <DemoPrep />
          <Demo />
          <Validation />
          <Closing />
        </div>
      </div>
    );
  }
}

export default App;
