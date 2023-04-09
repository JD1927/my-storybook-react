import { Meta, StoryObj } from '@storybook/react';
import { MyLabel, Props } from '../../components/MyLabel';

const meta: Meta<typeof MyLabel> = {
  title: 'UI/My Label',
  component: MyLabel,
  argTypes: {
    size: {
      control: 'select'
    },
    fontColor: {
      control: 'color'
    },
  }
};
export default meta;

type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
  args: {
    size: 'normal',
    allCaps: false,
  }
};
export const AllCaps: Story = {
  args: {
    size: 'normal',
    allCaps: true,
  }
};
export const Secondary: Story = {
  args: {
    size: 'normal',
    color: 'secondary',
  }
};
export const Tertiary: Story = {
  args: {
    size: 'normal',
    color: 'tertiary',
  }
};
export const CustomFontColor: Story = {
  args: {
    size: 'h1',
    fontColor: '#5517ac',
  }
};