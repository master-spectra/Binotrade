window.addEventListener('DOMContentLoaded', function(e) {
	'use strict';
	
	// Добавляем нужные переменные 
	let 
		tabList 	= document.querySelector('.header-deposit'), 
		tab 		= document.querySelectorAll('.tab'),
		tabContent 	= document.querySelectorAll('.tab-content');

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
