import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import STYLES from '../src/css/example.css';
import {
  Textbox,
  Textarea,
  Radiobox,
  Checkbox,
  Select
} from '../src/js/Inputs';
// import { Textbox, Radiobox, Checkbox, Select } from '../index.js';
const JOB_OPTIONS_LIST = ['engineer', 'teacher', 'student'];
const MOVIE_OPTIONS_LIST = [
  { id: '', name: 'Please Select a movie' },
  { id: 0, name: 'Twin Peaks' },
  { id: 1, name: 'Lion King' },
  { id: 2, name: 'American Beauty' }
];
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      job: '',
      movie: '',
      agreement: false,
      hasNameError: true,
      hasDescError: true,
      hasMovieError: true,
      hasJobError: true,
      hasAgreementError: true,
      validate: false
    };
    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handleDescBlur = this.handleDescBlur.bind(this);
    this.handleMovieBlur = this.handleMovieBlur.bind(this);
    this.handleAgreementBlur = this.handleAgreementBlur.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleAgreementChange = this.handleAgreementChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.validationgCallbackName = this.validationgCallbackName.bind(this);
    this.validationgCallbackAgreement = this.validationgCallbackAgreement.bind(
      this
    );
    this.validationgCallbackJob = this.validationgCallbackName.bind(this);
    this.validationgCallbackMovie = this.validationgCallbackMovie.bind(this);
    this.validationgCallbackDesc = this.validationgCallbackDesc.bind(this);
  }

  handleMovieChange(movie) {
    this.setState({ movie });
  }

  handleDescChange(desc) {
    this.setState({ desc });
  }

  handleMovieBlur() {}
  handleDescBlur() {}

  validationgCallbackMovie(hasMovieError) {
    this.setState({ hasMovieError });
  }

  validationgCallbackDesc(hasDescError) {
    this.setState({ hasDescError });
  }

  handleAgreementChange(agreement) {
    this.setState({ agreement });
  }

  handleAgreementBlur() {}

  validationgCallbackAgreement(hasAgreementError) {
    this.setState({ hasAgreementError });
  }

  handleNameBlur() {}
  onRadioClick() {}

  handleNameChange(name) {
    this.setState({ name });
  }

  validationgCallbackName(hasNameError) {
    this.setState({ hasNameError });
    this.toggleValidating(false);
  }

  handleJobChange(job) {
    this.setState({ job });
  }

  validationgCallbackJob(hasJobError) {
    this.setState({ hasJobError });
    this.toggleValidating(false);
  }

  toggleValidating(validate) {
    this.setState({ validate });
  }

  renderRadioboxItem(name) {
    return (
      <div style={{ color: '#4a4a4a' }}>
        {name}
      </div>
    );
  }

  renderCheckboxChild() {
    return (
      <div style={{ color: '#4a4a4a', marginTop: '2px' }}>
        agree?
      </div>
    );
  }

  render() {
    const { name, desc, job, agreement, movie, validate } = this.state;
    const rowStyle = {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '2%',
      fontSize: '14px'
    };
    const rowWrapperStyle = {
      display: 'table',
      width: '100%'
    };
    const rowContainerStyle = {
      display: 'table-cell',
      verticalAlign: 'middle',
      borderBottom: '1px solid #e5e5e5'
    };
    const labelStyle = {
      display: 'inline-block'
    };
    const labelContentStyle = {
      verticalAlign: 'middle'
    };

    // START OF SELECT LOGIC
    let movieItem;
    MOVIE_OPTIONS_LIST.filter(i => {
      if (String(i.id) == String(movie)) {
        movieItem = i;
      }
    });
    let selectOptionsItemHtml = MOVIE_OPTIONS_LIST.map((i, k) => {
      return (
        <div
          key={k}
          onClick={() => {
            this.handleMovieChange(i.id);
          }}
        >
          <span className="icon-person" />{i.name}
        </div>
      );
    });
    // END OF SELECT LOGIC

    return (
      <div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                <span
                  className="icon-person"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>Name</span>
              </div>
              <div className={STYLES['test']} style={{ flex: '6 6 0' }}>
                <Textbox
                  tabIndex="0" //Optional.[String or Number].Default: -1.
                  id={'Name'} //Optional.[String].Default: "".  Input ID.
                  name="Name" //Optional.[String].Default: "". Input name.
                  type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                  value={name} //Optional.[String].Default: "".
                  disabled={false} //Optional.[Bool].Default: false.
                  placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                  validationgCallback={this.validationgCallbackName} //Optional.[Func].Default: none. Return the validation result.
                  classNameInput={`${STYLES['textbox__input']}`} //Optional.[String].Default: "".
                  classNameWrapper={`${STYLES['textbox__wrapper']}`} //Optional.[String].Default: "".
                  classNameContainer={`${STYLES['textbox__container']}`} //Optional.[String].Default: "".
                  customStyleInput={{}} //Optional.[Object].Default: {}.
                  customStyleWrapper={{}} //Optional.[Object].Default: {}.
                  customStyleContainer={{}} //Optional.[Object].Default: {}.
                  onChange={name => this.setState({ name })} //Optional.[Func].Default: () => {}. Will return the value.
                  onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                  onFocus={() => {}} //Optional.[Func].Default: none.
                  onClick={() => {}} //Optional.[Func].Default: none.
                  locale="en-US" //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                  validationOption={{
                    name: 'Name', //Optional.[String].Default: none. To display in Error message. i.e Please select a ${name}.
                    check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                    required: true, //Optional.[Bool].Default: none. To determin if it is required.
                    type: 'string', //Optional.[String].Default: none. Validation type, options are ['string', 'number', 'phone'].
                    showMsg: true, //Optional.[Bool].Default: none. Display the error message or not.
                    min: 2, //Optional.[Number].Default: none. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                    max: 10, //Optional.[Number].Default: none. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                    length: 2, //Optional.[Number].Default: none. Validation of exact length of the value.
                    compare: '3', //Optional.[String].Default: none. Compare this value to 3 to see if they are equal.
                    reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: none. Custom regex.
                    regMsg: 'faild in reg.test(${value})', //Optional.[String].Default: none. Custom regex error message.
                    phoneCountry: 'en-US', //Optional.[String].Default: none. Useful when the validationOption['type'] is phone. Check if the phone number matchs en-US phone number format.
                    msgOnError: 'Your custom error message if you provide the "validationOption.msgOnError"', //Optional.[String].Default: none. Show your custom error message no matter what when it has error if it is provied.
                    msgOnSuccess: 'Your custom success message if you provide the "validationOption.msgOnSuccess"' //Optional.[String].Default: none. Show your custom success message no matter what when it has error if it is provied.
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                <span
                  className="icon-person"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>job</span>
              </div>
              <div style={{ flex: '6 6 0', display: 'flex' }}>
                {JOB_OPTIONS_LIST.map((i, k) => {
                  return (
                    <div style={{ flex: '1 1 0', textAlign: 'center' }} key={k}>
                      <Radiobox
                        tabIndex="1"
                        checked={job == i ? true : false}
                        disabled={false}
                        id={`job-${k}`}
                        value={i}
                        classNameInput={`${STYLES['radiobox__input']}`}
                        classNameWrapper={
                          job == i
                            ? `${STYLES['radiobox__wrapper']} ${STYLES['checked']}`
                            : `${STYLES['radiobox__wrapper']}`
                        }
                        classNameContainer={`${STYLES['radiobox__container']}`}
                        labelHtml={this.renderRadioboxItem(i)}
                        onChange={() => {
                          this.handleJobChange(i);
                        }}
                        onClick={() => {
                          this.onRadioClick(i);
                        }}
                        validationOption={{
                          check: true
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                <span
                  className="icon-person"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>agreement</span>
              </div>
              <div style={{ flex: '6 6 0' }}>
                <Checkbox
                  tabIndex="2"
                  id={'checkbox'}
                  value={agreement}
                  disabled={false}
                  validate={validate}
                  classNameInputBox={`${STYLES['textbox__input']}`}
                  classNameWrapper={`${STYLES['textbox__wrapper']}`}
                  classNameContainer={`${STYLES['textbox__container']}`}
                  customStyleInputBox={{}}
                  customStyleWrapper={{}}
                  customStyleContainer={{}}
                  onBlur={this.handleAgreementBlur}
                  onChange={this.handleAgreementChange}
                  validationgCallback={this.validationgCallbackAgreement}
                  labelHtml={this.renderCheckboxChild()}
                  locale="en-US"
                  validationOption={{
                    name: 'agreement',
                    check: true,
                    required: true,
                    showMsg: true
                    // msgOnSuccess: 'Success'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                <span
                  className="icon-person"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>movie</span>
              </div>
              <div style={{ flex: '6 6 0' }}>
                <Select
                  tabIndex="3" //Optional.[String or Number].Default: -1.
                  id={'select'} //Optional.[String].Default: "". Input ID.
                  name={'select'} //Optional.[String].Default: "". Input name.
                  value={movie} //Optional.[String].Default: "".
                  disabled={false} //Optional.[Bool].Default: false.
                  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                  validationgCallback={this.validationgCallbackMovie} //Optional.[Func].Default: none. Return the validation result.
                  options={MOVIE_OPTIONS_LIST} //Required.[Array of Object(s)].Default: [].
                  classNameSelect="" //Optional.[String].Default: "".
                  classNameWrapper="" //Optional.[String].Default: "".
                  classNameContainer="" //Optional.[String].Default: "".
                  classNameSelectOptionsContainer="" //Optional.[String].Default: "".
                  classNameSelectOptionsItem="" //Optional.[String].Default: "".
                  customStyleSelect={{}} //Optional.[Object].Default: {}.
                  customStyleWrapper={{}} //Optional.[Object].Default: {}.
                  customStyleContainer={{}} //Optional.[Object].Default: {}.
                  customStyleSelectOptionsContainer={{}} //Optional.[Object].Default: {}.
                  customStyleSelectOptionsItem={{}} //Optional.[Object].Default: {}.
                  onChange={movie => this.setState({ movie })} //Optional.[Func].Default: () => {}. Will return the value.
                  onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                  onFocus={() => {}} //Optional.[Func].Default: none.
                  onClick={() => {}} //Optional.[Func].Default: none.
                  locale="en-US" //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                  selectHtmla={<div>{movieItem.name}</div>} //Optional.[String].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
                  selectOptionsItemHtmla={selectOptionsItemHtml} //Optional.[String].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                  validationOption={{
                    name: 'movie', //Optional.[String].Default: none. To display in Error message. i.e Please select a ${name}.
                    check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                    required: true, //Optional.[Bool].Default: none. To determin if it is required.
                    showMsg: true, //Optional.[Bool].Default: none. Display the error message or not.
                    msgOnError: 'Your custom error message if you provide the "validationOption.msgOnError"', //Optional.[String].Default: none. Show your custom error message no matter what when it has error if it is provied.
                    msgOnSuccess: 'Your custom success message if you provide the "validationOption.msgOnSuccess"' //Optional.[String].Default: none. Show your custom success message no matter what when it has error if it is provied.
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                <span
                  className="icon-person"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>description</span>
              </div>
              <div style={{ flex: '6 6 0' }}>
                <Textarea
                  tabIndex="4"
                  id={'textarea'}
                  value={desc}
                  disabled={false}
                  placeholder="请输入姓名"
                  validate={validate}
                  classNameInput={`${STYLES['textarea__input']}`}
                  classNameWrapper={`${STYLES['textarea__wrapper']}`}
                  classNameContainer={`${STYLES['textarea__container']}`}
                  customStyleInput={{}}
                  customStyleWrapper={{}}
                  customStyleContainer={{}}
                  onBlur={this.handleDescBlur}
                  onChange={this.handleDescChange}
                  validationgCallback={this.validationgCallbackDesc}
                  locale="en-US"
                  validationOption={{
                    // name: 'Description',
                    check: true,
                    required: true,
                    showMsg: true,
                    // msgOnError: 'Error',
                    // min: 2,
                    max: 10,
                    // length: 2,
                    // reg: /^\d{18}|\d{15}$/,
                    // regMsg: '格式错误',
                    // type: 'string'
                    type: 'string',
                    msgOnSuccess: 'Success'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
