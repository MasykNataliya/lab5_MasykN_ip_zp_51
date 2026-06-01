// Напиши клас Client який створює об&#39;єкт
//  з ​​властивостями login email
//  Оголоси приватні властивості #login #email,
// доступ до яких зроби через геттер та сеттер login
// email

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

// приклади для тестів
const client1 = new Client("user123", "user123@gmail.com");

console.log(client1.login); // user123
console.log(client1.email); // user123@gmail.com

client1.login = "newUser";
client1.email = "newUser@gmail.com";

console.log(client1.login); // newUser
console.log(client1.email); // newUser@gmail.com
