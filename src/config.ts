import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'XiaoBei',
  subtitle: '生活杂货铺',
  lang: 'zh_cn',
  themeHue: 100,
  banner: {
    enable: true,
    src: 'assets/images/sakura_background.webp',
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
      theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/XiaoBei77',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/touxiang.jpg',
  name: '小北',
  bio: '于是她说叶落了',
  links: [
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',
      url: 'https://twitter.com',
    },
    {
      name: 'bilibili',
      icon: 'fa6-brands:bilibili',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/XiaoBei77',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
