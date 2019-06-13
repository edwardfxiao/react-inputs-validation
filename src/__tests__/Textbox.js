import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MSG_CLASS_IDENTITIFIER } from '../js/Inputs/const.ts';
import mockConsole from 'jest-mock-console';
import Textbox from '../js/Inputs/Textbox.tsx';
configure({ adapter: new Adapter() });

const INPUT = 'input';

describe('Textbox component', () => {
  it('[Toggling "validate"]: Should show msgHtml(err) when toggling "validate"', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} validate={false} />);
    wrapper.setProps({ validate: true });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  // TODO
  // it('[Providing tabIndex]: Should tabIndex be exact the same with given prop', () => {
  //   const wrapper = mount(<Textbox tabIndex={10} onBlur={() => {}} />);
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   console.log($input.props())
  //   console.log(wrapper.find(INPUT).props())
  //   expect(wrapper.find(INPUT).props()['tabindex']).toEqual(1);
  // });

  it('[Providing autoComplete]: Should autoComplete be exact the same with given prop', () => {
    const wrapper = mount(<Textbox autoComplete="true" />);
    expect(wrapper.find(INPUT).props()['autoComplete']).toEqual('true');
  });

  it('[Providing type]: Should type be exact the same with given prop', () => {
    const wrapper = mount(<Textbox type="password" />);
    expect(wrapper.find(INPUT).props()['type']).toEqual('password');
  });

  it('[Providing msgOnError]: Should msg be msgOnError', () => {
    const msgOnError = 'msgOnError';
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ msgOnError }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(msgOnError);
  });

  it("[onFocus]: Should call parent's onFocus", () => {
    let value = '';
    const wrapper = mount(
      <Textbox
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
      <Textbox
        onKeyUp={() => {
          value = 'keyuped';
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('keyup');
    expect(value).toEqual('keyuped');
  });

  it("[onKeyUp]: Should not call parent's onKeyUp", () => {
    let value = '';
    const wrapper = mount(<Textbox />);
    const $input = wrapper.find(INPUT);
    $input.simulate('keyup');
    expect(value).toEqual('');
  });

  it("[onClick]: Should call parent's onClick", () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        onClick={() => {
          value = 'clicked';
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('click');
    expect(value).toEqual('clicked');
  });

  it("[onClick]: Should not call parent's onClick", () => {
    let value = '';
    const wrapper = mount(<Textbox />);
    const $input = wrapper.find(INPUT);
    $input.simulate('click');
    expect(value).toEqual('');
  });

  it("[onBlur]: Should not show msgHtml if it's not provide", () => {
    const wrapper = mount(<Textbox />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[successMsg]: Should show successMsg when msgOnSuccess is provided', () => {
    const msgOnSuccess = 'msgOnSuccess';
    const value = 'foobar';
    const wrapper = mount(
      <Textbox
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
      <Textbox
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
      <Textbox
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

  // it('[customFunc]: Should setState msg to customFunc.errorMessage', () => {
  //   const errorMessage = 'Description cannot be other things but milk';
  //   const wrapper = mount(
  //     <Textbox
  //       value={'foobar'}
  //       onBlur={() => {}}
  //       validationOption={{
  //         customFunc: res => {
  //           if (res != 'milk') {
  //             return errorMessage;
  //           }
  //           return true;
  //         },
  //       }}
  //     />,
  //   );
  //   const $input = wrapper.find(INPUT);
  //   $input.simulate('focus');
  //   $input.simulate('blur');
  //   jest.useFakeTimers();
  //   setTimeout(() => {
  //     expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(errorMessage);
  //   }, 1000);
  //   jest.runAllTimers();
  // });

  it('[customFunc]: Should setState msg to ""', () => {
    const errorMessage = 'Description cannot be other things but milk';
    const wrapper = mount(
      <Textbox
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

  it('[validationOption.compare]: Should msgHtml be appeared when it is not equal to compared value', () => {
    const wrapper = mount(
      <Textbox
        value={'success'}
        onBlur={() => {}}
        validationOption={{
          compare: '3',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[validationOption.compare]: Should msgHtml be appeared when it is equal to compared value', () => {
    const wrapper = mount(
      <Textbox
        value={'abc'}
        onBlur={() => {}}
        validationOption={{
          compare: 'abc',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[validationOption.check]: Should msgHtml not be appeared when check is false', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ check: false }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[validationOption.check]: Should msgHtml not be appeared when check is false', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ check: true, required: false }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[disabled]: Should msgHtml not be appeared when disabled', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} disabled={true} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('change');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  // STRING

  it('[String maxLength]: Should not longer than maxLength', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
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

  it('[String maxLength]: Should not longer than maxLength', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        maxLength={'10'}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.at(0).instance().value = 'foo';
    $input.simulate('change');
    expect(value).toEqual('foo');
  });

  it('[String maxLength]: Should not longer than maxLength', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        value={value}
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        maxLength={0}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.at(0).instance().value = 'foo';
    $input.simulate('change');
    expect(value).toEqual('foo');
  });

  it('[String reg]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
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

  it('[String reg]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value="0x0D36396E5f5EC58F0ff4569ED463CBEF03B0ba52"
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
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[String reg]: Should not msgHtml be appeared with regMsg', () => {
    const regMsg = 'regMsg';
    const wrapper = mount(
      <Textbox
        value="abc"
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          reg: /^0x[a-fA-F0-9]{40}$/,
          check: true,
          showMsg: true,
          regMsg,
          required: true,
          msgOnError: '',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).text()).toEqual(regMsg);
  });

  it('[String length]: Should msgHtml be appeared when the length is not valid', () => {
    const wrapper = mount(
      <Textbox
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

  it('[String length]: Should msgHtml be appeared with name when the length is not valid', () => {
    const wrapper = mount(
      <Textbox
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

  it('[String length]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
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

  it('[String length]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={'foo'}
        onBlur={() => {}}
        validationOption={{
          length: 3,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[String length]: Should state.msg not to be error message', () => {
    const wrapper = mount(
      <Textbox
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
      <Textbox
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

  it('[String min]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value="foobar"
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          min: 6,
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
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[String max]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
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

  it('[String max]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value="foobar"
        onBlur={() => {}}
        onChange={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'string',
          name: '',
          max: 7,
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
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[String min and max]: Should msgHtml be appeared when the length is out out range', () => {
    const wrapper = mount(
      <Textbox
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

  it('[String min and max]: Should not msgHtml be appeared when the length is out out range', () => {
    const wrapper = mount(
      <Textbox
        value="12345"
        onBlur={() => {}}
        validationOption={{
          min: 1,
          max: 10,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  // NUMBER

  it('[Number length]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={10}
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
          length: 1,
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

  it('[Number length]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={1}
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
          length: 1,
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
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[Number min]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={10}
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
          min: 20,
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

  it('[Number min]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={21}
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
          min: 20,
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
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[Number max]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={10}
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
          max: 2,
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

  it('[Number max]: Should not msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value={1}
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
          max: 2,
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
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[Number min and max]: Should msgHtml be appeared when the value is out out range', () => {
    const wrapper = mount(
      <Textbox
        value={30}
        onBlur={() => {}}
        validationOption={{
          type: 'number',
          min: 10,
          max: 20,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(1);
  });

  it('[Number min and max]: Should not msgHtml be appeared when the value is out out range', () => {
    const wrapper = mount(
      <Textbox
        value={15}
        onBlur={() => {}}
        validationOption={{
          type: 'number',
          min: 10,
          max: 20,
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(wrapper.find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[Number invalid]: Should msgHtml be appeared', () => {
    const wrapper = mount(
      <Textbox
        value="foobar"
        onBlur={() => {}}
        validationOption={{
          locale: 'en-US',
          type: 'number',
          name: '',
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

  it('[Number autoFormatNumber]: Should .5 to be 0.5', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        validationOption={{
          type: 'number',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.at(0).instance().value = '.5';
    $input.simulate('change');
    expect(value).toEqual('0.5');
  });

  it('[Number autoFormatNumber]: Should 0.5 to be 0.5', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        validationOption={{
          type: 'number',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.at(0).instance().value = '0.5';
    $input.simulate('change');
    expect(value).toEqual('0.5');
  });

  it('[Number autoFormatNumber]: Should a to be ""', () => {
    let value = '';
    const wrapper = mount(
      <Textbox
        onBlur={() => {}}
        onChange={res => {
          value = res;
        }}
        validationOption={{
          type: 'number',
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.at(0).instance().value = 'a';
    $input.simulate('change');
    expect(value).toEqual('');
  });

  it('[validationCallback]: Should call validationCallback', () => {
    let valid = false;
    const wrapper = mount(
      <Textbox
        onBlur={() => {}}
        validationCallback={res => {
          valid = res;
        }}
      />,
    );
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(valid).toEqual(true);
  });

  it('[All props]: Should pass all props', () => {
    const wrapper = mount(
      <Textbox
        id="id"
        name="name"
        tabIndex="1"
        value=""
        placeholder=""
        classNameInput=""
        classNameWrapper=""
        classNameContainer=""
        customStyleInput={{}}
        customStyleWrapper={{}}
        customStyleContainer={{}}
      />,
    );
    expect(wrapper.find(`#id`).hostNodes().length).toEqual(1);
  });

  it('[asyncObj]: Should show error', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} asyncMsgObj={{}} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    wrapper.setProps({ asyncMsgObj: { error: true, message: 'has error' } });
    expect(
      wrapper
        .update()
        .find(`.${MSG_CLASS_IDENTITIFIER}`)
        .text(),
    ).toEqual('has error');
  });

  it('[asyncObj]: Should not show error', () => {
    const wrapper = mount(<Textbox value="foobar" onBlur={() => {}} asyncMsgObj={{}} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    wrapper.setProps({ asyncMsgObj: { error: true, message: 'has error', showOnError: false } });
    expect(wrapper.update().find(`.${MSG_CLASS_IDENTITIFIER}`).length).toEqual(0);
  });

  it('[asyncObj]: Should show success', () => {
    const wrapper = mount(<Textbox onBlur={() => {}} asyncMsgObj={{}} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
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
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ locale: 'foobar' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type null]: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ type: null }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });

  it('[console.error type array]: Should console.error Please provide "type" in validationOption', () => {
    const restoreConsole = mockConsole();
    const wrapper = mount(<Textbox onBlur={() => {}} validationOption={{ type: 'array' }} />);
    const $input = wrapper.find(INPUT);
    $input.simulate('focus');
    $input.simulate('blur');
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
