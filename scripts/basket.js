'use strict'

let basketObj = {};

function getToObject(productId) {
    if (!(productId in basketObj)) {
        basketObj[productId] = 1;
    } else {
        basketObj[productId]++;
    }
}

function getToBasket(productId) {
    let productExist = document.querySelector(`.productCount[id = "${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        CreateNewProduct(productId);
    }
}

function increaseProductCount(productId) {
    let productCount = document.querySelector(`.productCount[id = "${productId}"]`);
    productCount.textContent++;
}

function recalculateSumForProduct(productId) {
    const productTotalRow = document.querySelector(`.productTotalRow[id = "${productId}"]`);
    let totalPrice = basketObj[productId] * products[productId - 1].price;
    productTotalRow.textContent = totalPrice;
}

function CreateNewProduct(productId) {
    let productRow = `
    <div class="header__basket-row">
        <p>${products[productId - 1].name}</p>
        <p> <span class = "productCount" id = "${productId}">1</span> шт.</p>
        <p>${products[productId - 1].price}</p>
        <p class = "productTotalRow" id = "${productId}">${products[productId - 1].price}</p>
    </div >
        `

    basketTotal.insertAdjacentHTML('beforebegin', productRow);
}

function calculateTotalSum() {
    let totalSum = 0;
    for (let productId in basketObj) {
        totalSum += basketObj[productId] * products[productId - 1].price;
    }
    basketTotalValue.textContent = totalSum;
}