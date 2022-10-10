import React from 'react';
import styled from 'styled-components';
import ListItem from '../../molecules/ListItem/ListItem';
import ToolBar from '../ToolBar/ToolBar';

const ListCard = () => {
  return (
    <Wrapper>
      <ToolBar toggleIsActive={true} />
      <ListItem src='' label='gamename' children='설명게임설명' />
      <ListItem src='' label='gamename' children='설명게임설명' />
      <ListItem src='' label='gamename' children='설명게임설명' />
      {/* OG06 PageButtons */}
    </Wrapper>
  );
};

export default ListCard;

const Wrapper = styled.div`
  padding: 24px 50px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
