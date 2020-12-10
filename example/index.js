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
const JOB_OPTIONS_LIST = [{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }];
const COUNTRY_OPTIONS_LIST = [
  { id: '', name: 'Please Select a country' },
  { name: 'Afghanistan', id: 'AF' },
  { name: 'Åland Islands', id: 'AX' },
  { name: 'Albania', id: 'AL' },
  { name: 'Algeria', id: 'DZ' },
  { name: 'American Samoa', id: 'AS' },
  { name: 'AndorrA', id: 'AD' },
  { name: 'Angola', id: 'AO' },
  { name: 'Anguilla', id: 'AI' },
  { name: 'Antarctica', id: 'AQ' },
  { name: 'Antigua and Barbuda', id: 'AG' },
  { name: 'Argentina', id: 'AR' },
  { name: 'Armenia', id: 'AM' },
  { name: 'Aruba', id: 'AW' },
  { name: 'Australia', id: 'AU' },
  { name: 'Austria', id: 'AT' },
  { name: 'Azerbaijan', id: 'AZ' },
  { name: 'Bahamas', id: 'BS' },
  { name: 'Bahrain', id: 'BH' },
  { name: 'Bangladesh', id: 'BD' },
  { name: 'Barbados', id: 'BB' },
  { name: 'Belarus', id: 'BY' },
  { name: 'Belgium', id: 'BE' },
  { name: 'Belize', id: 'BZ' },
  { name: 'Benin', id: 'BJ' },
  { name: 'Bermuda', id: 'BM' },
  { name: 'Bhutan', id: 'BT' },
  { name: 'Bolivia', id: 'BO' },
  { name: 'Bosnia and Herzegovina', id: 'BA' },
  { name: 'Botswana', id: 'BW' },
  { name: 'Bouvet Island', id: 'BV' },
  { name: 'Brazil', id: 'BR' },
  { name: 'British Indian Ocean Territory', id: 'IO' },
  { name: 'Brunei Darussalam', id: 'BN' },
  { name: 'Bulgaria', id: 'BG' },
  { name: 'Burkina Faso', id: 'BF' },
  { name: 'Burundi', id: 'BI' },
  { name: 'Cambodia', id: 'KH' },
  { name: 'Cameroon', id: 'CM' },
  { name: 'Canada', id: 'CA' },
  { name: 'Cape Verde', id: 'CV' },
  { name: 'Cayman Islands', id: 'KY' },
  { name: 'Central African Republic', id: 'CF' },
  { name: 'Chad', id: 'TD' },
  { name: 'Chile', id: 'CL' },
  { name: 'China', id: 'CN' },
  { name: 'Christmas Island', id: 'CX' },
  { name: 'Cocos (Keeling) Islands', id: 'CC' },
  { name: 'Colombia', id: 'CO' },
  { name: 'Comoros', id: 'KM' },
  { name: 'Congo', id: 'CG' },
  { name: 'Congo, The Democratic Republic of the', id: 'CD' },
  { name: 'Cook Islands', id: 'CK' },
  { name: 'Costa Rica', id: 'CR' },
  { name: 'Croatia', id: 'HR' },
  { name: 'Cuba', id: 'CU' },
  { name: 'Cyprus', id: 'CY' },
  { name: 'Czech Republic', id: 'CZ' },
  { name: 'Denmark', id: 'DK' },
  { name: 'Djibouti', id: 'DJ' },
  { name: 'Dominica', id: 'DM' },
  { name: 'Dominican Republic', id: 'DO' },
  { name: 'Ecuador', id: 'EC' },
  { name: 'Egypt', id: 'EG' },
  { name: 'El Salvador', id: 'SV' },
  { name: 'Equatorial Guinea', id: 'GQ' },
  { name: 'Eritrea', id: 'ER' },
  { name: 'Estonia', id: 'EE' },
  { name: 'Ethiopia', id: 'ET' },
  { name: 'Falkland Islands (Malvinas)', id: 'FK' },
  { name: 'Faroe Islands', id: 'FO' },
  { name: 'Fiji', id: 'FJ' },
  { name: 'Finland', id: 'FI' },
  { name: 'France', id: 'FR' },
  { name: 'French Guiana', id: 'GF' },
  { name: 'French Polynesia', id: 'PF' },
  { name: 'French Southern Territories', id: 'TF' },
  { name: 'Gabon', id: 'GA' },
  { name: 'Gambia', id: 'GM' },
  { name: 'Georgia', id: 'GE' },
  { name: 'Germany', id: 'DE' },
  { name: 'Ghana', id: 'GH' },
  { name: 'Gibraltar', id: 'GI' },
  { name: 'Greece', id: 'GR' },
  { name: 'Greenland', id: 'GL' },
  { name: 'Grenada', id: 'GD' },
  { name: 'Guadeloupe', id: 'GP' },
  { name: 'Guam', id: 'GU' },
  { name: 'Guatemala', id: 'GT' },
  { name: 'Guernsey', id: 'GG' },
  { name: 'Guinea', id: 'GN' },
  { name: 'Guinea-Bissau', id: 'GW' },
  { name: 'Guyana', id: 'GY' },
  { name: 'Haiti', id: 'HT' },
  { name: 'Heard Island and Mcdonald Islands', id: 'HM' },
  { name: 'Holy See (Vatican City State)', id: 'VA' },
  { name: 'Honduras', id: 'HN' },
  { name: 'Hong Kong, SAR of China', id: 'HK' },
  { name: 'Hungary', id: 'HU' },
  { name: 'Iceland', id: 'IS' },
  { name: 'India', id: 'IN' },
  { name: 'Indonesia', id: 'ID' },
  { name: 'Iran, Islamic Republic Of', id: 'IR' },
  { name: 'Iraq', id: 'IQ' },
  { name: 'Ireland', id: 'IE' },
  { name: 'Isle of Man', id: 'IM' },
  { name: 'Israel', id: 'IL' },
  { name: 'Italy', id: 'IT' },
  { name: 'Jamaica', id: 'JM' },
  { name: 'Japan', id: 'JP' },
  { name: 'Jersey', id: 'JE' },
  { name: 'Jordan', id: 'JO' },
  { name: 'Kazakhstan', id: 'KZ' },
  { name: 'Kenya', id: 'KE' },
  { name: 'Kiribati', id: 'KI' },
  { name: 'Korea, Republic of', id: 'KR' },
  { name: 'Kuwait', id: 'KW' },
  { name: 'Kyrgyzstan', id: 'KG' },
  { name: 'Latvia', id: 'LV' },
  { name: 'Lebanon', id: 'LB' },
  { name: 'Lesotho', id: 'LS' },
  { name: 'Liberia', id: 'LR' },
  { name: 'Libyan Arab Jamahiriya', id: 'LY' },
  { name: 'Liechtenstein', id: 'LI' },
  { name: 'Lithuania', id: 'LT' },
  { name: 'Luxembourg', id: 'LU' },
  { name: 'Macao, SAR of China', id: 'MO' },
  { name: 'Macedonia, The Former Yugoslav Republic of', id: 'MK' },
  { name: 'Madagascar', id: 'MG' },
  { name: 'Malawi', id: 'MW' },
  { name: 'Malaysia', id: 'MY' },
  { name: 'Maldives', id: 'MV' },
  { name: 'Mali', id: 'ML' },
  { name: 'Malta', id: 'MT' },
  { name: 'Marshall Islands', id: 'MH' },
  { name: 'Martinique', id: 'MQ' },
  { name: 'Mauritania', id: 'MR' },
  { name: 'Mauritius', id: 'MU' },
  { name: 'Mayotte', id: 'YT' },
  { name: 'Mexico', id: 'MX' },
  { name: 'Micronesia, Federated States of', id: 'FM' },
  { name: 'Moldova, Republic of', id: 'MD' },
  { name: 'Monaco', id: 'MC' },
  { name: 'Mongolia', id: 'MN' },
  { name: 'Montserrat', id: 'MS' },
  { name: 'Morocco', id: 'MA' },
  { name: 'Mozambique', id: 'MZ' },
  { name: 'Myanmar', id: 'MM' },
  { name: 'Namibia', id: 'NA' },
  { name: 'Nauru', id: 'NR' },
  { name: 'Nepal', id: 'NP' },
  { name: 'Netherlands', id: 'NL' },
  { name: 'Netherlands Antilles', id: 'AN' },
  { name: 'New Caledonia', id: 'NC' },
  { name: 'New Zealand', id: 'NZ' },
  { name: 'Nicaragua', id: 'NI' },
  { name: 'Niger', id: 'NE' },
  { name: 'Nigeria', id: 'NG' },
  { name: 'Niue', id: 'NU' },
  { name: 'Norfolk Island', id: 'NF' },
  { name: 'Northern Mariana Islands', id: 'MP' },
  { name: 'Norway', id: 'NO' },
  { name: 'Oman', id: 'OM' },
  { name: 'Pakistan', id: 'PK' },
  { name: 'Palau', id: 'PW' },
  { name: 'Palestinian Territory, Occupied', id: 'PS' },
  { name: 'Panama', id: 'PA' },
  { name: 'Papua New Guinea', id: 'PG' },
  { name: 'Paraguay', id: 'PY' },
  { name: 'Peru', id: 'PE' },
  { name: 'Philippines', id: 'PH' },
  { name: 'Pitcairn', id: 'PN' },
  { name: 'Poland', id: 'PL' },
  { name: 'Portugal', id: 'PT' },
  { name: 'Puerto Rico', id: 'PR' },
  { name: 'Qatar', id: 'QA' },
  { name: 'Reunion', id: 'RE' },
  { name: 'Romania', id: 'RO' },
  { name: 'Russian Federation', id: 'RU' },
  { name: 'RWANDA', id: 'RW' },
  { name: 'Saint Helena', id: 'SH' },
  { name: 'Saint Kitts and Nevis', id: 'KN' },
  { name: 'Saint Lucia', id: 'LC' },
  { name: 'Saint Pierre and Miquelon', id: 'PM' },
  { name: 'Saint Vincent and the Grenadines', id: 'VC' },
  { name: 'Samoa', id: 'WS' },
  { name: 'San Marino', id: 'SM' },
  { name: 'Sao Tome and Principe', id: 'ST' },
  { name: 'Saudi Arabia', id: 'SA' },
  { name: 'Senegal', id: 'SN' },
  { name: 'Serbia and Montenegro', id: 'CS' },
  { name: 'Seychelles', id: 'SC' },
  { name: 'Sierra Leone', id: 'SL' },
  { name: 'Singapore', id: 'SG' },
  { name: 'Slovakia', id: 'SK' },
  { name: 'Slovenia', id: 'SI' },
  { name: 'Solomon Islands', id: 'SB' },
  { name: 'Somalia', id: 'SO' },
  { name: 'South Africa', id: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', id: 'GS' },
  { name: 'Spain', id: 'ES' },
  { name: 'Sri Lanka', id: 'LK' },
  { name: 'Sudan', id: 'SD' },
  { name: 'Suriname', id: 'SR' },
  { name: 'Svalbard and Jan Mayen', id: 'SJ' },
  { name: 'Swaziland', id: 'SZ' },
  { name: 'Sweden', id: 'SE' },
  { name: 'Switzerland', id: 'CH' },
  { name: 'Syrian Arab Republic', id: 'SY' },
  { name: 'Taiwan, Province of China', id: 'TW' },
  { name: 'Tajikistan', id: 'TJ' },
  { name: 'Tanzania, United Republic of', id: 'TZ' },
  { name: 'Thailand', id: 'TH' },
  { name: 'Timor-Leste', id: 'TL' },
  { name: 'Togo', id: 'TG' },
  { name: 'Tokelau', id: 'TK' },
  { name: 'Tonga', id: 'TO' },
  { name: 'Trinidad and Tobago', id: 'TT' },
  { name: 'Tunisia', id: 'TN' },
  { name: 'Turkey', id: 'TR' },
  { name: 'Turkmenistan', id: 'TM' },
  { name: 'Turks and Caicos Islands', id: 'TC' },
  { name: 'Tuvalu', id: 'TV' },
  { name: 'Uganda', id: 'UG' },
  { name: 'Ukraine', id: 'UA' },
  { name: 'United Arab Emirates', id: 'AE' },
  { name: 'United Kingdom', id: 'GB' },
  { name: 'United States', id: 'US' },
  { name: 'United States Minor Outlying Islands', id: 'UM' },
  { name: 'Uruguay', id: 'UY' },
  { name: 'Uzbekistan', id: 'UZ' },
  { name: 'Vanuatu', id: 'VU' },
  { name: 'Venezuela', id: 'VE' },
  { name: 'Viet Nam', id: 'VN' },
  { name: 'Virgin Islands, British', id: 'VG' },
  { name: 'Virgin Islands, U.S.', id: 'VI' },
  { name: 'Wallis and Futuna', id: 'WF' },
  { name: 'Western Sahara', id: 'EH' },
  { name: 'Yemen', id: 'YE' },
  { name: 'Zambia', id: 'ZM' },
  { name: 'Zimbabwe', id: 'ZW' },
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
                    optionList={[{ id: 'engineer', name: 'engineer' }, { id: 'teacher', name: 'teacher' }, { id: 'student', name: 'student' }]}
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
                    optionList={[{ id: '', name: 'Please Select a country' }, { id: 'US', name: 'United States' }, { id: 'CN', name: 'China' }, { id: 'JP', name: 'Japan' }]} // Required.[Array of Object(s)].Default: [].
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
                      attributesInputs={[{ id: 'job-0', name: 'job-0' }, { id: 'job-1', name: 'job-1' }, { id: 'job-2', name: 'job-2' }]}
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
