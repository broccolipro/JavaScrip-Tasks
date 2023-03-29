let addBtn = document.getElementById('addBtn');
let input = document.getElementById('input');
let ol = document.getElementById('ol')

addBtn.disabled = true;

addBtn.onclick = function () {
    let li = document.createElement('li');
    li.innerText = input.value;
    ol.append(li);
    input.value = '';
    input.focus();
}

input.oninput = function () {
    addBtn.disabled = !input.value.trim();
}

ol.onclick = function (event) {
    if (event.target.tagName === 'LI') {
        alert(event.target.innerText)
    }
}