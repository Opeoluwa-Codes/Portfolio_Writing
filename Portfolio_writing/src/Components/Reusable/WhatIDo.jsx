import React from 'react'
import styled from 'styled-components';

const WhatIDo = (props) => {
  return (
    <WhatIDoWrapper>
      <Icons>{props.icons}</Icons>

      <InfoWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </InfoWrapper>
    </WhatIDoWrapper>
  );
};

export default WhatIDo;

const WhatIDoWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: start;

  gap: 10px;

  @media (max-width: 618px) {
    gap: 4px;

  }

`

const Icons = styled.div`
  width: 40px;

  @media (max-width: 594px) {
    display: none;

  }
  
`

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;

`
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  color: white;

  @media (max-width: 615px) {
    text-align: center;

    }

`
const Description = styled.div`
  font-size: 14px;
  font-family: Arial;
  font-weight: 200;

  color: #cccccc;

  line-height: 25px;

  text-align: left;

  @media (max-width: 705px) {
    font-size: 14px;

  }

  @media (max-width: 615px) {
    text-align: center;

    }

  @media (max-width: 499px) {
    width: 100%;

  }
`