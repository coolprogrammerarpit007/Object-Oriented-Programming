`use strict`;

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password.toUpperCase()}Arpit`;
  }

  set password(value) {
    return (this._password = value);
  }
}

const user1 = new User(`hitesh123.ai`, `12345678`);
console.log(user1.password);
