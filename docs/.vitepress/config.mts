import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Instacalc Help Center",
  description: "Guides / Reference / Examples",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'instacalc.com', link: 'https://instacalc.com' },
      { text: 'Quickstart', link: '/quickstart' }, 
      { text: 'Reference', link: '/reference' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: [
      {
        text: 'Sections',
        items: [
          { text: 'Reference', link: '/reference' },
          { text: 'Examples', link: '/examples' },
          { text: 'Design', link: '/design' },
          { text: 'Comparison', link: '/compare' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kazad/instacalc' }
    ],
    search: {
      provider: 'local'
    }
  }
})
