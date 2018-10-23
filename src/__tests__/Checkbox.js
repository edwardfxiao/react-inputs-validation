import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockConsole from 'jest-mock-console';
import Checkbox from '../js/Inputs/Checkbox';
configure({ adapter: new Adapter() });
describe('Checkbox component', () => {
  it('[check]: Should call handleCheckEnd when empty', () => {
    let value = '';
    const wrapper = mount(
      <Checkbox
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

  it('[check]: Should call handleCheckEnd when is not checked', () => {
    const wrapper = mount(<Checkbox checked={false} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should not call handleCheckEnd when is not checked and check is false', () => {
    const wrapper = mount(<Checkbox checked={false} validationOption={{ check: false }} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).not.toHaveBeenCalled();
  });

  it('[check]: Should call handleCheckEnd when is not checked and required is false with name provided', () => {
    const wrapper = mount(<Checkbox checked={false} validationOption={{ check: true, required: false }} />);
    const instance = wrapper.instance();
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it('[check]: Should call handleCheckEnd when is not checked and required is false', () => {
    const wrapper = mount(<Checkbox checked={false} validationOption={{ name: 'foobar', check: true, required: true }} />);
    const instance = wrapper.instance();
    wrapper.setState({ checked: false });
    instance.handleCheckEnd = jest.fn();
    instance.check();
    expect(instance.handleCheckEnd).toHaveBeenCalled();
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let focused = false;
    const wrapper = mount(
      <Checkbox
        onFocus={() => {
          focused = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onFocus();
    expect(focused).toEqual(true);
  });

  it('[onFocus]: Should not check when onFocus is not provided', () => {
    const wrapper = mount(<Checkbox />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onFocus();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it("[onBlur]: Should call parent's onBlur", () => {
    let blured = false;
    const wrapper = mount(
      <Checkbox
        onBlur={() => {
          blured = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onBlur();
    expect(blured).toEqual(true);
  });

  it('[onBlur]: Should not check when onBlur is not provided', () => {
    const wrapper = mount(<Checkbox />);
    const instance = wrapper.instance();
    instance.check = jest.fn();
    instance.onBlur();
    expect(instance.check).not.toHaveBeenCalled();
  });

  it("[onClick]: Should not call parent's onClick", () => {
    let clicked = false;
    const wrapper = mount(
      <Checkbox
        onClick={() => {
          clicked = true;
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onClick();
    expect(clicked).toEqual(true);
  });

  it('[handleCheckEnd]: Should call validationCallback', () => {
    const msgOnError = 'foobar';
    let valid = false;
    const wrapper = mount(
      <Checkbox
        validationCallback={() => {
          valid = true;
        }}
        validationOption={{
          name: 'foobar',
          msgOnError,
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.handleCheckEnd(true, msgOnError);
    expect(valid).toEqual(true);
  });

  it('[successMsg]: Should setState successMsg to msgOnSuccess', () => {
    const wrapper = mount(
      <Checkbox
        onBlur={() => {}}
        validationOption={{
          msgOnSuccess: 'msgOnSuccess',
        }}
      />,
    );
    const instance = wrapper.instance();
    instance.onChange();
    instance.onBlur();
    expect(wrapper.state().successMsg).toEqual('msgOnSuccess');
  });

  it('[state.err]: Should be true when props.validate toggled', () => {
    const wrapper = mount(<Checkbox validate={false} checked={false} onBlur={() => {}} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.state().err).toEqual(true);
  });

  it('[state.err]: Should be false when checked', () => {
    const wrapper = mount(<Checkbox validate={false} checked={false} onBlur={() => {}} />);
    const instance = wrapper.instance();
    wrapper.setProps({ validate: true });
    instance.onClick();
    expect(wrapper.state().err).toEqual(false);
  });

  it('[disabled]: Should not call onClick when the Checkbox is disabled', () => {
    const wrapper = mount(<Checkbox onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange = jest.fn();
    instance.onClick();
    instance.onBlur();
    expect(instance.onChange).not.toHaveBeenCalled();
  });

  it('[disabled]: Should state.err not change when the Checkbox is disabled', () => {
    const wrapper = mount(<Checkbox onBlur={() => {}} disabled={true} />);
    const instance = wrapper.instance();
    instance.onChange();
    expect(wrapper.state().err).toEqual(false);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Checkbox onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const instance = wrapper.instance();
    instance.onClick();
    instance.onBlur();
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[handleCheckEnd]: All validationOption', () => {
    let valid = false;
    const wrapper = mount(
      <Checkbox
        value=""
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
