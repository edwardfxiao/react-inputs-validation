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

  it('[Type "C"]: Should call setTimeoutTyping when typingTimeout is undefined', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.setTimeoutTyping = jest.fn();
    instance.toggleShow(true);
    wrapper.typingTimeout = undefined;
    instance.onKeyDown({ keyCode: 67 });
    instance.onKeyDown({ keyCode: 68 });
    expect(instance.setTimeoutTyping).toHaveBeenCalled();
  });

  it('[Type "C" and then type "A"]: keycodeList should be [67, 65]', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.setTimeoutTyping = jest.fn();
    instance.toggleShow(true);
    wrapper.typingTimeout = undefined;
    instance.onKeyDown({ keyCode: 67 });
    instance.onKeyDown({ keyCode: 65 });
    expect(wrapper.state().keycodeList).toEqual([67, 65]);
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

  it('[handleCheckEnd]: Should call validationCallback', () => {
    let value = '';
    const msgOnError = 'foobar';
    let valid = false;
    const wrapper = mount(
      <Select
        value={value}
        optionList={OPTION_LIST}
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
      <Select
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

  it('[onMouseOver]: Should call addActive', () => {
    const value = '';
    const validationOption = {};
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    wrapper.setState({ isTyping: true });
    const instance = wrapper.instance();
    instance.addActive = jest.fn();
    const $input = wrapper.find('#select__wrapper');
    $input.simulate('click');
    wrapper
      .find('.select__options-item')
      .at(SELECTED_INDEX)
      .simulate('mouseOver');
    expect(instance.addActive).toHaveBeenCalled();
  });

  it('[onMouseOut]: Should call removeActive', () => {
    const value = '';
    const validationOption = {};
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    wrapper.setState({ isTyping: true });
    const instance = wrapper.instance();
    instance.removeActive = jest.fn();
    const $input = wrapper.find('#select__wrapper');
    $input.simulate('click');
    wrapper
      .find('.select__options-item')
      .at(SELECTED_INDEX)
      .simulate('mouseOut');
    expect(instance.removeActive).toHaveBeenCalled();
  });

  it('[onMouseMove]: isTyping should be false', () => {
    const value = '';
    const validationOption = {};
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    wrapper.setState({ isTyping: true });
    const $input = wrapper.find('#select__wrapper');
    $input.simulate('click');
    wrapper
      .find('.select__options-item')
      .at(SELECTED_INDEX)
      .simulate('mouseMove');
    expect(wrapper.state().isTyping).toEqual(false);
  });

  it('[getDefaultValidationOption]: Should return default obj', () => {
    const getDefaultValidationOption = Select.__get__('getDefaultValidationOption');
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
    const getDefaultValidationOption = Select.__get__('getDefaultValidationOption');
    const o = {
      name: 'foobar',
      check: true,
      showMsg: false,
      required: true,
      locale: 'en-US',
      msgOnError: 'msgOnError',
      msgOnSuccess: 'msgOnSuccess'
    };
    expect(getDefaultValidationOption(o)).toEqual(o);
  });

  it('[selectOptionListItemHtml]: Should render selectOptionListItemHtml', () => {
    const selectOptionListItemHtml = OPTION_LIST.map((i, k) => {
      return (
        <div className="foo" key={k}>
          {i.name}
        </div>
      );
    });
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} onChange={() => {}} validationOption={{}} selectOptionListItemHtml={selectOptionListItemHtml} />);
    const $input = wrapper.find('#select__wrapper');
    $input.simulate('click');
    expect(wrapper.find('.foo').length).toEqual(3);
  });

  it('[select__input class]: Should have select__input class name', () => {
    const validationOption = {
      check: true,
      required: true,
      showMsg: true,
      successMsg: 'successMsg'
    };
    const wrapper = mount(<Select optionList={OPTION_LIST} value="" onBlur={() => {}} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.onChange('ca');
    instance.onBlur();
    expect(wrapper.find('.select__input').length).toEqual(1);
  });

  it('[invalid locale]: Should return when locale is invalid', () => {
    const value = '';
    const validationOption = { locale: 'foobar' };
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[check]: Should return when check == false', () => {
    const value = '';
    const validationOption = { check: false };
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[msgOnSuccess]: Should return when required == false and msgOnSuccess is provided', () => {
    const value = '';
    const msgOnSuccess = 'msgOnSuccess';
    const validationOption = { required: false, msgOnSuccess };
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(wrapper.state().successMsg).toEqual(msgOnSuccess);
  });

  it('[pageClick]: Should call onBlur', () => {
    const value = '';
    const validationOption = { check: false };
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur = jest.fn();
    instance.pageClick({ target: null });
    expect(instance.onBlur).toHaveBeenCalled();
  });

  it('[STYLES]: Should have STYLES', () => {
    Select.__Rewire__('STYLES', {
      select__input: 'select__input_hash'
    });
    const value = '';
    const validationOption = { check: false };
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    expect(wrapper.find('.select__input_hash').length).toEqual(1);
  });
});

describe('Select component componentWillReceiveProps', () => {
  it('[validate]: Should call check when nextProps.validate = true', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} value="" validate={false} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    wrapper.setProps({ validate: true });
    expect(instance.check).toHaveBeenCalled();
  });

  it('[value]: err should be false if this.props.value != nextProps.value', () => {
    const value = 'us';
    const wrapper = mount(<Select optionList={OPTION_LIST} value="" />);
    wrapper.setProps({ value });
    expect(wrapper.state().value).toEqual(value);
    expect(wrapper.state().err).toEqual(false);
    expect(wrapper.state().successMsg).toEqual(undefined);
  });
});
