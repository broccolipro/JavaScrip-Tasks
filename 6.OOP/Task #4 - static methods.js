class Validator {
    static isEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    static isDomain(domain) {
        const pattern = /^[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,6}$/;
        return pattern.test(domain);
    }

    static isDate(date) {
        return !!new Date(date).valueOf();
    }

    static isPhone(phone) {
        const pattern = /^\+?\d+$/;
        return pattern.test(phone);
    }
}

console.log(Validator.isEmail('hello@world.com'))
console.log(Validator.isDomain('hello.com'))
console.log(Validator.isDate('12.05.2020'))
console.log(Validator.isPhone('+123456789'))
