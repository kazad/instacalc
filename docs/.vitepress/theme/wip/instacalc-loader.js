// File: .vitepress/theme/instacalc-loader.js

export default function loadInstaCalc() {
    if (typeof window !== 'undefined') {
        // Check if there are any <instacalc> tags on the page
        if (document.getElementsByTagName('instacalc').length > 0) {
            // Load the main InstaCalc script
            const script = document.createElement('script')
            script.src = 'https://instacalc.com/dist/main.min.js'
            script.onload = () => {
                // Once the main script is loaded, load the render script
                const renderScript = document.createElement('script')
                renderScript.src = 'https://instacalc.com/demo/instacalc.render.js'
                renderScript.onload = () => {
                    // Once both scripts are loaded, render the InstaCalc elements
                    if (typeof IC !== 'undefined' && typeof IC.render === 'function') {
                        IC.render()
                    }
                }
                document.head.appendChild(renderScript)
            }
            document.head.appendChild(script)
        }
    }
}