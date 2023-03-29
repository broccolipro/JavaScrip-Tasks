class FormElement {
    element;
    constructor(type, id, placeholder, value) {
        this.type = type;
        this.id = id;
        this.placeholder = placeholder;
        this.value = value;
    }

    create() {
        let elem = document.createElement('div');
        elem.insertAdjacentHTML('beforeend',
            `<input type="${this.type}" placeholder="${this.placeholder}" id="${this.id}" value="${this.value}" >`) ;
        this.element = elem.firstElementChild;
        return this.element
    }

    getValue() {
        return this.element.value;
    }

    validate() {
        let input = this.element;
        switch (input.id) {
            case 'name' :
                if (!input.value.trim()) {
                    makeWrong(input, 'Enter name')
                }else {
                    makeSuccess(input);
                    return true;
                }
                break;
            case 'email' :
                if (!input.value.includes('@')) {
                    makeWrong(input, 'Enter a valid email')
                }else {
                    makeSuccess(input);
                    return true;
                }
                break;
            case 'age' :
                if (input.value < 10) {
                    makeWrong(input, 'Age should ve >=10')
                }else {
                    makeSuccess(input);
                    return true;
                }
                break;
            case 'birthdate' :
                if (!/^\d{2}\.\d{2}\.\d{4}$/.test(input.value)) {
                    makeWrong(input, 'Enter valid date like 01.01.1970')
                }else {
                    makeSuccess(input);
                    return true;
                }
        }
    }

}


const form = document.createElement('form');

const nameFormElem = new FormElement('text', 'name', 'Name', 'John');
const emailFormElem = new FormElement('text', 'email', 'E-mail', 'email@mail.com');
const ageFormElem = new FormElement('text', 'age', 'Age', '62');
const birthdateFormElem = new FormElement('text', 'birthdate', 'Date of birth', '01.01.1970');
const submitFormElem = new FormElement('button', 'submit', '', 'Save');

form.append(nameFormElem.create(),
            emailFormElem.create(),
            ageFormElem.create(),
            birthdateFormElem.create(),
            submitFormElem.create()
            );

submitFormElem.element.addEventListener('click', () => {

    if (nameFormElem.validate() &&
        emailFormElem.validate() &&
        ageFormElem.validate() &&
        birthdateFormElem.validate())
    {
        document.getElementById('dataStatus').innerHTML = `<h1 style="color: green" >Data is stored!</h1>`
    }else {
        document.getElementById('dataStatus').innerHTML = `<h1 style="color: red" >Invalid data!</h1>`
    }
})

document.body.append(form);

function makeWrong(input, message) {
    if (input.nextElementSibling.tagName === 'LABEL') {
        input.nextElementSibling.remove();
    }

    input.insertAdjacentHTML('afterend', `<label style="color: red">${message}</label>`);
    input.style.borderColor = 'red';
}

function makeSuccess(input) {
    input.style.borderColor = 'green';
    if (input.nextElementSibling.tagName === 'LABEL') {
        input.nextElementSibling.remove();
    }
}