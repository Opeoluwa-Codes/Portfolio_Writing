import 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react';

import HeaderDesign from '../Components/Reusable/HeaderDesign'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import PortfolioItem from '../Components/Reusable/PortfolioItem';

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
import sixteen from '../../src/Assets/ART/16.png'
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

  { id: 1, type: 'Football', img: one, alt: 'Greece Vs England', title: 'Greece Vs England', description: '', demolink: 'https://drive.google.com/file/d/16gWtIy2T3taE4aO2r9_vTIK4LHNlC8-g/view?usp=sharing'},

  { id: 2, type: 'Football', img: two, alt: 'Group Stage Shockers: Teams Primed to Upset the Euro 2024 Favourites', title: 'Group Stage Shockers_Teams Primed to Upset the Euro 2024 Favourites', description: '', demolink: 'https://drive.google.com/file/d/16HtgYook97XxD_sTdvWSFeT84zTJLBnZ/view?usp=sharing'},
  
  { id: 3, type: 'Football', img: three, alt: 'The Top 19 Richest Football Coaches in the World', title: 'The Top 19 Richest Football Coaches in the World', description: '', demolink: 'https://drive.google.com/file/d/1xmL4VPGphXkLo68RPG8YV2DEiyHcQ5qJ/view?usp=sharing'},
  
  { id: 4, type: 'Football', img: four, alt: 'Top 5 the Craziest Football Victories Ever', title: 'Top 5 the Craziest Football Victories Ever', description: '', demolink: 'https://drive.google.com/file/d/1I7GZ2Wyaclho5B1HULK5y4xxdBlCYqBL/view?usp=sharing'},
  
  { id: 5, type: 'Football', img: five, alt: 'Top 20 Richest Football Clubs in the World', title: 'Top 20 Richest Football Clubs in the World', description: '', demolink: 'https://drive.google.com/file/d/1Tdou0HlGr3eE1465T2uYLVaDyIGWs4zI/view?usp=sharing'},


  { id: 6, type: 'Casino', img: six, alt: '22Bet App: Introduction', title: '22Bet App: Introduction', description: '', demolink: 'https://drive.google.com/file/d/13cBcow0WWSc3ot6W4placR3mEdXbN0Dz/view?usp=sharing'},

  { id: 7, type: 'Casino', img: seven, alt: 'Free $50 Pokies No Deposit Sign Up Bonus in Australia', title: 'Free $50 Pokies No Deposit Sign Up Bonus in Australia', description: '', demolink: 'https://drive.google.com/file/d/1FYMBdSbQ77WABZCchyxK4l4GbQ9xtGwd/view?usp=sharing'},
  
  { id: 8, type: 'Casino', img: eight, alt: 'Olympus Rivals Slot by Amigo Gaming', title: 'Olympus Rivals Slot by Amigo Gaming', description: '', demolink: 'https://drive.google.com/file/d/1GAJpfnKFyHfrEpoVCRtHsNF_vScgGkI8/view?usp=sharing'},
  
  { id: 9, type: 'Casino', img: nine, alt: 'Bet365 Registration', title: 'Bet365 Registration', description: '', demolink: 'https://drive.google.com/file/d/15cwMvA3cP22zk-Gk8qpMUEh_7iD7SNz8/view?usp=sharing'},
  
  { id: 10, type: 'Casino', img: ten, alt: 'Jackpot City Ontario Casino: Is This Online Casino Licensed to Operate in Ontario?', title: 'Jackpot City Ontario Casino: Is This Online Casino Licensed to Operate in Ontario?', description: '', demolink: 'https://drive.google.com/file/d/1hKEw6i_tTE2NJdZfAfF82lV5GMi1uzwp/view?usp=sharing'},


  { id: 11, type: 'Sportsbook', img: eleven, alt: '22Bet Friday Reload Bonus', title: '22Bet Friday Reload Bonus', description: '', demolink: 'https://drive.google.com/file/d/1aowlYvOzoXKXYqIcXWC6h_SofGUf3V-U/view?usp=sharing'},

  { id: 12, type: 'Sportsbook', img: twelve, alt: 'Bet9ja VS RocketPlay', title: 'Bet9ja VS RocketPlay', description: '', demolink: 'https://drive.google.com/file/d/1j-lFx3AGeGv_kvu_ydyEfGJWIZFYisds/view?usp=sharing'},

  { id: 13, type: 'Sportsbook', img: thirteen, alt: '22Bet India Platform Introduction', title: '22Bet India Platform Introduction', description: '', demolink: 'https://drive.google.com/file/d/1ic3scKUrcS-FQmIkmyme7UIRfR7Bxc4-/view?usp=sharing'},

  { id: 14, type: 'Sportsbook', img: fourteen, alt: 'How to Place Your First Bet', title: 'How to Place Your First Bet', description: '', demolink: 'https://drive.google.com/file/d/1y4seIYpi3zftyM590j5VLxC3xd38a4SP/view?usp=sharing'},

  { id: 15, type: 'Sportsbook', img: fifteen, alt: 'European Handicap Meaning', title: 'European Handicap Meaning', description: '', demolink: 'https://drive.google.com/file/d/1JcPXtPt8BErk_AybdHtB9gap9dCddlad/view?usp=sharing'},


  { id: 16, type: 'eSports', img: sixteen, alt: 'Top-5 Cyber Sports Tournaments to Bet on in 2025', title: 'Top-5 Cyber Sports Tournaments to Bet on in 2025', description: '', demolink: 'https://drive.google.com/file/d/1dW7ailn8u4aqh1CoYBNjwTMvFadVH2fz/view?usp=sharing'},

  { id: 17, type: 'eSports', img: seventeen, alt: 'Why More Traditional Sports Bettors Are Switching to eSports', title: 'Why More Traditional Sports Bettors Are Switching to eSports', description: '', demolink: 'https://drive.google.com/file/d/1Xq_mj09dZRlH5gZ3m6XeQ7k2Gk-oAveN/view?usp=sharing'},

  { id: 18, type: 'eSports', img: eighteen, alt: 'Betting on Esports vs. Traditional Sports', title: 'Betting on Esports vs. Traditional Sports', description: '', demolink: 'https://drive.google.com/file/d/1bFxD9y2uUNtjYgACDFi-a4sT2SHgUsVQ/view?usp=sharing'},

  { id: 19, type: 'eSports', img: nineteen, alt: 'What is eSports Betting?', title: 'What is eSports Betting?', description: '', demolink: 'https://drive.google.com/file/d/1uifn6ASK480RdkfustBuw6abET9Xwjrq/view?usp=sharing'},

  { id: 20, type: 'eSports', img: twenty, alt: 'The Inter-Relations Between Video Gaming and Gambling', title: 'The Inter-Relations Between Video Gaming and Gambling ', description: '', demolink: 'https://drive.google.com/file/d/1LHFQhfoFYsqenO0WzCIdmzMHStouiNNx/view?usp=sharing'},

  
  { id: 21, type: 'Blog', img: twentyone, alt: 'The Most Unique Live Casino Game Shows You Didn`t Know Existed', title: 'The Most Unique Live Casino Game Shows You Didn`t Know Existed', description: '', demolink: 'https://drive.google.com/file/d/1Tpm6GEJlG2EVkKEhWFtIh3QNi9SzZ6pA/view?usp=sharing'},

  { id: 22, type: 'Blog', img: twentytwo, alt: 'The Biggest Slot Wins in Online Casino History', title: 'The Biggest Slot Wins in Online Casino History', description: '', demolink: 'https://drive.google.com/file/d/1SNoEAM3cUIqlyvJ1Z4KPdmWJ_zPn_7dr/view?usp=sharing'},

  { id: 23, type: 'Blog', img: twentythree, alt: 'Why Some Casino Bonuses Are Impossible to Clear', title: 'Why Some Casino Bonuses Are Impossible to Clear', description: '', demolink: 'https://drive.google.com/file/d/1VkRAgrYE7DYwOtzBpD3TDO8CBM1Zk85T/view?usp=sharing'},

  { id: 24, type: 'Blog', img: twentyfour, alt: 'Ways to Improve Your Blackjack Skills Overnight', title: 'Ways to Improve Your Blackjack Skills Overnight', description: '', demolink: 'https://drive.google.com/file/d/193A8-tmFeFQ7kxKksuViEkwcYn6kju-V/view?usp=sharing'},

  { id: 25, type: 'Blog', img: twentyfive, alt: 'What to Do If a Casino Blocks Your Account and Holds Your Winnings', title: 'What to Do If a Casino Blocks Your Account and Holds Your Winnings', description: '', demolink: 'https://drive.google.com/file/d/1_YifWZI4tJt4AVbWFc7bWQLFK0Li33cl/view?usp=sharing'},

  { id: 26, type: 'Blog', img: twentysix, alt: 'Online Casino Localization Beyond Translation', title: 'Online Casino Localization Beyond Translation', description: '', demolink: 'https://drive.google.com/file/d/1k7OveDjy9Ao5f2HRjOyOnmVZaVqqU53p/view?usp=sharing'},

  { id: 27, type: 'Blog', img: twentyseven, alt: 'The Best Banking Methods for High-Roller Players', title: 'The Best Banking Methods for High-Roller Players', description: '', demolink: 'https://drive.google.com/file/d/1QDNcGbB075o4GiAeOdB8WY6xkbQn60u6/view?usp=sharing'},

  { id: 28, type: 'Blog', img: twentyeight, alt: 'The Role of RNG Certification in Online Casino Transparency', title: 'The Role of RNG Certification in Online Casino Transparency', description: '', demolink: 'https://drive.google.com/file/d/1QvXFhB8Zhd_hEqfDyTciCzsKWx7BVLZ4/view?usp=sharing'},

  { id: 29, type: 'Blog', img: twentynine, alt: 'The Most Overrated Betting Strategies That Rarely Work', title: 'The Most Overrated Betting Strategies That Rarely Work', description: '', demolink: 'https://drive.google.com/file/d/1hIQyKYXW_Zp5msxy2S8lEcSBhBI_edcS/view?usp=sharing'},

  { id: 30, type: 'Blog', img: thirty, alt: 'How to Spot Value Bets Like a Pro', title: 'How to Spot Value Bets Like a Pro', description: '', demolink: 'https://drive.google.com/file/d/1S_tICJRg7rW2Bddwux3vlhe_wjhfqkol/view?usp=sharing'},
 
];

const PortfolioMobile = () => {

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
            active={filter === 'Football'}
            onClick={() => setFilter('Football')}       
          >Football</FilterButton>
          <FilterButton
            active={filter === 'Casino'}
            onClick={() => setFilter('Casino')}       
          >Casino</FilterButton>
          <FilterButton
            active={filter === 'Sportsbook'}
            onClick={() => setFilter('Sportsbook')}       
          >Sportsbook</FilterButton>
          <FilterButton
            active={filter === 'eSports'}
            onClick={() => setFilter('eSports')}       
          >eSports</FilterButton>\
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

export default PortfolioMobile;

const PortfolioWrapper = styled.div`

  max-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-left: 0%;

  position: relative;

  background-color: black;

`

const Buttons = styled.div`
  width: 78%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5%;
  margin-bottom: 3%;

`

const Filter = styled.div`

  width: 85%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;

  gap: 5%;

  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  scroll-behavior: smooth;  

  &::-webkit-scrollbar{
    display: none;
  }

`


const FilterButton = styled.div`

    font-size: 15px;
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

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }
`

const RightArrow = styled(MdKeyboardDoubleArrowRight)`
  font-size: 20px;

  color: white;

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }
`


const PortfolioDisplay = styled.div`

  width: 70%; 
  max-height: 75%;

  overflow-y: scroll;
  overflow-x: hidden;
  
  scroll-behavior: smooth;
  scrollbar-color: white;
  scrollbar-width: thin;

  scrollbar-color: white black;

  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  gap: 10px;
  
  padding: 3%;
  padding-left: 6%;

  margin-top: 5%;
  margin-bottom: 20px;

`


