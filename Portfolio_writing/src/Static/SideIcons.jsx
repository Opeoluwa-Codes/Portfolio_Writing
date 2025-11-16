import  { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize from '../Hooks/UseWindowSize';

import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { GiTalk } from "react-icons/gi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


const SideIcons = () => {
  const location = useLocation();

  const { pathname } = location;

  const { width } = useWindowSize();

  const isMobile = width < 500;
  
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {

      const sections = ['home', 'about', 'resume', 'toolstack', 'portfolio', 'contact'];
      
      let maxVisibleSection = 'home';
      let maxVisiblePercentage = 0;
      
      sections.forEach(section => {

        const element = document.getElementById(section);

        if (!element) return;
        
        const rect = element.getBoundingClientRect();

        const total = rect.height;

        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        const visiblePercentage = Math.max(0, visibleHeight / total);
        
        if (visiblePercentage > maxVisiblePercentage) {
          
          maxVisiblePercentage = visiblePercentage;

          maxVisibleSection = section;

        }

      }
      );
      
      setActiveSection(maxVisibleSection);

    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [isMobile]);
  
  const isActive = (section) => {

    if (isMobile) {
      return section === activeSection;
    } else {
      return section === pathname.replace('/', '') || (section === 'home' && pathname === '/');
    }

  };

  const handleMobileClick = (section) => {

    if (!isMobile) return;
    
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  };

  return (

    <SideIconWrapper isMobile={isMobile}>

      <Links 
        to="/" 
        onClick={() => handleMobileClick('home')}
      >
        <Home active={isActive('home')}/>
      </Links>

      <ThreeVerticalDots/>

      <Links 
        to="/about" 
        onClick={() => handleMobileClick('about')}
      >
        <About active={isActive('about')}/>
      </Links>

      <ThreeVerticalDots/>

      <Links 
        to="/resume" 
        onClick={() => handleMobileClick('resume')}
      >
        <Resume active={isActive('resume')}/>
      </Links>

      <ThreeVerticalDots/>

      <Links 
        to="/portfolio" 
        onClick={() => handleMobileClick('portfolio')}
      >
        <Portfolio active={isActive('portfolio')}/>
      </Links>

      <ThreeVerticalDots/>

      <Links 
        to="/contact" 
        onClick={() => handleMobileClick('contact')}
      >
        <Contact active={isActive('contact')}/>
      </Links>
      
    </SideIconWrapper>
  );
};

export default SideIcons;

const SideIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: ${props => props.isMobile ? 'fixed' : 'absolute'};
  top: 50%;
  right: 2%;
  transform: translateY(-50%);

  z-index: 1000000;

  box-sizing: border-box;
  
  width: 40px;
  height: fit-content;

  background-color: transparent;

  border: 1px white solid;
  
  padding-top: 15px;
  padding-bottom: 15px;

  @media (min-width: 915px) {
    display: none;
  }

  @media (max-width: 767px) {
    width: 25px;
    right: 1%;
  }
`


const Home = styled(IoMdHome)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#c0c0c0a0' : 'white'};

  &:hover{
    color: #cccccc;
    /* transform: scale(1.2); */
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`

const About = styled(FaRegUser)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#c0c0c0a0' : 'white'};

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }
  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const Resume = styled(IoMdBriefcase)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#c0c0c0a0' : 'white'};

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const Portfolio = styled(GoFileSubmodule)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#c0c0c0a0' : 'white'};

  &:hover{
    color: #cccccc;
    /* transform: scale(1.2); */
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`

const Contact = styled(GiTalk)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#c0c0c0a0' : 'white'};

  &:hover{
    color: #cccccc;
    /* transform: scale(1.2); */
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
 font-size: 18px;
 color: white;
 margin-top: 5px;
 margin-bottom: 5px;

 @media (max-width: 596px) {
    font-size: 15px;
  }
`
const Links = styled(Link)`
  
  text-decoration: none
`