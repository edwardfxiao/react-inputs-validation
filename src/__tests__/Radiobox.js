import React from 'react';
import PropTypes from 'prop-types';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radiobox from '../js/Inputs/Radiobox.js';

const SELECTED_INDEX = 2;
const OPTION_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];

class RadioboxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.checked, hasError: props.hasError };
  }

  render() {
    const { validationOption } = this.props;
    const { value, hasError } = this.state;
    return (
      <div id="wrapper">
        <Radiobox
          tabIndex="1"
          id={'Radiobox'}
          name="Radiobox"
          type="text"
          value={value}
          optionList={OPTION_LIST}
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

RadioboxWrapper.defaultProps = {
  checked: '',
  hasError: false,
  validationOption: {}
};

RadioboxWrapper.propTypes = {
  checked: PropTypes.string,
  hasError: PropTypes.bool,
  validationOption: PropTypes.object
};

configure({ adapter: new Adapter() });
const getWrapper = (value, validationOption, hasError) => {
  return mount(<RadioboxWrapper value={value} validationOption={validationOption} hasError={hasError} />);
};

describe('Radiobox component', () => {
  it('[validationOption.required = true]: Should return has error because of it is not checked any', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('.radiobox__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(value);
    expect($labelHasError.text()).toEqual('has error');
  });

  it('[validationOption.required = false]:Should return not has error when it is not checked because of it is not required', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: false
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('.radiobox__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(value);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[validationOption.required = false]:Should return not has error when it selected something', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('.radiobox__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    wrapper
      .find('.radiobox__input')
      .at(SELECTED_INDEX)
      .simulate('change', { target: { value: OPTION_LIST[SELECTED_INDEX].id } });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(OPTION_LIST[SELECTED_INDEX].id);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it("[onChange]: Should call parent's onChange", () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
        onChange={res => {
          value = res;
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onChange('us');
    expect(value).toEqual('us');
  });

  it("[onClick]: Should call parent's onClick", () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
        onClick={() => {
          value = 'clicked';
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onClick();
    expect(value).toEqual('clicked');
  });

  it("[onBlur]: Should call parent's onBlur", () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
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
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
        onFocus={() => {
          value = 'focused';
        }}
      />
    );
    const instance = wrapper.instance();
    instance.onFocus();
    expect(value).toEqual('focused');
  });

  it('[check]: Should call handleCheckEnd when empty', () => {
    let value = '';
    const msgOnSuccess = 'foobar';
    const wrapper = mount(
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
        onChange={() => {}}
        validationOption={{
          check: true,
          required: true,
          msgOnSuccess
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check(value);
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should not call handleCheckEnd when locale is invalid', () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
        onChange={() => {}}
        validationOption={{
          locale: 'foobar'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check(value);
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[handleCheckEnd]: Should call validationCallback', () => {
    let value = '';
    const msgOnError = 'foobar';
    const msgOnSuccess = 'foobar';
    let valid = false;
    const wrapper = mount(
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
        onChange={() => {}}
        validationCallback={() => {
          valid = true;
        }}
        validationOption={{
          name: 'foobar',
          locale: 'en-US',
          check: true,
          required: true,
          msgOnError,
          msgOnSuccess
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
      <Radiobox
        value={value}
        optionList={OPTION_LIST}
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
          msgOnSuccess: 'msgOnSuccess'
        }}
      />
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd(true, 'msgOnError');
    expect(valid).toEqual(true);
  });

  it('[getDefaultValidationOption]: Should return default obj', () => {
    const getDefaultValidationOption = Radiobox.__get__('getDefaultValidationOption');
    expect(getDefaultValidationOption({})).toEqual({
      name: '',
      check: true,
      showMsg: true,
      required: true,
      locale: 'en-US',
      msgOnError: '',
      msgOnSuccess: ''
    });
  });

  it('[getDefaultValidationOption]: Should return correct obj', () => {
    const getDefaultValidationOption = Radiobox.__get__('getDefaultValidationOption');
    const o = {
      name: 'foobar',
      check: true,
      showMsg: 'showMsg',
      required: true,
      locale: 'en-US',
      msgOnError: 'msgOnError',
      msgOnSuccess: 'msgOnSuccess'
    };
    expect(getDefaultValidationOption(o)).toEqual(o);
  });

  it('[getDefaultValidationOption]: Should return correct obj', () => {
    const isValidateValue = Radiobox.__get__('isValidateValue');
    expect(isValidateValue('null')).toEqual(true);
  });
});

describe('Radiobox component componentWillReceiveProps', () => {
  it('[validate]: Should call check when nextProps.validate = true', () => {
    const wrapper = shallow(<Radiobox validate={false} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    wrapper.setProps({ validate: true });
    expect(instance.check).toHaveBeenCalled();
  });

  it('[value]: err should be false if this.props.value != nextProps.value and this.state.err ', () => {
    const wrapper = shallow(<Radiobox value={false} />);
    wrapper.setState({ err: true });
    wrapper.setProps({ value: true });
    expect(wrapper.state().err).toEqual(false);
  });

  it('[value]: successMsg should be undefined if this.props.value != nextProps.value and !this.state.err ', () => {
    const wrapper = shallow(<Radiobox value={false} />);
    wrapper.setProps({ value: true });
    expect(wrapper.state().successMsg).toEqual(undefined);
  });
});
