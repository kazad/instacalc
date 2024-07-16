import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Instacalc Help Center",
  description: "Guides / Reference / Examples",
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'instacalc.com', link: 'https://instacalc.com' },
      { text: 'Quickstart', link: '/quickstart' }, 
      { text: 'Reference', link: '/reference' },
    ],

    logo: 'https://instacalc.com/img/icons/ios/256.png',

    sidebar: [
      {
        text: 'Guides', 
        items: [
          { text: 'Quickstart', link: '/quickstart' },
          { text: 'Full Reference', link: '/reference' },
          { text: 'Guide: Financial', link: '/guide-finance' },
          { text: 'Guide: Programming', link: '/guide-programming' },
          { text: 'Guide: Excel', link: '/guide-excel' },
          { text: 'Guide: Construction', link: '/guide-construction' },
          { text: 'Guide: Unit Conversions', link: '/guide-conversion' },
          { text: 'Guide: Science/Engineering', link: '/guide-science' },
          { text: 'Guide: Formatting', link: '/guide-format' },
          { text: 'Guide: Sharing', link: '/guide-sharing' },
          
        ]
      },
      {
        text: 'Tips', 
        items: [
          { text: 'Helpful Features', link: '/features-basic' },
          { text: 'Advanced Features', link: '/features-advanced' },
        ]
      },
      {
        text: 'Apps', 
        items: [
          { text: 'iPhone/iPad/Mac', link: '/app-ios' },
          { text: 'Desktop / Android', link: '/app-pwa' },
        ]
      },
      {
        text: 'Musings',
        items:[
          { text: 'Design Philosophy', link: '/design' },
          { text: 'Product Comparison', link: '/compare' },
          { text: 'vs. Wolfram Alpha', link: '/compare-wolfram' },
        ]
      },
      {
        text: 'Other',
        items:[
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'Feedback on Github', link: 'https://github.com/kazad/instacalc/discussions' }
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
