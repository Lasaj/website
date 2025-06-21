// Load header and footer
console.log("includes.js script has started loading!");
async function loadHTMLInclude(elementID, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementID);
        if (element) {
            element.innerHTML = html;
        } else {
            console.error(`${element} not found`);
        }
    } catch (error) {
        console.error(`Could not load from ${filePath}:`, error);
    }
}

// Call to load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content fully loaded, loading header and footer...");
    loadHTMLInclude('siteHeaderPlaceholder', 'header.html');
    loadHTMLInclude('siteFooterPlaceholder', 'footer.html');
});