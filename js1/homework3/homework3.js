//1
function fromZeroToHundred() {
    let arr = [];
    let maxNum = 100;
    for (var i = 2; i < maxNum; i++) {
        arr[i] = true;
    }
    var firstNum = 2;  //переменная с первым простым числом
    do {

        for (i = 2 * firstNum; i < 100; i += firstNum) {
            arr[i] = false;
        }

        for (i = firstNum + 1; i < maxNum; i++) {
            if (arr[i]) break;
        }

        firstNum = i;
    } while (firstNum * firstNum < maxNum);

    var primeNum = 0;

    while (primeNum < arr.length) {
        primeNum++;

        if (arr[primeNum] === true) {
            console.log(primeNum);// простые числа
        }
    }

}

//2

function numberTwo() {
    const cart = [
        ['футболка', 'adidas', 'муж', 2, 3000],
        ['футболка', 'adidas', 'жен', 3, 2500],
        ['футболка', 'adidas', 'муж', 1, 2500],
        ['кроссовки', 'adidas', 'муж', 2, 15000],
        ['кроссовки', 'adidas', 'жен', 3, 20500],
        ['толстовка', 'adidas', 'муж', 1, 5500]
    ];

    function countBasketPrice() {
        let total = 0;
        for (i = 0; i < cart.length; i++) {
            total += cart[i][6];
        }
        let result = console.log('Общая стоимость корзины ' + total + ' руб');
        return total;
    }
}
//3
function getZerotoNine() {
    for (var i = 0; i < 10; console.log(i++)) { }
}

//4
function xXx() {
    let result = "x";

    console.log(result);

    for (let x = 1; x < 20; x++) {

        console.log(result += "x");

    }
}
