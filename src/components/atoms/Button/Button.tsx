import { Children } from 'react';
import styled, { css } from 'styled-components';

// 버튼에 넘겨주는 props들에 대한 type정의입니다.
interface Props {
  label?: string;
  bgColor: string;
  textColor: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  category?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  reverse?: boolean;
}

// styled-components 정의에 변수값이 들어간다면 변수값에 대한 정의 타입이 필요합니다.
// 각 porps타입에 대해 적어줄 수도 있습니다.
const ButtonStyle = styled.button<Props>`
  width: fit-content;
  padding: 8px 16px;
  font-size: 16px;
  border: 2px solid #000000;
  border-radius: 8px;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  display: flex;
  gap: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  ${props =>
    props.small &&
    css`
      background-color: ${(props: any) => (props.isActive ? 'black' : 'white')};
      color: ${(props: any) => (props.isActive ? 'white' : 'black')};
    `}

  ${props =>
    props.large &&
    css`
      padding: 12px 137px;
    `}

    ${props =>
    props.category &&
    css`
      width: 240px;
      height: 80px;
      font-size: 24px;
      font-weight: 700;
      text-transform: capitalize;
      border-color: ${(props: any) =>
        props.isActive ? '#000000' : 'hsl(0, 0%, 72%)'};
    `}

  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;

// 모든 컴포넌트는 함수표현식으로 작성합니다.
const Button = ({
  label = 'button',
  bgColor,
  textColor,
  onClick,
  children,
  ...props
}: Props) => {
  return (
    <ButtonStyle
      bgColor={bgColor}
      textColor={textColor}
      onClick={onClick}
      {...props}
    >
      {children}
      {label}
    </ButtonStyle>
  );
};

export default Button;
