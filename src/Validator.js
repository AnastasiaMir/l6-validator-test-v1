import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema([(arr) => Array.isArray(arr)]);
  }

  object() {
    return new ObjectSchema();
  }
}

const v = [1, 2, 3];

console.log(typeof v);
