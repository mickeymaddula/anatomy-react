// TODO: Figure out why enter to open modal doesn't work in Docs but does in Playground
/// <reference types="vite-plugin-svgr/client" />

import { createRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Modal, { ModalRef } from './Modal';
import Button from '../Button';
import LogoTagline from '../../stories/assets/logo-bsc-tagline.svg?react';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  },
  args: {
    title: 'Modal title'
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// Playground
const playgroundRef = createRef<ModalRef>();
const positiveAction = <Button>Positive action</Button>;

export const Playground: Story = {
  args: {
    positiveAction,
    negativeAction: <Button onClick={() => playgroundRef.current?.close()}>Cancel</Button>
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => playgroundRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={playgroundRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};

// Required Action
const requiredActionRef = createRef<ModalRef>();
export const RequiredAction: Story = {
  name: 'Required action',
  args: {
    positiveAction,
    negativeAction: <Button onClick={() => requiredActionRef.current?.close()}>Cancel</Button>,
    hasClose: false
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => requiredActionRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={requiredActionRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};

// Single Action
const singeActionRef = createRef<ModalRef>();
export const SingleAction: Story = {
  name: 'Single action',
  args: {
    positiveAction
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => singeActionRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={singeActionRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};

// With logo
const withLogoRef = createRef<ModalRef>();
export const WithLogo: Story = {
  name: 'With logo',
  args: {
    positiveAction,
    negativeAction: <Button onClick={() => withLogoRef.current?.close()}>Cancel</Button>,
    logo: <LogoTagline />,
    logoAlt: 'Boston Scientific logo'
  },
  render: (args) => (
    <>
      <Button type="button" aria-haspopup="true" onClick={() => withLogoRef.current?.showModal()}>
        Open modal
      </Button>
      <Modal ref={withLogoRef} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl, congue
        bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante sollicitudin in.
        Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
      </Modal>
    </>
  )
};
