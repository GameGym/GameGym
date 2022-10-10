import React from 'react';
import styled, { css } from 'styled-components';
import ExplainText from '../../atoms/ExplainText/ExplainText';
import SubTitle from '../../atoms/SubTitle/SubTitle';

interface Props {
  label: string;
  children: string;
}

const ExplainBox = ({ label, children }: Props) => {
  return (
    <Container>
      <SubTitle label={label} />
      <ExplainText children={children} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ExplainBox;
