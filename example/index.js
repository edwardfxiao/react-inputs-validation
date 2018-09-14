import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import STYLES from '../src/css/example.css';
import { Textbox, Textarea, Radiobox, Checkbox, Select } from '../src/js/Inputs';

const markdownTextboxEmptyExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  tabIndex="1" //Optional.[String or Number].Default: -1.
  id={'Name'} //Optional.[String].Default: "".  Input ID.
  name="Name" //Optional.[String].Default: "". Input name.
  type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
  value={name} //Optional.[String].Default: "".
  placeholder="Place your name here ^-^" //Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ name });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true //Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownTextboxRegexExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  tabIndex="1" //Optional.[String or Number].Default: -1.
  id={'Name'} //Optional.[String].Default: "".  Input ID.
  name="Name" //Optional.[String].Default: "". Input name.
  type="text" //Optional.[String].Default: "text". Input type [text, password, number].
  value={nameRg} //Optional.[String].Default: "".
  placeholder="Place your name here ^-^" //Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ nameRg });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    reg: /^\d{5}$/, //Optional.[Bool].Default: "" Custom regex.
    regMsg: 'failed in reg.test(value)' //Optional.[String].Default: "" Custom regex error message.
  }}
/>
\`\`\`
`;

const markdownTextboxPhoneExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  tabIndex="1" //Optional.[String or Number].Default: -1.
  id={'Phone'} //Optional.[String].Default: "".  Input ID.
  name="Phone" //Optional.[String].Default: "". Input name.
  type="number" //Optional.[String].Default: "text". Input type [text, password, number].
  value={name} //Optional.[String].Default: "".
  placeholder="Place your phone number here ^-^" //Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ name });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    type: 'phone', //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'phone'].
    phoneCountry: 'en-US', //Optional.[String].Default: "en-US". Useful when the validationOption['type'] is phone. Check if the phone number matchs en-US phone number format.
  }}
/>
\`\`\`
`;

const markdownTextboxNumberExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  tabIndex="1" //Optional.[String or Number].Default: -1.
  id={'Number'} //Optional.[String].Default: "".  Input ID.
  name="Number" //Optional.[String].Default: "". Input name.
  type="number" //Optional.[String].Default: "text". Input type [text, password, number].
  value={number} //Optional.[String].Default: "".
  placeholder="Place your number here ^-^" //Optional.[String].Default: "".
  onChange={(number, e) => {
    this.setState({ number });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    type: 'number', //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'phone'].
    min: 10, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
    max: 100 //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
  }}
/>
\`\`\`
`;

const markdownRadioboxEmptyExample = `
\`\`\`javascript
import { Radiobox } from 'react-inputs-validation';

<Radiobox
  tabIndex={2} //Optional.[String or Number].Default: -1.
  id="job" //Optional.[String].Default: "".  Input ID.
  name="job" //Optional.[String].Default: "". Input name.
  value={job} //Optional.[String].Default: "".
  optionList={[
    { id: 'engineer', name: 'engineer' },
    { id: 'teacher', name: 'teacher' },
    { id: 'student', name: 'student' }
  ]}
  customStyleContainer={{
    display: 'flex',
    justifyContent: 'flex-start'
  }} //Optional.[Object].Default: {}.
  customStyleOptionListItem={{ marginRight: '20px' }} //Optional.[Object].Default: {}.
  onChange={(job, e) =>{
    this.setState({ job });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  validationOption={{
    name: 'job', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true //Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownCheckboxEmptyExample = `
\`\`\`javascript
import { Checkbox } from 'react-inputs-validation';

<Checkbox
  tabIndex="5" //Optional.[String or Number].Default: -1.
  id={'agreement'} //Optional.[String].Default: "".  Input ID.
  name={'agreement'} //Optional.[String].Default: "". Input name
  value={agreement} //Required.[String].Default: "".
  onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  onChange={(agreement, e) => {
    this.setState({ agreement });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  labelHtml={
    <div style={{ color: '#4a4a4a', marginTop: '2px' }}>
      agree?
    </div>
  } //Required.[Html].Default: none.
  validationOption={{
    name: 'agreement', //Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownSelectEmptyExample = `
\`\`\`javascript
import { Select } from 'react-inputs-validation';

<Select
  tabIndex="6" //Optional.[String or Number].Default: -1.
  id={'movie'} //Optional.[String].Default: "". Input ID.
  name={'movie'} //Optional.[String].Default: "". Input name.
  value={movie} //Optional.[String].Default: "".
  optionList={[
    { id: '', name: 'Please Select a movie' },
    { id: 0, name: 'Twin Peaks' },
    { id: 1, name: 'Lion King' },
    { id: 2, name: 'American Beauty' }
  ]} //Required.[Array of Object(s)].Default: [].
  onChange={(movie, e) => {
    this.setState({ movie });
    console.log(e);
  }} //Optional.[Func].Default: () => {}. Will return the value.
  onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  // selectHtml={<div>{movieItem.name}</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
  // selectOptionListItemHtml={MOVIE_OPTIONS_LIST.map(
  //   (i, k) => {
  //     return (
  //       <div
  //         key={k}
  //         onClick={() => {
  //           this.handleMovieChange(i.id);
  //         }}
  //       >
  //         <span className="icon icon-person" />{i.name}
  //       </div>
  //     );
  //   }
  // )} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
  validationOption={{
    name: 'movie', //Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true //Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownTextareaEmptyExample = `
\`\`\`javascript
import { Textarea } from 'react-inputs-validation';

<Textarea
  tabIndex="1" //Optional.[String or Number].Default: -1.
  id="description" //Optional.[String].Default: "".  Textarea ID.
  name="description" //Optional.[String].Default: "". Input name.
  value={description} //Optional.[String].Default: "".
  placeholder="Place your description here ^-^" //Optional.[String].Default: "".
  onChange={(description, e) => {
    this.setState({ description });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Description', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
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
const JOB_OPTIONS_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];
const MOVIE_OPTIONS_LIST = [{ id: '', name: 'Please Select a movie' }, { id: 0, name: 'Twin Peaks' }, { id: 1, name: 'Lion King' }, { id: 2, name: 'American Beauty' }];
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameRg: '',
      phone: '',
      number: '',
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
    if (!hasNameError && !hasDescriptionError && !hasMovieError && !hasJobError && !hasAgreementError) {
      alert('All validated!');
    }
  }

  render() {
    const { name, nameRg, phone, number, description, job, agreement, movie, validate } = this.state;
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

    // let movieItem;
    // MOVIE_OPTIONS_LIST.filter(i => {
    //   if (String(i.id) == String(movie)) {
    //     movieItem = i;
    //   }
    // });

    return (
      <div style={{ padding: '10px' }}>
        <div style={{ padding: '10px', border: '1px solid #e5e5e5' }}>
          <div>
            <h1>Basic Usage</h1>
          </div>

          <div>
            <div className={STYLES['sub-section-title-wrapper']}>
              <div className={STYLES['sub-section-title']}>Textbox</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Textbox Empty by onBlur Example:</h1>
                  <Textbox
                    tabIndex="1" //Optional.[String or Number].Default: -1.
                    id={'Name'} //Optional.[String].Default: "".  Input ID.
                    name="Name" //Optional.[String].Default: "". Input name.
                    type="text" //Optional.[String].Default: "text". Input type [text, password, number].
                    value={name} //Optional.[String].Default: "".
                    disabled={false} //Optional.[Bool].Default: false.
                    placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                    onChange={(name, e) => {
                      this.setState({ name });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, //Optional.[Bool].Default: true. To determin if you need to validate.,
                      required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownTextboxEmptyExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Textbox Regex by onBlur Example:</h1>
                  <Textbox
                    tabIndex="1" //Optional.[String or Number].Default: -1.
                    id={'Name'} //Optional.[String].Default: "".  Input ID.
                    name="Name" //Optional.[String].Default: "". Input name.
                    type="text" //Optional.[String].Default: "text". Input type [text, password, number].
                    value={nameRg} //Optional.[String].Default: "".
                    disabled={false} //Optional.[Bool].Default: false.
                    placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                    onChange={(nameRg, e) => {
                      this.setState({ nameRg });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      reg: /^\d{5}$/, //Optional.[Bool].Default: "" Custom regex.
                      regMsg: 'failed in reg.test(${value})' //Optional.[String].Default: "" Custom regex error message.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownTextboxRegexExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Textbox Phone format by onBlur Example:</h1>
                  <Textbox
                    tabIndex="1" //Optional.[String or Number].Default: -1.
                    id={'Phone'} //Optional.[String].Default: "".  Input ID.
                    name="Phone" //Optional.[String].Default: "". Input name.
                    type="number" //Optional.[String].Default: "text". Input type [text, password, number].
                    value={phone} //Optional.[String].Default: "".
                    placeholder="Place your phone number here ^-^" //Optional.[String].Default: "".
                    onChange={(phone, e) => {
                      this.setState({ phone });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      type: 'phone', //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'phone'].
                      phoneCountry: 'en-US' //Optional.[String].Default: "en-US". Useful when the validationOption['type'] is phone. Check if the phone number matchs en-US phone number format.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownTextboxPhoneExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Textbox Number by onBlur Example:</h1>
                  <Textbox
                    tabIndex="1" //Optional.[String or Number].Default: -1.
                    id={'Number'} //Optional.[String].Default: "".  Input ID.
                    name="Number" //Optional.[String].Default: "". Input name.
                    type="number" //Optional.[String].Default: "text". Input type [text, password, number].
                    value={number} //Optional.[String].Default: "".
                    placeholder="Place your number here ^-^" //Optional.[String].Default: "".
                    onChange={(number, e) => {
                      this.setState({ number });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      type: 'number', //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'phone'].
                      min: 10, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                      max: 100 //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownTextboxNumberExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={STYLES['sub-section-title-wrapper']}>
              <div className={STYLES['sub-section-title']}>Radiobox</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Radiobox Empty by onBlur Example:</h1>
                  <Radiobox
                    tabIndex={2} //Optional.[String or Number].Default: -1.
                    id="job" //Optional.[String].Default: "".  Input ID.
                    name="job" //Optional.[String].Default: "". Input name.
                    value={job} //Optional.[String].Default: "".
                    optionList={[{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }]}
                    customStyleContainer={{
                      display: 'flex',
                      justifyContent: 'flex-start'
                    }} //Optional.[Object].Default: {}.
                    customStyleOptionListItem={{ marginRight: '20px' }} //Optional.[Object].Default: {}.
                    onChange={(job, e) => {
                      this.setState({ job });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} //Optional.[Func].Default: none.
                    validationOption={{
                      name: 'job', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownRadioboxEmptyExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={STYLES['sub-section-title-wrapper']}>
              <div className={STYLES['sub-section-title']}>Checkbox</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Checkbox Empty by onBlur Example:</h1>
                  <Checkbox
                    tabIndex="5" //Optional.[String or Number].Default: -1.
                    id={'agreement'} //Optional.[String].Default: "".  Input ID.
                    name={'agreement'} //Optional.[String].Default: "". Input name
                    value={agreement} //Required.[String].Default: "".
                    onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    onChange={(agreement, e) => {
                      this.setState({ agreement });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    labelHtml={<div style={{ color: '#4a4a4a', marginTop: '2px' }}>agree?</div>} //Required.[Html].Default: none.
                    validationOption={{
                      name: 'agreement', //Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
                      check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownCheckboxEmptyExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={STYLES['sub-section-title-wrapper']}>
              <div className={STYLES['sub-section-title']}>Select</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Select Empty by onBlur Example:</h1>
                  <Select
                    tabIndex="6" //Optional.[String or Number].Default: -1.
                    id={'movie'} //Optional.[String].Default: "". Input ID.
                    name={'movie'} //Optional.[String].Default: "". Input name.
                    value={movie} //Optional.[String].Default: "".
                    optionList={[{ id: '', name: 'Please Select a movie' }, { id: 0, name: 'Twin Peaks' }, { id: 1, name: 'Lion King' }, { id: 2, name: 'American Beauty' }]} //Required.[Array of Object(s)].Default: [].
                    onChange={(movie, e) => {
                      this.setState({ movie });
                      console.log(e);
                    }} //Optional.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    // selectHtml={<div>{movieItem.name}</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
                    // selectOptionListItemHtml={MOVIE_OPTIONS_LIST.map(
                    //   (i, k) => {
                    //     return (
                    //       <div
                    //         key={k}
                    //         onClick={() => {
                    //           this.handleMovieChange(i.id);
                    //         }}
                    //       >
                    //         <span className="icon icon-person" />{i.name}
                    //       </div>
                    //     );
                    //   }
                    // )} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                    validationOption={{
                      name: 'movie', //Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                      check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownSelectEmptyExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={STYLES['sub-section-title-wrapper']}>
              <div className={STYLES['sub-section-title']}>Textarea</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={STYLES['block']}>
                <div>
                  <h1>Validate Textarea Empty by onBlur Example:</h1>
                  <Textarea
                    tabIndex="1" //Optional.[String or Number].Default: -1.
                    id="description" //Optional.[String].Default: "".  Textarea ID.
                    name="description" //Optional.[String].Default: "". Textarea name.
                    value={description} //Optional.[String].Default: "".
                    placeholder="Place your description here ^-^" //Optional.[String].Default: "".
                    onChange={(description, e) => {
                      this.setState({ description });
                      console.log(e);
                    }} //Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      name: 'Description', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                  />
                  <br />
                </div>
                <div>
                  <Markdown source={markdownTextareaEmptyExample} renderers={{ CodeBlock }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div style={{ minHeight: '1000px', padding: '10px', border: '1px solid #e5e5e5' }}>
          <h1>Example form</h1>
          <form onSubmit={this.validateForm}>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                    <span className="icon icon-person" style={{ ...labelContentStyle, fontSize: '20px' }} />&nbsp;
                    <span style={labelContentStyle}>Name</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Textbox
                      tabIndex="1" //Optional.[String or Number].Default: -1.
                      id={'Name'} //Optional.[String].Default: "".  Input ID.
                      name="Name" //Optional.[String].Default: "". Input name.
                      type="text" //Optional.[String].Default: "text". Input type [text, password, number].
                      value={name} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      placeholder="Place your name here ^-^" //Optional.[String].Default: "".
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => this.setState({ hasNameError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
                      classNameInput="" //Optional.[String].Default: "".
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      customStyleInput={{}} //Optional.[Object].Default: {}.
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      onChange={(name, e) => {
                        this.setState({ name });
                        console.log(e);
                      }} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={e => {
                        console.log(e);
                      }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      validationOption={{
                        name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                        // type: 'string', //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'phone'].
                        // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
                        // min: 2, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        // max: 10, //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // length: 2, //Optional.[Number].Default: 0. Validation of exact length of the value.
                        // compare: '3', //Optional.[String].Default: "" Compare this value to 3 to see if they are equal.
                        // reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: "" Custom regex.
                        // regMsg: 'failed in reg.test(${value})', //Optional.[String].Default: "" Custom regex error message.
                        // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // phoneCountry: 'en-US', //Optional.[String].Default: "en-US". Useful when the validationOption['type'] is phone. Check if the phone number matchs en-US phone number format.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "" Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // customFunc: res => { //Optional.[Func].Default: none. Custom function. Returns true or err message
                        //   if (res != 'milk') {
                        //     return 'Name cannot be other things but milk';
                        //   }
                        //   return true;
                        // }
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
                    <span className="icon icon-info" style={{ ...labelContentStyle, fontSize: '20px' }} />&nbsp;
                    <span style={labelContentStyle}>job</span>
                  </div>
                  <div style={{ flex: '6 6 0', display: 'flex' }}>
                    <Radiobox
                      tabIndex={2} //Optional.[String or Number].Default: -1.
                      id="job" //Optional.[String].Default: "".  Input ID.
                      name="job" //Optional.[String].Default: "". Input name.
                      disabled={false} //Optional.[Bool].Default: false.
                      value={job} //Optional.[String].Default: "".
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => this.setState({ hasJobError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
                      optionList={JOB_OPTIONS_LIST}
                      classNameInput="" //Optional.[String].Default: "".
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      classNameOptionListItem="" //Optional.[String].Default: "".
                      customStyleInput={{}} //Optional.[Object].Default: {}.
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                      }} //Optional.[Object].Default: {}.
                      customStyleOptionListItem={{ marginRight: '20px' }} //Optional.[Object].Default: {}.
                      onChange={(job, e) => {
                        this.setState({ job });
                        console.log(e);
                      }} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={e => {
                        console.log(e);
                      }} //Optional.[Func].Default: none.
                      // onFocus={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      validationOption={{
                        name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                        // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
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
                    <span className="icon icon-assignment-late" style={{ ...labelContentStyle, fontSize: '20px' }} />&nbsp;
                    <span style={labelContentStyle}>agreement</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Checkbox
                      tabIndex="5" //Optional.[String or Number].Default: -1.
                      id={'agreement'} //Optional.[String].Default: "".  Input ID.
                      name={'agreement'} //Optional.[String].Default: "". Input name
                      value={agreement} //Required.[String].Default: "".
                      checked={false} //Required.[Bool].Default: false.
                      disabled={false} //Optional.[Bool].Default: false.
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res =>
                        this.setState({
                          hasAgreementError: res,
                          validate: false
                        })
                      } //Optional.[Func].Default: none. Return the validation result.
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameInputBox="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleInputBox={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      onChange={(agreement, e) => {
                        this.setState({ agreement });
                        console.log(e);
                      }} //Required.[Func].Default: () => {}. Will return the value.
                      labelHtml={<div style={{ color: '#4a4a4a', marginTop: '2px' }}>agree?</div>} //Required.[Html].Default: none.
                      validationOption={{
                        name: 'agreement', //Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                        // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
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
                    <span className="icon icon-bookmark" style={{ ...labelContentStyle, fontSize: '20px' }} />&nbsp;
                    <span style={labelContentStyle}>movie</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Select
                      tabIndex="6" //Optional.[String or Number].Default: -1.
                      id={'movie'} //Optional.[String].Default: "". Input ID.
                      name={'movie'} //Optional.[String].Default: "". Input name.
                      value={movie} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => this.setState({ hasMovieError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
                      optionList={MOVIE_OPTIONS_LIST} //Required.[Array of Object(s)].Default: [].
                      classNameSelect="" //Optional.[String].Default: "".
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      classNameOptionListContainer="" //Optional.[String].Default: "".
                      classNameOptionListItem="" //Optional.[String].Default: "".
                      customStyleSelect={{}} //Optional.[Object].Default: {}.
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      customStyleOptionListContainer={{}} //Optional.[Object].Default: {}.
                      customStyleOptionListItem={{}} //Optional.[Object].Default: {}.
                      onChange={(movie, e) => {
                        this.setState({ movie });
                        console.log(e);
                      }} //Optional.[Func].Default: () => {}. Will return the value.
                      onBlur={() => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      // selectHtml={<div>{movieItem.name}</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
                      // selectOptionListItemHtml={MOVIE_OPTIONS_LIST.map(
                      //   (i, k) => {
                      //     return (
                      //       <div
                      //         key={k}
                      //         onClick={() => {
                      //           this.handleMovieChange(i.id);
                      //         }}
                      //       >
                      //         <span className="icon icon-person" />{i.name}
                      //       </div>
                      //     );
                      //   }
                      // )} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                      validationOption={{
                        name: 'movie', //Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true //Optional.[Bool].Default: true. To determin if it is a required field.
                        // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
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
                    <span className="icon icon-insert-drive-file" style={{ ...labelContentStyle, fontSize: '20px' }} />&nbsp;
                    <span style={labelContentStyle}>description</span>
                  </div>
                  <div style={{ flex: '6 6 0' }}>
                    <Textarea
                      tabIndex="7" //Optional.[String or Number].Default: -1.
                      id="description" //Optional.[String].Default: "".  Textarea ID.
                      name="description" //Optional.[String].Default: "". Textarea name.
                      value={description} //Optional.[String].Default: "".
                      disabled={false} //Optional.[Bool].Default: false.
                      placeholder="Place your description here ^-^" //Optional.[String].Default: "".
                      validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res =>
                        this.setState({
                          hasDescriptionError: res,
                          validate: false
                        })
                      } //Optional.[Func].Default: none. Return the validation result.
                      classNameInput="" //Optional.[String].Default: "".
                      classNameWrapper="" //Optional.[String].Default: "".
                      classNameContainer="" //Optional.[String].Default: "".
                      customStyleInput={{}} //Optional.[Object].Default: {}.
                      customStyleWrapper={{}} //Optional.[Object].Default: {}.
                      customStyleContainer={{}} //Optional.[Object].Default: {}.
                      onChange={(description, e) => {
                        this.setState({ description });
                        console.log(e);
                      }} //Required.[Func].Default: () => {}. Will return the value.
                      onBlur={e => {
                        console.log(e);
                      }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} //Optional.[Func].Default: none.
                      validationOption={{
                        name: 'Description', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                        type: 'string' //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'phone'].
                        // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // min: 2, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        // max: 10, //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // length: 2, //Optional.[Number].Default: 0. Validation of exact length of the value.
                        // reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: "". Custom regex.
                        // regMsg: 'failed in reg.test(${value})', //Optional.[String].Default: "". Custom regex error message.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // customFunc: res => { //Optional.[Func].Default: none. Custom function. Returns true or err message
                        //   if (res != 'banana') {
                        //     return 'Description cannot be other things but banana';
                        //   }
                        //   return true;
                        // }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '10px' }} />
            <div className={`${STYLES['my-button']} ${STYLES['my-button__red']} ${STYLES['save-button']}`} onClick={this.validateForm}>
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
