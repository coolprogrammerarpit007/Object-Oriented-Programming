`use strict`;

class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`User Name is ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.userName}`);
  }
}

const teacher1 = new Teacher(`Roshan Singh`, `roshn@emai.coom`, `12345678`);
// console.log(teacher1);

const newTeacher = new User(`Mohan Singh`);
newTeacher.logMe();
