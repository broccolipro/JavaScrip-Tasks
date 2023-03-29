// Задача №9 - работа с ключами объекта
// Задан объект
// const weekDays = {
// 	“Luni”: “Mo”,
// “Marti”: “Tu”,
// “Miercuri”: “We”,
// “Joi”: “Th”,
// “Vineri”: “Fr”,
// “Simbata”: “Sa”,
// “Duminica”: “Su”
// }
// Напишите функцию которая получит как параметр этот объект и вернет следующий объект
// const weekDays = {
// 	“Mo”: “Luni”,
// “Tu”: “Marti”,
// “We”: “Miercuri”,
// “Th”: “Joi”,
// “Fr”: “Vineri”,
// “Sa”: “Simbata”,
// “Su”: “Duminica”
// }
// Придумайте подходящее название для этой функции.

const weekDays = {
        "Luni": "Mo",
       "Marti": "Tu",
    "Miercuri": "We",
         "Joi": "Th",
      "Vineri": "Fr",
     "Simbata": "Sa",
    "Duminica": "Su",
}

function flipObjectKeys(obj) {
    return Object.fromEntries(
        Object.entries(obj).map((item) => item.reverse())
    );
}
console.log(flipObjectKeys(weekDays))
