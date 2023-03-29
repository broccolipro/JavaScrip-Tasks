let input = document.getElementById('input');

input.addEventListener("keydown", function(event) {
    let value = input.value;
    let regex = new RegExp(/^\d*\.?\d*$/);

    if (event.code === 'Backspace') {
        return;
    }
    if (!regex.test(value + event.key)) {
        event.preventDefault();
    }
});


