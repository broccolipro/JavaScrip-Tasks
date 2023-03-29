let player = document.getElementById('player');
let player2 = document.getElementById('player2');
let container = document.getElementById('viewport');


player.onclick = function () {
    player.focus();
    player.classList.add('selected')
    player2.classList.remove('selected')
}

player2.onclick = function () {
    player2.focus();
    player2.classList.add('selected')
    player.classList.remove('selected')
}


function move(elem) {
    let leftPos = elem.getBoundingClientRect().left;
    let topPos = elem.getBoundingClientRect().top ;

    elem.onkeydown = function (event) {
        switch (event.key) {
            case 'ArrowLeft' :
                leftPos -= 10;
                break;
            case 'ArrowRight' :
                leftPos += 10;
                break;
            case 'ArrowUp' :
                topPos -= 10;
                break;
            case 'ArrowDown' :
                topPos += 10;
                break;
        }

        elem.style.left = leftPos + 'px';
        elem.style.top = topPos + 'px';
    }
}

function moveIn(elem, container) {

    let leftPos = elem.getBoundingClientRect().left;
    let topPos = elem.getBoundingClientRect().top ;

    elem.onkeydown = function (event) {

        switch (event.key) {
            case 'ArrowLeft' :
                leftPos -= 10;
                break;
            case 'ArrowRight' :
                leftPos += 10;
                break;
            case 'ArrowUp' :
                topPos -= 10;
                break;
            case 'ArrowDown' :
                topPos += 10;
                break;
        }

        elem.style.left = leftPos + 'px';
        elem.style.top = topPos + 'px';

        let leftBorder = container.getBoundingClientRect().left;
        let rightBorder = container.getBoundingClientRect().right;
        let topBorder = container.getBoundingClientRect().top;
        let bottBorder = container.getBoundingClientRect().bottom;


        let l = elem.getBoundingClientRect().left;
        let r = elem.getBoundingClientRect().right;
        let t = elem.getBoundingClientRect().top;
        let b = elem.getBoundingClientRect().bottom;

        if (l < leftBorder) {
            elem.style.left = leftBorder + 'px';
            leftPos = leftBorder;
        }
        if (r > rightBorder) {
            elem.style.left = rightBorder - elem.offsetHeight + 'px';
            leftPos = rightBorder - elem.offsetHeight;
        }
        if (t < topBorder) {
            elem.style.top = topBorder + 'px';
            topPos = topBorder;
        }
        if (b > bottBorder) {
            elem.style.top = bottBorder - elem.offsetHeight + 'px';
            topPos = bottBorder - elem.offsetHeight;
        }
    }


}

move(player)
moveIn(player2, container)