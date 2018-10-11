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
  });
});
