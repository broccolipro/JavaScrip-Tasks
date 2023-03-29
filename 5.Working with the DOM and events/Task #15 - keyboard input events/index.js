let input = document.getElementById('input');

input.onblur = function () {
    if (!Number(input.value)) input.value = '';
}


