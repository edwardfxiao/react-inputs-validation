import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import STYLES from '../src/css/example.css';
import {
  Textbox,
  Textarea,
  Radiobox,
  Checkbox,
  Select
} from '../src/js/Inputs';

var markdown = `
# Check Empty:

\`\`\`javascript
                    <Textbox
                      tabIndex="1" //Optional.[String or Number].Default: -1.
                      id={'Name'} //Optional.[String].Default: "".  Input ID.
                      name="Name" //Optional.[String].Default: "". Input name.
                      type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                      value={name} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                      onChange={name => this.setState({ name })} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      validationOption={{
                        name: 'Name', //Optional.[String].Default: none. To display in Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: none. To determin if it is required.
                        type: 'string', //Optional.[String].Default: none. Validation type, options are ['string', 'number', 'phone'].
                        showMsg: true //Optional.[Bool].Default: none. Display the error message or not.
                      }}
                    />
\`\`\`
`;

const CodeBlock = ({ literal, language }) => {
  var html = Prism.highlight(literal, Prism.languages[language]);
  var cls = 'language-' + language;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
};

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string
};

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
      description: '',
      job: '',
      movie: '',
      agreement: false,
      hasNameError: true,
      hasDescriptionError: true,
      hasMovieError: true,
      hasJobError: true,
      hasAgreementError: true,
      validate: false
    };
    this.validateForm = this.validateForm.bind(this);
  }

  toggleValidating(validate) {
    this.setState({ validate });
  }

  validateForm(e) {
    e.preventDefault();
    this.toggleValidating(true);
    const {
      // name,
      // job,
      // movie,
      // agreement,
      // description,
      hasNameError,
      hasDescriptionError,
      hasMovieError,
      hasJobError,
      hasAgreementError
    } = this.state;
    if (
      !hasNameError &&
      !hasDescriptionError &&
      !hasMovieError &&
      !hasJobError &&
      !hasAgreementError
    ) {
      alert('All validated!');
    }
  }

  render() {
    const { name, description, job, agreement, movie, validate } = this.state;
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

    let movieItem;
    MOVIE_OPTIONS_LIST.filter(i => {
      if (String(i.id) == String(movie)) {
        movieItem = i;
      }
    });

    return (
      <div style={{ padding: '10px' }}>
        <div style={{ padding: '10px', border: '1px solid #e5e5e5' }}>
          <div>
            <h1>
              Basic Usage
            </h1>
          </div>
          <div>
            <div className={STYLES['sub-section-title-wrapper']}>
              <div className={STYLES['sub-section-title']}>Textbox</div>
            </div>
            <div style={rowWrapperStyle}>
              <div>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}
                  >
                    <span style={labelContentStyle}>Check Empty:</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Textbox
                      tabIndex="1" //Optional.[String or Number].Default: -1.
                      id={'Name'} //Optional.[String].Default: "".  Input ID.
                      name="Name" //Optional.[String].Default: "". Input name.
                      type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                      value={name} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                      onChange={name => this.setState({ name })} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      validationOption={{
                        name: 'Name', //Optional.[String].Default: none. To display in Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: none. To determin if it is required.
                        type: 'string', //Optional.[String].Default: none. Validation type, options are ['string', 'number', 'phone'].
                        showMsg: true //Optional.[Bool].Default: none. Display the error message or not.
                      }}
                    />
                  </div>
                </div>
                <div style={rowStyle}>
                  <Markdown source={markdown} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div style={{ padding: '10px', border: '1px solid #e5e5e5' }}>
          <h1>
            Example form
          </h1>
          <form onSubmit={this.validateForm}>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}
                  >
                    <span
                      className="icon icon-person"
                      style={{ ...labelContentStyle, fontSize: '20px' }}
                    />&nbsp;
                    <span style={labelContentStyle}>Name</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Textbox
                      tabIndex="1" //Optional.[String or Number].Default: -1.
                      id={'Name'} //Optional.[String].Default: "".  Input ID.
                      name="Name" //Optional.[String].Default: "". Input name.
                      type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                      value={name} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                      validationgCallback={res =>
                        this.setState({ hasNameError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
                      classNameInput="" //Optional.[String].Default: "".
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      customStyleInput={{}} //Optional.[Object].Default: {}.
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      onChange={name => this.setState({ name })} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      onFocus={() => {}} //Optional.[Func].Default: none.
                      onClick={() => {}} //Optional.[Func].Default: none.
                      locale="en-US" //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      validationOption={{
                        name: 'Name', //Optional.[String].Default: none. To display in Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: none. To determin if it is required.
                        type: 'string', //Optional.[String].Default: none. Validation type, options are ['string', 'number', 'phone'].
                        showMsg: true, //Optional.[Bool].Default: none. Display the error message or not.
                        min: 2, //Optional.[Number].Default: none. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        max: 10, //Optional.[Number].Default: none. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        length: 2, //Optional.[Number].Default: none. Validation of exact length of the value.
                        compare: '3', //Optional.[String].Default: none. Compare this value to 3 to see if they are equal.
                        reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: none. Custom regex.
                        regMsg: 'failed in reg.test(${value})', //Optional.[String].Default: none. Custom regex error message.
                        phoneCountry: 'en-US', //Optional.[String].Default: none. Useful when the validationOption['type'] is phone. Check if the phone number matchs en-US phone number format.
                        msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: none. Show your custom error message no matter what when it has error if it is provied.
                        msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: none. Show your custom success message no matter what when it has error if it is provied.
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}
                  >
                    {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                    <span
                      className="icon icon-info"
                      style={{ ...labelContentStyle, fontSize: '20px' }}
                    />&nbsp;
                    <span style={labelContentStyle}>job</span>
                  </div>
                  <div style={{ flex: '6 6 0', display: 'flex' }}>
                    {JOB_OPTIONS_LIST.map((i, k) => {
                      return (
                        <div
                          style={{ flex: '1 1 0', textAlign: 'center' }}
                          key={k}
                        >
                          <Radiobox
                            tabIndex={2 + k} //Optional.[String or Number].Default: -1.
                            id={`job-${k}`} //Optional.[String].Default: "".  Input ID.
                            name={`job-${k}`} //Optional.[String].Default: "". Input name.
                            checked={job == i ? true : false} //Required.[Bool].Default: false.
                            disabled={false} //Optional.[Bool].Default: false.
                            value={i} //Optional.[String].Default: "".
                            classNameInput="" //Optional.[String].Default: "".
                            classNameWrapper="" //Optional.[String].Default: "".
                            classNameContainer="" //Optional.[String].Default: "".
                            customStyleInput={{}} //Optional.[Object].Default: {}.
                            customStyleWrapper={{}} //Optional.[Object].Default: {}.
                            customStyleContainer={{}} //Optional.[Object].Default: {}.
                            labelHtml={
                              <div style={{ color: '#4a4a4a' }}>
                                {i}
                              </div>
                            } //Required.[Html].Default: none.
                            onChange={job => this.setState({ job })} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={() => {}} //Optional.[Func].Default: none.
                            onFocus={() => {}} //Optional.[Func].Default: none.
                            onClick={() => {}} //Optional.[Func].Default: none.
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
                  <div
                    style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}
                  >
                    {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                    <span
                      className="icon icon-assignment-late"
                      style={{ ...labelContentStyle, fontSize: '20px' }}
                    />&nbsp;
                    <span style={labelContentStyle}>agreement</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Checkbox
                      tabIndex="5" //Optional.[String or Number].Default: -1.
                      id={'agreement'} //Optional.[String].Default: "".  Input ID.
                      name={'agreement'} //Optional.[String].Default: "". Input name
                      value={agreement} //Required.[String].Default: false.
                      checked={agreement} //Optional.[Bool].Default: false.
                      disabled={false} //Optional.[Bool].Default: false.
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                      validationgCallback={res =>
                        this.setState({
                          hasAgreementError: res,
                          validate: false
                        })} //Optional.[Func].Default: none. Return the validation result.
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameInputBox="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleInputBox={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      onFocus={() => {}} //Optional.[Func].Default: none.
                      onClick={() => {}} //Optional.[Func].Default: none.
                      onChange={agreement => this.setState({ agreement })} //Required.[Func].Default: () => {}. Will return the value.
                      labelHtml={
                        <div style={{ color: '#4a4a4a', marginTop: '2px' }}>
                          agree?
                        </div>
                      } //Required.[Html].Default: none.
                      locale="en-US" //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      validationOption={{
                        name: 'agreement', //Optional.[String].Default: none. To display in Error message. i.e Please check the ${name}.
                        check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: none. To determin if it is required.
                        showMsg: true, //Optional.[Bool].Default: none. Display the error message or not.
                        msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: none. Show your custom error message no matter what when it has error if it is provied.
                        msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: none. Show your custom success message no matter what when it has error if it is provied.
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}
                  >
                    <span
                      className="icon icon-bookmark"
                      style={{ ...labelContentStyle, fontSize: '20px' }}
                    />&nbsp;
                    <span style={labelContentStyle}>movie</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Select
                      tabIndex="6" //Optional.[String or Number].Default: -1.
                      id={'movie'} //Optional.[String].Default: "". Input ID.
                      name={'movie'} //Optional.[String].Default: "". Input name.
                      value={movie} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                      validationgCallback={res =>
                        this.setState({ hasMovieError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
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
                      selectHtmla={<div>{movieItem.name}</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
                      selectOptionsItemHtmla={MOVIE_OPTIONS_LIST.map((i, k) => {
                        return (
                          <div
                            key={k}
                            onClick={() => {
                              this.handleMovieChange(i.id);
                            }}
                          >
                            <span className="icon icon-person" />{i.name}
                          </div>
                        );
                      })} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                      validationOption={{
                        name: 'movie', //Optional.[String].Default: none. To display in Error message. i.e Please select a ${name}.
                        check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: none. To determin if it is required.
                        showMsg: true, //Optional.[Bool].Default: none. Display the error message or not.
                        msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: none. Show your custom error message no matter what when it has error if it is provied.
                        msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: none. Show your custom success message no matter what when it has error if it is provied.
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}
                  >
                    <span
                      className="icon icon-insert-drive-file"
                      style={{ ...labelContentStyle, fontSize: '20px' }}
                    />&nbsp;
                    <span style={labelContentStyle}>description</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Textarea
                      tabIndex="7" //Optional.[String or Number].Default: -1.
                      id="description" //Optional.[String].Default: "".  Input ID.
                      name="description" //Optional.[String].Default: "". Input name.
                      value={description} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      placeholder="Place your description here ^-^" //Optional.[String].Default: "".
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                      validationgCallback={res =>
                        this.setState({
                          hasDescriptionError: res,
                          validate: false
                        })} //Optional.[Func].Default: none. Return the validation result.
                      classNameInput="" //Optional.[String].Default: "".
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      customStyleInput={{}} //Optional.[Object].Default: {}.
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      onChange={description => this.setState({ description })} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      onFocus={() => {}} //Optional.[Func].Default: none.
                      onClick={() => {}} //Optional.[Func].Default: none.
                      locale="en-US" //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                      validationOption={{
                        name: 'Description', //Optional.[String].Default: none. To display in Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: none. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: none. To determin if it is required.
                        type: 'string', //Optional.[String].Default: none. Validation type, options are ['string', 'number', 'phone'].
                        showMsg: true, //Optional.[Bool].Default: none. Display the error message or not.
                        min: 2, //Optional.[Number].Default: none. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        max: 10, //Optional.[Number].Default: none. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        length: 2, //Optional.[Number].Default: none. Validation of exact length of the value.
                        reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: none. Custom regex.
                        regMsg: 'failed in reg.test(${value})', //Optional.[String].Default: none. Custom regex error message.
                        msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: none. Show your custom error message no matter what when it has error if it is provied.
                        msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: none. Show your custom success message no matter what when it has error if it is provied.
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '10px' }} />
            <div
              className={`${STYLES['my-button']} ${STYLES['my-button__red']} ${STYLES['save-button']}`}
              onClick={this.validateForm}
            >
              validate!
            </div>
            <input type="submit" style={{ display: 'none' }} />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
