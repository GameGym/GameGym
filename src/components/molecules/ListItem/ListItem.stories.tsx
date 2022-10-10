import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from './ListItem';
import thumbnail from '../../../assets/thumbnail.svg';

export default {
  title: 'Molecules/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = args => (
  <ListItem {...args} />
);

export const list_item = Template.bind({});
list_item.args = {
  label: 'Top 10 UX Design Courses',
  children:
    'Do you want to start a career in UX Design?  Check the top courses that will help you learn the skills.',
  src: thumbnail,
};
