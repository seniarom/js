
//1
function chessBoard() {
    const gridStyle = `display: grid;
    grid-template-columns : 40px  repeat(8, 50px);
    grid-template-rows: 40px repeat(8, 50px);
    justify-items: center;
    align-items: center;`

    function makeChessBoard() {
        const board = document.createElement('mainChessBoard')
        board.style = gridStyle

        for (let i = 0; i <= 8; i++) {
            for (let j = 0; j <= 8; j++) {
                const cell = document.createElement('mainChessBoard')
                if (i === 0 || j === 0) {
                    cell.innerText = (j) ? String.fromCharCode(64 + j) : i || ""
                } else {
                    cell.style.width = "100%"
                    cell.style.height = "100%"
                    if (i % 2) cell.style.backgroundColor = j % 2 ? '#ffffff' : '#000000'
                    else cell.style.backgroundColor = !(j % 2) ? '#ffffff' : '#000000'
                }
                board.appendChild(cell)
            }
        }
        document.body.prepend(board)
    }

    makeChessBoard()
}

//2

function cart() {

    const cart = {
        goodsList: [
            {
                name: 'футболка',
                amount: 2,
                price: 3000,
            },
            {
                name: 'футболка',
                amount: 3,
                price: 2500,
            },
            {
                name: 'футболка',
                amount: 1,
                price: 2500,
            },
            {
                name: 'кроссовки',
                amount: 2,
                price: 15000,
            },
            {
                name: 'кроссовки',
                amount: 3,
                price: 20500,
            },
            {
                name: 'толстовка',
                amount: 1,
                price: 5500,
            }
        ],


        countBasketPrice() {
            return this.goodsList.reduce((finalCost, { amount, cost }) => finalCost += cost * amount, 0)
        },
        addGoods(...goods) {
            this.goodsList.push(...goods)
        },
        cartRender() {
            const myCart = document.querySelector(".cart")
            myCart.textContent = this.goodsList.length ?
                `В корзине: ${this.goodsList.length} товаров на сумму  ${this.countBasketPrice()} рублей` :
                'Корзина пуста'
        }
    }

    cart.cartRender()

}

//3
function getCartGoods() {
    class Product {
        constructor(name, cost) {
            this.name = name
            this.cost = cost
        }
    }

    const catalogList = [
        new Product("Футболка", 3000),
        new Product("Кроссовки", 10000),
        new Product("Толстовка", 6000)
    ]
}