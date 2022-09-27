import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Molecules/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = args => (
  <ToggleButton {...args} />
);

export const default_ToggleButton = Template.bind({});
default_ToggleButton.args = {
  isActive: true,
  rightText: 'Gallery',
  leftText: 'List',
};
