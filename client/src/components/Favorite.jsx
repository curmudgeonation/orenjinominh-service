
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FavoriteIcon} from './styledComponents.jsx';

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
      this.setState({Favorited:'https://img.icons8.com/flat_round/52/000000/hearts.png'});
    } else {
      this.setState({Favorited:'https://img.icons8.com/metro/52/000000/like.png'});
    }
  }

  render() {
    return (
      <FavoriteIcon onClick={this.ToggleSave}>{<img src={this.state.Favorited}/>}</FavoriteIcon>
    );
  }


};


export default Favorite;