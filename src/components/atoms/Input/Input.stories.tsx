import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const userName_Input = Template.bind({});
userName_Input.args = {
  id: 'userName',
  type: 'text',
  placeholder: 'userName',
};

export const password_Input = Template.bind({});
password_Input.args = {
  id: 'password',
  type: 'password',
  placeholder: 'password',
};
