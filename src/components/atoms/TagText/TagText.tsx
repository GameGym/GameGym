import React from 'react';
import styled from 'styled-components';

type Children = {
  children: string;
};

const TagTextStyle = styled.span`
  padding: 4px 16px;
  color: #ffffff;
  background-color: #707070;
  border-radius: 20px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`;

const TagText = ({ children }: Children) => {
  return <TagTextStyle children={children}></TagTextStyle>;
};

export default TagText;
