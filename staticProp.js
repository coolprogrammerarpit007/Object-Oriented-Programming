`use strict`;

class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`UserName: ${this.userName}`);
  }
  static createId() {
    return `123`;
  }
}

const arpit = new User(`Arpit`);
// console.log(arpit.createId());

class Teacher extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}

const teacher1 = new Teacher(`AatmaRam Bhide`, `arb@420.in`);
// console.log(teacher1);

// static makes, instances of class does not acess method of class
