// Задача №10 - условный оператор и циклы
// Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.
//     const dividers = (number) => {
//        // your code here
// }

const dividers = (number) => {
    if (typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
        console.log('Error: please enter a valid number!');
        return;
    }

    const divisors = [];

    for (let i = 1; i <= number; i ++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    console.log(`The divisors of ${number} are: ${divisors.join(', ')}.`);
}

dividers(13)
