import React from 'react'
import styled from 'styled-components';

import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import { useState } from 'react';


const PortfolioItem = (props) => {

  const [clickOpen, setClickOpen] = useState(false);

  return (

    <Wrapper>
        <img src={props.img} alt={props.alt}/>

        <Button>
          <button onClick={(e)=>{e.preventDefault(); setClickOpen(true)}}>Read</button>
        </Button>

        <AnimatePresence>
          { clickOpen && (
            <Box
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dialogVariants}
            >

            <BoxContent>
              <Close onClick ={() => setClickOpen(false)}>
                <CloseIcon/>
              </Close>
              
              <Information>
                <h2>{props.title}</h2>
                <p>{props.description}</p>

                <a href={props.demolink} target='blank' className='a1'>Read More</a>
              </Information>

            </BoxContent>

            </Box>
                      )
          }
        </AnimatePresence>      

    </Wrapper>

  );
};

export default PortfolioItem;

const dialogVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const Wrapper = styled.div`

  position: relative;
  width: 90%;
  height: 150px;
  overflow: hidden;
  margin: 0px;
  gap: 0px;
  background-color: transparent;

  @media (max-width: 499px) {
    width: 90%;
    height: 150px;
  }

  
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    box-sizing: border-box;
    transition: opacity 0.8s ease-in-out;
    padding: 0;
  }

  &:hover img {
    opacity: 0.15;
  }

`


const Button = styled.div`

  width: 100%;
  height: 100%;

  position: absolute;

  top: 0px;
  left: 0px;

  box-sizing: border-box;
  margin: 0px;
  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.8s ease-in-out;  

  opacity: 0;

  &:hover{
    opacity: 1;
  }

  button{

    width: 55%;
    height: 20%;

    box-sizing: border-box;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;

    border: 1px white solid;
    color: white;

    font-size: 14px;
    font-weight: 600;

    transition: all 1s ease-in-out;

    &:hover{
        border: none;
        background-color: white;
        color: black;

        cursor: pointer;

        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

`

const Box = styled(motion.div)`
  
  position: fixed;
  top: 0;
  left: 0;
  
  background: black;

  padding-left: 12.5%;
  padding-top: 2%;
  padding-bottom: 2%;
  
  width: 100%;
  height: 100vh;
  
  box-sizing: border-box;

  z-index: 1000;

  @media (max-width: 914px) {
    padding-top: 0%;

  }

`

const BoxContent = styled.div`

  width: 100%;
  height: 100%;
  box-sizing: border-box;

`

const Close = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row-reverse;

  box-sizing: border-box;

  padding-top: 10px;

  margin-bottom: 100px;

  cursor: pointer;

  @media(max-width: 912px) {
    padding-right: 15px;
  }

  @media(max-width: 768px) {
    padding-right: 0px;
  }

`

const CloseIcon = styled(MdClose)`
  color: white;
  font-size: 30px;
  
  @media(max-width: 768px) {
    font-size: 22px;
  }

  &:hover{
    color: red;
  }
`

const Information = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50vh;
  
  @media (max-width: 914px) {
    width: 78%;

  }

  h2{
    color: white;

    font-size: 30px;
    font-weight: 800;

    margin-top: 0px;

    @media (max-width: 500px){
      text-align: center;
    }

  }

  p{
    text-align: center;
    line-height: 32px;

    font-size: 14px;
    font-weight: 200;

    color: #cccccc;

    margin-bottom: 2%;

    width: 70%;

  }

  .a1{
    border: 1px white solid;

    padding: 10px;

    margin-bottom: 1%;

    text-decoration: none;

    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family: Arial;

    transition: all 1s ease-in-out;

    &:hover{
      border-color: none;
      background-color: #cccccc;
      color: black;

      cursor: pointer;
    
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

  }

  .a2{
    border: 1px white solid;

    padding: 10px;

    text-decoration: none;

    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family: Arial;

    transition: all 1s ease-in-out;

    &:hover{
      border-color: none;
      background-color: #cccccc;
      color: black;

      cursor: pointer;
    
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

  }

`

