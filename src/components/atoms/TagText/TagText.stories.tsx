import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagText from './TagText';

export default {
  title: 'Atoms/TagText',
  compoent: TagText,
} as ComponentMeta<typeof TagText>;

const Template: ComponentStory<typeof TagText> = args => <TagText {...args} />;

export const TagTextStory = Template.bind({});
TagTextStory.args = {
  children: '#design',
};
