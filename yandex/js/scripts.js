//1 задание
//объявляем переменные для списков, которые нужно отображать
var newsListWorld = document.querySelector('.news-list-world');
var newsListMoscow = document.querySelector('.news-list-moscow');
//объявляем переменные для кнопок, на которые нужно нажимать
var btnWorld = document.querySelector('.news-tab-world');
var btnMoscow = document.querySelector('.news-tab-moscow');
//добавляем событие при нажатии на кнопку Мировые новости
btnWorld.addEventListener('click', function () {
    newsListWorld.style.display = 'block';
    newsListMoscow.style.display = 'none';
    btnWorld.classList.add('active');
    btnMoscow.classList.remove('active');
});
//добавляем событие при нажатии на кнопку Московские новости
btnMoscow.addEventListener('click', function () {
    newsListWorld.style.display = 'none';
    newsListMoscow.style.display = 'block';
    btnMoscow.classList.add('active');
    btnWorld.classList.remove('active');
});
//2 задание
var whatSearch = document.querySelector('.search-input');
var searchAutocomplete = document.querySelector('.search-autocomplete');
whatSearch.addEventListener('keyup', function () {
    if (whatSearch.value.length >=3) {
        searchAutocomplete.style.display = 'block';
    }
    else {
        searchAutocomplete.style.display = 'none';
    }
});
//3 задание
searchAutocomplete.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        var queryStr = 'https://yandex.ru/search/?text=' + ev.target.textContent;
        window.open(queryStr);
    }
});
//4 задание
//создаем функцию для отображения результатов поиска исходя из того, что было введено в строку поиска
function openSearchResults() {
    var whatIsearch ='http://yandex.ru/search/?text=' + whatSearch.value;
    window.open(whatIsearch)
}
//объявляем переменную с кнопкой Найти
var btnSearch = document.querySelector('.search-btn');
//вешаем событие при нажатии на кнопку Найти
btnSearch.addEventListener('click', function (){
    openSearchResults();
});
//вешаем событие при нажатии на кнопку Enter
whatSearch.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 13) {
        openSearchResults();
    }
})
