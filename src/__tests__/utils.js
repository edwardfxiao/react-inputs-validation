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
  it('[getRandomId()]: Should return string', () => {
    expect(utils.getRandomId()).to.be.a('string');
  });
  it('[getNumeric("a1")]: Should return 1', () => {
    expect(utils.getNumeric('a1')).equal('1');
  });
  it('[getAlphanumeric("@a1")]: Should return 1', () => {
    expect(utils.getAlphanumeric('@a1')).equal('a1');
  });
  it('[getAlpha("a1")]: Should return 1', () => {
    expect(utils.getAlpha('a1')).equal('a');
  });
  it('[replaceSeparator("0.1", ".", ",")]: Should return 1', () => {
    expect(utils.replaceSeparator('0.1', '.', ',')).equal('0,1');
  });
});
