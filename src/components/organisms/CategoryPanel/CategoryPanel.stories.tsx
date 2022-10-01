import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryPanel from './CategoryPanel';

export default {
  title: 'Organisms/CategoryPanel',
  component: CategoryPanel,
} as ComponentMeta<typeof CategoryPanel>;

const Template: ComponentStory<typeof CategoryPanel> = () => <CategoryPanel />;

export const CategoryPanelStory = Template.bind({});
