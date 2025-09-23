import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Veeruby Learning Hub',
  tagline: 'Your gateway to AR/VR, AI, and Business learning paths.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment config
  url: 'https://lavanya-d19.github.io',
  baseUrl: '/Learning-Paths/',       // must have leading + trailing slash
  organizationName: 'lavanya-d19',   // ✅ lowercase username
  projectName: 'Learning-Paths',
  trailingSlash: false,              // ✅ avoids double slashes in URLs

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/', // Serve docs at site root
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Veeruby-Tech/Learning-Paths/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Veeruby-Tech/Learning-Paths/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Veeruby LMS',
      logo: {
        alt: 'Veeruby Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learning Paths',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Veeruby-Tech/Learning-Paths',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/company/veeruby-technologies/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://veeruby.com',
          label: 'Website',
          position: 'right',
        },
        {
          to: '/Onboarding/Intern_90_Day_Checklist',
          label: 'Internship Portal',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Learning Paths', to: '/'},
            {label: 'Onboarding', to: '/Onboarding'},
            {label: 'Forms', to: '/Forms/Feedback'},
          ],
        },
        {
          title: 'Company',
          items: [
            {label: 'Website', href: 'https://veeruby.com'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/veeruby-technologies/'},
            {label: 'GitHub', href: 'https://github.com/Veeruby-Tech/Learning-Paths'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Support Email', href: 'mailto:support@veeruby.com'},
            {label: 'Docs Feedback', href: 'mailto:feedback@veeruby.com'},
            {label: 'Internship Portal', to: '/Onboarding/Intern_90_Day_Checklist'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Veeruby Technologies Pvt. Ltd. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
