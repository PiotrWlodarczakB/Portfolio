import React from 'react';
import styled from 'styled-components'

//Left part of navbar, still quite self explanatory

function NameAndTitle() {

    const NameAndTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
    margin-left: 3rem;
    min-width: 30rem;
    opacity: 1;
    font-family: Tahoma;
    color: #bdbdbd;
    letter-spacing: 1.2px
    `

    const MyName = styled.div `
    font-size: 3rem;
    line-height: 3rem;

    animation-name: afterLoadNavbar;
    animation-duration: 3s;

    @keyframes afterLoadNavbar {
        0% {opacity: 0;}
        50% {opacity: 0;}
        100% {opacity: 1;}
      }
    `
    const AndMyTitle = styled.div `
    font-size: 1.5rem;
    line-height: 1.5rem;

    animation-name: afterLoadNavbar;
    animation-duration: 4s;

    @keyframes afterLoadNavbar {
        0% {opacity: 0;}
        75% {opacity: 0;}
        100% {opacity: 1;}
      }
    `

  return (
        <NameAndTitleContainer>
            <MyName>Piotrek Włodarczak</MyName>
            <AndMyTitle>Software Developer</AndMyTitle>
        </NameAndTitleContainer>
  );
}

export default NameAndTitle;