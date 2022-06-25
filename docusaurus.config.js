// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {any} */
const lightCodeTheme = require('prism-react-renderer/themes/github');
/** @type {any} */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'myBot',
  tagline: 'Cheap custom bots',
  url: 'https://mybot.host',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gfx/favicon.ico',

  organizationName: "ethhaqn.github.io",
  projectName: "mybot-docs",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: "/changelog",
          path: 'changelog',
          blogTitle: "Changelog",
          blogDescription: "myBot's history of updates",
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Changelogs',
          archiveBasePath: null,
          postsPerPage: 'ALL',
          showReadingTime: false
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    metadata: [
      { name: "title", content: "myBot Documentation" },
      { name: "keywords", content: "discord bot, cheap, discord, bot" },
      { name: "theme-color", content: "#1e8ef7" }
    ],

    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
      },
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Logo',
        src: 'img/gfx/logo.svg',
        href: '/docs/',
      },
      items: [
        {
          to: 'changelog',
          label: 'Changelog',
          position: 'left'
        },
        {
          href: 'https://discord.mybot.host',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} | myBot`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
