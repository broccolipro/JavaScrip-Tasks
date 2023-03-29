let anchors = document.querySelectorAll('a');

for (let a of anchors) {
    if (a.innerText.includes('https://')) a.style.color = 'red';
}


