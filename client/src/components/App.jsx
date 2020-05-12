import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Properties from './Properties.jsx';
import {Module} from './styledComponents.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      similarProperties: [],
    };
  }

  componentDidMount(){
    $.ajax({
      url: 'http://127.0.0.1:4000/similarprops',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({
          similarProperties: [...data]
        });
        console.log('data is here', data);
      },
      error: function(err) {
        console.log("Failed to get the data from the server ", err);
      }
    })
  }

  render() {
    return (
      <Module className="sim-props">
        <h3 id='main-header' style={{padding: `0px 0px 0px 40px`}}>More Homes You May Like</h3>
        <div className ="properties">
        <Properties properties={this.state.similarProperties} />
        </div>
      </Module>
    )
  }
}

export default App;