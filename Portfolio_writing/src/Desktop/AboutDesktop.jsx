import React from 'react'
import styled from 'styled-components';
import keyframes from 'styled-components';
import { useState, useEffect } from 'react';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import BoxDisplay from '../Components/Not_Reusable/BoxDisplay';
import WhatIDo from "../Components/Reusable/WhatIDo"

import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";


const AboutDesktop = () => {
  const description = "I am Opeoluwa...";
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  useEffect(() => {

    let timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 1500);
    } else if (isTyping && !isDeleting) {
      if (displayedDescription.length < description.length) {
        timeout = setTimeout(() => {
          setDisplayedDescription(description.substring(0, displayedDescription.length + 1));
        }, 500);
      } else {
        setIsTyping(false);
        setIsWaiting(true);
      }
    } else if (isDeleting) {
      if (displayedDescription.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedDescription(description.substring(0, displayedDescription.length - 1));
        }, 100);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        timeout = setTimeout(() => {}, 500);
      }
    }
    
    return () => clearTimeout(timeout);

  }, [displayedDescription, isTyping, isDeleting, isWaiting]);

  return (
    <AboutWrapper>
      <HeaderDesign title="ABOUT ME"/>

      <TandB>
        <TitleAndDescription>
          <h2>{displayedDescription}<Cursor>|</Cursor></h2>
          <p>Crafting authentic gambling content is my specialty. I deliver comprehensive casino and sportsbook reviews while efficiently multitasking. Using Grammarly and ZeroGPT, I ensure my work remains AI-free, providing readers with trustworthy, expert iGaming insights.</p>
        </TitleAndDescription>
        <BoxAndWhat>
          <BoxDisplay/>
          <What>
            <h3>What I Do!</h3>
            <WhatIDo icons={<Verified/>} title="Factual and Unbiased Reviews" description="I deliver honest platform assessments backed by verified data without promotional bias."/>
            <WhatIDo icons={<Journey/>} title="Detailed UX Analysis" description="I evaluate interfaces, functionality, and user journeys from a player's perspective, highlighting strengths and weaknesses."/>
            <WhatIDo icons={<Optimize/>} title="Strategic Keyword Optimization" description="I seamlessly integrate targeted search terms while maintaining natural readability."/>
          </What>
        </BoxAndWhat>
      </TandB>

    </AboutWrapper>
  );
};

export default AboutDesktop;

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
  font-weight: bold;
`;

const AboutWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-top: 3%;
  padding-left: 12%;

  background-color: black;

  position: relative;


  @media (max-width: 914px) {
    padding-left: 0%;
  }

`

const TandB = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 89.5%;
  height: 70vh;

  gap: 5%;

  @media (max-width: 914px) {
    width: 78%;
  }

  @media(max-width: 774px){
    height: 74vh;
  }

  @media (max-width: 615px) {
    width: 80%;
  }

  @media (max-width: 534px) {
    height: 76vh;
  }

`

const TitleAndDescription = styled.div`
  height: fit-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;

  h2{
    width: 100%;
    height: fit-content;

    font-size: 25px;
    font-weight: 600;
    color: white;

    margin-bottom: 2%;
    margin-top: 0px;

    @media (max-width: 615px) {
    text-align: center;
    }

    @media (max-width: 705px) {
    font-size: 18px;
    }

  }

  p{
    width: 100%;
    height: fit-content;

    font-size: 14px;
    font-weight: 200;
    color: #cccccc;

    
    text-align: left;

    line-height: 23px;

    margin-top: 0px;
    margin-bottom: 0px;

    @media (max-width: 615px) {
    text-align: center;
    }

  }

`


const BoxAndWhat = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;

  gap: 2%;

  width: 100%;
  height: fit-content;

  box-sizing: border-box;

  @media(max-width: 774px){
    height: 68%;
  }

`

const What = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 20px;

  width: 48.5%;

  box-sizing: border-box;

  @media (max-width: 914px) {
    width: 55%;
  }

  @media (max-width: 594px) {
    gap: 10px;

    width: 55%;

    align-items: center;
  }

  h3{
    font-size: 20px;
    font-weight: 700;
    color: white;
    
    margin-top: 0px;
    margin-bottom: 5px;

    @media (max-width: 705px) {
    font-size: 18px;
    }

  }
  
`

const Verified = styled(MdOutlineVerifiedUser)`
  color: white;
  width: 100%;
  height: 100%;
`

const Journey = styled(GiJourney)`
  color: white;
  width: 100%;
  height: 100%;
`

const Optimize = styled(GrOptimize)`
  color: white;
  width: 100%;
  height: 100%;
`