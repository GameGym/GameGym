import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  placeholder: string;
  onInput?: () => void;
  type: 'text' | 'password';
}

const InputStyle = styled.input`
  width: 100%;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 8px;
`;

const Input = ({ id, onInput, placeholder, type }: Props) => {
  return (
    <InputStyle
      id={id}
      onInput={onInput}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
