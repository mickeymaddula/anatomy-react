import { Decorator, StoryFn } from '@storybook/react';
import axios from 'axios';

interface Themes {
  cssPath: string;
  backgroundColor: string;
  backgroundImage: string;
  backgroundPosition: string;
  backgroundSize: string;
}

const background = {
  backgroundColor: 'var(--surface-default)',
  backgroundImage:
    'linear-gradient(45deg, var(--surface-subtle) 25%, transparent 0), linear-gradient(135deg, var(--surface-subtle) 25%, transparent 0), linear-gradient(45deg, transparent 75%, var(--surface-subtle) 0), linear-gradient(135deg, transparent 75%, var(--surface-subtle) 0)',
  backgroundPosition: `
        0 0,
        0.75rem 0,
        0.75rem -0.75rem,
        0 0.75rem`,
  backgroundSize: `1.5rem 1.5rem`
};

const themesData: { [key: string]: Themes } = {
  'corporate-light': {
    cssPath: 'https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@x.y.z/lib/css/corporate/light.css',
    ...background
  },
  'corporate-dark': {
    cssPath: 'https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@x.y.z/lib/css/corporate/dark.css',
    ...background
  },
  'watchman-light': {
    cssPath: 'https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@x.y.z/lib/css/watchman/light.css',
    ...background
  },
  'watchman-dark': {
    cssPath: `https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@x.y.z/lib/css/watchman/dark.css`,
    ...background
  }
};

async function currentTokensVersion() {
  try {
    // TODO: ADS-1165 update to use stable anatomy-tokens when released
    const res = await axios.get(
      'https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens@5.0.0-beta.19/package.json'
    );
    const tokenVersion = res.data.version;

    for (const theme in themesData) {
      if (themesData.hasOwnProperty(theme)) {
        themesData[theme].cssPath = themesData[theme].cssPath.replace(
          'anatomy-tokens@x.y.z',
          `anatomy-tokens@${tokenVersion}`
        );
      }
    }
  } catch (error) {
    console.error('Error fetching anatomy-tokens version:', error);
    throw error;
  }
}

currentTokensVersion();

const withThemeWrapper: Decorator = (Story: StoryFn, context) => {
  const stylesheetLinks: NodeListOf<HTMLLinkElement> = document.body.querySelectorAll('link[rel="stylesheet"]');
  const previewBg = document.querySelector('.docs-story') as HTMLElement;

  function replaceStylesheetLink(stylesheetLink: HTMLLinkElement, href: string) {
    const newStylesheetLink = document.createElement('link');
    newStylesheetLink.rel = 'stylesheet';
    newStylesheetLink.href = href;

    if (stylesheetLink.parentNode) {
      stylesheetLink.parentNode.replaceChild(newStylesheetLink, stylesheetLink);
    }
  }

  stylesheetLinks.forEach((stylesheetLink) => {
    const theme = context.globals.theme;
    const themes = themesData[theme];

    if (themes) {
      document.body.style.backgroundColor = themes.backgroundColor;
      document.body.style.backgroundImage = themes.backgroundImage;
      document.body.style.backgroundPosition = themes.backgroundPosition;
      document.body.style.backgroundSize = themes.backgroundSize;
      replaceStylesheetLink(stylesheetLink, themes.cssPath);

      if (previewBg) {
        previewBg.style.backgroundColor = themes.backgroundColor;
        previewBg.style.backgroundImage = themes.backgroundImage;
        previewBg.style.backgroundPosition = themes.backgroundPosition;
        previewBg.style.backgroundSize = themes.backgroundSize;
      }
    }
  });

  return (
    <div className={context.globals.theme}>
      <Story />
    </div>
  );
};

export const componentDecorators = [withThemeWrapper];
