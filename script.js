const number = prompt("Введіть число від 1 до 4:");

let result;

switch (number) {
  case "1":
    result = "зима";
    break;
  case "2":
    result = "весна";
    break;
  case "3":
    result = "літо";
    break;
  case "4":
    result = "осінь";
    break;
  default:
    result = "Некоректне значення";
}
alert(result);
console.log(`Результат: ${result}`);
