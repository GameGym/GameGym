import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkText from './LinkText';

export default {
  title: 'Atoms/LinkText',
  component: LinkText,
} as ComponentMeta<typeof LinkText>;

const Template: ComponentStory<typeof LinkText> = args => (
  <LinkText {...args} />
);

export const LinkTextStory = Template.bind({});
LinkTextStory.args = {
  href: '#none',
  text: 'home',
};
