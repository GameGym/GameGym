import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExplainText from './ExplainText';

export default {
  title: 'Atoms/ExplainText',
  component: ExplainText,
} as ComponentMeta<typeof ExplainText>;

const Template: ComponentStory<typeof ExplainText> = args => (
  <ExplainText {...args} />
);

export const ExplainTextstory = Template.bind({});
ExplainTextstory.args = {
  children: '게임의 설명을 적어주면 됩니다. :)',
};
