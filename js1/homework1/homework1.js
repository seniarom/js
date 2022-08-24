//1

function converterTemperature() {
    let temperatureCelsius = prompt('Введите температуру в цельсиях');
    temperatureFarenheit = (9 / 5) * temperatureCelsius + 32;
    alert(temperatureCelsius + ' градусов по Цельсию = ' + temperatureFarenheit + ' градусов по Фаренгейту');
}

//2

function adminVasya() {
    var name = '"Василий"';
    alert(admin = name);
}

//3

function questionThree() {
    var a = 1000,
        b = '108',
        c = a + b;
    alert('a=' + a + ' (' + typeof (a) + ') + b=' + b + ' (' + typeof (b) + ') = ' + c);
}

//4

function alertDefer() {
    alert('Поддержка атрибута async появилась в HTML5, он разрешает браузеру загружать js-файлы параллельно и выполнять сразу после загрузки, не дожидаясь обработки остальной части страницы.');
    alert('Атрибут defer позволяет браузеру начать загрузку js-файлов параллельно, не останавливая дальнейшую обработку страницы. Их выполнение происходит после полного разбора объектной модель документа (от англ. Document Object Model, сокращенно DOM), при этом браузер гарантирует последовательность на основе порядка подключения файлов.');
}
