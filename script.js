//////    FIRST TASK     ES6 (ES2015) 
'use strict'; // a = 5; console.log( a ); -> ERROR  

var money = +prompt("Ваш бюджет на месяц: ", "");
var time  =  prompt("Введите дату в формате YYYY-MM-DD: ", "");

let appData = {  // Literal Obj

    budget: money,  
    timeData: time,
    expenses: {} ,
    optionalExpenses: {} ,
    income: [] ,
    savings : false

};


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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}