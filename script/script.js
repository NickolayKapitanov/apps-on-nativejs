'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 1000) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 5000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    };
};
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.monthIncome = (save/100/12*percent).toFixed(1);
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
};
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let question1 = prompt('Введите необязательную статью расходов в этом месяце', '');
        let question2 = +prompt('Во сколько обойдется?', '');
    
        if ( (typeof(question1)) === 'string' && (typeof(question1)) != null && (typeof(question2)) != null 
        && question1 != '' && question2 != '' && question1.length < 50) {
            appData.optionalExpenses[i+1] = question2;
        } else {
            console.log ("bad result");
            i--;
        }
    };
}
chooseOptExpenses();