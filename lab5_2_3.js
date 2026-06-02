// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним.
// Очікуваний результат: true.
// const numbers = [2, 4, 6, 8, 10];

const numbers = [2, 4, 6, 8, 10];

let result2 = true;
for (let num of numbers) {
  if (num % 2 !== 0) {
    result2 = false;
    break;
  }
}

console.log(result2); // true
