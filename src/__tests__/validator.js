import { expect } from 'chai';
import Validator from '../js/Inputs/validator.js';

describe('validator', () => {
  describe('empty', () => {
    it('[empty]: Should return true when provide ""', () => {
      expect(Validator['empty']('')).equal(true);
    });
    it('[empty]: Should return false when provide "foo"', () => {
      expect(Validator['empty']('foo')).equal(false);
    });
  });
  describe('number', () => {
    it('[number]: Should return true when provide "1"', () => {
      expect(Validator['number']('1')).equal(true);
    });
    it('[number]: Should return false when provide "foo"', () => {
      expect(Validator['number']('foo')).equal(false);
    });
    it('[number]: Should return true when provide "25" while mix is "20" and max is "30"', () => {
      expect(Validator['number']('25', '20', '30')).equal(true);
    });
    it('[number]: Should return false when provide "10" while mix is "20" and max is "30"', () => {
      expect(Validator['number']('10', '20', '30')).equal(false);
    });
  });
  describe('reg', () => {
    it('[reg]: Should return false(has no erro) when provide valid erc20 address', () => {
      expect(Validator['reg'](/^0x[a-fA-F0-9]{40}$/, '0xa8d6954f80151033aff0c5289191c1ec3a8df139')).equal(false);
    });
    it('[reg]: Should return true(has erro) when provide invalid erc20 address', () => {
      expect(Validator['reg'](/^0x[a-fA-F0-9]{40}$/, 'foobar')).equal(true);
    });
  });
});
