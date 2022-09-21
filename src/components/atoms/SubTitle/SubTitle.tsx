import styled, { css } from 'styled-components';

interface Props {
  label: string;
}

const SubTitleStyle = styled.h2`
  color: #000000;
  fontsize: 18px;
`;

const SubTitle = ({ label = '', ...props }: Props) => {
  return <SubTitleStyle {...props}>{label}</SubTitleStyle>;
};

export default SubTitle;
