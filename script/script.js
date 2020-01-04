'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



for (let i = 0; i < 2; i++) {
    let question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    let question2 = +prompt('Во сколько обойдется?', '');

    if ( (typeof(question1)) === 'string' && (typeof(question1)) != null && (typeof(question2)) != null 
    && question1 != '' && question2 != '' && question1.length < 50) {
        appData.expenses[question1] = question2;
    } else {
        console.log ("bad result");
        i--;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 1000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 5000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
};