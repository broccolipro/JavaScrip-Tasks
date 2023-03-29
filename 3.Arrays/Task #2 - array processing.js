// Создать массив который содержит минимум 5 учеников  (алгоритм должен работать для любого количества учеников)
// и их оценки (минимум 4 оценки)
//
// [
//     {
//         name: “First”,
//         marks: [8, 10, 7, 5, 4]
//      }
// ]
//
// Написать следующие функции обработки этого массива:
//      1. считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
//      2. выводит учеников со у которых средняя оценка < 5
//      3. находит учеников с максимальной и минимальной оценкой
//      4. сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
//      5. выводит тех учеников чья средняя оценка больше средней оценки всего класса


const students = [
    {
        name: "First",
        marks: [8, 10, 7, 5, 4]
    },
    {
        name: "Second",
        marks: [7, 2, 1, 4, 8]
    },
    {
        name: "Third",
        marks: [9, 8, 10, 10, 7]
    },
    {
        name: "Fourth",
        marks: [6, 4, 4, 1, 2]
    },
    {
        name: "Fifth",
        marks: [10, 7, 9, 6, 8]
    }
];

//  1. function - считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
function showAvgMark(students) {
    getAvgMarkStudents(students).forEach((student) => {
        console.log(`${student.name}: ${student.avgMark}`);
    })

    console.log()
}

//  2. выводит учеников со у которых средняя оценка < 5
function showStudentsWithAverMakLessFive(students) {
    getAvgMarkStudents(students).forEach((student) => {
        if (student.avgMark < 5) console.log(student.name)
    })

    console.log()
}

// 3. находит учеников с максимальной и минимальной оценкой
function showStudentsWithMinAmdMaxMark(students) {
    let avgMarks = getAvgMarkStudents(students)
    let marks = avgMarks.map((student) => student.avgMark);
    let maxMark = Math.max(...marks);
    let minMark = Math.min(...marks);

    console.log('Students with max marks: ')
    avgMarks.forEach((student) => {
        if (student.avgMark === maxMark) console.log(student.name)
    })

    console.log('Students with min marks: ')
    avgMarks.forEach((student) => {
        if (student.avgMark === minMark) console.log(student.name)
    })

    console.log()
}

//  4. сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
function showSortedStudentsByAvgMark(students) {
    getAvgMarkStudents(students).sort((a, b) => b.avgMark - a.avgMark)
        .forEach((student) => console.log(student.name));

    console.log()
}

//  5. выводит тех учеников чья средняя оценка больше средней оценки всего класса
function showStudentsAboveClassAvg(students) {
    const avgMarkStudents = getAvgMarkStudents(students);
    const classAvg = avgMarkStudents.reduce((acc, student) => acc + student.avgMark, 0) / students.length;
    avgMarkStudents.forEach((student) => {
        if (student.avgMark > classAvg) console.log(student.name)
    })

    console.log()

}

// Вывод
console.log('Ученики с их средними оценками: ')
showAvgMark(students);

console.log('Ученики с оценками ниже 5:')
showStudentsWithAverMakLessFive(students);

showStudentsWithMinAmdMaxMark(students);

console.log('Отсортирваный список учеников по средним оценкам по убыванию:')
showSortedStudentsByAvgMark(students);

console.log('Ученики с средниб балом выше среднего бала класса: ')
showStudentsAboveClassAvg(students);



// деструктуризация
function getAvgMarkStudents(students) {
    let studentsAvgMarks = [];
    students.map((student) => {
        let avgMark = student.marks.reduce((acc, mark) => acc + mark, 0) / student.marks.length
        studentsAvgMarks.push({
            name: student.name,
            avgMark,
        })
    })

    return studentsAvgMarks;
}




