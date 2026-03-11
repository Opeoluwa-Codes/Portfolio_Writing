import 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react';

import HeaderDesign from '../Components/Reusable/HeaderDesign'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import PortfolioItem from "../Components/Reusable/PortfolioItem"

import one from '../../src/Assets/ART/1.png'
import two from '../../src/Assets/ART/2.png'
import three from '../../src/Assets/ART/3.png'
import four from '../../src/Assets/ART/4.png'
import five from '../../src/Assets/ART/5.png'
import six from '../../src/Assets/ART/6.png'

import seven from '../../src/Assets/ART/7.png'
import eight from '../../src/Assets/ART/8.png'
import nine from '../../src/Assets/ART/9.png'
import ten from '../../src/Assets/ART/10.png'
import eleven from '../../src/Assets/ART/11.png'
import twelve from '../../src/Assets/ART/12.png'

import thirteen from '../../src/Assets/ART/13.png'
import fourteen from '../../src/Assets/ART/14.png'
import fifteen from '../../src/Assets/ART/15.png'
import sixteen from '../../src/Assets/ART/16.jpg'
import seventeen from '../../src/Assets/ART/17.png'
import eighteen from '../../src/Assets/ART/18.png'

import nineteen from '../../src/Assets/ART/19.png'
import twenty from '../../src/Assets/ART/20.png'
import twentyone from '../../src/Assets/ART/21.png'
import twentytwo from '../../src/Assets/ART/22.png'
import twentythree from '../../src/Assets/ART/23.png'
import twentyfour from '../../src/Assets/ART/24.png'

import twentyfive from '../../src/Assets/ART/25.png'
import twentysix from '../../src/Assets/ART/26.png'
import twentyseven from '../../src/Assets/ART/27.png'
import twentyeight from '../../src/Assets/ART/28.png'
import twentynine from '../../src/Assets/ART/29.png'
import thirty from '../../src/Assets/ART/30.png'

const portfolioItems = [

  { id: 1, type: 'iGaming', img: one, alt: 'Jackpot City Canada', title: 'Jackpot City Ontario Casino: Is This Online Casino Licensed to Operate in Ontario?', description: 'A comprehensive guide to understanding the licensing landscape for online casinos in Ontario.', demolink: 'https://drive.google.com/file/d/1gPfJbNNC7MB6cbtScR19CwhKidoM3SHg/view?usp=sharing'},
  
  { id: 2, type: 'iGaming', img: two, alt: '22Bet', title: '22BET INDIA PLATFORM INTRO', description: 'An introduction to the 22Bet platform in the Indian market.', demolink: 'https://drive.google.com/file/d/1bLnciBge1MlIRxUVlRNhinwVor4dW0Mj/view?usp=sharing'},
  
  { id: 3, type: 'iGaming', img: three, alt: 'Bet365', title: 'Bet365 Registration ', description: 'A step-by-step guide to registering for a Bet365 account.', demolink: 'https://drive.google.com/file/d/1TG49OMEb82PthsT4S5Cz3SO-aST8mYNK/view?usp=sharing'},
  
  { id: 4, type: 'iGaming', img: four, alt: 'Olympus Rivals', title: 'Olympus Rivals Slot by Amigo Gaming', description: 'A detailed overview of the Olympus Rivals slot game by Amigo Gaming.', demolink: 'https://drive.google.com/file/d/1vZe_ZDQ4xaynZIZDlkDR6OiCeFkYlJ87/view?usp=sharing'},
  
  { id: 5, type: 'iGaming', img: five, alt: 'Casino Bonus', title: 'Daily Casino Bonus', description: 'Information about daily bonuses available at various online casinos.', demolink: 'https://drive.google.com/file/d/1-vJ6AEYDoEH7SThnuEtXvMW2TdqumEef/view?usp=sharing'},
  
  { id: 6, type: 'iGaming', img: six, alt: 'Casino Payment Method', title: 'Regional Payment Method Preferences: How Casinos Adapt to Local Markets', description: 'An analysis of how different regions prefer various payment methods for online casinos.', demolink: 'https://drive.google.com/file/d/16DMOD6bdKfsFLOBzVAF0pAbelJL8Dew8/view?usp=sharing'},

  { id: 7, type: 'iGaming', img: seven, alt: '22Bet', title: '22Bet App: Introduction', description: 'A guide to using the 22Bet mobile app.', demolink: 'https://drive.google.com/file/d/1TRRsS4i9-3-47njzfchru14H7VAKMRGx/view?usp=sharing'},

  { id: 8, type: 'iGaming', img: eight, alt: 'iGaming Auditors', title: 'Third-Party Auditors in Online Gaming', description: 'An overview of the role of third-party auditors in ensuring fairness and compliance in online gaming.', demolink: 'https://drive.google.com/file/d/1Nb3uZf4hA6LZyIGZtYd_6ieQC9sJ23Gt/view?usp=sharing'},



  { id: 9, type: 'iGaming', img: nine, alt: 'eSports', title: 'WHAT IS ESPORTS BETTING?', description: 'A comprehensive guide to understanding esports betting', demolink: 'https://drive.google.com/file/d/1gKc7F4P8VjalrZ7wVyJhVvIaRfu_drVM/view?usp=sharing'},

  { id: 10, type: 'iGaming', img: ten, alt: 'eSports vs Traditional Sports', title: 'Betting on Esports vs. Traditional Sports', description: 'A detailed comparison of betting options in esports and traditional sports', demolink: 'https://drive.google.com/file/d/1K-pDZeDxnW6EfytofN1YHGV9MA3aKNbz/view?usp=sharing'},
  
  { id: 11, type: 'iGaming', img: eleven, alt: 'Cyber Sports Tournaments', title: 'Top-5 Cyber Sports Tournaments to Bet on in 2025', description: 'An overview of the most anticipated cyber sports tournaments for the upcoming year', demolink: 'https://drive.google.com/file/d/1uKzD-3CDekYVPPJf9ST5N3F-DkGyf4iR/view?usp=sharing'},

  

  { id: 12, type: 'Sports', img: twelve, alt: 'Euro 2024', title: 'Group Stage Shockers: Teams Primed to Upset the Euro 2024 Favourites', description: 'A comprehensive guide to understanding the group stage dynamics in Euro 2024', demolink: 'https://drive.google.com/file/d/13HjNSPZ5HXt6SlclD8fMHCwt7So9Hhay/view?usp=sharing'},

  { id: 13, type: 'Sports', img: thirteen, alt: 'Football Victories', title: 'Top 5 the Craziest Football Victories Ever ', description: 'A look at some of the most surprising and incredible football victories in history', demolink: 'https://drive.google.com/file/d/1X5UBstQeLVnPqtiREg419bhJWT8WvfuA/view?usp=sharing'},

  { id: 14, type: 'Sports', img: fourteen, alt: 'Football Coaches', title: 'The Top 19 Richest Football Coaches in the World', description: 'An overview of the wealthiest football coaches globally', demolink: 'https://drive.google.com/file/d/1CVy546E7Ou5MHqr0Yl15MiBlWMkJcCrP/view?usp=sharing'},

  { id: 15, type: 'Sports', img: fifteen, alt: 'Football Clubs', title: 'Top 20 Richest Football Clubs in the World ', description: 'An overview of the wealthiest football clubs globally', demolink: 'https://drive.google.com/file/d/1vOUULus2T1udSHowNRIjYqv6bn9-tWYZ/view?usp=sharing'},


  
  { id: 16, type: 'UFC & MMA', img: sixteen, alt: 'Denny vs Cash', title: 'Denny vs Cash Prediction: A Clash of the Experienced and Undefeated', description: 'A detailed analysis of the upcoming fight between Denny and Cash.', demolink: 'https://drive.google.com/file/d/1Ngcnhhouv08-PpWWzXN6t8sPlYeGL2UU/view?usp=sharing'},

  { id: 17, type: 'UFC & MMA', img: seventeen, alt: 'UFC', title: 'Top 5 unusual facts about UFC', description: 'Discover some lesser-known details about the Ultimate Fighting Championship.', demolink: 'https://drive.google.com/file/d/1epSshC3XzitAaWL0GzgLocwjBDs5PCaB/view?usp=sharing'},

  { id: 18, type: 'UFC & MMA', img: eighteen, alt: 'MMA', title: 'Top 10 Successful MMA Fighters ', description: 'A look at the most successful mixed martial artists in history.', demolink: 'https://drive.google.com/file/d/19voo5IvYSzZJ5ZStB8ugzp-3Aua73eaW/view?usp=sharing'},



  { id: 19, type: 'Lifestyle', img: nineteen, alt: 'Digital Renaissance', title: 'The Digital Renaissance of Indian Folktales', description: 'An exploration of how digital technology is revitalizing traditional Indian folktales.', demolink: 'https://drive.google.com/file/d/10ZTO6VHfmubpOB2FwseclGhLLe-F2KbS/view?usp=sharing'},

  { id: 20, type: 'Lifestyle', img: twenty, alt: 'Online Forums', title: 'Digital Gatherings: How Online Forums are Redefining Social Bonds ', description: 'A study on the impact of online forums on social connections and community building.', demolink: 'https://drive.google.com/file/d/1MNwk9CGMCB-ZTeIqacwAsmcm--Svedwx/view?usp=sharing'}, 

  { id: 21, type: 'Lifestyle', img: twentyone, alt: 'Prosthetics', title: 'The Development of Prosthetics', description: 'An overview of the advancements in prosthetic technology and their impact on users` lives.', demolink: 'https://drive.google.com/file/d/12lhym5pNx1DUqR8NcqzZmcKgo_Pi4nuY/view?usp=sharing'},

  { id: 22, type: 'Lifestyle', img: twentytwo, alt: 'Netflix', title: 'Top 10 Netflix Horror Movies', description: 'A list of the top 10 horror movies available on Netflix.', demolink: 'https://drive.google.com/file/d/1Skal30I45xLn0dXRu9hjetfxWV1hU5ex/view?usp=sharing'},

  { id: 23, type: 'Lifestyle', img: twentythree, alt: 'Myths', title: '10 Myths about American Comics', description: 'An exploration of common misconceptions about American comics.', demolink: 'https://drive.google.com/file/d/1skEB22fpFbZxgjB6TFokGTiPPQ1DIEO-/view?usp=sharing'},

  { id: 24, type: 'Lifestyle', img: twentyfour, alt: 'Cartoons', title: 'Top 12 Cartoons for Adults ', description: 'A curated list of the best cartoons suitable for adult audiences.', demolink: 'https://drive.google.com/file/d/1MSQK3do_P6f1d35nHc59aBCnwm0-_D3u/view?usp=sharing'},



  { id: 25, type: 'Celebrity', img: twentyfive, alt: 'Andrew Tate', title: 'Andrew Tate Net Worth Estimate 2022', description: 'An analysis of Andrew Tate`s net worth in 2022, including his sources of income and financial status.', demolink: 'https://drive.google.com/file/d/12IemvOiRX_rbwQIY1qz9XQmDkgwud11o/view?usp=sharing'},

  { id: 26, type: 'Celebrity', img: twentysix, alt: 'Nelk Boys', title: 'Nelk Boys` Net Worth Estimate 2022', description: 'An analysis of Nelk Boys` net worth in 2022, including his sources of income and financial status.', demolink: 'https://drive.google.com/file/d/131CIbpA07rCNfExjOMCGsBcB_12v1_AR/view?usp=sharing'},

  { id: 27, type: 'Celebrity', img: twentyseven, alt: 'Adin Ross', title: 'Adin Ross Net Worth Estimate 2022', description: 'An analysis of Adin Ross` net worth in 2022, including his sources of income and financial status.', demolink: 'https://drive.google.com/file/d/1Uwc65l9GUCVm6jRs5xcEsC13DXPWs8R2/view?usp=sharing'},



  { id: 28, type: 'Travel', img: twentyeight, alt: 'UK', title: 'Traveling Around the UK: Pros and Cons', description: 'A look at the advantages and disadvantages of traveling around the UK.', demolink: 'https://drive.google.com/file/d/16OKabspK0JtnMj-ONskHfby_mb6PWjZi/view?usp=sharing'},

  { id: 29, type: 'Travel', img: twentynine, alt: 'Africa', title: 'Best Countries to Visit in Africa', description: 'An overview of the top countries to visit in Africa for tourists.', demolink: 'https://drive.google.com/file/d/1fF1TW17I7gQA42vdOWEfbCh-_22cj1Sy/view?usp=sharing'},

  { id: 30, type: 'Travel', img: thirty, alt: 'Nepal', title: 'Fun Things to Tryout in Nepal as A Tourist', description: 'A guide to the most exciting activities and experiences available for tourists in Nepal.', demolink: 'https://drive.google.com/file/d/10sSP5ZAEj3JBmviNw9fLb4N1FKTgHY8L/view?usp=sharing'},
 
];


const PortfolioDesktop = () => {

  const [filter, setFilter] = useState('All');
  const filterRef = useRef(null);

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === filter) 

  const scrollFilter = (direction) =>{
    if (filterRef.current) {
      const scrollAmount = 100;
      const currentPosition = filterRef.current.scrollLeft;

      if (direction === "left") {
        filterRef.current.scrollTo({
          left: currentPosition - scrollAmount,
          behavior: "smooth"
        });
      } else {
        filterRef.current.scrollTo({
          left: currentPosition + scrollAmount,
          behavior: "smooth"
        });
      }

    }
  }

  return (

    <PortfolioWrapper>

      <HeaderDesign title='SAMPLES'/>

      <Buttons>

        <LeftArrow onClick={() => scrollFilter("left")}/>

        <Filter ref={filterRef}>

          <FilterButton
            active={filter === 'All'}
            onClick={() => setFilter('All')}
          >All</FilterButton>
          <FilterButton
            active={filter === 'iGaming'}
            onClick={() => setFilter('iGaming')}       
          >iGaming</FilterButton>
          <FilterButton
            active={filter === 'Sports'}
            onClick={() => setFilter('Sports')}       
          >Sports</FilterButton>
          <FilterButton
            active={filter === 'UFC & MMA'}
            onClick={() => setFilter('UFC & MMA')}       
          >UFC & MMA</FilterButton>
          <FilterButton
            active={filter === 'Lifestyle'}
            onClick={() => setFilter('Lifestyle')}       
          >Lifestyle</FilterButton>
          <FilterButton
            active={filter === 'Celebrity'}
            onClick={() => setFilter('Celebrity')}        
          >Celebrity</FilterButton>
          <FilterButton
            active={filter === 'Travel'}
            onClick={() => setFilter('Travel')}        
          >Travel</FilterButton>

        </Filter>
          
          <RightArrow onClick={() => scrollFilter ("right")}/>

      </Buttons>

      <PortfolioDisplay>

        {filteredItems.map(item => (
          <PortfolioItem
            key={item.id}
            img={item.img}
            alt={item.alt}
            title={item.title}
            description={item.description}
            demolink={item.demolink}
            sourcelink={item.sourcelink}
          />
        ))}
        
  
      </PortfolioDisplay>

    </PortfolioWrapper>

  );
};

export default PortfolioDesktop;

const PortfolioWrapper = styled.div`
  
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-top: 3%;
  padding-left: 12%;

  position: relative;

  background-color: black;

  @media (max-width: 914px) {
    padding-left: 0%;
  }

`

const Buttons = styled.div`

  width: 89.5%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3%;

  @media (max-width: 915px) {
    width: 86.5%;
  }

`

const Filter = styled.div`

  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 2%;

  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 670px){
    justify-content: start;
    gap: 5%;
  }


`


const FilterButton = styled.div`

    font-size: 14px;
    font-weight: 800;

    font-family: Montserrat;

    min-width: fit-content;

    display: flex;

    flex-wrap: nowrap;

    background-color: transparent;

    color: ${props => props.active ? '#c0c0c0a0' : 'white'};

    cursor: pointer;

    &:hover{
      color: #c0c0c0a0;
      transform: scale(1.05);
    }

`

const LeftArrow = styled(MdKeyboardDoubleArrowLeft)`
  font-size: 20px;

  color: white;

  @media (min-width: 670px){
    display: none;
  }

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }

`

const RightArrow = styled(MdKeyboardDoubleArrowRight)`
  font-size: 20px;

  color: white;

  @media (min-width: 670px){
    display: none;
  }

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }

`


const PortfolioDisplay = styled.div`

  width: 80%; 
  height: 62%;
  overflow-y: auto;
  overflow-x: hidden;
  
  scroll-behavior: smooth;
  scrollbar-color: black;
  scrollbar-width: thin;

  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  padding: 5px 2.5%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    height: 70%;
  }

`


