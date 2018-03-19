// 1-ый способ: //
// var userName = prompt('Введите Логин','');
// if (!userName) {
//         alert('Пожалуйста, введите логин');
// }
// else {
//     var password = prompt('Введите Пароль','');
//     if (!password) {
//             alert('Пожалуйста, введите пароль');
//     }
//         else {
//         if (userName == 'admin' && password == 'qwerty123456') {
//             alert ('Добро пожаловать, администратор!');
//         }
//             else {
//             var greeting = 'Привет, ' + userName + '!';
//             alert(greeting);
//             }
//         }
//     }

// 2-ой способ: //
// проверка логина
var log = ['admin', 'Настя'];
var isLoginValid = false;
do {
    var userName = prompt('Введите Логин','');
        if (!userName) {
        alert('Пожалуйста, введите логин'); 
        }
        else if (!log.includes(userName)) {
            alert('Данный пользователь не зарегистрирован. Попробуйте еще раз'); 
        }  
        else {
            isLoginValid = true;    
        }    
}
while (!isLoginValid);
// проверка пароля
var pas = ['qwerty123456', 'Ятсан'];
var isPasswordValid = false;
do {
    var password = prompt('Введите Пароль','');
        if (!password) {
            alert('Пожалуйста, введите пароль');
        }    
        else if (pas.indexOf(password) != log.indexOf(userName)) {
            alert('Пароль неверен. Попробуйте еще раз'); 
        }
        else {
            isPasswordValid = true;    
        }
}
while (!isPasswordValid);
//приветствие
if (userName == 'admin') {
    alert ('Добро пожаловать, администратор!');
}
else {   
    {var greeting = 'Привет, ' + userName + '!';
    alert(greeting);
    }
}