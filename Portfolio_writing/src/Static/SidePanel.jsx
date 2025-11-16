import 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { RxDotFilled } from "react-icons/rx";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


const SidePanels= () => {

  const location = useLocation();
  const {pathname} = location;

  return (
    <SideIconsWrapper>
      {/* <PictureDiv>
        <img src={Picture} alt="#" />
      </PictureDiv> */}


      <NavList>
        
        <Dots>
          <FilledDot />
          <ThreeVerticalDots />
        </Dots>
        
        <NavItem active={pathname === '/'}>
          <Links to='/'>
            <p>HOME</p>
          </Links>
        </NavItem>
        
        <Dots>
          <ThreeVerticalDots />
        </Dots>
        
        <NavItem active={pathname === '/about'}>
          <Links to='/about'>
            <p>ABOUT ME</p>
          </Links>
        </NavItem>
        
        <Dots>
          <ThreeVerticalDots />
        </Dots>
        
        <NavItem active={pathname === '/resume'}>
          <Links to='/resume'>
            <p>RESUME</p>
          </Links>
        </NavItem>
        
        <Dots>
          <ThreeVerticalDots />
        </Dots>
        
        <NavItem active={pathname === '/portfolio'}>
          <Links to='/portfolio'>
            <p>PORTFOLIO</p>
          </Links>
        </NavItem>
        
        <Dots>
          <ThreeVerticalDots />
        </Dots>
        
        <NavItem active={pathname === '/contact'}>
          <Links to='/contact'>
            <p>CONTACT</p>
          </Links>
        </NavItem>
        
        <Dots>
          <ThreeVerticalDots />
          <FilledDot />
        </Dots>

      </NavList>
    </SideIconsWrapper>
  );
};

export default SidePanels;

const SideIconsWrapper = styled.div`
  width: 11.8%;
  height: 100vh;

  position: fixed;
  left: 0px;
  z-index: 1000000;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  border-right: 1px white solid;

  padding: 2px;
  box-sizing: border-box;

  @media (max-width: 914px) {
    display: none;

  }

`

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const NavItem = styled.div`
  p {
    font-size: 14px;
    font-weight: 900;
    font-family: Montserrat;

    color: ${props => props.active ? '#c0c0c0a0' : 'white'};

    margin-top: 20px;
    margin-bottom: 20px;
    
    transition: all 0.8s ease-in-out;

    &:hover{
      color: #c0c0c0a0;
      transform: scale(1.2);
    }
  }
  
`;

const Links = styled(Link)`
  
  text-decoration: none
  
`

const Dots = styled.div`
  display: flex;
  flex-direction: column;

  color: white;
`
const FilledDot = styled(RxDotFilled)`
  color: white
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
  color: white;
` 