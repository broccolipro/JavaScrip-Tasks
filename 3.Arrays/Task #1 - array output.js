// Задача №1 - вывод массива
// Создайте массив из n чисел и выводите его в консоль 5 разными способами:
//     for, while, do … while
//     for in
//     for of
//     forEach
//     map
// В конце кода, пишите в комментарии свое мнение какой из способов лучше. Найдите еще один способ вывода массива.

let arr = [1,2,3,4,5,6,7,8,9]

// Using a for loop
console.log('Using for loop:');
for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i])
}

// Using a while loop
console.log('Using while loop:');
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// Using a do-while loop
console.log('Using do-while loop:');
let k = 0;
do {
    console.log(arr[k]);
    k++;
}while(k < arr.length);


// Using for-in loop
console.log('Using for-in loop:');
for (let index in arr ) {
    console.log(arr[index]);
}


// Using for-of loop
console.log('Using for-of loop:')
for (let item of arr) {
    console.log(item);
}


// Using foEach loop
console.log('Using forEach loop: ')
arr.forEach((item) => console.log(item));


// Using map method
console.log('Using map method:');
arr.map((item) => console.log(item))

// Another way to output an array
console.log('Another way using join method:')
console.log(arr.join(' '))

// Или просто вот так :)
console.log('Или просто вот так :)')
console.log(arr)

