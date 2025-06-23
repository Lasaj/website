// Load header and footer
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

// Fetches and loads images for the sidebar
async function loadGalleryImages() {
    try {
        const response = await fetch('gallery.html');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const galleryItems = doc.querySelectorAll('.gallery-item');
        const imgSrcs = [];

        galleryItems.forEach(item => {
            const imgElement = item.querySelector('img');
            if (imgElement) {
                const src = imgElement.getAttribute('src');
                if (src) {
                    imgSrcs.push(src);
                }
            }
        });

        // Get the fist image from gallery and set it as the recent image
        if (imgSrcs.length === 0) {
            console.warn('No image found in gallery');
            const placeholderDiv = document.getElementById('recentGalleryImagePlaceholder');
            if (placeholderDiv) {
                placeholderDiv.innerHTML = '<p>No image available</p>';
            }
        }

        const recentImageSrc = imgSrcs.shift();
        const recentImagePlaceholderDiv = document.getElementById('recentGalleryImagePlaceholder');
        if (recentImageSrc && recentImagePlaceholderDiv) {
            recentImagePlaceholderDiv.innerHTML = `
                Recent Shot:
                <a href = "gallery.html">
                    <img src="${recentImageSrc}">
                </a>
                `;
        }

        // Get a random image from gallery and set it as the random image
        if (imgSrcs.length === 0) {
            console.warn('No image found in gallery');
            const placeholderDiv = document.getElementById('randomGalleryImagePlaceholder');
            if (placeholderDiv) {
                placeholderDiv.innerHTML = '<p>No image available</p>';
            }
        }

        const randomIndex = Math.floor(Math.random() * imgSrcs.length);
        const randomImageSrc = imgSrcs[randomIndex];
        const randomImagePlaceholderDiv = document.getElementById('randomGalleryImagePlaceholder');
        if (randomImageSrc && randomImagePlaceholderDiv) {
            randomImagePlaceholderDiv.innerHTML = `
                From the archives:
                <a href = "gallery.html">
                    <img src="${randomImageSrc}">
                </a>
                `;
        }
            
    } catch (error) {
        console.error('Error fetching images', error);

        const recentPlaceholderDiv = document.getElementById('recentGalleryImagePlaceholder');
        if (recentPlaceholderDiv) {
            recentPlaceholderDiv.innerHTML = '<p>No image available</p>';
        }
        const randomPlaceholderDiv = document.getElementById('randomGalleryImagePlaceholder');
        if (randomPlaceholderDiv) {
            randomPlaceholderDiv.innerHTML = '<p>No image available</p>';
        }
    }
}

// Call to load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHTMLInclude('siteHeaderPlaceholder', 'header.html');
    loadHTMLInclude('siteFooterPlaceholder', 'footer.html');
    loadGalleryImages();
});