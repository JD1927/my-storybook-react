import { Meta, StoryObj } from '@storybook/react';
import { MyLabel, Props } from '../../components/MyLabel';

const meta: Meta<typeof MyLabel> = {
  title: 'UI/My Label',
  component: MyLabel,
};
export default meta;

type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
  args: {
    size: 'normal'
  }
};
export const AllCaps: Story = {
  args: {

  }
};
export const Secondary: Story = {
  args: {

  }
};