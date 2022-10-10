import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image/Image';

import ExplainBox from '../../molecules/ExplainBox/ExplainBox';

interface Props {
  label: string;
  children: string;
  src: string;
}

const ListItem = ({ src, label, children }: Props) => {
  return (
    <Container>
      <Image src={src} small />
      <ExplainBox label={label} children={children} />
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  border: 2px solid #000000;
  border-radius: 8px;
  display: flex;
  padding 24px;
  box-sizing: border-box;
  align-items: center;
  gap: 24px;
`;
