import React from 'react';
import styled from 'styled-components';
import ExplainText from '../../atoms/ExplainText/ExplainText';
import Image from '../../atoms/Image/Image';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import user from '../../../assets/avatar.svg';
import more from '../../../assets/icon-more-vertical.svg';

const CommentItem = () => {
  return (
    <Container>
      <UserInfo>
        <Image src={user} icon />
        <NameTable>
          <SubTitle label='Meredith Smith' />
          <span>39 minutes ago</span>
        </NameTable>
        <MoreBtn>
          <Image src={more} />
        </MoreBtn>
      </UserInfo>
      <ExplainText children='"To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.” ― Frank Chimero' />
    </Container>
  );
};

export default CommentItem;

const Container = styled.div`
  width: 441px;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 24px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 24px;
  position: relative;
`;

const NameTable = styled.div``;

const MoreBtn = styled.button`
  position: absolute;
  right: 0;
`;
