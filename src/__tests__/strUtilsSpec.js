import strUtils from '../index';

describe('strUtils', () => {
  describe('validate function', () => {
    it('should throw error when input is empty or null', () => {
      expect(() => {
        strUtils.validate();
      }).toThrowError('Input text is not provided');

      expect(() => {
        strUtils.validate('');
      }).toThrowError('Input text is not provided');


    });

    it('should throw error when input type is not string', () => {
      expect(() => {
        strUtils.validate([]);
      }).toThrowError('Input text should be of type string');

      expect(() => {
        strUtils.validate(123);
      }).toThrowError('Input text should be of type string');

      expect(() => {
        strUtils.validate({});
      }).toThrowError('Input text should be of type string');

    });
  });

  describe('toTitleCase', () => {
    test("should return the string in 'Title Case' format for the given space separed text input", () => {
      let output = strUtils.toTitleCase('hello World');
      expect(output).toEqual('Hello World');

      output = strUtils.toTitleCase('HELLO WORLD');
      expect(output).toEqual('Hello World');

      output = strUtils.toTitleCase('hello world');
      expect(output).toEqual('Hello World');
    });

    test("should return the string in 'Title Case' format for the given hyphen separed text input", () => {
      let output = strUtils.toTitleCase('hello-world');
      expect(output).toEqual('Hello-World');

      output = strUtils.toTitleCase('HELLO-WORLD');
      expect(output).toEqual('Hello-World');

      output = strUtils.toTitleCase('hello-world');
      expect(output).toEqual('Hello-World');
    });

    test("should return the string in 'Title Case' format for the given single word input", () => {
      let output = strUtils.toTitleCase('hello');
      expect(output).toEqual('Hello');

      output = strUtils.toTitleCase('HELLO');
      expect(output).toEqual('Hello');
    });

    test("should return the string in 'Title Case' format for the given alphanumeric word input", () => {
      let output = strUtils.toTitleCase('hello123');
      expect(output).toEqual('Hello123');

      output = strUtils.toTitleCase('HELLO123');
      expect(output).toEqual('Hello123');
    });
  });

  describe('toCamelCase', () => {
    test("should return the string in 'camelCase' format for the given space separed text input", () => {
      let output = strUtils.toCamelCase('hello World');
      expect(output).toEqual('helloWorld');

      output = strUtils.toCamelCase('HELLO WORLD');
      expect(output).toEqual('helloWorld');

      output = strUtils.toCamelCase('hello world');
      expect(output).toEqual('helloWorld');
    });

    test("should return the string in 'camelCase' format for the given hyphen separed text input", () => {
      let output = strUtils.toCamelCase('hello-world');
      expect(output).toEqual('helloWorld');

      output = strUtils.toCamelCase('HELLO-WORLD');
      expect(output).toEqual('helloWorld');

      output = strUtils.toCamelCase('hello--world');
      expect(output).toEqual('helloWorld');
    });

    test("should return the string in 'camelCase' format for the given alphanumeric input", () => {
      let output = strUtils.toCamelCase('hello world123');
      expect(output).toEqual('helloWorld123');

      output = strUtils.toCamelCase('HELLO WORLD123');
      expect(output).toEqual('helloWorld123');
    });

    test("should return the string in 'lowercase' format for the given single input", () => {
      let output = strUtils.toCamelCase('world123');
      expect(output).toEqual('world123');

      output = strUtils.toCamelCase('WORLD123');
      expect(output).toEqual('world123');
    });
  });

  describe('randomString', () => {
    test('return random string when no input is provided', () => {
      let output = strUtils.randomString();
      expect(typeof output === 'string').toBe(true);
      expect(output.length).toBe(10);
    });

    test('return random string of given length', () => {
      let output = strUtils.randomString(5);
      expect(output.length).toBe(5);

      output = strUtils.randomString(10);
      expect(output.length).toBe(10);

      output = strUtils.randomString(100);
      expect(output.length).toBe(100);
    });

    test('return random string of given length which only has alphabets', () => {
      let output = strUtils.randomString(5, { alphabetsOnly: true });
      expect(output.length).toBe(5);

      output = strUtils.randomString(15, { alphabetsOnly: true });
      expect(output.length).toBe(15);
    });

    test('throws error when incorrect input passed', () => {
      let output = strUtils.randomString(15, { alphabetsOnly: false });
      expect(output.message).toMatch(/Incorrect options passed/);

      output = strUtils.randomString(15, {});
      expect(output.message).toMatch(/Incorrect options passed/);

      output = strUtils.randomString(15, []);
      expect(output.message).toMatch(/Incorrect options passed/);

      output = strUtils.randomString(15, { random: 'value' });
      expect(output.message).toMatch(/Incorrect options passed/);

      output = strUtils.randomString(-5);
      expect(output.message).toMatch(/should be positive number/);

      output = strUtils.randomString('5');
      expect(output.message).toMatch(/should be number/);
    });
  });
});
