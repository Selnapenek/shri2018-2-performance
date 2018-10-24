const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');

selectButton.addEventListener('click', function() {
  popup.classList.toggle('filter__select-popup_open');
});

let widths = '';
window.addEventListener('scroll', function() {
    widths += document.querySelectorAll('body')[0].offsetWidth;
    document.querySelector('.stats').innerHTML = widths;
});

selectOptions.forEach(o => {
  o.addEventListener('click', function(e) {
    document.querySelector('#' + e.target.dataset.group).checked = true;

    selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
    e.target.classList.toggle('filter__select-item_checked', true);
    popup.classList.toggle('filter__select-popup_open', false);
    selectButtonText.innerText = e.target.innerText;
  })
});

document.querySelector('.menu__icon').addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('menu_open');
});
