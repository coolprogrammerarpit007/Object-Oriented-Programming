`use strict`;

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.userName.toUpperCase()}`;
  }
}

const user1 = new User(
  `Arpit Mishra`,
  `arpit.mishra.out@gmail.com`,
  `12345678`
);

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUserName());
