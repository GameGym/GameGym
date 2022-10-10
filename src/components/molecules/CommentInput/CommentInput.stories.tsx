import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentInput from './CommentInput';

export default {
  title: 'Molecules/CommentInput',
  component: CommentInput,
} as ComponentMeta<typeof CommentInput>;

const Template: ComponentStory<typeof CommentInput> = () => <CommentInput />;

export const CommentInputStory = Template.bind({});
