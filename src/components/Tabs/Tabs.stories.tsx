import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Tabs from './Tabs';
import TabPanel from './TabPanel';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: componentDecorators,
  argTypes: {
    children: {
      control: false
    }
  },
  args: {
    tablistLabel: 'Demo tabs'
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabPanel tabName="Tab 1">Resize the browser to see how tabs overflow</TabPanel>
      <TabPanel tabName="Tab 2">Tab panel 2</TabPanel>
      <TabPanel tabName="Tab 3">Tab panel 3</TabPanel>
      <TabPanel tabName="Tab 4">Tab panel 4</TabPanel>
      <TabPanel tabName="Tab 5">Tab panel 5</TabPanel>
      <TabPanel tabName="Tab 6">Tab panel 6</TabPanel>
    </Tabs>
  )
};
