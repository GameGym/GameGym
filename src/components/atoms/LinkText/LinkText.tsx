import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  href: string;
}

const LinkTextStyle = styled.a`
  padding: 12px 8px;
  text-decoration: none;
  color: #000000;
`;

const LinkText = ({ text, href }: Props) => {
  return (
    // 라우터 돔 설치 후 <Link>태그로 바꾸기
    <LinkTextStyle href={href}>{text}</LinkTextStyle>
  );
};

export default LinkText;
