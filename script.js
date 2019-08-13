//////    FIRST TASK     ES6 (ES2015) 
'use strict'; // a = 5; console.log( a ); -> ERROR  

let money, time;

let appData = {  // Literal Obj

    budget: money,     // PROPERTY:  Key -> Value
    timeData: time,
    expenses: {} ,
    optionalExpenses: {} ,
    income: [] ,
    savings : true

};

function chooseExpenses() {

    let i = 0;    
    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце: ", " "),
            b = prompt("Во сколько обойдется: ", " ");

        if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50 ) {
            
            console.log("verification passed !");
            appData.expenses[a] = b;
            i++;
        }
    } 
    while(i < 2);
}


function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}


function detectDayBudget() {

    appData.moneyPerDay =  (appData.budget / 30).toFixed(1)  ; // !!! toFixed() -> returns str !!!
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}


function checkSavings() {

    if(appData.savings == true) {

        let save    = +prompt("Сколько у вас накоплений: ", " "),
            percent = +prompt("Под какой процент: ", " ");

        appData.monthIncome = save/100 * percent / 12;
        allert("Ваш месячный доход: " + appData.monthIncome);
    }
}


function chooseOptExpenses() {

    for( let i = 1; i <= 3; i ++) {

        let a = prompt("Статья необязательных расходов: ", " ");
            

        if(typeof(a)==='string' && typeof(a) != null  && a != "" &&  a.length < 50 ) {

            console.log("verification passed !");
            appData.expenses[i] = a;
        }
        else {
            i--;
        }    
    }
}



function start () {

    money = +prompt("Ваш бюджет на месяц: ", "");
    time  =  prompt("Введите дату в формате YYYY-MM-DD: ", "");

    chooseExpenses();
    detectLevel();
    detectDayBudget();
    checkSavings();
    chooseOptExpenses();
}
start ();


