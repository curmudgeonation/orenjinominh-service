
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Image} from './styledComponents.jsx';

import Favorite from './Favorite.jsx';

const Assets = (props) => {
  const [FavIsShown, setIsShown] = useState(false);


  return (
    <div>
      <Favorite onMouseEnter={() =>  setIsShown(true)} onMouseLeave={() =>  setIsShown(false)} ></Favorite>
      <Carousel showIndicators={true} showArrows={true} showThumbs={false} showStatus={false}>
        {props.assets.map(asset => {
          return (
            <div style={{height: 200}}>
              <Image src={asset}/>
            </div>
          );
        })}
      </Carousel>




    </div>

  );


};


export default Assets;