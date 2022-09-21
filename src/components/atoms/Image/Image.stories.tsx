import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const icon_Image = Template.bind({});
icon_Image.args = {
  src: '',
  icon: true,
};

export const small_Image = Template.bind({});
small_Image.args = {
  src: '',
  small: true,
};

export const large_Image = Template.bind({});
large_Image.args = {
  src: '',
  large: true,
};
