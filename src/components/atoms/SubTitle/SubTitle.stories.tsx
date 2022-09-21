import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubTitle from './SubTitle';

export default {
  title: 'Atoms/SubTitle',
  compoent: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = args => (
  <SubTitle {...args} />
);

export const sub_title = Template.bind({});
sub_title.args = {
  label: '',
};
