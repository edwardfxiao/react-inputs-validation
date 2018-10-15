import { expect } from 'chai';
import { toCamelCase, camelize } from '../js/Inputs/utils.js';

describe('utils', () => {
  it('[camelize("foo bar")]: Should return the camelCase: "fooBar"', () => {
    expect(camelize('foo bar')).equal('fooBar');
  });
  it('[toCamelCase("foo bar")(false)]: Should return the camelCase: "fooBar"', () => {
    expect(toCamelCase('foo bar')()).equal('fooBar');
  });
  it('[toCamelCase("foo bar")(false)]: Should return the camelCase: "fooBar"', () => {
    expect(toCamelCase('foo bar')(false)).equal('fooBar');
  });
  it('[toCamelCase("foo bar")(true)]: Should return the camelCase: "FooBar"', () => {
    expect(toCamelCase('foo bar')(true)).equal('FooBar');
  });
});
