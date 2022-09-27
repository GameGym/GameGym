import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginPanel from './LoginPanel';

export default {
  title: 'Organisms/LoginPanel',
  component: LoginPanel,
} as ComponentMeta<typeof LoginPanel>;

const Template: ComponentStory<typeof LoginPanel> = args => (
  <LoginPanel {...args} />
);

export const login_panel = Template.bind({});
login_panel.args = {
  label_title: 'Welcome to GG',
  htmlFor_id: 'username',
  text_id: 'Username',
  id_id: 'username',
  placeholder_id: '아이디를 입력해주세요.',
  type_id: 'text',
  htmlFor_pw: 'password',
  text_pw: 'Password',
  id_pw: 'password',
  placeholder_pw: '비밀번호를 입력해주세요.',
  type_pw: 'text',
  label_button: 'Sign in',
  large: true,
  bgColor: 'black',
  textColor: 'white',
  label_explain: "Don't have an account?",
  label_join: 'Join',
  href_join: '#',
};
