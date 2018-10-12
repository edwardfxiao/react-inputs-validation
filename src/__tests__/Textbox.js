import React from 'react';
import PropTypes from 'prop-types';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Textbox from '../js/Inputs/Textbox.js';

class TextboxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, hasError: props.hasError };
  }

  render() {
    const { validationOption } = this.props;
    const { value, hasError } = this.state;
    return (
      <div>
        <Textbox
          tabIndex="1"
          id={'Textbox'}
          name="Textbox"
          type="text"
          value={value}
          validationCallback={res => {
            this.setState({ hasError: res });
          }}
          onChange={res => {
            this.setState({ value: res });
          }}
          onBlur={() => {}}
          validationOption={validationOption}
        />
        <label id="value">{value}</label>
        <label id="hasError">{hasError ? 'has error' : 'not has error'}</label>
      </div>
    );
  }
}

TextboxWrapper.defaultProps = {
  value: '',
  hasError: false,
  validationOption: {}
};

TextboxWrapper.propTypes = {
  value: PropTypes.string,
  hasError: PropTypes.bool,
  validationOption: PropTypes.object
};

configure({ adapter: new Adapter() });
const getWrapper = (value, validationOption, hasError) => {
  return mount(<TextboxWrapper value={value} validationOption={validationOption} hasError={hasError} />);
};

const MIN = 10;
const MAX = 20;
const VALUE_OUT_OF_RAGE_NUMBER = '30';
const VALUE_IN_THE_RAGE_NUMBER = '15';
const VALUE_OUT_OF_RAGE_LENGTH = '11';
const VALUE_IN_THE_RAGE_LENGTH = '111111111111111';
const LENGTH = '5';
const VALUE_OUT_OF_RAGE_LENGTH_EXACT = 'abcdefghijk';
const VALUE_IN_THE_RAGE_LENGTH_EXACT = 'abcde';

describe('Textbox component', () => {
  it('[validationOption.required = true]: Should return has error when the value is empty', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual('');
    expect($labelHasError.text()).toEqual('has error');
  });

  it('[validationOption.required = false]: Should return not has error when the value is empty', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: false
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual('');
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[validationOption.customFunc]: Should return has error when the value is not milk', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      customFunc: res => {
        if (res != 'milk') {
          return 'Description cannot be other things but milk';
        }
        return true;
      }
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: 'banana' });
    $input.simulate('blur');
    expect($labelHasError.text()).toEqual('has error');
  });

  it(`[validationOption.min, max (string)]: Should return has error when the value(${VALUE_OUT_OF_RAGE_LENGTH}) is out of range of ${MIN} - ${MAX}`, () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      min: MIN,
      max: MAX
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_OUT_OF_RAGE_LENGTH });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_OUT_OF_RAGE_LENGTH);
    expect($labelHasError.text()).toEqual('has error');
  });

  it(`[validationOption.min, max (string)]: Should return not has error when the value(${VALUE_IN_THE_RAGE_LENGTH}) is in the range of ${MIN} - ${MAX}`, () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      min: MIN,
      max: MAX
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_IN_THE_RAGE_LENGTH });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_IN_THE_RAGE_LENGTH);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it(`[validationOption.min, max (number)]: Should return has error when the value(${VALUE_OUT_OF_RAGE_NUMBER}) is out of range of ${MIN} - ${MAX}`, () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      min: MIN,
      max: MAX,
      type: 'number'
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_OUT_OF_RAGE_NUMBER });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_OUT_OF_RAGE_NUMBER);
    expect($labelHasError.text()).toEqual('has error');
  });

  it(`[validationOption.min, max (number)]: Should return not has error when the value(${VALUE_IN_THE_RAGE_NUMBER}) is in the range of ${MIN} - ${MAX}`, () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      min: MIN,
      max: MAX,
      type: 'number'
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_IN_THE_RAGE_NUMBER });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_IN_THE_RAGE_NUMBER);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it(`[validationOption.length]: Should return has error when the value(${VALUE_OUT_OF_RAGE_LENGTH_EXACT}) is out of range of ${LENGTH}`, () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      length: LENGTH
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_OUT_OF_RAGE_LENGTH_EXACT });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_OUT_OF_RAGE_LENGTH_EXACT);
    expect($labelHasError.text()).toEqual('has error');
  });

  it(`[validationOption.length]: Should return has not error when the value(${VALUE_IN_THE_RAGE_LENGTH_EXACT}) is in the range of ${LENGTH}`, () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      length: LENGTH
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_IN_THE_RAGE_LENGTH_EXACT });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_IN_THE_RAGE_LENGTH_EXACT);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[check equal]: Should return has error when not equal', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      compare: 3
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: '2' });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual('2');
    expect($labelHasError.text()).toEqual('has error');
  });

  it('[check equal]: Should return not has error when equal', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true,
      compare: 2
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('input');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: '2' });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual('2');
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[onChange]: Should call autoFormatNumber when type is numer', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onChange={() => {}}
        validationOption={{
          check: true,
          required: true,
          type: 'number'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.autoFormatNumber = jest.fn();
    instance.onChange();
    expect(instance.autoFormatNumber).toHaveBeenCalled();
  });

  it('[check]: Should call handleCheckEnd', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onChange={() => {}}
        validationOption={{
          check: true,
          required: true,
          type: 'number'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check(value);
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should call handleCheckEnd when empty', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onChange={() => {}}
        validationOption={{
          check: true,
          required: true
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check(value);
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it("[onBlur]: Should call parent's onBlur", () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onBlur={() => {
          value = 'blured';
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onBlur();
    expect(value).toEqual('blured');
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onFocus={() => {
          value = 'focused';
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onFocus();
    expect(value).toEqual('focused');
  });

  it("[onKeyUp]: Should call parent's onKeyUp", () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onKeyUp={() => {
          value = 'keyuped';
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onKeyUp();
    expect(value).toEqual('keyuped');
  });
});
