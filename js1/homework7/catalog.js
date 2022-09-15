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


const catalog = {
    ...app,
    products,
    render() {
        document.body.innerHTML = '';
        document.body.insertAdjacentHTML("afterbegin", `
<nav class="navbar">
  <div class="container">
 <span class="h1">Каталог</span>
<div> 
    <a class="navbar-text cart" href="cartPage.html"></a>
</div>
  </div>
</nav>`)
        document.body.insertAdjacentHTML("beforeend", `
<div class="container ">
<div class="productList row g-5"></div>
</div>
`)
        const row = document.body.querySelector(".productList")
        this.products.forEach(product => {
            const card = `<div class="col-3">
<div class="card" data-id="${product.id}" >
<div style="height: 300px">
<img src="${product.images[0]}" style="width: 100%; object-fit: contain;"  class="card-img-top" alt="img">
</div>
<div class="card-body">
<h5 class="card-title">${product.title}</h5>
<p class="card-text">${product.price} руб.</p>
<button class="btn btn-primary">Купить</button></div>
</div>
</div>
</div>`
            row.insertAdjacentHTML("beforeend", card)
        })

        const cards = document.getElementsByClassName('card')
        const buttonClick = function (ev) {
            const product = this.products.find(el => el.id == ev.target.offsetParent.dataset.id)
            if (ev.target.classList.contains('btn-info')) {
                const modal = this.createModal(product)
                modal.open()
            }
            if (ev.target.classList.contains('btn-primary')) {
                this.cart.addToBasket(product)
                this.updateCart()
            }
        }
        for (let card of cards) {
            card.addEventListener('click', buttonClick.bind(this))
        }
    },

}

catalog.start()