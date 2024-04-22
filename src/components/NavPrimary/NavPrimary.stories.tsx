/// <reference types="vite-plugin-svgr/client" />

import type { Meta, StoryObj } from '@storybook/react';
import { componentDecorators } from '../../../.storybook/decorators';

import NavPrimary from './NavPrimary';
import LogoTagline from '../../stories/assets/logo-bsc-tagline.svg?react';
import LogoBsc from '../../stories/assets/logo-bsc.svg?react';
import LogoDemo from '../../stories/assets/logo-demo.svg?react';
import { complexData, intermediateData, simpleData, utilityData } from './navPrimaryData';

const meta = {
  title: 'Components/Primary navigation',
  component: NavPrimary,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '42rem'
      }
    }
  },
  decorators: componentDecorators,
  tags: ['autodocs'],
  argTypes: {
    navItems: {
      // TODO: ADS-755 Figure out how to show this control by resolving cyclic object error when shown (occurs on navigation)
      control: false
    },
    utilityItems: {
      control: false
    },
    searchResults: {
      control: false
    },
    texts: {
      control: false
    }
  },
  args: {
    logo: {
      src: <LogoTagline />,
      alt: 'Boston Scientific',
      href: '.'
    },
    navigateToSearchResult: (result) => (window.location.href = result.href as string),
    location: window.location,
    utilityItems: utilityData
  }
} satisfies Meta<typeof NavPrimary>;

export default meta;
type Story = StoryObj<typeof NavPrimary>;

export const Playground: Story = {
  args: {
    navItems: intermediateData
  }
};

export const Simple: Story = {
  args: {
    navItems: simpleData
  }
};

export const Intermediate: Story = {
  args: {
    navItems: intermediateData
  }
};

export const Complex: Story = {
  args: {
    navItems: complexData
  }
};

export const Cobranded: Story = {
  args: {
    navItems: simpleData,
    logo: {
      src: <LogoDemo />,
      alt: 'Demo logo'
    },
    logoSecondary: {
      src: <LogoBsc />,
      alt: 'Boston Scientific'
    }
  }
};
Cobranded.storyName = 'Co-branded';
