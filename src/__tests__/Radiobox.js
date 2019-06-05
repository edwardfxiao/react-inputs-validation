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
});
