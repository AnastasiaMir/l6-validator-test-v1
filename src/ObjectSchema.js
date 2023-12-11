import _ from 'lodash';

export default class ObjectSchema {
  constructor(shapes) {
    this.shapes = shapes;
  }

  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.shapes).length) {
      return false;
    }
    const iter = (val, key, schema) => {
      if (typeof val !== 'object' || Array.isArray(val)) {
        return schema[key].isValid(val);
      }
      const validator = schema[key];
      return Object.keys(val).map((k) => iter(val[k], k, validator));
    };
    return _.flattenDeep(Object.keys(value).map((key) => iter(value[key], key, this.shapes)))
      .every((value) => value);
  }
}
