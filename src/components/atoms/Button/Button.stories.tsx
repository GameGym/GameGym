import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

// 스토리 파일명은 컴포넌트 파일명과 동일하게 작성해야하며 스토리확장자를 붙여줍니다. ex)파일명.stories.tsx
export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// 스토리북상에서 보여지는 컴포넌트 이름입니다.
export const default_Button = Template.bind({});
default_Button.args = {
  // 지정해둔 props를 넣어줍니다.
  label: 'Button',
  bgColor: 'black',
  textColor: 'white',
};

export const Small_Button = Template.bind({});
Small_Button.args = {
  label: '1',
  bgColor: 'white',
  textColor: 'black',
  small: true,
};

export const Large_Button = Template.bind({});
Large_Button.args = {
  label: 'Button',
  bgColor: 'black',
  textColor: 'white',
  large: true,
};

export const Category_Button = Template.bind({});
Category_Button.args = {
  label: 'puzzle',
  bgColor: 'white',
  textColor: 'black',
  category: true,
};
