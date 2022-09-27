import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagPanel from './TagPanel';

export default {
  title: 'Organisms/TagPanel',
  component: TagPanel,
} as ComponentMeta<typeof TagPanel>;

const Template: ComponentStory<typeof TagPanel> = args => (
  <TagPanel {...args} />
);

export const default_TagPanel = Template.bind({});
default_TagPanel.args = {
  text1: 'Shop',
  text2: 'Subscription',
  text3: 'About Us',
  href1: '',
  href2: '',
  href3: '',
};
