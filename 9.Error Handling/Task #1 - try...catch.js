// Задача №1 - try..catch
// Используя try … catch реализуйте обработку ошибки деления на 0, таким образом чтобы
// при попытки деления не 0 не выходила ошибка а выводилось в консоль сообщение “Вы
// не можете делить на 0”.


try {
    let result = 1 / 0;
    if (result == 'Infinity') {
        throw new Error("You can't divide by zero!");
    }
    console.log(result);
}catch (e) {
    console.log(e.message)
}

