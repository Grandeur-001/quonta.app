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
		menuItems.style.opacity = `1`;
		menuItems.style.transform = `translateX(0)`;
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










let prevWindowWidth = window.innerWidth;  // Track the previous window width

function initSwiper() {
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
	scrollX: true,
	scrollY: false,
    mousewheel: false,  // Disable mousewheel scrolling on the main slider
    pagination: {
      el: `.blog-slider__pagination`,
      clickable: true,
	  
    }
	
  });

  // Add a separate mousewheel event listener only to the pagination element
  const paginationEl = document.querySelector('.swiper-pagination-bullets');
  paginationEl.addEventListener('', function(e) {
    e.preventDefault(); // Prevent default scrolling behavior

    // Determine the direction of scroll and navigate the slider accordingly
    if (e.deltaX > 3) {
      swiper.slideNext(); // Scroll down to next slide
    } else {
      swiper.slidePrev(); // Scroll up to previous slide
    }
  });
}
// Initialize the Swiper on page load 
initSwiper();






document.addEventListener('contextmenu', (event) => event.preventDefault());
document.onkeydown = function(e) {
    // Disable F12, Ctrl+Shift+I (Inspector), Ctrl+Shift+J (Console), Ctrl+U (View Source)
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) { // Ctrl+U
        return false; // Prevent the event
    }
};


const countriesArray = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad",
    "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon",
    "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar",
    "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
    "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo",
    "Tunisia", "Uganda", "Zambia", "Zimbabwe","Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador",
    "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States","Argentina", "Bolivia", "Brazil", "Chile", "Colombia", 
	"Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
];

const peopleNamesArray = [
    "Ahmed", "João", "Kofi", "Thabo", "Youssef", "Nia", "Joaquim", "Emeka", "Gaston", "Mahamat",
    "Fatou", "Denis", "Blaise", "Rashid", "Amira", "Carmen", "Selah", "Amina", "Thandiwe", "Youssef",
    "Aisha", "Kwame", "Mohammed", "Chinua", "Marie", "Lerato", "Winston", "Maya", "Zara", "Tinashe",
    "Eli", "Salim", "Fatima", "Musa", "Sofia", "Samira", "Zuri", "Diana", "Sibusiso", "Zahara",
    "Noah", "Amani", "Lina", "Chima", "Ifeoma", "Nadine", "Patrice", "Amani", "Zachary", "Enzo", "Derek", 
	"Chad", "Jamal", "Ethan", "Liam", "Maria", "Carlos", "Michelle", "Isaiah", "Santiago",
    "Avery", "Juliana", "Jordan", "Hannah", "Logan", "Emily", "Noah", "Eliana", "Sophia", "Amara",
    "Lucas", "Dylan", "Madison", "Zoe", "Elijah", "Isabella", "Mia", "Olivia", "Camila", "Levi",
	"Mateo", "Rafael", "Sofia", "Valentina", "Pablo", "Camila", "Mateo", "Ana", "Nicolas", "Bianca",
    "Luna", "Gabriel", "Felipe", "Fernanda", "Lucia", "Tiago", "Isabella", "Ruben", "Julia", "Mariana",
    "Thiago", "Carla", "Samuel", "Bianca", "Bruno", "Luiza", "Joaquim", "Gustavo", "Rafaela", "Pedro"
];

const numbersArray = [
    9000, 4200, 1500, 8500, 106000, 112500, 3010, 5040, 2080, 6001,
    7200, 9999, 3055, 4021, 6000, 1001, 8563, 7400, 4500, 123456,
    4204, 2123, 1010, 3030, 9400, 4321, 1080, 2500, 9876, 1200,
    5500, 8501, 6720, 4501, 8015, 1023, 9401, 5120, 6002, 3040,
    8200, 4325, 2000, 6150, 8888, 7650, 4503, 6400, 5700, 7100,
    6005, 1050, 7020, 9998, 8530, 5045, 4078, 1005, 3067, 1505
];

let currentIndex  = 0;
let currentIndex2  = 0;
let currentIndex3  = 0;
const countryDisplay = document.querySelector(`.country`);
const peopleNamesDisplay = document.querySelector(`.name`);
const amountNum = document.querySelector(`.amount`);

setInterval(() => {
	countryDisplay.textContent = countriesArray[currentIndex];
	currentIndex = (currentIndex + 1) % countriesArray.length;
}, 4000);

setInterval(() => {
	peopleNamesDisplay.textContent = peopleNamesArray[currentIndex2];
	currentIndex2 = (currentIndex2 + 1) % peopleNamesArray.length;
}, 4000);

setInterval(() => {
	amountNum.textContent = `$` + numbersArray[currentIndex3];
	currentIndex3 = (currentIndex3 + 1) % numbersArray.length;
}, 4000);


