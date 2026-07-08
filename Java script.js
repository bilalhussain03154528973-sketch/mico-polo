
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // ہر 4 سیکنڈ (4000ms) بعد بیک گراؤنڈ امیج تبدیل ہوگی
        setInterval(nextSlide, 4000);
    