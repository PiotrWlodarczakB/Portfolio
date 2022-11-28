import React from 'react';
import styled from 'styled-components'

//Clickable items from navbar menu, directing user to another view

interface props {
  name: string;
  additionalWaitTime: number;
}

function MenuItem(props: props) {

  let waitTime: number = 5 + props.additionalWaitTime

  const ClickableElement = styled.div`
    width: 140px;
    font-family: Tahoma;
    color: #bdbdbd;
    letter-spacing: 1.2px;
    font-size: 1.5rem;
    line-height: 3rem;
    text-align: center;
    
    opacity: 1;
    animation-name: afterLoadNavbar;
    animation-duration: ${waitTime}s;

    @keyframes afterLoadNavbar {
        0% {opacity: 0;}
        50% {opacity: 0;}
        100% {opacity: 1;}
      }
  `

  return (
    <ClickableElement> 
      {props.name}
    </ClickableElement>
  );
}

export default MenuItem;