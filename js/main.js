AOS.init();

window.addEventListener('DOMContentLoaded', function(e) {
	'use strict';
	
	// Добавляем нужные переменные 
	let 
		tabList 			= document.querySelector('.header-deposit'), 
		tab 				= document.querySelectorAll('.tab'),
		tabContent 			= document.querySelectorAll('.tab-content'),
		btnOverlay 			= document.querySelector('.btn-overlay'),
		form 				= document.querySelectorAll('.form-sign'),
		btnCloseWindow 		= document.querySelectorAll('.btn-close-window'),
		btnSignInUp 		= document.querySelectorAll('.btn-sign-in-up');

	btnOverlay.addEventListener('click', function(e) { // используем делегирование для этого задаем родителю кнопок событие
		if (e.target && e.target.classList.contains('btn-sign-in-up')) { // проверяем по условию что юзур нажмёт именно на кнопки
			let target = e.target; // создаем переменную и записоваем в нею ту кнопку на которую нажали 

			for (let i = 0; i < btnSignInUp.length; i++) { // перебираем масив с кнопками дабы в будущем связать их  кнопками 
				if (target == btnSignInUp[i]) { // проверяем равна ли кнопка на которую нажали с темы которые в массиве
					form.forEach(function(i) { // перебираем масив с формой и удаляем класс active-modal 
						i.classList.remove('active-modal');
					});

					form[i].classList.add('active-modal'); // добавляем класс active-modal 

					setTimeout(function() {
						form[i].style.opacity = "1"; // делаем задержку в 301 мс 
					}, 301);
				}
			}
		}
	});

	btnCloseWindow.forEach(function(item) {
		item.addEventListener('click', function() {
			form.forEach(function(elem) {
				elem.classList.remove('active-modal');
			});
		});
	});

	tabList.addEventListener('click', function(e) {
		if (e.target && e.target.classList.contains('tab')) {
			let target = e.target;

			e.preventDefault(); // отключаем не нужные действия браузера

			for (let i = 0; i < tab.length; i++) { // создаем цикл который будет перебирать все табы 
				if (target == tab[i]) {
					tabContent.forEach(function(item) {
						item.classList.remove('active'); // перебираем через ForEach все таб-контенты и удаляем класс active  
					});

					tabContent[i].classList.add('active'); // и добавляем определенному таб-контенту class active 
				}
			} 
		}
	});
});
