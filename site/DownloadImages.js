const lazyLoadImages = () => {
    // Находим все изображения с классом 'lazy-load' на странице
    const images = document.querySelectorAll('img.lazy-load');
    const config = {
        rootMargin: '0px 0px',
        threshold: 0.1
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если элемент стал видимым
            if (entry.isIntersecting) {
                const img = entry.target; // Получаем текущее изображение
                img.src = img.dataset.src; // Устанавливаем реальный источник изображения
                img.classList.remove('lazy-load');
                observer.unobserve(img);  // Прекращаем наблюдение за этим изображением
            }
        });
    }, config)
    // Начинаем наблюдать за каждым изображением
    images.forEach(image => {
        observer.observe(image); 
    });
}
// Вызов функции отложенной загрузки при загрузке страницы
window.onload = lazyLoadImages;
