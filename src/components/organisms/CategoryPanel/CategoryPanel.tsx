import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const CategoryPanel = () => {
  return (
    <Category>
      <Title>Category</Title>
      <Button
        label='puzzle'
        bgColor='white'
        textColor='black'
        category
        isActive
      />
      <Button label='' bgColor='white' textColor='black' category />
      <Button label='' bgColor='white' textColor='black' category />
      <Button label='' bgColor='white' textColor='black' category />
      <Button label='' bgColor='white' textColor='black' category />
      <Button label='' bgColor='white' textColor='black' category />
    </Category>
  );
};

export default CategoryPanel;

const Category = styled.aside`
  background-color: #f5f5f5;
  width: 288px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  button:hover {
    border: 2px solid black;
  }
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  align-self: flex-start;
  padding: 17px 25px 40px;
`;
