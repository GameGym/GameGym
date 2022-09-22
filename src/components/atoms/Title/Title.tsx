import styled, { css } from 'styled-components';

interface Props {
  label?: string;
}

const TitleStyle = styled.h1`
  color: #000000;
`;

const Title = ({ label = 'Welcome to GG', ...props }: Props) => {
  return <TitleStyle {...props}>{label}</TitleStyle>;
};

export default Title;
