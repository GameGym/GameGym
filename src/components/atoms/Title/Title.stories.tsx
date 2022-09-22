import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const main_Title = Template.bind({});
main_Title.args = {
  label: 'Welcome to GG',
};
