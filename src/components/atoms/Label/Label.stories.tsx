import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const userName_Label = Template.bind({});
userName_Label.args = {
  htmlFor: 'userName',
  text: 'userName',
};

export const password_Label = Template.bind({});
password_Label.args = {
  htmlFor: 'password',
  text: 'password',
};
