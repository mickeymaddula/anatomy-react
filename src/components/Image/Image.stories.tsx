import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Image from './Image';
import { IMAGE_RATIO_OPTIONS } from './Image.types';

/**
 * The 50:50 ratio should not be used in a standalone Image, but needs to be
 * available for when it's a child of some other components (e.g. ProductCard).
 */
const ratioOptions = IMAGE_RATIO_OPTIONS.filter((option) => option !== '50:50');

const ratioOptionsString = ratioOptions.map((ratio) => `"${ratio}"`).join(', ');

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      options: [...ratioOptions],
      table: {
        type: { summary: ratioOptionsString }
      }
    }
  }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Playground: Story = {
  args: {
    src: '/assets/images/50-50-split.jpg',
    alt: 'Demo placeholder for an image.',
    ratio: '16:9',
    texts: {
      caption: 'This is an image caption.'
    }
  }
};
