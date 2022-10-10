import React from 'react';
import styled from 'styled-components';

interface Props {
  header: React.ReactNode;
  aside: React.ReactNode;
  content: React.ReactNode;
}

const DefaultTemplate = ({ header, aside, content }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Aside>{aside}</Aside>
      <Content>{content}</Content>
    </Container>
  );
};

export default DefaultTemplate;

const Container = styled.div`
  display: grid;
  grid-template-columns: 288px 1fr;
`;

const Header = styled.div`
  grid-column: span 2;
`;

const Content = styled.div``;
const Aside = styled.div``;
