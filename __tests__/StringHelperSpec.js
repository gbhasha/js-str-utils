import StringHelper from '../index';

var stringHelper = new StringHelper();

describe('stringHelper', () => {

  describe('validate', () => {
    test('should throw error when input is empty or null', () => {
      let output = stringHelper.validate()
      expect(output).not.toBe(true);

      output = stringHelper.validate('')
      expect(output).not.toBe(true);
    });

    test('should throw error when input type is not string', () => {
      let output = stringHelper.validate([])
      expect(output).not.toBe(true);

      output = stringHelper.validate(123)
      expect(output).not.toBe(true);

      output = stringHelper.validate({})
      expect(output).not.toBe(true);

    })

  });

  describe('toTitleCase', () => {
    test('should return the string in \'Title Case\' format for the given space separed text input', () => {
      let output = stringHelper.toTitleCase('hello World');
      expect(output).toEqual('Hello World');

      output = stringHelper.toTitleCase('HELLO WORLD');
      expect(output).toEqual('Hello World');

      output = stringHelper.toTitleCase('hello world');
      expect(output).toEqual('Hello World');
    });

    test('should return the string in \'Title Case\' format for the given hyphen separed text input', () => {
      let output = stringHelper.toTitleCase('hello-world');
      expect(output).toEqual('Hello-World');

      output = stringHelper.toTitleCase('HELLO-WORLD');
      expect(output).toEqual('Hello-World');

      output = stringHelper.toTitleCase('hello-world');
      expect(output).toEqual('Hello-World');
    });


    test('should return the string in \'Title Case\' format for the given single word input', () => {
      let output = stringHelper.toTitleCase('hello');
      expect(output).toEqual('Hello');

      output = stringHelper.toTitleCase('HELLO');
      expect(output).toEqual('Hello');
    });

    test('should return the string in \'Title Case\' format for the given alphanumeric word input', () => {
      let output = stringHelper.toTitleCase('hello123');
      expect(output).toEqual('Hello123');

       output = stringHelper.toTitleCase('HELLO123');
      expect(output).toEqual('Hello123');
    });
  });

  describe('toCamelCase', () => {
    test('should return the string in \'camelCase\' format for the given space separed text input', () => {
      let output = stringHelper.toCamelCase('hello World');
      expect(output).toEqual('helloWorld');

      output = stringHelper.toCamelCase('HELLO WORLD');
      expect(output).toEqual('helloWorld');

      output = stringHelper.toCamelCase('hello world');
      expect(output).toEqual('helloWorld');
    });

    test('should return the string in \'camelCase\' format for the given hyphen separed text input', () => {
      let output = stringHelper.toCamelCase('hello-world');
      expect(output).toEqual('helloWorld');

      output = stringHelper.toCamelCase('HELLO-WORLD');
      expect(output).toEqual('helloWorld');

      output = stringHelper.toCamelCase('hello-world');
      expect(output).toEqual('helloWorld');
    });

    test('should return the string in \'camelCase\' format for the given alphanumeric input', () => {
      let output = stringHelper.toCamelCase('hello world123');
      expect(output).toEqual('helloWorld123');

       output = stringHelper.toCamelCase('HELLO WORLD123');
      expect(output).toEqual('helloWorld123');
    });

    test('should return the string in \'lowercase\' format for the given single input', () => {
      let output = stringHelper.toCamelCase('world123');
      expect(output).toEqual('world123');

       output = stringHelper.toCamelCase('WORLD123');
      expect(output).toEqual('world123');
    });
  });

  describe('randomString', () => {
    test('return random string when no input is provided', () => {
      let output = stringHelper.randomString();
      expect(typeof output === 'string').toBe(true);
      expect(output.length).toBe(10);
    });

    test('return random string of given length', () => {
      let output = stringHelper.randomString(5);
      expect(output.length).toBe(5);

       output = stringHelper.randomString(10);
      expect(output.length).toBe(10);

      output = stringHelper.randomString(100);
      expect(output.length).toBe(100);
    });

    test('return random string of given length which only has alphabets', () => {
      let output = stringHelper.randomString(5,{alphabetsOnly: true});
      expect(output.length).toBe(5);

      output = stringHelper.randomString(15,{alphabetsOnly: true});
      expect(output.length).toBe(15);

    });

    test('throws error when incorrect input passed', () => {
      let output = stringHelper.randomString(15,{alphabetsOnly: false});
      expect(output.message).toMatch(/Incorrect options passed/);

      output = stringHelper.randomString(15,{});
      expect(output.message).toMatch(/Incorrect options passed/);

      output = stringHelper.randomString(15,[]);
      expect(output.message).toMatch(/Incorrect options passed/);

      output = stringHelper.randomString(15,{'random':'value'});
      expect(output.message).toMatch(/Incorrect options passed/);

      output = stringHelper.randomString(-5);
      expect(output.message).toMatch(/should be positive number/);

      output = stringHelper.randomString("5");
      expect(output.message).toMatch(/should be number/);
    })
  });
});