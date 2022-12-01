import React from 'react';
import styled from 'styled-components'

//Clickable items from navbar menu, directing user to another view

interface props {
  name: string;
  additionalWaitTime: number;
  setCurrentView: React.Dispatch<React.SetStateAction<any>>;
  doAnimation: boolean;
  setDoAnimation: React.Dispatch<React.SetStateAction<any>>;
}

function MenuItem(props: props) {

  let waitTime: number = 5 + props.additionalWaitTime

  //It's a div, not a button, because it's just easier to do nice styling to it this way. It works as a button
  const ClickableElement = styled.button`
    width: 140px;
    font-family: Tahoma;
    color: #bdbdbd;
    letter-spacing: 1.2px;
    font-size: 1.5rem;
    line-height: 3rem;
    text-align: center;
    opacity: 1;
    padding: 0;
    border: none;
    background: none;

    ${({ active }: any) => props.doAnimation && `
    animation-name: afterLoadNavbar;
    animation-duration: ${waitTime}s;

    @keyframes afterLoadNavbar {
        0% {opacity: 0;}
        50% {opacity: 0;}
        100% {opacity: 1;}
      }
    `}
  `

  return (
    <ClickableElement onClick={() => {props.setCurrentView(props.name); props.setDoAnimation(false)}}> 
      {props.name}
    </ClickableElement>
  );
}

export default MenuItem;