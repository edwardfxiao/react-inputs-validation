import * as React from 'react';
import message from './message';
import classnames from 'classnames';
import { REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE, DEFAULT_LOCALE } from './const';
import reactInputsValidationCss from './react-inputs-validation.css';
const TYPE = 'select';

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    const p = position || 0;
    return this.indexOf(searchString, p) === p;
  };
}

interface DefaultValidationOption {
  name?: string;
  check?: boolean;
  showMsg?: boolean;
  required?: boolean;
  locale?: string;
  msgOnError?: string;
  msgOnSuccess?: string;
}

const getDefaultValidationOption = (obj: DefaultValidationOption) => {
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
    msgOnSuccess,
  };
};

const isValidateValue = (value: any) => {
  const v = String(value);
  if (v === '' || v === 'null' || v === 'undefined') {
    return true;
  }
  return false;
};

interface OptionListItem {
  id: string;
  name: string;
}

interface Props {
  tabIndex?: string | number;
  id?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  validate?: boolean;
  optionList: OptionListItem[];
  onChange: (res: string, e: React.MouseEvent<HTMLDivElement> | Event) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement> | Event) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  validationOption?: object;
  selectHtml?: React.ReactNode;
  selectOptionListItemHtml?: React.ReactNode;
  classNameWrapper?: string;
  classNameContainer?: string;
  classNameSelect?: string;
  classNameOptionListContainer?: string;
  classNameDropdownIconOptionListItem?: string;
  classNameOptionListItem?: string;
  customStyleWrapper?: object;
  customStyleContainer?: object;
  customStyleSelect?: object;
  customStyleOptionListContainer?: object;
  customStyleDropdownIcon?: object;
  customStyleOptionListItem?: object;
  validationCallback?: (res: boolean) => void;
}

interface DefaultProps {
  tabIndex: string | number;
  id: string;
  name: string;
  value: string | number;
  disabled: boolean;
  validate: boolean;
  optionList: OptionListItem[];
  classNameWrapper: string;
  classNameContainer: string;
  classNameOptionListItem: string;
  classNameOptionListContainer: string;
  classNameDropdownIconOptionListItem: string;
  customStyleWrapper: object;
  customStyleContainer: object;
  customStyleOptionListItem: object;
  customStyleOptionListContainer: object;
  customStyleDropdownIcon: object;
  validationOption: object;
  onChange: (res: string, e: React.MouseEvent<HTMLDivElement> | Event) => void;
}

type PropsWithDefaults = Props & DefaultProps;

interface State {
  value: string;
  show: boolean;
  isTyping: boolean;
  err: boolean;
  msg: string;
  successMsg: undefined | string;
  keycodeList: number[];
  validate: boolean;
}

interface Node {
  [key: string]: any;
}

class Index extends React.Component<Props, State> {
  static defaultProps: Props = {
    tabIndex: -1,
    id: '',
    name: '',
    value: '',
    disabled: false,
    validate: false,
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
    onChange: () => {},
  };
  private wrapper: React.RefObject<HTMLInputElement>;
  private itemsWrapper: React.RefObject<HTMLInputElement>;
  private input: React.RefObject<HTMLInputElement>;
  private optionItems: React.RefObject<HTMLInputElement>[];
  private focus: boolean;
  private corrected: boolean;
  // TODO: find a better type
  private typingTimeout: any;
  private currentFocus: number | undefined;
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value,
      show: false,
      isTyping: false,
      err: false,
      msg: '',
      successMsg: undefined,
      keycodeList: [],
      validate: props.validate,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.wrapper = React.createRef();
    this.itemsWrapper = React.createRef();
    this.input = React.createRef();
    this.optionItems = [];
    this.focus = false;
    this.corrected = false;
    this.currentFocus = undefined;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.validate === true && prevState.validate === false) {
      return {
        validate: nextProps.validate,
      };
    }
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick);
    window.addEventListener('touchstart', this.pageClick);
    const node = this.wrapper.current;
    if (node) {
      node.addEventListener('keydown', this.onKeyDown);
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.show !== this.state.show) {
      if (this.state.show) {
        this.resetCurrentFocus();
      }
    }
    if (this.state.validate === true && prevState.validate === false) {
      this.check();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.pageClick);
    window.removeEventListener('touchstart', this.pageClick);
    const node = this.wrapper.current;
    if (node) {
      node.removeEventListener('keydown', this.onKeyDown);
    }
  }

  onChange(value: string, e: React.MouseEvent<HTMLDivElement> | Event) {
    const { onChange } = this.props;
    onChange && onChange(String(value), e);
    this.setState({ value });
    if (this.state.err) {
      this.setState({ err: false });
    } else {
      this.setState({ successMsg: undefined });
    }
  }

  onClick(e: React.MouseEvent<HTMLDivElement>) {
    const { onClick } = this.props;
    onClick && onClick(e);
  }

  onBlur(e: React.FocusEvent<HTMLElement> | Event) {
    const { onBlur } = this.props;
    if (onBlur) {
      this.check();
      onBlur(e);
    }
  }

  onFocus(e: React.FocusEvent<HTMLElement>) {
    this.focus = true;
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }
  }

  getIndex(list: OptionListItem[], val: string) {
    let key = -1;
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].id === val) {
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

  onKeyDown(e: any) {
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
    this.currentFocus = typeof this.currentFocus !== 'undefined' ? this.currentFocus : this.getIndex(optionList, value);
    let direction = undefined;
    const { keyCode } = e;
    const keyCodeEsc = 27;
    const keyCodeDown = 40;
    const keyCodeUp = 38;
    const keyCodeEnter = 13;
    const selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];
    if (selectKeyList.indexOf(keyCode) !== -1) {
      if (keyCode === keyCodeEsc) {
        this.setState({ show: false });
        this.resetCurrentFocus();
        return;
      }
      if (keyCode === keyCodeDown) {
        direction = 'down';
        this.currentFocus += 1;
        if (this.currentFocus > optionList.length - 1) {
          this.currentFocus = optionList.length - 1;
        }
        this.addActive();
      } else if (keyCode === keyCodeUp) {
        direction = 'up';
        this.currentFocus -= 1;
        if (this.currentFocus < 0) {
          this.currentFocus = 0;
        }
        this.addActive();
      } else if (keyCode === keyCodeEnter) {
        if (this.currentFocus > -1) {
          if (x) {
            const node: Node | null = x[this.currentFocus];
            if (node === null) {
              return;
            }
            node.current.click();
          }
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
          if (index === -1) {
            index = k;
          }
        }
      });
      if (index !== -1) {
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

  scroll(direction: undefined | string = undefined) {
    const itemsWrapperNode: Node | null = this.itemsWrapper;
    if (itemsWrapperNode === null) {
      return;
    }
    const containerHeight = itemsWrapperNode.current.offsetHeight;
    const containerScrollTop = itemsWrapperNode.current.scrollTop;
    if (!this.currentFocus || !this.optionItems[this.currentFocus]) {
      return;
    }
    const optionItemsNode: Node | null = this.optionItems[this.currentFocus];
    if (optionItemsNode === null) {
      return;
    }
    const itemHeight = optionItemsNode.current.offsetHeight;
    if (direction) {
      if (direction === 'down') {
        const bound = containerScrollTop + containerHeight;
        const heightItems = this.currentFocus * itemHeight;
        const heightContainer = bound - itemHeight;
        if (heightItems >= heightContainer) {
          const offset = Math.abs(heightItems - heightContainer - itemHeight);
          if (offset >= 0 && !this.corrected) {
            itemsWrapperNode.current.scrollTop = containerScrollTop + itemHeight - offset;
            this.corrected = true;
          } else {
            itemsWrapperNode.current.scrollTop = containerScrollTop + itemHeight;
          }
        }
      }
      if (direction === 'up') {
        this.corrected = false;
        if (this.currentFocus * itemHeight <= containerScrollTop) {
          itemsWrapperNode.current.scrollTop = this.currentFocus * itemHeight;
        }
      }
    } else {
      this.corrected = false;
      itemsWrapperNode.current.scrollTop = this.currentFocus * itemHeight;
    }
  }

  addActive() {
    const x = this.optionItems;
    if (!x) return false;
    this.removeActive();
    if (typeof this.currentFocus === 'undefined') return;
    if (this.currentFocus >= x.length) this.currentFocus = 0;
    if (this.currentFocus < 0) this.currentFocus = x.length - 1;
    const node: Node | null = x[this.currentFocus];
    if (node === null) {
      return;
    }
    node.current.className += ` ${reactInputsValidationCss['select__hover-active']}`;
  }

  removeActive() {
    const x = this.optionItems;
    for (let i = 0; i < x.length; i += 1) {
      const node: Node | null = x[i];
      if (node === null) {
        break;
      }
      node.current.className = node.current.className.replace(reactInputsValidationCss['select__hover-active'], '');
    }
  }

  pageClick(e: Event) {
    const node: Node | null = this.wrapper;
    if (node === null) {
      return;
    }
    if (node.current.contains(e.target)) {
      return;
    }
    if (this.focus) {
      this.onBlur(e);
      this.focus = false;
    }
    this.toggleShow(false);
  }

  toggleShow(show: boolean) {
    this.setState({ show });
  }

  check(val: null | string = null) {
    let { value } = this.state;
    if (val != null) {
      value = val;
    }
    const { validationOption } = this.props as PropsWithDefaults;
    const { name, check, required, locale, msgOnSuccess } = getDefaultValidationOption(validationOption);
    if (!check) {
      return;
    }
    if (!message[locale] || !message[locale][TYPE]) {
      console.error(REACT_INPUTS_VALIDATION_CUSTOM_ERROR_MESSAGE_EXAMPLE);
      return;
    }
    const msg = message[locale][TYPE];
    const nameText = name ? name : '';
    if (required) {
      if (isValidateValue(value)) {
        this.handleCheckEnd(true, msg.empty ? msg.empty(nameText) : '');
        return;
      }
    }
    if (msgOnSuccess) {
      this.setState({ successMsg: msgOnSuccess });
    }
    this.handleCheckEnd(false, msgOnSuccess);
  }

  handleCheckEnd(err: boolean, message: string) {
    let msg = message;
    const { validationOption } = this.props as PropsWithDefaults;
    const { msgOnError } = getDefaultValidationOption(validationOption);
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
      validationOption,
    } = this.props as PropsWithDefaults;

    const { value, err, msg, show, successMsg, isTyping } = this.state;

    const wrapperClass = classnames(classNameWrapper, reactInputsValidationCss['select__wrapper'], err && reactInputsValidationCss['error'], successMsg && !err && reactInputsValidationCss['success'], disabled && reactInputsValidationCss['disabled']);

    const containerClass = classnames(
      classNameContainer,
      reactInputsValidationCss['select__container'],
      err && reactInputsValidationCss['error'],
      show && reactInputsValidationCss['show'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const inputClass = classnames(reactInputsValidationCss['select__input'], err && reactInputsValidationCss['error'], successMsg && !err && reactInputsValidationCss['success'], disabled && reactInputsValidationCss['disabled']);

    const selectClass = classnames(
      classNameSelect,
      reactInputsValidationCss['ellipsis'],
      err && reactInputsValidationCss['error'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const selectOptionListContainerClass = classnames(
      classNameOptionListContainer,
      reactInputsValidationCss['select__options-container'],
      err && reactInputsValidationCss['error'],
      show && reactInputsValidationCss['show'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const selectOptionListItemClass = classnames(
      !isTyping && reactInputsValidationCss['select__options-item-show-cursor'],
      classNameOptionListItem,
      reactInputsValidationCss['select__options-item'],
      err && reactInputsValidationCss['error'],
      successMsg && !err && reactInputsValidationCss['success'],
      disabled && reactInputsValidationCss['disabled'],
    );

    const dropdownIconClass = classnames(classNameDropdownIconOptionListItem, reactInputsValidationCss['select__dropdown-icon']);

    const errMsgClass = classnames(reactInputsValidationCss['msg'], err && reactInputsValidationCss['error']);
    const successMsgClass = classnames(reactInputsValidationCss['msg'], !err && reactInputsValidationCss['success']);

    let msgHtml;
    const { showMsg } = getDefaultValidationOption(validationOption);

    if (showMsg && err && msg) {
      msgHtml = <div className={errMsgClass}>{msg}</div>;
    }
    if (showMsg && !err && successMsg) {
      msgHtml = <div className={successMsgClass}>{successMsg}</div>;
    }
    let optionListHtml;
    let item: OptionListItem | undefined;
    optionList.filter(i => {
      if (String(i.id) === String(value)) {
        item = i;
      }
    });
    if (optionList.length) {
      if (selectOptionListItemHtml) {
        optionListHtml = selectOptionListItemHtml;
      } else {
        optionListHtml = optionList.map((i, k) => {
          this.optionItems[k] = React.createRef();
          return (
            <div
              ref={this.optionItems[k]}
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
              className={String(i.id) === String(value) ? `${selectOptionListItemClass} ${reactInputsValidationCss['active']}` : `${selectOptionListItemClass}`}
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
        <div className={reactInputsValidationCss['select__dropdown']}>
          <div className={`${reactInputsValidationCss['select__dropdown-name']} ${reactInputsValidationCss['ellipsis']}`}>{item ? item.name : ''}</div>
          <div className={dropdownIconClass} />
        </div>
      );
    }
    return (
      <div
        tabIndex={Number(tabIndex)}
        id={reactInputsValidationCss['select__wrapper']}
        className={wrapperClass}
        style={customStyleWrapper}
        onClick={e => {
          this.onClick(e);
          !disabled ? this.toggleShow(!show) : ``;
        }}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={this.wrapper}
      >
        <div className={containerClass} style={customStyleContainer}>
          <input id={id} name={name} type="hidden" value={value} className={inputClass} onChange={() => {}} ref={this.input} />
          <div className={selectClass} style={customStyleSelect}>
            {selectorHtml}
          </div>
          <div ref={this.itemsWrapper} className={selectOptionListContainerClass} style={customStyleOptionListContainer}>
            {optionListHtml}
          </div>
        </div>
        {msgHtml}
      </div>
    );
  }
}

export default Index;
