'use strict';
class StringHelper {
  constructor() {
    this.toTitleCase = this.toTitleCase.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate(input) {
    if(!input)
      return 'Input text is not provided';

    if(typeof input !== 'string')
      return 'Input text should be of type string';

    return true;
  }

  toTitleCase(text) {
    const isValidInput = this.validate(text);

    if(isValidInput == true)
      return text.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
    else
      return new Error(isValidInput);
  }

  toCamelCase(text) {
    const isValidInput = this.validate(text);

    if(isValidInput == true) {
      let outputText = this.toTitleCase(text);
      outputText = outputText.split(" ").join("").split("-").join("");
      return outputText.replace(/\w+/g, (w) => w[0].toLowerCase() + w.slice(1));
    } else {
      return new Error(isValidInput);
    }
  }

  randomString(strLength = 10, options) {
    let randomString = '';
    if(strLength && typeof strLength !== 'number')
      return new Error('Type of length of randomString should be number');
    else if(strLength < 0)
    return new Error('strLength should be positive number');
    else
      randomString = Math.random().toString(36).substring(2, strLength + 2);


    if(options && typeof options === 'object') {
      if(options.hasOwnProperty('alphabetsOnly') && options.alphabetsOnly ) {
          randomString = randomString.replace(/\d/g, (n) => (10 + parseInt(n)).toString(36));
      } else {
        return new Error('Incorrect options passed')
      }
    }



    if(strLength > 0 && strLength > randomString.length) {
        while(randomString.length !== strLength) {
          randomString = (randomString + this.randomString((strLength - randomString.length), options)).substring(0, strLength)
        };
    }
    return randomString;
  }
};

export default StringHelper;