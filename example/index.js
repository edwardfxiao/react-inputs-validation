import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import prefixAll from 'inline-style-prefix-all';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import CSS from '../src/css/example.css';
import { Textbox, Textarea, Radiobox, Checkbox, Select } from '../src/js/Inputs/index.ts';

const markdownTextboxEmptyExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  attributesInput={{ // Optional.
    id: 'Name',
    name: 'Name',
    type: 'text',
    placeholder: 'Place your name here ^-^',
  }}
  value={name} // Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ name });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownTextboxRegexExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  attributesInput={{ // Optional.
    id: 'Name',
    name: 'Name',
    type: 'text',
    placeholder: 'Place your name here ^-^',
  }}
  value={nameRg} // Optional.[String].Default: "".
  placeholder="Place your name here ^-^" // Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ nameRg });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    reg: /^\d{5}$/, // Optional.[Bool].Default: "" Custom regex.
    regMsg: 'failed in reg.test(value)' // Optional.[String].Default: "" Custom regex error message.
  }}
/>
\`\`\`
`;

const markdownTextboxNumberExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';

<Textbox
  attributesInput={{ // Optional.
    id: 'Number',
    name: 'Number',
    type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
    placeholder: 'Place your number here ^-^',
  }}
  value={number} // Optional.[String].Default: "".
  onChange={(number, e) => {
    this.setState({ number });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
    min: 10, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
    max: 100 // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
    // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
  }}
/>
\`\`\`
`;

const markdownRadioboxEmptyExample = `
\`\`\`javascript
import { Radiobox } from 'react-inputs-validation';

<Radiobox
  attributesInput={{ // Optional.
    id: 'job',
    name: 'job',
  }}
  value={job} // Optional.[String].Default: "".
  optionList={[
    { id: 'engineer', name: 'engineer' },
    { id: 'teacher', name: 'teacher' },
    { id: 'student', name: 'student' }
  ]}
  customStyleContainer={{
    display: 'flex',
    justifyContent: 'flex-start'
  }} // Optional.[Object].Default: {}.
  customStyleOptionListItem={{ marginRight: '20px' }} // Optional.[Object].Default: {}.
  onChange={(job, e) =>{
    this.setState({ job });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none.
  validationOption={{
    name: 'job', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownCheckboxEmptyExample = `
\`\`\`javascript
import { Checkbox } from 'react-inputs-validation';

<Checkbox
  attributesInput={{ // Optional.
    id: 'agreement',
    name: 'agreement',
  }}
  value={agreement} // Required.[String].Default: "".
  onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  checked={isAgreementChecked} // Required.[Bool].Default: false.
  onChange={(isAgreementChecked, e) => {
    this.setState({ isAgreementChecked });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  labelHtml={
    <div style={{ color: '#4a4a4a', marginTop: '2px' }}>
      agree?
    </div>
  } // Required.[Html].Default: none.
  validationOption={{
    name: 'agreement', // Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownSelectEmptyExample = `
\`\`\`javascript
import { Select } from 'react-inputs-validation';

<Select
  attributesInput={{ // Optional.
    id: 'country',
    name: 'country',
  }}
  value={country} // Optional.[String].Default: "".
  optionList={[
    { id: '', name: 'Please Select a country' },
    { id: 'US', name: 'United States' },
    { id: 'CN', name: 'China' },
    { id: 'JP', name: 'Japan' }
  ]} // Required.[Array of Object(s)].Default: [].
  onChange={(res, e) => {
    this.setState({ country: res.id });
    console.log(e);
  }} // Optional.[Func].Default: () => {}. Will return the value.
  onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  customStyleOptionListContainer={{ maxHeight: '200px', overflow: 'auto', fontSize: '14px' }} // Optional.[Object].Default: {}.
  validationOption={{
    name: 'country', // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownTextareaEmptyExample = `
\`\`\`javascript
import { Textarea } from 'react-inputs-validation';

<Textarea
  attributesInput={{ // Optional.
    id: 'description',
    name: 'description',
    type: 'text',
    placeholder: 'Place your description here ^-^',
  }}
  value={description} // Optional.[String].Default: "".
  onChange={(description, e) => {
    this.setState({ description });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Description', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
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
  language: PropTypes.string,
};

// import { Textbox, Radiobox, Checkbox, Select } from '../index.js';
const JOB_OPTIONS_LIST = [
  { id: 'engineer', name: 'engineer' },
  { id: 'teacher', name: 'teacher' },
  { id: 'student', name: 'student' },
];
const COUNTRY_OPTIONS_LIST = [
  { id: '', name: 'Please Select a country', icon: '' },
  { name: 'Afghanistan', id: 'AF', icon: '' },
  { name: 'Åland Islands', id: 'AX', icon: '' },
  { name: 'Albania', id: 'AL', icon: '' },
  { name: 'Algeria', id: 'DZ', icon: '' },
  { name: 'American Samoa', id: 'AS', icon: '' },
  { name: 'AndorrA', id: 'AD', icon: '' },
  { name: 'Angola', id: 'AO', icon: '' },
  { name: 'Anguilla', id: 'AI', icon: '' },
  { name: 'Antarctica', id: 'AQ', icon: '' },
  { name: 'Antigua and Barbuda', id: 'AG', icon: '' },
  { name: 'Argentina', id: 'AR', icon: '' },
  { name: 'Armenia', id: 'AM', icon: '' },
  { name: 'Aruba', id: 'AW', icon: '' },
  { name: 'Australia', id: 'AU', icon: '' },
  { name: 'Austria', id: 'AT', icon: '' },
  { name: 'Azerbaijan', id: 'AZ', icon: '' },
  { name: 'Bahamas', id: 'BS', icon: '' },
  { name: 'Bahrain', id: 'BH', icon: '' },
  { name: 'Bangladesh', id: 'BD', icon: '' },
  { name: 'Barbados', id: 'BB', icon: '' },
  { name: 'Belarus', id: 'BY', icon: '' },
  { name: 'Belgium', id: 'BE', icon: '' },
  { name: 'Belize', id: 'BZ', icon: '' },
  { name: 'Benin', id: 'BJ', icon: '' },
  { name: 'Bermuda', id: 'BM', icon: '' },
  { name: 'Bhutan', id: 'BT', icon: '' },
  { name: 'Bolivia', id: 'BO', icon: '' },
  { name: 'Bosnia and Herzegovina', id: 'BA', icon: '' },
  { name: 'Botswana', id: 'BW', icon: '' },
  { name: 'Bouvet Island', id: 'BV', icon: '' },
  { name: 'Brazil', id: 'BR', icon: '' },
  { name: 'British Indian Ocean Territory', id: 'IO', icon: '' },
  { name: 'Brunei Darussalam', id: 'BN', icon: '' },
  { name: 'Bulgaria', id: 'BG', icon: '' },
  { name: 'Burkina Faso', id: 'BF', icon: '' },
  { name: 'Burundi', id: 'BI', icon: '' },
  { name: 'Cambodia', id: 'KH', icon: '' },
  { name: 'Cameroon', id: 'CM', icon: '' },
  { name: 'Canada', id: 'CA', icon: '' },
  { name: 'Cape Verde', id: 'CV', icon: '' },
  { name: 'Cayman Islands', id: 'KY', icon: '' },
  { name: 'Central African Republic', id: 'CF', icon: '' },
  { name: 'Chad', id: 'TD', icon: '' },
  { name: 'Chile', id: 'CL', icon: '' },
  { name: 'China', id: 'CN', icon: '' },
  { name: 'Christmas Island', id: 'CX', icon: '' },
  { name: 'Cocos (Keeling) Islands', id: 'CC', icon: '' },
  { name: 'Colombia', id: 'CO', icon: '' },
  { name: 'Comoros', id: 'KM', icon: '' },
  { name: 'Congo', id: 'CG', icon: '' },
  { name: 'Congo, The Democratic Republic of the', id: 'CD', icon: '' },
  { name: 'Cook Islands', id: 'CK', icon: '' },
  { name: 'Costa Rica', id: 'CR', icon: '' },
  { name: 'Croatia', id: 'HR', icon: '' },
  { name: 'Cuba', id: 'CU', icon: '' },
  { name: 'Cyprus', id: 'CY', icon: '' },
  { name: 'Czech Republic', id: 'CZ', icon: '' },
  { name: 'Denmark', id: 'DK', icon: '' },
  { name: 'Djibouti', id: 'DJ', icon: '' },
  { name: 'Dominica', id: 'DM', icon: '' },
  { name: 'Dominican Republic', id: 'DO', icon: '' },
  { name: 'Ecuador', id: 'EC', icon: '' },
  { name: 'Egypt', id: 'EG', icon: '' },
  { name: 'El Salvador', id: 'SV', icon: '' },
  { name: 'Equatorial Guinea', id: 'GQ', icon: '' },
  { name: 'Eritrea', id: 'ER', icon: '' },
  { name: 'Estonia', id: 'EE', icon: '' },
  { name: 'Ethiopia', id: 'ET', icon: '' },
  { name: 'Falkland Islands (Malvinas)', id: 'FK', icon: '' },
  { name: 'Faroe Islands', id: 'FO', icon: '' },
  { name: 'Fiji', id: 'FJ', icon: '' },
  { name: 'Finland', id: 'FI', icon: '' },
  { name: 'France', id: 'FR', icon: '' },
  { name: 'French Guiana', id: 'GF', icon: '' },
  { name: 'French Polynesia', id: 'PF', icon: '' },
  { name: 'French Southern Territories', id: 'TF', icon: '' },
  { name: 'Gabon', id: 'GA', icon: '' },
  { name: 'Gambia', id: 'GM', icon: '' },
  { name: 'Georgia', id: 'GE', icon: '' },
  { name: 'Germany', id: 'DE', icon: '' },
  { name: 'Ghana', id: 'GH', icon: '' },
  { name: 'Gibraltar', id: 'GI', icon: '' },
  { name: 'Greece', id: 'GR', icon: '' },
  { name: 'Greenland', id: 'GL', icon: '' },
  { name: 'Grenada', id: 'GD', icon: '' },
  { name: 'Guadeloupe', id: 'GP', icon: '' },
  { name: 'Guam', id: 'GU', icon: '' },
  { name: 'Guatemala', id: 'GT', icon: '' },
  { name: 'Guernsey', id: 'GG', icon: '' },
  { name: 'Guinea', id: 'GN', icon: '' },
  { name: 'Guinea-Bissau', id: 'GW', icon: '' },
  { name: 'Guyana', id: 'GY', icon: '' },
  { name: 'Haiti', id: 'HT', icon: '' },
  { name: 'Heard Island and Mcdonald Islands', id: 'HM', icon: '' },
  { name: 'Holy See (Vatican City State)', id: 'VA', icon: '' },
  { name: 'Honduras', id: 'HN', icon: '' },
  { name: 'Hong Kong, SAR of China', id: 'HK', icon: '' },
  { name: 'Hungary', id: 'HU', icon: '' },
  { name: 'Iceland', id: 'IS', icon: '' },
  { name: 'India', id: 'IN', icon: '' },
  { name: 'Indonesia', id: 'ID', icon: '' },
  { name: 'Iran, Islamic Republic Of', id: 'IR', icon: '' },
  { name: 'Iraq', id: 'IQ', icon: '' },
  { name: 'Ireland', id: 'IE', icon: '' },
  { name: 'Isle of Man', id: 'IM', icon: '' },
  { name: 'Israel', id: 'IL', icon: '' },
  { name: 'Italy', id: 'IT', icon: '' },
  { name: 'Jamaica', id: 'JM', icon: '' },
  { name: 'Japan', id: 'JP', icon: '' },
  { name: 'Jersey', id: 'JE', icon: '' },
  { name: 'Jordan', id: 'JO', icon: '' },
  { name: 'Kazakhstan', id: 'KZ', icon: '' },
  { name: 'Kenya', id: 'KE', icon: '' },
  { name: 'Kiribati', id: 'KI', icon: '' },
  { name: 'Korea, Republic of', id: 'KR', icon: '' },
  { name: 'Kuwait', id: 'KW', icon: '' },
  { name: 'Kyrgyzstan', id: 'KG', icon: '' },
  { name: 'Latvia', id: 'LV', icon: '' },
  { name: 'Lebanon', id: 'LB', icon: '' },
  { name: 'Lesotho', id: 'LS', icon: '' },
  { name: 'Liberia', id: 'LR', icon: '' },
  { name: 'Libyan Arab Jamahiriya', id: 'LY', icon: '' },
  { name: 'Liechtenstein', id: 'LI', icon: '' },
  { name: 'Lithuania', id: 'LT', icon: '' },
  { name: 'Luxembourg', id: 'LU', icon: '' },
  { name: 'Macao, SAR of China', id: 'MO', icon: '' },
  { name: 'Macedonia, The Former Yugoslav Republic of', id: 'MK', icon: '' },
  { name: 'Madagascar', id: 'MG', icon: '' },
  { name: 'Malawi', id: 'MW', icon: '' },
  { name: 'Malaysia', id: 'MY', icon: '' },
  { name: 'Maldives', id: 'MV', icon: '' },
  { name: 'Mali', id: 'ML', icon: '' },
  { name: 'Malta', id: 'MT', icon: '' },
  { name: 'Marshall Islands', id: 'MH', icon: '' },
  { name: 'Martinique', id: 'MQ', icon: '' },
  { name: 'Mauritania', id: 'MR', icon: '' },
  { name: 'Mauritius', id: 'MU', icon: '' },
  { name: 'Mayotte', id: 'YT', icon: '' },
  { name: 'Mexico', id: 'MX', icon: '' },
  { name: 'Micronesia, Federated States of', id: 'FM', icon: '' },
  { name: 'Moldova, Republic of', id: 'MD', icon: '' },
  { name: 'Monaco', id: 'MC', icon: '' },
  { name: 'Mongolia', id: 'MN', icon: '' },
  { name: 'Montserrat', id: 'MS', icon: '' },
  { name: 'Morocco', id: 'MA', icon: '' },
  { name: 'Mozambique', id: 'MZ', icon: '' },
  { name: 'Myanmar', id: 'MM', icon: '' },
  { name: 'Namibia', id: 'NA', icon: '' },
  { name: 'Nauru', id: 'NR', icon: '' },
  { name: 'Nepal', id: 'NP', icon: '' },
  { name: 'Netherlands', id: 'NL', icon: '' },
  { name: 'Netherlands Antilles', id: 'AN', icon: '' },
  { name: 'New Caledonia', id: 'NC', icon: '' },
  { name: 'New Zealand', id: 'NZ', icon: '' },
  { name: 'Nicaragua', id: 'NI', icon: '' },
  { name: 'Niger', id: 'NE', icon: '' },
  { name: 'Nigeria', id: 'NG', icon: '' },
  { name: 'Niue', id: 'NU', icon: '' },
  { name: 'Norfolk Island', id: 'NF', icon: '' },
  { name: 'Northern Mariana Islands', id: 'MP', icon: '' },
  { name: 'Norway', id: 'NO', icon: '' },
  { name: 'Oman', id: 'OM', icon: '' },
  { name: 'Pakistan', id: 'PK', icon: '' },
  { name: 'Palau', id: 'PW', icon: '' },
  { name: 'Palestinian Territory, Occupied', id: 'PS', icon: '' },
  { name: 'Panama', id: 'PA', icon: '' },
  { name: 'Papua New Guinea', id: 'PG', icon: '' },
  { name: 'Paraguay', id: 'PY', icon: '' },
  { name: 'Peru', id: 'PE', icon: '' },
  { name: 'Philippines', id: 'PH', icon: '' },
  { name: 'Pitcairn', id: 'PN', icon: '' },
  { name: 'Poland', id: 'PL', icon: '' },
  { name: 'Portugal', id: 'PT', icon: '' },
  { name: 'Puerto Rico', id: 'PR', icon: '' },
  { name: 'Qatar', id: 'QA', icon: '' },
  { name: 'Reunion', id: 'RE', icon: '' },
  { name: 'Romania', id: 'RO', icon: '' },
  { name: 'Russian Federation', id: 'RU', icon: '' },
  { name: 'RWANDA', id: 'RW', icon: '' },
  { name: 'Saint Helena', id: 'SH', icon: '' },
  { name: 'Saint Kitts and Nevis', id: 'KN', icon: '' },
  { name: 'Saint Lucia', id: 'LC', icon: '' },
  { name: 'Saint Pierre and Miquelon', id: 'PM', icon: '' },
  { name: 'Saint Vincent and the Grenadines', id: 'VC', icon: '' },
  { name: 'Samoa', id: 'WS', icon: '' },
  { name: 'San Marino', id: 'SM', icon: '' },
  { name: 'Sao Tome and Principe', id: 'ST', icon: '' },
  { name: 'Saudi Arabia', id: 'SA', icon: '' },
  { name: 'Senegal', id: 'SN', icon: '' },
  { name: 'Serbia and Montenegro', id: 'CS', icon: '' },
  { name: 'Seychelles', id: 'SC', icon: '' },
  { name: 'Sierra Leone', id: 'SL', icon: '' },
  { name: 'Singapore', id: 'SG', icon: '' },
  { name: 'Slovakia', id: 'SK', icon: '' },
  { name: 'Slovenia', id: 'SI', icon: '' },
  { name: 'Solomon Islands', id: 'SB', icon: '' },
  { name: 'Somalia', id: 'SO', icon: '' },
  { name: 'South Africa', id: 'ZA', icon: '' },
  { name: 'South Georgia and the South Sandwich Islands', id: 'GS', icon: '' },
  { name: 'Spain', id: 'ES', icon: '' },
  { name: 'Sri Lanka', id: 'LK', icon: '' },
  { name: 'Sudan', id: 'SD', icon: '' },
  { name: 'Suriname', id: 'SR', icon: '' },
  { name: 'Svalbard and Jan Mayen', id: 'SJ', icon: '' },
  { name: 'Swaziland', id: 'SZ', icon: '' },
  { name: 'Sweden', id: 'SE', icon: '' },
  { name: 'Switzerland', id: 'CH', icon: '' },
  { name: 'Syrian Arab Republic', id: 'SY', icon: '' },
  { name: 'Taiwan, Province of China', id: 'TW', icon: '' },
  { name: 'Tajikistan', id: 'TJ', icon: '' },
  { name: 'Tanzania, United Republic of', id: 'TZ', icon: '' },
  { name: 'Thailand', id: 'TH', icon: '' },
  { name: 'Timor-Leste', id: 'TL', icon: '' },
  { name: 'Togo', id: 'TG', icon: '' },
  { name: 'Tokelau', id: 'TK', icon: '' },
  { name: 'Tonga', id: 'TO', icon: '' },
  { name: 'Trinidad and Tobago', id: 'TT', icon: '' },
  { name: 'Tunisia', id: 'TN', icon: '' },
  { name: 'Turkey', id: 'TR', icon: '' },
  { name: 'Turkmenistan', id: 'TM', icon: '' },
  { name: 'Turks and Caicos Islands', id: 'TC', icon: '' },
  { name: 'Tuvalu', id: 'TV', icon: '' },
  { name: 'Uganda', id: 'UG', icon: '' },
  { name: 'Ukraine', id: 'UA', icon: '' },
  { name: 'United Arab Emirates', id: 'AE', icon: '' },
  { name: 'United Kingdom', id: 'GB', icon: '' },
  { name: 'United States', id: 'US', icon: '' },
  { name: 'United States Minor Outlying Islands', id: 'UM', icon: '' },
  { name: 'Uruguay', id: 'UY', icon: '' },
  { name: 'Uzbekistan', id: 'UZ', icon: '' },
  { name: 'Vanuatu', id: 'VU', icon: '' },
  { name: 'Venezuela', id: 'VE', icon: '' },
  { name: 'Viet Nam', id: 'VN', icon: '' },
  { name: 'Virgin Islands, British', id: 'VG', icon: '' },
  { name: 'Virgin Islands, U.S.', id: 'VI', icon: '' },
  { name: 'Wallis and Futuna', id: 'WF', icon: '' },
  { name: 'Western Sahara', id: 'EH', icon: '' },
  { name: 'Yemen', id: 'YE', icon: '' },
  { name: 'Zambia', id: 'ZM', icon: '' },
  { name: 'Zimbabwe', id: 'ZW', icon: '' },
];
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameRg: '',
      number: '',
      description: '',
      job: '',
      country: '',
      agreement: false,
      isAgreementChecked: false,
      hasNameError: true,
      hasDescriptionError: true,
      hasMovieError: true,
      hasJobError: true,
      hasAgreementError: true,
      validate: false,
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
      // country,
      // agreement,
      // description,
      hasNameError,
      hasDescriptionError,
      hasMovieError,
      hasJobError,
      hasAgreementError,
    } = this.state;
    if (!hasNameError && !hasDescriptionError && !hasMovieError && !hasJobError && !hasAgreementError) {
      alert('All validated!');
    }
  }

  render() {
    const { name, nameRg, number, description, job, agreement, isAgreementChecked, country, validate } = this.state;
    const rowStyle = {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '2%',
      fontSize: '14px',
    };
    const rowWrapperStyle = {
      display: 'table',
      width: '100%',
    };
    const rowContainerStyle = {
      display: 'table-cell',
      verticalAlign: 'middle',
      borderBottom: '1px solid #e5e5e5',
    };
    const labelStyle = {
      display: 'inline-block',
    };
    const labelContentStyle = {
      verticalAlign: 'middle',
    };

    let countryItem;
    COUNTRY_OPTIONS_LIST.filter(i => {
      if (String(i.id) == String(country)) {
        countryItem = i;
      }
    });

    return (
      <div className={CSS['wrapper']}>
        <div style={{ padding: '10px', border: '1px solid #e5e5e5' }}>
          <div>
            <h1>Basic Usage</h1>
          </div>

          <div>
            <div className={CSS['sub-section-title-wrapper']}>
              <div className={CSS['sub-section-title']}>Textbox</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Textbox Empty by onBlur Example:</h1>
                  <Textbox
                    attributesInput={{
                      // Optional.
                      id: 'Name',
                      name: 'Name',
                      type: 'text',
                      placeholder: 'Place your name here ^-^',
                    }}
                    value={name} // Optional.[String].Default: "".
                    onChange={(name, e) => {
                      this.setState({ name });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      name: 'Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
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
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Textbox Regex by onBlur Example:</h1>
                  <Textbox
                    attributesInput={{
                      // Optional.
                      id: 'Name',
                      name: 'Name',
                      type: 'text',
                      placeholder: 'Place your name here ^-^',
                    }}
                    value={nameRg} // Optional.[String].Default: "".
                    placeholder="Place your name here ^-^" // Optional.[String].Default: "".
                    onChange={(name, e) => {
                      this.setState({ nameRg });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      reg: /^\d{5}$/, // Optional.[Bool].Default: "" Custom regex.
                      regMsg: 'failed in reg.test(value)', // Optional.[String].Default: "" Custom regex error message.
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
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Textbox Number by onBlur Example:</h1>
                  <Textbox
                    attributesInput={{
                      // Optional.
                      id: 'Number',
                      name: 'Number',
                      type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
                      placeholder: 'Place your number here ^-^',
                    }}
                    value={number} // Optional.[String].Default: "".
                    onChange={(number, e) => {
                      this.setState({ number });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                      min: 10, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                      max: 100, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                      // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
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
            <div className={CSS['sub-section-title-wrapper']}>
              <div className={CSS['sub-section-title']}>Radiobox</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Radiobox Empty by onBlur Example:</h1>
                  <Radiobox
                    attributesInput={{
                      // Optional.
                      id: 'job',
                      name: 'job',
                    }}
                    value={job} // Optional.[String].Default: "".
                    optionList={[
                      { id: 'engineer', name: 'engineer' },
                      { id: 'teacher', name: 'teacher' },
                      { id: 'student', name: 'student' },
                    ]}
                    customStyleContainer={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }} // Optional.[Object].Default: {}.
                    customStyleOptionListItem={{ marginRight: '20px' }} // Optional.[Object].Default: {}.
                    onChange={(job, e) => {
                      this.setState({ job });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} // Optional.[Func].Default: none.
                    validationOption={{
                      name: 'job', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
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
            <div className={CSS['sub-section-title-wrapper']}>
              <div className={CSS['sub-section-title']}>Checkbox</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Checkbox Empty by onBlur Example:</h1>
                  <Checkbox
                    attributesInput={{
                      // Optional.
                      id: 'agreement',
                      name: 'agreement',
                    }}
                    value={agreement} // Required.[String].Default: "".
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    checked={isAgreementChecked} // Required.[Bool].Default: false.
                    onChange={(isAgreementChecked, e) => {
                      this.setState({ isAgreementChecked });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    labelHtml={<div style={{ color: '#4a4a4a', marginTop: '2px' }}>agree?</div>} // Required.[Html].Default: none.
                    validationOption={{
                      name: 'agreement', // Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
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
            <div className={CSS['sub-section-title-wrapper']}>
              <div className={CSS['sub-section-title']}>Select</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Select Empty by onBlur Example:</h1>
                  <Select
                    attributesInput={{
                      // Optional.
                      id: 'country',
                      name: 'country',
                    }}
                    value={country} // Optional.[String].Default: "".
                    optionList={[
                      { id: '', name: 'Please Select a country' },
                      { id: 'US', name: 'United States' },
                      { id: 'CN', name: 'China' },
                      { id: 'JP', name: 'Japan' },
                    ]} // Required.[Array of Object(s)].Default: [].
                    onChange={(res, e) => {
                      this.setState({ country: res.id });
                      console.log(e);
                    }} // Optional.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    customStyleOptionListContainer={{ maxHeight: '200px', overflow: 'auto', fontSize: '14px' }} // Optional.[Object].Default: {}.
                    validationOption={{
                      name: 'country', // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
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
            <div className={CSS['sub-section-title-wrapper']}>
              <div className={CSS['sub-section-title']}>Textarea</div>
            </div>

            <div style={{ overflow: 'auto', padding: '2%' }}>
              <div className={CSS['block']}>
                <div>
                  <h1>Validate Textarea Empty by onBlur Example:</h1>
                  <Textarea
                    attributesInput={{
                      // Optional.
                      id: 'description',
                      name: 'description',
                      type: 'text',
                      placeholder: 'Place your description here ^-^',
                    }}
                    value={description} // Optional.[String].Default: "".
                    onChange={(description, e) => {
                      this.setState({ description });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      name: 'Description', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
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
                  <div style={prefixAll({ ...labelStyle, flex: '3 3 0px', marginTop: '3px' })}>
                    <span className="icon icon-person" style={{ ...labelContentStyle, fontSize: '20px' }} />
                    &nbsp;
                    <span style={labelContentStyle}>Name</span>
                  </div>
                  <div style={prefixAll({ flex: '6 6 0px' })}>
                    <Textbox
                      attributesWrapper={{}}
                      attributesInput={{
                        id: 'Name',
                        name: 'Name',
                        maxLength: 10,
                        type: 'text',
                        placeholder: 'Place your name here ^-^',
                      }}
                      value={name} // Optional.[String].Default: "".
                      label="" // Optional.[String].Default: "". The content of label. NOTE: must provide attributesInput.id
                      disabled={false} // Optional.[Bool].Default: false.
                      validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => this.setState({ hasNameError: res, validate: false })} // Optional.[Func].Default: none. Return the validation result.
                      classNameInput="" // Optional.[String].Default: "".
                      classNameWrapper="" // Optional.[String].Default: "".
                      classNameContainer="" // Optional.[String].Default: "".
                      customStyleInput={{}} // Optional.[Object].Default: {}.
                      customStyleWrapper={{}} // Optional.[Object].Default: {}.
                      customStyleContainer={{}} // Optional.[Object].Default: {}.
                      onChange={(name, e) => {
                        this.setState({ name });
                        console.log(e);
                      }} // Required.[Func].Default: () => {}. Will return the value.
                      onBlur={e => {
                        console.log(e);
                      }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      validationOption={{
                        name: 'Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        type: 'number',
                        // type: 'string', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                        // numberType: 'decimal', // Optional.[String].Default: "decimal". Validation number type, options are ['decimal', 'int', 'price']. Handy when the validation type is number.
                        // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
                        // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                        // min: 2, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        // max: 10, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // length: 2, // Optional.[Number].Default: 0. Validation of exact length of the value.
                        // compare: '3', // Optional.[String].Default: "" Compare this value to 3 to see if they are equal.
                        // reg: /^\d{18}|\d{15}$/, // Optional.[Bool].Default: "" Custom regex.
                        // regMsg: 'failed in reg.test(${value})', // Optional.[String].Default: "" Custom regex error message.
                        // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "" Show your custom error message no matter what(except the message from customFunc) when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border.", // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // customFunc: res => { // Optional.[Func].Default: none. Custom function. Returns true or err message
                        //   if (res != 'milk') {
                        //     return 'Name cannot be other things but milk';
                        //   }
                        //   return true;
                        // }
                        // customFunc: async v => {
                        //   if (v === '') {
                        //     this.setState({ hasError: true });
                        //     return 'Name is required.';
                        //   }
                        //   if (v.length < 4) {
                        //     this.setState({ hasError: true });
                        //     return 'Name needs at least 4 length.';
                        //   }
                        //   let usernameRes = null;
                        //   await fetch('https://jsonplaceholder.typicode.com/todos/1')
                        //     .then(response => {
                        //       return response.json();
                        //     })
                        //     .then(json => {
                        //       console.log('parsed json', json);
                        //       usernameRes = true;
                        //     })
                        //     .catch(ex => {
                        //       console.log('parsing failed', ex);
                        //     });
                        //   if (usernameRes === false) {
                        //     this.setState({ hasError: true });
                        //     return {
                        //       error: true,
                        //       message: 'Username already exist.',
                        //     };
                        //   }
                        //   if (usernameRes === true) {
                        //     this.setState({ hasError: false });
                        //     return {
                        //       error: false,
                        //       message: 'Username does not already exist.',
                        //       showOnSuccess: true,
                        //     };
                        //   }
                        // },
                        // msgOnError: '<a href="google.com">google</a>',
                        // shouldRenderMsgAsHtml: true, // Optional.[Bool].Default: false. Should render your message by dangerouslySetInnerHTML.
                      }}
                      // asyncMsgObj={this.state.nameAsyncMsgObj}
                      // asyncMsgObj={{
                      //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
                      //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
                      //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
                      //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
                      // }}
                    />
                    {/*<div>
                      <input
                        id="textOutsideController"
                        onChange={() => {
                          this.setState({ name: document.getElementById('textOutsideController').value });
                        }}
                      />
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div style={prefixAll({ ...labelStyle, flex: '3 3 0px', marginTop: '3px' })}>
                    {/*<div style={(labelStyle, { flex: '3 3 0px' })}>*/}
                    <span className="icon icon-info" style={{ ...labelContentStyle, fontSize: '20px' }} />
                    &nbsp;
                    <span style={labelContentStyle}>job</span>
                  </div>
                  <div style={prefixAll({ flex: '6 6 0px', display: 'flex' })}>
                    <Radiobox
                      attributesWrapper={{}}
                      attributesInputs={[
                        { id: 'job-0', name: 'job-0' },
                        { id: 'job-1', name: 'job-1' },
                        { id: 'job-2', name: 'job-2' },
                      ]}
                      disabled={false} // Optional.[Bool].Default: false.
                      value={job} // Optional.[String].Default: "".
                      validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => this.setState({ hasJobError: res, validate: false })} // Optional.[Func].Default: none. Return the validation result.
                      optionList={JOB_OPTIONS_LIST}
                      classNameInput="" // Optional.[String].Default: "".
                      classNameWrapper="" // Optional.[String].Default: "".
                      classNameContainer="" // Optional.[String].Default: "".
                      classNameOptionListItem="" // Optional.[String].Default: "".
                      customStyleInput={{}} // Optional.[Object].Default: {}.
                      customStyleWrapper={{}} // Optional.[Object].Default: {}.
                      customStyleContainer={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }} // Optional.[Object].Default: {}.
                      customStyleOptionListItem={{ marginRight: '20px' }} // Optional.[Object].Default: {}.
                      onChange={(job, e) => {
                        this.setState({ job });
                        console.log(e);
                      }} // Required.[Func].Default: () => {}. Will return the value.
                      onBlur={e => {
                        console.log(e);
                      }} // Optional.[Func].Default: none.
                      // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onKeyUp={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      validationOption={{
                        name: 'Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // msgOnError: '<a href="google.com">google</a>',
                        // shouldRenderMsgAsHtml: true, // Optional.[Bool].Default: false. Should render your message by dangerouslySetInnerHTML.
                      }}
                      // asyncMsgObj={{
                      //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
                      //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
                      //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
                      //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
                      // }}
                    />
                    {/*<div
                      onClick={() => {
                        this.setState({ job: '' });
                      }}
                    >
                      Clear radio value
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div style={prefixAll({ ...labelStyle, flex: '3 3 0px', marginTop: '3px' })}>
                    {/*<div style={(labelStyle, { flex: '3 3 0px' })}>*/}
                    <span className="icon icon-assignment-late" style={{ ...labelContentStyle, fontSize: '20px' }} />
                    &nbsp;
                    <span style={labelContentStyle}>agreement</span>
                  </div>
                  <div style={prefixAll({ flex: '6 6 0px' })}>
                    <Checkbox
                      attributesWrapper={{}}
                      attributesInput={{
                        id: 'agreement',
                        name: 'agreement',
                      }}
                      value={agreement} // Required.[String].Default: "".
                      checked={isAgreementChecked} // Required.[Bool].Default: false.
                      disabled={false} // Optional.[Bool].Default: false.
                      validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => {
                        this.setState({
                          hasAgreementError: res,
                          validate: false,
                        });
                      }} // Optional.[Func].Default: none. Return the validation result.
                      classNameWrapper="" // Optional.[String].Default: "".
                      classNameInputBox="" // Optional.[String].Default: "".
                      classNameContainer="" // Optional.[String].Default: "".
                      customStyleWrapper={{}} // Optional.[Object].Default: {}.
                      customStyleInputBox={{}} // Optional.[Object].Default: {}.
                      customStyleContainer={{}} // Optional.[Object].Default: {}.
                      onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      onChange={(isAgreementChecked, e) => {
                        this.setState({ isAgreementChecked });
                        console.log(e);
                      }} // Required.[Func].Default: () => {}. Will return the value.
                      labelHtml={<div style={{ color: '#4a4a4a', marginTop: '2px' }}>agree?</div>} // Required.[Html].Default: none.
                      validationOption={{
                        name: 'agreement', // Optional.[String].Default: "". To display in the Error message. i.e Please check the ${name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // msgOnError: '<a href="google.com">google</a>',
                        // shouldRenderMsgAsHtml: true, // Optional.[Bool].Default: false. Should render your message by dangerouslySetInnerHTML.
                      }}
                      // asyncMsgObj={{
                      //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
                      //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
                      //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
                      //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
                      // }}
                    />
                    {/*<div
                      onClick={() => {
                        this.setState({ isAgreementChecked: !isAgreementChecked });
                      }}
                    >
                      toggle checked
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div style={prefixAll({ ...labelStyle, flex: '3 3 0px', marginTop: '3px' })}>
                    <span className="icon icon-bookmark" style={{ ...labelContentStyle, fontSize: '20px' }} />
                    &nbsp;
                    <span style={labelContentStyle}>country</span>
                  </div>
                  <div style={prefixAll({ flex: '6 6 0px' })}>
                    <Select
                      attributesWrapper={{}}
                      attributesInput={{
                        id: 'country',
                        name: 'country',
                      }}
                      value={country} // Optional.[String].Default: "".
                      disabled={false} // Optional.[Bool].Default: false.
                      showSearch={true} // Optional.[Bool].Default: false. Show a search box in order to find option quickly.
                      showArrow={true} // Optional.[Bool].Default: true.
                      // keyword={''} // Optional.[String].Default: ''. Show a keyword for search box.
                      validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res => this.setState({ hasMovieError: res, validate: false })} // Optional.[Func].Default: none. Return the validation result.
                      optionList={COUNTRY_OPTIONS_LIST} // Required.[Array of Object(s)].Default: [].
                      classNameSelect="" // Optional.[String].Default: "".
                      classNameWrapper="" // Optional.[String].Default: "".
                      classNameContainer="" // Optional.[String].Default: "".
                      classNameOptionListContainer="" // Optional.[String].Default: "".
                      classNameOptionListItem="" // Optional.[String].Default: "".
                      customStyleSelect={{}} // Optional.[Object].Default: {}.
                      customStyleWrapper={{}} // Optional.[Object].Default: {}.
                      customStyleContainer={{}} // Optional.[Object].Default: {}.
                      customStyleOptionListContainer={{ maxHeight: '200px', overflow: 'auto', fontSize: '14px' }} // Optional.[Object].Default: {}.
                      customStyleOptionListItem={{}} // Optional.[Object].Default: {}.
                      onChange={(res, e) => {
                        this.setState({ country: res.id });
                        console.log(e);
                      }} // Optional.[Func].Default: () => {}. Will return the value.
                      onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      validationOption={{
                        name: 'country', // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // msgOnError: '<a href="google.com">google</a>',
                        // shouldRenderMsgAsHtml: true, // Optional.[Bool].Default: false. Should render your message by dangerouslySetInnerHTML.
                      }}
                      // asyncMsgObj={{
                      //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
                      //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
                      //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
                      //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
                      // }}
                    />
                    {/*<div
                      onClick={() => {
                        this.setState({ country: '' });
                      }}
                    >
                      Clear select value
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div style={prefixAll({ ...labelStyle, flex: '3 3 0px', marginTop: '3px' })}>
                    <span className="icon icon-insert-drive-file" style={{ ...labelContentStyle, fontSize: '20px' }} />
                    &nbsp;
                    <span style={labelContentStyle}>description</span>
                  </div>
                  <div style={prefixAll({ flex: '6 6 0px' })}>
                    <Textarea
                      attributesWrapper={{}}
                      attributesInput={{
                        id: 'description',
                        name: 'description',
                        placeholder: 'Place your description here ^-^',
                        // maxLength: '10',
                        // cols: '10',
                        // rows: '10',
                      }}
                      value={description} // Optional.[String].Default: "".
                      disabled={false} // Optional.[Bool].Default: false.
                      validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                      validationCallback={res =>
                        this.setState({
                          hasDescriptionError: res,
                          validate: false,
                        })
                      } // Optional.[Func].Default: none. Return the validation result.
                      classNameInput="" // Optional.[String].Default: "".
                      classNameWrapper="" // Optional.[String].Default: "".
                      classNameContainer="" // Optional.[String].Default: "".
                      customStyleInput={{}} // Optional.[Object].Default: {}.
                      customStyleWrapper={{}} // Optional.[Object].Default: {}.
                      customStyleContainer={{}} // Optional.[Object].Default: {}.
                      onChange={(description, e) => {
                        this.setState({ description });
                        console.log(e);
                      }} // Required.[Func].Default: () => {}. Will return the value.
                      onBlur={e => {
                        console.log(e);
                      }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      // onFocus={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onKeyUp={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      // onClick={(e) => {console.log(e);}} // Optional.[Func].Default: none.
                      validationOption={{
                        name: 'Description', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        type: 'string', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                        // showMsg: true, // Optional.[Bool].Default: true. To determin display the error message or not.
                        // locale: 'en-US', // Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                        // min: 2, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        // max: 10, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // length: 2, // Optional.[Number].Default: 0. Validation of exact length of the value.
                        // reg: /^\d{18}|\d{15}$/, // Optional.[Bool].Default: "". Custom regex.
                        // regMsg: 'failed in reg.test(${value})', // Optional.[String].Default: "". Custom regex error message.
                        // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", // Optional.[String].Default: "". Show your custom error message no matter what(except the message from customFunc) when it has error if it is provied.
                        // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." // Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                        // customFunc: res => { // Optional.[Func].Default: none. Custom function. Returns true or err message
                        //   if (res != 'banana') {
                        //     return 'Description cannot be other things but banana';
                        //   }
                        //   return true;
                        // }
                        // msgOnError: '<a href="google.com">google</a>',
                        // shouldRenderMsgAsHtml: true, // Optional.[Bool].Default: false. Should render your message by dangerouslySetInnerHTML.
                      }}
                      // asyncMsgObj={{
                      //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
                      //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
                      //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
                      //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
                      // }}
                    />
                    {/*<div>
                      <input
                        id="textareaOutsideController"
                        onChange={() => {
                          this.setState({ description: document.getElementById('textareaOutsideController').value });
                        }}
                      />
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '10px' }} />
            <div className={`${CSS['my-button']} ${CSS['my-button__red']} ${CSS['save-button']}`} onClick={this.validateForm}>
              validate
            </div>
            <input type="submit" style={{ display: 'none' }} />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
