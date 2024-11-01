const html = document.querySelector(`html`)
const body = document.querySelector(`body`);
const hamBurger = document.querySelector(`.hamburger`);
const mobileNavbar = document.querySelector(`.mobile_navbar`);
const checkNav = document.querySelector(`#check_nav`);
const allLinks = document.querySelector('.links');
const preloaderAnimation = document.querySelector(`.preloader_animation`);
const mobileNavigation = document.querySelector(`.navigation_wrapper`);



checkNav.addEventListener(`click`, () => {
	
	if(checkNav.checked){
		hamBurger.classList.add('is-active');
		mobileNavbar.style.setProperty(
			'transform',
			'translateX(+0)'
		);
		mobileNavbar.style.setProperty(
			'transition',
			'0.6s cubic-bezier(0.23, 1, 0.32, 1)'
		);
	

		
	}else {
		hamBurger.classList.remove('is-active');
		mobileNavbar.style.setProperty(
			'transform',
			'translateX(-50vh)'
		);

		mobileNavbar.style.setProperty(
			'transition',
			'1s'
		);


	};

});



document.addEventListener('DOMContentLoaded', () => {
	function jsMediaQueries() {

		if (!window.matchMedia("(max-width: 888px)").matches){
			hamBurger.classList.remove('is-active');
			mobileNavbar.style.setProperty(
				'transform',
				'translateX(-50vh)'
			);

		}else {
			// //////////
		}
	}
	jsMediaQueries();
	window.addEventListener('resize', jsMediaQueries);
});


const firstEntry = localStorage.getItem(`hasVisited`) === null;
if(firstEntry && performance.navigation.type === 0){
	localStorage.setItem(`hasVisited`, `true`);

	preloaderAnimation.classList.add(`show_preloader`);
	setTimeout(() => {
		preloaderAnimation.classList.remove(`show_preloader`);
		window.location.href = thisHref;}, 6000);

}
if(performance.navigation.type === 1) {
	preloaderAnimation.classList.add(`show_preloader`);
	setTimeout(() => {
		preloaderAnimation.classList.remove(`show_preloader`);
		window.location.href = thisHref;}, 6000);

}
else{
	preloaderAnimation.classList.remove(`show_preloader`);
}





document.querySelectorAll(`.links`).forEach((link_s) => { 
	link_s.addEventListener(`click`, (anchor) => {

		anchor.preventDefault();

		hamBurger.classList.remove('is-active');
		mobileNavbar.style.setProperty(
			'transform',
			'translateX(-50vh)'
		);
		mobileNavbar.style.setProperty(
			'transition',
			'2s'
		);

		const thisHref = link_s.getAttribute(`href`);
		preloaderAnimation.classList.add(`show_preloader`);
		
		setTimeout(() => {
			preloaderAnimation.classList.remove(`show_preloader`);
			window.location.href = thisHref;}, 3000);

	});

});








// ELEMENTS SLIDE-IN ANIMATION //
const items = document.querySelectorAll(`#move_in`);
window.addEventListener(`scroll`, startAnimation);

    function startAnimation() {
		const trigger = (window.innerHeight / 4.6 * 4);
		items.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;

			if(boxTop < trigger - 100){
				box.classList.add(`visible`);
			}
			else{
				box.classList.remove(`visible`)
			}
    })};













// document.addEventListener('contextmenu', (event) => event.preventDefault());
// document.onkeydown = function(e) {
//     // Disable F12, Ctrl+Shift+I (Inspector), Ctrl+Shift+J (Console), Ctrl+U (View Source)
//     if (e.keyCode == 123 || // F12
//         (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
//         (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || // Ctrl+Shift+J
//         (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) { // Ctrl+U
//         return false; // Prevent the event
//     }
// };

