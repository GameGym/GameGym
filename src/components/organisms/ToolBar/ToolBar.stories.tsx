import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolBar from './ToolBar';

export default {
  title: 'Organisms/ToolBar',
  component: ToolBar,
} as ComponentMeta<typeof ToolBar>;

const Template: ComponentStory<typeof ToolBar> = args => <ToolBar {...args} />;

export const default_ToolBar = Template.bind({});
default_ToolBar.args = {
  toggleIsActive: true,
};
