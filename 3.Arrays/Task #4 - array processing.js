// Задача №4 - обработка массива
// Напишите функцию sumInputNumbers(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0»


function sumInputNumbers() {
    let numbers = [];

    while (true) {
        let value = parseInt(prompt('Enter a number'))
        if (isNaN(value)) {
            alert(numbers.reduce((acc, value) => acc + value, 0));
            break;
        }
        numbers.push(value);
    }
}

sumInputNumbers();

