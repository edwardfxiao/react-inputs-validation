# react-inputs-validation
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![npm version](https://badge.fury.io/js/react-inputs-validation.svg)](https://badge.fury.io/js/react-inputs-validation) ![Cdnjs](https://img.shields.io/cdnjs/v/react-inputs-validation) ![example workflow](https://github.com/edwardfxiao/react-inputs-validation/actions/workflows/main.yml/badge.svg) [![react-inputs-validation](http://img.shields.io/npm/dm/react-inputs-validation.svg)](https://www.npmjs.com/package/react-inputs-validation) [![Package Quality](https://npm.packagequality.com/shield/react-inputs-validation.svg)](http://packagequality.com/#?package=react-inputs-validation) [![Coverage Status](https://coveralls.io/repos/github/edwardfxiao/react-inputs-validation/badge.svg?branch=master)](https://coveralls.io/github/edwardfxiao/react-inputs-validation?branch=master) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-inputs-validation.svg) [![Join the chat at https://gitter.im/react-inputs-validation/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-inputs-validation/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/edwardfxiao/react-inputs-validation/master/LICENSE) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE) [![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

A react component for form inputs validation. Online demo examples.
# <img src="https://raw.githubusercontent.com/edwardfxiao/react-inputs-validation/master/react-inputs-validation.gif" />

- [How to use](#how-to-use)
  - [Usage](#usage)
- [Live examples](#live-examples)
    - [Codesandbox examples](#codesandbox-examples)
    - [Basic usage examples](#basic-usage-examples)
- [Documentation](#documentation)
    - [1.x, 2.x, 3.x](/docs/v1-v2-v3-doc.md)
    - [4.x](/docs/v4-doc.md)
    - [About intl locales support](/docs/v4-doc.md#custom-error-message) (Under `Common questions`)
- [Browser support](#browser-support)
- [Donation](#donation)
- [Contributors](#contributors)


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
    "react": ">= 16.8.6",
    "react-dom": ">= 16.8.6"
  }
```

#### By CDN (starting from v4.4.1)
```html
<head>
 ...
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-inputs-validation/4.9.1/react-inputs-validation.min.css"/>
</head>
<body>
 <div id="root"></div>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react-inputs-validation/4.9.1/react-inputs-validation.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
 <script type="text/babel">
    const App = React.memo(() => {
      const [value, setValue] = React.useState('');
      return (<Textbox value={value} onBlur={()=>{}} .../>)
    });
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
* <a href="https://codesandbox.io/s/jvw9nvyzv">Example of AREA CODE select </a>(with [```react-custom-flag-select```](https://github.com/edwardfxiao/react-custom-flag-select))
* <a href="https://codesandbox.io/s/transform-label-example-w61dp">Example of label animation </a>

## <a name="basic-usage-examples"></a>Basic Usage Examples
<a href="https://edwardfxiao.github.io/react-inputs-validation/">Online demo example</a>

<a href="https://github.com/edwardfxiao/react-inputs-validation/blob/gh-pages/example/index.js">Demo source code</a>

# <a name="documentation"></a>Documentation

### <a name="1.x-2.x-3.x-documentation"></a>[1.x, 2.x, 3.x](/docs/v1-v2-v3-doc.md)

## <a name="4.x-documentation"></a>[4.x](/docs/v4-doc.md)

#### <a name="about-intl-locales-support">[About intl locales support](/docs/v4-doc.md#custom-error-message) (Under `Common questions`)

# <a name="browser-support"></a>Browser support
Tested on IE9+ and Chrome and Safari(10.0.3)

# <a name="donation"></a>Donation
<a href="https://www.paypal.me/XIAOMENGXIAO/0.99" target="_blank" alt="PayPal Donate">Thanks for donating me a donut!&nbsp;&nbsp;⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄</a>

<a name="contributors"></a>
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/edwardfxiao"><img src="https://avatars3.githubusercontent.com/u/11728228?v=4" width="100px;" alt=""/><br /><sub><b>Edward Xiao</a><br /><a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=edwardfxiao" title="Code">💻</a> <a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=edwardfxiao" title="Documentation">📖</a> <a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=edwardfxiao" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=edwardfxiao" title="Tests">⚠️</a> <a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=edwardfxiao" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://www.dcorp.it"><img src="https://avatars1.githubusercontent.com/u/31480614?v=4" width="100px;" alt=""/><br /><sub><b>Frank Bonnet</b></sub></a><br /><a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=DecentralizedIT" title="Code">💻</a></td>
    <td align="center"><a href="http://rokasanisas.com"><img src="https://avatars3.githubusercontent.com/u/33621394?v=4" width="100px;" alt=""/><br /><sub><b>Rokas Anisas</b></sub></a><br /><a href="https://github.com/edwardfxiao/react-inputs-validation/commits?author=RokasAniss" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
