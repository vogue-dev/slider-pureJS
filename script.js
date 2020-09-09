let _slider = document.querySelector('#slider');
let _sliders = document.querySelectorAll('.slider__item');
let _prev = document.querySelector('.button__prev');
let _next = document.querySelector('.button__next');
let autoSlides = true; // автопролистывание слайдов - true/false
let speedAutoSlides = 4 * 1000; // скорость пролистывания - в секундах
currentSlider = 0; // стартовое положение слайдера - transform: translateX (0%)

function SliderWorks() {
	return function () {
		console.log('start', `currentSlide - ${currentSlider}`);

		function setNextSlider() {
			if (currentSlider < _sliders.length - 1) {
				currentSlider += 1;
				transformValue = -100 * currentSlider;
				_slider.style.transform = 'translateX(' + transformValue + '%)';
				clearTimeout(timer);
				timer = setInterval(setNextSlider, speedAutoSlides);
			}
			console.log('setNextSlider', `currentSlide - ${currentSlider}`, `timerID = ${timer}`);
		}

		function setPrevSlider() {
			if (currentSlider > 0) {
				currentSlider -= 1;
				transformValue = -100 * currentSlider;
				_slider.style.transform = 'translateX(' + transformValue + '%)';
				clearTimeout(timer);
				timer = setInterval(setNextSlider, speedAutoSlides);
			}
			console.log('setPrevSlider', `currentSlide - ${currentSlider}`, `timerID = ${timer}`);
		}

		_next.addEventListener('click', setNextSlider);
		_prev.addEventListener('click', setPrevSlider);
		autoSlides ? (timer = setInterval(setNextSlider, speedAutoSlides)) : '';

		console.log('end', `currentSlide - ${currentSlider}`, `timerID = ${timer}`);
	};
}

// 1. создавать нужное количество точек
// 2. проверять что бы index = точке, сделать active класс
// 3. по нажатию - переходил на нужный слайд

SliderWorks()();
