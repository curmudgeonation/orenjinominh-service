
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FavoriteIcon} from './styledComponents.jsx';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NotFavoritedPNG: 'https://minhngo-fec-photos.s3-us-west-1.amazonaws.com/notFav.png',
      FavoritedPNG: 'https://minhngo-fec-photos.s3-us-west-1.amazonaws.com/Fave.png',
      saved: false,
    }

    this.ToggleSave = this.ToggleSave.bind(this);

  }

  ToggleSave() {
    if (this.state.saved === false) {
      this.setState({saved: true});
    } else {
      this.setState({saved: false})
    }
  }

  render() {
    return (
      <FavoriteIcon onClick={this.ToggleSave}>
        {this.state.saved ?
          <img src={this.state.FavoritedPNG}/>
          :
          <img src={this.state.NotFavoritedPNG}/>
        }
      </FavoriteIcon>
    );
  }


};


export default Favorite;