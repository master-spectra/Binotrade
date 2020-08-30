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

	btnOverlay.addEventListener('click', function(e) {
		if (e.target && e.target.classList.contains('btn-sign-in-up')) {
			let target = e.target;

			for (let i = 0; i < btnSignInUp.length; i++) {
				if (target == btnSignInUp[i]) {
					form.forEach(function(i) {
						i.classList.remove('active-modal');
					});

					form[i].classList.add('active-modal');

					setTimeout(function() {
						form[i].style.opacity = "1";
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
