let _slider = document.querySelector('#slider');
let _sliders = document.querySelectorAll('.slider__item');
let _prev = document.querySelector('.button__prev');
let _next = document.querySelector('.button__next');
let _dotsField = document.querySelector('.dots__field');
let { prevDot, nextDot } = true;

let autoSlides = false; // автопролистывание слайдов - true/false
let speedAutoSlides = 4 * 1000; // скорость пролистывания - в секундах
indexOfCurrentSlide = 0; // стартовое положение слайдера - transform: translateX (0%)

function SliderWorks() {
	return function () {
		let numbersOfAllSliders = _sliders.length;
		console.log('start', `indexOfCurrentSlide - ${indexOfCurrentSlide}`);

		// ------------------------------------------------------------------------------------------------ //
		//				    	 Функции пролистывания слайдов вперед/назад
		// ------------------------------------------------------------------------------------------------ //

		// Функция пролистывания слайдов вперед по нажатию на <<<
		function setNextSlider() {
			if (indexOfCurrentSlide < numbersOfAllSliders - 1) {
				indexOfCurrentSlide += 1;
				transformValue = -100 * indexOfCurrentSlide;
				_slider.style.transform = 'translateX(' + transformValue + '%)';
				nextDot = true;
				checkedActiveDot(indexOfCurrentSlide, nextDot);

				// удаление существующего и создание нового таймера
				if (autoSlides === true) {
					clearTimeout(timer);
					timer = setInterval(setNextSlider, speedAutoSlides);
				}
			}
			// console.log
			autoSlides === true
				? console.log(
						'setNextSlider',
						`indexOfCurrentSlide - ${indexOfCurrentSlide}`,
						`timerID = ${timer}`
				  )
				: console.log('setNextSlider', `indexOfCurrentSlide - ${indexOfCurrentSlide}`);
			// -----------
		}

		// Функция пролистывания слайдов вперед по нажатию на >>>
		function setPrevSlider() {
			if (indexOfCurrentSlide > 0) {
				indexOfCurrentSlide -= 1;
				transformValue = -100 * indexOfCurrentSlide;
				_slider.style.transform = 'translateX(' + transformValue + '%)';
				checkedActiveDot(indexOfCurrentSlide, (prevDot = true));

				// удаление существующего и создание нового таймера
				if (autoSlides === true) {
					clearTimeout(timer);
					timer = setInterval(setNextSlider, speedAutoSlides);
				}
			}
			console.log(
				'setPrevSlider',
				`indexOfCurrentSlide - ${indexOfCurrentSlide}`,
				`timerID = ${timer}`
			);
		}

		// console.log
		autoSlides === true
			? console.log(
					'setNextSlider',
					`indexOfCurrentSlide - ${indexOfCurrentSlide}`,
					`timerID = ${timer}`
			  )
			: console.log('setNextSlider', `indexOfCurrentSlide - ${indexOfCurrentSlide}`);
		// -----------

		// ------------------------------------------------------------------------------------------------ //
		//							 КОНЕЦ ФУНКЦИЙ ПЕРЕЛИСТЫВАНИЯ, НАЧАЛО DOTS/ТОЧЕК
		// ------------------------------------------------------------------------------------------------ //

		function dotsCreater(num) {
			for (i = 0; i < num; i++) {
				_createDots = document.createElement('div');
				_createDots.className = 'dot';
				_dotsField.appendChild(_createDots);
			}
		}

		function checkedActiveDot(indexOfCurrentSlide, param) {
			let _allDots = document.querySelectorAll('.dot');
			indexOfCurrentSlide === 0 ? _allDots[0].classList.add('active') : '';

			if (param === nextDot && indexOfCurrentSlide < _allDots.length) {
				if (indexOfCurrentSlide === 0) {
					_allDots[indexOfCurrentSlide].classList.add('active');
				} else {
					_allDots[indexOfCurrentSlide - 1].classList.remove('active');
					_allDots[indexOfCurrentSlide].classList.add('active');
				}
			}

			if (param === prevDot) {
				_allDots[indexOfCurrentSlide].classList.add('active');
				_allDots[indexOfCurrentSlide + 1].classList.remove('active');
			}
		}

		// ------------------------------------------------------------------------------------------------ //
		//									    ЗАПУСКАЕМ ФУНКЦИИ
		// ------------------------------------------------------------------------------------------------ //

		_next.addEventListener('click', setNextSlider);
		_prev.addEventListener('click', setPrevSlider);
		autoSlides ? (timer = setInterval(setNextSlider, speedAutoSlides)) : '';
		dotsCreater(numbersOfAllSliders);
		checkedActiveDot(indexOfCurrentSlide);
	};
}

// [done] 1. создавать нужное количество точек
// [done] 2. проверять что бы index = точке, сделать active класс
// 3. по нажатию - переходил на нужный слайд

SliderWorks()();
