import 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ContactTile from '../Components/Reusable/ContactTile';

import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";

const ContactMobile = () => {
  return (
    <ContactWrapper>

      <HeaderDesign title="CONTACT"/>

      <MainSection>

        <Display>
          <ContactTile icon={<Call/>} info="(+1) 683-882-1123" type="phone"/>
          
          {/* <ContactTile icon={<Twitter/>} info="@Happy_2_Code" type="twitter"/> */}

          <ContactTile icon={<Gmail/>} info="opewrites24@gmail.com" type="email"/>
        </Display>

      </MainSection>

    </ContactWrapper>
  );
};

export default ContactMobile;

const ContactWrapper = styled.div`
  height: 35vh;

  padding-left: 0%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  position: relative;

  background-color: black;

`
const MainSection = styled.div`
  width: 80%;
  height: 60%;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;

  margin-top: 5%;

`
const Display = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;

  width: 100%;

  gap: 10%;

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