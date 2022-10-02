import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import CommentBox from '../../atoms/CommentBox/CommentBox';

const CommentInput = () => {
  return (
    <Container>
      <CommentBox />
      <Button textColor='white' bgColor='black' label='comment' />
    </Container>
  );
};

export default CommentInput;

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 14px;
  button {
    align-self: flex-end;
  }
`;
