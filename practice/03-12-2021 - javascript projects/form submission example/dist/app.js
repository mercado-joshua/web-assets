const input = document.querySelector('.js-input');

const form = document.querySelector('.js-form');

const quote = document.querySelector('.js-quote');

form.addEventListener('submit', () => {
    let value = input.value;

    quote.innerHTML = value;
});