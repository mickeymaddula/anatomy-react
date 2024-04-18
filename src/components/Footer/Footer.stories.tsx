/// <reference types="vite-plugin-svgr/client" />

import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import Footer from './Footer';
import { navItems, navItemsIntermediate, legalLinks, socialLinks } from './footerData';
import LogoTagline from '../../stories/assets/logo-bsc-tagline.svg?react';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Playground: Story = {
  args: {
    navItems: navItems,
    logo: {
      src: <LogoTagline />
    }
  }
};

export const Simple: Story = {
  args: {
    legalLinkItems: legalLinks,
    logo: {
      src: <LogoTagline />
    },
    corporateLink: true,
    texts: {
      tagline:
        'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.'
    },
    customizeCookiesLink: 'docs-demo-link',
    complianceCode: '123456789',
    socialMedia: socialLinks
  }
};

export const Intermediate: Story = {
  args: {
    navItems: navItemsIntermediate,
    ...Simple.args
  }
};

export const Complex: Story = {
  args: {
    navItems,
    ...Simple.args
  }
};
