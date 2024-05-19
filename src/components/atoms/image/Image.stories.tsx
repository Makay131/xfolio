import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: '150px',
    height: '150px',
  },
};
