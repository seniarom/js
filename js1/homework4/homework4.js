
//1

function intoObject(num) {
    if (num < 0 || num > 999 || num % 1 !== 0 || typeof num !== 'number') {
        console.log('Ошибка! Число не подходит! Введите, пожалуйста, число от 0 до 999');
        return {}
    } else {
        const obj = new Object({
            'единицы': num % 10,
            'десятки': Math.floor(num / 10 % 10),
            'сотни': Math.floor(num / 100)
        })
        return obj
    }
}

console.log(intoObject(0))
console.log(intoObject(245))
console.log(intoObject(1500))

//2

function cart() {
    let goodsCart = {
        goods: [
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
        ]
    }

    function countCartPrice() {
        let total = 0;
        let summ = 0;
        for (i = 0; i < goods.length; i++) {
            summ = summ + (goods[i].count) * (goods[i].price);
            total++;
        }
        console.log(`Всего товаров: ${total}`);
        console.log(`Общая стоимость корзины: ${summ}`);
    }
}



