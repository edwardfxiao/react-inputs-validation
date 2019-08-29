# react-inputs-validation
[![npm version](https://badge.fury.io/js/react-inputs-validation.svg)](https://badge.fury.io/js/react-inputs-validation) [![Build Status](https://travis-ci.org/edwardfhsiao/react-inputs-validation.svg?branch=master)](https://travis-ci.org/edwardfhsiao/react-inputs-validation) [![react-inputs-validation](http://img.shields.io/npm/dm/react-inputs-validation.svg)](https://www.npmjs.com/package/react-inputs-validation) [![Package Quality](https://npm.packagequality.com/shield/react-inputs-validation.svg)](http://packagequality.com/#?package=react-inputs-validation) [![Coverage Status](https://coveralls.io/repos/github/edwardfhsiao/react-inputs-validation/badge.svg?branch=master)](https://coveralls.io/github/edwardfhsiao/react-inputs-validation?branch=master) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-inputs-validation.svg) [![Join the chat at https://gitter.im/react-inputs-validation/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-inputs-validation/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/edwardfhsiao/react-inputs-validation/master/LICENSE)[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

React form input validation components. Online demo examples.
# <img src="https://raw.githubusercontent.com/edwardfhsiao/react-inputs-validation/master/react-inputs-validation.gif" />
# Online Demo
<a href="https://edwardfhsiao.github.io/react-inputs-validation/">Online demo example</a>

<a href="https://github.com/edwardfhsiao/react-inputs-validation/blob/gh-pages/example/index.js">Demo source code</a>

# Codesandbox Examples
* <a href="https://codesandbox.io/s/v3wq0llmo3">Example of online demo form playground</a>
* <a href="https://codesandbox.io/s/pjom8r78x7">Example of custom control</a>(when ```check: false```)
* <a href="https://codesandbox.io/s/1r77ozkrk7">Example of custom function</a>(when providing ```customFunc```)
* <a href="https://codesandbox.io/s/custom-function-further-control-when-providing-customfunc-yjwch">Example of custom function further control</a>(when providing ```customFunc```)
* <a href="https://codesandbox.io/s/q9vqmk4j84">Example of custom locales</a>(when providing ```window.REACT_INPUTS_VALIDATION['customErrorMessage']```)
* <a href="https://codesandbox.io/s/13qo2rqxjj">Example of phone and email validation</a>(handled with ```customFunc```)
* <a href="https://codesandbox.io/s/async-checking-via-customfunc-emqgw">Example of async checking username existence </a>(Async checking for ```<Textbox>``` and ```<Textarea>``` only. Handled with ```customFunc```)
* <a href="https://codesandbox.io/s/asyncmsgobj-blmce">Example of asyncMsgObj </a>(when providing ```asyncMsgObj```)
* <a href="https://codesandbox.io/s/jvw9nvyzv">Example of AREA CODE select </a>(with [```react-custom-flag-select```](https://github.com/edwardfhsiao/react-custom-flag-select))

###  :tada: For version >= 3.0.0, please update react and react-dom to at least ```16.8.6```, since it is rewrited with hooks.
```js
  "peerDependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
```

### For version >= 1.1.4, please import css manually.
```js
import { Textbox, Textarea, Radiobox, Checkbox, Select } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
```

# Docs Link
[Textbox](#Textbox)

[Radiobox](#Radiobox)

[Checkbox](#Checkbox)

[Select](#Select)

[Textarea](#Textarea)

[Custom Error Message Guid(can be multiple locales)](#custom-error-message)

[Example of phone and email validation](#phone-email-validation-example)(Since the phone and email validation are no longer  handled internally after v1.4.0.)

# Installation
```sh
npm install react-inputs-validation --save
```
# Donation
<a href="https://www.paypal.me/XIAOMENGXIAO/0.99" target="_blank" alt="PayPal Donate">Thanks for donating me a donut!&nbsp;&nbsp;⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄</a>

# Browser support
Tested on IE9+ and Chrome and Safari(10.0.3)

# Docs

### <a name="Textbox"></a>Textbox

|Props                             |       |Type    |Description                                  |Default     |
|---                               |---    |---     |---                                          |  ---       |
|tabIndex                          |  Opt  |  Str &#124; Num |                                    |  none      |
|id                                |  Opt  |  Str   |                                             |  none      |
|name                              |  Opt  |  Str   |                                             |  ""        |
|type                              |  Opt  |  Str   |                                             |  "text"    |
|value                             |  Opt  |  Str   |                                             |  ""        |
|disabled                          |  Opt  |  Bool  |                                             |  false     |
|autoComplete                      |  Opt  |  Str   |  "on" or "off"                                           |  "on"      |
|maxLength                         |  Opt  |  Str &#124; Num |                                    |  524288    |
|placeholder                       |  Opt  |  Str   |                                             |  ""        |
|**validate**                      |**Opt**|**Bool**|**If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.**|**false**   |
|**validationCallback**           |**Opt**|**Func**|**Return the validation result.**|**none**    |
|classNameInput                    |  Opt  |  Str   |                                             |  ""        |
|classNameWrapper                  |  Opt  |  Str   |                                             |  ""        |
|classNameContainer                |  Opt  |  Str   |                                             |  ""        |
|customStyleInput                  |  Opt  |  Obj   |                                             |  {}        |
|customStyleWrapper                |  Opt  |  Obj   |                                             |  {}        |
|customStyleContainer              |  Opt  |  Obj   |                                             |  {}        |
|**onChange**                      |**Req**|**Func**|**(val, e) => {}. Will return the value.**|**(val, e) => {}**|
|**onBlur**                        |**Opt**|**Func**|**In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.**|**none**    |
|onFocus                           |  Opt  |  Func  |                                             |  none      |
|onClick                           |  Opt  |  Func  |                                             |  none      |
|onKeyUp                           |  Opt  |  Func  | By providing ```onKeyUp```, the component will perform the checking every time when user types. |  none      |
|**validationOption**              |**Opt**|**obj** |**validationOption object, see below**|**{}**      |
|**validationOption.name**         |**Opt**|**Str** |**To display in the Error message. i.e Please enter your ${name}.**|**""**      |
|**validationOption.check**        |**Opt**|**Bool**|**To determin if you need to validate.**|**true**    |
|**validationOption.required**     |**Opt**|**Bool**|**To determin if it is a required field.**|**true**    |
|**validationOption.type**         |**Opt**|**Str** |**Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'~~, 'phone'~~].**|**"string"**|
|**validationOption.numberType**         |**Opt**|**Str** |**Validation number type, options are ['decimal', 'int']. Handy when the validation type is number.**|**"decimal"**|
|**validationOption.showMsg**      |**Opt**|**Bool**|**To determin display the error message or not.**|**true**    |
|**validationOption.min**          |**Opt**|**Num**|**Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.**|**0**       |
|**validationOption.max**          |**Opt**|**Num**|**Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.**|**0**       |
|**validationOption.length**       |**Opt**|**Num**|**Validation of exact length of the value.**|**0**       |
|**validationOption.compare**      |**Opt**|**Str** |**Compare this value to 3 to see if they are equal.**|**""**      |
|**<a name="customFunc"></a>validationOption.customFunc**       |**Opt**|**Func**|**Custom function. Returns true or err message or { error: true, message: 'message', showOnSuccess: true }.**|  **none**      |
|**validationOption.reg**          |**Opt**|**Bool**|**Custom regex.**|**""**      |
|**validationOption.regMsg**       |**Opt**|**Str** |**Custom regex error message.**|**""**      |
|**validationOption.locale**       |**Opt**|**Str** |**For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at '[window.REACT_INPUTS_VALIDATION](#custom-error-message)' section, which provides the extensibility for your own locale.**|**"en-US"** |
|~~**validationOption.phoneCountry**~~|~~**Opt**~~|~~**Str**~~|~~**Useful when the validationOption['type'] is phone. Check if the phone number matchs en-US phone number format.**~~ <br><br>**No longer support after v1.4.0. For phone or email address validation please reffer to '[Example of phone and email validation](#phone-email-validation-example)'**|~~**"en-US"**~~|
|**validationOption.msgOnError**   |**Opt**|**Str** |**Show your custom error message no matter what(except the message from customFunc) when it has error if it is provied.**|**""**      |
|**validationOption.msgOnSuccess** |**Opt**|**Str** |**Show your custom success message no matter what when it has error if it is provied.**|**""**      |
|**asyncMsgObj.error** |**Opt**|**Bool** |**(Server response) Backend validation result.**|**false**      |
|**asyncMsgObj.message** |**Opt**|**Str** |**(Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST' (For Textbox or Textarea, better reffer to <a href="https://codesandbox.io/s/async-checking-via-customfunc-emqgw">Example of async checking username existence </a>**|**""**      |
|**asyncMsgObj.showOnError** |**Opt**|**Bool** |**(Server response) Show AJAX error message or not.**|**true**      |
|**asyncMsgObj.showOnSuccess** |**Opt**|**Bool** |**(Server response) Show AJAX success message or not.**|**false**      |


```js
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

<Textbox
  tabIndex="1" //Optional.[String or Number].Default: none.
  id={'Name'} //Optional.[String].Default: "".  Input ID.
  name="Name" //Optional.[String].Default: "". Input name.
  type="text" //Optional.[String].Default: "text". Input type [text, password, number].
  value={name} //Optional.[String].Default: "".
  disabled={false} //Optional.[Bool].Default: false.
  maxLength={maxLength} //Optional.[String].Default: "".
  placeholder="Place your name here ^-^" //Optional.[String].Default: "".
  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
  validationCallback={res =>
    this.setState({ hasNameError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
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
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onKeyUp={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  validationOption={{
    name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
    // type: 'string', //Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
    // numberType: 'decimal', // Optional.[String].Default: "decimal". Validation number type, options are ['decimal', 'int']. Handy when the validation type is number.
    // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
    // min: 2, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
    // max: 10, //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
    // length: 2, //Optional.[Number].Default: 0. Validation of exact length of the value.
    // compare: '3', //Optional.[String].Default: "" Compare this value to 3 to see if they are equal.
    // reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: "" Custom regex.
    // regMsg: 'failed in reg.test(${value})', //Optional.[String].Default: "" Custom regex error message.
    // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at 'window.REACT_INPUTS_VALIDATION' section, which provides the extensibility for your own locale.
    // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "" Show your custom error message no matter what(except the message from customFunc) when it has error if it is provied.
    // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border.", //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
    // customFunc: res => { //Optional.[Func].Default: none. Custom function. Returns true or err message or { error: true, message: 'message', showOnSuccess: true }
    //   if (res != 'milk') {
    //     return 'Description cannot be other things but milk';
    //   }
    //   return true;
    // }
  }}
  // asyncMsgObj={{
  //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
  //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
  //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
  //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
  // }}
/>
```




### <a name="Radiobox"></a>Radiobox

|Props                             |       |Type    |Description                                  |Default     |
|---                               |---    |---     |---                                          |  ---       |
|tabIndex                          |  Opt  |  Str &#124; Num |                                    |  none      |
|**id**                            |**Req**|**Str**|**IMPORTANT if you have multiple Radiobox on the page, id is used to distinguish them for the label 'for' use**|**none**|
|name                              |  Opt  |  Str   |                                             |  ""        |
|value                             |  Opt  |  Str   |                                             |  ""        |
|disabled                          |  Opt  |  Bool  |                                             |  false     |
|**validate**                      |**Opt**|**Bool**|**If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.**|**false**   |
|**validationCallback**           |**Opt**|**Func**|**Return the validation result.**|**none**    |
|**optionList**                    |**Req**|**Array**|**[{id: 'teacher', name: 'teacher'}]**           |**[]**
|classNameInput                    |  Opt  |  Str   |                                             |  ""        |
|classNameWrapper                  |  Opt  |  Str   |                                             |  ""        |
|classNameContainer                |  Opt  |  Str   |                                             |  ""        |
|classNameOptionListItem           |  Opt  |  Str   |                                             |  ""        |
|customStyleInput                  |  Opt  |  Obj   |                                             |  {}        |
|customStyleWrapper                |  Opt  |  Obj   |                                             |  {}        |
|customStyleContainer              |  Opt  |  Obj   |                                             |  {}        |
|customStyleOptionListItem         |  Opt  |  Obj   |                                             |  {}        |
|**onBlur**                       |**Opt**|**Func**                  |**In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.**                                                                                                            |**none**     |
|**onChange**                      |**Req**|**Func**                  |**(val, e) => {}. Will return the value.**|**(val, e)=>{}**   |
|onFocus                           |Opt  |Func                      |                                                                                                            |none     |
|onClick                           |Opt  |Func                      |                                                                                                            |none     |
|**validationOption**              |**Opt**|**obj** |**validationOption object, see below**|**{}**      |
|**validationOption.name**         |**Opt**|**Str** |**To display in the Error message. i.e Please enter your ${name}.**|**""**      |
|**validationOption.check**        |**Opt**|**Bool**|**To determin if you need to validate.**|**true**    |
|**validationOption.required**     |**Opt**|**Bool**|**To determin if it is a required field.**|**true**    |
|**validationOption.showMsg**      |**Opt**|**Bool**|**To determin display the error message or not.**|**true**    |
|**validationOption.locale**       |**Opt**|**Str** |**For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at '[window.REACT_INPUTS_VALIDATION](#custom-error-message)' section, which provides the extensibility for your own locale.**|**"en-US"** |
|**validationOption.msgOnError**   |**Opt**|**Str** |**Show your custom error message no matter what when it has error if it is provied.**|**""**      |
|**validationOption.msgOnSuccess** |**Opt**|**Str** |**Show your custom success message no matter what when it has error if it is provied.**|**""**      |
|**asyncMsgObj.error** |**Opt**|**Bool** |**(Server response) Backend validation result.**|**false**      |
|**asyncMsgObj.message** |**Opt**|**Str** |**(Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'**|**""**      |
|**asyncMsgObj.showOnError** |**Opt**|**Bool** |**(Server response) Show AJAX error message or not.**|**true**      |
|**asyncMsgObj.showOnSuccess** |**Opt**|**Bool** |**(Server response) Show AJAX success message or not.**|**false**      |

```js
import { Radiobox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

<Radiobox
  tabIndex={2} //Optional.[String or Number].Default: none.
  id="job" //Optional.[String].Default: "".  Input ID.
  name="job" //Optional.[String].Default: "". Input name.
  disabled={false} //Optional.[Bool].Default: false.
  value={job} //Optional.[String].Default: "".
  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
  validationCallback={res =>
    this.setState({ hasJobError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
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
  onChange={(job, e) =>{
    this.setState({ job });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  validationOption={{
    name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
    // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
    // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at 'window.REACT_INPUTS_VALIDATION' section, which provides the extensibility for your own locale.
    // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
    // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
  }}
  // asyncMsgObj={{
  //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
  //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
  //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
  //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
  // }}
/>
```




### <a name="Checkbox"></a>Checkbox


|Props                             |       |Type    |Description                                  |Default     |
|---                               |---    |---     |---                                          |  ---       |
|tabIndex                          |  Opt  |  Str &#124; Num |                                    |  none      |
|id                                |  Opt  |  Str   |                                             |  none      |
|name                              |  Opt  |  Str   |                                             |  ""        |
|value                             |  Opt  |  Str   |                                             |  ""        |
|**checked**                       |**Req**|**Bool**|**Recommend using the value returned from ```onChange``` callback, which is ```isChecked```.**                                            |**false**   |
|disabled                          |  Opt  |  Bool  |                                             |  false     |
|**validate**                      |**Opt**|**Bool**|**If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.**|**false**   |
|**validationCallback**           |**Opt**|**Func**|**Return the validation result.**|**none**    |
|classNameWrapper                  |  Opt  |  Str   |                                             |  ""        |
|classNameInputBox                 |  Opt  |  Str   |                                             |  ""        |
|classNameContainer                |  Opt  |  Str   |                                             |  ""        |
|customStyleWrapper                |  Opt  |  Obj   |                                             |  {}        |
|customStyleInputBox               |  Opt  |  Obj   |                                             |  {}        |
|customStyleContainer              |  Opt  |  Obj   |                                             |  {}        |
|**onBlur**                       |**Opt**|**Func**                  |**In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.**                                                                                                            |**none**     |
|**onChange**                      |**Req**|**Func**                  |**(isChecked, e) => {}. Will return the value.**|**(val, e)=>{}**   |
|onFocus                           |Opt  |Func                      |                                                                                                            |none     |
|onClick                           |Opt  |Func                      |                                                                                                            |none     |
|**labelHtml**                     |Req  |Html                      |                                                                                                            |none     |
|**validationOption**              |**Opt**|**obj** |**validationOption object, see below**|**{}**      |
|**validationOption.name**         |**Opt**|**Str** |**To display in the Error message. i.e Please enter your ${name}.**|**""**      |
|**validationOption.check**        |**Opt**|**Bool**|**To determin if you need to validate.**|**true**    |
|**validationOption.required**     |**Opt**|**Bool**|**To determin if it is a required field.**|**true**    |
|**validationOption.showMsg**      |**Opt**|**Bool**|**To determin display the error message or not.**|**true**    |
|**validationOption.locale**       |**Opt**|**Str** |**For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at '[window.REACT_INPUTS_VALIDATION](#custom-error-message)' section, which provides the extensibility for your own locale.**|**"en-US"** |
|**validationOption.msgOnError**   |**Opt**|**Str** |**Show your custom error message no matter what when it has error if it is provied.**|**""**      |
|**validationOption.msgOnSuccess** |**Opt**|**Str** |**Show your custom success message no matter what when it has error if it is provied.**|**""**      |
|**asyncMsgObj.error** |**Opt**|**Bool** |**(Server response) Backend validation result.**|**false**      |
|**asyncMsgObj.message** |**Opt**|**Str** |**(Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'**|**""**      |
|**asyncMsgObj.showOnError** |**Opt**|**Bool** |**(Server response) Show AJAX error message or not.**|**true**      |
|**asyncMsgObj.showOnSuccess** |**Opt**|**Bool** |**(Server response) Show AJAX success message or not.**|**false**      |

```js
import { Checkbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

<Checkbox
  tabIndex="5" //Optional.[String or Number].Default: none.
  id={'agreement'} //Optional.[String].Default: "".  Input ID.
  name={'agreement'} //Optional.[String].Default: "". Input name
  value={agreement} //Required.[String].Default: "".
  checked={isAgreementChecked} //Required.[Bool].Default: false.
  disabled={false} //Optional.[Bool].Default: false.
  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
  validationCallback={res =>
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
  // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  onChange={(isAgreementChecked, e) => {
    this.setState({ isAgreementChecked });
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
    // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
    // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look of 'window.REACT_INPUTS_VALIDATION' section, which provides the extensibility for your own locale.
    // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
    // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
  }}
  // asyncMsgObj={{
  //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
  //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
  //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
  //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
  // }}
/>
```




### <a name="Select"></a>Select

|Props                             |       |Type    |Description                                  |Default     |
|---                               |---    |---     |---                                          |  ---       |
|tabIndex                          |  Opt  |  Str &#124; Num |                                    |  none      |
|id                                |  Opt  |  Str   |                                             |  none      |
|name                              |  Opt  |  Str   |                                             |  ""        |
|type                              |  Opt  |  Str   |                                             |  "text"    |
|value                             |  Opt  |  Str   |                                             |  ""        |
|disabled                          |  Opt  |  Bool  |                                             |  false     |
|**validate**                      |**Opt**|**Bool**|                                             |**false**   |
|**validationCallback**           |**Opt**|**Func**|                                             |**none**    |
|**optionList**                    |**Req**|**Array**|**[{id: '1', name: 'Twin Peaks']**              |**[]**          |
|classNameSelect                   |  Opt  |  Str   |                                             |  ""        |
|classNameWrapper                  |  Opt  |  Str   |                                             |  ""        |
|classNameContainer                |  Opt  |  Str   |                                             |  ""        |
|classNameOptionListContainer      |  Opt  |  Str   |                                             |  ""        |
|classNameOptionListItem           |  Opt  |  Str   |                                             |  ""        |
|customStyleSelect                 |  Opt  |  Obj   |                                             |  {}        |
|customStyleWrapper                |  Opt  |  Obj   |                                             |  {}        |
|customStyleContainer              |  Opt  |  Obj   |                                             |  {}        |
|customStyleOptionListContainer    |  Opt  |  Obj   |                                             |  {}        |
|customStyleOptionListItem         |  Opt  |  Obj   |                                             |  {}        |
|**onBlur**                       |**Opt**|**Func**                  |**In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.**                                                                                                            |**none**     |
|**onChange**                      |**Req**|**Func**|                                             |**(val, e) => {}**|
|onFocus                           |  Opt  |  Func  |                                             |  none      |
|onClick                           |  Opt  |  Func  |                                             |  none      |
|**selectHtml**                    |**Opt**|**Html**|**The custom html that will display when user choose. Use it if you think the default html is ugly.**|**none**    |
|**selectOptionListItemHtml**      |**Opt**|**Html**|**The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.**|**none**    |
|**validationOption**              |**Opt**|**obj** |                                             |**{}**      |
|**validationOption.name**         |**Opt**|**Str** |**To display in the Error message. i.e Please enter your ${name}.**|**""**      |
|**validationOption.check**        |**Opt**|**Bool**|**To determin if you need to validate.**|**true**    |
|**validationOption.required**     |**Opt**|**Bool**|**To determin if it is a required field.**|**true**    |
|**validationOption.showMsg**      |**Opt**|**Bool**|**To determin display the error message or not.**|**true**    |
|**validationOption.locale**       |**Opt**|**Str** |**For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at '[window.REACT_INPUTS_VALIDATION](#custom-error-message)' section, which provides the extensibility for your own locale.**|**"en-US"** |
|**validationOption.msgOnError**   |**Opt**|**Str** |**Show your custom error message no matter what when it has error if it is provied.**|**""**      |
|**validationOption.msgOnSuccess** |**Opt**|**Str** |**Show your custom success message no matter what when it has error if it is provied.**|**""**      |
|**asyncMsgObj.error** |**Opt**|**Bool** |**(Server response) Backend validation result.**|**false**      |
|**asyncMsgObj.message** |**Opt**|**Str** |**(Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'**|**""**      |
|**asyncMsgObj.showOnError** |**Opt**|**Bool** |**(Server response) Show AJAX error message or not.**|**true**      |
|**asyncMsgObj.showOnSuccess** |**Opt**|**Bool** |**(Server response) Show AJAX success message or not.**|**false**      |

```js
import { Select } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

<Select
  tabIndex="6" //Optional.[String or Number].Default: none.
  id={'movie'} //Optional.[String].Default: "". Input ID.
  name={'movie'} //Optional.[String].Default: "". Input name.
  value={movie} //Optional.[String].Default: "".
  disabled={false} //Optional.[Bool].Default: false.
  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
  validationCallback={res =>
    this.setState({ hasMovieError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
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
  // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
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
    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
    // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
    // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at 'window.REACT_INPUTS_VALIDATION' section, which provides the extensibility for your own locale.
    // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
    // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
  }}
  // asyncMsgObj={{
  //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
  //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
  //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
  //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
  // }}
/>
```




### <a name="Textarea"></a>Textarea

|Props                             |       |Type    |Description                                  |Default     |
|---                               |---    |---     |---                                          |  ---       |
|tabIndex                          |  Opt  |  Str &#124; Num |                                    |  none      |
|id                                |  Opt  |  Str   |                                             |  none      |
|name                              |  Opt  |  Str   |                                             |  ""        |
|type                              |  Opt  |  Str   |                                             |  "text"    |
|value                             |  Opt  |  Str   |                                             |  ""        |
|disabled                          |  Opt  |  Bool  |                                             |  false     |
|maxLength                         |  Opt  |  Str &#124; Num |                                    |  524288    |
|rows                              |  Opt  |  Str &#124; Num |                                    |  2         |
|cols                              |  Opt  |  Str &#124; Num |                                    |  2         |
|placeholder                       |  Opt  |  Str   |                                             |  ""        |
|**validate**                      |**Opt**|**Bool**|**If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.**|**false**   |
|**validationCallback**           |**Opt**|**Func**|**Return the validation result.**|**none**    |
|classNameInput                    |  Opt  |  Str   |                                             |  ""        |
|classNameWrapper                  |  Opt  |  Str   |                                             |  ""        |
|classNameContainer                |  Opt  |  Str   |                                             |  ""        |
|customStyleInput                  |  Opt  |  Obj   |                                             |  {}        |
|customStyleWrapper                |  Opt  |  Obj   |                                             |  {}        |
|customStyleContainer              |  Opt  |  Obj   |                                             |  {}        |
|**onChange**                      |**Req**|**Func**|**(val, e) => {}. Will return the value.**|**(val, e) => {}**|
|**onBlur**                        |**Opt**|**Func**|**In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.**|**none**    |
|onFocus                           |  Opt  |  Func  |                                             |  none      |
|onClick                           |  Opt  |  Func  |                                             |  none      |
|onKeyUp                           |  Opt  |  Func  | By providing ```onKeyUp```, the component will perform the checking every time when user types. |  none      |
|**validationOption**              |**Opt**|**obj** |**validationOption object, see below**|**{}**      |
|**validationOption.name**         |**Opt**|**Str** |**To display in the Error message. i.e Please enter your ${name}.**|**""**      |
|**validationOption.check**        |**Opt**|**Bool**|**To determin if you need to validate.**|**true**    |
|**validationOption.required**     |**Opt**|**Bool**|**To determin if it is a required field.**|**true**    |
|**validationOption.type**         |**Opt**|**Str** |**Validation type, options are ['string'].**|**"string"**|
|**validationOption.showMsg**      |**Opt**|**Bool**|**To determin display the error message or not.**|**true**    |
|**validationOption.min**          |**Opt**|**Num**|**Validation of min length.**|**0**       |
|**validationOption.max**          |**Opt**|**Num**|**Validation of max length.**|**0**       |
|**validationOption.length**       |**Opt**|**Num**|**Validation of exact length of the value.**|**0**       |
|**validationOption.customFunc**       |**Opt**|**Func**|**Custom function. Returns true or err message or { error: true, message: 'message', showOnSuccess: true }.**|  **none**      |
|**validationOption.reg**          |**Opt**|**Bool**|**Custom regex.**|**""**      |
|**validationOption.regMsg**       |**Opt**|**Str** |**Custom regex error message.**|**""**      |
|**validationOption.locale**       |**Opt**|**Str** |**For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at '[window.REACT_INPUTS_VALIDATION](#custom-error-message)' section, which provides the extensibility for your own locale.**|**"en-US"** |
|**validationOption.msgOnError**   |**Opt**|**Str** |**Show your custom error message no matter what(except the message from customFunc) when it has error if it is provied.**|**""**      |
|**validationOption.msgOnSuccess** |**Opt**|**Str** |**Show your custom success message no matter what when it has error if it is provied.**|**""**      |
|**asyncMsgObj.error** |**Opt**|**Bool** |**(Server response) Backend validation result.**|**false**      |
|**asyncMsgObj.message** |**Opt**|**Str** |**(Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST' (For Textbox or Textarea, better reffer to <a href="https://codesandbox.io/s/async-checking-via-customfunc-emqgw">Example of async checking username existence </a>**|**""**      |
|**asyncMsgObj.showOnError** |**Opt**|**Bool** |**(Server response) Show AJAX error message or not.**|**true**      |
|**asyncMsgObj.showOnSuccess** |**Opt**|**Bool** |**(Server response) Show AJAX success message or not.**|**false**      |

```js
import { Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

<Textarea
  tabIndex="7" //Optional.[String or Number].Default: none.
  id="description" //Optional.[String].Default: "".  Textarea ID.
  name="description" //Optional.[String].Default: "". Textarea name.
  value={description} //Optional.[String].Default: "".
  disabled={false} //Optional.[Bool].Default: false.
  maxLength={maxLength} //Optional.[String].Default: "".
  placeholder="Place your description here ^-^" //Optional.[String].Default: "".
  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
  validationCallback={res =>
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
  onChange={(description, e) => {
    this.setState({ description });
    console.log(e);
  }} //Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  // onKeyUp={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  validationOption={{
    name: 'Description', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
    type: 'string', //Optional.[String].Default: "string". Validation type, options are ['string'].
    // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
    // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at 'window.REACT_INPUTS_VALIDATION' section, which provides the extensibility for your own locale.
    // min: 2, //Optional.[Number].Default: 0. Validation of min length.
    // max: 10, //Optional.[Number].Default: 0. Validation of max length.
    // length: 2, //Optional.[Number].Default: 0. Validation of exact length of the value.
    // reg: /^\d{18}|\d{15}$/, //Optional.[Bool].Default: "". Custom regex.
    // regMsg: 'failed in reg.test(${value})', //Optional.[String].Default: "". Custom regex error message.
    // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what(except the message from customFunc) when it has error if it is provied.
    // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border.", //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
    // customFunc: res => { //Optional.[Func].Default: none. Custom function. Returns true or err message or { error: true, message: 'message', showOnSuccess: true }
    //   if (res != 'banana') {
    //     return 'Description cannot be other things but banana';
    //   }
    //   return true;
    // }
  }}
  // asyncMsgObj={{
  //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
  //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
  //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
  //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
  // }}
/>
```

### <a name="phone-email-validation-example"></a>Example of phone and email validation
<a href="https://codesandbox.io/s/13qo2rqxjj">codesandbox example</a>
```js
 import validator from 'validator';
 import { Textbox } from 'react-inputs-validation';
 import 'react-inputs-validation/lib/react-inputs-validation.min.css';
 // Phone
  <Textbox
   ...
   validationOption={{
     name: 'Phone', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
     check: true, //Optional.[Bool].Default: true. To determin if you need to validate.,
     required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
     customFunc: phone => {
       if (validator.isMobilePhone(phone, 'en-US')) {
         return true;
       } else {
         return 'is not a valid phone number';
       }
     }
   }}
 />

 // Email
 <Textbox
   ...
   validationOption={{
     name: 'Email', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
     check: true, //Optional.[Bool].Default: true. To determin if you need to validate.,
     required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
     customFunc: email => {
       const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if (reg.test(String(email).toLowerCase())) {
         return true;
       } else {
         return 'is not a valid email address';
       }
     }
   }}
 />
```

### <a name="custom-error-message"></a>Custom Error Message (can be multiple locales)
By providing ```window.REACT_INPUTS_VALIDATION['customErrorMessage']```, you can overwrite the error message.

**IMPORTANT NOTE: YOU WILL NEED TO PLACE window.REACT_INPUTS_VALIDATION BEFORE YOUR JS SCRIPT**

<a href="https://codesandbox.io/s/q9vqmk4j84">codesandbox example</a>(located in index.html)

example(fully customized):

```html
<script type="text/javascript">
  //es6
  window.REACT_INPUTS_VALIDATION = {
    customErrorMessage: {
      "my-own-locale": {...},//structure must follow below
      "en-US": {
        textbox: {
          empty: name => `${name} cannot be empty(custom message)`,
          invalid: name => `${name} invalid format(custom message)`,
          invalidFormat: name => `${name} is not a number(custom message)`,
          inBetween: name => min => max => `${name} must be ${min}-${max}(custom message)`,
          lessThan: name => min => `${name} cannot less than ${min}(custom message)`,
          greaterThan: name => max => `${name} cannot greater than ${max}(custom message)`,
          lengthEqual: name => length => `${name} length must be ${length}(custom message)`,
          twoInputsNotEqual: () => `two inputs are not equal(custom message)`
        },
        radiobox: {
          empty: name => `Please choose one ${name}(custom message)`
        },
        checkbox: {
          unchecked: name => `${name} must be checked(custom message)`
        },
        select: {
          empty: name => `Please select a ${name}(custom message)`
        },
        textarea: {
          empty: name => `${name} cannot be empty(custom message)`,
          invalid: name => `${name} invalid format(custom message)`,
          invalidFormat: name => `${name} is not a number(custom message)`,
          inBetween: name => min => max => `${name} must be ${min}-${max}(custom message)`,
          lessThan: name => min => `${name} cannot less than ${min}(custom message)`,
          greaterThan: name => max => `${name} cannot greater than ${max}(custom message)`,
          lengthEqual: name => length => `${name} length must be ${length}(custom message)`,
          twoInputsNotEqual: () => `two inputs are not equal(custom message)`
        }
      }
    }
  };
</script>
<script type="text/javascript" src="/js/index.js"></script></body>
```

```html
<script type="text/javascript">
  //es5
  window.REACT_INPUTS_VALIDATION = {
    customErrorMessage: {
      "my-own-locale": {...},//structure must follow below
      "en-US": {
        textbox: {
          empty: function empty(name) {
            return name + " cannot be empty(custom message)";
          },
          invalid: function invalid(name) {
            return name + " invalid format(custom message)";
          },
          invalidFormat: function invalidFormat(name) {
            return name + " is not a number(custom message)";
          },
          inBetween: function inBetween(name) {
            return function (min) {
              return function (max) {
                return name + " must be " + min + "-" + max + "(custom message)";
              };
            };
          },
          lessThan: function lessThan(name) {
            return function (min) {
              return name + " cannot less than " + min + "(custom message)";
            };
          },
          greaterThan: function greaterThan(name) {
            return function (max) {
              return name + " cannot greater than " + max + "(custom message)";
            };
          },
          lengthEqual: function lengthEqual(name) {
            return function (length) {
              return name + " length must be " + length + "(custom message)";
            };
          },
          twoInputsNotEqual: function twoInputsNotEqual() {
            return "two inputs are not equal(custom message)";
          }
        },
        radiobox: {
          empty: function empty(name) {
            return "Please choose one " + name + "(custom message)";
          }
        },
        checkbox: {
          unchecked: function unchecked(name) {
            return name + " must be checked(custom message)";
          }
        },
        select: {
          empty: function empty(name) {
            return "Please select a " + name + "(custom message)";
          }
        },
        textarea: {
          empty: function empty(name) {
            return name + " cannot be empty(custom message)";
          },
          invalid: function invalid(name) {
            return name + " invalid format(custom message)";
          },
          invalidFormat: function invalidFormat(name) {
            return name + " is not a number(custom message)";
          },
          inBetween: function inBetween(name) {
            return function (min) {
              return function (max) {
                return name + " must be " + min + "-" + max + "(custom message)";
              };
            };
          },
          lessThan: function lessThan(name) {
            return function (min) {
              return name + " cannot less than " + min + "(custom message)";
            };
          },
          greaterThan: function greaterThan(name) {
            return function (max) {
              return name + " cannot greater than " + max + "(custom message)";
            };
          },
          lengthEqual: function lengthEqual(name) {
            return function (length) {
              return name + " length must be " + length + "(custom message)";
            };
          },
          twoInputsNotEqual: function twoInputsNotEqual() {
            return "two inputs are not equal(custom message)";
          }
        }
      }
    }
  };
</script>
<script type="text/javascript" src="/js/index.js"></script></body>
```
Then in the component...

```js
<Textbox
  tabIndex="1" //Optional.[String or Number].Default: none.
  ...
  validationOption={{
    ...
    locale: 'my-own-locale'
    ...
  }}
 />
```

**For more extensibility or customization please reffer to '[validationOption.customFunc](#customFunc)'**

