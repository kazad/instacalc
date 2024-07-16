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

      /*
      { text: 'Examples', link: '/examples' }
       */
    ],

    logo: 'https://instacalc.com/img/icons/ios/256.png',

    sidebar: [
      {
        /*text: 'Sections', */
        items: [
          { text: 'Quickstart', link: '/quickstart' },
          { text: 'Reference', link: '/reference' },
          { text: 'Helpful Features', link: '/features-basic' },
          { text: 'Advanced Features', link: '/features-advanced' },
          /*
          { text: 'Examples', link: '/examples' },
           */
          { text: 'Design Philosophy', link: '/design' },
          { text: 'Product Comparison', link: '/compare' },
          { text: 'vs. Wolfram Alpha', link: '/compare-wolfram' },
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
