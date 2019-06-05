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
    // console.log($wrapper.at(0).instance())
    $wrapper.simulate('focus');
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Checkbox onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
