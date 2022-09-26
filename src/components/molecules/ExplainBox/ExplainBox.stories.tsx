import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExplainBox from './ExplainBox';

export default {
  title: 'Molecules/ExplaionBox',
  component: ExplainBox,
} as ComponentMeta<typeof ExplainBox>;

const Template: ComponentStory<typeof ExplainBox> = args => (
  <ExplainBox {...args} />
);

export const defaultExplainBox = Template.bind({});
defaultExplainBox.args = {
  label: 'Top 10 UX Design Courses',
  children:
    'Do you want to start a career in UX Design?  Check the top courses that will help you learn the skills.',
};
