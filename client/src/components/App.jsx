import React from 'react';
import ReactDom from 'react-dom';

import $ from 'jquery';
import Properties from './Properties.jsx';
import {Module} from './styledComponents.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      similarProperties: [],
    };

    this.fetchListingsMeta.bind(this);
    this.postListingsMeta.bind(this);
  }

  fetchListingsMeta(id) {
    $.ajax({
      url: 'http://127.0.0.1:4000/listings/' + id + '/similarprops',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({
          similarProperties: [...data]
        });
        console.log('Retrieved 12 similar properties successfully!', data);
      },
      error: function(err) {
        console.log("Failed to get the data from the server ", err);
      }
    });
  };

  postListingsMeta() {
    var currentListingId = this.props.id;

    $.ajax({
      url: 'http://127.0.0.1:4000/similarprops',
      type: 'POST',
      contentType: 'application/json',
      success: (data) => {
        console.log('Post to local db with metadata successful!', data);
        this.fetchListingsMeta(currentListingId);
      },
      error: function(err) {
        console.log("Failed to post metadata to local db ", err);
      }
    });

  };

  componentDidMount(){
    console.log('Current listing is:', this.props.id);

    this.postListingsMeta();
    // this.fetchListingsMeta(this.props.id);
  };


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