// Задача №2 - циклы
// Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]


let a = 3;
let b = 9;
let sum = 0;

for (let i = a; i <=b; i++) {
    if (i % 2 === 0) sum += i;
}

console.log("The sum of even numbers between " + a + " and " + b + " is " + sum + ".");