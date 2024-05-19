import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    type: {
      options: ['rounded', 'square'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Rounded: Story = {
  args: {
    src: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Placeholder Image',
    type: 'rounded',
  },
};

export const Square: Story = {
  args: {
    src: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Placeholder Image',
    type: 'square',
  },
};
