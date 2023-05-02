//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let num_1 = 1;
console.log(num_1);
let num_10 = 10;
console.log(num_10);
let num_999= -999;
console.log(num_999);
let num_123=123;
console.log(num_123);
let pi =3.14;
console.log(pi);
let num27 =2.7;
console.log(num27);
let num_16 = 16;
console.log(num_16);
let boolean_1 = true;
console.log(boolean_1);
let boolean_2 = false;
console.log(boolean_2);
// Вивести кожну змінну за допомогою: console.log




//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Arsen';
let middleName = 'Romanovych';
let lastName = 'Halushko';
let result = lastName + ' ' + firstName + ' ' + middleName;
console.log(result);
result2 = `${lastName},  ${firstName}, ${middleName}`;
console.log(result2);


//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

 //   let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);


//Додаткове для тих хто цікавився prompt`oм

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Arsen');
console.log(name);
let lastname2 = prompt('Halushko');
console.log(lastname2);
let surname2 = prompt('Romanovych');
console.log(surname2);