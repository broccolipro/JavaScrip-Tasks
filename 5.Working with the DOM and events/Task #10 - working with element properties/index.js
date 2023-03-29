let field = document.getElementById('field');
let ball = document.getElementById('ball');



function center() {
    ball.style.left = field.getBoundingClientRect()
        .left + field.offsetWidth / 2 - ball.offsetWidth / 2 +  'px';
    ball.style.top = field.getBoundingClientRect()
        .top + field.offsetHeight / 2 - ball.offsetHeight /2 + 'px';
}

function leftTop() {
    ball.style.left = '';
    ball.style.top = '';
}

function leftBottom() {
    ball.style.left = '';
    ball.style.top = field.getBoundingClientRect()
        .bottom - ball.offsetHeight + 'px';
}

function rightTop() {
    ball.style.top = '';
    ball.style.left = field.getBoundingClientRect()
        .right - ball.offsetWidth + 'px';
}

function rightBottom() {
    ball.style.left = field.getBoundingClientRect()
        .right - ball.offsetWidth + 'px';
    ball.style.top = field.getBoundingClientRect().bottom - ball.offsetHeight + 'px';
}
