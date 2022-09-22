import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentBox from './CommentBox';

export default {
  title: 'Atoms/CommentBox',
  component: CommentBox,
} as ComponentMeta<typeof CommentBox>;

const Template: ComponentStory<typeof CommentBox> = args => (
  <CommentBox {...args} />
);

export const commentBox = Template.bind({});
commentBox.args = {};
