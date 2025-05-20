document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 10000;

// Функция показа слайда
function showSlide(n) {
    // Зацикливание слайдов
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;
    
    // Скрываем все слайды
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Убираем активные точки
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Показываем текущий слайд
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Следующий слайд
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Предыдущий слайд
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Автопрокрутка
function startAutoSlide() {
    // Очищаем предыдущий интервал, если он был
    stopAutoSlide();
    // Устанавливаем новый интервал с задержкой 10 секунд
    slideInterval = setInterval(nextSlide, slideDelay);
}

// Остановка автопрокрутки
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Инициализация
function initSlider() {
    showSlide(0);
    startAutoSlide();
    
    // Обработчики событий
    nextBtn.addEventListener('click', function() {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', function() {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    // Клики по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
        });
    });
    
    // Пауза при наведении
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    }

// Запускаем слайдер
initSlider();
});
