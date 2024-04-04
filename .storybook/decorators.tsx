import { Decorator, StoryFn } from '@storybook/react';

interface Themes {
  cssPath: string;
  backgroundColor: string;
}

const themesData: { [key: string]: Themes } = {
  'corporate-light': {
    cssPath: '/node_modules/@boston-scientific/anatomy-tokens/lib/css/corporate/light.css',
    backgroundColor: 'var(--surface-default)'
  },
  'corporate-dark': {
    cssPath: '/node_modules/@boston-scientific/anatomy-tokens/lib/css/corporate/dark.css',
    backgroundColor: 'var(--surface-default)'
  },
  'watchman-light': {
    cssPath: '/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/light.css',
    backgroundColor: 'var(--surface-default)'
  },
  'watchman-dark': {
    cssPath: '/node_modules/@boston-scientific/anatomy-tokens/lib/css/watchman/dark.css',
    backgroundColor: 'var(--surface-default)'
  }
};

const withThemeWrapper: Decorator = (Story: StoryFn, context) => {
  const stylesheetLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('link[rel="stylesheet"]');
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
      document.body.style.background = themes.backgroundColor;
      replaceStylesheetLink(stylesheetLink, themes.cssPath);

      if (previewBg) {
        previewBg.style.backgroundColor = themes.backgroundColor;
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
