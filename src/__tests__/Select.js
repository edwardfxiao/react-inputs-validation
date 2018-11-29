import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockConsole from 'jest-mock-console';
import Select from '../js/Inputs/Select.tsx';
configure({ adapter: new Adapter() });

const SELECTED_INDEX = 2;

const OPTION_LIST = [{ id: '', name: 'Please select one country' }, { id: 'us', name: 'US' }, { id: 'ca', name: 'CA' }, { id: 'uk', name: 'UK' }, { id: 'fr', name: 'France' }];

describe('Select component', () => {
  it('[onFocus]: Should not check when onFocus is not provided', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onFocus();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it('[onBlur]: Should not check when onBlur is not provided', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onBlur();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it('[ArrowUp]: Should return correct index', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    wrapper.instance().toggleShow(true);
    expect(wrapper.instance().onKeyDown({ keyCode: 38 })).toEqual(0);
  });

  it('[ArrowDown then ArrowUp]: Should return correct index', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 40 });
    instance.onKeyDown({ keyCode: 40 });
    instance.onKeyDown({ keyCode: 38 });
    expect(instance.onKeyDown({ keyCode: 38 })).toEqual(0);
  });

  it('[ArrowDown]: Should return correct index', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 40 });
    expect(instance.onKeyDown({ keyCode: 40 })).toEqual(2);
  });

  it('[ArrowDown]: Should called scroll', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.scroll = jest.fn();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 40 });
    expect(instance.scroll).toHaveBeenCalled();
  });

  it('[Type "C" and hit "Enter"]: Should call addActive', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.addActive = jest.fn();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 67 });
    instance.onKeyDown({ keyCode: 13 });
    expect(instance.addActive).toHaveBeenCalled();
  });

  it('[Type "C"]: Should call setTimeoutTyping', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.setTimeoutTyping = jest.fn();
    instance.toggleShow(true);
    instance.onKeyDown({ keyCode: 67 });
    expect(instance.setTimeoutTyping).toHaveBeenCalled();
  });

  it('[Type "C"]: Should call setTimeoutTyping when typingTimeout is undefined', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.setTimeoutTyping = jest.fn();
    instance.toggleShow(true);
    wrapper.typingTimeout = undefined;
    instance.onKeyDown({ keyCode: 67 });
    instance.onKeyDown({ keyCode: 68 });
    expect(instance.setTimeoutTyping).toHaveBeenCalled();
  });

  it('[Type "C" and then type "A"]: keycodeList should be [67, 65]', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.setTimeoutTyping = jest.fn();
    instance.toggleShow(true);
    wrapper.typingTimeout = undefined;
    instance.onKeyDown({ keyCode: 67 });
    instance.onKeyDown({ keyCode: 65 });
    expect(wrapper.state().keycodeList).toEqual([67, 65]);
  });

  it('[getIndex]: Should return correct index', () => {
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} />);
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
      />,
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
      />,
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
      />,
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
      />,
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
          required: true,
        }}
      />,
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
          msgOnError,
        }}
      />,
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
          msgOnSuccess: 'msgOnSuccess',
        }}
      />,
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
    expect(wrapper.find('.foo').length).toEqual(OPTION_LIST.length);
  });

  it('[select__input class]: Should have select__input class name', () => {
    const validationOption = {
      check: true,
      required: true,
      showMsg: true,
      successMsg: 'successMsg',
    };
    const wrapper = mount(<Select optionList={OPTION_LIST} value="" onBlur={() => {}} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.onChange('ca');
    instance.onBlur();
    expect(wrapper.find('.select__input').length).toEqual(1);
  });

  it('[invalid locale]: Should return when locale is invalid', () => {
    const validationOption = { locale: 'foobar' };
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[check]: Should return when check == false', () => {
    const validationOption = { check: false };
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[msgOnSuccess]: Should return when required == false and msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const validationOption = { required: false, msgOnSuccess };
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(wrapper.state().successMsg).toEqual(msgOnSuccess);
  });

  it('[state.err]: Should be true when props.validate toggled', () => {
    const wrapper = mount(<Select validate={false} optionList={OPTION_LIST} onBlur={() => {}} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.state().err).toEqual(true);
  });

  it('[state.err]: Should be false when checked', () => {
    const wrapper = mount(<Select validate={false} optionList={OPTION_LIST} onBlur={() => {}} />);
    const instance = wrapper.instance();
    wrapper.setProps({ validate: true });
    instance.onClick();
    instance.onChange(OPTION_LIST[0].id);
    expect(wrapper.state().err).toEqual(false);
  });

  it('[disabled]: Should not call onClick when the Textbox is disabled', () => {
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange = jest.fn();
    instance.onClick();
    instance.onBlur();
    expect(instance.onChange).not.toHaveBeenCalled();
  });

  it('[disabled]: Should state.err not change when the Textbox is disabled', () => {
    const wrapper = mount(<Select value="" optionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange();
    expect(wrapper.state().err).toEqual(false);
  });

  it('[pageClick]: Should call onBlur', () => {
    const validationOption = { check: false };
    const wrapper = mount(<Select optionList={OPTION_LIST} onChange={() => {}} validationOption={validationOption} />);
    const instance = wrapper.instance();
    instance.onFocus();
    instance.onBlur = jest.fn();
    instance.pageClick({ target: null });
    expect(instance.onBlur).toHaveBeenCalled();
  });

  it('[pageClick]: Should return if is this.wrapper self', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    wrapper.setState({ show: true });
    instance.pageClick({ target: instance.wrapper.current });
    expect(wrapper.state().show).toEqual(true);
  });

  it('[addActive]: Should this.currentFocus to be length - 1 if this.currentFocus < 0', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    wrapper.setState({ show: true });
    instance.currentFocus = -1;
    instance.addActive();
    expect(instance.currentFocus).toEqual(OPTION_LIST.length - 1);
  });

  it('[addActive]: Should this.currentFocus to be 0 if this.currentFocus > this.currentFocus.length', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    wrapper.setState({ show: true });
    instance.currentFocus = OPTION_LIST.length + 1;
    instance.addActive();
    expect(instance.currentFocus).toEqual(0);
  });

  it("[onChange]: Should call parent's onChange using simulate click", () => {
    let changed = false;
    const wrapper = mount(
      <Select
        optionList={OPTION_LIST}
        onChange={() => {
          changed = true;
        }}
      />,
    );
    const $input = wrapper.find('.select__options-item').at(1);
    $input.simulate('click');
    expect(changed).toEqual(true);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Select optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const instance = wrapper.instance();
    instance.onClick();
    instance.onBlur();
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
