import { defineConfig } from 'vitepress'

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
      { text: '講習概要', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/kageki128/unity-design-workshop' }
    ],
    sidebar: [
      {
        text: '案内',
        items: [
          { text: 'この講習会について', link: '/about' }
        ]
      },
      {
        text: '講習資料',
        items: [
          { text: '第1回 良いコード', link: '/1st' },
          { text: '第2回 クラス設計', link: '/2nd' },
          { text: '第3回 アーキテクチャ', link: '/3rd' }
        ]
      }
    ],
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
