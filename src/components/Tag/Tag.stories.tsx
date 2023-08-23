import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  render: (args) => <Tag {...args}>Tag text</Tag>
};