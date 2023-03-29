
function dragAndDrop(elem, target1, target2) {

    target2.ondragover = function (event) {
        event.preventDefault();
    }

    target1.ondragover = function (event) {
        event.preventDefault();
    }

    target2.ondrop = function (event) {
        event.target.append(elem)
    }
    target1.ondrop = function (event) {
        let item = event.dataTransfer.getData('id');
        event.target.append(elem)
    }

}


let parentLeft = document.getElementById('parent-left');
let parentRight = document.getElementById('parent-right');
let elem = document.getElementById('child');

dragAndDrop(elem, parentLeft, parentRight)