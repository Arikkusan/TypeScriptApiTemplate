/**
 * This script is used to load the content of a page by loading specific components
 *  referenced into the project using '==<componentName>=='.
 *
 * ``` html
 * <body>
 *     ==header==  <!-- Load the header.html component -->
 *     <div>
 *         <h1>Home</h1>
 *         <p>Welcome to the home page</p>
 *    </div>
 *     ==footer==  <!-- Load the footer.html component -->
 *
 *     <script src="/js/PageLoader.js"></script> <!-- actual script that load the components -->
 *
 * </body>
 * ```
 */

const ANTI_LOOP_LIMIT = 50;

window.onload = async () => {
    const body = document.querySelector("body");

    body.innerHTML = await loadComponents(body.innerHTML);

    /*
        // Execute any script tags in the fetched content
        body.querySelectorAll('script').forEach(script => {
            const newScript = document.createElement('script');
            Object.assign(newScript, {
                innerHTML: script.innerHTML,
                src: script.src,
                async: script.async,
                defer: script.defer,
                type: script.type
            });
            script.parentNode.replaceChild(newScript, script);
        });*/

    // await new Promise(resolve => setTimeout(resolve, 200));
    document.getElementById('loading').style.display = 'none';
};

// Prevent infinite loops
let antiLoop = 0;

/**
 * Load the components referenced in a specified string content
 * @param bodyLines {string} the content to load the components from
 * @returns {Promise<string>} the content with the components loaded
 */
async function loadComponents(bodyLines) {

    // only get the lines that contain the components to implement
    const components = bodyLines.match(/==([^=]+)==/g);

    // if there are no components to load, return the content as is
    if (!components) return bodyLines;

    // map the components to their content
    const parts = [];
    for (let component of components) {
        const pagePath = component.substring(2, component.length - 2).trim();
        const pageContent = await fetch(`/components/${pagePath}.html`);

        if (!pageContent.ok) {
            parts[pagePath] = `Failed to fetch component: ${pagePath}`;
        } else if (antiLoop++ < ANTI_LOOP_LIMIT) {
            parts[pagePath] = await loadComponents(await pageContent.text());
        } else {
            parts[pagePath] = `<p style="color: red; font-weight: bold; text-align: center;">ERROR: Loop detected: ${pagePath}</p>`;
        }
    }

    // replace the component references with the fetched content (can't use async in replace)
    return bodyLines.replace(/==([^=]+)==/g, (match, pagePath) => parts[pagePath]);


}