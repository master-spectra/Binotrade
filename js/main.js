'use strict';
// Добавляем нужные переменные 
let 
	tabList 	= document.querySelector('.header-deposit'), 
	tab 		= document.querySelectorAll('.tab'),
	tabContent 	= document.querySelectorAll('.tab-content');

tabList.addEventListener('click', function(e) {
	e.preventDefault(); // отключаем не нужные действия браузера
});

tab[0].addEventListener('click', function() {
	tabContent[0].classList.add('active'); // добавляем класс active 
	
	// удаляем класс active
	tabContent[1].classList.remove('active');
	tabContent[2].classList.remove('active');
	tabContent[3].classList.remove('active');
});

tab[1].addEventListener('click', function() {
	tabContent[1].classList.add('active'); // добавляем класс active 
	
	// удаляем класс active
	tabContent[0].classList.remove('active');
	tabContent[2].classList.remove('active');
	tabContent[3].classList.remove('active');
});

tab[2].addEventListener('click', function() {
	tabContent[2].classList.add('active'); // добавляем класс active 
	
	// удаляем класс active
	tabContent[0].classList.remove('active');
	tabContent[1].classList.remove('active');
	tabContent[3].classList.remove('active');
});

tab[3].addEventListener('click', function() {
	tabContent[3].classList.add('active'); // добавляем класс active 
	
	// удаляем класс active
	tabContent[0].classList.remove('active');
	tabContent[1].classList.remove('active');
	tabContent[2].classList.remove('active');
});