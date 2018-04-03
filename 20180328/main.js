//Ключ доступа к API
var API_KEY = 'AIzaSyAKZcs_ievlf4SNciCWDpLbfKOX2H2xjKw';

//Идентификатор Google-таблицы (берется из адресной строки)
var spreadsheetId = '1GxSbvZ5jJVH2gb-0BEERRdvAwHX_rUW-qYFaP8WJaZ0';

var range = 'A1:B4'; // Диапазон ячеек, которые мы хотим поулчить из таблицы

// Полная строка GET-запроса к API
var API_URL = 
    'https://sheets.googleapis.com/v4/spreadsheets/'
    + spreadsheetId
    + '/values/'
    + range
    + '?key=' + API_KEY;

// Отправляем запрос
fetch(API_URL)
    .then(data => data.json()) // Обрабатываем ответ API
    .then(data => { //указываем, что ответ должен прийти в переменную data
        console.log(data.values); // выводим содержимое таблицы в консоль
    })

// var list = document.createElement('ul');
// for (var i = 0; i <= data.values.length; i++) {
// var row = data.values[i];
// var item = document.createElement('li');
// item.innerHTML = row[0] + ' - ' + row
// }