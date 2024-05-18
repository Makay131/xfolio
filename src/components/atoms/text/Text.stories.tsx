import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    type: {
      options: ['title', 'heading', 'paragraph', 'listItem', 'label'],
      control: { type: 'select' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'li'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    context: 'This is a text component',
    className: '',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const WithHighlight: Story = {
  args: {
    highlight: [1, 3],
  },
};
