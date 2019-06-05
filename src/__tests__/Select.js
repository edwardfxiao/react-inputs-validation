import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WRAPPER_CLASS_IDENTITIFIER, MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Radiobox from '../js/Inputs/Radiobox.tsx';
configure({ adapter: new Adapter() });

const INPUT = 'input';
const WRAPPER = `.${WRAPPER_CLASS_IDENTITIFIER}`;
const WRAPPER_ID = 'job';

const OPTION_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];

describe('Radiobox component', () => {
  it('[Toggling "validate"]: Should show msgHtml(err) when toggling "validate"', () => {
    const wrapper = mount(<Radiobox id={WRAPPER_ID} optionList={OPTION_LIST} onBlur={() => {}} validate={false} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });
  // TODO
  // it('[Providing tabIndex]: Should tabIndex be exact the same with given prop', () => {
  //   const wrapper = mount(<Radiobox tabIndex={10} onBlur={() => {}} />);
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   console.log($input.props())
  //   console.log(wrapper.find(INPUT).props())
  //   expect(wrapper.find(INPUT).props()['tabindex']).toEqual(1);
  // });

  it('[Providing msgOnError]: Should msg be msgOnError', () => {
    const msgOnError = 'msgOnError';
    const wrapper = mount(<Radiobox id={WRAPPER_ID} optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const wrapper = mount(
      <Radiobox
        id={WRAPPER_ID}
        optionList={OPTION_LIST}
        value={OPTION_LIST[2].id}
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
          showMsg: true,
          msgOnSuccess,
        }}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  it('[disabled]: Should msgHtml not be appeared when disabled', () => {
    const wrapper = mount(<Radiobox id={WRAPPER_ID} optionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    wrapper.find(`#react-inputs-validation__radiobox_option-${WRAPPER_ID}-${1}`).simulate('change');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it("[onClick]: Should call parent's onClick", () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
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
      <Radiobox
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
    const wrapper = mount(<Radiobox onBlur={() => {}} validationOption={{ check: false }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[Change value]: Should change the value when click the option', () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
        id={WRAPPER_ID}
        optionList={OPTION_LIST}
        onBlur={() => {}}
        validate={false}
        onChange={res => {
          value = res;
        }}
      />,
    );
    wrapper.find(`#react-inputs-validation__radiobox_option-${WRAPPER_ID}-${1}`).simulate('change');
    expect(value).toEqual(OPTION_LIST[1].id);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
