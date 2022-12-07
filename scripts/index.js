const btnExterior = document.querySelector('.plane__button_exterior');
const btnInterior = document.querySelector('.plane__button_interior');

function buttonSwitcher(button) {
  const activeButton = document.querySelector('.plane__button_active');
  const buttonFocus = document.querySelector('.plane__button-focus');
  if (!button.classList.contains('plane__button_active')) {
    activeButton.classList.remove('plane__button_active');
    button.classList.add('plane__button_active');
  }
  if (button.classList.contains('plane__button_exterior')) {
    buttonFocus.classList.remove('plane__button-focus_active')
  } else if (button.classList.contains('plane__button_interior')) {
    buttonFocus.classList.add('plane__button-focus_active');
  }
}

function sliderSwitcher(button) {
  const blockExterior = document.querySelector('.plane__block_exterior');
  const blockInterior = document.querySelector('.plane__block_interior')
  if (button.classList.contains('plane__button_exterior')) {
    blockInterior.classList.remove('plane__block_active');
    blockExterior.classList.add('plane__block_active');
  } else if (button.classList.contains('plane__button_interior')) {
    blockExterior.classList.remove('plane__block_active');
    blockInterior.classList.add('plane__block_active');
  }
}

btnExterior.addEventListener('click', () => {
  buttonSwitcher(btnExterior);
  sliderSwitcher(btnExterior);
});

btnInterior.addEventListener('click', () => {
  buttonSwitcher(btnInterior);
  sliderSwitcher(btnInterior);
});
