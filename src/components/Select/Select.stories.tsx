import type { Meta, StoryObj } from '@storybook/react';
import { errorText, helpText } from '../../stories/helpers';

import Select from './Select';
import Option from '../Option';

const meta = {
  title: 'Components/Select',
  component: Select
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  args: {
    label: 'Select'
  },
  render: (args) => (
    <Select {...args}>
      <Option value="" disabled selected />
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};

export const WithPlaceholder: Story = {
  name: 'With placeholder',
  args: {
    label: 'Select'
  },
  render: (args) => (
    <Select {...args}>
      <Option value="" disabled selected>
        Placeholder text
      </Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};

export const WithHelp: Story = {
  name: 'With help',
  args: {
    label: 'Select',
    helpText
  },
  render: (args) => (
    <Select {...args} label="Select">
      <Option value="" disabled selected />
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};

export const WithError: Story = {
  name: 'With error',
  args: {
    label: 'Select',
    errorText
  },
  render: (args) => (
    <Select {...args} label="Select" forceValidation required>
      <Option value="" disabled selected />
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};

export const WithHelpAndError: Story = {
  name: 'With help and error',
  args: {
    label: 'Select',
    helpText,
    errorText
  },
  render: (args) => (
    <Select {...args} label="Select" forceValidation>
      <Option value="" disabled selected />
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};
