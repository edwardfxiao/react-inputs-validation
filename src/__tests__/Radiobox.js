import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockConsole from 'jest-mock-console';
import Radiobox from '../js/Inputs/Radiobox.tsx';
configure({ adapter: new Adapter() });

const OPTION_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];

describe('Radiobox component', () => {
  it('[onFocus]: Should not check when onFocus is not provided', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onFocus();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it('[onBlur]: Should not check when onBlur is not provided', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onBlur();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it("[onChange]: Should call parent's onChange using simulate click", () => {
    let changed = false;
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onChange={() => {
          changed = true;
        }}
      />,
    );
    const $input = wrapper.find('.radiobox__input').at(1);
    $input.simulate('change');
    expect(changed).toEqual(true);
  });

  it("[onChange]: Should call parent's onChange", () => {
    let changed = false;
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onChange={() => {
          changed = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange();
    expect(changed).toEqual(true);
  });

  it("[onClick]: Should call parent's onClick", () => {
    let clicked = false;
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onClick={() => {
          clicked = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onClick();
    expect(clicked).toEqual(true);
  });

  it("[onBlur]: Should call parent's onBlur", () => {
    let blured = false;
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onBlur={() => {
          blured = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onBlur();
    expect(blured).toEqual(true);
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let focused = false;
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onFocus={() => {
          focused = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    expect(focused).toEqual(true);
  });

  it('[check]: Should call handleCheckEnd when empty', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check('');
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should not call handleCheckEnd when is not checked and check is false', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} validationOption={{ check: false }} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[check]: Should call handleCheckEnd when is not checked and required is false with name provided', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} validationOption={{ check: true, required: false }} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should call handleCheckEnd when is not checked and required is false', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} validationOption={{ name: 'foobar', check: true, required: true }} />);
    const instance = wrapper.instance();
    wrapper.setState({ checked: false });
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should call check when state.validate is true and prev.state.validate is false', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    wrapper.setProps({ validate: true });
    expect(instance.check).toHaveBeenCalled();
  });

  it('[handleCheckEnd]: Should state.err be msgOnSuccess when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'foobar';
    const wrapper = mount(
      <Radiobox
        value={OPTION_LIST[0].id}
        optionList={OPTION_LIST}
        onBlur={() => {}}
        validationOption={{
          msgOnSuccess,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onClick();
    instance.onBlur();
    expect(wrapper.state().msg).toEqual(msgOnSuccess);
  });

  it('[nextProps.value]: Should state.value ===  nextProps.value', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    wrapper.setProps({ value: OPTION_LIST[1].id });
    expect(wrapper.state().value).toEqual(OPTION_LIST[1].id);
  });

  it('[nextProps.value]: Should state.err === false', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    wrapper.setState({ err: true });
    wrapper.setProps({ value: OPTION_LIST[1].id });
    expect(wrapper.state().err).toEqual(false);
  });

  it('[nextProps.value]: Should state.successMsg === undefined', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    wrapper.setProps({ value: OPTION_LIST[1].id });
    expect(wrapper.state().successMsg).toEqual(undefined);
  });

  it('[nextProps.validate]: Should state.validate === nextProps.validate', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.state().validate).toEqual(true);
  });

  it('[disabled]: Should not call onClick when the Radiobox is disabled', () => {
    const wrapper = mount(<Radiobox ptionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange = jest.fn();
    instance.onClick();
    instance.onBlur();
    expect(instance.onChange).not.toHaveBeenCalled();
  });

  it('[disabled]: Should state.err not change when the Radiobox is disabled', () => {
    const wrapper = mount(<Radiobox ptionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange();
    expect(wrapper.state().err).toEqual(false);
  });

  it('[check]: Should call handleCheckEnd when is not checked and required is false with name provided', () => {
    const wrapper = mount(<Radiobox value={OPTION_LIST[0].id} cptionList={OPTION_LIST} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check(OPTION_LIST[0].id);
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[handleCheckEnd]: Should call validationCallback', () => {
    let valid = false;
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onBlur={() => {}}
        validationCallback={res => {
          valid = res;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onClick();
    instance.onBlur();
    expect(valid).toEqual(true);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const instance = wrapper.instance();
    instance.onClick();
    instance.onBlur();
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[handleCheckEnd]: All validationOption', () => {
    let valid = false;
    const wrapper = mount(
      <Radiobox
        value=""
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
});
