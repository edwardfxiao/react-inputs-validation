# react-inputs-validation
[![npm version](https://badge.fury.io/js/react-inputs-validation.svg)](https://badge.fury.io/js/react-inputs-validation) [![Build Status](https://travis-ci.org/edwardfhsiao/react-inputs-validation.svg?branch=master)](https://travis-ci.org/edwardfhsiao/react-inputs-validation) [![react-inputs-validation](http://img.shields.io/npm/dm/react-inputs-validation.svg)](https://www.npmjs.com/package/react-inputs-validation) [![Package Quality](https://npm.packagequality.com/shield/react-inputs-validation.svg)](http://packagequality.com/#?package=react-inputs-validation) [![Coverage Status](https://coveralls.io/repos/github/edwardfhsiao/react-inputs-validation/badge.svg?branch=master)](https://coveralls.io/github/edwardfhsiao/react-inputs-validation?branch=master) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-inputs-validation.svg) [![Join the chat at https://gitter.im/react-inputs-validation/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-inputs-validation/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/edwardfhsiao/react-inputs-validation/master/LICENSE)[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

A react component for form inputs validation. Online demo examples.
# <img src="https://raw.githubusercontent.com/edwardfhsiao/react-inputs-validation/master/react-inputs-validation.gif" />

- [How to use](#how-to-use)
  - [Usage](#usage)
- [Live examples](#live-examples)
    - [Codesandbox examples](#codesandbox-examples)
    - [Basic usage examples](#basic-usage-examples)
- [Documentation](#documentation)
    - [1.x, 2.x, 3.x](#1.x-2.x-3.x-documentation)
    - [4.x](#4.x-documentation)
- [Browser support](#browser-support)
- [Donation](#donation)
  
  
# <a name="how-to-use"></a>How to use

### <a name="usage"></a>Usage

#### By NPM
```sh
npm install react-inputs-validation --save
```
```js
import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
```

##### Make sure you have at least ```react@16.8.6``` installed.
```js
  "peerDependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
```

#### By CDN (starting from v4.4.1)
```html
<head>
 ...
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-inputs-validation/4.4.1/react-inputs-validation.min.css"/>
</head>
<body>
 <div id="root"></div>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react-inputs-validation/4.4.1/react-inputs-validation.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
 <script type="text/babel">
  class App extends React.Component {
    ...
    render() {
      return <Textbox value={value} onBlur={()=>{}} .../>;
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'));
 </script>
</body>


```

# <a name="live-examples"></a>Live examples

## <a name="codesandbox-examples"></a>Codesandbox Examples
* <a href="https://codesandbox.io/s/v3wq0llmo3">Example of online demo form playground</a>
* <a href="https://codesandbox.io/s/pjom8r78x7">Example of custom control</a>(when ```check: false```)
* <a href="https://codesandbox.io/s/1r77ozkrk7">Example of custom function</a>(when providing ```customFunc```)
* <a href="https://codesandbox.io/s/custom-function-further-control-when-providing-customfunc-yjwch">Example of custom function further control</a>(when providing ```customFunc```)
* <a href="https://codesandbox.io/s/q9vqmk4j84">Example of custom locales</a>(when providing ```window.REACT_INPUTS_VALIDATION['customErrorMessage']```)
* <a href="https://codesandbox.io/s/13qo2rqxjj">Example of phone and email validation</a>(handled with ```customFunc```)
* <a href="https://codesandbox.io/s/async-checking-via-customfunc-emqgw">Example of async checking username existence </a>(Async checking for ```<Textbox>``` and ```<Textarea>``` only. Handled with ```customFunc```)
* <a href="https://codesandbox.io/s/asyncmsgobj-blmce">Example of asyncMsgObj </a>(when providing ```asyncMsgObj```)
* <a href="https://codesandbox.io/s/jvw9nvyzv">Example of AREA CODE select </a>(with [```react-custom-flag-select```](https://github.com/edwardfhsiao/react-custom-flag-select))

## <a name="basic-usage-examples"></a>Basic Usage Examples
<a href="https://edwardfhsiao.github.io/react-inputs-validation/">Online demo example</a>

<a href="https://github.com/edwardfhsiao/react-inputs-validation/blob/gh-pages/example/index.js">Demo source code</a>

# <a name="documentation"></a>Documentation

### <a name="1.x-2.x-3.x-documentation"></a>[1.x, 2.x, 3.x](https://github.com/edwardfhsiao/react-inputs-validation/blob/master/docs/v1-v2-v3-doc.md)

## <a name="4.x-documentation"></a>[4.x](https://github.com/edwardfhsiao/react-inputs-validation/blob/master/docs/v4-doc.md)

# <a name="browser-support"></a>Browser support
Tested on IE9+ and Chrome and Safari(10.0.3)

# <a name="donation"></a>Donation
<a href="https://www.paypal.me/XIAOMENGXIAO/0.99" target="_blank" alt="PayPal Donate">Thanks for donating me a donut!&nbsp;&nbsp;⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄</a>
