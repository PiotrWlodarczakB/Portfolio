import React from 'react';
import styled from 'styled-components'
import MenuItem from './MenuItem'

//Navbar menu with all its functionalities, sliding underline and states containing selected position

function Menu() {

  const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    div:hover,
    div:focus {
    background: black;
      }
  `

  return (
    <MenuContainer>
        <MenuItem name="Home" additionalWaitTime={0.25}/>
        <MenuItem name="About me" additionalWaitTime={0.5}/>
        <MenuItem name="About site" additionalWaitTime={0.75}/>
    </MenuContainer>
  );
}

export default Menu;