import React from 'react';
import { expect as chaiExpect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WRAPPER_CLASS_IDENTITIFIER, OPTION_LIST_ITEM_IDENTITIFIER, MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Radiobox, { Option, isValidValue } from '../js/Inputs/Radiobox.tsx';
configure({ adapter: new Adapter() });

// const INPUT = 'input';
const WRAPPER = `.${WRAPPER_CLASS_IDENTITIFIER}`;

const OPTION_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];

describe('Radiobox component', () => {
  it('[Toggling "validate"]: Should show msgHtml(err) when toggling "validate"', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} onBlur={() => {}} validate={false} />);
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
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const wrapper = mount(
      <Radiobox
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

  it('[validationCallback]: Should call validationCallback', () => {
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
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('click');
    $wrapper.simulate('blur');
    expect(valid).toEqual(true);
  });

  it('[<Option/>]: Should not render <Option/>', () => {
    const id = `react-inputs-validation__radiobox_option-${OPTION_LIST[0].id}`;
    const wrapper = mount(<Option />);
    expect(wrapper.find(`#${id}`).hostNodes().length).toEqual(0);
  });

  it('[disabled]: Should msgHtml not be appeared when disabled', () => {
    const wrapper = mount(<Radiobox optionList={OPTION_LIST} onBlur={() => {}} disabled={true} />);
    wrapper
      .find(`#react-inputs-validation__radiobox_option-${OPTION_LIST[1].id}`)
      .hostNodes()
      .simulate('change');
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

  it("[onBlur]: Should not show msgHtml if it's not provide", () => {
    const wrapper = mount(<Radiobox />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[validationOption.check]: Should msgHtml not be appeared when check is false', () => {
    const wrapper = mount(<Radiobox onBlur={() => {}} validationOption={{ check: false }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[validationOption.required]: Should msgHtml not be appeared when required is false', () => {
    const wrapper = mount(<Radiobox onBlur={() => {}} validationOption={{ check: true, required: false }} />);
    const $wrapper = wrapper.find(WRAPPER);
    $wrapper.simulate('focus');
    $wrapper.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[All props]: Should pass all props', () => {
    const wrapper = mount(
      <Radiobox
        id="id"
        name="name"
        tabIndex="1"
        classNameWrapper={'classNameWrapper'}
        classNameInput={'classNameInput'}
        classNameContainer={'classNameContainer'}
        classNameOptionListItem={'classNameOptionListItem'}
        optionList={OPTION_LIST}
        customStyleWrapper={{ backgroundColor: '#000' }}
        customStyleContainer={{ backgroundColor: '#000' }}
        customStyleInput={{ backgroundColor: '#000' }}
        customStyleOptionListItem={{ backgroundColor: '#000' }}
      />,
    );
    expect(
      wrapper
        .find(`.${OPTION_LIST_ITEM_IDENTITIFIER}`)
        .at(0)
        .instance().style[0],
    ).toEqual('background-color');
    expect(wrapper.find(`#id`).hostNodes().length).toEqual(1);
  });

  it('[isValidValue]: Should retrun true', () => {
    chaiExpect(isValidValue(OPTION_LIST, OPTION_LIST[0].id)).equal(true);
  });

  it('[isValidValue]: Should retrun false', () => {
    chaiExpect(isValidValue(OPTION_LIST, 'foo')).equal(false);
  });

  it('[isValidValue]: Should retrun false', () => {
    chaiExpect(isValidValue([], 'foo')).equal(false);
  });

  it('[Change value]: Should change the value when click the option', () => {
    let value = '';
    const wrapper = mount(
      <Radiobox
        optionList={OPTION_LIST}
        onBlur={() => {}}
        validate={false}
        onChange={res => {
          value = res;
        }}
      />,
    );
    wrapper
      .find(`#react-inputs-validation__radiobox_option-${OPTION_LIST[1].id}`)
      .hostNodes()
      .simulate('change');
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
