const mobilePopup = document.querySelector('.mobile-popup');
const mobileMenuBtn = document.querySelector('.header__menu-mobile');
const mobilePopupClose = mobilePopup.querySelector('.mobile-popup__close-btn');

mobileMenuBtn.addEventListener('click', () => {
	mobilePopup.classList.add('mobile-popup_opened');
});

mobilePopupClose.addEventListener('click', () => {
	mobilePopup.classList.remove('mobile-popup_opened');
});
