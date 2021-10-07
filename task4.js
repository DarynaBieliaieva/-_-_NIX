/* 
Практика JS 4.
Дан массив ['Саша', 'Петя', 'Оксана'], сделайте из него ['Оксанa', 'Олег', 'Саша']. 
Реализуйте эту задачу, двумя способами. 
В первом исходный массив должен быть изменен, во втором - не должен быть изменен.
*/

// Первый способ

let array = ['Саша', 'Петя', 'Оксана'];
array[1] = 'Олег'
array.reverse();
alert(array);


//Второй способ

let array = ['Саша', 'Петя', 'Оксана'];
let newArray = array.slice();
newArray[1] = 'Олег'
newArray.reverse();
console.log(newArray);
