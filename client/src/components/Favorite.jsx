
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FavoriteIcon} from './styledComponents.jsx';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Favorited: 'https://minhngo-fec-photos.s3-us-west-1.amazonaws.com/notFav.png'
    }

    this.ToggleSave = this.ToggleSave.bind(this);

  }

  ToggleSave() {
    if (this.state.Favorited === 'https://minhngo-fec-photos.s3-us-west-1.amazonaws.com/notFav.png') {
      this.setState({Favorited:'https://minhngo-fec-photos.s3-us-west-1.amazonaws.com/Fave.png'});
    } else {
      this.setState({Favorited:'https://minhngo-fec-photos.s3-us-west-1.amazonaws.com/Fave.png'});
    }
  }

  render() {
    return (
      <FavoriteIcon onClick={this.ToggleSave}>{<img src={this.state.Favorited}/>}</FavoriteIcon>
    );
  }


};


export default Favorite;