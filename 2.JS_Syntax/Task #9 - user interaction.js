// Задача №9 - взаимодействие с пользователем
// Напишите код который при открытии страницы запросит у пользователя его имя(prompt).
// После ввода имени, вывести ему сообщение `Привет ${name}`.
// Спросить у пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`,
// если его ответ Да и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет.

let name = prompt('What is your name?');

if (name) alert(`Hello ${name}`);

if (confirm('Are you familiar with JS?')) {
    alert('Well done!');
} else {
    alert('You can start learning write now!')
}