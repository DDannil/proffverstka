'use strict'

let buttons = document.querySelectorAll('.products__btn');
let basketCounter = document.querySelector('.header__link-span');
let basketTotal = document.querySelector('.header__basket-total');
let basketLink = document.getElementById('basket-link');
let basket = document.querySelector('.header__basket');
let basketTotalValue = document.querySelector('.header__basket-totalCounter')

basketLink.addEventListener('click', function () {
    basket.classList.toggle('visually-hidden')
})

buttons.forEach(button => {
    button.addEventListener('click', addToBasket)
});

function addToBasket(event) {
    const productId = event.currentTarget.getAttribute('id');
    increaseCounter();
    getToObject(productId);
    getToBasket(productId);
    calculateTotalSum();
}

function increaseCounter() {
    basketCounter.textContent++
}