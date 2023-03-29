// Задача №6 - условный оператор
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//     Error, если введено не число


let value = +prompt('Enter a number', '');

if (isNaN(value)) {
    alert('Error: Not a number');
} else if (value > 0) {
    alert('1');
} else if (value < 0) {
    alert('-1');
} else {
    alert('0');
}