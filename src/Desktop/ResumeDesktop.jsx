import 'react'
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