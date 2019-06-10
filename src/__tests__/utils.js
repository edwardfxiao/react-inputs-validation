import { expect } from 'chai';
import utils from '../js/Inputs/utils.ts';

describe('utils', () => {
  it('[camelize("foo bar")]: Should return the camelCase: "fooBar"', () => {
    expect(utils.camelize('foo bar')).equal('fooBar');
  });
  it('[toCamelCase("foo bar")(false)]: Should return the camelCase: "fooBar"', () => {
    expect(utils.toCamelCase('foo bar')()).equal('fooBar');
  });
  it('[toCamelCase("foo bar")(false)]: Should return the camelCase: "fooBar"', () => {
    expect(utils.toCamelCase('foo bar')(false)).equal('fooBar');
  });
  it('[toCamelCase("foo bar")(true)]: Should return the camelCase: "FooBar"', () => {
    expect(utils.toCamelCase('foo bar')(true)).equal('FooBar');
  });
});