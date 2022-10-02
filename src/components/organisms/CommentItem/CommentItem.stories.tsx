import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentItem from './CommentItem';

export default {
  title: 'Organisms/CommentItem',
  component: CommentItem,
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = () => <CommentItem />;

export const CommentItemStory = Template.bind({});
