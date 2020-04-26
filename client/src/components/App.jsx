import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Properties from './Properties.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      similarProperties: [],
    };
  }

  render() {
    return (
      <div>
        <div className="main">
          <h3>More Homes You May Like</h3>
          <div className ="properties">
          <Properties properties={this.state.similarProperties} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;