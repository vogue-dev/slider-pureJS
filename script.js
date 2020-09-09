let _slider = document.querySelector('#slider');
let _sliders = document.querySelectorAll('.slider__item');
let _prev = document.querySelector('.button__prev');
let _next = document.querySelector('.button__next');
let autoSlides = false;
let speedAutoSlides = 1 * 1000; // 1 sec
currentSlider = 0;

function SliderWorks() {
	return function () {
		console.log('000', currentSlider);
		function setNextSlider() {
			if (currentSlider < _sliders.length - 1) {
				currentSlider += 1;
				transformValue = -100 * currentSlider;
				_slider.style.transform = 'translateX(' + transformValue + '%)';
				timer = clearTimeout(timer);
				timer = setInterval(setNextSlider, speedAutoSlides);
			}
			console.log('111', currentSlider);
		}

		function setPrevSlider() {
			if (currentSlider > 0) {
				currentSlider -= 1;
				transformValue = -100 * currentSlider;
				_slider.style.transform = 'translateX(' + transformValue + '%)';
				timer = clearTimeout(timer);
				timer = setInterval(setNextSlider, speedAutoSlides);
			}
			console.log('222', currentSlider);
		}

		_next.addEventListener('click', setNextSlider);
		_prev.addEventListener('click', setPrevSlider);
		autoSlides ? (timer = setInterval(setNextSlider, speedAutoSlides)) : '';
	};
}

// 1. создавать нужное количество точек
// 2. проверять что бы index = точке, сделать active класс
// 3. по нажатию - переходил на нужный слайд

SliderWorks()();
