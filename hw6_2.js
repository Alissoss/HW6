/*Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число,
 що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно,
  четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше,
 ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.
 */
function padString(str, length, symbol, toLeft){
    if (length <= str.length) {
        return str;
    }
    const paddingLength = length - str.length;
    const padding = symbol.repeat(paddingLength);
    if (toLeft) {
        return padding + str;
    } else {
        return str + padding;
    }
}

console.log(padString('Ivan', 6, '*', true));

/* function padString(str, length, symbol, toLeft) {
    if (length <= str.length) {
        return str;
    }

    let padding = symbol.repeat(length - str.length);

    return toLeft ? padding + str : str + padding;
}
console.log(padString('Ivan', 6, '*', true)); 
*/
