/*Вам необхідно написати функцію doubleLetter(str),
 яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo
*/
var s = "hello";
console.log(
    s.split('').map(function(v){
return v+v;
}).join(''));