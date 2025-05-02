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

const AboutMobile = () => {
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
      }, 2000);
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

export default AboutMobile;

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
  justify-content: center;

  box-sizing: border-box;

  padding-left: 0%;
  padding-bottom: 20px;

  background-color: black;

  border: none;

  position: relative;

`

const TandB = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 89.5%;
  height: 90%;

  gap: 1%;

  margin-top: 5%;

`

const TitleAndDescription = styled.div`
  height: 30%;
  width: 83%;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;

  h2{
    width: 100%;
    height: 25px;

    font-size: 18px;
    font-weight: 600;
    color: white;

    margin-bottom: 5%;
    margin-top: 0px;

    text-align: center;



  }

  p{
    width: 100%;
    height: fit-content;

    font-size: 14px;
    font-weight: 200;
    color: #cccccc;

    text-align: center;

    line-height: 23px;

    margin-top: 0px;
    margin-bottom: 0px;

  }

`

const BoxAndWhat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  gap: 5%;

  width: 83%;
  height: 65%;

  box-sizing: border-box;

`

const What = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  box-sizing: border-box;

  width: 100%;
  height: 100%;

  gap: 10px;

  h3{
    font-size: 20px;
    font-weight: 700;
    color: white;
    
    margin-top: 0px;
    margin-bottom: 5px;

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