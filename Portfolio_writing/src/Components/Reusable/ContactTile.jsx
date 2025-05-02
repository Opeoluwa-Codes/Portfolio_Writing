import React from 'react'
import styled from 'styled-components';

const ContactTile = (props) => {

  const handleRedirect = () => {

    switch (props.type) {

      case 'phone':
        const cleanPhone = props.info.replace(/\D/g, '');
        window.location.href = `tel:${cleanPhone}`;
        break;

      case 'email':
        const emailAddress = props.info.trim();
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
        break;

      case 'twitter':
        const username = props.info.startsWith('@') ? props.info.substring(1) : props.info;
        window.location.href = `https://x.com/${username}`;
        break;

      default:
        console.log('No redirect type specified');

    }
  }

  return (
    
    <ContactWrapper>
      <ContactIcon>
        {props.icon}
      </ContactIcon>

      <ContactInfo onClick={handleRedirect}>
        {props.info}
      </ContactInfo>
    </ContactWrapper>

  );
};

export default ContactTile;

const ContactWrapper = styled.div`
  width: inherit;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;



`
const ContactIcon = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 570px) {
    width: 15%;

  }

  &:hover{
    background-color: black;
  }
`

const ContactInfo = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;

  font-size: 16px;


  color: #cccccc;
  font-weight: 200;

  font-family: Arial;

  cursor: pointer;

  transition: all 1s ease-in-out;

  &:hover{
    transform: scale(1.05);
  }

  @media (max-width: 570px) {
    font-size: 14px;
    width: 80%;

  }

`