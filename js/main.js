//////    FIRST TASK     ES6 (ES2015) 
'use    '; // a = 5; console.log( a ); -> ERROR  
// alert("Task Script:");

//////  GETTING HTML ELEMENTS
let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

// let money = 5000, time = 12;
let money , time ;

// BUTTONS DISABLED
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

function start() {
    
    // GET DATA FROM USER BY prompt()
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    // WRITE IN OBJ appData
    appData.budget = money;
    appData.timeData = time;    

    // WRITE IN HTML FILE
    budgetValue.textContent =  money.toFixed();

    // WRITE DATE IN HTML FILE  // parse(time) => milisec from 1970
    dayValue.value = new Date(Date.parse(time)).getDate();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    yearValue.value = new Date(Date.parse(time)).getFullYear();

    // BUTTONS ENABLED
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;

}

//// START PROGRAM
startBtn.addEventListener("click", function(event){

    start();
});

// REQUIRED EXPENCES
expensesBtn.addEventListener("click", function(event){

    let sum = 0;
    
    for (let i = 0; i < expensesItem.length ; i++) {

        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

            console.log("verification passed !");
            appData.expenses[a] = b;
            // SUM
            sum += +b ; // +b -> to num

        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

// OPTIONAL EXPENCES
optionalExpensesBtn.addEventListener("click", function(event){

    let optSum = 0;

    for (let i = 0; i < optionalExpensesItem.length; i++) {

        let optExpenses = optionalExpensesItem[i].value;


        if (typeof (optExpenses) === 'string' && typeof (optExpenses) != null && optExpenses != "" && optExpenses.length < 50) {

            console.log("verification passed !");
            appData.optionalExpenses[i] = optExpenses;

            optSum +=  +optExpenses;
            // console.log(appData.optionalExpenses);
        } else {
            i--;
        }
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' + ' ;
    }

    // optionalExpensesValue.textContent = "SUM: " + optSum; => WILL RE WRITE
});

// COUNT DAILY BUDGET && Value Level
countBtn.addEventListener("click", function(event){

    if (appData.budget != undefined) {

        appData.moneyPerDay = ( (appData.budget - +expensesValue.textContent ) / 30).toFixed(1); // !!! toFixed() -> returns str !!!
        dayBudgetValue.textContent = appData.moneyPerDay;

        // Value Level
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {

        dayBudgetValue.textContent =  "Произошла ошибка";
    }
});

// ADDITIONAL INCOMES
incomeItem.addEventListener("input", function(event) {

    let strIncome = incomeItem.value;

        //if (strIncome === "str" && strIncome != "" && strIncome != null) {

            appData.income = strIncome.split(",");
            incomeValue.textContent = appData.income;
        
});

// ACTIVES  => CHECKBOX CHECKING
checkSavings.addEventListener("click", function(){

    if (appData.savings == false) {
        appData.savings = true;
    } else {                        // appData.savings -> switcher
        appData.savings = false;
    }

    // sumValue.value;
});

// SUM
sumValue.addEventListener("input", function() {

    if (appData.savings == true) {

        let sum   =  +sumValue.value,
            perc  =  +percentValue.value;

        // WRITING TO appData
        appData.monthIncome = sum / 100 * perc / 12; 
        appData.yearIncome = sum / 100 * perc ;

        // INPUT ON SCREEN
        monthSavingsValue.textContent =  appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent  =  appData.yearIncome.toFixed(1);
    }
});

// PERSENTS
percentValue.addEventListener("input", function() {

    if (appData.savings == true) {

        let sum   =  +sumValue.value,
            perc  =  +percentValue.value;

        // WRITING TO appData
        appData.monthIncome = sum / 100 * perc / 12; 
        appData.yearIncome = sum / 100 * perc ;

        // INPUT ON SCREEN
        monthSavingsValue.textContent =  appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent  =  appData.yearIncome.toFixed(1);
    }
});

////// MAIN STRUCT
let appData = { // Literal Obj

    budget: money, // PROPERTY:  Key -> Value
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

   
};















