// Задача №6 - функции обработки массивов
// Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Используя одну функцию обработки массивов,
// из исходного массива нужно получить [1, 2, 3, 4, 0, 0, 0, 6, 7, 8, 9]



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(4, 1, 0, 0, 0);
console.log(arr)
