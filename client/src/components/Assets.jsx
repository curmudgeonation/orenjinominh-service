
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Image} from './styledComponents.jsx';

const Assets = (props) => {

  return (
    <Carousel showIndicators={true} showArrows={true} showThumbs={false} showStatus={false}>
      {props.assets.map((asset, index) => {
        return (
          <div style={{height: 200}}>
            <Image key={index} src={asset} />
          </div>
        );
      })}
    </Carousel>
  );
};


export default Assets;