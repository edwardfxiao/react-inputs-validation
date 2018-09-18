import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radiobox from '../js/Inputs/Radiobox.js';

const SELECTED_INDEX = 2;
const OPTIONS_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];

class RadioboxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.checked, hasError: props.hasError };
  }

  render() {
    const { validationOption } = this.props;
    const { value, hasError } = this.state;
    return (
      <div id="wrapper">
        <Radiobox
          tabIndex="1"
          id={'Radiobox'}
          name="Radiobox"
          type="text"
          value={value}
          optionList={OPTIONS_LIST}
          validationCallback={res => {
            this.setState({ hasError: res });
          }}
          onChange={res => {
            this.setState({ value: res });
          }}
          onBlur={e => {}}
          validationOption={validationOption}
        />
        <label id="value">{value}</label>
        <label id="hasError">{hasError ? 'has error' : 'not has error'}</label>
      </div>
    );
  }
}

configure({ adapter: new Adapter() });
const getWrapper = (value, validationOption, hasError) => {
  return mount(<RadioboxWrapper value={value} validationOption={validationOption} hasError={hasError} />);
};

describe('Radiobox component', () => {
  it('[validationOption.required = true]: Should return has error because of it is not checked any', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('.radiobox__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(value);
    expect($labelHasError.text()).toEqual('has error');
  });

  it('[validationOption.required = false]:Should return not has error when it is not checked because of it is not required', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: false
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('.radiobox__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(value);
    expect($labelHasError.text()).toEqual('not has error');
  });

  it('[validationOption.required = false]:Should return not has error when it selected something', () => {
    const value = '';
    const hasError = false;
    const validationOption = {
      check: true,
      required: true
    };
    const wrapper = getWrapper(value, validationOption, hasError);
    const $input = wrapper.find('.radiobox__wrapper');
    const $labelValue = wrapper.find('#value');
    const $labelHasError = wrapper.find('#hasError');
    $input.simulate('focus');
    const $option = wrapper
      .find('.radiobox__input')
      .at(SELECTED_INDEX)
      .simulate('change', { target: { value: OPTIONS_LIST[SELECTED_INDEX].id } });
    $input.simulate('blur');
    expect($labelValue.text()).toEqual(OPTIONS_LIST[SELECTED_INDEX].id);
    expect($labelHasError.text()).toEqual('not has error');
  });
});
