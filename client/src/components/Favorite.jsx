
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Favorited: 'https://img.icons8.com/metro/52/000000/like.png'
    }

    this.ToggleSave = this.ToggleSave.bind(this);

  }

  ToggleSave() {
    if (this.state.Favorited === 'https://img.icons8.com/metro/52/000000/like.png') {
      this.setState({Favorited:'https://img.icons8.com/cotton/52/000000/like--v2.png'});
    } else {
      this.setState({Favorited:'https://img.icons8.com/metro/52/000000/like.png'});
    }
  }

  render() {
    return (
      <button onClick={this.ToggleSave}>{<img src={this.state.Favorited}/>}</button>
    );
  }


};


export default Favorite;