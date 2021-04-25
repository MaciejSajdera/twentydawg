/**
 * Main JavaScript file.
 */
import Menu from "./navigation.js";
import skipLinkFocus from "./skip-link-focus-fix.js";
import { RevealChildrenOf } from "./animations.js";
import * as basicLightbox from "basiclightbox";
import smoothscroll from "smoothscroll-polyfill";
import SweetScroll from "sweet-scroll";

// import Swiper JS
import Swiper, {
	Navigation,
	Autoplay,
	Pagination,
	Parallax,
	EffectFade,
	Lazy
} from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
	const menu = new Menu();

	skipLinkFocus();

	menu.setupNavigation();
	menu.enableTouchFocus();
	smoothscroll.polyfill();

	const myPreloader = document.querySelector(".my-preloader");
	const page = document.querySelector("#page");
	const twentyBigLogoOutline = document.querySelector(
		".twenty-big-logo--outline"
	);
	const twentyBigLogoLight = document.querySelector(".twenty-big-logo--light");

	const heroVideo = document.querySelector("#heroVideo");

	setTimeout(() => {
		myPreloader.classList.add("my-preloader-off");
	}, 700);

	setTimeout(() => {
		myPreloader.classList.add("my-preloader-none");
		page.classList.add("page-loaded");
		twentyBigLogoOutline.classList.add("twenty-big-logo--outline-loaded");
		twentyBigLogoLight.classList.add("twenty-big-logo--light-loaded");

		heroVideo.muted = true;
		heroVideo.play();

		const locations = document.querySelector(".locations-wrapper");
		new RevealChildrenOf(locations, 5);

		const productsContainer = document.querySelector(
			".products-showcase__container"
		);
		new RevealChildrenOf(productsContainer, 4);
	}, 1000);

	// const welcomePseudoElements = document.querySelector(
	// 	".welcome-view__pseudo-elements"
	// );

	// setTimeout(() => {
	// 	welcomePseudoElements.classList.add(
	// 		"welcome-view__pseudo-elements--loaded"
	// 	);
	// }, 1700);

	const scrollDownButton = document.querySelector(".scroll-down");

	scrollDownButton.addEventListener("click", () => {
		// let pageHeight = window.innerHeight;
		// window.scrollBy({
		// 	top: pageHeight,
		// 	behavior: "smooth"
		// });

		document.querySelector("#scroll-target").scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start"
		});
	});

	const muteButton = document.querySelector(".mute-button");

	muteButton.addEventListener("click", function() {
		heroVideo.muted = !heroVideo.muted;
		this.classList.toggle("muted");
	});

	(function init() {
		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			};
		}

		function initializeClock(endtime) {
			var timeinterval = setInterval(function() {
				var t = getTimeRemaining(endtime);

				document.querySelector(".days > .value").innerText = t.days;

				if (t.days < 10) {
					document.querySelector(".days > .value").innerText = "0" + t.days;
				}

				document.querySelector(".hours > .value").innerText = t.hours;

				if (t.hours < 10) {
					document.querySelector(".hours > .value").innerText = "0" + t.hours;
				}

				document.querySelector(".minutes > .value").innerText = t.minutes;

				if (t.minutes < 10) {
					document.querySelector(".minutes > .value").innerText =
						"0" + t.minutes;
				}

				document.querySelector(".seconds > .value").innerText = t.seconds;

				if (t.seconds < 10) {
					document.querySelector(".seconds > .value").innerText =
						"0" + t.seconds;
				}

				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}, 1000);
		}
		initializeClock(new Date().getFullYear() + "/4/30");
	})();

	// document.addEventListener("scroll", e => {
	// 	// console.log(e);
	// 	console.log(pageYOffset);

	// 	if (pageYOffset > 420) {
	// 		const pseudoElementsParent = document.querySelector(
	// 			".welcome-view__pseudo-elements"
	// 		);
	// 		pseudoElementsParent.classList.add("rotation");
	// 	}
	// });

	// setTimeout(() => {
	// 	cookiesNotification();
	// }, 1000);

	// const cookiesNotification = () => {
	// 	const cookiesInfo = document.querySelector(".cookie-law-notification");
	// 	const cookiesAcceptButton = document.querySelector("#cookie-law-button");

	// 	if (localStorage.getItem("cookiesAreAccepted")) {
	// 		return;
	// 	} else {
	// 		cookiesInfo.classList.add("cookies-notification-on");
	// 		cookiesAcceptButton.addEventListener("click", () => {
	// 			localStorage.setItem("cookiesAreAccepted", "1");
	// 			cookiesInfo.classList.add("cookies-notification-off");
	// 		});
	// 		return;
	// 	}
	// };

	Swiper.use([Navigation, Autoplay, Pagination, Parallax, EffectFade, Lazy]);

	document.querySelectorAll(".product__image").forEach(image => {
		image.onclick = function() {
			const markup = this.closest(".swiper-container-holder").cloneNode(true);
			console.log(markup);
			markup
				.querySelector(".swiper-container-product")
				.classList.add("swiper-lightbox");

			markup.querySelector(".swiper-wrapper").style = "";

			markup
				.querySelector(".swiper-pagination")
				.classList.add("swiper-pagination-lightbox");

			markup
				.querySelector(".swiper-button-next")
				.classList.add("swiper-button-next-lightbox");

			markup
				.querySelector(".swiper-button-prev")
				.classList.add("swiper-button-prev-lightbox");

			const thisSlideNumber = this.dataset.number;

			const closeButton = document.createElement("A");
			closeButton.classList.add("close-lightbox");

			markup.appendChild(closeButton);

			// this.closest(".swiper-wrapper").childNodes.forEach(node => {
			// 	return `<div></div>`;
			// });

			const instance = basicLightbox.create(markup, {
				onShow: instance => {
					instance.element().querySelector("a").onclick = instance.close;
				}
			});

			instance.show();

			// onShow: (instance) => {
			// 	instance.element().querySelector('a').onclick = instance.close
			// }

			var productGallery_lightbox = new Swiper(".swiper-lightbox", {
				direction: "horizontal",
				loop: false,
				// parallax: true,
				centeredSlides: true,
				slidesPerView: 1,
				speed: 1000,
				grabCursor: true,
				initialSlide: thisSlideNumber,

				pagination: {
					el: ".swiper-pagination-lightbox"
				},

				navigation: {
					nextEl: ".swiper-button-next-lightbox",
					prevEl: ".swiper-button-prev-lightbox"
				}
			});
		};
	});

	var productGallery_1 = new Swiper(".swiper-container-product_1", {
		direction: "horizontal",
		loop: false,
		// parallax: true,
		centeredSlides: true,
		slidesPerView: 1,
		speed: 1000,
		grabCursor: false,

		pagination: {
			el: ".swiper-pagination-product_1"
		},

		navigation: {
			nextEl: ".swiper-button-next-product_1",
			prevEl: ".swiper-button-prev-product_1"
		}
	});

	var productGallery_2 = new Swiper(".swiper-container-product_2", {
		direction: "horizontal",
		loop: false,
		// parallax: true,
		centeredSlides: true,
		slidesPerView: 1,
		speed: 1000,
		grabCursor: false,

		pagination: {
			el: ".swiper-pagination-product_2"
		},

		navigation: {
			nextEl: ".swiper-button-next-product_2",
			prevEl: ".swiper-button-prev-product_2"
		}
	});

	var productGallery_3 = new Swiper(".swiper-container-product_3", {
		direction: "horizontal",
		loop: false,
		// parallax: true,
		centeredSlides: true,
		slidesPerView: 1,
		speed: 1000,
		grabCursor: false,

		pagination: {
			el: ".swiper-pagination-product_3"
		},

		navigation: {
			nextEl: ".swiper-button-next-product_3",
			prevEl: ".swiper-button-prev-product_3"
		}
	});

	var mySwiper = new Swiper(".swiper-container-lookbook", {
		direction: "horizontal",
		loop: true,
		// parallax: true,
		centeredSlides: true,
		slidesPerView: 1,
		initialSlide: 1,
		speed: 1000,
		autoplay: {
			delay: 3000
		},
		grabCursor: true,

		breakpoints: {
			992: {
				slidesPerView: 1.5,
				centeredSlides: true
			}
		},

		pagination: {
			el: ".swiper-pagination"
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
});
