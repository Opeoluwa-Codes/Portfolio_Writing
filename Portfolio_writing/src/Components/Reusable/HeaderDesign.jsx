import React from 'react'
import styled from 'styled-components';

const HeaderDesign = (props) => {
  return (

    <HeaderDesignWrapper>
      <h1>{props.title}</h1>
    </HeaderDesignWrapper>

  );
};

export default HeaderDesign;

const HeaderDesignWrapper = styled.div`
  width: 89.5%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  box-sizing: border-box;

  border: 1px solid white;

  @media (max-width: 914px) {
    width: 78%;

  }

  @media (max-width: 615px) {
    width: 80%;

  }

  @media (max-width: 594px) {
    margin-bottom: 15px;

  }

  @media (max-width: 499px) {
    width: 75%;

    margin-bottom: 0px;

  }


  

  h1{
    font-size: 80px;
    font-weight: 800;
    color: white;

    margin: 0px;

    @media (max-width: 914px) {
    font-size: 70px;

    }

    @media (max-width: 809px) {
    font-size: 60px;

    }

    @media (max-width: 705px) {
    font-size: 35px;

    }

    @media (max-width: 500px) {
    font-size: 30px;

    box-sizing: border-box;
    padding: 5px;

    }
  }
`