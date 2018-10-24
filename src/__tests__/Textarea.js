import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockConsole from 'jest-mock-console';
import Textarea from '../js/Inputs/Textarea.tsx';
configure({ adapter: new Adapter() });

describe('Textarea component', () => {
  it('[check]: Should call handleCheckEnd when empty', () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onChange={() => {}}
        validationOption={{
          check: true,
          required: true,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check(value);
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it("[onBlur]: Should call parent's onBlur", () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {
          value = 'blured';
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onBlur();
    expect(value).toEqual('blured');
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onFocus={() => {
          value = 'focused';
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    expect(value).toEqual('focused');
  });

  it("[onKeyUp]: Should call parent's onKeyUp", () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onKeyUp={() => {
          value = 'keyuped';
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onKeyUp();
    expect(value).toEqual('keyuped');
  });

  it('[handleCheckEnd]: Should call validationCallback', () => {
    let value = '';
    const msgOnError = 'foobar';
    let valid = false;
    const wrapper = mount(
      <Textarea
        value={value}
        onChange={() => {}}
        validationCallback={() => {
          valid = true;
        }}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
          msgOnError,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd(true, msgOnError);
    expect(valid).toEqual(true);
  });

  it('[handleCheckEnd]: All validationOption', () => {
    let value = '';
    let valid = false;
    const wrapper = mount(
      <Textarea
        value={value}
        onChange={() => {}}
        validationCallback={() => {
          valid = true;
        }}
        validationOption={{
          locale: 'en-US',
          name: 'foobar',
          check: true,
          showMsg: 'showMsg',
          required: true,
          msgOnError: 'msgOnError',
          msgOnSuccess: 'msgOnSuccess',
          type: 'string',
          min: '10',
          max: '20',
          length: '10',
          cols: '10',
          rows: '10',
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd(true, 'msgOnError');
    expect(valid).toEqual(true);
  });

  it('[check]: Message should be foobar cannot be empty', () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(wrapper.state().msg).toEqual('foobar cannot be empty');
  });

  it('[check]: Message should be foobar length must be 5', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
          type: 'string',
          length: 5,
          // min: 0,
          // max: 0,
          // msgOnError
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(wrapper.state().msg).toEqual('foobar length must be 5');
  });

  it('[check]: Should be show successMsg when msgOnSuccess is provided', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
          showMsg: true,
          msgOnSuccess: 'successMsg',
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(wrapper.state().err).toEqual(false);
  });

  it('[check]: Successful msg node should be appear', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          check: true,
          showMsg: true,
          required: true,
          msgOnError: '',
          msgOnSuccess: 'successMsg',
        }}
      />,
    );
    // const instance = wrapper.instance();
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    // instance.input.value = '';
    // instance.onChange();
    $input.simulate('blur');
    expect(wrapper.find('.msg.success').length).toEqual(1);
  });

  it('[successMsg]: Should setState successMsg to msgOnSuccess', () => {
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          msgOnSuccess: 'msgOnSuccess',
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.value = 'foobar';
    instance.onChange({ target: { value: 'foobar' } });
    instance.onBlur();
    expect(wrapper.state().successMsg).toEqual('msgOnSuccess');
  });

  it('[customFunc]: Should setState msg to customFunc.errorMessage', () => {
    const errorMessage = 'Description cannot be other things but milk';
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          customFunc: res => {
            if (res != 'milk') {
              return errorMessage;
            }
            return true;
          },
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.value = 'foobar';
    instance.onChange({ target: { value: 'foobar' } });
    instance.onBlur();
    expect(wrapper.state().msg).toEqual(errorMessage);
  });

  it('[customFunc]: Should setState msg to ""', () => {
    const errorMessage = 'Description cannot be other things but milk';
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          customFunc: res => {
            if (res != 'milk') {
              return errorMessage;
            }
            return true;
          },
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.value = 'milk';
    instance.onChange({ target: { value: 'milk' } });
    instance.onBlur();
    expect(wrapper.state().msg).toEqual('');
  });

    it('[validationOption.length]: Should show error when the length is not valid', () => {
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          length: 5,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: 'success' } });
    instance.onBlur();
    expect(wrapper.state().err).toEqual(true);
  });

  it('[validationOption.length]: Should state.msg to be error message with name', () => {
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          name: 'foobar',
          length: 5,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: 'success' } });
    instance.onBlur();
    expect(wrapper.state().msg).toEqual('foobar length must be 5');
  });

  it('[validationOption.length]: Should state.msg to be error message', () => {
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          length: 5,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: 'success' } });
    instance.onBlur();
    expect(wrapper.state().msg).toEqual('length must be 5');
  });

  it('[validationOption.length]: Should state.msg not to be error message', () => {
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          length: 5,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: 'abcde' } });
    instance.onBlur();
    expect(wrapper.state().msg).toEqual('');
  });

  it('[validationOption.min string]: Should show error when the length is less than min length', () => {
    const wrapper = mount(
      <Textarea
        value="abc"
        onBlur={() => {}}
        validationOption={{
          min: 10,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: '' } });
    instance.onBlur();
    expect(wrapper.state().err).toEqual(true);
  });

  it('[validationOption.max string]: Should show error when the length is greater than max length', () => {
    const wrapper = mount(
      <Textarea
        value="abcde"
        onBlur={() => {}}
        validationOption={{
          max: 3,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: '' } });
    instance.onBlur();
    expect(wrapper.state().err).toEqual(true);
  });

  it('[validationOption.min and max string]: Should show error when the length is out out range', () => {
    const wrapper = mount(
      <Textarea
        value="12345"
        onBlur={() => {}}
        validationOption={{
          min: 1,
          max: 3,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: '' } });
    instance.onBlur();
    expect(wrapper.state().err).toEqual(true);
  });

  it('[validationOption.check]: Should not call handleCheckEnd when is not valid and check is false', () => {
    const wrapper = mount(<Textarea validationOption={{ check: false }} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[validationOption.type]: Should not call handleCheckEnd', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'foobar',
          name: '',
          check: true,
          showMsg: true,
          required: true,
          msgOnError: '',
          msgOnSuccess: 'successMsg',
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[state.err]: Should be true when props.validate toggled', () => {
    const wrapper = mount(<Textarea validate={false} onBlur={() => {}} />);
    const instance = wrapper.instance();
    instance.value = '';
    wrapper.setProps({ validate: true });
    expect(wrapper.state().err).toEqual(true);
  });

  it('[state.err]: Should be false when supplied value', () => {
    let v = '';
    const wrapper = mount(
      <Textarea
        validate={false}
        onBlur={() => {}}
        onChange={res => {
          v = res;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    instance.onFocus();
    instance.onChange({ target: { value: 'foobar' } });
    instance.onBlur();
    expect(v).toEqual('foobar');
  });

  it('[disabled]: Should not call onFocus when the Textarea is disabled', () => {
    const wrapper = mount(<Textarea onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange = jest.fn();
    instance.onFocus();
    instance.onBlur();
    expect(instance.onChange).not.toHaveBeenCalled();
  });

  it('[disabled]: Should state.err not change when the Textarea is disabled', () => {
    const wrapper = mount(<Textarea onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { value: '' } });
    expect(wrapper.state().err).toEqual(false);
  });

  it('[onChange]: Should not call autoFormatNumber when this.input === null', () => {
    const wrapper = mount(<Textarea onBlur={() => {}} />);
    const instance = wrapper.instance();
    instance.autoFormatNumber = jest.fn();
    instance.input = null;
    instance.onChange({ target: { value: '' } });
    expect(instance.autoFormatNumber).not.toHaveBeenCalled();
  });

  it('[onFocus]: Should not check when onFocus is not provided', () => {
    const wrapper = mount(<Textarea />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onFocus();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it('[onBlur]: Should not check when onBlur is not provided', () => {
    const wrapper = mount(<Textarea />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onBlur();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it('[onChange]: Should not check when onChange is not provided', () => {
    const wrapper = mount(<Textarea />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onChange({ target: { value: '' } });
    expect(instance.check).not.toHaveBeenCalled();
  });

  // TODO: find a better way to do this
  it('[String maxLength]: Should not longer than maxLength', () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        maxLength={1}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: 'foobar' } });
    expect(value).toEqual('');
  });

  it('[String maxLength]: Should not longer than maxLength', () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        maxLength="10"
      />,
    );
    const instance = wrapper.instance();
    instance.onChange({ target: { value: 'foobar' } });
    expect(value).toEqual('foobar');
  });

  it('[String onChange setState err]: Should setState err: false', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          check: true,
          showMsg: true,
          required: true,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.value = 'foobar';
    instance.onChange({ target: { value: '' } });
    expect(wrapper.state().err).toEqual(false);
  });

  it('[String invalid locale]: Should not call handleCheckEnd', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'foobar',
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[String reg]: Error msg node should be appear', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          reg: /^0x[a-fA-F0-9]{40}$/,
        }}
      />,
    );
    // const instance = wrapper.instance();
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    // instance.input.value = '';
    // instance.onChange();
    $input.simulate('blur');
    expect(wrapper.find('.msg.error').length).toEqual(1);
  });

  it('[String min]: Error msg node should be appear', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          min: 10,
        }}
      />,
    );
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find('.msg.error').length).toEqual(1);
  });

  it('[String max]: Error msg node should be appear', () => {
    let value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          max: 1,
        }}
      />,
    );
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find('.msg.error').length).toEqual(1);
  });

  it('[validationOption.min and max string]: Should show error when the length is out out range', () => {
    const wrapper = mount(
      <Textarea
        value="12345"
        onBlur={() => {}}
        validationOption={{
          min: 1,
          max: 3,
        }}
      />,
    );
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find('.msg.error').length).toEqual(1);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ type: 'foobar' }} />);
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type null: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ type: null }} />);
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
