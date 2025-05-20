// Function to lazy load images
        const lazyLoadImages = () => {
            const images = document.querySelectorAll('img.lazy-load');
            const config = {
                rootMargin: '0px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src; // Set the real image source
                        img.classList.remove('lazy-load');
                        observer.unobserve(img); // Stop observing the image
                    }
                });
            }, config);

            images.forEach(image => {
                observer.observe(image); // Start observing each image
            });
        };

        // Call the lazy load function on page load
        window.onload = lazyLoadImages;