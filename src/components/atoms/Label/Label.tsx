import React from 'react';

interface Props {
  htmlFor: string;
  text: string;
}

const Label = ({ htmlFor, text }: Props) => {
  return <label htmlFor={htmlFor}>{text}</label>;
};

export default Label;
