import React from 'react';
import styled from 'styled-components';
import ToggleButton from '../../molecules/ToggleButton/ToggleButton';
import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';
import FilterIcon from '../../../assets/filter.svg';
import SortIcon from '../../../assets/arrow-down.svg';
import NewIcon from '../../../assets/plus.svg';

interface props {
  toggleIsActive: boolean;
}

const ToolBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToggleStyle = styled.div``;

const ButtonStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const ToolBar = ({ toggleIsActive }: props) => {
  return (
    <ToolBarStyle>
      <ToggleStyle>
        <ToggleButton
          isActive={toggleIsActive}
          rightText='Gallery'
          leftText='List'
        />
      </ToggleStyle>
      <ButtonStyle>
        <Button
          label='Filter'
          bgColor='white'
          textColor='black'
          medium
          isActive
        >
          <Image src={FilterIcon} />
        </Button>
        <Button label='Sort' bgColor='white' textColor='black' medium isActive>
          <Image src={SortIcon} />
        </Button>
        <Button label='New' bgColor='black' textColor='white' medium isActive>
          <Image src={NewIcon} />
        </Button>
      </ButtonStyle>
    </ToolBarStyle>
  );
};

export default ToolBar;
