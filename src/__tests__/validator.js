import { expect } from 'chai';
import Validator from '../js/Inputs/validator.js';

describe('validator', () => {
  describe('email', () => {
    it('[email]: Should return true when provide valid email', () => {
      expect(Validator['email']('foo@bar.com')).equal(true);
    });
    it('[email]: Should return false when provide invalid email', () => {
      expect(Validator['email']('foo@bar')).equal(false);
    });
  });
  describe('phone', () => {
    it('[phone]: Should return true when provide valid phone', () => {
      expect(Validator['phone']('13000000000')).equal(true);
    });
    it('[phone]: Should return false when provide invalid phone', () => {
      expect(Validator['phone']('658')).equal(false);
    });
  });
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
  describe('url', () => {
    it('[url]: Should return true when provide "foo.bar"', () => {
      expect(Validator['url']('foo.bar')).equal(true);
    });
    it('[url]: Should return false when provide "foo"', () => {
      expect(Validator['url']('foo')).equal(false);
    });
  });
  describe('string', () => {
    it('[string]: Should return true when provide "1"', () => {
      expect(Validator['string']('1')).equal(true);
    });
    it('[string]: Should return true when provide "foo" while mix is 1 and max is 10', () => {
      expect(Validator['string']('foo', 1, 10)).equal(true);
    });
    it('[string]: Should return false when provide "fooooooooooooobar" while mix is 1 and max is 10', () => {
      expect(Validator['string']('fooooooooooooobar', 1, 10)).equal(false);
    });
  });
  describe('password', () => {
    it('[password]: Should return true when provide "1"', () => {
      expect(Validator['password']('1')).equal(true);
    });
    it('[password]: Should return true when provide "foo" while mix is 1 and max is 10', () => {
      expect(Validator['password']('foo', 1, 10)).equal(true);
    });
    it('[password]: Should return false when provide "fooooooooooooobar" while mix is 1 and max is 10', () => {
      expect(Validator['password']('fooooooooooooobar', 1, 10)).equal(false);
    });
  });
  describe('textarea', () => {
    it('[textarea]: Should return true when provide "1"', () => {
      expect(Validator['textarea']('1')).equal(true);
    });
    it('[textarea]: Should return true when provide "foo" while mix is 1 and max is 10', () => {
      expect(Validator['textarea']('foo', 1, 10)).equal(true);
    });
    it('[textarea]: Should return false when provide "fooooooooooooobar" while mix is 1 and max is 10', () => {
      expect(Validator['textarea']('fooooooooooooobar', 1, 10)).equal(false);
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
