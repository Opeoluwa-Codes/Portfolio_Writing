import 'react'
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

                <ResumeDisplay name='Canadore College' title='PM-IT' description='' view='View' here='resume' link='https://drive.google.com/file/d/1j_m-JbXYg9A_hoKEpYvBZCX32sBH-gPI/view?usp=sharing'/>

              </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>

                <Cover>
                  <ResumeDisplay name='VAVEL' title='Contributing Writer' view='United Kingdom'/>
                  <DialogueBox from='From: Aug 2026' to='To: Present' one='1. Write and edit SEO-optimized football articles covering top European leagues' two='2. Research and fact-check content to maintain accuracy and editorial standards' three=''/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='Extremoo' title='Remote Freelance Writer (Independent Contractor)' view='Romania'/>
                  <DialogueBox from='From: Mar 2026' to='To: Aug 2026' one='1. Write and edit iGaming content, including reviews and guides' two='2. Produce SEO-optimized casino articles across multiple markets' three='3. Maintain editorial standards for accuracy, tone, and compliance with regional gambling regulations'/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='Upwork' title='Freelance Writer' view='Remote'/>
                  <DialogueBox from='From: April 2021' to='To: Present' one='1. Deliver high-quality blog posts, reviews, guides, and editorial content' two='2. Consistently maintain 5-star client satisfaction through clear communication and fast turnarounds' three='3. Adapt tone, style, and SEO approach to match each client`s brand voice and audience'/>
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