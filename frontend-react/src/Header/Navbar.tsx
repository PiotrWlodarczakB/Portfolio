import React from 'react';
import styled from 'styled-components'
import Menu from './Menu';
import NameAndTitle from './NameAndTitle';

//Quite self explanatory, navbar container

function Navbar() {

    const Container = styled.div `
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    z-index: 1;
    background-color: #29434e;
    padding: 0;
    margin: 0;
    top:0;
    left:0;
    height: 8rem;
    width: 100%;

    animation-name: onLoadNavbar;
    animation-duration: 2s;

    @keyframes onLoadNavbar {
        0% {height: 0rem;}
        50% {height: 0rem;}
        100% {height: 8rem;}
      }
    `
  return (
    <Container>
        <NameAndTitle />
        <Menu />
    </Container>
  );
}

export default Navbar;