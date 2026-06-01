// Напишіть функцію checkBrackets(str) яка приймає
// рядок жс коду (someFn)  і перевіряє правильність
// закриття дужок () {} []

// Всі
// непарні

//   Якщо рядок містить коректний код функція повертає
// true.
//   В іншому випадку повертає false

function checkBrackets(str) {
  const stack = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// приклади
console.log(checkBrackets("someFn()")); // true
console.log(checkBrackets("{[()]}")); // true
console.log(checkBrackets("{[(])}")); // false
console.log(checkBrackets("function() { [ ] }")); // true
