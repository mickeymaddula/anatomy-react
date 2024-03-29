import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Stoplight from './Stoplight';
import { STOPLIGHT_COLORS, STOPLIGHT_SIZES, STOPLIGHT_TEXT_COLORS } from './Stoplight.types';

const meta = {
  title: 'Components/Stoplight',
  component: Stoplight,
  parameters: {
    layout: 'centered'
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    lightColor: {
      options: [...STOPLIGHT_COLORS]
    },
    textColor: {
      options: [undefined, ...STOPLIGHT_TEXT_COLORS]
    },
    size: {
      options: [undefined, ...STOPLIGHT_SIZES]
    }
  }
} satisfies Meta<typeof Stoplight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    lightColor: 'red',
    children: 'Stoplight'
  }
};
