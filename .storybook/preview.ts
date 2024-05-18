import type { Preview } from '@storybook/react';
import '../src/global.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#161513' },
        { name: 'light', value: '#fff' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
