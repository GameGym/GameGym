import styled from 'styled-components';
import React from 'react';
import LinkText from '../../atoms/LinkText/LinkText';

interface Props {
  text1: string;
  href1: string;
  text2: string;
  href2: string;
  text3: string;
  href3: string;
}

const TagPanelStyle = styled.div``;

const TagPanel = ({ text1, href1, text2, href2, text3, href3 }: Props) => {
  return (
    <TagPanelStyle>
      <LinkText text={text1} href={href1} />
      <LinkText text={text2} href={href2} />
      <LinkText text={text3} href={href3} />
    </TagPanelStyle>
  );
};

export default TagPanel;
