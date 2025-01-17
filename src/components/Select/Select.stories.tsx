import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Select from './Select';
import Option from '../Option';
import { errorText, helpText } from '../../stories/helpers';

const meta = {
  title: 'Components/Select',
  component: Select,
  decorators: componentDecorators,
  argTypes: {
    forceValidation: {
      if: { arg: 'filterSelect', truthy: false }
    },
    helpText: {
      if: { arg: 'filterSelect', truthy: false }
    },
    errorText: {
      if: { arg: 'filterSelect', truthy: false }
    },
    requiredText: {
      if: { arg: 'filterSelect', truthy: false }
    }
  }
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
    errorText,
    forceValidation: true,
    required: true
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

export const WithHelpAndError: Story = {
  name: 'With help and error',
  args: {
    label: 'Select',
    helpText,
    errorText,
    forceValidation: true
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

export const FilterSelect: Story = {
  name: 'Filter select',
  args: {
    label: 'Filter select',
    filterSelect: true
  },
  render: (args) => (
    <Select {...args}>
      <Option value="defaultOption" selected>
        All (Default)
      </Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select'
  },
  render: (args) => (
    <Select {...args} disabled>
      <Option value="" disabled selected />
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  )
};
