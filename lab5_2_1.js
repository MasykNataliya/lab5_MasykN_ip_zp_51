// Дано масив об&#39;єктів. Створіть новий масив, що
// містить всі значення з масивів values кожного
// об&#39;єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
// const data = [
// { id: 1, values: [1, 2, 3] },
// { id: 2, values: [4, 5, 6] },
// { id: 3, values: [7, 8, 9] },
// ];

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

let result = [];

for (const item of data) {
  result = result.concat(item.values);
}

console.log(result);
