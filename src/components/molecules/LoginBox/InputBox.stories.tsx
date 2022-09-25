import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputBox from './InputBox';

export default {
  title: 'Molecules/InputBox',
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = args => (
  <InputBox {...args} />
);

export const UserName_InputBox = Template.bind({});
UserName_InputBox.args = {
  text: 'Username',
  htmlFor: 'username',
  id: 'username',
  placeholder: '아이디를 입력해주세요',
  type: 'text',
};

export const Password_InputBox = Template.bind({});
Password_InputBox.args = {
  text: 'Password',
  htmlFor: 'password',
  id: 'password',
  placeholder: '비밀번호를 입력해주세요',
  type: 'password',
};
