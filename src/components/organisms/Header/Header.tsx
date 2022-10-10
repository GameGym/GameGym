import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import TagPanel from '../../molecules/TagPanel/TagPanel';
import user from '../../../assets/avatar.svg';
import mail from '../../../assets/mail-alt.svg';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title label='Game Gym' />
        <div>
          <TagPanel
            text1='shop'
            href1='#'
            text2='Subscription'
            href2='#'
            text3='About Us'
            href3='#'
          />
          <Image src={user} icon />
          <Image src={mail} icon />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 2px solid black;
  padding: 24px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    margin-left: 12px;
  }
`;

const Wrapper = styled.div`
  &::after {
    content: '';
    width: 1px;
    height: 16px;
    background-color: #000000;
    display: block;
    position: absolute;
    top: 35px;
    right: 125px;
  }
`;
