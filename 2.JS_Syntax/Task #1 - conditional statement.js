// Задача №1 - условный оператор
// Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт,
// который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)


let n = 5;
let word;

switch(n) {
    case 0:
        word = "zero";
        break;
    case 1:
        word = "one";
        break;
    case 2:
        word = "two";
        break;
    case 3:
        word = "three";
        break;
    case 4:
        word = "four";
        break;
    case 5:
        word = "five";
        break;
    case 6:
        word = "six";
        break;
    case 7:
        word = "seven";
        break;
    case 8:
        word = "eight";
        break;
    case 9:
        word = "nine";
        break;
    default:
        word = "unknown";
        break;
}

console.log(word);
