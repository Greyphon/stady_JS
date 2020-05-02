let myVar;

myVar = 10;
console.log(typeof myVar);
myVar = "Hello world";
console.log(typeof myVar);
myVar = true;
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = undefined;
console.log(typeof myVar);
myVar = Symbol();
console.log(typeof myVar);
myVar = {};
console.log(typeof myVar);

let n = 15;

n += 3;
console.log("n: ", n);
n -= 6;
console.log("n: ", n);
n /= 3;
console.log("n: ", n);

console.log(3 > 2);
console.log(3 < 2);
console.log(5 >= 3);
console.log(10 <= 5);
console.log(5 === 5);
console.log(5 !== 6);
console.log(5 == "5");
console.log(5 != "5");

console.log(Math.sqrt(25));

console.log(Math.pow(5, 3));

console.log(Number.isInteger(5.5));


let myString = "hello world";
console.log("Hello world");

console.log("Hello" + "world");


let str = "Hello my Friends!";

console.log(str.length); //считает сколько символов в строке

console.log(str.toUpperCase()); //делает все заглавнуе буквы

console.log(str.toLocaleLowerCase()); // переводит строку в нижний регистр

console.log(str.charAt(0)); //выводит указаную по индексу букву
console.log(str.charAt(1)); // эта функция уже устарела


console.log(str[0]); //выводит указанную в индексе букву

console.log(str.substring(6));  //показывает с какого индекс вывести строку
console.log(str.substring(9, 15)); //показывает по какой индекс выводить строку
console.log(str.slice(6)); //
console.log(str.slice(-8));
console.log(str.substr(6, 9));

console.log(str.indexOf("Friends")); //находить индекс в строку

console.log(str.replace("my Friends", "Worlds")); //заменяет слово ну другое

console.log(str.split(" ")); //разделяет на отдельные слова


let money = 12000;
console.log(typeof money);
let income = "Frilans";
console.log(typeof income);
let addExpensess = "Интернет, Курсы, Биржа";
console.log(typeof addExpensess);
let deposit = 3 < 2;
console.log(typeof deposit);
let mission = 10000000;
console.log(typeof mission);
let period = 3;
console.log(typeof period);

console.log(income.length);
console.log("Период " + period + " месяца");
console.log("Цель заработать " + mission + " долларов");
console.log(addExpensess.toLocaleLowerCase());
addExpensess= addExpensess.split(', ');
console.log(addExpensess);

let budgetDay;
budgetDay = money / 30;
console.log("Результат: ", budgetDay);
budgetDay = (money % 30);
console.log("Остаток: ", budgetDay);


let num = 266219,
    rezult,
    rezult1;

rezult = 2 * 6 * 6 * 2 * 1 * 9;
console.log(rezult);
rezult1 = rezult ** 3;
console.log(rezult1);
String(rezult1).slice(0,6);
console.log(rezult1.substring(0, 2));







