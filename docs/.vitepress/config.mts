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
     /* 
      { text: 'Quickstart', link: '/quickstart' }, 
       */
      { text: 'Reference', link: '/reference' },
      { text: 'Examples', link: '/examples' }
    ],

    logo: 'https://instacalc.com/img/icons/ios/256.png',

    sidebar: [
      {
        /*text: 'Sections', */
        items: [
          { text: 'Reference', link: '/reference' },
          { text: 'Helpful Features', link: '/features-basic' },
          { text: 'Advanced Features', link: '/features-advanced' },
          { text: 'Examples', link: '/examples' },
          { text: 'Design', link: '/design' },
          { text: 'Comparison', link: '/compare' },
          { text: 'vs. Wolfram Alpha', link: '/compare-wolfram' }
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
