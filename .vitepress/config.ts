import { defineConfig } from 'vitepress'
import { generatedSidebar } from './sidebar.generated'

export default defineConfig({
  lang: 'ja-JP',
  title: 'Unity設計講習会',
  description: 'サークル内で開催したUnity設計講習会の資料',
  base: '/unity-design-workshop/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=M+PLUS+1p:wght@400;700&display=swap'
    }]
  ],
  themeConfig: {
    siteTitle: 'Unity設計講習会',
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '講習会概要', link: '/about' },
      { text: '第1回', link: '/text/chapter-1/' },
      { text: '第2回', link: '/text/chapter-2/' },
      { text: '第3回', link: '/text/chapter-3/' },
      { text: 'GitHub', link: 'https://github.com/kageki128/unity-design-workshop' }
    ],
    sidebar: generatedSidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kageki128/unity-design-workshop' }
    ],
    footer: {
      message: 'Unity設計講習会 資料公開ページ',
      copyright: 'Copyright © 2026 kageki128'
    }
  }
})
