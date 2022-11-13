// Модуль 5.3 задание 2

let x = false;

if (typeof x === 'number') {
    console.log('x - число');
} else if (typeof x === 'string') {
    console.log('x - строка');
} else if (typeof x === 'boolean') {
    console.log("x - равен логическому типу");   
} else {
    console.log('Тип x не определён');
}
