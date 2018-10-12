import React from 'react';
import PropTypes from 'prop-types';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../js/Inputs/Select.js';

const SELECTED_INDEX = 2;

const OPTION_LIST = [{ id: '', name: 'Please select one country' }, { id: 'us', name: 'US' }, { id: 'ca', name: 'CA' }];

class SelectWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, hasError: props.hasError };
  }

  render() {
    const { validationOption } = this.props;
    const { value, hasError } = this.state;
    return (
      <div id="wrapper">
        <Select
          tabIndex="1"
          id={'country'}
          name="Select"
          type="text"
          value={value}
          validationCallback={res => {
            this.setState({ hasError: res });
          }}
          optionList={OPTION_LIST}
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

SelectWrapper.defaultProps = {
  value: '',
  hasError: false,
  validationOption: {}
};

SelectWrapper.propTypes = {
  value: PropTypes.string,
  hasError: PropTypes.bool,
  validationOption: PropTypes.object
};

configure({ adapter: new Adapter() });
const getWrapper = (value, validationOption, hasError) => {
  return mount(<SelectWrapper value={value} validationOption={validationOption} hasError={hasError} />);
};

describe('Select component', () => {
  it('[validationOption.required = true]: Should return has error when the value is empty', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('#select__wrapper');
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
    const $input = wrapper.find('#select__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual('');
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[Normal select]: Should return not has error when the value is not selected', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: false
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('#select__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('click');
    wrapper
      .find('.select__options-item')
      .at(SELECTED_INDEX)
      .simulate('click');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(OPTION_LIST[SELECTED_INDEX].id);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[ArrowDown]: Should return correct index', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 40 });
    expect(instance.onKeyDown({ keyCode: 40 })).toEqual(2);
  });

  it('[ArrowDown]: Should called scroll', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.scroll = jest.fn();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 40 });
    expect(instance.scroll).toHaveBeenCalled();
  });

  it('[Type "C" and hit "Enter"]: Should call addActive', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.addActive = jest.fn();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 67 });
    instance.onKeyDown({ keyCode: 13 });
    expect(instance.addActive).toHaveBeenCalled();
  });

  it('[Type "C"]: Should call setTimeoutTyping', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.setTimeoutTyping = jest.fn();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 67 });
    expect(instance.setTimeoutTyping).toHaveBeenCalled();
  });

  it('[ArrowUp]: Should return correct index', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    wrapper.instance().toggleShow(true);
    expect(wrapper.instance().onKeyDown({ keyCode: 38 })).toEqual(0);
  });

  it('[getIndex]: Should return correct index', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    expect(instance.getIndex(OPTION_LIST, 'ca')).toEqual(2);
  });

  it("[onChange]: Should call parent's onChange", () => {
    let value = '';
    const wrapper = mount(
      <Select
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
      <Select
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
      <Select
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
      <Select
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
    const wrapper = mount(
      <Select
        value={value}
        optionList={OPTION_LIST}
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
});
