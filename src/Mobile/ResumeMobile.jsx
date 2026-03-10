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

                <ResumeDisplay name='Canadore College' title='Journalism' description='' view='View' here='resume' link='https://drive.google.com/file/d/1d6aJjifmBZqabap5FjDeu4mcyDeFffus/view?usp=drive_link'/>

              </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>

                <Cover>
                  <ResumeDisplay name='Extremoo' title='Remote Freelance Writer (Independent Contractor)' view='Romania'/>
                  <DialogueBox from='From: Mar 2026' to='To: Present' one='1. Write and edit iGaming content including reviews and guides for CasinoAlpha' two='2. Produce SEO-optimized casino articles across multiple markets' three='3. Maintain editorial standards for accuracy, tone, and compliance with regional gambling regulations'/>
                </Cover>

                <Cover>
                  <ResumeDisplay name='Remote - Worldwide' title='Freelance Writer' view='Remote'/>
                  <DialogueBox from='From: April 2021' to='To: Present' one='1. Deliver high-quality blog posts, reviews, guides, and editorial content for international clients across multiple niches, including iGaming, Sports & MMA, Food & Lifestyle, Travel, Home & DIY, News, and Cryptocurrency' two='2. Consistently maintain 5-star client satisfaction through clear communication, fast turnarounds, and research-driven writing' three='3. Adapt tone, style, and SEO approach to match each client`s brand voice and audience'/>
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