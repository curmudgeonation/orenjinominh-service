import React, { useState } from 'react';
import styled from 'styled-components';


const Dot = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
`

const Dots = (props) => {
  return (
    <div>
    {props.assets.map(asset => (
      <Dot key={asset} active={props.activeItemIndex} />
    ))}
    </div>
  );
}

export default Dots;