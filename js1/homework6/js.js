const products = [
    {
        id: 1,
        title: 'Футболка',
        price: 3000,
        images: ['images/t-shirt.jpg'
        ]
    },
    {
        id: 2,
        title: 'Толстовка',
        price: 6000,
        images: [
            'images/hoodie.jpg'
        ]
    },
    {
        id: 3,
        title: 'Кроссовки',
        price: 15000,
        images: [
            'images/adizero.jpg'
        ]
    },
    {
        id: 4,
        title: 'Кросссовки',
        price: 20000,
        images: [
            'images/carbon.jpg'
        ]
    },
]
const cart = {
    goodsList: [],
    countBasketPrice() {
        return this.goodsList.reduce((finalCost, { amount, productObj }) => finalCost += productObj.price * amount, 0)
    },
    addToBasket(product) {
        const prodInCart = this.goodsList.find(el => el.productObj === product)
        if (prodInCart) {
            prodInCart.amount++
        } else {
            this.goodsList.push({
                productObj: product,
                amount: 1
            })
        }
    },
    renderCart() {
        return this.goodsList.length ?
            `В корзине: ${this.goodsList.length} товаров на сумму  ${this.countBasketPrice()} рублей` :
            'Корзина пуста'
    }
}

const numberOne = {
    updateCart() {
        const cartElement = document.querySelector(".navbar-text.cart")
        const button = document.querySelector('.navbar button.btn-danger')
        const cartListWrapper = document.querySelector(".cartListWrap")
        const cartList = cartListWrapper.querySelector('ul')
        cartElement.textContent = cart.renderCart()
        cartList.innerHTML = []
        cartListWrapper.hidden = !cart.goodsList.length
        button.hidden = !cart.goodsList.length
        cart.goodsList.forEach(({ productObj, amount }) => {
            cartList.insertAdjacentHTML('beforeend',
                `<li class="list-group-item">${productObj.title}. ${amount} шт. Сумма: ${amount * productObj.price}руб.</li>`)
        })
    },

    render() {
        document.body.innerHTML = '';
        document.body.insertAdjacentHTML("afterbegin", `
<nav class="navbar">
  <div> <span class="navbar-text cart"></span> <button class="btn btn-danger ms-2">Удалить всё</button></div>
</nav>`)
        document.body.insertAdjacentHTML("beforeend", `
<div class="cartListWrap container">
<h4>Корзина:</h4>
<ul class="list-group list-group-numbered">
</ul>
</div>
`)

        document.body.insertAdjacentHTML("beforeend", `
<div class="container ">
<h4>Каталог:</h4>
<div class="productList row g-2"></div>
</div>
`)
        const row = document.body.querySelector(".productList")
        products.forEach(product => {
            const card = `<div class="col-4">
<div class="card" data-id="${product.id}" >
<div style="height: 300px">
<img src="${product.images[0]}" style="width: 500px; height: 100%; object-fit: contain;"  class="card-img-top" alt="img">
</div>
<div class="card-body">
<h5 class="card-title">${product.title}</h5>
<p class="card-text">${product.price} руб.</p>

<button class="btn btn-primary">В корзину</button></div>
</div>
</div>`
            row.insertAdjacentHTML("beforeend", card)
        })

    },
    start() {
        this.render()
        this.updateCart()
        const cards = document.getElementsByClassName('card')
        const buttonClick = function (ev) {
            const product = products.find(el => el.id == this.dataset.id)
            if (ev.target.classList.contains('btn-info')) {
                const modal = createModal(product)
                modal.open()
            }
            if (ev.target.classList.contains('btn-primary')) {
                cart.addToBasket(product)
                numberOne.updateCart()
            }
        }
        for (let card of cards) {
            card.addEventListener('click', buttonClick)
        }
        const clearCartButton = document.querySelector('.navbar button.btn-danger')
        clearCartButton.addEventListener("click", () => {
            cart.goodsList = []
            this.updateCart()
        })
    }
}

numberOne.start() 