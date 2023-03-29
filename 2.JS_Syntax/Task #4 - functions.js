// Задача №4 - функции
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('hello'))