import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ResumeDisplay from '../Components/Reusable/ResumeDisplay'
import DialogueBox from '../Components/Reusable/DialogueBox';

const ResumeDesktop = () => {
  return (
    <ResumeWrapper>

        <HeaderDesign title="MY RESUME"/>

        <EduExp>

          <One>
            <h2>EDUCATION</h2>
              <Education>

                <ResumeDisplay name='Canadore College' title='Project Management - IT' description='' view='View' here='resume' link='https://drive.google.com/file/d/1Ni6EK1rkqA0EpH-_WG8heCqnVQHTj5qW/view?usp=drive_link'/>

              </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>

                <Cover>
                  <ResumeDisplay name='CASINOALPHA' title='IGaming Content Writer' view='Ireland'/>
                  <DialogueBox from='From: 2024' to='To: April 2025' one='1. I wrote promotional content for the CasinoAlpha brand.' two='2. I optimised written content with keywords using the Contandu tool.' three='3. I used backlinks leading back to the CasinoAlpha website.'/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='NOT-ON-GAMSTOP.COM' title='IGaming Content Writer' view='United Kingdom'/>
                  <DialogueBox from='From: 2024' to='To: February 2025' one='1. I reviewed several UK online casino brands.' two='2. I conducted detailed research to provide fair reviews.'/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='PUGU CONTENT LTD' title='IGaming Content Writer' view='Virgin Islands'/>
                  <DialogueBox from='From: 2024' to='To: January 2025' one='1. I reviewed top casino and sportsbook brands.' two='2. I ensured each article was unique and concise yet compelling.'/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='AFREKO MEDIA LTD' title='IGaming Content Writer' view='Belgrade, Serbia'/>
                  <DialogueBox from='From: 2024' to='To: January 2025' one='I wrote several iGaming review content.' two='I optimised my content using keywords, LSIs, and backlinks.'/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='SISTERSITE.CO.UK' title='IGaming Content Writer' view='United Kingdom'/>
                  <DialogueBox from='From: 2024' to='To: January 2025' one='I wrote lengthy reviews, up to 5000 words, on top casino brands.'/>
                </Cover>

              </Experience>
          </Two>

        </EduExp>
        
    </ResumeWrapper>
  );
};

export default ResumeDesktop;


const ResumeWrapper = styled.div`
  
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

const EduExp = styled.div`

  width: 89.5%;
  height: 80vh;

  margin-top: 2%;


  @media (min-width: 700px) {
    margin-top: 0%;

    height: 70vh;
  }

  @media (max-width: 914px) {
    width: 84%;
  }

  @media (max-width: 767px) {
    width: 86%;
  }

  @media (max-width: 705px) {
    width: 84%;
  }

  @media (max-width: 615px) {
    width: 80%;
  }

  h2{

    font-size: 25px;
    font-weight: 600;
    font-family: Montserrat;

    color: white;

    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: 705px) {
      font-size: 22px;
    }

  }
  
`

const One = styled.div`

  height: fit-content;
  width: 100%;

  @media (max-width: 615px) {
    text-align: center;
  }

`

const Two = styled.div`

  height: fit-content;
  width: 100%;
  
  margin-top: 10%;

  padding-top: 10%;
  box-sizing: border-box;

  @media (min-width: 700px) {
    margin-top: 5%;
    padding-top: 0%;
  }

  @media (max-width: 615px) {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

`

const Education = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: start;

  gap: 4.8%;

  overflow-x: auto;
  scroll-behavior: smooth;

  scrollbar-width: thin;

  padding-bottom: 10px;
  box-sizing: border-box;

  scrollbar-color: black;

  @media (max-width: 767px) {
    gap: 1.5%;
  }

  @media (max-width: 615px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

`

const Experience = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: start;

  gap: 4.8%;

  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  padding-bottom: 10px;
  box-sizing: border-box;

  scrollbar-color: black;

  @media (max-width: 767px) {
    gap: 1.5%;
  }

  @media (max-width: 615px) {
    text-align: center;
  }

`

const Cover = styled.div`
  
  min-width: 46%;
  height: fit-content;
  flex-shrink: 0px;

  @media (max-width: 767px) {
    min-width: 48.5%;
  }

  @media (max-width: 615px) {
    text-align: center;
    align-items: center;
  }

`