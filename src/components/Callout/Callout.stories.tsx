import type { Meta, StoryObj } from '@storybook/react';

import Callout from './Callout';
import { componentDecorators } from '../../../.storybook/decorators';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered'
  },
  decorators: componentDecorators,
  tags: ['autodocs']
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Callout'
  }
};
