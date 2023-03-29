let textarea = document.getElementById('input');
textarea.value = localStorage.getItem('lastTextareaValue')

textarea.oninput = function () {
    localStorage.setItem('lastTextareaValue', textarea.value);
}