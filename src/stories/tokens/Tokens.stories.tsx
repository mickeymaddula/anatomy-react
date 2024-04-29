import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';
import TokensTable from './TokensTable';

const meta = {
  title: 'Tokens/Tokens',
  component: TokensTable,
  decorators: componentDecorators,
  parameters: {
    layout: 'centered',
    options: {
      showPanel: false
    }
  }
} satisfies Meta<typeof TokensTable>;

export default meta;
type Story = StoryObj<typeof TokensTable>;

export const Playground: Story = {
  args: {
    theme: 'corporate',
    mode: 'light'
  }
};
