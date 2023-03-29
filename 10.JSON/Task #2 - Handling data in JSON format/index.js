// Задача №2 - Обработка данных в формат JSON
// Используя структуру из предыдущей задачи, создайте массив сотрудников и
// напишите следующий функционал:
//     ● вывод в странице всех сотрудников
// ● вывод в отдельный HTML блок общей информации о ЗП сотрудников
// ○ средняя ЗП по всем сотрудникам
// ○ минимальная ЗП
// ○ максимальная ЗП
// ○ сумма всех ЗП


let employees = [
    {"employee": {
        "name": {
            "first": "Иван",
            "last": "Иванов",
            "middle": "Иванович"
        },
        "date_of_birth": "1990-01-01",
        "mobile_number": "+1234567890",
        "address": {
            "street": "ул. Пушкина",
            "building": "1",
            "apartment": "10",
            "city": "Москва",
            "postal_code": "123456",
            "country": "Россия"
        },
        "email": "ivanov@example.com",
        "gender": "мужской",
        "position": "менеджер",
        "start_date": "2015-01-01",
        "IDNP": "123456789",
        "salary": 50000,
        "place_of_birth": "Москва",
        "work_experience": 8,
        "department": "отдел продаж",
        "home_number": "+0987654321",
        "work_schedule": {
            "start_time": "08:00",
            "end_time": "17:00",
            "lunch_start": "12:00",
            "lunch_end": "13:00"
        }
    }},
    {"employee": {
        "name": {
            "first": "Петр",
            "last": "Петров",
            "middle": "Петровичь"
        },
        "date_of_birth": "1990-01-01",
        "mobile_number": "+1234567890",
        "address": {
            "street": "ул. Пушкина",
            "building": "1",
            "apartment": "10",
            "city": "Москва",
            "postal_code": "123456",
            "country": "Россия"
        },
        "email": "ivanov@example.com",
        "gender": "мужской",
        "position": "менеджер",
        "start_date": "2015-01-01",
        "IDNP": "123456789",
        "salary": 20000,
        "place_of_birth": "Москва",
        "work_experience": 8,
        "department": "отдел продаж",
        "home_number": "+0987654321",
        "work_schedule": {
            "start_time": "08:00",
            "end_time": "17:00",
            "lunch_start": "12:00",
            "lunch_end": "13:00"
        }
    }},
    {"employee": {
        "name": {
            "first": "Василий",
            "last": "Василов",
            "middle": "Васильевичь"
        },
        "date_of_birth": "1990-01-01",
        "mobile_number": "+1234567890",
        "address": {
            "street": "ул. Пушкина",
            "building": "1",
            "apartment": "10",
            "city": "Москва",
            "postal_code": "123456",
            "country": "Россия"
        },
        "email": "ivanov@example.com",
        "gender": "мужской",
        "position": "менеджер",
        "start_date": "2015-01-01",
        "IDNP": "123456789",
        "salary": 30500,
        "place_of_birth": "Москва",
        "work_experience": 8,
        "department": "отдел продаж",
        "home_number": "+0987654321",
        "work_schedule": {
            "start_time": "08:00",
            "end_time": "17:00",
            "lunch_start": "12:00",
            "lunch_end": "13:00"
        }
    }}
]

for (let employee of employees) {
    createEmployeeBlock(employee)
}

function createEmployeeBlock(json) {
    let span = document.createElement('span');
    span.innerHTML = `<h1>${JSON.stringify(json.employee.name.first)}</h1><pre>${JSON.stringify(json, null, 2)}</pre>`;
    document.body.append(span);

}

let salaries = [];
for (let empl of employees) {
    salaries.push(empl.employee.salary)
}
let avgSalary = salaries.reduce((acc, cur) => acc + cur, 0);
let maxSalary = Math.max(...salaries);
let minSalary = Math.min(...salaries);



let SalaryBlock = document.createElement('span');
SalaryBlock.innerHTML = `<h1>Среднаяя зарплата работников: ${Math.trunc(avgSalary / employees.length)}</h1>
                         <h1>Минимальная ЗП: ${minSalary}</h1>
                         <h1>Максимальная ЗП: ${maxSalary}</h1>
                         <h1>Сумма всех ЗП: ${avgSalary}</h1>`;

document.body.append(SalaryBlock)

