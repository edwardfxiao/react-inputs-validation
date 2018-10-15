import { expect } from 'chai';
import Message from '../js/Inputs/message.js';

describe('message', () => {
  describe('textbox', () => {
    it('[empty]: Should return "foobar不能为空"', () => {
      expect(Message['zh-CN']['textbox']['empty']('foobar')).equal('foobar不能为空');
    });
    it('[empty]: Should return "foobar cannot be empty"', () => {
      expect(Message['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty');
    });
    it('[invalid]: Should return "格式有误"', () => {
      expect(Message['zh-CN']['textbox']['invalid']('')).equal('格式有误');
    });
    it('[invalid]: Should return "invalid format"', () => {
      expect(Message['en-US']['textbox']['invalid']('')).equal('invalid format');
    });
    it('[invalidFormat]: Should return "不是数字"', () => {
      expect(Message['zh-CN']['textbox']['invalidFormat']('')).equal('不是数字');
    });
    it('[invalidFormat]: Should return "is not a number"', () => {
      expect(Message['en-US']['textbox']['invalidFormat']('')).equal('is not a number');
    });
    it('[inBetween]: Should return "必须在10-20之间"', () => {
      expect(Message['zh-CN']['textbox']['inBetween']('')(10)(20)).equal('必须在10-20之间');
    });
    it('[inBetween]: Should return "must be 10-20"', () => {
      expect(Message['en-US']['textbox']['inBetween']('')(10)(20)).equal('must be 10-20');
    });
    it('[lessThan]: Should return "不可少于10"', () => {
      expect(Message['zh-CN']['textbox']['lessThan']('')(10)).equal('不可少于10');
    });
    it('[lessThan]: Should return "cannot less than 10"', () => {
      expect(Message['en-US']['textbox']['lessThan']('')(10)).equal('cannot less than 10');
    });
    it('[greaterThan]: Should return "不可大于10"', () => {
      expect(Message['zh-CN']['textbox']['greaterThan']('')(10)).equal('不可大于10');
    });
    it('[greaterThan]: Should return "cannot greater than 10"', () => {
      expect(Message['en-US']['textbox']['greaterThan']('')(10)).equal('cannot greater than 10');
    });
    it('[lengthEqual]: Should return "长度必须为10"', () => {
      expect(Message['zh-CN']['textbox']['lengthEqual']('')(10)).equal('长度必须为10');
    });
    it('[lengthEqual]: Should return "length must be 10"', () => {
      expect(Message['en-US']['textbox']['lengthEqual']('')(10)).equal('length must be 10');
    });
    it('[twoInputsNotEqual]: Should return "两次输入不一致"', () => {
      expect(Message['zh-CN']['textbox']['twoInputsNotEqual']('')).equal('两次输入不一致');
    });
    it('[twoInputsNotEqual]: Should return "two inputs are not equal"', () => {
      expect(Message['en-US']['textbox']['twoInputsNotEqual']('')).equal('two inputs are not equal');
    });
  });
  describe('radiobox', () => {
    it('[empty]: Should return "必须勾选一个foobar"', () => {
      expect(Message['zh-CN']['radiobox']['empty']('foobar')).equal('必须勾选一个foobar');
    });
    it('[empty]: Should return "Please choose one foobar"', () => {
      expect(Message['en-US']['radiobox']['empty']('foobar')).equal('Please choose one foobar ');
    });
  });
  describe('checkbox', () => {
    it('[unchecked]: Should return "foobar必须勾选"', () => {
      expect(Message['zh-CN']['checkbox']['unchecked']('foobar')).equal('foobar必须勾选');
    });
    it('[unchecked]: Should return "foobar must be checked"', () => {
      expect(Message['en-US']['checkbox']['unchecked']('foobar')).equal('foobar must be checked');
    });
  });
  describe('select', () => {
    it('[empty]: Should return "请选择一个foobar"', () => {
      expect(Message['zh-CN']['select']['empty']('foobar')).equal('请选择一个foobar');
    });
    it('[empty]: Should return "Please select a foobar"', () => {
      expect(Message['en-US']['select']['empty']('foobar')).equal('Please select a foobar ');
    });
  });
  describe('textarea', () => {
    it('[empty]: Should return "foobar不能为空"', () => {
      expect(Message['zh-CN']['textarea']['empty']('foobar')).equal('foobar不能为空');
    });
    it('[empty]: Should return "foobar cannot be empty"', () => {
      expect(Message['en-US']['textarea']['empty']('foobar')).equal('foobar cannot be empty');
    });
    it('[invalid]: Should return "格式有误"', () => {
      expect(Message['zh-CN']['textarea']['invalid']('')).equal('格式有误');
    });
    it('[invalid]: Should return "invalid format"', () => {
      expect(Message['en-US']['textarea']['invalid']('')).equal('invalid format');
    });
    it('[invalidFormat]: Should return "不是数字"', () => {
      expect(Message['zh-CN']['textarea']['invalidFormat']('')).equal('不是数字');
    });
    it('[invalidFormat]: Should return "is not a number"', () => {
      expect(Message['en-US']['textarea']['invalidFormat']('')).equal('is not a number');
    });
    it('[inBetween]: Should return "必须在10-20之间"', () => {
      expect(Message['zh-CN']['textarea']['inBetween']('')(10)(20)).equal('必须在10-20之间');
    });
    it('[inBetween]: Should return "must be 10-20"', () => {
      expect(Message['en-US']['textarea']['inBetween']('')(10)(20)).equal('must be 10-20');
    });
    it('[lessThan]: Should return "不可少于10"', () => {
      expect(Message['zh-CN']['textarea']['lessThan']('')(10)).equal('不可少于10');
    });
    it('[lessThan]: Should return "cannot less than 10"', () => {
      expect(Message['en-US']['textarea']['lessThan']('')(10)).equal('cannot less than 10');
    });
    it('[greaterThan]: Should return "不可大于10"', () => {
      expect(Message['zh-CN']['textarea']['greaterThan']('')(10)).equal('不可大于10');
    });
    it('[greaterThan]: Should return "cannot greater than 10"', () => {
      expect(Message['en-US']['textarea']['greaterThan']('')(10)).equal('cannot greater than 10');
    });
    it('[lengthEqual]: Should return "长度必须为10"', () => {
      expect(Message['zh-CN']['textarea']['lengthEqual']('')(10)).equal('长度必须为10');
    });
    it('[lengthEqual]: Should return "length must be 10"', () => {
      expect(Message['en-US']['textarea']['lengthEqual']('')(10)).equal('length must be 10');
    });
    it('[twoInputsNotEqual]: Should return "两次输入不一致"', () => {
      expect(Message['zh-CN']['textarea']['twoInputsNotEqual']('')).equal('两次输入不一致');
    });
    it('[twoInputsNotEqual]: Should return "two inputs are not equal"', () => {
      expect(Message['en-US']['textarea']['twoInputsNotEqual']('')).equal('two inputs are not equal');
    });
  });

  describe('handleCustomErrorMessage invalid (customErrorMessage is undefined)', () => {
    it('[empty]: Should return original message object when customErrorMessage is not valid', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, window);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty');
    });
  });

  describe('handleCustomErrorMessage when window is undefined', () => {
    it('[empty]: Should return original message object when window is undefined', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, undefined);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty');
    });
  });

  describe('handleCustomErrorMessage invalid', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {}
      };
    });
    it('[empty]: Should return original message object when customErrorMessage is not valid', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, window);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty');
    });
  });

  describe('handleCustomErrorMessage invalid', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {
          'en-US': {}
        }
      };
    });
    it('[empty]: Should return "foobar cannot be empty"', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, window);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty');
    });
  });

  describe('handleCustomErrorMessage invalid', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {
          'en-US': { textbox: {} }
        }
      };
    });
    it('[empty]: Should return "foobar cannot be empty"', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, window);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty');
    });
  });

  describe('handleCustomErrorMessage valid', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {
          'en-US': {
            textbox: {
              empty: function empty(name) {
                return name + ' cannot be empty(custom message)';
              }
            }
          }
        }
      };
    });
    it('[empty]: Should return "foobar cannot be empty(custom message)"', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, window);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty(custom message)');
    });
  });

  describe('custom locale', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {
          'foo-bar': {
            textbox: {
              empty: function empty(name) {
                return name + ' cannot be foobar';
              }
            }
          }
        }
      };
    });
    it('[empty]: Should return "foobar cannot be foobar"', () => {
      const tmpMessage = Object.assign({}, { ...Message });
      const handleCustomErrorMessage = Message.__get__('handleCustomErrorMessage');
      const newMessage = handleCustomErrorMessage(tmpMessage, window);
      expect(newMessage['foo-bar']['textbox']['empty']('foobar')).equal('foobar cannot be foobar');
    });
  });

  describe('getCustomErrorMessage valid', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {
          'en-US': {
            textbox: {
              empty: function empty(name) {
                return name + ' cannot be empty(custom message)';
              }
            }
          }
        }
      };
    });
    it('[empty]: Should return "foobar cannot be empty(custom message)"', () => {
      const getCustomErrorMessage = Message.__get__('getCustomErrorMessage');
      const newMessage = getCustomErrorMessage(window.REACT_INPUTS_VALIDATION['customErrorMessage'], Message);
      expect(newMessage['en-US']['textbox']['empty']('foobar')).equal('foobar cannot be empty(custom message)');
    });
  });

  describe('getCustomErrorMessage invalid', () => {
    beforeAll(() => {
      window.REACT_INPUTS_VALIDATION = {
        customErrorMessage: {}
      };
    });
    it('[empty]: Should return false when customErrorMessage is not valid', () => {
      const getCustomErrorMessage = Message.__get__('getCustomErrorMessage');
      const newMessage = getCustomErrorMessage(window.REACT_INPUTS_VALIDATION['customErrorMessage'], Message);
      expect(newMessage).equal(false);
    });
  });
});
