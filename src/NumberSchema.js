export default class NumberSchema {
  constructor() {
    this.validation = [(num) => typeof num === 'number'];
  }

  isValid(num) {
    const validationResults = this.validation.every((validate) => validate(num));
    return validationResults;
  }
}
