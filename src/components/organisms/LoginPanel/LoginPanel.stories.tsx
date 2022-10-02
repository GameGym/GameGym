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
