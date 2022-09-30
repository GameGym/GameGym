import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import TagPanel from '../TagPanel/TagPanel';
import user from '../../../assets/avatar.svg';
import mail from '../../../assets/mail-alt.svg';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title label='Welcome to GG' />
        <div>
          <TagPanel
            text1='shop'
            href1='#'
            text2='Subscription'
            href2='#'
            text3='About Us'
            href3='#'
          />
          <Image src={user} />
          <Image src={mail} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 2px solid black;
  padding: 0 25px;
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
    content: '|';
    display: block;
    position: absolute;
    right: 140px;
  }
`;
