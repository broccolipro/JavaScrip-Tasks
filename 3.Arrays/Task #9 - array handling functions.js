// Здача №9 - функции обработки массивов
// Задан массив [1, “a”, 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]
// Напишите функцию filter которая удалить лишнее из массива (все что не является цифрой) и
// вернет чистый массив [1, 2,  3, 4, 5, 6, 7, 8, 9]


function filter(arr) {
    return arr.filter(item => parseInt(item))
}

let arr = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
console.log(filter(arr))