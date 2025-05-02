import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import useWindowSize from './Hooks/UseWindowSize'

import styled from 'styled-components'

import AboutDesktop from './Desktop/AboutDesktop'
import ContactDesktop from './Desktop/ContactDesktop'
import HomeDesktop from './Desktop/HomeDesktop'
import PortfolioDesktop from './Desktop/PortfolioDesktop'
import ResumeDesktop from './Desktop/ResumeDesktop'

import SideIcons from './Static/SideIcons'

import Mobile from './Mobile/Mobile'

import Layout from './Hooks/Layout'

import { px } from 'framer-motion'

const App = () => {

  const { width } = useWindowSize();
  const isMobile = width < 500;
  
  return (
    <div>
      <BrowserRouter>   

        {isMobile ?   
                
          <>
            <Mobile />
            <SideIcons />
          </> 

        :(
            <>
              <Routes>
                <Route path='/' element={<HomeDesktop/>}/>
                <Route element={<Layout/>}>
                  <Route path='/about' element={<AboutDesktop/>}/>
                  <Route path='/resume' element={<ResumeDesktop/>}/>
                  <Route path='/portfolio' element={<PortfolioDesktop/>}/>
                  <Route path='/contact' element={<ContactDesktop/>}/>
                </Route>
              </Routes>
              <SideIcons/>
            </>
          )
        }

      </BrowserRouter>
    </div>    
  );
};

export default App;


