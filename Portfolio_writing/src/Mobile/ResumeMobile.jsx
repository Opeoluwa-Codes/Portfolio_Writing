import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ResumeDisplay from '../Components/Reusable/ResumeDisplay'
import DialogueBox from '../Components/Reusable/DialogueBox';

const ResumeMobile = () => {
  return (
    <ResumeWrapper>

        <HeaderDesign title="MY RESUME"/>

        <EduExp>

        <One>
            <h2>EDUCATION</h2>
              <Education>

                <ResumeDisplay name='Canadore College' title='Project Management - IT' description='' view='View' here='resume' link='https://drive.google.com/file/d/1zKXc3wzCHMl7r0vSlZ0JX0KTDYoYzZEa/view?usp=drive_link'/>

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

export default ResumeMobile;


const ResumeWrapper = styled.div`

  max-height: 85vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-left: 0%;
  padding-bottom: 20px;

  background-color: black;

  position: relative;

`

const EduExp = styled.div`

  width: 75%;
  height: 85%;

  margin-top: 5%;

  display: flex;
  flex-direction: column;
  
  align-items: center;

  gap: 5%;


  h2{

    font-size: 22px;
    font-weight: 600;
    font-family: Montserrat;

    color: white;

    margin: 0% 0% 5% 0%;

  }
  
`

const One = styled.div`

  height: fit-content;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

`

const Two = styled.div`

  height: fit-content;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  box-sizing: border-box;

`

const Education = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  overflow-x: auto;
  scroll-behavior: smooth;

  scrollbar-width: thin;

  margin-top: 2%;

  padding-bottom: 7%;
  box-sizing: border-box;

  scrollbar-color: black;

  gap: 1.5%;

`

const Experience = styled.div`


  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: start;
  
  gap: 1.5%;

  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  scrollbar-color: white black;

  padding-bottom: 7%;
  box-sizing: border-box;

`

const Cover = styled.div`
  
  min-width: 48.5%;
  height: fit-content;
  flex-shrink: 0px;

  text-align: center;
  align-items: center;

`