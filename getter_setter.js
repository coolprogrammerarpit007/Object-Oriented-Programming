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
    this._password = value;
  }
}

const user1 = new User(`hitesh123.ai`, `12345678`);
// console.log(user1.password);

// now setting getter and setter for the object

const user = {
  _email: `ap@gmail.com`,
  _password: `abc`,

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

let user2 = Object.create(user);
console.log(user2.email);
