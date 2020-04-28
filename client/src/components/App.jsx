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

  componentDidMount(){
    console.log('inside componentdidmount');
    $.ajax({
      url: '/similarprops',
      type: 'GET',
      success: (data) => {
        // this.setState({
        //   similarProperties: [...data]
        // });
        console.log('data is here', data);
      },
      error: function(err) {
        console.log("Failed to get the data from the server ", err);
      }
    })
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