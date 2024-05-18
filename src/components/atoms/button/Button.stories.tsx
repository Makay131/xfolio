import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'light', 'dark'],
      control: { type: 'multi-select' },
    },
  },
  args: {
    context: 'button text',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Light: Story = {
  args: {
    variant: 'light',
  },
};
export const Dark: Story = {
  args: {
    variant: 'dark',
  },
};
