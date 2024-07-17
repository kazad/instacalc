// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// export default DefaultTheme

import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // This is where we could add global components or directives if needed
    },
    setup() {
        const route = useRoute()

        const renderInstaCalc = () => {
            if (typeof ICEmbed !== 'undefined' && typeof ICEmbed.render === 'function') {
                ICEmbed.render()
            }
        }

        onMounted(() => {
            // Initial render
            nextTick(renderInstaCalc)
        })

        // Re-render on route change
        watch(() => route.path, () => nextTick(renderInstaCalc))
    }
}