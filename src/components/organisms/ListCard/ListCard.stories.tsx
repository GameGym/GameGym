import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListCard from './ListCard';

export default {
  title: 'Organisms/ListCard',
  component: ListCard,
} as ComponentMeta<typeof ListCard>;

const Template: ComponentStory<typeof ListCard> = () => <ListCard />;

export const ListCardStory = Template.bind({});
