`use strict`;

function setUserName(userName) {
  // complex db calls
  this.userName = userName;
}

function creteUserName(userName, email, password) {
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const user1 = new creteUserName(`Arpit`, `arpit@gmail.com`, `12345678`);
console.log(user1);
console.log(user1.userName);
