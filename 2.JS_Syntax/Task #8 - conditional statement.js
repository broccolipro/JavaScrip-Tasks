// Напишите код который проверит правильность username и password и выводит следующие сообщения:
//     Привет, если совпадает username и password
// Неправильный пароль если username введен правильно а пароль нет
// Неправильный username, если введен неправильный username
// Ошибка Валидации, если ничего не введено
// PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password)


let username = prompt('Enter username:');
let password = prompt('Enter password:');

if (username && password) {
    if (username === 'correct_username' && password === 'correct_password') {
        alert('Hello');
    } else if (username === 'correct_username' && password !== 'correct_password') {
        alert('Wrong password!')
    } else {
        alert('Wrong username!')
    }

}else {
    alert('Validation error');
}