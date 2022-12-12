//Plane

const btnExterior = document.querySelector('.plane__button_first');
const btnInterior = document.querySelector('.plane__button_second');

const blockExterior = document.querySelector('.plane__block_exterior');
const blockInterior = document.querySelector('.plane__block_interior');

function buttonSwitcher(button, typeString) {
	const activeButton = document.querySelector(`.${typeString}__button_active`);
	const buttonFocus = document.querySelector(`.${typeString}__button-focus`);
	if (!button.classList.contains(`${typeString}__button_active`)) {
		activeButton.classList.remove(`${typeString}__button_active`);
		button.classList.add(`${typeString}__button_active`);
	}

	if (button.classList.contains(`${typeString}__button_first`)) {
		buttonFocus.classList.remove(`${typeString}__button-focus_active`)
	} else if (button.classList.contains(`${typeString}__button_second`)) {
		buttonFocus.classList.add(`${typeString}__button-focus_active`);
	}

}

function sliderSwitcher(button, typeString, block1, block2) {
	if (button.classList.contains(`${typeString}__button_first`)) {
		block2.classList.remove(`${typeString}__block_active`);
		block1.classList.add(`${typeString}__block_active`);
	} else if (button.classList.contains(`${typeString}__button_second`)) {
		block1.classList.remove(`${typeString}__block_active`);
		block2.classList.add(`${typeString}__block_active`);
	}
}

btnExterior.addEventListener('click', () => {
	buttonSwitcher(btnExterior, 'plane');
	sliderSwitcher(btnExterior, 'plane', blockExterior, blockInterior);
});

btnInterior.addEventListener('click', () => {
	buttonSwitcher(btnInterior, 'plane');
	sliderSwitcher(btnInterior, 'plane', blockExterior, blockInterior);
});

//Map

const btnComfort = document.querySelector('.map__button_first');
const btnMax = document.querySelector('.map__button_second');

const blockComfort = document.querySelector('.map__block_comfort');
const blockMax = document.querySelector('.map__block_max');

const mapComfort = document.querySelector('.map__map-block_comfort');
const mapMax = document.querySelector('.map__map-block_max');


function switchMap(button) {
	if (button.classList.contains('map__button_first')) {
		mapComfort.classList.add('map__map-block_active');
		mapMax.classList.remove('map__map-block_active');
	} else if (button.classList.contains('map__button_second')) {
		mapComfort.classList.remove('map__map-block_active');
		mapMax.classList.add('map__map-block_active');
	}
};

btnComfort.addEventListener('click', () => {
	buttonSwitcher(btnComfort, 'map');
	sliderSwitcher(btnComfort, 'map', blockComfort, blockMax);
	switchMap(btnComfort);
});

btnMax.addEventListener('click', () => {
	buttonSwitcher(btnMax, 'map');
	sliderSwitcher(btnMax, 'map', blockComfort, blockMax);
	switchMap(btnMax);
});

const popupMap = document.querySelector('.map__popup');
const btnFzComfort = mapComfort.querySelector('.map__fz-btn');
const btnFzMax = mapMax.querySelector('.map__fz-btn');

function openFzPopup(block) {
	popupMap.classList.add('map__popup_active');
	const popupImg = popupMap.querySelector('.map__popup-img');
	const blockImg = block.querySelector('.map__photo');
	popupImg.src = blockImg.src;
	page.classList.add('page_popup-opened');
};

btnFzComfort.addEventListener('click', () => {
	openFzPopup(mapComfort);
});

btnFzMax.addEventListener('click', () => {
	openFzPopup(mapMax);
});

const mapPopupCloseBtn = popupMap.querySelector('.map__popup-close');

mapPopupCloseBtn.addEventListener('click', (evt) => {
	evt.target.closest('.map__popup').classList.remove('map__popup_active');
	page.classList.remove('page_popup-opened');
})
