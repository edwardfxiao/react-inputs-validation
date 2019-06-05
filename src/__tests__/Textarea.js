import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Textarea from '../js/Inputs/Textarea.tsx';
configure({ adapter: new Adapter() });

const INPUT = 'textarea';

describe('Textarea component', () => {
  it('[Toggling "validate"]: Should show msgHtml(err) when toggling "validate"', () => {
    const wrapper = mount(<Textarea onBlur={() => {}} validate={false} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });
  // TODO
  // it('[Providing tabIndex]: Should tabIndex be exact the same with given prop', () => {
  //   const wrapper = mount(<Textarea tabIndex={10} onBlur={() => {}} />);
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   console.log($input.props())
  //   console.log(wrapper.find(INPUT).props())
  //   expect(wrapper.find(INPUT).props()['tabindex']).toEqual(1);
  // });

  it('[Providing msgOnError]: Should msg be msgOnError', () => {
    const msgOnError = 'msgOnError';
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        onFocus={() => {
          value = 'focused';
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    expect(value).toEqual('focused');
  });

  it("[onKeyUp]: Should call parent's onKeyUp", () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        onKeyUp={() => {
          value = 'keyuped';
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('keyup');
    expect(value).toEqual('keyuped');
  });

  it("[onClick]: Should call parent's onClick", () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        onClick={() => {
          value = 'clicked';
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('click');
    expect(value).toEqual('clicked');
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const value = 'foobar';
    const wrapper = mount(
      <Textarea
        value={value}
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
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const value = 'foobar';
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
          showMsg: true,
          msgOnSuccess,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.at(0).instance().value = value;
    $input.simulate('change');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnSuccess);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const value = 'foobar';
    const wrapper = mount(
      <Textarea
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          name: 'foobar',
          check: true,
          required: true,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    $input.simulate('focus');
    $input.at(0).instance().value = value;
    $input.simulate('change');
    $input.simulate('blur');
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[customFunc]: Should setState msg to customFunc.errorMessage', () => {
    const errorMessage = 'Description cannot be other things but milk';
    const wrapper = mount(
      <Textarea
        value={'foobar'}
        onBlur={() => {}}
        validationOption={{
          customFunc: res => {
            if (res != 'milk') {
              return errorMessage;
            }
            return true;
          },
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(errorMessage);
  });

  it('[customFunc]: Should setState msg to ""', () => {
    const errorMessage = 'Description cannot be other things but milk';
    const wrapper = mount(
      <Textarea
        value={'milk'}
        onBlur={() => {}}
        validationOption={{
          customFunc: res => {
            if (res != 'milk') {
              return errorMessage;
            }
            return true;
          },
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[validationOption.check]: Should msgHtml not be appeared when check is false', () => {
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ check: false }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[disabled]: Should msgHtml not be appeared when disabled', () => {
    const wrapper = mount(<Textarea onBlur={() => {}} disabled={true} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('change');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  // STRING

  it('[String maxLength]: Should not longer than maxLength', () => {
    let value = '';
    const wrapper = mount(
      <Textarea
        value={value}
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        maxLength={2}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.at(0).instance().value = 'foobar';
    $input.simulate('change');
    expect(value).toEqual('');
  });

  it('[String reg]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textarea
        value="foobar"
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          reg: /^0x[a-fA-F0-9]{40}$/,
          check: true,
          showMsg: true,
          required: true,
          msgOnError: '',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[String length]: Should msgHtml be appeared when the length is not valid', () => {
    const wrapper = mount(
      <Textarea
        value={'success'}
        onBlur={() => {}}
        validationOption={{
          length: 5,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[String length]: Should state.msg to be error message with name', () => {
    const wrapper = mount(
      <Textarea
        value={'success'}
        onBlur={() => {}}
        validationOption={{
          name: 'foobar',
          length: 5,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual('foobar length must be 5');
  });

  it('[String length]: Should state.msg to be error message', () => {
    const wrapper = mount(
      <Textarea
        value={'success'}
        onBlur={() => {}}
        validationOption={{
          length: 5,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual('length must be 5');
  });

  it('[String length]: Should state.msg not to be error message', () => {
    const wrapper = mount(
      <Textarea
        value={'abcde'}
        onBlur={() => {}}
        validationOption={{
          length: 5,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[String min]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textarea
        value="foobar"
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          min: 10,
          check: true,
          showMsg: true,
          required: true,
          msgOnError: '',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[String max]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textarea
        value="foobar"
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          max: 1,
          check: true,
          showMsg: true,
          required: true,
          msgOnError: '',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[String min and max]: Should msgHtml be appeared when the length is out out range', () => {
    const wrapper = mount(
      <Textarea
        value="12345"
        onBlur={() => {}}
        validationOption={{
          min: 1,
          max: 3,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE]: Should console.error REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type null]: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ type: null }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type array]: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textarea onBlur={() => {}} validationOption={{ type: 'array' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
