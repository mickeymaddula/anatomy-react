import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Link from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
  args: {
    href: 'docs-demo-link',
    children: 'Link'
  }
};
