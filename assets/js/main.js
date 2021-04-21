/**
 * Main JavaScript file.
 */
import Menu from "./navigation.js";
import skipLinkFocus from "./skip-link-focus-fix.js";
import { RevealChildrenOf } from "./animations.js";
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

	const myPreloader = document.querySelector(".my-preloader");
	const page = document.querySelector("#page");

	const twentyBigLogoOutline = document.querySelector(
		".twenty-big-logo--outline"
	);
	const twentyBigLogoLight = document.querySelector(".twenty-big-logo--light");

	setTimeout(() => {
		myPreloader.classList.add("my-preloader-off");
	}, 700);

	setTimeout(() => {
		myPreloader.classList.add("my-preloader-none");
		page.classList.add("page-loaded");
		twentyBigLogoOutline.classList.add("twenty-big-logo--outline-loaded");
		twentyBigLogoLight.classList.add("twenty-big-logo--light-loaded");

		const locations = document.querySelector(".locations-wrapper");
		new RevealChildrenOf(locations, 5);
	}, 1000);

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
				document.querySelector(".minutes > .value").innerText = t.minutes;
				document.querySelector(".seconds > .value").innerText = t.seconds;
				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}, 1000);
		}
		initializeClock(new Date().getFullYear() + "/4/26");
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
