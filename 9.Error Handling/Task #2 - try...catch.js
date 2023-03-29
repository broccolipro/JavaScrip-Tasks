// Задача №2 - try...catch
// Используя try … catch реализуйте обработчик ошибки вызова несуществующей функции
// nonExistentFunction().
//     В случае вызова данной функции, в консоль выдать сообщение “Такая функция не
// существует”
//

try {
    nonExistentFunction()
}catch (e) {
    console.log(e.message)
}