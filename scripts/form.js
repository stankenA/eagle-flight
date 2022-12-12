//Form popup

const popupForm = document.querySelector('.popup_type_form');
const popupFormElement = document.forms['popup-form'];
const allPopupFormButtons = document.querySelectorAll('.popup-btn');
const allPopupCloseBtn = document.querySelectorAll('.popup__close');
const allPopups = document.querySelectorAll('popup');

function openPopup(popup) {
	popup.classList.add('popup_opened');
	page.classList.add('page_popup-opened');
};

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	page.classList.remove('page_popup-opened');
};

function handlePopupForm(evt) {
	evt.preventDefault();
	closePopup(popupForm);
	page.classList.remove('page_popup-opened');
};

allPopupFormButtons.forEach((button) => {
	button.addEventListener('click', () => {
		openPopup(popupForm);
		page.classList.add('page_popup-opened');
	})
});

allPopupCloseBtn.forEach((button) => {
	button.addEventListener('click', (evt) => {
		evt.target.closest('.popup_opened').classList.remove('popup_opened');
		page.classList.remove('page_popup-opened');
	})
});

popupFormElement.addEventListener('submit', handlePopupForm);
