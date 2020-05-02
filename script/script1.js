"use strict";

//let a = 5;
//console.log("a: ", a);
//let question = confirm("Тебе есть 18 лет?");
//let question2 = prompt("Сколько тебе лет?", "18");
//console.log(question2);

//console.log(Boolean(5));
//console.log(!!"js");

//console.log(String([1,2,3]));
//console.log(typeof (10+""));
//console.log(typeof (a.toString()));

//console.log(typeof Number("33"));
//console.log(typeof + "10");
//let n = 10;
//n *= 1;
//console.log(typeof n);

//console.log(parseInt("10")); //переобразуют число в строку символ за символом
//console.log(parseFloat("10.5"));

/*

Если (жарко) {
    одеваем шорты;
    одеваем футболку;
} иначе {
    одеваем джинсы;
    одеваем кофту;
}

*/

let n = 3;
if (n === 5){
    console.log("команда 1");
} else if(n === 4){
    console.log("команда 2");
} else {
    console.log("команда 3");
}

switch(n) {
    case "3":
    case 4:
    case 5:
        console.log("3-5");
        break;
    case 6:
        console.log(6);
        break;
    default:
        console.log("не верно");
}

let money = 12000;
let income = 'фриланс';
let addExpenses = 'Покупка еды, Аренда квартиры, Покупка софта';
let deposit = false;
let mission = 10000000;
let period = 5;



money = prompt("Ваш месячный доход?");
console.log(money);
console.log(typeof money);

let addExpensess = prompt("Пересичлите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.split(','));

deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);
console.log(typeof deposit);
console.log(typeof income);

let expenses = getExpeses();
let expenses1 = getExpeses();
let what = prompt("Во сколько это обойдется?");
let what1 = prompt("Во сколько это обойдется?");

let budgetMonth = money - what - what1;
console.log('budgetMonth', budgetMonth);

function getExpeses(text) {
    if (text != null) {
        return prompt(text);
    }
        
    return prompt("Какие обязательные ежемесячные расходы у вас есть?");
}

let monthCountToGoal = Math.ceil(mission / budgetMonth); 
console.log('monthCountToGoal', monthCountToGoal);

let budgetDay = budgetMonth / 30;
let monthCountToGoal1 = Math.floor(mission / budgetMonth);
console.log('monthCountToGoal1', monthCountToGoal1);

if (budgetDay >= 800) {
    console.log("Высокий уровень дохода");
        
} else if (budgetDay >= 300){
    console.log("Средний уровень дохода");
} else if (budgetDay > 0){
    console.log("Низкий уровень дохода");
} else if (budgetDay <= 0){
    console.log("Что то пошло не так");
}

