import React, { useState } from 'react';
import styled from 'styled-components'
import MenuItem from './MenuItem'

//Navbar menu with all its functionalities, sliding underline and states containing selected position

enum Views {
  Home = "Home",
  AboutMe = "About me",
  AboutSite = "About site",
}

function Menu() {

  const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  button:hover,
  button:focus {
  color: #efefef;
  cursor: pointer
    }
`

  const [CurrentView, setCurrentView] = useState(Views.Home)
  const [doAnimation, setDoAnimation] = useState(true)
    //Animation plays out only on the website first load, not when other MenuItem is clicked, doAnimation State takes care of that

  return (
    <MenuContainer>
        <MenuItem name={Views.Home} additionalWaitTime={0.25} setCurrentView={setCurrentView} doAnimation={doAnimation} setDoAnimation={setDoAnimation}/>
        <MenuItem name={Views.AboutMe} additionalWaitTime={0.5} setCurrentView={setCurrentView} doAnimation={doAnimation} setDoAnimation={setDoAnimation}/>
        <MenuItem name={Views.AboutSite} additionalWaitTime={0.75} setCurrentView={setCurrentView} doAnimation={doAnimation} setDoAnimation={setDoAnimation}/>
    </MenuContainer>
  );
}

export default Menu;