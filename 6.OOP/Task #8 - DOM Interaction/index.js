class Elem {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    html(text) {
        this.element.innerHTML = text;
        return this;
    }

    append(text) {
        this.element.innerHTML += text;
        return this;
    }

    prepend(text) {
        this.element.innerHTML = text + this.element.innerHTML;
        return this;
    }

    attr(name, value) {
        this.element.setAttribute(name, value);
        return this;
    }
}

let elem = new Elem('#div');


elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('name', 'hello');
