const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector(".about");
// const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
	let scroll = window.pageYOffset;
	let sectionY = section.getBoundingClientRect();

	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${scroll * speed}px)`;
	});

	opacity.forEach(element => {
		element.style.opacity = scroll / (sectionY.top + section_height);
	})

	big_title.style.opacity = - scroll / (header_height / 2) + 1;
	shadow.style.height = `${scroll * 0.5 + 300}px`;
	// shadow.style.height = `${scroll * 0.5 + 300}px`;

	content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
	image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

	border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;

})



// eventListener stops at 713px


// let shouldAnimate = true; // Flag to control animation

// window.addEventListener('scroll', () => {
// 	if (!shouldAnimate) return; // Check if animation should continue

// 	let scroll = window.pageYOffset;
// 	let sectionY = section.getBoundingClientRect();

// 	translate.forEach(element => {
// 		let speed = element.dataset.speed;
// 		element.style.transform = `translateY(${scroll * speed}px)`;
// 	});

// 	opacity.forEach(element => {
// 		element.style.opacity = scroll / (sectionY.top + section_height);
// 	})

// 	big_title.style.opacity = - scroll / (header_height / 2) + 1;
// 	shadow.style.height = `${scroll * 0.5 + 300}px`;

// 	content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
// 	image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

// 	border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;

// 	// Check if scroll position exceeds a certain value
// 	if (scroll >= 713.5) {
// 		shouldAnimate = false; // Stop animation
// 		window.removeEventListener('scroll', scrollHandler); // Remove event listener
// 	}
// });




//  test 1 almost working


// let lastScrollTop = 0; // Variable to store the last scroll position
// let isScrollingDown = true; // Variable to track scrolling direction

// window.addEventListener('scroll', () => {
// 	let scroll = window.pageYOffset;
// 	let sectionY = section.getBoundingClientRect();

// 	// Check if the user is scrolling down
// 	if (scroll > lastScrollTop) {
// 		isScrollingDown = true; // Set scrolling direction to down
// 		// Stop animation when scroll position reaches 620px
// 		if (scroll >= 620) {
// 			// Set transformation to stop animation for translate elements
// 			translate.forEach(element => {
// 				element.style.transform = `translateY(${620 * element.dataset.speed}px)`;
// 			});
// 		} else {
// 			// Apply animation as usual for translate elements
// 			translate.forEach(element => {
// 				let speed = element.dataset.speed;
// 				element.style.transform = `translateY(${scroll * speed}px)`;
// 			});
// 		}
// 	} else { // User is scrolling up
// 		isScrollingDown = false; // Set scrolling direction to up
// 		// Re-enable animation for translate elements
// 		translate.forEach(element => {
// 			let speed = element.dataset.speed;
// 			element.style.transform = `translateY(${scroll * speed}px)`;
// 		});
// 	}

// 	// Apply animation as usual for other elements if scrolling direction is up
// 	if (!isScrollingDown) {
// 		opacity.forEach(element => {
// 			element.style.opacity = scroll / (sectionY.top + section_height);
// 		});

// 		big_title.style.opacity = -scroll / (header_height / 2) + 1;
// 		shadow.style.height = `${scroll * 0.5 + 300}px`;
// 		content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
// 		image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
// 		border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
// 	}

// 	// Update last scroll position
// 	lastScrollTop = scroll;
// });


// test 2

// let lastScrollTop = 0; // Variable to store the last scroll position
// let isScrollingDown = true; // Variable to track scrolling direction

// window.addEventListener('scroll', () => {
// 	let scroll = window.pageYOffset;
// 	let sectionY = section.getBoundingClientRect();

// 	// Check if the user is scrolling down
// 	if (scroll > lastScrollTop) {
// 		isScrollingDown = true;
// 		// Stop animation for translate elements when scroll position reaches 650px
// 		if (scroll > 650) {
// 			translate.forEach(element => {
// 				element.style.transform = `translateY(${650 * element.dataset.speed}px)`;
// 			});
// 		} else {
// 			translate.forEach(element => {
// 				let speed = element.dataset.speed;
// 				element.style.transform = `translateY(${scroll * speed}px)`;
// 			});
// 		}
// 	} else { // User is scrolling up
// 		isScrollingDown = false;
// 		translate.forEach(element => {
// 			let speed = element.dataset.speed;
// 			element.style.transform = `translateY(${scroll * speed}px)`;
// 		});

// 		// Apply animation as usual for other elements
// 		opacity.forEach(element => {
// 			element.style.opacity = scroll / (sectionY.top + section_height);
// 		});

// 		big_title.style.opacity = -scroll / (header_height / 2) + 1;
// 		shadow.style.height = `${scroll * 0.5 + 300}px`;
// 		content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
// 		image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
// 		border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
// 	}

// 	// Update last scroll position
// 	lastScrollTop = scroll;
// });



