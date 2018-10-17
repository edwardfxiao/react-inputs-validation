import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Message from './message';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
let STYLES = {};
try {
  STYLES = require('./react-inputs-validation.css');
} catch (ex) {}
const TYPE = 'select';
const getDefaultValidationOption = obj => {
  let { name, check, required, showMsg, locale, msgOnError, msgOnSuccess } = obj;
  locale = typeof locale !== 'undefined' ? locale : DEFAULT_LOCALE;
  name = typeof name !== 'undefined' ? name : '';
  check = typeof check !== 'undefined' ? check : true;
  showMsg = typeof showMsg !== 'undefined' ? showMsg : true;
  required = typeof required !== 'undefined' ? required : true;
  msgOnSuccess = typeof msgOnSuccess !== 'undefined' ? msgOnSuccess : '';
  msgOnError = typeof msgOnError !== 'undefined' ? msgOnError : '';
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

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      show: false,
      isTyping: false,
      err: false,
      msg: '',
      successMsg: undefined,
      keycodeList: []
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
    this.optionItems = [];
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick);
    window.addEventListener('touchstart', this.pageClick);
    this.wrapper.addEventListener('keydown', this.onKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.show != this.state.show) {
      if (this.state.show) {
        this.resetCurrentFocus();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.pageClick);
    window.removeEventListener('touchstart', this.pageClick);
    this.wrapper.removeEventListener('keydown', this.onKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validate == false && nextProps.validate == true) {
      this.check();
    }
    if (String(this.props.value) != String(nextProps.value)) {
      this.setState({
        value: nextProps.value,
        err: false,
        successMsg: undefined
      });
    }
  }

  onChange(value, e) {
    const { onChange } = this.props;
    onChange && onChange(value, e);
    this.setState({ value });
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
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

  getIndex(list, val) {
    let key = -1;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == val) {
        key = i;
        break;
      }
    }
    return key;
  }

  resetCurrentFocus() {
    const { value } = this.state;
    const { optionList } = this.props;
    this.currentFocus = this.getIndex(optionList, value);
    this.scroll();
  }

  onKeyDown(e) {
    this.setState({ isTyping: true });
    if (e.preventDefault) {
      e.preventDefault();
    }
    const { show, value } = this.state;
    if (!show) {
      return;
    }
    const x = this.optionItems;
    const { optionList } = this.props;
    this.currentFocus = typeof this.currentFocus != 'undefined' ? this.currentFocus : this.getIndex(optionList, value);
    let direction = null;
    const { keyCode } = e;
    const keyCodeEsc = 27;
    const keyCodeDown = 40;
    const keyCodeUp = 38;
    const keyCodeEnter = 13;
    const selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];
    if (selectKeyList.indexOf(keyCode) != -1) {
      if (keyCode == keyCodeEsc) {
        this.setState({ show: false });
        this.resetCurrentFocus();
        return;
      }
      if (keyCode == keyCodeDown) {
        direction = 'down';
        this.currentFocus++;
        if (this.currentFocus > optionList.length - 1) {
          this.currentFocus = optionList.length - 1;
        }
        this.addActive();
      } else if (keyCode == keyCodeUp) {
        direction = 'up';
        this.currentFocus--;
        if (this.currentFocus < 0) {
          this.currentFocus = 0;
        }
        this.addActive();
      } else if (keyCode == keyCodeEnter) {
        if (this.currentFocus > -1) {
          if (x) x[this.currentFocus].click();
        }
      }
    } else {
      const { keycodeList } = this.state;
      if (!(keyCode >= 48 || keyCode <= 57 || keyCode >= 65 || keyCode <= 90 || keyCode >= 96 || keyCode <= 105)) {
        return;
      }
      this.setTimeoutTyping();
      const newkeyCodeList = [...keycodeList, keyCode];
      const str = String.fromCharCode(...newkeyCodeList).toLowerCase();
      let index = -1;
      optionList.filter((i, k) => {
        const { name } = i;
        if (name.toLowerCase().startsWith(str)) {
          if (index == -1) {
            index = k;
          }
        }
      });
      if (index != -1) {
        this.currentFocus = index;
        this.addActive();
      }
      this.setState({ keycodeList: newkeyCodeList });
    }
    this.scroll(direction);
    return this.currentFocus;
  }

  setTimeoutTyping() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    this.typingTimeout = setTimeout(() => {
      this.setState({ keycodeList: [] });
    }, 250);
  }

  scroll(direction) {
    const containerHeight = this.itemsWrapper.offsetHeight;
    const containerScrollTop = this.itemsWrapper.scrollTop;
    if (!this.optionItems[this.currentFocus]) {
      return;
    }
    const itemHeight = this.optionItems[this.currentFocus].offsetHeight;
    if (direction) {
      if (direction == 'down') {
        const bound = containerScrollTop + containerHeight;
        const heightItems = this.currentFocus * itemHeight;
        const heightContainer = bound - itemHeight;
        if (heightItems >= heightContainer) {
          const offset = Math.abs(heightItems - heightContainer - itemHeight);
          if (offset >= 0 && !this.corrected) {
            this.itemsWrapper.scrollTop = containerScrollTop + itemHeight - offset;
            this.corrected = true;
          } else {
            this.itemsWrapper.scrollTop = containerScrollTop + itemHeight;
          }
        }
      }
      if (direction == 'up') {
        this.corrected = false;
        if (this.currentFocus * itemHeight <= containerScrollTop) {
          this.itemsWrapper.scrollTop = this.currentFocus * itemHeight;
        }
      }
    } else {
      this.corrected = false;
      this.itemsWrapper.scrollTop = this.currentFocus * itemHeight;
    }
  }

  addActive() {
    const x = this.optionItems;
    if (!x) return false;
    this.removeActive();
    if (this.currentFocus >= x.length) this.currentFocus = 0;
    if (this.currentFocus < 0) this.currentFocus = x.length - 1;
    x[this.currentFocus].className += ' ' + STYLES['select__hover-active'];
  }

  removeActive() {
    const x = this.optionItems;
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(STYLES['select__hover-active'], '');
    }
  }

  pageClick(e) {
    if (this.wrapper.contains(e.target)) {
      return;
    }
    if (this.focus) {
      this.onBlur();
      this.focus = false;
    }
    this.toggleShow(false);
  }

  toggleShow(show) {
    this.setState({ show });
  }

  check(val = null) {
    let { value } = this.state;
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
      optionList,
      disabled,
      classNameWrapper,
      classNameContainer,
      classNameSelect,
      classNameOptionListContainer,
      classNameOptionListItem,
      classNameDropdownIconOptionListItem,
      customStyleWrapper,
      customStyleContainer,
      customStyleSelect,
      customStyleOptionListContainer,
      customStyleOptionListItem,
      selectHtml,
      selectOptionListItemHtml,
      validationOption
    } = this.props;

    const { value, err, msg, show, successMsg, isTyping } = this.state;

    const wrapperClass = cx(classNameWrapper, STYLES['select__wrapper'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const containerClass = cx(classNameContainer, STYLES['select__container'], err && STYLES['error'], show && STYLES['show'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const inputClass = cx(STYLES['select__input'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const selectClass = cx(classNameSelect, STYLES['ellipsis'], STYLES['select__dropdown-menu'], err && STYLES['error'], successMsg && !err && STYLES['success'], disabled && STYLES['disabled']);

    const selectOptionListContainerClass = cx(
      classNameOptionListContainer,
      STYLES['select__options-container'],
      err && STYLES['error'],
      show && STYLES['show'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const selectOptionListItemClass = cx(
      !isTyping && STYLES['select__options-item-show-cursor'],
      classNameOptionListItem,
      STYLES['select__options-item'],
      err && STYLES['error'],
      successMsg && !err && STYLES['success'],
      disabled && STYLES['disabled']
    );

    const dropdownIconClass = cx(classNameDropdownIconOptionListItem, STYLES['select__dropdown-icon']);

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
    let optionListHtml;
    let item;
    optionList.filter(i => {
      if (String(i.id) == String(value)) {
        item = i;
      }
    });
    if (optionList.length) {
      if (selectOptionListItemHtml) {
        optionListHtml = selectOptionListItemHtml;
      } else {
        optionListHtml = optionList.map((i, k) => {
          return (
            <div
              ref={ref => (this.optionItems[k] = ref)}
              onMouseOver={() => {
                this.currentFocus = k;
                this.addActive();
              }}
              onMouseMove={() => {
                this.setState({ isTyping: false });
              }}
              onMouseOut={() => {
                this.removeActive();
              }}
              className={String(i.id) == String(value) ? `${selectOptionListItemClass} ${STYLES['active']}` : `${selectOptionListItemClass}`}
              key={k}
              style={customStyleOptionListItem}
              onClick={e => {
                this.onChange(i.id, e);
              }}
            >
              {i.name}
            </div>
          );
        });
      }
    }
    let selectorHtml = selectHtml;
    if (!selectorHtml) {
      selectorHtml = (
        <div className={STYLES['select__dropdown']}>
          <div className={`${STYLES['select__dropdown-name']} ${STYLES['ellipsis']}`}>{item.name}</div>
          <div className={dropdownIconClass} />
        </div>
      );
    }
    return (
      <div
        tabIndex={tabIndex}
        id={STYLES['select__wrapper']}
        className={wrapperClass}
        style={customStyleWrapper}
        onClick={e => {
          this.onClick(e);
          !disabled ? this.toggleShow(!show) : ``;
        }}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={ref => (this.wrapper = ref)}
      >
        <div className={containerClass} style={customStyleContainer}>
          <input id={id} name={name} type="hidden" value={value} className={inputClass} onChange={() => {}} ref={ref => (this.input = ref)} />
          <div className={selectClass} style={customStyleSelect}>
            {selectorHtml}
          </div>
          <div ref={ref => (this.itemsWrapper = ref)} className={selectOptionListContainerClass} style={customStyleOptionListContainer}>
            {optionListHtml}
          </div>
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
  classNameWrapper: '',
  classNameContainer: '',
  classNameOptionListItem: '',
  classNameOptionListContainer: '',
  classNameDropdownIconOptionListItem: '',
  customStyleWrapper: {},
  customStyleContainer: {},
  customStyleOptionListItem: {},
  customStyleOptionListContainer: {},
  customStyleDropdownIcon: {},
  validationOption: {},
  onChange: () => {}
};

Index.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  validate: PropTypes.bool,
  optionList: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  validationOption: PropTypes.object,
  locale: PropTypes.string,
  selectHtml: PropTypes.element,
  selectOptionListItemHtml: PropTypes.array,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameSelect: PropTypes.string,
  classNameOptionListContainer: PropTypes.string,
  classNameDropdownIconOptionListItem: PropTypes.string,
  classNameOptionListItem: PropTypes.string,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  customStyleSelect: PropTypes.object,
  customStyleOptionListContainer: PropTypes.object,
  customStyleDropdownIcon: PropTypes.object,
  customStyleOptionListItem: PropTypes.object,
  validationCallback: PropTypes.func
};

export default Index;
