
function calcRecArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Wrong parameters type. Only numbers accepted')
    }
    return width * height;
}

try {
    calcRecArea('d', 3)
} catch (e) {
    console.log(e.message)
}