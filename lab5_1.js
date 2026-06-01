// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без
// id, а також коллбек. Функція створює об'єкт товару,
// додаючи йому унікальний ідентифікатор у
// властивість id та викликає коллбек передаючи йому
// створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт
// продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт
// продукту і логіює загальну вартість товару в консоль

function createProduct(obj, callback) {
  obj.id = Date.now();
  callback(obj);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

// приклади в консоль
createProduct({ name: "Apple", price: 10, quantity: 5 }, logProduct);
createProduct({ name: "Banana", price: 7, quantity: 3 }, logTotalPrice);
