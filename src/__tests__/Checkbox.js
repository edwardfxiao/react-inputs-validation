import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WRAPPER_CLASS_IDENTITIFIER, MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Checkbox from '../js/Inputs/Checkbox.tsx';
configure({ adapter: new Adapter() });

const INPUT = 'input';
const WRAPPER = `.${WRAPPER_CLASS_IDENTITIFIER}`;

describe('Checkbox component', () => {
  it('[Toggling "validate"]: Should show msgHtml(err) when toggling "validate"', () => {
    const wrapper = mount(<Checkbox onBlur={() => {}} validate={false} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });
  // TODO
  // it('[Providing tabIndex]: Should tabIndex be exact the same with given prop', () => {
  //   const wrapper = mount(<Checkbox tabIndex={10} onBlur={() => {}} />);
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   console.log($input.props())
  //   console.log(wrapper.find(INPUT).props())
  //   expect(wrapper.find(INPUT).props()['tabindex']).toEqual(1);
  // });

  it('[Providing msgOnError]: Should msg be msgOnError', () => {
    const msgOnError = 'msgOnError';
    const wrapper = mount(<Checkbox onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const wrapper = mount(
      <Checkbox
        checked={true}
        onBlur={() => {}}
        validationOption={{
          msgOnSuccess,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const wrapper = mount(
      <Checkbox
        checked={false}
        onBlur={() => {}}
        validationOption={{
          msgOnSuccess,
        }}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const wrapper = mount(
      <Checkbox
        checked={false}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          msgOnSuccess,
        }}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    $wrapper.simulate('focus');
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(
      wrapper
        .update()
        .find(`.${MSG_CLASS_IDENTITIFIER}`)
        .text(),
    ).toEqual(msgOnSuccess);
  });

  it('[disabled]: Should msgHtml not be appeared when disabled', () => {
    const wrapper = mount(<Checkbox onBlur={() => {}} disabled={true} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it("[onClick]: Should call parent's onClick", () => {
    let value = '';
    const wrapper = mount(
      <Checkbox
        onClick={() => {
          value = 'clicked';
        }}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    expect(value).toEqual('clicked');
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let value = '';
    const wrapper = mount(
      <Checkbox
        onFocus={() => {
          value = 'focused';
        }}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    expect(value).toEqual('focused');
  });

  it('[validationOption.check]: Should msgHtml not be appeared when check is false', () => {
    const wrapper = mount(<Checkbox onBlur={() => {}} validationOption={{ check: false }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Checkbox onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
