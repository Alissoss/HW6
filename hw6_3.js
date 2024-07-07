//Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.
function camelCase(str, separator) {
    return str.split(separator).map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }) .join('');
}
console.log(camelCase('this_is_a_test', '_'));
/*Якщо спробувати однією стрічкою:
const camelCase = (str, separator) => str.split(separator).map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
console.log(camelCase('hello_world', '_'));
*/