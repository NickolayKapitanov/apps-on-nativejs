'use strict';

let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue  = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item');

let btnStart = document.querySelector('#start'),
    btnExpensesItem = document.querySelector('.expenses-item-btn'),
    btnOptionalExpensesItem = document.querySelector('.optionalexpenses-btn'),
    btnCount = document.querySelector('.count-budget-btn');

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

btnExpensesItem.disabled = true;
btnOptionalExpensesItem.disabled = true;
btnCount.disabled = true;

btnStart.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
   
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value =  new Date(Date.parse(time)).getDate();

    btnExpensesItem.disabled = false;
    btnOptionalExpensesItem.disabled = false;
    btnCount.disabled = false;
});

btnExpensesItem.addEventListener('click', function() {
    let sumItem = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let question1 = expensesItem[i].value;
        let question2 = expensesItem[++i].value;
    
        if ( (typeof(question1)) === 'string' && (typeof(question1)) != null && (typeof(question2)) != null 
        && question1 != '' && question2 != '' && question1.length < 50) {
            appData.expenses[question1] = question2;
            sumItem += +question2;
        } else {
            console.log ("bad result");
            i--;
        }
    }
    expensesValue.textContent = sumItem;
});

btnOptionalExpensesItem.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question1 = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = question1;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCount.addEventListener('click', function() {

    if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent)/ 30).toFixed(1);
    dayBudgetValue.textContent = appData.moneyPerDay;

 if(appData.moneyPerDay <= 1000) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 5000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Ошибка";
    }
 } else {
    dayBudgetValue.textContent = 'Произошла ошибка!';
 }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = (sum/100/12*percent).toFixed(1);
        appData.yearIncome = (sum/100*percent).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        
        appData.monthIncome = (sum/100/12*percent).toFixed(1);
        appData.yearIncome = (sum/100*percent).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
