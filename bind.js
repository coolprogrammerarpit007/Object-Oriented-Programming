`use strict`;

class React {
  constructor() {
    this.library = `React`;
    this.server = `https://localhost:300`;

    // requirment
    document
      .querySelector(`button`)
      .addEventListener(`click`, this.handleClick.bind(this));
  }

  handleClick() {
    console.log(this);
    console.log(`Button clicked!`);
    console.log(this.server);
  }
}

const app = new React();
