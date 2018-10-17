import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Message from './message';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
let STYLES = {};
try {
  STYLES = require('./react-inputs-validation.css');
} catch (ex) {}
const TYPE = 'radiobox';
const getDefaultValidationOption = obj => {
  let { name, check, required, showMsg, locale, msgOnError, msgOnSuccess } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  return {
    name,
    check,
    showMsg,
    required,
    locale,
    msgOnError,
    msgOnSuccess
  };
};
const isValidateValue = value => {
  value = String(value);
  if (value == '' || value == 'null' || value == 'undefined') {
    return true;
  } else {
    return false;
  }
};
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      msg: '',
      successMsg: undefined
    };
    if (!props.optionList.length) {
      console.error('Please provide valid optionList. i.e optionList=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]');
      return;
    } else {
      props.optionList.map(i => {
        if (typeof i.name == 'undefined' || typeof i.id == 'undefined') {
          console.error('Please provide valid optionList. i.e optionList=[{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]');
        }
        return;
      });
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validate == false && nextProps.validate == true) {
      this.check();
    }
    if (this.props.value != nextProps.value) {
      if (this.state.err) {
        this.setState({ err: false });
      } else {
        this.setState({ successMsg: undefined });
      }
    }
  }

  onChange(val, e) {
    const { onChange } = this.props;
    onChange && onChange(val, e);
  }

  onClick(e) {
    const { onClick } = this.props;
    onClick && onClick(e);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    if (onBlur) {
      this.check();
      onBlur(e);
    }
  }

  onFocus(e) {
    this.focus = true;
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }
  }

  check(val = null) {
    let { value } = this.props;
    if (val != null) {
      value = val;
    }
    const { name, check, required, locale, msgOnSuccess } = getDefaultValidationOption(this.props.validationOption);
    if (!check) {
      return;
    }
    if (!Message[locale] || !Message[locale][TYPE]) {
      console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
      return;
    }
    const Msg = Message[locale][TYPE];
    let nameText = name ? name : '';
    if (required) {
      if (isValidateValue(value)) {
        this.handleCheckEnd(true, Msg.empty ? Msg.empty(nameText) : '');
        return;
      }
    }
    if (msgOnSuccess) {
      this.setState({ successMsg: msgOnSuccess });
    }
    this.handleCheckEnd(false, msgOnSuccess);
  }

  handleCheckEnd(err, msg) {
    const { msgOnError } = getDefaultValidationOption(this.props.validationOption);
    if (err && msgOnError) {
      msg = msgOnError;
    }
    this.setState({ err, msg });
    const { validationCallback } = this.props;
    validationCallback && validationCallback(err);
  }

  render() {
    const {
      tabIndex,
      id,
      name,
      value,
      disabled,
      optionList,
      classNameWrapper,
      classNameContainer,
      classNameInput,
      classNameOptionListItem,
      customStyleWrapper,
      customStyleContainer,
      customStyleInput,
      customStyleOptionListItem,
      validationOption
    } = this.props;

    const { err, msg, successMsg } = this.state;

    const wrapperClass = cx(classNameWrapper, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__wrapper'], disabled && STYLES['disabled']);

    const containerClass = cx(classNameContainer, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__container'], disabled && STYLES['disabled']);

    const inputClass = cx(classNameInput, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__input'], disabled && STYLES['disabled']);

    const labelClass = cx(err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__label'], disabled && STYLES['disabled']);

    const optionListItemClass = cx(classNameOptionListItem, err && STYLES['error'], successMsg && !err && STYLES['success'], STYLES['radiobox__item'], disabled && STYLES['disabled']);

    const errMsgClass = cx(STYLES['msg'], err && STYLES['error']);
    const successMsgClass = cx(STYLES['msg'], !err && STYLES['success']);

    let msgHtml;
    const { showMsg } = getDefaultValidationOption(validationOption);
    if (showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (showMsg && !err && successMsg) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }

    let optionHtml;
    if (optionList.length) {
      optionHtml = optionList.map((i, k) => {
        let checked = String(i.id) == String(value) ? true : false;
        return (
          <div className={optionListItemClass} style={customStyleOptionListItem} key={k}>
            <input
              id={`${id}-${k}`}
              name={name}
              type="radio"
              value={value}
              checked={checked}
              disabled={disabled}
              className={checked ? `${STYLES['checked']} ${inputClass}` : `${inputClass}`}
              onChange={e => this.onChange(i.id, e)}
              style={customStyleInput}
            />
            <label htmlFor={`${id}-${k}`} className={checked ? `${STYLES['checked']} ${labelClass}` : `${labelClass}`}>
              {i.name}
            </label>
          </div>
        );
      });
    }

    return (
      <div id={id} tabIndex={tabIndex} className={wrapperClass} style={customStyleWrapper} onClick={this.onClick} onBlur={this.onBlur} onFocus={this.onFocus}>
        <div className={containerClass} style={customStyleContainer}>
          {optionHtml}
        </div>
        {msgHtml}
      </div>
    );
  }
}

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  disabled: false,
  optionList: [],
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  classNameOptionListItem: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  customStyleOptionListItem: {},
  validate: false,
  validationOption: {},
  onChange: () => {}
};

Index.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  optionList: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  validate: PropTypes.bool,
  validationOption: PropTypes.object,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameOptionListItem: PropTypes.string,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  customStyleInput: PropTypes.object,
  customStyleOptionListItem: PropTypes.object,
  validationCallback: PropTypes.func
};

export default Index;
