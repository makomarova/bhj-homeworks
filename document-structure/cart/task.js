const productList = document.querySelectorAll('.product');
const productAddList = document.querySelectorAll('.product__add');
const productQuantityList = document.querySelectorAll('.product__quantity-control');
const cartProducts = document.querySelector('.cart__products');

productQuantityList.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.classList.contains('product__quantity-control_dec')){
            const count = element.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            if(Number(count.textContent) !== 1){
                count.textContent = Number(count.textContent) - 1;
            }
        }

        if (element.classList.contains('product__quantity-control_inc')){
            const count = element.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            count.textContent = Number(count.textContent) + 1;
        }
    });
})

productAddList.forEach(element => {
    element.addEventListener('click', (e) => {
        const product = element.closest('.product');
        const count = Number(product.querySelector('.product__quantity-value').textContent);
        const products = cartProducts.querySelectorAll('.cart__product');

        const productInCart = Array.from(products).find(el => el.getAttribute('data-id') === product.getAttribute('data-id'));
        if(productInCart === undefined){
            const img = product.querySelector('img').src;
            let productDiv = document.createElement('div');
            productDiv.classList.add('cart__product');
            productDiv.setAttribute('data-id', product.getAttribute('data-id'));
            productDiv.innerHTML += `<img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${count}</div>`;
            cartProducts.appendChild(productDiv);
        } else {
            productInCart.querySelector('.cart__product-count').textContent = Number(productInCart.querySelector('.cart__product-count').textContent) + count;
        }
    });
})