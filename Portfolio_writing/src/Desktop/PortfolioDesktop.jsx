import React from 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react';

import HeaderDesign from '../Components/Reusable/HeaderDesign'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import PortfolioItem from "../Components/Reusable/PortfolioItem"


const portfolioItems = [

  { id: 1, type: 'Casino', img: '../../src/Assets/PNG/888 Casino Review.png', alt: '888 Casino Review', title: '888 Casino Review', description: 'The 888 casino has over 25 years of excellence in the gambling industry. The award-winning gaming site has...', demolink: 'https://drive.google.com/file/d/17T4-ntKyA1eA1ocJwdCe8lUMjYKgZNpX/view?usp=drive_link'},

  { id: 2, type: 'Casino', img: '../../src/Assets/PNG/Bet365 Review.png', alt: 'Bet365 Review', title: 'Bet365 Review', description: 'Are you tired of the Bet365 browser site? Switch to the mobile-adaptable and easy-to-use Bet365 application...', demolink: 'https://drive.google.com/file/d/19DzgNBjy5rAjMJQjTCQwlSn3VGGufNyV/view?usp=drive_link'},

  { id: 3, type: 'Casino', img: '../../src/Assets/PNG/BetMGM Casino Review.png', alt: 'BetMGM Casino Review', title: 'BetMGM Casino Review', description: 'The BetMGM Casino gambling website oozes class in many ways. Its website is properly laid out, making it easy for...', demolink: 'https://drive.google.com/file/d/1Fnh9fHhtI2Ow8Ud6XZbl99ePBVZHuXsm/view?usp=drive_link'},

  { id: 4, type: 'Casino', img: '../../src/Assets/PNG/Jackpot City Ontario Casino Review.png', alt: 'Jackpot City Ontario Casino Review', title: 'Jackpot City Ontario Casino Review', description: 'Jackpot City casino is one of the most reliable online gaming destinations for casino players in Canada...', demolink: 'https://drive.google.com/file/d/1yEuXoT518aSAB-zk3ydP-wuLwxmeFGfC/view?usp=drive_link'},

  { id: 5, type: 'Casino', img: '../../src/Assets/PNG/William Hill Casino Review.png', alt: 'William Hill Casino Review', title: 'William Hill Casino Review', description: 'This casino platform is licensed for operation within Ontario Canada. The top online casino is owned by...', demolink: 'https://drive.google.com/file/d/1ZcSKO1WF4802tEGuokIr-MhKmSj6MEPt/view?usp=drive_link'},

  { id: 6, type: 'Casino', img: '../../src/Assets/PNG/Aviator Hacking Application.png', alt: 'Aviator Hacking Application', title: 'Aviator Hacking Application', description: 'Aviator hack app is one gaming software you need to avoid. Many have denied the...', demolink: 'https://drive.google.com/file/d/1z_hoSvJDvEwsXqvH5ZsZu8F3ancfYsgz/view?usp=drive_link'},

  { id: 7, type: 'Casino', img: '../../src/Assets/PNG/Stake Registration Guide.png', alt: 'Stake Registration Guide', title: 'Stake Registration Guide', description: "Stake stands out as a premier gambling destination among Nigeria's top betting platforms. Since its launch in...", demolink: 'https://drive.google.com/file/d/1eWZuU9hdSMPYia2OyNQ1-SvzV_qIavec/view?usp=drive_link'},

  { id: 8, type: 'Sportsbook', img: '../../src/Assets/PNG/22Bet Bonus Offers and Promotions.png', alt: '22Bet Bonus Offers and Promotions', title: ' A Review of 22Bet Bonus Offers and Promotions', description: 'A lot of online casinos are available in Tanzania today. However, players must...', demolink: 'https://drive.google.com/file/d/1KpCe29CnTn67pnMY32GgarKTWj6C2XmG/view?usp=drive_link'},

  { id: 9, type: 'Sportsbook', img: '../../src/Assets/PNG/22Bet IPL Review.png', alt: '', title: '22Bet IPL Review', description: '22Bet has a large sports betting section with several sports on show. There are thousands of...', demolink: 'https://drive.google.com/file/d/14G9pPNG4ixoOWFatD6rUdqXe-wXm0r3c/view?usp=drive_link'},
  
  { id: 10, type: 'Sportsbook', img: '../../src/Assets/PNG/Tonybet Review.png', alt: 'Tonybet Review', title: 'Tonybet Review', description: 'The United Kingdom Gambling Commission regulates the TonyBet sportsbook and casino platform in Great Britain. UK players can find...', demolink: 'https://drive.google.com/file/d/1guBmIUGOca0ulSjToGn9XTZH9gGcoswI/view?usp=drive_link'},

  { id: 11, type: 'Crypto', img: '../../src/Assets/PNG/Best Crypto Betting Sites in Nigeria.png', alt: 'Best Crypto Betting Sites in Nigeria', title: 'Best Crypto Betting Sites in Nigeria', description: 'There are several advantages to depositing cryptocurrency instead of fiat currencies on...', demolink: 'https://drive.google.com/file/d/1aHrdmT_LguUz-IAiXxwTdziY9p2TMZfp/view?usp=drive_link'},

  { id: 12, type: 'Crypto', img: '../../src/Assets/PNG/Best Crypto Casinos You Can Use.png', alt: 'Best Crypto Casino You Can Use', title: 'Best Crypto Casino You Can Use', description: 'It is now rampant on the internet for people to make money from the crypto market. Trading coins and holding investments are...', demolink: 'https://drive.google.com/file/d/1bIBm6yCwNQfWlXIe6OdbPiedw1thOZUB/view?usp=drive_link'},

  { id: 13, type: 'Crypto', img: '../../src/Assets/PNG/Bitcoin Casino Not on GamStop.png', alt: 'Bitcoin Casino Not on GamStop', title: 'Bitcoin Casino Not on GamStop', description: 'In today’s gambling market, cryptocurrency as means of payment has been gaining traction. Many online casinos in the UK now support...', demolink: 'https://drive.google.com/file/d/1GpHDVlJWiiQe6hf8OHbwDlRfeW0zedsz/view?usp=drive_link'},

  { id: 14, type: 'Crypto', img: '../../src/Assets/PNG/The Best Crypto Casinos in 2024.png', alt: 'The Best Crypto Casinos in 2024', title: 'The Best Crypto Casinos in 2024', description: 'Are you looking to bypass mandatory KYC processes? The good news is that...', demolink: 'https://drive.google.com/file/d/14l9bA3OIZ-qc8d04jM95tWxwnuOhAzR1/view?usp=drive_link'},

  { id: 15, type: 'Crypto', img: '../../src/Assets/PNG/The Most Rated Cryptocurrency Casinos Accessible in Canada.png', alt: 'The Most Rated Cryptocurrency Casinos Accessible in Canada', title: 'The Most Rated Cryptocurrency Casinos Available in Canada', description: 'Crypto casinos have gradually started gaining traction in the gambling industry with the increased...', demolink: 'https://drive.google.com/file/d/1jMUkixcgqnqTrWOyU5LosCncJbmAUHGc/view?usp=drive_link'},

  { id: 16, type: 'Providers', img: '../../src/Assets/PNG/Big Time Gaming Review.png', alt: 'Big Time Gaming Review', title: 'Big Time Gaming Review', description: 'Big Time Gaming specialises solely in slot games. Since Evolution acquired the...', demolink: 'https://drive.google.com/file/d/19pGdqhCmO-JI0qeXAfqHYbNx2Nl2AdPx/view?usp=drive_link'},

  { id: 17, type: 'Providers', img: '../../src/Assets/PNG/Booming Gaming Review.png', alt: 'Booming Gaming Review', title: 'Booming Games Review', description: 'Booming Games can not compare with Microgaming or NetEnt. However, they have tried...', demolink: 'https://drive.google.com/file/d/1zB7Dv1jVT7WFq3Abg0Xrx88MgZWdbyuF/view?usp=drive_link'},

  { id: 18, type: 'Providers', img: '../../src/Assets/PNG/Evolution Gaming Not on GamStop.png', alt: 'Evolution Gaming Not on GamStop', title: 'Evolution Gaming not on Gamstop Review', description: 'The Evolution Gaming initiative began in Stockholm in 2006. Ever since...', demolink: 'https://drive.google.com/file/d/1-5eIwAalUW-UVmRwG-1lzy7mjSNqA_S8/view?usp=drive_link'},

  { id: 19, type: 'Providers', img: '../../src/Assets/PNG/Spribe Review.png', alt: 'Spribe Review', title: 'Spribe review', description: 'Spribe was founded in 2018 and is one of the leading casino game providers when it comes to...', demolink: 'https://drive.google.com/file/d/1lkwR9H1BOaFCYdjU1lN_fo0TSIB0_C41/view?usp=drive_link'},

  { id: 20, type: 'Providers', img: '../../src/Assets/PNG/Yggdrasil Review.png', alt: 'Yggdrasil Review', title: 'Yggdrasil Review', description: 'Yggdrasil focuses on bringing Indian players excitement through their', demolink: 'https://drive.google.com/file/d/1QLZVGOCGnbY_6Rpqm869kRK-ilOpLLAA/view?usp=drive_link'},

  { id: 21, type: 'Games', img: '../../src/Assets/PNG/Big Bass Bonanza Slots in Canada.png', alt: 'Big Bass Bonanza Slots in Canada', title: 'Big Bass Bonanza Slot in Canada', description: 'Big Bass Bonanza is a simple slot created by the Reel Kingdom and released on the...', demolink: 'https://drive.google.com/file/d/1Nrn9bCFu1JlJzmGJv89rn0Vo8_FzkEbU/view?usp=drive_link'},

  { id: 22, type: 'Games', img: '../../src/Assets/PNG/Bitcoin Video Slots in India.png', alt: 'Bitcoin Video Slots in India', title: 'Bitcoin Video Slots in India', description: 'Gambling has seen some changes in terms of technological development in these last few years. The Indian iGaming market has...', demolink: 'https://drive.google.com/file/d/1cCzO7zVC9CoNYNlDd3X1EJPSRZJJbvBM/view?usp=drive_link'},

  { id: 23, type: 'Games', img: "../../src/Assets/PNG/Fishin' Frenzy Slot Review.png", alt: 'Fishin Frenzy Slot Review', title: "Fishin' Frenzy Slot Review", description: "Explore the underwater world by playing Fishin' Frenzy. This slot, created by...", demolink: 'https://drive.google.com/file/d/1s-PREEcPi1zond1ZAojAn-1SD4R-zkuB/view?usp=drive_link'},

  { id: 24, type: 'Games', img: '../../src/Assets/PNG/Quantum Blackjack Review.png', alt: 'Quantum Blackjack Review', title: 'Quantum Blackjack Review', description: 'Blackjack gaming can get nervy and intense. Though, Quantum Blackjack has taken...', demolink: 'https://drive.google.com/file/d/1hL_ZtpaeZ-w6p_IBUHawcbzib3MzhT3q/view?usp=drive_link'},

  { id: 25, type: 'Games', img: '../../src/Assets/PNG/Starburst Slot Machine Review.png', alt: 'Starburst Slot Machine Review', title: 'Starburst not on GamStop Review', description: 'Netent curated this game with rewarding gems and symbols in 2012. Starburst ranks as...', demolink: 'https://drive.google.com/file/d/19GPzMfFZT-xHRORajtNa3_860DXDTm1A/view?usp=drive_link'},

  { id: 26, type: 'Blog', img: '../../src/Assets/PNG/Casino Slang.png', alt: 'Casino Slang', title: 'Casino Slang Challenge', description: "Let's play a game! Guess what a casino slang means correctly, and move on to the next. Deal?...", demolink: 'https://drive.google.com/file/d/1EI7j-j3l_zDkUJN1ltVE85p9VaL17Xyj/view?usp=drive_link'},

  { id: 27, type: 'Blog', img: '../../src/Assets/PNG/Countries with Player-Friendly Laws.png', alt: 'Countries With Player-Friendly Laws', title: 'The Countries with the Most Player-Friendly Gambling Laws', description: 'Some gambling jurisdictions can be so demanding with their rules. However, some are...', demolink: 'https://drive.google.com/file/d/111szYlgMlu_ZjoBJzAThx5xTCzSoHJFr/view?usp=drive_link'},

  { id: 28, type: 'Blog', img: '../../src/Assets/PNG/The Language of Sports Betting.png', alt: 'The Language of Sports Betting.png', title: 'The Language of Sports Betting', description: 'Mother tongues, local dialects, cultures, and traditions affect how bettors...', demolink: 'https://drive.google.com/file/d/1atcXmBf_l8eBUjNteR6B77O5i-J_GnIV/view?usp=drive_link'},

  { id: 29, type: 'Blog', img: '../../src/Assets/PNG/Auditors in Online Gaming System.png', alt: 'Auditors in Online Gaming System', title: 'Third-Party Auditors in Online Gaming', description: 'Before playing casino games on any gambling site, it is crucial to...', demolink: 'https://drive.google.com/file/d/1acC82siPnsYRAUcfYl-wPbJPbDzkW0O-/view?usp=drive_link'},

  { id: 30, type: 'Blog', img: '../../src/Assets/PNG/Top Mistakes I Made As A Beginner Gambler.png', alt: 'Top Mistakes I Made As A Beginner Gambler', title: "Top Mistakes I Made as a Beginner Gambler (So You Don't Have To)", description: 'I was ignorant of so many things at the start of my online gambling journey. I avoided reviews like this one and...', demolink: 'https://drive.google.com/file/d/1k5QG560qklgwzhtz_d_Yy1YWfLsxtlru/view?usp=drive_link'},

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

      <HeaderDesign title='MY PORTFOLIO'/>

      <Buttons>

        <LeftArrow onClick={() => scrollFilter("left")}/>

        <Filter ref={filterRef}>

          <FilterButton
            active={filter === 'All'}
            onClick={() => setFilter('All')}
          >All</FilterButton>
          <FilterButton
            active={filter === 'Casino'}
            onClick={() => setFilter('Casino')}       
          >Casino</FilterButton>
          <FilterButton
            active={filter === 'Sportsbook'}
            onClick={() => setFilter('Sportsbook')}        
          >Sportsbook</FilterButton>
          <FilterButton
            active={filter === 'Crypto'}
            onClick={() => setFilter('Crypto')}       
          >Crypto</FilterButton>
          <FilterButton
            active={filter === 'Providers'}
            onClick={() => setFilter('Providers')}       
          >Providers</FilterButton>
          <FilterButton
            active={filter === 'Games'}
            onClick={() => setFilter('Games')}       
          >Games</FilterButton>
          <FilterButton
            active={filter === 'Blog'}
            onClick={() => setFilter('Blog')}        
          >Blog</FilterButton>

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


