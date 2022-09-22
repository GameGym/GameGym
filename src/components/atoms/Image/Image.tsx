import styled, { css } from 'styled-components';

interface Props {
  src: string;
  icon?: boolean;
  small?: boolean;
  large?: boolean;
}

const ImageStyle = styled.img<Props>`
  ${props =>
    props.icon &&
    css`
      width: 40px;
      height: 40px;
    `}

  ${props =>
    props.small &&
    css`
      width: 110px;
      height: 110px;
    `}

  ${props =>
    props.large &&
    css`
      width: 986px;
      height: 520px;
    `}
`;

const Image = ({ src = '', ...props }: Props) => {
  return <ImageStyle src={src} {...props} />;
};

export default Image;
