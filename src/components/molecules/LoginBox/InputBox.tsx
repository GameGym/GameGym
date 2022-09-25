import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

interface Props {
  htmlFor: string;
  text: string;
  id: string;
  placeholder: string;
  type: 'text' | 'password';
  onInput: () => void;
}

const InputBoxStyle = styled.div`
  input {
    margin-top: 8px;
  }
`;

const InputBox = ({ htmlFor, text, id, placeholder, type, onInput }: Props) => {
  return (
    <InputBoxStyle>
      <Label htmlFor={htmlFor} text={text} />
      <Input id={id} placeholder={placeholder} type={type} onInput={onInput} />
    </InputBoxStyle>
  );
};

export default InputBox;
