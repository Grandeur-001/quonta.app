document.querySelectorAll(`.links`).forEach((link_s) => {
	link_s.addEventListener(`click`, (anchor) => {

		anchor.preventDefault();

		const thisHref = link_s.getAttribute(`href`);
        const bouncingCircles = document.querySelector(`.bouncing_circles`);
		preloaderAnimation.classList.add(`show_preloader`);
        bouncingCircles.style.display = `none`;

		setTimeout(() => {
			preloaderAnimation.classList.remove(`show_preloader`);
			window.location.href = thisHref;}, 900);
	});

   
});