import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import ExplainText from '../../atoms/ExplainText/ExplainText';
import SubTitle from '../../atoms/SubTitle/SubTitle';

interface Props {
  label: string;
  children: string;
}

const ExplainBox = ({ label, children }: Props) => {
  return (
    <Fragment>
      <SubTitle label={label} />
      <ExplainText children={children} />
    </Fragment>
  );
};

export default ExplainBox;
