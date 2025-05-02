import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ContactTile from '../Components/Reusable/ContactTile';
// import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const ContactDesktop = () => {
  return (
    <ContactWrapper>
      <HeaderDesign title="CONTACT"/>
      <MainSection>
        <Display>
          <ContactTile icon={<Call/>} info="(+1) 683-882-1123" type="phone"/>
          <ContactTile icon={<Twitter/>} info="@Happy_2_Code" type="twitter"/>
          <ContactTile icon={<Gmail/>} info="opewrites24@gmail.com" type="email"/>
        </Display>
      </MainSection>
    </ContactWrapper>
  );
};

export default ContactDesktop;

const ContactWrapper = styled.div`
  height: 100vh;

  padding-left: 20.5%;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;
  padding-top: 2%;
  padding-bottom: 2%;

  position: relative;

  background-color: black;

`
const MainSection = styled.div`
  width: 89.5%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;

  @media (max-width: 914px) {
    width: 78%;
  }

  @media (max-width: 615px) {
    width: 80%;
  }  

`
const Display = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;

  width: 100%;
  height: 60vh;

  gap: 10%;

  margin-top: 5%;

  padding-left: 5%;

  box-sizing: border-box;

`

const Call = styled(IoCallOutline)`
  font-size: 50px;
  color: white;

  width: 100%;
  height: 100%;

  &:hover{
    color: #c0c0c0a0;
  }
`
const Gmail = styled(CgMail)`
  font-size: 50px;
  color: white;

  width: 100%;
  height: 100%;

  &:hover{
    color: #c0c0c0a0;
  }
`
const Twitter = styled(FaXTwitter)`
  font-size: 50px;
  color: white;

  width: 100%;
  height: 100%;

  &:hover{
    color: #c0c0c0a0;
  }
`