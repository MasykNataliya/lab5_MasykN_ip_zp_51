// Напишіть функцію, яка приймає массив об&#39;єктів і
// повертає новий массивЗробіть знижку 20 % на всі
// фрукти у масивіНадайте ід для кожного продуктуconst
// fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },

// Всі
// непарні

//   { name: "grapes", price: 750 },
// ];

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function makeDiscount(fruits) {
  return fruits.map((fruit, index) => {
    return {
      id: index + 1,
      name: fruit.name,
      price: fruit.price * 0.8,
    };
  });
}

const newFruits = makeDiscount(fruits);
console.log(newFruits);
