let elem = document.getElementById('elem');

elem.onclick = function () {
    alert(`Ширина #elem: ${elem.clientWidth}\nВысота #elem: ${elem.clientHeight}`)
    elem.style.width= elem.clientWidth * 2 + 'px';
    elem.style.height= elem.clientHeight * 2 + 'px';
}