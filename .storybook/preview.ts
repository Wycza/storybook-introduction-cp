import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// https://yesviz.com/viewport/

const customViewports = {
  huaweiP20Pro: {
    name: 'Huawei P20 Pro',
    styles: {
      width: '360px',
      height: '747px',
    },
  },
  xs: {
    name: 'XS',
    styles: {
      width: '350px',
      height: '963px',
    },
  },
  sm: {
    name: 'SM',
    styles: {
      width: '600px',
      height: '801px',
    },
  },
  md: {
    name: 'MD',
    styles: {
      width: '900px',
      height: '801px',
    },
  },
  lg: {
    name: 'LG',
    styles: {
      width: '1200px',
      height: '801px',
    },
  },
  xl: {
    name: 'XL',
    styles: {
      width: '1536px',
      height: '801px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      defaultViewport: 'xl',
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      // default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '000',
        },
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
  },
};

export default preview;
