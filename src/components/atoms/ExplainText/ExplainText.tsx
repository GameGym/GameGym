import React from 'react';
import styled from 'styled-components';

type Children = {
  children: string;
};

const ExplainTextStyle = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const ExplainText = ({ children }: Children) => {
  return <ExplainTextStyle children={children} />;
};

export default ExplainText;
