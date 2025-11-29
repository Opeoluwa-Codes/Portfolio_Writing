import 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react';

import HeaderDesign from '../Components/Reusable/HeaderDesign'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import PortfolioItem from "../Components/Reusable/PortfolioItem"

import one from '../../src/Assets/ART/1.jpg'
import two from '../../src/Assets/ART/2.jpg'
import three from '../../src/Assets/ART/3.png'
import four from '../../src/Assets/ART/4.jpeg'
import five from '../../src/Assets/ART/5.jpg'
import six from '../../src/Assets/ART/6.jpg'

import seven from '../../src/Assets/ART/7.png'
import eight from '../../src/Assets/ART/8.png'
import nine from '../../src/Assets/ART/9.wepb'
import ten from '../../src/Assets/ART/10.jpg'
import eleven from '../../src/Assets/ART/11.wepb'
import twelve from '../../src/Assets/ART/12.png'

import thirteen from '../../src/Assets/ART/13.png'
import fourteen from '../../src/Assets/ART/14.jpg'
import fifteen from '../../src/Assets/ART/15.webp'
import sixteen from '../../src/Assets/ART/16.jpg'
import seventeen from '../../src/Assets/ART/17.png'
import eighten from '../../src/Assets/ART/18.jpg'

import nineteen from '../../src/Assets/ART/19.jpg'
import twenty from '../../src/Assets/ART/20.jpg'
import twentyone from '../../src/Assets/ART/21.png'
import twentytwo from '../../src/Assets/ART/22.jpg'
import twentythree from '../../src/Assets/ART/23.png'
import twentyfour from '../../src/Assets/ART/24.jpg'

import twentyfive from '../../src/Assets/ART/25.jpg'
import twentysix from '../../src/Assets/ART/26.jpg'
import twentyseven from '../../src/Assets/ART/27.wepb'
import twentyeight from '../../src/Assets/ART/28.jpg'
import twentynine from '../../src/Assets/ART/29.png'
import thirty from '../../src/Assets/ART/30.jpg'


const portfolioItems = [

  { id: 1, type: 'Casino', img: one, alt: 'Big Time Gaming Review', title: 'Big Time Gaming Review', description: 'Big Time Gaming specialises solely in slot games...', demolink: 'https://drive.google.com/file/d/1-NjLHPCMncCY2vFswucQAm5F_Eokf9jI/view?usp=sharing'},
  { id: 2, type: 'Sportsbook', img: two, alt: '22Bet Bonuses Nigeria Review', title: '22Bet Bonuses Nigeria Review', description: 'The 22Bet casino is licensed for operation in Nigeria by the National Lottery Regulatory Commission...', demolink: 'https://drive.google.com/file/d/14c2dqIZk8STes3v0JI4fqlzNToRdkLlO/view?usp=sharing'},
  { id: 3, type: 'eSports', img: three, alt: 'Betting on Esports vs. Traditional Sports', title: 'Betting on Esports vs. Traditional Sports', description: 'Esports are essentially gaming events...', demolink: 'https://drive.google.com/file/d/1He4HnQ2IcLzBjhlMiaGYxAPqaDrxN2KK/view?usp=sharing'},
  { id: 4, type: 'Football', img: four, alt: 'Champions League Prediction_Quater Final Round 2025', title: 'Champions League Prediction_Quater Final Round 2025', description: 'For some, it took ruthlessness; for others, it took perseverance to make it to the final-8 of the...', demolink: 'https://drive.google.com/file/d/1HrPNrzBqQqiY1_UUbKseXEShsXk5hWbm/view?usp=sharing'},
  { id: 5, type: 'Crypto', img: five, alt: 'Best Crypto Casino You Can Use', title: 'Best Crypto Casino You Can Use', description: 'It is now rampant on the internet for people to make money from the crypto...', demolink: 'https://drive.google.com/file/d/1UtjVVZtmoljpTjMstPWeKvsMk-eSFxw8/view?usp=sharing'},
  { id: 6, type: 'Blog', img: six, alt: 'Best Countries To Visit In Africa', title: 'Best Countries To Visit In Africa', description: 'One time or the other, we must have heard how terrible Africa is; we sometimes...', demolink: 'https://drive.google.com/file/d/1FqOn7YfGz8maMyJpbjlzJ8K9QnLPUdNJ/view?usp=sharing'},

  { id: 7, type: 'Casino', img: seven, alt: 'CasinoChan App Review', title: 'CasinoChan App Review', description: 'Rather than rely on the available desktop version of the CasinoChan platform...', demolink: 'https://drive.google.com/file/d/11KeXd393hjLdrTr58mZwdKrEQLN7R4f1/view?usp=sharing'},
  { id: 8, type: 'Sportsbook', img: eight, alt: 'Bet9ja vs RocketPlay', title: 'Bet9ja vs RocketPlay', description: 'Our article is based on the comparison of two leading betting platforms...', demolink: 'https://drive.google.com/file/d/1tfNXAgYKGPKgaKys3wrWcs6qCacnRILc/view?usp=sharing'},
  { id: 9, type: 'eSports', img: nine, alt: 'The Inter-relations Between Video Gaming and Gambling', title: 'The Inter-relations Between Video Gaming and Gambling', description: 'In recent times, we have seen the world of video gaming and gambling becoming more...', demolink: 'https://drive.google.com/file/d/1MRR4LUjlx1BpmQaruj3CNjE5hBM00_ad/view?usp=sharing'},
  { id: 10, type: 'Football', img: ten, alt: 'Dortmund vs. Barcelona', title: 'Dortmund vs. Barcelona', description: 'The Blaugranas couldnt have had it any easier against Dortmund the last time they faced off...', demolink: 'https://drive.google.com/file/d/1eBggjFU6lCtgb80tC1QbTKdMA7lUtl3T/view?usp=sharing'},
  { id: 11, type: 'Crypto', img: eleven, alt: 'CashFi Token ($CFI): The Best Crypto Purchase to Make in 2022', title: 'CashFi Token ($CFI): The Best Crypto Purchase to Make in 2022', description: 'The CashFi platform allows interested parties to access all of its assets and...', demolink: 'https://drive.google.com/file/d/1dia7sEuMQ3W8bvcRUGEKtsz-vf5xqFUm/view?usp=sharing'},
  { id: 12, type: 'Blog', img: twelve, alt: '', title: 'Steve will do its net worth - Whats Steve really worth', description: 'Including all Steve will do with its properties and assets, Steve’s net worth is estimated to be...', demolink: 'https://drive.google.com/file/d/1RMbTOiGCkFW0iwwvsL4OgDavETs_i9EW/view?usp=sharing'},

  { id: 13, type: 'Casino', img: thirteen, alt: 'Jackpot City Casino Ontario Review', title: 'Jackpot City Casino Ontario Review', description: 'Jackpot City casino is one of the most reliable online gaming destinations...', demolink: 'https://drive.google.com/file/d/1UWt2e9FIfqWb7V-je7Q54HGpul87HKDu/view?usp=sharing'},
  { id: 14, type: 'Sportsbook', img: fourteen, alt: 'Bet365 Registration', title: 'Bet365 Registration', description: 'To enjoy the features and benefits of bet365, one has to register on the platform first...', demolink: 'https://drive.google.com/file/d/1Hs0tMqbDFH0aeqY6taL7nyESAd4JlLUL/view?usp=sharing'},
  { id: 15, type: 'eSports', img: fifteen, alt: 'Top-5 Cyber Sports Tournaments to Bet on in 2025', title: 'Top-5 Cyber Sports Tournaments to Bet on in 2025', description: 'These are video game competitions in which individuals or teams face off against...', demolink: 'https://drive.google.com/file/d/1GJMFQmRiVpKXzG4_RPOskwAQte_2lJdh/view?usp=sharing'},
  { id: 16, type: 'Football', img: sixteen, alt: 'Europes Finest_ Must-Watch Teams in the 2024_25 Champions League', title: 'Europes Finest_ Must-Watch Teams in the 2024_25 Champions League', description: 'The upcoming UEFA Champions League season promises to be one of the most thrilling yet...', demolink: 'https://drive.google.com/file/d/16ou82_QMLFAnzS88tVabjMuEVFRwlbEw/view?usp=sharing'},
  { id: 17, type: 'Crypto', img: seventeen, alt: 'HachiFi (HACH), Binance (BNB) - Potentially One of the Few Notable Sparks of Excellence in the Crypto-world', title: 'HachiFi (HACH), Binance (BNB) - Potentially One of the Few Notable Sparks of Excellence in the Crypto-world', description: 'There is the creation of opportunistic events within DeFi, Non-Fungible Tokens...', demolink: 'https://drive.google.com/file/d/1qiEh4k7A5HFdoyKm-SEJifm_038Lw_SI/view?usp=sharing'},
  { id: 18, type: 'Blog', img: eighten, alt: 'Top 5 unusual facts about UFC', title: 'Top 5 unusual facts about UFC', description: 'UFC has come a long way since its inception and has made giant strides forward in...', demolink: 'https://drive.google.com/file/d/1MbkdZwit9EQofdwJ2orjfgwYTV-i5GZ2/view?usp=sharing'},

  { id: 19, type: 'Casino', img: nineteen, alt: 'Olympus Rivals Slot by Amigo Gaming Review', title: 'Olympus Rivals Slot by Amigo Gaming Review', description: 'The Olympus Rivals casino slot is an ethereal-themed masterpiece released by...', demolink: 'https://drive.google.com/file/d/1qwyLrVGqpbO0lTc-NhNjdvWSq8pO59Po/view?usp=sharing'},
  { id: 20, type: 'Sportsbook', img: twenty, alt: 'How to Download and Install the Bet365 Application', title: 'How to Download and Install the Bet365 Application', description: 'Are you looking for a user-friendly gambling app? Look no further than the Bet365 mobile app...', demolink: 'https://drive.google.com/file/d/1H3U9sj2GgIT0V5UCfVYSp7aFMIQHu1p-/view?usp=sharing'},
  { id: 21, type: 'eSports', img: twentyone, alt: 'What is eSports Betting?', title: 'What is eSports Betting?', description: 'The esports industry has grown spectacularly over the years...', demolink: 'https://drive.google.com/file/d/1bHPqq71WJw2_cHQfBQ7dQebbfe-350Jy/view?usp=sharing'},
  { id: 22, type: 'Football', img: twentytwo, alt: 'Tactical Adjustments_ How Pep Guardiola Might Replace Rodri After His Injury', title: 'Tactical Adjustments_ How Pep Guardiola Might Replace Rodri After His Injury', description: 'Recent discussions in European media have highlighted the challenge Pep Guardiola will face...', demolink: 'https://drive.google.com/file/d/1Mq3Zjxzjn33wJ76PIfXF5uBK8q-5HrtF/view?usp=sharing'},
  { id: 23, type: 'Crypto', img: twentythree, alt: 'Runfy (RUNF) and Solana (SOL) are Bound to Takeover the Crypto-space Before the End of 2022', title: 'Runfy (RUNF) and Solana (SOL) are Bound to Takeover the Crypto-space Before the End of 2022', description: 'Runfy (RUNF) aids the integration of the fitness industry into the crypto world...', demolink: 'https://drive.google.com/file/d/1aWSoxnWB5HQt8rY8079ykxC952_UVU3y/view?usp=sharing'},
  { id: 24, type: 'Blog', img: twentyfour, alt: 'Traveling around UK_Pros and Cons', title: 'Traveling around UK_Pros and Cons', description: 'Along with every other aspect of a humans life journey, there are a good number of...', demolink: 'https://drive.google.com/file/d/1oJICLR2azPrJTxgpPkwo-HmwQSEODXtd/view?usp=sharing'},

  { id: 25, type: 'Casino', img: twentyfive, alt: 'Woo Casino Bonus Reviews', title: 'Woo Casino Bonus Reviews', description: 'The variety of offers partly determines how versatile an online gambling platform is...', demolink: 'https://drive.google.com/file/d/1rtdgPetllZSLJUGwqLSmMGPqMURvmB1-/view?usp=sharing'},
  { id: 26, type: 'Sportsbook', img: twentysix, alt: 'Tonybet UK Review', title: 'Tonybet UK Review', description: 'The United Kingdom Gambling Commission regulates the TonyBet sportsbook...', demolink: 'https://drive.google.com/file/d/1qNlR3e2hX6DmHyhOBj14o2JG5Le1bEmj/view?usp=sharing'},
  { id: 27, type: 'eSports', img: twentyseven, alt: 'Why More Traditional Sports Bettors Are Switching to Esports', title: 'Why More Traditional Sports Bettors Are Switching to Esports', description: 'Typical sports selections on bookmakers, including football and basketball...', demolink: 'https://drive.google.com/file/d/1diiuT5rTvZoQA_YBi_grwy5v48f538Hi/view?usp=sharing'},
  { id: 28, type: 'Football', img: twentyeight, alt: 'Top 5 - The Craziest Football Victorites Ever', title: 'Top 5 - The Craziest Football Victorites Ever', description: 'There are certainly a ton of crazy football wins that have been witnessed in football...', demolink: 'https://drive.google.com/file/d/1tmF9oLgxKTiNyjonUaDqkT8aBduPpdQW/view?usp=sharing'},
  { id: 29, type: 'Crypto', img: twentynine, alt: 'Top 5 Platforms for Cryptocurrency Trading', title: 'Top 5 Platforms for Cryptocurrency Trading', description: 'Cryptocurrency is all that is on the rage in the tech and business world today...', demolink: 'https://drive.google.com/file/d/1sRfoqT496iLYx24MYdphCAWDyQv-5j_c/view?usp=sharing'},
  { id: 30, type: 'Blog', img: thirty, alt: 'Ubisoft modern video games peculiarities', title: 'Ubisoft modern video games peculiarities', description: 'There are lots of popular video gaming software in the world today...', demolink: 'https://drive.google.com/file/d/128qSq7ouI3jiMVUZSJecZ7ZVZo0Fihef/view?usp=sharing'},
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

      <HeaderDesign title='WRITTEN SAMPLES'/>

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
            active={filter === 'eSports'}
            onClick={() => setFilter('eSports')}       
          >eSports</FilterButton>
          <FilterButton
            active={filter === 'Football'}
            onClick={() => setFilter('Football')}       
          >Football</FilterButton>
          <FilterButton
            active={filter === 'Crypto'}
            onClick={() => setFilter('Crypto')}       
          >Crypto</FilterButton>
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


