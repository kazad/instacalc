import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
    enhanceApp({ app }) {
        app.mixin({
            setup() {
                const route = useRoute()

                const loadInstaCalc = () => {
                    if (document.body.innerHTML.includes('<instacalc>')) {
                        const script = document.createElement('script')
                        script.src = 'https://instacalc.com/dist/main.min.js'
                        script.onload = () => {
                            const renderScript = document.createElement('script')
                            renderScript.src = 'https://instacalc.com/demo/instacalc.render.js'
                            renderScript.onload = () => {
                                if (typeof IC !== 'undefined' && typeof IC.render === 'function') {
                                    IC.render()
                                }
                            }
                            document.head.appendChild(renderScript)
                        }
                        document.head.appendChild(script)
                    }
                }

                onMounted(loadInstaCalc)

                watch(() => route.path, () => {
                    // Use nextTick to ensure the DOM has updated
                    Vue.nextTick(loadInstaCalc)
                })
            }
        })
    }
}