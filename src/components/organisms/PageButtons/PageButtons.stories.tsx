import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageButtons from './PageButtons';

export default {
  title: 'Organisms/PageButtons',
  component: PageButtons,
} as ComponentMeta<typeof PageButtons>;

const Template: ComponentStory<typeof PageButtons> = () => <PageButtons />;
export const default_PageButtons = Template.bind({});
