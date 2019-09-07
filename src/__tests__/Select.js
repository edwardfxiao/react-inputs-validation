import React from 'react';
import { expect as chaiExpect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WRAPPER_CLASS_IDENTITIFIER, MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Select, { isValidValue, getIndex, Option } from '../js/Inputs/Select.tsx';
configure({ adapter: new Adapter() });

const WRAPPER = `.${WRAPPER_CLASS_IDENTITIFIER}`;

const OPTION_LIST = [{ id: '', name: 'Please select one country' }, { id: 'us', name: 'US' }, { id: 'ca', name: 'CA' }, { id: 'uk', name: 'UK' }, { id: 'fr', name: 'France' }];

describe('Select component', () => {
  it('[Toggling "validate"]: Should show msgHtml(err) when toggling "validate"', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} onBlur={() => {}} validate={false} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[Providing msgOnError]: Should msg be msgOnError', () => {
    const msgOnError = 'msgOnError';
    const wrapper = mount(<Select optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const wrapper = mount(
      <Select
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

  it('[Change props value]: Should check immediately when new props value is not equal to internal value', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} value={OPTION_LIST[2].id} onBlur={() => {}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    wrapper.setProps({ value: '' });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[disabled]: Should msgHtml not be appeared when disabled', () => {
    const wrapper = mount(<Select optionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    wrapper
      .find(`#react-inputs-validation__select_option-${OPTION_LIST[1].id}`)
      .hostNodes()
      .simulate('click');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[isValidValue]: Should retrun true', () => {
    chaiExpect(isValidValue(OPTION_LIST, '')).equal(true);
  });

  it('[isValidValue]: Should retrun false', () => {
    chaiExpect(isValidValue(OPTION_LIST, 'foo')).equal(false);
  });

  it('[getIndex]: Should retrun 2', () => {
    chaiExpect(getIndex(OPTION_LIST, 'ca')).equal(2);
  });

  it('[getIndex]: Should retrun -1', () => {
    chaiExpect(getIndex(OPTION_LIST, 'foo')).equal(-1);
  });

  it("[onClick]: Should call parent's onClick", () => {
    let value = '';
    const wrapper = mount(
      <Select
        onClick={() => {
          value = 'clicked';
        }}
        optionList={OPTION_LIST}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    expect(value).toEqual('clicked');
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let value = '';
    const wrapper = mount(
      <Select
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
    const wrapper = mount(<Select onBlur={() => {}} validationOption={{ check: false }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[onClick]: Should choose item', () => {
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
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    const $el = wrapper.find(`#react-inputs-validation__select_option-${OPTION_LIST[2].id}`).hostNodes();
    $el.simulate('click');
    expect(value).toEqual(OPTION_LIST[2].id);
  });

  it("[onBlur]: Should not show msgHtml if it's not provide", () => {
    const wrapper = mount(<Select />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[onMouseOver]: Should option item add active class', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    const $el = wrapper.find(`#react-inputs-validation__select_option-${OPTION_LIST[2].id}`).hostNodes();
    $el.simulate('mouseover');
    expect($el.instance().className).toEqual('select__button select__options-item-show-cursor  select__options-item false false false select__hover-active');
  });

  it('[onMouseMove]: Should option item remove active class', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    const $el = wrapper.find(`#react-inputs-validation__select_option-${OPTION_LIST[2].id}`).hostNodes();
    $el.simulate('mouseover');
    $el.simulate('mousemove');
    expect($el.instance().className).toEqual('select__button select__options-item-show-cursor  select__options-item false false false select__hover-active');
  });

  it('[onMouseMove]: Should option item remove active class', () => {
    const value = '';
    const wrapper = mount(<Select value={value} optionList={OPTION_LIST} onChange={() => {}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    const $el = wrapper.find(`#react-inputs-validation__select_option-${OPTION_LIST[2].id}`).hostNodes();
    $el.simulate('mouseover');
    $el.simulate('mouseout');
    expect($el.instance().className).toEqual('select__button select__options-item-show-cursor  select__options-item false false false ');
  });

  it('[<Option/>]: Should not render <Option/>', () => {
    const id = `react-inputs-validation__select_option-${OPTION_LIST[0].id}`;
    const wrapper = mount(<Option />);
    expect(wrapper.find(`#${id}`).hostNodes().length).toEqual(0);
  });

  it('[validationCallback]: Should call validationCallback', () => {
    let valid = false;
    const wrapper = mount(
      <Select
        optionList={OPTION_LIST}
        onBlur={() => {}}
        validationCallback={res => {
          valid = res;
        }}
      />,
    );
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(valid).toEqual(true);
  });

  it('[asyncObj]: Should show error', () => {
    const wrapper = mount(<Select onBlur={() => {}} asyncMsgObj={{}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    wrapper.setProps({ asyncMsgObj: { error: true, message: 'has error' } });
    expect(
      wrapper
        .update()
        .find(`.${MSG_CLASS_IDENTITIFIER}`)
        .text(),
    ).toEqual('has error');
  });

  it('[asyncObj]: Should not show error', () => {
    const wrapper = mount(<Select value={OPTION_LIST[1].id} optionList={OPTION_LIST} onBlur={() => {}} asyncMsgObj={{}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    wrapper.setProps({ asyncMsgObj: { error: true, message: 'has error', showOnError: false } });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[asyncObj]: Should show success', () => {
    const wrapper = mount(<Select onBlur={() => {}} asyncMsgObj={{}} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    wrapper.setProps({ asyncMsgObj: { error: false, message: 'success', showOnSuccess: true } });
    expect(
      wrapper
        .update()
        .find(`.${MSG_CLASS_IDENTITIFIER}`)
        .text(),
    ).toEqual('success');
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Select optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
