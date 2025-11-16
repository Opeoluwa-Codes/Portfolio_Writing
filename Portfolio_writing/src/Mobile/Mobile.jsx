import 'react'
import styled from 'styled-components';

import HomeMobile from './HomeMobile'
import AboutMobile from './AboutMobile'
import ResumeMobile from './ResumeMobile'
import PortfolioMobile from './PortfolioMobile'
import ContactMobile from './ContactMobile'

const Mobile = () => {
  return (

    <MobileWrapper>

      <section id='home'>
        <HomeMobile/>
      </section>

      <section id='about'>
        <AboutMobile/>
      </section>

      <section id='resume'>
        <ResumeMobile/>
      </section>

      <section id='portfolio'>
        <PortfolioMobile/>
      </section>

      <section id='contact'>
        <ContactMobile/>
      </section>
      
    </MobileWrapper>
  );
};

export default Mobile;

const MobileWrapper = styled.div`

  height: fit-content;

  overflow-x: hidden;
  overflow-y: scroll;

  scroll-behavior: smooth;

  border: none;
  
`