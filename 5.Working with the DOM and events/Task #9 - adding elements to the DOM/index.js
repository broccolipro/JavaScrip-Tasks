

function showNotification(options) {
    let div = document.createElement('div');
    div.innerText = options.message;
    div.style.top = options.top + 'px'
    div.style.right = options.right + 'px'
    div.classList.add('notification', options.className);

    document.body.append(div);
    setTimeout(() => {
        div.remove();
    }, 1500)
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    message: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});
