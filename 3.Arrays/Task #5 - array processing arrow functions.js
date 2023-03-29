// Напиши функцию convert(fn, array), которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
//
//      function square(x) { return x * x; } // возведение в квадрат
//      console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
//      console.log(convert(square, [])); // []
//
// Обрати внимание: функция не должна изменять переданный ей массив:
//
//     let arr = [1, 2, 3];
// console.log(convert(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]

let arr = [1, 2, 3, 4];

function convert(fn, array) {
   return array.map((item) => fn(item))
}

function square(x) {
    return x * x;
}

console.log(convert(square, arr))
console.log(arr)