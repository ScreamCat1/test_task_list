import React, { Component } from 'react';
import axios from 'axios';
import './scss/main.scss';

import Cards from './components/Cards';
import Form from './components/Form';

class App extends Component {
  componentDidMount() {
    axios
      .get('https://uxcandy.com/~shapoval/test-task-backend?developer=Maksym')
      .then(({ data }) => console.log(data));
  }

  render() {
    return (
      <div className="row">
        <Cards />
        <Form />
      </div>
    );
  }
}

export default App;

