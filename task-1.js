// Модуль 5.3 задание 1 


let classOne = +prompt("Введите значение");
if (isNaN(classOne) == true) {
    console.log('Упс, кажется, вы ошиблись');
} else {
    if (classOne % 2 == 0) {
        console.log('Вы ввели четное число ' + classOne);
    }
    else {
        console.log('Вы ввели нечетное чило ' + classOne);
    }
}