import styled from 'styled-components';

interface Props {
  isActive: Boolean;
  rightText?: string;
  leftText?: string;
  onClick?: () => void;
}

const ToggleButtonStyle = styled.div`
  position: relative;
  display: flex;
  width: 120px;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid Gray;
  cursor: pointer;
  box-sizing: border-box;
`;

const RightTextStyle = styled.span`
  flex-grow: 1;
  display: inline-block;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  color: ${(p: Props) => (p.isActive ? 'black' : 'white')};
  background-color: ${(p: Props) => (p.isActive ? 'white' : 'black')};
  transition: all 0.5s ease-in-out;
`;

const LeftTextStyle = styled.span`
  flex-grow: 1;
  display: inline-block;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  color: ${(p: Props) => (p.isActive ? 'white' : 'black')};
  background-color: ${(p: Props) => (p.isActive ? 'black' : 'white')};
  transition: all 0.5s ease-in-out;
`;

const ToggleButton = ({ isActive, leftText, rightText, onClick }: Props) => {
  return (
    <ToggleButtonStyle>
      <LeftTextStyle isActive={isActive}>{leftText}</LeftTextStyle>
      <RightTextStyle isActive={isActive}>{rightText}</RightTextStyle>
    </ToggleButtonStyle>
  );
};

export default ToggleButton;
