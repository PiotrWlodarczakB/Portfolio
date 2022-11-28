import React from 'react';
import styled from 'styled-components'

//Background and curently active view

function MainPage() {

  const Background = styled.div`
    position: fixed;
    background-color: #546e7a;
    padding: 0;
    margin: 0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    animation-name: onLoad;
    animation-duration: 4s;

    @keyframes onLoad {
      from {background-color: black;}
      to {background-color: #546e7a;}
    }
  `

  return (
    <Background> 

    </Background>
  );
}

export default MainPage;
