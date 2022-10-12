import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import icon from '../../../assets/arrow-right.svg';
import Image from '../../atoms/Image/Image';

const PageButtonStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const PageButtons = () => {
  return (
    <PageButtonStyle>
      <Button label='1' bgColor='white' textColor='black' small isActive />
      <Button label='2' bgColor='white' textColor='black' small />
      <Button label='3' bgColor='white' textColor='black' small />
      <Button label='4' bgColor='white' textColor='black' small />
      <Button label='5' bgColor='white' textColor='black' small />
      <Button label='Next' bgColor='white' textColor='black' medium reverse>
        <Image src={icon} />
      </Button>
    </PageButtonStyle>
  );
};

export default PageButtons;
