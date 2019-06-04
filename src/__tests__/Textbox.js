import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { stub } from 'sinon';
import { MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Textbox from '../js/Inputs/Textbox.tsx';
configure({ adapter: new Adapter() });

const INPUT = 'input';

describe('Textbox component', () => {
  it('[onBlur]: msgHtml should be appeared', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });
  it('[Toggling "validate"]: msgHtml should be appeared when toggling "validate"', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} validate={false} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });
  it('[Providing tabIndex]: tabIndex should be exact the same with given prop', () => {
    const wrapper = mount(<Textbox tabIndex={1} />);
    setTimeout(() => {
      expect(wrapper.find(INPUT).prop('tabindex')).toEqual(1);
    }, 0);
  });
  it('[Providing msgOnError]: msg should be msgOnError', () => {
    const msgOnError = 'msgOnError';
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });
  // it('[autoFormatNumber]: Should auto format .5 to 0.5', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   expect(instance.autoFormatNumber('.5')).toEqual('0.5');
  // });

  // it('[autoFormatNumber]: Should auto format .5. to 0.5', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   expect(instance.autoFormatNumber('.5.')).toEqual('0.5');
  // });

  // it('[autoFormatNumber]: Should auto format - to ""', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   expect(instance.autoFormatNumber('-')).toEqual('');
  // });

  // it('[autoFormatNumber]: Should auto format ? to ""', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   expect(instance.autoFormatNumber('?')).toEqual('');
  // });

  // it('[autoFormatNumber]: Should auto format ? to "', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   expect(instance.autoFormatNumber('?')).toEqual('');
  // });

  // it('[autoFormatNumber]: Should auto format A to "', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   expect(instance.autoFormatNumber('A')).toEqual('');
  // });

  // it('[check]: Should call handleCheckEnd', () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onChange={() => {}}
  //       validationOption={{
  //         check: true,
  //         required: true,
  //         type: 'number',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd = jest.fn();
  //   instance.check(value);
  //   expect(instance.handleCheckEnd).toHaveBeenCalled();
  // });

  // it('[check]: Should call handleCheckEnd when empty', () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onChange={() => {}}
  //       validationOption={{
  //         check: true,
  //         required: true,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd = jest.fn();
  //   instance.check(value);
  //   expect(instance.handleCheckEnd).toHaveBeenCalled();
  // });

  // it("[onBlur]: Should call parent's onBlur", () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {
  //         value = 'blured';
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('blur');
  //   expect(value).toEqual('blured');
  // });

  // it("[onFocus]: Should call parent's onFocus", () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onFocus={() => {
  //         value = 'focused';
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   expect(value).toEqual('focused');
  // });

  // it("[onKeyUp]: Should call parent's onKeyUp", () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onKeyUp={() => {
  //         value = 'keyuped';
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onKeyUp();
  //   expect(value).toEqual('keyuped');
  // });

  // it('[handleCheckEnd]: Should call validationCallback', () => {
  //   let value = '';
  //   const msgOnError = 'foobar';
  //   let valid = false;
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onChange={() => {}}
  //       validationCallback={() => {
  //         valid = true;
  //       }}
  //       validationOption={{
  //         name: 'foobar',
  //         check: true,
  //         required: true,
  //         msgOnError,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd(true, msgOnError);
  //   expect(valid).toEqual(true);
  // });

  // it('[handleCheckEnd]: All validationOption', () => {
  //   let value = '';
  //   let valid = false;
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onChange={() => {}}
  //       validationCallback={() => {
  //         valid = true;
  //       }}
  //       validationOption={{
  //         locale: 'en-US',
  //         name: 'foobar',
  //         check: true,
  //         showMsg: 'showMsg',
  //         required: true,
  //         msgOnError: 'msgOnError',
  //         msgOnSuccess: 'msgOnSuccess',
  //         type: 'string',
  //         min: '10',
  //         max: '20',
  //         length: '10',
  //         compare: '1',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd(true, 'msgOnError');
  //   expect(valid).toEqual(true);
  // });

  // it('[check]: Message should be foobar cannot be empty', () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         name: 'foobar',
  //         check: true,
  //         required: true,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual('foobar cannot be empty');
  // });

  // it('[check]: Message should be foobar length must be 5', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         name: 'foobar',
  //         check: true,
  //         required: true,
  //         type: 'string',
  //         length: 5,
  //         // min: 0,
  //         // max: 0,
  //         // msgOnError
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual('foobar length must be 5');
  // });

  it('[check]: Should be show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const value = 'foobar';
    const wrapper = mount(
      <Textbox
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
          showMsg: true,
          msgOnSuccess,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  // it('[check]: Successful msg node should be appear', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'string',
  //         name: '',
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //         msgOnSuccess: 'successMsg',
  //       }}
  //     />,
  //   );
  //   // const $input = wrapper.find(INPUT);
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   // instance.input.value = '';
  //   // instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.success').length).toEqual(1);
  // });

  // it('[successMsg]: Should setState successMsg to msgOnSuccess', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'success'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         msgOnSuccess: 'msgOnSuccess',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().successMsg).toEqual('msgOnSuccess');
  // });

  // it('[customFunc]: Should setState msg to customFunc.errorMessage', () => {
  //   const errorMessage = 'Description cannot be other things but milk';
  //   const wrapper = mount(
  //     <Textbox
  //       value={'foobar'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         customFunc: res => {
  //           if (res != 'milk') {
  //             return errorMessage;
  //           }
  //           return true;
  //         },
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual(errorMessage);
  // });

  // it('[customFunc]: Should setState msg to ""', () => {
  //   const errorMessage = 'Description cannot be other things but milk';
  //   const wrapper = mount(
  //     <Textbox
  //       value={'milk'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         customFunc: res => {
  //           if (res != 'milk') {
  //             return errorMessage;
  //           }
  //           return true;
  //         },
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual('');
  // });

  // it('[validationOption.length]: Should show error when the length is not valid', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'success'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         length: 5,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.length]: Should state.msg to be error message with name', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'success'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         name: 'foobar',
  //         length: 5,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual('foobar length must be 5');
  // });

  // it('[validationOption.length]: Should state.msg to be error message', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'success'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         length: 5,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual('length must be 5');
  // });

  // it('[validationOption.length]: Should state.msg not to be error message', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'abcde'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         length: 5,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().msg).toEqual('');
  // });

  // it('[validationOption.compare]: Should show error when it is not equal to compared value', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'success'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         compare: '3',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.compare]: Should not show error when it is equal to compared value', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={'abc'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         compare: 'abc',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(false);
  // });

  // it('[validationOption.min string]: Should show error when the length is less than min length', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value="abc"
  //       onBlur={() => {}}
  //       validationOption={{
  //         min: 10,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.max string]: Should show error when the length is greater than max length', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value="abcde"
  //       onBlur={() => {}}
  //       validationOption={{
  //         max: 3,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.min and max string]: Should show error when the length is out out range', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value="12345"
  //       onBlur={() => {}}
  //       validationOption={{
  //         min: 1,
  //         max: 3,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.min number]: Should show error when it is less than min number', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={5}
  //       onBlur={() => {}}
  //       validationOption={{
  //         type: 'number',
  //         min: 10,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.max number]: Should show error when it is greater than max number', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={15}
  //       onBlur={() => {}}
  //       validationOption={{
  //         type: 'number',
  //         max: 10,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.min and max number]: Should show error when the value is out out range', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value={30}
  //       onBlur={() => {}}
  //       validationOption={{
  //         type: 'number',
  //         min: 10,
  //         max: 20,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[validationOption.check]: Should not call handleCheckEnd when is not valid and check is false', () => {
  //   const wrapper = mount(<Textbox validationOption={{ check: false }} />);
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd = jest.fn();
  //   instance.check();
  //   expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  // });

  // it('[validationOption.type]: Should not call handleCheckEnd', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'foobar',
  //         name: '',
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //         msgOnSuccess: 'successMsg',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd = jest.fn();
  //   instance.check();
  //   expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  // });

  // it('[successMsg]: Should setState successMsg to msgOnSuccess', () => {
  //   const wrapper = mount(
  //     <Textbox
  //       value="foobar"
  //       onBlur={() => {}}
  //       validationOption={{
  //         msgOnSuccess: 'msgOnSuccess',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.state().successMsg).toEqual('msgOnSuccess');
  // });

  // it('[this.input === null]: Should return or not call handleCheckEnd when this.input === null', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   instance.input = null;
  //   instance.check();
  //   instance.handleCheckEnd = jest.fn();
  //   expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  // });

  // it('[state.err]: Should be true when props.validate toggled', () => {
  //   const wrapper = mount(<Textbox validate={false} onBlur={() => {}} />);
  //   wrapper.setProps({ validate: true });
  //   expect(wrapper.state().err).toEqual(true);
  // });

  // it('[state.err]: Should be false when supplied value', () => {
  //   let v = '';
  //   const wrapper = mount(
  //     <Textbox
  //       validate={false}
  //       onBlur={() => {}}
  //       onChange={res => {
  //         v = res;
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   $input.simulate('focus');
  //   instance.input.current.value = 'foobar';
  //   instance.onChange();
  //   $input.simulate('blur');
  //   expect(v).toEqual('foobar');
  // });

  // it('[disabled]: Should not call onFocus when the Textbox is disabled', () => {
  //   const wrapper = mount(<Textbox onBlur={() => {}} disabled={true} />);
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange = jest.fn();
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(instance.onChange).not.toHaveBeenCalled();
  // });

  // it('[disabled]: Should state.err not change when the Textbox is disabled', () => {
  //   const wrapper = mount(<Textbox onBlur={() => {}} disabled={true} />);
  //   const $input = wrapper.find(INPUT);
  //   instance.onChange();
  //   expect(wrapper.state().err).toEqual(false);
  // });

  // it('[onChange]: Should not call autoFormatNumber when this.input === null', () => {
  //   const wrapper = mount(<Textbox onBlur={() => {}} />);
  //   const $input = wrapper.find(INPUT);
  //   instance.autoFormatNumber = jest.fn();
  //   instance.input = null;
  //   instance.onChange();
  //   expect(instance.autoFormatNumber).not.toHaveBeenCalled();
  // });

  // it('[onFocus]: Should not check when onFocus is not provided', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   instance.check = jest.fn();
  //   $input.simulate('focus');
  //   expect(instance.check).not.toHaveBeenCalled();
  // });

  // it('[onBlur]: Should not check when onBlur is not provided', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   instance.check = jest.fn();
  //   $input.simulate('blur');
  //   expect(instance.check).not.toHaveBeenCalled();
  // });

  // it('[onChange]: Should not check when onChange is not provided', () => {
  //   const wrapper = mount(<Textbox />);
  //   const $input = wrapper.find(INPUT);
  //   instance.check = jest.fn();
  //   instance.onChange();
  //   expect(instance.check).not.toHaveBeenCalled();
  // });

  // // TODO: find a better way to do this
  // it('[String maxLength]: Should not longer than maxLength', () => {
  //   let value = '';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={res => {
  //         value = res;
  //       }}
  //       maxLength="1"
  //       validationOption={{
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.input.current.value = 'foobar';
  //   instance.onChange();
  //   expect(value).toEqual('');
  // });

  // it('[String onChange setState err]: Should setState err: false', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.input.current.value = 'foobar';
  //   instance.onChange();
  //   expect(wrapper.state().err).toEqual(false);
  // });

  // it('[String invalid locale]: Should not call handleCheckEnd', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'foobar',
  //         type: 'string',
  //         name: '',
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   instance.handleCheckEnd = jest.fn();
  //   instance.check();
  //   expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  // });

  // it('[String reg]: Error msg node should be appear', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'string',
  //         name: '',
  //         reg: /^0x[a-fA-F0-9]{40}$/,
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   // const $input = wrapper.find(INPUT);
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   // instance.input.value = '';
  //   // instance.onChange();
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  // it('[String min]: Error msg node should be appear', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'string',
  //         name: '',
  //         min: 10,
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  // it('[String max]: Error msg node should be appear', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'string',
  //         name: '',
  //         max: 1,
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  // it('[Number length]: Error msg node should be appear', () => {
  //   let value = 10;
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'number',
  //         name: '',
  //         length: 1,
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  // it('[Number min]: Error msg node should be appear', () => {
  //   let value = 10;
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'number',
  //         name: '',
  //         min: 20,
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  // it('[Number max]: Error msg node should be appear', () => {
  //   let value = 10;
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'number',
  //         name: '',
  //         max: 2,
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  // it('[Number invalid]: Error msg node should be appear', () => {
  //   let value = 'foobar';
  //   const wrapper = mount(
  //     <Textbox
  //       value={value}
  //       onBlur={() => {}}
  //       onChange={() => {}}
  //       validationOption={{
  //         locale: 'en-US',
  //         type: 'number',
  //         name: '',
  //         check: true,
  //         showMsg: true,
  //         required: true,
  //         msgOnError: '',
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find('input');
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   expect(wrapper.find('.msg.error').length).toEqual(1);
  // });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type null]: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ type: null }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type array]: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ type: 'array' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
