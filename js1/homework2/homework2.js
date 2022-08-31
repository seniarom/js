//3
function checkAandB() {
    var a = +prompt('Введите значение a'),
        b = +prompt('Введите значение b'),
        c,
        d;
    if (a >= 0 & b >= 0) {
        c = a - b;
        d = 'a - b';
    } else if (a < 0 & b < 0) {
        c = a * b;
        d = 'a * b';
    } else {
        c = a + b;
        d = 'a + b';
    }
    alert('a = ' + a + '; b = ' + b + '; ' + d + ' = ' + c);
}

//4
function swtchFromZeroToFifteen() {
    var a = +prompt('Введите значение a в промежутке [0..15]'),
        number = '';

    switch (a) {
        case 0: number += (a++) + ', ';
        case 1: number += (a++) + ', ';
        case 2: number += (a++) + ', ';
        case 3: number += (a++) + ', ';
        case 4: number += (a++) + ', ';
        case 5: number += (a++) + ', ';
        case 6: number += (a++) + ', ';
        case 7: number += (a++) + ', ';
        case 8: number += (a++) + ', ';
        case 9: number += (a++) + ', ';
        case 10: number += (a++) + ', ';
        case 11: number += (a++) + ', ';
        case 12: number += (a++) + ', ';
        case 13: number += (a++) + ', ';
        case 14: number += (a++) + ', ';
        case 15: number += (a++);
    }
    alert(number);
}

//5
function fourOperations() {
    var a = Math.floor(100 * Math.random());
    var b = Math.floor(100 * Math.random());

    function summarizeThis(a, b) {
        return a + b;
    }

    function substractThis(a, b) {
        return a - b;
    }

    function multiplyThis(a, b) {
        return a * b;
    }

    function divideThis(a, b) {
        return a / b
    }

    alert('a  = ' + a +
        '\nb = ' + b +
        '\na + b = ' + summarizeThis(a, b) +
        '\na - b = ' + substractThis(a, b) +
        '\na * b = ' + multiplyThis(a, b) +
        '\na / b = ' + divideThis(a, b));
}

//6
function mathOperationTask() {

    var arg1 = +prompt('Введите значение переменной "a"');
    var arg2 = +prompt('Введите значение переменной "b"');
    var operation = prompt('Введите необходимую операцию: "+", "-", "*", "/"');
    var result;

    function summarizeThis(arg1, arg2) {
        return arg1 + arg2;
    }

    function substractThis(arg1, arg2) {
        return arg1 - arg2;
    }

    function multiplyThis(arg1, arg2) {
        return arg1 * arg2;
    }

    function divideThis(arg1, arg2) {
        return arg1 / arg2
    }

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case '+':
                return summarizeThis(arg1, arg2);
            case '-':
                substractThis(arg1, arg2);
            case '*':
                return multiplyThis(arg1, arg2)
            case '/':
                return divideThis(arg1, arg2);
            default:
                return "ERROR!";
        }
    }

    alert('a = ' + arg1 +
        '\nb = ' + arg2 +
        '\nоперация: ' + operation +
        '\nрезультат: ' + mathOperation(arg1, arg2, operation));
}

//7
function nullAndZero() {
    alert('typeof (null) выведет object' +
        '\ntypeof(0) выведет number' +
        '\n' +
        '\nЗначение null представляет нулевое или "пустое" значение; а  0 - это число.'
    );
}

//8
function rcrsn() {

    var val = +prompt('Введите число');
    var pow = +prompt('Введите степень');

    function power(val, pow) {
        if (pow == 0)
            return 1;
        else
            return val * power(val, pow - 1);
    }

    alert('Число ' + val + ' в степени ' + pow + ' = ' + power(val, pow));
}

