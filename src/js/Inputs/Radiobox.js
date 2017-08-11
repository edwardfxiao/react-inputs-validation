import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
let STYLES = {};
try {
  STYLES = require('./styles.css');
} catch (ex) {}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange() {
    const { onChange } = this.props;
    onChange && onChange(this.input.value);
  }

  onClick() {
    const { onClick } = this.props;
    onClick && onClick();
  }

  render() {
    const {
      tabIndex,
      id,
      name,
      value,
      checked,
      disabled,
      labelHtml,
      classNameWrapper,
      classNameContainer,
      classNameInput,
      customStyleWrapper,
      customStyleContainer,
      customStyleInput
    } = this.props;

    const wrapperClass = cx(
      classNameWrapper,
      STYLES['radiobox__wrapper'],
      disabled && STYLES['disabled']
    );

    const containerClass = cx(
      classNameContainer,
      STYLES['radiobox__container'],
      disabled && STYLES['disabled']
    );

    const inputClass = cx(
      classNameInput,
      STYLES['radiobox__input'],
      disabled && STYLES['disabled']
    );

    const labelClass = cx(
      STYLES['radiobox__label'],
      checked && STYLES['checked'],
      disabled && STYLES['disabled']
    );

    return (
      <div tabIndex={tabIndex} className={wrapperClass} style={customStyleWrapper}>
        <div className={containerClass} style={customStyleContainer}>
          <input
            id={id}
            name={name}
            type="radio"
            value={value}
            checked={checked}
            disabled={disabled}
            className={inputClass}
            onChange={this.onChange}
            style={customStyleInput}
            ref={ref => (this.input = ref)}
          />
          <label htmlFor={id} className={labelClass} onClick={this.onClick}>
            {labelHtml}
          </label>
        </div>
      </div>
    );
  }
}

Index.defaultProps = {
  tabIndex: -1,
  id: '',
  name: '',
  value: '',
  checked: false,
  disabled: false,
  labelHtml: undefined,
  classNameInput: '',
  classNameWrapper: '',
  classNameContainer: '',
  customStyleInput: {},
  customStyleWrapper: {},
  customStyleContainer: {},
  locale: 'zh-CN',
  onChange: () => {}
};

Index.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelHtml: PropTypes.element,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  locale: PropTypes.string,
  classNameWrapper: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameInput: PropTypes.string,
  customStyleWrapper: PropTypes.object,
  customStyleContainer: PropTypes.object,
  customStyleInput: PropTypes.object
};

export default Index;
