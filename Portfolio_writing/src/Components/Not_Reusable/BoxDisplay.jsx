import React from 'react'
import styled from 'styled-components';

const BoxDisplay = () => {
  return (
    <BoxWrapper>
      <LeftBox>
        <TopLeftBox>
          <InnerX>
            <Stat>3+</Stat>
            <Label>Years of Experience</Label>
          </InnerX>
        </TopLeftBox>
        <BottomLeftBox>
          <InnerY1>
            <Stat>99.9%</Stat>
            <Label>Task Completion</Label>
          </InnerY1>
        </BottomLeftBox>
      </LeftBox>

      <RightBox>
        <TopRightBox>
          <InnerY2>
            <Stat>500+</Stat>
            <Label>Articles Completed</Label>
          </InnerY2>
        </TopRightBox>
        <BottomRightBox>
          <InnerZ>
            <Stat>20+</Stat>
            <Label>Clients Satisfied</Label>
          </InnerZ>
        </BottomRightBox>
      </RightBox>
    </BoxWrapper>
  );
};

export default BoxDisplay;

const BoxWrapper = styled.div`
  width: 48.5%;
  height: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px white solid;

  @media (max-width: 914px) {
    width: 43%;

  }

  @media (max-width: 594px) {
    width: 43%;
    height: 60%;

  }

  @media (max-width: 499px) {
    width: 100%;
    height: 150px;

  }


`
const LeftBox = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const RightBox = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const TopLeftBox = styled.div`
  width: 100%;
  height: 50%;
`
const BottomLeftBox = styled.div`
  width: 100%;
  height: 50%;
`
const TopRightBox = styled.div`
  width: 100%;
  height: 50%;
`
const BottomRightBox = styled.div`
  width: 100%;
  height: 50%;
`

const InnerX = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  
  border-right: 1px solid white;
  border-bottom: 1px solid white;

  padding: 5px;
  box-sizing: border-box;
  

`

const InnerY1 = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 5px;
  box-sizing: border-box;

`

const InnerY2 = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 5px;
  box-sizing: border-box;

  border-bottom: 1px solid white;

`

const InnerZ = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 5px;
  box-sizing: border-box;
  
  border-left: 1px solid white;


`

const Stat = styled.div`
  font-size: 60px;
  font-weight: 600;
  font-family: Montserrat;

  color: white;



  @media (max-width: 914px) {
    font-size: 40px;

  }

  @media (max-width: 705px) {
    font-size: 25px;

  }

  @media (max-width: 499px) {
    font-size: 20px;

  }

`

const Label = styled.div`
  font-size: 14px;
  font-family: Arial;
  font-weight: 200;

  color: #cccccc;



  @media (max-width: 705px) {
    font-size: 12px;

  }
`