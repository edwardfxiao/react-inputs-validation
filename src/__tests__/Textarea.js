import React from 'react';
import PropTypes from 'prop-types';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Textarea from '../js/Inputs/Textarea.js';

class TextareWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, hasError: props.hasError };
  }

  render() {
    const { validationOption } = this.props;
    const { value, hasError } = this.state;
    return (
      <div>
        <Textarea
          tabIndex="1"
          id={'Textarea'}
          name="Textarea"
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

TextareWrapper.defaultProps = {
  value: '',
  hasError: false,
  validationOption: {}
};

TextareWrapper.propTypes = {
  value: PropTypes.string,
  hasError: PropTypes.bool,
  validationOption: PropTypes.object
};

configure({ adapter: new Adapter() });
const getWrapper = (value, validationOption, hasError) => {
  return mount(<TextareWrapper value={value} validationOption={validationOption} hasError={hasError} />);
};

const MIN = 10;
const MAX = 20;
const VALUE_OUT_OF_RAGE_LENGTH = '11';
const VALUE_IN_THE_RAGE_LENGTH = '111111111111111';
const LENGTH = '5';
const VALUE_OUT_OF_RAGE_LENGTH_EXACT = 'abcdefghijk';
const VALUE_IN_THE_RAGE_LENGTH_EXACT = 'abcde';

describe('Textare component', () => {
  it('[validationOption.required = true]: Should return has error when the value is empty', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('textarea');
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
    const $input = wrapper.find('textarea');
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
    const $input = wrapper.find('textarea');
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
    const $input = wrapper.find('textarea');
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
    const $input = wrapper.find('textarea');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_IN_THE_RAGE_LENGTH });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_IN_THE_RAGE_LENGTH);
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
    const $input = wrapper.find('textarea');
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
    const $input = wrapper.find('textarea');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper.setState({ value: VALUE_IN_THE_RAGE_LENGTH_EXACT });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(VALUE_IN_THE_RAGE_LENGTH_EXACT);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[check]: Should call handleCheckEnd', () => {
    let value = '';
    const wrapper = mount(
      <Textarea
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
      <Textarea
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
      <Textarea
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
      <Textarea
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
          msgOnError
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd(true, msgOnError);
    expect(valid).toEqual(true);
  });

  it('[handleCheckEnd]: all validationOption', () => {
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
          length: '10'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd(true, 'msgOnError');
    expect(valid).toEqual(true);
  });

  it('[getDefaultValidationOption]: Should return default obj', () => {
    const getDefaultValidationOption = Textarea.__get__('getDefaultValidationOption');
    expect(getDefaultValidationOption({})).toEqual({
      locale: 'en-US',
      reg: '',
      min: 0,
      max: 0,
      type: 'string',
      name: '',
      check: true,
      showMsg: true,
      length: 0,
      regMsg: '',
      required: true,
      msgOnError: '',
      msgOnSuccess: '',
      customFunc: undefined
    });
  });

  it('[getDefaultValidationOption]: Should return correct obj', () => {
    const getDefaultValidationOption = Textarea.__get__('getDefaultValidationOption');
    const o = {
      locale: 'foobar',
      reg: '',
      min: 0,
      max: 0,
      type: 'string',
      name: '',
      check: true,
      showMsg: false,
      length: 0,
      regMsg: '',
      required: true,
      msgOnError: '',
      msgOnSuccess: '',
      customFunc: undefined
    };
    expect(getDefaultValidationOption(o)).toEqual(o);
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
          required: true
        }}
      />
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
          length: 5
          // min: 0,
          // max: 0,
          // msgOnError
        }}
      />
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
          msgOnSuccess: 'successMsg'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur();
    expect(wrapper.state().err).toEqual(false);
    expect(wrapper.state().successMsg).toEqual('successMsg');
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
          msgOnSuccess: 'successMsg'
        }}
      />
    );
    // const instance = wrapper.instance();
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    // instance.input.value = '';
    // instance.onChange();
    $input.simulate('blur');
    expect(wrapper.find('.msg.success').length).toEqual(1);
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
          msgOnSuccess: 'successMsg'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
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
        maxLength="1"
        validationOption={{
          check: true,
          showMsg: true,
          required: true
        }}
      />
    );
    const instance = wrapper.instance();
    instance.input.value = 'foobar';
    instance.onChange();
    expect(value).toEqual('');
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
          required: true
        }}
      />
    );
    const instance = wrapper.instance();
    instance.input.value = 'foobar';
    instance.onChange();
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
          type: 'string',
          name: '',
          check: true,
          showMsg: true,
          required: true,
          msgOnError: ''
        }}
      />
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
          locale: 'en-US',
          type: 'string',
          name: '',
          reg: /^0x[a-fA-F0-9]{40}$/,
          check: true,
          showMsg: true,
          required: true,
          msgOnError: ''
        }}
      />
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
          locale: 'en-US',
          type: 'string',
          name: '',
          min: 10,
          check: true,
          showMsg: true,
          required: true,
          msgOnError: ''
        }}
      />
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
          locale: 'en-US',
          type: 'string',
          name: '',
          max: 1,
          check: true,
          showMsg: true,
          required: true,
          msgOnError: ''
        }}
      />
    );
    const $input = wrapper.find('textarea');
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find('.msg.error').length).toEqual(1);
  });
});

describe('Textarea component componentWillReceiveProps', () => {
  it('[validate]: Should call check when nextProps.validate = true', () => {
    const wrapper = shallow(<Textarea validate={false} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    wrapper.setProps({ validate: true });
    expect(instance.check).toHaveBeenCalled();
  });
});
