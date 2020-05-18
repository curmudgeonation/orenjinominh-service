
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Image} from './styledComponents.jsx';

import Favorite from './Favorite.jsx';

const Assets = (props) => {
  const [FavIsShown, setIsShown] = useState(false);


  return (

    <Carousel showIndicators={true} showArrows={true} showThumbs={false} showStatus={false}>
      {props.assets.map(asset => {
        return (
          <div style={{height: 200}} onMouseEnter={() =>  setIsShown(true)} onMouseLeave={() =>  setIsShown(false)}>
            <Image src={asset}/>
            {FavIsShown && <Favorite></Favorite>}
          </div>
        );
      })}
    </Carousel>


  );


};


export default Assets;